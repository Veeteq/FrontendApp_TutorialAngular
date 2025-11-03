import { Component, signal } from '@angular/core';
import { PrimaryButton } from '../reusable/primary-button/primary-button';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = signal('My E-Commerce App');

  onBtnClicked() {
    console.log('Header button clicked');
  }
}
