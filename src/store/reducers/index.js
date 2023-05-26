import { combineReducers } from "@reduxjs/toolkit";

import users from "./users";
import courses from "./courses";
import orders from "./orders";
import lessons from "./lessons";
import chapters from "./chapters";

const rootReducer = combineReducers({
    users,
    courses,
    orders,
    lessons,
    chapters,
});

export default rootReducer;