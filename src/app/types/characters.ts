export interface Characters {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: List;
  series: List;
  stories: List;
  events: List;
  urls: Url[];
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface List {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Item {
  resourceURI: string;
  name: string;
}

interface Url {
  type: string;
  url: string;
}
