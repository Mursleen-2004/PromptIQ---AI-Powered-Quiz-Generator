import { Brain, FileText, Timer, Share2 } from "lucide-react";

const features = [
  {
    icon: <Brain size={32} className="text-red-600 " />,
    title: "AI-Generated Quizzes",
    desc: "Create intelligent multiple-choice questions instantly from any topic using advanced AI.",
  },
  {
    icon: <FileText size={32} className="text-red-600" />,
    title: "Customizable & Accurate",
    desc: "Set number of questions, difficulty, and get quizzes that are clear, factual, and engaging.",
  },
  {
    icon: <Timer size={32} className="text-red-600" />,
    title: "Fast & Efficient",
    desc: "No signup delays. Just type your topic, and get a quiz in seconds—ready to solve or share.",
  },
  {
    icon: <Share2 size={32} className="text-red-600" />,
    title: "Export & Share",
    desc: "Download your quizzes, share with friends, or embed in your learning portal easily.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 md:px-20  text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose <span className="text-white">Prompt<span className='text-[#66fcf1] font-extrabold'>IQ</span></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#09203F] to-[#2a4050] rounded-2xl cursor-pointer  p-6 shadow-lg hover:scale-105 transition transform"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-white text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
