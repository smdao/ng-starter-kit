import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreUIComponent } from './core-ui.component';
import { CoreUIRoutingModule } from './core-ui-routing.module';


import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CoreUIModule } from '@app/`external-libs/core-ui.module';

const APP_CONTAINERS = [DefaultLayoutComponent];

@NgModule({
  imports: [
    CommonModule,
    CoreUIRoutingModule,
    CoreUIModule
  ],
  declarations: [CoreUIComponent, ...APP_CONTAINERS, P404Component, P500Component, LoginComponent, RegisterComponent]
})
export class CoreUISamplesModule {}
