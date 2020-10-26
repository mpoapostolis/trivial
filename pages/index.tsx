import Head from "next/head";
import Header from "../components/Header";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Badge from "../components/Refresh";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const category =
      router.query.cat === "any" || router.query.cat === undefined
        ? ""
        : `category=${router.query.cat}`;

    fetchData(category);
  }, [router.query.cat]);

  const fetchData = (category) => {
    setLoading(true);

    fetch(`https://opentdb.com/api.php?amount=10&${category}`).then((res) =>
      res.json().then((questions) => {
        setLoading(false);
        setQuestions(questions.results);
      })
    );
  };

  return (
    <>
      <Head>
        <title>omega trivia </title>
        <link rel="manifest" href="/manifest.json" />

        <meta name="description" content="Free online trivia game" />
        <meta
          name="keywords"
          content="trivia, free trivia, trivia game, trivia-game"
        />

        <meta name="author" content="mpoapostolis@gmail.com" />
        <link
          rel="icon"
          href="/icon/favicon-16x16-dunplab-manifest-26426.png"
        />
        <script
          data-ad-client="ca-pub-3337605713038685"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <div className="overflow-hidden h-screen">
        <Header points={points} />

        <div
          className={`pb-24 h-screen overflow-y-auto ${
            loading ? "opacity-25" : ""
          }`}
        >
          <br />

          {questions.map((q, idx) => (
            <Card
              setPoints={(n) => setPoints((s) => Math.max(s + n, 0))}
              key={`${q.correct_answer}__${idx}`}
              {...q}
            />
          ))}
        </div>
        <Badge fetchData={fetchData} loading={loading} />
      </div>
    </>
  );
}
