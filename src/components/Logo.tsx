
import { Scale } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Logo = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 520); // Customize threshold
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-serif text-xl font-bold">
        <Scale className='text-white'></Scale>
      </div>
      <div className={`font-serif font-bold text-xl  ${scrolled ? 'text-white transition-all duration-300' :'font-bold transition-all duration-100'}`}>
        JP Law Suvidha
      </div>
    </div>
  );
};

export default Logo;
