import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/contact';
import { Faq } from './components/faq/faq';
import { InstagramBanner } from './components/instagram-banner/instagram-banner';
import { About } from './components/about/about';
import { InfoBar } from './components/info-bar/info-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Contact, Faq, InstagramBanner, About, InfoBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sunset-moda-praia-template');
}
