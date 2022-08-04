import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementServiceService } from 'src/app/services/ManageService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ManagementServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  loginSubmit2(loginForm: any){
    if(loginForm.email === 'HR' && loginForm.password === 'HR') {
      this.service.setUserLoggedIn();
      this.router.navigate([""])
    }else{
      alert('Invalid credentials')
    }
  }

  checkLogin(){
    if(this.service.getUserStatus())
      this.service.setUserLoggedOut();
  }
  
}
