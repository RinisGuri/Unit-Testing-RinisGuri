import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../service/user.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../interface/user';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;

  const mockUserList: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      website: 'example.com',
      address: {
        street: 'Street A',
        suite: 'Suite A',
        city: 'City A',
        zipcode: '12345',
        geo: {
          lat: '0.0000',
          lng: '0.0000'
        }
      },
      company: {
        name: 'Company A',
        catchPhrase: 'Catch Phrase A',
        bs: 'Business A'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '098-765-4321',
      website: 'example.org',
      address: {
        street: 'Street B',
        suite: 'Suite B',
        city: 'City B',
        zipcode: '67890',
        geo: {
          lat: '0.0000',
          lng: '0.0000'
        }
      },
      company: {
        name: 'Company B',
        catchPhrase: 'Catch Phrase B',
        bs: 'Business B'
      }
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HomeComponent
      ],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: () => of(mockUserList),
            createUser: (user: User) => of(user) 
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: {
                get: () => 6
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the user list', () => {
    spyOn(userService, 'getUsers').and.returnValue(of(mockUserList));
    component.getUserList();
    fixture.detectChanges();
    expect(component.userList).toEqual(mockUserList);
    expect(userService.getUsers).toHaveBeenCalled();
  });

  it('should render the user list', () => {
    component.userList = mockUserList;
    fixture.detectChanges();
    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(2); // Expect 2 rows in the table

    const firstRowCells = tableRows[0].queryAll(By.css('td'));
    expect(firstRowCells[0].nativeElement.textContent).toContain('1');
    expect(firstRowCells[1].nativeElement.textContent).toContain('John Doe');
    expect(firstRowCells[2].nativeElement.textContent).toContain('john@example.com');
    expect(firstRowCells[3].nativeElement.textContent).toContain('Company A');
    expect(firstRowCells[4].nativeElement.textContent).toContain('Street A, City A 12345');
  });

  it('should filter the user list based on search query', () => {
    component.userList = mockUserList;
    fixture.detectChanges();

    component.searchControl.setValue('Jane');
    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(1); // Expect 1 row in the table

    const firstRowCells = tableRows[0].queryAll(By.css('td'));
    expect(firstRowCells[0].nativeElement.textContent).toContain('2');
    expect(firstRowCells[1].nativeElement.textContent).toContain('Jane Smith');
  });

  it('should create a user', () => {
    const newUser: User = {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '111-222-3333',
      website: 'example.net',
      address: {
        street: 'Street C',
        suite: 'Suite C',
        city: 'City C',
        zipcode: '34567',
        geo: {
          lat: '0.0000',
          lng: '0.0000'
        }
      },
      company: {
        name: 'Company C',
        catchPhrase: 'Catch Phrase C',
        bs: 'Business C'
      }
    };

    spyOn(userService, 'createUser').and.returnValue(of(newUser));
    component.userList = [...mockUserList, newUser];
    fixture.detectChanges();

    expect(component.userList.length).toBe(3); 
    expect(component.userList[2]).toEqual(newUser);
  });
});
