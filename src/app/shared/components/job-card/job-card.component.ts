import { Component, Input, input } from '@angular/core';
import { ToolJob } from '../../interfaces/tool-job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fen-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  @Input() cardData?:ToolJob;

}
