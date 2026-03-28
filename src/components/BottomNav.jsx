import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wallet,
  ArrowRightLeft,
  CreditCard,
  User,
  Landmark,
} from "lucide-react";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: "Money", path: "/dashboard", icon: Wallet },
    { label: "Transfer", path: "/transfer", icon: ArrowRightLeft },
    { label: "Cards", path: "/cards", icon: CreditCard },
    { label: "Accounts", path: "/accounts", icon: Landmark },
    { label: "Profile", path: "/profile", icon: User },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.nav}>
        {items.map((item) => {
          const active = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <motion.button
              key={item.label}
              onClick={() => navigate(item.path)}
              style={{
                ...styles.navItem,
                ...(active ? styles.activeNavItem : {}),
              }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <div
                style={{
                  ...styles.iconCircle,
                  ...(active ? styles.activeIconCircle : {}),
                }}
              >
                <Icon
                  size={20}
                  color={active ? "#ffffff" : "rgba(255,255,255,0.85)"}
                />
              </div>

              <span
                style={{
                  ...styles.label,
                  ...(active ? styles.activeLabel : {}),
                }}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    bottom: "18px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "min(92%, 760px)",
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "none",
  },

  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 14px",
    borderRadius: "32px",
    background: "rgba(14, 122, 61, 0.18)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow:
      "0 20px 50px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
    pointerEvents: "auto",
  },

  navItem: {
    flex: 1,
    border: "none",
    background: "transparent",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px 8px",
    borderRadius: "22px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  activeNavItem: {
    background:
      "linear-gradient(135deg, rgba(19, 156, 79, 0.55), rgba(8, 95, 45, 0.75))",
    boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
  },

  iconCircle: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.08)",
  },

  activeIconCircle: {
    background: "linear-gradient(135deg, #17a34a, #0E7A3D)",
    boxShadow: "0 8px 20px rgba(14,122,61,0.45)",
  },

  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "rgba(255,255,255,0.82)",
  },

  activeLabel: {
    color: "#ffffff",
  },
};