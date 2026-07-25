import { Injectable } from '@angular/core';
import { Product } from '../models/product'; // 👈 Importa a interface que você já criou!

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Biquini Thalia',
      price: 'R$ 64,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-thalia-3.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-thalia-1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-thalia-2.webp',
      ],
      category: 'biquini',
      description: `O biquíni perfeito para quem ama elegância e conforto!

        Modelo vibrante que é a cara do verão, esse modelo vai conquistar você!

        ✔️ Possui bojo, garantindo mais sustentação e valorizando o busto.
        ✔️ Calcinha hot pant, que modela o corpo e proporciona muito conforto.`,
    },
    {
      id: 2,
      title: 'Saída Sereia',
      price: 'R$ 59,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/saida-de-praia-sereia1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/saida-de-praia-sereia2.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/saida-de-praia-sereia3.webp',
      ],
      category: 'saida',
      description: `🖤 Elegância, leveza e sofisticação em uma única peça!

        A saída de praia longa em tule é perfeita para compor produções estilosas sem abrir mão do conforto.

        Um modelo que valoriza o look e deixa qualquer produção ainda mais elegante. ✨`,
    },
    {
      id: 3,
      title: 'Biquini Lana',
      price: 'R$ 64,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-lana-1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-lana-2.webp',
      ],
      category: 'biquini',
      description: `Esse aqui tá um verdadeiro sonho!

        Além da modelagem perfeita, ele possui alça removível, trazendo mais versatilidade para você usar do seu jeito ✨

        Sem dúvidas, uma peça indispensável para esse verão ☀️`,
    },
    {
      id: 4,
      title: 'Biquini Pluz Size',
      price: 'R$ 64,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-pluz-size1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-pluz-size2.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-pluz-size3.webp',
      ],
      category: 'biquini',
      description: `Elegância e conforto para valorizar suas curvas!

        Com bojo que garante sustentação e segurança. O top traz um lindo detalhe de argola que adiciona charme à peça, combinando perfeitamente com a calcinha hot pant, que também possui o mesmo detalhe sofisticado.

        Perfeito para quem busca estilo, conforto e muita confiança na praia ou piscina 🖤`,
    },
    {
      id: 5,
      title: 'Maiô Fechado na Frente',
      price: 'R$ 75,90',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/maio-fechado-na-frente1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/maio-fechado-na-frente2.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/maio-fechado-na-frente3.webp',
      ],
      category: 'maio',
      description: `Elegância e sensualidade na medida certa!

        Maiô fechado na frente, com um lindo detalhe no centro dos seios que traz um charme especial e sofisticado à peça. Nas costas, possui modelo fio duplo com uma leve abertura, garantindo um toque moderno e super feminino.

        Perfeito para quem quer arrasar com estilo, seja na piscina ou na praia 💜`,
    },
    {
      id: 6,
      title: 'Maiô Cavado com Recortes',
      price: 'R$ 75,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/maio-cavado-com-recortes1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/maio-cavado-com-recortes2.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/maio-cavado-com-recortes3.webp',
      ],
      category: 'maio',
      description: `Maiô Cavado com Recortes!

       Um modelo poderoso para quem ama um visual marcante e cheio de estilo! 🖤

        • Maiô 100% forrado, garantindo zero transparência
        • Modelo cavado, que valoriza e alonga a silhueta

        Ideal para arrasar na piscina ou na praia com muito estilo e confiança! 🌊`,
    },
    {
      id: 7,
      title: 'Biquini Regulagem',
      price: 'R$ 49,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-regulagem1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-regulagem2.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-regulagem3.webp',
      ],
      category: 'biquini',
      description: `Esse biquíni é perfeito para quem ama um visual leve e sofisticado, valorizando a silhueta com muito conforto.
      
      ✔️ Não possui bojo, garantindo um caimento mais natural.
      ✔️ Calcinha com regulagem nas laterais.
      ✔️ Modelo versátil e confortável.`,
    },
    {
      id: 8,
      title: 'Biquini Lis',
      price: 'R$ 59,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-lis1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/biquini-lis2.webp',
      ],
      category: 'biquini',
      description: `Esse aqui é de tirar o fôlego!
      
        O Modelo Perfeito existe e nós podemos provar!
        
        Com modelagem impecável e detalhes dourados luxuosos, ele é a definição de poder e elegância.`,
    },
    {
      id: 9,
      title: 'Jaqueta Fitness',
      price: 'R$ 119,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/jaqueta-fitness1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/jaqueta-fitness2.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/jaqueta-fitness3.webp',
      ],
      category: 'jaqueta',
      description: `A jaqueta fitness que une conforto, estilo e performance!
      
        Perfeita para te acompanhar nos treinos e também nas produções do dia a dia.
        
        ✔️ Confortável e elegante
        ✔️ Modelagem que veste super bem
        ✔️ Ideal para treinos e looks casuais
        ✔️ Tecido de alta qualidade`,
    },
    {
      id: 10,
      title: 'Macacão Canelado',
      price: 'R$ 120,00',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/macacao-canelado1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/macacao-canelado2.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/macacao-canelado3.webp',
      ],
      category: 'macacao',
      description: `O macacão que une conforto, estilo e praticidade!
      
        Confeccionado em tecido canelado, ele se ajusta perfeitamente ao corpo, valorizando a silhueta e garantindo muito conforto para treinar ou montar um look casual cheio de personalidade.
        
        ✔️ Tecido canelado
        ✔️ Super confortável
        ✔️ Ótimo caimento
        ✔️ Perfeito para o dia a dia e treinos`,
    },
    {
      id: 11,
      title: 'Conjunto Canelado Bicolor',
      price: 'R$ 119,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-canelado-bicolor1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-canelado-bicolor2.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-canelado-bicolor3.webp',
      ],
      category: 'conjunto',
      description: `Conforto e estilo em cada detalhe!
      
        Esse conjunto canelado com acabamento impecável e top de zíper é a definição de versatilidade e elegância.`,
    },
    {
      id: 12,
      title: 'Blusa Tule',
      price: 'R$ 39,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/blusa-tule1.jpg',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/blusa-tule2.jpg',
      ],
      category: 'blusa',
      description: `Versátil, estilosa e super tendência!
      
        A blusa de tule é aquela peça coringa que transforma qualquer produção em segundos.
        
        Perfeita para usar como terceira peça!`,
    },
    {
      id: 13,
      title: 'Conjunto Bicolor',
      price: 'R$ 94,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-bicolor1.jpg',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-bicolor2.jpg',
      ],
      category: 'conjunto',
      description: `Conforto, estilo e sustentação em uma peça só!
      
        Nosso conjunto bicolor possui bojo, oferecendo mais segurança e valorizando ainda mais o corpo.
        
        Modelagem que veste super bem, tecido confortável e aquele caimento perfeito para treinar ou montar looks estilosos no dia a dia.`,
    },
    {
      id: 14,
      title: 'Conjunto Bicolor',
      price: 'R$ 89,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-bicolor3.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-bicolor4.webp',
      ],
      category: 'conjunto',
      description: `Elegância e conforto em um só look!
      
        Nosso conjunto conta com um lindo cropped de um ombro só, trazendo ainda mais charme e sofisticação para a produção.
        
        A calça e o cropped possuem detalhes bicolor, uma tendência que está super em alta e deixa a peça ainda mais moderna e estilosa. 😍`,
    },
    {
      id: 15,
      title: 'Conjunto Lis',
      price: 'R$ 74,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-lis1.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-lis2.webp',
      ],
      category: 'conjunto',
      description: `Conforto, estilo e caimento perfeito em uma única peça!
        
        O short possui bolsos nas laterais, trazendo mais praticidade para o dia a dia.
        
        O cropped conta com bojo e uma linda abertura nas costas, deixando o look ainda mais moderno. Um conjunto que veste super bem e valoriza o corpo com muito conforto.`,
    },
    {
      id: 16,
      title: 'Conjunto Bicolor',
      price: 'R$ 69,99',
      images: [
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-bicolor5.webp',
        'https://l4ml87oywalsvkda.public.blob.vercel-storage.com/conjunto-bicolor6.webp',
      ],
      category: 'conjunto',
      description: `Elegância e conforto em um só look!
      
        Nosso conjunto conta com um lindo cropped de um ombro só, trazendo ainda mais charme e sofisticação para a produção.
        
        O short e o cropped possuem detalhes bicolor, uma tendência que está super em alta e deixa a peça ainda mais moderna e estilosa. 😍`,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
