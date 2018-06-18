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
        let uluru = {lat: -25.344, lng: 131.036};
        let map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
        new google.maps.Marker({position: uluru, map: map});
    }
}
