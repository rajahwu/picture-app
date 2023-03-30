import { createContext, useState, useContext } from "react";

export const SearchContext = createContext();

export function SearchProvider(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [picType, setPicType] = useState("");
  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, picType, setPicType }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export function useSearchTerm() {
  return useContext(SearchContext);
}
