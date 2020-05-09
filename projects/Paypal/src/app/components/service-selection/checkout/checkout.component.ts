import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PaypalService} from '@paypal/services/paypal.service';
import {ICartItem} from '@paypal/services/api-interfaces/icart-item';
import {Router} from '@angular/router';
import {PurchaseComponent} from '@paypal/components/purchase/purchase.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(private paypalService: PaypalService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public GetCart(): ICartItem[] {
    return this.paypalService.GetCart();
  }
  public RemoveFromCart(cartItem: ICartItem): void {
    this.paypalService.RemoveItemFromCart(cartItem);
  }

  public Total(): number {
    return this.paypalService.TotalCost();
  }

  public OnBuy(): void {
    const dialogRef = this.dialog.open(PurchaseComponent, {
      width: '75%',
      panelClass: 'paypal-purchase-dialog',
    });
  }
}
