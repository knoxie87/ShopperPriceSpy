import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ShopperApiServiceService } from 'src/app/shopper-api-service.service';
import { Observable } from 'rxjs';
import { map } from 'cheerio/lib/api/traversing';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http: HttpClient, private shopperService: ShopperApiServiceService) { }
  url: any;
  food = "chocolate"
  ngOnInit(): void {
    this.searchFood();
    console.log(this.url)
  }

  searchFood(): void {
    this.shopperService.searchNewWordFood(this.food).subscribe(foodWebpageResults => {
      this.url = foodWebpageResults;
    })

  }

      // if(promise.finally)
    // const $ = cheerio.load(this.url);
    // cheerio.text($('body'));

}
