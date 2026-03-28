import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav.jsx";
import MobileHeader from "../components/MobileHeader.jsx";

export default function Profile() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="Profile" />

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
  page: {
    minHeight: "100vh",
    background: "#f5f8f6",
  },

  main: {
    padding: "24px 20px 120px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  card: {
    width: "100%",
    maxWidth: "520px",
    margin: "0 auto",
    background: "white",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    lineHeight: 1.8,
  },
};