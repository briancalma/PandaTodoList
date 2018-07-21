import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  unFinishtasks:string[];
  finishedTasks:string[];

  unFinishTaskCount:number;
  finishedTaskCount:number;

  constructor() { }

  ngOnInit() {
    this.unFinishtasks = ['Eat','Code','Sleep'];
    this.finishedTasks = [];
    this.finishedTaskCount = this.finishedTasks.length;
    this.unFinishTaskCount = this.unFinishtasks.length;
  }

  addNewTask(val) {
    this.unFinishtasks.unshift(val);
    return false;
  }

  removeTask(val) {
    // this.finishedTasks.push(this.finishedTasks[val]);
    let task = this.unFinishtasks[val];

    this.finishedTasks.unshift(task);

    this.unFinishtasks.splice(val,1);
  }

}
