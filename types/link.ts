export type LinkType =
  | "whatsapp"
  | "github"
  | "instagram"
  | "youtube"
  | "twitter"
  | "discord"
  | "telegram"
  | "linkedin"
  | "url"
  | "voluntary";

export interface ILink {
  type: LinkType;
  title: string;
  url: string;
}
