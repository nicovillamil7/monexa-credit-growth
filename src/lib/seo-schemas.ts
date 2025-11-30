// Structured data schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Monexa",
  "description": "Credit repair and funding services to help you improve your credit score and access personal loans, credit cards, and trade lines.",
  "url": "https://monexa.com",
  "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/XywMxhqpYLTRD9hg4YTpmD5QQxx2/uploads/1762646067243-monexa-logo-light.png",
  "sameAs": [
    "https://twitter.com/monexa",
    "https://facebook.com/monexa",
    "https://linkedin.com/company/monexa"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
};

export const creditRepairServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Credit Repair",
  "name": "Credit Repair Services",
  "description": "Professional credit repair services including error disputes, credit score optimization, and expert coaching to improve your credit profile.",
  "provider": {
    "@type": "FinancialService",
    "name": "Monexa"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "$$"
  }
};

export const personalLoanServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LoanOrCredit",
  "name": "Personal Loans",
  "description": "Personal loans from $1,000 to $100,000 with flexible terms from 12 to 84 months. Fast approval and competitive rates.",
  "loanType": "Personal Loan",
  "amount": {
    "@type": "MonetaryAmount",
    "minValue": "1000",
    "maxValue": "100000",
    "currency": "USD"
  },
  "provider": {
    "@type": "FinancialService",
    "name": "Monexa"
  }
};

export const creditCardServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Credit Card Matching",
  "name": "Credit Card Services",
  "description": "Find the perfect credit card with rewards, cashback, balance transfers, and credit building options.",
  "provider": {
    "@type": "FinancialService",
    "name": "Monexa"
  }
};

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

