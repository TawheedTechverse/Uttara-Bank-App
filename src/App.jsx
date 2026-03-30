import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Accounts from "./pages/Accounts.jsx";
import Transfer from "./pages/Transfer.jsx";
import Cards from "./pages/Cards.jsx";
import Payments from "./pages/Payments.jsx";
import Profile from "./pages/Profile.jsx";
import Features from "./pages/Features.jsx";
import SafeToSpend from "./pages/SafeToSpend.jsx";
import SmartSalarySplit from "./pages/SmartSalarySplit.jsx";
import AiFinancialCoach from "./pages/AiFinancialCoach.jsx";
import InternationalSupport from "./pages/InternationalSupport.jsx";
import SubscriptionDetector from "./pages/SubscriptionDetector.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/features" element={<Features />} />
        <Route path="/feature/safe-to-spend" element={<SafeToSpend />} />
        <Route path="/feature/salary-split" element={<SmartSalarySplit />} />
        <Route path="/feature/ai-coach" element={<AiFinancialCoach />} />
        <Route path="/feature/international-support" element={<InternationalSupport />} />
        <Route path="/feature/subscription-detector" element={<SubscriptionDetector />} />
      </Routes>
    </BrowserRouter>
  );
}