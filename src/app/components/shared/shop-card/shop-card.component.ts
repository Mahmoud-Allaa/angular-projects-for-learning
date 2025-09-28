import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './shop-card.component.html',
  styleUrl: './shop-card.component.scss'
})
export class ShopCardComponent {
  @Input() product: any;
}
