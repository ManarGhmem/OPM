import { Component, OnInit } from '@angular/core';
import { quotesOptions,quotes } from '../../../assets/carousel';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = quotes;
  quotesOptions=quotesOptions;
  constructor() { }

  ngOnInit(): void {

  }

}
