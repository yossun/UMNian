import { Component } from '@angular/core';
import { news } from '../news.model';
import { HomeService } from '../home.service';
import { LoadingController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loadednews: news[];
  listedLoadednews: news[];

  constructor(private homeService: HomeService,
              private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadednews = this.homeService.newsList;
    this.listedLoadednews = this.loadednews.slice(1);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

  onAddnews(news: news,slidingHome) {
    this.homeService.addToMynews(news);
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Save Article...'
    })
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
      }, 1500);
    });
    slidingHome.closeOpened();
  }
}
