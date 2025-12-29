import { useMemo } from "react";
import { Metric } from "../types/metrics";
import { movingAverage } from "../lib/utils";

export function useComputedMetrics(metrics: Metric[]) {
  const last = metrics[metrics.length - 1];
  const avg20 = useMemo(() => {
    return {
      temperature: movingAverage(metrics.map((m) => m.temperature), 20),
      ph: movingAverage(metrics.map((m) => m.ph), 20),
      niveau: movingAverage(metrics.map((m) => m.niveau), 20),
    };
  }, [metrics]);

  return { last, avg20 };
}
