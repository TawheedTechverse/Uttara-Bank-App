import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav.jsx";
import MobileHeader from "../components/MobileHeader.jsx";

export default function Cards() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="Cards" />

        <motion.div
          style={styles.cardBox}
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <p style={styles.bank}>Uttara Bank PLC.</p>
          <h2 style={styles.number}>**** **** **** 2604</h2>

          <div style={styles.bottom}>
            <div>
              <p style={styles.small}>Card Holder</p>
              <p style={styles.white}>MD TAWHEED UL ISLAM</p>
            </div>

            <div>
              <p style={styles.small}>Valid Thru</p>
              <p style={styles.white}>08/29</p>
            </div>
          </div>
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

  cardBox: {
    maxWidth: "460px",
    margin: "0 auto",
    borderRadius: "24px",
    padding: "28px",
    background: "linear-gradient(135deg, #14311F, #0B5E2F)",
    color: "white",
    boxShadow: "0 18px 40px rgba(0,0,0,0.14)",
  },

  bank: { margin: 0, opacity: 0.8, letterSpacing: "2px" },
  number: { marginTop: "40px", letterSpacing: "3px" },
  bottom: { marginTop: "40px", display: "flex", justifyContent: "space-between" },
  small: { margin: 0, fontSize: "12px", opacity: 0.7 },
  white: { marginTop: "6px", marginBottom: 0 },
};