import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from "@ionic-native/device";

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private device: Device) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.log();
    });
  }


  log() {
    console.log("cordova:", this.device.cordova);
    console.log("isVirtual:", this.device.isVirtual);
    console.log("manufacturer:", this.device.manufacturer);
    console.log("model:", this.device.model);
    console.log("platform:", this.device.platform);
    console.log("serial:", this.device.serial);
    console.log("uuid:", this.device.uuid);
    console.log("version:", this.device.version);
  }
}

