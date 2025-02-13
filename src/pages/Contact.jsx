import React, { useState } from "react";
import RevealOnScroll from "../components/RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY);
      alert("Message Sent");
      setFormData({ name: "", email: "", message: "" }); 
      e.target.reset(); 
    } catch (error) {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 dark:bg-black"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className=" text-center text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Get In Touch with us
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="from_name"
                required
                className="w-full bg-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                } 
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="from_email"
                required
                value={formData.email} 
                className="w-full bg-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                } 
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                id=""
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/10 rounded px-4 py-3 text-white transition focus:outline-non focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-whit py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
