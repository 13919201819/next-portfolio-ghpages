// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaClock } from "react-icons/fa";

// // Custom CSS for calendar styling (injected into the component)
// const customCalendarStyles = `
//   .react-calendar {
//     background: rgba(30, 30, 40, 0.9);
//     border-radius: 12px;
//     border: 1px solid rgba(79, 70, 229, 0.3);
//     font-family: 'Arial', sans-serif;
//     width: 100%;
//     max-width: 350px;
//     padding: 1rem;
//     color: #e0e0e0;
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
//   }
//   .react-calendar__navigation {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 1rem;
//     background: none; /* No background for the navigation bar */
//     padding: 0; /* Remove padding to make it more compact */
//   }
//   .react-calendar__navigation__label {
//     font-size: 1rem; /* Smaller font size for month/year */
//     font-weight: bold;
//     color: #a3bffa;
//     padding: 0 0.5rem; /* Minimal padding */
//   }
//   .react-calendar__navigation button {
//     color: #a3bffa; /* Light effect for arrows */
//     font-weight: bold;
//     background: none !important; /* Remove any background */
//     border: none; /* Ensure no border */
//     padding: 0.2rem; /* Smaller padding for arrows */
//     font-size: 1rem; /* Smaller arrow size */
//     min-width: 24px; /* Ensure arrows don't collapse */
//   }
//   .react-calendar__navigation button:disabled {
//     color: #a3bffa; /* Maintain light effect when disabled */
//     opacity: 0.7;
//   }
//   .react-calendar__navigation button:enabled:hover,
//   .react-calendar__navigation button:enabled:focus {
//     background: rgba(79, 70, 229, 0.2); /* Hover background */
//     border-radius: 4px;
//   }
//   .react-calendar__tile {
//     border-radius: 0; /* Remove circular design */
//     transition: all 0.3s ease;
//     padding: 0.5rem;
//   }
//   .react-calendar__tile:enabled:hover,
//   .react-calendar__tile:enabled:focus {
//     background: rgba(79, 70, 229, 0.4);
//     color: white;
//   }
//   .react-calendar__tile--active {
//     background: linear-gradient(135deg, #4f46e5, #9333ea);
//     color: white;
//     border: none;
//   }
//   .react-calendar__tile--now {
//     background: rgba(6, 182, 212, 0.2); /* Light cyan for current day */
//     color: #a3bffa;
//   }
//   .react-calendar__month-view__days__day--weekend {
//     color: #ffcccb;
//   }
//   /* Blur past dates */
//   .react-calendar__tile:disabled {
//     filter: blur(2px);
//     color: #6b7280;
//     background: none;
//     cursor: not-allowed;
//   }
// `;

// export default function Demo() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const timeSlots = [
//     "09:00 AM", "10:00 AM", "11:00 AM",
//     "01:00 PM", "02:00 PM", "03:00 PM",
//     "04:00 PM", "05:00 PM",
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.phone || !selectedDate || !selectedTime) {
//       alert("Please fill in all fields, select a date, and choose a time slot.");
//       return;
//     }
//     setShowPopup(true);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, type: "spring", stiffness: 100, staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 120 } },
//   };

//   const floatingVariants = {
//     hover: {
//       scale: 1.05,
//       rotate: 5,
//       transition: { duration: 0.4, yoyo: Infinity },
//     },
//   };

//   // Enhanced button animation variant
//   const buttonVariants = {
//     hover: {
//       scale: 1.1,
//       boxShadow: "0 0 25px rgba(79, 70, 229, 0.9), 0 0 5px rgba(147, 51, 234, 0.6)",
//       background: "linear-gradient(135deg, #5b21b6, #a855f7)",
//       transition: { duration: 0.4 },
//     },
//     tap: { scale: 0.95, transition: { duration: 0.2 } },
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 py-16 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
//       <style>{customCalendarStyles}</style>

//       <motion.div
//         className="relative w-full max-w-4xl"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Decorative floating elements */}
//         <motion.div
//           className="absolute w-40 h-40 rounded-full -top-20 -left-20 bg-indigo-600/20 blur-2xl"
//           animate={floatingVariants}
//         />
//         <motion.div
//           className="absolute rounded-full -bottom-20 -right-20 w-60 h-60 bg-purple-700/20 blur-2xl"
//           animate={floatingVariants}
//         />

//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 drop-shadow-[0_0_20px_rgba(79,70,229,0.7)] text-center mb-12 z-10"
//           variants={itemVariants}
//         >
//           Schedule a Call
//         </motion.h1>

//         <motion.div
//           className="z-10 p-8 border shadow-2xl bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-md rounded-xl border-indigo-600/30"
//           variants={itemVariants}
//         >
//           <form onSubmit={handleSubmit} className="space-y-8">
//             {/* Personal Details */}
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//               {[
//                 { icon: FaUser, label: "Full Name", name: "name", placeholder: "Enter your name" },
//                 { icon: FaEnvelope, label: "Email Address", name: "email", placeholder: "Enter your email" },
//                 { icon: FaPhone, label: "Phone Number", name: "phone", placeholder: "Enter your phone number" },
//               ].map((field, index) => (
//                 <motion.div key={index} variants={itemVariants}>
//                   <label className="flex items-center mb-2 font-semibold text-gray-200">
//                     <field.icon className="mr-2 text-indigo-400" />
//                     {field.label}
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={field.name === "email" ? "email" : "text"}
//                       id={field.name}
//                       name={field.name}
//                       value={formData[field.name as keyof typeof formData]}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg bg-gray-700/50 border-indigo-600/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
//                       placeholder={field.placeholder}
//                       required
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Calendar */}
//             <motion.div variants={itemVariants} className="mt-8">
//               <h2 className="flex items-center mb-4 text-xl font-semibold text-white">
//                 <FaCalendarAlt className="mr-2 text-indigo-400" /> Select a Date
//               </h2>
//               <div className="flex justify-center">
//                 <Calendar
//                   onChange={(date: Date) => setSelectedDate(date)}
//                   value={selectedDate}
//                   minDate={new Date()}
//                   className="react-calendar"
//                 />
//               </div>
//             </motion.div>

//             {/* Time Slots */}
//             {selectedDate && (
//               <motion.div variants={itemVariants} className="mt-8">
//                 <h2 className="flex items-center mb-4 text-xl font-semibold text-white">
//                   <FaClock className="mr-2 text-indigo-400" /> Select a Time Slot
//                 </h2>
//                 <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//                   {timeSlots.map((time) => (
//                     <motion.button
//                       key={time}
//                       type="button"
//                       onClick={() => setSelectedTime(time)}
//                       className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm ${
//                         selectedTime === time
//                           ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-[0_0_10px_rgba(79,70,229,0.7)]"
//                           : "bg-gray-700/50 border-indigo-600/30 text-gray-200 hover:bg-indigo-600/20 hover:border-indigo-400/50"
//                       }`}
//                       whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
//                       whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
//                     >
//                       {time}
//                     </motion.button>
//                   ))}
//                 </div>
//               </motion.div>
//             )}

//             {/* Submit Button */}
//             <motion.div variants={itemVariants} className="flex justify-center mt-10">
//               <motion.button
//                 type="submit"
//                 className="w-[220px] h-[60px] flex items-center justify-center text-lg font-bold text-white uppercase rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 shadow-md"
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 Schedule Now
//               </motion.button>
//             </motion.div>
//           </form>
//         </motion.div>
//       </motion.div>

//       {/* Confirmation Popup */}
//       <AnimatePresence>
//         {showPopup && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1, transition: { duration: 0.5 } }}
//             exit={{ opacity: 0, transition: { duration: 0.5 } }}
//           >
//             <motion.div
//               className="w-full max-w-md p-8 text-center border shadow-2xl bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-md rounded-xl border-indigo-600/30"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 150 } }}
//               exit={{ scale: 0.5, opacity: 0 }}
//             >
//               <h2 className="mb-4 text-3xl font-bold text-white">Booking Confirmed!</h2>
//               <p className="mb-6 text-gray-200">
//                 Your call is scheduled for{" "}
//                 <span className="font-semibold text-indigo-400">
//                   {selectedDate?.toLocaleDateString()} at {selectedTime}
//                 </span>
//                 . We’ll send a confirmation to{" "}
//                 <span className="font-semibold text-indigo-400">{formData.email}</span>.
//               </p>
//               <motion.button
//                 onClick={() => setShowPopup(false)}
//                 className="px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-indigo-600 to-purple-700 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-800"
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 Close
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }




// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaClock } from "react-icons/fa";

// // Custom CSS for calendar styling (injected into the component)
// const customCalendarStyles = `
//   .react-calendar {
//     background: rgba(30, 30, 40, 0.9);
//     border-radius: 12px;
//     border: 1px solid rgba(79, 70, 229, 0.3);
//     font-family: 'Arial', sans-serif;
//     width: 100%;
//     max-width: 350px;
//     padding: 1rem;
//     color: #e0e0e0;
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
//   }
//   .react-calendar__navigation {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     margin-bottom: 1rem;
//     background: none;
//     padding: 0;
//   }
//   .react-calendar__navigation__label {
//     font-size: 1rem;
//     font-weight: bold;
//     color: #a3bffa;
//     padding: 0 0.5rem;
//   }
//   .react-calendar__navigation button {
//     color: #a3bffa;
//     font-weight: bold;
//     background: none !important;
//     border: none;
//     padding: 0.2rem;
//     font-size: 1rem;
//     min-width: 24px;
//   }
//   .react-calendar__navigation button:disabled {
//     color: #a3bffa;
//     opacity: 0.7;
//   }
//   .react-calendar__navigation button:enabled:hover,
//   .react-calendar__navigation button:enabled:focus {
//     background: rgba(79, 70, 229, 0.2);
//     border-radius: 4px;
//   }
//   .react-calendar__tile {
//     border-radius: 0;
//     transition: all 0.3s ease;
//     padding: 0.5rem;
//   }
//   .react-calendar__tile:enabled:hover,
//   .react-calendar__tile:enabled:focus {
//     background: rgba(79, 70, 229, 0.4);
//     color: white;
//   }
//   .react-calendar__tile--active {
//     background: linear-gradient(135deg, #4f46e5, #9333ea);
//     color: white;
//     border: none;
//   }
//   .react-calendar__tile--now {
//     background: rgba(6, 182, 212, 0.2);
//     color: #a3bffa;
//   }
//   .react-calendar__month-view__days__day--weekend {
//     color: #ffcccb;
//   }
//   .react-calendar__tile:disabled {
//     filter: blur(2px);
//     color: #6b7280;
//     background: none;
//     cursor: not-allowed;
//   }
// `;

// export default function Demo() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const timeSlots = [
//     "09:00 AM", "10:00 AM", "11:00 AM",
//     "01:00 PM", "02:00 PM", "03:00 PM",
//     "04:00 PM", "05:00 PM",
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDateChange = (value: unknown, event: React.MouseEvent<HTMLButtonElement>) => {
//     // Since Value isn't exported, we use unknown and assert the type
//     if (value instanceof Date) {
//       setSelectedDate(value);
//     } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof Date) {
//       setSelectedDate(value[0]); // Take the first date if it's an array (e.g., range)
//     } else {
//       setSelectedDate(null); // Handle null or invalid cases
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.phone || !selectedDate || !selectedTime) {
//       alert("Please fill in all fields, select a date, and choose a time slot.");
//       return;
//     }
//     setShowPopup(true);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, type: "spring", stiffness: 100, staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 120 } },
//   };

//   const floatingVariants = {
//     hover: {
//       scale: 1.05,
//       rotate: 5,
//       transition: { duration: 0.4, yoyo: Infinity },
//     },
//   };

//   const buttonVariants = {
//     hover: {
//       scale: 1.1,
//       boxShadow: "0 0 25px rgba(79, 70, 229, 0.9), 0 0 5px rgba(147, 51, 234, 0.6)",
//       background: "linear-gradient(135deg, #5b21b6, #a855f7)",
//       transition: { duration: 0.4 },
//     },
//     tap: { scale: 0.95, transition: { duration: 0.2 } },
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 py-16 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
//       <style>{customCalendarStyles}</style>

//       <motion.div
//         className="relative w-full max-w-4xl"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Decorative floating elements */}
//         <motion.div
//           className="absolute w-40 h-40 rounded-full -top-20 -left-20 bg-indigo-600/20 blur-2xl"
//           animate={floatingVariants}
//         />
//         <motion.div
//           className="absolute rounded-full -bottom-20 -right-20 w-60 h-60 bg-purple-700/20 blur-2xl"
//           animate={floatingVariants}
//         />

//         <motion.h1
//           className="text-5xl md:text-7xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 drop-shadow-[0_0_20px_rgba(79,70,229,0.7)] text-center mb-12 z-10"
//           variants={itemVariants}
//         >
//           Schedule a Call
//         </motion.h1>

//         <motion.div
//           className="z-10 p-8 border shadow-2xl bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-md rounded-xl border-indigo-600/30"
//           variants={itemVariants}
//         >
//           <form onSubmit={handleSubmit} className="space-y-8">
//             {/* Personal Details */}
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//               {[
//                 { icon: FaUser, label: "Full Name", name: "name", placeholder: "Enter your name" },
//                 { icon: FaEnvelope, label: "Email Address", name: "email", placeholder: "Enter your email" },
//                 { icon: FaPhone, label: "Phone Number", name: "phone", placeholder: "Enter your phone number" },
//               ].map((field, index) => (
//                 <motion.div key={index} variants={itemVariants}>
//                   <label className="flex items-center mb-2 font-semibold text-gray-200">
//                     <field.icon className="mr-2 text-indigo-400" />
//                     {field.label}
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={field.name === "email" ? "email" : "text"}
//                       id={field.name}
//                       name={field.name}
//                       value={formData[field.name as keyof typeof formData]}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg bg-gray-700/50 border-indigo-600/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
//                       placeholder={field.placeholder}
//                       required
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Calendar */}
//             <motion.div variants={itemVariants} className="mt-8">
//               <h2 className="flex items-center mb-4 text-xl font-semibold text-white">
//                 <FaCalendarAlt className="mr-2 text-indigo-400" /> Select a Date
//               </h2>
//               <div className="flex justify-center">
//                 <Calendar
//                   onChange={handleDateChange}
//                   value={selectedDate}
//                   minDate={new Date()}
//                   className="react-calendar"
//                 />
//               </div>
//             </motion.div>

//             {/* Time Slots */}
//             {selectedDate && (
//               <motion.div variants={itemVariants} className="mt-8">
//                 <h2 className="flex items-center mb-4 text-xl font-semibold text-white">
//                   <FaClock className="mr-2 text-indigo-400" /> Select a Time Slot
//                 </h2>
//                 <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//                   {timeSlots.map((time) => (
//                     <motion.button
//                       key={time}
//                       type="button"
//                       onClick={() => setSelectedTime(time)}
//                       className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm ${
//                         selectedTime === time
//                           ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-[0_0_10px_rgba(79,70,229,0.7)]"
//                           : "bg-gray-700/50 border-indigo-600/30 text-gray-200 hover:bg-indigo-600/20 hover:border-indigo-400/50"
//                       }`}
//                       whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
//                       whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
//                     >
//                       {time}
//                     </motion.button>
//                   ))}
//                 </div>
//               </motion.div>
//             )}

//             {/* Submit Button */}
//             <motion.div variants={itemVariants} className="flex justify-center mt-10">
//               <motion.button
//                 type="submit"
//                 className="w-[220px] h-[60px] flex items-center justify-center text-lg font-bold text-white uppercase rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 shadow-md"
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 Schedule Now
//               </motion.button>
//             </motion.div>
//           </form>
//         </motion.div>
//       </motion.div>

//       {/* Confirmation Popup */}
//       <AnimatePresence>
//         {showPopup && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1, transition: { duration: 0.5 } }}
//             exit={{ opacity: 0, transition: { duration: 0.5 } }}
//           >
//             <motion.div
//               className="w-full max-w-md p-8 text-center border shadow-2xl bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-md rounded-xl border-indigo-600/30"
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 150 } }}
//               exit={{ scale: 0.5, opacity: 0 }}
//             >
//               <h2 className="mb-4 text-3xl font-bold text-white">Booking Confirmed!</h2>
//               <p className="mb-6 text-gray-200">
//                 Your call is scheduled for{" "}
//                 <span className="font-semibold text-indigo-400">
//                   {selectedDate?.toLocaleDateString()} at {selectedTime}
//                 </span>
//                 . We’ll send a confirmation to{" "}
//                 <span className="font-semibold text-indigo-400">{formData.email}</span>.
//               </p>
//               <motion.button
//                 onClick={() => setShowPopup(false)}
//                 className="px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-indigo-600 to-purple-700 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-800"
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 Close
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaClock } from "react-icons/fa";

// Custom CSS for calendar styling (injected into the component)
const customCalendarStyles = `
  .react-calendar {
    background: rgba(30, 30, 40, 0.9);
    border-radius: 12px;
    border: 1px solid rgba(79, 70, 229, 0.3);
    font-family: 'Arial', sans-serif;
    width: 100%;
    max-width: 350px;
    padding: 1rem;
    color: #e0e0e0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    background: none;
    padding: 0;
  }
  .react-calendar__navigation__label {
    font-size: 1rem;
    font-weight: bold;
    color: #a3bffa;
    padding: 0 0.5rem;
  }
  .react-calendar__navigation button {
    color: #a3bffa;
    font-weight: bold;
    background: none !important;
    border: none;
    padding: 0.2rem;
    font-size: 1rem;
    min-width: 24px;
  }
  .react-calendar__navigation button:disabled {
    color: #a3bffa;
    opacity: 0.7;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background: rgba(79, 70, 229, 0.2);
    border-radius: 4px;
  }
  .react-calendar__tile {
    border-radius: 0;
    transition: all 0.3s ease;
    padding: 0.5rem;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: rgba(79, 70, 229, 0.4);
    color: white;
  }
  .react-calendar__tile--active {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    color: white;
    border: none;
  }
  .react-calendar__tile--now {
    background: rgba(6, 182, 212, 0.2);
    color: #a3bffa;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #ffcccb;
  }
  .react-calendar__tile:disabled {
    filter: blur(2px);
    color: #6b7280;
    background: none;
    cursor: not-allowed;
  }
`;

export default function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (value: unknown) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof Date) {
      setSelectedDate(value[0]); // Take the first date if it's an array (e.g., range)
    } else {
      setSelectedDate(null); // Handle null or invalid cases
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !selectedDate || !selectedTime) {
      alert("Please fill in all fields, select a date, and choose a time slot.");
      return;
    }
    setShowPopup(true);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 120 } },
  };

  const floatingVariants = {
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { duration: 0.4, yoyo: Infinity },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 0 25px rgba(79, 70, 229, 0.9), 0 0 5px rgba(147, 51, 234, 0.6)",
      background: "linear-gradient(135deg, #5b21b6, #a855f7)",
      transition: { duration: 0.4 },
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-16 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <style>{customCalendarStyles}</style>

      <motion.div
        className="relative w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Decorative floating elements */}
        <motion.div
          className="absolute w-40 h-40 rounded-full -top-20 -left-20 bg-indigo-600/20 blur-2xl"
          animate={floatingVariants}
        />
        <motion.div
          className="absolute rounded-full -bottom-20 -right-20 w-60 h-60 bg-purple-700/20 blur-2xl"
          animate={floatingVariants}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 drop-shadow-[0_0_20px_rgba(79,70,229,0.7)] text-center mb-12 z-10"
          variants={itemVariants}
        >
          Schedule a Call
        </motion.h1>

        <motion.div
          className="z-10 p-8 border shadow-2xl bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-md rounded-xl border-indigo-600/30"
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { icon: FaUser, label: "Full Name", name: "name", placeholder: "Enter your name" },
                { icon: FaEnvelope, label: "Email Address", name: "email", placeholder: "Enter your email" },
                { icon: FaPhone, label: "Phone Number", name: "phone", placeholder: "Enter your phone number" },
              ].map((field, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <label className="flex items-center mb-2 font-semibold text-gray-200">
                    <field.icon className="mr-2 text-indigo-400" />
                    {field.label}
                  </label>
                  <div className="relative">
                    <input
                      type={field.name === "email" ? "email" : "text"}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 border rounded-lg bg-gray-700/50 border-indigo-600/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Calendar */}
            <motion.div variants={itemVariants} className="mt-8">
              <h2 className="flex items-center mb-4 text-xl font-semibold text-white">
                <FaCalendarAlt className="mr-2 text-indigo-400" /> Select a Date
              </h2>
              <div className="flex justify-center">
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  minDate={new Date()}
                  className="react-calendar"
                />
              </div>
            </motion.div>

            {/* Time Slots */}
            {selectedDate && (
              <motion.div variants={itemVariants} className="mt-8">
                <h2 className="flex items-center mb-4 text-xl font-semibold text-white">
                  <FaClock className="mr-2 text-indigo-400" /> Select a Time Slot
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm ${
                        selectedTime === time
                          ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-[0_0_10px_rgba(79,70,229,0.7)]"
                          : "bg-gray-700/50 border-indigo-600/30 text-gray-200 hover:bg-indigo-600/20 hover:border-indigo-400/50"
                      }`}
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                    >
                      {time}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="flex justify-center mt-10">
              <motion.button
                type="submit"
                className="w-[220px] h-[60px] flex items-center justify-center text-lg font-bold text-white uppercase rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 shadow-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Schedule Now
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>

      {/* Confirmation Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              className="w-full max-w-md p-8 text-center border shadow-2xl bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-md rounded-xl border-indigo-600/30"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 150 } }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white">Booking Confirmed!</h2>
              <p className="mb-6 text-gray-200">
                Your call is scheduled for{" "}
                <span className="font-semibold text-indigo-400">
                  {selectedDate?.toLocaleDateString()} at {selectedTime}
                </span>
                . We’ll send a confirmation to{" "}
                <span className="font-semibold text-indigo-400">{formData.email}</span>.
              </p>
              <motion.button
                onClick={() => setShowPopup(false)}
                className="px-6 py-3 text-lg font-bold text-white uppercase transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-indigo-600 to-purple-700 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-800"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}