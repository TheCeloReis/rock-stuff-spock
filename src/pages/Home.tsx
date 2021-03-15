import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signOut } from "../redux/auth/action";

function HomePage() {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/create">Create</Link>
      <button>Join</button>

      <button onClick={() => dispatch(signOut())}>Logout</button>
    </div>
  );
}

export default HomePage;
