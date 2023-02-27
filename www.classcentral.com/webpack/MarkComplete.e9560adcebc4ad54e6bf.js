(self.webpackChunk = self.webpackChunk || []).push([
    [9992], {
        1029: function(t, e) {
            "use strict";
            e.Z = t => {
                let {
                    content: e,
                    style: n,
                    id: a = ""
                } = t;
                return '\n  <div class="cmpt-modal active">\n    <div data-name="MODAL_CLOSE" data-detail=\'{ "id": "'.concat(a, '" }\' class="cmpt-modal-blanket scrollable-y z-top border-box fixed top left height-100 padding-small large-up-padding-xlarge width-100">\n      <div class="cmpt-modal-container bg-white radius border-box width-centered width-100 relative" style="min-width: auto; max-width: ').concat(n.width, 'px;">\n        <button\n          data-name="MODAL_CLOSE" \n          data-detail=\'{ "close": true }\'\n          class="radius-circle scale-on-hover bg-gray-light z-force-top absolute top right margin-vert-xsmall margin-horz-xsmall"\n        >\n          <span class="margin-xsmall icon-center icon-x-charcoal icon-small">Close</span>\n        </button>\n        <div data-template="modal-content" style="min-height: ').concat(isNaN(n.height) ? n.height : "".concat(n.height, "px"), ';">\n          ').concat(e, "\n        </div>\n      </div>      \n    </div>\n  </div>\n")
            }
        },
        3499: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return r
                }
            });
            const a = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const l = (new Date).getFullYear();
            var i = n(3443);
            const s = t => {
                    const e = Number(t);
                    return e < 10 ? "0".concat(e) : e
                },
                o = t => parseInt(t.month, 10) >= 1 && t.year;
            var r = t => '\n  <div\n    class="cmpt-select-date relative margin-left-small"\n    data-detail=\''.concat(JSON.stringify({ ...t
            }), '\'\n  >\n    <label class="text-4 upper color-gray absolute left top">').concat(t.label, "</label>    \n      ").concat(o(t) ? (0, i.p6)("".concat(t.year, "/").concat(s(t.month))) : "", '\n    <button\n      tabindex="0"\n      type="button"\n      data-name="SELECT_DATE"\n      data-detail=\'').concat(JSON.stringify({ ...t
            }), '\'\n      style="margin-top: 18px;"\n      class="').concat(o(t) ? "margin-left-xxsmall" : "", " radius text-3 padding-horz-xsmall line-wide ").concat(t.isActive ? "bg-blue-mid" : "bg-gray-light", '"\n    >\n    ').concat(o(t) ? t.isActive ? '<i class="icon-xsmall icon-pencil-white icon-center"></i>' : '<span class="icon-center icon-pencil-charcoal icon-xsmall">Edit</span>' : '<span class="text-3 icon-left-small icon-'.concat(t.isActive ? "circle-plus-white color-white" : "circle-plus-charcoal", '">Add</span>'), "\n    </button>\n    ").concat(t.isActive ? '\n      <div    \n        class="cmpt-select-date-overlay absolute radius z-top bg-white shadow-light border-all border-gray-light border-box"\n        style="\n          width: 330px;\n          height: 270px;\n          top: 105%;\n          left: -25px;\n        "\n      >\n        <div class="row relative nowrap padding-small">\n          <div class="width-1-2 border-right border-gray-light border-box padding-right-small">\n            '.concat((t => ' \n<div class="cmpt-select-date-month"> \n  <fieldset class="width-100 relative margin-bottom-xsmall">\n    <label class="text-4 upper color-gray absolute margin-top-xsmall margin-left-small left top">Month</label>\n    <input\n      tabindex="1"\n      data-name="SELECT_DATE_INPUT_MONTH"\n      data-detail=\''.concat(JSON.stringify({ ...t
            }), '\'\n      style="height: 60px;" \n      class="input-small padding-top-small width-100 input-white"\n      value="').concat(a[parseInt(t.month, 10)] || "", '"\n      type="text"\n    />\n    <button\n      type="button"\n      style="bottom: 10px; right: 10px;"\n      class="absolute btn-circle bg-gray-light"\n      data-name="CLEAR_MONTH"\n      data-detail=\'').concat(JSON.stringify({ ...t
            }), '\'\n    >\n      <i class="icon-center icon-x-charcoal icon-xsmall padding-xxsmall"></i>\n    </button>\n  </fieldset>\n  <ul class="row wrap">\n    ').concat([...Array(12).keys()].map((e => '\n        <li class="width-1-3 border-box" style="padding: 2px !important;">\n          <button\n            type="button"\n            tabindex=\'2\'\n            class="btn-white btn-xsmall width-100 '.concat(parseInt(t.month, 10) === e + 1 ? "selected" : "", '"\n            data-name="SELECT_MONTH"\n            data-detail=\'').concat(JSON.stringify({ ...t,
                month: e + 1
            }), "'\n          >\n            ").concat(a[e + 1].substring(0, 3), "\n          </button>\n        </li>\n      "))).join(""), "\n  </ul>\n</div>\n"))(t), '\n          </div>\n          <div class="width-1-2 padding-left-small border-box" style="overflow: hidden;">\n            ').concat((t => '\n<div class="cmpt-select-date-year"> \n  <fieldset class="width-100 relative margin-bottom-xsmall">\n    <label class="text-4 upper color-gray absolute margin-top-xsmall margin-left-small left top">Year</label>\n    <input\n      tabindex="1"\n      style="height: 60px;" \n      class="input-small padding-top-small width-100 input-white"\n      data-name="SELECT_DATE_INPUT_YEAR"\n      data-detail=\''.concat(JSON.stringify({ ...t
            }), "'\n      value=\"").concat(t.year || "", '"\n      type="tel"\n    />\n    <button\n      type="button"\n      style="bottom: 10px; right: 10px;"\n      class="absolute btn-circle bg-gray-light"\n      data-name="CLEAR_YEAR"\n      data-detail=\'').concat(JSON.stringify({ ...t
            }), '\'\n    >\n      <i class="icon-center icon-x-charcoal icon-xsmall padding-xxsmall"></i>\n    </button>\n  </fieldset>\n  <div class="overflow-y" style="overflow-y: scroll; height: 116px;">\n    <ul class="row wrap padding-bottom-large">\n      ').concat([...Array(90).keys()].map((e => '\n          <li class="width-1-3 padding-xxsmall border-box" style="padding: 2px !important;">\n            <button\n              tabindex=\'2\'\n              type="button"\n              class="btn-white btn-xsmall width-100 '.concat(parseInt(t.year, 10) === l - e ? "selected" : "", '""\n              data-name="SELECT_YEAR"\n              data-detail=\'').concat(JSON.stringify({ ...t,
                year: l - e
            }), "'                \n            >\n              ").concat(l - e, "\n            </button>\n          </li>\n        "))).join(""), '\n    </ul>\n  </div>\n  <span\n    style="pointer-events: none; bottom: 10px; width: 164px; height: 33px; background: linear-gradient(0deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%); ;"\n    class="absolute right text-center"\n  >\n    <i class="margin-top-medium icon-center icon-xsmall icon-chevron-down-charcoal"></i>\n  </span>\n</div>\n'))(t), '\n          </div>        \n        </div>\n        <div class="row width-100 border-box border-top border-gray-light vert-align-top padding-horz-small padding-vert-xsmall">\n          <div class="horz-align-right">\n            <button\n              tabindex="0"\n              data-detail=\'').concat(JSON.stringify({ ...t
            }), '\'\n              type="button"\n              data-name="SELECT_DATE_OK"\n              class="btn-small btn-white">\n              Ok\n            </button>\n          </div>\n        </div>\n      </div>\n    ') : "", '\n    <input\n      type="hidden"\n      value="').concat(o(t) ? "".concat(t.year, "/").concat(s(t.month)) : "", '"\n      name="').concat(t.name, '"\n      data-detail=\'{"id": "').concat(t.id, '"}\'\n      data-name="INPUT_FIELD"\n    />\n  </div>\n')
        },
        4180: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return y
                }
            });
            var a = n(9894),
                l = n(5982),
                i = n(3443),
                s = n(6596),
                o = n(3499);
            const r = t => t ? {
                year: t.split("/")[0] || "",
                month: t.split("/")[1] || ""
            } : {
                year: null,
                month: null
            };
            var c = t => {
                    let {
                        type: e
                    } = t;
                    return '\n  <div class="margin-vert-large" style="min-height: 82px;">\n    <p class="text-left margin-bottom-small text-2 line-tight">Found this '.concat(e, ' helpful? Share it with other learners!</p>\n    <div class="cmpt-social relative" data-template="social-marklist">\n      <button class="btn-white btn-medium icon-left-medium icon-share-charcoal" data-name="SOCIAL_INIT" data-detail="{ "id": "marklist" }">\n        Share\n      </button>\n    </div>\n  </div>\n')
                },
                d = n(8858),
                p = n(681),
                m = t => {
                    var e, n;
                    return '\n  <section class="padding-medium">\n    <header class="padding-bottom-small padding-right-medium border-bottom relative">\n      <h2 class="head-3 margin-bottom-xxsmall">\n      '.concat(t.completed ? '<span class="icon-left-medium icon-progress-done head-3">' + s.s.csr.mark_complete.completed() + "</span>" : s.s.csr.mark_complete.mark_as_complete(), "\n      ").concat("success" === t.status ? '<span class="inline-block margin-left-xsmall weight-bold bg-green-xlight color-green text-3">' + s.s.csr.mark_complete.saved() + "</span>" : "", "\n      </h2>\n    </header>\n    ").concat(t.completed ? "" : (t => {
                        var e, n, a, l, i;
                        return '\n  <form\n    class="margin-vert-small"\n    data-name="PROGRESS_COMPLETE"\n    data-detail=\'{\n      "id": "'.concat(t.id, '",\n      "type": "').concat(t.type, '"\n    }\'\n    >\n    <div class="row margin-vert-small vert-align-middle">\n    ').concat(null !== (e = t.errors) && void 0 !== e && e.completedStartDate || null !== (n = t.errors) && void 0 !== n && n.completedEndDate ? '\n      <div\n          style="background-color: #fff2f2; border-color: #FFE5E5;"\n          class="text-3 margin-bottom-xsmall radius-small border-all color-red padding-xsmall"\n        >\n        Please enter a valid <span class="weight-bold">Date</span> including the year and month in the format <span class="weight-bold">YYYY/MM</span>.\n      </div>' : "", '\n      <fieldset class="relative width-100 border-box border-all border-gray bg-white" style="height: 60px; padding-top: 7px;">\n        <ul class="row nowrap list-no-style">\n          <li data-template="date-select-completedStartDate-').concat(t.id, '" style="min-width: 170px;">\n            ').concat((0, o.Z)({
                            label: "Start date",
                            isActive: !1,
                            id: t.id,
                            name: "completedStartDate",
                            ...r(t.completedStartDate)
                        }), '\n          </li>\n          <li data-template="date-select-completedEndDate-').concat(t.id, '" style="min-width: 170px;">\n            ').concat((0, o.Z)({
                            label: "End date",
                            isActive: !1,
                            id: t.id,
                            name: "completedEndDate",
                            ...r(t.completedEndDate)
                        }), '\n          </li>\n        </ul>\n      </fieldset>\n    </div>\n    <button\n      data-track-ga=\'{"category": "mark complete modal", "action": "mark complete", "label": "').concat(t.id, "\"}'\n      ").concat(null !== (a = t.status) && void 0 !== a && a.includes("processing") ? "disabled" : "", '\n      class="btn-blue width-1-2 btn-medium ').concat(null !== (l = t.status) && void 0 !== l && l.includes("processing") ? "relative processing" : "icon-left-small icon-checkmark-white", '"\n    >\n      ').concat(null !== (i = t.status) && void 0 !== i && i.includes("processing") ? '\n        <span\n          class="loader-bars loader-white loader-small absolute"\n          style="left: 50%; margin-left: -3px;"\n        ></span>\n        <span class="invisible">Mark as complete</span>' : "Mark as complete", "\n    </button>\n  </form>\n")
                    })(t), "\n    ").concat(t.completed && "list" === t.type ? c(t) : "", "\n    ").concat(t.completed && "course" === t.type && !t.reviewed ? (t => {
                        let {
                            id: e
                        } = t;
                        const n = (0, i.P5)("course", e);
                        return '\n    <div class="margin-vert-large" style="min-height: 82px;">\n      <p class="text-left margin-bottom-small text-2 line-tight">'.concat(s.s.csr.mark_complete.write_review_copy(), '</p>\n      <a\n        class="btn-blue btn-medium"\n        href="/review/new/').concat(n.id, '"\n        rel="nofollow"\n        data-track-ga=\'{"category": "mark complete modal", "action": "write a review", "label": "').concat(e, "\"}'\n      >\n        ").concat(s.s.csr.mark_complete.write_review_cta(), "\n      </a>\n    </div>\n  ")
                    })(t) : "", "\n    ").concat(t.completed && "course" === t.type && t.reviewed ? c(t) : "", '\n    <div class="row nowrap vert-align-middle border-top border-gray-light padding-top-small">\n      <div>\n        <img width="50" src="/images/lists/edu-list-icon.png" alt="" />\n      </div>\n      <div class="margin-left-small">\n        <h4 class="text-3 weight-bold">').concat(s.s.csr.mark_complete.where_title({
                        type: t.type
                    }), '</h4>\n        <p class="text-3">\n          ').concat((0, p.sprintf)((0, d.T)(s.s.csr.mark_complete.mark_as_complete_copy({
                        type: t.type
                    })), "<a data-track-ga='" + JSON.stringify({
                        category: "mark complete modal",
                        action: "education tab",
                        label: t.id
                    }) + "' href='" + ((null === (e = t.urls) || void 0 === e || null === (n = e.user) || void 0 === n ? void 0 : n.education) || "/") + "'>", "</a>"), "\n        </p>\n      </div>\n    </div>\n  </section>\n")
                },
                u = n(1029),
                g = n(8785);
            const b = () => (0, a.y0)().markComplete,
                h = t => (0, a.IW)({
                    markComplete: { ...b(),
                        ...t
                    }
                });
            h({
                markComplete: {}
            });
            const v = t => {
                var e;
                const n = b()[t];
                var l;
                if ((0, a.sY)("progress-".concat(t), (t => {
                        var e;
                        const n = t.completed ? "Completed" : "Mark complete";
                        return '\n    <button\n      data-detail=\'{\n        "id": "'.concat(t.id, '",\n        "type": "').concat(t.type, '",\n        "completed": ').concat(t.completed, ',\n        "reviewed": ').concat(t.reviewed || !1, '\n      }\'\n      data-name="PROGRESS_TRIGGER"\n      data-track-ga=\'{"category": "Mark Complete Click", "action": "').concat(t.id, '", "label": "').concat(t.type, '"}\'\n      class="btn-white btn-medium small-down-icon-center icon-left-small icon-progress-').concat(t.completed ? "done" : "mark", '"\n    >\n      ').concat(t.completed && null !== (e = t.status) && void 0 !== e && e.includes("processing") ? '\n        <span\n          class="loader-bars loader-gray loader-small absolute"\n          style="left: 50%; margin-left: -3px;"\n        ></span>\n        <span class="invisible">'.concat(n, "</span>") : "".concat(n), "\n    </button>\n  ")
                    })(n)), "success" === n.status) return (0, a.sY)("modal-content", m({
                    urls: null === (l = (0, a.y0)().data) || void 0 === l ? void 0 : l.urls,
                    ...n
                }));
                (0, a.sY)("modal", (0, u.Z)({
                    id: t,
                    content: m({
                        urls: null === (e = (0, a.y0)().data) || void 0 === e ? void 0 : e.urls,
                        ...n
                    }),
                    style: {
                        width: 400,
                        height: 345
                    }
                }), (() => {
                    window.requestAnimationFrame((() => {
                        "active" === n.status && (0, i.px)("[name=completedStartDate]").then((t => {
                            t.focus()
                        }))
                    }))
                }))
            };
            var y = t => {
                switch (t.name) {
                    case "request:PROGRESS/UPDATE_SUCCESS":
                        {
                            const {
                                id: e,
                                type: n
                            } = t.detail.originalParameters,
                            a = t.detail.originalData,
                            l = "".concat(n, "-").concat(e),
                            i = b();i[l].status = "success",
                            i[l].completed = a.metadata.user.completed,
                            h(i),
                            v(l);
                            break
                        }
                    case "submit:PROGRESS_COMPLETE":
                        {
                            var e, n, s, o;t.originalEvent.preventDefault();
                            const {
                                id: a,
                                type: l
                            } = t.detail,
                            r = "".concat(l, "-").concat(a),
                            c = b(),
                            d = !!t.name.match(/COMPLETE/),
                            p = (null === (e = t.target.elements) || void 0 === e || null === (n = e.completedStartDate) || void 0 === n ? void 0 : n.value) || null,
                            m = (null === (s = t.target.elements) || void 0 === s || null === (o = s.completedEndDate) || void 0 === o ? void 0 : o.value) || null,
                            u = {};
                            if (p && !(0, i.qS)(p) && (u.completedStartDate = !0), m && !(0, i.qS)(m) && (u.completedEndDate = !0), c[r] = { ...c[r],
                                    id: a,
                                    type: l,
                                    completedStartDate: p,
                                    completedEndDate: m,
                                    errors: u
                                }, Object.keys(u).length) return h(c), v(r);c[r].status = "".concat(c[r].status, ":processing"),
                            h(c),
                            v(r);
                            const y = {
                                metadata: {
                                    user: {
                                        completed: d,
                                        completedStartDate: d ? c[r].completedStartDate : null,
                                        completedEndDate: d ? c[r].completedEndDate : null
                                    }
                                }
                            };
                            (0, g.Z)("PROGRESS/UPDATE", {
                                parameters: {
                                    id: a,
                                    type: l
                                },
                                data: y
                            });
                            break
                        }
                    case "click:MODAL_CLOSE":
                        var r, c;
                        if (null === (r = t.detail) || void 0 === r || !r.id) return;
                        "active" === (null === (c = b()[t.detail.id]) || void 0 === c ? void 0 : c.status) && h({
                            [t.detail.id]: {
                                status: null
                            }
                        });
                        break;
                    case "click:PROGRESS_TRIGGER":
                        {
                            t.originalEvent.preventDefault();
                            const {
                                id: e,
                                type: n,
                                completed: i,
                                reviewed: s
                            } = t.detail,
                            o = "".concat(n, "-").concat(e),
                            r = b();
                            if (!(0, a.y0)().user.loggedIn) return void(0, l.W)("signup", "SIGNUP_INTENT", {
                                returnToPage: !0,
                                source: "mark complete"
                            });r[o] = { ...r[o],
                                id: e,
                                type: n,
                                reviewed: s,
                                completed: i,
                                completedStartDate: null,
                                completedEndDate: null
                            },
                            r[o].status = (r[o].status || "").match(/active|success/) ? null : "active",
                            h(r),
                            v(o);
                            break
                        }
                }
            }
        },
        681: function(t, e, n) {
            var a;
            ! function() {
                "use strict";
                var l = {
                    not_string: /[^s]/,
                    not_bool: /[^t]/,
                    not_type: /[^T]/,
                    not_primitive: /[^v]/,
                    number: /[diefg]/,
                    numeric_arg: /[bcdiefguxX]/,
                    json: /[j]/,
                    not_json: /[^j]/,
                    text: /^[^\x25]+/,
                    modulo: /^\x25{2}/,
                    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
                    key: /^([a-z_][a-z_\d]*)/i,
                    key_access: /^\.([a-z_][a-z_\d]*)/i,
                    index_access: /^\[(\d+)\]/,
                    sign: /^[+-]/
                };

                function i(t) {
                    return o(c(t), arguments)
                }

                function s(t, e) {
                    return i.apply(null, [t].concat(e || []))
                }

                function o(t, e) {
                    var n, a, s, o, r, c, d, p, m, u = 1,
                        g = t.length,
                        b = "";
                    for (a = 0; a < g; a++)
                        if ("string" == typeof t[a]) b += t[a];
                        else if ("object" == typeof t[a]) {
                        if ((o = t[a]).keys)
                            for (n = e[u], s = 0; s < o.keys.length; s++) {
                                if (null == n) throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"', o.keys[s], o.keys[s - 1]));
                                n = n[o.keys[s]]
                            } else n = o.param_no ? e[o.param_no] : e[u++];
                        if (l.not_type.test(o.type) && l.not_primitive.test(o.type) && n instanceof Function && (n = n()), l.numeric_arg.test(o.type) && "number" != typeof n && isNaN(n)) throw new TypeError(i("[sprintf] expecting number but found %T", n));
                        switch (l.number.test(o.type) && (p = n >= 0), o.type) {
                            case "b":
                                n = parseInt(n, 10).toString(2);
                                break;
                            case "c":
                                n = String.fromCharCode(parseInt(n, 10));
                                break;
                            case "d":
                            case "i":
                                n = parseInt(n, 10);
                                break;
                            case "j":
                                n = JSON.stringify(n, null, o.width ? parseInt(o.width) : 0);
                                break;
                            case "e":
                                n = o.precision ? parseFloat(n).toExponential(o.precision) : parseFloat(n).toExponential();
                                break;
                            case "f":
                                n = o.precision ? parseFloat(n).toFixed(o.precision) : parseFloat(n);
                                break;
                            case "g":
                                n = o.precision ? String(Number(n.toPrecision(o.precision))) : parseFloat(n);
                                break;
                            case "o":
                                n = (parseInt(n, 10) >>> 0).toString(8);
                                break;
                            case "s":
                                n = String(n), n = o.precision ? n.substring(0, o.precision) : n;
                                break;
                            case "t":
                                n = String(!!n), n = o.precision ? n.substring(0, o.precision) : n;
                                break;
                            case "T":
                                n = Object.prototype.toString.call(n).slice(8, -1).toLowerCase(), n = o.precision ? n.substring(0, o.precision) : n;
                                break;
                            case "u":
                                n = parseInt(n, 10) >>> 0;
                                break;
                            case "v":
                                n = n.valueOf(), n = o.precision ? n.substring(0, o.precision) : n;
                                break;
                            case "x":
                                n = (parseInt(n, 10) >>> 0).toString(16);
                                break;
                            case "X":
                                n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase()
                        }
                        l.json.test(o.type) ? b += n : (!l.number.test(o.type) || p && !o.sign ? m = "" : (m = p ? "+" : "-", n = n.toString().replace(l.sign, "")), c = o.pad_char ? "0" === o.pad_char ? "0" : o.pad_char.charAt(1) : " ", d = o.width - (m + n).length, r = o.width && d > 0 ? c.repeat(d) : "", b += o.align ? m + n + r : "0" === c ? m + r + n : r + m + n)
                    }
                    return b
                }
                var r = Object.create(null);

                function c(t) {
                    if (r[t]) return r[t];
                    for (var e, n = t, a = [], i = 0; n;) {
                        if (null !== (e = l.text.exec(n))) a.push(e[0]);
                        else if (null !== (e = l.modulo.exec(n))) a.push("%");
                        else {
                            if (null === (e = l.placeholder.exec(n))) throw new SyntaxError("[sprintf] unexpected placeholder");
                            if (e[2]) {
                                i |= 1;
                                var s = [],
                                    o = e[2],
                                    c = [];
                                if (null === (c = l.key.exec(o))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                for (s.push(c[1]);
                                    "" !== (o = o.substring(c[0].length));)
                                    if (null !== (c = l.key_access.exec(o))) s.push(c[1]);
                                    else {
                                        if (null === (c = l.index_access.exec(o))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                        s.push(c[1])
                                    }
                                e[2] = s
                            } else i |= 2;
                            if (3 === i) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                            a.push({
                                placeholder: e[0],
                                param_no: e[1],
                                keys: e[2],
                                sign: e[3],
                                pad_char: e[4],
                                align: e[5],
                                width: e[6],
                                precision: e[7],
                                type: e[8]
                            })
                        }
                        n = n.substring(e[0].length)
                    }
                    return r[t] = a
                }
                e.sprintf = i, e.vsprintf = s, "undefined" != typeof window && (window.sprintf = i, window.vsprintf = s, void 0 === (a = function() {
                    return {
                        sprintf: i,
                        vsprintf: s
                    }
                }.call(e, n, e, t)) || (t.exports = a))
            }()
        },
        8858: function(t, e, n) {
            "use strict";
            n.d(e, {
                T: function() {
                    return l
                }
            });
            const a = t => t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

            function l(t, ...e) {
                if ("string" == typeof t) return a(t);
                let n = t[0];
                for (const [l, i] of e.entries()) n = n + a(String(i)) + t[l + 1];
                return n
            }
        }
    }
]);