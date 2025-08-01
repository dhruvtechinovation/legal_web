// components/TermsAndConditionsModal.tsx
import React from 'react';

const TermsAndConditionsModal = ({
  onClose,
  onAccept
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6 relative max-h-[80vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Terms and Conditions</h2>

        <div className="text-sm text-gray-700 space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper, nisl vel convallis tristique...
          </p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>...</p>
        </div>

        <div className="mt-6 flex justify-end gap-10">
          <button
            onClick={onClose}
            className="text-sm text-gray-700 hover:text-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-black hover:bg-legal-accent text-white text-sm rounded-md"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsModal;
