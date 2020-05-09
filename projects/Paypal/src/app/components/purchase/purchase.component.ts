import {Component, OnInit} from '@angular/core';
import {PaypalService} from '@paypal/services/paypal.service';
import {ICartItem} from '@paypal/services/api-interfaces/icart-item';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  constructor(private paypalService: PaypalService, private dialogRef: MatDialogRef<PurchaseComponent>) { }

  public emailAddress: string;
  ngOnInit(): void {
  }

  public GetEmail(): string {
    const user = this.paypalService.GetUser();
    if (user === undefined) {
      return '';
    }
    return user.emailAddress;
  }

  public GetCart(): ICartItem[] {
    return this.paypalService.GetCart();
  }

  public GetTotal(): number {
    return this.paypalService.TotalCost();
  }
}
