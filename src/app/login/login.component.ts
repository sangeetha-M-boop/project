import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  reqpwd:any;
  user:any;
  constructor(private  router:Router){}//dependency injetion we can perform to rediret particualr page this is 1st step
  checkLogin(){
    this.reqpwd=this.username.slice(0,3)+"123";
    if(this.username=="admin"&&this.password==this.reqpwd){
      alert("welcome to admin dashboard");
      this.router.navigateByUrl("/admin")//redirect to admin page
    }
    else if(this.username=="user"&&this.password==this.reqpwd){
      alert("welcome to user dashboard")
      this.router.navigateByUrl("/user")//redirect to user page
    }
    else{
      alert("login failed");
    }
  }
}
