import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { Characters } from './types/characters';
import { MarvelApiService } from './services/marvel-api.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ListCardsComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desafio-itau';
  characterSearched: Characters[] = [];
  hasBeenSearched = false;

  constructor(private marvelApiService: MarvelApiService) {}

  onSubmit(search: string) {
    this.marvelApiService.getCharacterByName(search).subscribe((response) => {
      this.characterSearched = response.data.results;
      this.hasBeenSearched = true;
    });
  }
}
