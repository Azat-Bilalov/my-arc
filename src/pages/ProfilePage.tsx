import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Snowflake,
  Calendar,
  Flame,
  TrendingUp,
  Medal,
  User,
} from "lucide-react";

import { radarData } from "../config/site";

import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { Chip } from "@/components/ui/Chip";

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      {/* Profile Header - Centralized */}
      <div className="pt-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <Avatar
            className="h-24 w-24"
            fallback={<User className="text-white" size={48} />}
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-600 mt-1">Winter Warrior</p>
          </div>
          <Chip
            className="bg-blue-50 hover:bg-blue-100 text-gray-600"
            startContent={<Calendar className="text-blue-400" size={16} />}
          >
            Day 0 of transformation
          </Chip>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="shadow-none">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-2">
            <TrendingUp className="text-blue-400" size={20} />
            <h2 className="text-xl font-semibold">Progress Overview</h2>
          </div>
        </CardHeader>
        <CardBody>
          <div className="h-64">
            <ResponsiveContainer height="100%" width="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <PolarRadiusAxis
                  axisLine={false}
                  domain={[0, 10]}
                  tick={false}
                />
                <Radar
                  dataKey="value"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  name="Progress"
                  stroke="#3b82f6"
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-gray-600">Fitness</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-xs text-gray-600">Career</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-xs text-gray-600">Self Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-xs text-gray-600">Mental Health</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-xs text-gray-600">Lifestyle</span>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Stats - Two blocks in a row */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="shadow-none">
          <CardBody className="pt-6 pb-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Medal
                className="text-blue-400 bg-blue-50 rounded-full p-2"
                size={48}
              />
              <p className="text-3xl font-bold text-gray-900">1/1</p>
              <p className="text-sm text-gray-600">Goals Completed</p>
            </div>
          </CardBody>
        </Card>

        <Card className="shadow-none">
          <CardBody className="pt-6 pb-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Flame
                className="text-orange-400 bg-orange-50 rounded-full p-2"
                size={48}
              />
              <p className="text-3xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-600">Total Streaks</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Winter Contract */}
      <Card className="bg-blue-400 text-white">
        <CardBody className="pt-6 pb-8 text-center relative">
          <Snowflake
            className="text-blue-50 bg-blue-400 rounded-full p-2 absolute top-0 left-0"
            size={48}
          />
          <h2 className="text-2xl font-bold mb-3">Winter Contract</h2>
          <p className="text-blue-100 px-4 mb-6 text-sm leading-relaxed">
            Commit to your transformation journey. Sign the Winter Contract to
            hold yourself accountable.
          </p>
          <Button
            className="bg-white text-blue-400 hover:bg-gray-100 font-semibold px-8 w-fit mx-auto"
            size="lg"
            variant="flat"
          >
            Sign Contract
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfilePage;
