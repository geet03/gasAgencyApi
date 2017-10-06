import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { DeliveryBoy } from '../deliver-boy.model';
//import { ALL_DELIVERY_BOYS } from '../deliverBoy-data';

@Injectable()
export class DeliveryBoyService {

    dbUrl = "http://localhost:3000/deliverBoys";

    constructor(private http: Http) { }

    //Create DeliveryBoy
    createArticle(deliveryBoy: DeliveryBoy):Observable<number> {
      console.log('Json data------>'+JSON.stringify(deliveryBoy));
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        console.log("inside service");
        return this.http.post(this.dbUrl, deliveryBoy, options)
               .map(success => success.status)
               .catch(this.handleError);
    }

    private extractData(res: Response) {
    let body = res.json();
    //console.log('body---->'+JSON.stringify(body));
        return body;
    }
    private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
    }

    //Fetch all DeliveryBoys
    getAllArticles(): Observable<DeliveryBoy[]> {
      console.log('inside service:----');
        return this.http.get(this.dbUrl)
       .map(this.extractData)
       .catch(this.handleError);
    }

    //Fetch DeliveryBoy by id
    getArticleById(empid: string): Observable<DeliveryBoy> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    console.log(this.dbUrl +"/"+ empid);
    return this.http.get(this.dbUrl +"/"+ empid)
       .map(this.extractData)
       .catch(this.handleError);
    }    
    //Update DeliveryBoy
    updateArticle(deliveryBoy: DeliveryBoy):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.dbUrl +"/"+ deliveryBoy.id, DeliveryBoy, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
    //Delete DeliveryBoy    
    deleteArticleById(empid: string): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.delete(this.dbUrl +"/"+ empid)
           .map(success => success.status)
               .catch(this.handleError);
    }    

  

}
