import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-container">
        <h1 class="hero-title">
          Teach Yourself Computer Science
        </h1>
        
        <p class="hero-description">
          If you're a self-taught engineer or bootcamp grad, you owe it to yourself to learn computer science. 
          Thankfully, you can give yourself a world-class CS education without investing years and a fortune in a degree program.
        </p>

        <p class="hero-subtext">
          There are plenty of resources out there, but some are better than others. You don't need yet another "200+ Free Online Courses" listicle. You need answers to these questions:
        </p>
        <ul class="hero-list">
          <li>Which subjects should you learn, and why?</li>
          <li>What is the best book or video lecture series for each subject?</li>
        </ul>
        <p class="hero-subtext">
          This guide is our attempt to definitively answer these questions.
        </p>
        
        <div class="hero-cta">
          <a href="#tldr" class="btn-simple">Jump to TL;DR</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: var(--spacing-20) 0 var(--spacing-12);
      text-align: left;
    }

    .hero-container {
      width: 75%;
      margin: 0 auto;
      max-width: none;
    }

    .hero-title {
      font-size: var(--font-size-4xl);
      margin-bottom: var(--spacing-6);
    }

    .hero-description {
      font-size: var(--font-size-lg);
      margin-bottom: var(--spacing-6);
    }

    .hero-subtext {
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-4);
    }

    .hero-list {
      margin-bottom: var(--spacing-6);
      padding-left: var(--spacing-6);
      color: var(--color-text-secondary);
    }

    .hero-list li {
      margin-bottom: var(--spacing-2);
    }

    .hero-cta {
      margin-top: var(--spacing-12);
    }

    .btn-simple {
      display: inline-block;
      padding: var(--spacing-2) var(--spacing-4);
      background: var(--color-bg-secondary);
      border: 1px solid var(--color-border-primary);
      border-radius: var(--radius-sm);
      color: var(--color-text-primary);
      text-decoration: none;
      font-weight: 600;
    }

    .btn-simple:hover {
      background: var(--color-bg-tertiary);
      text-decoration: none;
    }
  `]
})
export class HeroComponent { }
