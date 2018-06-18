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
            new Hiking(0, 'Randonnée de la montagne'),
            new Hiking(1, 'Randonnée du lac'),
            new Hiking(2, 'Randonnée du château')
        ];
    }

    onSelectHiking(hiking: Hiking) {
        this.navCtrl.push(HikingDetail, { hiking: hiking });
    }
}
