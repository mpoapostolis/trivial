import { useReducer } from "react";
import { useRouter } from "next/router";

type Props = {
  loading: boolean;
  fetchData: (e: string) => void;
};
export default function Badge(props: Props) {
  const router = useRouter();

  const category =
    router.query.cat === "any" || router.query.cat === undefined
      ? ""
      : `category=${router.query.cat}`;

  return (
    <button
      onClick={() => {
        props.fetchData(category.toString());
      }}
      className={`${
        props.loading ? "animate-spin scale-110 " : ""
      }  fetch-more  bg-blue-700 text-white w-16 h-16 font-bold absolute flex  text-2xl justify-center items-center rounded-full`}
    >
      &#x21bb;
    </button>
  );
}
