import React, { useState } from "react";
import { QuestionForm } from "./QuestionForm";
import { Question, Questions } from "./Questions";
import "../css_reset.css";
import "../index.css";

export const App = () => {
  
    return (
        <div className="App">
            <header>RecApp2.0: Frontend + React</header>
            <QuestionForm />
            <Questions />
        </div>
    );
};
