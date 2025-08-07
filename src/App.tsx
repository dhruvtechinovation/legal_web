import { useLocation, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import SubscriptionPlans from "./pages/Subscription";
import Payments from "./pages/Payments";
import ProtectedRoute from "./components/Protected";
import PersonalDashboard from "./pages/PersonalDashboard";
import { BrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";
import SubscriptionForm from "./pages/Advregister";
import AboutUs from "./components/Aboutus"
import ScrollToTop from "./components/Scrolltotop";
import Disclaimers from "./components/Disclaimers";
import UserDisclaimers from "./components/UserDisclaimers";
import { AuthProvider } from "@/context/Logincontext";
// import LanguageSwitcher from "./components/i18n";
// import GoogleTranslate from "./components/GoogleTranslation";

const queryClient = new QueryClient();

const useTawkControl = (pathname: string) => {
  useEffect(() => {
    const hidePaths = ["/personal_dashboard","/profile","/Advregister"];

    const shouldHide = hidePaths.includes(pathname);

    // Wait until Tawk loads
    const handleTawkLoad = () => {
      if (window.Tawk_API) {
        if (shouldHide) {
          window.Tawk_API.hideWidget?.();
        } else {
          window.Tawk_API.showWidget?.();
        }
      }
    };

    if (window.Tawk_API && typeof window.Tawk_API.onLoad === "function") {
      window.Tawk_API.onLoad = handleTawkLoad;
    } else {
      // Retry check if Tawk_API isn't ready yet
      const interval = setInterval(() => {
        if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
          handleTawkLoad();
          clearInterval(interval);
        }
      }, 300);
      // Optional: clear it after 10s max
      setTimeout(() => clearInterval(interval), 10000);
    }
  }, [pathname]);
};


const App = () => {
  const location = useLocation();
  useTawkControl(location.pathname);

  return (
    
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <TooltipProvider>
      <ScrollToTop/>
        <Toaster />
        <Sonner />
        {/* <BrowserRouter basename="/~ohokgmuc/"> */}

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SubscriptionPlans />} />
          <Route path="/payments/" element={<Payments />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/advregister" element={<SubscriptionForm/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='disclaimers' element={<Disclaimers/>}/>
          <Route path='/user-disclaimers' element={<UserDisclaimers/>}/>
          <Route
            path="/personal_dashboard"
            element={
              <ProtectedRoute>
                <PersonalDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </BrowserRouter> */}
      </TooltipProvider>
      {/* </AuthProvider> */}
       
      <div className=" hidden lg:block fixed top-3/4 left-0 transform -translate-y-1/2 flex flex-col space-y-4 pl-2 z-50">
      <div className="">
              <a href="https://www.facebook.com/61579231556644/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center hover:bg-blue-400 transition-colors mb-2 ">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/jplawsuvidha_in"
               target="_blank"
  rel="noopener noreferrer"
              
              className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center hover:bg-blue-400 transition-colors mb-2">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
    <path d="M19.782 3H23L14.877 10.67 24 21h-7.238l-5.67-6.38L4.8 21H1l9.706-8.91L0 3h7.407l5.1 5.748L19.782 3zm-2.17 16.125h2.005L6.25 4.74H4.117l13.495 14.385z"/>
  </svg>
              </a>
              <a href="https://www.linkedin.com/in/jplawsuvidha-undefined-79a211379/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
</div>

    </QueryClientProvider>
  );
};

export default App;
