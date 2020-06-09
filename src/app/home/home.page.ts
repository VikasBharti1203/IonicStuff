import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('introSlides', { static: true }) introSlides: any;

  endReached: boolean = false;
  imgLoaded: boolean = false;
  currentPlant: string;

  sliderConfig = {
    centeredSlides: true,
    initialSlide: 0,
    speed: 400,
    pager: true
  };

  gallery: any = [
    { "name": "Plant Lirpsum", "image": "/assets/img/plantC.png", "price": 34 },
    { "name": "Plant Lirpsum", "image": "/assets/img/plantB.png", "price": 22 },
    { "name": "Plant Lirpsum", "image": "/assets/img/plantA.png", "price": 44 },
    { "name": "Plant Lirpsum", "image": "/assets/img/plantC.png", "price": 23 },
    { "name": "Plant Lirpsum", "image": "/assets/img/plantA.png", "price": 22 },
    { "name": "Plant Lirpsum", "image": "/assets/img/plantB.png", "price": 44 },
    { "name": "Plant Lirpsum", "image": "/assets/img/plantC.png", "price": 23 }
  ];

  slides = [
    { "image": "/assets/img/plant1.png", "title": "Potho Colgar" },
    { "image": "/assets/img/plant3.png", "title": "Fittonia Mini" },
    { "image": "/assets/img/plant4.png", "title": "Alocasia Calidora" },
    { "image": "/assets/img/plant2.png", "title": "Howea Forsteriana" }
  ];

  constructor() {

  }

  ngOnInit() {
    this.imgLoaded = false;
    this.currentPlant = this.slides[0].title;
  }

  slideDidChange() {
    this.introSlides.isEnd().then(res => {
      this.endReached = res;
    });

    //Update current slide index
    this.introSlides.currentSlide().then(res => {
      this.currentPlant = this.slides[res].title;
      console.log(res);
    })

  }

}
