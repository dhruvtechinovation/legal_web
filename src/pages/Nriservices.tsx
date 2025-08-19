import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    category: "Property and Real Estate Services",
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
    items: [
      "Civil disputes (contracts, agreements, money recovery).",
      "Criminal defense for false FIRs or complaints.",
      "Cybercrime complaints (fraud, online scams affecting NRIs).",
      "Cheque bounce and financial fraud cases.",
    ],
  },
  {
    category: "Immigration and Visa-Related Services",
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
    items: [
      "Legal guardianship or caretaking agreements.",
      "Resolving disputes with tenants/caretakers in parents’ property.",
      "Protection against frauds targeting elderly parents in India.",
      "Medical insurance and claim assistance.",
    ],
  },
  {
    category: "Insurance and Compensation",
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
      <section className=" pt-20 pb-20  relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/nri.jpeg')", 
            backgroundPosition: "center 0%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="w-full mx-auto md:mx-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-2  text-center">
              Comprehensive <span className="text-white ">NRI Legal Services</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Professional legal assistance for Non-Resident Indians across property,
              family, documentation, and business matters in India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="relative z-10 px-6 md:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 mt-10">
        {services.map((service, index) => (
          <Card key={index} className="shadow-md rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-center">{service.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default NriServices;