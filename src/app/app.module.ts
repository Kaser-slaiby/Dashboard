import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthService } from './Services/auth.service';
import { SignupComponent } from './components/signup/signup.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent,
    // path: 'user-profile', component:UserProfileComponent

  },

  {
    path: 'signup', component: SignupComponent
  }
];
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
