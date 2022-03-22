import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import axios from "axios";

const LOAD_MEMBERS = "LOAD_MEMBERS";
const ADD_MEMBER = "ADD_MEMBER";
const GET_MEMBER = "GET_MEMBER";

const memberReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MEMBERS: {
      return action.members;
    }
    case ADD_MEMBER: {
      return {
        ...state,
        name: action.name,
      };
    }
    case GET_MEMBER: {
      return action.member;
    }
    default:
      return state;
  }
};
export const addMember = () => {
  return async (dispatch) => {
    const response = await axios.post("/members");
    store.dispatch({ type: ADD_MEMBER, name: response.data });
  };
};
export const fetchMemberDetail = (memberId) => {
  return async (dispatch) => {
    const response = await axios.get(`/members/${memberId}`);
    dispatch({ member: response.data, type: GET_MEMBER });
  };
};

export const fetchMembers = () => {
  return async (dispatch) => {
    const response = await axios.get("/members");
    dispatch({ members: response.data, type: LOAD_MEMBERS });
  };
};

const store = createStore(
  memberReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
