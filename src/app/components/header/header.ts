import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  selectedCategory: string = 'todos';
  searchTerm: string = ''; // Guarda e sincroniza o texto do input
  isMenuOpen: boolean = false; // Controle de abertura do menu mobile (gaveta lateral)

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Escuta a URL: se a busca sumir da URL, limpa o campo de texto automaticamente
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['category'] || 'todos';
      this.searchTerm = params['search'] || '';
    });
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    this.router.navigate([], {
      queryParams: {
        search: value ? value : null,
        category: value ? 'todos' : this.selectedCategory,
      },
    });
  }

  /* --- MÉTODOS DO MENU HAMBÚRGUER (MOBILE) --- */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
