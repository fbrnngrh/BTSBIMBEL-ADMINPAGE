import {
    GET_LESSONS,
    UPDATE_LESSON,
    CREATE_LESSON,
    DELETE_LESSON,
}
from "constants/types/lessons";

export const getLessons = (lessons = []) => ({
    type: GET_LESSONS,
    payload: lessons,
});


export const createLesson = (lesson = {}) => ({
    type: CREATE_LESSON,
    payload: lesson,
});

export const updateLesson = (lesson = {}) => ({
    type: UPDATE_LESSON,
    payload: lesson,

});

export const deleteLesson = (lesson = {}) => ({
    type: DELETE_LESSON,
    payload: lesson,
});