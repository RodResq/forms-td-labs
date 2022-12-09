import { Component, OnInit } from '@angular/core';

import { Signup } from './signup';



@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  model: Signup = new Signup();
  langs: string[] = [
    'English',
    'French',
    'German'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value) {
    console.log(this.model);
  }

}
