import { useCallback, useState } from "react";
import Button from "../button";
import { nip19 } from "nostr-tools";
import NostrValidate from "../providers/github/NostrValidate";

export const NostrDetected = () => {
  const [npub, setNpub] = useState<string>("");

  const connect = useCallback(async () => {
    await window.nostr.enable();
    const publicKey = await window.nostr.getPublicKey();
    setNpub(nip19.npubEncode(publicKey));
  }, []);
  return npub ? (
    <NostrValidate npub={npub} />
  ) : (
    <div>
      <div>Conectate a NOSTR</div>
      <div>
        <Button label='Conectar' onClick={() => connect()} />
      </div>
    </div>
  );
};

export default NostrDetected;
