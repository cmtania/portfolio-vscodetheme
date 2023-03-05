import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrainPageComponent } from 'src/features/brain-homepage/brain-page.component';
import { MainPageComponent } from 'src/features/main-page/main-page.component';
import { LoaderComponent } from 'src/features/shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    BrainPageComponent,
    MainPageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
