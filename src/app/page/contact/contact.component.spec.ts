import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ContactComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render name, email, phone, and comment inputs', () => {
    const nameInput = fixture.debugElement.query(By.css('input[id="name"]'));
    const emailInput = fixture.debugElement.query(By.css('input[id="email"]'));
    const phoneInput = fixture.debugElement.query(By.css('input[id="phone"]'));
    const commentTextarea = fixture.debugElement.query(By.css('textarea[id="comment"]'));

    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(phoneInput).toBeTruthy();
    expect(commentTextarea).toBeTruthy();
  });

  it('should disable the submit button when the form is invalid', () => {
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['phone'].setValue('');
    component.contactForm.controls['comment'].setValue('');
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should enable the submit button when the form is valid', () => {
    component.contactForm.controls['name'].setValue('John Doe');
    component.contactForm.controls['email'].setValue('john@example.com');
    component.contactForm.controls['phone'].setValue('123-456-7890');
    component.contactForm.controls['comment'].setValue('This is a comment.');
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(submitButton.disabled).toBeFalsy();
  });
});
