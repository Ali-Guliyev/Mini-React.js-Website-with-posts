import React from "react";

function Rainbow(WrappedComponent) {
  const colours = ["red", "pink", "green", "orange", "blue", "yellow"];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + "-text";

  return () => {
    return (
      <div className={className}>
        <WrappedComponent />
      </div>
    );
  };
}

export default Rainbow;
