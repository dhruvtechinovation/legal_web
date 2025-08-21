import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CalendlyWidget from '@/components/Calendly'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CalModal from "@/components/Calcalendar";

const services = [
  {
    category: "Property and Real Estate Services",
    image: '/property.jpeg',
    color: 'blue-500',
    items: [
      "Property dispute resolution (with tenants, relatives, or encroachers).",
      "Title verification and property due diligence before purchase/sale.",
      "Property partition and settlement (between siblings or relatives).",
      "Drafting and registration of Power of Attorney (POA) to manage property.",
      "Illegal possession or encroachment cases.",
      "Property transfer, mutation, and registration services.",
      "Assistance in selling, renting, or managing ancestral property.",
      "Stamp duty, land revenue, and property tax issues.",
    ],
  },
  {
    category: "Family and Matrimonial Services",
    image: '/family.jpeg',
    color: 'white',
    items: [
      "Divorce filing and representation in India.",
      "Child custody and visitation rights.",
      "Maintenance and alimony claims.",
      "Domestic violence cases.",
      "Marriage registration or annulment services.",
      "Inter-country marriage disputes (where spouse is in India).",
    ],
  },
  {
    category: "Inheritance and Succession",
    image: '/inheritance2.jpeg',
    color: 'green-400',
    items: [
      "Drafting wills and succession planning for Indian assets.",
      "Probate of wills.",
      "Legal heirship certificate procurement.",
      "Partition of ancestral property.",
      "Trust and estate management for parents in India.",
    ],
  },
  {
    category: "Civil and Criminal Services",
    image: '/criminal.jpeg',
    color: 'red-500',
    items: [
      "Civil disputes (contracts, agreements, money recovery).",
      "Criminal defense for false FIRs or complaints.",
      "Cybercrime complaints (fraud, online scams affecting NRIs).",
      "Cheque bounce and financial fraud cases.",
    ],
  },
  {
    category: "Immigration and Visa-Related Services",
    image: '/immigration.jpeg',
    color: 'orange-600',
    items: [
      "Assistance in OCI (Overseas Citizen of India) and PIO card issues.",
      "Visa extension, renewal, or overstay issues.",
      "Citizenship renunciation services.",
      "Immigration fraud cases.",
      "Representation in India for immigration-related disputes.",
    ],
  },
  {
    category: "Documentation and Certification",
    image: '/documentation.jpeg',
    color: 'black',
    items: [
      "Attestation and notarization of documents.",
      "Birth, marriage, and death certificate procurement in India.",
      "Police clearance certificate (PCC) for NRI applications.",
      "PAN card, Aadhaar, and Indian ID documentation issues.",
      "Drafting affidavits, indemnity bonds, and NRI declarations.",
    ],
  },
  {
    category: "Banking and Financial Services",
    image: '/financial.jpeg',
    color: 'indigo-700',
    items: [
      "NRI bank account disputes.",
      "Repatriation of funds (from India to abroad).",
      "Tax compliance and representation before authorities.",
      "Insurance claim settlements in India.",
      "Loan recovery and disputes with banks/NBFCs.",
    ],
  },
  {
    category: "Corporate and Business Services",
    image: '/corporate.jpeg',
    color: 'amber-600',
    items: [
      "Setting up a company or LLP in India.",
      "Drafting partnership agreements or shareholder agreements.",
      "Contract enforcement and disputes.",
      "Trademark, patent, and copyright registrations.",
      "Arbitration and mediation in commercial disputes.",
    ],
  },
  {
    category: "Parents and Elderly Care Services",
    image: '/elderly.jpeg',
    color: 'stone-900',
    items: [
      "Legal guardianship or caretaking agreements.",
      "Resolving disputes with tenants/caretakers in parents’ property.",
      "Protection against frauds targeting elderly parents in India.",
      "Medical insurance and claim assistance.",
    ],
  },
  {
    category: "Insurance and Compensation",
    image: '/insurance.jpeg',
    color: 'cyan-600',
    items: [
      "Life insurance or health insurance claim settlement in India.",
      "Accident or compensation claims.",
      "Property insurance disputes.",
    ],
  },
];

function NriServices() {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-black shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" replace className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
              <>
                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform text-white" />
                <span className="font-medium text-white">Back to Home</span>
              </>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white flex items-center rounded-lg justify-center">
                <img src="/jpicon4.png" alt="img" className="w-14 h-14 rounded-lg" />
              </div>
              <span className="text-xl font-semibold text-white font-serif">JP Law Suvidha</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className=" pt-10  relative">
        {/* Background Image */}
        {/* <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/nri.jpeg')", 
            backgroundPosition: "center 0%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div> */}

        <div className="container-custom relative z-10 text-center  mx-auto mb-7">
          <div className="w-full animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold font-serif text-gray-900 leading-tight tracking-tight ">
              Comprehensive <span className="text-orange-600 font-serif">NRI Legal Services</span>
            </h1>
            {/* <p className="text-lg md:text-xl text-gray-600  max-w-2xl mx-auto leading-relaxed">
      Expert legal assistance for Non-Resident Indians in matters of property, family, 
      documentation, and business across India.
    </p> */}
          </div>
        </div>
        {/* <CalendlyWidget/> */}
        {/* <CalModal/> */}
      </section>

      {/* slider section */}
      <section className="h-[500px] container-custom pt-2 text-center mb-m ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0} // no space since we want big slide
          slidesPerView={1} // only 1 slide visible
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={false}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              // default inactive bullet style
              return `<span class="${className} inline-block w-2.5 h-2.5 rounded-full bg-blue transition-transform duration-300"></span>`;
            },
          }}
          onClick={(swiper) => {
            swiper.autoplay.stop()
            setTimeout(() => {
              swiper.autoplay.start()
            }, 10000);

          }}
          className="w-full h-full" // height of carousel
        >
          {services.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full  overflow-hidden">
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.category}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Text on top */} 
                <div className={`relative z-10 flex items-center justify-center h-full  px-6 text-center top-20`}>
                  <h2
                    className={`text-3xl sm:text-7xl font-serif mb-2 text-shadow-emboss text-${slide.color} `}
                  >
                    {slide.category}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>

      {/* Services Cards */}
      <div className="text-center max-w-7xl mx-auto mb-7">
        <h2 className="heading-sm md:text-3xl font-serif text-gray-900">
          Comprehensive Solutions, Tailored to You
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our wide range of legal services designed to assist NRIs in resolving
          property, family, business, and documentation matters with confidence.
        </p>
        <section className="z-10 px-6 md:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 mt-10">
          {services.map((service, index) => (
            <Card key={index} className="shadow-md rounded-2xl border">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-center">{service.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start pl-2 ">
                      <span className="text-primary mt-1 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default NriServices;