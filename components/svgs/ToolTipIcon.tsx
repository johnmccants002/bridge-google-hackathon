import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ToolTip = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      stroke="#084137"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.639 22.889c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75-9.75 4.365-9.75 9.75 4.365 9.75 9.75 9.75Z"
    />
    <Path
      stroke="#084137"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.639 17.472h.01v.011h-.01v-.01Z"
    />
    <Path
      stroke="#084137"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.107 8.357a2.16 2.16 0 0 1 2.36-.471 2.16 2.16 0 0 1 1.175 2.833 2.155 2.155 0 0 1-.471.702 2.159 2.159 0 0 1-1.536.635l.004 1.083"
    />
  </Svg>
);
export default ToolTip;
