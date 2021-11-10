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
            isAdmin: true,
        },
        questions: {
            1: {
                _id: 1,
                name: "Vladimir Harkonnen",
                content: "Am I the drama?",
            },
            2: {
                _id: 2,
                name: "Lady Jessica",
                content: "Is Paul the Kwisatz Haderach?",
            },
            3: {
                _id: 3,
                name: "Paul Atreides",
                content: "Why are my dreams so sandy?",
            },
        },
        answers: [],
        ui: {
            isDarkMode: false,
            isLoading: false,
        },
        submitQuestion: (question) => {
            const NEW_STATE = { ...GLOBAL_STATE };
            NEW_STATE.questions[question._id] = question;
            setGlobalState(NEW_STATE);
        },
        deleteQuestion: (_id) => {
            const NEW_STATE = { ...GLOBAL_STATE };
            delete NEW_STATE.questions[_id];
            setGlobalState(NEW_STATE);
        },
    });

    return (
        <div className="App">
            <header>RecApp2.0: Frontend + React</header>
            <QuestionForm GLOBAL_STATE={GLOBAL_STATE} />
            <Questions
                GLOBAL_STATE={GLOBAL_STATE}
                // deleteQuestion={deleteQuestion}
            />
        </div>
    );
};
