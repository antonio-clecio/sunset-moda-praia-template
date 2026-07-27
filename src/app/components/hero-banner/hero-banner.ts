import { Component, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export interface Slide {
  imageUrl: string;
  titlePart1: string;
  titleHighlight: string;
  subtitle?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBannerComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  currentSlide = 0;
  private intervalId: any = null;

  slides: Slide[] = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80',
      subtitle: 'NOVA COLEÇÃO',
      titlePart1: 'Sinta a Vibe do',
      titleHighlight: 'Verão Brasileiro',
      description: 'Modelagens exclusivas e estampas vibrantes para realçar seu brilho natural.',
      primaryBtnText: 'Ver Coleção',
      primaryBtnLink: '#',
      secondaryBtnText: 'Lançamentos',
      secondaryBtnLink: '#',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80',
      subtitle: 'OFERTA ESPECIAL',
      titlePart1: 'Biquínis & Maiôs com',
      titleHighlight: 'Até 30% OFF',
      description:
        'Aproveite descontos imperdíveis nas peças mais desejadas da estação por tempo limitado.',
      primaryBtnText: 'Aproveitar Desconto',
      primaryBtnLink: '#',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80',
      subtitle: 'LOOKS COMPLETOS',
      titlePart1: 'Saídas de Praia e',
      titleHighlight: 'Acessórios Trend',
      description: 'Combine suas peças favoritas com kimonos, cangas e chapéus elegantes.',
      primaryBtnText: 'Comprar Agora',
      primaryBtnLink: '#',
    },
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    if (isPlatformBrowser(this.platformId) && !this.intervalId) {
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

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
