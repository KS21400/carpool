import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  obj: any;
  name;
  Starting;
  Destination: string;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private us : UsersService,){     
      //  this.updateId=route.snapshot.params['id'];
  }

  ngOnInit() {
 
   
  }
  up_DataS(){
    this.route.params.subscribe(params=>{
      this.us.up_DataS( this.name,this.Starting, this.Destination);
    });
  }

}
