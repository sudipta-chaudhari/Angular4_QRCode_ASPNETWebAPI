/// <reference path="../typings/index.d.ts" />
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from "./app.component";
//Routed Components
import { HomeComponent } from './home/home.component';
import { QRCodeComponent } from './qrcode/qrcode.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routes
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        QRCodeComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }