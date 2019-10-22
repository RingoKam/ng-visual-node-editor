import { Component, OnInit, ElementRef, HostListener, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { fromEvent, BehaviorSubject, Subscription } from 'rxjs';
import { filter, throttleTime, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'graph-node',
  template: `
    <div #el
      class="graph-node"
      [style.width.px]="width"
      [style.height.px]="height"
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

  @Input() 
  public width = 150;
  @Input()
  public height = null;
  @Input()
  public x: number;
  @Input()
  public y: number;

  @Output()
  public xChange: EventEmitter<number> = new EventEmitter();
  @Output()
  public yChange: EventEmitter<number> = new EventEmitter();
  @Output()
  public widthChange: EventEmitter<number> = new EventEmitter();
  @Output()
  public heightChange: EventEmitter<number> = new EventEmitter();

  public enableMouseMove: boolean;
  private sub: Subscription
  
  //resolve before CD is run... (false if what you are looking for is after ngIf condition eval)
  @ViewChild("el", { read: ElementRef, static: true })
  private divElemRef : ElementRef;

  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.calcMidPoint();
    this.sub = fromEvent(document, "mousemove")
      .pipe(
          filter(() => this.enableMouseMove),
      ).subscribe((event:MouseEvent) => {
        this.calcMidPoint();
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
    this.enableMouseMove = false;
  }

  @HostListener("mousedown", ["$event"])
  mouseDown(event: MouseEvent) {
    console.log("mouse down event");
    this.enableMouseMove = true;
  }

  calcMidPoint() {
    /* https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    x,y top left of the point
    width of the element
    height of the lement
    top = from top of the screen to top left corner, same as y?
    */ 
    const { x, y, width, height, top, left, right, bottom } = this.divElemRef.nativeElement.getBoundingClientRect();
    
  }
}
