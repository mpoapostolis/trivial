import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const levels = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export default function Home() {
  const router = useRouter();
  const [select, setSelect] = useState<HTMLAudioElement>();

  useEffect(() => {
    setSelect(new Audio("/sounds/select.ogg"));
  }, []);

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
        <h1 className="text-5xl text-shadow text-yellow-300 font-extrabold text-center">
          Select Difficulty
        </h1>

        <hr className="my-8 opacity-40" />
        <div className="w-full gap-x-4 mt-20 gap-y-4 grid container mx-auto grid-cols-1">
          {levels.map((cat) => (
            <Link
              href={{
                pathname: "/game",
                query: { ...router.query, difficulty: cat.value },
              }}
              key={cat.value}
            >
              <a
                role="button"
                onClick={() => select.play()}
                key={cat.value}
                className={`w-full text-shadow  bg-gradient-to-tl from-blue-400 to-green-300
                          text-center flex justify-center items-center h-20 text-yellow-50
                          rounded-md transform transition text-lg 
                          duration-100 hover:text-yellow-300 font-bold shadow-lg`}
              >
                {cat.label}
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
