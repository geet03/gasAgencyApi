import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuardService } from './authentication/service/auth-guard.service';
 
const appRoutes: Routes = [
    {
        path:'api',
        //canActivate: [AuthGuardService],
        canActivate:[ AuthGuardService ],
        loadChildren: 'app/home/home.module#HomeModule',
        //data: { preload : true}        
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
];
 
export const routing = RouterModule.forRoot(appRoutes);


