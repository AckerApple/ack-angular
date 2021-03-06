export { HtmlSizeService } from "./directives/HtmlSizeWatcher";
import { HtmlSizeService } from "./directives/HtmlSizeWatcher";
export { Log } from "./providers/Log";
import { Log } from "./providers/Log";
export { AckApp } from "./providers/AckApp.provider";
import { AckApp } from "./providers/AckApp.provider";
export { Prompts } from "./providers/Prompts";
import { Prompts } from "./providers/Prompts";
export { ErrorLog } from "./providers/ErrorLog";
import { ErrorLog } from "./providers/ErrorLog";
export { UrlVars } from "./providers/UrlVars";
import { UrlVars } from "./providers/UrlVars";
export { WindowService } from "./providers/WindowService";
import { WindowService } from "./providers/WindowService";
export { DocumentService } from "./providers/DocumentService";
import { DocumentService } from "./providers/DocumentService";
export var providers = [
    Log,
    ErrorLog,
    AckApp,
    UrlVars,
    WindowService,
    DocumentService,
    Prompts,
    HtmlSizeService
];
//# sourceMappingURL=providers.js.map