import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BotIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={41}
    fill="none"
    {...props}
  >
    <Path
      fill="#E9FFFF"
      d="M31.25 8h-10V3a1.25 1.25 0 0 0-2.5 0v5h-10a5 5 0 0 0-5 5v17.5a5 5 0 0 0 5 5h22.5a5 5 0 0 0 5-5V13a5 5 0 0 0-5-5Zm2.5 22.5a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5V13a2.5 2.5 0 0 1 2.5-2.5h22.5a2.5 2.5 0 0 1 2.5 2.5v17.5Zm-8.125-8.75h-11.25a4.375 4.375 0 1 0 0 8.75h11.25a4.375 4.375 0 1 0 0-8.75Zm-3.75 2.5V28h-3.75v-3.75h3.75ZM12.5 26.125a1.875 1.875 0 0 1 1.875-1.875h1.25V28h-1.25a1.875 1.875 0 0 1-1.875-1.875ZM25.625 28h-1.25v-3.75h1.25a1.875 1.875 0 1 1 0 3.75ZM11.25 17.375a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Zm13.75 0a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
    />
  </Svg>
);
export default BotIcon;
