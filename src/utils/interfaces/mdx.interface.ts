export type TPostType = "writing" | "note";

export interface IMetadata {
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
  tag?: string;
}

export interface IPost {
  metadata: IMetadata;
  slug: string;
  content: string;
}
