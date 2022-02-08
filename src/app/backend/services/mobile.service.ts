import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mobile } from '@app/frontend/_models/mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  public URL = 'http://10.6.129.122/api';

  constructor(private http: HttpClient) {}

  getMobiles() {
    return this.http.get<any>(this.URL + '/mobiles');
  }

  getMobileById(id: string) {
    return this.http.get<any>(this.URL + '/mobiles/' + id);
  }

  addProduct(mobile: Mobile, info) {
    return this.http.put<any>(this.URL + '/mobilesToCart/' + mobile._id, info);
  }
}
