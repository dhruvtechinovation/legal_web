// import React from 'react'
// import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function SubscriptionPlans() {
//   const navigate=useNavigate()
//   const plans = [
//     {
//       name: "Starter",
//       price: "499/month",
//       description: "For new advocates getting started with online leads.",
//       features: [
//         "Up to 10 Verified Leads/month",
//         "Direct Client Chat Access",
//         "Basic Profile Listing",
//         "Email Notifications",
//         "Standard Support",
//       ],
//       highlight: false,
//     },
//     {
//       name: "Growth",
//       price: "1999/month",
//       description: "For practicing advocates aiming to grow their clientele.",
//       features: [
//         "Up to 40 Verified Leads/month",
//         "Priority Listing in Search",
//         "Direct Client Chat Access",
//         "Lead Insights Dashboard",
//         "Priority Support",
//       ],
//       highlight: true,
//     },
//     {
//       name: "Pro Plus",
//       price: "2999/month",
//       description: "For top advocates who want maximum visibility and lead volume.",
//       features: [
//         "Unlimited Verified Leads",
//         "Top Placement in Listings",
//         "Real-time Lead Alerts",
//         "Dedicated Account Manager",
//         "24/7 Premium Support",
//       ],
//       highlight: false,
//     },
//   ];
//   const subscribehandler=(price)=>{
//     // console.log(`selected ${price}`)
//       navigate('/Advregister',
//         {
//           state: { price },
//         });

//   }

//   return (
//     <div className=" flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 items-center justify-center md:px-12">
//       <div className='underline p-4'>

//       <Link
//     to="/"
//     className="absolute top-4 left-4 flex items-center text-black hover:underline"
//   >
//     <ArrowLeft size={18} className="mr-1 " />
//     Back to Home
//   </Link>
//       </div>
//       <div className="flex flex-col items-center justify-center w-full">
//         <h1 className="text-3xl font-bold text-center mb-12  text-gray-800">
//           Choose Your Plan
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {plans.map((plan) => (
//             <div
//               key={plan.name}
//               className={`relative rounded-2xl border transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl p-8 bg-white ${plan.highlight
//                   ? "border-gray-200 ring-2 ring-yellow-700"
//                   : "border-gray-200"
//                 }`}
//             >
//               {plan.highlight && (
//                 <div className="absolute top-0 right-0 px-3 py-1 text-black text-xs font-bold rounded-tr-2xl rounded-bl-2xl animate-blink">
//                 Most Popular
//               </div>

//               )}
//               <h2 className="text-2xl font-bold text-gray-800">{plan.name}</h2>
//               <p className="text-4xl font-extrabold text-blue-600 mt-2">
//               &#8377;{plan.price}
//               </p>
//               <p className="text-gray-500 mt-2 mb-6">{plan.description}</p>
//               <ul className="mb-6 space-y-3">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center text-gray-700">
//                     <span className="text-green-500 mr-2">✓</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               {/* <button className='px-10' >
//               Subscribe
//             </button> */}
//               <button onClick={() => { subscribehandler(plan.price) }} className="block mx-auto bg-black text-white px-6 py-2 rounded-lg hover:bg-white-700 transition">
//                 Subscribe
//               </button>
//             </div>
//           ))}
//         </div>
//         <div />
//       </div>
//     </div>
//       );
// };
//       export default SubscriptionPlans
import React, { useState } from 'react';
import { ArrowLeft, Check, Star, Shield, Users, Zap, Crown, Award, Phone, X, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import plans from '@/Data/plans_data';
import Footer from '../components/Footer';
// Mock navigation function
// const mockNavigate = (path: string, options?: any) => {
//   console.log(`Navigating to: ${path}`, options);
//   alert(`Navigation to ${path} would happen here with data: ${JSON.stringify(options?.state || {})}`);
// };

// const mockLink = ({ to, children, className, onClick }: { to: string; children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent) => void }) => (
//   <button 
//     className={className} 
//     onClick={(e) => {
//       if (onClick) {
//         onClick(e);
//       } else {
//         mockNavigate(to);
//       }
//     }}
//   >
//     {children}
//   </button>
// );

function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [faq, setfaq] = useState(false)
  const navigate = useNavigate()
  const iconMap = {
    Users,
    Zap,
    Crown,
    Building
  };

  // const plans = [
  //   {
  //     name: "Starter",
  //     price: "999",
  //     originalPrice: "699",
  //     period: "month",
  //     description: "Perfect for new advocates getting started with online client acquisition.",
  //     features: [
  //       "Up to 10 Verified Leads/month",
  //       "Direct Client Chat Access",
  //       "Basic Profile Listing",
  //       "Email Notifications",
  //       "Standard Support (48hrs)",
  //       "Legal Document Templates",
  //     ],
  //     highlight: false,
  //     icon: "Users",
  //     color: "from-blue-50 to-indigo-50",
  //     borderColor: "border-blue-200",
  //     badge: "Best for Beginners",
  //     savings: "Save 30%"
  //   },
  //   {
  //     name: "Growth",
  //     price: "1999",
  //     originalPrice: "2799",
  //     period: "month",
  //     description: "Ideal for practicing advocates aiming to significantly grow their clientele.",
  //     features: [
  //       "Up to 40 Verified Leads/month",
  //       "Priority Listing in Search Results",
  //       "Advanced Client Chat with Video Calls",
  //       "Lead Insights & Analytics Dashboard",
  //       "Priority Support (24hrs)",
  //       "Advanced Legal Templates",
  //       "Client Management System",
  //       "Custom Profile Showcase",
  //     ],
  //     highlight: true,
  //     icon: "Zap",
  //     color: "from-orange-50 to-yellow-50",
  //     borderColor: "border-orange-300",
  //     badge: "Most Popular",
  //     savings: "Save 40%"
  //   },
  //   {
  //     name: "Pro Plus",
  //     price: "4999",
  //     originalPrice: "9999",
  //     period: "month",
  //     description: "Premium solution for top advocates who want maximum visibility and unlimited growth.",
  //     features: [
  //       "Unlimited Verified Leads",
  //       "Top Placement in All Listings",
  //       "Real-time Lead Alerts & Notifications",
  //       "Dedicated Account Manager",
  //       "24/7 Premium Support",
  //       "Complete Legal Practice Suite",
  //       "Advanced Analytics & Reporting",
  //       "White-label Client Portal",
  //       "Marketing Campaign Tools",
  //     ],
  //     highlight: false,
  //     icon: "Crown",
  //     color: "from-purple-50 to-pink-50",
  //     borderColor: "border-purple-300",
  //     badge: "Enterprise Ready",
  //     savings: "Save 50%"
  //   },
  // ];

  const subscribeHandler = async (planName: string, price: string, icon: any) => {
    setSelectedPlan(planName);
    console.log('from subscription', planName)
    setIsProcessing(true);
    navigate('/Advregister', {
      state: {
        planName
        , price
        , icon
      }
    })

    // // Simulate processing
    // await new Promise(resolve => setTimeout(resolve, 1500));

    // mockNavigate('/Advregister', {
    //   state: { price, planName },
    // });

    setIsProcessing(false);
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* {mockLink({
              to: "/",
              className: "inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group",
              children: (
                <>
                  <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">Back to Home</span>
                </>
              )
            })} */}
            <Link to='/' className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
              <>
                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Home</span>
              </></Link>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Legal Portal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Limited Time Offer - Up to 50% Off
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Growth Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect subscription plan to accelerate your legal practice growth and connect with more clients than ever before.
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure & Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>10,000+ Advocates</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-purple-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => {
            const IconComponent = iconMap[plan.icon];
            const isSelected = selectedPlan === plan.name;
            const isProcessingThis = isProcessing && isSelected;

            return (
              <Card
                key={plan.name}
                className={` relative flex flex-col justify-between rounded-xl border ${plan.highlight ? 'border-orange-400 ring-2 ring-orange-300' : 'border-gray-200'
                  } shadow-sm overflow-hidden`}
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    {plan.badge}
                  </div>
                )}

                {/* Savings Badge */}
                {!plan.highlight && (
                  <div className="absolute top-4 right-4">
                    {(plan.name !== 'Corporate' && plan.name !== 'Trial') &&
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        {plan.savings}
                      </Badge>}
                  </div>
                )}

                <CardHeader className={`bg-gradient-to-br ${plan.color} p-7`}>
                  <div className="flex  items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-white/70 flex items-center justify-center `}>
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <div >
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      {!plan.highlight && ( 
                        <p className="text-sm text-gray-700">{plan.badge}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-700">{plan.name === 'Corporate' ? ' ' : `₹${plan.price}`}</span>
                      <span className="text-gray-600">{plan.name === 'Corporate' ? ' ' : `/${plan.period}`}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg text-gray-400 line-through">
                        {(plan.name !== 'Corporate' && plan.name !== 'Trial') ? `₹${plan.originalPrice}` : ''}
                      </span>
                      {(plan.name !== 'Corporate' && plan.name !== 'Trial') &&
                        <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                          {plan.savings}
                        </Badge>}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                </CardHeader>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <ul className="space-y-2 mt-4 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        {feature.status ? (
                          <Check className="w-5 h-5 text-green-600 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mt-0.5" />
                        )}
                        <span className={feature.status ? "" : "line-through text-gray-400"}>
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => subscribeHandler(plan.name, plan.price, plan.icon)}
                    disabled={isProcessing}
                    className={`w-full h-12 font-semibold transition-all duration-200 mt-4  ${plan.highlight
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                      } ${isProcessingThis ? 'opacity-75' : ''}`}
                  >
                    {isProcessingThis ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </div>
                    ) : (
                      <>
                        {plan.highlight ? 'Start Growing Now' : 'Get Started'}
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    No setup fees • Cancel anytime
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our legal platform specialists are here to help you choose the right plan for your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-gray-300 hover:bg-gray-50"
                onClick={() => alert('Contact support would be implemented here')}
              >
                {/* <Phone className="w-4 h-4 mr-2" /> */}
                {/* Talk to an Expert */}
                LATER CUSTOMER CARE NUMBER CAN BE INTRODUCED
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 hover:bg-gray-50"
                onClick={() => setfaq(!faq)
                }
              >
                View FAQ
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm">
            <Shield className="w-4 h-4" />
            <span>All plans include enterprise-grade security and compliance features</span>
          </div>
        </div>
      </div>
      {faq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">

            {/* Close button */}
            <button
              onClick={() => setfaq(prev => !prev)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* FAQ content */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

              <div>
                <h3 className="font-semibold text-lg">1. What subscription plans do you offer?</h3>
                <p className="text-gray-600">
                  We offer three plans: <strong>Basic</strong>, <strong>Pro</strong>, and <strong>Enterprise</strong>.
                  Each plan is tailored to different needs, from individuals just getting started to large teams requiring advanced features and support.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">2. Can I try a plan before committing?</h3>
                <p className="text-gray-600">
                  Yes! We offer a <strong>7-day free trial</strong> for all new users. No credit card is required, and you can upgrade to a paid plan anytime during or after the trial.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">3. Can I upgrade or downgrade my plan later?</h3>
                <p className="text-gray-600">
                  Absolutely. You can <strong>upgrade, downgrade, or cancel</strong> your subscription at any time directly from your account dashboard. Changes take effect immediately or at the next billing cycle, depending on the situation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">4. What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit and debit cards, including <strong>Visa, MasterCard, American Express</strong>, and <strong>UPI (India)</strong>. For enterprise customers, we also support invoicing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">5. Will I be charged automatically?</h3>
                <p className="text-gray-600">
                  Yes, subscriptions are <strong>billed automatically</strong> either monthly or annually, based on the plan you choose. You’ll receive an email notification before each renewal.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">6. Can I cancel anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and <strong>no further charges</strong> will be made.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">7. Is my data safe and secure?</h3>
                <p className="text-gray-600">
                  Absolutely. We use industry-standard <strong>encryption</strong> and <strong>secure payment gateways</strong> to protect your data. We also comply with data privacy regulations like <strong>GDPR</strong> to ensure your information is handled responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>

  );
}

export default SubscriptionPlans;