import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-[#040e2e] to-[#088395] min-h-screen text-white flex flex-col">
      <Navbar />

      <main className="flex-grow px-6 py-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Prompt<span className="text-red-600 font-bold">IQ </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            PromptIQ is your AI-powered quiz generation platform designed to
            make learning faster, smarter, and more personalized. Simply enter a
            topic, and PromptIQ instantly crafts high-quality multiple-choice
            questions (MCQs) using advanced AI models — helping students,
            teachers, and lifelong learners test their knowledge in seconds.
          </p>

          <div className="bg-transparent hover:scale-105 transition-all duration-500 cursor-pointer p-6 rounded-2xl shadow-2xl space-y-4">
            <h2 className="text-2xl font-semibold text-white hover:text-2xl">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-left space-y-2 text-gray-300">
              <li> Instantly generate 10 MCQs on any topic</li>
              <li> Highlighted correct answers</li>
              <li> Quiz results and scoring</li>
              <li> Secure login with Clerk authentication</li>
              <li> Built with OpenRouter AI models</li>
              <li> Fully responsive, smooth animations with Framer Motion</li>
            </ul>
          </div>

    

          <div className="bg-transparent p-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer space-y-4">
            <h2 className="text-2xl font-semibold text-white">
               Built With
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-left">
              <li>⚛️ React & Tailwind CSS</li>
              <li>🔐 Clerk for Authentication</li>
              <li>🧠 OpenRouter AI</li>
              <li>🎨 Framer Motion</li>
              <li>🌐 Vercel Deployment</li>
              <li>💾 LocalStorage Data</li>
            </ul>
          </div>

          
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
