import { useState, useEffect } from "react";
import "./App.css";
import SingleItem from "./components/SingleItem";
import questions from "./questions";
function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="app-container">
          <h1 className="app-title">
            Question And Answers About App
          </h1>
          <span></span>
          <div>
            {questions.map((question) => {
              return <SingleItem key={question.id} {...question} />
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
