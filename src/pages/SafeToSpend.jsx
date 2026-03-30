import MobileHeader from "../components/MobileHeader.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function SafeToSpend() {
  const today = new Date().toLocaleDateString();
  const salary = 42000;
  const bills = 12000;
  const savings = 8000;
  const emergency = 3550;
  const safeToSpend = salary - bills - savings - emergency;

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="Safe-to-Spend" />

        <div style={styles.card}>
          <p style={styles.date}>Present Date: {today}</p>
          <h2 style={styles.amount}>Salary / Deposit: ৳ {salary.toLocaleString()}</h2>

          <div style={styles.row}><span>Bills</span><strong>৳ {bills.toLocaleString()}</strong></div>
          <div style={styles.row}><span>Savings</span><strong>৳ {savings.toLocaleString()}</strong></div>
          <div style={styles.row}><span>Emergency Buffer</span><strong>৳ {emergency.toLocaleString()}</strong></div>

          <div style={styles.resultBox}>
            <p style={styles.resultLabel}>Safe-to-Spend Balance</p>
            <h1 style={styles.resultAmount}>৳ {safeToSpend.toLocaleString()}</h1>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#f5f8f6" },
  main: { padding: "24px 20px 120px", maxWidth: "900px", margin: "0 auto" },
  card: { background: "white", borderRadius: "24px", padding: "24px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)" },
  date: { marginTop: 0, color: "#666" },
  amount: { color: "#173321" },
  row: { display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #eee" },
  resultBox: { marginTop: "24px", background: "linear-gradient(135deg, #0E7A3D, #0B5E2F)", color: "white", borderRadius: "20px", padding: "20px" },
  resultLabel: { margin: 0, opacity: 0.85 },
  resultAmount: { margin: "10px 0 0 0" },
};