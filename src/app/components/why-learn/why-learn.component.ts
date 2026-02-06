import { Component } from '@angular/core';

@Component({
  selector: 'app-why-learn',
  standalone: true,
  template: `
    <section class="why-learn">
      <div class="container content-container">
        <h2>Why learn computer science?</h2>
        
        <p>
          There are 2 types of software engineer: those who understand computer science well enough to do 
          challenging, innovative work, and those who just get by because they're familiar with a few high-level tools.
        </p>
        
        <p>
          Both call themselves software engineers, and both tend to earn similar salaries in their early careers. 
          But <strong>Type 1 engineers</strong> progress toward more fulfilling and well-remunerated work over time, 
          whether that's valuable commercial work or breakthrough open-source projects, technical leadership or 
          high-quality individual contributions.
        </p>
        
        <p>
          Type 1 engineers find ways to learn computer science in depth, whether through conventional means or by 
          relentlessly learning throughout their careers. Type 2 engineers typically stay at the surface, learning 
          specific tools and technologies rather than their underlying foundations.
        </p>

        <div class="quote-box">
          <blockquote>
            "The global SMS system does around 20bn messages a day. WhatsApp is now doing 42bn. With 57 engineers."
          </blockquote>
          <cite>— Benedict Evans</cite>
        </div>

        <p>
          In 2026, with AI tools becoming ubiquitous, the importance of understanding fundamentals has only increased. 
          Those who truly understand computer science can leverage AI tools to multiply their effectiveness, while 
          those who don't risk being replaced by them.
        </p>

        <h3>What you'll gain:</h3>
        <ul class="benefits-simple">
          <li>Ability to work on challenging, high-value problems</li>
          <li>Substantially higher professional ceiling and earning potential</li>
          <li>The ability to debug and solve issues others find impossible</li>
          <li>Deeper architectural insight for better system design</li>
          <li>The capability to leverage AI tools as a multiplier for your expertise</li>
        </ul>
      </div>
    </section>
  `,
  styles: [`
    .why-learn {
      background: var(--color-bg-primary);
    }

    .quote-box {
      margin: var(--spacing-8) 0;
      padding: var(--spacing-4) var(--spacing-6);
      border-left: 3px solid var(--color-border-primary);
      background: var(--color-bg-secondary);
    }

    .quote-box blockquote {
      font-size: var(--font-size-lg);
      font-style: italic;
      margin-bottom: var(--spacing-2);
    }

    .quote-box cite {
      color: var(--color-text-tertiary);
      font-size: var(--font-size-sm);
    }

    .benefits-simple {
      padding-left: var(--spacing-6);
      color: var(--color-text-secondary);
    }

    .benefits-simple li {
      margin-bottom: var(--spacing-2);
    }
  `]
})
export class WhyLearnComponent { }
