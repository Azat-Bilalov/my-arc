import { Flame } from "lucide-react";

interface StatsCardProps {
  completedToday: number;
  totalHabits: number;
  totalStreaks: number;
}

export const StatsCard = ({
  completedToday,
  totalHabits,
  totalStreaks,
}: StatsCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 text-center px-4 bg-white rounded-xl p-4 shadow-sm">
        <p className="text-2xl font-bold text-gray-900">
          {completedToday}/{totalHabits}
        </p>
        <p className="text-xs text-gray-600 mt-1">Today</p>
      </div>
      <div className="flex-1 text-center px-4 bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-center gap-1">
          <Flame className="w-5 h-5 text-orange-500" />
          <p className="text-2xl font-bold text-gray-900">{totalStreaks}</p>
        </div>
        <p className="text-xs text-gray-600 mt-1">Total Streaks</p>
      </div>
    </div>
  );
};

