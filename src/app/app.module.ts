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
import { AuthService } from './authentication/service/auth.service';
import { AuthGuardService } from './authentication/service/auth-guard.service';
import { AlertService, AuthenticationService, UserService,EmployeeService } from './_services/index';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { HomeModule } from './home/home.module';
import { routing } from './app.routing';
 
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
        //AuthGuard,
        AuthService,
        AuthGuardService,
        AlertService,
        //AuthenticationService,
        UserService,
        EmployeeService,
         
        //providers used to create fake backend
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
 
export class AppModule { 
    //console.log(''+this.routing);
}
