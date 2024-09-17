import { Component, inject } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { ToolJob } from '../shared/interfaces/tool-job';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from "../job-card/job-card.component";
import { distinctUntilChanged, interval, Observable, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'fen-home',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  jobData$: Observable<ToolJob[]>;
  dataService = inject(DataService);

  constructor() {
    this.jobData$ = interval(10000).pipe(
      startWith(0),
      switchMap(() => this.dataService.getJobs()),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
    );
  }
}
