// common UI types
export interface TextType {
  value: string;
  class?: string;
}

export interface IconType {
  class: string;
  background?: string;
}

export interface LinkType {
  href: string;
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
  title?: string;
}

export interface LocationPathType {
  protocol: string;
  host: string;
  origin: string;
  path: string;
}
