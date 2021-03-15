import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkAction } from "redux-thunk";

import { auth, database } from "../firebase";

import authReducer from "./auth/reducer";

import { AuthActions } from "./auth/type";

export type RootActions = AuthActions;

const reducers = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof reducers>;

export type ThunkExtraArgument = {
  auth: typeof auth;
  database: typeof database;
};

export type RootThunkAction<T> = ThunkAction<
  T,
  RootState,
  ThunkExtraArgument,
  RootActions
>;

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ auth, database }))
  )
);
