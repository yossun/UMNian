import { Component, OnInit } from '@angular/core';
import { news } from '../../news.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MyPostService } from '../my-post.service';

@Component({
  selector: 'app-edit-mypost',
  templateUrl: './edit-mypost.page.html',
  styleUrls: ['./edit-mypost.page.scss'],
})

export class EditMypostPage implements OnInit {
  news: news;

  form: FormGroup;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private postSvc: MyPostService) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(3)]   
      }),
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(50)]
      }),
      location: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(50)]
      }),
      post: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(255)]
      }),
      imageUrl: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(20)]
      }),
    })

    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('mypostId')) {
        this.navCtrl.navigateBack('/my-post');
        return;
      }
      this.news = this.postSvc.getNews(paramMap.get('mypostId'));
    });
  }

  onSubmit() {
    this.postSvc.editNews(this.form.value,this.news.id);
    this.navCtrl.navigateBack('/my-post');
    console.log(this.form.value);
    }
  
  goBack() {
    this.navCtrl.navigateBack('/my-post' + this.news.id);
  }

}
