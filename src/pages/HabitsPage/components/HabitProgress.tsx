import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { DayProgress } from "../config";

interface HabitProgressProps {
  habitName: string;
  progress: DayProgress[];
  isHabitCompleted: boolean;
}

export const HabitProgress = ({
  habitName,
  progress,
  isHabitCompleted,
}: HabitProgressProps) => {
  return (
    <div className="bg-white rounded-xl p-4">
      <p className="font-medium text-md mb-3">{habitName}</p>
      <div className="flex items-center justify-around text-xs text-gray-600 mb-2">
        {progress.map((day) => (
          <span key={`${day.date}-${day.dayName}`}>{day.dayName}</span>
        ))}
      </div>
      <div className="flex gap-2">
        {progress.map((day, i) => (
          <div key={`${day.date}-${i}`} className="flex-1">
            {day.isToday && isHabitCompleted ? (
              <motion.div
                animate={{ scale: 1 }}
                className="w-full aspect-square rounded-full bg-green-400 flex items-center justify-center"
                initial={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <CheckCircle2 className="text-white" size={18} />
              </motion.div>
            ) : day.isToday ? (
              <motion.div
                animate={{ scale: 1 }}
                className="w-full aspect-square rounded-full border-2 border-blue-500"
                initial={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            ) : day.completed ? (
              <div className="w-full aspect-square rounded-full bg-green-400 flex items-center justify-center">
                <CheckCircle2 className="text-white" size={18} />
              </div>
            ) : (
              <div className="w-full aspect-square rounded-full bg-gray-200" />
            )}
            <p className="text-xs text-center mt-1 text-gray-600">{day.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

