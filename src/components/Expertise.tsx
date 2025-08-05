import React from 'react';
import { Heart, Briefcase, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import * as LucideIcons from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Card = ({ title, services }: { title: string; services: string[] }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
      {services.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Expertise = () => {
  const { t } = useTranslation('expertise');
  const { pathname } = useLocation();
  // console.log('pathname from expertise', pathname);

  type Service = {
    title: string;
    description: string;
    icon?: string;
  };

  type ExpertiseArea = {
    category: string;
    icon?: string;
    services: Service[];
  };

  const rawData = t('expertise.legalServices', { returnObjects: true });

  const expertiseAreas: ExpertiseArea[] = Array.isArray(rawData)
    ? rawData.filter(
        (item): item is ExpertiseArea =>
          item &&
          typeof item.category === 'string' &&
          Array.isArray(item.services) &&
          item.services.every(
            (s) =>
              typeof s.title === 'string' && typeof s.description === 'string'
          )
      )
    : [];

  const renderIcon = (iconName: string, className = 'w-6 h-6 text-primary') => {
    const pascalCase = iconName
      .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
      .replace(/^(.)/, (_, c) => c.toUpperCase());

    const IconComponent = (LucideIcons as any)[pascalCase];

    return IconComponent ? (
      <IconComponent className={className} aria-hidden="true" />
    ) : null;
  };

  return (
    <section id="expertise" className="py-16 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg font-bold tracking-tight sm:text-4xl mb-4">
            {t('expertise.section_title')}
          </h2>
          <p className="paragraph text-gray-600">{t('expertise.section_desc')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const isCenterCard = index === 6;

            return (
              <div
                key={index}
                className={`
                  ${isCenterCard ? 'col-span-2 justify-self-center w-2/3' : ''}
                  bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow duration-300 border
                `}
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  {/* Optional dynamic icon */}
                  {/* {area.icon && renderIcon(area.icon, 'w-7 h-7 text-primary')} */}
                  <h3 className="heading-sm">{area.category}</h3>
                </div>

                <ul className="space-y-4">
                  {area.services.map((service, sIdx) => (
                    <li
                      key={sIdx}
                      className="border border-gray-200 rounded-2xl px-4 py-4 bg-white shadow-lg"
                    >
                      {/* {service.icon && renderIcon(service.icon, 'w-5 h-5 text-primary')} */}
                      <div>
                        <h4 className="text-base font-semibold text-primary mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;