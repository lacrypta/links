import NostrExtensionProvider from "../../../types/nostr";
import NostrDetected from "./NostrDetected";

// Global window.nostr
declare global {
  interface Window {
    nostr: NostrExtensionProvider;
  }
}

export const AlbyDetected = () => {
  return (
    <div>
      <div>
        <h2>Alby detectado</h2>
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

export default AlbyDetected;
