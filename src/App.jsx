import "assets/css/style.css";
import { createBrowserHistory } from "history";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import MemberRoute from "components/Routes/MemberRoute";
import GuestRoute from "components/Routes/GuestRoute";

import setAuthorizationHeader from "configs/axios/setAuthorizationHeader";

import { populateProfile } from "store/actions/users";

import users from "constants/api/users";

import Unauthenticated from "pages/401";
import Login from "pages/Login";
import NotFound from "pages/404";
import DashboardAdmin from "pages/DashboardAdmin";
import Transactions from "pages/Transactions";
import Courses from "pages/Courses";
import Chapters from "pages/Chapters";
import Lessons from "pages/Lessons";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  const dispatch = useDispatch();

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("BTSBIMBEL:token")) {
      session = JSON.parse(localStorage.getItem("BTSBIMBEL:token"));
      setAuthorizationHeader(session.token);

      users.details().then((details) => {
        dispatch(populateProfile(details.data));
      });
    }
  }, [dispatch]);

  return (
    <>
      <Routes history={history}>
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />

        <Route
          path="/private"
          element={
            <GuestRoute>
              <Unauthenticated />
            </GuestRoute>
          }
        />

        <Route
          path="/"
          element={
            <MemberRoute>
              <DashboardAdmin />
            </MemberRoute>
          }
        />
        <Route
          index
          path="/transactions"
          element={
            <MemberRoute>
              <Transactions />
            </MemberRoute>
          }
        />
        <Route
          index
          path="/courses"
          element={
            <MemberRoute>
              <Courses />
            </MemberRoute>
          }
        />
        <Route
          index
          path="/chapters"
          element={
            <MemberRoute>
              <Chapters />
            </MemberRoute>
          }
        />
        <Route
          index
          path="/lessons"
          element={
            <MemberRoute>
              <Lessons />
            </MemberRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
