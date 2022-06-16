import { Component, OnInit, ViewChild } from '@angular/core';

import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

import { HomeService } from '../../api/home/home.service';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('swiper') swiper!: SwiperComponent;

  config: SwiperOptions = {
    pagination: {
      clickable: true,
      el: '.custom-pagination'
    }
  };

  bannerImages: Array<string> =  [
    'https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2815&w=1280&h=960',
    'https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2839&w=1280&h=960',
    'https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2887&w=1280&h=960',
    'https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2854&w=1280&h=960',
    'https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2834&w=1280&h=960',
  ];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getAllScenicSpots()
      .subscribe(res => console.log('scenic spot', res));
  }
}
