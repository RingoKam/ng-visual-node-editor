import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'graph-link',
    template: `
        <svg width="100%" height="100%">
            <g>
                <path d="m 1 1 L 0 1 L 1 -1 z" 
                [style.stroke-width.px]="100" 
                [style.stroke]="'black'">
                </path>
            </g>
        </svg>
    `
})
export class GraphLinkComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}