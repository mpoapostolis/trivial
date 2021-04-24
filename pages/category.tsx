import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
  { value: "", label: "Any Category" },
  { value: "9", label: "General Knowledge" },
  { value: "10", label: "Books" },
  { value: "11", label: "Film" },
  { value: "12", label: "Music" },
  { value: "13", label: "Theatres" },
  { value: "14", label: "Television" },
  { value: "15", label: "Video" },
  { value: "16", label: "Board" },
  { value: "17", label: "Nature" },
  { value: "18", label: "Computers" },
  { value: "19", label: "Mathematics" },
  { value: "20", label: "Mythology" },
  { value: "21", label: "Sports" },
  { value: "22", label: "Geography" },
  { value: "23", label: "History" },
  { value: "24", label: "Politics" },
  { value: "25", label: "Art" },
  { value: "26", label: "Celebrities" },
  { value: "27", label: "Animals" },
  { value: "28", label: "Vehicles" },
  { value: "29", label: "Comics" },
  { value: "30", label: "Gadgets" },
  { value: "31", label: "Manga" },
  { value: "32", label: "Cartoon" },
];

export default function Home() {
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
          Select Category
        </h1>
        <hr className="my-8 opacity-40" />
        <div className="w-full gap-x-4 mt-20 gap-y-4 grid  container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((cat) => (
            <Link
              href={{
                pathname: "/level",
                query: { category: cat.value },
              }}
              key={cat.value}
            >
              <a
                role="button"
                onClick={() => select.play()}
                style={{
                  textShadow: "1px 1px #0008",
                }}
                className={`w-full bg-gradient-to-tl from-blue-400 to-green-300
                          text-center flex justify-center items-center h-48 text-yellow-50
                          rounded-md transform hover:rotate-3 transition text-lg 
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
