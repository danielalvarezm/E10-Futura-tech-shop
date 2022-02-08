import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public URL = 'http://10.6.129.122/api';

  constructor(private http: HttpClient) {}

  getIdProducts(email: string) {
    return this.http.get<any>(this.URL + '/shoppingCartId/' + email);
  }

  getProduct(idProduct) {
    return this.http.get<any>(this.URL + '/shoppingCartProduct/' + idProduct);
  }

  getUser(email) {
    return this.http.get<any>(this.URL + '/shoppingCartUser/' + email);
  }

  updateUser(email, wallet) {
    return this.http.put<any>(this.URL + '/updateWallet/' + email, {"wallet": wallet});
  }

  clearCart(email) {
    return this.http.put<any>(this.URL + '/clearCart/' + email, {"cart": ""});
  }
}
