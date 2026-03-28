import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav.jsx";
import MobileHeader from "../components/MobileHeader.jsx";

export default function Payments() {
  const items = ["Electricity Bill", "Gas Bill", "Internet Bill", "Mobile Recharge"];

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="Payments" />

        <div style={styles.grid}>
          {items.map((item) => (
            <motion.button
              key={item}
              style={styles.card}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f8f6",
  },

  main: {
    padding: "24px 20px 120px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  card: {
    background: "white",
    border: "none",
    borderRadius: "20px",
    padding: "24px",
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },
};