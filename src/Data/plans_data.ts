const plans = [
    {
      name: "Starter",
      price: "999",
      originalPrice: "1299",
      period: "month",
      description: "Perfect for new advocates getting started with online client acquisition.",
      features: [
        { label: "Up to 05 Verified Leads/month", status: true },
        { label: "CRM support", status: true },
        { label: "Customer Support (24-72hrs)", status: true },
        { label: "Leads Retention Period 2 days", status: true },
        { label: "Hot Line Leads", status: false },
       
      ],
      highlight: false,
      icon: "Users",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      badge: "Best for Beginners",
      savings: "Save 30%"
    },
    {
      name: "Growth",
      price: "1999",
      originalPrice: "2799",
      period: "month",
      description: "Ideal for practicing advocates aiming to significantly grow their clientele.",
      features: [
        { label: "Up to 15 Verified Leads/month", status: true },
        { label: "CRM support", status: true },
        { label: "Priority Support (24-48hrs)", status: true },
        { label: "Lead Retention Period 10 days", status: true },
        { label: "Hot Line Leads", status: false },
      
      ],
      highlight: true,
      icon: "Zap",
      color: "from-orange-50 to-yellow-50",
      borderColor: "border-orange-300",
      badge: "Most Popular",
      savings: "Save 40%"
    },
    {
      name: "Pro Plus",
      price: "4999",
      originalPrice: "9999",
      period: "month",
      description: "Premium plan for maximum reach and growth.",
      features: [
        { label: "Up to 30 Verified Leads/month", status: true },
        { label: "CRM support", status: true },
        { label: "Premium Support (2-4hrs)", status: true },
        { label: "Lead Rentention Period 30 days", status: true },
        { label: "Hot Line Leads", status: true },
    
    
      ],
      highlight: false,
      icon: "Crown",
      color: "from-purple-50 to-pink-50",
      borderColor: "border-purple-300",
      badge: "Enterprise Ready",
      savings: "Save 50%"
    },
    {
      name: "Trial",
      price: "0",
      originalPrice: "1299",
      period: "try free for 7 Days",
      description: "Ideal for practicing advocates aiming to significantly grow their clientele.",
      features: [
        { label: "01 Verified Lead", status: true },
        { label: "CRM support", status: true },
        { label: "Customer Support (24-72hrs)", status: true },
        { label: "Leads Retention Period 1 day", status: true },
        { label: "Hot Line Leads", status: false },
      ],
      highlight: false,
      icon: "Zap",
      color: "from-gray-100 to-gray-400",
      borderColor: "border-orange-300",
      badge: "Free Trial",
      savings: "Save 40%"
    },
    {
      name: "Corporate",
      // price: "1999",
      // originalPrice: "2799",
      // period: "month",
      description: "Ideal for practicing advocates aiming to significantly grow their clientele.",
      features: [
        // { label: "Up to 15 Verified Leads/month", status: true },
        // { label: "CRM support", status: true },
        // { label: "Priority Support (24-48hrs)", status: true },
        // { label: "Priority Listing in Search Results", status: false },
        // { label: "Advanced Client Chat with Video Calls", status: false },
        // { label: "Lead Insights & Analytics Dashboard", status: false },
        // { label: "Advanced Legal Templates", status: false },
        // { label: "Client Management System", status: false },
        // { label: "Custom Profile Showcase", status: false }
      ],
      highlight: false,
      icon: "Building",
      color: "from-gray-100 to-gray-400",
      borderColor: "border-gray-200",
      badge: "Exclusive for Corporate",
      savings: "Save 10%"
    }

    
  ];
export default plans