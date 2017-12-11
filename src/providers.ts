export { Log } from "./providers/Log";
import { Log } from "./providers/Log";

export { AckApp } from "./providers/AckApp";
import { AckApp } from "./providers/AckApp";

export { AckOffline } from "./providers/AckOffline";
import { AckOffline } from "./providers/AckOffline";

export { AckCache } from "./providers/AckCache";
import { AckCache } from "./providers/AckCache";

export { AckQue } from "./providers/AckQue";
import { AckQue } from "./providers/AckQue";

export { ErrorLog } from "./providers/ErrorLog";
import { ErrorLog } from "./providers/ErrorLog";

export * from "./providers/AckApi";
import { AckApi } from "./providers/AckApi";

export { UrlVars } from "./providers/UrlVars";
import { UrlVars } from "./providers/UrlVars";

export { WindowService } from "./providers/WindowService";
import { WindowService } from "./providers/WindowService";

export { DocumentService } from "./providers/DocumentService";
import { DocumentService } from "./providers/DocumentService";

export const providers = [
  Log,
  ErrorLog,
  AckApp,
  AckOffline,
  AckCache,
  AckQue,
  AckApi,
  UrlVars,
  WindowService,
  DocumentService
]
