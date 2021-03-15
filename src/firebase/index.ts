import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

import { store } from "../redux/store";
import { userLogin, userLogout } from "../redux/auth/action";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATA_BASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

export const auth = firebase.auth();
if (process.env.NODE_ENV === "development") {
  auth.useEmulator("http://localhost:9099");
}

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(userLogin(user));
    return;
  }

  store.dispatch(userLogout());
});

export const database = firebase.database();
