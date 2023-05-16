import { useEffect } from "react";
import NostrExtensionProvider from "../../../types/nostr";
import NostrDetected from "./NostrDetected";
import { useVerification } from "../../../contexts/Verification";
import NostrNotDetected from "./NostrNotDetected";

// Global window.nostr
declare global {
  interface Window {
    nostr: NostrExtensionProvider;
  }
}

export const AlbyDetected = () => {
  const { setStep } = useVerification();
  useEffect(() => {
    setStep(6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.nostr]);
  return (
    <div>
      <div>
        <h2>Alby detectado</h2>
      </div>
      <NostrNotDetected />
    </div>
  );
};

export default AlbyDetected;
