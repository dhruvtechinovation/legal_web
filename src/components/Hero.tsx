
// // import React from 'react';
// // import { Button } from "@/components/ui/button";
// // import { ChevronDown } from 'lucide-react';

// // const Hero = () => {
// //   return (
// //     <div>
// //     <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
// //       {/* Background Image */}
// <div className="absolute inset-0 bg-cover bg-center z-0" 
//      style={{ 
//        backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
//        backgroundPosition: "center -14%",
//        backgroundSize: "cover",
//        backgroundRepeat: "no-repeat"
//      }}>
//   <div className="absolute inset-0 bg-black/50"></div>
// </div>

// //       <div className="container-custom relative z-10">
// //         <div className="grid md:grid-cols-2 gap-12 items-center">
// //           <div className="max-w-2xl animate-fade-in">
// //             <h1 className="heading-xl mb-6 text-white">
// //               Professional Legal Solutions for Every Challenge
// //             </h1>
// //             <p className="paragraph mb-8 text-white/90 dark:text-white">
// //               JP LAW SUVIDHA is a secure, tech-enabled platform designed to connect clients with the right legal professionals. We combine advanced digital tools with deep legal industry insight to simplify communication and ensure timely, effective access to legal support.
// //             </p>           
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //     </div>
// //   );
// // };

// // export default Hero;
// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Scale, 
//   Shield, 
//   Award, 
//   Users, 
//   Clock, 
//   ChevronDown, 
//   PlayCircle, 
//   ArrowRight,
//   Star,
//   CheckCircle,
//   Globe,
//   Phone,
//   Calendar,
//   MessageSquare,
//   TrendingUp,
//   Zap,
//   FileText,
//   Lock
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Card, CardContent } from '@/components/ui/card';

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [typedText, setTypedText] = useState('');
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const heroRef = useRef<HTMLElement>(null);

//   const slides = [
//     {
//       title: "Professional Legal Solutions",
//       subtitle: "for Every Challenge",
//       description: "JP LAW SUVIDHA is a secure, tech-enabled platform designed to connect clients with the right legal professionals.",
//       // stats: "10,000+ Cases Resolved"
//     },
//     {
//       title: "Expert Legal Guidance",
//       subtitle: "When You Need It Most",
//       description: "We combine advanced digital tools with deep legal industry insight to simplify communication and ensure timely access.",
//       // stats: "500+ Verified Advocates"
//     },
//     {
//       title: "Trusted Legal Platform",
//       subtitle: "Across India",
//       description: "Streamlined legal consultations with verified advocates, ensuring professional representation for your legal matters.",
//       // stats: "28 States Coverage"
//     }
//   ];

//   // const trustIndicators = [
//   //   { icon: <Shield className="w-5 h-5" />, text: "100% Verified Advocates", count: "500+" },
//   //   { icon: <Award className="w-5 h-5" />, text: "Bar Council Certified", count: "100%" },
//   //   { icon: <Users className="w-5 h-5" />, text: "Happy Clients", count: "10K+" },
//   //   { icon: <Clock className="w-5 h-5" />, text: "24/7 Support", count: "Always" }
//   // ];

//   const features = [
//     { icon: <FileText className="w-4 h-4" />, text: "Legal Documentation" },
//     { icon: <MessageSquare className="w-4 h-4" />, text: "Expert Consultation" },
//     { icon: <Lock className="w-4 h-4" />, text: "Secure & Confidential" },
//     { icon: <TrendingUp className="w-4 h-4" />, text: "Quick Resolution" }
//   ];

//   // Typewriter effect
//   useEffect(() => {
//     const text = slides[currentSlide].title;
//     let index = 0;
//     setTypedText('');

//     const typeTimer = setInterval(() => {
//       if (index < text.length) {
//         setTypedText(text.slice(0, index + 1));
//         index++;
//       } else {
//         clearInterval(typeTimer);
//       }
//     }, 80);

//     return () => clearInterval(typeTimer);
//   }, [currentSlide]);

//   // Auto slide
//   useEffect(() => {
//     const slideTimer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(slideTimer);
//   }, []);

//   // Entrance animation
//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section 
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Enhanced Background with Parallax */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
//         style={{ 
//           backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
//           backgroundPosition: "center -14%",
//           transform: `translateY(${scrollY * 0.5}px) scale(1.05)`
//         }}
//       >
//         {/* Enhanced Overlay with Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>

//         {/* Animated Overlay Pattern */}
//         <div 
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             animation: 'float 6s ease-in-out infinite'
//           }}
//         />
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${3 + Math.random() * 3}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 max-w-7xl relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

//           {/* Left Content */}
//           <div className={`max-w-2xl transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>

//             {/* Logo/Brand */}
//             {/* <div className="flex items-center gap-3 mb-8">
//               <div className="relative group">
//                 <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
//                   <Scale className="w-8 h-8 text-primary-foreground" />
//                 </div>
//                 <div className="absolute inset-0 w-16 h-16 border-2 border-primary/30 rounded-xl animate-pulse"></div>
//               </div>
//               <div>
//                 <h3 className="text-xl font-medium text-white">JP LAW SUVIDHA</h3>
//                 <p className="text-sm text-white/80">Legal Technology Platform</p>
//               </div>
//             </div> */}

//             {/* Dynamic Title with Typewriter */}
//             <div className="mb-6">
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-2">
//                 {typedText}
//                 <span className="animate-pulse text-primary">|</span>
//               </h1>
//               <p className="text-2xl md:text-3xl text-primary font-medium">
//                 {slides[currentSlide].subtitle}
//               </p>
//             </div>

//             {/* Enhanced Description */}
//             <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
//               {slides[currentSlide].description}
//             </p>

//             {/* Feature Pills */}
//             <div className="flex flex-wrap gap-3 mb-8">
//               {features.map((feature, index) => (
//                 <div 
//                   key={index}
//                   className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
//                 >
//                   <div className="text-primary">{feature.icon}</div>
//                   {feature.text}
//                 </div>
//               ))}
//             </div>

//             {/* Enhanced CTAs */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <Button 
//                 size="lg" 
//                 className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//                 onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                 <span className="relative z-10 flex items-center gap-2">
//                   Get Started Today
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </Button>

//               <Button 
//                 variant="outline" 
//                 size="lg" 
//                 className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 group"
//               >
//                 <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//                 Watch Demo
//               </Button>
//             </div>

//             {/* Live Stats */}
//             <div className="flex items-center gap-6 text-sm text-white/80">
//               {/* <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <span>{slides[currentSlide].stats}</span>
//               </div> */}
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
//                 <span>Live Support Available</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Interactive Cards */}
//           <div className={`transition-all duration-1000 delay-300 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>

//             {/* Main Feature Card */}
//             {/* <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl mb-6 hover:scale-105 transition-all duration-300 group">
//               <CardContent className="p-8">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
//                     <Zap className="w-6 h-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-medium text-white">Instant Connection</h3>
//                     <p className="text-white/70">Connect with advocates in minutes</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="text-center p-4 bg-white/5 rounded-lg">
//                     <div className="text-2xl font-medium text-white mb-1">2hrs</div>
//                     <div className="text-xs text-white/70">Avg Response</div>
//                   </div>
//                   <div className="text-center p-4 bg-white/5 rounded-lg">
//                     <div className="text-2xl font-medium text-white mb-1">98%</div>
//                     <div className="text-xs text-white/70">Success Rate</div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card> */}

//             {/* Trust Indicators Grid */}
//             {/* <div className="grid grid-cols-2 gap-4">
//               {trustIndicators.map((indicator, index) => (
//                 <Card 
//                   key={index}
//                   className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl hover:scale-105 transition-all duration-300 group"
//                 >
//                   <CardContent className="p-6 text-center">
//                     <div className="flex justify-center mb-3 text-primary group-hover:scale-110 transition-transform">
//                       {indicator.icon}
//                     </div>
//                     <div className="text-lg font-medium text-white mb-1">{indicator.count}</div>
//                     <div className="text-xs text-white/70">{indicator.text}</div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div> */}

//             {/* Quick Action Buttons */}
//             {/* <div className="grid grid-cols-2 gap-4 mt-6">
//               <Button 
//                 variant="outline" 
//                 className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-16 group"
//               >
//                 <div className="text-center">
//                   <Phone className="w-5 h-5 mx-auto mb-1 group-hover:scale-110 transition-transform" />
//                   <div className="text-xs">Call Now</div>
//                 </div>
//               </Button>
//               <Button 
//                 variant="outline" 
//                 className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-16 group"
//               >
//                 <div className="text-center">
//                   <Calendar className="w-5 h-5 mx-auto mb-1 group-hover:scale-110 transition-transform" />
//                   <div className="text-xs">Book Meeting</div>
//                 </div>
//               </Button>
//             </div> */}
//           </div>
//         </div>

//         {/* Enhanced Slide Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//           <div className="flex items-center gap-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`transition-all duration-300 ${
//                   index === currentSlide ? 'w-12 h-3 bg-primary' : 'w-3 h-3 bg-white/30 hover:bg-white/50'
//                 } rounded-full relative overflow-hidden group`}
//               >
//                 {index === currentSlide && (
//                   <div className="absolute inset-0 bg-primary animate-pulse rounded-full"></div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 right-8 animate-bounce">
//           <div className="flex flex-col items-center group cursor-pointer">
//             <span className="text-xs text-white/70 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
//               Scroll Down
//             </span>
//             <ChevronDown className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
//           </div>
//         </div>
//       </div>

//       {/* Floating Action Buttons */}
//       {/* <div className="fixed bottom-6 right-6 z-20 flex flex-col gap-3"> */}
//         {/* <Button 
//           size="lg"
//           className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
//         >
//           <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
//         </Button>
//       </div> */}

//       {/* Background Decorative Elements */}
//       {/* <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div> */}

//       {/* Custom Styles */}
//       {/* <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style> */}
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Scale,
  Shield,
  Award,
  Users,
  Clock,
  ChevronDown,
  PlayCircle,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Phone,
  Calendar,
  MessageSquare,
  TrendingUp,
  Zap,
  FileText,
  Lock,
  PauseCircle,
  Volume2,
  VolumeX,
  Sparkles,
  Target,
  Eye,
  Heart,
  Briefcase,
  Search,
  UserCheck,
  Building2,
  Verified,
  MousePointer,
  ArrowDown,
  ChevronRight,
  Headphones,
  VideoIcon,
  Maximize,
  Play,
  Pause,
  FastForward,
  RotateCcw,
  Share2,
  Bookmark,
  Download,
  ExternalLink,
  Send,
  Mail,
  MapPin,
  NavigationIcon,
  Compass,
  Timer,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Gauge,
  ThumbsUp,
  MessageCircle,
  Coffee,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Flame,
  Wand2,
  StarIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [liveStats, setLiveStats] = useState({
    activeUsers: 1247,
    casesResolving: 89,
    advocatesOnline: 156,
    avgResponseTime: 2.3
  });

  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate=useNavigate()

  // Enhanced slide content
  // const slides = [
  //   {
  //     title: "Professional Legal Solutions",
  //     subtitle: "for Every Challenge",
  //     description: "JP LAW SUVIDHA is a secure, tech-enabled platform designed to connect clients with the right legal professionals. We combine advanced digital tools with deep legal industry insight.",
  //     stats: "10,000+ Cases Resolved",
  //     bgColor: "from-blue-900/20 to-purple-900/20",
  //     accent: "text-blue-400"
  //   },
  //   {
  //     title: "Expert Legal Guidance",
  //     subtitle: "When You Need It Most",
  //     description: "We combine advanced digital tools with deep legal industry insight to simplify communication and ensure timely access to professional legal support.",
  //     stats: "500+ Verified Advocates",
  //     bgColor: "from-emerald-900/20 to-teal-900/20",
  //     accent: "text-emerald-400"
  //   },
  //   {
  //     title: "Trusted Legal Platform",
  //     subtitle: "Across India",
  //     description: "Streamlined legal consultations with verified advocates, ensuring professional representation for your legal matters with complete transparency.",
  //     stats: "28 States Coverage",
  //     bgColor: "from-orange-900/20 to-red-900/20",
  //     accent: "text-orange-400"
  //   },
  //   {
  //     title: "Innovation in Legal Tech",
  //     subtitle: "Powered by Tech",
  //     description: "Revolutionary approach to legal services combining artificial intelligence with human expertise for unprecedented efficiency and accuracy.",
  //     stats: "98% Success Rate",
  //     bgColor: "white",
  //     accent: "text-violet-400"
  //   }
  // ];
  const slides = [
    {
      title: "Professional Legal Solutions",
      subtitle: "for Every Challenge",
      description: "JP LAW SUVIDHA is a secure, tech-enabled platform designed to connect clients with the right legal professionals. We combine advanced digital tools with deep legal industry insight.",
      stats: "10,000+ Cases Resolved",
      bgColor: "from-black/60 via-black/40 to-transparent", // semi-transparent dark overlay
      accent: "text-white"
    },
    {
      title: "Expert Legal Guidance",
      subtitle: "When You Need It Most",
      description: "We combine advanced digital tools with deep legal industry insight to simplify communication and ensure timely access to professional legal support.",
      stats: "500+ Verified Advocates",
      bgColor: "from-black/60 via-black/40 to-transparent",
      accent: "text-white"
    },
    {
      title: "Trusted Legal Platform",
      subtitle: "Across India",
      description: "Streamlined legal consultations with verified advocates, ensuring professional representation for your legal matters with complete transparency.",
      stats: "28 States Coverage",
      bgColor: "from-black/60 via-black/40 to-transparent",
      accent: "text-white"
    },
    {
      title: "Innovation in Legal Tech",
      subtitle: "Powered by Tech",
      description: "Revolutionary approach to legal services combining artificial intelligence with human expertise for unprecedented efficiency and accuracy.",
      stats: "98% Success Rate",
      bgColor: "from-black/60 via-black/40 to-transparent",
      accent: "text-white"
    }
  ];

  // Initialize particles
  const initParticles = useCallback(() => {
    const newParticles: ParticleProps[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'][Math.floor(Math.random() * 4)]
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate particles
  const animateParticles = useCallback(() => {
    setParticles(prevParticles =>
      prevParticles.map(particle => ({
        ...particle,
        x: particle.x + particle.speedX,
        y: particle.y + particle.speedY,
        X: particle.x > window.innerWidth ? 0 : particle.x < 0 ? window.innerWidth : particle.x,
        Y: particle.y > window.innerHeight ? 0 : particle.y < 0 ? window.innerHeight : particle.y,
      }))
    );
  }, []);

  // Enhanced typewriter effect
  useEffect(() => {
    const text = slides[currentSlide].title;
    let index = 0;
    setTypedText('');

    const typeTimer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 70);

    return () => clearInterval(typeTimer);
  }, [currentSlide]);

  // Auto slide with progress
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 7000);

    const progressTimer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1.25));
    }, 100);

    return () => {
      clearInterval(slideTimer);
      clearInterval(progressTimer);
    };
  }, []);

  // Initialize animations
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    initParticles();

    const animationFrame = setInterval(animateParticles, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(animationFrame);
    };
  }, [initParticles, animateParticles]);

  // Live stats updates
  useEffect(() => {
    const statsTimer = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        casesResolving: prev.casesResolving + Math.floor(Math.random() * 6) - 3,
        advocatesOnline: prev.advocatesOnline + Math.floor(Math.random() * 8) - 4,
        avgResponseTime: Math.max(1.5, prev.avgResponseTime + (Math.random() - 0.5) * 0.2)
      }));
    }, 3000);
    return () => clearInterval(statsTimer);
  }, []);

  // Time updates
  useEffect(() => {
    const timeTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeTimer);
  }, []);

  // Feature rotation


  // Scroll and mouse effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <section
      ref={heroRef}
      className="relative h-[720px] flex items-center justify-center overflow-hidden "
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-5"
        width={window.innerWidth}
        height={window.innerHeight}
      />

      {/* Dynamic Background with Video */}
      <div>


        <div className="absolute inset-0  bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundPosition: "center 10%",
            backgroundSize: "initial",
            backgroundRepeat: "no-repeat"
          }}>
          <div className="absolute inset-0 bg-black/50 "></div>
        </div>

        {/* Enhanced Overlay with Dynamic Gradients */}
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor} transition-all duration-1000`}>
          <div className="absolute inset-0 bg-pink/20"></div>
        </div>

        {/* Animated Mesh Gradient */}
        <div
          className="absolute inset-0 opacity-20 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, index) => (
            <div
              key={index}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: particle.opacity,
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-30">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[90vh]">

          {/* Left Content - Enhanced */}
          <div className={`lg:col-span-7 transition-all duration-1000 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>

            {/* Enhanced Branding */}

            {/* Dynamic Title with Advanced Typewriter */}
            <div >
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-4 min-h-[150px]">
                <span className="inline-block">
                  {typedText}
                  <span className="animate-pulse text-primary ml-1">|</span>
                </span>
              </h1>
              <p className={`text-2xl md:text-3xl font-medium mb-4 transition-all duration-500 ${slides[currentSlide].accent}`}>
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Enhanced Description with Stats */}
            <div className="mb-8">
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-6">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Interactive Feature Showcase */}
            

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-700 to-orange-700 text-white hover:from-primary/90 hover:to-cyan-600/90 px-8 py-4 text-lg font-medium group relative overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                onClick={() =>{
                   document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                               Tawk_API.toggle()
              }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Chat With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 group"
                onClick={()=>{
                      navigate('/about',{replace:true})
                }}

              >
                {isVideoPlaying ?
                  <PauseCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" /> :
                  <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                }
                {isVideoPlaying ? 'Pause Demo' : 'Watch Demo'}
              </Button>
            </div>

            </div>
          </div>


          {/* <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            

            {/* Recent Testimonials Carousel */}
          {/* Quick Action Panel */}

        </div>
      </div>

      {/* Enhanced Navigation Indicators */}

      {/* Enhanced Scroll Indicator */}
      <div className="absolute  center bottom-2 animate-bounce">
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs text-white/70 bg-black/30 px-2 py-1 rounded-full">
              Explore More
            </span>
          </div>
          <div className="relative">
            <ChevronDown className="w-8 h-8 text-white/70 group-hover:text-white transition-colors" />
            <div className="absolute inset-0 w-8 h-8 border border-white/30 rounded-full animate-ping group-hover:border-white/50"></div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;