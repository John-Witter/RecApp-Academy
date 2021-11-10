const render = () => {
    let questions = [
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
    ];

    const App = document.createElement("div");
    App.innerHTML = "Hello World (Now w/ 100% more JavaScript)";

    // create functions to handle manipulating data
    // these will be invoked within the QuestionForm (created below)

    const submitQuestion = (question) => {
        questions.push(question);

        // regenerate questions shown on screen
        generateQuestionsList();
    };

    const deleteQuestion = (_id) => {
        // filter out the question to delete
        questions = questions.filter((q) => q._id !== _id);

        generateQuestionsList();
    };

    // create Question Form and format Questions

    const QuestionForm = document.createElement("form");
    const h1 = document.createElement("h1");
    h1.innerText = "Ask A Qustion";
    const name = document.createElement("input");
    name.name = "name";
    name.type = "text";
    name.placeholder = "Name";
    const content = document.createElement("textarea");
    content.rows = 3;
    content.name = "content";
    content.type = "text";
    content.placeholder = "Ask Anything...";
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.innerText = "Submit";

    QuestionForm.append(h1, name, content, submit);

    const Questions = document.createElement("div");

    // handle question form submit
    QuestionForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // error handling
        // a form can be submitted w/o a name
        // a form must have content
        if (content.value === "")
            return (content.placeholder = "Question Required...");

        let data = {
            _id: Math.floor(Math.random() * 1000),
            content: content.value.trim(), // value comes from textarea
            name: name.value.trim()
        }    

        submitQuestion(data);

        //reset form's default values
        name.value = ''; //can be modified anywhere after declaration
        content.value = '';
        content.placeholder = 'Ask Away...';
    });

    // create html version of questions

    const generateQuestionsList = () => {
        if (!questions.length) return (Questions.innerHTML = "No Questions");

        // reset what's displayed as an empty string
        Questions.innerHTML = '';

        // create a question to formatted as html
        // append it to the Question element

        // reverse b/c newest thing first
        questions.reverse().map((question, i) => {
            const formattedQuestion = document.createElement("div");
            formattedQuestion.key = i;
            const h3 = document.createElement("h3");
            h3.innerText = question.content;
            const span = document.createElement("span");
            span.innerText = question.name;
            const button = document.createElement("button");
            button.innerText = "Delete";
            button.onclick = () => deleteQuestion(question._id);

            formattedQuestion.append(h3, span, button);
            Questions.append(formattedQuestion);
        });
    };

    App.append(QuestionForm);
    App.append(Questions);

    const root = document.getElementById("root");
    root.append(App);

    generateQuestionsList();
};

document.addEventListener("DOMContentLoaded", () => {
    render();
});
