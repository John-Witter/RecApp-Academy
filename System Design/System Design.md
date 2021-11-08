# System Design

>"What does it mean to be a **Question** application?"

* How does a user meaningfully interact with the application?

## Functional Requirements

* What are features of a Question application?

Questions Application v1.0

### In Scope

- Users can Submit a Question
- Users can see list of submitted Questions
- Questions can be Deleted

### Out of Scope

- Answers
- Resolved vs. Deleted
- User Authentication
- UI Enhancements (D&D, DarkMode, etc.)
- Voting / Ranking
- Updating a Question
- Categories / Subs
- Code Snippets


## Non-Functional Requirements

- Availablity: If a User opens the app they always see something
- Reliability / Redundancy: Questions are never lost
- Latency: Response Times < 200 m/s

## Database Design (Models + Schema)

>"What does it mean to be a Question?"

##### Requirements of a Question

- Content
- Name (of Asker)

> "How should we store this Question?"

### PostgeSQL (Releational, SQL)

 Question 
| Field | Type |
| --- | --- |
| id | Int |
| content | String | 
| name | String | 

### MongoDB (Non-Releational, NoSQL)
    {
        user1: {
            name: '',
            password: '',
            questions: {
                qustion1.id,
                qustion2.id,
                qustion3.id

            }
        }
    }

    {
        1: {
            _id: 1,
            content: '',
            name: '',
        },
        
        2: {
            _id: 2,
            content: '',
            name: '',
        },

    }

> "How much storage space do we need?"    

_id: 4 bytes
content: 250 bytes
name: 20 bytes

Total: 274 bytes

115 Askers * 274 bytes * 2 Questions * 12 Iterations of RecApp = 756, 240 bytes

## Microservices
>Splitting up tasks into small single tasks | Seperating Concerns

    ex: Questions Getting App (In Express)
    ex: Questions Posting App (Flask)
