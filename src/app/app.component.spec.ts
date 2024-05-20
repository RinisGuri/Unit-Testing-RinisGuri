import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Tab} from "./interface/tab";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('tabList', () => {
    // arrange
    let tabList: Tab[];
    beforeEach(() => {
      // arrange
      tabList = component.tabList;
    })
    it('should be defined', () => {

      // assert
      expect(tabList).toBeDefined();
    })

    it('should have 3 elements', () => {

      // assert
      expect(tabList.length).toEqual(3);
    })
  })

});
