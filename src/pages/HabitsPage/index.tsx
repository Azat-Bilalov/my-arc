import { useState } from "react";
import { ListChecks } from "lucide-react";

import { Header } from "../components/Header";

import { HabitItem } from "./components/HabitItem";
import { HabitProgress } from "./components/HabitProgress";
import { StatsCard } from "./components/StatsCard";
import { WinterWisdom } from "./components/WinterWisdom";
import {
  initialHabits,
  generate7DayProgress,
  winterWisdom,
  Habit,
} from "./config";

const HabitsPage = () => {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  const toggleHabit = (id: number) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const newCompleted = !habit.completed;
          // Increase streak when completing, keep it when uncompleting
          const newStreak = newCompleted ? habit.streak + 1 : habit.streak;

          return { ...habit, completed: newCompleted, streak: newStreak };
        }

        return habit;
      })
    );
  };

  const completedToday = habits.filter((h) => h.completed).length;
  // Only count streaks for habits completed today
  const totalStreaks = habits
    .filter((h) => h.completed)
    .reduce((sum, h) => sum + h.streak, 0);

  return (
    <div className="space-y-6">
      <Header
        description="Build consistency, day by day"
        icon={<ListChecks className="text-blue-400" size={36} />}
        title="Daily Habits"
      >
        <StatsCard
          completedToday={completedToday}
          totalHabits={habits.length}
          totalStreaks={totalStreaks}
        />
      </Header>

      {/* Today's Habits */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Today&apos;s Habits</h2>
        <div className="space-y-3">
          {habits.map((habit) => (
            <HabitItem
              key={habit.id}
              completed={habit.completed}
              description={habit.description}
              id={habit.id}
              streak={habit.streak}
              title={habit.title}
              onToggle={toggleHabit}
            />
          ))}
        </div>
      </section>

      {/* 7-Day Progress */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7-Day Progress</h2>
        {habits.map((habit) => (
          <HabitProgress
            key={habit.id}
            habitName={habit.title}
            isHabitCompleted={habit.completed}
            progress={generate7DayProgress(habit.id)}
          />
        ))}
      </section>

      {/* Winter Wisdom */}
      <WinterWisdom author={winterWisdom.author} quote={winterWisdom.quote} />
    </div>
  );
};

export default HabitsPage;
