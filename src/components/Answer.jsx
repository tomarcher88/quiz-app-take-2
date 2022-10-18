import { list } from "postcss";
import { useContext } from "react";
import { WatchListContext } from "../context/context";

export const Answer = (props) => {
  const { selectedAnswers, setSelectedAnswers, handleClick } = useContext(WatchListContext);
  const { id, answer, correctAnswer, selected, checked } = props;
  return (
    <li
      key={`${id}${answer}`}
      id={id}
      onClick={(e) => handleClick(e, id, answer)}
      className={`m-1 p-1 rounded grow text-center ${
        correctAnswer === answer && checked && selected
          ? "bg-green-400"
          : correctAnswer !== answer && checked && selected
          ? "bg-red-400"
          : selected && !checked
          ? "bg-slate-500"
          : !selected && correctAnswer === answer && checked
          ? "bg-green-400 opacity-50"
          : !selected && checked && correctAnswer !== answer
          ? "opacity-50 bg-slate-200"
          : "bg-slate-200"
      }
      ${checked ? "pointer-events-none" : "cursor-pointer"}`}
      selected={selected}
      correctAnswer={correctAnswer}
      checked={checked}
    >
      {answer}
    </li>
  );
};

// correctAnswer === answer && checked && selected
//   ? "bg-green-400"
//   : correctAnswer !== answer && checked && selected ? "bg-rose-400"
//   : selected && !checked ? "bg-slate-500"
//   : "bg-slate-200"


// default bg-slate-200
// selected bg-slate-500
// correct bg-green-400
// incorrect bg-rose-400


// correctAnswer === answer ? 'bg-green-400' : 'bg-rose-400'