import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";

export const categories = [
  { value: "any", label: "Any Category" },
  { value: "9", label: "General Knowledge" },
  { value: "10", label: "Entertainment: Books" },
  { value: "11", label: "Entertainment: Film" },
  { value: "12", label: "Entertainment: Music" },
  { value: "13", label: "Entertainment: Musicals: Theatres" },
  { value: "14", label: "Entertainment: Television" },
  { value: "15", label: "Entertainment: Video Games" },
  { value: "16", label: "Entertainment: Board Games" },
  { value: "17", label: "Science: Nature" },
  { value: "18", label: "Science: Computers" },
  { value: "19", label: "Science: Mathematics" },
  { value: "20", label: "Mythology" },
  { value: "21", label: "Sports" },
  { value: "22", label: "Geography" },
  { value: "23", label: "History" },
  { value: "24", label: "Politics" },
  { value: "25", label: "Art" },
  { value: "26", label: "Celebrities" },
  { value: "27", label: "Animals" },
  { value: "28", label: "Vehicles" },
  { value: "29", label: "Entertainment: Comics" },
  { value: "30", label: "Science: Gadgets" },
  { value: "31", label: "Entertainment: Japanese Anime: Manga" },
  { value: "32", label: "Entertainment: Cartoon: Animations" },
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, function () {
    setOpen(false);
  });

  return (
    <nav ref={ref} className="bg-white shadow z-50 border">
      <div className="md:block hidden container mx-auto px-6 py-3">
        <div className="py-3 w-full -mx-3 overflow-x-auto whitespace-no-wrap scroll-hidden">
          {categories.map((cat) => (
            <Link key={cat.value} href={`?cat=${cat.value}`}>
              <a
                className={`${
                  cat.value === router.query.cat ||
                  (router.query.cat === undefined && cat.value === "any")
                    ? "font-bold text-blue-600 text-base"
                    : ""
                } text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0`}
              >
                {cat.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="block md:hidden  relative">
        {/* Dropdown toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-10 flex items-center justify-center  w-full rounded-md bg-white p-2 focus:outline-none "
        >
          Category:{" "}
          {categories.find((c) => c.value === router.query.cat)?.label ??
            `Any Category`}
          <svg
            className="h-5 w-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          className={`absolute border h-64 right-0 mt-1 w-full bg-white rounded-md shadow-xl z-20 ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="my-4 h-56 overflow-y-auto overflow-x-hidden">
            {categories.map((cat) => (
              <Link key={cat.value} href={`?cat=${cat.value}`}>
                <a
                  onClick={() => setOpen(!open)}
                  className={`${
                    cat.value === router.query.cat ||
                    (router.query.cat === undefined && cat.value === "any")
                      ? "text-blue-600 text-base"
                      : ""
                  } text-sm font-bold pb-2 block text-gray-700 border-b w-full my-3 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0`}
                >
                  {cat.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
