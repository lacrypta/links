import { useEffect, useState } from "react";
import NostrExtensionProvider from "../../../types/nostr";
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
    if (window.nostr) {
      setStep(7);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.nostr]);
  return <NostrNotDetected />;
};

export default AlbyDetected;
