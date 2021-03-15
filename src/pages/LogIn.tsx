import React from "react";
import { useDispatch } from "react-redux";

import { signInWithGoogle } from "../redux/auth/action";

function LogInPage() {
  const dispatch = useDispatch();

  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-screen-sm w-full m-4 bg-white shadow-md rounded-md px-8 pt-6 pb-8 flex flex-col">
        <h1 className="text-center text-3xl pb-8">Rock Stuff Spock</h1>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded"
            type="button"
            onClick={() => dispatch(signInWithGoogle())}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
