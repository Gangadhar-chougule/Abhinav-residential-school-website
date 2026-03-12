import Layout from "@/components/Layout";
import schoolBuilding from "@/assets/school-building.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={schoolBuilding} alt="School" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 h-full flex items-end pb-12">
          <div className="section-container">
            <h1 className="heading-display text-primary-foreground">About Us</h1>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-container max-w-3xl">
          <h2 className="heading-section mb-6">आमची कथा</h2>
          <div className="space-y-6">
            <p className="body-large">
              संत ज्ञानेश्वर शिक्षण संस्था ही संस्था मा. अण्णासाहेब डांगे यांना १९८६ साली सुरू केली.
            </p>
            <p className="body-text">
              || दुरितांचे तिमिर जावो | विश्व स्वधर्म सूर्ये पाहो जो जे वांछिल तो ते लाहो प्राणीजात ||
            </p>
            <p className="body-text">
              हे ब्रीद वाक्य घेऊन, सन ५ जून १९९८ पासून संस्थेने पलूस येथे अभिनव मतिमंद मुलांची निवासी शाळा सुरू केली.
            </p>
            <p className="body-text">
              दिव्यांग शाळेस भारतीय पुनर्वास संसद, नवी दिल्ली तर्फ (Rehabilitation Council of India) यांचे मार्गदर्शक तत्वाने मा. अयुक्त म रा पुणे यांचे कार्यालयाकडून २२ जुलै १९९९ रोजी क्र. ०५८९ ने अनुज्ञापती प्राप्त झाली आहे.
            </p>

            <h3 className="heading-sub mt-12 mb-4">मा. अण्णासाहेब डांगे यांच्या मार्गदर्शनाखाली</h3>
            <ul className="space-y-3">
              {[
                "निवासी प्रवेशित विद्यार्थ्यांना विशेष शिक्षण",
                "दिव्यांग विद्यार्थ्यांना आवश्यक असणारी सर्व उपचार-पद्धती",
                "विद्यार्थी-पालक मार्गदर्शन सल्ला केंद्र",
                "शीघ्र उपचार पद्धत",
                "व्यवसाय पूर्व कौशल्ये आधारीत मुलांच्या क्षमतांनुसार सर्व उपक्रम",
              ].map((item, i) => (
                <li key={i} className="body-text flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="heading-sub mt-12 mb-4">Achievements</h3>
            <p className="body-text">
              तसेच सहशालेय उपक्रम व गुणवत्ता विकास वाढ उपक्रम चालविले जात आहेत. त्याचेच फलित म्हणून सन २०१६ रोजी पश्चिम महाराष्ट्रात प्रथम ISO मानांकन होण्याचा मान शाळेस मिळाला.
            </p>
            <p className="body-text">
              आपल्या विशेष शाळेतील प्रवेशित विद्यार्थ्यांना सर्व सोयी-सुविधा विनामूल्य आदर्शवत पुरविल्या जातात.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
