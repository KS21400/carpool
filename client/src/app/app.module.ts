import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrainingComponent } from './training/training.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { UpdateComponent } from './update/update.component';
import { RouteFormComponent } from './route-form/route-form.component';
import { RideOrShareComponent } from './ride-or-share/ride-or-share.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrainingComponent,
    ServicesComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    
    FormComponent,
    CardComponent,
    UpdateComponent,
    RouteFormComponent,
    RideOrShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
