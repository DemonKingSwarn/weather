
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { WeatherService } from "./weather.service";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [
        RouterOutlet,
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [WeatherService],
    bootstrap: [AppComponent]
})

export class AppModule { }