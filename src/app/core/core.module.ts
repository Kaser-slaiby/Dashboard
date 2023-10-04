import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './guards/components/login/login.component';
import { RouterOutlet } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { RegisterComponent } from './guards/components/register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterOutlet
  ]
})
export class CoreModule { }
