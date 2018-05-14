import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
    selector: 'page-main',
    templateUrl: 'main.html',
})
export class MainPage {
    root = DetailPage;
    constructor(public navCtrl: NavController) {
    }
}