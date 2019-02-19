import React from "react";

const Scroll = props => {
  const { children } = props;
  return (
    <div
      style={{
        overflowY: "scroll"
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
