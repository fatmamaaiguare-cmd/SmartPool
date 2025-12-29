// src/pages/AlertsPage.jsx
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/alertsPage.css";

export default function AlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  // ⚡ Charger les alertes depuis Firestore
  useEffect(() => {
    const q = query(collection(db, "alerts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => doc.data());
      setAlerts(items);
    });
    return () => unsubscribe();
  }, []);

  // ⚡ Déconnexion
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  // ⚡ Icônes et sévérité
  const getAlertIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'niveau': return '💧';
      case 'ph': return '🧪';
      case 'température':
      case 'temperature': return '🌡️';
      default: return '⚠️';
    }
  };

  const getAlertSeverity = (type) => {
    switch (type?.toLowerCase()) {
      case 'critique': return 'critical';
      case 'haute':
      case 'élevée': return 'high';
      case 'moyenne': return 'medium';
      case 'basse': return 'low';
      default: return 'medium';
    }
  };

  // ⚡ Filtrer les alertes pour le bouton
  const getMaxSeverityForType = (type) => {
    const typeAlerts = type === "all"
      ? alerts
      : alerts.filter(alert => alert.type?.toLowerCase().includes(type.toLowerCase()));
    if (!typeAlerts.length) return 'low';

    const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
    let maxSeverity = 'low';
    typeAlerts.forEach(alert => {
      const sev = getAlertSeverity(alert.type);
      if (severityOrder[sev] > severityOrder[maxSeverity]) maxSeverity = sev;
    });
    return maxSeverity;
  };

  // ⚡ Filtrer les alertes affichées selon filter
  const filteredAlerts = alerts.filter(alert => {
    if (filter === "all") return true;
    return alert.type?.toLowerCase().includes(filter.toLowerCase());
  });

  // ⚡ Statistiques
  const alertStats = {
    total: alerts.length,
    critical: alerts.filter(a => getAlertSeverity(a.type) === 'critical').length,
    high: alerts.filter(a => getAlertSeverity(a.type) === 'high').length,
    active: alerts.filter(a => !a.resolved).length
  };

  return (
    <div className="dashboard-wrapper">
      {/* Mobile Header */}
      <header className="mobile-header">
        <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>☰</button>
        <h1>SmartPool</h1>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h2>SmartPool</h2>
          <button className="close-sidebar" onClick={() => setIsSidebarOpen(false)}>×</button>
        </div>
        <ul>
          <li><Link to="/dashboard" onClick={() => setIsSidebarOpen(false)}>📊 Dashboard</Link></li>
          <li className="active"><Link to="/alerts" onClick={() => setIsSidebarOpen(false)}>⚠️ Alertes</Link></li>
          <li className="logout-item"><button onClick={handleLogout} className="logout-btn">🚪 Déconnexion</button></li>
        </ul>
      </aside>

      {/* Overlay mobile */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}

      <main className="dashboard-main">
        <div className="main-header">
          <h1>⚠️ Alertes Piscine</h1>

          {/* Boutons filtres */}
          <div className="alerts-actions">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''} severity-${getMaxSeverityForType('all')}`}
              onClick={() => setFilter('all')}
            >
              Toutes ({alertStats.total})
            </button>
            <button
              className={`filter-btn ${filter === 'niveau' ? 'active' : ''} severity-${getMaxSeverityForType('niveau')}`}
              onClick={() => setFilter('niveau')}
            >
              Niveau
            </button>
            <button
              className={`filter-btn ${filter === 'ph' ? 'active' : ''} severity-${getMaxSeverityForType('ph')}`}
              onClick={() => setFilter('ph')}
            >
              pH
            </button>
            <button
              className={`filter-btn ${filter === 'température' ? 'active' : ''} severity-${getMaxSeverityForType('température')}`}
              onClick={() => setFilter('température')}
            >
              Température
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="alert-stats-container">
          <div className="stat-card"><div className="stat-icon total">📈</div><div className="stat-content"><h3>Total</h3><p>{alertStats.total}</p></div></div>
          <div className="stat-card"><div className="stat-icon active">🔴</div><div className="stat-content"><h3>Actives</h3><p>{alertStats.active}</p></div></div>
          <div className="stat-card"><div className="stat-icon critical">🚨</div><div className="stat-content"><h3>Critiques</h3><p>{alertStats.critical}</p></div></div>
          <div className="stat-card"><div className="stat-icon high">⚠️</div><div className="stat-content"><h3>Élevées</h3><p>{alertStats.high}</p></div></div>
        </div>

        {/* Grille des alertes */}
        <div className="alerts-grid">
          {filteredAlerts.map((alert, i) => (
            <div key={i} className={`alert-card severity-${getAlertSeverity(alert.type)}`}>
              <div className="alert-header">
                <div className="alert-icon">{getAlertIcon(alert.type)}</div>
                <div className="alert-title">
                  <h3>{alert.type}</h3>
                  <span className="alert-time">{new Date(alert.timestamp.seconds * 1000).toLocaleString()}</span>
                </div>
                <div className={`alert-badge severity-${getAlertSeverity(alert.type)}`}>
                  {getAlertSeverity(alert.type).toUpperCase()}
                </div>
              </div>
              <div className="alert-body"><p>{alert.message}</p></div>
              <div className="alert-footer">
                <span className={`status-indicator ${alert.resolved ? 'resolved' : 'active'}`}>
                  {alert.resolved ? '✅ Résolue' : '🔄 En cours'}
                </span>
                {!alert.resolved && <button className="resolve-btn">Marquer comme résolue</button>}
              </div>
            </div>
          ))}
        </div>

        {/* Tableau complet */}
        <div className="table-section">
          <div className="table-header">
            <h2>📋 Historique complet</h2>
            <span className="table-count">{filteredAlerts.length} alertes</span>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>Date/Heure</th><th>Type</th><th>Sévérité</th><th>Description</th><th>Statut</th></tr>
              </thead>
              <tbody>
                {filteredAlerts.map((alert, i) => (
                  <tr key={i}>
                    <td>{new Date(alert.timestamp.seconds * 1000).toLocaleString()}</td>
                    <td>{alert.type}</td>
                    <td>{getAlertSeverity(alert.type).toUpperCase()}</td>
                    <td>{alert.message}</td>
                    <td>{alert.resolved ? 'Résolue' : 'Active'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
