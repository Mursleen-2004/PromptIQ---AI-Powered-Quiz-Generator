const topics = [
  "JavaScript", "Space Science", "World History", "Nutrition", "Python",
  "Artificial Intelligence", "General Knowledge", "Mathematics",
  "Mental Health", "Geography", "Physics", "English Grammar"
];

const TrendingTopics = ({ onSelectTopic }) => {
  return (
    <section className=" text-white px-6 md:px-20 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Explore Trending <span className="text-[#66fcf1]">Quiz Topics</span>
      </h2>

      <p className="text-center text-white mb-10">
        Click on any topic to instantly generate a quiz using AI
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {topics.map((topic, i) => (
          <button
            key={i}
            onClick={() => onSelectTopic(topic)}
            className="bg-[#1f2833] hover:bg-[#66fcf1] cursor-pointer hover:text-black px-6 py-2 rounded-full transition font-medium border border-[#45a29e]"
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TrendingTopics;
