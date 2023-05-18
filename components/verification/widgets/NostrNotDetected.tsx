import { useCallback, useState } from "react";
import NostrValidate from "../providers/github/NostrValidate";
import OpenAccountSettings from "../steps/NostrSteps/OpenAccountSettings";
import GenerateKeys from "../steps/NostrSteps/GenerateKeys";

export const NostrNotDetected = () => {
  const [npub, setNpub] = useState<string>("");
  const [nostrStep, setNostrStep] = useState<number>(0);

  const renderStepComponent = useCallback(() => {
    switch (nostrStep) {
      case 0:
        return (
          <OpenAccountSettings
            next={() => {
              setNostrStep(1);
            }}
          />
        );
      default:
        return <GenerateKeys />;
    }
  }, [nostrStep]);

  return npub ? <NostrValidate npub={npub} /> : renderStepComponent();
};

export default NostrNotDetected;
