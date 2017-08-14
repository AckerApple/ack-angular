export { AckModule } from "./AckModule";

export { declarations as components } from "./components";
export { declarations as pipes } from "./pipes";

import * as ackX from "ack-x/index-browser"
export const ack = ackX

export * from "./providers";