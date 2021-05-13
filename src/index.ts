export { AckModule } from "./AckModule"
export { AckRouterModule } from "./modules/router/AckRouterModule"
export { RouteWatchReporter } from "./modules/router/RouteWatchReporter"

export { declarations as components } from "./declarations"
export { declarations as pipes } from "./pipes"

export { ack } from "./ack"
export { AckArray } from "./directives/AckArray.directive"

// moved to /modules/offline
// export { httpOptions } from "./httpOptions"
// export { AckApi } from "./modules/offline/AckApi"
// export { AckOfflineModule } from "./modules/offline/module"; // no longer include by default

export * from "./providers"