import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeliverBoyComponent } from './deliver-boy/deliver-boy.component';
import { AuditComponent } from './audit/audit.component';

const homeRoutes : Routes =[
	{
		path:'api',
		component: HomeComponent,
		children:[
			{
				path:'employee',
				component:EmployeeComponent
			},
			{
				path:'deliveryBoy',
				component:DeliverBoyComponent
			},
			{
				path:'audit',
				component:AuditComponent
			}
		]
	}
];

@NgModule({
	imports:[RouterModule.forChild(homeRoutes)],
	exports:[RouterModule]	
})

export class HomeRoutingModule{ }