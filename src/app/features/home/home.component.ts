import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { getStyle, rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public themeColors(): void {
    Array.from(document.querySelectorAll('.theme-color')).forEach(function(el) {
      const elem = document.getElementsByClassName(el.classList[0])[0];
      const background = getStyle('background-color', elem);

      const table = document.createElement('table');
      table.innerHTML = `
        <table class="w-100">
          <tr>
            <td class="text-muted">HEX:</td>
            <td class="font-weight-bold">${rgbToHex(background)}</td>
          </tr>
          <tr>
            <td class="text-muted">RGB:</td>
            <td class="font-weight-bold">${background}</td>
          </tr>
        </table>
      `;

      el.parentNode.appendChild(table);
    });
  }

  ngOnInit(): void {
    this.themeColors();
  }
}

// export class HomeComponent implements OnInit {
//   quote: string;
//   isLoading: boolean;

//   constructor(private quoteService: QuoteService) {}

//   ngOnInit() {
//     this.isLoading = true;
//     this.quoteService
//       .getRandomQuote({ category: 'dev' })
//       .pipe(
//         finalize(() => {
//           this.isLoading = false;
//         })
//       )
//       .subscribe((quote: string) => {
//         this.quote = quote;
//       });
//   }
// }
