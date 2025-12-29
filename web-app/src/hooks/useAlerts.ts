import { useMemo, useState } from "react";
import { Alert } from "../types/metrics";

export function useAlertFilters(alerts: Alert[]) {
  const [filter, setFilter] = useState<"all" | "critical" | "warning" | "info">("all");
  const filtered = useMemo(() => {
    if (filter === "all") return alerts;
    return alerts.filter((a) => a.level === filter);
  }, [alerts, filter]);

  return { filtered, filter, setFilter };
}
