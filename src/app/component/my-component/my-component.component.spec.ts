import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title defined', () => {

    // arrange
    const title = component.title;

    // assert
    expect(title).toBeDefined();

  });

  it('should have value of title equal to TITLE', () => {
    // arrange
    const title = component.title;

    //assert
    expect(title).toEqual('TITLE');
  })

  it('should have a paragraph with id my-component', () => {
    // arrange
    const paragraphElement = element.querySelector('p[id="my-component"]');
    const paragraphElements = element.querySelectorAll('p');

    // assert
    expect(paragraphElement).toBeTruthy();
    expect(paragraphElements.length).toBeGreaterThan(1);
  })

  describe('getMyCity(city: string)', () => {

    it('should return true if city is equal to Prizren', () => {
      // arrange
      const myCity: boolean = component.getMyCity('Prizren');

      // assert
      expect(myCity).toEqual(true);
    })
  })


});
