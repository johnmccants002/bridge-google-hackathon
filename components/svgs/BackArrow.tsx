import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BackArrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#E9FFFF"
      fillRule="evenodd"
      d="M17.55 9.117a1.25 1.25 0 0 0-1.767 0l-10 10a1.25 1.25 0 0 0 0 1.766l10 10a1.253 1.253 0 0 0 1.799.032 1.25 1.25 0 0 0-.032-1.798L9.683 21.25h23.65a1.25 1.25 0 1 0 0-2.5H9.683l7.867-7.867a1.25 1.25 0 0 0 0-1.766Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BackArrow;
