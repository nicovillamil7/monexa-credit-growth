import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Privacy Policy | Monexa"
        description="Learn how Monexa collects, uses, and protects your personal information. Your privacy and data security are our top priority."
        keywords="privacy policy, data protection, monexa privacy, personal information"
      />
      <Header />

      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: March 19, 2026</p>

          <div className="prose prose-sm max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Personal identifiers (name, email address, phone number)</li>
                <li>Financial information (credit score range, income, funding goals)</li>
                <li>Application data submitted through our forms</li>
                <li>Communication records between you and our team</li>
                <li>Device and usage information collected automatically</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Provide and improve our credit optimization services</li>
                <li>Match you with appropriate financial products and lenders</li>
                <li>Communicate with you about your account and services</li>
                <li>Process applications and facilitate transactions</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Detect and prevent fraud or unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your information with trusted third-party service providers who assist in delivering our services, financial institutions and lenders when you apply for products, credit bureaus as part of the credit optimization process, and legal authorities when required by law or to protect our rights. All third-party partners are contractually obligated to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information, including encryption of data in transit and at rest, secure server infrastructure, regular security assessments and monitoring, and employee training on data protection practices. While we strive to protect your data, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To exercise these rights, contact us through the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and similar tracking technologies to improve your experience, analyze site traffic, and understand usage patterns. You can control cookie preferences through your browser settings. Disabling cookies may limit some functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. California Privacy Rights (CCPA)</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to request deletion, and the right to opt out of the sale of personal information. We do not sell personal information as defined by the CCPA.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have collected information from a minor, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When data is no longer needed, it is securely deleted or anonymized. You may request earlier deletion subject to our legal and regulatory requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of material changes by posting the updated policy on our website with a revised "Last updated" date. We encourage you to review this policy regularly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions or concerns about this Privacy Policy or our data practices, please contact us through our website. We will respond to all privacy-related inquiries within 30 days.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
