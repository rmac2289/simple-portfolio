import React from "react";

export const Corner = ({ color }) => {
  return (
    <div
      style={{
        borderLeft: "20px solid transparent",
        borderRight: `20px ridge ${color}`,
        borderTop: "20px solid transparent",
        borderBottom: "20px solid transparent",
        position: "absolute",
        transform: "rotate(45deg)",
        left: -15,
        top: -15,
      }}
    ></div>
  );
};
