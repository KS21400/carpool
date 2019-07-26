import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  obj: any;
  name;
  password;
  address;
  city;
  email;
  updateId: string;


  constructor( private route: ActivatedRoute,
    private router: Router,
    private us : UsersService,){
      this.updateId=route.snapshot.params['id'];
    } 

  ngOnInit() {
    this.obj = this.us.editData(this.updateId);
  }
  up_data(){
    this.route.params.subscribe(params=>{
      this.us.up_data(this.name,this.city,this.address,this.password,this.email,this.updateId);
      this.router.navigate(['card']);
    });
  }



}
