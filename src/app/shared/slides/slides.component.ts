import { Component, Input, OnInit } from '@angular/core';
import { SlideLayer } from './slides.model';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  @Input() slides: SlideLayer[] = []
  private _currentSlide: number = 0;
  get currentSlide(){ return this._currentSlide; }
  set currentSlide(value: number){
    if(value < 0) value = 0;
    if(value >= this.slides_length) value = this.slides_length - 1;
    this._currentSlide = value;
  }
  get slides_length(){ return this.slides.length }

  constructor() { }

  ngOnInit(): void {
  }

  nextImage(){
    this.currentSlide += 1;
  }

  prevImage(){
    this.currentSlide -= 1;
  }

}
