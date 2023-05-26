import {
    GET_LESSONS,
    UPDATE_LESSON,
    CREATE_LESSON,
    DELETE_LESSON,
}
from "constants/types/lessons";

const initialState = {
    lessons: [],
    lessonsAll: [],
    data: {},
    total: 0,
    lesson: {},
    loading: false,
    error: null,
    status: "idle",
    message: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LESSONS:
            return {
                ...state,
                lessons: action.payload,
                status: "ok",
            };
        case CREATE_LESSON:
            return {
                ...state,
                lesson: action.payload,
                status: "ok",
            };
        case UPDATE_LESSON:
            return {
                ...state,
                lesson: action.payload,
                status: "ok",
            };
        case DELETE_LESSON:
            return {
                ...state,
                lesson: action.payload,
                status: "ok",
            };
        default:
            return state;
    }
}