import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav.jsx";
import MobileHeader from "../components/MobileHeader.jsx";

export default function Transfer() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="Transfer" />

        <div style={styles.card}>
          <input placeholder="From Account" style={styles.input} />
          <input placeholder="To Account Number / PayID" style={styles.input} />
          <input placeholder="Amount" style={styles.input} />
          <input placeholder="Reference / Note" style={styles.input} />

          <motion.button style={styles.button} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
            Transfer Now
          </motion.button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "var(--bg)" },
  main: { padding: "24px 20px 120px", maxWidth: "900px", margin: "0 auto" },
  card: {
    maxWidth: "520px",
    margin: "0 auto",
    background: "var(--card)",
    color: "var(--text)",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    height: "54px",
    borderRadius: "14px",
    border: "1px solid var(--border)",
    padding: "0 16px",
    fontSize: "16px",
    outline: "none",
    background: "var(--card)",
    color: "var(--text)",
  },
  button: {
    height: "54px",
    borderRadius: "14px",
    border: "none",
    background: "#0E7A3D",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};