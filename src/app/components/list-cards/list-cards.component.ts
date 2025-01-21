import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MarvelApiService } from '../../services/marvel-api.service';
import { Characters } from '../../types/characters';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-cards',
  imports: [CardComponent, CardComponent, NgFor],
  templateUrl: './list-cards.component.html',
  styleUrl: './list-cards.component.scss',
})
export class ListCardsComponent {
  @Input() characters: Characters[] = [];

  constructor(private marvelApiService: MarvelApiService) {}

  ngOnInit(): void {
    // this.marvelApiService
    //   .getAllCharacters()
    //   .subscribe((data) => console.log(data));
    // // console.log('ngOnInit');
  }
}
