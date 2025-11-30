import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Shield, Users, TrendingUp, Award, Clock } from "lucide-react";
import monexaLogo from "@/assets/monexa-logo.png";
import businessGrowth from "@/assets/business-growth.jpg";
import personalLoansHero from "@/assets/personal-loans-hero.jpg";
import homeImprovement from "@/assets/home-improvement.jpg";
import cardUsage from "@/assets/card-usage.jpg";
import travelRewards from "@/assets/travel-rewards.jpg";

// Structured data for About page
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Monexa",
  "alternateName": "Monexa Credit Repair & Funding",
  "description": "Trusted credit repair and funding services helping people improve credit scores, access personal loans, credit cards, and achieve financial freedom.",
  "url": "https://monexa.com/about",
  "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/XywMxhqpYLTRD9hg4YTpmD5QQxx2/uploads/1762646067243-monexa-logo-light.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "12000"
  },
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": "English"
  }
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Monexa | Trusted Credit Repair & Funding Company"
        description="Discover how Monexa helps 12,000+ people improve credit scores and access funding. CROA compliant, SOC 2 certified. $56M+ in loans processed, 140M+ credit points increased."
        keywords="about monexa, credit repair company, trusted credit repair, financial services, CROA compliant, SOC 2 certified, credit repair experts, personal loan company, credit funding services"
        structuredData={aboutPageSchema}
      />
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <img src={monexaLogo} alt="Monexa Logo - Trusted Credit Repair and Funding Company" className="h-20 md:h-24 w-auto mb-8 drop-shadow-lg" width="200" height="96" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Helping 12,000+ People Achieve<br />Amazing Credit Results
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We believe everyone deserves financial freedom. Our expert credit repair services help you unlock opportunities for loans, mortgages, and better rates through improved credit scores.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$56M+</div>
                <div className="text-sm text-muted-foreground">Personal Loans Processed</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">140M+</div>
                <div className="text-sm text-muted-foreground">Credit Score Points Increased</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">12K+</div>
                <div className="text-sm text-muted-foreground">Clients with Improved Credit</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                Putting people first in everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border hover:border-primary/50 transition-all hover:shadow-large">
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Users className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-lg">People First</h3>
                  <p className="text-sm text-muted-foreground">
                    Every decision we make is focused on helping people achieve their goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all hover:shadow-large">
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Target className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-lg">Results Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    We're committed to delivering real, measurable improvements to your credit.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all hover:shadow-large">
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Shield className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-lg">Trust & Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Bank-level security and full compliance protect your information.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all hover:shadow-large">
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Heart className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold mb-2 text-lg">Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear pricing, honest communication, and no hidden fees ever.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Images */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Credit Repair Services for Real People</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We help everyday people unlock financial opportunities and achieve their dreams—from buying homes and cars to securing business loans and qualifying for credit cards.
                </p>
                <p className="text-muted-foreground">
                  Our professional credit repair experts use proven strategies and advanced technology to dispute credit report errors, remove negative items, and boost your credit score in 30-90 days.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src={cardUsage} alt="Happy Monexa clients achieving financial goals with improved credit scores" className="w-full h-full object-cover" loading="lazy" width="400" height="400" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square mt-8">
                  <img src={travelRewards} alt="People celebrating financial success after credit repair with Monexa" className="w-full h-full object-cover" loading="lazy" width="400" height="400" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden aspect-video shadow-large">
                  <img src={homeImprovement} alt="Monexa credit repair clients achieving mortgage approval and home buying goals" className="w-full h-full object-cover" loading="lazy" width="800" height="450" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Amazing Results for Real People</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-glow">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">140M+ Credit Points Increased</h3>
                      <p className="text-sm text-muted-foreground">Helping people improve their scores and qualify for loans</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-glow">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">30-90 Day Results</h3>
                      <p className="text-sm text-muted-foreground">Fast improvements so you can move forward quickly</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-glow">
                      <Users className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">12,000+ People Helped</h3>
                      <p className="text-sm text-muted-foreground">Real people achieving real financial freedom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted & Certified</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Fully compliant with federal regulations and industry standards
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* CROA Badge */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 shadow-large relative">
                  <Shield className="h-12 w-12 text-primary-foreground" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center border-4 border-background">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">CROA Compliant</h3>
                <p className="text-sm text-muted-foreground">Credit Repair Organizations Act certified</p>
              </div>

              {/* Data Protection Badge */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 shadow-large relative">
                  <svg className="h-12 w-12 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center border-4 border-background">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Data Protection</h3>
                <p className="text-sm text-muted-foreground">Your information is fully encrypted and protected</p>
              </div>

              {/* Security Badge */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 shadow-large relative">
                  <svg className="h-12 w-12 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center border-4 border-background">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">SOC 2 Type II</h3>
                <p className="text-sm text-muted-foreground">Bank-level data security certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Join Thousands of Satisfied Customers
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Start your journey to better credit and financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
