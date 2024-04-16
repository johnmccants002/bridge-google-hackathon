import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const UpRightArrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={9}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E9FFFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m.5 8.5 8-8m0 0H3.167M8.5.5v5.333"
    />
  </Svg>
);
export default UpRightArrow;
