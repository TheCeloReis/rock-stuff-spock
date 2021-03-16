import React from "react";

import Appbar from "../components/Appbar";
import Button from "../components/Button";

function HomePage() {
  return (
    <>
      <Appbar />
      <div className="pt-14">
        <ul className="flex flex-col gap-4 p-4 max-w-screen-sm m-auto">
          <li className="w-full">
            <Button elementType="link" to="/create" full>
              Create
            </Button>
          </li>
          <li>
            <Button elementType="link" to="/join" full>
              Join
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
