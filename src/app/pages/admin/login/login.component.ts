import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginObj: any={
  username: '',
  password:''
};

constructor(private router: Router){}

onlogin(){
  if(this.loginObj.username=="admin" && this.loginObj.password=="123"){
    this.router.navigateByUrl('/products')
  }
  else{
    alert('Wrong Credentials')
  }
}
}
