export interface Habit {
  id: number;
  title: string;
  description: string;
  streak: number;
  completed: boolean;
}

export interface DayProgress {
  date: number;
  dayName: string;
  completed: boolean;
  isFuture: boolean;
  isToday: boolean;
}

export const initialHabits: Habit[] = [
  {
    id: 1,
    title: "Morning Workout",
    description: "30 minutes of exercise",
    streak: 1,
    completed: false,
  },
  {
    id: 2,
    title: "Daily Reading",
    description: "Read for 20 minutes",
    streak: 1,
    completed: false,
  },
  {
    id: 3,
    title: "Evening Meditation",
    description: "10 minutes of mindfulness",
    streak: 0,
    completed: false,
  },
];

// Generate 7-day progress based on current date
export const generate7DayProgress = (habitId: number): DayProgress[] => {
  const today = new Date();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const progress: DayProgress[] = [];

  // Generate last 7 days
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);

    date.setDate(today.getDate() - i);

    const dayName = dayNames[date.getDay()];
    const dateNum = date.getDate();
    const isToday = i === 0;
    const isFuture = false;

    // Mock completion data (completed on some past days)
    let completed = false;

    if (habitId === 1 && i === 2) completed = true; // Morning Workout completed 2 days ago
    if (habitId === 2 && i === 2) completed = true; // Daily Reading completed 2 days ago

    progress.push({
      date: dateNum,
      dayName,
      completed,
      isFuture,
      isToday,
    });
  }

  return progress;
};

export const winterWisdom = {
  quote:
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  author: "Aristotle",
};
