import firebase from "firebase/compat/app";

export interface Metric {
  id?: string;
  timestamp: firebase.firestore.Timestamp;
  temperature: number;
  ph: number;
  niveau: number;
  etat_pompe?: "ON" | "OFF";
  // precomputed moving averages if available
  temp_moyenne_mobile?: number;
  ph_moyenne_mobile?: number;
  niveau_moyen_mobile?: number;
}

export type AlertLevel = "critical" | "warning" | "info";

export interface Alert {
  id?: string;
  timestamp: firebase.firestore.Timestamp;
  message: string;
  level: AlertLevel;
  values: {
    niveau: number;
    ph: number;
    temperature: number;
    pompe?: number;
    IQE?: number;
  };
  emailSent?: boolean;
  status?: "envoyée" | "en attente";
}

export interface Weather {
  temp: number;
  description: string;
  pop: number;
}
