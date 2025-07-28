
import React from 'react';
import { Heart, Briefcase, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Expertise = () => {
  const { t } = useTranslation();
  type ExpertiseArea = {
    icon: JSX.Element;
    title: string;
    description: string;
    items: string[];
  };
  const expertiseAreas = t('expertise.areas', { returnObjects: true }) as ExpertiseArea[];
  const icons = [
    <Heart className="w-12 h-12" />,
    <Briefcase className="w-12 h-12" />,
    <Shield className="w-12 h-12" />
  ];
  // const expertiseAreas = [
  //   {
  //     icon: <Heart className="w-12 h-12" />,
  //     title: "Family Matters",
  //     description: "Expert guidance in divorce, child custody, adoption, and other family matters with compassion and understanding.",
  //     items: ["Family Matters", "Child Custody", "Adoption", "Disputes in Live-in"]
  //   },
  //   {
  //     icon: <Briefcase className="w-12 h-12" />,
  //     title: "Corporate Law",
  //     description: "Comprehensive legal services for businesses of all sizes, from startups to established corporations.",
  //     items: ["Legal documentation", "consultation (Employee-Employee)", "consultation (Employee-Employer)"]
  //   },
  //   {
  //     icon: <Shield className="w-12 h-12" />,
  //     title: "Criminal Law",
  //     description: "Strong defense strategies and representation for those facing criminal charges or investigations.",
  //     items: ["Criminal Defense", "White Collar Crimes", "Juvenile Defense"]
  //   }
  // ];

  return (
    <section id="expertise" className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <h2 className="heading-lg mb-4">Areas of Expertise</h2>
          <p className="paragraph">Specialized knowledge and experience across various legal disciplines to address your specific needs.</p> */}
          <h2 className="heading-lg mb-4">{t('expertise.section_title')}</h2>
          <p className="paragraph">{t('expertise.section_desc')}</p>
        </div>

        <div className="space-y-16">

          {expertiseAreas.map((area, index) => (
            <React.Fragment key={index}>
              <div className={`flex flex-col md:flex-row gap-7 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className=" group md:w-1/3 bg-gray-50 p-8 rounded-xl flex flex-col items-center text-center  hover:shadow-xl transition-all duration-400 ">
                  <div className=" w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {icons[index]}
                  </div>
                  <h3 className="heading-md mb-4">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                  <div className="mt-6 h-0.5 w-0 bg-primary transition-all duration-700 group-hover:w-full"></div>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {area.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="font-medium text-lg mb-2">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              {index < expertiseAreas.length - 1 && (
                <hr className="border-t border-gray-300" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Expertise;
