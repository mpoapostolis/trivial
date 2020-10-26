import { useState } from "react";

type Props = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export default function Card(props: Props) {
  const answers = [...props.incorrect_answers, props.correct_answer].sort();

  const [answer, setAnswer] = useState<string>();

  return (
    <div className="max-w-2xl border my-10 mx-auto px-8 pb-4 bg-white rounded-lg shadow-md">
      <div className="flex mt-4">
        {/*  ----------- */}

        <span className="px-3 py-2 w-full flex items-center  h-full bg-blue-600 text-gray-100 text-sm font-bold rounded-l-lg">
          {props.category}
        </span>
        {/*  ----------- */}

        <div
          className={`px-3 py-2  flex items-center h-auto  rounded-r-lg 
        ${
          props.difficulty === "medium"
            ? " bg-blue-400"
            : props.difficulty === "easy"
            ? " bg-green-500"
            : " bg-red-400"
        }
        text-gray-100 text-sm font-bold`}
        >
          {props.difficulty}
        </div>
        {/*  ----------- */}
      </div>
      <br />
      <p
        className="md:text-2xl text-lg  text-gray-700 font-bold"
        dangerouslySetInnerHTML={{ __html: props.question }}
      ></p>
      <br />
      <div className="grid grid-cols-2 gap-2">
        {answers.map((answ) => (
          <button
            onClick={() => !answer && setAnswer(answ)}
            dangerouslySetInnerHTML={{ __html: answ }}
            className={`${
              answer
                ? answ === props.correct_answer
                  ? "border-none bg-green-500 text-white"
                  : "border-none bg-red-500 text-white opacity-25"
                : ""
            } p-3 rounded-lg border shadow `}
            key={answ}
          ></button>
        ))}
      </div>
    </div>
  );
}
