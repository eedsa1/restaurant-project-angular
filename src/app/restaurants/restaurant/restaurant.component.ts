import { Component, OnInit, Input } from '@angular/core';
import {Restaurant} from './restaurant.model'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  //styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  //we can use any, but it not define fairly the type that is represented
  @Input() restaurant: Restaurant 

  constructor() { }

  ngOnInit() {
  }

}
