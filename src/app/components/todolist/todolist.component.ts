import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  // declarations
  unFinishtasks:string[];
  finishedTasks:string[];
 
  constructor() { }

  ngOnInit() {
    // Initialization
    this.unFinishtasks = [];
    this.finishedTasks = [];
  }

  addNewTask(val) {
    // adding a new task to the unfinishedtask array 
    this.unFinishtasks.unshift(val);
    return false;
  }

  removeTask(val) {
    // this will remove a task using the val as an index 
    // but before removing the task this will add it to the finished task array.
    let task = this.unFinishtasks[val];
    this.finishedTasks.unshift(task);
    this.unFinishtasks.splice(val,1);
  }

}
