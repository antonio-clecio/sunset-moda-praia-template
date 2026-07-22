// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './home.html',
//   styleUrl: './home.css',
// })
// export class Home implements OnInit {
//   // selectedCategory: string = 'todos';
//   // searchTerm: string = '';
//   private route = inject(ActivatedRoute);
//   private cdr = inject(ChangeDetectorRef);
//   private productService = inject(ProductService);

//   products: Product[] = [];
//   visibleCount: number = 8;

//   selectedProduct: Product | null = null;
//   selectedCategory: string = 'todos';
//   searchTerm: string = ''

//   // Variable to control which product is open in the modal
//   // selectedProduct: Product | null = null;

//   // currentModalImageIndex = 0;

//   // visibleCount: number = 8;

//   // constructor(
//   //   private route: ActivatedRoute,
//   //   private cdr: ChangeDetectorRef,
//   // ) {}

//   ngOnInit(): void {
//     // this.route.queryParams.subscribe((params) => {
//     //   this.selectedCategory = params['category'] || 'todos';
//     //   this.searchTerm = params['search'] || '';

//     //   this.visibleCount = 8;

//     //   this.cdr.detectChanges();
//     // });
//     this.products = this.productService.getProducts();

//     this.route.queryParams.subscribe((params) => {
//       this.selectedCategory = params['category'] || 'todos';
//       this.searchTerm = params['search'] || '';
//       this.visibleCount = 8;
//       this.cdr.detectChanges();
//     });
//   }

//   // Métodos para controle do Modal
//   openModal(product: Product): void {
//     this.selectedProduct = product;
//     this.currentModalImageIndex = 0;
//   }

//   // Nova função para trocar a imagem ao clicar na miniatura
//   setModalImage(index: number): void {
//     this.currentModalImageIndex = index;
//   }

//   closeModal(): void {
//     this.selectedProduct = null;
//   }

//   // Gera o link direto do WhatsApp com o nome do produto
//   getWhatsAppLink(product: Product): string {
//     const phoneNumber = '5561992890048'; // Substitua pelo seu número real com DDD
//     const message = `Olá! Gostaria de saber mais sobre o produto: *${product.title}* (${product.price})`;
//     return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   }

//   private removeAccents(str: string): string {
//     return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
//   }

//   get filteredProducts() {
//     return this.products.filter((product) => {
//       const matchesCategory =
//         this.selectedCategory === 'todos' || product.category === this.selectedCategory;

//       const normalizedTitle = this.removeAccents(product.title.toLowerCase());
//       const normalizedSearch = this.removeAccents(this.searchTerm.toLowerCase().trim());

//       const matchesSearch = normalizedTitle.includes(normalizedSearch);

//       return matchesCategory && matchesSearch;
//     });
//   }

//   get displayedProducts(): Product[] {
//     return this.filteredProducts.slice(0, this.visibleCount);
//   }

//   // Aumenta em +8 os produtos visíveis ao clicar no botão
//   loadMore(): void {
//     this.visibleCount += 8;
//   }
// }
import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core'; // 👈 'inject' adicionado aqui
import { ActivatedRoute } from '@angular/router';
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
  private cdr = inject(ChangeDetectorRef);
  private productService = inject(ProductService);

  // Estados dos produtos e paginação
  products: Product[] = [];
  visibleCount: number = 8;

  // Estados do Modal e Filtros
  selectedProduct: Product | null = null;
  currentModalImageIndex: number = 0; // 👈 Descomentado para o modal funcionar
  selectedCategory: string = 'todos';
  searchTerm: string = '';

  ngOnInit(): void {
    // Carrega os produtos do Service
    this.products = this.productService.getProducts();

    // Sincroniza filtros com a URL
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['category'] || 'todos';
      this.searchTerm = params['search'] || '';
      this.visibleCount = 8; // Reseta a paginação ao mudar filtro
      this.cdr.detectChanges();
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
      const matchesCategory =
        this.selectedCategory === 'todos' || product.category === this.selectedCategory;

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
