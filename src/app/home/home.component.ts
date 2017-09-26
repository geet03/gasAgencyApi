import { AfterViewInit,  Component,  ComponentFactoryResolver,  ViewChild,  ViewContainerRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { DeliverBoyComponent } from './deliver-boy/deliver-boy.component';
import { AuditComponent } from './audit/audit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
	routeLinks:any[];

  constructor(private router: Router) {
      this.routeLinks = [
    {label: 'Employee', link: 'employee'},
    {label: 'Deliver Boy', link: 'deliveryBoy'},
    {label: 'Audit', link: 'audit'}
    ];
   }
}

