import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SearchProvider } from "./context/SearchContext";
import "./index.css";

const Root = () => {
  return (
    <SearchProvider>
      <App />
    </SearchProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
