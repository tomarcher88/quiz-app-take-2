import { list } from "postcss";
import { useState, useContext, useEffect } from "react";
import { WatchListContext } from "../context/context";
import { Answer } from "./Answer";

export const Question = (props) => {
  const { selectedAnswers, setSelectedAnswers, checked } = useContext(WatchListContext);
  const { id, answers, correctAnswer, question } = props;


  return (
    <div className="bg-slate-400 m-2 py-1 rounded-lg min-h-1/4">
      <p className="text-center font-bold">{question}</p>

      <ul className="flex flex-col md:flex-row flex-wrap font-semibold justify-center my-2 w-11/12 mx-auto">
        {answers.map((answer) => (
          <Answer
          correctAnswer={correctAnswer}
            key={`${id}${answer}`}
            id={id}
            selected={
              selectedAnswers.hasOwnProperty(id) &&
              selectedAnswers[id] === answer
                ? true
                : false
            }
            answer={answer}
            checked={checked}
          />
        ))}
      </ul>
    </div>
  );
};
