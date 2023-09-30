import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComponentsModule } from "../shared/components/components.module";
import { UsersComponent } from './components/users/users.component';


@NgModule({
    declarations: [
        PublicComponent,
        DashboardComponent,
        UsersComponent
    ],
    exports: [
        DashboardComponent,
        UsersComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        SharedModule,
        ComponentsModule
    ]
})
export class PublicModule { }
