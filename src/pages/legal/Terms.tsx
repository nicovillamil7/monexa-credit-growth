import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Terms of Service | Monexa"
        description="Read the terms and conditions for using Monexa credit optimization and funding services."
        keywords="terms of service, monexa terms, credit services terms"
      />
      <Header />

      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 19, 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the Monexa website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. Monexa reserves the right to update these terms at any time, and continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Monexa provides credit optimization services, personal loan matching, credit card recommendations, and trade line services. We act as an intermediary connecting consumers with financial products and credit improvement strategies. Monexa is not a lender, bank, or credit bureau. We do not make credit decisions or guarantee loan approvals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 18 years of age and a legal resident of the United States to use our services. By submitting an application, you represent that all information provided is accurate and complete. Providing false or misleading information may result in termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Credit Optimization Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our credit optimization services comply with the Credit Repair Organizations Act (CROA) and all applicable federal and state laws. You have the right to dispute inaccurate information on your credit report directly with credit bureaus at no cost. Results vary by individual and are not guaranteed. We do not guarantee specific credit score increases or loan approvals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Fees and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Service fees will be clearly disclosed before you commit to any paid services. You will not be charged until services have been performed. You may cancel services at any time without penalty. Refund policies for specific services will be outlined in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Your Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to provide accurate and truthful information, respond to requests for documentation in a timely manner, review all communications and documents we send you, and notify us of any changes to your contact information. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Monexa shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the specific service giving rise to the claim. We are not responsible for actions taken by third-party lenders, credit bureaus, or financial institutions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on the Monexa website, including text, graphics, logos, and software, is the property of Monexa and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from our content without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate the service relationship at any time with written notice. Upon termination, any outstanding fees for services already rendered remain due. We reserve the right to suspend or terminate access for violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the United States and the state in which Monexa operates. Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us through our website or reach out to our support team. We aim to respond to all inquiries within 2 business days.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
