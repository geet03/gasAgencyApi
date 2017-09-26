import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

import { DeliveryBoyService } from './service/delivery-boy.service';
import { DeliveryBoy } from './deliver-boy.model';

@Component({
  selector: 'app-deliver-boy',
  templateUrl: './deliver-boy.component.html',
  styleUrls: ['./deliver-boy.component.css']
})
export class DeliverBoyComponent implements OnInit {
	deliveryBoyForm: FormGroup;
	formSubmitted = false;

	constructor(
		private deliverBoyService : DeliveryBoyService,
		private formBuilder : FormBuilder) { }

	ngOnInit() {
  		this.createForm();
  }

  createForm(){
  	this.deliveryBoyForm= this.formBuilder.group({
  		empid :'',
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
  		this.deliverBoyService.getDeliveryBoyByEmpid(empid)
  			.subscribe(deliverBoy => {
  				this.createFormWithDeafaultData(deliverBoy);
  			});
  }

  createFormWithDeafaultData(deliverBoy : DeliveryBoy){
  	this.deliveryBoyForm.patchValue({
  		empid : deliverBoy.empid,
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

  onFormSubmit(){
  	let data=JSON.stringify(this.deliveryBoyForm.value);
  	console.log('--------Delivery Boy In JSON');
  	console.log(data);
  	let deliverBoy : DeliveryBoy =this.deliveryBoyForm.value;
  	this.deliverBoyService.saveDeliveryBoy(deliverBoy);
  	this.formSubmitted=true;
  	this.deliveryBoyForm.reset();
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
