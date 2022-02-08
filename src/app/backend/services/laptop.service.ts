import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Laptop } from '@app/frontend/_models/laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  public URL = 'http://10.6.129.122/api';

  constructor(private http: HttpClient) {}

  getLaptops() {
    return this.http.get<any>(this.URL + '/laptops');
  }
}