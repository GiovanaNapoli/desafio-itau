import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { MarvelApiService } from './services/marvel-api.service';
import { HeaderComponent } from './components/header/header.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { mockResponse } from './mocks/mocks';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let marvelApiService: jasmine.SpyObj<MarvelApiService>;

  beforeEach(async () => {
    const marvelApiServiceSpy = jasmine.createSpyObj('MarvelApiService', [
      'getCharacterByName',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HttpClientTestingModule,
        NgxSpinnerModule,
        HeaderComponent,
        ListCardsComponent,
      ],
      providers: [{ provide: MarvelApiService, useValue: marvelApiServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    marvelApiService = TestBed.inject(
      MarvelApiService
    ) as jasmine.SpyObj<MarvelApiService>;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set characters and hasBeenSearched on onSubmit', () => {
    marvelApiService.getCharacterByName.and.returnValue(of(mockResponse));

    const searchQuery = '3-D Man';
    component.onSubmit(searchQuery);

    expect(marvelApiService.getCharacterByName).toHaveBeenCalledWith(
      searchQuery
    );
    expect(component.characterSearched).toEqual(mockResponse.data.results);
    expect(component.hasBeenSearched).toBeTrue();
  });

  it('should pass correct data to ListCardsComponent', () => {
    const mockCharacters = mockResponse.data.results;
    component.characterSearched = mockCharacters;
    component.hasBeenSearched = true;

    fixture.detectChanges();

    const listCardsComponent = fixture.debugElement.query(
      (el) => el.componentInstance instanceof ListCardsComponent
    ).componentInstance as ListCardsComponent;

    expect(listCardsComponent.characters).toEqual(mockCharacters);
    expect(listCardsComponent.hasBeenSearched).toBeTrue();
  });

  it('should display the spinner during loading', () => {
    const spinnerElement =
      fixture.debugElement.nativeElement.querySelector('ngx-spinner');
    expect(spinnerElement).toBeTruthy();
  });
});
