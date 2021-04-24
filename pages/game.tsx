import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const [q, setQ] = useState([]);
  const [ans, setAnsw] = useState({});
  const [idx, setIdx] = useState(0);
  const [lifes, setLifes] = useState(5);
  const router = useRouter();

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${router.query.category}&difficulty=${router.query.difficulty}&type=multiple`
    ).then((res) =>
      res.json().then((questions) => {
        setQ(questions.results);
      })
    );
  }, [router.query]);

  const answers =
    q.length > 0 && idx < q.length
      ? [...q[idx]?.incorrect_answers, q[idx]?.correct_answer].sort()
      : [];

  function getColor(a: string) {
    const key = q[idx]?.question;
    const correctAnswer = q[idx]?.correct_answer;

    if (!ans[key]) return "from-blue-400 to-green-300";
    if (ans[key] && a === correctAnswer) return "from-green-400 to-green-300";
    if (ans[key]) return "from-gray-400 to-gray-300";
  }

  let wrong =
    typeof window !== "undefined"
      ? new Audio("/sounds/wrong.wav")
      : {
          play: () => 0,
        };

  let correct =
    typeof window !== "undefined"
      ? new Audio("/sounds/win.mp3")
      : {
          play: () => 0,
        };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-400 w-screen min-h-screen h-full">
      <Head>
        <title>Omega Trivial</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Omega Trivial</title>
        <link rel="icon" href="/favicon.ico" />

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

      <main className="p-8">
        <div className="flex justify-center  sm:justify-between flex-wrap w-full items-center">
          <h1 className="text-5xl text-shadow text-yellow-300 font-extrabold text-center">
            Question #{idx + 1}
          </h1>
          <div className="flex mt-8 sm:mt-0">
            {[...Array(lifes)].map((_, idx) => (
              <img key={idx} className="mx-2 w-8 h-8" src="/images/heart.png" />
            ))}
          </div>
        </div>

        <hr className="my-8 opacity-40" />
        {lifes === 0 ? (
          <h1 className="text-8xl mt-20 text-shadow text-yellow-300 font-extrabold text-center">
            Game Over{" "}
          </h1>
        ) : (
          <div>
            <div className="w-auto mt-20 mx-auto">
              <h1 className="text-3xl text-shadow text-yellow-100 font-extrabold text-center">
                {q[idx]?.question
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">")
                  .replace(/&quot;/g, '"')
                  .replace(/&amp;/g, "&")
                  .replace(/&#039\;/g, "’")}
              </h1>
            </div>
            <div className="grid mt-20 grid-cols-1 lg:grid-cols-2 gap-4 mx-auto w-11/12 sm:w-4/6">
              {answers.map((ans) => (
                <div
                  key={ans}
                  onClick={() => {
                    setAnsw((s) => ({ ...s, [q[idx].question]: ans }));
                    if (ans !== q[idx].correct_answer) {
                      wrong.play();
                      setLifes(lifes - 1);
                    } else {
                      correct.play();
                    }
                    setTimeout(() => {
                      setIdx(idx + 1);
                    }, 1000);
                  }}
                  role="button"
                  className={`w-full p-4 text-shadow bg-gradient-to-tl ${getColor(
                    ans
                  )}
                          text-center flex justify-center items-center h-32 text-yellow-50
                          rounded-md transform transition text-2xl 
                          duration-100 hover:text-yellow-100 font-bold shadow-lg`}
                >
                  <div className="flex items-center">{ans}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer>
        {(lifes === 0 || idx === q.length) && (
          <Link href="/">
            <p
              role="button"
              className="text-center text-shadow text-lg font-bold text-yellow-100"
            >
              Play again
            </p>
          </Link>
        )}
      </footer>
    </div>
  );
}
