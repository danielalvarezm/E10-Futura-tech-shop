import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Mobile } from '@app/frontend/_models/mobile';
import { User } from '@app/frontend/_models/user';

import { ShoppingCartService } from './shoppingCart.service';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ShoppingCartService]
    });
    service = TestBed.inject(ShoppingCartService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  afterEach(() => {
    httpMock.verify();
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('there must be a method called getIdProducts', () => {
    let getIdProducts = spyOn(service, 'getIdProducts');
    service.getIdProducts('emailtest@gmail.com');
    expect(getIdProducts).toHaveBeenCalled();
  });


  it('there must be a method called getProduct', () => {
    let getProduct = spyOn(service, 'getProduct');
    service.getProduct('1');
    expect(getProduct).toHaveBeenCalled();
  });


  it('there must be a method called getUser', () => {
    let getUser = spyOn(service, 'getUser');
    service.getUser('emailtest@gmail.com');
    expect(getUser).toHaveBeenCalled();
  });


  it('there must be a method called updateUser', () => {
    let updateUser = spyOn(service, 'updateUser');
    service.updateUser('emailtest@gmail.com', 1);
    expect(updateUser).toHaveBeenCalled();
  });

  it('there must be a method called doPurchase', () => {
    let doPurchase = spyOn(service, 'doPurchase');
    service.doPurchase('emailtest@gmail.com', 1);
    expect(doPurchase).toHaveBeenCalled();
  });


  it('there must be a method called clearCart', () => {
    let clearCart = spyOn(service, 'clearCart');
    service.clearCart('emailtest@gmail.com');
    expect(clearCart).toHaveBeenCalled();
  });

  it('there must be a method called deleteProduct', () => {
    let deleteProduct = spyOn(service, 'deleteProduct');
    service.deleteProduct('1', 'emailtest@gmail.com');
    expect(deleteProduct).toHaveBeenCalled();
  });


  it('getIdProducts should return the user cart with the product ids', () => {
    const shoppingCartId = [{
      id: '1',
      amount: '2'
    }];

    service.getIdProducts("emailTest@gmail.com").subscribe(result => {
      expect(result.length).toBe(1); 
      expect(result).toEqual(shoppingCartId); 
    });

    const request = httpMock.expectOne(`${service.URL}/shoppingCartId/emailTest@gmail.com`);
    expect(request.request.method).toBe('GET');
    request.flush(shoppingCartId);
  });


  it('getProduct should return the product that was searched for by id', () => {
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

    service.getProduct(mobileTest._id).subscribe(result => {
      expect(result).toEqual(mobileTest); 
    });

    const request = httpMock.expectOne(`${service.URL}/shoppingCartProduct/` + mobileTest._id);
    expect(request.request.method).toBe('GET');
    request.flush(mobileTest);
  });


  it('getUser should return the user object searched by email', () => {
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

    service.getUser(userTest.email).subscribe(result => {
      expect(result).toEqual(userTest); 
    });

    const request = httpMock.expectOne(`${service.URL}/shoppingCartUser/` + userTest.email);
    expect(request.request.method).toBe('GET');
    request.flush(userTest);
  });


  it('updateUser successfully updates the user wallet', () => {
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

    service.updateUser(userTest.email, userTest.wallet).subscribe(result => {
      expect(result).toEqual(userTest); 
    });

    const request = httpMock.expectOne(`${service.URL}/updateWallet/` + userTest.email);
    expect(request.request.method).toBe('PUT');
    request.flush(userTest);
  });

  it('doPurchase  updates the user portfolio and the stock of the products', () => {
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

    const body = {"wallet": 100, "products": "testProduct"};

    service.doPurchase(userTest.email, body).subscribe(result => {
      expect(result).toEqual(userTest); 
    });

    const request = httpMock.expectOne(`${service.URL}/doPurchase/` + userTest.email);
    expect(request.request.method).toBe('PUT');
    request.flush(userTest);
  }); 


  it('clearCart clears the user shopping cart', () => {
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

    service.clearCart(userTest.email).subscribe(result => {
      expect(result).toEqual(userTest); 
    });

    const request = httpMock.expectOne(`${service.URL}/clearCart/` + userTest.email);
    expect(request.request.method).toBe('PUT');
    request.flush(userTest);
  });

  it('deleteProduct removes a product from the cart', () => {
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

    service.deleteProduct('1', userTest.email).subscribe(result => {
      expect(result).toEqual(userTest); 
    });

    const request = httpMock.expectOne(`${service.URL}/deleteProduct/1`);
    expect(request.request.method).toBe('PUT');
    request.flush(userTest);
  }); 
});