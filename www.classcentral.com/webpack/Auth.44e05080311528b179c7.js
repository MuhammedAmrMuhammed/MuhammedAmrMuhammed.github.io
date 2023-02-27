"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [1888, 266, 7947, 5548, 2165, 577, 1623], {
        1029: function(e, t) {
            t.Z = e => {
                let {
                    content: t,
                    style: n,
                    id: a = ""
                } = e;
                return '\n  <div class="cmpt-modal active">\n    <div data-name="MODAL_CLOSE" data-detail=\'{ "id": "'.concat(a, '" }\' class="cmpt-modal-blanket scrollable-y z-top border-box fixed top left height-100 padding-small large-up-padding-xlarge width-100">\n      <div class="cmpt-modal-container bg-white radius border-box width-centered width-100 relative" style="min-width: auto; max-width: ').concat(n.width, 'px;">\n        <button\n          data-name="MODAL_CLOSE" \n          data-detail=\'{ "close": true }\'\n          class="radius-circle scale-on-hover bg-gray-light z-force-top absolute top right margin-vert-xsmall margin-horz-xsmall"\n        >\n          <span class="margin-xsmall icon-center icon-x-charcoal icon-small">Close</span>\n        </button>\n        <div data-template="modal-content" style="min-height: ').concat(isNaN(n.height) ? n.height : "".concat(n.height, "px"), ';">\n          ').concat(t, "\n        </div>\n      </div>      \n    </div>\n  </div>\n")
            }
        },
        2913: function(e, t) {
            const n = (e, t, n) => {
                const a = {
                        error: {
                            border: "red-light",
                            color: "red",
                            bg: "red-xlight"
                        },
                        warning: {
                            border: "yellow-mid",
                            color: "charcoal",
                            bg: "yellow-xlight"
                        },
                        info: {
                            border: "blue-light",
                            color: "charcoal",
                            bg: "blue-xlight"
                        },
                        success: {
                            border: "green-mid",
                            color: "charcoal",
                            bg: "green-xlight"
                        }
                    },
                    o = document.createElement("div");
                o.innerHTML = '\n    <div data-name="NOTICE_CMPT" data-notice class="radius-small\n      border-all border-'.concat(a[e].border, " \n      color-").concat(a[e].color, " text-left text-3 padding-horz-xsmall padding-vert-xxsmall padding-right-xxlarge margin-vert-xxsmall relative\n      bg-").concat(a[e].bg, ' text-left text-3 padding-horz-xsmall padding-vert-xxsmall padding-right-xxlarge margin-vert-xxsmall relative\n    ">\n      <div class="').concat(e, '-content">').concat(n, '</div>\n      <button\n        type="button"\n        data-name="REMOVE_PARENT"\n        data-detail=\'{ "target": "NOTICE_CMPT" }\'\n        class="block absolute top right padding-horz-xsmall padding-vert-xxsmall"\n      >\n        <i class="icon-xsmall icon-x-charcoal"></i>\n      </button>\n    </div>\n  '), document.querySelector(t).prepend(o.firstElementChild)
            };
            t.Z = {
                error: (e, t) => {
                    n("error", e, t)
                },
                success: (e, t) => {
                    n("success", e, t)
                },
                warning: (e, t) => {
                    n("warning", e, t)
                },
                info: (e, t) => {
                    n("info", e, t)
                }
            }
        },
        4079: function(e, t, n) {
            var a = n(8117),
                o = n(6848);
            t.Z = e => '\n<div class="padding-medium">\n  <h3 class="head-3">Verify your email address</h3>\n  <p class="margin-vert-small line-tight">\n    '.concat(e.message ? e.message : "To complete your profile and make use of all Class Central features, you’ll need to verify your email address.", "    \n  </p>\n  ").concat(e.error ? (0, o.Z)({
                type: "error",
                message: e.error
            }) : "", "\n  ").concat(e.sent ? (0, o.Z)({
                type: "success",
                message: "A verification link has been sent to your email account. Please click on the link in the email to verify your address."
            }) : "", "\n  ").concat(e.error || e.sent ? "" : '\n    <form data-name="RESEND_EMAIL_VERIFICATION" class="bg-blue-xlight radius-small border-all border-blue-light padding-small text-center line-tight">\n      <p class="margin-bottom-small">If your verification email has expired or you need us to send it again, click below.</p>\n      '.concat((0, a.Z)({
                size: "medium",
                label: "Resend Verification Email",
                isLoading: e.isLoading
            }), "\n    </form>"), "\n</div>\n")
        },
        382: function(e, t) {
            t.Z = () => '\n  <div class="row vert-align-middle horz-align-center absolute left right top bottom"><div class="loader-bars"></div></div>\n'
        },
        8117: function(e, t) {
            t.Z = e => '\n  <button\n    class="'.concat(e.isLoading ? " processing " : "").concat(e.style ? e.style : "btn-blue", " btn-").concat(e.size || "large", ' relative"\n    type="').concat(e.type ? e.type : "submit", '"').concat(e.isLoading ? " disabled" : "", "\n  >\n    ").concat(e.isLoading ? '<span\n        class="loader-bars '.concat(e.loaderStyle ? e.loaderStyle : "loader-white", ' loader-small absolute"\n        style="left: 50%; margin-left: -2.5px;"\n      ></span>\n      <span class="invisible">').concat(e.label, "</span>") : e.label, "\n  </button>\n")
        },
        1407: function(e, t, n) {
            n.r(t);
            var a = n(8609),
                o = n(7451);
            t.default = e => {
                if ("load:AUTH_MODULE" === e.name)(0, a.l)(), (0, o.v)()
            }
        },
        5818: function(e, t, n) {
            n.r(t);
            var a = n(9894),
                o = n(3443);
            (0, a.IW)({
                deferred: {
                    images: [].slice.call(document.querySelectorAll("[data-src]"))
                }
            }), t.default = e => {
                switch (e.name) {
                    case "load:ESSENTIAL_MODULE":
                    case "mouseenter:NAV_DROPDOWN":
                    case "click:NAV_TRIGGER":
                    case "load:MAIN_NAV_SUBSECTION":
                    case "load:IMAGES":
                    case "resize:DOCUMENT":
                    case "scroll:DOCUMENT":
                        {
                            const e = (0, a.Bm)().deferred.images;e.length && e.forEach((function(e) {
                                (0, o.oe)(e, !0) && (e.src = e.dataset.src, e.removeAttribute("data-src"), (0, a.IW)({
                                    deferred: {
                                        images: [].slice.call(document.querySelectorAll("[data-src]"))
                                    }
                                }))
                            }))
                        }
                }
            }
        },
        410: function(e, t, n) {
            n.r(t);
            var a = n(3443),
                o = n(8785);
            t.default = e => {
                if ("click:HIDE_LANG_DIALOG" === e.name)(0, a.px)("[data-name=".concat(e.detail.target, "]")).then((e => {
                    e.remove()
                })), (0, o.Z)("LOCALIZATION/HIDE_LANG_DIALOG")
            }
        },
        9028: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n(9894),
                o = n(2913);
            const i = {
                domainThreshold: 2,
                secondLevelThreshold: 2,
                topLevelThreshold: 2,
                defaultDomains: ["msn.com", "bellsouth.net", "telus.net", "comcast.net", "optusnet.com.au", "earthlink.net", "qq.com", "sky.com", "icloud.com", "mac.com", "sympatico.ca", "googlemail.com", "att.net", "xtra.co.nz", "web.de", "cox.net", "gmail.com", "ymail.com", "aim.com", "rogers.com", "verizon.net", "rocketmail.com", "google.com", "optonline.net", "sbcglobal.net", "aol.com", "me.com", "btinternet.com", "charter.net", "shaw.ca", "hey.com"],
                defaultSecondLevelDomains: ["yahoo", "hotmail", "mail", "live", "outlook", "gmx"],
                defaultTopLevelDomains: ["com", "com.au", "com.tw", "ca", "co.nz", "co.uk", "de", "fr", "it", "ru", "net", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu", "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz", "in", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu", "uk"],
                run: function(e) {
                    e.domains = e.domains || i.defaultDomains, e.secondLevelDomains = e.secondLevelDomains || i.defaultSecondLevelDomains, e.topLevelDomains = e.topLevelDomains || i.defaultTopLevelDomains, e.distanceFunction = e.distanceFunction || i.sift4Distance;
                    var t = function(e) {
                            return e
                        },
                        n = e.suggested || t,
                        a = e.empty || t,
                        o = i.suggest(i.encodeEmail(e.email), e.domains, e.secondLevelDomains, e.topLevelDomains, e.distanceFunction);
                    return o ? n(o) : a()
                },
                suggest: function(e, t, n, a, o) {
                    e = e.toLowerCase();
                    var i = this.splitEmail(e);
                    if (n && a && -1 !== n.indexOf(i.secondLevelDomain) && -1 !== a.indexOf(i.topLevelDomain)) return !1;
                    var l = this.findClosestDomain(i.domain, t, o, this.domainThreshold);
                    if (l) return l !== i.domain && {
                        address: i.address,
                        domain: l,
                        full: i.address + "@" + l
                    };
                    var c = this.findClosestDomain(i.secondLevelDomain, n, o, this.secondLevelThreshold),
                        r = this.findClosestDomain(i.topLevelDomain, a, o, this.topLevelThreshold);
                    if (i.domain) {
                        l = i.domain;
                        var s = !1;
                        if (c && c !== i.secondLevelDomain && (l = l.replace(i.secondLevelDomain, c), s = !0), r && r !== i.topLevelDomain && "" !== i.secondLevelDomain && (l = l.replace(new RegExp(i.topLevelDomain + "$"), r), s = !0), s) return {
                            address: i.address,
                            domain: l,
                            full: i.address + "@" + l
                        }
                    }
                    return !1
                },
                findClosestDomain: function(e, t, n, a) {
                    var o;
                    a = a || this.topLevelThreshold;
                    var i = 1 / 0,
                        l = null;
                    if (!e || !t) return !1;
                    !n && (n = this.sift4Distance);
                    for (var c = 0; c < t.length; c++) {
                        if (e === t[c]) return e;
                        (o = n(e, t[c])) < i && (i = o, l = t[c])
                    }
                    return !!(i <= a && null !== l) && l
                },
                sift4Distance: function(e, t, n) {
                    if (void 0 === n && (n = 5), !e || !e.length) return t ? t.length : 0;
                    if (!t || !t.length) return e.length;
                    for (var a = e.length, o = t.length, i = 0, l = 0, c = 0, r = 0, s = 0, d = []; i < a && l < o;) {
                        if (e.charAt(i) === t.charAt(l)) {
                            r++;
                            for (var u = !1, m = 0; m < d.length;) {
                                var h = d[m];
                                if (i <= h.c1 || l <= h.c2) {
                                    (u = Math.abs(l - i) >= Math.abs(h.c2 - h.c1)) ? s++ : !h.trans && (h.trans = !0, s++);
                                    break
                                }
                                i > h.c2 && l > h.c1 ? d.splice(m, 1) : m++
                            }
                            d.push({
                                c1: i,
                                c2: l,
                                trans: u
                            })
                        } else {
                            c += r, r = 0, i !== l && (i = l = Math.min(i, l));
                            for (var g = 0; g < n && (i + g < a || l + g < o); g++) {
                                if (i + g < a && e.charAt(i + g) === t.charAt(l)) {
                                    i += g - 1, l--;
                                    break
                                }
                                if (l + g < o && e.charAt(i) === t.charAt(l + g)) {
                                    i--, l += g - 1;
                                    break
                                }
                            }
                        }
                        l++, (++i >= a || l >= o) && (c += r, r = 0, i = l = Math.min(i, l))
                    }
                    return c += r, Math.round(Math.max(a, o) - c + s)
                },
                splitEmail: function(e) {
                    var t = (e = null === e ? null : e.replace(/^\s*/, "").replace(/\s*$/, "")).split("@");
                    if (t.length < 2) return !1;
                    for (var n = 0; n < t.length; n++)
                        if ("" === t[n]) return !1;
                    var a = t.pop(),
                        o = a.split("."),
                        i = "",
                        l = "";
                    if (0 === o.length) return !1;
                    if (1 === o.length) l = o[0];
                    else {
                        i = o[0];
                        for (var c = 1; c < o.length; c++) l += o[c] + ".";
                        l = l.substring(0, l.length - 1)
                    }
                    return {
                        topLevelDomain: l,
                        secondLevelDomain: i,
                        domain: a,
                        address: t.join("@")
                    }
                },
                encodeEmail: function(e) {
                    var t = encodeURI(e);
                    return t = t.replace("%20", " ").replace("%25", "%").replace("%5E", "^").replace("%60", "`").replace("%7B", "{").replace("%7C", "|").replace("%7D", "}")
                }
            };
            var l = i;
            let c;
            const r = e => l.run({
                email: e,
                suggested: e => {
                    (0, a.sY)("field-message-email", null), o.Z.warning("[data-template=field-message-email]", "Did you mean ".concat(e.full, "?"))
                },
                empty: () => {
                    (0, a.sY)("field-message-email", null)
                }
            });
            var s = e => {
                switch (e.name) {
                    case "keyup:EMAIL_INPUT":
                        var t;
                        (null === (t = e.detail) || void 0 === t ? void 0 : t.listenOnKey) && (clearInterval(c), c = setTimeout((() => {
                            r(e.target.value)
                        }), 500));
                        break;
                    case "change:EMAIL_INPUT":
                        clearInterval(c), r(e.target.value)
                }
            }
        },
        2381: function(e, t, n) {
            n.r(t);
            var a = n(5982);
            const o = document.querySelector(".js-main-nav-dropdown"),
                i = document.querySelector('[data-name="BLANKET"]'),
                l = getComputedStyle(document.documentElement).getPropertyValue("--large-up-bp");
            let c = !1;
            const r = () => window.matchMedia("(min-width: ".concat(l, ")")).matches,
                s = () => {
                    const e = o.querySelectorAll(".js-main-nav-subsection:not([hidden])");
                    Array.from(e).forEach((e => {
                        e.classList.remove("is-selected"), e.hidden = !0
                    })), o.classList.remove("has-visibile-subsection")
                },
                d = e => {
                    s();
                    const t = o.querySelector('.js-main-nav-subsection[data-list-id="'.concat(e, '"]'));
                    null !== t && (t.hidden = !1, t.classList.add("is-selected")), o.classList.add("has-visibile-subsection"), (0, a.W)("load", "MAIN_NAV_SUBSECTION")
                },
                u = () => {
                    !c && i.dispatchEvent(new Event("click")), document.documentElement.classList.add("nav-open"), o.classList.add("is-open"), i.classList.remove("animate-fade-hidden"), c = !0, (0, a.W)("load", "NAV_SHOW")
                },
                m = () => {
                    c = !1, document.documentElement.classList.remove("nav-open"), s(), i.classList.add("animate-fade-hidden"), o.classList.remove("is-open"), (0, a.W)("load", "NAV_HIDE")
                };
            let h = null;
            t.default = e => {
                switch (e.name) {
                    case "click:MAIN_NAV_TRIGGER":
                        u();
                        break;
                    case "click:MAIN_NAV_CLOSE":
                        m();
                        break;
                    case "click:NAV_SUBSECTION_PARENT":
                        e.originalEvent.preventDefault(), d(e.detail.childListId);
                        break;
                    case "pointerover:NAV_SUBSECTION_PARENT":
                        {
                            if (!r()) return;
                            if ("mouse" !== e.originalEvent.pointerType) return;
                            if (e.originalEvent.preventDefault(), null === o.querySelector(".js-main-nav-subsection:not([hidden])")) return void d(e.detail.childListId);null !== h && clearTimeout(h);
                            let t = e.originalEvent.target,
                                n = t.dataset.name && "NAV_SUBSECTION_PARENT" === t.dataset.name ? t : t.closest('[data-name="NAV_SUBSECTION_PARENT"]');h = setTimeout((() => {
                                !c || !n.matches(":hover") || d(e.detail.childListId)
                            }), 100);
                            break
                        }
                    case "click:MAIN_NAV_SUBSECTION_BACK":
                        s();
                        break;
                    case "pointerover:LARGE_UP_MAIN_NAV_TRIGGER":
                        e.originalEvent.preventDefault(), u();
                        break;
                    case "pointerout:MAIN_NAV_TRIGGER_CONTAINER":
                        if (!r() || "mouse" !== e.originalEvent.pointerType || !c) return;
                        (null === e.originalEvent.relatedTarget || null === e.originalEvent.relatedTarget.closest('[data-name="MAIN_NAV_TRIGGER_CONTAINER"]')) && m();
                        break;
                    case "pointerdown:DOCUMENT":
                        if (!r() || "mouse" === e.originalEvent.pointerType || !c) return;
                        (null === e.originalEvent.target || null === e.originalEvent.target.closest('[data-name="MAIN_NAV_TRIGGER_CONTAINER"]')) && m()
                }
            }
        },
        5964: function(e, t, n) {
            n.r(t);
            var a = n(9894),
                o = n(3443),
                i = n(1029),
                l = n(8785),
                c = n(4079),
                r = n(1655);
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
                        e.originalEvent.preventDefault(), (0, o.px)("[data-name=DROPDOWN_".concat(e.detail.target, "]")).then((t => {
                            (0, o.IV)("hidden", t), e.target.setAttribute("data-name", "DROPDOWN_CLOSE")
                        }));
                        break;
                    case "click:DROPDOWN_CLOSE":
                        e.originalEvent.preventDefault(), (0, o.px)("[data-name=DROPDOWN_".concat(e.detail.target, "]")).then((t => {
                            (0, o.cn)("hidden", t), e.target.setAttribute("data-name", "DROPDOWN_OPEN")
                        }));
                        break;
                    case "click:ACCORDIAN_EXPAND":
                        {
                            e.originalEvent.preventDefault();
                            const t = e.detail.toggleClass || "hidden";
                            (0, o.px)("[data-name=ACCORDIAN_".concat(e.detail.target, "]")).then((n => {
                                const a = e.target.querySelector(".icon-chevron-right-charcoal");
                                a && ((0, o.IV)("icon-chevron-right-charcoal", a), (0, o.cn)("icon-chevron-down-charcoal", a)), (0, o.IV)(t, n), e.target.setAttribute("data-name", "ACCORDIAN_COLLAPSE")
                            }));
                            break
                        }
                    case "click:ACCORDIAN_COLLAPSE":
                        {
                            e.originalEvent.preventDefault();
                            const t = e.detail.toggleClass || "hidden";
                            (0, o.px)("[data-name=ACCORDIAN_".concat(e.detail.target, "]")).then((n => {
                                const a = e.target.querySelector(".icon-chevron-down-charcoal");
                                a && ((0, o.IV)("icon-chevron-down-charcoal", a), (0, o.cn)("icon-chevron-right-charcoal", a)), (0, o.cn)(t, n), e.target.setAttribute("data-name", "ACCORDIAN_EXPAND")
                            }));
                            break
                        }
                    case "click:EXPAND_TRIGGER":
                        (0, o.px)("[data-name=EXPAND_CONTENT_".concat(e.detail.target, "]")).then((e => {
                            (0, o.IV)("hidden", e)
                        })), (0, o.px)("[data-name=EXPAND_PREVIEW_".concat(e.detail.target, "]")).then((e => {
                            (0, o.cn)("hidden", e)
                        }));
                        break;
                    case "click:REMOVE_PARENT":
                        (0, o.px)("[data-name=".concat(e.detail.target, "]")).then((e => {
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
                        (0, a.sY)("modal", (0, i.Z)({
                            content: (0, c.Z)({
                                message: (null === (t = (0, a.y0)().onboarding) || void 0 === t ? void 0 : t.verifyEmailMessage) || null,
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
                        var n;
                        (0, a.sY)("modal", (0, i.Z)({
                            content: (0, c.Z)({
                                message: (null === (n = (0, a.y0)().onboarding) || void 0 === n ? void 0 : n.verifyEmailMessage) || null,
                                isLoading: !0
                            }),
                            style: {
                                width: 400,
                                height: 230
                            }
                        })), (0, l.Z)("ONBOARDING/EMAIL_VERIFICATION");
                        break;
                    case "request:ONBOARDING/EMAIL_VERIFICATION_SUCCESS":
                        var s;
                        (0, a.sY)("modal", (0, i.Z)({
                            content: (0, c.Z)({
                                message: (null === (s = (0, a.y0)().onboarding) || void 0 === s ? void 0 : s.verifyEmailMessage) || null,
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
                        var d, u;
                        (0, a.sY)("modal", (0, i.Z)({
                            content: (0, c.Z)({
                                message: (null === (d = (0, a.y0)().onboarding) || void 0 === d ? void 0 : d.verifyEmailMessage) || null,
                                isLoading: !1,
                                error: (null === (u = e.detail.json) || void 0 === u ? void 0 : u.message) || !1
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
                                n = document.querySelector("[data-name=MENU_SIDEBAR]");
                            if (t.classList.contains("animate-slide-in-right")) return (0, o.IV)("animate-slide-in-right", t), (0, o.cn)("animate-slide-out-left", t), (0, o.IV)("icon-x-charcoal", n), void(0, o.cn)("icon-menu-charcoal", n);t.style.top = "".concat(e, "px"),
                            (0, o.cn)("animate-slide-in-right", t),
                            (0, o.IV)("icon-menu-charcoal", n),
                            (0, o.cn)("icon-x-charcoal", n);
                            break
                        }
                }
            }
        },
        357: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n(9894),
                o = n(5982),
                i = n(3443),
                l = e => {
                    let {
                        nav: t
                    } = e;
                    const n = document.querySelectorAll("[data-menu]"),
                        a = document.querySelector("[data-menu-dropdown=subjects]"),
                        o = document.querySelectorAll("[data-menu-name]");
                    (0, i.IV)("active", n), t.activeSubMenu ? ((0, i.cn)("expanded", a), (0, i.IV)("active", o), (0, i.px)("[data-menu-name=".concat(t.activeSubMenu, "]")).then((e => {
                        (0, i.cn)("active", e)
                    }))) : (0, i.IV)("expanded", a)
                };
            const c = e => {
                    (0, i.IV)("animate-fade-hidden", e), (0, i.cn)("animate-fade-entered", e)
                },
                r = e => {
                    (0, i.IV)("animate-fade-entered", e), (0, i.cn)("animate-fade-hidden", e)
                };
            var s = e => {
                let {
                    blanket: t,
                    nav: n
                } = e;
                r(document.querySelectorAll("[data-menu-dropdown]")), r(document.querySelectorAll("[data-name=NAV_SUBMENU_CLOSE]")), c(document.querySelectorAll("[data-name=NAV_TRIGGER]")), n.activeDropdown ? (c(document.querySelector('[data-menu-dropdown="'.concat(n.activeDropdown, '"]'))), n.blanket && c(document.querySelector("[data-header-blanket]")), ((0, i.hd)().matching.includes("mediumDown") || window.TOUCHSCREEN || n.activeDropdown.match(/lists|notifications/)) && (0, i.px)("[data-menu=".concat(n.activeDropdown, "]")).then((e => {
                    c(e.querySelector('[data-name="NAV_SUBMENU_CLOSE"]')), r(e.querySelector("[data-name=NAV_TRIGGER]"))
                }))) : r(document.querySelector("[data-header-blanket]"))
            };
            (0, a.IW)({
                nav: {
                    inCushion: !1,
                    activeSubMenu: null,
                    activeDropdown: null
                }
            });
            let d = 95;
            (0, i.px)("[data-context-bar-offset]").then((e => {
                const t = e.offsetTop + e.clientHeight;
                t && t > 0 && (d = t)
            })), (0, i.px)("#btnProviderCoursePage").then((e => {
                d = e.offsetTop + 40
            }));
            var u = e => {
                switch (e.name) {
                    case "scroll:DOCUMENT":
                        (e => {
                            let {
                                active: t
                            } = e;
                            (0, i.px)("[data-context-bar]").then((e => t ? ((0, i.IV)("animate-fade-hidden", e), void(0, i.cn)("animate-fade-entered", e)) : ((0, i.IV)("animate-fade-entered", e), void(0, i.cn)("animate-fade-hidden", e))))
                        })({
                            active: window.pageYOffset > d
                        });
                        break;
                    case "mousemove:DOCUMENT":
                        if ((0, i.hd)().matching.includes("largeUp") && (0, a.y0)().nav.activeDropdown) {
                            if ((0, a.y0)().nav.activeDropdown.match(/search|lists|notifications/)) return;
                            if (!(0, i.IY)({
                                    event: e.originalEvent,
                                    cushion: 0,
                                    container: "[data-name=NAV_MENU]"
                                }) && ((0, a.IW)({
                                    nav: { ...(0, a.y0)().nav,
                                        activeSubMenu: null
                                    }
                                }), l((0, a.y0)())), (0, i.IY)({
                                    event: e.originalEvent,
                                    cushion: (0, a.y0)().nav.activeDropdown.match(/report/) ? 0 : 50,
                                    container: "[data-menu=".concat((0, a.y0)().nav.activeDropdown, "]")
                                })) return;
                            (0, a.IW)({
                                nav: { ...(0, a.y0)().nav,
                                    activeSubMenu: null,
                                    activeDropdown: null
                                }
                            }), (0, o.W)("load", "NAV_HIDE"), s((0, a.y0)()), l((0, a.y0)())
                        }
                        break;
                    case "mouseenter:NAV_DROPDOWN":
                    case "load:AUTOCOMPLETE_SEARCH":
                    case "click:NAV_TRIGGER":
                    case "click:NAV_SUBMENU_CLOSE":
                    case "click:BLANKET":
                        {
                            let t = e.detail.name;
                            if (e.name.match(/mouseenter/) && ((0, i.hd)().matching.includes("mediumDown") || window.TOUCHSCREEN || e.detail && e.detail.name.match(/lists|notifications/))) return void((0, a.y0)().nav.activeDropdown !== e.detail.name && ((0, a.IW)({
                                nav: { ...(0, a.y0)().nav,
                                    activeSubMenu: null,
                                    activeDropdown: null
                                }
                            }), (0, o.W)("load", "NAV_HIDE"), s((0, a.y0)()), l((0, a.y0)())));e.name.match(/click/) && (t = (0, a.y0)().nav.activeDropdown === e.detail.name ? null : e.detail.name),
                            (0, a.IW)({
                                nav: { ...(0, a.y0)().nav,
                                    activeDropdown: t,
                                    blanket: !!t
                                }
                            }),
                            (0, o.W)("notification", "CLEAR_ALL"),
                            s((0, a.y0)()),
                            "lists" === e.detail.name && ((0, a.sY)("modal"), window.requestAnimationFrame((() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth"
                                })
                            })), (0, o.W)("load", "NAV_LISTS")),
                            t ? (0, o.W)("load", "NAV_SHOW") : (0, o.W)("load", "NAV_HIDE");
                            break
                        }
                    case "mouseenter:NAV_ITEM_EXPAND":
                        (0, i.hd)().matching.includes("mediumUp") && ((0, a.IW)({
                            nav: { ...(0, a.y0)().nav,
                                activeSubMenu: e.detail.slug
                            }
                        }), l((0, a.y0)()))
                }
            }
        },
        9926: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n(9894),
                o = n(3443),
                i = n(5982);
            const l = () => {
                const e = document.getElementById("news-banner"),
                    t = document.querySelector(".cmpt-modal.active"),
                    n = document.querySelector("[data-context-bar].animate-fade-entered"),
                    a = document.querySelector(".cc-header"),
                    o = 5 + (n ? n.clientHeight : 0),
                    i = 5 + a.clientHeight + (e ? e.clientHeight : 0);
                if (t) {
                    const e = document.querySelector(".cmpt-modal-container");
                    return {
                        position: "fixed",
                        left: "".concat(e.offsetLeft + e.offsetWidth / 2 - 136, "px"),
                        transform: "0px, 10px"
                    }
                }
                return window.scrollY < i ? {
                    position: "absolute",
                    transform: "0px, ".concat(i, "px")
                } : window.scrollY >= i ? {
                    position: "fixed",
                    transform: "0px, ".concat(o, "px")
                } : void 0
            };
            const c = () => {
                    var e;
                    (0, a.sY)("notifications", (e = (0, a.y0)().notifications, '<div\n      id="notifications"\n      class="'.concat(l().position, ' z-force-top margin-horz-xsmall top"\n      style="\n        width: 275px;\n        transform: translate(').concat(l().transform, ");\n        ").concat(l().left ? "left: ".concat(l().left, ";") : "right: 0px;", '\n      "\n    >\n      ').concat(e.map(((e, t) => '<div\n          class="\n            relative margin-bottom-xsmall shadow-light radius-small text-left text-3\n            padding-small color-charcoal\n            '.concat((e => "success" === e ? "bg-green-light" : "error" === e ? "bg-red-light" : "bg-blue-xlight border-all border-blue-light")(e.type), '\n          "\n        >\n          ').concat(e.title ? '<h5 class="text-1 line-tight weight-semi padding-right-xsmall">'.concat(e.title, "</h5>") : "", "\n          ").concat(e.body ? '<div class="width-100 wysiwyg text-3">\n              '.concat(e.body, "\n            </div>") : "", '\n          <button\n            data-detail=\'{ "index": ').concat(t, '}\'\n            data-name="CLEAR_NOTIFICATION"\n            type="button"\n            class="block absolute top right margin-xsmall"\n          >\n            <i aria-label="Close Notification" class="icon-xsmall icon-x-charcoal"></i>\n          </button>\n        </div>'))).join(""), "\n    </div>")))
                },
                r = e => (0, a.IW)({
                    notifications: e
                });
            let s = null;
            r(window.CC.data.notifications || []), (0, a.y0)().notifications && (0, a.y0)().notifications.length && (c(), setTimeout((() => {
                (0, i.W)("notification", "CLEAR_ALL")
            }), 1e4));
            var d = e => {
                switch (e.name) {
                    case "click:REMOVE_PARENT":
                        "NEWS_BANNER" === e.detail.target && (0, a.y0)().notifications.length && c();
                    case "notification:SHOW":
                        {
                            const t = e.detail.body && e.detail.body.length;
                            let n = null;
                            if (!(e.detail.title && e.detail.title.length) && !t) return;
                            if (t) {
                                const t = document.createElement("div");
                                t.innerHTML = e.detail.body;
                                for (const e of t.querySelectorAll("a"))(0, o.cn)("color-charcoal", e);
                                n = t.innerHTML
                            }
                            const l = (0, a.y0)().notifications;l.push({ ...e.detail,
                                body: n
                            }),
                            r(l),
                            c(),
                            s && clearTimeout(s),
                            s = setTimeout((() => {
                                (0, i.W)("notification", "CLEAR_ALL")
                            }), e.detail.delay ? e.detail.delay : 0);
                            break
                        }
                    case "click:CLEAR_NOTIFICATION":
                        {
                            const t = (0, a.y0)().notifications;t.splice(e.detail.index, 1),
                            r(t),
                            c();
                            break
                        }
                    case "scroll:DOCUMENT":
                        (0, a.y0)().notifications.length && c();
                        break;
                    case "notification:CLEAR_ALL":
                        r([]), c()
                }
            }
        },
        6753: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return z
                }
            });
            var a = n(9894),
                o = n(5982),
                i = n(3943),
                l = n(2648);
            const c = ["local", "session"];

            function r(e, t, n) {
                (function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                })(e, t), t.set(e, n)
            }
            var s = new WeakMap,
                d = new WeakMap;
            class u {
                constructor() {
                    r(this, s, {
                        writable: !0,
                        value: !1
                    }), r(this, d, {
                        writable: !0,
                        value: !1
                    }), (0, l.Z)(this, s, function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "local";
                        if (!c.includes(e)) throw new UnsupportedWebStorageTypeError;
                        try {
                            const t = window["".concat(e, "Storage")];
                            return t.setItem("__storage_test__", "__storage_test__"), t.removeItem("__storage_test__"), !0
                        } catch (e) {
                            return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && store && 0 !== store.length
                        }
                    }())
                }
                setSilentlyFail(e) {
                    (0, l.Z)(this, d, e)
                }
                setItem(e, t) {
                    if ((0, i.Z)(this, s)) window.localStorage.setItem(e, t);
                    else if (!(0, i.Z)(this, d)) throw new Error("Local storage unavailable")
                }
                getItem(e) {
                    if ((0, i.Z)(this, s)) return window.localStorage.getItem(e);
                    if ((0, i.Z)(this, d)) return null;
                    throw new Error("Local storage unavailable")
                }
                removeItem(e) {
                    if ((0, i.Z)(this, s)) window.localStorage.removeItem(e);
                    else if (!(0, i.Z)(this, d)) throw new Error("Local storage unavailable")
                }
            }

            function m(e, t) {
                g(e, t), t.add(e)
            }

            function h(e, t, n) {
                g(e, t), t.set(e, n)
            }

            function g(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }

            function v(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return n
            }
            var p = new WeakMap,
                f = new WeakMap,
                E = new WeakMap,
                b = new WeakSet,
                _ = new WeakSet;
            class A {
                constructor(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    m(this, _), m(this, b), h(this, p, {
                        writable: !0,
                        value: void 0
                    }), h(this, f, {
                        writable: !0,
                        value: void 0
                    }), h(this, E, {
                        writable: !0,
                        value: void 0
                    }), (0, l.Z)(this, p, e), (0, l.Z)(this, f, t), (0, l.Z)(this, E, n)
                }
                add(e) {
                    const t = v(this, b, w).call(this);
                    let n = [e].concat(t);
                    null !== (0, i.Z)(this, E) && n.length > (0, i.Z)(this, E) && (n = n.slice(0, (0, i.Z)(this, E))), v(this, _, y).call(this, n)
                }
                has(e) {
                    return v(this, b, w).call(this).includes(e)
                }
                remove(e) {
                    const t = v(this, b, w).call(this).filter((t => t !== e));
                    v(this, _, y).call(this, t)
                }
                replace(e, t) {
                    const n = v(this, b, w).call(this).map((n => n === e ? t : n));
                    v(this, _, y).call(this, n)
                }
                at(e) {
                    var t;
                    return null !== (t = v(this, b, w).call(this).at(e)) && void 0 !== t ? t : null
                }
                countAll() {
                    return v(this, b, w).call(this).length
                }
                getAll() {
                    return v(this, b, w).call(this)
                }
                clearAll() {
                    (0, i.Z)(this, p).removeItem((0, i.Z)(this, f))
                }
            }

            function w() {
                const e = (0, i.Z)(this, p).getItem((0, i.Z)(this, f));
                return null === e ? [] : JSON.parse(e)
            }

            function y(e) {
                (0, i.Z)(this, p).setItem((0, i.Z)(this, f), JSON.stringify(e))
            }
            var O = n(8785),
                T = n(8858);
            const I = getComputedStyle(document.documentElement).getPropertyValue("--large-up-bp"),
                N = document.querySelector('[data-name="AUTOCOMPLETE_SEARCHBOX"]'),
                C = document.querySelector('[data-name="MOBILE_AUTOCOMPLETE_SEARCHBOX"]'),
                S = document.querySelector(".js-autocomplete-results"),
                L = ["page-empty_search", "page-home"].includes(document.body.id);
            let k = "",
                D = !1,
                R = [];
            const x = () => window.matchMedia("(min-width: ".concat(I, ")")).matches,
                M = () => {
                    !x() || N.getBoundingClientRect().bottom < -100 && U(!0)
                },
                U = function() {
                    let e = !!(arguments.length > 0 && void 0 !== arguments[0]) && arguments[0];
                    document.documentElement.classList.remove("search-open"), D = !1, L && window.removeEventListener("scroll", M), e && document.activeElement && document.activeElement.blur()
                },
                P = () => {
                    R = document.querySelectorAll(".js-autocomplete-result")
                },
                V = e => {
                    S.innerHTML = e, S.hidden = "" === e, P()
                };
            let Z = null,
                W = null;
            const q = e => {
                    W = new AbortController;
                    const t = W.signal;
                    (0, O.Z)("AUTOCOMPLETE", {
                        parameters: {
                            query: e
                        },
                        fetchOptions: {
                            signal: t
                        }
                    })
                },
                B = () => {
                    null !== W && (W.abort(), W = null), null !== Z && clearTimeout(Z)
                };
            let G = null;
            const H = () => {
                    const e = new u;
                    return e.setSilentlyFail(!0), new A(e, "recent_search_tokens", 3)
                },
                j = e => {
                    if (null === G && (G = H()), !G.has(e)) {
                        const t = G.at(0);
                        return null !== t && e.startsWith(t) ? void G.replace(t, e) : void G.add(e)
                    }
                };
            var z = e => {
                switch (e.name) {
                    case "load:WINDOW":
                        {
                            const e = (null === G && (G = H()), G.getAll());e.length >= 3 && (0, a.sY)("suggested_search_tokens", (e => '\n        <h2 class="search-results__group-heading">Recent</h2>\n        <ol class="list-no-style">\n            '.concat(e.tokens.map((e => {
                                const t = (0, T.T)(JSON.stringify({
                                        category: "autocomplete empty state",
                                        action: "recent_search_token",
                                        label: "Entry: “".concat(e, "”")
                                    })),
                                    n = (0, T.T)(JSON.stringify({
                                        term: e
                                    }));
                                return '\n                    <li>\n\n                        <button\n                            class="search-results__result js-autocomplete-result"\n                            data-track-ga="'.concat(t, '"\n                            type="button"\n                            data-name="SUGGESTED_SEARCH_TERM"\n                            data-detail="').concat(n, '"\n                        >\n                            <i class="search-results__result-icon icon-search-charcoal icon-small"></i>\n                            <div class="search-results__result-info">\n                                <span class="search-results__result-name">').concat(e, "</span>\n                            </div>\n                        </button>\n                    </li>\n                ")
                            })).join(""), "\n        </ol>\n    "))({
                                tokens: e
                            })),
                            P();
                            break
                        }
                    case "keydown:DOCUMENT":
                        if (!D) return;
                        switch (e.originalEvent.key) {
                            case "Escape":
                                U(!0);
                                break;
                            case "ArrowUp":
                                (() => {
                                    if (0 === R.length) return;
                                    const e = [...R].findIndex((e => e.matches(":focus")));
                                    let t = R.length - 1; - 1 !== e && (t = 0 === e ? R.length - 1 : e - 1), R[t].focus()
                                })(), e.originalEvent.preventDefault();
                                break;
                            case "ArrowDown":
                                (() => {
                                    if (0 === R.length) return;
                                    const e = [...R].findIndex((e => e.matches(":focus")));
                                    let t = 0; - 1 !== e && (t = e === R.length - 1 ? 0 : e + 1), R[t].focus()
                                })(), e.originalEvent.preventDefault()
                        }
                        break;
                    case "click:AUTOCOMPLETE_SEARCHBOX":
                        if (e.originalEvent.target.parentElement, D) return;
                        (!L || !x()) && window.scrollTo(0, 0), document.documentElement.classList.add("search-open"), !x() && C.focus(), D = !0, (0, o.W)("load", "AUTOCOMPLETE_SEARCH", {}), L && window.addEventListener("scroll", M), N.value.length > 0 && 0 === R.length && (B(), q(N.value));
                        break;
                    case "click:SUGGESTED_SEARCH_TERM":
                        {
                            const t = e.detail.term;
                            if ((e => {
                                    const t = e.length > 0 ? "remove" : "add";
                                    [N, C].forEach((n => {
                                        n.value = e, n.classList[t]("is-blank")
                                    }))
                                })(t), t === k) return;
                            if (B(), k = t, "" === k) return void V("");Z = setTimeout((function() {
                                q(t), j(t)
                            }), 500);
                            break
                        }
                    case "keyup:AUTOCOMPLETE_SEARCHBOX":
                    case "keyup:MOBILE_AUTOCOMPLETE_SEARCHBOX":
                        {
                            const t = e.originalEvent.target;
                            if ((e => {
                                    const t = e.value,
                                        n = t.length > 0 ? "remove" : "add";
                                    [N, C].forEach((a => {
                                        a !== e && (a.value = t), a.classList[n]("is-blank")
                                    }))
                                })(t), t.value === k) return;
                            if (B(), k = t.value, "" === k) return void V("");Z = setTimeout((function() {
                                q(t.value), j(t.value)
                            }), 500);
                            break
                        }
                    case "focus:AUTOCOMPLETE_SEARCHBOX":
                    case "focus:MOBILE_AUTOCOMPLETE_SEARCHBOX":
                        {
                            const t = e.originalEvent.target;t.parentElement.querySelector('[data-name="AUTOCOMPLETE_CLEAR"][aria-controls="'.concat(t.id, '"]')).hidden = !1;
                            break
                        }
                    case "blur:AUTOCOMPLETE_SEARCHBOX":
                    case "blur:MOBILE_AUTOCOMPLETE_SEARCHBOX":
                        {
                            const t = e.originalEvent.target,
                                n = t.parentElement.querySelector('[data-name="AUTOCOMPLETE_CLEAR"][aria-controls="'.concat(t.id, '"]'));setTimeout((() => {
                                !t.matches(":focus") && (n.hidden = !0)
                            }), 200);
                            break
                        }
                    case "click:AUTOCOMPLETE_CLEAR":
                        {
                            const t = e.originalEvent.target.getAttribute("aria-controls");
                            (e => {
                                [N, C].forEach((t => {
                                    t.value = "", t.classList.add("is-blank"), t === e && t.focus()
                                })), k = ""
                            })(document.getElementById(t)),
                            B(),
                            V("");
                            break
                        }
                    case "click:AUTOCOMPLETE_BLANKET":
                    case "click:MOBILE_AUTOCOMPLETE_EXIT":
                        U();
                        break;
                    case "request:AUTOCOMPLETE_SUCCESS":
                        V(e.detail.json.html)
                }
            }
        },
        9504: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var a, o, i, l, c = n(9894),
                r = n(8609),
                s = n(7451),
                d = n(8785),
                u = n(1029),
                m = n(382),
                h = n(8117),
                g = n(3443),
                v = n(2385),
                p = n(1655),
                f = n(9435);
            const E = () => (0, c.y0)().signup,
                b = e => (0, c.IW)({
                    signup: { ...E(),
                        ...e
                    }
                });
            b({
                showSignupCTA: (null === (a = window.CC) || void 0 === a || null === (o = a.data) || void 0 === o ? void 0 : o.showSignupCTA) || !1,
                page: "page ".concat((null === (i = window.CC) || void 0 === i || null === (l = i.data) || void 0 === l ? void 0 : l.page) || "unspecified"),
                source: "unknown"
            });
            const _ = "/signup",
                A = "signup_prompt";
            var w = e => {
                switch (e.name) {
                    case "load:ESSENTIAL_MODULE":
                        if (window.location.pathname === _) {
                            const e = (0, g.re)("signup_source");
                            window.CC.trackGA({
                                category: "sign up init",
                                action: e || "sign up page",
                                label: E().page
                            })
                        }
                        E().showSignupCTA && void 0 === p.Z.get(A) && setTimeout((() => {
                            (e => {
                                e.active && (0, g.cn)("active", document.getElementById("signup-slidein"))
                            })({
                                active: !0
                            }), window.CC.trackGA({
                                category: "sign up cta show",
                                action: null,
                                label: E().page
                            }), p.Z.set(A, 1, {
                                expires: 30
                            })
                        }), 2e4);
                        break;
                    case "click:SIGNUP_LINK":
                    case "signup:SIGNUP_INTENT":
                        {
                            b({ ...E(),
                                source: e.detail.source || "unknown",
                                skipOnboarding: e.detail.skipOnboarding || !1
                            }),
                            e.originalEvent && e.originalEvent.preventDefault();
                            const t = {};
                            if (e.detail.returnToPage && (t.e = window.location.href), e.detail.skipOnboarding && (t.skip_onboarding = 1), !f.Z.phone && window.innerWidth > 640) return window.CC.trackGA({
                                category: "sign up init",
                                action: E().source,
                                label: E().page
                            }), (0, c.sY)("modal", (0, u.Z)({
                                content: (0, m.Z)(),
                                style: {
                                    width: 850,
                                    height: 700
                                }
                            })), void(0, d.Z)("GET_SIGNUP_MODAL_CONTENTS", {
                                parameters: { ...t
                                }
                            });window.location.assign("".concat(_).concat((0, g.h3)({ ...t,
                                signup_source: E().source
                            })));
                            break
                        }
                    case "submit:SIGNUP_FORM":
                        {
                            e.originalEvent.preventDefault(),
                            (0, c.sY)("signup-submit-button", (0, h.Z)({
                                label: "Create your account",
                                isLoading: !0
                            }));
                            const t = new FormData(e.originalEvent.target),
                                n = {
                                    full_name: t.get("full_name"),
                                    email: t.get("email"),
                                    password: t.get("password")
                                };t.has("frc-captcha-solution") && (n.friendly_captcha_solution = t.get("frc-captcha-solution")),
                            t.has("skip_onboarding") && (n.skip_onboarding = t.get("skip_onboarding")),
                            null !== t.get("exit_to_url") && (n.onboarding_exit_url = t.get("exit_to_url")),
                            (0, d.Z)("CREATE_USER", {
                                data: n
                            });
                            break
                        }
                    case "request:CREATE_USER_SUCCESS":
                        window.location.assign("".concat(e.detail.json.url).concat((0, g.h3)({
                            signup_source: E().source,
                            signup_page: E().page
                        })));
                        break;
                    case "request:CREATE_USER_ERROR":
                        (0, c.sY)("signup-submit-button", (0, h.Z)({
                            label: "Create your account",
                            isLoading: !1
                        })), (0, v.Z)("SIGNUP_FORM", e.detail.fieldErrors);
                        break;
                    case "request:GET_SIGNUP_MODAL_CONTENTS_SUCCESS":
                        (0, c.sY)("modal", (0, u.Z)({
                            content: e.detail.json.modal,
                            style: {
                                width: 850,
                                height: 700
                            }
                        }), (e => {
                            (0, r.l)(e), (0, s.v)()
                        }))
                }
            }
        },
        3649: function(e, t, n) {
            n.r(t);
            var a = n(5818),
                o = n(6753),
                i = n(9504),
                l = n(410),
                c = n(9028),
                r = n(357),
                s = n(2381),
                d = n(5964),
                u = n(9926),
                m = n(3443);
            t.default = e => {
                e.useHandler(a.default), (0, m.px)("[data-search-container]").then((() => {
                    e.useHandler(o.default)
                })), e.useHandler(d.default), e.useHandler(r.default), e.useHandler(s.default), e.useHandler(i.default), e.useHandler(l.default), e.useHandler(c.default), e.useHandler(u.default)
            }
        },
        7451: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return o
                }
            });
            var a = n(4780);
            const o = () => {
                const e = document.querySelectorAll(".frc-captcha");
                0 === e.length || e.forEach((e => {
                    new a.c(e).start()
                }))
            }
        },
        8609: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return l
                }
            });
            var a = n(9894);
            const o = e => {
                    (async e => {
                        const t = await fetch("/google-account-login", {
                            body: JSON.stringify({
                                token: e
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "POST"
                        });
                        if (!t.ok) return window.alert("Authentication with Google failed");
                        const n = await t.json();
                        window.location.assign(n.url)
                    })(e.credential)
                },
                i = e => {
                    const t = null === e ? document : e;
                    window.google.accounts.id.initialize({
                        client_id: (0, a.y0)().data.googleAuthClientId,
                        callback: o
                    }), window.google.accounts.id.renderButton(t.querySelector(".sign-in-with-google"), {
                        theme: "outline",
                        size: "large",
                        text: "signin_with",
                        width: 199
                    })
                },
                l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (window.google) i(e);
                    else {
                        const t = document.createElement("script");
                        t.src = "https://accounts.google.com/gsi/client", t.addEventListener("load", (() => {
                            i(e)
                        })), document.body.appendChild(t)
                    }
                }
        }
    }
]);