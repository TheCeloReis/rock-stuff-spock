import { UserType } from "../../firebase/utils";

export type AuthState = {
  loading: boolean | null;
  user: UserType | null;
};

export enum AuthAction {
  AUTH_USER_LOGIN = "AUTH_USER_LOGIN",
  AUTH_USER_LOGOUT = "AUTH_USER_LOGOUT",
  AUTH_SIGNIN_TRY = "AUTH_SIGNIN_TRY",
  AUTH_SIGNIN_FAIL = "AUTH_SIGNIN_FAIL",
  AUTH_SIGNIN_SUCCESS = "AUTH_SIGNIN_SUCCESS",
}

export type UserLoginAction = {
  type: AuthAction.AUTH_USER_LOGIN;
  user: UserType;
};

export type UserLogoutAction = {
  type: AuthAction.AUTH_USER_LOGOUT;
};

export type SignInTryAction = {
  type: AuthAction.AUTH_SIGNIN_TRY;
};

export type SignInFailAction = {
  type: AuthAction.AUTH_SIGNIN_FAIL;
};

export type SignInSuccessAction = {
  type: AuthAction.AUTH_SIGNIN_SUCCESS;
};

export type AuthActions =
  | UserLoginAction
  | UserLogoutAction
  | SignInTryAction
  | SignInFailAction
  | SignInSuccessAction;
