import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService,AlertService } from '../../_services/index';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 /*employee : Employee={
     empid: any,
     firstName:'',
     middleName:'',
     lastName:'',
     gender:'',
     dob:new Date,
     bloodGroup:'',
     aadharNo:'',
     doj:new Date,
     address:'',
     city:'',
     state:'',
     postalCode:any

 };*/
	
model: any = {};
loading = false;
//empForm : FormGroup;
/*new Employee(1,
                  'Geetanjali',
                  'Anand',
                  'Khabale',
                  'female',
                  new Date("February 3, 2016"),
                  'O+',
                  111111222222,
                  new Date("March 3 2017"),
                  'gitanjalikhabale@gmail.com',
                  'Wai',
                  'Wai',
                  'Maharashtra',
                  412803
  );*/
  constructor(private employeeService: EmployeeService,private alertService: AlertService) { }

  ngOnInit() {
  	//this._service.checkCredentials();
  }

  //@ViewChild('myForm') NgForm myForm;

  submitForm() {
        this.loading = true;
        console.log(this.model);
        this.employeeService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    //this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

  /*submitForm(form: any) : void {
    this.loading = true;
    this.employeeService.create*/

    //console.log('you submitted value:', form);
 //alert(JSON.stringify(this.model));
 //}

  /*logout(){
  	this._service.logout();
  }

  get currentEmp()
  { return JSON.stringify(this.model) };*/

}
