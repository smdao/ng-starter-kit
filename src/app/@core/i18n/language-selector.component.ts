import { Component, OnInit, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { I18nService } from './i18n.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  providers: [UpperCasePipe],
})
export class LanguageSelectorComponent implements OnInit {
  @Input() inNavbar = false;
  @Input() menuClass = '';

  constructor(private i18nService: I18nService, private uppercasePipe: UpperCasePipe) {}

  ngOnInit() {}

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    // return this.i18nService.language;
    return this.uppercasePipe.transform(this.i18nService.language);
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
