import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TldrComponent } from './components/tldr/tldr.component';
import { WhyLearnComponent } from './components/why-learn/why-learn.component';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    TldrComponent,
    WhyLearnComponent,
    SubjectsListComponent,
    FaqComponent,
    FooterComponent,
    BackToTopComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-tldr></app-tldr>
      <app-why-learn></app-why-learn>
      <app-subjects-list></app-subjects-list>
      <app-faq></app-faq>
    </main>
    <app-footer></app-footer>
    <app-back-to-top></app-back-to-top>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class App { }
