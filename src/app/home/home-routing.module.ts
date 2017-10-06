import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeliverBoyComponent } from './deliver-boy/deliver-boy.component';
import { AuditComponent } from './audit/audit.component';
import { AuthGuardService } from '../authentication/service/auth-guard.service';

const homeRoutes : Routes =[
	{
		path:'api',
		component: HomeComponent,
		canActivate:[AuthGuardService],
		children:[
			{
				path:'employee',
				component:EmployeeComponent,
				canActivateChild:[ AuthGuardService ]
			},
			{
				path:'deliveryBoy',
				component:DeliverBoyComponent,
				canActivateChild:[ AuthGuardService ]
			},
			{
				path:'audit',
				component:AuditComponent,
				canActivateChild:[ AuthGuardService ]
			}
		]
	}
];

@NgModule({
	imports:[RouterModule.forChild(homeRoutes)],
	exports:[RouterModule]	
})

export class HomeRoutingModule{ }