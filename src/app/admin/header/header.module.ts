import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {HeaderComponent} from './header.component';
import {SharedModule} from '../../shared/shared.module';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';

@NgModule({
  imports: [
      RouterModule,
    CommonModule,
      SharedModule
  ],
  declarations: [
    HeaderComponent,
    ToolbarUserComponent,
  ],
  exports: [HeaderComponent]

})
export class HeaderModule { }
