import { createStore, combineReducers, applyMiddleware } from "redux";
import { Messages } from "./messages";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      messages: Messages,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
