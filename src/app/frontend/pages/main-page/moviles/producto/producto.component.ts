import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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
      
    constructor(private mobilesService: MobileService, private route: ActivatedRoute, private nav: Router) {}
      
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
      if (this.amount <= 0) {
        window.alert("No se pueden escoger cantidades menores o iguales a 0");
        window.location.reload();

      } else if (this.checkStock()) {
        this.mobilesService.addProduct(this.mobiles, info)
        .subscribe(
          res => {
            console.log(res);
            window.alert("Producto agregado correctamente");
            this.nav.navigate(['/moviles']);

          },
          err => console.log(err)
        );

      } else {
        window.alert("No hay stock suficiente, especifique una cantidad menor o igual a " + this.mobiles.stock); 
        window.location.reload();
      }
    }

    checkStock() : boolean {
      return this.mobiles.stock >= this.amount;
    }
  }