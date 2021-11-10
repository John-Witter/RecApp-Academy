import React, { useState } from "react";
import { QuestionForm } from "./QuestionForm";
import { Question, Questions } from "./Questions";
import "../css_reset.css";
import "../index.css";

export const App = () => {
    /** New States
     * user
     * answer
     * ui
     */

    const [GLOBAL_STATE, setGlobalState] = useState({
        user: {
            name: "Mark",
            isAdmin: true
        },
        questions: [
            { _id: 1, name: "Vladimir Harkonnen", content: "Am I the drama?" },
            {
                _id: 2,
                name: "Lady Jessica",
                content: "Is Paul the Kwisatz Haderach?",
            },
            {
                _id: 3,
                name: "Paul Atreides",
                content: "Why are my dreams so sandy?",
            },
        ],
        answers: [],
        ui: {
            isDarkMode: false,
            isLoading
        }
    });

    // submit handler
    const submitQuestion = (question) => {
        setQuestions([...questions, question]);
    };

    // delete handler
    const deleteQuestion = (_id) => {
        setQuestions(questions.filter((question) => question._id !== _id));
    };

    return (
        <div className="App">
            <header>RecApp2.0: Frontend + React</header>
            <QuestionForm
                submitQuestion={submitQuestion}
                //user.name
                // ui
            />
            <Questions
                questions={questions}
                deleteQuestion={deleteQuestion}
                //answers
                // user.name
            />
        </div>
    );
};
