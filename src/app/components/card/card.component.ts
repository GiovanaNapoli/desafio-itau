import { Component, Input } from '@angular/core';
import { Characters } from '../../types/characters';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() character!: Characters;
}
