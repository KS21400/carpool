import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
arr;
  constructor(private us:UsersService) { }

  ngOnInit() {
    this.us.getData().subscribe(data=>{this.arr = data
    // console.log(data);
  console.log(this.arr)})
  }
  delData(id){
    this.us.delData(id);
  }

}
