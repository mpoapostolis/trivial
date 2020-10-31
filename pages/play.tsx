import Head from "next/head";
import Card from "../components/Card";
import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import Badge from "../components/Refresh";

const TIMER = 240;

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState<number>(TIMER);
  const [isPaused, setIsPaused] = useState(false);
  const [id, setId] = useState<any>();

  const router = useRouter();

  const tick = () =>
    setInterval(() => setTimer((t) => (t < 1 ? undefined : t - 1)), 1000);

  const fetchData = () => {
    setLoading(true);
    const category =
      router.query.cat === "any" || router.query.cat === undefined
        ? ""
        : `category=${router.query.cat}`;

    router.replace({
      query: {
        cat: router.query.cat || "any",
      },
    });
    fetch(
      `https://opentdb.com/api.php?amount=10&${category}&difficulty=easy`
    ).then((res) =>
      res.json().then((questions) => {
        setLoading(false);
        setQuestions(questions.results);
      })
    );
  };

  useEffect(() => {
    if (timer === 0 && id) {
      stop();
    }
  }, [timer, id]);

  const start = () => {
    if (!timer) setTimer(TIMER);
    if (!id) {
      setPoints(0);
      setId(tick());
    }
  };
  useEffect(() => {
    fetchData();
    start();
  }, []);

  const togglePause = () => {
    setIsPaused((isPaused) => {
      if (!isPaused) {
        clearInterval(id);
        setId(undefined);
      } else {
        start();
      }
      return !isPaused;
    });
  };

  const stop = () => {
    clearInterval(id);
    router.push(`/?points=${points}`);
  };

  return (
    <>
      <Head>
        <title>omega trivia </title>
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="Test your brain and get smarter with online trivial questions every day"
        />
        <meta property="og:title" content="Omega Trivia" />
        <meta property="og:type" content="question.game" />
        <meta
          property="og:image"
          content="/icon/favicon-16x16-dunplab-manifest-26426.png"
        />
        <meta
          name="keywords"
          content="quiz game, trivia game, free quiz, trivia-game, quiz-game, free trivia,test your brain, brain exercise, get smarter"
        />

        <meta name="author" content="mpoapostolis@gmail.com" />
        <link
          rel="icon"
          href="/icon/favicon-16x16-dunplab-manifest-26426.png"
        />
      </Head>
      <div className="py-3 sticky z-40 w-full top-0  shadow bg-blue-700 text-white font-bold  flex  text-lg justify-center items-center">
        Points: {points}
      </div>

      <br />
      <div
        className={`pb-24 ${
          loading || isPaused ? "opacity-25 text-white" : ""
        }`}
      >
        {questions.map((q, idx) => (
          <Fragment key={`${q.correct_answer}__${idx}`}>
            {(idx === 2 || idx === 5 || idx === 9) && (
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3337605713038685"
                data-ad-slot="3046797178"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            )}

            <Card
              setPoints={(n) => setPoints((s) => Math.max(s + n, 0))}
              {...q}
            />
          </Fragment>
        ))}
      </div>

      <Badge
        timer={timer}
        fetchData={fetchData}
        isPaused={isPaused}
        start={start}
        togglePause={togglePause}
        points={points}
        loading={loading}
      />
    </>
  );
}
