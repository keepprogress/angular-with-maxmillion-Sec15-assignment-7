import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  statusOptions = ['stable', 'critical', 'finished'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, CustomValidators.forbiddenNames],
        CustomValidators.asyncForbiddenProjectNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable')
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
