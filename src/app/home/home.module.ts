import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule }    from '@angular/forms';
import { MyDateRangePickerModule } from 'mydaterangepicker';

//material modules
import {MdButtonModule, MdCheckboxModule,MdInputModule,MdRadioModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import {MdAutocompleteModule,MdSelectModule,MdTabsModule,MdSlideToggleModule,MaterialModule,MdToolbarModule,MdTableModule} from '@angular/material';

import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeliverBoyComponent } from './deliver-boy/deliver-boy.component';
import { AuditComponent } from './audit/audit.component';
import { EmployeeService } from '../_services';
import { DeliveryBoyService } from './deliver-boy/service/delivery-boy.service';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyDateRangePickerModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdTableModule,
    MdInputModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdTabsModule,
    MdSlideToggleModule,
    MaterialModule,
    MdToolbarModule
  ],
  declarations: [
  	HomeComponent,
  	EmployeeComponent,
  	DeliverBoyComponent,
  	AuditComponent
  ],
  providers :[ EmployeeService, DeliveryBoyService ]
})
export class HomeModule { }
