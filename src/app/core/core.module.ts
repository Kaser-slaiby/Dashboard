import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './guards/login/login.component';
import { RouterOutlet } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterOutlet
  ]
})
export class CoreModule { }
