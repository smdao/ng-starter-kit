import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/@core/shell/shell.service';
import { AccountComponent } from './account.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'account', component: AccountComponent, data: { title: marker('Account') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AccountRoutingModule {}
