import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { mint } from "./Mint";

import { ThreeHtml } from "./ThreeHtml"

const ThreeBox = ({ walletAddress }) => {
    const ref = useRef();

    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    const [speed, setSpeed] = useState(1);

    useFrame((state, delta) => {
        ref.current.rotation.z += 0.01 * speed;
        ref.current.rotation.x += 0.001 * speed;
        ref.current.rotation.y += 0.003 * speed;
    });

    const doubleClicked = () => (console.log("doubleClicked"));

    return (
        <mesh
            // {...props}
            ref={ref}
            scale={clicked ? 1.1 : 1}
            // onClick={(event) => click(!clicked)}
            onClick={(event) => {
                setSpeed(9 / speed);
                click(!clicked);
                mint({walletAddress}).then(() => {
                    setSpeed(1);
                    click(false);
                    console.log("minted");
                }, 
                () => {
                    setSpeed(1);
                    click(false);
                    console.log("mint failed");
                });
            }}
            onDoubleClick={(event) => doubleClicked()}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={hovered ? (clicked ? "lightpink" : "hotpink") : (clicked ? "steelBlue" : "orange")} />

            {/* <ThreeHtml clicked={clicked}/> */}

        </mesh>
    );
};

export default ThreeBox;
