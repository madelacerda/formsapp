import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [],
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndCondition: [false, Validators.requiredTrue],
  });

  public person = {
    gender: 'M',
    wantNotifications: false,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm.reset(this.person);
  }

  isValidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndCondition, ...newPerson } = this.myForm.value;
    console.log(this.myForm.value);
    this.person = newPerson;
    console.log(this.person);
  }
}
