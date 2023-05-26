import {
  GET_COURSES,
  GET_COURSES_ALL,
  UPDATE_COURSE,
  CREATE_COURSE,
  DELETE_COURSE,
} from "constants/types/courses";

export const getCourses = (courses = []) => ({
  type: GET_COURSES,
  payload: courses,
});

export const getCoursesAll = (courses = []) => ({
  type: GET_COURSES_ALL,
  payload: courses,
});

export const createCourse = (course = {}) => ({
  type: CREATE_COURSE,
  payload: course,
});

export const updateCourse = (course = {}) => ({
  type: UPDATE_COURSE,
  payload: course,
});

export const deleteCourse = (course = {}) => ({
  type: DELETE_COURSE,
  payload: course,
});
