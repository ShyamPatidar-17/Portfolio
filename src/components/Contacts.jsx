import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
   // Make sure to import the CSS for waving animation

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (status === "sending") return;
    setStatus("sending");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const adminTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; 
    const autoReplyTemplate = import.meta.env.VITE_REPLY_EMAILJS_TEMPLATE_ID; 
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Send email to ADMIN
      await emailjs.sendForm(serviceID, adminTemplate, form.current, publicKey);

      // Send auto-reply to USER
      await emailjs.sendForm(serviceID, autoReplyTemplate, form.current, publicKey);

      setStatus("success");
      form.current.reset();

      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const contactInfo = [
    { icon: <FaPhoneAlt />, title: "Phone", value: "+91 73547-27368", href: "tel:+917354727368" },
    { icon: <FaEnvelope />, title: "Email", value: "shyampatidar916@gmail.com", href: "mailto:shyampatidar916@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Indore, Madhya Pradesh, India" },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">

        {/* Intro line with glowing bulb and waving hand */}
        <p className="text-gray-300 text-center mb-6 text-lg md:text-xl font-medium flex items-center justify-center gap-2">
          <span className="text-yellow-400 animate-pulse text-2xl drop-shadow-lg">💡</span>
          Have an idea, a challenge, or a project in mind? Let’s turn it into reality together! Whether it’s web or app.
          <span className="inline-block animate-wave">👋</span>
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">Let's talk about everything!</h3>
            <p className="text-gray-400">
              Don't like forms? Send me an email. 👋 <br />
              I am available for freelance or full-time opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-sky-500/50 transition"
                >
                  <div className="w-12 h-12 bg-sky-500/10 text-sky-400 rounded-full flex items-center justify-center text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">{info.title}</p>
                    {info.href ? (
                      <a href={info.href} className="text-lg font-medium text-white hover:text-sky-400">{info.value}</a>
                    ) : (
                      <p className="text-lg text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-400 mb-4 text-sm font-semibold uppercase">Follow Me</p>
              <div className="flex gap-4">
                <a href="https://github.com/ShyamPatidar-17" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-black hover:scale-110 transition">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/shyam-patidar-736b77257/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-700"
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              <input type="text" name="user_name" required placeholder="Your Name" className="p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-500 outline-none text-white"/>
              <input type="email" name="user_email" required placeholder="Your Email" className="p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-500 outline-none text-white"/>
              <textarea name="message" rows="4" required placeholder="Your Message" className="p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-sky-500 outline-none text-white resize-none"/>

              <motion.button
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                type="submit"
                disabled={status === "sending"}
                className={`py-4 px-6 rounded-xl font-bold text-white shadow-lg transition flex justify-center items-center gap-2 ${
                  status === "sending" ? "bg-gray-600 cursor-not-allowed" : "bg-gradient-to-r from-sky-500 to-blue-600"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {status === "success" && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-center text-sm">
                  ✓ Message sent! Check your inbox.
                </div>
              )}

              {status === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-center text-sm">
                  ⚠ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
