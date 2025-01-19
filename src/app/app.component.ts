import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ListCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desafio-itau';
}
