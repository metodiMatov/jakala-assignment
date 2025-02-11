import React from "react";
import IconProps from "./types";

const LocationSvg: React.FC<IconProps> = (props) => {
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
        d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10ZM14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.5714C20 15.8313 13.6 22 12 22C10.4 22 4 15.8313 4 10.5714C4 5.31157 7.58172 2 12 2C16.4183 2 20 5.31157 20 10.5714ZM18 10.5714C18 12.4968 16.7636 14.9001 15.0522 16.9916C14.23 17.9963 13.3781 18.8298 12.675 19.3927C12.4061 19.608 12.1787 19.7678 12 19.8785C11.8213 19.7678 11.5939 19.608 11.325 19.3927C10.6219 18.8298 9.76998 17.9963 8.94782 16.9916C7.23635 14.9001 6 12.4968 6 10.5714C6 6.36741 8.7344 4 12 4C15.2656 4 18 6.36741 18 10.5714ZM12.3001 20.0392C12.2984 20.0387 12.2965 20.038 12.2943 20.0373C12.3037 20.0411 12.3082 20.0425 12.3082 20.0423C12.3081 20.0421 12.3054 20.041 12.3001 20.0392Z"
        fill="white"
      />
    </svg>
  );
};

export default LocationSvg;
