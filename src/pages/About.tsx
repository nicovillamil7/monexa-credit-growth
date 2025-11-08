import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              About Monexa
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              We're on a mission to make credit repair and funding accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-lg text-muted-foreground">
                Building a better financial future for everyone
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Target className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    We focus on sustainable, long-term credit growth, not quick fixes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Speed</h3>
                  <p className="text-sm text-muted-foreground">
                    Fast decisions and efficient processes help you move forward quickly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Shield className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Your data is protected with bank-level encryption and strict privacy controls.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <Heart className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent pricing, honest communication, and ethical practices always.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                Monexa was founded with a simple belief: everyone deserves access to fair credit and funding, 
                regardless of their past financial challenges.
              </p>
              <p className="mb-4">
                We saw too many people trapped in a cycle of poor credit, unable to access the capital they 
                needed to improve their lives. Traditional credit repair companies were expensive and opaque. 
                Banks turned away anyone without perfect credit.
              </p>
              <p className="mb-4">
                So we built Monexa—a platform that combines expert credit repair services with access to a 
                network of lenders willing to work with people at every stage of their credit journey. We use 
                technology to make the process faster, more transparent, and more affordable.
              </p>
              <p>
                Today, we've helped thousands of customers improve their credit scores and access the funding 
                they need to achieve their goals. And we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-12 w-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance & Certifications</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We operate in full compliance with federal and state regulations
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-foreground mb-2">CROA Compliant</p>
                  <p>Credit Repair Organizations Act</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-foreground mb-2">State Licensed</p>
                  <p>Licensed in all required states</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-foreground mb-2">Data Security</p>
                  <p>SOC 2 Type II certified</p>
                </CardContent>
              </Card>
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
