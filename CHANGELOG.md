# ack-angular - Change Log
All notable changes to this project will be documented here.

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
