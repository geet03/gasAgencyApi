import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
 
export class AppComponent { 

	constructor(private router: Router){}
	/*fun(){
     var currentRouteConfig = this.router.config.find(f=>f.path == this.router.url.substr(1));
     console.log('in the app currentRouteConfig--->'+JSON.stringify(currentRouteConfig));
   }*/
}
