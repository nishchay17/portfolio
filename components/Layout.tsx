"use client";

import React, { ReactElement, useState } from "react";
import { Waypoint } from "react-waypoint";

import MotionBox from "./MotionBox";
import Nav from "./Nav";
interface Props {
  children: ReactElement[] | ReactElement;
  withAnimation?: boolean;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function Layout({ children, withAnimation = false }: Props): ReactElement {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const setSticky = () => {
    setIsSticky(true);
  };
  const removeSticky = () => {
    setIsSticky(false);
  };
  const onWaypointPositionChange = ({
    currentPosition,
  }: {
    currentPosition: string;
  }) => {
    if (currentPosition === "above") {
      setSticky();
    }
    if (currentPosition === "below") {
      removeSticky();
    }
  };

  return (
    <MotionBox
      as="main"
      variants={withAnimation ? variants : {}}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.45 }}
    >
      <Waypoint
        onEnter={removeSticky}
        onPositionChange={onWaypointPositionChange}
      />
      <Nav isSticky={isSticky} />
      {children}
    </MotionBox>
  );
}

export default Layout;
