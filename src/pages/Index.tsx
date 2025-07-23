
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Expertise from '@/components/Expertise';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import FAQSection from '@/components/Faq';
import DisclaimerModal from '@/pages/Disclaimer'
import Languagechecker from '@/components/languagechecker';
// import GoogleTranslate from '@/components/GoogleTranslation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <DisclaimerModal/>
      <Navbar />
      {/* <GoogleTranslate /> */}
      <main>
        <Hero />
      {/* <Languagechecker/> */}
        <Services />
        <Expertise />
        <Testimonials />
        <div id="faq">
          <FAQSection />
        </div>
      </main>
      <Footer />
      {/* <ChatBot /> */}
    </div>
  );
};

export default Index;
