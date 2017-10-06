import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { DeliveryBoy } from '../../deliver-boy/deliver-boy.model';

@Injectable()
export class AuditService {

  constructor(private http : Http) { }

}
