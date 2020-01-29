import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { CoreUIModule } from '@app/`external-libs/core-ui.module';

@NgModule({
  imports: [CommonModule, RouterModule, CoreUIModule],
  declarations: [ShellComponent]
})
export class ShellModule {}
