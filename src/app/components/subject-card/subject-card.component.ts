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
        <div class="description-container">
          <div class="text-content">
            <p class="description">{{ subject.description }}</p>
            <p class="why">{{ subject.whyLearn }}</p>
          </div>
          <div class="image-placeholder">
            <!-- Image placeholder for future use -->
            <div class="placeholder-box"></div>
          </div>
        </div>
        
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
:host {
      display: block;
      border-bottom: 2px solid var(--color-border-primary);
    }

    .subject-card {
      padding-top: var(--spacing-8);
      padding-bottom: var(--spacing-4);
      scroll-margin-top: 80px;
    }

    .subject-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: var(--spacing-4);
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

    .description-container {
      display: flex;
      gap: var(--spacing-8);
      margin-bottom: var(--spacing-8);
    }

    .text-content {
      flex: 3;
    }

    .image-placeholder {
      flex: 1;
      display: none; /* Hidden by default until images are added */
    }

    /* Show on larger screens if needed, strictly as requested, currently just a placeholder div */
    @media (min-width: 768px) {
      .image-placeholder {
        display: block;
      }
    }

    .placeholder-box {
      width: 100%;
      padding-bottom: 150%; /* Aspect ratio */
      background-color: var(--color-bg-secondary);
      border-radius: var(--radius-sm);
    }

    .subject-body .description {
      font-size: var(--font-size-lg);
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-4);
    }

    .subject-body .why {
      font-size: var(--font-size-base);
      color: var(--color-text-secondary);
      margin-bottom: 0;
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
      background: var(--color-bg-secondary);
      padding: var(--spacing-6);
      border-radius: var(--radius-md);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
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
      
      .description-container {
        flex-direction: column;
      }
      
      .image-placeholder {
        display: none;
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
