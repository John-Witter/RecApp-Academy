import React, { useState } from "react";
import { connect } from "react-redux";
import { submitQuestion } from "../actions/question_actions";
import "../index.css";

export const QuestionForm = ({ submit }) => {
    const [inputName, setInputName] = useState("");
    const [inputContent, setInputContent] = useState("");

    const handleNameInput = (e) => {
        e.preventDefault();
        setInputName(e.target.value);
    };

    const handleContentInput = (e) => {
        e.preventDefault();
        setInputContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const question = {};
        question._id = Math.floor(Math.random() * 1000);
        question.name = inputName;
        question.content = inputContent;
        submit(question);
        setInputContent("");
        setInputName("");
    };

    return (
        <form className="module" onSubmit={handleSubmit}>
            <h1>Ask A Question!</h1>
            <input
                type="text"
                placeholder="Name"
                value={inputName}
                onChange={handleNameInput}
            ></input>
            <textarea
                rows="3"
                type="text"
                placeholder="Ask Anything..."
                value={inputContent}
                onChange={handleContentInput}
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    submit: (question) => dispatch(submitQuestion(question)),
});

export default connect(null, mapDispatchToProps)(QuestionForm);
