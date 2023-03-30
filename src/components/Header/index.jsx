import SearchBar from "../SearchBar";
import { useSearchTerm } from "../../context/SearchContext";

export default function Header() {
  const { picType } = useSearchTerm();
  const title = picType[0].toUpperCase() + picType.slice(1)
  return (
    <div>
      <h1
        style={{
          marginBottom: 15,
        }}
      >
        Awesome {title} Pics
      </h1>
      <SearchBar />
    </div>
  );
}
