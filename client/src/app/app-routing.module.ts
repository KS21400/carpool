import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { UpdateComponent } from './update/update.component';


import { RideOrShareComponent } from './ride-or-share/ride-or-share.component';


  const routes: Routes= [
    { path:'about', component:AboutComponent},
    {path: 'training', component:TrainingComponent},
    {path: 'login', component:LoginComponent},
    {path: 'team', component:TeamComponent},
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'form', component: FormComponent},
    {path:'card', component:CardComponent},
    {path:'update/:id', component:UpdateComponent},
    {path:'rideOrShare', component:RideOrShareComponent}


    
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
