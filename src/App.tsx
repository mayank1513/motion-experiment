import "./index.css";
import { useState } from "react";
import { motion } from "motion/react";

export default function App() {
  const offset = 1;
  const [colorHex, setColorHex] = useState("#f00");

  return (
    <>
      <input
        type="text"
        value={colorHex}
        onChange={(e) => setColorHex(e.target.value)}
      />
      <motion.div
        key={colorHex}
        transition={{ duration: 0.3, delay: offset * 0.1, ease: "easeOut" }}
        animate={{
          backgroundColor: colorHex,
          scale: [1, 2, 1],
        }}
        style={{
          height: "50vh",
          width: "50vw",
          margin: "auto",
          background: "#fff",
        }}
      ></motion.div>
    </>
  );
}
