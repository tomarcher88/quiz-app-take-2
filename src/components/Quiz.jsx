import { Container } from "postcss";
import { useContext } from "react";
import { WatchListContext } from "../context/context";
import { Question } from "./Question";
import { Loading } from "./Loading";
import { Footer } from "./Footer";

export const Quiz = () => {
  const {
    questions,
    loading,
    qAndAs,
    selectedAnswers,
    correctAnswers,
    submitAnswers,
    resetQuiz,
    counter,
    checked,
  } = useContext(WatchListContext);

  return (
    <>
      <main className="bg-slate-800 min-h-screen flex items-center">
        <div className="bg-slate-600 flex flex-col p-4 rounded-lg min-h-[250px] w-full md:w-4/5 justify-center mx-auto">
          <h1 className="underline text-center font-extrabold text-slate-200 text-2xl">
            Quiz
          </h1>
          {loading ? (
            <Loading />
          ) : (
            qAndAs.map(({ id, answers, correctAnswer, question, checked }) => {
              return (
                <Question
                  answers={answers}
                  correctAnswer={correctAnswer}
                  question={question}
                  id={id}
                  key={id}
                  checked={checked}
                />
              );
            })
          )}
          <div className="flex justify-center gap-2">
            <button
              onClick={submitAnswers}
              className={`w-fit my-1 p-2 rounded text-center bg-slate-400 font-semibold`}
            >
              Check Answers
            </button>
            <button
              className={`w-fit my-1 p-2 rounded text-center bg-slate-400 font-semibold`}
              onClick={resetQuiz}
            >
              New Questions
            </button>
          </div>
          {checked ? (
            <p className="text-center font-bold">You scored {counter}/4</p>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
};
