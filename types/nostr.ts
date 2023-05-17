import type { UnsignedEvent, Event } from "nostr-tools";
export interface NostrConfig {
  npub?: string;
  relays?: string[];
}

export default interface NostrExtensionProvider {
  nip04: Nip04;
  enabled: boolean;

  enable: () => Promise<{ enabled: boolean }>;
  getPublicKey: () => Promise<string>;
  signEvent: (event: UnsignedEvent) => Promise<Event>;
  signSchnorr: (sigHash: string) => Promise<Buffer>;
  getRelays: () => Promise<string[]>;
  execute: <T>(action: string, args?: Record<string, unknown>) => Promise<T>;
}

export interface Nip04 {
  provider: NostrExtensionProvider;
  encrypt: (peer: string, plaintext: string) => Promise<string>;
  decrypt: (peer: string, ciphertext: string) => Promise<string>;
}
