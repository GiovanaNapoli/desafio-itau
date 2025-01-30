import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, ReactiveFormsModule, NgIcon],
      providers: [provideIcons({ featherSearch })],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with an empty search value', () => {
    expect(component.searchForm.value).toEqual({ search: '' });
  });

  it('should emit submitEvent when form is submitted', () => {
    spyOn(component.submitEvent, 'emit');

    const inputElement = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;
    const buttonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;

    inputElement.value = 'Spider-Man';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    buttonElement.click();

    expect(component.submitEvent.emit).toHaveBeenCalledWith('Spider-Man');
  });
});
