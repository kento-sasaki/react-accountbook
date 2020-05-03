import * as firebase from "firebase/app";

export type User = firebase.User;

export interface InputData {
  value: string | null;
}

export type Provider =
  | firebase.auth.FacebookAuthProvider
  | firebase.auth.GoogleAuthProvider
  | firebase.auth.TwitterAuthProvider;
