import MobileHeader from "../components/MobileHeader.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function AiFinancialCoach() {
  const expenses = [
    { category: "Dining", amount: 6200 },
    { category: "Transport", amount: 2800 },
    { category: "Shopping", amount: 5400 },
    { category: "Subscriptions", amount: 1900 },
    { category: "Utilities", amount: 3200 },
  ];

  const tips = [
    "Reduce dining expenses by setting a weekly food budget.",
    "Review shopping purchases and delay non-essential spending.",
    "Cancel or pause unused subscriptions to lower monthly costs.",
  ];

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="AI Financial Coach" />

        <div style={styles.card}>
          <h3 style={styles.title}>Last Month Expense Analytics</h3>
          {expenses.map((item) => (
            <div key={item.category} style={styles.row}>
              <span>{item.category}</span>
              <strong>৳ {item.amount.toLocaleString()}</strong>
            </div>
          ))}
        </div>

        <div style={styles.card}>
          <h3 style={styles.title}>Suggested Reducing Options</h3>
          <ul style={styles.list}>
            {tips.map((tip) => (
              <li key={tip} style={styles.listItem}>{tip}</li>
            ))}
          </ul>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#f5f8f6" },
  main: { padding: "24px 20px 120px", maxWidth: "900px", margin: "0 auto" },
  card: { background: "white", borderRadius: "24px", padding: "24px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)", marginBottom: "20px" },
  title: { marginTop: 0, color: "#173321" },
  row: { display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #eee" },
  list: { paddingLeft: "20px", margin: 0 },
  listItem: { marginBottom: "12px", color: "#555", lineHeight: 1.6 },
};