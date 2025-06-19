import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { generateQuiz } from '../api/generateQuiz';
import { parseQuizText } from '../utils/parseQuizData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreateQuiz = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const topicFromURL = params.get('topic');
    if (topicFromURL) setTopic(topicFromURL);
  }, [location.search]);

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    const raw = await generateQuiz(topic);
    const parsed = parseQuizText(raw);

    if (parsed.length > 0) {
      localStorage.setItem('quizData', JSON.stringify(parsed));
      navigate('/quiz');
    } else {
      alert('Failed to generate quiz. Try a different topic.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#040e2e] to-[#088395] min-h-screen text-white flex flex-col">
      <Navbar />

      <div className="   flex-grow flex flex-col items-center justify-center py-20 px-4">
        <div className="bg-transparent  backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-lg w-full space-y-6 text-center">
          <h2 className="text-3xl font-bold text-white">
             Enter a Topic 
          </h2>

          <input
            type="text"
            className="w-full px-5 py-3 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., World War 2"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`w-full transition duration-300 cursor-pointer px-6 py-3 rounded-lg font-semibold text-lg ${
              loading
                ? 'bg-[#45a29e]/60 cursor-not-allowed'
                : 'bg-[#66fcf1] text-black hover:bg-[#45a29e] hover:text-white'
            }`}
          >
            {loading ? 'Generating...' : 'Generate Quiz'}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateQuiz;
