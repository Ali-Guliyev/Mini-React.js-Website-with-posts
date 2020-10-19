import React from "react";
import Rainbow from "./hoc/Rainbow";

function About() {
  return (
    <div className={"container"}>
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam saepe
        aut eos voluptatum nemo repellat optio soluta expedita cum maxime iure
        iste inventore ullam delectus unde veniam error, vitae esse.
      </p>
    </div>
  );
}

export default Rainbow(About);
