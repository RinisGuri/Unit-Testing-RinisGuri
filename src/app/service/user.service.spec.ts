import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../interface/user';
import { API_URL } from '../util/constant';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

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
    }
  ];

  const newUser: User = {
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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the user list and call the method', () => {
    spyOn(service, 'getUsers').and.callThrough();

    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUserList);
    });

    const req = httpMock.expectOne(`${API_URL}users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUserList);

    expect(service.getUsers).toHaveBeenCalled();
  });

  it('should create a user and call the method', () => {
    spyOn(service, 'createUser').and.callThrough();

    service.createUser(newUser).subscribe(user => {
      expect(user).toEqual(newUser);
    });

    const req = httpMock.expectOne(`${API_URL}users`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newUser);
    req.flush(newUser);

    expect(service.createUser).toHaveBeenCalledWith(newUser);
  });
});
