import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        pointerEvents: "none",
      }}
    >
      <div className="canvas-loader-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p
        style={{
          fontSize: 13,
          color: "#00cea8",
          fontWeight: 700,
          marginTop: 14,
          letterSpacing: "0.05em",
          fontFamily: "Poppins, sans-serif",
          textShadow: "0 0 10px rgba(0, 206, 168, 0.5)",
        }}
      >
        {progress.toFixed(0)}%
      </p>
      <span
        style={{
          fontSize: 11,
          color: "#aaa6c3",
          fontWeight: 500,
          marginTop: 4,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Loading 3D Scene...
      </span>
    </Html>
  );
};

export default CanvasLoader;