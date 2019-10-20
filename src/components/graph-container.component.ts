import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graph-container',
  template: `
    <div>
      <button (click)="add()">Add</button>
      <graph-node *ngFor="let id of list"></graph-node>
      <graph-link></graph-link>
    </div>
  `
})

export class GraphContainerComponent implements OnInit {
  constructor() { }

  public list = [1,2];

  ngOnInit() {
  }

  add() {
    const id = this.list.length;
    this.list.push(id);
  }
}
