import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-header',
  imports: [NgIcon],
  viewProviders: [provideIcons({ featherSearch })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
