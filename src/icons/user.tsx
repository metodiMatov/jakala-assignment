import React from "react";
import IconProps from "./types";

const UserSvg: React.FC<IconProps> = (props) => {
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
        d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6ZM14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
        fill="white"
      />
      <path
        d="M6 15.125C6 14.5722 6.44744 14.125 6.99921 14.125H17.0028C17.5533 14.125 18 14.5709 18 15.1249V21.1241C18 21.6764 18.4477 22.125 19 22.125C19.5523 22.125 20 21.6773 20 21.125V15.1249C20 13.4698 18.6614 12.125 17.0028 12.125H6.99921C5.34185 12.125 4 13.4687 4 15.125V21.125C4 21.6773 4.44772 22.125 5 22.125C5.55228 22.125 6 21.6773 6 21.125V15.125Z"
        fill="white"
      />
    </svg>
  );
};

export default UserSvg;
