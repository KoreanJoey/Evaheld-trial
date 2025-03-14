import React from "react";
import ProgressOverviewCard from "../components/ProgressOverviewCard";
import NavigationLayout from "../components/NavigationLayout";
import { assets } from "../assets/assets";
import NavigationRowTabs from "../components/NavigationRowTabs";

const tabs = [
  "Family History & Story",
  "Memoir & Truths",
  "Legacy Letter & Statements",
  "Memorialising a Loved One",
  "Milestone Messages",
  "My Own",
];

const StoryLegacyPage = () => {
  return (
    <div>
      <NavigationLayout title="Story & Legacy">
      <div className="flex justify-center items-start p-6">
        <NavigationRowTabs tabs={tabs} />
      </div>
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
