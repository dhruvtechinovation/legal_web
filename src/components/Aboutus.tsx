import React from 'react'

function Aboutus() {
  return (
    <section id="about" className="py-20 bg-gray-50">
    <div className="container-custom max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-primary">About Us</h2>
      <p className="text-lg font-medium mb-6 text-gray-800">
        Empowering Legal Access Through Technology
      </p>
      <p className="text-gray-700 mb-6">
        We are a technology-driven legal platform dedicated to transforming how legal services are accessed and delivered to individuals and businesses.
      </p>
      <p className="text-gray-700 mb-6">
        By seamlessly connecting clients with qualified legal professionals, we strive to make legal assistance more accessible, efficient, transparent, and confidential.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
      <p className="text-gray-700 mb-6">
        To bridge the gap between clients and legal experts using intelligent tools, secure communication, and a user-centric experience—empowering both parties to address legal matters with confidence and clarity.
      </p>
      <h4 className="text-lg font-medium text-gray-800 mb-2">What We Stand For:</h4>
      <ul className="list-disc list-inside text-left max-w-md mx-auto text-gray-700 space-y-2">
        <li>Client-Centric Approach</li>
        <li>Secure & Confidential Interactions</li>
        <li>Accessibility for All</li>
        <li>Transparency in Legal Processes</li>
        <li>Innovation in Legal Services</li>
      </ul>
    </div>
  </section>
  )
}

export default Aboutus