import React from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";

import { signOut } from "../redux/auth/action";

function HomePage() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button elementType="link" to="/create">
        Create
      </Button>
      <Button elementType="link" to="/join">
        Join
      </Button>

      <Button onPress={() => dispatch(signOut())}>Logout</Button>
    </div>
  );
}

export default HomePage;
