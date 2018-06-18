import { Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Hiking} from "../../model/hiking.model";

@Component({
    selector: 'page-detail',
    templateUrl: 'hiking-detail.html'
})

export class HikingDetail {

    public hiking: Hiking;

  constructor(public params: NavParams, public navCtrl: NavController) {
      this.hiking = this.params.get("hiking");
  }


}

