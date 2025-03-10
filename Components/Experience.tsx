import { OrbitControls } from "@react-three/drei";
import { Bag } from "./Bag";

function Experience() {
  return (
    <>
      <ambientLight intensity={3.5} />
      <OrbitControls />
      <Bag scale={[8,8,10]} rotation={[0,Math.PI/2, 0]} position={[0,-1,0]} />
    </>
  );
}

export default Experience;