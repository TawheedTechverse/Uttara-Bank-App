import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BottomNav from "../components/BottomNav.jsx";
import MobileHeader from "../components/MobileHeader.jsx";
import {
  Send,
  Receipt,
  Smartphone,
  CreditCard,
  Eye,
  EyeOff,
  BadgeDollarSign,
  Sparkles,
} from "lucide-react";

const ShaplaIcon = () => (
  <svg
    width="140"
    height="140"
    viewBox="0 0 100 100"
    fill="none"
    stroke="white"
    strokeWidth="2"
    opacity="0.14"
  >
    <path d="M50 10 C60 30, 80 30, 70 50 C80 70, 60 70, 50 90 C40 70, 20 70, 30 50 C20 30, 40 30, 50 10 Z" />
    <path d="M50 22 C56 36, 67 39, 63 50 C67 61, 56 64, 50 78 C44 64, 33 61, 37 50 C33 39, 44 36, 50 22 Z" />
    <circle cx="50" cy="50" r="5" fill="white" opacity="0.18" />
  </svg>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    { name: "Savings Account", number: "****4582", balance: "৳ 85,620.25" },
    { name: "Current Account", number: "****9017", balance: "৳ 12,840.50" },
    { name: "Credit Card", number: "****3119", balance: "৳ -3,240.75" },
  ];

  const actions = [
  { label: "Transfer Money", path: "/transfer", icon: Send },
  { label: "Bill Payment", path: "/payments", icon: Receipt },
  { label: "Mobile Recharge", path: "/payments", icon: Smartphone },
  { label: "Cards", path: "/cards", icon: CreditCard },
  { label: "PayID", path: "/transfer", icon: BadgeDollarSign },
  { label: "Add-on Features", path: "/features", icon: Sparkles },
];

  const transactions = [
    { title: "Salary Credit", time: "Today • 9:00 AM", amount: "+ ৳ 42,000" },
    { title: "Utility Bill", time: "Yesterday • 6:15 PM", amount: "- ৳ 2,450" },
    { title: "bKash Add Money", time: "Mon • 8:45 AM", amount: "- ৳ 1,500" },
    { title: "Internet Bill", time: "Sun • 10:30 AM", amount: "- ৳ 1,200" },
  ];

  return (
    <div style={styles.page}>
      

      <main style={styles.main}>
        <MobileHeader title= "Dashboard" />
        <div style={styles.topbar}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={styles.welcome}>Welcome back</p>
            <h1 style={styles.heading}>MD TAWHEED UL ISLAM</h1>
          </motion.div>

          <motion.button
            style={styles.logoutBtn}
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            Logout
          </motion.button>
        </div>

        <motion.div
          style={styles.balanceCard}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div style={styles.shapla}>
            <ShaplaIcon />
          </div>

          <div style={styles.balanceTopRow}>
            <p style={styles.balanceLabel}>Total Balance</p>

            <motion.button
              style={styles.eyeButton}
              onClick={() => setShowBalance(!showBalance)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {showBalance ? <EyeOff size={18} color="white" /> : <Eye size={18} color="white" />}
            </motion.button>
          </div>

          <h2 style={styles.balanceAmount}>
            {showBalance ? "৳ 95,220.00" : "৳ •••••••"}
          </h2>

          <p style={styles.balanceSub}>All your accounts in one place</p>
        </motion.div>

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>My Accounts</h3>

          <div style={styles.cardGrid}>
            {accounts.map((acc) => (
              <motion.div
                key={acc.number}
                style={styles.accountCard}
                whileHover={{ scale: 1.04, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <p style={styles.accName}>{acc.name}</p>
                <h4 style={styles.accBalance}>{acc.balance}</h4>
                <p style={styles.accNumber}>{acc.number}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Quick Actions</h3>

          <div style={styles.actionGrid}>
            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <motion.button
                  key={action.label}
                  style={styles.actionCard}
                  onClick={() => navigate(action.path)}
                  whileHover={{ scale: 1.06, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <div style={styles.actionIconBox}>
                    <Icon size={20} color="#0E7A3D" />
                  </div>
                  <span>{action.label}</span>
                </motion.button>
              );
            })}
          </div>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Recent Transactions</h3>

          <div style={styles.transactionList}>
            {transactions.map((tx, i) => (
              <motion.div
                key={i}
                style={styles.transactionItem}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <div>
                  <p style={styles.txTitle}>{tx.title}</p>
                  <p style={styles.txTime}>{tx.time}</p>
                </div>
                <p style={styles.txAmount}>{tx.amount}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    background: "#f5f8f6",
    flexWrap: "wrap",
  },

  main: {
    flex: 1,
    padding: "30px",
    minWidth: 0,
    paddingBottom: "120px",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    gap: "16px",
    flexWrap: "wrap",
  },

  welcome: {
    margin: 0,
    color: "#666",
    fontSize: "14px",
  },

  heading: {
    margin: "8px 0 0 0",
    color: "#173321",
    fontSize: "32px",
  },

  logoutBtn: {
    background: "#0E7A3D",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },

  balanceCard: {
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #0E7A3D, #0B5E2F)",
    color: "white",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
  },

  shapla: {
    position: "absolute",
    bottom: "-12px",
    right: "-12px",
    pointerEvents: "none",
  },

  balanceTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },

  balanceLabel: {
    margin: 0,
    opacity: 0.92,
    fontSize: "15px",
    position: "relative",
    zIndex: 1,
  },

  eyeButton: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(255,255,255,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  balanceAmount: {
    margin: "12px 0",
    fontSize: "clamp(28px, 5vw, 42px)",
    lineHeight: 1.1,
    position: "relative",
    zIndex: 1,
  },

  balanceSub: {
    margin: 0,
    opacity: 0.82,
    position: "relative",
    zIndex: 1,
  },

  section: {
    marginTop: "28px",
  },

  sectionTitle: {
    marginBottom: "14px",
    color: "#173321",
    fontSize: "22px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },

  accountCard: {
    background: "white",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  },

  accName: {
    margin: 0,
    color: "#666",
    fontSize: "14px",
  },

  accBalance: {
    margin: "10px 0",
    fontSize: "24px",
    color: "#173321",
  },

  accNumber: {
    margin: 0,
    color: "#888",
    fontSize: "14px",
  },

  actionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
  },

  actionCard: {
    background: "white",
    border: "none",
    borderRadius: "18px",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "600",
    color: "#173321",
    display: "flex",
    flexDirection: "column",
  },

  actionIconBox: {
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    background: "#E8F5EC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14px",
  },

  transactionList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  transactionItem: {
    background: "white",
    borderRadius: "16px",
    padding: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  },

  txTitle: {
    margin: 0,
    fontWeight: "600",
    color: "#173321",
  },

  txTime: {
    margin: "6px 0 0 0",
    color: "#777",
    fontSize: "14px",
  },

  txAmount: {
    margin: 0,
    fontWeight: "700",
    color: "#173321",
  },
};