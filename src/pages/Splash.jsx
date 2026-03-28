import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  }, []);

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={styles.logoBox}
      >
        <h1 style={styles.logo}>U</h1>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={styles.title}
      >
        Uttara Bank PLC.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={styles.subtitle}
      >
        Secure Digital Banking
      </motion.p>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at center, #0B5E2F 0%, #06361b 60%, #021a0d 100%)",
    color: "white",
  },

  logoBox: {
    width: "120px",
    height: "120px",
    borderRadius: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    marginBottom: "24px",
  },

  logo: {
    fontSize: "64px",
    fontWeight: "800",
    margin: 0,
    background: "linear-gradient(135deg, #00ff9d, #0E7A3D, #00c853)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  title: {
    margin: 0,
    fontSize: "28px",
    fontWeight: "600",
    letterSpacing: "0.02em",
  },

  subtitle: {
    marginTop: "10px",
    fontSize: "14px",
    opacity: 0.7,
  },
};