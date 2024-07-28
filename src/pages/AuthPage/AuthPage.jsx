import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  const [showButton, setShowButton] = useState(false);

  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowButton(!showButton)}>
        {!showButton ? "SIGN UP" : "LOG IN"}
      </button>
      {showButton ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </main>
  );
}
