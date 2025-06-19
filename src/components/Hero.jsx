import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 text-center  text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6"
      >
        Create <span className="text-[#66fcf1]">AI-Powered</span> Quizzes
        Instantly
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
      >
        Enter a topic and get multiple-choice quizzes generated in seconds.
        Perfect for learners, teachers, and test prep!
      </motion.p>

      <motion.div
        className="flex gap-6 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link to="/create">
          <button className="bg-[#66fcf1] cursor-pointer text-[#0b0c10] px-6 py-3 rounded-xl font-bold hover:bg-[#45a29e] transition">
            Start Generating
          </button>
        </Link>
       
      </motion.div>
    </section>
  );
};

export default Hero;
