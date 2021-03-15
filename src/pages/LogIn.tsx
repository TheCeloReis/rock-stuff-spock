import React from "react";
import { useDispatch } from "react-redux";

import { signInWithGoogle } from "../redux/auth/action";

function LogInPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Login</h1>

      <button onClick={() => dispatch(signInWithGoogle())}>
        Login with Google
      </button>
    </div>
  );
}

export default LogInPage;
