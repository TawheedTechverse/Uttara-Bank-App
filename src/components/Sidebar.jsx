import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Accounts", path: "/accounts" },
    { label: "Transfer", path: "/transfer" },
    { label: "Cards", path: "/cards" },
    { label: "Payments", path: "/payments" },
    { label: "Profile", path: "/profile" },
  ];

  return (
    <aside style={styles.sidebar}>
      <div>
        <h2 style={styles.logo}>Uttara Bank</h2>
        <p style={styles.subLogo}>Digital Banking</p>
      </div>

      <div style={styles.nav}>
        {items.map((item) => {
          const active = location.pathname === item.path;

          return (
            <motion.button
              key={item.label}
              onClick={() => navigate(item.path)}
              style={{
                ...styles.navBtn,
                ...(active ? styles.activeNavBtn : {}),
              }}
              whileHover={{ scale: 1.04, x: 4, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {item.label}
            </motion.button>
          );
        })}
      </div>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "240px",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0E7A3D, #0B5E2F)",
    color: "white",
    padding: "24px",
  },
  logo: {
    marginTop: 0,
    marginBottom: "6px",
    fontSize: "28px",
  },
  subLogo: {
    marginTop: 0,
    marginBottom: "26px",
    color: "rgba(255,255,255,0.8)",
    fontSize: "14px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  navBtn: {
    border: "none",
    background: "rgba(255,255,255,0.12)",
    color: "white",
    padding: "14px 16px",
    borderRadius: "14px",
    textAlign: "left",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },
  activeNavBtn: {
    background: "rgba(255,255,255,0.22)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
  },
};