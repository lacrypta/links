import { useVerification } from "../../../contexts/Verification";
import NostrExtensionProvider from "../../../types/nostr";
import NostrDetected from "../widgets/NostrDetected";
import NostrNotDetected from "../widgets/NostrNotDetected";

// Global window.nostr
declare global {
  interface Window {
    nostr: NostrExtensionProvider;
  }
}

export const NostrStep = () => {
  const { otToken } = useVerification();
  return (
    <div>
      <div>
        <h2>Configuración de NOSTR</h2>
      </div>
      <div>{window.nostr ? <NostrDetected /> : <NostrNotDetected />}</div>
    </div>
  );
};

export default NostrStep;
