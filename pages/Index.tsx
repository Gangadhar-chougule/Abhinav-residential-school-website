import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import schoolBuilding from "@/assets/school-building.jpg";
import corridor from "@/assets/school-corridor.jpg";
import treePlanting from "@/assets/tree-planting.jpg";
import educationalTrip from "@/assets/educational-trip.jpg";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={schoolBuilding}
          alt="School campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 h-full flex items-center">
          <div className="section-container">
            <p className="text-primary-foreground/80 font-body text-sm tracking-widest uppercase mb-4 animate-fade-in">
              || दुरितांचे तिमिर जावो | विश्व स्वधर्म सूर्ये पाहो ||
            </p>
            <h1 className="heading-display text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              संत ज्ञानेश्वर शिक्षण संस्था
            </h1>
            <p className="body-large text-primary-foreground/90 max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              अभिनव मतिमंद मुलांची निवासी शाळा, पलूस — Empowering specially-abled children through dedicated education since 1998.
            </p>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Learn More <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 py-3 text-sm font-medium rounded-md hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-spacing">
        <div className="section-container text-center">
          <h2 className="heading-section mb-6">आमच्या संस्थेबद्दल</h2>
          <p className="body-large max-w-2xl mx-auto mb-4">
            संत ज्ञानेश्वर शिक्षण संस्था ही संस्था मा. अण्णासाहेब डांगे यांना १९८६ साली सुरू केली. सन ५ जून १९९८ पासून संस्थेने पलूस येथे अभिनव मतिमंद मुलांची निवासी शाळा सुरू केली.
          </p>
          <p className="body-text max-w-2xl mx-auto">
            Recognized by the Rehabilitation Council of India (RCI), New Delhi, and the first special school in Western Maharashtra to receive ISO certification in 2016. All facilities are provided free of cost to students.
          </p>
        </div>
      </section>

      {/* Image Break */}
      <section className="w-full">
        <img
          src={corridor}
          alt="School corridor"
          className="w-full h-[40vh] md:h-[50vh] object-cover"
          loading="lazy"
        />
      </section>

      {/* Key Features */}
      <section className="section-spacing">
        <div className="section-container">
          <h2 className="heading-section text-center mb-12">आमच्या सेवा</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "विशेष शिक्षण", titleEn: "Special Education", desc: "Residential admission with special education tailored for intellectually disabled students." },
              { title: "सर्व उपचार पद्धती", titleEn: "Comprehensive Therapy", desc: "All necessary therapeutic treatments and rehabilitation services for students." },
              { title: "मार्गदर्शन सल्ला केंद्र", titleEn: "Guidance & Counseling", desc: "Dedicated parent and student counseling center for support and guidance." },
              { title: "व्यवसाय पूर्व कौशल्ये", titleEn: "Vocational Training", desc: "Pre-vocational skills training based on each child's unique abilities and capacity." },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-md p-8 hover:border-primary/30 transition-colors"
              >
                <h3 className="heading-sub mb-1">{item.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{item.titleEn}</p>
                <p className="body-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-spacing bg-secondary">
        <div className="section-container">
          <h2 className="heading-section text-center mb-12">शालेय उपक्रम</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-md">
              <img
                src={treePlanting}
                alt="वृक्षारोपण कार्यक्रम - Tree Planting"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-background">
                <h3 className="heading-sub mb-2">वृक्षारोपण कार्यक्रम</h3>
                <p className="body-text">Tree planting programs to develop environmental awareness among students.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-md">
              <img
                src={educationalTrip}
                alt="शैक्षणिक सहल - Educational Trip"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-background">
                <h3 className="heading-sub mb-2">शैक्षणिक सहल</h3>
                <p className="body-text">Educational excursions to historical sites and places of cultural importance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="section-container text-center">
          <h2 className="heading-section mb-6">संपर्क करा</h2>
          <p className="body-large max-w-xl mx-auto mb-8">
            For admissions and inquiries, reach out to us. All services are provided free of cost.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
