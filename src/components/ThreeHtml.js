import { Html } from "@react-three/drei";

export const ThreeHtml = ({ clicked }) => {
    return (
        <Html
            style={{
                fontSize: "1.8rem",
            }}
            distanceFactor={15}
            scale={clicked ? 1.1 : 1}
            position={[0, 0, 1.51]}
            transform
            occlude={true}
        >
            <span>MINT</span>
        </Html>
    );
};
