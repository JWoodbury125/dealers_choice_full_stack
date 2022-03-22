import {
  ADD_MEMBER,
  FETCH_MEMBER_REQUEST,
  FETCH_MEMBER_SUCCESS,
  FETCH_MEMBER_FAILURE,
} from "./memberType";

const initialState = {
  loading: false,
  members: [],
  error: "",
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        members: state.members.push(action.payload),
      };
    case FETCH_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MEMBER_SUCCESS:
      return {
        loading: false,
        members: action.payload,
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
export default reducer;
