import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MarvelApiService } from './marvel-api.service';
import { mockResponse } from '../mocks/mocks';

describe('MarvelApiService', () => {
  let service: MarvelApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarvelApiService],
    });

    service = TestBed.inject(MarvelApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch character by name', () => {
    const characterName = '3-D Man';

    service.getCharacterByName(characterName).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      (request) =>
        request.url.startsWith(
          'https://gateway.marvel.com:443/v1/public/characters'
        ) &&
        request.params.has('name') &&
        request.params.get('name') === characterName
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });

  it('should include correct query parameters in the request', () => {
    const characterName = 'Spider-Man';

    service.getCharacterByName(characterName).subscribe();

    const req = httpMock.expectOne((request) =>
      request.url.startsWith(
        'https://gateway.marvel.com:443/v1/public/characters'
      )
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params.has('name')).toBeTrue();
    expect(req.request.params.get('name')).toBe(characterName);
    expect(req.request.url).toContain(service.publicKey);
    expect(req.request.url).toContain(service.hash);
    expect(req.request.url).toContain(service.ts);

    req.flush({});
  });
});
