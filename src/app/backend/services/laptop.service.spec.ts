import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Laptop } from '@app/frontend/_models/laptop';


import { LaptopService } from './laptop.service';

describe('LaptopService', () => {
  let service: LaptopService;
  let httpMock: HttpTestingController;

  const laptopTest: Laptop = {
    id: '1',
    name: 'nameTest',
    description: 'descriptionTest',
    screenSize: 100,
    camera: 'cameraTest',
    cpu: 'cpuTest',
    ram: 16,
    graphic_card: 'graphic_cardTest',
    storage: 1,
    category: 'categoryTest',
    brand: 'brandTest',
    OS: 'OSTest',
    date: 'dateTest',
    price: 100,
    stock: 100,
    mark: 5,
    image: 'imageTest'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LaptopService]
    });
    service = TestBed.inject(LaptopService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('there must be a method called getLaptops', () => {
    let getLaptops = spyOn(service, 'getLaptops');
    service.getLaptops();
    expect(getLaptops).toHaveBeenCalled();
  });

  it('getLaptops should return the set of laptops', () => {
    const laptopTestArray: Laptop[] = [laptopTest];

    service.getLaptops().subscribe(result => {
      expect(result.length).toBe(1); 
      expect(result).toEqual(laptopTestArray); 
    });

    const request = httpMock.expectOne(`${service.URL}/laptops`);

    expect(request.request.method).toBe('GET');

    request.flush(laptopTestArray);
  })
});
