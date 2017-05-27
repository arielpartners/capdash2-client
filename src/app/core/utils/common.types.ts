// common UI types
export interface TextType {
  value: string;
  class?: string;
}

export interface LinkType {
  link: string;
  class?: string;
}

export interface ImageType {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
}

export interface ContainerType {
  id?: string;
  class?: string;
}

export interface ClassType {
  class: string;
}
