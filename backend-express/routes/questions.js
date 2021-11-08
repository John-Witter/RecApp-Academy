import express from 'express';
import { Question } from '../models/question.js';

const router = express.Router();

router.get('/', (req, res) => {
    // const questions = [
    //     { _id: 1, name: "Vladimir Harkonnen", content: "Am I the drama?" },
    //     {
    //         _id: 2,
    //         name: "Lady Jessica",
    //         content: "Is Paul the Kwisatz Haderach?",
    //     },
    //     {
    //         _id: 3,
    //         name: "Paul Atreides",
    //         content: "Why are my dreams so sandy?",
    //     },
    // ];
    // res.json(questions);

    // get each Question
    Question.find()
        .then((questions) => res.json(questions)) // send json of questions
        .catch(e => res.status(404).json(e))
});


router.post('/', (req, res) => {
    const newQuestion  = new Question({
        name: req.body.name,
        content: req.body.content
    })

    newQuestion.save()
        .then(question => res.json(question))
        .catch(e => res.status(404).json(e))
});


router.delete('/:question_id', (req, res) => {
        Question.findOneAndDelete({_id: req.params.question_id})
        .then(question => res.json({_id: question._id}))
        .catch(e => res.status(404).json(e))
});

export const questions = router;