import React, { useState, useEffect } from 'react';
import { Menu, X, User, UserPlus, Globe } from 'lucide-react';
import Logo from './Logo';
import { Button } from "./ui/button";
import { Link, useNavigate } from 'react-router-dom';
import Languagechecker from './languagechecker';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const navigate=useNavigate()

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Areas of Expertise", href: "#expertise" },
    { label: "FAQ", href: "#faq" },
    // { label: "Platform Terms", href: "#disclaimers" },
    // { label: "Profile Demo", href: "#profile" }
  ];

  // Handle smooth scrolling
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state for navbar background
      setScrolled(window.scrollY > 520);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock login/signup handlers
  const handleLogin = () => {
    navigate('/login',{replace:true})
  };

  const handleSignup = () => {
  navigate('/signup',{replace:true})
  };

  const handleLanguageToggle = () => {
    console.log('Language toggle clicked');
  };

  return (
    <header className={`fixed w-full z-50  ${
      scrolled 
        ? 'bg-black backdrop-blur-lg border-none border-border shadow-lg text-white transition-all duration-300' 
        : 'bg-card/70 backdrop-blur-lg '
    }`}>
      <div className="container mx-auto px-4 max-w-7xl ">
        <div className="flex items-center justify-between py-4 ">
          {/* Logo */}
          <div className="flex-shrink-0 items center ">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }   ${scrolled ? 'text-white transition-all duration-300 hover:text-white' : 'text-primary'} `}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <div className={`absolute -bottom-1 left-0 right-0 h-0.5  rounded-full ${scrolled ? 'bg-white':'bg-black'}`} />
                )}
              </button>
            ))}
            <Link to='/about' className={`text-sm font-medium transition-all duration-200 hover:text-primary ${scrolled ? 'text-white hover:text-white':''}`}>AboutUs</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}

            {/* Login Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogin}
              className={`flex items-center gap-2 border-border hover:bg-muted/50 hover:border-primary/50  ${scrolled ? 'text-black transition-all duration-300 ':''}`}
            >
              <User className="w-4 h-4" />
              Login
            </Button>

            {/* Subscribe Button */}
            <Button
              size="sm"
              onClick={handleSignup}
              className={`flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 ${scrolled ? 'bg-white text-black hover:text-white hover:bg-muted-foreground':''}`}
            >
              <UserPlus className="w-4 h-4" />
              Subscribe
            </Button>
            {/* <Button
              variant="ghost"
              size="sm"
              onClick={handleLanguageToggle}
              className={`text-muted-foreground hover:text-foreground ${scrolled ? 'text-muted-foreground bg-gray-400':''}`}
            > */}
              {/* <Globe className="w-4 h-4" />
              <div><Languagechecker/></div> */}
              {/* <div className="w-4 h-4 flex items-center justify-center text-gray-700">
  <Languagechecker />
</div> */}
            {/* </Button> */}
            <Button variant="ghost" size="sm" className="p-0">
  <Languagechecker />
</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {/* Navigation Links */}
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-muted/50 rounded-lg ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/5'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 space-y-3 border-t border-border mt-4">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm text-muted-foreground">Language</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLanguageToggle}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Globe className="w-4 h-4" />
                  </Button>
                </div>

                <div className="px-4 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 border-border hover:bg-muted/50"
                    onClick={handleLogin}
                  >
                    <User className="w-4 h-4" />
                    Login
                  </Button>

                  <Button
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleSignup}
                  >
                    <UserPlus className="w-4 h-4" />
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;