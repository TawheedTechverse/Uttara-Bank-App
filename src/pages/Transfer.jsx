import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar.jsx";
import BottomNav from "../components/BottomNav.jsx";
export default function Transfer() {
  return (
    <div style={styles.page}>
      <Sidebar />
      <main style={styles.main}>
        <h1 style={styles.title}>Transfer Money</h1>

        <div style={styles.card}>
          <input type="text" placeholder="From Account" style={styles.input} />
          <input type="text" placeholder="To Account Number / PayID" style={styles.input} />
          <input type="text" placeholder="Amount" style={styles.input} />
          <input type="text" placeholder="Reference / Note" style={styles.input} />

          <motion.button
            style={styles.button}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            Transfer Now
          </motion.button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", display: "flex", background: "#f5f8f6" },
  main: { flex: 1, padding: "30px", paddingBottom: "120px" },
  title: { marginTop: 0, color: "#173321" },
  card: {
    maxWidth: "520px",
    background: "white",
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
    border: "1px solid #ddd",
    padding: "0 16px",
    fontSize: "16px",
    outline: "none",
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