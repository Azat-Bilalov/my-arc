import { Check, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Chip } from "@/components/ui/Chip";

interface HabitItemProps {
  id: number;
  title: string;
  description: string;
  streak: number;
  completed: boolean;
  onToggle: (id: number) => void;
}

export const HabitItem = ({
  id,
  title,
  description,
  streak,
  completed,
  onToggle,
}: HabitItemProps) => {
  return (
    <button
      className="flex items-center justify-between w-full p-4 bg-white rounded-xl transition-all duration-200 hover:shadow-md"
      onClick={() => onToggle(id)}
    >
      <div className="flex items-center gap-3">
        {/* Custom Checkbox */}
        <div
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            completed
              ? "bg-green-500 border-green-500"
              : "border-gray-300 bg-gray-50"
          }`}
        >
          {completed ? (
            <motion.div
              animate={{ scale: 1 }}
              className="w-7 h-7 rounded-full bg-white flex items-center justify-center"
              initial={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
              <Check className="w-4 h-4 text-green-500" />
            </motion.div>
          ) : (
            <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white" />
          )}
        </div>

        <div className="text-left">
          <p className={`font-medium ${completed ? "text-gray-900" : ""}`}>
            {title}
          </p>
          <p
            className={`text-sm ${completed ? "text-gray-500" : "text-gray-600"}`}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Animated Streak Badge */}
      <AnimatePresence>
        {completed && streak > 0 && (
          <motion.div
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            initial={{ opacity: 0, scale: 0.5, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Chip
              color="warning"
              startContent={<Flame size={16} />}
              variant="flat"
            >
              {streak}
            </Chip>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
