import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram-banner',
  standalone: true,
  imports: [],
  templateUrl: './instagram-banner.html',
  styleUrl: './instagram-banner.css',
})
export class InstagramBanner {
  instagramHandle = '@solemarmodapraia';
  instagramUrl = 'https://instagram.com';
}