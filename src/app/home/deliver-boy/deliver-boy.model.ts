export class DeliveryBoy
{
	constructor(
	public id : number,
	public firstName: string,
	public lastName: string,
	public noOfGivenCylinders: number,
	public noOfGivenPipes : number,
	public noOfGivenOvans : number,
	public noOfGivenRegulators: number,	
	public noOfReturnedCylinders: number,
	public noOfReturnedPipes : number,
	public noOfReturnedOvans : number,
	public noOfReturnedRegulators: number,
	public amountPaid: number,
	public returnedAmount: number,
	public personalExpenses: number	
		){}
}