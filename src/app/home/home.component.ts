import { Component, inject } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { ToolJob } from '../shared/interfaces/tool-job';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from "../job-card/job-card.component";
import { BehaviorSubject, distinctUntilChanged, interval, Observable, startWith, subscribeOn, switchMap, tap } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'fen-home',
  standalone: true,
  imports: [CommonModule, JobCardComponent, MatProgressSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  jobData$: Observable<ToolJob[]>;
  loading$ = new BehaviorSubject<Boolean>(true);
  dataService = inject(DataService);

  constructor() {
    this.loading$.next(true)  
    this.jobData$ = interval(3000).pipe(
      startWith(0),
      switchMap(() => this.dataService.getJobs()),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
      tap(()=>{this.loading$.next(false)})
    );

    this.jobData$.forEach((data)=>{
      console.log(this.jobData$);
    })
    
  }
}
