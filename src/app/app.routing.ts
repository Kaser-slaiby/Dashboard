import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  // {
  //   path: 'login', component: LoginComponent
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  // {
  //   path: '', component:UserProfileComponent
  // }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ///forRoot(//path app)
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
    // RouterModule.forRoot(),
    // HttpClientModule
  ],
  exports: [
  ],
  declarations: [
    // UserProfileComponent  
  ]
})
export class AppRoutingModule { }
