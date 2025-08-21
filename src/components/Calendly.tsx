// import React, { useState } from "react";

// const CalendlyWidget = () => {
//   const [open,setOpen]=useState(false)
//   return (

//     <div className="w-[700px] min-h-screen flex justify-center items-center p-6 inset-0">
//       <button onClick={()=>setOpen(!open)}>Book Consultation</button>
//       { open&&
//       <iframe
//         src="https://calendly.com/hanumanreddyy/30min"
//         width="100%"
//         height="600"
//         frameBorder="0"
//         className="shadow-lg rounded-2xl border"
//         title="Calendly Scheduling"
//       ></iframe>}
//     </div>
//   );
// };

// export default CalendlyWidget;
import React, { useState } from "react";

const CalendlyWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div >
      {/* Book button */}
      <button
        onClick={() => setOpen(true)}
        className="relative left-1/2 -translate-x-1/2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
      >
        Book Consultation
      </button>

      {/* Popup modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-[700px] h-[600px] relative">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-xl font-bold"
            >
              ✕
            </button>

            {/* Calendly iframe */}
            <iframe
              src="https://calendly.com/hanumanreddyy/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-2xl"
              title="Calendly Scheduling"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendlyWidget;