import React from "react";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import { Loading } from "./components/LoadingComponent";
import { View } from "react-native";

export default function App() {
  return <Main />;
}
