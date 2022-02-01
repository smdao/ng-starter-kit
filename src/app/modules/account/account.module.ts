import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@app/@libs/material.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    AccountRoutingModule],
  declarations: [AccountComponent],
})
export class AccountModule {}
