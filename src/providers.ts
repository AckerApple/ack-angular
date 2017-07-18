export * from "./Log";
import { Log } from "./Log";

export * from "./AckOffline";
import { AckOffline } from "./AckOffline";

export * from "./AckCache";
import { AckCache } from "./AckCache";

export * from "./AckQue";
import { AckQue } from "./AckQue";

export * from "./ErrorLog";
import { ErrorLog } from "./ErrorLog";

export * from "./AckApi";
import { AckApi } from "./AckApi";

export * from "./UrlVars";
import { UrlVars } from "./UrlVars";

export * from "./WindowService";
import { WindowService } from "./WindowService";

export const providers = [
  Log,
  ErrorLog,
  AckOffline,
  AckCache,
  AckQue,
  AckApi,
  UrlVars,
  WindowService
]
