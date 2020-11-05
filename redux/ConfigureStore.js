import { createStore, applyMiddleware } from "redux";
import { messages } from "./messages";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";

export const ConfigureStore = () => {
  const config = {
    key: "root",
    storage: AsyncStorage,
    debug: true,
  };

  const store = createStore(
    persistCombineReducers(config, {
      messages,
    }),
    applyMiddleware(thunk, logger)
  );
  const persistor = persistStore(store);
  return persistor, store;
};
