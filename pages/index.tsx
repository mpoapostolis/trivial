import Head from "next/head";
import Header from "../components/Header";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Badge from "../components/Refresh";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const category =
      router.query.cat === "any" ? "" : `category=${router.query.cat}`;
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
        <title>trivia onlinex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden h-screen">
        <Header />
        <div
          className={`px-1 h-screen overflow-y-auto ${
            loading ? "opacity-25" : ""
          }`}
        >
          <br />

          {questions.map((q, idx) => (
            <Card key={`${q.correct_answer}__${idx}`} {...q} />
          ))}
        </div>
        <Badge fetchData={fetchData} loading={loading} />
      </div>
    </>
  );
}
