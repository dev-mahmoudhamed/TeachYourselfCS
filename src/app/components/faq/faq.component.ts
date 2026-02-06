import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="faq" class="faq">
      <div class="container content-container">
        <h2>Frequently Asked Questions</h2>
        
        <div class="faq-list">
          @for (item of faqItems; track item.question) {
            <details class="faq-item">
              <summary>{{ item.question }}</summary>
              <div class="faq-answer" [innerHTML]="item.answer"></div>
            </details>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq {
      background: var(--color-bg-primary);
    }

    .faq-list {
      margin-top: var(--spacing-8);
    }

    .faq-item {
      margin-bottom: var(--spacing-4);
      border-bottom: 1px solid var(--color-border-primary);
    }

    .faq-item summary {
      padding: var(--spacing-4) 0;
      cursor: pointer;
      font-weight: 600;
      font-size: var(--font-size-lg);
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .faq-item summary::after {
      content: '+';
      font-size: 1.5rem;
      color: var(--color-text-tertiary);
    }

    .faq-item[open] summary::after {
      content: '−';
    }

    .faq-answer {
      padding: 0 0 var(--spacing-6);
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    .faq-answer ::global(p) {
      margin-bottom: var(--spacing-4);
    }

    .faq-answer ::global(ul) {
      padding-left: var(--spacing-6);
    }

    .faq-answer ::global(li) {
      margin-bottom: var(--spacing-2);
    }
  `]
})
export class FaqComponent {
  faqItems: FAQItem[] = [
    {
      question: 'Who is the target audience for this guide?',
      answer: `<p>We have in mind that you are a <strong>self-taught software engineer, bootcamp grad, or precocious student</strong> looking to supplement your knowledge with some self-study. The question of when to embark upon this journey is entirely personal, but most people tend to benefit from having some professional experience before diving too deep into CS theory.</p>
      <p>For instance, we notice that students love learning about database systems if they have already worked with databases professionally, or about computer networking if they've worked on a web project or two.</p>`
    },
    {
      question: 'What about AI and machine learning?',
      answer: `<p>We've added <strong>Machine Learning & AI</strong> as one of our three new essential topics for 2026. We believe that understanding ML fundamentals is now essential for every software engineer, not just specialists. The field has matured enough that there are excellent resources for learning it systematically.</p>
      <p>For more advanced AI work, we suggest building a strong foundation in math (linear algebra, probability) and algorithms first, then progressing through our recommended ML resources.</p>`
    },
    {
      question: 'How strict is the suggested sequencing?',
      answer: `<p>All of these subjects have significant overlap and refer to one another cyclically. Our suggested sequencing is mostly there to help you <strong>just get started</strong>. If you have a compelling reason to prefer a different sequence, go for it.</p>
      <p>The most significant "prerequisites" in our opinion are:</p>
      <ul>
        <li>Computer architecture before operating systems or databases</li>
        <li>Networking and operating systems before distributed systems</li>
        <li>Math fundamentals before machine learning</li>
      </ul>`
    },
    {
      question: 'What about trendy technology X?',
      answer: `<p>No single technology is important enough that learning to use it should be a core part of your education. On the other hand, it's great that you're excited to learn about it!</p>
      <p>The trick is to <strong>work backwards</strong> from the particular technology to the underlying field or concept, and learn that in depth. Once you understand the foundations, picking up any specific technology becomes much easier.</p>`
    },
    {
      question: 'Why are you still recommending SICP?',
      answer: `<p>Look, just try it. Some people find SICP mind-blowing, a characteristic shared by very few other books. If you don't like it, you can always try something else like <strong>Composing Programs</strong> (our updated primary recommendation) and perhaps return to SICP later.</p>
      <p>SICP is unique in its ability to alter your fundamental beliefs about computers and programming. The potential reward makes it worth trying.</p>`
    },
    {
      question: 'How do I balance this with my full-time job?',
      answer: `<p>Most people studying while working full-time can expect to cover <strong>1-2 subjects per year</strong> with consistent effort. That means completing this full curriculum would take 6-12 years of part-time study.</p>
      <p>That might sound daunting, but remember: you don't need to complete everything to benefit. Each subject you master gives you new capabilities. Start with what interests you most or what's most relevant to your current work.</p>`
    },
    {
      question: 'How can I get textbooks cheaply?',
      answer: `<p>Many of the textbooks we suggest are <strong>freely available online</strong>, thanks to the generosity of their authors. For those that aren't, we suggest buying used copies of older editions.</p>
      <p>As a general rule, if there has been more than a couple of editions of a textbook, an older edition is perfectly adequate. It's certainly unlikely that the newest version is 10x better than an older one, even if that's what the price difference suggests!</p>`
    },
    {
      question: 'What about certifications?',
      answer: `<p>We don't generally recommend certifications as a primary learning path. The resources we recommend will teach you far more than any certification program, and your knowledge will be demonstrated through the projects you build and problems you solve.</p>
      <p>That said, if your employer pays for certifications or they're valued in your particular market, they can be a useful addition to your resume—just don't mistake them for deep learning.</p>`
    }
  ];
}
