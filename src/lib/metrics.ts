export interface Metric {
  id: string;
  label: string;
  value: string;
}

export const metrics: Metric[] = [
  { id: "1", label: "Workshops realizados", value: "25" },
  { id: "2", label: "Participantes ativos", value: "450+" },
  { id: "3", label: "Organizadores", value: "10" },
];