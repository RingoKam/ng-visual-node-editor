import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { fromEvent, BehaviorSubject, Subscription } from 'rxjs';
import { filter, throttleTime, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'graph-node',
  template: `
    <div
      class="graph-node"
      [style.width.px]="width"
      [style.top.px]="y"
      [style.left.px]="x">
      Hello world...
    </div>
  `,
  styles: [`
    .graph-node {
      position: absolute;
      box-sizing: border-box;
      color: red;
      background-color: yellow;
      border: black solid 1px;
      user-select: none;
      cursor: move;
    }
  `]
})
 
export class GraphNodeComponent implements OnInit {

  @Input() width = 150;

  public x: number;
  public y: number;
  public mouseX: number;
  public mouseY: number;

  public enableMouseMove: boolean;
  private sub: Subscription

  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.sub = fromEvent(document, "mousemove")
      .pipe(
          filter(() => this.enableMouseMove),
      ).subscribe((event:MouseEvent) => {
        const center = this.width / 2;
        this.x =  event.clientX - center;
        this.y =  event.clientY;
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  @HostListener("mouseup", ["$event"])
  mouseUp(event: MouseEvent) {
    console.log("mouse up event");
    console.log(event);
    this.enableMouseMove = false;
  }

  @HostListener("mousedown", ["$event"])
  mouseDown(event: MouseEvent) {
    console.log("mouse down event");
    console.log(event);
    this.enableMouseMove = true;
  }
}
