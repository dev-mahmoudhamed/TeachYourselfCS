import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reading-progress',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="reading-progress" [style.--progress]="progress() + '%'"></div>
  `,
    styles: [`
    .reading-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: var(--progress);
      height: 3px;
      background: var(--color-accent-gradient);
      z-index: calc(var(--z-fixed) + 1);
      transition: width 50ms ease-out;
      box-shadow: 0 0 10px var(--color-accent-glow);
    }
  `]
})
export class ReadingProgressComponent {
    progress = signal(0);

    @HostListener('window:scroll')
    onScroll(): void {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        this.progress.set(Math.min(100, Math.max(0, scrolled)));
    }
}
