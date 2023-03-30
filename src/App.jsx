import unsplash from "./unsplash_config";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [catPic, setCatPic] = useState([]);

  async function getPic() {
    await unsplash.search
      .getPhotos({ query: "cat", page: 1, perPage: 5 })
      .then((res) => setCatPic(res.response.results))
      .then((err) => console.log("this is err", err));
  }

  useEffect(() => {
    getPic();
  }, []);

  useEffect(() => {
    console.log(catPic);
  }, [catPic]);

  return (
    <div className="App">
      {catPic.map((pic) => {
        return (
          <div
            key={pic.id}
            style={{
              padding: "3rem",
              backgroundColor: pic.color,
              border: "7px solid hlsa(0 0 0 0.2)",
            }}
          >
            <img
              src={pic.urls.small}
              alt={pic.urls.alt_description}
              style={{ border: "7px solid hlsa(0 0 0 0.2)" }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
