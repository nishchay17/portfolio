import React, { ReactElement } from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const Motion = motion<BoxProps>(Box);

interface Props {
  children: ReactElement[] | ReactElement;
  [x: string]: any;
}

const MotionBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <Motion ref={ref} {...props}>
      {props.children}
    </Motion>
  );
});

// function MotionBox({ children, ...props }: Props): ReactElement {
//   return <Motion {...props}>{children}</Motion>;
// }

export default MotionBox;
