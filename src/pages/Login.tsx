
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Eye, EyeOff, ArrowLeft,Shield } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import Navbar from '@/components/Navbar';
// import TermsAndConditionsModal from '@/components/Terms_conditions';



// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [terms, setTerms] = useState(false)
//   const [showterms, setShowTerms] = useState(false)
//   const navigate = useNavigate()
//   const handleSubmit = async (e: React.FormEvent) => {

//     e.preventDefault();
//     setError('');
//     if (!terms) {
//       alert("Please agree to the Terms and Conditions before signing in.");
//       return; // Stop form submission
//     }
//     setIsSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       // This is where you would make the actual API call

//       // console.log('Login attempt with:', { email, password });

//       // For demo purposes, let's just show an error
//       // setError('Invalid email or password. Please try again.');

//       navigate('/personal_dashboard')
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     // <div className="min-h-screen flex flex-col">
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-200 via-white to-gray-400 ">
//       <svg
//         className="absolute top-20 left-10 w-32 h-32 opacity-10 text-blue-"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2L2 20h20L12 2z" />

//       </svg>
//       <svg
//         className="absolute bottom-10 right-10 w-32 h-32 opacity-10 text-blue-"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2L2 20h20L12 2z" />

//       </svg>



//       {/* <Navbar /> */}

//       <div className="w-full bg-pink-300 rounded">
//         <div className='underline p-4'>

//         <Link
//           to="/"
//           className="inline-flex items-center text-legal-DEFAULT hover:text-legal-accent base-transition"
//         >
//           <ArrowLeft size={18} className="mr-2" />
//           Back to Home
//         </Link>
//         <div className='absolute top-0 right-0 p-4'>logo</div>
//         </div>
//       </div>

//       <div className="flex-1 flex items-center justify-center p-4">
//         <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-7 animate-fade-in">
//           <div className="text-center mb-8">
//             <h1 className="heading-lg mb-2">Welcome Back</h1>
//               <div className="flex items-center gap-2 justify-center mb-2">
           
//                 <Shield className="w-5 h-5 text-primary" />
//             <p className="text-legal-muted">
//               Sign in to access your account</p>
//              </div>
//           </div>

//           {error && (
//             <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200 text-sm">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-legal-DEFAULT mb-1">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-legal-accent focus:border-legal-accent transition"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}

//               />
//             </div>

//             <div>
//               <div className="flex justify-between items-start mb-1">
//                 <label htmlFor="password" className="block text-sm font-medium text-legal-DEFAULT ">
//                   Password
//                 </label>
//               </div>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   required
//                   className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-legal-accent focus:border-legal-accent transition"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Link
//                   to="/forgot-password"
//                   className="text-sm text-legal-DEFAULT hover:text-legal-accent"
//                 >
//                   Forgot password?
//                 </Link>
//                 <button
//                   type="button"
//                   className="absolute right-3 top-1/3 transform -translate-y-1/2 text-legal-muted hover:text-legal-DEFAULT base-transition"
//                   onClick={() => setShowPassword(!showPassword)}
//                   tabIndex={-1}
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             <div className="mb-4 flex items-start gap-2">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 checked={terms}
//                 onChange={(e) => setTerms(e.target.checked)}

//                 className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-legal-DEFAULT"
//               />
//               <label htmlFor="terms" className="text-sm text-gray-700">
//                 I agree to the <a href="/" className="underline text-legal-accent"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setShowTerms(true);
//                   }}>Terms and Conditions</a>
//               </label>
//             </div>
//             {showterms && (
//               <TermsAndConditionsModal
//                 onClose={() => setShowTerms(false)}
//                 onAccept={() => {
//                   setTerms(true);
//                   setShowTerms(false);
//                 }}
//               />

//             )}

//             <div>
//               <button
//                 type="submit"
//                 className={cn(
//                   "w-full py-3 px-4 rounded-md text-white font-medium base-transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-legal-DEFAULT",
//                   isSubmitting
//                     ? "bg-legal-accent cursor-not-allowed"
//                     : "bg-black hover:bg-legal-accent"
//                 )}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Signing In...' : 'Sign In'}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-legal-muted">
//               Don't have an account?{' '}
//               <Link to="/signup"
//                 className={`text-legal-DEFAULT font-medium ${isSubmitting ? 'pointer-events-none text-gray-400 cursor-not-allowed' : 'hover:text-legal-accent'}`}
//                 onClick={(e) => isSubmitting && e.preventDefault()}>
//                 Subscribe
//               </Link>
//             </p>
//           </div>
//           <div className="mt-4 p-3 bg-muted rounded-lg">
//                  <p className="text-xs text-muted-foreground text-center">
//                    🔒 Your connection is secure and encrypted. All data is protected according to legal industry standards.
//                </p>
//               </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Scale, Shield, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// Mock navigation functions for demo
// const mockNavigate = (path: string) => {
//   console.log(`Navigating to: ${path}`);
//   alert(`Navigation to ${path} would happen here`);
// };

// const mockLink = ({ to, children, className, onClick }: { to: string; children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent) => void }) => (
//   <button 
//     className={className} 
//     onClick={(e) => {
//       if (onClick) {
//         onClick(e);
//       } else {
//         navigate(to);
//       }
//     }}
//   >
//     {children}
//   </button>
// );

// Mock Terms and Conditions Modal
// const TermsAndConditionsModal = ({ onClose, onAccept }: { onClose: () => void; onAccept: () => void }) => (
//   <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//     <div className="bg-white rounded-lg max-w-md w-full p-6">
//       <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
//       <div className="max-h-60 overflow-y-auto mb-4 text-sm text-muted-foreground">
//         <p className="mb-2">By using this legal portal, you agree to:</p>
//         <ul className="list-disc pl-4 space-y-1">
//           <li>Maintain confidentiality of all client information</li>
//           <li>Use the platform only for legitimate legal purposes</li>
//           <li>Comply with all applicable laws and regulations</li>
//           <li>Protect your login credentials</li>
//           <li>Report any security issues immediately</li>
//         </ul>
//         <p className="mt-2">This platform is designed for legal professionals and contains sensitive information protected by attorney-client privilege.</p>
//       </div>
//       <div className="flex gap-2">
//         <Button variant="outline" onClick={onClose} className="flex-1">
//           Cancel
//         </Button>
//         <Button onClick={onAccept} className="flex-1">
//           Accept
//         </Button>
//       </div>
//     </div>
//   </div>
// );

//  function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   const [terms, setTerms] = useState(false);
//   const [showTerms, setShowTerms] = useState(false);
//   const navigate=useNavigate()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');

//     if (!terms) {
//       alert("Please agree to the Terms and Conditions before signing in.");
//       return;
//     }

//     setIsSubmitting(true);

//     // Basic validation
//     if (!email || !password) {
//       setError('Please fill in all required fields.');
//       setIsSubmitting(false);
//       return;
//     }

//     if (!email.includes('@')) {
//       setError('Please enter a valid email address.');
//       setIsSubmitting(false);
//       return;
//     }

//     // Simulate login process
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       console.log('Login attempt:', { email, password });
//       navigate('/personal_dashboard');
//     } catch (err) {
//       setError('Login failed. Please check your credentials and try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-200 via-white to-gray-400">
//       {/* Background SVG Decorations */}
//       <svg
//         className="absolute top-10 left-10 w-32 h-32 opacity-10 text-primary"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2L2 20h20L12 2z" />
//       </svg>
//       <svg
//         className="absolute bottom-10 right-10 w-24 h-24 opacity-5 text-primary"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2L2 20h20L12 2z" />
//       </svg>

//       {/* Back Navigation */}
//       <div className="absolute left-0 top-2">
//       {/* <Link to='/'
//             <>
//             </> */}
//             <Link to='/'
//              className='flex'>
//             <ArrowLeft size={18} className="mr-2" />
//             Back to Home
            
//             </Link>

//       </div>

//       <div className="flex-1 flex items-start justify-center p-2">
//         <div className="w-full max-w-md">
//           {/* Header Section */}
//           <div className="text-center mb-8">
//             <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
//               <Scale className="w-8 h-8 text-primary-foreground" />
//             </div>
//             <h1 className="text-2xl font-semibold text-foreground mb-2">Welcome Back</h1>
//             {/* <p className="text-muted-foreground">Sign in to access your account</p> */}
//           </div>

//           {/* Login Card */}
//           <Card className="shadow-xl border-0 bg-white rounded-2xl animate-fade-in">
//             <CardHeader className="space-y-1 pb-6">
//               <div className="flex items-center gap-2 justify-center mb-2">
//                 <Shield className="w-5 h-5 text-primary" />
//                 <CardTitle className="text-xl text-center">Legal Portal Access</CardTitle>
//               </div>
//               <CardDescription className="text-center text-muted-foreground">
//                 Secure login for legal professionals
//               </CardDescription>
//             </CardHeader>
            
//             <CardContent>
//               {error && (
//                 <Alert variant="destructive" className="mb-6">
//                   <AlertDescription>{error}</AlertDescription>
//                 </Alert>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-foreground">Email Address</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="your.email@lawfirm.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
//                     autoComplete="email"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <div className="flex justify-between items-center">
//                     <Label htmlFor="password" className="text-foreground">Password</Label>
//                     {/* {mockLink({
//                       to: "/forgot-password",
//                       className: "text-sm text-primary hover:text-primary/80 transition-colors",
//                       children: "Forgot password?"
//                     })} */}
//                   </div>
//                   <div className="relative">
//                     <Input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
//                       autoComplete="current-password"
//                       required
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
//                       onClick={() => setShowPassword(!showPassword)}
//                       tabIndex={-1}
//                     >
//                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="flex items-start gap-2">
//                   <Checkbox
//                     id="terms"
//                     checked={terms}
//                     onCheckedChange={(checked) => setTerms(checked as boolean)}
//                     className="mt-1"
//                   />
//                   <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
//                     I agree to the{' '}
//                     <button
//                       type="button"
//                       className="underline text-primary hover:text-primary/80 transition-colors"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setShowTerms(true);
//                       }}
//                     >
//                       Terms and Conditions
//                     </button>
//                   </Label>
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
//                       Signing In...
//                     </div>
//                   ) : (
//                     <div className="flex items-center gap-2">
//                       <Lock className="w-4 h-4" />
//                       Sign In
//                     </div>
//                   )}
//                 </Button>
//               </form>

//               {/* Footer Section */}
//               <div className="mt-6 text-center">
//                 {/* <p className="text-muted-foreground">
//                   Don't have an account?{' '}
//                   {mockLink({
//                     to: "/signup",
//                     className: `text-primary font-medium transition-colors ${
//                       isSubmitting 
//                         ? 'pointer-events-none text-pink-400 cursor-not-allowed' 
//                         : 'hover:text-primary/80'
//                     }`,
//                     onClick: (e) => isSubmitting && e.preventDefault(),
//                     children: "Subscribe"
//                   })}
//                 </p> */}
//               </div>

//               {/* Security Notice */}
//               <div className="mt-4 p-3 bg-muted rounded-lg">
//                 <p className="text-xs text-muted-foreground text-center">
//                   🔒 Your connection is secure and encrypted. All data is protected according to legal industry standards.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Additional Info */}
//           <div className="mt-6 text-center">
//             <p className="text-xs text-muted-foreground">
//               Protected by industry-standard security protocols
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Terms and Conditions Modal */}
//       {showTerms && (
//         <TermsAndConditionsModal
//           onClose={() => setShowTerms(false)}
//           onAccept={() => {
//             setTerms(true);
//             setShowTerms(false);
//           }}
//         />
//       )}
//     </div>
//   );
// }
// export default LoginForm

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Scale, Eye, EyeOff, ArrowLeft, Shield, Lock, CheckCircle, Users, FileText} from 'lucide-react';
import {Link} from 'react-router-dom'
import axios from 'axios';

// Mock navigation functions for demo
const mockNavigate = (path: string) => {
  console.log(`Navigating to: ${path}`);
  // alert(`Navigation to ${path} would happen here`);
};

const mockLink = ({ to, children, className, onClick }: { to: string; children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent) => void }) => (
  <button 
    className={className} 
    onClick={(e) => {
      if (onClick) {
        onClick(e);
      } else {
        mockNavigate(to);
      }
    }}
  >
    {children}
  </button>
);

// Enhanced Terms and Conditions Modal
const TermsAndConditionsModal = ({ onClose, onAccept }: { onClose: () => void; onAccept: () => void }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Terms and Conditions</h3>
            <p className="text-sm text-gray-600">Legal Platform Usage Agreement</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 overflow-y-auto max-h-96">
        <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
          <section>
            <h4 className="font-semibold text-gray-900 mb-2">1. Platform Access & Usage</h4>
            <p className="text-sm leading-relaxed">By accessing this legal portal, you acknowledge that you are a licensed legal professional or authorized personnel with legitimate access to this system.</p>
          </section>
          
          <section>
            <h4 className="font-semibold text-gray-900 mb-2">2. Confidentiality & Privacy</h4>
            <ul className="text-sm space-y-1 list-disc pl-4">
              <li>Maintain strict confidentiality of all client information</li>
              <li>Protect attorney-client privilege at all times</li>
              <li>Report any potential data breaches immediately</li>
              <li>Use secure networks and devices only</li>
            </ul>
          </section>
          
          <section>
            <h4 className="font-semibold text-gray-900 mb-2">3. Professional Responsibility</h4>
            <ul className="text-sm space-y-1 list-disc pl-4">
              <li>Comply with all applicable legal and ethical standards</li>
              <li>Use the platform only for legitimate legal purposes</li>
              <li>Maintain accurate and up-to-date professional credentials</li>
              <li>Follow all firm policies and procedures</li>
            </ul>
          </section>
          
          <section>
            <h4 className="font-semibold text-gray-900 mb-2">4. Security Requirements</h4>
            <ul className="text-sm space-y-1 list-disc pl-4">
              <li>Protect your login credentials and enable two-factor authentication</li>
              <li>Log out from shared or public devices</li>
              <li>Report suspicious activity immediately</li>
              <li>Use strong, unique passwords</li>
            </ul>
          </section>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={onAccept} className="flex-1 bg-blue-600 hover:bg-blue-700">
            Accept & Continue
          </Button>
        </div>
      </div>
    </div>
  </div>
);
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [terms, setTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!terms) {
      setError("Please agree to the Terms and Conditions before signing in.");
      return;
    }

    setIsSubmitting(true);

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Simulate login process
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login attempt:', { email, password });
      const data={email:email,password:password}
      const res= axios.post('http://localhost:3000/api/login',data)
      res.then((result)=>{
        console.log(result)
        mockNavigate('/personal_dashboard');
      })
      res.catch((error)=>{
        return console.log(error)
      })
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    } 
    // finally {
    //   mockNavigate('/personal_dashboard');
    // }
    setIsSubmitting(false);
    setEmail('')
    setPassword('')
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-black via-white-200 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 left-40 w-16 h-16 border-2 border-white/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Legal Practice Management</h1>
            <p className="text-xl text-blue-100 mb-8">Secure, professional, and compliant legal platform for modern law firms</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Bank-Level Security</h3>
                <p className="text-blue-100 text-sm">End-to-end encryption and compliance</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Collaborative Workspace</h3>
                <p className="text-blue-100 text-sm">Seamless team collaboration tools</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Trusted by 10,000+ Attorneys</h3>
                <p className="text-blue-100 text-sm">Industry-leading legal platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 lg:p-8">
          {/* {mockLink({
            to: "/",
            className: "inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors",
            children: (
              <>
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </>
            )
          })}
           */}
              <Link to='/' className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
                                   <>
                                         <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                         <span className="font-medium">Back to Home</span>
                                       </></Link>
          <div className="lg:hidden">
            <Scale className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Login Form */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <div className="lg:hidden w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Please sign in to your account</p>
            </div>

            {error && (
              <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  className="w-full h-14 px-4 pt-6 pb-2 border-2 border-gray-400 rounded-lg hover:border-blue-700 "
                  placeholder=" "
                  autoComplete="email"
                  required
                />
                <Label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    emailFocused || email
                      ? 'top-2 text-xs text-blue-700 font-medium'
                      : 'top-4 text-base text-gray-400'
                  }`}
                >
                  Email Address
                </Label>
              </div>

              {/* Password Field */}
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  className="w-full h-14 px-4 pt-6 pb-2 pr-12 rounded-lg bg-white border-2 border border-gray-400 hover:border-blue-700"
                  placeholder=" "
                  autoComplete="current-password"
                  required
                />
                <Label
                  htmlFor="password"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    passwordFocused || password
                      ? 'top-2 text-xs text-blue-700 font-medium'
                      : 'top-4 text-base text-gray-400'
                  }`}
                >
                  Password
                </Label>
                <button
                  type="button"
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                  <Checkbox
                    id="remember"
                    className="rounded border-gray-300"
                  />
                  <Label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-700 cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div> */}
                {mockLink({
                  to: "/forgot-password",
                  className: "text-sm text-gray-700 hover:text-blue-700 transition-colors",
                  children: "Forgot password?"
                })}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={terms}
                  onCheckedChange={(checked) => setTerms(checked as boolean)}
                  className="mt-1 rounded border-gray-300"
                />
                <Label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                  I agree to the{' '}
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowTerms(true);
                    }}
                  >
                    Terms and Conditions
                  </button>
                  {' '}and{' '}
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 underline transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Privacy Policy would be shown here');
                    }}
                  >
                    Privacy Policy
                  </button>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-black hover:bg-blue-700 text-white font-medium transition-colors focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing you in...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Sign In
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                {mockLink({
                  to: "/signup",
                  className: `font-medium text-blue-600 hover:text-blue-800 transition-colors ${
                    isSubmitting ? 'pointer-events-none opacity-50' : ''
                  }`,
                  onClick: (e) => isSubmitting && e.preventDefault(),
                  children: "Request Access"
                })}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500">
                🔒 This platform uses enterprise-grade security and is compliant with legal industry standards including GDPR and CCPA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <TermsAndConditionsModal
          onClose={() => setShowTerms(false)}
          onAccept={() => {
            setTerms(true);
            setShowTerms(false);
          }}
        />
      )}
    </div>
  );
}

export default LoginForm