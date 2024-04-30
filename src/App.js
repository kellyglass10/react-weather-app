import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Site created by{" "}
          <a
            href="https://www.linkedin.com/in/kelly-glass-9b86a7284/"
            target="_blank"
            rel="noreferrer"
          >
            Kelly Glass.
          </a>{" "}
          Available on{" "}
          <a
            href="https://github.com/kellyglass10/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
