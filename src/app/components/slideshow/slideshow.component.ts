import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

// Services
import { SlideshowService } from 'src/app/services/slideshow.service';

// Swiper
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  public slideImgs = this.slideService.slideImgs;
  public swiper: Swiper;

  constructor( private slideService: SlideshowService ) { 
    this.swiper = new Swiper( '.swiper-container', {
      loop: true,
    });
  }

  ngAfterViewInit():void {
    this.swiper = new Swiper( '.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(): void {
  }

  onPrev() {
    this.swiper.slidePrev();
  }

  onNext() {
    this.swiper.slideNext();
  }

}
