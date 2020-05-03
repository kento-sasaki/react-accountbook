import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./conter";

const reducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({ reducer });
