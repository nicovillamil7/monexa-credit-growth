import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Disclosures = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Disclosures | Monexa"
        description="Important disclosures about Monexa credit optimization and financial services. Understand your rights and our obligations."
        keywords="disclosures, credit services disclosures, financial disclosures, CROA disclosure"
      />
      <Header />

      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Disclosures</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 19, 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">General Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Monexa is a credit services organization. We are not a law firm, lender, credit bureau, or credit reporting agency. The information provided on this website is for general informational purposes only and should not be construed as legal or financial advice. We recommend consulting with qualified professionals for advice specific to your situation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Credit Repair Organizations Act (CROA) Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As required by the Credit Repair Organizations Act (15 U.S.C. 1679 et seq.), we provide the following disclosure:
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-6 space-y-3">
                <p className="text-foreground font-medium">Your Rights Under Federal Law:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You have the right to dispute inaccurate information in your credit report by contacting the credit bureau directly at no charge.</li>
                  <li>No one can legally remove accurate and timely negative information from a credit report.</li>
                  <li>You have a right to obtain a free copy of your credit report from each of the three major credit bureaus once every 12 months at <span className="text-primary font-medium">AnnualCreditReport.com</span>.</li>
                  <li>You have the right to cancel your contract with any credit repair organization for any reason within 3 business days from the date you signed it.</li>
                  <li>A credit repair organization cannot require you to pay until the service has been fully performed.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Results Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Individual results vary and are not guaranteed. Credit score improvements depend on your unique credit profile, the nature of items on your credit report, and responses from credit bureaus and creditors. Past performance and testimonials do not guarantee future results. The statistics and numbers shared on our website represent aggregate data from our client base and should not be interpreted as a promise of specific outcomes for any individual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Lending Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Monexa is not a lender and does not make credit decisions. We connect consumers with third-party lenders and financial institutions. Loan approval, terms, and conditions are determined solely by the lending institution. Interest rates, fees, and repayment terms vary by lender, product, and your individual creditworthiness. Not all applicants will qualify for all products advertised.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Credit Card Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Credit card offers displayed on our website are from third-party issuers. Monexa may receive compensation when you apply for or are approved for a credit card through our recommendations. Card terms, rates, fees, and rewards are determined by the issuing bank and may change at any time. Always review the card's terms and conditions before applying.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Trade Line Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trade line services involve being added as an authorized user on an existing credit account. Results depend on the specific account, credit bureau reporting practices, and your overall credit profile. Trade lines are not a guarantee of credit score improvement. The impact of trade lines varies by individual and credit scoring model.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Advertising Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some of the products and services featured on this website are from companies that compensate us. This compensation may impact how and where products appear on our site. We strive to provide accurate and objective information, but compensation may influence the products we review and the order in which they are presented.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Equal Opportunity</h2>
              <p className="text-muted-foreground leading-relaxed">
                Monexa is committed to providing equal access to services regardless of race, color, religion, national origin, sex, marital status, age, or any other protected characteristic. We comply with the Equal Credit Opportunity Act (ECOA) and all applicable fair lending laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">State-Specific Disclosures</h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain states have additional requirements for credit services organizations. If you reside in a state with specific regulations, additional disclosures may apply. Please contact us for state-specific information relevant to your location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these disclosures or your rights, please contact us through our website or reach out to our support team. You may also contact the Federal Trade Commission (FTC) at <span className="text-primary font-medium">ftc.gov</span> or your state's attorney general office for additional information about your rights.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclosures;
