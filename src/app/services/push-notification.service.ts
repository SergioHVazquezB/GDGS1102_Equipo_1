// import { Injectable } from '@angular/core';
// // import core firebase client (required)
// import * as firebase from 'firebase';

// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// @Injectable({
//   providedIn: 'root'
// })
// export class PushNotificationService {
// massasingFirebase: firebase.messasing.Messasing;

//   constructor() {
//     firebase.initializeApp(environment.configfirebase);
//     this.massasingFirebase= firebase.massasing();
//    }
//    requestPermission=()=>{
//      return new Promise(async(resolve,reject)=>{
//        const per = await Notification.requestPermission();
//        if (per === "granted"){
//           const tokenFirebase= await this.massasingFirebase.getToken();
//           resolve(tokenFirebase);
//        }else{
//          reject(new Error("No se otorgaron los permisos"))
//        }
//      })
//    }

//    private messaginObservables = new Observable(observe=>{
//      this.massasingFirebase.onMessage((payload: unknown)=>{
//        observe.next(payload)
//      })
//    })

//    receiveMessage(){
//      return this.messaginObservables;
//    }
// }
