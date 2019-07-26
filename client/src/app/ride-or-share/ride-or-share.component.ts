import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-ride-or-share',
  templateUrl: './ride-or-share.component.html',
  styleUrls: ['./ride-or-share.component.css']
})
export class RideOrShareComponent implements OnInit {
  arr;
  obj: any;
  work:string;
  contact:Number;
  Starting;
  Destination;
  updateId: string;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private us : UsersService,) { 
             this.updateId=route.snapshot.params['id'];

    }

    ngOnInit() {
      // this.objr = this.us.editData(this.updateId);
      this.us.getData().subscribe(data=>{this.arr = data
        // console.log(data);
      console.log(this.arr)})
      this.obj = this.us.editData(this.updateId);
    }
      delData(id){
        this.us.delData(id);
      }
    
      up_DataS(){
        this.route.params.subscribe(params=>{
        this.us.up_DataS(this.work = 'Want To Share',this.contact,this.Starting, this.Destination);
        
      });
      
      
    }

    up_DataR(){
      this.route.params.subscribe(params=>{
        this.us.up_DataR( this.work='Want To Ride',this.contact,this.Starting, this.Destination);
      });
      
    }

    up_data(){
      this.route.params.subscribe(params=>{
        this.us.up_data(this.work,this.contact,this.Starting, this.Destination,this.updateId);
        
      });
    }

  }
  
