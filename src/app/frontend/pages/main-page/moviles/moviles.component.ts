import { Component, OnInit } from "@angular/core";
import { MobileService } from '../../../../backend/services/mobile.service';

@Component({
    selector: 'moviles',
    templateUrl: './moviles.component.html',
    styleUrls: ['./moviles.component.css']
  })

  export class MovilesComponent implements OnInit {

    mobiles = [];
      
    constructor(private mobilesService: MobileService) {}

    ngOnInit(): void {
      this.mobilesService.getMobiles()
      .subscribe(
        res => {
          console.log(res)
          this.mobiles = res;
          
        },
        err => console.log(err)
      );
    }  
  }