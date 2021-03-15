import React, { PropsWithChildren, useRef } from "react";
import { useButton } from "@react-aria/button";
import { Link } from "react-router-dom";

type PropsType = PropsWithChildren<{
  elementType?: "link" | "button";
  to?: string;
  onPress?: () => void;
}>;

function Button(props: PropsType) {
  let ref = useRef(null);
  let { buttonProps } = useButton(
    {
      elementType: props.elementType ?? "button",
      onPress: props.onPress,
    },
    ref
  );

  if (props.elementType === "link") {
    return (
      <Link
        ref={ref}
        {...buttonProps}
        to={props.to ?? "#"}
        className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded"
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      {...buttonProps}
      className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded"
    >
      {props.children}
    </button>
  );
}

export default Button;
