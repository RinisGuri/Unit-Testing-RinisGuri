import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-button type="submit" variant="success" [disabled]="false">Click me</app-button>
  `
})
class TestHostComponent {}

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let buttonElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent], 
      declarations: [TestHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    buttonElement = fixture.nativeElement.querySelector('button');
  });

  it('should create the button component', () => {
    expect(buttonElement).toBeTruthy();
  });

  it('should render the correct type and variant', () => {
    expect(buttonElement.getAttribute('type')).toBe('submit');
    expect(buttonElement.classList).toContain('bg-success-500');
    expect(buttonElement.classList).toContain('hover:bg-success-800');
  });

  it('should render the correct content', () => {
    expect(buttonElement.textContent).toBe('Click me');
  });
});
