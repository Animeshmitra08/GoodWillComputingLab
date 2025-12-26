import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Globe,
  CheckCircle2,
  Loader2,
  RefreshCcw,
  X,
  Linkedin,
} from "lucide-react";

const inputStyles =
  "w-full px-4 mt-2 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-900";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [alert, setAlert] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setAlert({
      show: true,
      message: "Inquiry received! We will contact you soon.",
    });

    setTimeout(() => setAlert({ show: false, message: "" }), 4000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setTimeout(() => formRef.current?.reset(), 0);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: "sharmakcpt@gmail.com",
      subText: "Online support 24/7",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Our Location",
      details: "Moga, Punjab, India",
      subText: "I.S.F College of Pharmacy",
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden font-sans antialiased 
                bg-gradient-to-b from-indigo-50/70 via-white to-white">
      {/* ===== SHARED BACKGROUND (Hero + Content) ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-indigo-400/25 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-purple-400/25 rounded-full blur-[140px] animate-pulse delay-700" />
        <div className="absolute bottom-0 left-1/2 w-[520px] h-[520px] bg-emerald-400/20 rounded-full blur-[160px] animate-pulse delay-500" />
      </div>

      {/* ===== FLOATING ALERT ===== */}
      {alert.show && (
        <div className="fixed top-6 right-6 z-[100]">
          <div className="relative flex items-center gap-4 px-6 py-4 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 animate-in slide-in-from-right-full duration-500">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <CheckCircle2 size={18} className="text-white" />
            </div>
            <p className="text-sm font-semibold">{alert.message}</p>
            <button
              onClick={() => setAlert({ show: false, message: "" })}
              className="ml-2 p-1 rounded-lg hover:bg-black/5"
            >
              <X size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
      )}

      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex p-3 bg-white shadow-xl rounded-2xl mb-6">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
              Let's start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Conversation
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Whether you're interested in research collaboration or have a
              simple question, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="relative max-w-7xl mx-auto px-6 pb-24">
        {/* Soft fade to calm the gradient */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative ">
          {/* LEFT */}
          <div className="lg:col-span-5 space-y-6 z-10 ">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase">
                      {info.title}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-500">{info.subText}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-8 bg-gray-900 rounded-3xl text-white relative overflow-hidden">
              <Globe className="absolute -right-8 -bottom-8 w-40 h-40 text-white/5" />
              <h3 className="text-xl font-bold mb-2">
                Global Research Network
              </h3>
              <p className="text-gray-400 text-sm mb-6 max-w-[240px]">
                Join our professional community and stay updated.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold"
              >
                <Linkedin size={18} className="text-blue-400" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT */}
            <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] border border-gray-100 shadow-xl bg-white/90 backdrop-blur-sm p-8 md:p-12">
                {isSubmitted ? (
                <div className="py-12 text-center">
                    <CheckCircle2
                    size={48}
                    className="mx-auto text-emerald-500 mb-6"
                    />
                    <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                    <p className="text-gray-500 mb-8">
                    We'll get back to you within 48 hours.
                    </p>
                    <button
                    onClick={handleReset}
                    className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-bold"
                    >
                    <RefreshCcw size={18} className="inline mr-2" />
                    Send Another
                    </button>
                </div>
                ) : (
                <>
                    <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                    <p className="text-gray-500 mb-8">
                    Fill out the form and we’ll be in touch.
                    </p>

                    <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    >
                    {/* Name + Email */}
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                        <label
                            htmlFor="fullName"
                            className="text-sm font-semibold text-gray-700 ml-1"
                        >
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            required
                            placeholder="John Doe"
                            className={inputStyles}
                        />
                        </div>

                        <div className="space-y-1.5">
                        <label
                            htmlFor="email"
                            className="text-sm font-semibold text-gray-700 ml-1"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            className={inputStyles}
                        />
                        </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1.5">
                        <label
                        htmlFor="inquiryType"
                        className="text-sm font-semibold text-gray-700 ml-1"
                        >
                        Inquiry Type
                        </label>
                        <select
                        id="inquiryType"
                        className={inputStyles}
                        >
                        <option>General Inquiry</option>
                        <option>Research Collaboration</option>
                        <option>Publications</option>
                        <option>Student Opportunities</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                        <label
                        htmlFor="message"
                        className="text-sm font-semibold text-gray-700 ml-1"
                        >
                        Your Message
                        </label>
                        <textarea
                        id="message"
                        rows={4}
                        required
                        placeholder="How can we help you?"
                        className={`${inputStyles} resize-none`}
                        />
                    </div>

                    {/* Submit */}
                    <button
                        disabled={isSubmitting}
                        className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400
                                text-white font-bold rounded-2xl flex items-center gap-3
                                transition-transform active:scale-[0.98]"
                    >
                        {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={18} />
                            Sending…
                        </>
                        ) : (
                        <>
                            Submit Inquiry
                            <Send size={18} />
                        </>
                        )}
                    </button>
                    </form>
                </>
                )}
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;


// import emailjs from '@emailjs/browser';

// // Inside your component...
// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
//   emailjs.sendForm(
//     'your_service_id', 
//     'your_template_id', 
//     e.currentTarget, 
//     'your_public_key'
//   )
//   .then((result) => {
//       console.log('Email successfully sent!');
//       setIsSubmitted(true);
//       setTimeout(() => setIsSubmitted(false), 5000);
//   }, (error) => {
//       console.log('Failed to send email:', error.text);
//       alert("Something went wrong, please try again.");
//   });
// };

// import React, { useState, useEffect, useRef } from "react";
// import {
//   Mail,
//   MapPin,
//   Send,
//   MessageSquare,
//   Globe,
//   CheckCircle2,
//   Loader2,
//   RefreshCcw,
//   X,
//   Linkedin,
//   ArrowRight
// } from "lucide-react";

// const inputStyles = "w-full px-4 py-3.5 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-300 placeholder:text-slate-400 text-slate-900 shadow-sm";

// const ContactUs = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [alert, setAlert] = useState({ show: false, message: "" });

//   useEffect(() => setIsVisible(true), []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1800));
//     setIsSubmitting(false);
//     setIsSubmitted(true);
//     setAlert({ show: true, message: "Message sent successfully!" });
//     setTimeout(() => setAlert({ show: false, message: "" }), 4000);
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      
//       {/* Dynamic Alert Notification */}
//       {alert.show && (
//         <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md animate-in fade-in slide-in-from-top-4 duration-500">
//           <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between border border-white/10">
//             <div className="flex items-center gap-3">
//               <div className="bg-emerald-500 p-1.5 rounded-full">
//                 <CheckCircle2 size={16} className="text-white" />
//               </div>
//               <span className="text-sm font-medium">{alert.message}</span>
//             </div>
//             <button onClick={() => setAlert({ ...alert, show: false })} className="p-1 hover:bg-white/10 rounded-lg">
//               <X size={18} />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Hero Header */}
//       <header className="relative pt-20 pb-16 px-6 text-center">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10">
//           <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-200/40 rounded-full blur-[100px]" />
//           <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-200/40 rounded-full blur-[100px]" />
//         </div>

//         <div className={`transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
//             </span>
//             Contact Support
//           </span>
//           <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
//             Get in <span className="italic font-serif text-indigo-600">touch.</span>
//           </h1>
//           <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
//             Have a question about our research or looking to collaborate? 
//             Our doors (and inboxes) are always open.
//           </p>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 pb-32">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* Info Column */}
//           <div className="lg:col-span-4 space-y-4">
//             <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 group">
//               <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-200">
//                 <Mail size={24} />
//               </div>
//               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</h3>
//               <p className="text-xl font-bold text-slate-900 mb-1">sharmakcpt@gmail.com</p>
//               <p className="text-slate-500 text-sm">Online support 24/7</p>
//             </div>

//             <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-500 group">
//               <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-teal-200">
//                 <MapPin size={24} />
//               </div>
//               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</h3>
//               <p className="text-xl font-bold text-slate-900 mb-1">Moga, Punjab, India</p>
//               <p className="text-slate-500 text-sm font-medium">I.S.F College of Pharmacy</p>
//             </div>

//             <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-bold mb-3 tracking-tight">Professional <br/>Networking</h3>
//                 <p className="text-slate-400 text-sm mb-6 leading-relaxed">Connect with our primary researchers on LinkedIn for real-time updates.</p>
//                 <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 hover:bg-white hover:text-slate-900 px-6 py-3 rounded-xl transition-all duration-300">
//                   <Linkedin size={18} />
//                   Connect Now
//                 </a>
//               </div>
//               <Globe className="absolute -right-10 -bottom-10 w-44 h-44 text-white/5 group-hover:text-indigo-500/20 transition-colors duration-700" />
//             </div>
//           </div>

//           {/* Form Column */}
//           <div className="lg:col-span-8">
//             <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-indigo-500/5 relative overflow-hidden">
//               {isSubmitted ? (
//                 <div className="py-16 text-center animate-in zoom-in-95 duration-700">
//                   <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
//                     <CheckCircle2 size={48} className="text-emerald-500" />
//                   </div>
//                   <h2 className="text-4xl font-black text-slate-900 mb-4">You're all set!</h2>
//                   <p className="text-slate-500 mb-10 text-lg max-w-sm mx-auto">We've received your message and will get back to you within 48 hours.</p>
//                   <button onClick={() => setIsSubmitted(false)} className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-colors">
//                     <RefreshCcw size={20} />
//                     Send Another Inquiry
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <div className="mb-10">
//                     <h2 className="text-3xl font-black text-slate-900 mb-3">Send a Message</h2>
//                     <p className="text-slate-500 font-medium">Fill out the details below and we'll bridge the gap.</p>
//                   </div>

//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
//                         <input required type="text" placeholder="John Doe" className={inputStyles} />
//                       </div>
//                       <div className="space-y-2">
//                         <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
//                         <input required type="email" placeholder="john@example.com" className={inputStyles} />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Inquiry Type</label>
//                       <div className="relative">
//                         <select className={`${inputStyles} appearance-none cursor-pointer`}>
//                           <option>General Inquiry</option>
//                           <option>Research Collaboration</option>
//                           <option>Publications</option>
//                           <option>Student Opportunities</option>
//                         </select>
//                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
//                           <ArrowRight size={16} className="rotate-90" />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Your Message</label>
//                       <textarea rows={5} required placeholder="Tell us more about your inquiry..." className={`${inputStyles} resize-none`} />
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="group relative w-full md:w-auto overflow-hidden px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-70"
//                     >
//                       <div className="relative z-10 flex items-center justify-center gap-3">
//                         {isSubmitting ? (
//                           <><Loader2 className="animate-spin" size={20} /> Sending...</>
//                         ) : (
//                           <><Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Inquiry</>
//                         )}
//                       </div>
//                     </button>
//                   </form>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ContactUs;