// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Languagechecker = () => {
//   const { t, i18n } = useTranslation();

//   const handleLanguageChange = (e) => {
//     i18n.changeLanguage(e.target.value);
//   };

//   return (
//     <div className="p-4 absolute right-0">
//       {/* 🌐 Language Switcher */}
//       <div className="mb-4">
//         <select
//           value={i18n.language}
//           onChange={handleLanguageChange}
//           className="border px-2 py-1 rounded"
//         >
//           <option value="en">English</option>
//           <option value="te">తెలుగు</option>
//         </select>
//       </div>

//       {/* 🌟 Translated content example */}
//       {/* <h1 className="text-2xl font-bold">{t('services.section_title')}</h1>
//       <p>{t('services.section_desc')}</p> */}
//     </div>
//   );
// };

// export default Languagechecker;
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const Languagechecker = () => {
  const[scrolled,setScrolled]=useState(false)
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setOpen(false); // close dropdown after selection
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 520); // Customize threshold
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button that toggles the dropdown */}
      <button
  onClick={() => setOpen(!open)}
  className={`w-7 h-7 flex items-center justify-center rounded-md text-black lg:text-white  transition-colors duration-200 focus:outline-none  focus:ring-offset-2 focus:ring-gray-300 `}
  aria-label="Toggle Language"
>
  <Globe className="w-7 h-7 text-cyan-700" />
</button>

      {/* Dropdown */}
      {open && (
        <div className={`absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg mt-4 z-50 ${scrolled ? 'bg-black text-white':''}`}>
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            className={`block w-full px-4 py-2 text-sm rounded-md  focus:outline-none  ${scrolled ? 'bg-black text-white':'bg-white'}`}
          >
            <option value="en">English</option>
            <option value="te">తెలుగు</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Languagechecker;