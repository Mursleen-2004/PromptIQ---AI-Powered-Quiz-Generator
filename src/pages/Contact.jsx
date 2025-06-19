import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        formRef.current.reset();

        // Redirect to homepage after 2 seconds
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0c10] via-[#1f2833] to-[#088395] text-white">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-white mb-4"
        >
          Contact Me
        </motion.h2>
        <p className="text-center text-[#c5c6c7] mb-10">
          Give me The feedback and also Send the suggestions if any!
        </p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-[#1f2833] border border-[#66fcf1]/20 backdrop-blur-sm p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <input
            type="hidden"
            name="access_key"
            value="1e565e12-8ae1-4f70-b131-62bb20d4f6cb"
          />

          <div className="flex flex-col gap-2">
            <label className="text-[#66fcf1] font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="px-4 py-2 rounded-md bg-[#c5c6c7] text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
              placeholder="Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#66fcf1] font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="px-4 py-2 rounded-md bg-[#c5c6c7] text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#66fcf1] font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="px-4 py-2 rounded-md bg-[#c5c6c7] text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
              placeholder=" message..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-[#66fcf1] text-black py-2 cursor-pointer rounded-lg font-bold text-lg transition duration-300 hover:bg-[#45a29e]"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>

     
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default Contact;
