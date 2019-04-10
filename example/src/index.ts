import "zone.js"
import "reflect-metadata"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { enableProdMode } from "@angular/core"

import { AppModule } from "./app.module"
//import { supportDocument } from "ack-angular-fx/web-animations.min"
//supportDocument(document)

enableProdMode()

platformBrowserDynamic().bootstrapModule(AppModule)