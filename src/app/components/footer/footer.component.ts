import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container content-container">
        <div class="footer-grid">
          <div class="footer-about">
            <h3>Who made this?</h3>
            <p>
              This guide was originally written by Ozan Onay and Myles Byrne of Bradfield School of Computer Science in San Francisco.
            </p>
            <p>
              In 2026, it was updated with modern resources and new essential topics by 
              <a href="https://www.linkedin.com/in/dev-mahmoudhamed/" target="_blank" rel="noopener"><strong>dev-mahmoudhamed</strong></a>.
            </p>
          </div>
          
          <div class="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="https://teachyourselfcs.com" target="_blank" rel="noopener">Original Site</a></li>
              <li><a href="https://github.com/ossu/computer-science" target="_blank" rel="noopener">OSSU Curriculum</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 TeachYourselfCS Clone. Keep learning.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      padding: var(--spacing-16) 0 var(--spacing-8);
      border-top: 1px solid var(--color-border-primary);
      margin-top: var(--spacing-20);
      background: var(--color-bg-secondary);
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--spacing-12);
      margin-bottom: var(--spacing-12);
    }

    .footer-about h3, .footer-links h3 {
      font-size: var(--font-size-lg);
      margin-bottom: var(--spacing-4);
    }

    .footer-links ul {
      list-style: none;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: var(--spacing-2);
    }

    .footer-bottom {
      border-top: 1px solid var(--color-border-primary);
      padding-top: var(--spacing-8);
      text-align: center;
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-8);
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
