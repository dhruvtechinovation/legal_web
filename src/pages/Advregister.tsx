import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import TermsAndConditionsModalSubscription from '@/components/Terms_conditions';
import { ArrowLeft } from 'lucide-react';

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
  const [terms, setTerms] = useState(false)
  const [showterms, setShowTerms] = useState(false)
  const [showFaq,setShowFaq]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    // console.log(e.target)
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!terms)
    {
      alert("please agreee on the  Terms and Condition")
      return
    }
    setShowPopup(true);
    // console.log(formData)
    // console.log("event data",e.target)
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-white to-gray-400 px-4 ">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Subscription Form - {selectedPlan}
        </h2>
       <div className='absolute left-0 top-2'>
       
               <Link
                 to="/signup"
                 className="inline-flex items-center text-black hover:text-blue-800 mb-6 transition"
               >
                 <ArrowLeft size={18} className='mr-2 ml-1' />
                 Back to Subscription
               </Link>
             </div>

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
          {/* Bar Council ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Bar Council ID (Optional)</label>
            <input
              type="text"
              name="barCouncilId"
              value={formData.barCouncilId}
              onChange={handleChange}
              // required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Jurisdiction */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Jurisdiction (Optional)</label>
            <div>
              <select
                name="jurisdiction"
                value={formData.jurisdiction}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Jurisdiction</option>
                <option value="Civil">Civil</option>
                <option value="Criminal">Criminal</option>
                <option value="Family">Family</option>
                <option value="Tax">Tax</option>
                <option value="Corporate">Corporate</option>

              </select>
            </div>
          </div>
          <div className='flex'>          
            <div className="mb-4 flex items-start gap-1">
              <input
                type="checkbox"
                id="terms"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}

                className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-legal-DEFAULT"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the <a href="/" className="underline text-legal-accent"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTerms(true);
                  }}>Terms and Conditions</a>
              </label>
            </div>
                 {showterms && (
                          <TermsAndConditionsModalSubscription
                            onClose={() => {setShowTerms(false)
                                            setTerms(false)}}
                            onAccept={() => {
                              setTerms(true);
                              setShowTerms(false);
                            }}
                          />
            
                        )}
            <div className="ml-auto">
  <button
    type="button"
    onClick={() => setShowFaq(true)} // Or whatever function triggers your FAQ
    className="text-sm text-blue-600 underline hover:text-blue-800 transition duration-150"
  >
    FAQ’s
  </button>
</div>
{showFaq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setShowFaq(false)}
          ></div>

          {/* Modal content */}
          <div className="relative bg-white w-full max-w-lg mx-auto rounded-2xl shadow-xl p-6 z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Frequently Asked Questions</h2>
              <button
                onClick={() => setShowFaq(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖︎
              </button>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <strong>Q: What is this platform about?</strong>
                <p>A: This platform helps users manage legal leads more effectively.</p>
              </div>
              <div>
                <strong>Q: How do I contact support?</strong>
                <p>A: Click on the support link at the bottom of the page or email us.</p>
              </div>
              {/* Add more FAQs here */}
            </div>
          </div>
        </div>
      )}
          </div>
   {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white font-medium py-2 rounded-md  transition"
            >
              Request Payment
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
      {/* {showterms && (
        <div>
          <p>This are the terms and conditions for the subscritpion , It supports the data/information collected as part of Subscription
            and its usage.
          </p>
        </div>
      )} */}
    </div>
  );
};

export default SubscriptionForm;
