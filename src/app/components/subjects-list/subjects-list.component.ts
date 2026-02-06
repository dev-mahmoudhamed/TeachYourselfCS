import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsService } from '../../services/subjects.service';
import { SubjectCardComponent } from '../subject-card/subject-card.component';

@Component({
  selector: 'app-subjects-list',
  standalone: true,
  imports: [CommonModule, SubjectCardComponent],
  template: `
    <section id="subjects" class="subjects-list">
      <div class="container content-container">
        <h2 class="section-title">Subject Guides</h2>
        <div class="subjects-container">
          @for (subject of subjects; track subject.id; let i = $index) {
            @if (subject.isNew && i === getFirstNewIndex()) {
              <div class="new-subjects-label">
                New Essential Topics for 2026
              </div>
            }
            <app-subject-card [subject]="subject"></app-subject-card>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .subjects-list {
      background: var(--color-bg-primary);
    }

    .section-title {
      margin-bottom: var(--spacing-4);
    }

    .subjects-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-12);
      margin-top: var(--spacing-8);
    }

    .new-subjects-label {
      font-size: var(--font-size-xl);
      font-weight: 700;
      color: var(--color-accent-tertiary);
      margin-top: var(--spacing-12);
      padding-bottom: var(--spacing-4);
      border-bottom: 2px solid var(--color-border-primary);
    }
  `]
})
export class SubjectsListComponent {
  private subjectsService = inject(SubjectsService);

  subjects = this.subjectsService.getSubjects();
  tableOfContents = this.subjectsService.getTableOfContents();

  getFirstNewIndex(): number {
    return this.subjects.findIndex(s => s.isNew);
  }
}
