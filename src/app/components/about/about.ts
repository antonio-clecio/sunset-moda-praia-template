import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // Substitua pela URL ou caminho local da foto do ateliê/loja
  imagePath = 'assets/images/atelie.jpg';
}