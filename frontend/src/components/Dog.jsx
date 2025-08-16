import React from "react";

function Dog() {
  return (
    <img
      src="doggo.png"
      alt="yubiyubi"
      style={{
        position: "fixed",
        bottom: "10px",
        right: "20px",
        width: "150px",
        zIndex: 9999,
        filter: "drop-shadow(0 0 4px white) drop-shadow(0 0 8px white)"
      }}
    />
  );
}

export default Dog;