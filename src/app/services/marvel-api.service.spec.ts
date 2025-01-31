import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MarvelApiService } from './marvel-api.service';
import { DbServiceService } from './db-service.service';
import { of } from 'rxjs';
import { mockResponse } from '../mocks/mocks';

describe('MarvelApiService', () => {
  let service: MarvelApiService;
  let httpMock: HttpTestingController;
  let dbServiceSpy: jasmine.SpyObj<DbServiceService>;

  beforeEach(() => {
    dbServiceSpy = jasmine.createSpyObj('DbServiceService', ['characters']);
    dbServiceSpy.characters = {
      bulkPut: jasmine.createSpy('bulkPut').and.returnValue(of(null)),
    } as any;

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MarvelApiService,
        { provide: DbServiceService, useValue: dbServiceSpy },
      ],
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

  it('should fetch a character by name and store in IndexedDB', () => {
    service.getCharacterByName('3-D Man').subscribe((response) => {
      expect(response).toEqual(mockResponse);
      expect(dbServiceSpy.characters.bulkPut).toHaveBeenCalledWith(
        mockResponse.data.results
      );
    });

    const req = httpMock.expectOne((request) =>
      request.url.includes('gateway.marvel.com')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle API errors gracefully', () => {
    const errorMessage = 'Erro na API';

    spyOn(console, 'error');

    service.getCharacterByName('3-D Man').subscribe({
      error: (error) => {
        expect(error).toBeTruthy();
        expect(console.error).toHaveBeenCalledWith(
          'Erro na requisição:',
          jasmine.anything()
        );
      },
    });

    const req = httpMock.expectOne((request) =>
      request.url.includes('gateway.marvel.com')
    );
    req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
  });
});
