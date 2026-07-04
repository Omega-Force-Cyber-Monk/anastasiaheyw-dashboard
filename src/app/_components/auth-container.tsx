"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";

interface AuthContainerProps {
  onDiscordSignIn: () => void;
  onCredentialsSignIn: (formData: FormData) => Promise<void>;
  onSignupSubmit: (formData: FormData) => Promise<void>;
}

export function AuthContainer({
  onDiscordSignIn,
  onCredentialsSignIn,
  onSignupSubmit,
}: AuthContainerProps) {
  const [view, setView] = useState<"login" | "signup">("login");

  return view === "login" ? (
    <LoginForm
      onDiscordSignIn={onDiscordSignIn}
      onCredentialsSignIn={onCredentialsSignIn}
      onToggleToSignup={() => setView("signup")}
    />
  ) : (
    <SignupForm
      onSignupSubmit={onSignupSubmit}
      onToggleToLogin={() => setView("login")}
    />
  );
}
