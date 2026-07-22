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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/742317959_17890245183591097_4121167277634814471_n.webp?_nc_cat=108&ig_cache_key=MzkzNjAzMjE2MDY5OTQwNjg3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=TeeetN2XtSYQ7kNvwG0DRCI&_nc_oc=AdoM54qOxYVf5hA3hC6_ZlMAMtwP4INcpRqJ9KWieCL0op5zqFCOvouK1Jw_kki1i11BHqFGX31Vu4AfxiLBvb5f&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=ZJAxMww0Y98xWe1WIJ02pw&_nc_ss=7a22e&oh=00_AQAuPXzBe9N2SoY26Kn7biFP_h8DRYLi2CC0r0DD0w2LLQ&oe=6A6388C4',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/731574550_17890245312591097_7194485682462039277_n.webp?_nc_cat=104&ig_cache_key=MzkzNjAzMjQyMDM3NzM2Njk4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=31fXCvFfVe4Q7kNvwFgEf5S&_nc_oc=AdrvvuncXg1pesNqwi7MbByryXImwcywxb4sDB_yH-xBo3swO4RLk-OsajRtvsJU5hsCKVgUzjcJba3yRXs8lCvQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=IpiCLs6wzNCu8aKsPlwt5A&_nc_ss=7a22e&oh=00_AQAopsnwHVsA3aNm-ylLZ7p0404rMf3tWnPqLeTKigI_1Q&oe=6A65C9DC',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/735193472_17890245036591097_2629228842882549341_n.webp?_nc_cat=105&ig_cache_key=MzkzNjAzMTg5NjYyOTQ0OTkxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=tUvNDD70ikAQ7kNvwHSKT_B&_nc_oc=Adp2H09LQe4M-q8NHGyxIiDa2qa2fe2H-dtSJF06261DmKfNmnef96bcseJknClY1WIjeIVrgFNRZ3_ND3GiFIwJ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=IpiCLs6wzNCu8aKsPlwt5A&_nc_ss=7a22e&oh=00_AQDWCQGM9TKJKKq8lHeNQrlOzyUu9qkFIctzlLg6brDHpg&oe=6A65EC48',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/736545270_17890242552591097_8419447652952930735_n.webp?_nc_cat=109&ig_cache_key=MzkzNjAyNDY0NDI2NzE5NzkxMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=my9nVztZ1qIQ7kNvwFap618&_nc_oc=AdpmUuSOnzNIGY0DB46CVI229Hq9TlWEijikw2VETwUJzRmfO2NOQGPIVpiP2eukgwzUPjGLRWucUItxCEigfu8f&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=ZJAxMww0Y98xWe1WIJ02pw&_nc_ss=7a22e&oh=00_AQDd28lIYJ8NhZJbfUNCiSLp9zA6cIXj1-QGKdasMKB3sQ&oe=6A6372C6',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/733501136_17890242369591097_6455873038876384044_n.webp?_nc_cat=101&ig_cache_key=MzkzNjAyNDE0MDEwMzUxMDk0OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=5ACXXd0erVgQ7kNvwHOQW1D&_nc_oc=AdpK1F7a5BVslHs03a27nDRs-8nK2TIKwcKCLtaBCPCpjyGO0_5ZNmQcddYVqRnLXXxmjBJHo4P0s6OzvMwkE0Rn&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=IpiCLs6wzNCu8aKsPlwt5A&_nc_ss=7a22e&oh=00_AQDuYw36a-Sp7a6P9rBPWm3CeQDRRefYuk95pFXZox8AOg&oe=6A65FDED',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/731810447_17890242216591097_5886868804745917751_n.webp?_nc_cat=106&ig_cache_key=MzkzNjAyMzg4ODYxMjg1OTc2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=OGL3J8QPBbwQ7kNvwHac6KL&_nc_oc=AdqpwSuJvgX0yZQfq2wufqs_TWy82lOat8Wv0JpAR28tKhOcfNg3m0FXF8RcYP77yZHysvLHpwKX5XwYVvGApwhD&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=IpiCLs6wzNCu8aKsPlwt5A&_nc_ss=7a22e&oh=00_AQA3tblP-zLoZtGFUN93nPjOisyM_z6nAL57RnUtLX68Ig&oe=6A65EFE4',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/731697945_17888288211591097_1941173229042797137_n.webp?_nc_cat=104&ig_cache_key=MzkyODI2NjAzNzQ2NDI0NTQwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_FrF8PkDkdsQ7kNvwE9tgRX&_nc_oc=AdqPD06tzvBSV3177DaHWtYeQk7uT0pwxphbDLBX67hzW0F3Cy7i_GYi5dUWY8qz783LZwx4dpyreZkIIEWIC8y_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=7NWXR1_QYhZOWLRxeVh6Hw&_nc_ss=7a22e&oh=00_AQC6g80-mhbsatluaIUkooC_oDmyRmHdCqZrKUP9qK6ONg&oe=6A635925',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/730420916_17888288244591097_1116350225273184663_n.webp?_nc_cat=108&ig_cache_key=MzkyODI2NjQwOTg1MTM2NDk4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=CKI5Ep6ZdzAQ7kNvwEZmjoi&_nc_oc=Adr2JVdT3qebWbQl9_BTLCgsJyD38erURcdu5IkXFvRwCxY7j6o0MJTF7i_W4q4szp9dC6YH6RvfV91xjEHjxnsn&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=xjAc6iEDpY3DqwINL6F1Ww&_nc_ss=7a22e&oh=00_AQDpyQUYq-ErOctBPD3X0YcOfnBtD_z4yYgd4x3opOqwmw&oe=6A65F6BD',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/670468186_17875079916591097_3425443748666008040_n.webp?_nc_cat=100&ig_cache_key=Mzg3NTk0NDcxMDcxMjE0MTM5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=yn1-nV9DRccQ7kNvwE4qq57&_nc_oc=AdoDA4uSLb4mO73vl9Jov8OQ4fLKbYT0Kuf0ULT1teqojoj-QKAmtfeGsoo7MbIhjENL6ZuhO-djR6fwJszFQlgk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=xQrVVIZRIsB84SRYyWaziQ&_nc_ss=7a22e&oh=00_AQDG_C8EjIw-NjWm9CMdm6IZmrE38h-mIUo7N8foCnx49g&oe=6A63813D',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/672346940_17875080054591097_300634358885343060_n.webp?_nc_cat=107&ig_cache_key=Mzg3NTk0NTAxMzEwNDY5OTE0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=4WbWgf_epesQ7kNvwHW1SQd&_nc_oc=Adp5Z_zrxjWaF58hdNd9BlvFfCooXy4zrOCc4myL_R4UB9bBoaBQmk_b2Nj31ixFmvKFHx4wGXHrVOpXkkNp4zIX&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=i40dYuiQuXn9TmXUiymR_Q&_nc_ss=7a22e&oh=00_AQAArmvOhSNTP80sg9HKk5uvOYZsYNufBztujz7Pnan7kg&oe=6A660327',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/670509955_17875079715591097_56267704297398557_n.webp?_nc_cat=107&ig_cache_key=Mzg3NTk0NDQ1MDMxMzAyNzQ0NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=SwLxScCfXSQQ7kNvwF82HfC&_nc_oc=Adol1WwzpZnf1fCB9B01pLK0JzpHRwbxB8WvpPVCnKx381AjFiVIWxttMXsvPCfmMwo2EXgGmWUMmGR1KagMYVRh&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=i40dYuiQuXn9TmXUiymR_Q&_nc_ss=7a22e&oh=00_AQAfVsnMizyzOJiM3XMOQm0BmVKPp9neF1OHXTZfyWv3TA&oe=6A65F1B9',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/670448828_17875086159591097_8847153852903107574_n.webp?_nc_cat=108&ig_cache_key=Mzg3NTk2ODc2MzM5MjE3MTAxMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=jcRXQMNyALsQ7kNvwF-jRQl&_nc_oc=AdqkKBuTweVBqOSeXPvtzZRc9O4UkLy3u7tyYVgVfLIKtZY-71cuZgvnpse7aYlvx1Sn6HKuhXpFbNnU9F29ScFw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=eewf6yPS4kXcv-wbyfoJJw&_nc_ss=7a22e&oh=00_AQDGqwGCSJ4aB71xZ1CTg92N37SeoVAPTixRzx-d3F45_g&oe=6A638514',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/670341696_17875085733591097_3554935196392950368_n.webp?_nc_cat=103&ig_cache_key=Mzg3NTk2NzM5NjQxMDY2MjEzOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=l6JSlPOIH4EQ7kNvwHUsgHm&_nc_oc=AdqXW7Ei9fMSu9OAw6UM9ymcLvE1d5NR6Hn_CqF3aF0yLaRXD2Ozshqk5u6w29vW_Ek5ZEgTYxHYcq-J88yeaPqY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=GfsFbfl_NRdvl5EGXJFvVQ&_nc_ss=7a22e&oh=00_AQBtDyTYeg9IOAOLlo9IXUA8-2bvMqgZaTKQ_6qn1OELig&oe=6A65D81D',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/670407153_17875086054591097_6392861021749820760_n.webp?_nc_cat=103&ig_cache_key=Mzg3NTk2ODUyMDE0NzcyNTkwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTMwNy5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=E5VuMliTw3EQ7kNvwHo9c92&_nc_oc=Adr6A_pkhBeeJ0WNyo-g2LP1Lc0sanmEsQwqqNVB4a45bygsMNUPRMeR_WWHr8JH-l1i_ZiKl5VnMvSkXpnZDmH1&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=GfsFbfl_NRdvl5EGXJFvVQ&_nc_ss=7a22e&oh=00_AQDnD_42rJHTSHLyKZGwYwItqTO8sdHvAPn8MBJT0jsthQ&oe=6A65ED93',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/670760885_17875086417591097_4063383203963017456_n.webp?_nc_cat=109&ig_cache_key=Mzg3NTk3MDA0NjQ2MzM3NDkzNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=nsLdGeBzuKUQ7kNvwHqBQHd&_nc_oc=Adq-O4bzxBm5ZB1haxR68WfRTQqBBws9wBTs6ven9JnnSvmStnMWumVHYljUWCaq0LGfsankDGGNT1XiZJ1-LrB6&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=eewf6yPS4kXcv-wbyfoJJw&_nc_ss=7a22e&oh=00_AQARSAx2itUP7lHwM7uvc9UB0ZTlq9QXFh6T6lxZSBfxTQ&oe=6A63898D',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/671211008_17875086210591097_1594920581253848043_n.webp?_nc_cat=107&ig_cache_key=Mzg3NTk2OTQyNjY2MjY2MDE3MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=X8nO0mLgcMEQ7kNvwHiGiDV&_nc_oc=AdrIYc04Q0juC86O78b6jMMeXA0-5GeXxgVzR45TyazpOkADAp7p0ybU_4LmnGDMbxceHhlIez4POjtY--l-RroG&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=GfsFbfl_NRdvl5EGXJFvVQ&_nc_ss=7a22e&oh=00_AQBChqquwryy4XOrMCc6DqT8euQVPuRzv3oZuL66Np2LOw&oe=6A65EB94',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/671219830_17875086279591097_7160089073378123092_n.webp?_nc_cat=103&ig_cache_key=Mzg3NTk2OTcwOTYxODc2MDgyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=JmYhzLJ60-oQ7kNvwF5D5jF&_nc_oc=Ado5UXIc4wAlYUfrnU94c3blqzuzNvRqZC1CaJtVPc8kCLN4Kza9DgCEdg9qssKfpLtyRURDiOIMxl-VpP7Sq1XH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=GfsFbfl_NRdvl5EGXJFvVQ&_nc_ss=7a22e&oh=00_AQCRjGxZYJn9AKn-Jd6r_fLgWQibH-ikTj1r4Zflfw-FaQ&oe=6A65E980',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/731769813_17890239690591097_72062852839019238_n.webp?stp=dst-webp_p480x480&_nc_cat=104&ig_cache_key=MzkzNjAxNzkyMzI0NzI1MTkwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=jrJTSLVHFg0Q7kNvwED0IK8&_nc_oc=AdoNNunPGMoxSR85IUUH4wvXkTjlz6K6C9utXfcW4h1mtETZCp8YlT-qTBmI76UGnjnpQX4rU19nHSxzCVcWCEzW&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=SqvZiU4w69XsCudOJbKwJA&_nc_ss=7a22e&oh=00_AQA2hKS-FHg5-Zua7MjS3Rm463axLqWK5TbZHiE6akApQg&oe=6A635B2D',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/742102984_17890239726591097_6470139394507052812_n.webp?_nc_cat=109&ig_cache_key=MzkzNjAxODE5ODc1NDMzMzg0OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=t0Ggo7NzM2EQ7kNvwHNnhO1&_nc_oc=AdpxB6zxRoBXlpR-NrRgkUmzaxz7nuL_TT3lG-q_rZ9piHb4eJZ0jP1bLsxs8lUpMEkJFQJV-XPswnXmKY51HyO-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=IpiCLs6wzNCu8aKsPlwt5A&_nc_ss=7a22e&oh=00_AQCUnidBybuYaz99PeWjRjlIwPKh_csDB2_s94BFNhV4-Q&oe=6A65CCFC',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/736344150_17890240878591097_1836847309256274499_n.webp?_nc_cat=106&ig_cache_key=MzkzNjAyMDc2MjI4Nzc5NjIwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8mykwlUf2XAQ7kNvwHnxhuh&_nc_oc=AdqGFy0ZB_wVxuW_PeGsBxbJ6RuFirgpRbXMmPAPy85Pitdj7P01CKfO0M8pwy_vmnljy0q8Gy1mFY-80YGZJ_8T&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=IpiCLs6wzNCu8aKsPlwt5A&_nc_ss=7a22e&oh=00_AQDbdtoZhAzHjw2lGb7UTSdHfw6q7Ngf4TNzh9FuXBOreQ&oe=6A65F784',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/730323971_17888292879591097_654724671321021325_n.webp?_nc_cat=101&ig_cache_key=MzkyODI5MDI1MTAwNTA0NDU2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=0A2LUdoi-VIQ7kNvwGzhK1Q&_nc_oc=AdpwxlMkPyZkbEIjKfHC46XJHl9alwK6cYn30Y9V0nqrWhOmB9wDNXeBFSToxabShrL69sm4B4eGNx0XIwqDlYin&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=9RSNLvXvqWpqZgovDXfT9g&_nc_ss=7a22e&oh=00_AQAYIbG5yF3_shi2tJ2HEIthbe01zwMW9kLepH2noI7RGg&oe=6A638E4A',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/730266161_17888292858591097_4593970585937719264_n.webp?_nc_cat=105&ig_cache_key=MzkyODI5MDA2ODQ0Mzg5MzkwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=pdMuvoGPOwcQ7kNvwFqDWV2&_nc_oc=AdqC9GPJbdL7jQEHjwDwrEeN-lxu-yciJ5wu87MVDzKbIxoF2qWUbL6RyGs9XxwMGMAtHvDY0V4GsjO7pVaUSlro&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=xjAc6iEDpY3DqwINL6F1Ww&_nc_ss=7a22e&oh=00_AQAC9fez61cNXqF1anY9ZzeParlzhpD-FOZ6hErKQDiHYA&oe=6A65D902',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/726782652_17886536559591097_6805752454900124513_n.webp?stp=dst-webp_p480x480&_nc_cat=107&ig_cache_key=MzkyMTQ3NjAwNDI5NDk2MDA5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=L8EzfB4KuAMQ7kNvwFamj16&_nc_oc=AdppbyzLX-KvY8ULIiwKa21x7asTRzRwhXsYa8Nk1WKiyvqTViOffl_x5K-kViUWU216rNjPsmp0tOrB_X2A1f7X&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=8TPR8A64KbY3dwlfZn6A8w&_nc_ss=7a22e&oh=00_AQCGrMTi4tFvQ75HcF6nkhZ7rm3VqTCG_cU0t__ikKELpQ&oe=6A6365AC',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/726564366_17886536595591097_4962714158619455080_n.webp?_nc_cat=111&ig_cache_key=MzkyMTQ3NjMzOTk1Njg5MDA3Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=TpvlGvhBluYQ7kNvwGQ8x82&_nc_oc=AdpD2KSCY6SOySx2BsubeDP-Guyocn8ATUZqxfLx21NdstpAOkdlRt1GB9GzRrfYA5Lqwv30jqod4yhox6hz9dYe&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=i8KZZ8B-baNz0rLBkobtSQ&_nc_ss=7a22e&oh=00_AQDwvqIG_lP2iEtGtdmTggJofQx5nX2ZbrThmJV5PxJ0tQ&oe=6A65F267',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/726399813_17886536322591097_8448191479081864712_n.webp?_nc_cat=106&ig_cache_key=MzkyMTQ3NTMyMDQ1NTcxMTA4Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_d8UPC2cB0YQ7kNvwGLH-RQ&_nc_oc=AdqAaKajUtSmhPB4OJi379J0Ia2xyIbn8DPh0B3tNbb8v9cldqWVuBu_vYVOyV9r5deApR3Ugf3tROWeUDwfTvAu&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=i8KZZ8B-baNz0rLBkobtSQ&_nc_ss=7a22e&oh=00_AQBsSRbN62DFb88DZgoyIcKWU3mA6pl9zKJtNA8ASB8M8Q&oe=6A65F510',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/745503916_17891302308591097_8611858683615613119_n.webp?_nc_cat=100&ig_cache_key=Mzk0MDMyNTExMTI5MzkzNjMzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=syZuaCtoZuQQ7kNvwHmiAYA&_nc_oc=AdqhCDB3QlY7mEDbdMhgZRFdFXjfOS0ZbhXL1MoXSD_F0vcixZsRzq8A6F4KGL4Px5YLIs1GlsxJPvRQL5qoZ6HF&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=FDwZ-zJK6oUw311ucvkYuQ&_nc_ss=7a22e&oh=00_AQC7gmuHpfYgpvynEoEhkNm5ABIVMli_oYRFT083E2VqfA&oe=6A639035',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/747218062_17891302434591097_9174967256786483233_n.webp?_nc_cat=109&ig_cache_key=Mzk0MDMyNTYxODA0MTQ1Njg5Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=UiB8nJHQMj4Q7kNvwG1DIHs&_nc_oc=AdrZxfSYO9bj1b7rvT9iueLcgO5V3rpZdT7mbMHNznAd-kpllgdck2H5TbunmfEqycYb046U3EAauJ_VSop22heF&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=ez5XLmk62CuXnNlwMpiQ5A&_nc_ss=7a22e&oh=00_AQA20YB6Gl2rRQBKf69kYXmC9nwxoiNEG-3Uf93mcv6ppQ&oe=6A65FDC2',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/747612967_17891302569591097_5255577988246923398_n.webp?_nc_cat=104&ig_cache_key=Mzk0MDMyNjM5MDAyMDc1Mjc0NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Yddd-uXEvCwQ7kNvwHi29Wp&_nc_oc=AdoTw1LkLGAda3Md_kKlyhO6ME_12tWnvNbAZWMjQUnsmp8QvhN9kSSiErQbGXGrvqyh8YoR6SdJ6seZBKMyeTXT&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=ez5XLmk62CuXnNlwMpiQ5A&_nc_ss=7a22e&oh=00_AQCESDzKuZh3AzaA4v9uqv4kVcE5kyUbE1MOrkjCZuSatQ&oe=6A65E64C',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/730213045_17889573318591097_4929212161882409340_n.webp?_nc_cat=108&ig_cache_key=MzkzMzI1NDkzMTA3NTE4MzMxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=RlroabARPFMQ7kNvwGLo8AB&_nc_oc=AdoHDl-YG8nWilpQXpJmP9QYs-cs3IViCX_-1Zfbat2J5_EQ5J6bGYQV-knxr05zljUXcWlZpIOlSLKi8ZaIl4Ko&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=_WBMCdRCa3ioSxy118jaJg&_nc_ss=7a22e&oh=00_AQApxoNU5A0mFkCj1W25svsCuLjwSeLBScVDtLngG4f-bw&oe=6A638726',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/734873199_17889573366591097_3680530032307450443_n.webp?_nc_cat=102&ig_cache_key=MzkzMzI1NTQwNjA5Njk1MzMwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=HpsiCHs0ikIQ7kNvwFAbZSV&_nc_oc=AdrAg3CpT5QWztHorDhskwLTkNcU2sJBxSo1BiO_GOacqmiUIXydTnWagPSAAqy_bcIEkHEe12plZCGBd2MrEkDw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=degEJUkIrNf4FWJAW9VWOg&_nc_ss=7a22e&oh=00_AQBVjxKXvhjBmRcdMuhGp9Oj26ZjtYT8zXhUpTZ2yW_PBg&oe=6A65CDCA',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/731810090_17889573456591097_7352737057551866257_n.webp?_nc_cat=104&ig_cache_key=MzkzMzI1NTczMTYyNTE1NDY2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Z32UCzRCXDAQ7kNvwHJxUa4&_nc_oc=AdoSK69L7ScsgahpVUFW1offxqFOpuTnRO_eBhbVfqErRsXFuylc4Ymi37PUHcqZn0mPVDL0LdUB1g0wxnYsp9M1&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=degEJUkIrNf4FWJAW9VWOg&_nc_ss=7a22e&oh=00_AQAYqc4IHpsbHtp-oG2kcVEXS8t-viCzssHIlHUYV229nQ&oe=6A65DE76',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/734218589_17889572508591097_310057839832790140_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzkzMzI1MTI5NTg3MTg1NzcwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuNzU0LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=0l0TmnNKb9YQ7kNvwE5risj&_nc_oc=AdoVDwc24s7GdDTBblxtQM8XnQ7z9bBJFzIX_jdNhG61UtAiUOZvMvSSVCDQrKE5g81SJ9FzQ81BCGS7ezgepT8c&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=_WBMCdRCa3ioSxy118jaJg&_nc_ss=7a22e&oh=00_AQDOhB7Ekjrmqv1c9hwivaHpXJZhE6Sb49ocKCI4fsW6hQ&oe=6A638697',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/734181698_17889572541591097_4975409761571986867_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzkzMzI1MTM4MjE5ODk0ODAxNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuODA3LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=37g8uGWef3EQ7kNvwHoADfQ&_nc_oc=AdrI1E_A7hIHoO5MF5bORfW6q8T-neqCfL-BsMSmskWsoCzGMZaSQvDv6FbUR-ak5xW9NjHjiegIHOZFtxaothpG&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=degEJUkIrNf4FWJAW9VWOg&_nc_ss=7a22e&oh=00_AQDB3lSqqbPCrZk63XE_4hZoP7iHcbfg5kzORJ6gyj1eKw&oe=6A65D65A',
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
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/734329176_17889571545591097_118608417771468386_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzkzMzI0NzI5NzUyNTgxNDk0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuODI3LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=SZvOed8Q0KcQ7kNvwFpqdNb&_nc_oc=AdqNxPP-diGuEW11ZT_zI-yxPd-HVlqsKih71edh0EQ7RmQsJV4xml5v_aztNm1gFoj05bqbvti0SX9XdkYmvmxg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=_WBMCdRCa3ioSxy118jaJg&_nc_ss=7a22e&oh=00_AQCQ206RkzU0kimLJQ4bGDISjuRH_qjziemk2x1fmizdGA&oe=6A636EF2',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/730213048_17889571566591097_4055416717145418721_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzkzMzI0NzM4MTk0MDQ0ODI5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuNzUxLnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=o2F1PYnZCoIQ7kNvwHopf9u&_nc_oc=AdrFaOVZuvCi3YiGNsuijMaGzelALsG_6nM3Meu_FNnDYSsq8RRkjuwQnGOVDI5L81unBeJfEGk3d0ghpEgSZRF9&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=degEJUkIrNf4FWJAW9VWOg&_nc_ss=7a22e&oh=00_AQBD8hRtWfGqVX5QrVc_Qt-SgZYgUimvSeu3ShCXcWVTZQ&oe=6A65D111',
      ],
      category: 'conjunto',
      description: `Conforto, estilo e sustentação em uma peça só!
      
        Nosso conjunto bicolor possui bojo, oferecendo mais segurança e valorizando ainda mais o corpo.
        
        Modelagem que veste super bem, tecido confortável e aquele caimento perfeito para treinar ou montar looks estilosos no dia a dia.`,
    },
    {
      id: 13,
      title: 'Conjunto Bicolor',
      price: 'R$ 89,99',
      images: [
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/724239123_17886376128591097_4316728538759827247_n.webp?_nc_cat=100&ig_cache_key=MzkyMDc1MzAzNzIzMTcxNTY0NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=8_F1Yx6AozgQ7kNvwGSKSA8&_nc_oc=AdrfAghq9rpqIRAtY0nfqfvmai3t0bY7j1FoQeEjXEH9shgWtvJpGB9DNUjQoLO1flWSNNt8R3RY43IxPOxnNUZO&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=8TPR8A64KbY3dwlfZn6A8w&_nc_ss=7a22e&oh=00_AQCrpA4F54An-3RmDKK__f4-f5iGbC3vRkNremVYFy35pg&oe=6A638BC0',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/722489993_17886375975591097_1671835864408624061_n.webp?_nc_cat=102&ig_cache_key=MzkyMDc1MTk5MDcyNzUzMzM0OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTM3MS5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ljfRWJrYL_gQ7kNvwFb8zZA&_nc_oc=AdpmEnB7xrwtL-41_e0A_w0zuKsLsnT4JOnJIoZKN-HK9j5rad1SPfRWsFQ0XlqTM-yqHonYwQrIsMpLzIxrE_iF&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=i8KZZ8B-baNz0rLBkobtSQ&_nc_ss=7a22e&oh=00_AQC3klbHIvB8_aVHe5xMuvsRBJbWecKKJPbjcGap5Jh3tQ&oe=6A65F381',
      ],
      category: 'conjunto',
      description: `Elegância e conforto em um só look!
      
        Nosso conjunto conta com um lindo cropped de um ombro só, trazendo ainda mais charme e sofisticação para a produção.
        
        A calça e o cropped possuem detalhes bicolor, uma tendência que está super em alta e deixa a peça ainda mais moderna e estilosa. 😍`,
    },
    {
      id: 14,
      title: 'Conjunto Lis',
      price: 'R$ 74,99',
      images: [
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/723256842_17886316257591097_227332380571281246_n.webp?stp=dst-webp_p480x480&_nc_cat=102&ig_cache_key=MzkyMDQ1NjIxMjgzMDAwMjEwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=LYn28Na8u1cQ7kNvwFNW6dg&_nc_oc=Adqawf5vedLM3jeyYvOaRfr663g94_uR70cWVPMg3kt0qhSShK0oD3PBvKHXKff5CVhUKnLh5FIdYzJlS0uVlHvh&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=8TPR8A64KbY3dwlfZn6A8w&_nc_ss=7a22e&oh=00_AQDVjA3D03wydk9Kt8zE_q1PSiFFKLOTMIBE7AWl8EPE8g&oe=6A637557',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/722447812_17886316332591097_173233577040998202_n.webp?stp=dst-webp_p480x480&_nc_cat=106&ig_cache_key=MzkyMDQ1NjUyMDI2NDE3MjQ1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=72xCLq--fvwQ7kNvwFMjoiw&_nc_oc=AdrcdmlqVAqr7I_KcWVNbshr0Nuyh3QuQNTjS1qqvakMN3oPsfah03iGCe4zzLUZ8M0U0fxW6QMF9hrfLOJ0SExd&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=i8KZZ8B-baNz0rLBkobtSQ&_nc_ss=7a22e&oh=00_AQC0dujAZiHsZCxgQ_3D-ZvZx-_2Oa43QOyl8PSb72uqxQ&oe=6A65E19C',
      ],
      category: 'conjunto',
      description: `Conforto, estilo e caimento perfeito em uma única peça!
        
        O short possui bolsos nas laterais, trazendo mais praticidade para o dia a dia.
        
        O cropped conta com bojo e uma linda abertura nas costas, deixando o look ainda mais moderno. Um conjunto que veste super bem e valoriza o corpo com muito conforto.`,
    },
    {
      id: 15,
      title: 'Conjunto Bicolor',
      price: 'R$ 69,99',
      images: [
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/724118708_17886318453591097_7671646102853352726_n.webp?_nc_cat=109&ig_cache_key=MzkyMDQ2Njc1NzQzNjEzNjQ4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=5f5e5FLzVZYQ7kNvwFBKG4Z&_nc_oc=AdoGexKL1OJjUGJHfC608p8yLMEbHm19l3AfgEyi5yWoMXXjsJouKv5KESAgzoJAux0CBj8kEJDUg4rUOnne1n0n&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=8TPR8A64KbY3dwlfZn6A8w&_nc_ss=7a22e&oh=00_AQDmBu3nFFjMklhJhxrBZatD_OQ91wyMrqRmAUGexXeqVg&oe=6A638321',
        'https://instagram.fbsb30-1.fna.fbcdn.net/v/t51.82787-15/722810868_17886318336591097_7737547845085946780_n.webp?_nc_cat=100&ig_cache_key=MzkyMDQ2NjE1NTc4MDA4NDU0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=j0T7ZMqGIP0Q7kNvwH_vX0s&_nc_oc=AdovN9DDGuHLktyCSPLOCI823R9RivkFSmU5t5f2FXY7VfiXDWoftliSPu0GQbae6urhe925pAHjEWU1Veir70hN&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbsb30-1.fna&_nc_gid=i8KZZ8B-baNz0rLBkobtSQ&_nc_ss=7a22e&oh=00_AQCVAkXTC6n8ROJ_H41lDJxpHeZmoHKNapaTNGXkWUEabA&oe=6A65EADC',
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
