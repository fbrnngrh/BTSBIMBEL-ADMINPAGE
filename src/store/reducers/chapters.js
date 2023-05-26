import {
  GET_CHAPTERS,
  UPDATE_CHAPTER,
  CREATE_CHAPTER,
  DELETE_CHAPTER,
} from "constants/types/chapters";

const initialState = {
  chapters: [],
  chaptersAll: [],
  data: {},
  total: 0,
  chapter: {},
  loading: false,
  error: null,
  status: "idle",
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHAPTERS:
      return {
        ...state,
        chapters: action.payload,
        status: "ok",
      };
    case CREATE_CHAPTER:
      return {
        ...state,
        chapter: action.payload,
        status: "ok",
      };
    case UPDATE_CHAPTER:
      return {
        ...state,
        chapter: action.payload,
        status: "ok",
      };
    case DELETE_CHAPTER:
      return {
        ...state,
        chapter: action.payload,
        status: "ok",
      };
    default:
      return state;
  }
}
