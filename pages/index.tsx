import Head from "next/head";
import Header, { categories } from "../components/Header";
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

  const cat =
    categories.find((o) => o.value === router.query.cat)?.label ??
    "Any Category";

  return (
    <>
      <Head>
        <title>trivia onlinex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden h-screen">
        <Header points={points} />

        <div
          className={`px-1  pb-16 h-screen overflow-y-auto ${
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
