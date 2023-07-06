import { Component } from '@angular/core';
import{ ActivatedRoute }from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  id=0;
  constructor(myRoute:ActivatedRoute){
    //specifying the id of each card
    this.id=myRoute.snapshot.params["id"];
  }
}
