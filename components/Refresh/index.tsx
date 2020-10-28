import { useRouter } from "next/router";

type Props = {
  loading: boolean;
  points: number;
  fetchData: (e: string) => void;
};
export default function Badge(props: Props) {
  const router = useRouter();

  const category =
    router.query.cat === "any" || router.query.cat === undefined
      ? ""
      : `category=${router.query.cat}`;

  return (
    <div className="fetch-more grid grid-cols-2 w-full h-12">
      <div
        className={`border-blue-400  shadow w-full border-r bg-blue-700 text-white font-bold  flex  text-lg justify-center items-center`}
      >
        Points: {props.points}
      </div>
      <button
        onClick={() => {
          document?.querySelector("#reset")?.scrollTo(0, 0);
          props.fetchData(category.toString());
        }}
        className="w-full  shadow bg-blue-700 text-white font-bold  flex  text-lg justify-center items-center"
      >
        New Questions &nbsp;
        <span className={`${props.loading ? "animate-spin scale-110 " : ""} `}>
          &#x21bb;
        </span>
      </button>
    </div>
  );
}
