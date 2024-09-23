import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { JobCardComponent } from "../shared/components/job-card/job-card.component";
import { MatSelectModule } from '@angular/material/select';
import { default as mach } from '../shared/json/machines.json';
import { MachineFrameComponent } from "./machine-frame/machine-frame.component";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'fen-new-job-form',
  standalone: true,
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'de' }],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule, JobCardComponent, MatSelectModule, MachineFrameComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './new-job-form.component.html',
  styleUrl: './new-job-form.component.scss'
})
export class NewJobFormComponent {
  jobForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  dateToday: Date = new Date();
  machines: any;

  constructor() {
    this.jobForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dateOfReceipt: new FormControl('', [Validators.required]),
      desiredDeadline: new FormControl('', [Validators.required]),
      client: new FormControl('', [Validators.required]),
      otherTests: new FormControl('', [Validators.required]),
      box: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
      typeOfTest: new FormControl('', [Validators.required]),
      climateState: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
    });
    console.log(this.jobForm.value)
    this.machines = mach
    console.log(this.jobForm.controls['typeOfTest']);
  }

  public onDate(event: any): void {
    console.log(this.jobForm.controls['desiredDeadline'].value);
  }

  containsMachine(machine: string): boolean {
    const tests = this.jobForm.controls['typeOfTest'].value
    return tests.includes(machine)
  }

}
