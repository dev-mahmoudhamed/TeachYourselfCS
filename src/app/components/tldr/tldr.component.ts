import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-tldr',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tldr" class="tldr">
      <div class="container content-container">
        <h2 class="section-title">TL;DR</h2>
        <p>
          Study all twelve subjects below, in roughly the presented order, using either the suggested textbook 
          or video lecture series, but ideally both. Aim for 100-200 hours of study of each topic, then 
          revisit favorites throughout your career.
        </p>
        
        <div class="table-responsive">
          <table class="tldr-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Why study?</th>
                <th>Book</th>
                <th>Videos</th>
              </tr>
            </thead>
            <tbody>
              @for (subject of subjects; track subject.id) {
                <tr>
                  <td class="col-subject">
                    <a [href]="'#' + subject.id" class="subject-link">{{ subject.shortTitle }}</a>
                  </td>
                  <td class="col-why">
                    {{ subject.whyLearn }}
                  </td>
                  <td class="col-book">
                    <a [href]="subject.book.url" target="_blank" rel="noopener">{{ subject.book.title }}</a>
                  </td>
                  <td class="col-video">
                    <a [href]="subject.videos.url" target="_blank" rel="noopener">{{ subject.videos.title }}</a>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        
        <div class="too-much">
          <h3>Still too much?</h3>
          <p>
            If the idea of self-studying 12 topics over multiple years feels overwhelming, we suggest you focus on just two books:
          </p>
          <ul>
            <li>
              <a href="http://csapp.cs.cmu.edu/" target="_blank" rel="noopener">
                <strong>Computer Systems: A Programmer's Perspective</strong>
              </a> by Bryant & O'Hallaron
            </li>
            <li>
              <a href="https://dataintensive.net/" target="_blank" rel="noopener">
                <strong>Designing Data-Intensive Applications</strong>
              </a> by Martin Kleppmann
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tldr {
      background: var(--color-bg-primary);
    }

    .table-responsive {
      overflow-x: auto;
      margin: var(--spacing-8) 0;
      border: 1px solid var(--color-border-primary);
      border-radius: var(--radius-md);
    }

    .tldr-table {
      width: 100%;
      border-collapse: collapse;
      min-width: 800px;
      font-size: var(--font-size-sm);
    }

    .tldr-table th, .tldr-table td {
      padding: var(--spacing-4);
      border-bottom: 1px solid var(--color-border-primary);
      vertical-align: top;
      text-align: left;
    }

    .tldr-table th {
      background: var(--color-bg-tertiary);
      font-weight: 600;
      color: var(--color-text-primary);
      white-space: nowrap;
    }

    .tldr-table tr:last-child td {
      border-bottom: none;
    }

    .tldr-table tr:hover {
      background: var(--color-bg-secondary);
    }

    .col-subject {
      width: 15%;
      font-weight: 600;
    }

    .col-why {
      width: 45%;
      color: var(--color-text-secondary);
    }

    .col-book {
      width: 20%;
    }

    .col-video {
      width: 20%;
    }

    .subject-link {
      color: var(--color-accent-primary);
      text-decoration: none;
    }

    .subject-link:hover {
      text-decoration: underline;
    }

    .too-much {
      margin-top: var(--spacing-12);
      padding: var(--spacing-6);
      border: 1px solid var(--color-border-primary);
      border-radius: var(--radius-md);
      background: var(--color-bg-secondary);
    }

    .too-much h3 {
      margin-top: 0;
      font-size: var(--font-size-xl);
    }

    .too-much ul {
      margin-bottom: 0;
      padding-left: var(--spacing-6);
    }

    .too-much li {
      margin-bottom: var(--spacing-2);
    }
  `]
})
export class TldrComponent {
  private subjectsService = inject(SubjectsService);
  subjects = this.subjectsService.getSubjects();
}
