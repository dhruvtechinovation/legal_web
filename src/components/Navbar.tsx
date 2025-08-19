import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  User, 
  UserPlus, 
  Globe, 
  Bell, 
  ChevronDown,
  Search,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import Logo from './Logo';
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import Languagechecker from './languagechecker';
import { Link, useNavigate } from 'react-router-dom';

// // Notification Banner Component
// const NotificationBanner = ({ onClose }: { onClose: () => void }) => {
//   return (
//     <div className="bg-primary text-primary-foreground px-4 py-2 text-sm relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
//       <div className="container mx-auto max-w-7xl flex items-center justify-between relative z-10">
//         <div className="flex items-center gap-2">
//           <Bell className="w-4 h-4" />
//           <span className="hidden sm:inline">
//             🎉 New Feature: Advanced Legal Document AI Review now available!
//           </span>
//           <span className="sm:hidden">
//             🎉 New AI Document Review Feature!
//           </span>
//           <Button 
//             variant="ghost" 
//             size="sm" 
//             className="text-primary-foreground hover:bg-primary-foreground/20 h-auto p-1"
//           >
//             <ArrowRight className="w-3 h-3" />
//           </Button>
//         </div>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={onClose}
//           className="text-primary-foreground hover:bg-primary-foreground/20 h-auto p-1"
//         >
//           <X className="w-3 h-3" />
//         </Button>
//       </div>
//     </div>
//   );
// };

// Enhanced Mobile Menu Component
const MobileMenu = ({ 
  isOpen, 
  onClose, 
  menuItems, 
  activeSection, 
  handleNavClick, 
  handleLogin, 
  handleSignup, 
  scrolled 
}: {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{ label: string; href ?: string }>;
  activeSection: string;
  handleNavClick: (href: string) => void;
  handleLogin: () => void;
  handleSignup: () => void;
  scrolled: boolean;
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate=useNavigate()
  
  return (
    <div className={`lg:hidden fixed inset-x-0 top-0 z-40 transform transition-all duration-300 ease-out ${
      isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="bg-white border-b border-border shadow-xl">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Mobile Header */}
          <div className="flex items-center justify-between py-4 border-b border-border">
            <div  >
            <Logo />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          {/* Mobile Navigation */}
          <div className="py-4">
            <nav className="space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => {
                    handleNavClick(item.href);
                    onClose();
                  }}
                  className={`group flex items-center justify-between w-full px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-primary/10 text-primary border-l-4 border-primary'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium">{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                </button>
              ))}
              
              <button
                onClick={() => {
                     navigate('/about')
                  }
                }
                className="group flex items-center justify-between w-full px-4 py-3 text-left rounded-lg transition-all duration-200 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                <span className="font-medium">AboutUs</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </nav>
          </div>

          {/* Mobile Actions */}
          <div className="py-4 border-t border-border space-y-4">
            {/* Language Selector */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Language</span>
              <div className="p-1 rounded-md">
                <Languagechecker />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={handleLogin}
                className="flex items-center justify-center gap-2 h-12 group"
              >
                <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Login
              </Button>
              <Button
                onClick={handleSignup}
                className="flex items-center justify-center gap-2 h-12 group transform hover:scale-105 transition-all duration-200"
              >
                <UserPlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate=useNavigate()
  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // lg breakpoint
  
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Areas of Expertise", href: "#expertise" },
    {label:' NRI Services',href:'nri'}
    // { label: "FAQ", href: "#faq" },
  ];

  // Enhanced click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Enhanced scroll handler with hide/show functionality
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll state for navbar background
      setScrolled(currentScrollY > 540);


      // Track active section
      const sections = menuItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Handle smooth scrolling
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Navigation handlers
  const handleLogin = () => {
   navigate('/login',{replace:true})
  };

  const handleSignup = () => {
    navigate('/signup',{replace:true})
  };

  // const handleLanguageToggle = () => {
  //   console.log('Language toggle clicked');
  // };

  return (
    <>
      {/* Notification Banner */}
      {/* {showBanner && (
        <NotificationBanner onClose={() => setShowBanner(false)} />
      )} */}

      {/* Main Header */}
      <div
  className={`fixed w-full z-50 transform transition-all duration-300 ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
  } ${
    scrolled
      ? 'bg-white lg:bg-black border-b border-border shadow-lg'
      : 'bg-card/90  shadow-md'
  }`}
        style={{ top: showBanner ? '0' : '0' }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0 transform hover:scale-100 transition-transform duration-200">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    if (item.href === "nri") {
                    navigate('/nri')
                    } else {
                      handleNavClick(item.href); // 👈 normal function
                    }
                  }}
                  className={`group relative text-md font-medium transition-all duration-300 hover:text-primary ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  } ${scrolled ? 'text-white hover:text-white' : ''}`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
  className={`absolute left-0 right-0 bottom-0 h-0.5 transform origin-left transition-transform duration-300 
    ${activeSection === item.href.substring(1) 
      ? 'scale-x-100' 
      : 'scale-x-0 group-hover:scale-x-100'} 
    ${scrolled ? 'bg-white' : 'bg-primary'}`}
/>
                </button>
              ))}
              
              {/* <button
                onClick={() => navigate('/about')}
                className={`group relative text-sm font-medium transition-all duration-300 hover:text-primary text-muted-foreground ${
                  scrolled ? 'text-white hover:text-white' : ''
                }`}
              >
               NRI Services
                <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${scrolled ?'text-white bg-white':''}`} />
              </button> */}
              <button
                onClick={() => navigate('/about')}
                className={`group relative text-md font-medium transition-all duration-300 hover:text-primary text-muted-foreground ${
                  scrolled ? 'text-white hover:text-white' : ''
                }`}
              >
                AboutUs
                <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${scrolled ?'text-white bg-white':''}`} />
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">

              {/* Login Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogin}
                className="group flex items-center gap-2 border-border hover:bg-muted/50 hover:border-primary/50 transform hover:scale-105 transition-all duration-200"
              >
                <User className="w-4 h-4 group-hover:scale-110 transition-transform text-yellow-700" />
                Advocate Login
              </Button>

              {/* Subscribe Button */}
              <Button
                size="sm"
                onClick={handleSignup}
                className={`group flex items-center gap-2 bg-primary text-primary-foreground hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl ${scrolled ? 'bg-white text-black hover:bg-muted/50':''}`}
              >
                <UserPlus className="w-4 h-4 group-hover:scale-110 transition-transform text-emerald-700" />
                Subscribe
              </Button>
               {/* Language Toggle */}
               <div className="p-1 rounded-md bg-black   ">
                <Languagechecker />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute inset-0 transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`} />
                <X className={`w-6 h-6 absolute inset-0 transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                }`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          menuItems={menuItems}
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          scrolled={scrolled}
        />
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Custom Styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;