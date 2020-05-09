import {Component, OnInit} from '@angular/core';
import {PaypalService} from '@paypal/services/paypal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private isNewUser: boolean = false;
  public password: string = '';
  public reEnterPassword: string = '';
  public emailAddress: string = '';
  public firstName: string = '';
  public lastName: string = '';

  constructor(private paypalService: PaypalService, private router: Router) { }

  ngOnInit(): void {
  }

  public IsNewUser(): boolean {
    return this.isNewUser;
  }

  public OnSignUp(): void {
    this.isNewUser = true;
  }

  public OnSubmit(): void {
    this.paypalService.SetUser(this.emailAddress, this.firstName, this.lastName);
    this.router.navigate(['/']);
  }

  public DoPasswordsMatch(): boolean {
    return this.password !== '' && this.reEnterPassword === this.password;
  }
}
