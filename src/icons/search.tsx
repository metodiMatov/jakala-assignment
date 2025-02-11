import React from "react";
import IconProps from "./types";

const SearchSvg: React.FC<IconProps> = (props) => {
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
        d="M15.1988 16.7344C13.9528 17.5354 12.47 18 10.8787 18C6.46038 18 2.87866 14.4183 2.87866 10C2.87866 5.58172 6.46038 2 10.8787 2C15.2969 2 18.8787 5.58172 18.8787 10C18.8787 12.1038 18.0666 14.0179 16.7389 15.446L20.8284 19.5356C21.219 19.9261 21.219 20.5593 20.8284 20.9498C20.4379 21.3403 19.8048 21.3403 19.4142 20.9498L15.1988 16.7344ZM16.8787 10C16.8787 13.3137 14.1924 16 10.8787 16C7.56495 16 4.87866 13.3137 4.87866 10C4.87866 6.68629 7.56495 4 10.8787 4C14.1924 4 16.8787 6.68629 16.8787 10Z"
        fill="white"
      />
    </svg>
  );
};

export default SearchSvg;
