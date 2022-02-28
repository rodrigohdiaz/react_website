import ReactDOM from "react-dom";
import React from "react";
import Canvas  from "react-three-fiber";

ReactDOM.render(
    <Canvas>
    <mesh>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  </Canvas>,
  document.getElementById("root")
);

export default Canvas;