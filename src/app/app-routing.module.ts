import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SendingComponent } from './sending/sending.component';
import { HomeComponent } from './home/home.component';
// import { PlaceorderComponent } from './placeorder/placeorder.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminplaceorderComponent } from './adminplaceorder/adminplaceorder.component';
import { ErrorComponent } from './error/error.component';
import { UserlogindashboardComponent } from './userlogindashboard/userlogindashboard.component';
import { SigupComponent } from './sigup/sigup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {path : 'login', component:LoginComponent},
  {path : 'sending', component:SendingComponent},
  {path : '', component:HomeComponent},
  // {path : 'placeorder', component:PlaceorderComponent},
  {path :'about', component:AboutComponent},
  {path : 'userdashboard', component:UserdashboardComponent},
  {path :'contact',component:ContactComponent},
  {path : 'userlogindashboard', component:UserlogindashboardComponent},
  {path : 'admindashboard', component:AdmindashboardComponent},
  {path : 'adminplaceorder', component:AdminplaceorderComponent},
  {path : 'signup', component:SigupComponent},
  {path : 'adminlogin', component:AdminloginComponent},
  {path : 'adminsignup', component:AdminsignupComponent},
  {path : '**', component:ErrorComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
