import { Component, OnInit, ViewChild } from '@angular/core';

import { Signup } from './signup';



@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  @ViewChild('f') form: any;

  model: Signup = new Signup();
  langs: string[] = [
    'English',
    'French',
    'German'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

}
