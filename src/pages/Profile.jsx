import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar.jsx";
import BottomNav from "../components/BottomNav.jsx";
export default function Profile() {
  return (
    <div style={styles.page}>
      <Sidebar />
      <main style={styles.main}>
        <h1 style={styles.title}>Profile</h1>

        <motion.div
          style={styles.card}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <p><strong>Name:</strong> MD TAWHEED UL ISLAM</p>
          <p><strong>Account Type:</strong> Premium Banking</p>
          <p><strong>Email:</strong> example@uttarabank.com</p>
          <p><strong>Phone:</strong> +8801XXXXXXXXX</p>
        </motion.div>
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
    maxWidth: "500px",
    background: "white",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    lineHeight: 1.8,
  },
};