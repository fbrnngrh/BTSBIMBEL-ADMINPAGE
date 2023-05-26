import axios from "./index";

const setAuthorizationHeader = (token) => {
  if (token) {
    axios.defaults.headers.common.authorization = token;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};

export default setAuthorizationHeader;