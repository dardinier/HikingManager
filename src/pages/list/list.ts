import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Hiking} from "../../model/hiking.model";

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

    public list: Array<Hiking>;

    constructor(public navCtrl: NavController) {
        this.list = [
            new Hiking(0, 'Randonnée de la montagne'),
            new Hiking(1, 'Randonnée du lac')
        ];
    }
}
