import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar.jsx";

export default function Payments() {
  const items = ["Electricity Bill", "Gas Bill", "Internet Bill", "Mobile Recharge"];

  return (
    <div style={styles.page}>
      <Sidebar />
      <main style={styles.main}>
        <h1 style={styles.title}>Payments</h1>

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
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", display: "flex", background: "#f5f8f6" },
  main: { flex: 1, padding: "30px" },
  title: { marginTop: 0, color: "#173321" },
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