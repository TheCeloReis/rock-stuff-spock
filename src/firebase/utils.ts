import firebase from "firebase/app";
import "firebase/auth";

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export type UserType = firebase.User;
