import React from "react";
import Topbar from "../components/Topbar";
import NavigationLayout from "../components/NavigationLayout";
import ProgressCard from "../components/ProgressCard";
import { assets } from "../assets/assets";

const LegacyPreservationPage = () => {
  return (
    <div>
      <NavigationLayout title="Legacy Preservation">
        <div className="grid grid-flow-row grid-cols-3 gap-4">
          <ProgressCard
            icon={assets.storyLegacy_icon}
            title="Story & Legacy"
            progress={2}
            total={6}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            buttonText="Continue"
          />
          <ProgressCard
            icon={assets.advancedCarePlanning_icon}
            title="Advanced Care Planning"
            progress={0}
            total={6}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            buttonText="Get Started"
          />
          <ProgressCard
            icon={assets.legal_icon}
            title="Legal"
            progress={6}
            total={6}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            buttonText="Completed"
          />
          <ProgressCard
            icon={assets.lifeMatters_icon}
            title="Life Matters"
            progress={6}
            total={6}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            buttonText="Completed"
          />
          <ProgressCard
            icon={assets.financial_icon}
            title="Financial"
            progress={0}
            total={6}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            buttonText="Get Started"
          />
          <ProgressCard
            icon={assets.funeralWishes_icon}
            title="Funeral Wishes"
            progress={2}
            total={6}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            buttonText="Continue"
          />
          <ProgressCard
            icon={assets.contact_icon}
            title="Contacts"
            progress={2}
            total={6}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            buttonText="Continue"
          />
          <ProgressCard
            icon={assets.lovedOnes_icon}
            title="Loved Ones"
            progress={6}
            total={6}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            buttonText="Completed"
          />
        </div>
      </NavigationLayout>
    </div>
  );
};

export default LegacyPreservationPage;
