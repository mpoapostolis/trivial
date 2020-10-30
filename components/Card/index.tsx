import { useState, useRef } from "react";

type Props = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  setPoints: (e: number) => void;
};

export default function Card(props: Props) {
  const [answer, setAnswer] = useState<string>();

  const [sound, setSound] = useState<string>();

  const answers = [...props.incorrect_answers, props.correct_answer].sort();

  const givePoints = () => {
    switch (props.difficulty) {
      case "easy":
        return 2;
      case "medium":
        return 4;
      case "hard":
        return 5;
    }
  };

  return (
    <div className="max-w-2xl border my-10 mx-auto px-8 pb-4 bg-white rounded-lg shadow-md">
      <div className="flex mt-4">
        {/*  ----------- */}

        <span className="px-3 py-2 w-full flex items-center  h-full bg-blue-600 text-gray-100 text-sm font-bold rounded-l-lg">
          {props.category}
        </span>
        {/*  ----------- */}

        <div
          className={`px-3 py-2  border-l border-blue-600 flex items-center h-auto  rounded-r-lg text-gray-100 bg-blue-500 text-sm font-bold whitespace-no-wrap`}
        >
          {givePoints()} pts
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
            onClick={() => {
              if (!answer) {
                const correct = answ === props.correct_answer;
                setSound(correct ? "/bell.wav" : "gong.wav");
                props.setPoints(correct ? givePoints() : 0);
                setAnswer(answ);
              }
            }}
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
      <audio src={sound} autoPlay></audio>
      <audio preload="auto" src={"bell.wav"}></audio>
      <audio preload="auto" src={"gong.wav"}></audio>
    </div>
  );
}
