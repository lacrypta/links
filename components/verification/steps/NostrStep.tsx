import { useVerification } from "../../../contexts/Verification";
import NostrExtensionProvider from "../../../types/nostr";
import NostrDetected from "../widgets/NostrDetected";

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
      <div>
        {window.nostr ? (
          <NostrDetected />
        ) : (
          <div>Necesitas configurar NOSTR</div>
        )}
      </div>
    </div>
  );
};

export default NostrStep;
