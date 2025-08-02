import React, { useState } from 'react';
import { ArrowLeft, Check, Star, Shield, Users, Zap, Crown, Award, Phone, X, Building, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import plans from '@/Data/plans_data';
import Footer from '../components/Footer';


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
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
      
      {/* Close Button */}
      <button
        onClick={() => setfaq(prev => !prev)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        aria-label="Close FAQ"
      >
        <X className="w-5 h-5" />
      </button>

      {/* FAQ Content */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>

        {/* Question 1 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">1. What subscription plans do you offer?</h3>
          <p className="mt-1 text-gray-600">
            We offer <strong>Basic</strong>, <strong>Pro</strong>, and <strong>Enterprise</strong> plans—tailored for everyone from individuals to large organizations with advanced needs.
          </p>
        </div>

        {/* Question 2 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">2. Can I try a plan before committing?</h3>
          <p className="mt-1 text-gray-600">
            Yes! Enjoy a <strong>7-day free trial</strong> with full access—no credit card required. Upgrade anytime during or after the trial.
          </p>
        </div>

        {/* Question 3 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">3. Can I upgrade or downgrade my plan later?</h3>
          <p className="mt-1 text-gray-600">
            Absolutely. You can <strong>upgrade, downgrade, or cancel</strong> your subscription anytime from your dashboard. Changes apply immediately or at the next billing cycle.
          </p>
        </div>

        {/* Question 4 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">4. What payment methods do you accept?</h3>
          <p className="mt-1 text-gray-600">
            We accept <strong>Visa, MasterCard, American Express</strong>, and <strong>UPI (India)</strong>. Enterprise clients can also opt for invoicing.
          </p>
        </div>

        {/* Question 5 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">5. Will I be charged automatically?</h3>
          <p className="mt-1 text-gray-600">
            Yes, subscriptions are <strong>billed automatically</strong> monthly or annually, depending on your plan. You’ll be notified before each renewal.
          </p>
        </div>

        {/* Question 6 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">6. Can I cancel anytime?</h3>
          <p className="mt-1 text-gray-600">
            Yes, cancel anytime. Your access remains active until your billing period ends. <strong>No further charges</strong> will be applied.
          </p>
        </div>

        {/* Question 7 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">7. Is my data safe and secure?</h3>
          <p className="mt-1 text-gray-600">
            Absolutely. We use <strong>industry-standard encryption</strong> and secure gateways. Our platform is <strong>GDPR-compliant</strong> to ensure full data protection.
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