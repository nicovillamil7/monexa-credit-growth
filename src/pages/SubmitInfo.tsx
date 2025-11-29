import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadSubmissionForm from "@/components/LeadSubmissionForm";

export default function SubmitInfo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Submit Your Information</h1>
            <p className="text-muted-foreground">Complete the form below to get started with your application</p>
          </div>
          <LeadSubmissionForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
