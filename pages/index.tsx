import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [select, setSelect] = useState<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setSelect(new Audio("/sounds/select.ogg"));
    setIsPlaying(window?.mainMusic && window?.mainMusic?.currentTime > 0);

    if (window.mainMusic) return;
    window.mainMusic = new Audio("/sounds/game.mp3");
    window.mainMusic.loop = true;
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-400 w-screen min-h-screen h-full">
      <Head>
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
          Omega Trivial
        </h1>
        <hr className="my-8 opacity-40" />
        <div className="w-full gap-x-4 mt-20 gap-y-4 grid container mx-auto grid-cols-1">
          <Link href={"/category"}>
            <a
              onClick={() => select.play()}
              role="button"
              className={`w-full text-shadow  bg-gradient-to-tl from-blue-400 to-green-300
                          text-center flex justify-center items-center h-20 text-yellow-50
                          rounded-md transform transition text-lg 
                          duration-100 hover:text-yellow-300 font-bold shadow-lg`}
            >
              <div className="flex items-center w-64 gap-x-2">
                <img
                  className="w-10 mr-4"
                  src="https://s2.svgbox.net/materialui.svg?ic=games&color=fffc"
                  width="32"
                  height="32"
                />
                <span>Start Game</span>
              </div>
            </a>
          </Link>

          <div
            onClick={() => {
              select.play();
              if (isPlaying) {
                window.mainMusic.pause();
                window.mainMusic.currentTime = 0;
                setIsPlaying(false);
              } else {
                window.mainMusic.play();
                setIsPlaying(true);
              }
            }}
            role="button"
            className={`w-full text-shadow  bg-gradient-to-tl from-blue-400 to-green-300
                          text-center flex justify-center items-center h-20 text-yellow-50
                          rounded-md transform transition text-lg 
                          duration-100 hover:text-yellow-300 font-bold shadow-lg`}
          >
            <div className="flex items-center w-64 gap-x-2">
              <img
                className="w-10 mr-4"
                src="https://s2.svgbox.net/hero-solid.svg?ic=music-note&color=fffc"
                width="32"
                height="32"
              />
              <span>Audio {isPlaying ? "on" : "off"}</span>
            </div>
          </div>

          <div
            onClick={() => {
              select.play();
            }}
            role="button"
            className={`w-full text-shadow  bg-gradient-to-tl from-blue-400 to-green-300
                          text-center flex justify-center items-center h-20 text-yellow-50
                          rounded-md transform transition text-lg 
                          duration-100 hover:text-yellow-300 font-bold shadow-lg`}
          >
            <div className="flex items-center w-64 gap-x-2">
              <img
                className="w-10 mr-4"
                src="https://s2.svgbox.net/materialui.svg?ic=settings&color=fffc"
                width="32"
                height="32"
              ></img>
              <span>Settings</span>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
