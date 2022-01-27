import { Injectable } from '@angular/core';
// Interfaces
import { SlideItem } from '../interfaces/slide-item';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  public slideImgs: SlideItem[] = [];

  constructor() {
    this.setArray();
  }

  private setArray() {
    this.slideImgs = [
      {
        id: '000001',
        name: 'img-1',
        url: 'https://res.cloudinary.com/newflare/image/upload/v1635288245/myf%20group%20spa/imagen_1_tmepmf.png'
      },
      {
        id: '000002',
        name: 'img-2',
        url: 'https://res.cloudinary.com/newflare/image/upload/v1635288245/myf%20group%20spa/imagen_1_tmepmf.png'
      },
      {
        id: '000003',
        name: 'img-3',
        url: 'https://res.cloudinary.com/newflare/image/upload/v1635288245/myf%20group%20spa/imagen_1_tmepmf.png'
      },
      {
        id: '000004',
        name: 'img-4',
        url: 'https://res.cloudinary.com/newflare/image/upload/v1635288245/myf%20group%20spa/imagen_1_tmepmf.png'
      },
    ];
  }
}
