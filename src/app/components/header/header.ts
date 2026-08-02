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
  searchTerm: string = '';
  isMenuOpen: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
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

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  /* --- NOVO MÉTODOS DE NAVEGAÇÃO E SCROLL --- */
  selectCategory(category: string): void {
    // 1. Atualiza a URL
    this.router.navigate([], {
      queryParams: { category: category },
    });

    // 2. Fecha o menu mobile
    this.closeMenu();

    // 3. Rola com desconto do header sticky
    setTimeout(() => {
      const targetElement =
        document.getElementById(category) || document.getElementById('produtos');
      if (targetElement) {
        const headerOffset = 140; // Altura aproximada do seu header sticky em pixels
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 50);
  }
}
