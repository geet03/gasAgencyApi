import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

import { DeliveryBoyService } from './service/delivery-boy.service';
import { EmployeeService,AlertService } from '../../_services/index';
import { DeliveryBoy } from './deliver-boy.model';

@Component({
  selector: 'app-deliver-boy',
  templateUrl: './deliver-boy.component.html',
  styleUrls: ['./deliver-boy.component.css']
})
export class DeliverBoyComponent implements OnInit {
	deliveryBoyForm: FormGroup;
	formSubmitted = false;
	statusCode: number;
	allDBs: DeliveryBoy[];

	constructor(
		private deliverBoyService : DeliveryBoyService,
		private formBuilder : FormBuilder,
		private employeeService : EmployeeService) { }

	ngOnInit() {
  		this.createForm();
  }

  myEvent(empid:number){
  	this.employeeService.getEmployeeById(empid)
  						.subscribe(employee=>{
  							this.deliveryBoyForm.setValue({ firstName: employee.firstName, lastName: employee.lastName });
  						});				
  		console.log('event-----empid----->'+empid);
  }

  createForm(){
  	this.deliveryBoyForm= this.formBuilder.group({
  		id :'',
		firstName :'',
		lastName:'',
		noOfGivenCylinders:'',
		noOfGivenPipes :'',
		noOfGivenOvans :'',	
		noOfGivenRegulators:'',
		noOfReturnedCylinders:'',
		noOfReturnedPipes :'',
		noOfReturnedOvans :'',
		noOfReturnedRegulators:'',
		amountPaid:'',
		returnedAmount:'',
		personalExpenses:''
  	});
  }

  load(empid : string){
  		this.deliverBoyService.getArticleById(empid)
  			.subscribe(deliverBoy => {
  				this.createFormWithDeafaultData(deliverBoy);
  			});
  }

  createFormWithDeafaultData(deliverBoy : DeliveryBoy){
  	this.deliveryBoyForm.patchValue({
  		empid : deliverBoy.id,
		firstName : deliverBoy.firstName,
		lastName:deliverBoy.lastName,
		noOfGivenCylinders:deliverBoy.noOfGivenCylinders,
		noOfGivenPipes :deliverBoy.noOfGivenPipes,
		noOfGivenOvans : deliverBoy.noOfGivenOvans,
		noOfGivenRegulators:deliverBoy.noOfGivenRegulators,	
		noOfReturnedCylinders:deliverBoy.noOfReturnedCylinders,
		noOfReturnedPipes :deliverBoy.noOfReturnedPipes,
		noOfReturnedOvans :deliverBoy.noOfReturnedOvans,
		noOfReturnedRegulators:deliverBoy.noOfReturnedRegulators,
		amountPaid:deliverBoy.amountPaid,
		returnedAmount:deliverBoy.returnedAmount,
		personalExpenses:deliverBoy.personalExpenses
  	});
  }

  //Fetch all articles
   getAllArticles() {
        this.deliverBoyService.getAllArticles()
		  .subscribe(
                data => this.allDBs = data,
                errorCode =>  this.statusCode = errorCode);  

                console.log('allDBs'+this.allDBs); 
   }

   //Go back from update to create
   backToCreateArticle() {
      //this.articleIdToUpdate = null;
      this.deliveryBoyForm.reset();	  
	  //this.processValidation = false;
   }

  onFormSubmit(){

  	let deliverBoy = this.deliveryBoyForm.value;
  	//let data=JSON.stringify(this.deliveryBoyForm.value);
  	//console.log('--------Delivery Boy In JSON');
  	//console.log(data);
  	//let deliverBoy : DeliveryBoy =this.deliveryBoyForm.value;
  	//console.log('deliverBoy---->'+deliverBoy);
  	this.deliverBoyService.createArticle(deliverBoy)
			  .subscribe(successCode => {
					this.statusCode = successCode;
					this.getAllArticles();	
					this.backToCreateArticle();
				 },
				 errorCode => this.statusCode = errorCode
			   );
  	this.formSubmitted=true;
  	this.deliveryBoyForm.reset();
  }

  search(){
  	
  }

	noOfCylinders:number;
	noOfPipes : number;
	noOfOvans : number;
	noOfRegulators : number;
	cylinders=[
		{ value: 0 ,viewValue : 0 },
		{ value: 1 ,viewValue : 1 },
		{ value: 2 ,viewValue : 2 },
		{ value: 3 ,viewValue : 3 },
		{ value: 4 ,viewValue : 4 },
		{ value: 5 ,viewValue : 5 }
	];
	pipes=[
		{ value: 0 ,viewValue : 0 },
		{ value: 1 ,viewValue : 1 },
		{ value: 2 ,viewValue : 2 },
		{ value: 3 ,viewValue : 3 },
		{ value: 4 ,viewValue : 4 },
		{ value: 5 ,viewValue : 5 }
	];
	ovans=[
		{ value: 0 ,viewValue : 0 },
		{ value: 1 ,viewValue : 1 },
		{ value: 2 ,viewValue : 2 },
		{ value: 3 ,viewValue : 3 },
		{ value: 4 ,viewValue : 4 },
		{ value: 5 ,viewValue : 5 }
	];
	regulators=[
		{ value: 0 ,viewValue : 0 },
		{ value: 1 ,viewValue : 1 },
		{ value: 2 ,viewValue : 2 },
		{ value: 3 ,viewValue : 3 },
		{ value: 4 ,viewValue : 4 },
		{ value: 5 ,viewValue : 5 }
	];

  

}
