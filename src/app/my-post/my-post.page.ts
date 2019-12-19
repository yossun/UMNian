import { Component, OnInit } from '@angular/core';
import { MyPostService } from './my-post.service';
import { news } from '../news.model';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.page.html',
  styleUrls: ['./my-post.page.scss'],
})
export class MyPostPage implements OnInit {
  loadednews: news[];
  constructor(private mypostsvc : MyPostService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.mypostsvc.fetchPost().subscribe(
      (myposts) => {
      this.loadednews = myposts;
      }
    );
  }

  ionViewWillEnter(){
    
    this.mypostsvc.fetchPost().subscribe(
      (myposts) => {
      this.loadednews = myposts;
      console.log("test");
      }
      );
      
  }

}