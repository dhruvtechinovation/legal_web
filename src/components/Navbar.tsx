
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { User, UserPlus } from 'lucide-react';
import Languagechecker from './languagechecker';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoginDisabled = true;
  const isSubscribeDisabled = true;

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Areas of Expertise", href: "#expertise" },
  ];

  return (
    <header className="fixed w-full bg-white backdrop-blur-md z-50  dark:bg-black dark:text-white">
      <div className="container-custom py-4 flex items-end justify-between">
        <div className=''>
          <Logo />
        </div>
        <div >

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#403E43]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium hover:text-gray-600 transition-colors text-black"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/about"
              // className="flex items-center space-x-1 px-4 py-2 rounded-md border transform hover:scale-105 transition-transform duration-200 border-legal-DEFAULT hover:bg-gray-700 hover:text-white base-transition "
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              <span>AboutUs</span>
            </Link>
            <Link
              to="/userdisclaimers"
              // className="flex items-center space-x-1 px-4 py-2 rounded-md border transform hover:scale-105 transition-transform duration-200 border-legal-DEFAULT hover:bg-gray-700 hover:text-white base-transition "
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              <span>Disclaimers</span>
            </Link>
            <div className="flex items-center space-x-10">
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 rounded-md border transform hover:scale-105 transition-transform duration-200 border-legal-DEFAULT hover:bg-gray-700 hover:text-white base-transition "
              >
                <User size={18} />
                <span>Login</span>
              </Link>

              <Link
                to="/signup"
                className="flex items-center spa   px-4 py-2 transform hover:scale-105 transition-transform duration-200 rounded-lg border border-gray hover:bg-legal-DEFAULT hover:text-white hover:animate-blink1 base-transition notranslate"
              >
                <UserPlus size={18} />
                <span>Subscribe</span>
              </Link>
              <div className='absolute top-1 right-1'>
                {/* <div> */}
                {/* <Languagechecker/> */}
              </div>

              {/* <Link
                to={isLoginDisabled ? "#" : "/login"}
                onClick={(e) => isLoginDisabled && e.preventDefault()}
                className={`flex items-center space-x-1 px-4 py-2 rounded-md border border-legal-DEFAULT base-transition ${isLoginDisabled
                    ? "pointer-events-none opacity-50 cursor-not-allowed"
                    : "hover:bg-legal-DEFAULT hover:text-white"
                  }`}
              >
                <User size={18} />
                <span>Login</span>
              </Link>

              <Link
                to={isSubscribeDisabled ? "#" : "/signup"}
                onClick={(e) => isSubscribeDisabled && e.preventDefault()}
                className={`flex items-center space-x-1 px-4 py-2 rounded-md border border-legal-DEFAULT base-transition ${isSubscribeDisabled
                    ? "pointer-events-none opacity-50 cursor-not-allowed"
                    : "hover:bg-legal-DEFAULT hover:text-white hover:animate-blink1"
                  }`}
              >
                <UserPlus size={18} />
                <span>Subscribe</span>
              </Link> */}


            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium px-4 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="outline"
                  className="text-[#403E43] border-[#403E43] hover:bg-[#403E43] hover:text-white w-full  disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Login
                </Button>

                <Button
                  className="bg-[#403E43] text-white hover:bg-[#221F26] w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Subscribe
                </Button>

              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { Menu, X, User, UserPlus, Globe } from 'lucide-react';
// import Logo from './Logo';
// import { Button } from "./ui/button";
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('about');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate=useNavigate()

//   const menuItems = [
//     { label: "Services", href: "#services" },
//     { label: "Areas of Expertise", href: "#expertise" },
//     { label: "FAQ", href: "#faq" },
//     // { label: "Platform Terms", href: "#disclaimers" },
//     // { label: "Profile Demo", href: "#profile" }
//   ];

//   // Handle smooth scrolling
//   const handleNavClick = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   // Track scroll position and active section
//   useEffect(() => {
//     const handleScroll = () => {
//       // Update scroll state for navbar background
//       setIsScrolled(window.scrollY > 20);

//       // Track active section
//       const sections = menuItems.map(item => item.href.substring(1));
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
      
//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Mock login/signup handlers
//   const handleLogin = () => {
//     navigate('/login',{replace:true})
//   };

//   const handleSignup = () => {
//   navigate('/signup',{replace:true})
//   };

//   const handleLanguageToggle = () => {
//     console.log('Language toggle clicked');
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled 
//         ? 'bg-card/100 backdrop-blur-lg border-b border-border shadow-lg' 
//         : 'bg-card/70 backdrop-blur-sm'
//     }`}>
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex items-center justify-between py-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Logo />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-7">
//             {menuItems.map((item) => (
//               <button
//                 key={item.href}
//                 onClick={() => handleNavClick(item.href)}
//                 className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
//                   activeSection === item.href.substring(1)
//                     ? 'text-primary'
//                     : 'text-muted-foreground'
//                 }`}
//               >
//                 {item.label}
//                 {activeSection === item.href.substring(1) && (
//                   <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
//                 )}
//               </button>
//             ))}
//             <Link to='/about' className={`text-muted-foreground text-sm font-medium transition-all duration-200 hover:text-primary`}>AboutUs</Link>
//           </nav>

//           {/* Desktop Actions */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {/* Language Toggle */}

//             {/* Login Button */}
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleLogin}
//               className="flex items-center gap-2 border-border hover:bg-muted/50 hover:border-primary/50 transition-all duration-200"
//             >
//               <User className="w-4 h-4" />
//               Login
//             </Button>

//             {/* Subscribe Button */}
//             <Button
//               size="sm"
//               onClick={handleSignup}
//               className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
//             >
//               <UserPlus className="w-4 h-4" />
//               Subscribe
//             </Button>
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={handleLanguageToggle}
//               className="text-muted-foreground hover:text-foreground"
//             >
//               <Globe className="w-4 h-4" />
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="sm"
//             className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </Button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-md">
//             <div className="py-4 space-y-2">
//               {/* Navigation Links */}
//               {menuItems.map((item) => (
//                 <button
//                   key={item.href}
//                   onClick={() => handleNavClick(item.href)}
//                   className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-muted/50 rounded-lg ${
//                     activeSection === item.href.substring(1)
//                       ? 'text-primary bg-primary/5'
//                       : 'text-muted-foreground'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}

//               {/* Mobile Actions */}
//               <div className="pt-4 space-y-3 border-t border-border mt-4">
//                 <div className="flex items-center justify-between px-4">
//                   <span className="text-sm text-muted-foreground">Language</span>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={handleLanguageToggle}
//                     className="text-muted-foreground hover:text-foreground"
//                   >
//                     <Globe className="w-4 h-4" />
//                   </Button>
//                 </div>

//                 <div className="px-4 space-y-2">
//                   <Button
//                     variant="outline"
//                     className="w-full flex items-center justify-center gap-2 border-border hover:bg-muted/50"
//                     onClick={handleLogin}
//                   >
//                     <User className="w-4 h-4" />
//                     Login
//                   </Button>

//                   <Button
//                     className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
//                     onClick={handleSignup}
//                   >
//                     <UserPlus className="w-4 h-4" />
//                     Subscribe
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;