"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.fxArray = [
    animations_1.trigger('childStag50', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(50, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger('childStag', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(100, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger('childStag200', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(200, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger('childStag300', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(300, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger('childStag400', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(400, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger('childStag500', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(500, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger('200', [
        animations_1.transition('zoomInUp => void, * => zoomOutUp', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => zoomInUp', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomInRight => void, * => zoomOutLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => zoomInRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomInLeft => void, * => zoomOutRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => zoomInLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomInDown => void, * => zoomOutDown', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => zoomInDown', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('zoomIn => void, * => zoomOut', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => zoomIn', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state('zoomOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('zoomOut', animations_1.style({ "display": "none" })),
        animations_1.transition('* => slideOutUp', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInUp => void', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => slideInUp', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => slideOutLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInRight => void', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => slideInRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => slideOutRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInLeft => void', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => slideInLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => slideOutDown', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('slideInDown => void', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => slideInDown', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state('slideOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('slideOutDown', animations_1.style({ "display": "none" })),
        animations_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => rotateInUpRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => rotateInUpLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => rotateInDownRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => rotateInDownLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('rotateIn => void, * => rotateOut', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => rotateIn', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state('rotateOutUpRight', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutUpLeft', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutDownRight', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOutDownLeft', animations_1.style({ "display": "none" })),
        animations_1.state('rotateOut', animations_1.style({ "display": "none" })),
        animations_1.transition('bounceInUp => void, * => bounceOutUp', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => bounceInUp', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceInRight => void, * => bounceOutLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => bounceInRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceInLeft => void, * => bounceOutRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => bounceInLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceInDown => void, * => bounceOutDown', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => bounceInDown', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('bounceIn => void, * => bounceOut', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => bounceIn', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state('bounceOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('bounceOut', animations_1.style({ "display": "none" })),
        animations_1.transition('fadeInUp => void, fadeInUp => hidden, * => fadeOutUp', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => fadeInUp, hidden => fadeInUp', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeInRight => void, * => fadeOutLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => fadeInRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeInLeft => void, * => fadeOutRight', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => fadeInLeft', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeInDown => void, * => fadeOutDown', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => fadeInDown', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition('fadeIn => void, * => fadeOut', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition('* => fadeIn', [
            animations_1.animate('200ms 0ms linear', animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state('fadeOutUp', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutRight', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutLeft', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOutDown', animations_1.style({ "display": "none" })),
        animations_1.state('fadeOut', animations_1.style({ "display": "none" }))
    ])
];
