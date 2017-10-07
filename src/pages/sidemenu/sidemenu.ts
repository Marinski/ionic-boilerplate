import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon:string;
}

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
  
  rootPage = 'HomePage';

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:AngularFireAuth, private toast: ToastController) {
  }


  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome to APP_NAME, ${data.email}`,
          duration: 3000
        }).present();
      } else {
        this.toast.create({
          message: `Couldn't find authentication details`,
          duration: 3000
        }).present();
      }
    });
  }
}
