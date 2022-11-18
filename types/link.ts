export type LinkType =
  | "whatsapp"
  | "github"
  | "instagram"
  | "twitter"
  | "discord"
  | "telegram"
  | "url";

export interface ILink {
  type: LinkType;
  title: string;
  url: string;
}
