import {Component, OnInit} from '@angular/core';
import {IService} from '@paypal/services/api-interfaces/iservice';
import {PaypalService} from '@paypal/services/paypal.service';

@Component({
  selector: 'app-service-selection',
  templateUrl: './service-selection.component.html',
  styleUrls: ['./service-selection.component.scss'],
})
export class ServiceSelectionComponent implements OnInit {
  constructor(private paypalService: PaypalService) { }

  ngOnInit(): void {
  }

  public GetServices(): IService[] {
    return this.paypalService.GetAvaliableService();
  }
}
