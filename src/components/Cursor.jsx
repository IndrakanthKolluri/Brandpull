import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      const newTrail = [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...trail.slice(0, 12), // keep 12 trail points
      ];
      setMousePosition({ x: e.clientX, y: e.clientY });
      setTrail(newTrail);
    };

    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);

    document.addEventListener("mousemove", move);

    const elements = document.querySelectorAll("button, a, input, [role='button']");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [trail]);

  return (
    <>
      {/* Core Cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-200 ease-out ${
          isHovering ? "scale-125" : "scale-100"
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, hsl(270, 60%, 60%), hsl(25, 100%, 60%))",
          boxShadow:
            "0 0 12px hsl(270, 60%, 60%), 0 0 16px hsl(25, 100%, 60%)",
        }}
      ></div>

      {/* Gradient Trail */}
      {trail.map((point, i) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: "translate(-50%, -50%)",
            width: `${10 - i * 0.6}px`,
            height: `${10 - i * 0.6}px`,
            borderRadius: "50%",
            background: `linear-gradient(135deg, hsla(270, 60%, 60%, ${
              0.4 - i * 0.03
            }), hsla(25, 100%, 60%, ${0.4 - i * 0.03}))`,
            filter: "blur(3px)",
            opacity: `${1 - i * 0.1}`,
          }}
        ></div>
      ))}
    </>
  );
};

export default Cursor;
