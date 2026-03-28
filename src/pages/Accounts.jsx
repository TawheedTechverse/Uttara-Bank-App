import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav.jsx";
export default function Accounts() {
  const accounts = [
    { type: "Savings Account", number: "****4582", balance: "৳ 85,620.25" },
    { type: "Current Account", number: "****9017", balance: "৳ 12,840.50" },
    { type: "Fixed Deposit", number: "****7741", balance: "৳ 2,50,000.00" },
  ];

  return (
    <div style={styles.page}>
      
      <main style={styles.main}>
        <h1 style={styles.title}>Accounts</h1>

        <div style={styles.grid}>
          {accounts.map((acc) => (
            <motion.div
              key={acc.number}
              style={styles.card}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <p style={styles.label}>{acc.type}</p>
              <h3 style={styles.balance}>{acc.balance}</h3>
              <p style={styles.number}>{acc.number}</p>
            </motion.div>
          ))}
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  },
  card: {
    background: "white",
    borderRadius: "20px",
    padding: "22px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },
  label: { margin: 0, color: "#666" },
  balance: { margin: "10px 0", color: "#173321" },
  number: { margin: 0, color: "#888" },
};