import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './shared/components/main/main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ESKDClassElementComponent } from './eskdclass-element/eskdclass-element.component';
import { MyfilterPipe } from './shared/pipes/myfilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreefilterComponent } from './shared/components/treefilter/treefilter.component';
import { ClassviewComponent } from './shared/components/classview/classview.component';
import { ViewerModule } from 'ng2-adsk-forge-viewer';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ESKDClassElementComponent,
    MyfilterPipe,
    TreefilterComponent,
    ClassviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ViewerModule,
    HttpClientModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
