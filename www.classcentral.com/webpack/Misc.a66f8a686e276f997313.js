"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [6592, 3171, 3882, 8664, 6126, 4906], {
        1029: function(e, t) {
            t.Z = e => {
                let {
                    content: t,
                    style: a,
                    id: n = ""
                } = e;
                return '\n  <div class="cmpt-modal active">\n    <div data-name="MODAL_CLOSE" data-detail=\'{ "id": "'.concat(n, '" }\' class="cmpt-modal-blanket scrollable-y z-top border-box fixed top left height-100 padding-small large-up-padding-xlarge width-100">\n      <div class="cmpt-modal-container bg-white radius border-box width-centered width-100 relative" style="min-width: auto; max-width: ').concat(a.width, 'px;">\n        <button\n          data-name="MODAL_CLOSE" \n          data-detail=\'{ "close": true }\'\n          class="radius-circle scale-on-hover bg-gray-light z-force-top absolute top right margin-vert-xsmall margin-horz-xsmall"\n        >\n          <span class="margin-xsmall icon-center icon-x-charcoal icon-small">Close</span>\n        </button>\n        <div data-template="modal-content" style="min-height: ').concat(isNaN(a.height) ? a.height : "".concat(a.height, "px"), ';">\n          ').concat(t, "\n        </div>\n      </div>      \n    </div>\n  </div>\n")
            }
        },
        4079: function(e, t, a) {
            var n = a(8117),
                l = a(6848);
            t.Z = e => '\n<div class="padding-medium">\n  <h3 class="head-3">Verify your email address</h3>\n  <p class="margin-vert-small line-tight">\n    '.concat(e.message ? e.message : "To complete your profile and make use of all Class Central features, you’ll need to verify your email address.", "    \n  </p>\n  ").concat(e.error ? (0, l.Z)({
                type: "error",
                message: e.error
            }) : "", "\n  ").concat(e.sent ? (0, l.Z)({
                type: "success",
                message: "A verification link has been sent to your email account. Please click on the link in the email to verify your address."
            }) : "", "\n  ").concat(e.error || e.sent ? "" : '\n    <form data-name="RESEND_EMAIL_VERIFICATION" class="bg-blue-xlight radius-small border-all border-blue-light padding-small text-center line-tight">\n      <p class="margin-bottom-small">If your verification email has expired or you need us to send it again, click below.</p>\n      '.concat((0, n.Z)({
                size: "medium",
                label: "Resend Verification Email",
                isLoading: e.isLoading
            }), "\n    </form>"), "\n</div>\n")
        },
        8774: function(e, t) {
            t.Z = e => '\n  <label\n    for="'.concat(e.name, "-").concat(e.label, '"\n    class="row vert-align-middle btn-white ').concat(e.checked ? "selected" : "", '"\n  >\n    <input\n      data-name="RADIO"\n      data-detail=\'{ "values": ').concat(JSON.stringify(e.valueArr), ' }\'\n      class="hidden"\n      type="radio"\n      id="').concat(e.name, "-").concat(e.label, '"\n      name="').concat(e.name, '"\n      value="').concat(e.value, '"\n      ').concat(e.checked ? "checked" : "", '\n    />\n    <span\n      class="inline-block\n      ').concat(e.checked ? "icon-checkmark-white icon-small icon-center" : "border-all radius-circle", '"\n      style="\n        text-indent: -9999px;\n        height: 14px;\n        width: 14px;\n      "\n    >\n      Selected\n    </span>\n    <span class="margin-left-xxsmall text-2 weight-light">').concat(e.label, "</span>\n  </label>\n")
        },
        8117: function(e, t) {
            t.Z = e => '\n  <button\n    class="'.concat(e.isLoading ? " processing " : "").concat(e.style ? e.style : "btn-blue", " btn-").concat(e.size || "large", ' relative"\n    type="').concat(e.type ? e.type : "submit", '"').concat(e.isLoading ? " disabled" : "", "\n  >\n    ").concat(e.isLoading ? '<span\n        class="loader-bars '.concat(e.loaderStyle ? e.loaderStyle : "loader-white", ' loader-small absolute"\n        style="left: 50%; margin-left: -2.5px;"\n      ></span>\n      <span class="invisible">').concat(e.label, "</span>") : e.label, "\n  </button>\n")
        },
        6081: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a(9894),
                l = a(1029),
                i = a(6596);
            let o = null;
            var c = e => {
                switch (e.name) {
                    case "click:OPEN_AFFILIATE_NOTICE_MODAL":
                        o = () => {
                            !window.matchMedia("(min-width: 641px)").matches || ((0, n.sY)("modal"), window.removeEventListener("resize", o), o = null)
                        }, (0, n.sY)("modal", (0, l.Z)({
                            content: '\n  <div class="padding-vert-medium">\n    <h3 class="icon-left-medium icon-circle-info-charcoal head-3 margin-horz-medium margin-vert-small">'.concat(i.s.csr.affiliate_notice.modal_title(), '</h3>\n    <p class="color-gray margin-top-xxsmall margin-horz-medium">').concat(i.s.csr.affiliate_notice.message(), "</p>\n  </div>\n"),
                            style: {
                                width: 400,
                                height: 180
                            }
                        }), (() => {
                            window.addEventListener("resize", o)
                        }), !0);
                        break;
                    case "click:MODAL_CLOSE":
                        null !== o && (window.removeEventListener("resize", o), o = null)
                }
            }
        },
        2344: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a(9894),
                l = a(1029),
                i = a(6596),
                o = a(8858),
                c = a(681),
                r = e => {
                    let {
                        courseSlug: t,
                        title: a,
                        links: n
                    } = e;
                    return '\n  <div class="padding-vert-medium">\n    <h3 class="icon-left-medium icon-help-charcoal head-3 margin-horz-medium margin-vert-small">'.concat(a, '</h3>\n    <ol class="list-no-style border-top border-gray-light">\n      ').concat(n.map(((e, a) => '\n        <li>\n          <a           \n            href="'.concat(e.url, '"\n            data-track-ga=\'{\n              "category": "course page: help guides",\n              "action": "').concat(t, '",\n              "label": "').concat(e.url, '"\n            }\'\n            target="_blank"\n            class="color-charcoal hover-no-underline border-bottom border-gray-light padding-vert-small padding-horz-medium hover-bg-blue-xlight block"\n          >\n            <span class="weight-bold padding-right-xsmall">').concat(a + 1, ".</span> ").concat(e.title, "\n          </a>\n        </li>\n      "))).join(""), '\n    </ol>\n    <p class="color-gray margin-top-large margin-horz-medium">\n      ').concat((0, c.sprintf)((0, o.T)(i.s.csr.help.visit_help_center()), '<a target="_blank" href="/help">', "</a>"), "\n    </p>\n  </div>\n")
                },
                s = e => {
                    if ("click:MODAL_HELP" === e.name)(0, n.sY)("modal", (0, l.Z)({
                        content: r(e.detail),
                        style: {
                            width: 400,
                            height: 230
                        }
                    }), null, !0)
                }
        },
        5964: function(e, t, a) {
            a.r(t);
            var n = a(9894),
                l = a(3443),
                i = a(1029),
                o = a(8785),
                c = a(4079),
                r = a(1655);
            t.default = e => {
                switch (e.name) {
                    case "click:SCROLL_TO":
                        if (e.detail.node) try {
                            window.scroll({
                                top: document.querySelector(e.detail.node).offsetTop + parseInt(e.detail.offset || 0, 10),
                                left: 0,
                                behavior: "smooth"
                            })
                        } catch (e) {}
                        break;
                    case "click:DROPDOWN_OPEN":
                        e.originalEvent.preventDefault(), (0, l.px)("[data-name=DROPDOWN_".concat(e.detail.target, "]")).then((t => {
                            (0, l.IV)("hidden", t), e.target.setAttribute("data-name", "DROPDOWN_CLOSE")
                        }));
                        break;
                    case "click:DROPDOWN_CLOSE":
                        e.originalEvent.preventDefault(), (0, l.px)("[data-name=DROPDOWN_".concat(e.detail.target, "]")).then((t => {
                            (0, l.cn)("hidden", t), e.target.setAttribute("data-name", "DROPDOWN_OPEN")
                        }));
                        break;
                    case "click:ACCORDIAN_EXPAND":
                        {
                            e.originalEvent.preventDefault();
                            const t = e.detail.toggleClass || "hidden";
                            (0, l.px)("[data-name=ACCORDIAN_".concat(e.detail.target, "]")).then((a => {
                                const n = e.target.querySelector(".icon-chevron-right-charcoal");
                                n && ((0, l.IV)("icon-chevron-right-charcoal", n), (0, l.cn)("icon-chevron-down-charcoal", n)), (0, l.IV)(t, a), e.target.setAttribute("data-name", "ACCORDIAN_COLLAPSE")
                            }));
                            break
                        }
                    case "click:ACCORDIAN_COLLAPSE":
                        {
                            e.originalEvent.preventDefault();
                            const t = e.detail.toggleClass || "hidden";
                            (0, l.px)("[data-name=ACCORDIAN_".concat(e.detail.target, "]")).then((a => {
                                const n = e.target.querySelector(".icon-chevron-down-charcoal");
                                n && ((0, l.IV)("icon-chevron-down-charcoal", n), (0, l.cn)("icon-chevron-right-charcoal", n)), (0, l.cn)(t, a), e.target.setAttribute("data-name", "ACCORDIAN_EXPAND")
                            }));
                            break
                        }
                    case "click:EXPAND_TRIGGER":
                        (0, l.px)("[data-name=EXPAND_CONTENT_".concat(e.detail.target, "]")).then((e => {
                            (0, l.IV)("hidden", e)
                        })), (0, l.px)("[data-name=EXPAND_PREVIEW_".concat(e.detail.target, "]")).then((e => {
                            (0, l.cn)("hidden", e)
                        }));
                        break;
                    case "click:REMOVE_PARENT":
                        (0, l.px)("[data-name=".concat(e.detail.target, "]")).then((e => {
                            e.remove()
                        }));
                        break;
                    case "click:NEWS_BANNER":
                        e.detail.cookie && r.Z.set("news_banner", 1, {
                            expires: 365
                        });
                        break;
                    case "click:VERIFY_EMAIL":
                        var t;
                        (0, n.sY)("modal", (0, i.Z)({
                            content: (0, c.Z)({
                                message: (null === (t = (0, n.y0)().onboarding) || void 0 === t ? void 0 : t.verifyEmailMessage) || null,
                                isLoading: !1,
                                sent: !1,
                                error: !1
                            }),
                            style: {
                                width: 400,
                                height: 230
                            }
                        }));
                        break;
                    case "submit:RESEND_EMAIL_VERIFICATION":
                        var a;
                        (0, n.sY)("modal", (0, i.Z)({
                            content: (0, c.Z)({
                                message: (null === (a = (0, n.y0)().onboarding) || void 0 === a ? void 0 : a.verifyEmailMessage) || null,
                                isLoading: !0
                            }),
                            style: {
                                width: 400,
                                height: 230
                            }
                        })), (0, o.Z)("ONBOARDING/EMAIL_VERIFICATION");
                        break;
                    case "request:ONBOARDING/EMAIL_VERIFICATION_SUCCESS":
                        var s;
                        (0, n.sY)("modal", (0, i.Z)({
                            content: (0, c.Z)({
                                message: (null === (s = (0, n.y0)().onboarding) || void 0 === s ? void 0 : s.verifyEmailMessage) || null,
                                isLoading: !1,
                                sent: !0
                            }),
                            style: {
                                width: 400,
                                height: 230
                            }
                        }));
                        break;
                    case "request:ONBOARDING/EMAIL_VERIFICATION_ERROR":
                        var d, m;
                        (0, n.sY)("modal", (0, i.Z)({
                            content: (0, c.Z)({
                                message: (null === (d = (0, n.y0)().onboarding) || void 0 === d ? void 0 : d.verifyEmailMessage) || null,
                                isLoading: !1,
                                error: (null === (m = e.detail.json) || void 0 === m ? void 0 : m.message) || !1
                            }),
                            style: {
                                width: 400,
                                height: 230
                            }
                        }));
                        break;
                    case "click:MENU_SIDEBAR":
                        {
                            const e = document.getElementById("cmpt-header").getBoundingClientRect().bottom,
                                t = document.getElementById("cmpt-sidebar"),
                                a = document.querySelector("[data-name=MENU_SIDEBAR]");
                            if (t.classList.contains("animate-slide-in-right")) return (0, l.IV)("animate-slide-in-right", t), (0, l.cn)("animate-slide-out-left", t), (0, l.IV)("icon-x-charcoal", a), void(0, l.cn)("icon-menu-charcoal", a);t.style.top = "".concat(e, "px"),
                            (0, l.cn)("animate-slide-in-right", t),
                            (0, l.IV)("icon-menu-charcoal", a),
                            (0, l.cn)("icon-x-charcoal", a);
                            break
                        }
                }
            }
        },
        6499: function(e, t, a) {
            a.r(t);
            var n = a(9894),
                l = a(3443),
                i = a(8774);
            t.default = e => {
                if ("change:RADIO" === e.name) {
                    const t = e.detail.values.map((t => (0, i.Z)({
                        valueArr: e.detail.values,
                        name: e.target.name,
                        checked: e.target.value == t.value,
                        label: t.label,
                        value: t.value
                    }))).join("");
                    (0, l.LG)(e.target, e.target.name), (0, n.sY)("radio-".concat(e.target.name), t)
                }
            }
        },
        1440: function(e, t, a) {
            a.r(t);
            var n = a(3443);
            t.default = e => {
                if ("click:TAB_TRIGGER" === e.name) e.originalEvent.preventDefault(), (0, n.px)("[data-tab-family=".concat(e.detail.family, "][data-tab=").concat(e.detail.tab, "]")).then((t => {
                    const a = document.querySelectorAll("[data-name=TAB_TRIGGER][data-tab-family=".concat(e.detail.family, "]")),
                        l = document.querySelectorAll("[data-tab][data-tab-family=".concat(e.detail.family, "]"));
                    (0, n.cn)("hidden", l), (0, n.IV)("hidden", t);
                    try {
                        const {
                            focusState: t,
                            blurState: l
                        } = JSON.parse(e.target.dataset.detail);
                        (0, n.IV)(t, a), (0, n.cn)(l, a), (0, n.IV)(l, e.target), (0, n.cn)(t, e.target)
                    } catch (e) {}
                }))
            }
        },
        3906: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a(6206),
                l = a(3443),
                i = e => {
                    const t = e.parent.querySelectorAll(".cmpt-tooltip");
                    if (!e.content && t.length && [].slice.call(t).forEach((e => {
                            e.parentNode.removeChild(e)
                        })), e.show) {
                        const t = document.createElement("div");
                        t.style.marginTop = "".concat(e.offset, "px"), t.style.minWidth = "".concat(e.width, "px"), t.setAttribute("class", "cmpt-tooltip absolute box-shadow radius-small border-all z-force-top border-gray-light bg-white"), t.style.visibility = "hidden", t.style.top = "".concat((0, l.Hs)(e.parent).height, "px"), t.innerHTML = e.content, e.parent.append(t), t.style.left = "".concat(-(0, l.Hs)(t).width / 2 + (0, l.Hs)(e.parent).width / 2, "px"), t.style.visibility = ""
                    }
                },
                o = a(8785),
                c = a(6596);
            const r = {
                animation: "shift-away",
                touch: !1,
                offset: [0, 10]
            };
            var s = e => {
                switch (e.name) {
                    case "load:MISC_MODULE":
                        (0, n.ZP)("[data-overlay-trigger]", { ...r,
                            content: '\n          <div\n            class="bg-white width-100 padding-xsmall shadow-light radius"\n            style="min-width: 350px; min-height: 250px;"\n          >\n            <p class="loader-medium absolute loader-bars" style="top: 40%; left: 50%;"></p>\n          </div>',
                            theme: "bg-white overlay-info",
                            interactive: !0,
                            placement: "right",
                            onShow: d,
                            allowHTML: !0
                        }), (0, n.ZP)("[data-button-follow]", { ...r,
                            theme: "bg-white tooltip-follow",
                            placement: "bottom-start",
                            allowHTML: !0,
                            onShow: function(e) {
                                const t = JSON.parse(e.reference.dataset.buttonFollow);
                                e.setProps({
                                    content: '\n              <div class="bg-white shadow-light radius text-left padding-vert-xsmall padding-horz-small">\n                <h5 class="text-2 color-charcoal weight-semi">'.concat(t.name, '</h5>\n                <p class="text-2 color-charcoal">').concat(t.followers, " learners</p>\n              </div>\n            ")
                                })
                            }
                        }), (0, n.ZP)("[data-tippy]", { ...r,
                            theme: "bg-white tooltip",
                            placement: "right",
                            allowHTML: !0,
                            onShow: function(e) {
                                e.reference.dataset.tippy && e.setProps({
                                    content: '\n                <div class="bg-white shadow-light radius text-center padding-vert-xxsmall padding-horz-small">\n                  <p class="text-2 color-charcoal">'.concat(e.reference.dataset.tippy, "</p>\n                </div>\n              ")
                                })
                            }
                        });
                        break;
                    case "mouseenter:BOOKMARK_ADD":
                        "BOOKMARK_ADD" === e.originalEvent.target.dataset.name && !window.TOUCHSCREEN && i({
                            show: !0,
                            width: 110,
                            offset: 10,
                            parent: e.target.parentNode,
                            content: '\n            <div class="text-center padding-vert-xxsmall padding-horz-small">\n              <p class="text-2 color-charcoal">'.concat(c.s.csr.global["bookmark_" + e.detail.type](), "</p>\n            </div>\n          ")
                        });
                        break;
                    case "mouseleave:BOOKMARK_ADD":
                        "BOOKMARK_ADD" === e.originalEvent.target.dataset.name && !window.TOUCHSCREEN && i({
                            parent: e.target.parentNode,
                            content: null
                        });
                        break;
                    case "request:GET_OVERLAY_SUCCESS":
                        e.detail.context.setProps({
                            content: e.detail.json.html
                        })
                }
            };
            const d = e => !(window.innerWidth < 915) && void(0, o.Z)("GET_OVERLAY", {
                parameters: JSON.parse(e.reference.dataset.overlayTrigger),
                context: e
            })
        },
        3204: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a(9894);
            const l = e => "\n  ".concat(e.img ? '\n    <img\n        onerror="this.style.opacity=\'0\'"\n        style="object-fit: cover;"\n        class="block absolute top left width-100 height-100"\n        src="'.concat(e.img, '"\n    />\n  ') : "", '\n  <div class="loader-medium absolute loader-bars" style="top: 45%; left: 50%;"></div>\n');
            var i = a(3443),
                o = e => {
                    if ("click:TRAILER_PLAY" === e.name) {
                        if ("youtube" === e.detail.type && !(0, i.gA)(e.detail.url)) return;
                        (0, n.sY)("trailer", (e => "youtube" === e.type ? "\n      ".concat(e.loading ? l(e) : "", '\n      <iframe\n        onload=""\n        class="absolute top left height-100 width-100 ytb-video-frame"\n        src="').concat(e.url, '&amp;autohide=1&amp;showinfo=0&amp;autoplay=1"\n        allow="autoplay"\n        frameborder="0"\n        allowfullscreen\n        wmode="Opaque">\n      </iframe>\n    ') : "coursera" === e.type ? "\n      ".concat(e.loading ? l(e) : "", '\n      <video class="absolute top left height-100 width-100" controls>\n        <source type="video/mp4" src="').concat(e.url, 'full/540p/index.mp4">\n        <source type="video/webm" src="').concat(e.url, 'full/540p/index.webm">\n      </video>\n    ') : void 0)({
                            loading: !0,
                            ...e.detail
                        }), (t => {
                            if ("coursera" === e.detail.type) {
                                const e = t.querySelector("video");
                                e.paused && e.play()
                            }
                        }), !0)
                    }
                }
        },
        5105: function(e, t, a) {
            a.r(t);
            var n = a(3443);
            const l = e => {
                const t = document.querySelector('[data-truncatable-id="'.concat(e, '"]'));
                t.scrollTop = 0, t.classList.remove("is-truncated"), (0, n.px)('[data-name="TRUNCATION_BUTTON"][data-id="'.concat(e, '"]')).then((e => {
                    e.remove()
                }))
            };
            t.default = e => {
                switch (e.name) {
                    case "focus:ONBOARDING_RESOURCE_REMOVE":
                    case "focus:ONBOARDING_RESOURCE_ADD":
                        {
                            const t = e.target.closest("[data-truncatable-id]");
                            if (t && t.classList.contains("is-truncated")) {
                                const a = t.dataset.truncatableId;
                                if (null === t) return;
                                const n = Number.parseInt(window.getComputedStyle(t).getPropertyValue("--truncate-to").trim(), 10),
                                    i = e.originalEvent.target;
                                i.offsetTop + i.offsetHeight > n && l(a)
                            }
                            break
                        }
                    case "click:TRUNCATION_BUTTON":
                        l(e.detail.id || null)
                }
            }
        },
        5734: function(e, t, a) {
            a.r(t);
            var n = a(1440),
                l = a(3906),
                i = a(3204),
                o = a(5105),
                c = a(6499),
                r = a(2344),
                s = a(6081);
            t.default = e => {
                e.useHandler(n.default), e.useHandler(l.default), e.useHandler(i.default), e.useHandler(o.default), e.useHandler(c.default), e.useHandler(r.default), e.useHandler(s.default)
            }
        }
    }
]);