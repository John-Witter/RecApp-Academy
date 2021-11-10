const render = () => {

    const App = document.createElement('div');
    App.innerHTML = 'Hello World (Now w/ 100% more JavaScript)';

    const QuestionForm = document.createElement('form');
    const h1 = document.createElement('h1');
    h1.innerText = 'Ask A Qustion';
    const name = document.createElement('input');
    name.name = 'name';
    name.type = 'text';
    name.placeholder = 'Name';
    const content = document.createElement('textarea');
    content.rows = 3;
    content.name = 'content';
    content.type = 'text';
    content.placeholder = 'Ask Anything...';
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerText = 'Submit';

    QuestionForm.append(h1);
    QuestionForm.append(name);
    QuestionForm.append(content);
    QuestionForm.append(submit);

    App.append(QuestionForm);

    const root = document.getElementById('root');
    root.append(App);
};

document.addEventListener('DOMContentLoaded', () => {
    render();
})