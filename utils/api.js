const initialData = {
  Geography: {
    title: "Geography",
    questions: [
      {
        question: "Is South Africa a country?",
        answer: "No, it is just a region",
        correctAnswer: "false"
      },
      {
        question: "Which US state is next to California?",
        answer: "New York",
        correctAnswer: "false"
      }
    ]
  },
  JavaScript: {
    title: "Javascript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical envirom=nment within which that function was delcared",
        correctAnswer: "true"
      },
      {
        question: "What is a variable?",
        answer: "Something that stores information",
        correctAnswer: "true"
      }
    ]
  }
};

export const getData = () => {
  return initialData;
};
