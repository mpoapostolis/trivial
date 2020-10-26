import Link from "next/link";
import { useRouter } from "next/router";

const categories = [
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
  console.log(router.query.cat);
  return (
    <nav className="bg-white shadow z-50 border">
      <div className="container mx-auto px-6 py-3">
        <div className="py-3 w-full -mx-3 overflow-x-auto whitespace-no-wrap scroll-hidden">
          {categories.map((cat) => (
            <Link key={cat.value} href={`?cat=${cat.value}`}>
              <a
                className={`${
                  cat.value === router.query.cat ||
                  router.query.cat === undefined
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
    </nav>
  );
}
