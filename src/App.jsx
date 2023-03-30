import unsplash from "./unsplash_config";
import { useState, useEffect } from "react";
import { Header, Image } from "./components";
import { useSearchTerm } from "./context/SearchContext";
import "./App.css";

function App() {
  const { picType } = useSearchTerm();
  const [pic, setPic] = useState([]);

  async function getPic(picType) {
    await unsplash.search
      .getPhotos({ query: picType || "cat", page: 1, perPage: 5 })
      .then((res) => setPic(res.response.results));
    // .then((err) => console.log("this is err", err));
  }

  useEffect(() => {
    getPic(picType);
  }, [picType]);

  useEffect(() => {}, [picType]);

  return (
    <div className="App">
      <Header title="Cat" />
      {pic.map((pic) => {
        return (
          <Image
            key={pic.id}
            color={pic.color}
            urls={pic.urls}
            alt_description={pic.alt_description}
          />
        );
      })}
    </div>
  );
}

export default App;
