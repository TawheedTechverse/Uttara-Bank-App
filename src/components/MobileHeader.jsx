import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { House } from "lucide-react";

export default function MobileHeader({ title }) {
  const navigate = useNavigate();

  return (
    <div style={styles.header}>
      <motion.button
        style={styles.homeBtn}
        onClick={() => navigate("/dashboard")}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <House size={20} color="#ffffff" />
      </motion.button>

      <h1 style={styles.title}>{title}</h1>

      <div style={styles.rightSpace} />
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "24px",
    gap: "12px",
  },

  homeBtn: {
    width: "46px",
    height: "46px",
    border: "none",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #17a34a, #0E7A3D)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(14,122,61,0.25)",
    flexShrink: 0,
  },

  title: {
    margin: 0,
    flex: 1,
    textAlign: "center",
    fontSize: "clamp(24px, 5vw, 40px)",
    color: "#173321",
    fontWeight: "800",
  },

  rightSpace: {
    width: "46px",
    height: "46px",
    flexShrink: 0,
  },
};