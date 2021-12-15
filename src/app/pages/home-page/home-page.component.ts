import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as cheerio from 'cheerio';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url: any;
  food = "chocolate"
  ngOnInit(): void {
    this.searchFood();
    console.log(this.url)
  }

  searchFood(): Promise<any> {
    const cheerio = require('cheerio');
    const promise = new Promise((resolve,reject) => {
     this.url = this.http.get('https://www.newworld.co.nz/shop/Search?q='+ this.food).subscribe(res => {
        resolve(res);
      },err => {
        reject(err);
      });
    })
    return promise;
  }

      // if(promise.finally)
    // const $ = cheerio.load(this.url);
    // cheerio.text($('body'));

}
