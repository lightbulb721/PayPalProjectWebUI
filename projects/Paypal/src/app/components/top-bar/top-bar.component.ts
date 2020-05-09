import {Component, OnInit} from '@angular/core';
import {PaypalService} from '@paypal/services/paypal.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor(private paypalService: PaypalService) { }

  ngOnInit(): void {
  }
  public IsLoggedIn(): boolean {
    return this.paypalService.IsLoggedIn();
  }
}
