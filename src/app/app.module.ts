
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { WeatherService } from "./weather.service";

@NgModule({
    declarations: [
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