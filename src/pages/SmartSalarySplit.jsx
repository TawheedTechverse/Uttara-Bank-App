import MobileHeader from "../components/MobileHeader.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function SmartSalarySplit() {
  const salary = 42000;

  const jars = [
    { label: "Bills", percent: 40, amount: salary * 0.4 },
    { label: "Savings", percent: 25, amount: salary * 0.25 },
    { label: "Lifestyle", percent: 25, amount: salary * 0.25 },
    { label: "Emergency", percent: 10, amount: salary * 0.1 },
  ];

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="Smart Salary Split" />

        <div style={styles.headerCard}>
          <p style={styles.label}>Salary / Deposit</p>
          <h1 style={styles.salary}>৳ {salary.toLocaleString()}</h1>
        </div>

        <div style={styles.grid}>
          {jars.map((jar) => (
            <div key={jar.label} style={styles.jarCard}>
              <div style={styles.jarGlass}>
                <div style={{ ...styles.jarFill, height: `${jar.percent}%` }} />
                <div style={styles.jarText}>
                  <strong>{jar.label}</strong>
                </div>
              </div>
              <p style={styles.jarAmount}>৳ {jar.amount.toLocaleString()}</p>
              <p style={styles.jarPercent}>{jar.percent}%</p>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#f5f8f6" },
  main: { padding: "24px 20px 120px", maxWidth: "980px", margin: "0 auto" },
  headerCard: { background: "linear-gradient(135deg, #0E7A3D, #0B5E2F)", color: "white", borderRadius: "24px", padding: "24px", marginBottom: "24px" },
  label: { margin: 0, opacity: 0.85 },
  salary: { margin: "8px 0 0 0" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" },
  jarCard: { background: "white", borderRadius: "24px", padding: "20px", textAlign: "center", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" },
  jarGlass: {
    height: "220px",
    borderRadius: "28px 28px 20px 20px",
    background: "rgba(255,255,255,0.35)",
    border: "1px solid rgba(14,122,61,0.22)",
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden",
    boxShadow: "inset 0 0 20px rgba(255,255,255,0.35)",
  },
  jarFill: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    background: "linear-gradient(180deg, rgba(23,163,74,0.65), rgba(14,122,61,0.95))",
    borderRadius: "20px 20px 0 0",
  },
  jarText: {
    position: "absolute",
    top: "14px",
    left: 0,
    right: 0,
    color: "#173321",
  },
  jarAmount: { margin: "16px 0 4px 0", fontWeight: "700", color: "#173321" },
  jarPercent: { margin: 0, color: "#666" },
};