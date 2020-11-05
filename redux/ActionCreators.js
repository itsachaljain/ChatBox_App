import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addMessage = (message) => ({
  type: ActionTypes.POST_MESSAGE,
  payload: message,
});

export const postMessage = (message) => (dispatch) => {
  const newMessage = {
    message: message,
  };
  newMessage.date = new Date().toISOString();

  return fetch(baseUrl + "messages", {
    method: "POST",
    body: JSON.stringify(newMessage),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addMessage(response)))
    .catch((error) => {
      console.log("Post messages", error.message);
      alert("Your message cannot be posted\nError: " + error.message);
    });
};

export const fetchMessages = () => (dispatch) => {
  return fetch(baseUrl + "messages")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((messages) => dispatch(addMessages(messages)))
    .catch((error) => dispatch(messagesFailed(error.message)));
};

export const messagesFailed = (errmess) => ({
  type: ActionTypes.FAILED_MESSAGES,
  payload: errmess,
});

export const addMessages = (messages) => ({
  type: ActionTypes.LOAD_MESSAGES,
  payload: messages,
});
