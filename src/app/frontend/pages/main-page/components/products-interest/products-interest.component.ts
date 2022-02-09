import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { MobileService } from "@app/backend/services/mobile.service";
import { LaptopService } from "@app/backend/services/laptop.service";

@Component({
    selector: 'app-products-interest',
    templateUrl: './products-interest.component.html',
    styleUrls: ['./products-interest.component.css']
  })

  export class ProductsInterestComponent implements  OnInit{
      
    mobiles = [];
    laptops = [];
    constructor(private mobilesService: MobileService, private laptopsService: LaptopService) {}
      
    ngOnInit(): void {
        this.mobilesService.getMobiles().subscribe(res => { this.mobiles = res;    
          },
          err => console.log(err)
        );
        this.laptopsService.getLaptops().subscribe( res => {this.laptops = res;
          },
          err => console.log(err)
        );
      }  
  }