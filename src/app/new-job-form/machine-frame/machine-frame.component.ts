import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'fen-machine-frame',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './machine-frame.component.html',
  styleUrl: './machine-frame.component.scss'
})
export class MachineFrameComponent {
  @Output() machineDataEvent = new EventEmitter<any>();
  climates: string[] = ["Labor", "Praxis"];
  testimonials: string[] = [];

  climateState = new FormControl('', [Validators.required]);

  dataToJobFrame() {
    setTimeout(() => {
      const machineData = {
        "climateState": this.climateState.value,
        "testimonial": ""
      }
      console.log(this.climateState.value);

      this.machineDataEvent.emit(machineData);
    }, 10);

  }

}
