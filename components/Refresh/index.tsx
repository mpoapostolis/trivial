import { useReducer } from "react";
import { useRouter } from "next/router";

type Props = {
  loading: boolean;
  fetchData: (e: string) => void;
};
export default function Badge(props: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        props.fetchData(router.query.cat.toString());
      }}
      className={`${
        props.loading ? "animate-spin scale-110 " : ""
      }  fetch-more  bg-blue-700 text-white w-16 h-16 font-bold absolute flex  text-2xl justify-center items-center rounded-full`}
    >
      &#x21bb;
    </button>
  );
}
