import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'slick';

  slides = [
    { img: 'https://picsum.photos/200/300?random=1' },
    { img: 'https://picsum.photos/200/300?random=2' },
    { img: 'https://picsum.photos/200/300?random=3' },
    { img: 'https://picsum.photos/200/300?random=4' },
    { img: 'https://picsum.photos/200/300?random=5' },
    { img: 'https://picsum.photos/200/300?random=6' },
    { img: 'https://picsum.photos/200/300?random=7' },
    { img: 'https://picsum.photos/200/300?random=8' },
    { img: 'https://picsum.photos/200/300?random=9' },
  ];
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 2,
    // vertical: true,
    // verticalSwiping: true,
    slickGoTo: 3,
    lazyLoad: 'ondemand'
  };

  // vertical: true, verticalSwiping: true, swipeToSlide: true, swipe: true

  addSlide() {
    this.slides.push({ img: `https://picsum.photos/200/300?random=${(Math.random() * 100).toFixed(3)}` });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
