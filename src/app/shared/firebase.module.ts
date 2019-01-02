import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
    imports: [
        // AngularFireModule.initializeApp(  ''),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule
    ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ]
})
export class FireBaseComponentsModule {}
