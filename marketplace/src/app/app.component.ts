import { Component, Output } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [
    `
      :host {
        background: rgba(0, 0, 0, 0.1);
      }

      app-sticky-header {
        z-index: 1000;
      }

      .content {
        padding-top: 150px;
      }

    `
  ]
})
export class AppComponent {
//  navMenuLoaded = 'login';
//  loginFlagSuccess = false;

  navMenuLoaded = 'home';
  loginFlagSuccess = true;
 
  onNavigate(navMenuApp : string){
    console.log(navMenuApp);
    this.navMenuLoaded = navMenuApp;
  
    if(navMenuApp=='login'){
      this.loginFlagSuccess = false;
      localStorage.removeItem('currentUser');
    }
    
  }
  onSuccessLogin(home : string){
    this.loginFlagSuccess = true;
    this.navMenuLoaded = 'home';
  }
}
