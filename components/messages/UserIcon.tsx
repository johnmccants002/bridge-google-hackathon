import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const UserIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#E9FFFF"
      d="M15 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM25 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <Path
      fill="#E9FFFF"
      d="M20 37.5c-9.65 0-17.5-7.85-17.5-17.5S10.35 2.5 20 2.5 37.5 10.35 37.5 20 29.65 37.5 20 37.5ZM20 5C11.725 5 5 11.725 5 20s6.725 15 15 15 15-6.725 15-15S28.275 5 20 5Z"
    />
    <Path
      fill="#E9FFFF"
      d="M20 28.75c-3.7 0-7.025-2.35-8.25-5.825a1.252 1.252 0 0 1 2.35-.85 6.255 6.255 0 0 0 11.8 0c.225-.65.95-1 1.6-.75.65.225 1 .95.75 1.6A8.734 8.734 0 0 1 20 28.75Z"
    />
  </Svg>
);
export default UserIcon;
