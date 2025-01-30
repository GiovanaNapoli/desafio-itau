import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Characters } from '../types/characters';

@Injectable({
  providedIn: 'root',
})
export class DbServiceService extends Dexie {
  characters!: Dexie.Table<Characters, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      characters: '++id, name',
    });
  }
}
