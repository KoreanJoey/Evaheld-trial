import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import NavigationLayout from "./components/NavigationLayout";
import LegacyPreservationPage from "./pages/LegacyPreservationPage";
import StoryLegacyPage from "./pages/StoryLegacyPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/legacy-preservation"
          element={<LegacyPreservationPage />}
        />
        <Route path="/legacy-preservation/story-and-legacy" element={<StoryLegacyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
