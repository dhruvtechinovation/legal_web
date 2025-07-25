
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
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className="min-h-screen bg-white dark:bg-black dark:text-white">
      {/* <button
  onClick={toggleTheme}
  className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
>
  Toggle Theme
</button> */}
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
