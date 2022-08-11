import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NavService } from './shell/static-sidebar/nav-list-item/nav-service';
import { SharedModule } from './shell/shared-module/shared.module';
import { IconsModule } from './icons.module';
import { ScrollService } from './services/scroll.service';
import { HttpClientModule } from '@angular/common/http';
import { GraphqlModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CommonModule,
    IconsModule,
    SharedModule,
    GraphqlModule,
    HttpClientModule,

  ],
  providers: [
    NavService, ScrollService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
