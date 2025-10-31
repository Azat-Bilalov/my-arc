import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import ProfilePage from "./pages/ProfilePage";
import GoalPage from "./pages/GoalPage";
import HabitsPage from "./pages/HabitsPage/index";
import AIChatPage from "./pages/AIChatPage";

const App = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route element={<ProfilePage />} path="/" />
        <Route element={<GoalPage />} path="/goal" />
        <Route element={<HabitsPage />} path="/habits" />
        <Route element={<AIChatPage />} path="/chat" />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
