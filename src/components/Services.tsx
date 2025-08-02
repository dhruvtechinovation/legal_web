import React, { useEffect, useState } from 'react';
import { Scale, FileText, Users, Briefcase, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation('services');
  const [selectedService, setSelectedService] = useState(null);
  type Se = {
    title: string;
    tag:string
    description: string [];
  };
  // type ServicesContent = {
  //   section_title: string;
  //   section_desc: string;
  //   consultation: Serv;
  //   representation: Serv;
  //   drafting: Serv;
  // };
  
  const servicedata = t('services.service', { returnObjects: true }) as Se[]
//   console.log('raw services',servicedata)
//   console.log('service translation file is',servicedata )
//   console.log('Service data:', servicedata);
// console.log('Is array?', Array.isArray(servicedata));
  const services = [
       <Scale className="w-10 h-10" />,
       <Users className="w-10 h-10" />,
      <FileText className="w-10 h-10" />,
      <Briefcase className="w-10 h-10" />
      
  ];
  useEffect(() => {
    if (selectedService) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  
    return () => document.body.classList.remove('overflow-hidden');
  }, [selectedService]);

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-black dark:text-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-lg font-bold tracking-tight sm:text-4xl mb-4">{t('services.section_title')}</h2>
          <p className="paragraph text-gray-700">{t('services.section_desc')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {/* {services.map((service, index) => (
            <div 
            key={index}
            className={`
              group bg-card p-7 rounded-xl border gray-400
              transition-all duration-400 ease-out
              hover:scale-100 hover:shadow-xl 
              animate-slide-up
              transform-gpu will-change-transform
            `}
            // style={{
            //   animationDelay: `${index * 0.15}s`,
            //   animationFillMode: 'both'
            // }}
            >
              <div className="mb-6 text-primary transition-transform duration-400 group-hover:scale-110 group-hover:rotate-2">{service.icon}</div>
              <h3 className="heading-sm mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-6 h-0.5 w-0 bg-primary transition-all duration-700 group-hover:w-full"></div>
            </div>
            
          ))} */}
          {servicedata.map((service, index) => (
            <div
              key={index}
              className="group  relative bg-card p-7 rounded-xl border gray-400 transition-all duration-400 ease-out hover:scale-100 hover:shadow-xl animate-slide-up transform-gpu will-change-transform"
              onClick={()=>setSelectedService(service)}
            >
              

              <div className="mb-6 text-primary transition-transform duration-400 group-hover:scale-110 group-hover:rotate-2 absolute top-4 left-2/4 transform -translate-x-1/2 ">
                {services[index]}
              
              </div>
              <h2 className=" heading-sm mt-11 text-center mb-2">{servicedata[index].title}</h2>
              <p className="text-gray-600  line-clamp-2 text-center">
                {servicedata[index].tag}
             </p>
             <div className='flex flex-col items-center'>

              {/* <button
                onClick={() => setSelectedService(service)}
                className="mt-2 text-primary text-sm hover:text-primary text-blue"
              >
                Know More...
              </button> */}
               <div className="flex items-center gap-2 text-xs text-gray-700 font-medium group-hover:gap-2 transition-all mt-2">
          <span>Know More</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
             </div>
              {/* <a
  href="#"
  onClick={(e) => {
    e.preventDefault(); // prevent page reload if needed
    setSelectedService(service);
  }}
  className="mt-2 text-sm underline text-primary hover:text-primary/80 cursor-pointer"
>
  Know More...
</a> */}
              {/* <div className="mt-6 h-0.5 w-0 bg-primary transition-all duration-700 group-hover:w-full"></div> */}
            </div>
          ))}

          {selectedService && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/40 "
              onClick={() => setSelectedService(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div
                className="bg-card max-w-4xl w-full mx-4 p-7 rounded-xl shadow-2xl border border-border relative animate-scale-in hover-scale"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                  aria-label="Close modal"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
               <div>

                <h3
                  id="modal-title"
                  className="heading-sm font-semibold mb-4 text-primary pr-7 "
                >
                  {selectedService.title}
                </h3>
               </div>

                <div className="text-muted-foreground leading-relaxed">
                </div>

                {selectedService && (
  <div className="mt-6 pt-6 border-t border-border">
    <h4 className="text-sm font-semibold text-foreground mb-4">Key Features</h4>
    <ul className="space-y-3">
      {selectedService.description.map((feature, index) => (
        <li key={index} className="flex items-start text-sm text-muted-foreground leading-relaxed">
          <span className="text-primary mt-1 mr-2">✓</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
