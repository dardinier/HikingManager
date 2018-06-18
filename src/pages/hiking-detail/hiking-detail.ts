import {Component} from '@angular/core';
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

    ionViewDidLoad() {
        let begin = {lat: this.hiking.steps[0].latitude, lng: this.hiking.steps[0].longitude};
        let map = new google.maps.Map(document.getElementById('map'), {zoom: 17, center: begin});
        new google.maps.Marker({position: begin, map: map});
    }
}
