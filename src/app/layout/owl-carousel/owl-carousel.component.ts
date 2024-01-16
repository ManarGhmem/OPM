import { Component, OnInit } from '@angular/core';
import { customOptions,slides } from '../../../assets/carousel';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.css']
})
export class OwlCarouselComponent implements OnInit {
 slides=slides
 customOptions=customOptions;


  constructor() { }



  ngOnInit(): void {
  }

}
