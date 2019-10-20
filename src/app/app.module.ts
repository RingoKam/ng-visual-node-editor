import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphNodeComponent } from '../components/graph-node.component';
import { GraphContainerComponent } from 'src/components/graph-container.component';
import { GraphLinkComponent } from 'src/components/graph-link.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphNodeComponent,
    GraphContainerComponent,
    GraphLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
