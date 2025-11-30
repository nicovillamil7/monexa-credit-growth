// Supabase Edge Function to send lead data to Google Sheets
// This function is triggered when a new lead is inserted into the funding_leads table

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

interface LeadData {
  id: string;
  service_type: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  credit_score: string;
  credit_profile: string[];
  funding_goal?: number;
  applicant_type?: string;
  yearly_revenue?: string;
  terms_accepted: boolean;
  created_at: string;
}

// Helper function to get Google OAuth2 access token
async function getAccessToken(serviceAccountKey: any): Promise<string> {
  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: serviceAccountKey.client_email,
    scope: SCOPES.join(" "),
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  // Create JWT
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedClaim = btoa(JSON.stringify(claim));
  const signatureInput = `${encodedHeader}.${encodedClaim}`;

  // Import private key
  const privateKey = serviceAccountKey.private_key;
  const keyData = privateKey
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\n/g, "");

  const binaryKey = Uint8Array.from(atob(keyData), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["sign"]
  );

  // Sign the JWT
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(signatureInput)
  );

  const encodedSignature = btoa(
    String.fromCharCode(...new Uint8Array(signature))
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  const jwt = `${encodedHeader}.${encodedClaim}.${encodedSignature}`;

  // Exchange JWT for access token
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

// Helper function to append row to Google Sheet
async function appendToSheet(
  spreadsheetId: string,
  values: any[],
  accessToken: string
): Promise<void> {
  const range = "Sheet1!A:L"; // Adjust range based on your sheet structure

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [values],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to append to sheet: ${error}`);
  }
}

// Format lead data for Google Sheets
function formatLeadForSheet(lead: LeadData): any[] {
  return [
    new Date(lead.created_at).toLocaleString(), // Timestamp
    lead.service_type === "credit-repair" ? "Credit Repair" : "Get Funded", // Service Type
    lead.first_name, // First Name
    lead.last_name, // Last Name
    lead.email, // Email
    lead.phone, // Phone
    lead.credit_score, // Credit Score
    lead.credit_profile.join(", "), // Credit Profile (comma-separated)
    lead.funding_goal || "", // Funding Goal (empty for credit repair)
    lead.applicant_type || "", // Applicant Type (empty for credit repair)
    lead.yearly_revenue || "", // Yearly Revenue (empty for credit repair)
    lead.terms_accepted ? "Yes" : "No", // Terms Accepted
  ];
}

serve(async (req) => {
  try {
    // Parse the webhook payload from Supabase
    const payload = await req.json();
    console.log("Received webhook payload:", payload);

    // Extract the lead data from the payload
    const lead: LeadData = payload.record;

    // Get environment variables
    const serviceAccountKeyStr = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_KEY");
    const spreadsheetId = Deno.env.get("GOOGLE_SPREADSHEET_ID");

    if (!serviceAccountKeyStr || !spreadsheetId) {
      throw new Error("Missing required environment variables");
    }

    // Parse service account key
    const serviceAccountKey = JSON.parse(serviceAccountKeyStr);

    // Get access token
    console.log("Getting access token...");
    const accessToken = await getAccessToken(serviceAccountKey);

    // Format lead data
    const rowData = formatLeadForSheet(lead);

    // Append to Google Sheet
    console.log("Appending to Google Sheet...");
    await appendToSheet(spreadsheetId, rowData, accessToken);

    console.log("Successfully added lead to Google Sheet");

    return new Response(
      JSON.stringify({ success: true, message: "Lead added to Google Sheet" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

