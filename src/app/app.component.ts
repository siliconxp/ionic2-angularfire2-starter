import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Splashscreen } from '@ionic-native/splashscreen';
import { StatusBar } from '@ionic-native/statusbar';
import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
