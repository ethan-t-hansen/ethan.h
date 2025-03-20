'use client'

import React, { useRef, useEffect } from "react";
import RiveComponent, { useRive, useStateMachineInput } from "@rive-app/react-canvas";

interface RiveProps {
    riveUrl: string;
    stateMachine: string;
    artboard: string;
  }

const RiveObject = ({ riveUrl, stateMachine, artboard }: RiveProps) => {

  const { RiveComponent } = useRive({
    src: riveUrl,
    stateMachines: stateMachine,
    artboard: artboard,
    autoplay: true,
  });

  return (
    <div
    className="relative w-48 h-96 -z-20 rounded-xl bg-clip-border p-4 shadow-2xl"
    >
      <RiveComponent/>
    </div>
  );
};

export default RiveObject;
