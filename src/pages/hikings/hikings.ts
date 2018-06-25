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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id turpis ut lorem ultricies sollicitudin quis sit amet nisl. Duis blandit orci eget consequat laoreet. Ut in leo nec erat maximus mollis id ut quam. Phasellus augue arcu, gravida vel erat vel, consectetur dapibus leo. Aliquam aliquam faucibus turpis, ut finibus massa commodo in. Vivamus euismod, lectus nec efficitur malesuada, leo dui dignissim justo, sed maximus ligula velit at lorem. In hac habitasse platea dictumst. In interdum dui a auctor dignissim. Vivamus nulla nisl, malesuada a augue id, placerat imperdiet nulla.',
                '8 Rue de la France',
                4,
                '4:30:00',
                800,
                'https://asal-lorient.fr/wp-content/uploads/2015/05/randonnee-pedestre-1024-1024x480.jpg',
                [{ latitude: 48.862725, longitude: 2.287592000000018}]
            ),
            new Hiking(
                1,
                'Randonnée du lac',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id turpis ut lorem ultricies sollicitudin quis sit amet nisl. Duis blandit orci eget consequat laoreet. Ut in leo nec erat maximus mollis id ut quam. Phasellus augue arcu, gravida vel erat vel, consectetur dapibus leo. Aliquam aliquam faucibus turpis, ut finibus massa commodo in. Vivamus euismod, lectus nec efficitur malesuada, leo dui dignissim justo, sed maximus ligula velit at lorem. In hac habitasse platea dictumst. In interdum dui a auctor dignissim. Vivamus nulla nisl, malesuada a augue id, placerat imperdiet nulla.',
                '8 Rue de la Patrie',
                2,
                '3:00:00',
                50,
                'http://www.chamina-voyages.com/img/gammes/accompagne-0.jpg',
                [{ latitude: 49.862725, longitude: 3.287592000000018}]
            ),
            new Hiking(
                2,
                'Randonnée de la vallée',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id turpis ut lorem ultricies sollicitudin quis sit amet nisl. Duis blandit orci eget consequat laoreet. Ut in leo nec erat maximus mollis id ut quam. Phasellus augue arcu, gravida vel erat vel, consectetur dapibus leo. Aliquam aliquam faucibus turpis, ut finibus massa commodo in. Vivamus euismod, lectus nec efficitur malesuada, leo dui dignissim justo, sed maximus ligula velit at lorem. In hac habitasse platea dictumst. In interdum dui a auctor dignissim. Vivamus nulla nisl, malesuada a augue id, placerat imperdiet nulla.',
                '8 Boulevard de la Nation',
                5,
                '2:30:00',
                450,
                'https://www.blog-lifestyle.fr/wp-content/uploads/2018/04/comment-preparer-sa-randonnee.jpg',
                [{ latitude: 36.862725, longitude: 8.287592000000018}]
            ),
        ];
    }

    onSelectHiking(hiking: Hiking) {
        this.navCtrl.push(HikingDetail, { hiking: hiking });
    }
}
