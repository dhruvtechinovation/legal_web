import React, { useEffect, useRef, useState } from 'react';

const PhotoUpdateModal = ({ onClose, onImageSelect }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    if (showCamera) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          alert('Camera access denied or unavailable');
          setShowCamera(false);
        });
    }

    return () => {
      const stream = videoRef.current?.srcObject;
      stream?.getTracks().forEach(track => track.stop());
    };
  }, [showCamera]);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    const imageData = canvas.toDataURL('image/png');
    onImageSelect(imageData);
    const stream = video.srcObject;
    stream?.getTracks().forEach(track => track.stop());
    onClose();
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageSelect(reader.result);
        onClose();
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload an image under 5MB');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-600 text-2xl">&times;</button>

        {!showCamera ? (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Update Profile Photo</h2>
            <button
              onClick={() => setShowCamera(true)}
              className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
            >
              Use Camera
            </button>
            <label className="block cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
              <div className="bg-gray-200 text-center py-2 rounded hover:bg-gray-300">
                Upload from PC
              </div>
            </label>
          </div>
        ) : (
          <div>
            <video ref={videoRef} autoPlay className="w-full rounded mb-4" />
            <canvas ref={canvasRef} className="hidden" />
            <button
              onClick={handleCapture}
              className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
            >
              Capture Photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoUpdateModal;
