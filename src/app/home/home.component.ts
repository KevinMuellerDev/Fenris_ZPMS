import { Component, inject } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { ToolJob } from '../shared/interfaces/tool-job';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from "../job-card/job-card.component";

@Component({
  selector: 'fen-home',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public jobData: ToolJob[] = []
  dataService = inject(DataService);

  constructor() {
    this.dataService.getJobs().subscribe(res => {
      this.jobData = res;
    });

  }
}
