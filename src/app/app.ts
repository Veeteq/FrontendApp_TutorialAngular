import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ Header, ReactiveFormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TutorialECom');
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      date: [new Date().toISOString().substring(0, 10)] // Format to YYYY-MM-DD
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
