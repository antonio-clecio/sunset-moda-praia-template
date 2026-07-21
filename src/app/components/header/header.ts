import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) {}

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    this.router.navigate([], {
      queryParams: { search: value ? value : null }, // Se estiver vazio, remove o parâmetro da URL
      queryParamsHandling: 'merge', // Preserva o parâmetro de categoria se já existir
    });
  }
}
