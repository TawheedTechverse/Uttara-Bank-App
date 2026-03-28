import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("signin");
  const [step, setStep] = useState("form");

  const [signupData, setSignupData] = useState({
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [signinData, setSigninData] = useState({
    phone: "",
    password: "",
  });

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [verifiedPhone, setVerifiedPhone] = useState("");
  const [verifiedName, setVerifiedName] = useState("");
  const [message, setMessage] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSigninChange = (e) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const sendOtp = () => {
    setMessage("");

    if (!signupData.fullName || !signupData.phone || !signupData.password || !signupData.confirmPassword) {
      setMessage("Please fill in all signup fields.");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (signupData.phone.length < 11) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
    setStep("otp");
    setMessage(`Demo OTP sent: ${otpCode}`);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setVerifiedPhone(signupData.phone);
      setVerifiedName(signupData.fullName);
      setMessage("Phone verified successfully. You can now sign in.");
      setMode("signin");
      setStep("form");
      setSigninData({
        phone: signupData.phone,
        password: signupData.password,
      });
      setSignupData({
        fullName: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      setOtp("");
      setGeneratedOtp("");
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  const handleSignin = () => {
    setMessage("");

    if (!signinData.phone || !signinData.password) {
      setMessage("Please enter phone number and password.");
      return;
    }

    if (signinData.phone !== verifiedPhone) {
      setMessage("Please sign up and verify your phone number first.");
      return;
    }

    setShowWelcome(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2800);
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            style={welcomeStyles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={welcomeStyles.content}
            >
              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.35em" }}
                animate={{ opacity: 1, letterSpacing: "0.12em" }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={welcomeStyles.hello}
              >
                Hello
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={welcomeStyles.name}
              >
                {verifiedName || "User"}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={welcomeStyles.sub}
              >
                Welcome to Uttara Bank
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h1 style={styles.title}>Uttara Bank PLC.</h1>
            <p style={styles.subtitle}>Secure Online Banking</p>
          </div>

          <div style={styles.tabRow}>
            <button
              style={{
                ...styles.tabButton,
                ...(mode === "signin" ? styles.activeTab : {}),
              }}
              onClick={() => {
                setMode("signin");
                setStep("form");
                setMessage("");
              }}
            >
              Sign In
            </button>

            <button
              style={{
                ...styles.tabButton,
                ...(mode === "signup" ? styles.activeTab : {}),
              }}
              onClick={() => {
                setMode("signup");
                setStep("form");
                setMessage("");
              }}
            >
              Sign Up
            </button>
          </div>

          {mode === "signin" && (
            <div style={styles.form}>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={signinData.phone}
                onChange={handleSigninChange}
                style={styles.input}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signinData.password}
                onChange={handleSigninChange}
                style={styles.input}
              />

              <motion.button
                style={styles.button}
                onClick={handleSignin}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                Sign In Securely
              </motion.button>
            </div>
          )}

          {mode === "signup" && step === "form" && (
            <div style={styles.form}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={signupData.fullName}
                onChange={handleSignupChange}
                style={styles.input}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={signupData.phone}
                onChange={handleSignupChange}
                style={styles.input}
              />

              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={signupData.password}
                onChange={handleSignupChange}
                style={styles.input}
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                style={styles.input}
              />

              <motion.button
                style={styles.button}
                onClick={sendOtp}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                Send OTP
              </motion.button>
            </div>
          )}

          {mode === "signup" && step === "otp" && (
            <div style={styles.form}>
              <p style={styles.otpText}>
                Enter the OTP sent to <strong>{signupData.phone}</strong>
              </p>

              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={styles.input}
              />

              <motion.button
                style={styles.button}
                onClick={verifyOtp}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                Verify OTP
              </motion.button>

              <button style={styles.linkButton} onClick={sendOtp}>
                Resend OTP
              </button>
            </div>
          )}

          {message && <p style={styles.message}>{message}</p>}
        </div>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top left, #1aa04d, #0B5E2F 55%, #06361b 100%)",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "470px",
    background: "#f2f2f2",
    borderRadius: "28px",
    padding: "38px 32px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
  },
  header: {
    textAlign: "center",
    marginBottom: "24px",
  },
  title: {
    margin: 0,
    color: "#0E7A3D",
    fontSize: "30px",
    fontWeight: "700",
  },
  subtitle: {
    marginTop: "8px",
    marginBottom: 0,
    color: "#555",
    fontSize: "16px",
  },
  tabRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "22px",
  },
  tabButton: {
    flex: 1,
    height: "48px",
    borderRadius: "14px",
    border: "none",
    background: "#dcdcdc",
    color: "#222",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
  activeTab: {
    background: "#11833B",
    color: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    width: "100%",
    height: "54px",
    padding: "0 16px",
    borderRadius: "14px",
    border: "none",
    outline: "none",
    background: "#3f3f3f",
    color: "white",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    height: "54px",
    borderRadius: "14px",
    border: "none",
    background: "#11833B",
    color: "white",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "4px",
  },
  linkButton: {
    background: "transparent",
    border: "none",
    color: "#0E7A3D",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "4px",
  },
  otpText: {
    margin: 0,
    color: "#444",
    textAlign: "center",
    lineHeight: "1.5",
  },
  message: {
    marginTop: "18px",
    textAlign: "center",
    color: "#0E7A3D",
    fontWeight: "600",
    fontSize: "14px",
  },
};

const welcomeStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at center, #1f1f1f 0%, #101010 55%, #000000 100%)",
  },
  content: {
    textAlign: "center",
    color: "white",
    padding: "20px",
  },
  hello: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "500",
    opacity: 0.85,
    textTransform: "uppercase",
  },
  name: {
    margin: "14px 0 10px 0",
    fontSize: "clamp(42px, 7vw, 78px)",
    fontWeight: "700",
    letterSpacing: "-0.03em",
  },
  sub: {
    margin: 0,
    fontSize: "16px",
    color: "rgba(255,255,255,0.75)",
  },
};