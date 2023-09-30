import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/public/components/dashboard/dashboard.component';
import { UsersComponent } from 'src/app/public/components/users/users.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'users',   component: UsersComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
