import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LeftCaret = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M13.465.528a1.792 1.792 0 0 1 0 2.551l-9.051 8.932 9.05 8.931c.334.34.518.796.514 1.27a1.792 1.792 0 0 1-.536 1.26 1.84 1.84 0 0 1-1.277.528 1.841 1.841 0 0 1-1.286-.506L.535 13.287A1.792 1.792 0 0 1 0 12.01c0-.478.193-.937.535-1.276L10.88.528A1.84 1.84 0 0 1 12.172 0c.485 0 .95.19 1.293.528Z"
    />
  </Svg>
);
export default LeftCaret;
