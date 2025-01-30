import { Characters, CharactersResponse } from '../types/characters';

export const mockResponse: CharactersResponse = {
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '1234567890',
  data: {
    offset: 0,
    limit: 10,
    total: 1,
    count: 1,
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description: 'He has superhuman agility and strength.',
        thumbnail: {
          path: 'http://example.com/image',
          extension: 'jpg',
        },

        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [],
          returned: 0,
        },
        series: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [],
          returned: 0,
        },
        urls: [],
      },
    ],
  },
};

export const mockSpiderMan: Characters = {
  id: 1,
  name: 'Spider-Man',
  description: 'Friendly neighborhood Spider-Man.',
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
  thumbnail: {
    path: 'http://example.com/spiderman',
    extension: 'jpg',
  },
  comics: {
    items: [
      {
        name: 'The Amazing Spider-Man #1',
        resourceURI: 'http://example.com/comics/1',
      },
    ],
    collectionURI: 'http://example.com/series',
    returned: 1,
    available: 1,
  },
  series: {
    items: [
      {
        name: 'Spider-Man: The Animated Series',
        resourceURI: 'http://example.com/series/1',
      },
    ],
    collectionURI: 'http://example.com/series',
    returned: 1,
    available: 1,
  },
  stories: { available: 0, collectionURI: '', items: [], returned: 0 },
  events: { available: 0, collectionURI: '', items: [], returned: 0 },
  urls: [],
};

export const mockIronMan: Characters = {
  id: 2,
  name: 'Iron Man',
  description: 'Genius billionaire playboy philanthropist.',
  resourceURI: '',
  thumbnail: {
    path: 'http://example.com/ironman',
    extension: 'png',
  },
  comics: { items: [], collectionURI: '', returned: 0, available: 0 },
  series: { items: [], collectionURI: '', returned: 0, available: 0 },
  stories: { items: [], collectionURI: '', returned: 0, available: 0 },
  events: { items: [], collectionURI: '', returned: 0, available: 0 },
  urls: [],
};

export const mockHulk: Characters = {
  id: 3,
  name: 'Hulk',
  description: 'Hulk Smash!',
  resourceURI: '',
  thumbnail: {
    path: 'http://example.com/hulk',
    extension: 'jpg',
  },
  comics: {
    items: [
      { name: 'The Incredible Hulk #1', resourceURI: '' },
      { name: 'Hulk vs Thor', resourceURI: '' },
    ],
    collectionURI: '',
    returned: 0,
    available: 0,
  },
  series: { items: [], collectionURI: '', returned: 0, available: 0 },
  stories: { items: [], collectionURI: '', returned: 0, available: 0 },
  events: { items: [], collectionURI: '', returned: 0, available: 0 },
  urls: [],
};

export const mockThor: Characters = {
  id: 4,
  name: 'Thor',
  description: 'God of Thunder.',
  resourceURI: '',
  thumbnail: {
    path: 'http://example.com/thor',
    extension: 'jpg',
  },
  comics: { items: [], collectionURI: '', returned: 0, available: 0 },
  series: {
    items: [
      { name: 'Thor: Ragnarok', resourceURI: '' },
      { name: 'Thor: Love and Thunder', resourceURI: '' },
    ],
    collectionURI: '',
    returned: 0,
    available: 0,
  },
  stories: { items: [], collectionURI: '', returned: 0, available: 0 },
  events: { items: [], collectionURI: '', returned: 0, available: 0 },
  urls: [],
};
