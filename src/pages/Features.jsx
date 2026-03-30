import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MobileHeader from "../components/MobileHeader.jsx";
import BottomNav from "../components/BottomNav.jsx";

const featureList = [
  {
    key: "safeToSpend",
    title: "Safe-to-Spend Balance",
    description: "Shows how much you can safely spend after bills and savings.",
    path: "/feature/safe-to-spend",
  },
  {
    key: "salarySplit",
    title: "Smart Salary Split",
    description: "Automatically splits income into bills, savings, lifestyle, and emergency.",
    path: "/feature/salary-split",
  },
  {
    key: "aiCoach",
    title: "AI Financial Coach",
    description: "Analyzes spending and gives suggestions to reduce unnecessary expenses.",
    path: "/feature/ai-coach",
  },
  {
    key: "migrantMode",
    title: "Migrant / International Support Mode",
    description: "Supports international transfer fields, conversion, and transfer preview.",
    path: "/feature/international-support",
  },
  {
    key: "subscriptionDetector",
    title: "Subscription Detector",
    description: "Shows subscription usage and highlights unused subscriptions visually.",
    path: "/feature/subscription-detector",
  },
];

const defaultState = {
  safeToSpend: false,
  salarySplit: false,
  aiCoach: false,
  migrantMode: false,
  subscriptionDetector: false,
};

export default function Features() {
  const navigate = useNavigate();
  const [enabledFeatures, setEnabledFeatures] = useState(defaultState);

  useEffect(() => {
    const saved = localStorage.getItem("uttara_addon_features");
    if (saved) {
      setEnabledFeatures(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("uttara_addon_features", JSON.stringify(enabledFeatures));
  }, [enabledFeatures]);

  const toggleFeature = (key) => {
    setEnabledFeatures((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const activeCount = useMemo(
    () => Object.values(enabledFeatures).filter(Boolean).length,
    [enabledFeatures]
  );

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="Add-on Features" />

        <div style={styles.summaryCard}>
          <p style={styles.summaryLabel}>Activated Features</p>
          <h2 style={styles.summaryValue}>{activeCount} / 5</h2>
          <p style={styles.summaryText}>
            Enable a feature with the switch, then open its demo page to see how it works.
          </p>
        </div>

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Available Features</h3>

          <div style={styles.featureList}>
            {featureList.map((feature) => {
              const enabled = enabledFeatures[feature.key];

              return (
                <motion.div
                  key={feature.key}
                  style={styles.featureCard}
                  whileHover={{ scale: 1.01, y: -3 }}
                >
                  <div style={styles.featureText}>
                    <h4 style={styles.featureTitle}>{feature.title}</h4>
                    <p style={styles.featureDescription}>{feature.description}</p>

                    <motion.button
                      style={{
                        ...styles.demoButton,
                        ...(enabled ? styles.demoButtonEnabled : styles.demoButtonDisabled),
                      }}
                      onClick={() => navigate(feature.path)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Demo
                    </motion.button>
                  </div>

                  <button
                    onClick={() => toggleFeature(feature.key)}
                    style={{
                      ...styles.switch,
                      ...(enabled ? styles.switchOn : styles.switchOff),
                    }}
                  >
                    <span
                      style={{
                        ...styles.switchKnob,
                        ...(enabled ? styles.switchKnobOn : {}),
                      }}
                    />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#f5f8f6" },
  main: { padding: "24px 20px 120px", maxWidth: "980px", margin: "0 auto" },
  summaryCard: {
    background: "linear-gradient(135deg, #0E7A3D, #0B5E2F)",
    color: "white",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
    marginBottom: "24px",
  },
  summaryLabel: { margin: 0, opacity: 0.85, fontSize: "14px" },
  summaryValue: { margin: "10px 0", fontSize: "36px" },
  summaryText: { margin: 0, opacity: 0.82, lineHeight: 1.5 },
  section: { marginTop: "26px" },
  sectionTitle: { marginBottom: "14px", color: "#173321", fontSize: "22px" },
  featureList: { display: "flex", flexDirection: "column", gap: "14px" },
  featureCard: {
    background: "white",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  featureText: { flex: 1 },
  featureTitle: { margin: "0 0 8px 0", color: "#173321", fontSize: "18px" },
  featureDescription: { margin: 0, color: "#666", lineHeight: 1.5, fontSize: "14px" },
  demoButton: {
    marginTop: "14px",
    border: "none",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  demoButtonEnabled: {
    background: "linear-gradient(135deg, #17a34a, #0E7A3D)",
    color: "white",
  },
  demoButtonDisabled: {
    background: "#e9f6ed",
    color: "#0E7A3D",
  },
  switch: {
    width: "66px",
    height: "36px",
    borderRadius: "999px",
    border: "none",
    position: "relative",
    cursor: "pointer",
    transition: "0.3s ease",
    flexShrink: 0,
  },
  switchOn: { background: "linear-gradient(135deg, #17a34a, #0E7A3D)" },
  switchOff: { background: "#d9d9d9" },
  switchKnob: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "white",
    position: "absolute",
    top: "4px",
    left: "4px",
    transition: "0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },
  switchKnobOn: { left: "34px" },
};