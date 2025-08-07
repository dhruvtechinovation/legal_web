
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <div>
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
      {/* Background Image */}
<div className="absolute inset-0 bg-cover bg-center z-0" 
     style={{ 
       backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
       backgroundPosition: "center -14%",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat"
     }}>
  <div className="absolute inset-0 bg-black/50"></div>
</div>

   <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-fade-in">
           <h1 className="heading-xl mb-6 text-white">
                          Professional Legal Solutions for Every Challenge
            </h1>
            <p className="paragraph mb-8 text-white/90 dark:text-white">
              JP LAW SUVIDHA is a secure, tech-enabled platform designed to connect clients with the right legal professionals. We combine advanced digital tools with deep legal industry insight to simplify communication and ensure timely, effective access to legal support.
            </p>  
            <div>
            <Button
                size="lg"
                className="bg-gradient-to-r from-gray-700 to-black text-white hover:from-primary/90 hover:to-blue-600/90 px-8 py-4 text-lg font-medium group relative overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                onClick={() =>{
                   document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                               Tawk_API.toggle()
              }}
              >
                <div className="absolute inset-0 bg-white"></div>
                <span className="relative z-10 flex items-center gap-2 text-black">
                  <Rocket className="w-5 h-5 " />
                  Chat With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button></div>         
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;
