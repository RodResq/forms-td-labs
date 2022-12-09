import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  langs: string[] = [
    'English',
    'French',
    'German'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value) {
    console.log(value);
  }

}
