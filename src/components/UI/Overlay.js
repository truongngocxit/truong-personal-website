export default function Overlay({ className, onClick, zIndex = 100 }) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        // backdropFilter: `blur(5px)`,
        // background: "#333",
        zIndex,
      }}
    />
  );
}
