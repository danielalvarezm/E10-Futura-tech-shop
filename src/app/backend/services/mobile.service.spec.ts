import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Mobile } from '@app/frontend/_models/mobile';
import { User } from '@app/frontend/_models/user';

import { MobileService } from './mobile.service';

describe('MobileService', () => {
  let service: MobileService;
  let httpMock: HttpTestingController;

  const mobileTest: Mobile = {
    _id: '1',
    name: 'mobiletest',
    description: 'descriptiontest',
    screenSize: 10,
    camera: 'cameratest',
    cpu: 'cputest',
    battery: 5000,
    ram: 2,
    storage: 1,
    category: 'categorytest',
    brand: 'brandtest',
    OS: 'OStest',
    date: 'datetest',
    price: 100,
    stock: 6,
    mark: 5,
    image: 'imagetest'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MobileService]
    });
    service = TestBed.inject(MobileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('there must be a method called getMobiles', () => {
    let getMobiles = spyOn(service, 'getMobiles');
    service.getMobiles();
    expect(getMobiles).toHaveBeenCalled();
  });

  it('there must be a method called getMobileById', () => {
    let getMobileById = spyOn(service, 'getMobileById');
    service.getMobileById("");
    expect(getMobileById).toHaveBeenCalled();
  });

  it('there must be a method called addProduct', () => {
    let addProduct = spyOn(service, 'addProduct');
    service.addProduct(mobileTest, "");
    expect(addProduct).toHaveBeenCalled();
  });


  it('getMobiles should return the set of mobiles', () => {
    const mobileTestArray: Mobile[] = [mobileTest];

    service.getMobiles().subscribe(result => {
      expect(result.length).toBe(1); 
      expect(result).toEqual(mobileTestArray); 
    });

    const request = httpMock.expectOne(`${service.URL}/mobiles`);
    expect(request.request.method).toBe('GET');
    request.flush(mobileTestArray);
  });


  it('getMobileById should return the mobile with the specified id', () => {
    service.getMobileById(mobileTest._id).subscribe(result => {
      expect(result).toEqual(mobileTest); 
    });

    const request = httpMock.expectOne(`${service.URL}/mobiles/` + mobileTest._id);
    expect(request.request.method).toBe('GET');
    request.flush(mobileTest);
  });


  it('addProduct should insert a product into the user cart and return to this user', () => {
    const userTest: User = {
      id: '1',
      email: 'emailtest@gmail.com',
      password: 'passwordtest',
      firstName: 'firstNametest',
      lastName1: 'lastName1test',
      lastName2: 'lastName2test',
      admin: false,
      wallet: 100,
    };

    const info = {
      "email":  'emailtest@gmail.com',
      "amount": 2
    };

    service.addProduct(mobileTest, info).subscribe(result => {
      expect(result).toEqual(userTest); 
    });

    const request = httpMock.expectOne(`${service.URL}/mobilesToCart/` + mobileTest._id);
    expect(request.request.method).toBe('PUT');
    request.flush(userTest);
  });
});
