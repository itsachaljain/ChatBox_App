import * as ActionTypes from "./ActionTypes";

export const messages = (state = { errMess: null, messages: [] }, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_MESSAGES:
      return { ...state, errMess: null, messages: action.payload };

    case ActionTypes.POST_MESSAGE:
      var message = action.payload;
      message.id = state.messages.length;
      return { ...state, messages: state.messages.concat(message) };

    case ActionTypes.FAILED_MESSAGES:
      return { ...state, errMess: action.payload };

    default:
      return state;
  }
};
