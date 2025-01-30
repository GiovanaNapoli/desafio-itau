import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCardsComponent } from './list-cards.component';
import { CardComponent } from '../card/card.component';
import { By } from '@angular/platform-browser';
import { Characters } from '../../types/characters';
import { NgFor } from '@angular/common';
import { mockResponse } from '../../mocks/mocks';

describe('ListCardsComponent', () => {
  let component: ListCardsComponent;
  let fixture: ComponentFixture<ListCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCardsComponent, CardComponent, NgFor],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCardsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of characters when hasBeenSearched is true and there are characters', () => {
    const mockCharacters: Characters[] = mockResponse.data.results;

    component.hasBeenSearched = true;
    component.characters = mockCharacters;

    fixture.detectChanges();

    const listElement = fixture.debugElement.query(By.css('.list-cards'));
    expect(listElement).toBeTruthy();

    const cardComponents = fixture.debugElement.queryAll(
      By.directive(CardComponent)
    );
    expect(cardComponents.length).toBe(1);
  });

  it('should display "Nenhum resultado encontrado" when search is done but no characters are found', () => {
    component.hasBeenSearched = true;
    component.characters = [];

    fixture.detectChanges();

    const notFoundMessage = fixture.debugElement.query(
      By.css('.list-cards__notSearched p')
    );
    expect(notFoundMessage.nativeElement.textContent).toContain(
      'Não foram encontrados resultados para sua pesquisa.'
    );
  });

  it('should display "Faça sua primeira pesquisa" when no search has been performed', () => {
    component.hasBeenSearched = false;

    fixture.detectChanges();

    const initialMessage = fixture.debugElement.query(
      By.css('.list-cards__notSearched p')
    );
    expect(initialMessage.nativeElement.textContent).toContain(
      'Você ainda não pesquisou nenhum heroi.'
    );
  });
});
