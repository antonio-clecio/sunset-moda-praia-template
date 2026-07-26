import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  phoneNumber = '5561992890048';

  get whatsappUrl(): string {
    const message = encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre as peças.');
    return `https://wa.me/${this.phoneNumber}?text=${message}`;
  }
}