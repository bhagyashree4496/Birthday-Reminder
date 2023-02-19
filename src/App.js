import React, { useState } from "react";
import "./App.css";
import datar from "./data";

export default function App() {
  const [data, setdata] = useState(datar);
  const setzero = () => {
    setdata([]);
  };
  return (
    <div className="wraper">
      <h1>{data.length} Birthdays Today</h1>
      <div>
        {data.map((person) => {
          return (
            <div className="person" key={person.id}>
              <div className="col1ab">
                <img src={person.image} alt="image"></img>
              </div>
              <h4 className="col2a">{person.name}</h4>
              <h4 className="col2b">{person.age}</h4>
            </div>
          );
        })}
      </div>
      <button onClick={setzero}>Clear All</button>
    </div>
  );
}
