import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Wrench, CreditCard, LineChart, BookOpen } from "lucide-react";

const Build = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Build Your Credit Foundation
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Products and tools to establish and strengthen your credit history.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete solutions to build, repair, and fund your financial future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              icon={Wrench}
              title="Credit Repair"
              description="Clean up errors and negative items"
              href="/repair"
              features={[
                "Dispute inaccuracies",
                "Remove collections",
                "Expert guidance",
                "Score optimization"
              ]}
            />
            <ProductCard
              icon={CreditCard}
              title="Credit Cards"
              description="Access to secured and unsecured cards"
              href="/funding/credit-cards"
              features={[
                "Build credit history",
                "Rewards programs",
                "Low fees",
                "Graduation options"
              ]}
            />
            <ProductCard
              icon={LineChart}
              title="Trade Line"
              description="Become an authorized user"
              href="/funding/trade-line"
              features={[
                "Instant history boost",
                "Regular reporting",
                "No hard inquiry",
                "Score improvement"
              ]}
            />
            <ProductCard
              icon={BookOpen}
              title="Education"
              description="Learn credit fundamentals"
              href="/resources"
              features={[
                "Credit guides",
                "Video tutorials",
                "Score calculators",
                "Expert tips"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Start Building Your Credit Today
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Take the first step towards financial freedom.
            </p>
            <Button size="lg" variant="accent" asChild>
              <Link to="/apply">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Build;
