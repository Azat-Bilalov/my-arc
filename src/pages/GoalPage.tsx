import { useState } from "react";
import {
  Target,
  Calendar,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";
import { Chip } from "@heroui/chip";

import { Header } from "./components/Header";

import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";

const GoalPage = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Morning Workout", completed: false },
    { id: 2, title: "Read for 20 minutes", completed: false },
    { id: 3, title: "Complete work project milestone", completed: false },
    { id: 4, title: "Evening meditation", completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasks = tasks.filter((t) => t.completed).length;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <div className="space-y-6">
      <Header
        description="Your transformation journey"
        icon={<Target className=" text-blue-400" size={36} />}
        title="Winter Goal"
      />
      {/* Winter Goal */}
      <Card className="shadow-none">
        <CardBody className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-1 h-12 bg-success rounded-full" />
                <button
                  className="flex-1"
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      Complete Winter Transformation
                    </h2>
                    {isAccordionOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    Achieve personal growth across all five key areas
                  </p>
                </button>
              </div>
            </div>

            <div className="pl-4">
              <Chip
                className="text-xs text-gray-400 mb-2"
                startContent={<Calendar className="mr-1" size={16} />}
                variant="light"
              >
                89 days left
              </Chip>
              <Progress className="h-2" color="success" value={progress} />
              <p className="text-sm text-gray-600 mt-1 text-right">
                {Math.round(progress)}%
              </p>
            </div>

            {/* Accordion Content - Today's Tasks */}
            {isAccordionOpen && (
              <div className="pl-4 pt-2 space-y-2 border-t border-gray-200 mt-4">
                <h4 className="font-medium text-sm text-gray-700 mb-3">
                  Today&apos;s Tasks ({completedTasks}/{tasks.length})
                </h4>
                {tasks.map((task) => (
                  <button
                    key={task.id}
                    className="flex items-center gap-3 p-1 hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => toggleTask(task.id)}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        task.completed
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300 hover:border-green-400"
                      }`}
                    >
                      {task.completed && (
                        <Check className="w-3.5 h-3.5 text-white" />
                      )}
                    </div>
                    <span
                      className={`flex-1 ${
                        task.completed
                          ? "text-gray-400 line-through"
                          : "text-gray-700"
                      }`}
                    >
                      {task.title}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </CardBody>
      </Card>

      {/* Progress Tips */}
      <Card className="shadow-none bg-blue-50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="text-yellow-500" size={24} />
            <h4 className="text-lg font-semibold">Progress Tips</h4>
          </div>
        </CardHeader>
        <CardBody className="space-y-2">
          <p className="text-sm text-gray-700">
            • Break down large goals into smaller, actionable tasks
          </p>
          <p className="text-sm text-gray-700">
            • Review your progress daily in the AI Chat
          </p>
          <p className="text-sm text-gray-700">
            • Celebrate small wins to stay motivated
          </p>
          <p className="text-sm text-gray-700">
            • Adjust deadlines if needed - consistency over perfection
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default GoalPage;
