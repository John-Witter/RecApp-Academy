import React, { useState } from "react";
import "../index.css";

const defaultQuestion = {
    _id: null,
    name: '',
    content: ''
};

export const QuestionForm = ({ submitQuestion }) => {
    const [question, setQuestion] = useState(defaultQuestion);

    const handleInput = e => {
        e.preventDefault();
        console.log('e.target.nmae:', e.target.name)
        console.log('e.target.value:', e.target.value)
        setQuestion({...question, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        question._id = Math.floor(Math.random() * 1000)
        submitQuestion(question)
        setQuestion(defaultQuestion)
    }

    return (
        <form className="module" onSubmit={handleSubmit}>
            <h1>Ask A Question!</h1>
            <input
                name={submitQuestion.name}
                type="text"
                placeholder="Name"
                value={question.name}
                onChange={handleInput}
            ></input>
            <textarea
                rows="3"
                type="text"
                placeholder="Ask Anything..."
                value={question.content}
                onChange={handleInput}
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};
