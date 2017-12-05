export { AckModule } from "./AckModule";
export { RouteWatchReporter } from "./RouteWatchReporter";

export { declarations as components } from "./declarations";
export { declarations as pipes } from "./pipes";

import * as ackX from "ack-x/index-browser"
export const ack = ackX

export * from "./providers";