import { googleAuthProvider, UserType } from "../../firebase/utils";
import { RootThunkAction } from "../store";
import {
  AuthAction,
  SignInFailAction,
  SignInSuccessAction,
  SignInTryAction,
  UserLoginAction,
  UserLogoutAction,
} from "./type";

export const userLogin = (user: UserType): UserLoginAction => ({
  type: AuthAction.AUTH_USER_LOGIN,
  user,
});

export const userLogout = (): UserLogoutAction => ({
  type: AuthAction.AUTH_USER_LOGOUT,
});

export const signInTry = (): SignInTryAction => ({
  type: AuthAction.AUTH_SIGNIN_TRY,
});

export const signInFail = (): SignInFailAction => ({
  type: AuthAction.AUTH_SIGNIN_FAIL,
});

export const signInSuccess = (): SignInSuccessAction => ({
  type: AuthAction.AUTH_SIGNIN_SUCCESS,
});

export const signInWithGoogle = (): RootThunkAction<Promise<void>> => async (
  dispatch,
  _,
  { auth }
) => {
  dispatch(signInTry());

  try {
    await auth.signInWithPopup(googleAuthProvider);
    dispatch(signInSuccess());
  } catch {
    dispatch(signInFail());
  }
};

export const signOut = (): RootThunkAction<Promise<void>> => async (
  dispatch,
  _,
  { auth }
) => {
  auth.signOut();
};
