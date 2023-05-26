import {
    GET_COURSES,
    GET_COURSES_ALL,
    UPDATE_COURSE,
    CREATE_COURSE,
    DELETE_COURSE,
  } from "constants/types/courses";

const initialState = {
    data : {},
    total: 0,
    course: {},
    courses: [],
    coursesAll: [],
    loading: false,
    error: null,
    status: "idle",
    message: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                data: action.payload,
                total: action.payload.length,
                status: "ok",
            };
        case GET_COURSES_ALL:
            return {
                ...state,
                coursesAll: action.payload,
                status: "ok",
            };
        case CREATE_COURSE:
            return {
                ...state,
                course: action.payload,
                status: "ok",
            };
        case UPDATE_COURSE:
            return {
                ...state,
                course: action.payload,
                status: "ok",
            };
        case DELETE_COURSE:
            return {
                ...state,
                course: action.payload,
                status: "ok",
            };
        default:
            return state;
    }
}