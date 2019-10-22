import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'graph-link',
    template: `
        <svg width="100%" height="100%">
            <g>
                <!-- 
                M move to command
                C for Beizer curve, control 1, control 2, and end point 
                -->
                <path 
                d="M 10 10 L 100 10"
                [style.stroke-width.px]="1" 
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