import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const QuizDisplay = () => {
  const [quiz, setQuiz] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const raw = localStorage.getItem('quizData');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setQuiz(parsed);
      } catch (err) {
        console.error('Invalid quiz data');
      }
    }
  }, []);

  const handleOptionSelect = (qIndex, option) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  const handleSubmit = () => {
    let correct = 0;
    quiz.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  if (!quiz || quiz.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#040e2e] to-[#088395] text-white">
        <p className="text-xl">No quiz data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040e2e] to-[#088395] px-4 py-10 text-white flex flex-col items-center">
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl w-full space-y-8"
        >
          <h2 className="text-3xl font-bold text-center text-[#66fcf1]">
            Answer the Questions
          </h2>

          {quiz.map((q, index) => (
            <div
              key={index}
              className="bg-[#0b0c10]/70 p-6 rounded-xl shadow-md space-y-4"
            >
              <h3 className="font-semibold text-lg">
                {index + 1}. {q.question}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {q.options.map((opt, i) => (
                  <label
                    key={i}
                    className={`cursor-pointer border rounded-lg px-4 py-2 transition-all ${
                      userAnswers[index] === opt
                        ? 'bg-[#66fcf1] text-black font-semibold'
                        : 'hover:bg-[#1f2833]'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={opt}
                      checked={userAnswers[index] === opt}
                      onChange={() => handleOptionSelect(index, opt)}
                      className="hidden"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="mt-6 bg-[#66fcf1] cursor-pointer text-black px-8 py-3 rounded-lg font-bold hover:bg-[#45a29e] transition"
            >
              Submit Quiz
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0b0c10]/80 p-10 rounded-2xl shadow-2xl max-w-xl w-full text-center space-y-4"
        >
          <h2 className="text-4xl font-extrabold text-[#66fcf1] mb-4">
             Quiz Completed!
          </h2>
          <p className="text-2xl text-white">
            You got <span className="text-[#66fcf1]">{score}</span> out of{' '}
            <span className="text-[#66fcf1]">{quiz.length}</span> 
          </p>
          <p className="text-xl font-semibold">
            Score:{' '}
            <span className="text-[#66fcf1]">
              {((score / quiz.length) * 100).toFixed(0)}%
            </span>
          </p>

          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <button
              onClick={() => window.location.reload()}
              className="bg-[#66fcf1] text-black px-6 cursor-pointer py-2 rounded-lg font-semibold hover:bg-[#45a29e] transition"
            >
              Try Again
            </button>

            <button
              onClick={() => navigate('/create')}
              className="bg-transparent border cursor-pointer border-[#66fcf1] text-[#66fcf1] px-6 py-2 rounded-lg font-semibold hover:bg-[#66fcf1] hover:text-black transition"
            >
              Create New Quiz
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuizDisplay;
