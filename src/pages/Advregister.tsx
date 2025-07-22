import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SubscriptionForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.price || 'Basic Plan';

  const [formData, setFormData] = useState({
    lawyerName: '',
    barCouncilId: '',
    jurisdiction: '',
    phone: '',
    email: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    // console.log(e.target)
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    // console.log(formData)
    // console.log("event data",e.target)
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Subscription Form - {selectedPlan}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Lawyer Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Lawyer Name</label>
            <input
              type="text"
              name="lawyerName"
              value={formData.lawyerName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Bar Council ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Bar Council ID</label>
            <input
              type="text"
              name="barCouncilId"
              value={formData.barCouncilId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Jurisdiction */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Jurisdiction (Optional)</label>
            <input
              type="text"
              name="jurisdiction"
              value={formData.jurisdiction}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
            >
              Make Payment
            </button>
          </div>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg w-80 text-center">
            <h3 className="text-xl font-bold mb-2 text-green-600">Payment Confirmed</h3>
            <p className="text-gray-700 mb-4">Thank you for subscribing!</p>
            <button
              onClick={handlePopupClose}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
