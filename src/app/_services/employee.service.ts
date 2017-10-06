import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {} from '../_helpers/mock.employee';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router,ActivatedRoute } from '@angular/router';


import { Employee } from '../home/employee/employee';

@Injectable()
export class EmployeeService {

    //URL for CRUD operations
    empUrl = "http://localhost:3000/employees";

    constructor(private http: Http,private router:Router) { }



    //Create employee
    createEmployee(employee: Employee):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.empUrl, employee, options)
               .map(success => success.status)
               .catch(this.handleError);
    }

    private extractData(res: Response) {
    let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
    }

    //Fetch all employees
    getAllEmployees(): Observable<Employee[]> {
        return this.http.get(this.empUrl)
       .map(this.extractData)
       .catch(this.handleError);
    }

    //Fetch employee by id
    getEmployeeById(empid: number): Observable<Employee> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    console.log(this.empUrl +"/"+ empid);
    return this.http.get(this.empUrl +"/"+ empid)
       .map(this.extractData)
       .catch(this.handleError);
    }    
    //Update Employee
    updateEmployee(employee: Employee):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.empUrl +"/"+ employee.id, employee, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
    //Delete Employee    
    deleteEmployeeById(empid: number): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.delete(this.empUrl +"/"+ empid)
           .map(success => success.status)
               .catch(this.handleError);
    }    

    
}
