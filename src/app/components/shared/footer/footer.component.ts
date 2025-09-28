import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FooterSection {
  title: string;
  links: { name: string; url: string }[];
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email: string = '';
  
  contactInfo = {
    address: '37 Princess Road, London, Greater London NW1 8JR, UK'
  };

  footerSections: FooterSection[] = [
    {
      title: 'Categories',
      links: [
        { name: 'Laptops & Computers', url: '/categories/laptops-computers' },
        { name: 'Cameras & Photography', url: '/categories/cameras-photography' },
        { name: 'Smart Phones & Tablets', url: '/categories/smart-phones-tablets' },
        { name: 'Video Games & Consoles', url: '/categories/video-games-consoles' },
        { name: 'Waterproof Headphones', url: '/categories/waterproof-headphones' }
      ]
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'My Account', url: '/account' },
        { name: 'Discount', url: '/discount' },
        { name: 'Returns', url: '/returns' },
        { name: 'Orders History', url: '/orders-history' },
        { name: 'Order Tracking', url: '/order-tracking' }
      ]
    },
    {
      title: 'Pages',
      links: [
        { name: 'Blog', url: '/blog' },
        { name: 'Browse the Shop', url: '/shop' },
        { name: 'Category', url: '/category' },
        { name: 'Pre-Built Pages', url: '/pre-built-pages' },
        { name: 'Visual Composer Elements', url: '/visual-composer-elements' },
        { name: 'WooCommerce Pages', url: '/woocommerce-pages' }
      ]
    }
  ];

  socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'fab fa-facebook-f' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'fab fa-instagram' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' }
  ];

  onSignUp() {
    if (this.email) {
      console.log('Signing up with email:', this.email);
      // Implement signup logic here
      this.email = '';
    }
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
