import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graph-container',
  template: `
    <div>
      <button (click)="add()">Add</button>
      <graph-node 
        *ngFor="let n of list; trackBy track"
        trackBy
        [(x)]="n.x"
        [(y)]="n.y"
        [(width)]="n.width"
        [(height)]="n.height">
      </graph-node>
      <graph-link></graph-link>
    </div>
  `
})

export class GraphContainerComponent implements OnInit {
  constructor() { }

  private default = {
    id: 0,
    x: 0,
    y: 0,
    width: 150,
    height: null
  }

  //Hold Tree Struct
  public list = [];

  ngOnInit() {
  }

  add() {
    const id = this.list.length;
    this.default.id = id;
    this.list.push({...this.default});
  }

  track(index, item) {
    return item.id;
  }
}
