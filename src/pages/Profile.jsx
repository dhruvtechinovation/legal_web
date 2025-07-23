// import React, { useEffect, useState } from 'react';
// import { ArrowLeft } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Profile = () => {
//   const [profile, setProfile] = useState({
//     name: 'Adv. Ramesh Verma',
//     email: 'ramesh.verma@example.com',
//     photo: 'https://via.placeholder.com/120',
//     phone: '',
//     address: '',
//   });

//   const [editMode, setEditMode] = useState(false);

//   // Load data from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem('advocate_profile');
//     if (saved) {
//       setProfile(JSON.parse(saved));
//     }
//   }, []);

//   // Save to localStorage
//   const handleSave = () => {
//     localStorage.setItem('advocate_profile', JSON.stringify(profile));
//     setEditMode(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
//       <div className="p-4 absolute top-0 left-0">
//               <Link
//                 to="/"
//                 className="inline-flex items-center text-legal-DEFAULT hover:text-legal-accent base-transition"
//               >
//                 <ArrowLeft size={18} className="mr-2" />
//                 Back to Home
//               </Link>
//             </div>
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <div className="flex flex-col items-center mb-6">
//           <img
//             src={profile.photo}
//             alt="Advocate"
//             className="w-24 h-24 rounded-full object-cover mb-3 border"
//           />
//           <h2 className="text-xl font-semibold">{profile.name}</h2>
//           <p className="text-gray-600">{profile.email}</p>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm text-gray-700 font-medium mb-1">Phone Number</label>
//             {editMode ? (
//               <input
//                 type="text"
//                 value={profile.phone}
//                 onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//             ) : (
//               <p className="text-gray-800">{profile.phone || '-'}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm text-gray-700 font-medium mb-1">Address</label>
//             {editMode ? (
//               <textarea
//                 rows={3}
//                 value={profile.address}
//                 onChange={(e) => setProfile({ ...profile, address: e.target.value })}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               />
//             ) : (
//               <p className="text-gray-800 whitespace-pre-line">{profile.address || '-'}</p>
//             )}
//           </div>

//           <div className="flex justify-end gap-4 mt-6">
//             {editMode ? (
//               <>
//                 <button
//                   onClick={handleSave}
//                   className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setEditMode(false)}
//                   className="text-gray-600 hover:text-gray-900"
//                 >
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={() => setEditMode(true)}
//                 className="text-legal-DEFAULT hover:text-legal-accent font-medium"
//               >
//                 Edit Profile
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Adv. Pradeep',
    email: 'pradeep@example.com',
    photo: 'https://via.placeholder.com/120',
    phone: '',
    address: '',
  });

  const [editMode, setEditMode] = useState(false);

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <Link
        to="/personal_dashboard"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition"
      >
        <ArrowLeft className="mr-2" size={18} />
        Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <div className="flex flex-col items-center mb-6">
            <img
              src={profile.photo}
              alt="Advocate"
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-200"
            />
            <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
          </div>

          <div className="space-y-10">
            {/* 1. Personal Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Details</h3>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <p className="text-gray-800">{profile.name || '-'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-800">{profile.email || '-'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bar Council ID</label>
                  <p className="text-gray-800">{profile.barCouncilId || '-'}</p>
                </div>
              </div>
            </div>

            {/* 2. Demographic Details */}
            <div>
              <div className='flex gap-4'>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Demographic Details</h3>
              <div className='mt-1'>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="text-gray-500 hover:text-gray-700 transition"
                  aria-label="Edit Demographic Details"
                >
                  <Pencil size={18} />
                </button>
              </div>
              </div>
              <div className="space-y-4">
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
                    <p className="text-gray-800">{profile.state || '-'}</p>
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
                    <p className="text-gray-800">{profile.zipcode || '-'}</p>
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
                    <p className="text-gray-800 whitespace-pre-line">{profile.address || '-'}</p>
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
                    <p className="text-gray-800">{profile.phone || '-'}</p>
                  )}
                </div>
              </div>
            </div>

            {/* 3. Credentials */}
            <div>
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
            <div className="flex justify-end space-x-4 pt-4">
              {editMode ? (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="text-gray-600 hover:text-gray-800 transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className="text-blue-600 font-medium hover:text-blue-800 transition"
                >
                  Edit Demographic Details
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
