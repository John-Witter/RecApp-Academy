import {
    createReducer,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

// initial state
const inititialState = {
    questions: {},
};

const questionReducer = createReducer(inititialState, (builder) => {
    builder
        // code to add to state goes here
        // here, state is a copy of original state / can be modified
        .addCase("RECEIVE_QUESTIONS", (state, action) => {})

        .addCase("RECEIVE_QUESTION", (state, action) => {
            const question = action.payload;
            state.questions[question._id] = question;
        })
        .addCase("REMOVE_QUESTION", (state, action) => {
            // code to add to state goes here
            const _id = action.payload;
            delete state.questions[_id];
        });
});

// configure the store
// preloadedState is preloadedState of entire application
export const configureAppStore = (preloadedState) => {
    const store = configureStore({
        reducer: questionReducer,
        // only include logger in development
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
            .concat(process.env.NODE_ENV !== "production" ? logger: []),
        preloadedState: preloadedState,
    });

    return store;
};

