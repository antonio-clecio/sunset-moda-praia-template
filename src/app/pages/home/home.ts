import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  // Injeção de dependências
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private productService = inject(ProductService);

  // Estados dos produtos e paginação
  products: Product[] = [];
  visibleCount: number = 8;

  // Estados do Modal e Filtros
  selectedProduct: Product | null = null;
  currentModalImageIndex: number = 0;
  selectedCategory: string = 'todos';
  searchTerm: string = '';

  // 🔴 NOVO: Estado de seleção exclusivo visual para os Stories
  selectedStoryCategory: string = '';
  private isStoryClick: boolean = false; // Flag para identificar a origem do clique

  ngOnInit(): void {
    // Carrega os produtos do Service
    this.products = this.productService.getProducts();

    // Sincroniza filtros com a URL
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['category'] || 'todos';
      this.searchTerm = params['search'] || '';
      this.visibleCount = 8; // Reseta a paginação ao mudar filtro

      // 🔴 NOVO: Se a mudança na URL NÃO veio de um clique no Story (ex: veio do Header),
      // limpamos o destaque visual do Story
      if (!this.isStoryClick) {
        this.selectedStoryCategory = '';
      }
      this.isStoryClick = false; // Reseta a flag para o próximo evento

      this.cdr.detectChanges();
    });
  }

  // 🔴 ATUALIZADO: Método chamado ao clicar em um Story
  selectCategory(categorySlug: string): void {
    this.isStoryClick = true; // Avisa que o clique veio do Story

    // Alterna a seleção visual exclusiva do Story
    this.selectedStoryCategory = this.selectedStoryCategory === categorySlug ? '' : categorySlug;

    // Se clicar na categoria já ativa, volta para 'todos'
    const targetCategory = this.selectedCategory === categorySlug ? 'todos' : categorySlug;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: targetCategory, search: null }, // Remove o termo de busca da url
      queryParamsHandling: 'merge', // Mantém a busca textual caso exista
    });
  }

  // Controle do Modal
  openModal(product: Product): void {
    this.selectedProduct = product;
    this.currentModalImageIndex = 0;
  }

  setModalImage(index: number): void {
    this.currentModalImageIndex = index;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }

  // Gera o link do WhatsApp
  getWhatsAppLink(product: Product): string {
    const phoneNumber = '5561992890048';
    const message = `Olá! Gostaria de saber mais sobre o produto: *${product.title}* (${product.price})`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  private removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // Lista de produtos filtrados por categoria e busca
  get filteredProducts(): Product[] {
    return this.products.filter((product) => {
      const normalizedProdCat = this.removeAccents((product.category || '').toLowerCase());
      const normalizedSelectedCat = this.removeAccents((this.selectedCategory || '').toLowerCase());

      const matchesCategory =
        this.selectedCategory === 'todos' || normalizedProdCat === normalizedSelectedCat;

      const normalizedTitle = this.removeAccents(product.title.toLowerCase());
      const normalizedSearch = this.removeAccents(this.searchTerm.toLowerCase().trim());

      const matchesSearch = normalizedTitle.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }

  // Lista limitada pelo visibleCount para exibição na tela
  get displayedProducts(): Product[] {
    return this.filteredProducts.slice(0, this.visibleCount);
  }

  // Carrega mais 8 produtos
  loadMore(): void {
    this.visibleCount += 8;
  }
}
