import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) {
  }

  getDetails(username, password){
// tslint:disable-next-line: max-line-length
  const headers = new HttpHeaders(
  {
       'Authorization':' Basic ' + btoa(`${username}:${password}`)
  });
    return this.http.get('http://ctbtbboss.southeastasia.cloudapp.azure.com/CTBTbBossWebAPIDemo/api/SaleDetails/GetSellerContractDetailsForSale?apitoken=BX3Z4zYLLa7MJYmg&estateMarkSet=all&saleYear=2018&saleNumber=050',{headers}).subscribe(data => {
      console.log(data);
    });
  }
}
