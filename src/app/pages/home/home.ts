import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  selectedCategory: string = 'all';

  products: Product[] = [
    {
      id: 1,
      title: 'Biquini Thalia',
      price: 'R$ 64,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/742317959_17890245183591097_4121167277634814471_n.webp?_nc_cat=108&ig_cache_key=MzkzNjAzMjE2MDY5OTQwNjg3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=TeeetN2XtSYQ7kNvwG0DRCI&_nc_oc=AdoM54qOxYVf5hA3hC6_ZlMAMtwP4INcpRqJ9KWieCL0op5zqFCOvouK1Jw_kki1i11BHqFGX31Vu4AfxiLBvb5f&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=ZJAxMww0Y98xWe1WIJ02pw&_nc_ss=7a22e&oh=00_AQAuPXzBe9N2SoY26Kn7biFP_h8DRYLi2CC0r0DD0w2LLQ&oe=6A6388C4',
      category: 'biquini',
    },
    {
      id: 2,
      title: 'Saída Sereia',
      price: 'R$ 59,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/736545270_17890242552591097_8419447652952930735_n.webp?_nc_cat=109&ig_cache_key=MzkzNjAyNDY0NDI2NzE5NzkxMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=my9nVztZ1qIQ7kNvwFap618&_nc_oc=AdpmUuSOnzNIGY0DB46CVI229Hq9TlWEijikw2VETwUJzRmfO2NOQGPIVpiP2eukgwzUPjGLRWucUItxCEigfu8f&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=ZJAxMww0Y98xWe1WIJ02pw&_nc_ss=7a22e&oh=00_AQDd28lIYJ8NhZJbfUNCiSLp9zA6cIXj1-QGKdasMKB3sQ&oe=6A6372C6',
      category: 'saida',
    },
    {
      id: 3,
      title: 'Biquini Lana',
      price: 'R$ 64,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/731697945_17888288211591097_1941173229042797137_n.webp?_nc_cat=104&ig_cache_key=MzkyODI2NjAzNzQ2NDI0NTQwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_FrF8PkDkdsQ7kNvwE9tgRX&_nc_oc=AdqPD06tzvBSV3177DaHWtYeQk7uT0pwxphbDLBX67hzW0F3Cy7i_GYi5dUWY8qz783LZwx4dpyreZkIIEWIC8y_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=7NWXR1_QYhZOWLRxeVh6Hw&_nc_ss=7a22e&oh=00_AQC6g80-mhbsatluaIUkooC_oDmyRmHdCqZrKUP9qK6ONg&oe=6A635925',
      category: 'biquini',
    },
    {
      id: 4,
      title: 'Biquini Pluz Size',
      price: 'R$ 64,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/670468186_17875079916591097_3425443748666008040_n.webp?_nc_cat=100&ig_cache_key=Mzg3NTk0NDcxMDcxMjE0MTM5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=yn1-nV9DRccQ7kNvwE4qq57&_nc_oc=AdoDA4uSLb4mO73vl9Jov8OQ4fLKbYT0Kuf0ULT1teqojoj-QKAmtfeGsoo7MbIhjENL6ZuhO-djR6fwJszFQlgk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=xQrVVIZRIsB84SRYyWaziQ&_nc_ss=7a22e&oh=00_AQDG_C8EjIw-NjWm9CMdm6IZmrE38h-mIUo7N8foCnx49g&oe=6A63813D',
      category: 'biquini',
    },
    {
      id: 5,
      title: 'Maiô Fechado na Frente',
      price: 'R$ 75,90',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/670448828_17875086159591097_8847153852903107574_n.webp?_nc_cat=108&ig_cache_key=Mzg3NTk2ODc2MzM5MjE3MTAxMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=jcRXQMNyALsQ7kNvwF-jRQl&_nc_oc=AdqkKBuTweVBqOSeXPvtzZRc9O4UkLy3u7tyYVgVfLIKtZY-71cuZgvnpse7aYlvx1Sn6HKuhXpFbNnU9F29ScFw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=eewf6yPS4kXcv-wbyfoJJw&_nc_ss=7a22e&oh=00_AQDGqwGCSJ4aB71xZ1CTg92N37SeoVAPTixRzx-d3F45_g&oe=6A638514',
      category: 'maio',
    },
    {
      id: 6,
      title: '✨ Maiô Cavado com Recortes ✨',
      price: 'R$ 75,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/670760885_17875086417591097_4063383203963017456_n.webp?_nc_cat=109&ig_cache_key=Mzg3NTk3MDA0NjQ2MzM3NDkzNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=nsLdGeBzuKUQ7kNvwHqBQHd&_nc_oc=Adq-O4bzxBm5ZB1haxR68WfRTQqBBws9wBTs6ven9JnnSvmStnMWumVHYljUWCaq0LGfsankDGGNT1XiZJ1-LrB6&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=eewf6yPS4kXcv-wbyfoJJw&_nc_ss=7a22e&oh=00_AQARSAx2itUP7lHwM7uvc9UB0ZTlq9QXFh6T6lxZSBfxTQ&oe=6A63898D',
      category: 'maio',
    },
    {
      id: 7,
      title: 'Biquini Regulagem',
      price: 'R$ 49,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/731769813_17890239690591097_72062852839019238_n.webp?stp=dst-webp_p480x480&_nc_cat=104&ig_cache_key=MzkzNjAxNzkyMzI0NzI1MTkwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=jrJTSLVHFg0Q7kNvwED0IK8&_nc_oc=AdoNNunPGMoxSR85IUUH4wvXkTjlz6K6C9utXfcW4h1mtETZCp8YlT-qTBmI76UGnjnpQX4rU19nHSxzCVcWCEzW&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=SqvZiU4w69XsCudOJbKwJA&_nc_ss=7a22e&oh=00_AQA2hKS-FHg5-Zua7MjS3Rm463axLqWK5TbZHiE6akApQg&oe=6A635B2D',
      category: 'biquini',
    },
    {
      id: 8,
      title: 'Biquini Lis',
      price: 'R$ 59,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/730323971_17888292879591097_654724671321021325_n.webp?_nc_cat=101&ig_cache_key=MzkyODI5MDI1MTAwNTA0NDU2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=0A2LUdoi-VIQ7kNvwGzhK1Q&_nc_oc=AdpwxlMkPyZkbEIjKfHC46XJHl9alwK6cYn30Y9V0nqrWhOmB9wDNXeBFSToxabShrL69sm4B4eGNx0XIwqDlYin&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=9RSNLvXvqWpqZgovDXfT9g&_nc_ss=7a22e&oh=00_AQAYIbG5yF3_shi2tJ2HEIthbe01zwMW9kLepH2noI7RGg&oe=6A638E4A',
      category: 'biquini',
    },
    {
      id: 9,
      title: 'Jaqueta Fitness',
      price: 'R$ 119,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/726782652_17886536559591097_6805752454900124513_n.webp?stp=dst-webp_p480x480&_nc_cat=107&ig_cache_key=MzkyMTQ3NjAwNDI5NDk2MDA5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=L8EzfB4KuAMQ7kNvwFamj16&_nc_oc=AdppbyzLX-KvY8ULIiwKa21x7asTRzRwhXsYa8Nk1WKiyvqTViOffl_x5K-kViUWU216rNjPsmp0tOrB_X2A1f7X&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=8TPR8A64KbY3dwlfZn6A8w&_nc_ss=7a22e&oh=00_AQCGrMTi4tFvQ75HcF6nkhZ7rm3VqTCG_cU0t__ikKELpQ&oe=6A6365AC',
      category: 'jaqueta',
    },
    {
      id: 10,
      title: 'Macacão Canelado',
      price: 'R$ 120,00',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/745503916_17891302308591097_8611858683615613119_n.webp?_nc_cat=100&ig_cache_key=Mzk0MDMyNTExMTI5MzkzNjMzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=syZuaCtoZuQQ7kNvwHmiAYA&_nc_oc=AdqhCDB3QlY7mEDbdMhgZRFdFXjfOS0ZbhXL1MoXSD_F0vcixZsRzq8A6F4KGL4Px5YLIs1GlsxJPvRQL5qoZ6HF&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=FDwZ-zJK6oUw311ucvkYuQ&_nc_ss=7a22e&oh=00_AQC7gmuHpfYgpvynEoEhkNm5ABIVMli_oYRFT083E2VqfA&oe=6A639035',
      category: 'macacao',
    },
    {
      id: 11,
      title: 'Conjunto Canelado Bicolor',
      price: 'R$ 119,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/730213045_17889573318591097_4929212161882409340_n.webp?_nc_cat=108&ig_cache_key=MzkzMzI1NDkzMTA3NTE4MzMxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=RlroabARPFMQ7kNvwGLo8AB&_nc_oc=AdoHDl-YG8nWilpQXpJmP9QYs-cs3IViCX_-1Zfbat2J5_EQ5J6bGYQV-knxr05zljUXcWlZpIOlSLKi8ZaIl4Ko&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=_WBMCdRCa3ioSxy118jaJg&_nc_ss=7a22e&oh=00_AQApxoNU5A0mFkCj1W25svsCuLjwSeLBScVDtLngG4f-bw&oe=6A638726',
      category: 'conjunto',
    },
    {
      id: 12,
      title: 'Blusa Tule ✨',
      price: 'R$ 39,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/734218589_17889572508591097_310057839832790140_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzkzMzI1MTI5NTg3MTg1NzcwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuNzU0LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=0l0TmnNKb9YQ7kNvwE5risj&_nc_oc=AdoVDwc24s7GdDTBblxtQM8XnQ7z9bBJFzIX_jdNhG61UtAiUOZvMvSSVCDQrKE5g81SJ9FzQ81BCGS7ezgepT8c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=_WBMCdRCa3ioSxy118jaJg&_nc_ss=7a22e&oh=00_AQDOhB7Ekjrmqv1c9hwivaHpXJZhE6Sb49ocKCI4fsW6hQ&oe=6A638697',
      category: 'blusa',
    },
    {
      id: 13,
      title: 'Conjunto Bicolor ✨',
      price: 'R$ 94,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/734329176_17889571545591097_118608417771468386_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzkzMzI0NzI5NzUyNTgxNDk0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuODI3LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=SZvOed8Q0KcQ7kNvwFpqdNb&_nc_oc=AdqNxPP-diGuEW11ZT_zI-yxPd-HVlqsKih71edh0EQ7RmQsJV4xml5v_aztNm1gFoj05bqbvti0SX9XdkYmvmxg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=_WBMCdRCa3ioSxy118jaJg&_nc_ss=7a22e&oh=00_AQCQ206RkzU0kimLJQ4bGDISjuRH_qjziemk2x1fmizdGA&oe=6A636EF2',
      category: 'conjunto',
    },
    {
      id: 13,
      title: 'Conjunto Bicolor ✨',
      price: 'R$ 89,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/724239123_17886376128591097_4316728538759827247_n.webp?_nc_cat=100&ig_cache_key=MzkyMDc1MzAzNzIzMTcxNTY0NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8_F1Yx6AozgQ7kNvwGSKSA8&_nc_oc=AdrfAghq9rpqIRAtY0nfqfvmai3t0bY7j1FoQeEjXEH9shgWtvJpGB9DNUjQoLO1flWSNNt8R3RY43IxPOxnNUZO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=8TPR8A64KbY3dwlfZn6A8w&_nc_ss=7a22e&oh=00_AQCrpA4F54An-3RmDKK__f4-f5iGbC3vRkNremVYFy35pg&oe=6A638BC0',
      category: 'conjunto',
    },
    {
      id: 14,
      title: '✨ Conjunto Lis ✨',
      price: 'R$ 74,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/723256842_17886316257591097_227332380571281246_n.webp?stp=dst-webp_p480x480&_nc_cat=102&ig_cache_key=MzkyMDQ1NjIxMjgzMDAwMjEwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=LYn28Na8u1cQ7kNvwFNW6dg&_nc_oc=Adqawf5vedLM3jeyYvOaRfr663g94_uR70cWVPMg3kt0qhSShK0oD3PBvKHXKff5CVhUKnLh5FIdYzJlS0uVlHvh&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=8TPR8A64KbY3dwlfZn6A8w&_nc_ss=7a22e&oh=00_AQDVjA3D03wydk9Kt8zE_q1PSiFFKLOTMIBE7AWl8EPE8g&oe=6A637557',
      category: 'conjunto',
    },
    {
      id: 15,
      title: '✨ Conjunto Bicolor ✨',
      price: 'R$ 69,99',
      image:
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/724118708_17886318453591097_7671646102853352726_n.webp?_nc_cat=109&ig_cache_key=MzkyMDQ2Njc1NzQzNjEzNjQ4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=5f5e5FLzVZYQ7kNvwFBKG4Z&_nc_oc=AdoGexKL1OJjUGJHfC608p8yLMEbHm19l3AfgEyi5yWoMXXjsJouKv5KESAgzoJAux0CBj8kEJDUg4rUOnne1n0n&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=8TPR8A64KbY3dwlfZn6A8w&_nc_ss=7a22e&oh=00_AQDmBu3nFFjMklhJhxrBZatD_OQ91wyMrqRmAUGexXeqVg&oe=6A638321',
      category: 'conjunto',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Escuta as alterações na URL toda vez que o usuário clica em uma categoria do Header
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['category'] || 'all';
    });
  }

  get filteredProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter((p) => p.category === this.selectedCategory);
  }
}
