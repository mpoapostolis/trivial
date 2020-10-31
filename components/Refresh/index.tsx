import { useRouter } from "next/router";

function getTime(num) {
  var minutes = Math.floor(num / 60);
  var seconds = num % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

type Props = {
  loading: boolean;
  points: number;
  timer: number;
  isPaused: boolean;
  fetchData: () => void;
  start: () => void;
  stop: () => void;
  togglePause: () => void;
};
export default function Badge(props: Props) {
  return (
    <div className="fixed bottom-0 grid grid-cols-2 w-full h-12">
      {props.timer ? (
        <>
          <button
            onClick={() => {
              document?.querySelector("#reset")?.scrollTo(0, 0);
              props.togglePause();
            }}
            className="w-full border-r  border-blue-400 shadow bg-blue-700 text-white font-bold  flex  justify-center items-center"
          >
            <span>
              {!props.isPaused ? (
                <span className="text-lg">▋▋</span>
              ) : (
                <span className="text-xl">▶</span>
              )}
            </span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {getTime(props.timer)}
          </button>

          <button
            onClick={props.fetchData}
            className={`border-blue-400  shadow w-full  bg-blue-700  text-white font-bold  flex  text-lg justify-center items-center`}
          >
            New Questions &nbsp;
            <span
              className={`${props.loading ? "animate-spin scale-110 " : ""} `}
            >
              &#x21bb;
            </span>
          </button>
        </>
      ) : (
        <button
          onClick={props.start}
          className={`border-blue-400 col-start-1 col-end-3  shadow w-full bg-blue-700 text-white font-bold  flex  text-lg justify-center items-center`}
        >
          Start
        </button>
      )}
    </div>
  );
}
