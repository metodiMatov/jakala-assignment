import React from "react";
import IconProps from "./types";

const BagSvg: React.FC<IconProps> = (props) => {
  const { width = 24, height = 24, color = "none", ariaLabel = "" } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6C7 3.79086 8.79086 2 11 2H13C15.2091 2 17 3.79086 17 6C19.2091 6 21 7.79086 21 10V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V10C3 7.79086 4.79086 6 7 6ZM11 4H13C14.1046 4 15 4.89543 15 6H9C9 4.89543 9.89543 4 11 4ZM17 8H7C5.89543 8 5 8.89543 5 10V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V10C19 8.89543 18.1046 8 17 8Z"
        fill="white"
      />
    </svg>
  );
};

export default BagSvg;
