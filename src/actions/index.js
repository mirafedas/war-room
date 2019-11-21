import { messagesRef } from "../config/firebase";
import GET_MESSAGES from '../constants/actionTypes';

export const addMessages = newMessage => async dispatch => {
  messagesRef.push().set(newMessage);
};

export const getMessages = () => async dispatch => {
  messagesRef.on("value", snapshot => {
    dispatch({
      type: GET_MESSAGES,
      payload: snapshot.val()
    });
  });
};