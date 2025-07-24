import React, { useEffect, useState,useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import PhotoUpdateModal from '../components/Webcapture';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Adv. Pradeep',
    email: 'pradeep@example.com',
    photo: 'https://via.placeholder.com/120',
    phone: '',
    address: '',
  });

  const [editMode, setEditMode] = useState(false);
  const [edit, setedit] = useState(true)
  const [showModal, setShowModal] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('advocate_profile');
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage (can be replaced with PUT API)
  const handleSave = () => {
    localStorage.setItem('advocate_profile', JSON.stringify(profile));
    setEditMode(false);
    setedit(!edit)
  };
  const handleImageUpdate = (imageData) => {
    const updatedProfile = { ...profile, photo: imageData };
    setProfile(updatedProfile);
  
    // Save to localStorage
    localStorage.setItem('advocate_profile', JSON.stringify(updatedProfile));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <div className='absolute left-0 top-2'>

        <Link
          to="/personal_dashboard"
          className="inline-flex items-center text-black hover:text-blue-800 mb-6 transition"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <div className="flex flex-col items-center mb-6 relative">
            {/* Profile Photo with Upload Overlay */}
            <div className="relative group w-28 h-28 mb-4">
              <img
                src={profile.photo}
                alt="Advocate"
                className="w-full h-full rounded-full object-cover border-4 border-blue-200"
              />

              <button
               onClick={() => setShowModal(true)}
                className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-md cursor-pointer"
                title="Edit photo"
              >
                <Pencil className="w-4 h-4 text-gray-700" />
              </button>
              {showModal && (
        <PhotoUpdateModal
          onClose={() => setShowModal(false)}
          onImageSelect={handleImageUpdate}
        />
      )}
            </div>

            {/* Name & Email */}
            <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
          </div>
          <div className="space-y-7">
            {/* 1. Personal Details */}
            <div className="bg-white rounded-2xl shadow-xl p-7 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Personal Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                  <div className="text-gray-800 border border-gray-300 rounded-xl p-4 bg-gray-50 shadow-sm">
                    {profile.name || '-'}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                  <div className="text-gray-800 border border-gray-300 rounded-xl p-4 bg-gray-50 shadow-sm">
                    {profile.email || '-'}
                  </div>
                </div>

                {/* Bar Council ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Bar Council ID</label>
                  <div className="text-gray-800 border border-gray-300 rounded-xl p-4 bg-gray-50 shadow-sm">
                    {profile.barCouncilId || '-'}
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {/* 2. Demographic Details */}
            <div className="bg-white rounded-2xl shadow-xl p-7 border border-gray-200">
              <div className='flex  gap-4'>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Demographic Details</h3>
                <div className='mt-1'>
                  <button
                    onClick={() => {
                      setEditMode(!editMode);
                      setedit(!edit)
                    }}
                    className="text-gray-500 hover:text-gray-700 transition"
                    aria-label="Edit Demographic Details"
                  >
                    {edit && <Pencil size={18} />}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  {editMode ? (
                    <input
                      type="text"
                      value={profile.state}
                      onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                  ) : (
                    <p className="text-gray-800 border border-gray-300 rounded-lg p-4 shadow-sm bg-white">{profile.state || '-'}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  {editMode ? (
                    <input
                      type="text"
                      value={profile.zipcode}
                      onChange={(e) => setProfile({ ...profile, zipcode: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                  ) : (
                    <p className="text-gray-800 border border-gray-300 rounded-lg p-4 shadow-sm bg-white">{profile.zipcode || '-'}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  {editMode ? (
                    <textarea
                      rows={3}
                      value={profile.address}
                      onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                  ) : (
                    <p className="text-gray-800 whitespace-pre-line border border-gray-300 rounded-lg p-4 shadow-sm bg-white">{profile.address || '-'}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  {editMode ? (
                    <input
                      type="text"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                  ) : (
                    <p className="text-gray-800 border border-gray-300 rounded-lg p-4 shadow-sm bg-white">{profile.phone || '-'}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              {editMode && (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditMode(false);
                      setedit(!edit)
                    }}
                    className="text-gray-600 hover:text-gray-800 transition"
                  >
                    Cancel
                  </button>
                </>)
              }
            </div>
            <hr />

            {/* 3. Credentials */}
            <div className="bg-white rounded-2xl shadow-xl p-7 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Credentials</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <p className="text-gray-800">
                  ••••••••{" "}
                  <Link
                    to="/reset_password"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Reset Password
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
