import { useSearchTerm } from "../../context/SearchContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm, setPicType } = useSearchTerm()
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input
        id="search"
        name="search"
        type="text"
        onChange={(e) =>{
             setSearchTerm(e.target.value)
             }}
        placeholder="Change Pic Type            👉"
        style={{
          marginTop: 0,
          marginBottom: "25px",
          padding: "10px",
          width: "75%",
          fontFamily: "inherit",
          fontSize: "2rem",
        }}
      />
      <button
      onClick={(e) => {
        e.preventDefault()
        setPicType(searchTerm)
      } }
        style={{
          height: "65px",
        }}
      >
        Search
      </button>
    </form>
  );
}
