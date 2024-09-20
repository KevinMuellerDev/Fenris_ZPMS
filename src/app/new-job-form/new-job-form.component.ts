import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'fen-new-job-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './new-job-form.component.html',
  styleUrl: './new-job-form.component.scss'
})
export class NewJobFormComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  date1 = new FormControl('', Validators.required)
  matcher = new MyErrorStateMatcher();

  dateToday: number = 0;
  roomsFilter: any;

  public onDate(event: any): void {
    console.log(this.date1.value);
    
  }

}
