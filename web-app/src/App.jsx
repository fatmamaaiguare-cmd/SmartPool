// App.js
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AlertsPage from "./pages/AlertsPage";
import DashboardPiscineClient from "./pages/DashboardPiscineClient";
import { auth, perf } from "./firebase";
import { trace } from "firebase/performance";

function ProtectedRoute({ children }) {
  const user = auth.currentUser;
  if (!user || !user.emailVerified) return <Navigate to="/" />;
  return children;
}

// Hook pour mesurer la performance des pages
function usePagePerformance() {
  const location = useLocation();
  useEffect(() => {
    const pageTrace = trace(perf, `page_${location.pathname.replace("/", "") || "home"}`);
    pageTrace.start();
    return () => pageTrace.stop();
  }, [location]);
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  );
}

function RoutesWrapper() {
  usePagePerformance();

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPiscineClient />
          </ProtectedRoute>
        }
      />
      <Route
        path="/alerts"
        element={
          <ProtectedRoute>
            <AlertsPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
