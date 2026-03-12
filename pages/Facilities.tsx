import Layout from "@/components/Layout";
import waterFacility from "@/assets/water-facility.jpg";
import corridor from "@/assets/school-corridor.jpg";
import schoolBuilding from "@/assets/school-building.jpg";

const facilities = [
  {
    title: "प्रशस्त सर्व सोयीनुक्त इमामरत",
    titleEn: "Spacious & Well-Equipped Building",
    desc: "A fully equipped, spacious campus with all amenities for comfortable residential learning.",
    image: schoolBuilding,
  },
  {
    title: "शालेय परिसर",
    titleEn: "School Campus",
    desc: "Beautiful campus with colorful classrooms, verandas, and educational wall paintings.",
    image: corridor,
  },
  {
    title: "भैतिक सुविधा",
    titleEn: "Physical Infrastructure",
    desc: "Satellite dish, Liveguard water purification system, and clean drinking water facilities for all students.",
    image: waterFacility,
  },
];

const Facilities = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="section-container">
          <h1 className="heading-display text-center mb-4">सुविधा</h1>
          <p className="body-large text-center max-w-2xl mx-auto mb-16">
            Our school provides comprehensive facilities free of cost, ensuring the best environment for our students.
          </p>

          <div className="space-y-16">
            {facilities.map((f, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <img
                    src={f.image}
                    alt={f.titleEn}
                    className="w-full h-72 object-cover rounded-md"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="heading-sub mb-1">{f.title}</h2>
                  <p className="text-sm text-primary font-medium mb-3">{f.titleEn}</p>
                  <p className="body-text">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border border-border rounded-md p-8 text-center">
            <h3 className="heading-sub mb-4">Additional Facilities</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "विद्यार्थी आरोग्य तपासणी (Health Checkups)",
                "शैक्षणिक सहल (Educational Trips)",
                "वृक्षारोपण कार्यक्रम (Tree Planting)",
                "शालेय उपक्रम जयंती-उत्सव (Celebrations)",
                "व्यवसाय पूर्व कौशल्ये (Vocational Skills)",
                "पालक मार्गदर्शन (Parent Counseling)",
              ].map((item, i) => (
                <div key={i} className="p-4 bg-secondary rounded-md">
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
