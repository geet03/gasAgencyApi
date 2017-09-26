/*import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { DeliverBoyComponent } from './deliver-boy/deliver-boy.component';
import { AuditComponent } from './audit/audit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: 'login', component: LoginComponent },
    //{ path: 'register', component: RegisterComponent },
    { path: 'login', component:LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },	
    { path : 'home' , component : HomeComponent,
    children:[
        { path : 'employee' , component : EmployeeComponent},
        { path : 'deliveryBoy' , component : DeliverBoyComponent},
        { path : 'audit' , component : AuditComponent},
        ]
    },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);*/

import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
 
const appRoutes: Routes = [
    {
        path:'api',
        loadChildren: 'app/home/home.module#HomeModule',
        data: { preload : true}
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {   path: 'register',
        component: RegisterComponent 
    },
    {
        path:'',
        redirectTo:'/api',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:''
    }

    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    
];
 
export const routing = RouterModule.forRoot(appRoutes);


