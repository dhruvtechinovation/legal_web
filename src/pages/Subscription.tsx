import React, { useState } from 'react';
import { ArrowLeft, Check, Star, Shield, Users, Zap, Crown, Award, Phone, X, Building, Scale, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import plans from '@/Data/plans_data';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const FAQModal = ({ onClose }: { onClose: () => void }) => {
  const faqItems = [
    {
      question: "How does the subscription billing work?",
      answer: "Subscriptions are billed automatically based on your selected plan (monthly or yearly). You'll receive an invoice 3 days before each billing cycle and can cancel anytime with 30 days notice."
    },
    {
      question: "What types of leads will I receive?",
      answer: "You'll receive verified leads from potential clients actively seeking legal services in your practice areas. All leads include contact information, case details, and urgency level."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan anytime. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. No fees for plan changes."
    },
    {
      question: "Is there a minimum contract period?",
      answer: "No, there are no long-term contracts. You can cancel your subscription anytime with 30 days written notice. We believe in earning your business through value."
    },
    {
      question: "How is my data protected?",
      answer: "We use bank-level encryption and comply with all legal industry standards including attorney-client privilege protection. All data is stored securely and never shared with third parties."
    },
    {
      question: "What support is included?",
      answer: "All plans include email support. Growth plan includes priority support (24hr response), and Pro Plus includes dedicated account management with real-time support."
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h3>
                <p className="text-sm text-gray-600">Common questions about our subscription service</p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-96">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-gray-200">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium text-gray-900 text-sm">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};



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


  const subscribeHandler = async (planName: string, price: string, icon: any) => {
    setSelectedPlan(planName);
    // console.log('from subscription', planName)
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
      <div className="bg-black shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to='/' className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group">
              <>
                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform text-white" />
                <span className="font-medium text-white">Back to Home</span>
              </></Link>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">JP Law Suvidha</span>
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
        <FAQModal onClose={() => setfaq(!faq)} />
      )}
      <Footer />
    </div>

  );
}

export default SubscriptionPlans;