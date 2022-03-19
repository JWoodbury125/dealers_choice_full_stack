import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

const initialState = {
  loading: false,
  members: [],
  error: "",
};

// const ADD_MEMBER = 'ADD_MEMBER'
// const REMOVE_MEMBER = 'REMOVE_MEMBER'
// const UPDATE_MEMBER = 'UPDATE_MEMBER'

const FETCH_MEMBER_REQUEST = "FETCH_MEMBER_REQUEST";
const FETCH_MEMBER_SUCCESS = "FETCH_MEMBER_SUCCESS";
const FETCH_MEMBER_FAILURE = "FETCH_MEMEBER_FAILURE";

export const fetchMembersRequest = () => {
  return {
    type: FETCH_MEMBER_REQUEST,
  };
};

// let newId = 0;
// export const addMember = person => ({
//     type: ADD_MEMBER,
//     id: newId ++
// })

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MEMBER_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
        error: "",
      };
    case FETCH_MEMBER_FAILURE:
      return {
        loading: false,
        members: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddlewWare(loggerMiddleware));

export default store;
