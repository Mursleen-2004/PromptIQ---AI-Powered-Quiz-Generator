export const parseQuizText = (text) => {
  const questions = text.trim().split(/\n(?=\d+\.)/); // Split by numbered questions
  const parsed = [];

  for (const block of questions) {
    const lines = block.trim().split('\n');
    const questionLine = lines[0].replace(/^\d+\.\s*/, '');
    const options = [];
    let correctAnswer = '';

    for (const line of lines.slice(1)) {
      if (/^[A-D]\)/.test(line)) {
        options.push(line.slice(2).trim());
      } else if (/correct answer/i.test(line)) {
        const letter = line.trim().split(':').pop().trim().toUpperCase();
        const index = ['A', 'B', 'C', 'D'].indexOf(letter);
        correctAnswer = options[index];
      }
    }

    if (questionLine && options.length === 4 && correctAnswer) {
      parsed.push({ question: questionLine, options, correctAnswer });
    }
  }

  return parsed;
};
