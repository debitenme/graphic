import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
// import {FireBaseComponentsModule} from './shared/firebase.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      RouterModule.forRoot([]),
    BrowserModule,
    AdminModule,
    SharedModule,
      CoreModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
