import React from "react";
import IconProps from "./types";

const EllipseSvg: React.FC<IconProps> = (props) => {
  const { width = 12, height = 12, color = "none", ariaLabel = "" } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
    >
      <circle cx="6" cy="6" r="6" fill="#E20612" />
    </svg>
  );
};

export default EllipseSvg;
