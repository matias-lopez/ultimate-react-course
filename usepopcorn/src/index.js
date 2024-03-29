import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StartRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StartRating color="red" onSetRating={setMovieRating} />
      <p>This movies was rated {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Meh", "Bad", "Good", "Really Good", "Amazing"]}
    />
    <StartRating size={20} color="blue" className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
