(self.webpackChunk = self.webpackChunk || []).push([
    [6192, 2427, 8535, 1896, 3438], {
        2913: function(t, a) {
            "use strict";
            const e = (t, a, e) => {
                const n = {
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
                    l = document.createElement("div");
                l.innerHTML = '\n    <div data-name="NOTICE_CMPT" data-notice class="radius-small\n      border-all border-'.concat(n[t].border, " \n      color-").concat(n[t].color, " text-left text-3 padding-horz-xsmall padding-vert-xxsmall padding-right-xxlarge margin-vert-xxsmall relative\n      bg-").concat(n[t].bg, ' text-left text-3 padding-horz-xsmall padding-vert-xxsmall padding-right-xxlarge margin-vert-xxsmall relative\n    ">\n      <div class="').concat(t, '-content">').concat(e, '</div>\n      <button\n        type="button"\n        data-name="REMOVE_PARENT"\n        data-detail=\'{ "target": "NOTICE_CMPT" }\'\n        class="block absolute top right padding-horz-xsmall padding-vert-xxsmall"\n      >\n        <i class="icon-xsmall icon-x-charcoal"></i>\n      </button>\n    </div>\n  '), document.querySelector(a).prepend(l.firstElementChild)
            };
            a.Z = {
                error: (t, a) => {
                    e("error", t, a)
                },
                success: (t, a) => {
                    e("success", t, a)
                },
                warning: (t, a) => {
                    e("warning", t, a)
                },
                info: (t, a) => {
                    e("info", t, a)
                }
            }
        },
        5167: function(t, a, e) {
            "use strict";
            e.d(a, {
                Z: function() {
                    return u
                }
            });
            var n = e(3443),
                l = e(4114),
                s = e(6596);
            const i = t => t.addToList.status && "processing" === t.addToList.status;
            var c = e(8858);
            var o = t => {
                    let {
                        list: a,
                        lists: e
                    } = t;
                    return '\n  <div class="large-up-padding-right-small" style="width: calc(100% - '.concat((0, n.hd)().matching.includes("largeUp") ? "60px" : "5px", ');">\n    <fieldset class="checkbox width-100">\n      <input\n        type="checkbox"\n        name="checkbox-list-').concat(a.id, '"\n        id="checkbox-list-').concat(a.id, '" ').concat(a["".concat(e.addToList.type, "s")].includes(e.addToList.id) ? "checked" : "", '\n      />\n      <label\n        class="padding-xsmall"\n        for="checkbox-list-').concat(a.id, '"\n        data-name="LIST_TOGGLE"\n        data-detail=\'{\n          "checked": ').concat(!a["".concat(e.addToList.type, "s")].includes(e.addToList.id), ',\n          "id": ').concat(e.addToList.id, ',\n          "type": "').concat(e.addToList.type, '",\n          "listId": ').concat(a.id, ' }\'\n      >\n        <span class="checkbox-icon">\n          <i class="icon-checkmark-white"></i>\n        </span>\n        <span class="checkbox-label truncate" style="max-width: 315px;">\n          ').concat((0, c.T)(a.name), "\n          ").concat(a.id == e.addToList.newList ? '\n            <span class="bg-green-mid radius-small color-white weight-semi text-4 padding-horz-xxsmall line-wide">'.concat(s.s.csr.global.label_new(), "</span></span>\n          ") : "", '\n        </span>\n      </label>\n    </fieldset>\n  </div>\n  <div class="medium-down-hidden horz-align-right padding-right-xsmall border-box">\n    <span class="text-4 color-gray line-tight">').concat((t => {
                        switch (parseInt(t, 10)) {
                            case 0:
                                return s.s.csr.lists.privacy.private();
                            case 1:
                                return s.s.csr.lists.privacy.unlisted();
                            case 2:
                                return s.s.csr.lists.privacy.public()
                        }
                    })(a.privacy), "</span>\n  </div>\n")
                },
                r = e(681);
            var d = t => {
                    let {
                        lists: a
                    } = t;
                    return a.available && a.available.length ? '\n      <ul data-name="LISTS_TABLE" class="scrollable-y" style="max-height: '.concat((() => {
                        const t = document.querySelectorAll('[data-template="modal-add-to-list"] header');
                        return 467 - (t.length ? t[0].clientHeight : 68)
                    })(), 'px;">\n        ').concat(a.available.map((t => {
                        if (t.id !== a.addToList.id) return '\n              <li\n                data-template="list-item-'.concat(t.id, '"\n                style="background-color: ').concat(((t, a) => t.id == a.addToList.newList ? "rgba(208,253,228,.4)" : t.courses.includes(parseInt(a.addToList.courseId, 10)) ? "rgba(208,236,253,.4)" : "white")(t, a), ';"\n                class="row nowrap vert-align-middle border-bottom ').concat(((t, a) => t.courses.includes(parseInt(a.addToList.courseId, 10)) ? "border-blue-light)" : "border-gray-light")(t, a), '"\n              >\n                ').concat(o({
                            list: t,
                            lists: a
                        }), "\n              </li>\n            ")
                    })).join(""), "\n      </ul>\n      ").concat(a.available.length > 9 ? '\n        <div\n          class="cmpt-list-add-scroll absolute width-100 left text-center padding-top-small padding-bottom-xxsmall border-box"\n          style="\n            background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.9) 55%, rgba(255,255,255,0) 100%);\n            bottom: 62px;"\n        >\n          <span class="z-top text-3 icon-left-xsmall icon-arrow-down-charcoal">\n            <span class="text-3 icon-right-xsmall icon-arrow-down-charcoal">'.concat(s.s.csr.lists.add_to_modal.scroll(), "</span>\n          </span>\n        </div>") : "", '\n      <nav class="absolute bottom z-top left width-100 row vert-align-middle shadow-light padding-small border-box">\n        ').concat(a.available.length <= a.maxLists ? '<button\n          data-track-ga=\'{ "category": "Lists", "action": "New List", "label": "Modal" }\'\n          data-name="LIST_SHOW_CREATE" class="btn-small btn-white icon-left-small icon-list-add-charcoal"\n         >'.concat((0, r.sprintf)((0, c.T)(s.s.csr.lists.add_to_modal.new_list()), '<span class="medium-down-hidden">', "</span>"), "</button>") : '<span class="text-3 color-gray">'.concat(s.s.csr.lists.add_to_modal.list_limit_reached({
                        limit: a.maxLists
                    }), "</span>"), '\n        <button\n          data-name="NAV_TRIGGER"\n          data-detail=\'{ "name": "lists" }\'\n          data-track-ga=\'{ "category": "Lists", "action": "Add External Resource", "label": "Modal"}\'\n          class="xsmall-only-hidden margin-horz-xxsmall row vert-align-middle btn-white btn-small"\n        >\n          <span class="bg-yellow-mid margin-right-xxsmall color-white weight-semi text-4 padding-horz-xxsmall upper">').concat(s.s.csr.global.label_new(), "</span>+ ").concat(s.s.csr.lists.add_to_modal.add_any_link(), '\n        </button>\n        <button data-name="MODAL_CLOSE" data-detail=\'{ "close": true }\' class="color-blue weight-semi text-2 horz-align-right">').concat(s.s.csr.global.label_done(), "</button>\n      </nav>\n    ") : '\n    <div class="border-top border-gray-light">\n      <div class="text-center vert-align-middle margin-vert-xxlarge width-4-5 medium-up-width-2-3 width-centered">\n        <img width="120" src="/images/lists/list-empty.png" alt="" />\n        <div class="padding-medium">\n          <p class="text-1">'.concat(s.s.csr.lists.add_to_modal.empty_state_copy(), '</p>\n          <button\n            data-track-ga=\'{ "category": "Lists", "action": "New List", "label": "Modal" }\'\n            data-name="LIST_SHOW_CREATE"\n            class="btn-blue btn-large icon-left-small icon-list-add-white margin-top-medium margin-bottom-large"\n          >\n            ').concat(s.s.csr.lists.add_to_modal.empty_state_cta(), "\n          </button>\n        </div>\n      </div>\n    </div>\n    ")
                },
                u = t => {
                    const a = (0, n.P5)(t.lists.addToList.type, t.lists.addToList.id);
                    return '<section class="padding-medium">\n    <header class="padding-bottom-small padding-right-medium border-bottom relative">\n      <h2 class="head-3 margin-bottom-xxsmall">'.concat(a.name, '</h2>\n      <h3 class="icon-left-small icon-').concat(t.lists.addToList.type, '-charcoal text-1 color-gray">').concat(s.s.csr.lists.add_to_modal.title({
                        type: t.lists.addToList.type
                    }), '</h3>\n      <div class="absolute right bottom" style="margin-bottom: 13px;">\n      ').concat(t.lists.saving ? '\n        <p class="padding-vert-xxsmall color-gray text-3 vert-align-middle row">\n          <span class="loader-bars loader-small margin-right-xsmall"></span> '.concat(s.s.csr.lists.add_to_modal.saving(), "\n        </p>") : "", "\n      ").concat(t.lists.notification ? '<p class="color-gray italic padding-vert-xxsmall padding-horz-xsmall text-3">\n          '.concat(t.lists.notification.message, "\n        </p>") : "", "\n      </div>\n    </header>\n    ").concat(t.user.loggedIn ? t.lists.addToList.creating ? (t => {
                        let {
                            lists: a
                        } = t;
                        return '\n    <nav class="row padding-vert-xsmall border-bottom border-gray horz-align-center vert-align-middle">\n      <h4 class="color-charcoal text-1 weight-semi icon-left-small icon-list-add-charcoal">'.concat(s.s.csr.lists.add_to_modal.creating_list(), '</h4>\n    </nav>\n\n    <div class="margin-vert-medium" style="min-height: 356px;">\n      <form data-name="LIST_CREATE" data-detail=\'{ "type": "').concat(a.addToList.type, '", "id": ').concat(a.addToList.id, '}\'>\n        <input\n            data-name="LISTS_TITLE"\n            style="margin: 0 -13px;"\n            class="input-simple input-large width-100"\n            type="text"\n            value="').concat(a.form.titleValue || "", '"\n            name="listName"\n            placeholder="').concat(s.s.csr.lists.add_to_modal.list_name_input_placeholder(), '"\n        />\n        <div data-template="list-privacy">\n          ').concat((0, l.Z)({
                            privacyValue: a.form.privacyValue || 0
                        }), '\n        </div>\n        <div class="absolute bottom left width-100 row vert-align-middle shadow-light padding-small border-box">\n          <button type="button" class="btn-white btn-small" data-name="LIST_CREATE_CANCEL">').concat(s.s.csr.global.label_cancel(), "</button>\n          <button ").concat(i(a) ? "disabled" : 'type="submit"', ' class="btn-blue btn-small horz-align-right relative ').concat(i(a) ? "processing" : "", '">\n            ').concat(i(a) ? '\n              <span\n                class="loader-bars loader-white loader-small absolute"\n                style="left: 50%; margin-left: -3px;"\n              ></span>\n              <span class="invisible">'.concat(s.s.csr.lists.add_to_modal.create_list_button(), "</span>") : "\n                ".concat(s.s.csr.lists.add_to_modal.create_list_button(), "\n              "), "\n          </button>\n        </div>\n      </form>\n    </div>\n    ")
                    })(t) : d(t) : (t => {
                        let {
                            user: a
                        } = t;
                        return '\n  <div class="border-top border-gray-light">\n    <div class="text-center vert-align-middle margin-vert-xxlarge width-4-5 medium-up-width-2-3 width-centered">\n      <img width="120" src="/images/lists/list-empty.png" alt="" />\n      <div class="padding-medium">\n        <p class="text-1">'.concat(s.s.csr.lists.add_to_modal.empty_state_copy(), "</p>\n        ").concat(a.loggedIn ? "" : '\n          <a\n            href="/signup"\n            data-name="SIGNUP_LINK"\n            data-detail=\'{"source": "list"}\'\n            class="btn-blue btn-large margin-top-medium margin-bottom-large"\n          >\n            '.concat(s.s.csr.global.label_signup_free(), "\n          </a>\n        "), "\n      </div>\n    </div>\n  </div>\n")
                    })(t), "\n  </section>\n  ")
                }
        },
        4114: function(t, a, e) {
            "use strict";
            var n = e(8774),
                l = e(6596),
                s = e(8858),
                i = e(681);
            const c = [{
                    key: "private",
                    label: l.s.csr.lists.privacy.private(),
                    value: 0
                }, {
                    key: "unlisted",
                    label: l.s.csr.lists.privacy.unlisted(),
                    value: 1
                }, {
                    key: "public",
                    label: l.s.csr.lists.privacy.public(),
                    value: 2
                }],
                o = t => 2 === t ? {
                    bg: "bg-blue-xlight border-blue-light",
                    icon: "public-blue",
                    text: l.s.csr.lists.privacy.public_info_copy()
                } : {
                    bg: "bg-yellow-xlight border-yellow-mid",
                    icon: 1 === t ? "unlocked-yellow" : "lock-yellow",
                    text: 1 === t ? l.s.csr.lists.privacy.unlisted_info_copy() : l.s.csr.lists.privacy.private_info_copy()
                };
            a.Z = t => {
                let {
                    privacyValue: a
                } = t;
                return '\n  <div class="margin-top-small margin-right-small btn-group nowrap" data-template="radio-privacy">\n    '.concat(c.map((t => (0, n.Z)({
                    valueArr: c,
                    name: "privacy",
                    checked: parseInt(a, 10) === t.value,
                    label: t.label,
                    value: t.value
                }))).join(""), "\n  </div>\n  ").concat((t => '\n  <div\n    class="margin-top-small border-all radius-small padding-vert-xsmall padding-horz-small row vert-align-middle nowrap '.concat(o(t).bg, '"\n  >\n    <div class="margin-right-xsmall">\n      <i class="icon-').concat(o(t).icon, ' icon-medium"></i>\n    </div>\n    <p class="text-3 color-charcoal">\n      ').concat((0, i.sprintf)((0, s.T)(l.s.csr.lists.privacy.current({
                    privacy: c[t].key
                })), '<strong class="text-3 weight-bold">', "</strong>"), "\n      ").concat(o(t).text, "\n    </p>\n  </div>\n"))(parseInt(a, 10)), "\n")
            }
        },
        8774: function(t, a) {
            "use strict";
            a.Z = t => '\n  <label\n    for="'.concat(t.name, "-").concat(t.label, '"\n    class="row vert-align-middle btn-white ').concat(t.checked ? "selected" : "", '"\n  >\n    <input\n      data-name="RADIO"\n      data-detail=\'{ "values": ').concat(JSON.stringify(t.valueArr), ' }\'\n      class="hidden"\n      type="radio"\n      id="').concat(t.name, "-").concat(t.label, '"\n      name="').concat(t.name, '"\n      value="').concat(t.value, '"\n      ').concat(t.checked ? "checked" : "", '\n    />\n    <span\n      class="inline-block\n      ').concat(t.checked ? "icon-checkmark-white icon-small icon-center" : "border-all radius-circle", '"\n      style="\n        text-indent: -9999px;\n        height: 14px;\n        width: 14px;\n      "\n    >\n      Selected\n    </span>\n    <span class="margin-left-xxsmall text-2 weight-light">').concat(t.label, "</span>\n  </label>\n")
        },
        6491: function(t, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                default: function() {
                    return m
                }
            });
            var n = e(9894),
                l = e(5982),
                s = e(3443),
                i = t => "<button\n    ".concat(t.disabled ? "disabled" : "", "\n    ").concat(t.loggedIn ? '\n      data-detail=\'{\n        "size": "'.concat(t.size, '",\n        "type": "').concat(t.type, '",\n        "id": ').concat(t.id).concat(t.count ? ', "count": '.concat(t.count) : "", "}'\n      data-name=\"BOOKMARK_").concat(t.saved["".concat(t.type, "s")].includes(t.id) ? "REMOVE" : "ADD", '"\n    ') : 'data-name="BOOKMARK_ADD"', '\n  >\n    <i class="').concat(t.saved["".concat(t.type, "s")].includes(t.id) ? "icon-bookmarked" : "icon-bookmark", " icon-").concat(t.size, '"></i>\n  </button>\n  ').concat(t.count ? '<strong class="cmpt-bookmark-count text-3 weight-semi hidden medium-up-inline-block">'.concat((0, s.uf)(t.count).shortHand, "</strong>") : "", "\n  "),
                c = e(7078),
                o = e.n(c),
                r = e(8785);
            const d = () => (0, n.y0)().saved,
                u = t => (0, n.IW)({
                    saved: { ...d(),
                        ...t
                    }
                });
            u(window.CC.data.saved);
            var m = t => {
                switch (t.name) {
                    case "click:BOOKMARK_ADD":
                        {
                            if (t.target.disabled) return;t.originalEvent.preventDefault();
                            const a = parseInt(t.detail.id, 10),
                                e = t.detail.type,
                                s = d();
                            if (!(0, n.y0)().user.loggedIn) return void(0, l.W)("signup", "SIGNUP_INTENT", {
                                returnToPage: !0,
                                source: "save course"
                            });
                            (0, r.Z)("SAVED/ADD", {
                                parameters: { ...t.detail,
                                    count: t.detail.count ? t.detail.count + 1 : null
                                }
                            }),
                            !s["".concat(e, "s")].includes(a) && s["".concat(e, "s")].push(a),
                            u(s),
                            (0, n.sY)("bookmark-".concat(e, "-").concat(a), i({
                                disabled: !0,
                                size: t.detail.size,
                                count: t.detail.count ? t.detail.count + 1 : null,
                                id: a,
                                type: e,
                                loggedIn: (0, n.y0)().user.loggedIn,
                                saved: s
                            }));
                            break
                        }
                    case "click:BOOKMARK_REMOVE":
                        {
                            if (t.target.disabled) return;
                            const a = parseInt(t.detail.id, 10),
                                e = t.detail.type,
                                l = d();
                            (0, r.Z)("SAVED/REMOVE", {
                                parameters: { ...t.detail,
                                    count: t.detail.count ? t.detail.count - 1 : null
                                }
                            }),
                            l["".concat(e, "s")].includes(a) && o()(l["".concat(e, "s")], (t => t === a)),
                            u(l),
                            (0, n.sY)("bookmark-".concat(e, "-").concat(a), i({
                                disabled: !0,
                                size: t.detail.size,
                                count: t.detail.count ? t.detail.count - 1 : null,
                                id: a,
                                type: e,
                                loggedIn: (0, n.y0)().user.loggedIn,
                                saved: l
                            }));
                            break
                        }
                    case "request:SAVED/ADD_SUCCESS":
                    case "request:SAVED/REMOVE_SUCCESS":
                    case "request:SAVED/ADD_ERROR":
                    case "request:SAVED/REMOVE_ERROR":
                        {
                            const {
                                id: a,
                                type: e,
                                count: l,
                                size: s
                            } = t.detail.originalParameters;
                            (0, n.sY)("bookmark-".concat(e, "-").concat(a), i({
                                disabled: !1,
                                size: s,
                                count: l,
                                id: parseInt(a, 10),
                                type: e,
                                loggedIn: (0, n.y0)().user.loggedIn,
                                saved: d()
                            }));
                            break
                        }
                }
            }
        },
        9627: function(t, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                default: function() {
                    return c
                }
            });
            var n = e(9894),
                l = e(5982),
                s = e(3443),
                i = e(8785),
                c = t => {
                    switch (t.name) {
                        case "click:FOLLOW":
                        case "click:UNFOLLOW":
                            {
                                const a = parseInt(t.detail.id, 10),
                                    e = parseInt(t.detail.count, 10) + (t.name.match(/UNFOLLOW/) ? -1 : 1),
                                    c = t.detail.hideCountOnFollowed || !1,
                                    o = t.detail.cmptId || !1;
                                if (!(0, n.y0)().user.loggedIn) return void(0, l.W)("signup", "SIGNUP_INTENT", {
                                    returnToPage: !0,
                                    source: "follow"
                                });window.CC.trackGA([{
                                    category: "Follow",
                                    action: "Logged in",
                                    label: t.detail.name
                                }, {
                                    category: "Follow Button With Count",
                                    action: "Logged in",
                                    label: t.detail.name
                                }]),
                                (0, i.Z)("FOLLOWS/".concat(t.name.match(/UNFOLLOW/) ? "REMOVE" : "ADD"), {
                                    parameters: {
                                        name: t.detail.name,
                                        id: a
                                    }
                                }),
                                (0, n.sY)("follow-".concat(t.detail.name, "-").concat(a).concat(o ? "-".concat(o) : ""), (t => {
                                    let {
                                        following: a,
                                        cmptId: e,
                                        hideCountOnFollowed: n,
                                        size: l,
                                        id: i,
                                        name: c,
                                        count: o
                                    } = t;
                                    return '<button\n    class="btn-blue btn-'.concat(l, " ").concat(a ? "icon-left-small icon-checkmark-white" : "", '"\n    data-name="').concat(a ? "UNFOLLOW" : "FOLLOW", '"\n    data-detail=\'{\n      "id": "').concat(i, '",\n      ').concat(e ? '"cmptId": "'.concat(e, '",') : "", '\n      "name": "').concat(c, '",\n      "count": ').concat(o, ',\n      "size": "').concat(l, '",\n      "hideCountOnFollowed": ').concat(n, "\n    }'\n  >\n     ").concat(a ? "Following" : "Follow", "\n    ").concat(n && a ? "" : '<span class="cmpt-follow-count bg-blue-black radius-small padding-horz-xxsmall margin-left-xsmall">'.concat((0, s.uf)(o).shortHand, "</span>"), "\n  </button>\n  ")
                                })({
                                    following: !t.name.match(/UNFOLLOW/),
                                    id: a,
                                    cmptId: o,
                                    hideCountOnFollowed: c,
                                    size: t.detail.size,
                                    name: t.detail.name,
                                    count: e <= 0 ? 0 : e
                                })),
                                t.originalEvent.stopPropagation();
                                break
                            }
                        case "mouseenter:FOLLOW_ROW":
                            {
                                const a = t.target.querySelector("[data-offset-src]"),
                                    e = a.offsetLeft;
                                (0, s.cn)("invisible", a),
                                t.target.querySelector("[data-offset-target]").style.left = "".concat(e, "px");
                                break
                            }
                        case "mouseleave:FOLLOW_ROW":
                            {
                                const a = t.target.querySelector("[data-offset-src]");
                                (0, s.IV)("invisible", a);
                                break
                            }
                    }
                }
        },
        8708: function(t, a, e) {
            "use strict";
            e.r(a);
            var n = e(9894),
                l = e(5982),
                s = e(5167),
                i = e(1029),
                c = e(4114),
                o = e(2913),
                r = e(7078),
                d = e.n(r),
                u = e(6259),
                m = e.n(u),
                p = e(3443),
                g = e(8785),
                v = e(5799),
                b = e(5414);
            const h = () => (0, n.y0)().lists,
                y = t => (0, n.IW)({
                    lists: { ...h(),
                        ...t
                    }
                });
            y({
                available: window.CC.data.lists || [],
                addToList: null,
                maxLists: window.CC.data.maxLists,
                form: {
                    privacyValue: 0,
                    titleValue: null
                },
                savingItems: []
            }), !h().addToList && (0, n.sY)("lists-privacy", (0, c.Z)(h().form)), a.default = t => {
                switch (t.name) {
                    case "scroll:LISTS_TABLE":
                        {
                            const a = document.querySelector("[data-template=modal-add-to-list] .cmpt-list-add-scroll");
                            if (a.length <= 0) return;t.target.scrollTop >= t.target.scrollHeight - t.target.offsetHeight - 10 ? (0, p.cn)("hidden", a) : (0, p.IV)("hidden", a);
                            break
                        }
                    case "click:LISTS_MODAL":
                        {
                            const a = h();a.addToList = {
                                creating: !1,
                                type: t.detail.type,
                                id: parseInt(t.detail.id, 10)
                            },
                            y(a),
                            (0, n.sY)("modal", (0, i.Z)({
                                content: "\n            <div data-template='modal-add-to-list'>\n              ".concat((0, s.Z)((0, n.y0)()), "\n            </div>"),
                                style: {
                                    width: 450,
                                    height: 550
                                }
                            }), (() => {
                                window.requestAnimationFrame((() => {
                                    (0, n.sY)("modal-add-to-list", (0, s.Z)((0, n.y0)()))
                                }))
                            }));
                            break
                        }
                    case "change:LISTS_TITLE":
                        y({
                            form: { ...h().form,
                                titleValue: t.originalEvent.target.value
                            }
                        });
                        break;
                    case "change:RADIO":
                        "privacy" === t.target.name && t.target.checked && (y({
                            form: { ...h().form,
                                privacyValue: t.target.value
                            }
                        }), h().addToList ? (0, n.sY)("modal-add-to-list", (0, s.Z)((0, n.y0)())) : (0, n.sY)("list-privacy", (0, c.Z)(h().form)));
                        break;
                    case "submit:LIST_CREATE":
                        {
                            t.originalEvent.preventDefault();
                            const a = new FormData(t.target),
                                e = {
                                    courseId: t.detail.id,
                                    name: a.get("listName"),
                                    privacy: Number(a.get("privacy"))
                                },
                                l = h();l.addToList = l.addToList || {},
                            l.addToList.status = "processing",
                            y(l),
                            (0, n.sY)("modal-add-to-list", (0, s.Z)((0, n.y0)())),
                            (0, g.Z)("LISTS/CREATE", {
                                data: e
                            });
                            break
                        }
                    case "request:LIST/ADD_SUCCESS":
                    case "request:LIST/REMOVE_SUCCESS":
                    case "request:LIST/ADD_ERROR":
                    case "request:LIST/REMOVE_ERROR":
                        {
                            const e = h().savingItems,
                                {
                                    listId: i,
                                    type: c,
                                    id: o
                                } = t.detail.originalParameters;
                            if (d()(e, (t => t === i)), t.detail.json.success) y({
                                saving: !1,
                                savingItems: e,
                                notification: {
                                    message: t.name.match(/SUCCESS/) ? "Saved" : "An error occurred. Please try again."
                                }
                            });
                            else {
                                var a;
                                const n = h().available.slice(),
                                    s = m()(n, (t => parseInt(t.id, 10) === parseInt(i, 10)));
                                d()(n[s]["".concat(c, "s")], (t => t === o)), y({
                                    saving: !1,
                                    savingItems: e,
                                    available: n
                                }), (0, l.W)("notification", "SHOW", {
                                    title: null !== (a = t.detail.json) && void 0 !== a && a.message.match(/cannot add more than/) ? "Limit reached" : "An error occurred",
                                    type: "error",
                                    body: t.detail.json.message ? t.detail.json.message : "An error occurred. Please try again.",
                                    delay: 1e5
                                })
                            }(0, n.sY)("modal-add-to-list", (0, s.Z)((0, n.y0)())),
                            (0, v.default)();
                            break
                        }
                    case "request:LISTS/CREATE_ERROR":
                        {
                            const a = h();
                            if (!a.addToList || !a.addToList.id) return;a.addToList.status = null,
                            y(a),
                            (0, n.sY)("modal-add-to-list", (0, s.Z)((0, n.y0)())),
                            o.Z.error("[data-name=LIST_CREATE]", t.detail.json.message);
                            break
                        }
                    case "request:LISTS/CREATE_SUCCESS":
                        {
                            const a = h();
                            if (!a.addToList || !a.addToList.id) return;a.available.unshift({
                                courses: [],
                                lists: [],
                                ...t.detail.json.list,
                                ["".concat(a.addToList.type, "s")]: [parseInt(a.addToList.id, 10)]
                            }),
                            a.addToList = { ...a.addToList,
                                creating: !1,
                                status: null,
                                newList: parseInt(t.detail.json.list.id, 10)
                            },
                            a.form = {
                                titleValue: null,
                                privacyValue: 0
                            },
                            y(a),
                            (0, n.sY)("modal-add-to-list", (0, s.Z)((0, n.y0)()));
                            break
                        }
                    case "click:MODAL_CLOSE":
                        {
                            const t = h();t.savingItems = [],
                            y(t);
                            break
                        }
                    case "click:LIST_TOGGLE":
                        if (h().savingItems.indexOf(t.detail.listId) >= 0) return t.originalEvent.preventDefault();
                        (0, b.default)(t);
                        break;
                    case "click:LIST_SHOW_CREATE":
                        {
                            var e;
                            const t = h();t.addToList.creating = !0,
                            y(t),
                            (0, n.sY)("modal-add-to-list", (0, s.Z)((0, n.y0)())),
                            null === (e = document.querySelector("[data-name=LIST_CREATE]").querySelector("input[name=listName]")) || void 0 === e || e.focus();
                            break
                        }
                    case "click:LIST_CREATE_CANCEL":
                        {
                            const t = h();t.addToList.creating = !1,
                            t.form = {
                                titleValue: null,
                                privacyValue: 0
                            },
                            y(t),
                            (0, n.sY)("modal-add-to-list", (0, s.Z)((0, n.y0)()));
                            break
                        }
                }
            }
        },
        1054: function(t, a, e) {
            "use strict";
            e.r(a);
            var n = e(9894),
                l = e(3443);
            (0, n.IW)({
                modal: {}
            }), a.default = t => {
                if ("click:MODAL_CLOSE" === t.name) {
                    var a;
                    if ((0, l.IY)({
                            event: t.originalEvent,
                            cushion: 0,
                            container: ".cmpt-modal-container"
                        }) && (null === (a = t.detail) || void 0 === a || !a.close)) return;
                    (0, n.sY)("modal")
                }
            }
        },
        2993: function(t, a, e) {
            "use strict";
            e.r(a);
            var n = e(5982),
                l = e(8785),
                s = e(1029),
                i = e(9894),
                c = e(3443);
            a.default = t => {
                switch (t.name) {
                    case "click:TAB_TRIGGER":
                        "trailer" !== t.detail.tab && (0, c.px)("[data-template=trailer]").then((() => {
                            (0, i.sY)("trailer", null)
                        })), "trailer" === t.detail.tab && (0, n.W)("click", "TRAILER_PLAY", {
                            type: t.detail.trailerType,
                            url: t.detail.trailerUrl
                        });
                        break;
                    case "click:OVERLAY":
                        (0, i.sY)("modal", (0, s.Z)({
                            content: '\n            <div style="height: '.concat((0, c.hd)().matching.includes("mediumDown") ? "calc(100vh - 60px)" : "580px", ';">\n              <div class="row vert-align-middle horz-align-center absolute left right top bottom">\n                <div class="loader-bars"></div>\n              </div>\n            </div>\n          '),
                            style: {
                                width: 650,
                                height: "auto"
                            }
                        })), (0, l.Z)("COURSES/RETRIEVE", {
                            parameters: t.detail
                        });
                        break;
                    case "request:COURSES/RETRIEVE_SUCCESS":
                        (0, i.sY)("modal", (0, s.Z)({
                            content: '\n            <div style="height: '.concat((0, c.hd)().matching.includes("mediumDown") ? "calc(100vh - 60px)" : "580px", ';">\n              ').concat(t.detail.json.html, "\n            </div>\n            "),
                            style: {
                                width: 650,
                                height: "auto"
                            }
                        }), (() => {
                            window.requestAnimationFrame((() => {
                                (0, c.px)(".cmpt-modal.active [data-tab=trailer]").then((t => {
                                    null !== t.offsetParent && (0, c.px)("[data-name=TRAILER_PLAY]").then((t => {
                                        t.click()
                                    }))
                                }))
                            }))
                        }))
                }
            }
        },
        4581: function(t, a, e) {
            "use strict";
            e.r(a);
            var n = e(3499),
                l = e(9894),
                s = e(3443);
            const i = {
                    month: null,
                    year: null
                },
                c = (t, a) => {
                    t.querySelector('input[name="'.concat(a, '"]')).dispatchEvent(new window.Event("input"))
                };
            a.default = t => {
                switch (t.name) {
                    case "click:DOCUMENT":
                        {
                            if ((0, s.IY)({
                                    event: t.originalEvent,
                                    cushion: 0,
                                    container: ".cmpt-select-date-overlay"
                                })) return;
                            const a = document.querySelectorAll(".cmpt-select-date");a.length && [].slice.call(a).forEach((t => {
                                if (t.querySelector(".cmpt-select-date-overlay")) {
                                    const a = JSON.parse(t.dataset.detail);
                                    (0, l.sY)("date-select-".concat(a.name, "-").concat(a.id), (0, n.Z)({ ...a,
                                        ...i,
                                        isActive: !1
                                    }), (t => {
                                        c(t, a.name)
                                    }))
                                }
                            }));
                            break
                        }
                    case "mousedown:SELECT_DATE_OK":
                    case "click:SELECT_DATE":
                        "click:SELECT_DATE" === t.name && (i.month = t.detail.month, i.year = t.detail.year), (0, l.sY)("date-select-".concat(t.detail.name, "-").concat(t.detail.id), (0, n.Z)({ ...t.detail,
                            ...i,
                            isActive: !t.detail.isActive
                        }), (a => {
                            c(a, t.detail.name)
                        }));
                        break;
                    case "click:SELECT_MONTH":
                    case "click:SELECT_YEAR":
                    case "mousedown:CLEAR_MONTH":
                    case "mousedown:CLEAR_YEAR":
                        {
                            const a = t.target.closest(".cmpt-select-date").querySelector(".cmpt-select-date-year .overflow-y").scrollTop,
                                [e, s] = t.name.split(":")[1].toLowerCase().split("_");i[s] = "clear" === e ? "" : t.detail[s],
                            (0, l.sY)("date-select-".concat(t.detail.name, "-").concat(t.detail.id), (0, n.Z)({ ...t.detail,
                                ...i
                            }), (t => {
                                const e = t.querySelector(".cmpt-select-date-year .overflow-y");
                                e && (e.scrollTop = a)
                            }));
                            break
                        }
                    case "keyup:SELECT_DATE_INPUT_YEAR":
                        {
                            const a = parseInt(t.target.value, 10);i.year = a > 1850 ? a : null;
                            break
                        }
                    case "blur:SELECT_DATE_INPUT_YEAR":
                        (0, l.sY)("date-select-".concat(t.detail.name, "-").concat(t.detail.id), (0, n.Z)({ ...t.detail,
                            ...i
                        }));
                        break;
                    case "keyup:SELECT_DATE_INPUT_MONTH":
                        {
                            let a = null;
                            (0, s.df)(t.target.value) && (a = (0, s.df)(t.target.value).number),
                            parseInt(t.target.value, 10) >= 0 && (0, s.SV)(t.target.value) && (a = (0, s.SV)(t.target.value).number),
                            i.month = a;
                            break
                        }
                    case "blur:SELECT_DATE_INPUT_MONTH":
                        (0, l.sY)("date-select-".concat(t.detail.name, "-").concat(t.detail.id), (0, n.Z)({ ...t.detail,
                            ...i
                        }), (t => {
                            if (i.month) {
                                const a = t.querySelector("[data-name=SELECT_DATE_INPUT_YEAR]");
                                a && a.focus()
                            }
                        }))
                }
            }
        },
        2867: function(t, a, e) {
            "use strict";
            e.r(a), e.d(a, {
                default: function() {
                    return c
                }
            });
            var n = e(9894),
                l = () => {
                    const t = document.querySelectorAll("[ data-template=social]")[0].innerHTML;
                    return '\n    <div class="padding-vert-xlarge">\n      '.concat(t, "\n    </div>\n  ")
                },
                s = e(1029),
                i = e(6596),
                c = t => {
                    switch (t.name) {
                        case "click:SOCIAL_INIT":
                            {
                                const t = document.querySelector("link[rel=canonical]") ? document.querySelector("link[rel=canonical]").href : document.location.href;
                                if (navigator.share) return void navigator.share({
                                    title: document.title,
                                    url: t
                                }).then((() => {})).catch((() => {}));
                                (0, n.sY)("modal", (0, s.Z)({
                                    content: l(),
                                    style: {
                                        width: 300,
                                        height: 315
                                    }
                                }), null, !0);
                                break
                            }
                        case "click:COPY":
                            if (navigator.clipboard) try {
                                navigator.clipboard.writeText(t.detail.url), (0, n.sY)("social-copy-link", '\n              <span class="inline-block color-blue fadeout-right">'.concat(i.s.csr.social.link_copied(), "</span>\n            ")), setTimeout((() => {
                                    (0, n.sY)("social-copy-link", '\n              <span class="inline-block">'.concat(i.s.csr.social.copy_link(), "</span>\n            "))
                                }), 450)
                            } catch (t) {}
                    }
                }
        },
        5799: function(t, a, e) {
            "use strict";
            e.r(a);
            var n = e(9894),
                l = e(3443);
            a.default = () => {
                (0, l.px)("[data-name=LISTS_TABLE]").then((t => {
                    t.scrollTop = (0, n.y0)().lists.scrollTop
                }))
            }
        },
        5414: function(t, a, e) {
            "use strict";
            e.r(a);
            var n = e(7078),
                l = e.n(n),
                s = e(6259),
                i = e.n(s),
                c = e(9894),
                o = e(5167),
                r = e(8785),
                d = e(5799);
            a.default = t => {
                const a = parseInt(t.detail.id, 10),
                    e = t.detail.type,
                    n = t.detail.listId,
                    s = (0, c.y0)().lists.available.slice(),
                    u = (0, c.y0)().lists.savingItems,
                    m = i()(s, (t => parseInt(t.id, 10) === parseInt(n, 10)));
                t.detail.checked ? s[m]["".concat(e, "s")].push(a) : l()(s[m]["".concat(e, "s")], (t => t === a)), u.push(n), (0, c.IW)({
                    lists: { ...(0, c.y0)().lists,
                        available: s,
                        scrollTop: document.querySelector("[data-name=LISTS_TABLE]").scrollTop,
                        saving: !0,
                        savingItems: u,
                        notification: null
                    }
                }), (0, r.Z)(t.detail.checked ? "LIST/ADD" : "LIST/REMOVE", {
                    parameters: {
                        listId: n,
                        id: a,
                        type: e
                    }
                }), (0, c.sY)("modal-add-to-list", (0, o.Z)((0, c.y0)())), (0, d.default)()
            }
        },
        662: function(t, a, e) {
            "use strict";
            e.r(a);
            var n = e(1054),
                l = e(2993),
                s = e(9627),
                i = e(2867),
                c = e(6491),
                o = e(8708),
                r = e(4180),
                d = e(4581);
            a.default = t => {
                t.useHandler(n.default), t.useHandler(l.default), t.useHandler(s.default), t.useHandler(i.default), t.useHandler(c.default), t.useHandler(o.default), t.useHandler(r.default), t.useHandler(d.default)
            }
        },
        5372: function(t) {
            t.exports = function(t, a, e, n) {
                for (var l = t.length, s = e + (n ? 1 : -1); n ? s-- : ++s < l;)
                    if (a(t[s], s, t)) return s;
                return -1
            }
        },
        4146: function(t, a, e) {
            var n = e(830),
                l = e(2383),
                s = Array.prototype.splice;
            t.exports = function(t, a) {
                for (var e = t ? a.length : 0, i = e - 1; e--;) {
                    var c = a[e];
                    if (e == i || c !== o) {
                        var o = c;
                        l(c) ? s.call(t, c, 1) : n(t, c)
                    }
                }
                return t
            }
        },
        5733: function(t) {
            t.exports = function(t, a, e) {
                var n = -1,
                    l = t.length;
                a < 0 && (a = -a > l ? 0 : l + a), (e = e > l ? l : e) < 0 && (e += l), l = a > e ? 0 : e - a >>> 0, a >>>= 0;
                for (var s = Array(l); ++n < l;) s[n] = t[n + a];
                return s
            }
        },
        830: function(t, a, e) {
            var n = e(6747),
                l = e(1159),
                s = e(4373),
                i = e(7948);
            t.exports = function(t, a) {
                return a = n(a, t), null == (t = s(t, a)) || delete t[i(l(a))]
            }
        },
        4373: function(t, a, e) {
            var n = e(9867),
                l = e(5733);
            t.exports = function(t, a) {
                return a.length < 2 ? t : n(t, l(a, 0, -1))
            }
        },
        6259: function(t, a, e) {
            var n = e(5372),
                l = e(9278),
                s = e(7991),
                i = Math.max;
            t.exports = function(t, a, e) {
                var c = null == t ? 0 : t.length;
                if (!c) return -1;
                var o = null == e ? 0 : s(e);
                return o < 0 && (o = i(c + o, 0)), n(t, l(a, 3), o)
            }
        },
        1159: function(t) {
            t.exports = function(t) {
                var a = null == t ? 0 : t.length;
                return a ? t[a - 1] : void 0
            }
        },
        7078: function(t, a, e) {
            var n = e(9278),
                l = e(4146);
            t.exports = function(t, a) {
                var e = [];
                if (!t || !t.length) return e;
                var s = -1,
                    i = [],
                    c = t.length;
                for (a = n(a, 3); ++s < c;) {
                    var o = t[s];
                    a(o, s, t) && (e.push(o), i.push(s))
                }
                return l(t, i), e
            }
        },
        4919: function(t, a, e) {
            var n = e(1936),
                l = 1 / 0;
            t.exports = function(t) {
                return t ? (t = n(t)) === l || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
            }
        },
        7991: function(t, a, e) {
            var n = e(4919);
            t.exports = function(t) {
                var a = n(t),
                    e = a % 1;
                return a == a ? e ? a - e : a : 0
            }
        }
    }
]);