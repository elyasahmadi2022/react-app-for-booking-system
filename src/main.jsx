import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./ui/Error.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />} onReset={() => window.location.replace("/")}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
