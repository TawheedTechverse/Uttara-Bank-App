import { useMemo, useState } from "react";
import MobileHeader from "../components/MobileHeader.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function InternationalSupport() {
  const [form, setForm] = useState({
    accountNumber: "",
    address: "",
    amount: "",
    country: "Bangladesh",
    rate: "83.35",
  });

  const calculatedAmount = useMemo(() => {
    const amount = Number(form.amount) || 0;
    const rate = Number(form.rate) || 0;
    return (amount * rate).toFixed(2);
  }, [form.amount, form.rate]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <MobileHeader title="International Support" />

        <div style={styles.card}>
          <input name="accountNumber" placeholder="Destination Account Number" value={form.accountNumber} onChange={handleChange} style={styles.input} />
          <input name="address" placeholder="Destination Address" value={form.address} onChange={handleChange} style={styles.input} />
          <input name="amount" placeholder="Amount in AUD" value={form.amount} onChange={handleChange} style={styles.input} />

          <input name="country" value={form.country} onChange={handleChange} style={styles.input} />
          <input name="rate" value={form.rate} onChange={handleChange} style={styles.input} />

          <div style={styles.resultBox}>
            <p style={styles.resultLabel}>Destination Calculated Amount</p>
            <h2 style={styles.resultAmount}>{calculatedAmount} BDT</h2>
            <p style={styles.note}>Default Country: Bangladesh | Default Rate: 83.35 = 1 AUD</p>
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
  card: { background: "white", borderRadius: "24px", padding: "24px", boxShadow: "0 10px 25px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: "14px" },
  input: { height: "54px", borderRadius: "14px", border: "1px solid #ddd", padding: "0 16px", fontSize: "16px", outline: "none" },
  resultBox: { marginTop: "8px", background: "linear-gradient(135deg, #0E7A3D, #0B5E2F)", color: "white", borderRadius: "20px", padding: "20px" },
  resultLabel: { margin: 0, opacity: 0.85 },
  resultAmount: { margin: "10px 0" },
  note: { margin: 0, opacity: 0.82 },
};