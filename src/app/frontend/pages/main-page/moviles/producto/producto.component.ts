import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Mobile } from "@app/frontend/_models/mobile";
import { MobileService } from '../../../../../backend/services/mobile.service';

@Component({
    selector: 'producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.css']
  })

  export class ProductoComponent implements OnInit{

    mobiles = new Mobile("", "", "", 0, "", "", 0, 0, 0, "", "", "", "", 0, 0, 0, "");
    amount = 1;
      
    constructor(private mobilesService: MobileService, private route: ActivatedRoute) {}
      
    ngOnInit() {
      const product_id = this.route.snapshot.params['id'];
      this.getDetails(product_id);
    }

    getDetails(product_id) {
      this.mobilesService.getMobileById(product_id)
        .subscribe(
          res => {
            this.mobiles = res;
          },
          err => console.log(err)
        );
    }

    addProduct() {
      const info = {
        "email":  localStorage.getItem('email'),
        "amount": this.amount
      };
      this.mobilesService.addProduct(this.mobiles, info)
        .subscribe(
          res => {
            console.log(res);
          },
          err => console.log(err)
        );
    }
  }

  