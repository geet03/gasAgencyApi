import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { User } from './user';

const USERS=[
	new User(1,'admin','admin','ADMIN'),
	new User(2,'geet','wai412803','USER')
];

let usersObservable=Observable.of(USERS);

@Injectable()
export class AuthService {

	private redirectUrl : string='/';
	private loginUrl : string ='/login';
	private isLoggedIn:boolean=false;
	private loggedInUser : User;

	getAllUsers(): Observable<User[]>{
		return usersObservable;
	}

	isUserAuthenticated(username:string,password:string):Observable<boolean>{
		return this.getAllUsers()
					.map(users=>{
						let user=users.find(user=> (user.username===username) &&(user.password===password));
						console.log('inside auth service ---in map ----user---->'+JSON.stringify(user));
						if(user){
							this.isLoggedIn=true;
							this.loggedInUser=user;
							console.log('isLoggedIn--->'+this.isLoggedIn);
							console.log('loggedInUser---->'+JSON.stringify(this.loggedInUser));
						}
						else{
							this.isLoggedIn=false;
						}
						return this.isLoggedIn;
					});
	}

	isUserLoggedIn(): boolean {
		return this.isLoggedIn;
	}
	getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
	getLoginUrl(): string {
		return this.loginUrl;
	}
	getLoggedInUser(): User {
		return this.loggedInUser;
	}
	logoutUser(): void{
		this.isLoggedIn = false;
	}

  constructor() { }

}
