# Universal Form Implementation Guide

This document explains the implementation of the universal lead submission form that handles both Credit Repair and Get Funded service types.

## Overview

The `LeadSubmissionForm` component is a multi-step form that dynamically adapts based on the service type selected by the user. It's used across multiple pages in the application.

## Features

- **Dynamic Service Type Selection**: Users can choose between "Credit Repair" and "Get Funded"
- **Conditional Fields**: Form fields change based on the selected service type
- **Dynamic Steps**: Number of steps varies by service type
  - Credit Repair: 3 steps (Service Selection → Credit Info → Contact Info)
  - Get Funded: 4 steps (Service Selection → Funding Details → Credit Info → Contact Info)
- **Form Validation**: Zod schema with conditional validation
- **Database Integration**: Saves to Supabase `funding_leads` table
- **Google Sheets Integration**: Automatically exports leads to Google Sheets

## Component Usage

### Basic Usage

```tsx
import LeadSubmissionForm from "@/components/LeadSubmissionForm";

<LeadSubmissionForm 
  defaultServiceType="get-funded" 
  variant="default"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultServiceType` | `string` | `"get-funded"` | Pre-fills the service type. Accepts: `"credit-repair"` or `"get-funded"` |
| `variant` | `"default"` \| `"embedded"` | `"default"` | Visual variant of the form |
| `onSuccess` | `() => void` | `undefined` | Callback function called after successful submission |

## Pages Using the Form

### 1. Credit Repair Page
**File**: `src/pages/Repair.tsx`
**Service Type**: `credit-repair`

```tsx
<LeadSubmissionForm 
  defaultServiceType="credit-repair" 
  variant="embedded" 
/>
```

### 2. Personal Loans Page
**File**: `src/pages/PersonalLoans.tsx`
**Service Type**: `get-funded`

```tsx
<LeadSubmissionForm 
  defaultServiceType="get-funded" 
  variant="embedded" 
/>
```

### 3. Credit Cards Page
**File**: `src/pages/CreditCards.tsx`
**Service Type**: `get-funded`

```tsx
<LeadSubmissionForm 
  defaultServiceType="get-funded" 
  variant="embedded" 
/>
```

### 4. Trade Line Page
**File**: `src/pages/TradeLine.tsx`
**Service Type**: `get-funded`

```tsx
<LeadSubmissionForm 
  defaultServiceType="get-funded" 
  variant="embedded" 
/>
```

### 5. Apply Now Page
**File**: `src/pages/Apply.tsx`
**Service Type**: Dynamic based on URL parameter

```tsx
const serviceType = searchParams.get("type") || "get-funded";
const normalizedServiceType = serviceType === "credit-repair" ? "credit-repair" : "get-funded";

<LeadSubmissionForm 
  defaultServiceType={normalizedServiceType} 
  variant="default" 
/>
```

Access via URL:
- `/apply` - Defaults to "get-funded"
- `/apply?type=credit-repair` - Opens with "credit-repair" pre-selected
- `/apply?type=get-funded` - Opens with "get-funded" pre-selected

## Form Fields by Service Type

### Credit Repair Flow

**Step 1: Service Selection**
- Service Type (Radio Group)

**Step 2: Credit Information**
- Credit Score (Radio Group)
- Credit Profile / Negative Items (Checkboxes)

**Step 3: Contact Information**
- First Name
- Last Name
- Email
- Phone
- Terms Acceptance

### Get Funded Flow

**Step 1: Service Selection**
- Service Type (Radio Group)

**Step 2: Funding Details**
- Funding Goal (Currency Input)
- Applicant Type (Individual/Business Radio Group)
- Yearly Revenue (Select)

**Step 3: Credit Information**
- Credit Score (Radio Group)
- Credit Profile / Negative Items (Checkboxes)

**Step 4: Contact Information**
- First Name
- Last Name
- Email
- Phone
- Terms Acceptance

## Database Schema

### Table: `funding_leads`

| Column | Type | Nullable | Description |
|--------|------|----------|-------------|
| `id` | UUID | No | Primary key |
| `service_type` | TEXT | No | "credit-repair" or "get-funded" |
| `funding_goal` | INTEGER | Yes | Only for get-funded |
| `applicant_type` | TEXT | Yes | Only for get-funded |
| `yearly_revenue` | TEXT | Yes | Only for get-funded |
| `credit_score` | TEXT | No | Credit score range |
| `credit_profile` | TEXT[] | No | Array of negative items |
| `first_name` | TEXT | No | User's first name |
| `last_name` | TEXT | No | User's last name |
| `email` | TEXT | No | User's email |
| `phone` | TEXT | No | User's phone |
| `terms_accepted` | BOOLEAN | No | Terms acceptance |
| `created_at` | TIMESTAMP | No | Submission timestamp |

### Constraints

- Funding fields (`funding_goal`, `applicant_type`, `yearly_revenue`) are required only when `service_type = 'get-funded'`
- Service type must be either `'credit-repair'` or `'get-funded'`

## Google Sheets Integration

When a lead is submitted:

1. Form data is saved to Supabase `funding_leads` table
2. Database webhook/trigger calls the Edge Function `send-to-google-sheets`
3. Edge Function formats the data and appends it to Google Sheets
4. Sheet columns:
   - Timestamp
   - Service Type
   - First Name
   - Last Name
   - Email
   - Phone
   - Credit Score
   - Credit Profile
   - Funding Goal (empty for credit repair)
   - Applicant Type (empty for credit repair)
   - Yearly Revenue (empty for credit repair)
   - Terms Accepted

## Testing the Form

### Local Testing

1. Start the development server:
```bash
npm run dev
```

2. Navigate to any page with the form:
   - http://localhost:5173/repair
   - http://localhost:5173/funding/personal-loans
   - http://localhost:5173/funding/credit-cards
   - http://localhost:5173/funding/trade-line
   - http://localhost:5173/apply

3. Test both flows:
   - Select "Credit Repair" and complete the form
   - Select "Get Funded" and complete the form

4. Verify data in Supabase:
   - Go to Supabase dashboard > Table Editor > funding_leads
   - Check that the data was saved correctly

5. Verify Google Sheets (after setup):
   - Check that new rows appear in the Google Sheet
   - Verify all data is correctly formatted

### Manual Test Cases

#### Test Case 1: Credit Repair Flow
1. Open repair page or apply page with credit-repair
2. Select "Credit Repair - Fix my credit score"
3. Click Next
4. Select a credit score range
5. Select at least one credit profile item
6. Click Next
7. Fill in contact information
8. Accept terms
9. Submit
10. ✅ Verify success message
11. ✅ Verify data in Supabase (funding fields should be null)
12. ✅ Verify data in Google Sheets

#### Test Case 2: Get Funded Flow
1. Open any funding page (personal loans, credit cards, trade line) or apply page
2. Select "Get Funded - I need business funding"
3. Click Next
4. Enter funding goal (e.g., 50,000)
5. Select applicant type (Individual or Business)
6. Select yearly revenue range
7. Click Next
8. Select a credit score range
9. Select at least one credit profile item
10. Click Next
11. Fill in contact information
12. Accept terms
13. Submit
14. ✅ Verify success message
15. ✅ Verify data in Supabase (all fields populated)
16. ✅ Verify data in Google Sheets

#### Test Case 3: Form Validation
1. Try to proceed without filling required fields
2. ✅ Verify validation errors appear
3. ✅ Verify can't proceed to next step with invalid data

#### Test Case 4: Service Type Switching
1. Select "Get Funded"
2. Switch to "Credit Repair"
3. ✅ Verify form updates correctly
4. ✅ Verify funding fields are not shown
5. Switch back to "Get Funded"
6. ✅ Verify funding fields reappear

## Troubleshooting

### Form doesn't submit
- Check browser console for errors
- Verify Supabase connection in `/src/integrations/supabase/client.ts`
- Check that all required fields are filled

### Data not appearing in database
- Verify Supabase project is running
- Check Row Level Security policies on `funding_leads` table
- Verify the insert policy allows anonymous inserts

### Google Sheets not updating
- Follow GOOGLE_SHEETS_SETUP.md for configuration
- Check Edge Function logs in Supabase dashboard
- Verify webhook is enabled and pointing to correct URL
- Ensure service account has editor access to the sheet

## Future Enhancements

- [ ] Add email notifications to team when leads are submitted
- [ ] Implement lead scoring based on creditworthiness
- [ ] Add analytics tracking for form completion rates
- [ ] Create admin dashboard to view and manage leads
- [ ] Add file upload for credit reports
- [ ] Implement multi-language support
- [ ] Add progress save/resume functionality

## Support

For questions or issues with the form:
1. Check this documentation
2. Review the code in `src/components/LeadSubmissionForm.tsx`
3. Check Supabase logs for backend errors
4. Review Edge Function logs for Google Sheets integration issues

