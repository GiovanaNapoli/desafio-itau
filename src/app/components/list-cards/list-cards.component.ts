import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
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
  @Input() hasBeenSearched!: boolean;
}
