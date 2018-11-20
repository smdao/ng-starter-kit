import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { CoreUIModule } from '@app/`external-libs/core-ui.module';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule, CoreUIModule],
  declarations: [ShellComponent]
})
export class ShellModule {}
