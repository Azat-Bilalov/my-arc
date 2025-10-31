export type RadarData = {
  subject: string;
  value: number;
  fullMark: number;
};

export const radarData: RadarData[] = [
  { subject: "Fitness", value: 8, fullMark: 10 },
  { subject: "Career", value: 6, fullMark: 10 },
  { subject: "Self Development", value: 7, fullMark: 10 },
  { subject: "Mental Health", value: 9, fullMark: 10 },
  { subject: "Lifestyle", value: 5, fullMark: 10 },
];

export const habitColors = {
  fitness: "#10b981",
  career: "#3b82f6",
  "self-development": "#a855f7",
  "mental-health": "#06b6d4",
  lifestyle: "#f59e0b",
};
