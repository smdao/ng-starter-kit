import { Component, OnInit } from '@angular/core';
import { navItems } from '@app/providers/_nav';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})

export class ShellComponent implements OnInit {

  navItems = navItems;
  sidebarMinimized = true;
  element: HTMLElement = document.body;

  private changes: MutationObserver;

  /**
   *
   */
  constructor() {
    this.changes = new MutationObserver(mutations => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit() {}
}
