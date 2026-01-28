import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SignifyProvider } from "signifyid-client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SignifyProvider
      config={{
        apiUrl: import.meta.env.VITE_PUBLIC_SIGNIFY_API_URL,
        loginUrl: import.meta.env.VITE_PUBLIC_SIGNIFY_LOGIN_URL,
        cookieName: "clientSession",
      }}
    >
      <App />
    </SignifyProvider>
  </StrictMode>
);
