import {
  GET_CHAPTERS,
  UPDATE_CHAPTER,
  CREATE_CHAPTER,
  DELETE_CHAPTER,
} from "constants/types/chapters";

export const getChapters = (chapters = []) => ({
    type: GET_CHAPTERS,
    payload: chapters,
});

export const createChapter = (chapter = {}) => ({
    type: CREATE_CHAPTER,
    payload: chapter,
});

export const updateChapter = (chapter = {}) => ({
    type: UPDATE_CHAPTER,
    payload: chapter,
});

export const deleteChapter = (chapter = {}) => ({
    type: DELETE_CHAPTER,
    payload: chapter,
});