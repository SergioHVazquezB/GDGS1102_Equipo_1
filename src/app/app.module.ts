import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HomeComponent } from './components/home/home.component';
import { SwPush} from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // readonly VAPID_PUBLIC_KEY = "BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo";

  // constructor(
  //     private swPush: SwPush,
  //     private newsletterService: NewsletterService) {}

  // subscribeToNotifications() {

  //     this.swPush.requestSubscription({
  //         serverPublicKey: this.VAPID_PUBLIC_KEY
  //     })
  //     .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
  //     .catch(err => console.error("Could not subscribe to notifications", err));
  // }
}
