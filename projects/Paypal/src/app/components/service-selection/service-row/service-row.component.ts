import {Component, OnInit, Input} from '@angular/core';
import {IService} from '@paypal/services/api-interfaces/iservice';
import {PaypalService} from '@paypal/services/paypal.service';

@Component({
  selector: 'app-service-row',
  templateUrl: './service-row.component.html',
  styleUrls: ['./service-row.component.scss'],
})
export class ServiceRowComponent implements OnInit {
  private hovered: boolean = false;
  private red: number;
  private green: number;
  private blue: number;
  private isLight: boolean;

  @Input() service: IService;

  constructor(private paypalService: PaypalService) { }

  ngOnInit(): void {
    this.red = parseInt(this.service.color.substr(0, 2), 16);
    this.green = parseInt(this.service.color.substr(2, 2), 16);
    this.blue = parseInt(this.service.color.substr(4, 2), 16);
    this.isLight = this.red > 127 || this.blue > 127 || this.green > 127;
  }

  public Hovered(): boolean {
    return this.hovered;
  }

  public OnMouseEnter(): void {
    this.hovered = true;
  }

  public OnMouseExit(): void {
    this.hovered = false;
  }

  public GetBackgroundColor(): string {
    if (this.hovered) {
      const red = this.EnsureByte(this.red * (!this.isLight ? 1.5: .5));
      const green = this.EnsureByte(this.green * (!this.isLight ? 1.5: .5));
      const blue = this.EnsureByte(this.blue * (!this.isLight ? 1.5: .5));
      return '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0');
    } else {
      const red = this.red;
      const green = this.green;
      const blue = this.blue;
      return '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0');
    }
  }

  public GetForegroundTheme(): string {
    if ((this.isLight && !this.hovered) || (!this.isLight && this.hovered)) {
      return 'text-dark';
    } else {
      return 'text-light';
    }
  }

  public GetPrice() {
    const cost = this.service.price;
    return cost.toFixed(2);
  }

  private EnsureByte(num): number {
    const int = Math.round(num);
    if (int < 0) {
      return 0;
    } else if (int > 255) {
      return 255;
    }
    return int;
  }

  public AddToCart(): void {
    this.paypalService.AddItemToCart(this.service);
  }
}
