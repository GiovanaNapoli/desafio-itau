import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let inputElement: DebugElement;
  let buttonElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, ReactiveFormsModule, NgIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    inputElement = fixture.debugElement.query(By.css('input'));
    buttonElement = fixture.debugElement.query(By.css('button'));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input field and a button', () => {
    expect(inputElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });

  it('should initialize the form with an empty value', () => {
    expect(component.searchForm.value.search).toBe('');
  });

  it('should display an error message when submitting an empty input', () => {
    component.searchForm.controls['search'].markAsTouched();
    fixture.detectChanges();

    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.query(By.css('small'));
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.nativeElement.textContent).toContain(
      'O campo de pesquisa é obrigatório!'
    );
  });

  it('should not show an error message initially', () => {
    const errorMessage = fixture.debugElement.query(By.css('small'));
    expect(errorMessage).toBeNull();
  });

  it('should emit the search value when submitting a valid input', () => {
    spyOn(component.submitEvent, 'emit');

    inputElement.nativeElement.value = 'Spider-Man';
    inputElement.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    buttonElement.triggerEventHandler('click', null);

    expect(component.submitEvent.emit).toHaveBeenCalledWith('Spider-Man');
  });

  it('should not emit an event if the input is invalid', () => {
    spyOn(component.submitEvent, 'emit');

    buttonElement.triggerEventHandler('click', null);

    expect(component.submitEvent.emit).not.toHaveBeenCalled();
  });
});
