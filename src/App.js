import React from "react";
import './App.css'
import { useState } from "react";

const indexDB = {
    Indian : [
    { name: "Nifty", companies: "30" },
    { name: "Sensex", companies: "50" }
  ],

  Asian: [
    {
      name: "NIKKEI",
      companies: "225"
    },
    {
      name: "SGX NIFTy",
      companies: "50"
    }
  ],
  world: [
    {
      name: "DAX",
      companies: "40"
    },
    {
      name: "NASDAQ",
    companies: "79"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("world");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>  📉 Stock Indexes </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(indexDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {indexDB[selectedGenre].map((stock) => (
            <li
              key={stock.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {stock.name} </div>
              <div style={{ fontSize: "smaller" }}> {stock.companies} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
