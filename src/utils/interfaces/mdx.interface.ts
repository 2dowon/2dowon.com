export type TPostType = "writing" | "note";

export interface IMetadata {
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
  tag?: string;
}

export interface ITocItem {
  /** 헤딩 id를 가리키는 해시 링크 (e.g. `#제목`) */
  url: string;
  title: string;
  items?: ITocItem[];
}

export interface IPost {
  metadata: IMetadata;
  slug: string;
  content: string;
}
