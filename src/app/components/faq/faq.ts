import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  faqs = signal<FaqItem[]>([
    {
      question: 'Como eu compro uma peça do catálogo?',
      answer: 'Você pode navegar pelas peças no nosso catálogo, selecionar os itens desejados e clicar no botão de atendimento via WhatsApp para concluir sua compra com a gente.',
      isOpen: false,
    },
    {
      question: 'Como eu sei qual é o meu tamanho?',
      answer: 'Temos uma tabela de medidas explicativa em cada produto. Se mesmo assim tiver dúvidas, você pode nos chamar no WhatsApp com suas medidas que te ajudamos a escolher!',
      isOpen: false,
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos PIX, cartões de crédito/débito e pagamento no momento da entrega para regiões do entorno cobertas.',
      isOpen: false,
    },
    {
      question: 'Vocês entregam? Para quais regiões?',
      answer: 'Sim! Fazemos entregas no Gama e todo o entorno (Seg–Sáb, 09h às 18h), além de envios para todo o Brasil via Correios.',
      isOpen: false,
    },
    {
      question: 'Posso trocar ou devolver uma peça?',
      answer: 'Sim, realizamos trocas dentro do prazo legal. As peças devem estar sem uso, com as etiquetas e os protetores higiênicos originais preservados.',
      isOpen: false,
    },
  ]);

  toggleFaq(index: number): void {
    this.faqs.update((items) =>
      items.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      })
    );
  }
}