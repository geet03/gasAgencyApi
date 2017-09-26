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

    private static handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            if (error.status === 404) {
                errMsg = `Resource ${error.url} was not found`;    
            } else {
                const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            }
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
    }

  constructor(private http: Http,private router:Router) { }

      createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post('/api/employee', employee)
            .map(response => response.json() )  //as Employee
            .catch(EmployeeService.handleError);
    }

    getAll() {
        return this.http.get('/api/employees/', this.token()).map((response: Response) => response.json());
    }
 
    getById(id: number) {
        return this.http.get('/api/employees/' + id, this.token()).map((response: Response) => response.json());
    }
 
    create(employee: Employee) {
        let currentUrl = this.router.url; 
        console.log("current url :"+currentUrl);
        console.log(currentUrl);
        console.log("inside service");
        //console.log(this.route.url);
        //console.log(this.http.post('/home', employee, this.token()).map((response: Response) => response.json()));
        //console.log("response");
        return this
                .http
                .post('/api/employee', employee, this.token())
                .map((response: Response) => response.json());

                }
 
    update(employee: Employee) {
        return this.http.put('/api/employees/' + employee.empid, employee, this.token()).map((response: Response) => response.json());
    }
 
    delete(id: number) {
        return this.http.delete('/api/employees/' + id, this.token()).map((response: Response) => response.json());
    }
 
    // private helper methods 
    private token(){
        let header=new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return options;
    }

}
