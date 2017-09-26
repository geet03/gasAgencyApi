import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { DeliveryBoy } from '../deliver-boy.model';
import { ALL_DELIVERY_BOYS } from '../deliverBoy-data';

@Injectable()
export class DeliveryBoyService {

  constructor() { }

  getAllDeliveryBoys() : Observable<DeliveryBoy[]> {
  	return Observable.of(ALL_DELIVERY_BOYS);
  }

  getDeliveryBoyByEmpid(empid : string) : Observable<DeliveryBoy>{
  	return this.getAllDeliveryBoys()
  				.map(allDeliverBoys=> allDeliverBoys.find(deliveryBoy=> deliveryBoy.empid===empid));
  }

  saveDeliveryBoy(deliveryBoy:DeliveryBoy){

    var deliveryBoys: DeliveryBoy[]=ALL_DELIVERY_BOYS;

    deliveryBoys.push({'empid' : deliveryBoy.empid,
                             'firstName':deliveryBoy.firstName,
                              'lastName':deliveryBoy.lastName,
                              'noOfGivenCylinders':deliveryBoy.noOfGivenCylinders,
                              'noOfGivenPipes':deliveryBoy.noOfGivenOvans,
                              'noOfGivenOvans':deliveryBoy.noOfGivenPipes,
                              'noOfGivenRegulators':deliveryBoy.noOfGivenRegulators,
                              'noOfReturnedCylinders':deliveryBoy.noOfReturnedCylinders,
                              'noOfReturnedPipes':deliveryBoy.noOfReturnedPipes,
                              'noOfReturnedOvans':deliveryBoy.noOfReturnedOvans,
                              'noOfReturnedRegulators':deliveryBoy.noOfReturnedRegulators,
                              'amountPaid':deliveryBoy.amountPaid,
                              'returnedAmount':deliveryBoy.returnedAmount,
                              'personalExpenses':deliveryBoy.personalExpenses
});
  	console.log('------DeliveryBoy--------');
  	console.log('delivery Boy Name' + deliveryBoy.firstName);
  }

}
