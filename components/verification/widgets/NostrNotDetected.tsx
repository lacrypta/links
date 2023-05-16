import { useState } from "react";
import NostrValidate from "../providers/github/NostrValidate";

export const NostrNotDetected = () => {
  const [npub, setNpub] = useState<string>("");

  return npub ? (
    <NostrValidate npub={npub} />
  ) : (
    <div className='flex flex-col'>Nostr Instructions</div>
  );
};

export default NostrNotDetected;
