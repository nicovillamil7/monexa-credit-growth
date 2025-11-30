import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LeadSubmissionForm from "@/components/LeadSubmissionForm";

const Apply = () => {
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get("type") || "get-funded";

  // Normalize service type from URL parameter
  const normalizedServiceType = serviceType === "credit-repair" ? "credit-repair" : "get-funded";

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Apply Now | Fast Credit & Funding Application | Monexa"
        description="Apply for credit repair, personal loans, or credit cards in minutes. Fast approval, secure application, and free credit review. Get started today!"
        keywords="apply for loan, credit application, loan application, apply credit card, credit repair application, fast loan approval"
      />
      <Header />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for Services</h1>
              <p className="text-lg text-muted-foreground">
                Complete your application in just a few minutes
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <LeadSubmissionForm 
                defaultServiceType={normalizedServiceType} 
                variant="default"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
