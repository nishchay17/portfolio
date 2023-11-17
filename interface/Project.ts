export type Project = {
  id: number;
  name: string;
  description: string;
  image?: string;
  github?: string;
  live?: string;
  tag: string;
  bg?: string;
  createdOn?: string;
  additionalTags?: Readonly<string[]>;
};
