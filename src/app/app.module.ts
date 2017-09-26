/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule,MdInputModule,MdRadioModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import {MdAutocompleteModule,MdSelectModule,MdTabsModule,MdSlideToggleModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';

import { EmployeeComponent } from './employee/employee.component';
import { DeliverBoyComponent } from './deliver-boy/deliver-boy.component';
import { AuditComponent } from './audit/audit.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthenticateService } from './login/authenticate.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DeliverBoyComponent,
    AuditComponent,
    AlertComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    MdInputModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }*/

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

//material modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule,MdInputModule,MdRadioModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
import {MdAutocompleteModule,MdSelectModule,MdTabsModule,MdSlideToggleModule,MaterialModule,MdToolbarModule} from '@angular/material';
 
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
import { AppComponent }  from './app.component';
//import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService,EmployeeService } from './_services/index';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { HomeModule } from './home/home.module';
import { routing } from './app.routing';
 
//import { EmployeeComponent } from './employee/employee.component';
//import { DeliverBoyComponent } from './deliver-boy/deliver-boy.component';
//import { AuditComponent } from './audit/audit.component';

 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HomeModule,
        routing,
        BrowserAnimationsModule,
        MaterialModule,MdButtonModule, MdCheckboxModule,MdInputModule,MdRadioModule,MdDatepickerModule,MdNativeDateModule,
        MdAutocompleteModule,MdSelectModule,MdTabsModule,MdSlideToggleModule,MdToolbarModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        //HomeComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        EmployeeService,
         
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    /*entryComponents: [
        EmployeeComponent,
        DeliverBoyComponent,
        AuditComponent
    ],*/
    bootstrap: [AppComponent]
})
 
export class AppModule { }
