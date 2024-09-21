export interface IMetadata {
  title: string;
  date: string;
  summary?: string;
  tag?: string;
}

export interface IBlogPost {
  metadata: IMetadata;
  year: string;
  slug: string;
  content: string;
}
