import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { noDashPipe } from '../pipes/no-dash.pipe';
import { yellowDirective } from '../directives/yellow.directive';
import { AuthService } from '../auth-user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

const func2 = (caller: string) => {
  return caller;
};

const newCaller = func2('О Компании');

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    DatePipe,
    yellowDirective,
    noDashPipe,
    MatButtonModule,
    MatTooltipModule,
  ],
})
export class headerComponent {
  isShowMan = true;

  headerItem1 = 'Главная';

  headerItem3 = 'Каталог';

  aboutCompany = newCaller;

  isShowCatalog = true;

  menuItems = ['Каталог', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

  isUppercase = true;

  changeMenuText() {
    this.menuItems = this.menuItems.map((item) =>
      this.isUppercase ? item.toLowerCase() : item.toUpperCase()
    );

    this.isUppercase = !this.isUppercase;
  }

  currentDate: Date = new Date();

  phone = '+7 (965) 084-29-29';
}
