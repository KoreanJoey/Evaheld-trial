import React from "react";
import ProgressOverviewCard from "../components/\bProgressOverviewCard";
import NavigationLayout from "../components/NavigationLayout";
import { assets } from "../assets/assets";

const StoryLegacyPage = () => {
  return (
    <div>
      <NavigationLayout title="Story & Legacy">
      <div className="grid grid-flow-row grid-cols-3 gap-4">
      <ProgressOverviewCard
        icon={assets.storyLegacy_icon}
        title="Personal Reflections"
        progress={6}
        total={12}
        buttonText="Continue"
      />
      <ProgressOverviewCard
        icon={assets.storyLegacy_icon}
        title="Personal Reflections"
        progress={6}
        total={12}
        buttonText="Continue"
      />
      <ProgressOverviewCard
        icon={assets.storyLegacy_icon}
        title="Personal Reflections"
        progress={6}
        total={12}
        buttonText="Continue"
      />
      <ProgressOverviewCard
        icon={assets.storyLegacy_icon}
        title="Personal Reflections"
        progress={6}
        total={12}
        buttonText="Continue"
      />
      <ProgressOverviewCard
        icon={assets.storyLegacy_icon}
        title="Personal Reflections"
        progress={6}
        total={12}
        buttonText="Continue"
      />
      <ProgressOverviewCard
        icon={assets.storyLegacy_icon}
        title="Personal Reflections"
        progress={6}
        total={12}
        buttonText="Continue"
      />
    </div>
      </NavigationLayout>
    </div>
  );
};

export default StoryLegacyPage;
