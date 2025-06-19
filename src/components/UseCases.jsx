import { GraduationCap, BookOpenCheck, UserCog, Briefcase } from "lucide-react";
import { useState } from "react";

const useCases = [
  {
    title: "Teachers",
    icon: <GraduationCap size={36} className="text-[#66fcf1]" />,
    desc: "Quickly generate quizzes for classroom tests or assignments. Save hours of prep time.",
  },
  {
    title: "Students",
    icon: <BookOpenCheck size={36} className="text-[#66fcf1]" />,
    desc: "Practice for exams, revise key topics, and test your knowledge with smart quizzes.",
  },
  {
    title: "Self-Learners",
    icon: <UserCog size={36} className="text-[#66fcf1]" />,
    desc: "Learning something new? Use AI to quiz yourself and boost retention.",
  },
  {
    title: "Professionals",
    icon: <Briefcase size={36} className="text-[#66fcf1]" />,
    desc: "Create training quizzes for your team or evaluate interview candidates quickly.",
  },
];

const UseCases = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="text-white px-6 md:px-20 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Who Is Prompt<span className="text-[#66fcf1]">IQ</span> For?
      </h2>

      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {useCases.map((uc, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`px-4 py-2 rounded-full cursor-pointer border transition ${
              selected === idx
                ? "bg-[#66fcf1] text-black"
                : "border-[#66fcf1] text-white hover:bg-[#1f2833]"
            }`}
          >
            {uc.title}
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-4">
          {useCases[selected].icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {useCases[selected].title}
        </h3>
        <p className="text-gray-300 text-sm">{useCases[selected].desc}</p>
      </div>
    </section>
  );
};

export default UseCases;
