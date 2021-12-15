import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopperApiServiceService {
  url: any;
  food = "chocolate"

  constructor(private http: HttpClient) { }

  
  searchNewWordFood(food: string ): Observable<any> {
    const promise = new Promise((resolve,reject) => {
     this.url = this.http.get('https://www.newworld.co.nz/shop/Search?q='+ food,{responseType: 'text'}).subscribe(res => {
        console.log(res)
        resolve(res);
      },err => {
        console.log(err)
        reject(err);
      });
    })
    return from(promise)
  }
  
}
