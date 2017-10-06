import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService,AlertService } from '../../_services/index';

import { Employee } from './employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

empForm: FormGroup;
model: any = {};
loading = false;
statusCode: number;
allEmployees: Employee[];
empIdToUpdate = null;
processValidation = false;
requestProcessing = false;

  constructor(private formBuilder:FormBuilder,private employeeService: EmployeeService,private alertService: AlertService) { }

  ngOnInit() {
  	this.createEmpForm();
  }

  createEmpForm(){
    this.empForm=this.formBuilder.group({
     id: '',
     firstName:'',
     middleName:'',
     lastName:'',
     gender:'',
     dob:null,
     bloodGroup:'',
     email:'',
     aadharNo:'',
     doj:null,
     address:'',
     city:'',
     state:'',
     postalCode:''
    });
  }

  //Fetch all articles
   getAllEmployees() {
        this.employeeService.getAllEmployees()
    .subscribe(
                data => this.allEmployees = data,
                errorCode =>  this.statusCode = errorCode);   
   }

   //Go back from update to create
   backToCreateEmployee() {
      this.empIdToUpdate = null;
      //this.empForm.reset();    
      this.processValidation = false;
   }

   //Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
    this.requestProcessing = true;   
   }

  onFormSubmit() {
    this.processValidation = true;   
    if (this.empForm.invalid) {
         return; //Validation failed, exit from method.
    }   
    //Form is valid, now perform create or update
      this.preProcessConfigurations();
    let article = this.empForm.value;
    if (this.empIdToUpdate === null) {  
      //Generate article id then create article
        this.employeeService.getAllEmployees()
       .subscribe(articles => {
       
       //Generate article id   
       let maxIndex = articles.length - 1;
       let articleWithMaxIndex = articles[maxIndex];
       let articleId = articleWithMaxIndex.id + 1;
       article.id = articleId;
       
       //Create article
          this.employeeService.createEmployee(article)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllEmployees();  
          this.backToCreateEmployee();
         },
         errorCode => this.statusCode = errorCode
         );
     });    
    } else {  
         //Handle update article
        article.id = this.empIdToUpdate;     
      this.employeeService.updateEmployee(article)
        .subscribe(successCode => {
                this.statusCode = successCode;
            this.getAllEmployees();  
          this.backToCreateEmployee();
          },
            errorCode => this.statusCode = errorCode);    
    }
  }

  

}
