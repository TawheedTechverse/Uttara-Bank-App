import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      style={styles.button}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
}

const styles = {
  button: {
    width: "46px",
    height: "46px",
    borderRadius: "16px",
    border: "none",
    background: "linear-gradient(135deg, #17a34a, #0E7A3D)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(14,122,61,0.25)",
  },
};