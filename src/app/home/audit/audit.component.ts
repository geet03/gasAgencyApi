import { Component, OnInit ,ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {IMyDrpOptions} from 'mydaterangepicker/dist/interfaces';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

	private myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd.mm.yyyy',
        height: '34px',
        width: '250px'
    };

    private myForm: FormGroup;

	displayedColumns = ['empid', 'name', 'givenAmount', 'returnedAmount','diff'];
  	dataSource : ExampleDataSource | null;

  	@ViewChild( MdPaginator ) paginator : MdPaginator;

  constructor(private formBuilder: FormBuilder) { }

  getlength(){
  	return data.length;
  }

  ngOnInit() {
  	console.log('onInit(): SampleDateRangePickerReactiveForms');
        this.myForm = this.formBuilder.group({
            //myDateRange: [null, Validators.required]   // not initial date range set
            myDateRange: [{beginDate: {year: 2018, month: 10, day: 9}, endDate: {year: 2018, month: 10, day: 19}}, Validators.required]   // this example is initialized to specific date range
        });

  	this.dataSource=new ExampleDataSource(this.paginator);
  }

  onSubmitReactiveForms(): void {
  		let beginDate,endDate: Date = new Date();
  		beginDate=this.myForm.controls['myDateRange'].value.beginDate;
  		endDate=this.myForm.controls['myDateRange'].value.endDate;
  		//console.log('begin date' + JSON.stringify(beginDate));
  		//console.log('end date '+ JSON.stringify(endDate));
  		console.log('begin date' + beginDate);
  		console.log('end date '+ endDate);
        console.log('Value: ', this.myForm.controls['myDateRange'].value, ' - Valid: ', this.myForm.controls['myDateRange'].valid,
                    ' - Dirty: ', this.myForm.controls['myDateRange'].dirty, ' - Touched: ', this.myForm.controls['myDateRange'].touched);
    }

    setDateRange(): void {
        // Set today range using the setValue function
        let date: Date = new Date();
        let year: number = date.getFullYear();
        let month: number = date.getMonth() + 1;
        let day: number = date.getDate();
        this.myForm.setValue({myDateRange: {beginDate: {year: year, month: month, day: day}, endDate: {year: year, month: month, day: day}}});
    }

    resetDateRange(): void {
        // Reset date picker to specific date range (today)
        let date: Date = new Date();
        let year: number = date.getFullYear();
        let month: number = date.getMonth() + 1;
        let day: number = date.getDate();
        this.myForm.reset({myDateRange: {beginDate: {year: year, month: month, day: day}, endDate: {year: year, month: month, day: day}}});
    }

    clearDateRange(): void {
        // Clear the date range using the setValue function
        this.myForm.setValue({myDateRange: null});
    }

}

export interface Element {
  empid: number;
  name: string;
  givenAmount: number;
  returnedAmount: number;
}

const data: Element[] = [
  {empid: 1, name: 'Hydrogen', givenAmount: 100, returnedAmount: 200},
  {empid: 2, name: 'Helium', givenAmount: 4.0026, returnedAmount: 200},
  {empid: 3, name: 'Lithium', givenAmount: 6.941, returnedAmount:  200},
  {empid: 4, name: 'Beryllium', givenAmount: 9.0122, returnedAmount:  200},
  {empid: 5, name: 'Boron', givenAmount: 10.811, returnedAmount:  200},
  {empid: 6, name: 'Carbon', givenAmount: 12.0107, returnedAmount:  200},
  {empid: 7, name: 'Nitrogen', givenAmount: 14.0067, returnedAmount: 200},
  {empid: 8, name: 'Oxygen', givenAmount: 15.9994, returnedAmount:  200},
  {empid: 9, name: 'Fluorine', givenAmount: 18.9984, returnedAmount:  200},
  {empid: 10, name: 'Neon', givenAmount: 20.1797, returnedAmount:  200},
  {empid: 11, name: 'Sodium', givenAmount: 22.9897, returnedAmount:  200},
  {empid: 12, name: 'Magnesium', givenAmount: 24.305, returnedAmount: 200},
  {empid: 13, name: 'Aluminum', givenAmount: 26.9815, returnedAmount:  200},
  {empid: 14, name: 'Silicon', givenAmount: 28.0855, returnedAmount:  200},
  {empid: 15, name: 'Phosphorus', givenAmount: 30.9738, returnedAmount:  200},
  {empid: 16, name: 'Sulfur', givenAmount: 32.065, returnedAmount:  200},
  {empid: 17, name: 'Chlorine', givenAmount: 35.453, returnedAmount:  200},
  {empid: 18, name: 'Argon', givenAmount: 39.948, returnedAmount:  200},
  {empid: 19, name: 'Potassium', givenAmount: 39.0983, returnedAmount: 200},
  {empid: 20, name: 'Calcium', givenAmount: 40.078, returnedAmount:  200}
];

export class ExampleDataSource extends DataSource<any> {

	dataChange: BehaviorSubject<Element[]> = new BehaviorSubject<Element[]>(data);
	get data(): Element[] { return this.dataChange.value; }

	constructor(private paginator : MdPaginator){super();}
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
  	const displayDataChanges=[
  		this.dataChange,
  		this.paginator.page
  	];

     return Observable.merge(...displayDataChanges)
    					.map(()=>{
    						const tempdata=this.data.slice();
    						const startIndex=this.paginator.pageIndex * this.paginator.pageSize;
    						return tempdata.splice(startIndex,this.paginator.pageSize);
    					});
	}

  disconnect() {}
}
