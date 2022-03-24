import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import axios from "axios";

const LOAD_MEMBERS = "LOAD_MEMBERS";
const ADD_MEMBER = "ADD_MEMBER";
const GET_MEMBER = "GET_MEMBER";
const DELETE_MEMBER = "DELETE_MEMBER";

const memberReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MEMBERS:
      return action.members;

    case ADD_MEMBER: {
      //store.dispatch({ type: ADD_MEMBER, member: response.data });
      return [...state, action.member];
    }
    case GET_MEMBER: {
      return action.member;
    }
    case DELETE_MEMBER: {
      //dispatch({ type: DELETE_MEMBER, member });
      return state.filter((member) => member.id !== action.member.id);
    }
    default:
      return state;
  }
};
export const addMember = (name) => {
  return async (dispatch) => {
    const response = await axios.post("/members/", { name: name });
    store.dispatch({ type: ADD_MEMBER, member: response.data });
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

export const deleteMember = (member) => {
  return async (dispatch) => {
    await axios.delete(`/members/${member.id}`);
    dispatch({ type: DELETE_MEMBER, member });
  };
};

const store = createStore(
  memberReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
