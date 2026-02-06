import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="container header-container">
        <a href="#" class="logo" (click)="scrollToTop($event)">
          TeachYourselfCS
        </a>
        <nav class="nav">
          <a href="#tldr" class="nav-link">TL;DR</a>
          <a href="#subjects" class="nav-link">Subjects</a>
          <a href="#faq" class="nav-link">FAQ</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--color-bg-glass);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--color-border-primary);
    }

    .header-container {
      width: 90%;
      max-width: none;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
    }

    .logo {
      font-size: var(--font-size-lg);
      font-weight: 700;
      color: var(--color-text-primary);
      text-decoration: none;
    }

    .nav {
      display: flex;
      gap: var(--spacing-6);
    }

    .nav-link {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      text-decoration: none;
      font-weight: 500;
    }

    .nav-link:hover {
      color: var(--color-text-primary);
      text-decoration: none;
    }

    @media (max-width: 600px) {
      .nav {
        gap: var(--spacing-4);
      }
    }
  `]
})
export class HeaderComponent {
  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
