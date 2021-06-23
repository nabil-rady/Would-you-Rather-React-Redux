import { RECEIVE_QUESTIONS, START_RECEIVE_QUESTIONS, FINISH_RECEIVE_QUESTIONS, UPDATE_QUESTION_ANSWER } from '../actions/questions';

export function questions(state = {}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case UPDATE_QUESTION_ANSWER:
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                   [action.answer]:{
                       ...state[action.questionId][action.answer],
                       votes: state[action.questionId][action.answer].votes.concat(action.loggedUserId),
                   }
                }
            };
        default:
            return state;
    }
}

export function questionsLoading(state = true, action){
    switch(action.type){
        case START_RECEIVE_QUESTIONS:
            return true;
        case FINISH_RECEIVE_QUESTIONS:
            return false;
        default:
            return state;
    }
}