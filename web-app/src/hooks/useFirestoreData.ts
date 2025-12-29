import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy, limit, getFirestore } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Metric, Alert } from "../types/metrics";

export function useRealtimeMetrics(path = "metrics", limitCount = 100) {
  const [data, setData] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, path), orderBy("timestamp", "desc"), limit(limitCount));
    const unsub = onSnapshot(q, (snap) => {
      const arr: Metric[] = snap.docs.map((d) => ({ ...(d.data() as any), id: d.id } as Metric)).reverse();
      setData(arr);
      setLoading(false);
    });
    return () => unsub();
  }, [path, limitCount]);

  return { data, loading };
}

export function useRealtimeAlerts(path = "alerts", limitCount = 50) {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, path), orderBy("timestamp", "desc"), limit(limitCount));
    const unsub = onSnapshot(q, (snap) => {
      const arr: Alert[] = snap.docs.map((d) => ({ ...(d.data() as any), id: d.id } as Alert));
      setAlerts(arr);
      setLoading(false);
    });
    return () => unsub();
  }, [path, limitCount]);

  return { alerts, loading };
}
