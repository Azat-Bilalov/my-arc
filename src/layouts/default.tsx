import { useNavigate, useLocation } from "react-router-dom";
import { User, Target, CheckCircle2, MessageCircle } from "lucide-react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", icon: User, label: "Profile" },
    { path: "/goal", icon: Target, label: "Goal" },
    { path: "/habits", icon: CheckCircle2, label: "Habits" },
    { path: "/chat", icon: MessageCircle, label: "AI Chat" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;

    if (path !== "/" && location.pathname.startsWith(path)) return true;

    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="px-4">{children}</div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex items-center justify-around pt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <button
                key={item.path}
                className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${
                  active
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-600"
                }`}
                onClick={() => navigate(item.path)}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
        {/* <div
          className="h-1 bg-blue-600 transition-all duration-300 rounded-full mx-4"
          style={{
            width: `${100 / navItems.length}%`,
            transform: `translateX(${
              navItems.findIndex((item) => isActive(item.path)) * 100
            }%)`,
          }}
        /> */}
      </div>
    </div>
  );
}
