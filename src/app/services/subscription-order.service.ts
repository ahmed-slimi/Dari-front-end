import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionOrderService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  UpgradePremium(id: number, value: any){
    return this.http.post('http://localhost:8082/dari/subscriptionorder/addpremium/' + `${id}`, value);
  }
}
