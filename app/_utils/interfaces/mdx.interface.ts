export interface IMetadata {
  title: string;
  date: string;
  summary: string;
  image?: string;
}

export interface IBlogPost {
  metadata: IMetadata;
  year: string;
  slug: string;
  content: string;
}