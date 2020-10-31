import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const start = () => {
    router.push(`/play?cat=${router.query.cat || "any"}`);
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

      <Header />

      <br />

      <div className="text-center mt-48 text-blue-700">
        <h1 className="font-bold text-3xl">
          {" "}
          {router.query.points ? `Your score: ${router.query.points}` : ""}
        </h1>
        <h1 className="font-bold text-lg">Select Category From the Header</h1>
        <h1 className="font-bold text-lg">Then Press start to play</h1>
      </div>
      <div className="fixed bottom-0 grid grid-cols-2 w-full h-12">
        <button
          onClick={start}
          className={`border-blue-400 col-start-1 col-end-3  shadow w-full bg-blue-700 text-white font-bold  flex  text-lg justify-center items-center`}
        >
          Start
        </button>
      </div>
    </>
  );
}
