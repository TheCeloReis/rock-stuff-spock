import { AuthAction, AuthActions, AuthState } from "./type";

const initialState: AuthState = {
  loading: null,
  user: null,
};

const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthAction.AUTH_USER_LOGOUT: {
      return { ...state, loading: false, user: null };
    }
    case AuthAction.AUTH_USER_LOGIN: {
      return { ...state, loading: false, user: action.user };
    }

    case AuthAction.AUTH_SIGNIN_TRY: {
      return { ...state, loading: true };
    }
    case AuthAction.AUTH_SIGNIN_FAIL: {
      return { ...state, loading: false };
    }
    case AuthAction.AUTH_SIGNIN_SUCCESS: {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};

export default authReducer;
