import triviaApi from "../apis/triviaApi";
import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [qAndAs, setQAndAs] = useState([]);
  const [checked, setChecked] = useState(false);
  const [counter, setCounter] = useState(0);

  // Shuffle function robbed from StackOverflow
  // https://stackoverflow.com/a/12646864
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Highlights user selected answers upon click
  const handleClick = (e, id, answer) => {
    // ES6 Computed property names
    setSelectedAnswers((prev) => {
      return { ...prev, [id]: answer };
    });
  };

  const sortData = (arr) => {
    arr.map((el) => {
      const correctAnswer = { id: el.id, correctAnswer: el.correctAnswer };
      const questionAndAnswer = {
        id: el.id,
        answers: [el.correctAnswer, ...el.incorrectAnswers],
        question: el.question,
        correctAnswer: el.correctAnswer,
        checked: checked,
      };
      shuffleArray(questionAndAnswer.answers);
      setCorrectAnswers((prev) => [...prev, correctAnswer]);
      setQAndAs((prev) => [...prev, questionAndAnswer]);
    });
  };

  const fetchData = async () => {
    setCounter(0);
    setLoading(true);
    setSelectedAnswers({});
    setCorrectAnswers([]);
    setQAndAs([]);
    setChecked(false);
    try {
      console.log("Fetching!");
      const response = await triviaApi.get("questions", {
        params: {
          limit: 4,
          region: "GB",
          difficulty: "medium",
        },
      });
      console.log(response.data);
      sortData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Something went wrong -", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitAnswers = () => {
    setCounter(0);
    if (Object.keys(selectedAnswers).length == 4) {
      for (const key in selectedAnswers) {
        correctAnswers.forEach((ans) => {
          ans.id === key && ans.correctAnswer === selectedAnswers[key]
            ? setCounter(prevCount => prevCount+1)
            : null;
        });
      }
      setChecked(true);
      console.log("checked", checked);
    } else {
      console.log("Missing answers");
    }
  };

  const resetQuiz = () => fetchData();

  return (
    <WatchListContext.Provider
      value={{
        loading,
        selectedAnswers,
        setSelectedAnswers,
        correctAnswers,
        qAndAs,
        handleClick,
        checked,
        submitAnswers,
        resetQuiz,
        counter,
      }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
