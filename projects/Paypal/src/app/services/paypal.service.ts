import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '@paypal/services/api-interfaces/iuser';
import {ICartItem} from '@paypal/services/api-interfaces/icart-item';
import {IService} from './api-interfaces/iservice';
import {environment} from 'projects/Paypal/src/environments/environment';

/**
 * paypal service class interacts with the restful api
 */
@Injectable({
  providedIn: 'root',
})
export class PaypalService {
  private user: IUser;
  private avaliableServices: IService[];
  private cart: ICartItem[] = [];

  /**
   * sets the current user/ adds a new user
   * will probably change to email, password
   * @param {string} emailAddress a user's email address
   * @param {string} firstName a user's first name
   * @param {string} lastName a user's last name
   */
  public SetUser(emailAddress: string, firstName: string, lastName: string): void {
    console.log(emailAddress);
    this.user = {emailAddress, firstName, lastName};
  }

  /**
   * get the current uesr
   * @return {IUser} the current user
   */
  public GetUser(): IUser {
    return this.user;
  }

  /**
   * is the  user logged in?
   * @return {boolean} true if the user is logged in
   */
  public IsLoggedIn(): boolean {
    return this.user !== undefined;
  }

  /**
   * gets the list of services a user can purchase
   * @return {IService} a list of services
   */
  public GetAvaliableService(): IService[] {
    if (this.avaliableServices === undefined) {
      this.httpClient.get(environment.apiEndpoint + 'services').subscribe((services: IService[]) => {
        this.avaliableServices = services;
      }, (error: any) => {
        // pass
      });
    }
    return this.avaliableServices;
  }

  public PurchaseCart(): boolean {
    let success: boolean = false;
    const services: IService[] = [];
    this.cart.forEach((element) => {
      services.push(
          this.avaliableServices.filter((x) => {
            return x.id == element.id;
          })[0],
      );
    });
    this.httpClient.post(environment.apiEndpoint + 'services', services).subscribe(() => {
      success = true;
    });
    return success;
  }

  /**
   * adds a service to the checkout cart
   * @param {IService} service item to add to the cart
   */
  public AddItemToCart(service: IService): void {
    const cartItem: ICartItem = {price: service.price, id: service.id, name: service.name};
    if (this.cart.filter((value: ICartItem) => value.id === cartItem.id).length > 0) {
      return;
    }
    this.cart.push(cartItem);
  }

  /**
   * removes and item from the cart
   * @param {ICartItem} cartItem item to remove from the cart
   */
  public RemoveItemFromCart(cartItem: ICartItem): void {
    const templist = [];
    while (this.cart.length > 0) {
      const item = this.cart.pop();
      if (item.id === cartItem.id) {
      } else {
        templist.push(item);
      }
    }
    this.cart = templist;
  }

  /**
   * gets a list of items in the user's cart
   * @return {ICartItem[]} a list of items in the cart
   */
  public GetCart(): ICartItem[] {
    return this.cart;
  }

  /**
   * calculated the total price of the items in the cart
   * @return {number} total cost of cart items
   */
  public TotalCost(): number {
    let total = 0;
    this.cart.forEach((element) => {
      total += element.price;
    });
    return total;
  }

  constructor(private httpClient: HttpClient) { }
}
