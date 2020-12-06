import * as firebase from "firebase";

let config = {
  apiKey: "AIzaSyCOrCKRwAsOcbvobIc-hTIMkylSg6U_fPo",
  authDomain: "the-chatbox.firebaseapp.com",
  databaseURL: "https://the-chatbox.firebaseio.com",
  projectId: "the-chatbox",
  storageBucket: "the-chatbox.appspot.com",
  messagingSenderId: "711851006642",
  appId: "1:711851006642:web:18b4527fde22fe242f07ab",
  measurementId: "G-XPPFWWYSF0",
};

let app = firebase.default.initializeApp(config);
export const db = app.database();
