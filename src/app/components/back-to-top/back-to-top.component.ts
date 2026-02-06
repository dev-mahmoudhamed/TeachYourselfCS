import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="back-to-top" 
      [class.visible]="isVisible()"
      (click)="scrollToTop()"
      aria-label="Back to top"
      title="Back to top"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: var(--spacing-8);
      right: var(--spacing-8);
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-bg-secondary);
      border: 1px solid var(--color-border-primary);
      border-radius: var(--radius-sm);
      color: var(--color-text-primary);
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-base);
      z-index: 1000;
    }

    .back-to-top.visible {
      opacity: 0.8;
      visibility: visible;
    }

    .back-to-top:hover {
      opacity: 1;
      background: var(--color-bg-tertiary);
    }

    .back-to-top svg {
      width: 20px;
      height: 20px;
    }
  `]
})
export class BackToTopComponent {
  isVisible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible.set(window.scrollY > 500);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
