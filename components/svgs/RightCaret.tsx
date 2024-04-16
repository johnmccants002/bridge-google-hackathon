import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RightCaret = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#E9FFFF"
      d="M.535.528A1.792 1.792 0 0 0 0 1.804c0 .478.193.937.535 1.276l9.051 8.93-9.05 8.932c-.334.34-.518.796-.514 1.27.004.473.197.925.536 1.26A1.84 1.84 0 0 0 1.835 24c.48.004.941-.178 1.286-.506l10.344-10.207c.342-.339.535-.798.535-1.276s-.193-.937-.535-1.276L3.12.528A1.841 1.841 0 0 0 1.828 0C1.343 0 .878.19.535.528Z"
    />
  </Svg>
);
export default RightCaret;
