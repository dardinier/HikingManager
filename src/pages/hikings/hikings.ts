import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Hiking} from "../../model/hiking.model";

import { HikingDetail } from '../hiking-detail/hiking-detail';

@Component({
    selector: 'app-hikings',
    templateUrl: 'hikings.html'
})
export class Hikings {

    public hikings: Array<Hiking>;

    constructor(public navCtrl: NavController) {
        this.hikings = [
            new Hiking(
                0,
                'Randonnée de la montagne',
                '8 Rue de la France',
                'https://asal-lorient.fr/wp-content/uploads/2015/05/randonnee-pedestre-1024-1024x480.jpg',
                [{ latitude: 48.862725, longitude: 2.287592000000018}]
            ),
            new Hiking(
                1,
                'Randonnée du lac',
                '8 Rue de la Patrie',
                'http://www.chamina-voyages.com/img/gammes/accompagne-0.jpg',
                [{ latitude: 49.862725, longitude: 3.287592000000018}]
            ),
            new Hiking(
                2,
                'Randonnée de la vallée',
                '8 Boulevard de la Nation',
                'https://www.blog-lifestyle.fr/wp-content/uploads/2018/04/comment-preparer-sa-randonnee.jpg',
                [{ latitude: 36.862725, longitude: 8.287592000000018}]
            ),
        ];
    }

    onSelectHiking(hiking: Hiking) {
        this.navCtrl.push(HikingDetail, { hiking: hiking });
    }
}
