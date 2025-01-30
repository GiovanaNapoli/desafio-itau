import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { By } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import {
  mockHulk,
  mockIronMan,
  mockSpiderMan,
  mockThor,
} from '../../mocks/mocks';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, MatExpansionModule, NgFor],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display character name and description', () => {
    component.character = mockSpiderMan;

    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toContain('Spider-Man');

    const descriptionElement = fixture.debugElement.query(By.css('p'));
    expect(descriptionElement.nativeElement.textContent).toContain(
      'Friendly neighborhood Spider-Man'
    );
  });

  it('should display the correct character image', () => {
    component.character = mockIronMan;

    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement.src).toBe(
      'http://example.com/ironman/standard_medium.png'
    );
  });

  it('should display a list of comics', () => {
    component.character = mockHulk;

    fixture.detectChanges();

    const comicsElements = fixture.debugElement.queryAll(
      By.css('.card__comic li')
    );
    expect(comicsElements.length).toBe(2);
    expect(comicsElements[0].nativeElement.textContent).toContain(
      'The Incredible Hulk #1'
    );
    expect(comicsElements[1].nativeElement.textContent).toContain(
      'Hulk vs Thor'
    );
  });

  it('should display a list of series', () => {
    component.character = mockThor;

    fixture.detectChanges();

    const seriesElements = fixture.debugElement.queryAll(
      By.css('.card__comic li')
    );
    expect(seriesElements.length).toBe(2);
    expect(seriesElements[0].nativeElement.textContent).toContain(
      'Thor: Ragnarok'
    );
    expect(seriesElements[1].nativeElement.textContent).toContain(
      'Thor: Love and Thunder'
    );
  });
});
