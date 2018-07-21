import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';

import { RouterModule,Routes } from '@angular/router';

const appRoot = [
  {path:"",component:TodolistComponent},
  {path:"about",component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
