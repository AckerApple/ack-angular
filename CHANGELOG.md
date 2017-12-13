# ack-angular - Change Log
All notable changes to this project will be documented here.

## [1.4.1] - 2017-12-11
- Added Prompts

## [1.4.0] - 2017-12-11
- Added ack-modal-layout
- Added ack-fixed-element-stage
- Added ack-modal logic to use ack-fixed-element-stage for display
- Added AckApp provider
- BREAKING CHANGES
  - AckModal aka ack-modal no longer has [(ref)] bindings
  - The following files have been moved from src/ to src/providers/
    - AckApi.ts
    - AckApp.ts
    - AckCache.ts
    - AckOffline.ts
    - AckQue.ts
    - DocumentService.ts
    - ErrorLog.ts
    - Log.ts
    - UrlVars.ts
    - WindowService.ts

## [1.3.0] - 2017-12-05
- BREAKING CHANGES
  - Upgraded to Angular5 from Angular4
  - Angular4 and Angular5 are not compatible

## [1.2.0] - 2017-11-28
- que cache now takes http params into account
- BREAKING CHANGES
  - AckApi.offlineMeta is now AckApi.sendFailMeta
  - AckApi.queModel is now AckApi.offlineModel
  - (onClose) in ack-modal and ack-options-modal has renamed to (close)

## [1.1.7] - 2017-11-16
- (onFormAlter) is now officialy (formAlter)

## [1.1.3] - 2017-11-16
- proper timeout of HttpClient request in AckApi
- A lot more typing in AckApi

## [1.1.0] - 2017-11-07
- absolute-overflow-x has a condensed layout
- moved component files around. May affect direct import. If file not found error, target components folder

## [1.0.3] - 2017-11-03
- Typescript 2.6.1 again for round 2

## [1.0.2] - 2017-11-03
- Back to Typescript 2.4.2 as 2.6.1 is causing issue for dependents

## [1.0.1] - 2017-11-03
### BREAKING CHANGES
- Cannot get Angular5 to work in other packages. Back to 4.4.6
- @angular/cli downgraded from 1.5.0 to 1.4.4


## [1.0.0] - 2017-11-02
### BREAKING CHANGES
- Using Angular5 and Angular5 maybe required to use this package
- (onFormChanged) is now (formChanged)
- (onFormAlter) is now (formAlter)
- (onEnterKey) is now (enterKey)
- (onEscapeKey) is now (escapeKey)

## [0.6.40] - 2017-11-01
- Fix unknown endless-loop in AckOptions when trying to get ngClass object. It's now a string thats returned

## [0.6.39] - 2017-10-30
- AckArray itemIndex() now allows defining alternate id

## [0.6.36] - 2017-10-26
- AckApi has response emitter

## [0.6.35] - 2017-10-16
- Pipes filter keys now returns array numbers if input variable is Array

## [0.6.33] - 2017-10-13
- added [(query)] to route-reporter

## [0.6.32] - 2017-10-11
- fixed aMath and ack pipes
- updated acx-x, which had breaking changes but they should effect here

## [0.6.26] - 2017-10-05
### Added
- [(state)] to route-reporter

## [0.6.25] - 2017-09-25
### Updated
- absolute-overflow-x now has an active bindable input

## [0.6.24] - 2017-09-05
### Updated
- ack-css-boot

## [0.6.22] - 2017-08-21
### Added
- more class attributes to absolute-overflow-x

## [0.6.20] - 2017-08-15
### Added
- between pipe
- numberSuffix pipe now accept extra argument to return value with suffix

## [0.6.17] - 2017-08-04
### Added
- AckArray.only
- AckArray.keyMap

## [0.6.16] - 2017-08-04
### Added
- [(elementSizeModel)]
### Fixed
- [(elementWidthModel)] ExpressionChanged error

## [0.6.14] - 2017-08-03
### Fixed
- AckApi config.params if an object key==null it is set to empty-string instead
- AckArray monitor array changes

## [0.6.12] - 2017-07-31
- AckArray has paging functionality

## [0.6.11] - 2017-07-27
- More AckArray functionality
- new pipe arrayOfObjects

## [0.6.4] - 2017-07-25
- AckArray now two-way binds array

## [0.6.2] - 2017-07-20
- Added AckArray directive
- Enhanced ack-modal to allow a showModel definition

## [0.6.2] - 2017-07-19
- Updated Angular from 4.2.6 to 4.3.0
- Added new screen and scroll directives

## [0.5.5] - 2017-07-18
- AckApi has ApiError EventEmitter
- Updated ack-css-boot
- UrlVars provider
- WindowService provider

## [0.5.3] - 2017-07-10
### Enhanced
- offline storage now auto params offlineSavedAt offlineCreatedAt timestamps

## [0.5.0] - 2017-06-30
### Upgraded
- Angular 4.1.3 to 4.2.5

## [0.4.20] - 2017-06-27
### Added
- AckApi has AuthError observer

## [0.4.18] - 2017-06-22
### Enhanced
- Cloned ack-modal options inside of ack-options-modal

## [0.4.13] - 2017-06-05
- added ack-modal-options header
- added arrayKey to ack-options and ack-options-modal

## [0.4.10] - 2017-05-31
- added htmlWidthModel
- added htmlHeightModel

## [0.4.6] - 2017-05-22
- added numberSuffix pipe

## [0.4.1] - 2017-05-10
### Added
- onEscapeKey
- bit pipe
- boolean pipe

## [0.4.0] - 2017-05-08
### Breaking Change
- RouteWatchReporter.current is now RouteWatchReporter.current.config
### Added
- RouteWatchReporter.current now has config & params


## [0.3.4] - 2017-05-08
### Added
- numberToPhone filter

## [0.3.3] - 2017-05-05
### Added
- ack-options
- ack-options-modal

## [0.3.0] - 2017-04-21
### Breaking Change
- absolute-overflow-y is now absolute-overflow-x

## [0.2.20] - 2017-04-18
### Added
- jsDependency of @angular/forms

## [0.2.17] - 2017-04-13
### Added
- safeHtml

## [0.2.15] - 2017-04-12
### Added
- var
- ack-modal
- AckApi
- safeUrl
- safeStyle

## [0.2.5] - 2017-04-04
### Added
- AckOffline
- AckCache
- AckQue

## [0.2.4] - 2017-03-31
### Added
### Breaking Changes
- No major version change, still in 0.*.* phase
- began to remove ui-router-ng2

## [0.2.1] - 2017-03-28
### Added
- formChanged directive

## [0.2.0] - 2017-03-27
### Breaking Changes
- ack-angular is now AoT compatible and not longer needs a js_modules folder

## [0.1.0] - 2017-03-27
### Breaking Changes
- Updated from updated NG 2.4.10 to 4.0.0

## [0.0.2] - 2017-03-09
