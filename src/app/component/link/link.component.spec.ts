import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkComponent } from './link.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  template: `
    <app-link [link]="['/home']" type="primary">Home</app-link>
    <app-link [link]="['/contact']" type="secondary">Contact</app-link>
    <app-link [link]="['/about']" type="success">About</app-link>
  `
})
class TestHostComponent {}

describe('LinkComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let linkElements: HTMLElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LinkComponent], 
      declarations: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    linkElements = fixture.nativeElement.querySelectorAll('a');
  });

  it('should create the link component', () => {
    expect(linkElements.length).toBe(3);
    linkElements.forEach(link => expect(link).toBeTruthy());
  });

  it('should render the correct routerLink and variant for Home', () => {
    const homeLink = linkElements[0];
    expect(homeLink.getAttribute('ng-reflect-router-link')).toBe('/home');
    expect(homeLink.classList).toContain('bg-primary-500');
    expect(homeLink.classList).toContain('hover:bg-primary-800');
  });

  it('should render the correct routerLink and variant for Contact', () => {
    const contactLink = linkElements[1];
    expect(contactLink.getAttribute('ng-reflect-router-link')).toBe('/contact');
    expect(contactLink.classList).toContain('bg-secondary-500');
    expect(contactLink.classList).toContain('hover:bg-secondary-800');
  });

  it('should render the correct routerLink and variant for About', () => {
    const aboutLink = linkElements[2];
    expect(aboutLink.getAttribute('ng-reflect-router-link')).toBe('/about');
    expect(aboutLink.classList).toContain('bg-success-500');
    expect(aboutLink.classList).toContain('hover:bg-success-800');
  });

  it('should render the correct content', () => {
    const homeLink = linkElements[0];
    const contactLink = linkElements[1];
    const aboutLink = linkElements[2];
    expect(homeLink.textContent).toBe('Home');
    expect(contactLink.textContent).toBe('Contact');
    expect(aboutLink.textContent).toBe('About');
  });
});
