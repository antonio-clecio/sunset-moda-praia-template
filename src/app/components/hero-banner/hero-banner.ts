import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

export interface BannerSlide {
  imageUrl: string;
  altText: string;
  categorySlug: string;
}

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBannerComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); // Garante a atualização de tela do Angular

  currentSlide = 0;
  private intervalId: any = null;

  slides: BannerSlide[] = [
    {
      imageUrl: 'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/banner-promocional-1.png',
      altText: 'Saldão de Biquinis - Até 30% OFF',
      categorySlug: 'biquini',
    },
    {
      imageUrl: 'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/banner-promocional-2.png',
      altText: 'Moda Fitness Tendências',
      categorySlug: 'conjunto',
    },
    {
      imageUrl: 'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/banner-promocional-3.png',
      altText: 'Festival de Maiôs - Até 70% OFF',
      categorySlug: 'maio',
    },
    {
      imageUrl: 'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/banner-promocional-4.png',
      altText: 'Saídas de Praia, Calças Telinha e mais',
      categorySlug: 'saida',
    },
    {
      imageUrl: 'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/banner-promocional-5.png',
      altText: 'Coleção de Verão',
      categorySlug: 'todos',
    },
    {
      imageUrl: 'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/banner-promocional-6.png',
      altText: 'Ofertas Especiais',
      categorySlug: 'todos',
    },
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // Navega aplicando o filtro de categoria na URL
  onBannerClick(categorySlug: string): void {
    if (!categorySlug) return;
    this.router.navigate([], {
      queryParams: { category: categorySlug },
      queryParamsHandling: 'merge',
    });
  }

  startAutoPlay(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.stopAutoPlay(); // Garante que limpa temporizadores anteriores
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }

  stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private restartAutoPlay(): void {
    this.startAutoPlay();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.cdr.markForCheck(); // Notifica o Angular para atualizar o CSS na tela
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.cdr.markForCheck();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.cdr.markForCheck();
  }

  // Ações manuais do usuário (clique nas setas ou bolinhas)
  onUserNext(): void {
    this.nextSlide();
    this.restartAutoPlay();
  }

  onUserPrev(): void {
    this.prevSlide();
    this.restartAutoPlay();
  }

  onUserGoTo(index: number): void {
    this.goToSlide(index);
    this.restartAutoPlay();
  }
}
