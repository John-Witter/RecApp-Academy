import React, { useState } from "react";
import { QuestionForm } from './QuestionForm';
import { Question, Questions } from './Questions';
import '../css_reset.css'
import '../index.css'


export const App = () => {
    /** Going to need:
     *     QuestionForm component
     *     Questions component
     *
     *     questions array (holds our qs while we wait for DB)
     *     header
     *
     *     deleteQuestion
     *     submitQuestion
     */

    const [questions, setQuestions] = useState([
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
    ]);


    // submit handler
    const submitQuestion = question => {
        setQuestions([...questions, question])
    }

    // delete handler
    const deleteQuestion = _id => {
        setQuestions(questions.filter(question => question._id !== _id));
    }

    return (
        <div className="App">
            <header>RecApp2.0: Frontend + React</header>
            <QuestionForm submitQuestion={submitQuestion} />
            <Questions questions={questions} deleteQuestion={deleteQuestion} />
        </div>
    );
};
