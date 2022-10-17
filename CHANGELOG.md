# ack-angular - Change Log
All notable changes to this project will be documented here.

## [4.1.0] - 2022-10-17
- route reporter changes

## [4.0.0] - 2022-09-29
- upgraded to Angular 14

## [2.0.12] - 2021-05-25
- ContentModel [(hasFocus)]

## [2.0.8] - 2021-05-25
- fix modal layout

## [2.0.0] - 2021-05-12
- AckOffline not apart of main build

## [1.18.0] - 2021-05-05
- Updated ack-css-boot to 2.0.0 which just changes .border-v and .border-h

## [1.16.2] - [1.16.3] - 2021-04-07
- Fixing order of cancel operations in ContentModel

## [1.16.1] - 2021-03-18
- Added [(contentModel)]

## [1.16.0] - 2021-02-04
- All dependencies updates

## [1.15.2] - 2021-02-04
- Added replaceMaxLength pipe

## [1.15.0] - 2020-10-14
- Built with Angular 11

## [1.13.11] - 2019-10-21
- provide RouteHistory

## [1.13.10] - 2019-06-06
- Added dependencies into distributed package

## [1.13.8] - 2019-06-05
- Added destroy call to ack-fixed-element

## [1.13.7] - 2019-05-28
- ack-array has merge option


## [1.13.5] - 2019-05-28
- Added ack-fixed-element

## [1.13.2] - 2019-05-23
- added endNumberWord pipe

## [1.13.0] - 2019-05-17
- moved offline to modules folder
- moved routers to modules folder

## [1.12.4] - 2019-05-14
- Updated ack-css-boot

## [1.12.3] - 2019-05-02
- AckArray binding pagesChange uses BehaviorSubject instead of EventEmitter

## [1.12.2] - 2019-04-10
- Added AckRouterModule

## [1.12.0] - 2019-04-10
- Ensured only rxjs needed items imported
- updated dependencies

## [1.11.8] - 2019-03-27
- Now includes scss files

## [1.11.7] - 2019-03-27
- ack array refiltering mod

## [1.11.6] - 2019-03-27
- invokeRotator fix for pipes

## [1.11.4] - 2019-03-27
- invokeRotator errors for function calls when target is not a function

## [1.11.3] - 2019-03-19
- invokeRotator separation
- Moved away from setTimeout in favor or Promise.resolve().then(()=>)

## [1.11.2] - 2019-03-01
- Added aString pipe

## [1.11.1] - 2019-02-19
- Better request timeout message

## [1.11.0] - 2019-01-01
- updated ack-angular-fx from v2 to v3

## [1.10.0] - 2019-01-01
- AckModule uses forRoot() to be compatible with loadChildren()

## [1.9.1] - 2018-12-06
- ack-array.sort now accepts "time" and "datetime"
- error-well has close output

## [1.9.0] - 2018-11-29
- removed ref
- removed exportAs from component
- ack-css-boot

## [1.8.21] - 2018-11-29
- Better error details about request error

## [1.8.20] - 2018-11-29
- More details on timedout request

## [1.8.19] - 2018-11-05
- looser typed get, post, put, and delete
- AckApi exported from index
- AckApi.options.responseType

## [1.8.18] - 2018-11-01
- ack-css-boot
- better screen and fixed reading

## [1.8.16] - 2018-10-24
- Better faster [(screenHeightModel)]

## [1.8.15] - 2018-10-24
- Added [pxFromHtmlTop]

## [1.8.14] - 2018-10-18
- cache expiration was not being enforced

## [1.8.13] - 2018-10-18
- VarDirective has (changed) Output

## [1.8.11] - 2018-10-17
- faster route reporting

## [1.8.10] - 2018-10-01
- shakeOn previousValue correction

## [1.8.9] - 2018-09-26
- improve RouterReporter directive destroy

## [1.8.7] - 2018-09-24
- offer more control over ack-sections

## [1.8.6] - 2018-09-20
- route-reporter exportAs RouteReporter
- deprecated [(ref)] in favor of exportAs hash variables

## [1.8.2] - 2018-09-20
- ack-sections mode default is calculate
- strict mode build
- [(stateName)] has been removed from route-reporter

## [1.8.1] - 2018-09-20
- ack-sections header footer height monitoring

## [1.8.0] - 2018-09-19
- Made animate.css available
- Added fxOn
- Deprecated some shakeOn directive bindings
  - deprecated Input shakeForMs
  - deprecated Output shakeForMsChange
  - deprecated Input shakeType
  - deprecated Output shakeTypeChange
  - deprecated Input shakeRef
  - deprecated Output shakeRefChange

## [1.7.17] - 2018-09-18
- ack-sections default z-index

## [1.7.16] - 2018-09-07
- ack-css

## [1.7.14] - 2018-08-27
- Param AckArray.page

## [1.7.12] - 2018-08-27
- Added "number" as sortType to AckArray

## [1.7.11] - 2018-08-24
- Added route-report parent bindings

## [1.7.9] - 2018-08-16
- AckArray deep watches array for changes to make pages

## [1.7.6] - 2018-08-16
- ack-css-boot stroke

## [1.7.5] - 2018-08-13
- fixed ReplaceModel

## [1.7.2] - 2018-08-06
- Added directive replaceModel

## [1.7.0] - 2018-08-06
- Upgraded to use new Angular HTTP component
  - Maintains backwords compatibility

## [1.6.2] - 2018-07-31
- Added logObToErrorObject method to ErrorLog

## [1.6.1] - 2018-07-30
- Added Request EventEmitter to AckApi

## [1.6.0] - 2018-05-18
- moved AckArray and AckAggregate

## [1.5.24] - 2018-05-18
- fixed toggleSort when sub data undefined

## [1.5.22] - 2018-05-18
- Fix size timing

## [1.5.21] - 2018-05-15
- Added AckArray.toggleSort()

## [1.5.19] - 2018-05-04
- fix ack-array keymap default

## [1.5.18] - 2018-05-03
- Better performing html and screen width/height reading

## [1.5.17] - 2018-04-26
- Update dependencies

## [1.5.15] - 2018-04-20
- changed ack-app into ack-sections

## [1.5.11] - 2018-04-13
- Fix scroll-past-fixed

## [1.5.10] - 2018-04-13
- Added ack-app
- Added ack-app-templates
- Added scroll-past-fixed


## [1.5.9] - 2018-04-10
- Moved mintutes report over to new aggregates

## [1.5.8] - 2018-04-09
- Added toNumber pipe
- Added ack-aggregate
- Added more ack-array documentations

## [1.5.5] - 2018-04-03
- Changed server cannot connect message

## [1.5.3] - 2018-03-20
- Added max and modelAsArray for inputs ack-options-modal

## [1.5.2] - 2018-03-14
- ack-options now has #selected template
- Fixed component examples

## [1.5.0] - 2018-03-13
- Upgraded Angular
- Upgraded ack-angular-fx
- Breaking Changes
  - Old deprecated ack-angular-fx triggers no longer supported

## [1.4.14] - 2018-03-08
- Added [(data)] to route-reporter

## [1.4.10] - 2018-01-24
- Improved Prompts styling

## [1.4.9] - 2017-12-28
- All window width/height model components run scroll

## [1.4.7] - 2017-12-28
- Fixed AckApi timeout error from 401 to 504

## [1.4.6] - 2017-12-18
- Added (init)

## [1.4.5] - 2017-12-15
- Fixed ack-modal when used with `*ngIf`

## [1.4.2] - 2017-12-14
- Adjusted and fixed ack-options-modal

## [1.4.1] - 2017-12-13
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
