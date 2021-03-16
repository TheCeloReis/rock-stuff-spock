import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useButton } from "@react-aria/button";

import { signOut } from "../redux/auth/action";

function Appbar() {
  const [open, setOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const avatarButtonRef = useRef(null);
  const { buttonProps: avatarButtonProps } = useButton(
    {
      onPress: () => setOpen((s) => !s),
    },
    avatarButtonRef
  );

  const signOutButtonRef = useRef(null);
  const { buttonProps: signOutButtonProps } = useButton(
    {
      onPress: () => dispatch(signOut()),
    },
    signOutButtonRef
  );

  return (
    <header className="w-full h-14 bg-indigo-700 absolute shadow-md text-white">
      <div className="h-full flex justify-end items-center m-auto max-w-screen-sm px-4">
        <div className="relative">
          <button {...avatarButtonProps} className="w-12 h-12 my-1">
            <img
              className="rounded-full  bg-indigo-500"
              src={auth.user?.photoURL ?? ""}
              alt=""
            />
          </button>
          {open && (
            <div className="absolute z-10 bg-gray-100 top-14 right-0 w-40 mt-2 text-gray-900 shadow-xl border-2 rounded-lg overflow-hidden">
              <ul>
                <li>
                  <button
                    {...signOutButtonProps}
                    className="p-4 w-full text-left hover:bg-gray-200"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Appbar;
