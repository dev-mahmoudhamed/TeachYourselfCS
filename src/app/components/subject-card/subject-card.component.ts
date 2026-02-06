import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from '../../models/subject.model';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article [id]="subject.id" class="subject-card">
      <div class="subject-header">
        <h3 class="subject-title">
          {{ subject.title }}
          @if (subject.isNew) {
            <span class="new-tag">New</span>
          }
        </h3>
        <span class="hours-tag">{{ subject.hours }} hours</span>
      </div>
      
      <div class="subject-body">
        <p class="description">{{ subject.description }}</p>
        <p class="why">{{ subject.whyLearn }}</p>
        
        <div class="primary-resources">
          <div class="resource-block">
            <h4>Best Book</h4>
            <div class="resource-item">
              <a [href]="subject.book.url" target="_blank" rel="noopener">{{ subject.book.title }}</a>
              <span class="author" *ngIf="subject.book.author">by {{ subject.book.author }}</span>
              <p class="resource-desc" *ngIf="subject.book.description">{{ subject.book.description }}</p>
            </div>
          </div>

          <div class="resource-block">
            <h4>Best Videos</h4>
            <div class="resource-item">
              <a [href]="subject.videos.url" target="_blank" rel="noopener">{{ subject.videos.title }}</a>
              <span class="author" *ngIf="subject.videos.author">by {{ subject.videos.author }}</span>
              <p class="resource-desc" *ngIf="subject.videos.description">{{ subject.videos.description }}</p>
            </div>
          </div>
        </div>

        @if (subject.projects && subject.projects.length > 0) {
          <div class="projects-block">
            <h4>Suggested Projects</h4>
            <ul>
              @for (project of subject.projects; track project) {
                <li>{{ project }}</li>
              }
            </ul>
          </div>
        }

        @if (subject.alternativeResources && subject.alternativeResources.length > 0) {
          <details class="alt-details">
            <summary>Alternative Resources</summary>
            <ul>
              @for (res of subject.alternativeResources; track res.url) {
                <li>
                  <a [href]="res.url" target="_blank" rel="noopener">{{ res.title }}</a>
                  <span class="author" *ngIf="res.author"> ({{ res.author }})</span>
                </li>
              }
            </ul>
          </details>
        }
      </div>
    </article>
  `,
  styles: [`
    .subject-card {
      padding-top: var(--spacing-8);
      scroll-margin-top: 80px;
    }

    .subject-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: var(--spacing-4);
      border-bottom: 1px solid var(--color-border-primary);
      padding-bottom: var(--spacing-2);
    }

    .subject-title {
      margin: 0;
      font-size: var(--font-size-2xl);
    }

    .new-tag {
      font-size: 0.7rem;
      background: var(--color-accent-tertiary);
      color: white;
      padding: 2px 6px;
      border-radius: 4px;
      vertical-align: middle;
      margin-left: var(--spacing-2);
      text-transform: uppercase;
    }

    .hours-tag {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
    }

    .subject-body .description {
      font-size: var(--font-size-lg);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-4);
    }

    .subject-body .why {
      font-size: var(--font-size-base);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-8);
    }

    h4 {
      font-size: var(--font-size-base);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--color-text-tertiary);
      margin-bottom: var(--spacing-4);
    }

    .primary-resources {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-8);
      margin-bottom: var(--spacing-8);
    }

    .resource-item a {
      font-weight: 600;
      font-size: var(--font-size-lg);
      display: block;
      margin-bottom: var(--spacing-1);
    }

    .resource-item .author {
      font-size: var(--font-size-sm);
      color: var(--color-text-tertiary);
    }

    .resource-desc {
      margin-top: var(--spacing-2);
      font-size: var(--font-size-sm);
    }

    .projects-block {
      margin-bottom: var(--spacing-8);
    }

    .projects-block ul {
      padding-left: var(--spacing-6);
    }

    .alt-details {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
    }

    .alt-details summary {
      cursor: pointer;
      margin-bottom: var(--spacing-2);
    }

    .alt-details ul {
      padding-left: var(--spacing-6);
    }

    @media (max-width: 768px) {
      .primary-resources {
        grid-template-columns: 1fr;
        gap: var(--spacing-6);
      }
    }
  `]
})
export class SubjectCardComponent {
  @Input({ required: true }) subject!: Subject;

  getResourceIcon(type: string): string {
    const icons: Record<string, string> = {
      'book': '📖',
      'video': '🎬',
      'course': '🎓',
      'paper': '📄',
      'website': '🌐'
    };
    return icons[type] || '📌';
  }
}
