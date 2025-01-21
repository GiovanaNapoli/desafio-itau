import { Component, Input } from '@angular/core';
import { Characters } from '../../types/characters';
import { MatExpansionModule, MatAccordion } from '@angular/material/expansion';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [MatExpansionModule, MatAccordion, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() character!: Characters;
}
