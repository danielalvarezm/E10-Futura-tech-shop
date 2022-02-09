import { Component, OnInit } from "@angular/core";
import { LaptopService } from '../../../../backend/services/laptop.service';

@Component({
    selector: 'laptops',
    templateUrl: './laptops.component.html',
    styleUrls: ['./laptops.component.css']
  })

  export class LaptopsComponent implements OnInit {

    laptops = [];
      
    constructor(private laptopsService: LaptopService) {}

    ngOnInit(): void {
      this.laptopsService.getLaptops().subscribe(
        res => {
          this.laptops = res;
        }, err => console.log(err));
    }  
  }