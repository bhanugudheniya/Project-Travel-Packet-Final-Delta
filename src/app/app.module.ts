import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SendingComponent } from './sending/sending.component';
import { HomeComponent } from './home/home.component';

import { UserdashboardComponent } from './userdashboard/userdashboard.component';
// import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ContactComponent } from './contact/contact.component';
import { SigupComponent } from './sigup/sigup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminplaceorderComponent } from './adminplaceorder/adminplaceorder.component';
import { ErrorComponent } from './error/error.component';
import { UserlogindashboardComponent } from './userlogindashboard/userlogindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SendingComponent,
    HomeComponent,
    
    UserdashboardComponent,
  
    // PlaceorderComponent,
  
    ContactComponent,
  
    SigupComponent,
  
    AdmindashboardComponent,
  
    AdminplaceorderComponent,
  
    ErrorComponent,
  
    UserlogindashboardComponent,
  
    AdminloginComponent,
  
    AdminsignupComponent,
    AboutComponent,

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
