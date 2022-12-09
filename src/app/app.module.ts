import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModelFormComponent } from './model-form/model-form.component';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
