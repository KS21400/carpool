import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name;
  email;
  password;
  address;
  city;
  starting;
  Destination
  constructor(private us: UsersService) { }

  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.address,this.city,this.email,this.password,this.starting, this.Destination);
    console.log(this.name)

}
}