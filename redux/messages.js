import * as ActionTypes from "./ActionTypes";

export const Messages = (state = { errMess: null, messages: [] }, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_MESSAGES:
      return { ...state, errMess: null, messages: action.payload };

    case ActionTypes.POST_MESSAGE:
      return { ...state, messages: state.messages.concat(action.payload) };

    case ActionTypes.FAILED_MESSAGES:
      return { ...state, errMess: action.payload };

    default:
      return state;
  }
};
