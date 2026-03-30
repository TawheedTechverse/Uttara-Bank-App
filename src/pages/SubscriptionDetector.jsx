import MobileHeader from "../components/MobileHeader.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function SubscriptionDetector() {
  const used = 45;
  const unused = 55;

  const subscriptions = [
    { name: "Netflix", status: "Used" },
    { name: "ChatGPT", status: "Used" },
    { name: "Spotify", status: "Unused" },
    { name: "Apple Music", status: "Unused" },
    { name: "YouTube", status: "Used" },
    { name: "Gemini", status: "Unused" },
    { name: "Perplexity", status: "Unused" },
    { name: "Hoichoi", status: "Unused" },
  ];

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="Subscription Detector" />

        <div style={styles.chartCard}>
          <div
            style={{
              ...styles.pie,
              background: `conic-gradient(#0E7A3D 0% ${used}%, #d9d9d9 ${used}% 100%)`,
            }}
          >
            <div style={styles.pieCenter}>Usage</div>
          </div>

          <div style={styles.legend}>
            <div style={styles.legendRow}>
              <span style={{ ...styles.dot, background: "#0E7A3D" }} />
              <span>Used</span>
            </div>
            <div style={styles.legendRow}>
              <span style={{ ...styles.dot, background: "#d9d9d9" }} />
              <span>Unused</span>
            </div>
          </div>
        </div>

        <div style={styles.listCard}>
          {subscriptions.map((sub) => (
            <div key={sub.name} style={styles.row}>
              <span>{sub.name}</span>
              <strong style={{ color: sub.status === "Unused" ? "#c0392b" : "#0E7A3D" }}>
                {sub.status}
              </strong>
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
  main: { padding: "24px 20px 120px", maxWidth: "900px", margin: "0 auto" },
  chartCard: { background: "white", borderRadius: "24px", padding: "24px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginBottom: "20px" },
  pie: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pieCenter: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    color: "#173321",
  },
  legend: { display: "flex", gap: "20px" },
  legendRow: { display: "flex", alignItems: "center", gap: "8px" },
  dot: { width: "14px", height: "14px", borderRadius: "50%" },
  listCard: { background: "white", borderRadius: "24px", padding: "24px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" },
  row: { display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #eee" },
};