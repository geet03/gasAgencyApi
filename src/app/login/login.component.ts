import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService } from '../_services/index';
import { AuthService } from '../authentication/service/auth.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    //loading = false;
    returnUrl: string;
    invalidCredentialMsg: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //console.log('returnUrl---->'+this.returnUrl);
    }
 
    login() {
        
        this.authService.isUserAuthenticated(this.model.username,this.model.password)
                        .subscribe(
                          authenticated=>{
                            console.log('authenticated--->'+JSON.stringify(authenticated));
                            if(authenticated){
                              let url=this.authService.getRedirectUrl();
                              console.log('inside login service');
                              //console.log('Redirected URL---->'+url);
                              this.router.navigate([ url] );
                            }else{
                              this.invalidCredentialMsg='Invalid credentials please try again';
                            }
                          }
                         );        
            }


}
        