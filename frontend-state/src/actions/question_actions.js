import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

// RECEIVE_QUESTION is a type
const receiveQuestion = createAction('RECEIVE_QUESTION');
const receiveQuestions = createAction('RECEIVE_QUESTIONS');
const removeQuestions = createAction('REMOVE_QUESTION');


// action creators

// dispatch comes from react-redux
export const fetchQuestions = () => async dispatch => {
    try {
        // logic for submitting to the backend
        // => {type: 'RECEIVE_QUESTIONS', payload: questions}
        const res = await axios.get('http://localhost:5000/api/questions');
        dispatch(receiveQuestions(res.data));
    } catch (err) {
        console.log(err);
    };
};
export const submitQuestion = question => async dispatch => {
    try {
        // logic for submitting to the backend
        let res = question;
        dispatch(receiveQuestion(res));
    } catch (err) {
        console.log(err);
    }
};

export const deleteQuestion = _id => async dispatch => {
    try {
        // logic for submitting to the backend
        let res = _id;
        dispatch(removeQuestions(res.data));
    } catch (err) {
        console.log(err);
    }
};