import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, switchMap } from 'rxjs';
import { CharactersResponse } from '../types/characters';
import { Md5 } from 'ts-md5';
import { DbServiceService } from './db-service.service';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  constructor(private httpClient: HttpClient, private db: DbServiceService) {}

  ts = new Date().getTime().toString();
  publicKey = 'b9b36eacce7c01529d2eae44ab5e7da2';
  privateKey = 'd56469252d1a320510b9fed505b7960777b752ab';

  hash = Md5.hashStr(this.ts + this.privateKey + this.publicKey);

  readonly baseUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`;

  getCharacterByName(name: string): Observable<CharactersResponse> {
    const params = new HttpParams().set('name', name);

    return this.httpClient
      .get<CharactersResponse>(this.baseUrl, { params })
      .pipe(
        map((response) => response),
        switchMap((response) => {
          return from(this.db.characters.bulkPut(response.data.results)).pipe(
            map(() => response)
          );
        }),
        catchError((error) => {
          console.error('Erro na requisição:', error);
          throw error;
        })
      );
  }
}
