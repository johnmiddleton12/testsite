import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const ThreeBox = () => {
    const ref = useRef();

    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    useFrame((state, delta) => {
        ref.current.rotation.z += 0.01;
        ref.current.rotation.x += 0.001
    });

    const doubleClicked = () => (console.log("doubleClicked"));


    return (
        <mesh
            // {...props}
            ref={ref}
            scale={clicked ? 1.2 : 1}
            onClick={(event) => click(!clicked)}
            onDoubleClick={(event) => doubleClicked()}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    );
};

export default ThreeBox;
