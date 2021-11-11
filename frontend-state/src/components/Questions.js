import React from "react";
// gives access to specified slices of state
import { connect } from 'react-redux'; 
import { deleteQuestion } from '../actions/question_actions';
import '../index.css';

export const Questions = ({ questions, deleteQuestion}) => {
    
    const generateQuestionsList = () => {
        if (!questions.length) return <h1>No Questions Yet</h1>

        return questions.map((question, i) => 
        <div key={i} className="module" >
            <h3>{question.content}</h3>
            <span>- {question.name}</span>
            <button onClick={() => deleteQuestion(question._id)}>Delete</button>
        </div>).reverse()
    }

    return (
        generateQuestionsList()
        
    )
}

// dispatch used in question_actions

const mapDispatchToProps = dispatch => ({
    deleteQuestion: _id => dispatch(deleteQuestion(_id))
})

const mapStateToProps = state => ({
    questions: state.questions ? Object.values(state.questions) : []
})

// connect returns a function
// currying
export default connect(mapStateToProps, mapDispatchToProps)(Questions);