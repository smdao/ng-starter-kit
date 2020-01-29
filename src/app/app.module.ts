import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/features/`shared';
import { HomeModule } from './features/home/home.module';
import { ShellModule } from './features/`shell/shell.module';
import { AboutModule } from './features/about/about.module';
import { LoginModule } from './features/`auth/login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// External Libs
import { PrimeNgModule } from './`external-libs/prime-ng.module';
import { CoreUIModule } from './`external-libs/core-ui.module';
import { NgMaterialModule } from './`external-libs/material.module';

// Samples
import { CoreUISamplesModule } from './samples/core-ui/core-ui.module';

@NgModule({
  // Imports
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    LoginModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    // External Libs
    CoreUIModule,
    PrimeNgModule,
    NgMaterialModule,
    // Samples
    CoreUISamplesModule
  ],
  // Declarations
  declarations: [AppComponent],
  // Providers
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
