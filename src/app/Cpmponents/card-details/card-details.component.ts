import { Component } from '@angular/core';
import{ ActivatedRoute }from '@angular/router';
import { CardsComponent } from '../Cards/cards/cards.component';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  id=0;
  card:any;

  constructor(myRoute:ActivatedRoute,myService:CardsService){

    //specifying the id of each card
    this.id=myRoute.snapshot.params["id"];

    
    //using the service
    myService.getCardById(this.id).subscribe(
      {
        next:(data)=>{//console.log(data)
          this.card=data;
        },
        error:(err)=>{console.log(err)},
        complete:()=>{}
      }
    )
  }
}
