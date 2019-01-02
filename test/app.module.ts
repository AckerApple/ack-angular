import { NgModule, Component } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

@Component({
	selector: "app",
	template: "nothing here"
}) export class AppComponent {}

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent]
}) export class AppModule {}