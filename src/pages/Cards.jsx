import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import BottomNav from "../components/BottomNav.jsx";
import MobileHeader from "../components/MobileHeader.jsx";

export default function Cards() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAddToWallet = () => {
    setShowSuccess(true);
    setShowConfetti(true);
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div style={styles.page}>
      {showConfetti && <Confetti recycle={false} numberOfPieces={250} />}

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

        <div style={styles.buttonRow}>
          <motion.button
            style={styles.walletButton}
            onClick={handleAddToWallet}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            Add to Wallet
          </motion.button>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              style={styles.popupOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                style={styles.popup}
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 10 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <div style={styles.checkCircle}>✓</div>
                <h3 style={styles.popupTitle}>Success</h3>
                <p style={styles.popupText}>
                  Your card has been added to your wallet successfully.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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

  bank: {
    margin: 0,
    opacity: 0.8,
    letterSpacing: "2px",
  },

  number: {
    marginTop: "40px",
    letterSpacing: "3px",
  },

  bottom: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
  },

  small: {
    margin: 0,
    fontSize: "12px",
    opacity: 0.7,
  },

  white: {
    marginTop: "6px",
    marginBottom: 0,
  },

  buttonRow: {
    display: "flex",
    justifyContent: "center",
    marginTop: "28px",
  },

  walletButton: {
    border: "none",
    borderRadius: "16px",
    padding: "16px 28px",
    background: "linear-gradient(135deg, #17a34a, #0E7A3D)",
    color: "white",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 14px 30px rgba(14,122,61,0.25)",
  },

  popupOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
  },

  popup: {
    width: "100%",
    maxWidth: "360px",
    background: "white",
    borderRadius: "24px",
    padding: "28px 24px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
    textAlign: "center",
  },

  checkCircle: {
    width: "68px",
    height: "68px",
    borderRadius: "50%",
    margin: "0 auto 16px",
    background: "linear-gradient(135deg, #17a34a, #0E7A3D)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "34px",
    fontWeight: "700",
  },

  popupTitle: {
    margin: "0 0 10px 0",
    color: "#173321",
    fontSize: "24px",
  },

  popupText: {
    margin: 0,
    color: "#555",
    lineHeight: 1.6,
    fontSize: "15px",
  },
};