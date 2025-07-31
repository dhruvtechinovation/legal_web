// ChangePlanModal.tsx
import {  Building, Check, Crown, Users, X, Zap } from 'lucide-react';
import { useState } from 'react';
import plans from '@/Data/plans_data';
import { Badge } from '@/components/ui/badge';

function ChangePlan({ onSelect, onClose }: {

  onSelect: (planName: string, price: string, icon: any) => void;
  onClose: () => void;
}) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const iconMap = {
    Users,
    Zap,
    Crown,
    Building
  };


  // const plans = [/* ... your plans array ... */]; // Keep your original plans here
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

  const handleChange = async (planName: string, price: string, icon: any) => {
    setSelectedPlan(planName);
    setIsProcessing(true);
    onSelect(planName, price, icon); // Pass selected plan back to parent
    setIsProcessing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Change Your Plan</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const IconComponent = iconMap[plan.icon];
            const isSelected = selectedPlan === plan.name;
            const isProcessingThis = isProcessing && isSelected;

            return (
              <div
                key={plan.name}
                className={`flex flex-col justify-between rounded-xl border ${plan.highlight ? 'border-orange-400 ring-2 ring-orange-300' : 'border-gray-200'
                  } shadow-sm overflow-hidden`}
              >
                <div className={`bg-gradient-to-br ${plan.color} p-6`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-sm text-gray-600">{plan.name === 'Corporate'? ' ': `${plan.badge}`}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-3xl font-bold text-gray-900">{plan.name === 'Corporate'? ' ' :`₹${plan.price}`}</span>
                    <span className="text-sm text-gray-500">{plan.name === 'Corporate'? ' ': `/ ${plan.period}`}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg text-gray-400 line-through">
                        {(plan.name !== 'Corporate' && plan.name !== 'Trial') ? `₹${plan.originalPrice}` : ''}
                      </span>
                      {(plan.name !== 'Corporate' && plan.name !== 'Trial') &&
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {plan.savings}
                        </Badge>}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="p-6 flex flex-col flex-grow">
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

                  <button
                    onClick={() => handleChange(plan.name, plan.price, plan.icon)}
                    className="w-full px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800"
                  >
                    {isProcessingThis ? 'Processing...' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChangePlan;
