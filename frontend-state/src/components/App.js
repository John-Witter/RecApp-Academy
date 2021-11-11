import React, { useState } from "react";
import { Provider } from "react-redux"; // give store to each component
import QuestionForm from "./QuestionForm";
import Questions from "./Questions";
import "../css_reset.css";
import "../index.css";

export const App = ({ store }) => {
    return (
        <Provider store={store}>
            <div className="App">
                <header>RecApp2.0: Frontend + React</header>
                <QuestionForm />
                <Questions />
            </div>
        </Provider>
    );
};
