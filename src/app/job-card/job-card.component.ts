import { Component, Input, input } from '@angular/core';
import { ToolJob } from '../shared/interfaces/tool-job';

@Component({
  selector: 'fen-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  @Input() cardData?:ToolJob;
  
}
