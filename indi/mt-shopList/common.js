(self.webpackChunkwaimai_c_openh5_static = self.webpackChunkwaimai_c_openh5_static || []).push([["common"], {
    33865: function(t, e, n) {
        "use strict";
        n.r(e),
            e.default = {
                mt: "mt_bJzuev",
                btnTxt: "btnTxt_JPUIXF",
                mt1: "mt1_P7Q17w",
                highlight: "highlight_OeFS9W",
                title: "title_MwKqW_",
                message: "message_kG5CDU",
                sub: "sub_rToX0e",
                dddAlert: "dddAlert_WDfDd5",
                main: "main_G5C35v",
                content: "content_L6MSp4",
                text: "text_WBnYcw",
                btnList: "btnList_VuETal",
                rowDirection: "rowDirection_XJC7Z0",
                btnItem: "btnItem_oSETFx",
                columnDirection: "columnDirection_xY0aDS",
                alertAppear: "alertAppear_vvDkIp",
                alertAppearActive: "alertAppearActive_TCwOPz",
                alertExitActive: "alertExitActive_s0Ke7M"
            }
    },
    76291: function(t, e, n) {
        "use strict";
        n.r(e),
            e.default = {
                dddOverlay: "dddOverlay_VFpfjB",
                main: "main_BVOgd8",
                overlayAppear: "overlayAppear_lTPo5P",
                fadeIn: "fadeIn_Jfomvx",
                overlayExit: "overlayExit_MRrNTj"
            }
    },
    8816: function(t, e, n) {
        "use strict";
        n.r(e),
            e.default = {
                root: "root_rrMqjU",
                unblock: "unblock_YOtyWV",
                panel: "panel_N1lASS",
                show: "show_RIQgQd",
                content: "content_vT6XKT"
            }
    },
    80948: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                trackModuleEvent: function() {
                    return U
                },
                trackPageView: function() {
                    return L
                },
                trackModuleView: function() {
                    return M
                },
                trackEvent: function() {
                    return R
                },
                trackOrder: function() {
                    return j
                },
                handleWmSign: function() {
                    return I
                },
                handleWmSign2: function() {
                    return N
                }
            });
        var r = n(59749)
            , i = n.n(r)
            , o = n(38077)
            , a = n.n(o)
            , c = n(35082)
            , u = n.n(c)
            , s = n(40739)
            , l = n.n(s)
            , f = n(81919)
            , d = n.n(f)
            , p = n(99474)
            , h = n.n(p)
            , m = n(69358)
            , g = n.n(m)
            , v = n(60228)
            , w = n.n(v)
            , y = n(47522)
            , _ = n.n(y)
            , b = n(38416)
            , O = n.n(b)
            , x = n(34338)
            , E = n.n(x)
            , T = n(4389)
            , P = n(42264);
        function k(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                    n.push.apply(n, r)
            }
            return n
        }
        function C(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? k(Object(n), !0).forEach(function(e) {
                    O()(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var S = {
            "/waimai/mindex/home": "c_s1k289ou",
            "/waimai/mindex/search": "c_waimai_bt5xysja",
            "/waimai/mindex/searchresults": "c_pxzol2hu",
            "/waimai/mindex/kingkong": "c_waimai_mg4p2wcf",
            "/waimai/mindex/menu": "c_noxm0tkc",
            "/waimai/mindex/preview": "c_tmkktllf",
            "/waimai/mindex/order-detail": "c_caune2j1",
            "/waimai/mindex/addaddress": "c_r3nm7ige",
            "/waimai/mindex/school/addaddress": "c_r3nm7ige",
            "/waimai/mindex/poipicker": "c_waimai_ir8291t3"
        };
        function A(t) {
            window.Logan && window.Logan.log(t, "tracker", "info", "ilx")
        }
        function I() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t.custom = C(C({}, t.custom), {}, {
                wm_sign: T.get("au_trace_key_net") || "",
                channel_id: T.get("wm_order_channel") || "default",
                open_environment: P.IS_TUAN_APP_UA || P.IS_WAIMAI_APP_UA || P.IS_DIANPING_APP_UA ? 1 : 0
            }),
                t
        }
        function N() {
            var t;
            return {
                wm_sign: T.get("au_trace_key_net")
            }
        }
        var M = function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            window.LXAnalytics && LXAnalytics("moduleView", e, n, r)
        }
            , R = function t(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            window.LXAnalytics && (LXAnalytics("set", "uid", T.get("userId")),
                LXAnalytics("moduleClick", e, {
                    custom: n
                }, r))
        }
            , D = function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            window.LXAnalytics && (LXAnalytics("set", "uid", T.get("userId")),
                LXAnalytics("moduleClick", e, n, r))
        }
            , j = function t(e, n, r) {
            window.LXAnalytics && (LXAnalytics("set", "uid", T.get("userId")),
                LXAnalytics("order", e, n, r))
        };
        function L(t, e) {
            window.LXAnalytics && (LXAnalytics("set", "uid", T.get("userId")),
                e = I(e),
                LXAnalytics("pageView", e, {}, t),
                A("\u9875\u9762\u66dd\u5149".concat(window.location.pathname)))
        }
        function U(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , n = arguments.length > 2 ? arguments[2] : void 0
                , r = t.bid
                , i = void 0 === r ? "" : r
                , o = t.type
                , a = void 0 === o ? "click" : o
                , c = t.area
                , u = void 0 === c ? "" : c;
            if (e.channel_id = T.get("wm_order_channel") || "",
            i.length > 0) {
                var s = n || S[window.location.pathname], l, f = function t() {};
                "click" === a ? f = R : "click2" === a ? f = D : "view" === a && (f = M),
                    f(i, e, {
                        cid: s
                    })
            }
            "click" === a && A("\u7528\u6237\u64cd\u4f5c:".concat(window.location.pathname, "-").concat(t.area))
        }
    },
    26585: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                default: function() {
                    return q
                }
            });
        var r = n(30050)
            , i = n.n(r)
            , o = n(10434)
            , a = n.n(o)
            , c = n(38416)
            , u = n.n(c)
            , s = n(56690)
            , l = n.n(s)
            , f = n(89728)
            , d = n.n(f)
            , p = n(94993)
            , h = n.n(p)
            , m = n(73808)
            , g = n.n(m)
            , v = n(61655)
            , w = n.n(v)
            , y = n(50886)
            , _ = n.n(y)
            , b = n(60228)
            , O = n.n(b)
            , x = n(67294)
            , E = n(45697)
            , T = n.n(E)
            , P = n(74004)
            , k = n(29697)
            , C = n(93967)
            , S = n.n(C)
            , A = n(58189)
            , I = n(66499)
            , N = n(33865);
        function M(t, e, n) {
            return e = g()(e),
                h()(t, R() ? Reflect.construct(e, n || [], g()(t).constructor) : e.apply(t, n))
        }
        function R() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (t) {}
            return (R = function e() {
                    return !!t
                }
            )()
        }
        var D = "alert"
            , j = I.default.newInstance()
            , L = 200
            , U = function(t) {
            function e(t) {
                var n;
                return l()(this, e),
                    (n = M(this, e, [t])).onClick = n.onClick.bind(n),
                    n
            }
            return w()(e, t),
                d()(e, [{
                    key: "onClick",
                    value: function t() {
                        var e = this.props, n = e.index, r;
                        (0,
                            e.callback)(n)
                    }
                }, {
                    key: "render",
                    value: function t() {
                        var e = this.props
                            , n = e.txt
                            , r = e.customClass
                            , i = e.highlight;
                        return x.createElement("div", {
                            key: n,
                            onClick: this.onClick,
                            className: S()(N.default.text, N.default.btnTxt, N.default.btnItem, u()({}, N.default.highlight, i), u()({}, r, !!r))
                        }, n)
                    }
                }])
        }(x.Component)
            , q = function(t) {
            function e(t) {
                var n;
                return l()(this, e),
                    (n = M(this, e, [t])).state = {
                        hide: !1
                    },
                    n.onBtnClick = n.onBtnClick.bind(n),
                    n.close = n.close.bind(n),
                    n.onOverlayClick = n.onOverlayClick.bind(n),
                    n
            }
            return w()(e, t),
                d()(e, [{
                    key: "onBtnClick",
                    value: function t(e) {
                        var n = this.props.callback;
                        this.close(function() {
                            n(e)
                        })
                    }
                }, {
                    key: "onOverlayClick",
                    value: function t() {
                        var e;
                        this.props.clickOverlayToDismiss && this.close()
                    }
                }, {
                    key: "close",
                    value: function t(e) {
                        this.setState({
                            hide: !0
                        }),
                            setTimeout(function() {
                                j.removeNode(D),
                                e && e()
                            }, L)
                    }
                }, {
                    key: "render",
                    value: function t() {
                        var e = this
                            , n = this.props
                            , r = n.title
                            , i = n.message
                            , o = n.btnList
                            , c = n.theme;
                        return x.createElement("div", {
                            className: S()(N.default.dddAlert, "ddd-alert")
                        }, x.createElement(A.default, {
                            hide: this.props.hide,
                            onClickCb: this.onOverlayClick
                        }), x.createElement(P.default, null, this.state.hide ? null : x.createElement(k.default, {
                            classNames: {
                                appear: N.default.alertAppear,
                                appearActive: N.default.alertAppearActive,
                                exit: N.default.alertExit,
                                exitActive: N.default.alertExitActive
                            },
                            key: "dddalert",
                            appear: !0,
                            exit: !0,
                            enter: !1,
                            timeout: L
                        }, x.createElement("div", {
                            className: S()(N.default.main, u()({}, N.default.mt, "mt" === c), u()({}, N.default.mt1, "mt1" === c))
                        }, x.createElement("div", {
                            className: S()(N.default.content, "content")
                        }, r ? x.createElement("div", {
                            className: S()(N.default.text, N.default.title, "title")
                        }, r) : x.createElement("div", null), x.createElement("div", {
                            className: S()(N.default.text, N.default.message, u()({}, N.default.sub, !!r), "message")
                        }, i)), x.createElement("div", {
                            className: S()(N.default.btnList, u()({}, N.default.rowDirection, o.length <= 2), u()({}, N.default.columnDirection, o.length > 2))
                        }, o.map(function(t, n) {
                            return x.createElement(U, a()({
                                key: t.txt
                            }, t, {
                                index: n,
                                callback: e.onBtnClick
                            }))
                        }))))))
                    }
                }], [{
                    key: "show",
                    value: function t(n) {
                        j.appendNode({
                            key: D,
                            duration: 0,
                            content: x.createElement(e, n)
                        })
                    }
                }])
        }(x.Component);
        q.propTypes = {
            title: T().string,
            message: T().string.isRequired,
            btnList: T().arrayOf(T().shape({
                txt: T().string.isRequired,
                highlight: T().bool,
                customClass: T().string
            })).isRequired,
            theme: T().oneOf(["mt", "mt1", "dp"]),
            clickOverlayToDismiss: T().bool,
            callback: T().func
        },
            q.defaultProps = {
                title: "",
                callback: function t() {},
                clickOverlayToDismiss: !1,
                theme: "mt"
            }
    },
    58189: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                default: function() {
                    return k
                }
            });
        var r = n(30050)
            , i = n.n(r)
            , o = n(56690)
            , a = n.n(o)
            , c = n(89728)
            , u = n.n(c)
            , s = n(94993)
            , l = n.n(s)
            , f = n(73808)
            , d = n.n(f)
            , p = n(61655)
            , h = n.n(p)
            , m = n(67294)
            , g = n(45697)
            , v = n.n(g)
            , w = n(74004)
            , y = n(29697)
            , _ = n(66499)
            , b = n(76291);
        function O(t, e, n) {
            return e = d()(e),
                l()(t, x() ? Reflect.construct(e, n || [], d()(t).constructor) : e.apply(t, n))
        }
        function x() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (t) {}
            return (x = function e() {
                    return !!t
                }
            )()
        }
        var E = "dpoverlay"
            , T = _.default.newInstance()
            , P = 200
            , k = function(t) {
            function e(t) {
                var n;
                return a()(this, e),
                    (n = O(this, e, [t])).onClick = n.onClick.bind(n),
                    n.close = n.close.bind(n),
                    n.state = {
                        hide: n.props.hide
                    },
                    n
            }
            return h()(e, t),
                u()(e, [{
                    key: "onClick",
                    value: function t(e) {
                        var n = this.props.onClickCb;
                        e.preventDefault(),
                        e.target === e.currentTarget && n(this)
                    }
                }, {
                    key: "close",
                    value: function t() {
                        this.setState({
                            hide: !0
                        }),
                            setTimeout(function() {
                                return T.removeNode(E)
                            }, P)
                    }
                }, {
                    key: "render",
                    value: function t() {
                        var e = this;
                        return m.createElement("div", {
                            className: b.default.dddOverlay,
                            onTouchMove: function t(e) {
                                e.preventDefault()
                            }
                        }, m.createElement(w.default, null, this.state.hide ? null : m.createElement(y.default, {
                            key: "overlay",
                            classNames: {
                                appear: b.default.overlayAppear,
                                exit: b.default.overlayExit
                            },
                            appear: !0,
                            exit: !0,
                            enter: !1,
                            in: !1,
                            timeout: P
                        }, m.createElement("div", {
                            className: b.default.main,
                            onClick: this.onClick,
                            onTouchMove: function t(n) {
                                return e.props.preventScroll && n.preventDefault()
                            }
                        }))))
                    }
                }], [{
                    key: "show",
                    value: function t(n) {
                        T.appendNode({
                            key: E,
                            duration: 0,
                            content: m.createElement(e, n)
                        })
                    }
                }, {
                    key: "getDerivedStateFromProps",
                    value: function t(e, n) {
                        return e.hide === n.hide ? null : {
                            hide: e.hide
                        }
                    }
                }])
        }(m.PureComponent);
        k.propTypes = {
            hide: v().bool,
            preventScroll: v().bool,
            onClickCb: v().func
        },
            k.defaultProps = {
                hide: !1,
                preventScroll: !0,
                onClickCb: function t() {}
            }
    },
    15030: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(30050)
            , i = n.n(r)
            , o = n(38416)
            , a = n.n(o)
            , c = n(56690)
            , u = n.n(c)
            , s = n(89728)
            , l = n.n(s)
            , f = n(94993)
            , d = n.n(f)
            , p = n(73808)
            , h = n.n(p)
            , m = n(61655)
            , g = n.n(m)
            , v = n(45697)
            , w = n.n(v)
            , y = n(67294)
            , _ = n(93967)
            , b = n.n(_);
        function O(t, e, n) {
            return e = h()(e),
                d()(t, x() ? Reflect.construct(e, n || [], h()(t).constructor) : e.apply(t, n))
        }
        function x() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (t) {}
            return (x = function e() {
                    return !!t
                }
            )()
        }
        var E = function(t) {
            function e(t) {
                var n;
                return u()(this, e),
                    (n = O(this, e, [t])).clearCloseTimer = function() {
                        n.closeTimer && (clearTimeout(n.closeTimer),
                            n.closeTimer = null)
                    }
                    ,
                    n.close = function() {
                        n.clearCloseTimer(),
                            n.props.onClose()
                    }
                    ,
                    n
            }
            return g()(e, t),
                l()(e, [{
                    key: "componentDidMount",
                    value: function t() {
                        var e = this;
                        this.props.duration && (this.closeTimer = setTimeout(function() {
                            e.close()
                        }, 1e3 * this.props.duration))
                    }
                }, {
                    key: "render",
                    value: function t() {
                        var e = this.props
                            , n = "g-base-".concat(e.componentType)
                            , r = a()(a()({}, "".concat(n), 1), e.className, !!e.className);
                        return y.createElement("div", {
                            className: b()(r),
                            style: e.style
                        }, y.createElement("div", {
                            className: "".concat(n, "-wrapper")
                        }, e.children), e.closable ? y.createElement("a", {
                            onClick: this.close,
                            className: "".concat(n, "-close")
                        }, y.createElement("span", {
                            className: "".concat(n, "-close-x")
                        })) : null)
                    }
                }])
        }(y.Component);
        E.propTypes = {
            componentType: w().string,
            duration: w().number,
            onClose: w().func,
            children: w().any
        },
            E.defaultProps = {
                componentType: "default",
                onEnd: function t() {},
                onClose: function t() {},
                duration: 0,
                style: {}
            },
            e.default = E
    },
    3217: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(30050)
            , i = n.n(r)
            , o = n(70215)
            , a = n.n(o)
            , c = n(38416)
            , u = n.n(c)
            , s = n(10434)
            , l = n.n(s)
            , f = n(56690)
            , d = n.n(f)
            , p = n(89728)
            , h = n.n(p)
            , m = n(94993)
            , g = n.n(m)
            , v = n(73808)
            , w = n.n(v)
            , y = n(61655)
            , _ = n.n(y)
            , b = n(34338)
            , O = n.n(b)
            , x = n(38077)
            , E = n.n(x)
            , T = n(50886)
            , P = n.n(T)
            , k = n(60228)
            , C = n.n(k)
            , S = n(45697)
            , A = n.n(S)
            , I = n(67294)
            , N = n(73935)
            , M = n(93967)
            , R = n.n(M)
            , D = n(15030)
            , j = ["getContainer"];
        function L(t, e, n) {
            return e = w()(e),
                g()(t, U() ? Reflect.construct(e, n || [], w()(t).constructor) : e.apply(t, n))
        }
        function U() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (t) {}
            return (U = function e() {
                    return !!t
                }
            )()
        }
        var q = 0
            , B = Date.now();
        function G() {
            return "gbase_".concat(B, "_").concat(q++)
        }
        var W = function(t) {
            function e() {
                var t;
                d()(this, e);
                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                    r[i] = arguments[i];
                return (t = L(this, e, [].concat(r))).state = {
                    contents: []
                },
                    t.add = function(e) {
                        var n = e.key = e.key || G();
                        t.setState(function(t) {
                            var r = t.contents
                                , i = !1
                                , o = r.map(function(t) {
                                return t.key === n ? (i = !0,
                                    e) : t
                            });
                            return i || (o = o.concat(e)),
                                {
                                    contents: o
                                }
                        })
                    }
                    ,
                    t.remove = function(e) {
                        t.setState(function(t) {
                            return {
                                contents: t.contents.filter(function(t) {
                                    return t.key !== e
                                })
                            }
                        })
                    }
                    ,
                    t
            }
            return _()(e, t),
                h()(e, [{
                    key: "render",
                    value: function t() {
                        var e = this
                            , n = this.props
                            , r = this.state.contents.map(function(t) {
                            var n = function n() {
                                e.remove.bind(e, t.key)(),
                                t.onClos instanceof Function && t.onClose()
                            };
                            return I.createElement(D.default, l()({}, t, {
                                onClose: n
                            }), t.content)
                        })
                            , i = u()({
                            "global-base-container": 1
                        }, n.className, !!n.className);
                        return I.createElement("div", {
                            className: R()(i),
                            style: n.style
                        }, r)
                    }
                }])
        }(I.Component);
        W.propTypes = {
            style: A().object,
            componentType: A().string
        },
            W.defaultProps = {
                componentType: "default",
                style: {}
            };
        var F = null;
        W.newInstance = function t(e) {
            var n = e || {}, r = n.getContainer, i = a()(n, j), o;
            r ? o = r() : F ? o = F : ((o = document.createElement("div")).dataset.tag = "ddd-global-container",
                document.body.appendChild(o),
                F = o);
            var c = N.render(I.createElement(W, i), o);
            return {
                appendNode: function t(e) {
                    c.add(e)
                },
                removeNode: function t(e) {
                    c.remove(e)
                },
                destory: function t() {
                    N.unmountComponentAtNode(o),
                        document.body.removeChild(o)
                }
            }
        }
            ,
            e.default = W
    },
    66499: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(3217);
        e.default = r.default
    },
    62356: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(30050)
            , i = n.n(r)
            , o = n(56690)
            , a = n.n(o)
            , c = n(89728)
            , u = n.n(c)
            , s = n(94993)
            , l = n.n(s)
            , f = n(73808)
            , d = n.n(f)
            , p = n(61655)
            , h = n.n(p)
            , m = n(67294)
            , g = n(73935)
            , v = n(93967)
            , w = n.n(v)
            , y = n(8816);
        function _(t, e, n) {
            return e = d()(e),
                l()(t, b() ? Reflect.construct(e, n || [], d()(t).constructor) : e.apply(t, n))
        }
        function b() {
            try {
                var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (t) {}
            return (b = function e() {
                    return !!t
                }
            )()
        }
        var O = function(t) {
            function e(t) {
                var n;
                return a()(this, e),
                    (n = _(this, e, [t])).close = function() {
                        var t = (0,
                            g.findDOMNode)(n).parentNode;
                        (0,
                            g.unmountComponentAtNode)(t),
                            t.parentNode.removeChild(t),
                            e.lastRef = null
                    }
                    ,
                    n.handleClick = n.handleClick.bind(n),
                    n
            }
            return h()(e, t),
                u()(e, [{
                    key: "handleClick",
                    value: function t() {
                        clearTimeout(e.timer),
                            this.close()
                    }
                }, {
                    key: "render",
                    value: function t() {
                        var e = this.props
                            , n = e.content
                            , r = void 0 === n ? "" : n
                            , i = e.block;
                        return m.createElement("div", {
                            id: "sqt-openh5-commonToast",
                            className: w()(y.default.root, i ? "" : y.default.unblock),
                            onClick: this.handleClick
                        }, m.createElement("div", {
                            className: y.default.panel
                        }, m.createElement("span", {
                            className: y.default.content
                        }, r)))
                    }
                }], [{
                    key: "show",
                    value: function t(n) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3
                            , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                            , o = document.createElement("div");
                        document.body.appendChild(o),
                            (0,
                                g.render)(m.createElement(e, {
                                ref: function t(n) {
                                    return e.ref = n
                                },
                                content: n,
                                block: i
                            }), o, function() {
                                var t, n;
                                clearTimeout(e.timer),
                                null == e || null === (t = e.lastRef) || void 0 === t || t.close(),
                                    e.lastRef = e.ref,
                                    e.timer = setTimeout(null == e || null === (n = e.ref) || void 0 === n ? void 0 : n.close, r)
                            })
                    }
                }])
        }(m.Component);
        O.timer = null,
            O.ref = null,
            O.lastRef = null,
            e.default = O
    },
    78132: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(17187)
            , i = n.n(r)
            , o = n(97174)
            , a = n.n(o)
            , c = n(62356)
            , u = new r.EventEmitter;
        u.EVENT_TYPE = {
            SHOW_TOAST: "SHOW_TOAST"
        },
            u.on(u.EVENT_TYPE.SHOW_TOAST, function(t) {
                t && t.msg && c.default.show(t.msg)
            }),
            e.default = function(t) {
                return a()(u, t)
            }
    },
    14054: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {
            LOGIN_NEEDED: 3,
            SHOW_REMINDS: 2
        }
            , i = {
            MT_LOGIN_NEEDED: 303,
            DP_LOGIN_NEEDED: 304
        }
            , o = {
            TYPE: {
                TOAST: 1,
                ALERT: 2
            },
            GOTO_SHOPLIST: 100,
            CLOSE: 1,
            CONTACT_SHOP: 2006,
            REFRESH_ORDER_STATUS: 12,
            NEED_HIGHLIGHT: 1
        };
        e.default = {
            CODE: r,
            SUBCODE: i,
            REMIND: o
        }
    },
    2072: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(59749)
            , i = n.n(r)
            , o = n(38077)
            , a = n.n(o)
            , c = n(35082)
            , u = n.n(c)
            , s = n(40739)
            , l = n.n(s)
            , f = n(81919)
            , d = n.n(f)
            , p = n(99474)
            , h = n.n(p)
            , m = n(69358)
            , g = n.n(m)
            , v = n(60228)
            , w = n.n(v)
            , y = n(47522)
            , _ = n.n(y)
            , b = n(38416)
            , O = n.n(b)
            , x = n(17187)
            , E = n.n(x)
            , T = n(96168)
            , P = n(78132);
        function k(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                    n.push.apply(n, r)
            }
            return n
        }
        function C(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? k(Object(n), !0).forEach(function(e) {
                    O()(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var S = new x.EventEmitter
            , A = function t(e) {
            return function(t, n, r) {
                return e && ((0,
                    P.default)(e.pagePathName)(t),
                e.handleReminds && (0,
                    T.default)(S)(t)),
                    C(C({}, t), {}, {
                        xhr: r
                    })
            }
        };
        S.process = A,
            e.default = S
    },
    96168: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(50886)
            , i = n.n(r)
            , o = n(60228)
            , a = n.n(o)
            , c = n(47522)
            , u = n.n(c)
            , s = n(62356)
            , l = n(26585)
            , f = n(14054)
            , d = function t(e) {
            return function(t) {
                return function(n) {
                    var r = t.btns[n];
                    r && e.emit(r.type, t)
                }
            }
        }
            , p = function t(e) {
            return function(t) {
                t && t.code === f.default.CODE.SHOW_REMINDS && t.reminds && t.reminds.length > 0 && t.reminds.forEach(function(t) {
                    switch (t.type) {
                        case f.default.REMIND.TYPE.TOAST:
                            t.content && s.default.show(t.content);
                            break;
                        case f.default.REMIND.TYPE.ALERT:
                            t.btns && l.default.show({
                                theme: "mt",
                                title: t.title,
                                message: t.content,
                                btnList: t.btns.map(function(t) {
                                    return {
                                        txt: t.message,
                                        highlight: t.isHighLight === f.default.REMIND.NEED_HIGHLIGHT
                                    }
                                }),
                                callback: d(e)(t)
                            })
                    }
                })
            }
        };
        e.default = p
    },
    9731: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                LocationWhiteUrl: function() {
                    return r
                },
                EncryptUrl: function() {
                    return i
                },
                CoreUrl: function() {
                    return o
                }
            });
        var r = ["openh5/homepage/dsp/resource", "openh5/poi/filterconditions", "openh5/channel/kingkongshoplist", "openh5/address/list", "openh5/homepage/kingkong", "openh5/homepage/poilist", "openapi/v1/poi/food", "openapi/v2/poi/similarpoilist", "openh5/v2/poi/menuproducts", "openh5/v2/poi/food", "/openh5/poi/info", "openh5/poi/comments", "openh5/order/v2/submit", "openh5/order/v2/preview", "openh5/v2/poi/expectedaArrivelTime", "openh5/v6/shoppingcart/wm/calculateprice", "openh5/v6/shoppingcart/sg/calculateprice", "openh5/order/status", "/openh5/order/manager/v3/status", "openh5/order/detail", "/openh5/order/manager/v3/detail", "openh5/order/list", "/openh5/order/manager/v3/anotherOrder", "/openh5/order/manager/v3/anotherOrder", "/openh5/order/manager/v3/bindPrivacyService", "/openh5/order/manager/v3/queryPrivacyServiceInfo", "/openh5/coupon/v3/couponlist", "/weapp/v2/user/address/getaddr"]
            , i = ["openh5/order/after/v3/cancel", "openh5/pay/genpay", "openh5/order/after/v3/refund"]
            , o = ["openh5/order/v2/submit", "openh5/order/v2/preview", "openapi/v1/poi/food"]
    },
    11340: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                default: function() {
                    return _t
                }
            });
        var r = n(38416)
            , i = n.n(r)
            , o = n(17156)
            , a = n.n(o)
            , c = n(64687)
            , u = n.n(c)
            , s = n(34338)
            , l = n.n(s)
            , f = n(76801)
            , d = n.n(f)
            , p = n(97195)
            , h = n.n(p)
            , m = n(78150)
            , g = n.n(m)
            , v = n(60429)
            , w = n.n(v)
            , y = n(69358)
            , _ = n.n(y)
            , b = n(60228)
            , O = n.n(b)
            , x = n(32320)
            , E = n.n(x)
            , T = n(73964)
            , P = n.n(T)
            , k = n(64043)
            , C = n.n(k)
            , S = n(59749)
            , A = n.n(S)
            , I = n(38077)
            , N = n.n(I)
            , M = n(35082)
            , R = n.n(M)
            , D = n(40739)
            , j = n.n(D)
            , L = n(81919)
            , U = n.n(L)
            , q = n(99474)
            , B = n.n(q)
            , G = n(2918)
            , W = n.n(G)
            , F = n(47522)
            , H = n.n(F)
            , Q = n(57267)
            , Y = n.n(Q)
            , K = n(93949)
            , V = n.n(K)
            , J = n(8575)
            , X = n(10286)
            , z = n(73049)
            , $ = n(29840)
            , Z = n(92479)
            , tt = n(645)
            , et = n(86911)
            , nt = n(97963)
            , rt = n(50630)
            , it = n(42264)
            , ot = n(30697)
            , at = n(8732)
            , ct = n(62356)
            , ut = n(36199)
            , st = n(69626)
            , lt = n(68050)
            , ft = n(9731)
            , dt = n(92807)
            , pt = n(39310);
        function ht(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                    n.push.apply(n, r)
            }
            return n
        }
        function mt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ht(Object(n), !0).forEach(function(e) {
                    i()(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var gt = ["openh5/v2/poi/food/multispu"]
            , vt = ["openh5/order/after/v3/cancel", "openh5/pay/genpay", "openh5/order/after/v3/refund", "openh5/homepage/wxbrandpoilist", "openh5/coupon/list", "openh5/user/queryFavorite", "openh5/order/v2/poicoupons/getvalidWithSales", "openh5/order/trade/v3/getvalid", "openh5/search/suggestv8", "openh5/search/hotlabel", "openh5/order/v2/poicoupons/refreshValid"]
            , wt = [200, 0, 401, 200401, 200411, 200410, -401, "SUCCESS", "0", "200"];
        function yt(t) {
            var e, n;
            return !!(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ft.LocationWhiteUrl).some(function(e) {
                return t.endsWith(e)
            })
        }
        function _t(t) {
            return bt.apply(this, arguments)
        }
        function bt() {
            return bt = a()(u().mark(function t(e) {
                var n, r, i, o, c, s, l, f, d;
                return u().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                if (e.data = e.data || {},
                                    n = {
                                        wm_latitude: (0,
                                            tt.default)(V().getPickedPOI().lat || V().getGeoPOI().lat),
                                        wm_longitude: (0,
                                            tt.default)(V().getPickedPOI().lng || V().getGeoPOI().lng),
                                        wm_actual_latitude: (0,
                                            tt.default)(V().getGeoPOI().lat),
                                        wm_actual_longitude: (0,
                                            tt.default)(V().getGeoPOI().lng)
                                    },
                                yt(e.url) && (e.data = mt(mt({}, e.data), n)),
                                    !yt(e.url, vt)) {
                                    t.next = 4;
                                    break
                                }
                                return t.prev = 1,
                                    t.next = 2,
                                    (0,
                                        dt.default)(n);
                            case 2:
                                r = t.sent,
                                    e.data = mt(mt({}, e.data), r),
                                    t.next = 4;
                                break;
                            case 3:
                                t.prev = 3,
                                    d = t.catch(1),
                                    e.data = mt(mt({}, e.data), d);
                            case 4:
                                if (e.data.wmUuidDeregistration = parseInt((0,
                                    Z.default)("uuidCanceled") || 0, 10),
                                    e.data.wmUserIdDeregistration = parseInt((0,
                                        Z.default)("userIdCanceled") || 0, 10),
                                    i = (0,
                                        Z.default)("iuuid") || (0,
                                        Z.default)("uuid") || (0,
                                        Z.default)("_lxsdk"),
                                    e.data.openh5_uuid = i,
                                    e.data.uuid = i,
                                e.appendMTSI && (e.data = e.data || {},
                                    e.data._token = (0,
                                        $.default)(e.url, e.data),
                                    delete e.appendMTSI),
                                    e.data = mt({
                                        optimus_code: 10,
                                        optimus_risk_level: 71
                                    }, e.data),
                                    o = {
                                        cache: !1,
                                        dataType: "json"
                                    },
                                (c = Object.assign({}, o, e)).isFirstFetch && delete c.isFirstFetch,
                                void 0 !== (0,
                                    Z.default)("m_set_info"))
                                    try {
                                        s = JSON.parse(decodeURIComponent((0,
                                            Z.default)("m_set_info"))),
                                            c.url = (0,
                                                nt.default)(c.url, {
                                                region_id: s.ri,
                                                region_version: s.rv,
                                                ui: s.ui
                                            })
                                    } catch (t) {
                                        console.log("set\u5316, m_set_info\u89e3\u91ca\u5931\u8d25")
                                    }
                                l = c.url || "/openh5/defaultapi";
                                try {
                                    (f = J.parse(c.url)).pathname && (l = f.pathname)
                                } catch (t) {
                                    console.log(t)
                                }
                                return window.top !== window ? (0,
                                    Z.default)("isIframe", "true", {
                                    path: "/",
                                    domain: ".meituan.com"
                                }) : (0,
                                    Z.default)("isIframe", "false", {
                                    path: "/",
                                    domain: ".meituan.com"
                                }),
                                    t.abrupt("return", z.default.ajax(c).then(rt.default).then(a()(u().mark(function t() {
                                        var n, r, i, o, a, s, f, d, p, h, m, g, v, w, y, _ = arguments, b;
                                        return u().wrap(function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                    case 0:
                                                        if ("string" == typeof (n = _.length > 0 && void 0 !== _[0] ? _[0] : {}))
                                                            try {
                                                                n = JSON.parse(n)
                                                            } catch (t) {
                                                                n = {
                                                                    code: -111
                                                                }
                                                            }
                                                        r = window.location.pathname,
                                                            i = "\u5f02\u6b65\u8bf7\u6c42\u51fa\u9519_".concat(l),
                                                            o = void 0 !== n.code ? parseInt(n.code, 10) : n.status || "default",
                                                            a = "".concat(o, "_").concat(l),
                                                            s = "",
                                                            f = "";
                                                        try {
                                                            n.xhr && n.xhr.getResponseHeader("M-TraceId") && (f = n.xhr.getResponseHeader("M-TraceId"))
                                                        } catch (t) {
                                                            console.log(t)
                                                        }
                                                        n.DTCode = " \u9519\u8bef\u7801: ".concat(o),
                                                            n.MTraceId = f,
                                                        wt.indexOf(o) < 0 && (yt(l, ft.CoreUrl) ? (0,
                                                            ut.reportError)(i, a, (0,
                                                            Z.default)("wm_order_channel") || "default", {
                                                            ajaxOptions: c,
                                                            res: n
                                                        }) : (0,
                                                            ut.reportWarn)(i, a, (0,
                                                            Z.default)("wm_order_channel") || "default", {
                                                            ajaxOptions: c,
                                                            res: n
                                                        })),
                                                            d = {
                                                                currAjaxPathname: l,
                                                                req: c,
                                                                res: n
                                                            },
                                                            X.default.reportAjax(wt.indexOf(o) < 0 ? "WARN" : "INFO", d),
                                                            b = o,
                                                            t.next = 200401 === b || 200410 === b || 200411 === b ? 1 : 200100 === b ? 2 : 0 === b || 200 === b ? 3 : 1 === b || 2 === b ? 4 : 401 === b ? 5 : 406 === b ? 12 : 410 === b ? 14 : 500 === b || 501 === b ? 16 : 502 === b || 503 === b ? 17 : 18;
                                                        break;
                                                    case 1:
                                                        return (0,
                                                            et.default)(),
                                                            t.abrupt("continue", 19);
                                                    case 2:
                                                        return window.location.href = "/spider",
                                                            t.abrupt("continue", 19);
                                                    case 3:
                                                        return t.abrupt("return", n);
                                                    case 4:
                                                        return e.doNotShowToastr || (p = n.msg || "\u5916\u5356\u541b\u5f00\u5c0f\u5dee\u4e86\uff0c\u518d\u8bd5\u8bd5\u5427\uff5e",
                                                        "/openh5/order/after/v3/refundpreview" === !r && (p = "\u60a8\u7684\u8ba2\u5355\u5df2\u88ab\u5546\u5bb6\u786e\u8ba4\uff0c\u5982\u9700\u8981\u9000\u6b3e\u6216\u53d6\u6d88\u8bf7\u7535\u8bdd\u8054\u7cfb\u3002"),
                                                            ct.default.show("".concat(p, " ").concat(s))),
                                                            t.abrupt("return", z.default.Deferred().reject(n));
                                                    case 5:
                                                        if (-1 == r.indexOf("mindex/home")) {
                                                            t.next = 6;
                                                            break
                                                        }
                                                        return t.abrupt("return", n);
                                                    case 6:
                                                        if (-1 == r.indexOf("mindex/poipicker")) {
                                                            t.next = 7;
                                                            break
                                                        }
                                                        return t.abrupt("return", n);
                                                    case 7:
                                                        if (-1 == r.indexOf("mindex/mine") && -1 == r.indexOf("mindex/olist")) {
                                                            t.next = 8;
                                                            break
                                                        }
                                                        h = encodeURIComponent(window.location.href),
                                                            it.IS_QUICKAPP ? (m = "force=true&back_url=".concat(h || encodeURIComponent(window.location.href)),
                                                            window.location && window.location.href && -1 != window.location.href.indexOf("mindex/preview") && (m = "fromPreview=true&".concat(m)),
                                                                window.location.replace("/login?".concat(m))) : (ot.isBaiduSmartApp || history.replaceState("\u7f8e\u56e2\u5916\u5356", "\u7f8e\u56e2\u5916\u5356", "/waimai/mindex/home"),
                                                                (0,
                                                                    et.default)(h)),
                                                            t.next = 11;
                                                        break;
                                                    case 8:
                                                        if (g = encodeURIComponent(window.location.href),
                                                        -1 == window.location.href.indexOf("mindex/preview") || !localStorage.getItem("login_back_home")) {
                                                            t.next = 10;
                                                            break
                                                        }
                                                        if (st.default.set("login_back_home", ""),
                                                            !it.IS_QUICKAPP) {
                                                            t.next = 9;
                                                            break
                                                        }
                                                        return (0,
                                                            at.sendCloseWeb)(),
                                                            t.abrupt("return");
                                                    case 9:
                                                        history.replaceState("\u7f8e\u56e2\u5916\u5356", "\u7f8e\u56e2\u5916\u5356", "/waimai/mindex/home"),
                                                            window.location.href = "/waimai/mindex/home",
                                                            t.next = 11;
                                                        break;
                                                    case 10:
                                                        (0,
                                                            et.default)(g);
                                                    case 11:
                                                        return t.abrupt("return", n);
                                                    case 12:
                                                        return v = "pro",
                                                            pt.default.isSt() ? v = "staging" : pt.default.isTest() && (v = "test"),
                                                            w = {
                                                                pro: "https://verify.meituan.com",
                                                                staging: "https://verify.inf.st.meituan.com",
                                                                dev: "https://verify.inf.dev.meituan.com",
                                                                test: "https://verify.inf.test.meituan.com"
                                                            },
                                                            y = ["requestCode=".concat(n.customData.requestCode), "env=".concat(v), "succCallbackKNBFun=", "succCallbackUrl=".concat(encodeURIComponent(window.location.href)), "failCallbackUrl=".concat(encodeURIComponent(window.location.href))],
                                                            window.location.href = "".concat(w[v], "/v2/app/general_page?").concat(y.join("&")),
                                                            t.next = 13,
                                                            new Promise(function(t) {
                                                                    setTimeout(function() {
                                                                        t(!0)
                                                                    }, 2e3)
                                                                }
                                                            );
                                                    case 13:
                                                        return t.abrupt("return", {
                                                            res: {
                                                                code: 0
                                                            }
                                                        });
                                                    case 14:
                                                        if (-1 === r.indexOf("waimai/mindex/menu")) {
                                                            t.next = 15;
                                                            break
                                                        }
                                                        (0,
                                                            et.default)(),
                                                            t.next = 16;
                                                        break;
                                                    case 15:
                                                        return t.abrupt("return", n);
                                                    case 16:
                                                        return e.doNotShowToastr || ct.default.show((n.msg || "\u5916\u5356\u541b\u5f00\u5c0f\u5dee\u4e86\uff0c\u518d\u8bd5\u8bd5\u5427\uff5e") + s),
                                                            t.abrupt("return", z.default.Deferred().reject(n));
                                                    case 17:
                                                    case 18:
                                                        return t.abrupt("return", n);
                                                    case 19:
                                                        window.Logan && window.Logan.log(JSON.stringify({
                                                            request: c,
                                                            response: n
                                                        }), "default", "info", "iajax");
                                                    case 20:
                                                    case "end":
                                                        return t.stop()
                                                }
                                        }, t)
                                    })), function(t) {
                                        var n = ""
                                            , r = !1
                                            , i = "";
                                        try {
                                            n = t.getAllResponseHeaders() || t.xhr && t.xhr.getAllResponseHeaders(),
                                                r = /x-forbid-reason/i.test(n),
                                                i = t.status || t.xhr && t.xhr.status
                                        } catch (t) {
                                            n = "get-header-error"
                                        }
                                        (0,
                                            ut.reportWarn)("\u7f51\u7edc\u51fa\u9519", l, (0,
                                            Z.default)("wm_order_channel") || "default", {
                                            option: e,
                                            allHeaders: n,
                                            xhrStatus: i,
                                            error: JSON.stringify(t)
                                        });
                                        var o = {
                                            currAjaxPathname: l,
                                            req: c,
                                            res: t
                                        };
                                        X.default.reportAjax("WARN", o),
                                        e.doNotShowToastr || c && c.url && -1 !== c.url.indexOf("dspadlogger") || c && c.url && -1 !== c.url.indexOf("regeo/text") || gt.includes(c.url.replace(/(http|https):\/\/\S+?\//g, "")) || ct.default.show("\u5de5\u7a0b\u72ee\u5f00\u5c0f\u5dee\u4e86\uff0c\u518d\u8bd5\u8bd5\u5427\uff5e ".concat((null == t ? void 0 : t.status) || ""))
                                    }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                }, t, null, [[1, 3]])
            })),
                bt.apply(this, arguments)
        }
    },
    31682: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(30697)
            , i = n(94280)
            , o = n(36199);
        e.default = function(t) {
            if (t)
                if (r.isBaiduSmartApp && window.swan)
                    window.swan.makePhoneCall({
                        phoneNumber: t
                    });
                else if ((0,
                    i.isKuaiShouMinprogram)())
                    try {
                        window.MTUNIAPI.makePhoneCall({
                            phoneNumber: t
                        })
                    } catch (t) {
                        (0,
                            o.reportWarn)("\u5feb\u624b\u5c0f\u7a0b\u5e8f\u73af\u5883\u7535\u8bdd\u62e8\u6253\u5931\u8d25", "\u5feb\u624b\u5c0f\u7a0b\u5e8f\u73af\u5883\u7535\u8bdd\u62e8\u6253\u5931\u8d25", t)
                    }
                else {
                    var e = document.createElement("a");
                    e.setAttribute("href", "tel:".concat(t)),
                        document.body.appendChild(e),
                        setTimeout(function() {
                            e.click()
                        }, 300)
                }
        }
    },
    26648: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                default: function() {
                    return b
                },
                ChannelHornConfigName: function() {
                    return O
                }
            });
        var r = n(17156)
            , i = n.n(r)
            , o = n(56690)
            , a = n.n(o)
            , c = n(89728)
            , u = n.n(c)
            , s = n(64687)
            , l = n.n(s)
            , f = n(78150)
            , d = n.n(f)
            , p = n(69358)
            , h = n.n(p)
            , m = n(4389)
            , g = n(10566)
            , v = n.n(g)
            , w = "CHANNEL_CONFIG_CACHE"
            , y = "openh5_channel_config"
            , _ = {
            login_module_v2: {
                login_module: {
                    knblogin: {
                        channel: ["mtjjb", "mtjxb"]
                    },
                    ilogin: {
                        channel: ["testch", "stll-bjyd"]
                    },
                    unicomAuthLogin: {
                        page: {
                            production: "https://img.client.10010.com/stprototype/dingwei/index.html",
                            test: "http://ecstest2018.10010.com/meituanwaimai/index.html",
                            stage: "https://img.client.10010.com/web_prepub/stprototype/dingwei/index.html"
                        },
                        channel: ["yzlt"]
                    },
                    h5login: {
                        channel: []
                    }
                }
            },
            login_module: ["testch", "stll-bjyd"]
        }
            , b = function() {
            function t() {
                a()(this, t)
            }
            return u()(t, null, [{
                key: "_get",
                value: function t() {
                    try {
                        var e = JSON.parse(sessionStorage.getItem(w));
                        if (!e)
                            throw new Error("cache not find");
                        return e
                    } catch (t) {
                        return _
                    }
                }
            }, {
                key: "fetch",
                value: function() {
                    var t = i()(l().mark(function t() {
                        var e, n;
                        return l().wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                            t.next = 1,
                                            v().fetch(y, {}, {});
                                    case 1:
                                        return e = t.sent,
                                            console.log("config", e),
                                            window.sessionStorage.setItem(w, JSON.stringify(e)),
                                            t.abrupt("return", e);
                                    case 2:
                                        return t.prev = 2,
                                            n = t.catch(0),
                                            t.abrupt("return", _);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                        }, t, null, [[0, 2]])
                    }));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "get",
                value: function e(n) {
                    var r = t._get();
                    return n ? r[n] || {} : r
                }
            }])
        }()
            , O = {
            Login: "login_module_v2"
        }
    },
    30697: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                isBaiduSmartApp: function() {
                    return h
                },
                isFromBaiduNative: function() {
                    return m
                },
                isIphone5s: function() {
                    return g
                },
                isIphone: function() {
                    return v
                },
                isAndroid: function() {
                    return w
                },
                IS_TINY_PKG: function() {
                    return y
                }
            });
        var r = n(76801)
            , i = n.n(r)
            , o = n(97195)
            , a = n.n(o)
            , c = n(64043)
            , u = n.n(c)
            , s = n(43843)
            , l = n.n(s)
            , f = n(22462)
            , d = n.n(f)
            , p = navigator.userAgent
            , h = /swan\//.test(p) || /^webswan-/.test(window.name)
            , m = window.location.href.indexOf("from=baidu_app_native") > 0
            , g = p.indexOf("iPhone") > -1 && screen && 568 == screen.height && 320 == screen.width
            , v = p.indexOf("iPhone") > -1
            , w = p.match(/android/i)
            , y = p.includes("MeituanTiny") || p.includes("MeituanTurbo")
    },
    89243: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                ScrollConfig: function() {
                    return v
                },
                retrieveEntranceGeoInfo: function() {
                    return w
                },
                default: function() {
                    return y
                }
            });
        var r = n(27424)
            , i = n.n(r)
            , o = n(97195)
            , a = n.n(o)
            , c = n(79288)
            , u = n.n(c)
            , s = n(64043)
            , l = n.n(s)
            , f = n(61514)
            , d = n.n(f)
            , p = n(17563)
            , h = n(2497)
            , m = n(13365)
            , g = {
            modules: ["m", "weixin", "wxwallet", "qq", "qqwallet", "qqnetbar", "newmnative", "wxqq"],
            settings: {
                wxqq: {
                    loadHeader: !1,
                    headerBackBtn: !1,
                    searchNeed: !0,
                    loadMy: !0,
                    loadToTop: !1,
                    channel: 29,
                    source: 60025,
                    keyword: 2,
                    acceptParams: !0,
                    ajaxPathName: "wxqq",
                    pagePathName: "wxqq",
                    defaultPage: "index",
                    hideViewOrderBtn: !1,
                    geoType: 1,
                    promotionev: "wx",
                    loadPay: !0,
                    accountType: m.default.ACCOUNT_TYPE.MT
                },
                wxwallet: {
                    loadHeader: !1,
                    headerBackBtn: !1,
                    searchNeed: !0,
                    loadMy: !0,
                    loadToTop: !1,
                    channel: 24,
                    source: 60007,
                    keyword: 2,
                    acceptParams: !0,
                    ajaxPathName: "wxwallet",
                    pagePathName: "wxwallet",
                    defaultPage: "index",
                    hideViewOrderBtn: !1,
                    geoType: 1,
                    promotionev: "wx",
                    loadPay: !0,
                    accountType: m.default.ACCOUNT_TYPE.MT,
                    isUseNewPromo: !0
                },
                m: {
                    loadHeader: !0,
                    headerBackBtn: !0,
                    searchNeed: !0,
                    loadMy: !0,
                    loadToTop: !0,
                    channel: 6,
                    source: 60009,
                    keyword: 1,
                    acceptParams: !1,
                    ajaxPathName: "newm",
                    pagePathName: "mindex",
                    defaultPage: "index",
                    hideViewOrderBtn: !1,
                    geoType: 1,
                    promotionev: "m",
                    loadPay: !0,
                    accountType: m.default.ACCOUNT_TYPE.DP
                },
                weixin: {
                    loadHeader: !1,
                    headerBackBtn: !1,
                    searchNeed: !0,
                    loadMy: !0,
                    loadToTop: !1,
                    channel: 8,
                    source: 60007,
                    keyword: 2,
                    acceptParams: !0,
                    ajaxPathName: "weixin",
                    pagePathName: "weixin",
                    defaultPage: "index",
                    hideViewOrderBtn: !1,
                    geoType: 1,
                    promotionev: "wx",
                    loadPay: !0,
                    accountType: m.default.ACCOUNT_TYPE.DP
                },
                qq: {
                    loadHeader: !1,
                    headerBackBtn: !1,
                    searchNeed: !0,
                    loadMy: !0,
                    loadToTop: !0,
                    channel: 13,
                    source: 60005,
                    keyword: 7,
                    acceptParams: !0,
                    ajaxPathName: "qq",
                    pagePathName: "qq",
                    defaultPage: "index",
                    hideViewOrderBtn: !0,
                    loadPay: !0,
                    geoType: 2,
                    promotionev: "qq",
                    initQQShare: !0,
                    accountType: m.default.ACCOUNT_TYPE.MT,
                    isUseNewPromo: !0
                },
                qqwallet: {
                    loadHeader: !1,
                    headerBackBtn: !1,
                    searchNeed: !0,
                    loadMy: !0,
                    loadToTop: !0,
                    channel: 19,
                    source: 60009,
                    keyword: 9,
                    acceptParams: !1,
                    ajaxPathName: "qqwallet",
                    pagePathName: "qqwallet",
                    defaultPage: "index",
                    hideViewOrderBtn: !1,
                    loadPay: !0,
                    geoType: 2,
                    promotionev: "qq",
                    initQQShare: !0,
                    accountType: m.default.ACCOUNT_TYPE.MT,
                    isUseNewPromo: !0,
                    entranceGeoInfo: ["ilat", "ilon", "gpstype", "0", "1"]
                },
                qqnetbar: {
                    loadHeader: !1,
                    headerBackBtn: !1,
                    searchNeed: !0,
                    loadMy: !0,
                    loadToTop: !0,
                    channel: 25,
                    keyword: 10,
                    acceptParams: !1,
                    ajaxPathName: "qqnetbar",
                    pagePathName: "qqnetbar",
                    defaultPage: "index",
                    loadPay: !0,
                    geoType: 2,
                    promotionev: "qq",
                    initQQShare: !0,
                    qqnetbar: !0,
                    accountType: m.default.ACCOUNT_TYPE.MT,
                    isUseNewPromo: !0
                },
                newmnative: {
                    loadHeader: !1,
                    headerBackBtn: !1,
                    searchNeed: !0,
                    loadMy: !0,
                    loadToTop: !0,
                    channel: 28,
                    keyword: 1,
                    acceptParams: !1,
                    ajaxPathName: "newmnative",
                    pagePathName: "newmnative",
                    defaultPage: "index",
                    loadPay: !0,
                    geoType: 1,
                    promotionev: "m"
                }
            }
        }
            , v = {
            scrollY: !0,
            probeType: 1,
            click: !0,
            bounce: !0,
            useTransition: !1
        };
        function w(t) {
            if (!t)
                return null;
            var e = i()(t, 4)
                , n = e[0]
                , r = e[1]
                , o = e[2]
                , a = e[3]
                , c = p.parse(window.location.search);
            if (c && c[n] && c[r]) {
                var u = c[n]
                    , s = c[r];
                if (c[o] === a) {
                    var l = (0,
                        h.wgs84ToGcj02)(s, u, m.default.COORD_TYPE.GPS);
                    u = l.lat,
                        s = l.lng
                }
                return [Number(u), Number(s)]
            }
            return null
        }
        function y(t) {
            return g.modules.indexOf(t) < 0 ? g.settings.m : g.settings[t]
        }
    },
    13365: function(t, e, n) {
        "use strict";
        n.r(e),
            e.default = {
                ADDRESS_HISTORY: "orderAddrHistory",
                CHANNEL: {
                    M_SITE: "m",
                    WEIXIN: "weixin",
                    WXWALLET: "wxwallet",
                    QQWALLET: "qqwallet",
                    QQ: "qq",
                    NEWMNATIVE: "newmnative"
                },
                COORD_TYPE: {
                    GPS: "wgs84",
                    MARS: "gcj02"
                },
                LOGIN_MAKER: "/thirdlogin/auth?aType=3&np=3&nac=1&bizType=1&rurl=",
                CACHED_CART_DATA: "cached_cart_data",
                CUSTOM_BILL: "cached_custom_bill",
                MENU_SEARCH_HISTORY: "menu_search_history",
                ORDER_CREATE: "orderCreate",
                DELIVERY_TYPE: {
                    MT_DELIVERY: 1,
                    NON_MT_DELIVERY: 0
                },
                ACCOUNT_TYPE: {
                    MT: "MT",
                    DP: "DP"
                },
                REDIRECTTFROM: {
                    LOGIN: 1,
                    PHONEVAL: 2
                },
                QQNETBAR_USERINFO: "QQNETBAR_USERINFO",
                CODE: {
                    SUCCESS: 0,
                    FAIL: 1,
                    REMIND: 2
                },
                SUBCODE: {
                    PHONE_BIND: 3,
                    NEED_LOGIN: 4,
                    SEND_CODE: 5,
                    WEI_LOGIN: 6,
                    NEED_MTLOGIN: 7,
                    ERROR_402: 402,
                    ERROR_403: 403,
                    ERROR_404: 404,
                    ERROR_405: 405
                },
                SUBTYPE: {
                    NEED_LOGIN: 3,
                    PHONE_BIND: 4
                },
                VALIDATEFROM: {
                    PREVIEW: 1,
                    SUBMIT: 2
                },
                ERROR_OBJS: {
                    TELS_ERROR: {
                        content: ["\u60a8\u7684\u8d26\u53f7\u5b58\u5728\u5b89\u5168\u9690\u60a3,", "\u8bf7\u62e8\u6253\u5ba2\u670d\u7535\u8bdd10107888\u54a8\u8be2\u89e3\u51b3"],
                        closeContent: "\u6682\u4e0d",
                        btn: {
                            content: "\u8054\u7cfb\u5ba2\u670d",
                            href: "tel:10107888"
                        }
                    },
                    UNLOCK_ERROR: {
                        content: ["\u60a8\u7684\u8d26\u53f7\u5b58\u5728\u5b89\u5168\u9690\u60a3,", '\u8bf7\u8bbf\u95ee<a href="http://i.meituan.com">i.meituan.com</a>\u8fdb\u884c\u89e3\u9501'],
                        closeContent: "\u77e5\u9053\u4e86"
                    }
                },
                REDPACKETTYPE: {
                    NEEDLOGIN: 4,
                    MTLOGIN: 7,
                    NOCON: 9,
                    FAILED: 3,
                    RECEIVED: 2
                },
                SEO: {
                    SOURCE: "seoentrance",
                    KEY: "seoparam"
                },
                PREVIEW_FOOD_LIST: "PREVIEW_FOOD_LIST",
                OPENID: "100289_-1413875520",
                USER_CENTER_DOMAIN_MAP: {
                    "h5.waimai.test.sankuai.com": "http://open.wpt.test.sankuai.com/",
                    "h5.waimai.st.meituan.com": "https://open.meituan.com/",
                    "h5.waimai.meituan.com": "https://open.meituan.com/"
                },
                PREVIEW_PAGE_MODAL: {
                    SELF_PICK_MODAL: "selfPickModal"
                },
                SELECT_COUPON_CALLBACK_DATA: "select_coupon_callback_data",
                SELECT_COUPON_SEND_DATA: "select_coupon_send_data",
                SELECT_COUPON_PAGE_MAP: {
                    "h5.waimai.test.sankuai.com": "http://h5.waimai.test.sankuai.com/machpro/coupon_select",
                    "h5.waimai.st.meituan.com": "https://h5.waimai.st.meituan.com/machpro/coupon_select",
                    "h5.waimai.meituan.com": "https://h5.waimai.meituan.com/machpro/coupon_select"
                },
                CART_ACTIVITY_CALLBACK_INFO: "activity_callback_Info",
                CART_ACCEPTED_SELECT_COUPON: "accepted_select_coupon",
                IS_FROM_COUPON_SELECT_PAGE: "is_from_coupon_select_page",
                RED_PACKET_PAGE_PARAM: "red_packet_page_param",
                IS_FROM_RED_PACKET_PAGE: "back_to_preview_from_red_pockets",
                RED_POCKET_PAGE_SESSION_PARAMS: "red_pocket_page_session_params",
                RED_PACKET_PAGE_MAP: {
                    "h5.waimai.test.sankuai.com": "".concat(window.location.protocol, "//h5.waimai.test.sankuai.com/machpro/red_packet"),
                    "h5.waimai.st.meituan.com": "https://h5.waimai.st.meituan.com/machpro/red_packet",
                    "h5.waimai.meituan.com": "https://h5.waimai.meituan.com/machpro/red_packet"
                }
            }
    },
    39310: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(97195)
            , i = n.n(r)
            , o = n(64043)
            , a = n.n(o)
            , c = n(57267)
            , u = n.n(c);
        e.default = {
            isDp: function t() {
                return !1
            },
            getDomain: function t() {
                return location.host
            },
            isProd: function t() {
                return /(h5|i)\.waimai\.meituan\.com/.test(location.host) || /mtshangou.com/.test(location.host)
            },
            isSt: function t() {
                return /waimai\.st\.(meituan|sankuai)\.com/.test(location.host)
            },
            isTestOut: function t() {
                return /waimai\.test\.meituan\.com/.test(location.host)
            },
            isTest: function t() {
                return /waimai\.test\.(meituan|sankuai)\.com/.test(location.host)
            },
            getDp: function t() {
                return this.isProd() ? "dianping" : "51ping"
            },
            getStaticDomain: function t() {
                return this.isProd() ? "i.meituan.com/awp" : "test.i.meituan.com/awp"
            },
            getActivityDomain: function t() {
                return this.isProd() ? "activity-sh.waimai.meituan.com" : location.host.replace(/m\.sh/, "activity-sh")
            },
            getDomainFromActivity: function t() {
                return this.isProd() ? "m.waimai.meituan.com" : location.host.replace(/activity-sh/, "m.sh")
            },
            getDomainForCookie: function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".sankuai.com"
                    , n = this.getDomain();
                return n.indexOf("mtshangou.com") > -1 ? ".mtshangou.com" : n.indexOf("meituan.com") > -1 ? ".meituan.com" : e
            },
            getEnv: function t() {
                var e = "prod";
                return this.isTest() ? e = "test" : this.isSt() && (e = "stage"),
                    e
            }
        }
    },
    40477: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                home: function() {
                    return O
                },
                login: function() {
                    return x
                },
                authLogin: function() {
                    return E
                },
                authorize: function() {
                    return T
                },
                spider: function() {
                    return P
                }
            });
        var r = n(34338)
            , i = n.n(r)
            , o = n(76801)
            , a = n.n(o)
            , c = n(97195)
            , u = n.n(c)
            , s = n(64043)
            , l = n.n(s)
            , f = n(57267)
            , d = n.n(f)
            , p = n(4389)
            , h = n(17563)
            , m = n(25980)
            , g = n(39310)
            , v = n(30697)
            , w = function t() {
            var e = m.default.getParams()
                , n = g.default.getDomainForCookie();
            e.auTraceKey ? p.set("au_trace_key_net", e.auTraceKey, {
                domain: n,
                httponly: !1,
                overwrite: !1
            }) : p.set("au_trace_key_net", "default", {
                domain: n,
                httponly: !1,
                overwrite: !1
            })
        }
            , y = function t() {
            var e = p.get("_lx_utm")
                , n = g.default.getDomainForCookie();
            e || p.set("_lx_utm", escape("utm_source=60066"), {
                domain: n,
                httponly: !1
            })
        }
            , _ = function t(e) {
            var n = window.location.href
                , r = m.default.getParams()
                , i = g.default.getDomainForCookie("meituan.com");
            if (-1 != n.indexOf("/waimai/mindex/searchresults") && -1 == n.indexOf("mode")) {
                var o = "/waimai/mindex/brandList";
                r.channel ? p.set("wm_order_channel", r.channel) : r.utm_source ? p.set("wm_order_channel", "wx_public_".concat(r.utm_source), {
                    domain: i
                }) : p.set("wm_order_channel", "wx_public", {
                    domain: i
                }),
                    window.location.href = "".concat(o, "?").concat((0,
                        h.stringify)(r))
            }
        }
            , b = function t() {
            var e = window.location.href;
            p.get("isSchool") && (-1 === e.indexOf("/waimai/mindex/home") && -1 === e.indexOf("/waimai/mindex/preview") && -1 === e.indexOf("/waimai/mindex/addaddress") || (window.location.href = e.replace(/mindex/, "mindex/school")))
        }
            , O = function t() {
            var e = p.get("wm_order_channel")
                , n = g.default.getDomainForCookie()
                , r = 30
                , i = m.default.getParams();
            if (v.isBaiduSmartApp && ["stll-bdjsb", "stll-aqy", "bdxcx"].includes(i.channel) && i.token) {
                var o = 180;
                p.set("token", i.token, {
                    domain: n,
                    httponly: !1,
                    expires: o
                }),
                    p.set("mt_c_token", i.mt_c_token || i.token, {
                        domain: n,
                        httponly: !1,
                        expires: o
                    })
            }
            w(),
                _(),
                y()
        }
            , x = function t() {
            w();
            var e = p.get("wm_order_channel")
                , n = g.default.getDomain()
                , r = 30
                , i = m.default.getParams();
            y()
        }
            , E = function t() {
            w(),
                y()
        }
            , T = function t() {
            y()
        }
            , P = function t() {
            w(),
                y()
        }
    },
    94280: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                isInMobileQQ: function() {
                    return O
                },
                isInWeixinWork: function() {
                    return x
                },
                isInWeixin: function() {
                    return E
                },
                isInMeituan: function() {
                    return T
                },
                isInMeituanWaimai: function() {
                    return P
                },
                isInWaimaiAlipayMini: function() {
                    return k
                },
                isKuaiShouMinprogram: function() {
                    return C
                },
                weixinMiniprogramConfig: function() {
                    return S
                },
                ALIPAY_MINI_PROGRAM_CONFIG: function() {
                    return A
                },
                alipayParams: function() {
                    return I
                },
                kuaishouPayParams: function() {
                    return M
                },
                getAlipayParams: function() {
                    return R
                },
                getOpenId: function() {
                    return D
                },
                isInWeixinMiniprogram: function() {
                    return j
                },
                isInGroupWxMini: function() {
                    return L
                },
                isInWaimaiWxMini: function() {
                    return U
                },
                isInAliPayMiniprogram: function() {
                    return q
                },
                isInHuiShengWxMini: function() {
                    return B
                }
            });
        var r = n(17156), i = n.n(r), o = n(64687), a = n.n(o), c = n(97195), u = n.n(c), s = n(60429), l = n.n(s), f = n(64043), d = n.n(f), p = n(22462), h = n.n(p), m = n(4389), g = n(25980), v = n(8732), w, y, _, b;
        function O() {
            return navigator.userAgent.match(/(.*?(iPad|iPhone|iPod).*?QQ\/([\d.]+).*?)|(.*?\bV1_AND_SQI?_([\d.]+)(.*?QQ\/([\d.]+))?.*?)/i)
        }
        function x() {
            return navigator.userAgent.match(/wxwork/i)
        }
        function E() {
            return !x() && navigator.userAgent.match(/micromessenger/i)
        }
        function T() {
            return navigator.userAgent.match(/meituangroup/i)
        }
        function P() {
            return navigator.userAgent.match(/meituanwaimai/i)
        }
        function k() {
            var t = m.get("wm_order_channel")
                , e = navigator.userAgent;
            return "stll-alimp" === t || e.indexOf("AliApp") > -1 && e.indexOf("MiniProgram") > -1
        }
        function C() {
            var t;
            if ("kuaishou-shenqiangshou" === m.get("wm_order_channel"))
                return !0;
            var e = navigator.userAgent.toLowerCase();
            return !(!/kswebview|kuaishou|kwapp/.test(e) || !/miniprogram/.test(e))
        }
        var S = {
            waimai: {
                appId: "wx2c348cf579062e56",
                payRootPath: "/packages",
                cb_path: "/pages/web-view/web-view?type=DIRECT&wxapp_force_login=1&wxapp_force_loc=1&webviewUrl="
            },
            group: {
                appId: "wxde8ac0a21135c07d",
                payRootPath: "",
                cb_path: "/waimai/pages/web-view/web-view?type=DIRECT&wxapp_force_login=1&wxapp_force_loc=1&webviewUrl="
            },
            huisheng: {
                appId: "wx0b42a347aafbe0d0",
                payRootPath: "/packages",
                cb_path: "/pages/web-view/web-view?webviewUrl="
            }
        }
            , A = {
            appId: "2021004146625103",
            root_path: "",
            cb_path: "/pages/web-view/web-view?type=DIRECT&webviewUrl="
        }
            , I = {
            openid: null !== (w = m.get("openId")) && void 0 !== w ? w : "",
            app_id: A.appId,
            avatar_url: null !== (y = m.get("userFace")) && void 0 !== y ? y : "",
            nickname: null !== (_ = m.get("userName")) && void 0 !== _ ? _ : "",
            orderPayChannel: 4
        }
            , N = "ks652177521456999275"
            , M = {
            openid: null !== (b = m.get("openId")) && void 0 !== b ? b : "",
            app_id: N,
            orderPayChannel: 5
        }
            , R = function() {
            var t = i()(a().mark(function t() {
                var e, n, r;
                return a().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                if (t.prev = 0,
                                !(e = I.openid) || "undefined" === e || "null" === e) {
                                    t.next = 1;
                                    break
                                }
                                return t.abrupt("return", I);
                            case 1:
                                return t.next = 2,
                                    (0,
                                        v.sendGetAlipayMsg)();
                            case 2:
                                return n = t.sent,
                                    t.abrupt("return", Object.assign({}, I, {
                                        openid: (null == n ? void 0 : n.openId) || ""
                                    }));
                            case 3:
                                return t.prev = 3,
                                    r = t.catch(0),
                                    t.abrupt("return", I);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                }, t, null, [[0, 3]])
            }));
            return function e() {
                return t.apply(this, arguments)
            }
        }()
            , D = function() {
            var t = i()(a().mark(function t() {
                var e, n, r, i;
                return a().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                if (t.prev = 0,
                                !(e = m.get("openId")) || "undefined" === e || "null" === e) {
                                    t.next = 1;
                                    break
                                }
                                return t.abrupt("return", e);
                            case 1:
                                if (!k()) {
                                    t.next = 3;
                                    break
                                }
                                return t.next = 2,
                                    (0,
                                        v.sendGetAlipayMsg)();
                            case 2:
                                return n = t.sent,
                                    t.abrupt("return", (null == n ? void 0 : n.openId) || "");
                            case 3:
                                return t.abrupt("return", "");
                            case 4:
                                return t.prev = 4,
                                    i = t.catch(0),
                                    t.abrupt("return", null !== (r = m.get("openId")) && void 0 !== r ? r : "");
                            case 5:
                            case "end":
                                return t.stop()
                        }
                }, t, null, [[0, 4]])
            }));
            return function e() {
                return t.apply(this, arguments)
            }
        }()
            , j = window.navigator.userAgent.toLocaleLowerCase().indexOf("miniprogram") > -1
            , L = window.navigator.userAgent.toLocaleLowerCase().indexOf(S.group.appId) > -1
            , U = window.navigator.userAgent.toLocaleLowerCase().indexOf(S.waimai.appId) > -1
            , q = window.navigator.userAgent.toLocaleLowerCase().indexOf("AlipayClient") > -1
            , B = window.navigator.userAgent.toLocaleLowerCase().indexOf(S.huisheng.appId) > -1
    },
    68050: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(54004), i, o = new (n.n(r)())({
            samplingRate: 1,
            teamIds: [20439, 20439, 9208]
        });
        e.default = o
    },
    75704: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                default: function() {
                    return v
                }
            });
        var r = n(76801)
            , i = n.n(r)
            , o = n(97195)
            , a = n.n(o)
            , c = n(64043)
            , u = n.n(c)
            , s = n(43843)
            , l = n.n(s)
            , f = n(57267)
            , d = n.n(f)
            , p = n(268)
            , h = n.n(p)
            , m = n(4389)
            , g = n(39310);
        function v() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                , e = window.location.host;
            if (/.*-sl-(h5|i.c)\.waimai\.test\.sankuai\.com/.test(e))
                return e.replace(/(.*-sl-)(h5|i.c)(.*)/, "$1i.c$3");
            if (e.includes("mtshangou.com"))
                return e;
            if (t.startsWith("/weapp/"))
                return g.default.isSt() ? "wx.waimai.st.meituan.com" : g.default.isTest() ? "wx.c.waimai.test.sankuai.com" : "wx.waimai.meituan.com";
            try {
                if (-1 !== e.indexOf("sqt") && /\/waimai\/mindex\/(poipicker|citypicker)/.test(window.location.pathname))
                    switch (e) {
                        case "sqt.meituan.com":
                        case "a1-sqt.meituan.com":
                        case "a2-sqt.meituan.com":
                        case "a3-sqt.meituan.com":
                        case "a4-sqt.meituan.com":
                        case "a5-sqt.meituan.com":
                        case "a6-sqt.meituan.com":
                        case "a7-sqt.meituan.com":
                        case "a8-sqt.meituan.com":
                        case "a9-sqt.meituan.com":
                        case "a10-sqt.meituan.com":
                            return "i.waimai.meituan.com";
                        case "sqt.st.meituan.com":
                        case "a1-sqt.st.meituan.com":
                            return "i.waimai.st.meituan.com";
                        case "sqt.waimai.test.sankuai.com":
                            var n = m.get("swim_line");
                            return n && "default" !== n ? (console.log("\u6d4b\u8bd5\u73af\u5883\u4f7f\u7528\u6cf3\u9053: ".concat(n)),
                                "".concat(n, "-sl-i.c.waimai.test.sankuai.com")) : "i.c.waimai.test.sankuai.com";
                        case "sqt.waimai.test.meituan.com":
                            return "i-c.waimai.test.meituan.com";
                        default:
                            return "i.c.waimai.test.sankuai.com"
                    }
            } catch (t) {
                console.error(t)
            }
            switch (e) {
                case "i.waimai.meituan.com":
                case "h5.waimai.meituan.com":
                    return "i.waimai.meituan.com";
                case "rh5.waimai.st.meituan.com":
                    return "release.i.waimai.meituan.com";
                case "i.waimai.st.meituan.com":
                case "h5.waimai.st.meituan.com":
                case "h5-waimai.st.meituan.com":
                    return "i.waimai.st.meituan.com";
                case "i.waimai.st.sankuai.com":
                case "h5.waimai.st.sankuai.com":
                    return "i.waimai.st.sankuai.com";
                case "i.c.waimai.test.sankuai.com":
                case "h5.waimai.test.sankuai.com":
                    var r = m.get("swim_line");
                    return r && "default" !== r ? (console.log("\u6d4b\u8bd5\u73af\u5883\u4f7f\u7528\u6cf3\u9053: ".concat(r)),
                        "".concat(r, "-sl-i.c.waimai.test.sankuai.com")) : "i.c.waimai.test.sankuai.com";
                case "h5-waimai.test.meituan.com":
                    return "i-c.waimai.test.meituan.com";
                case "h5.waimai.beta.sankuai.com":
                    return "i.c.waimai.beta.sankuai.com";
                case "h5.waimai.dev.sankuai.com":
                    return "i.c.waimai.test.sankuai.com";
                default:
                    return "i.c.waimai.test.meituan.com"
            }
        }
    },
    47689: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                default: function() {
                    return u
                }
            });
        var r = n(34338)
            , i = n.n(r)
            , o = n(97195)
            , a = n.n(o)
            , c = function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "authLogin", r, i, o = ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}) || {}).queryStr, a = void 0 === o ? "" : o, c = e || encodeURIComponent(window.location.href), u = "force=true&back_url=".concat(c);
            window.location && window.location.href && -1 != window.location.href.indexOf("mindex/preview") && (u = "fromPreview=true&".concat(u)),
            a && (u = "".concat(a, "&").concat(u)),
                window.location.href = "/".concat(n, "?").concat(u)
        };
        function u() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "authLogin"
                , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return function(n) {
                var r, i = (e || {}).queryStr, o = void 0 === i ? "" : i, a = n || encodeURIComponent(window.location.href), c = "force=true&back_url=".concat(a);
                window.location && window.location.href && -1 != window.location.href.indexOf("mindex/preview") && (c = "fromPreview=true&".concat(c)),
                o && (c = "".concat(o, "&").concat(c)),
                    window.location.href = "/".concat(t, "?").concat(c)
            }
        }
    },
    71066: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(34338)
            , i = n.n(r)
            , o = n(76801)
            , a = n.n(o)
            , c = n(97195)
            , u = n.n(c)
            , s = n(752)
            , l = n.n(s)
            , f = n(60228)
            , d = n.n(f)
            , p = n(64043)
            , h = n.n(p)
            , m = n(43843)
            , g = n.n(m)
            , v = n(21694)
            , w = n.n(v)
            , y = n(57267)
            , _ = n.n(y)
            , b = n(61514)
            , O = n.n(b)
            , x = n(47522)
            , E = n.n(x)
            , T = n(76265)
            , P = n.n(T)
            , k = n(78730)
            , C = n.n(k)
            , S = n(19979)
            , A = n.n(S)
            , I = n(79307)
            , N = n.n(I)
            , M = n(17563)
            , R = n(30697)
            , D = n(94280)
            , j = n(42264)
            , L = n(36199)
            , U = null;
        function q(t) {
            if ((0,
                L.reportMetric)("login_success", 1, {
                type: "H5"
            }),
                R.isBaiduSmartApp) {
                var e = "";
                switch (window.location.pathname) {
                    case "/waimai/mindex/menu":
                        var n = M.parse(window.location.search)
                            , r = n.mtShopId
                            , i = n.poi_id_str;
                        e = "/pages/login/index?where=".concat(window.location.pathname, "&mtShopId=").concat(r || -100, "&poi_id_str=").concat(i || "", "&source=shoplist");
                        break;
                    case "/waimai/mindex/mine":
                    case "/waimai/mindex/olist":
                        e = "/pages/login/index?where=".concat(window.location.pathname);
                        break;
                    default:
                        e = "/pages/login/index?where=/waimai/mindex"
                }
                swan.webView.redirectTo({
                    url: e
                })
            } else {
                if ((0,
                    D.isInWaimaiAlipayMini)()) {
                    if (U)
                        return clearTimeout(U),
                            void (U = setTimeout(function() {
                                U = null
                            }, 1e3));
                    clearTimeout(U),
                        U = setTimeout(function() {
                            U = null
                        }, 2e3);
                    var o = "/pages/web-view/web-view?forcelogin=1&webviewUrl=".concat(t);
                    return my.navigateTo({
                        url: o,
                        complete: function t() {
                            clearTimeout(U),
                                U = setTimeout(function() {
                                    U = null
                                }, 500)
                        }
                    }),
                        void (my.onMessage = function(e) {
                                if ("login" === e.type && "back" === e.status) {
                                    var n = new URL(decodeURIComponent(t)).pathname;
                                    if ("/waimai/mindex/mine" === n || "/waimai/mindex/olist" === n) {
                                        var r = new URL(window.location.href);
                                        r.pathname = "/waimai/mindex/home",
                                            window.location.replace(r)
                                    } else
                                        my.navigateBack()
                                }
                            }
                        )
                }
                if (j.GROUP_COMMMON_LOGIN) {
                    (0,
                        L.reportInfo)("\u767b\u5f55\u56e2\u9910\u903b\u8f91", "goH5Login");
                    var a = window.location.search ? M.parse(window.location.search) : {}
                        , c = j.TCQD_COMMON_FLAG
                        , u = ""
                        , s = {};
                    "/waimai/mindex" !== window.location.pathname && (s = (0,
                        j.GET_TCQD_COMMON_FLAG_OBJ)({
                        withoutKey: []
                    })),
                        c.forEach(function(t) {
                            var e = a[t] || s[t];
                            e && (u += "".concat(u ? "&" : "").concat(t, "=").concat(encodeURIComponent(e)))
                        }),
                        goAuthLogin("qytcCommonAuthLogin", {
                            queryStr: u
                        })(t)
                }
                var l = "force=true&back_url=".concat(t);
                window.location && window.location.href && -1 != window.location.href.indexOf("mindex/preview") && (l = "fromPreview=true&".concat(l));
                var f = "".concat(window.location.protocol, "//").concat(window.location.host, "/login?").concat(l);
                t.includes(encodeURIComponent("waimai/mindex/search")) || t.includes(encodeURIComponent("waimai/mindex/menusearch")) ? window.location.replace(f) : window.location.href = f
            }
        }
        e.default = q
    },
    67705: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                default: function() {
                    return w
                }
            });
        var r = n(34338)
            , i = n.n(r)
            , o = n(76801)
            , a = n.n(o)
            , c = n(50886)
            , u = n.n(c)
            , s = n(69358)
            , l = n.n(s)
            , f = n(60228)
            , d = n.n(f)
            , p = n(43843)
            , h = n.n(p)
            , m = {
            risk_platform: 3,
            risk_partner: 4,
            risk_app: -1,
            needShowBack: !0,
            same_site: !0,
            prioritise: 2
        }
            , g = "https://passport.meituan.com/useraccount/ilogin?"
            , v = "https://passport.fe.test.sankuai.com/useraccount/ilogin?";
        function w(t) {
            var e = t || encodeURIComponent("".concat(window.location.origin, "/openh5/login/crossDomain/callback"));
            m.backurl = e;
            var n, r = (window.location.host.includes("test") ? v : g) + Object.keys(m).map(function(t) {
                return "".concat(t, "=").concat(m[t])
            }).join("&");
            window.location.href = r
        }
    },
    2758: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(4389)
            , i = n(36199);
        function o() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                , e = window.KNB;
            if (!e)
                throw (0,
                    i.reportWarn)("\u8c03\u7528KNB\u5931\u8d25", "KNB\u672a\u627e\u5230"),
                    new Error("can not find knb object");
            e.login({
                success: function t(e) {
                    var n = e.token;
                    window.location.href = "".concat(window.location.origin, "/waimai/mindex/home"),
                        (0,
                            i.reportMetric)("login_success", 1, {
                            type: "KNB"
                        })
                },
                fail: function t() {
                    (0,
                        i.reportMetric)("login_fail", 1, {
                        type: "KNB"
                    }),
                        (0,
                            i.reportWarn)("\u8c03\u7528KNB\u5931\u8d25", "\u8c03\u7528\u767b\u5f55\u6a21\u5757\u5931\u8d25")
                }
            })
        }
        e.default = o
    },
    29970: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                goKuaiShouLogin: function() {
                    return s
                }
            });
        var r = n(60228)
            , i = n.n(r)
            , o = n(73964)
            , a = n.n(o)
            , c = n(36199)
            , u = n(62356)
            , s = function t() {
            return new Promise(function(t) {
                    window.MTUNIAPI ? window.MTUNIAPI.mtLogin().then(function(e) {
                        (0,
                            c.reportMetric)("login_success", 1, {
                            type: "kuaishou"
                        }),
                            t(e)
                    }).catch(function(e) {
                        console.error("\u5feb\u624b\u73af\u5883\u767b\u5f55\u5931\u8d25\uff01", e),
                            (0,
                                c.reportMetric)("login_fail", 1, {
                                type: "kuaishou"
                            }),
                            (0,
                                c.reportError)("\u5feb\u624b\u5c0f\u7a0b\u5e8f\u73af\u5883\u767b\u5f55\u5931\u8d25", "\u5feb\u624b\u5c0f\u7a0b\u5e8f\u73af\u5883\u767b\u5f55\u5931\u8d25", e),
                            t(!1)
                    }) : ((0,
                        c.reportError)("\u3010\u5feb\u624b\u5c0f\u7a0b\u5e8f\u57fa\u7840\u80fd\u529b\u5931\u8d25\u3011", "window.MTUNIAPI \u4e3a\u7a7a", {
                        type: "login"
                    }),
                        u.default.show("\u5524\u8d77\u5feb\u624b\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u8054\u7cfb\u5ba2\u670d~"))
                }
            )
        }
    },
    86911: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(17156)
            , i = n.n(r)
            , o = n(64687)
            , a = n.n(o)
            , c = n(38077)
            , u = n.n(c)
            , s = n(76801)
            , l = n.n(s)
            , f = n(69358)
            , d = n.n(f)
            , p = n(60228)
            , h = n.n(p)
            , m = n(2918)
            , g = n.n(m)
            , v = n(43843)
            , w = n.n(v)
            , y = n(4389)
            , _ = n(42264)
            , b = n(26648)
            , O = n(2758)
            , x = n(67705)
            , E = n(71066)
            , T = n(47689)
            , P = n(94280)
            , k = n(29970)
            , C = {
            knblogin: O.default,
            ilogin: x.default,
            authlogin: T.default,
            h5login: E.default,
            default: E.default
        };
        function S(t) {
            var e = y.get("wm_order_channel") || "default"
                , n = Object.keys(t).filter(function(n) {
                var r;
                return (t[n].channel || []).includes(e)
            })[0] || "default";
            if (n.toLocaleLowerCase().endsWith("authlogin")) {
                var r, i = t[n].page[null === (r = window.globalParam) || void 0 === r ? void 0 : r.env] || t[n].page.production;
                return (0,
                    T.default)("authLogin", {
                    queryStr: "auth_url=".concat(encodeURIComponent(i))
                })
            }
            return C[n]
        }
        function A(t) {
            var e = t || encodeURIComponent(window.location.href);
            if (window.location.host.includes("mtshangou.com"))
                (0,
                    x.default)();
            else if (_.IS_TINY_PKG)
                (0,
                    O.default)(e);
            else if ((0,
                P.isKuaiShouMinprogram)())
                (0,
                    k.goKuaiShouLogin)();
            else {
                var n = b.default.get(b.ChannelHornConfigName.Login);
                try {
                    S(n)(e)
                } catch (t) {
                    (0,
                        E.default)(e)
                }
            }
        }
        e.default = A;
        var I = function() {
            var t = i()(a().mark(function t(e) {
                var n, r;
                return a().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                if (n = e || encodeURIComponent(window.location.href),
                                    r = b.default.check(b.ChannelHornConfigName.Login),
                                    !window.location.host.includes("mtshangou.com")) {
                                    t.next = 1;
                                    break
                                }
                                return (0,
                                    x.default)(),
                                    t.abrupt("return");
                            case 1:
                                if (!r) {
                                    t.next = 2;
                                    break
                                }
                                return (0,
                                    x.default)(n),
                                    t.abrupt("return");
                            case 2:
                                if (!_.IS_TINY_PKG) {
                                    t.next = 3;
                                    break
                                }
                                return (0,
                                    O.default)(n),
                                    t.abrupt("return");
                            case 3:
                                _.IS_UNICOM && (0,
                                    T.default)(e);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                }, t)
            }));
            return function e(n) {
                return t.apply(this, arguments)
            }
        }()
    },
    25980: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                replaceErrors: function() {
                    return Tt
                },
                isNotEmpty: function() {
                    return Pt
                },
                isEmpty: function() {
                    return kt
                }
            });
        var r = n(34338)
            , i = n.n(r)
            , o = n(38077)
            , a = n.n(o)
            , c = n(97195)
            , u = n.n(c)
            , s = n(50886)
            , l = n.n(s)
            , f = n(89730)
            , d = n.n(f)
            , p = n(78150)
            , h = n.n(p)
            , m = n(60429)
            , g = n.n(m)
            , v = n(79997)
            , w = n.n(v)
            , y = n(69358)
            , _ = n.n(y)
            , b = n(60228)
            , O = n.n(b)
            , x = n(80939)
            , E = n.n(x)
            , T = n(52003)
            , P = n.n(T)
            , k = n(64043)
            , C = n.n(k)
            , S = n(12826)
            , A = n.n(S)
            , I = n(22462)
            , N = n.n(I)
            , M = n(57267)
            , R = n.n(M)
            , D = n(61514)
            , j = n.n(D)
            , L = n(9873)
            , U = n.n(L)
            , q = n(47522)
            , B = n.n(q)
            , G = n(93949)
            , W = n.n(G)
            , F = n(17563)
            , H = n(26585)
            , Q = n(62356)
            , Y = n(92479)
            , K = n(13365)
            , V = n(39310)
            , J = n(31682);
        function X() {
            return navigator.userAgent.match(/(.*?(iPad|iPhone|iPod).*?QQ\/([\d.]+).*?)|(.*?\bV1_AND_SQI?_([\d.]+)(.*?QQ\/([\d.]+))?.*?)/i)
        }
        function z() {
            return navigator.userAgent.match(/wxwork/i)
        }
        function $() {
            return !z() && navigator.userAgent.match(/micromessenger/i)
        }
        function Z() {
            var t = navigator.userAgent;
            return t.indexOf("Android") > -1 || t.indexOf("Adr") > -1
        }
        function tt() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
        }
        function et() {
            try {
                var t = navigator.userAgent.toLocaleLowerCase();
                return parseFloat(t.match(/android (.*?);/)[1])
            } catch (t) {
                return 0
            }
        }
        function nt() {
            try {
                var t = navigator.userAgent.toLocaleLowerCase();
                return parseFloat(t.match(/cpu iphone os (.*?) like mac os/)[1].replace("_", "."))
            } catch (t) {
                return 0
            }
        }
        function rt(t, e) {
            for (var n = {}, r, i = t.split(e || "&"), o = 0; o < i.length; o += 1)
                n[(r = i[o].split("="))[0]] = decodeURIComponent(r[1] || "");
            return n
        }
        function it(t, e) {
            var n = t || window.location.href, r;
            return rt(n.slice(n.indexOf(e || "?") + 1))
        }
        function ot(t) {
            var e = "";
            return Object.keys(t).map(function(n) {
                return e += "" === e ? "?" : "&",
                    e += "".concat(n, "=").concat(t[n]),
                    n
            }),
                e
        }
        function at(t) {
            var e = "";
            return Object.keys(t).map(function(n) {
                return e += "" === e ? "?" : "&",
                    e += "".concat(n, "=").concat(encodeURIComponent(t[n])),
                    n
            }),
                e
        }
        function ct(t) {
            var e = "";
            return Object.keys(t).map(function(n) {
                return e += "" === e ? "/" : ",",
                    e += "".concat(n, "=").concat(t[n]),
                    n
            }),
                e
        }
        function ut(t, e) {
            return e = e || 2,
            Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
        }
        function st(t, e) {
            var n = document.createElement("script");
            n.src = t,
                n.onload = e,
                n.onerror = function() {}
                ,
                document.body.appendChild(n)
        }
        function lt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ""
                , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                , o = W().usablePOI || {}
                , a = o.lat
                , c = void 0 === a ? "" : a
                , u = o.lng
                , s = void 0 === u ? "" : u;
            return "".concat(location.protocol, "//").concat(document.domain, "/waimai/").concat(t, "/order-detail?orderPlatform=").concat(i, "&latitude=").concat(c, "&longitude=").concat(s, "&initialLat=").concat(W().pickedLat || "", "&initialLng=").concat(W().pickedLng || "", "&actualLat=").concat(W().geoLat || "", "&actualLng=").concat(W().geoLng || "", "&orderId=").concat(e, "&mtOrderViewId=").concat(n)
        }
        function ft(t, e) {
            return "".concat(window.location.protocol, "//").concat(document.domain, "/waimai/").concat(t, "/menu?").concat(F.stringify(e))
        }
        function dt() {
            var t, e;
            return ((0,
                Y.default)("iuuid") || (0,
                Y.default)("_hc.v") || "").replace(new RegExp(/(\")/g), "").split(".")[0]
        }
        function pt() {
            var t = location.protocol, e;
            return e = V.default.isProd() ? "m.dianping.com" : "m.51ping.com",
                "".concat(t, "//").concat(e)
        }
        function ht() {
            var t = location.protocol, e;
            return V.default.isProd() ? e = "open.meituan.com" : (t = "http:",
                e = "thirdlogin.wpt.test.sankuai.com"),
                "".concat(t, "//").concat(e)
        }
        function mt(t) {
            var e = {
                url: "",
                forceAuth: 0,
                errJudge: !1,
                replace: !1,
                pagePathName: "wxwallet",
                poiid: "",
                virtualBindTicket: "",
                signature: ""
            }
                , n = Object.assign({}, e, t);
            if (n.forceAuth = n.forceAuth ? 1 : 0,
            n.errJudge && sessionStorage.getItem("errjudge"))
                /fromthird/.test(window.location.href) ? Q.default.show("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", 0) : (sessionStorage.removeItem("errjudge"),
                    location.replace("".concat(location.protocol, "//").concat(document.domain, "/waimai/").concat(n.pagePathName).concat(location.search, "#!index/source=mine")));
            else {
                var r = location.search || "?placeholder=1";
                n.errJudge && sessionStorage.setItem("errjudge", !0);
                var i = n.url || "".concat(location.protocol, "//").concat(document.domain + location.pathname + r);
                login.mtlogin({
                    forceAuth: t.forceAuth,
                    url: i,
                    pagePathName: n.pagePathName,
                    poiId: n.poiid,
                    actualLat: W().geoLat || "",
                    actualLng: W().geoLng || "",
                    virtualBindTicket: n.virtualBindTicket,
                    signature: n.signature
                }, {
                    replace: n.replace
                })
            }
        }
        function gt(t) {
            t === K.default.SUBCODE.ERROR_402 || t === K.default.SUBCODE.ERROR_405 ? H.default.show({
                message: React.createElement("div", null, "\u60a8\u7684\u8d26\u53f7\u5b58\u5728\u5b89\u5168\u9690\u60a3,", React.createElement("br", null), "\u8bf7\u62e8\u6253\u5ba2\u670d\u7535\u8bdd10107888\u54a8\u8be2\u89e3\u51b3"),
                btnList: [{
                    txt: "\u6682\u4e0d"
                }, {
                    txt: React.createElement("a", {
                        onClick: function t() {
                            return (0,
                                J.default)("10107888")
                        }
                    }, "\u8054\u7cfb\u5ba2\u670d"),
                    highlight: !0
                }]
            }) : t !== K.default.SUBCODE.ERROR_403 && t !== K.default.SUBCODE.ERROR_404 || H.default.show({
                message: React.createElement("div", null, "\u60a8\u7684\u8d26\u53f7\u5b58\u5728\u5b89\u5168\u9690\u60a3,", React.createElement("br", null), "\u8bf7\u8bbf\u95ee", React.createElement("a", {
                    href: "//i.meituan.com"
                }, "i.meituan.com"), "\u8fdb\u884c\u89e3\u9501"),
                btnList: [{
                    txt: "\u77e5\u9053\u4e86",
                    highlight: !0
                }]
            })
        }
        function vt(t) {
            if ("function" == typeof t.toFixed) {
                var e = String(t).split(".");
                if (e.length > 1 && e[1].length > 2) {
                    var n = t.toFixed(2), r;
                    return String(n).split(".").length > 1 && "00" === e[1] ? +e[0] : +n
                }
            }
            return t
        }
        function wt() {
            var t = !1, e;
            window.performance && (window.performance.navigation && 1 === window.performance.navigation.type && (t = !0));
            return t
        }
        function yt(t, e, n) {
            var r = {};
            t.map(function(t) {
                return r[t[n]] = !0,
                    t
            });
            var i = e.filter(function(t) {
                return !0 !== r[t[n]]
            });
            return t.concat(i)
        }
        function _t(t) {
            var e = t.split("&")
                , n = {};
            return e.forEach(function(t) {
                var e = t.split("=")[0]
                    , r = decodeURIComponent(t.split("=")[1]);
                n[e] = r
            }),
                n
        }
        var bt = function t(e) {
            return (e || "").replace(/&nbsp;/g, "\xa0").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&reg;/g, "\xae").replace(/&trade;/g, "\u2122").replace(/&copy;/g, "\xa9").replace(/&times;/g, "\xd7").replace(/&divide;/g, "\xf7").replace(/&yen;/g, "\xa5")
        }
            , Ot = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.sum, r = void 0 === n ? 0 : n, i = e.maxSum, o = void 0 === i ? 9999 : i, a = e.char, c;
            return r > o ? o + (void 0 === a ? "+" : a) : r
        }
            , xt = {
            eq: function t(e, n) {
                return e === n
            },
            gt: function t(e, n) {
                var r = e ? e.split(".") : []
                    , i = n ? n.split(".") : [];
                return [0, 1, 2].forEach(function(t) {
                    r[t] = r[t] || 0,
                        i[t] = i[t] || 0
                }),
                    +r[0] !== +i[0] ? +r[0] > +i[0] : +r[1] !== +i[1] ? +r[1] > +i[1] : +r[2] > +(i[2] || 0)
            },
            lt: function t(e, n) {
                return !this.gte(e, n)
            },
            gte: function t(e, n) {
                return this.eq(e, n) || this.gt(e, n)
            },
            lte: function t(e, n) {
                return this.eq(e, n) || this.lt(e, n)
            }
        };
        function Et() {
            return navigator.userAgent.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)
        }
        function Tt(t, e) {
            if (e instanceof Error) {
                var n = {};
                return Object.getOwnPropertyNames(e).forEach(function(t) {
                    n[t] = e[t]
                }),
                    n
            }
            return e
        }
        function Pt(t) {
            if ("[object Array]" == Object.prototype.toString.call(t))
                return t.length > 0;
            if ("[object Object]" == Object.prototype.toString.call(t)) {
                for (var e in t)
                    if (t.hasOwnProperty(e))
                        return !0;
                return !1
            }
            return "[object String]" == Object.prototype.toString.call(t) ? t.length > 0 : !!t
        }
        function kt(t) {
            return !t || "{}" === JSON.stringify(t)
        }
        e.default = {
            isInMobileQQ: X,
            isInWeixin: $,
            isInWeixinWork: z,
            isInAndroid: Z,
            isInIOS: tt,
            isInSafari: Et,
            getParams: it,
            getParamsStr: ot,
            getParamsEncodeURIComponentStr: at,
            getParamsStrForMinSpa: ct,
            formatFee: ut,
            loadScriptAsync: st,
            getOrderDetailUrl: lt,
            handleDpUuid: dt,
            getDetailUrl: ft,
            goMtLogin: mt,
            displayErrorDlg: gt,
            fixedFee: vt,
            isPageLoadByRefresh: wt,
            getConcatSet: yt,
            getParamsObject: _t,
            getDpMOrigin: pt,
            getMtMOrigin: ht,
            filterHtmlString: bt,
            sumFormateToStr: Ot,
            compareVersion: xt,
            getAndriodVersion: et,
            getIOSVersion: nt
        }
    },
    10286: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(38416)
            , i = n.n(r)
            , o = n(70215)
            , a = n.n(o)
            , c = n(17156)
            , u = n.n(c)
            , s = n(50886)
            , l = n.n(s)
            , f = n(278)
            , d = n.n(f)
            , p = n(79288)
            , h = n.n(p)
            , m = n(60429)
            , g = n.n(m)
            , v = n(69358)
            , w = n.n(v)
            , y = n(60228)
            , _ = n.n(y)
            , b = n(52003)
            , O = n.n(b)
            , x = n(64043)
            , E = n.n(x)
            , T = n(12826)
            , P = n.n(T)
            , k = n(2918)
            , C = n.n(k)
            , S = n(268)
            , A = n.n(S)
            , I = n(64687)
            , N = n.n(I)
            , M = n(4389)
            , R = n(84569)
            , D = n.n(R)
            , j = n(10566)
            , L = n.n(j)
            , U = n(36199)
            , q = ["xhr"];
        e.default = {
            data: {
                channel: M.get("wm_order_channel"),
                isReportedChannel: !1,
                whiteUrl: []
            },
            init: function t() {
                var e = this;
                return u()(N().mark(function t() {
                    return N().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                                case 0:
                                    e.setLoganRtlConfig(),
                                        R.LLog.start({
                                            topic: "app.com.sankuai.waimai.c.openh5",
                                            appKey: "com.sankuai.wmcapp.openh5.static",
                                            userID: M.get("userid") || M.get("userId") || M.get("user_id") || M.get("uuid") || M.get("unionid") || M.get("_lxsdk_cuid"),
                                            enableUserEvents: !1
                                        }, !1);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                    }, t)
                }))()
            },
            setLoganRtlConfig: function t() {
                var e = this;
                return u()(N().mark(function t() {
                    var n, r, i, o, a, c;
                    return N().wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                                case 0:
                                    return n = {
                                        channel: ["hongmengwaimai", "stll-bjyd", "stll-wyyyy", "hwfwggfw", "stll-QQ", "sqt_stll_hxyh", "sqt_stll_hxyh", "stll-txsp", "hwfwggdt"],
                                        url: ["/openapi/v1/poi/food", "/openh5/order/v2/preview", "/openh5/order/trade/v3/getvalid", "/openh5/order/v2/poicoupons/getvalidWithSales", "/openh5/order/v2/submit"]
                                    },
                                        t.prev = 1,
                                        r = "openh5_loganrtl_white",
                                        t.next = 2,
                                        L().fetch(r, {}, n);
                                case 2:
                                    i = t.sent,
                                        e.data.whiteUrl = i.url,
                                        o = new RegExp("^".concat(i.channel.join("|"), "$")),
                                        a = o.test(e.data.channel),
                                        e.data.isReportedChannel = a,
                                        t.next = 4;
                                    break;
                                case 3:
                                    t.prev = 3,
                                        c = t.catch(1),
                                        e.data.whiteUrl = e.data.whiteUrl || n.url;
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                    }, t, null, [[1, 3]])
                }))()
            },
            reportAjax: function t(e, n) {
                var r = n.currAjaxPathname
                    , i = n.req
                    , o = n.res;
                try {
                    var a, c;
                    if (this.data.isReportedChannel)
                        if (new RegExp("^(".concat(this.data.whiteUrl.join("|"), ")$")).test(r)) {
                            var u, s = {
                                req: i,
                                res: this.reduceRes(r, o)
                            }, l = {
                                pageUrl: location.href
                            };
                            R.LLog.log(e, s, l, [this.data.channel, r, "iajax", String(null == o ? void 0 : o.code)])
                        }
                } catch (t) {
                    (0,
                        U.reportWarn)("logan-lrt\u4e0a\u62a5\u5931\u8d25", "\u4e0a\u62a5ajax\u5931\u8d25", t)
                }
            },
            reduceRes: function t(e, n) {
                var r, o, c, u, s;
                if (0 !== Number(null == n ? void 0 : n.code))
                    return n;
                var l = n.xhr
                    , f = a()(n, q);
                switch (e) {
                    case "/openh5/order/v2/preview":
                        var d = function t() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return Array.isArray(e) ? e.map(function(t) {
                                return d(t)
                            }) : Object.keys(e).reduce(function(t, n) {
                                return n.startsWith("set") || n.endsWith("ListIterator") ? t : Object.assign(t, i()({}, n, e[n]))
                            }, {})
                        };
                        return {
                            msg: null == f ? void 0 : f.msg,
                            code: null == f ? void 0 : f.code,
                            traceid: null == f ? void 0 : f.traceid,
                            data: {
                                coupon_info_list: d(null == f || null === (r = f.data) || void 0 === r ? void 0 : r.coupon_info_list),
                                foodlist: d(null == f || null === (o = f.data) || void 0 === o ? void 0 : o.foodlist),
                                address_info: d(null == f || null === (c = f.data) || void 0 === c ? void 0 : c.address_info),
                                poi_name: null == f || null === (u = f.data) || void 0 === u ? void 0 : u.poi_name,
                                delivery_type: null == f || null === (s = f.data) || void 0 === s ? void 0 : s.delivery_type
                            }
                        };
                    case "/openh5/order/v2/submit":
                        return {
                            code: null == f ? void 0 : f.code,
                            traceid: null == f ? void 0 : f.traceid
                        };
                    default:
                        return f
                }
            }
        }
    },
    37820: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                loginData: function() {
                    return j
                },
                hwAuthLoginData: function() {
                    return L
                },
                token_id: function() {
                    return U
                },
                ILogout: function() {
                    return F
                },
                logout: function() {
                    return H
                }
            });
        var r = n(38416), i = n.n(r), o = n(34338), a = n.n(o), c = n(59749), u = n.n(c), s = n(38077), l = n.n(s), f = n(76801), d = n.n(f), p = n(35082), h = n.n(p), m = n(40739), g = n.n(m), v = n(81919), w = n.n(v), y = n(99474), _ = n.n(y), b = n(69358), O = n.n(b), x = n(60228), E = n.n(x), T = n(43843), P = n.n(T), k = n(47522), C = n.n(k), S = n(4389), A = n(11340), I = n(39310), N = n(29840), M;
        function R(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                    n.push.apply(n, r)
            }
            return n
        }
        function D(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? R(Object(n), !0).forEach(function(e) {
                    i()(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var j = n(42264).IS_TCQD_OR_TCZX ? {
            risk_platform: 3,
            risk_partner: 515,
            risk_app: -1
        } : {
            risk_platform: 3,
            risk_partner: 4,
            risk_app: 216
        }
            , L = {
            risk_platform: 3,
            risk_partner: 4,
            risk_app: 286
        }
            , U = "T8GaeXt612K2wAevahqL6Q"
            , q = "//passport.wpt.test.sankuai.com/user/api/v1/logout/reset-token"
            , B = "//passport.meituan.com/user/api/v1/logout/reset-token"
            , G = "https://i.meituan.com/account/logout"
            , W = "http://i.wpt.test.sankuai.com/account/logout";
        function F(t) {
            var e = encodeURIComponent("".concat(t, "/waimai/mindex/home"))
                , n = "".concat(window.location.host.includes("test") ? W : G, "?backurl=").concat(e);
            (0,
                A.default)({
                type: "GET",
                url: n
            }).then(function(t) {
                console.log(t)
            }),
                window.location.href = "".concat(t, "/waimai/mindex/home"),
                S.erase("token"),
                S.erase("mt_c_token")
        }
        function H(t, e) {
            var n = I.default.isTest() ? q : B
                , r = function t(e, n) {
                return e.withCredentials = !0,
                    !0
            }
                , i = window.location.protocol + n;
            (0,
                A.default)({
                url: i,
                type: "POST",
                data: D(D({}, j), {}, {
                    fingerprint: (0,
                        N.default)(i, j)
                }),
                beforeSend: r,
                guardIngnore: !0
            }).then(function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , r = n.error
                    , i = void 0 === r ? {} : r
                    , o = n.data
                    , a = void 0 === o ? {} : o;
                i && (i.message || i.code || i.type) ? "function" == typeof e && e(i) : "function" == typeof t && t(a)
            }, function(t) {
                "function" == typeof e && e(t)
            })
        }
    },
    77349: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(56690), i = n.n(r), o = n(89728), a = n.n(o), c = n(76801), u = n.n(c), s = n(60228), l = n.n(s), f = n(73964), d = n.n(f), p = n(43843), h = n.n(p), m = n(47522), g = n.n(m), v, w = new (function() {
            function t() {
                i()(this, t),
                    this.callbacks = [],
                    this.init()
            }
            return a()(t, [{
                key: "init",
                value: function t() {
                    var e = this;
                    window.my && (this.inited = !0,
                            window.my.onMessage = function(t) {
                                e.publish(t),
                                    e.clear()
                            }
                    )
                }
            }, {
                key: "subscribe",
                value: function t(e) {
                    "function" != typeof e || this.callbacks.includes(e) || (this.inited || this.init(),
                        this.callbacks.push(e))
                }
            }, {
                key: "publish",
                value: function t(e) {
                    this.callbacks.forEach(function(t) {
                        return t(e)
                    })
                }
            }, {
                key: "clear",
                value: function t() {
                    this.callbacks = []
                }
            }])
        }());
        e.default = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
            ;
            return new Promise(function(e, n) {
                    w.subscribe(e),
                        t()
                }
            )
        }
    },
    36199: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                reportError: function() {
                    return N
                },
                reportWarn: function() {
                    return M
                },
                reportInfo: function() {
                    return R
                },
                reportDailyInfo: function() {
                    return D
                },
                reportMetric: function() {
                    return j
                }
            });
        var r = n(59749)
            , i = n.n(r)
            , o = n(38077)
            , a = n.n(o)
            , c = n(35082)
            , u = n.n(c)
            , s = n(40739)
            , l = n.n(s)
            , f = n(81919)
            , d = n.n(f)
            , p = n(99474)
            , h = n.n(p)
            , m = n(69358)
            , g = n.n(m)
            , v = n(60228)
            , w = n.n(v)
            , y = n(47522)
            , _ = n.n(y)
            , b = n(38416)
            , O = n.n(b)
            , x = n(34338)
            , E = n.n(x)
            , T = n(78150)
            , P = n.n(T)
            , k = n(4389)
            , C = n(25980);
        function S(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                    n.push.apply(n, r)
            }
            return n
        }
        function A(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? S(Object(n), !0).forEach(function(e) {
                    O()(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        function I() {
            for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "error", e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++)
                i[o - 3] = arguments[o];
            var a = i[i.length - 1];
            i[i.length - 1] = L(a),
                n = U(n);
            var c = ""
                , u = "";
            i.length > 1 ? (c = i[0],
                u = i[1]) : u = i[0],
                window.owl("addError", {
                    name: n,
                    msg: u
                }, {
                    category: e,
                    level: t,
                    tags: {
                        merlinTag: 1,
                        tracerType: e,
                        errorLevelSub: n,
                        errorCode: c
                    }
                })
        }
        function N(t, e) {
            try {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                    r[i - 2] = arguments[i];
                I.apply(void 0, ["error", t, e].concat(r))
            } catch (t) {
                return t
            }
        }
        function M(t, e) {
            try {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                    r[i - 2] = arguments[i];
                I.apply(void 0, ["warn", t, e].concat(r))
            } catch (t) {
                return t
            }
        }
        function R(t, e) {
            try {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                    r[i - 2] = arguments[i];
                I.apply(void 0, ["info", t, e].concat(r))
            } catch (t) {
                return t
            }
        }
        function D(t, e) {
            R("daliy-report", t, e)
        }
        function j(t, e, n) {
            try {
                var r = window.owl("newMetricInst");
                r && r.setTags(A(A({}, n), {}, {
                    channel: k.get("wm_order_channel") || ""
                })),
                r && r.setMetric(t, e)
            } catch (t) {
                console.log("metric \u4e0a\u62a5\u5f02\u5e38", t)
            }
        }
        function L(t) {
            return {
                info: t,
                cookie: {
                    userId: k.get("userId"),
                    uuid: k.get("uuid"),
                    utm_source: k.get("utm_source"),
                    channel: k.get("wm_order_channel"),
                    token: k.get("token") || k.get("mt_c_token")
                }
            }
        }
        function U(t) {
            return t && t.msg ? t.msg : JSON.stringify(t, C.replaceErrors) || "default"
        }
    },
    50630: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(2072), i, o = (0,
            n(89243).default)();
        e.default = r.default.process({
            pagePathName: o.pagePathName
        })
    },
    29840: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(34338)
            , i = n.n(r)
            , o = n(64043)
            , a = n.n(o)
            , c = n(57267)
            , u = n.n(c)
            , s = n(73049)
            , l = n(36199)
            , f = function t(e, n) {
            var r = window.Rohr_Opt
                , i = ""
                , o = s.default.param(n, !0)
                , a = "".concat(e, "&").concat(o).replace(/[&?]{1,2}/, "?");
            try {
                i = r.reload(a)
            } catch (t) {
                window.owl("addError", {
                    name: "",
                    msg: "\u6dfb\u52a0rohr token\u5931\u8d25"
                }, {
                    level: "warn",
                    tags: {
                        exception: t,
                        paramStr: a
                    }
                })
            }
            return i
        };
        e.default = f
    },
    8732: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                sendCloseWeb: function() {
                    return d
                },
                sendQuitApp: function() {
                    return p
                },
                sendSetPoiInfo: function() {
                    return h
                },
                sendGetPoiInfo: function() {
                    return m
                },
                sendSetLoginInfo: function() {
                    return g
                },
                sendSetLogoutInfo: function() {
                    return v
                },
                sendGetPrivacyInfo: function() {
                    return w
                },
                sendPrivacyAgreed: function() {
                    return _
                },
                sendGetIsSupportHwAccount: function() {
                    return O
                },
                sendSetPoiInfoToAlipay: function() {
                    return E
                },
                sendGetAlipayMsg: function() {
                    return T
                }
            });
        var r = n(17156)
            , i = n.n(r)
            , o = n(64687)
            , a = n.n(o)
            , c = n(78150)
            , u = n.n(c)
            , s = n(69358)
            , l = n.n(s)
            , f = n(77349);
        function d() {
            window.system && system.postMessage && "function" == typeof system.postMessage && system.postMessage(JSON.stringify({
                type: "H5_CLOSE_APP_WEBVIEW"
            }))
        }
        function p() {
            window.system && system.postMessage && "function" == typeof system.postMessage && system.postMessage(JSON.stringify({
                type: "H5_QUIT_APP"
            }))
        }
        function h(t) {
            window.system && system.postMessage && "function" == typeof system.postMessage && system.postMessage(JSON.stringify({
                type: "H5_SET_APP_LOCATION",
                data: t
            }))
        }
        function m() {
            window.system && system.postMessage && "function" == typeof system.postMessage && (console.log("H5_GET_APP_LOCATION"),
                system.postMessage(JSON.stringify({
                    type: "H5_GET_APP_LOCATION"
                })))
        }
        function g(t) {
            window.system && system.postMessage && "function" == typeof system.postMessage && system.postMessage(JSON.stringify({
                type: "H5_SET_APP_LOGININFO",
                data: t
            }))
        }
        function v() {
            window.system && system.postMessage && "function" == typeof system.postMessage && system.postMessage(JSON.stringify({
                type: "H5_SET_APP_LOGOUT"
            }))
        }
        function w() {
            return y.apply(this, arguments)
        }
        function y() {
            return (y = i()(a().mark(function t() {
                var e;
                return a().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                null !== (e = window) && void 0 !== e && null !== (e = e.system) && void 0 !== e && e.postMessage && "function" == typeof system.postMessage && system.postMessage(JSON.stringify({
                                    type: "H5_GET_APP_PRIVACYDATA"
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                }, t)
            }))).apply(this, arguments)
        }
        function _() {
            return b.apply(this, arguments)
        }
        function b() {
            return (b = i()(a().mark(function t() {
                var e;
                return a().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                null !== (e = window) && void 0 !== e && null !== (e = e.system) && void 0 !== e && e.postMessage && "function" == typeof system.postMessage && system.postMessage(JSON.stringify({
                                    type: "H5_SET_APP_PRIVACYAGREED"
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                }, t)
            }))).apply(this, arguments)
        }
        function O() {
            return x.apply(this, arguments)
        }
        function x() {
            return (x = i()(a().mark(function t() {
                var e;
                return a().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                null !== (e = window) && void 0 !== e && null !== (e = e.system) && void 0 !== e && e.postMessage && "function" == typeof system.postMessage && system.postMessage(JSON.stringify({
                                    type: "H5_GET_APP_ISSUPPORTHWACCOUNT"
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                }, t)
            }))).apply(this, arguments)
        }
        function E(t) {
            var e;
            null !== (e = window) && void 0 !== e && null !== (e = e.my) && void 0 !== e && e.postMessage && "function" == typeof my.postMessage && my.postMessage({
                type: "selectAddress",
                data: t
            })
        }
        function T() {
            return P.apply(this, arguments)
        }
        function P() {
            return (P = i()(a().mark(function t() {
                var e, n, r, i, o;
                return a().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                if (null === (e = window) || void 0 === e || null === (e = e.my) || void 0 === e || !e.postMessage || "function" != typeof my.postMessage) {
                                    t.next = 3;
                                    break
                                }
                                if (n = "aliapp_msg",
                                    !(r = sessionStorage.getItem(n))) {
                                    t.next = 1;
                                    break
                                }
                                return t.abrupt("return", JSON.parse(r));
                            case 1:
                                return i = "getZfbMsg",
                                    t.next = 2,
                                    (0,
                                        f.default)(function() {
                                        my.postMessage({
                                            type: i
                                        })
                                    });
                            case 2:
                                if ((o = t.sent).type !== i) {
                                    t.next = 3;
                                    break
                                }
                                return sessionStorage.setItem(n, JSON.stringify(o.data)),
                                    t.abrupt("return", o.data);
                            case 3:
                                return t.abrupt("return", {});
                            case 4:
                            case "end":
                                return t.stop()
                        }
                }, t)
            }))).apply(this, arguments)
        }
    },
    92807: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(78150)
            , i = n.n(r)
            , o = n(60228)
            , a = n.n(o)
            , c = n(73964)
            , u = n.n(c)
            , s = n(645)
            , l = n(42264)
            , f = n(36199);
        function d(t) {
            return new Promise(function(e) {
                    if (l.isHarmony && e(t),
                    l.IS_TUAN_APP_UA || l.IS_WAIMAI_APP_UA || l.IS_DIANPING_APP_UA)
                        try {
                            KNB.use("waimai.djEncryptRiskData", {
                                data: t,
                                success: function t(n) {
                                    (0,
                                        f.reportMetric)("openH5_knb_djEncryptRiskData_success", 1),
                                        e({
                                            "dj-token": n.encryptData
                                        })
                                },
                                fail: function n(r) {
                                    console.log(r),
                                        (0,
                                            f.reportMetric)("openH5_knb_djEncryptRiskData_fail", 1),
                                        (0,
                                            f.reportInfo)("\u83b7\u53d6KNB\u52a0\u5bc6\u65b9\u6cd5\u5931\u8d25", JSON.stringify(r)),
                                        e(t)
                                }
                            })
                        } catch (n) {
                            console.log(n),
                                (0,
                                    f.reportInfo)("\u83b7\u53d6KNB\u52a0\u5bc6\u65b9\u6cd5\u62a5\u9519", JSON.stringify(n)),
                                e(t)
                        }
                    else
                        e(t)
                }
            )
        }
        e.default = d
    },
    67580: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                default: function() {
                    return o
                }
            });
        var r = n(73049)
            , i = n(94280);
        function o(t) {
            if (document.title !== t && (document.title = t),
                (0,
                    i.isInWeixin)()) {
                var e = (0,
                    r.default)("body")
                    , n = (0,
                    r.default)('<iframe style="visibility: hidden !important;"></iframe>');
                n.on("load", function() {
                    setTimeout(function() {
                        n.off("load").remove()
                    }, 0)
                }).appendTo(e)
            }
            if ((0,
                i.isInMobileQQ)())
                try {
                    window.mqq.ui.refreshTitle()
                } catch (t) {}
        }
    },
    69626: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(18698)
            , i = n.n(r)
            , o = n(34338)
            , a = n.n(o)
            , c = n(78150)
            , u = n.n(c)
            , s = n(69358)
            , l = n.n(s)
            , f = n(60228)
            , d = n.n(f)
            , p = n(64043)
            , h = n.n(p)
            , m = n(47522)
            , g = n.n(m)
            , v = n(92479)
            , w = n(13365)
            , y = n(36199);
        function _(t, e) {
            this.gkey = t || "gwaimai",
                this.local = !!window.localStorage,
                this.opt = e || {
                    type: "localStorage"
                },
                this.resetTimes = 0,
                this.get = function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (this.local && this.opt && this.opt.type && "localStorage" === this.opt.type) {
                        if (e) {
                            var n;
                            try {
                                n = JSON.parse(localStorage.getItem(t) || "{}")
                            } catch (t) {
                                n = {}
                            }
                            return n
                        }
                        return localStorage.getItem(t)
                    }
                    var r = (0,
                        v.default)(this.gkey) || "{}"
                        , i = (r = JSON.parse(r))[t];
                    return void 0 !== i ? decodeURIComponent(i) : i
                }
                ,
                this.set = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (this.local && this.opt && this.opt.type && "localStorage" === this.opt.type)
                        try {
                            "object" === i()(e) ? localStorage.setItem(t, JSON.stringify(e)) : localStorage.setItem(t, e)
                        } catch (r) {
                            if ((0,
                                y.reportError)("actionError", "QuotaExceededError", "QuotaExceededError: An attempt was made to add something to storage that exceeded the quota", "storage\u5df2\u5b58\u50a8\uff1a".concat(Object.keys(localStorage).join())),
                                this.resetTimes) {
                                if (n)
                                    throw r
                            } else
                                Object.keys(window.localStorage).forEach(function(t) {
                                    /\_hydra\:http/.test(t) && window.localStorage.removeItem(t)
                                }),
                                    this.resetTimes += 1,
                                    this.set(t, e)
                        }
                    else {
                        (0,
                            y.reportError)("actionError", "\u6ca1\u6709localstorage", "key: ".concat(t, ", value: ").concat(e));
                        try {
                            var r = (0,
                                v.default)(this.gkey) || "{}";
                            (r = JSON.parse(r))[t] = encodeURIComponent(e),
                                (0,
                                    v.default)(this.gkey, JSON.stringify(r), {
                                    expires: this.opt && this.opt.expires || 1
                                })
                        } catch (n) {
                            (0,
                                y.reportError)("actionError", "cookie\u5199\u5165\u5931\u8d25", n.message, "key: ".concat(t, ", value: ").concat(e))
                        }
                    }
                }
                ,
                this.remove = function(t) {
                    if (this.local && this.opt && this.opt.type && "localStorage" === this.opt.type)
                        localStorage.removeItem(t);
                    else {
                        var e = (0,
                            v.default)(this.gkey) || "{}";
                        delete (e = JSON.parse(e))[t],
                            (0,
                                v.default)(this.gkey, JSON.stringify(e))
                    }
                }
        }
        e.default = new _(w.default.CACHED_CART_DATA)
    },
    645: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                default: function() {
                    return o
                }
            });
        var r = n(79288)
            , i = n.n(r);
        function o(t) {
            var e = Number(t);
            return isNaN(e) ? t : e < 1e4 ? Math.round(1e6 * e) : Math.round(e)
        }
    },
    97963: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(60429)
            , i = n.n(r)
            , o = n(64043)
            , a = n.n(o)
            , c = n(61514)
            , u = n.n(c)
            , s = n(8575)
            , l = n(17563);
        e.default = function(t, e) {
            var n = s.parse(t);
            return n.query = Object.assign({}, l.parse(n.search), e),
                delete n.search,
                s.format(n)
        }
    },
    65740: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                removeHttp: function() {
                    return A
                },
                compressImage: function() {
                    return I
                },
                formatImage: function() {
                    return N
                },
                addLngAndLatToUrl: function() {
                    return M
                },
                addCoordinateAndChannel: function() {
                    return R
                },
                getQueryObject: function() {
                    return D
                }
            });
        var r = n(27424)
            , i = n.n(r)
            , o = n(18698)
            , a = n.n(o)
            , c = n(34338)
            , u = n.n(c)
            , s = n(76801)
            , l = n.n(s)
            , f = n(97195)
            , d = n.n(f)
            , p = n(278)
            , h = n.n(p)
            , m = n(60228)
            , g = n.n(m)
            , v = n(64043)
            , w = n.n(v)
            , y = n(43843)
            , _ = n.n(y)
            , b = n(57267)
            , O = n.n(b)
            , x = n(268)
            , E = n.n(x)
            , T = n(93949)
            , P = n.n(T)
            , k = n(4389)
            , C = n(645)
            , S = location.href.startsWith("https://")
            , A = function t(e) {
            return e && e.startsWith ? e.startsWith("https://") ? e : e.startsWith("http://") && S ? e.replace("http://", "https://") : e : e
        };
        function I(t, e, n) {
            var r = /(@\d+[whq])|\.jpeg/;
            if ("number" == typeof e && (e = {
                w: e
            }),
            "object" !== a()(e))
                return t;
            if (t && t.startsWith && t.startsWith("http") && !r.test(t)) {
                var i = ["w", "h"].reduce(function(t, r) {
                    return e[r] ? t.concat(["".concat(e[r] * n).concat(r)]) : t
                }, []).join("_");
                return 0 === i.length ? t : "".concat(t, "@").concat(i)
            }
            return t
        }
        function N(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
            return t.includes(".webp") && (t = t.replace(".webp", "")),
                I(A(t), e, n)
        }
        function M(t, e) {
            var n = P().getPickedPOI().lat || ""
                , r = P().getPickedPOI().lng || ""
                , i = P().getGeoPOI().lat || ""
                , o = P().getGeoPOI().lng || ""
                , a = t.indexOf("?") > 0 ? "&" : "?";
            return e ? "".concat(t).concat(a, "wm_latitude=").concat((0,
                C.default)(n || i), "&wm_longitude=").concat((0,
                C.default)(r || o)) : "".concat(t).concat(a, "wm_latitude=").concat(n || i, "&wm_longitude=").concat(r || o)
        }
        function R(t) {
            var e = k.get("wm_order_channel") || "default"
                , n = k.get("utm_source") || "0";
            return "".concat(M(t), "&channel=").concat(e, "&utm_source=").concat(n)
        }
        function D(t) {
            var e;
            return (t.split("?")[1] || "").split("&").reduce(function(t, e, n) {
                var r = e.split("=")
                    , o = i()(r, 2)
                    , a = o[0]
                    , c = o[1];
                return t[a] = c || 0,
                    t
            }, {})
        }
    },
    2497: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                wgs84ToGcj02: function() {
                    return _
                }
            });
        var r = n(60429)
            , i = n.n(r)
            , o = n(60228)
            , a = n.n(o)
            , c = n(80939)
            , u = n.n(c)
            , s = n(73964)
            , l = n.n(s)
            , f = n(29128)
            , d = n.n(f)
            , p = n(13365)
            , h = 3.141592653589793
            , m = 6378245
            , g = .006693421622965943;
        function v(t, e) {
            return t < 72.004 || t > 137.8347 || e < .8293 || e > 55.8271 || !1
        }
        function w(t, e) {
            var n = 2 * t - 100 + 3 * e + .2 * e * e + .1 * t * e + .2 * Math.sqrt(Math.abs(t));
            return n += 2 * (20 * Math.sin(6 * t * h) + 20 * Math.sin(2 * t * h)) / 3,
                n += 2 * (20 * Math.sin(e * h) + 40 * Math.sin(e / 3 * h)) / 3,
                n += 2 * (160 * Math.sin(e / 12 * h) + 320 * Math.sin(e * h / 30)) / 3
        }
        function y(t, e) {
            var n = 300 + t + 2 * e + .1 * t * t + .1 * t * e + .1 * Math.sqrt(Math.abs(t));
            return n += 2 * (20 * Math.sin(6 * t * h) + 20 * Math.sin(2 * t * h)) / 3,
                n += 2 * (20 * Math.sin(t * h) + 40 * Math.sin(t / 3 * h)) / 3,
                n += 2 * (150 * Math.sin(t / 12 * h) + 300 * Math.sin(t / 30 * h)) / 3
        }
        function _(t, e, n) {
            var r = "string" == typeof t ? parseFloat(t) : t
                , i = "string" == typeof e ? parseFloat(e) : e;
            if (n === p.default.COORD_TYPE.GPS) {
                if (v(r, i))
                    return {
                        geotype: p.default.COORD_TYPE.MARS,
                        lng: "".concat(r),
                        lat: "".concat(i)
                    };
                var o = w(r - 105, i - 35)
                    , a = y(r - 105, i - 35)
                    , c = i / 180 * h
                    , u = Math.sin(c);
                u = 1 - g * u * u;
                var s = Math.sqrt(u)
                    , l = i + (o = 180 * o / (m * (1 - g) / (u * s) * h))
                    , f = r + (a = 180 * a / (m / s * Math.cos(c) * h));
                return {
                    geotype: p.default.COORD_TYPE.MARS,
                    lng: "".concat(f),
                    lat: "".concat(l)
                }
            }
            return {
                geotype: p.default.COORD_TYPE.MARS,
                lng: "".concat(r),
                lat: "".concat(i)
            }
        }
        var b = 1e4;
        function O(t) {
            b = +t.timeout || b,
                d().config(t)
        }
        function x(t) {
            return t && O(t),
                new Promise(function(t, e) {
                        d()(function(e) {
                            if (e.geoType === p.default.COORD_TYPE.GPS) {
                                var n = _(e.lng, e.lat, e.geoType);
                                t(Object.assign({}, e, {
                                    lat: n.lat,
                                    lng: n.lng,
                                    geotype: p.default.COORD_TYPE.MARS,
                                    geoType: p.default.COORD_TYPE.MARS
                                }))
                            } else
                                t(e)
                        }, function(t) {
                            e({
                                whereamiErrLength: t && t.length,
                                whereamiErrMsg: t
                            })
                        })
                    }
                )
        }
        x.config = O,
            e.default = x
    },
    92479: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(97195), i = n.n(r), o = n(89730), a = n.n(o), c = n(78150), u = n.n(c), s = n(69358), l = n.n(s), f = n(60228), d = n.n(f), p = n(64043), h = n.n(p), m = n(12826), g = n.n(m), v = n(57267), w = n.n(v), y = n(47522), _ = n.n(y), b = function t(e) {
            return "[object Function]" == Object.prototype.toString.call(e)
        }, O = function t(e) {
            return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
                if (t)
                    for (var n in t)
                        e[n] = t[n]
            }),
                e
        }, x = /\+/g, E, T, P;
        function k(t) {
            return T.raw ? t : encodeURIComponent(t)
        }
        function C(t) {
            return T.raw ? t : decodeURIComponent(t)
        }
        function S(t) {
            return k(T.json ? JSON.stringify(t) : String(t))
        }
        function A(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(x, " ")),
                    T.json ? JSON.parse(t) : t
            } catch (t) {}
        }
        function I(t, e) {
            var n = T.raw ? t : A(t);
            return b(e) ? e(n) : n
        }
        (T = E = function t(e, n, r) {
                if (void 0 !== n && !b(n)) {
                    if ("number" == typeof (r = O({}, T.defaults, r)).expires) {
                        var i = r.expires
                            , o = r.expires = new Date;
                        o.setTime(+o + 864e5 * i)
                    }
                    return document.cookie = [k(e), "=", S(n), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
                }
                for (var a = e ? void 0 : {}, c = document.cookie ? document.cookie.split("; ") : [], u = 0, s = c.length; u < s; u++) {
                    var l = c[u].split("=")
                        , f = C(l.shift())
                        , t = l.join("=");
                    if (e && e === f) {
                        a = I(t, n);
                        break
                    }
                    e || void 0 === (t = I(t)) || (a[f] = t)
                }
                return a
            }
        ).defaults = {},
            P = function t(e, n) {
                return void 0 !== E(e) && (E(e, "", O({}, n, {
                    expires: -1
                })),
                    !E(e))
            }
            ,
            E.remove = P,
            e.default = E
    },
    5219: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(18698), i = n.n(r), o = n(34338), a = n.n(o), c = n(38077), u = n.n(c), s = n(25728), l = n.n(s), f = n(97195), d = n.n(f), p = n(50886), h = n.n(p), m = n(278), g = n.n(m), v = n(89730), w = n.n(v), y = n(65137), _ = n.n(y), b = n(62506), O = n.n(b), x = n(79288), E = n.n(x), T = n(88052), P = n.n(T), k = n(69358), C = n.n(k), S = n(60228), A = n.n(S), I = n(80939), N = n.n(I), M = n(52003), R = n.n(M), D = n(64043), j = n.n(D), L = n(12826), U = n.n(L), q = n(22462), B = n.n(q), G = n(57267), W = n.n(G), F = n(9873), H = n.n(F), Q = n(28436), Y = n.n(Q), K = n(47522), V = n.n(K), J = n(36199), X = J.reportWarn, z = J.reportError, $ = J.reportMetric, Z = function() {
            var t, e, n, r, o = [], a = o.slice, c = o.filter, u = window.document, s = {}, l = {}, f = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                }, d = /^\s*<(\w+|!)[^>]*>/, p = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, h = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, m = /^(?:body|html)$/i, g = /([A-Z])/g, v = ["val", "css", "html", "text", "data", "width", "height", "offset"], w = ["after", "prepend", "before", "append"], y = u.createElement("table"), _ = u.createElement("tr"), b = {
                    tr: u.createElement("tbody"),
                    tbody: y,
                    thead: y,
                    tfoot: y,
                    td: _,
                    th: _,
                    "*": u.createElement("div")
                }, O = /complete|loaded|interactive/, x = /^[\w-]*$/, E = {}, T = E.toString, P = {}, k, C, S = u.createElement("div"), A = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                }, I = Array.isArray || function(t) {
                    return t instanceof Array
                }
            ;
            function N(t) {
                return null == t ? String(t) : E[T.call(t)] || "object"
            }
            function M(t) {
                return "function" == N(t)
            }
            function R(t) {
                return null != t && t == t.window
            }
            function D(t) {
                return null != t && t.nodeType == t.DOCUMENT_NODE
            }
            function j(t) {
                return "object" == N(t)
            }
            function L(t) {
                return j(t) && !R(t) && Object.getPrototypeOf(t) == Object.prototype
            }
            function U(t) {
                return "number" == typeof t.length
            }
            function q(t) {
                return c.call(t, function(t) {
                    return null != t
                })
            }
            function B(t) {
                return t.length > 0 ? n.fn.concat.apply([], t) : t
            }
            function G(t) {
                return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }
            function W(t) {
                return t in l ? l[t] : l[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
            }
            function F(t, e) {
                return "number" != typeof e || f[G(t)] ? e : e + "px"
            }
            function H(t) {
                var e, n;
                return s[t] || (e = u.createElement(t),
                    u.body.appendChild(e),
                    n = getComputedStyle(e, "").getPropertyValue("display"),
                    e.parentNode.removeChild(e),
                "none" == n && (n = "block"),
                    s[t] = n),
                    s[t]
            }
            function Q(t) {
                return "children"in t ? a.call(t.children) : n.map(t.childNodes, function(t) {
                    if (1 == t.nodeType)
                        return t
                })
            }
            function Y(n, r, i) {
                for (e in r)
                    i && (L(r[e]) || I(r[e])) ? (L(r[e]) && !L(n[e]) && (n[e] = {}),
                    I(r[e]) && !I(n[e]) && (n[e] = []),
                        Y(n[e], r[e], i)) : r[e] !== t && (n[e] = r[e])
            }
            function K(t, e) {
                return null == e ? n(t) : n(t).filter(e)
            }
            function V(t, e, n, r) {
                return M(e) ? e.call(t, n, r) : e
            }
            function J(t, e, n) {
                null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
            }
            function X(e, n) {
                var r = e.className
                    , i = r && r.baseVal !== t;
                if (n === t)
                    return i ? r.baseVal : r;
                i ? r.baseVal = n : e.className = n
            }
            function z(t) {
                var e;
                try {
                    return t ? "true" == t || "false" != t && ("null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t : e) : t
                } catch (e) {
                    return t
                }
            }
            function $(t, e) {
                e(t);
                for (var n = 0, r = t.childNodes.length; n < r; n++)
                    $(t.childNodes[n], e)
            }
            return P.matches = function(t, e) {
                if (!e || !t || 1 !== t.nodeType)
                    return !1;
                var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                if (n)
                    return n.call(t, e);
                var r, i = t.parentNode, o = !i;
                return o && (i = S).appendChild(t),
                    r = ~P.qsa(i, e).indexOf(t),
                o && S.removeChild(t),
                    r
            }
                ,
                k = function t(e) {
                    return e.replace(/-+(.)?/g, function(t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                }
                ,
                C = function t(e) {
                    return c.call(e, function(t, n) {
                        return e.indexOf(t) == n
                    })
                }
                ,
                P.fragment = function(e, r, i) {
                    var o, c, s;
                    return p.test(e) && (o = n(u.createElement(RegExp.$1))),
                    o || (e.replace && (e = e.replace(h, "<$1></$2>")),
                    r === t && (r = d.test(e) && RegExp.$1),
                    r in b || (r = "*"),
                        (s = b[r]).innerHTML = "" + e,
                        o = n.each(a.call(s.childNodes), function() {
                            s.removeChild(this)
                        })),
                    L(i) && (c = n(o),
                        n.each(i, function(t, e) {
                            v.indexOf(t) > -1 ? c[t](e) : c.attr(t, e)
                        })),
                        o
                }
                ,
                P.Z = function(t, e) {
                    return (t = t || []).__proto__ = n.fn,
                        t.selector = e || "",
                        t
                }
                ,
                P.isZ = function(t) {
                    return t instanceof P.Z
                }
                ,
                P.init = function(e, r) {
                    var i;
                    if (!e)
                        return P.Z();
                    if ("string" == typeof e)
                        if ("<" == (e = e.trim())[0] && d.test(e))
                            i = P.fragment(e, RegExp.$1, r),
                                e = null;
                        else {
                            if (r !== t)
                                return n(r).find(e);
                            i = P.qsa(u, e)
                        }
                    else {
                        if (M(e))
                            return n(u).ready(e);
                        if (P.isZ(e))
                            return e;
                        if (I(e))
                            i = q(e);
                        else if (j(e))
                            i = [e],
                                e = null;
                        else if (d.test(e))
                            i = P.fragment(e.trim(), RegExp.$1, r),
                                e = null;
                        else {
                            if (r !== t)
                                return n(r).find(e);
                            i = P.qsa(u, e)
                        }
                    }
                    return P.Z(i, e)
                }
                ,
                (n = function t(e, n) {
                        return P.init(e, n)
                    }
                ).extend = function(t) {
                    var e, n = a.call(arguments, 1);
                    return "boolean" == typeof t && (e = t,
                        t = n.shift()),
                        n.forEach(function(n) {
                            Y(t, n, e)
                        }),
                        t
                }
                ,
                P.qsa = function(t, e) {
                    var n, r = "#" == e[0], i = !r && "." == e[0], o = r || i ? e.slice(1) : e, c = x.test(o);
                    return D(t) && c && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : a.call(c && !r ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
                }
                ,
                n.contains = u.documentElement.contains ? function(t, e) {
                        return t !== e && t.contains(e)
                    }
                    : function(t, e) {
                        for (; e && (e = e.parentNode); )
                            if (e === t)
                                return !0;
                        return !1
                    }
                ,
                n.type = N,
                n.isFunction = M,
                n.isWindow = R,
                n.isArray = I,
                n.isPlainObject = L,
                n.isEmptyObject = function(t) {
                    var e;
                    for (e in t)
                        return !1;
                    return !0
                }
                ,
                n.inArray = function(t, e, n) {
                    return o.indexOf.call(e, t, n)
                }
                ,
                n.camelCase = k,
                n.trim = function(t) {
                    return null == t ? "" : String.prototype.trim.call(t)
                }
                ,
                n.uuid = 0,
                n.support = {},
                n.expr = {},
                n.map = function(t, e) {
                    var n, r = [], i, o;
                    if (U(t))
                        for (i = 0; i < t.length; i++)
                            null != (n = e(t[i], i)) && r.push(n);
                    else
                        for (o in t)
                            null != (n = e(t[o], o)) && r.push(n);
                    return B(r)
                }
                ,
                n.each = function(t, e) {
                    var n, r;
                    if (U(t)) {
                        for (n = 0; n < t.length; n++)
                            if (!1 === e.call(t[n], n, t[n]))
                                return t
                    } else
                        for (r in t)
                            if (!1 === e.call(t[r], r, t[r]))
                                return t;
                    return t
                }
                ,
                n.grep = function(t, e) {
                    return c.call(t, e)
                }
                ,
            window.JSON && (n.parseJSON = JSON.parse),
                n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                    E["[object " + e + "]"] = e.toLowerCase()
                }),
                n.fn = {
                    forEach: o.forEach,
                    reduce: o.reduce,
                    push: o.push,
                    sort: o.sort,
                    indexOf: o.indexOf,
                    concat: o.concat,
                    map: function t(e) {
                        return n(n.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    slice: function t() {
                        return n(a.apply(this, arguments))
                    },
                    ready: function t(e) {
                        return O.test(u.readyState) && u.body ? e(n) : u.addEventListener("DOMContentLoaded", function() {
                            e(n)
                        }, !1),
                            this
                    },
                    get: function e(n) {
                        return n === t ? a.call(this) : this[n >= 0 ? n : n + this.length]
                    },
                    toArray: function t() {
                        return this.get()
                    },
                    size: function t() {
                        return this.length
                    },
                    remove: function t() {
                        return this.each(function() {
                            null != this.parentNode && this.parentNode.removeChild(this)
                        })
                    },
                    each: function t(e) {
                        return o.every.call(this, function(t, n) {
                            return !1 !== e.call(t, n, t)
                        }),
                            this
                    },
                    filter: function t(e) {
                        return M(e) ? this.not(this.not(e)) : n(c.call(this, function(t) {
                            return P.matches(t, e)
                        }))
                    },
                    add: function t(e, r) {
                        return n(C(this.concat(n(e, r))))
                    },
                    is: function t(e) {
                        return this.length > 0 && P.matches(this[0], e)
                    },
                    not: function e(r) {
                        var i = [];
                        if (M(r) && r.call !== t)
                            this.each(function(t) {
                                r.call(this, t) || i.push(this)
                            });
                        else {
                            var o = "string" == typeof r ? this.filter(r) : U(r) && M(r.item) ? a.call(r) : n(r);
                            this.forEach(function(t) {
                                o.indexOf(t) < 0 && i.push(t)
                            })
                        }
                        return n(i)
                    },
                    has: function t(e) {
                        return this.filter(function() {
                            return j(e) ? n.contains(this, e) : n(this).find(e).size()
                        })
                    },
                    eq: function t(e) {
                        return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                    },
                    first: function t() {
                        var e = this[0];
                        return e && !j(e) ? e : n(e)
                    },
                    last: function t() {
                        var e = this[this.length - 1];
                        return e && !j(e) ? e : n(e)
                    },
                    find: function t(e) {
                        var r, a = this;
                        return r = e ? "object" == i()(e) ? n(e).filter(function() {
                            var t = this;
                            return o.some.call(a, function(e) {
                                return n.contains(e, t)
                            })
                        }) : 1 == this.length ? n(P.qsa(this[0], e)) : this.map(function() {
                            return P.qsa(this, e)
                        }) : []
                    },
                    closest: function t(e, r) {
                        var o = this[0]
                            , a = !1;
                        for ("object" == i()(e) && (a = n(e)); o && !(a ? a.indexOf(o) >= 0 : P.matches(o, e)); )
                            o = o !== r && !D(o) && o.parentNode;
                        return n(o)
                    },
                    parents: function t(e) {
                        for (var r = [], i = this; i.length > 0; )
                            i = n.map(i, function(t) {
                                if ((t = t.parentNode) && !D(t) && r.indexOf(t) < 0)
                                    return r.push(t),
                                        t
                            });
                        return K(r, e)
                    },
                    parent: function t(e) {
                        return K(C(this.pluck("parentNode")), e)
                    },
                    children: function t(e) {
                        return K(this.map(function() {
                            return Q(this)
                        }), e)
                    },
                    contents: function t() {
                        return this.map(function() {
                            return a.call(this.childNodes)
                        })
                    },
                    siblings: function t(e) {
                        return K(this.map(function(t, e) {
                            return c.call(Q(e.parentNode), function(t) {
                                return t !== e
                            })
                        }), e)
                    },
                    empty: function t() {
                        return this.each(function() {
                            this.innerHTML = ""
                        })
                    },
                    pluck: function t(e) {
                        return n.map(this, function(t) {
                            return t[e]
                        })
                    },
                    show: function t() {
                        return this.each(function() {
                            "none" == this.style.display && (this.style.display = ""),
                            "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = H(this.nodeName))
                        })
                    },
                    replaceWith: function t(e) {
                        return this.before(e).remove()
                    },
                    wrap: function t(e) {
                        var r = M(e);
                        if (this[0] && !r)
                            var i = n(e).get(0)
                                , o = i.parentNode || this.length > 1;
                        return this.each(function(t) {
                            n(this).wrapAll(r ? e.call(this, t) : o ? i.cloneNode(!0) : i)
                        })
                    },
                    wrapAll: function t(e) {
                        if (this[0]) {
                            var r;
                            for (n(this[0]).before(e = n(e)); (r = e.children()).length; )
                                e = r.first();
                            n(e).append(this)
                        }
                        return this
                    },
                    wrapInner: function t(e) {
                        var r = M(e);
                        return this.each(function(t) {
                            var i = n(this)
                                , o = i.contents()
                                , a = r ? e.call(this, t) : e;
                            o.length ? o.wrapAll(a) : i.append(a)
                        })
                    },
                    unwrap: function t() {
                        return this.parent().each(function() {
                            n(this).replaceWith(n(this).children())
                        }),
                            this
                    },
                    clone: function t() {
                        return this.map(function() {
                            return this.cloneNode(!0)
                        })
                    },
                    hide: function t() {
                        return this.css("display", "none")
                    },
                    toggle: function e(r) {
                        return this.each(function() {
                            var e = n(this);
                            (r === t ? "none" == e.css("display") : r) ? e.show() : e.hide()
                        })
                    },
                    prev: function t(e) {
                        return n(this.pluck("previousElementSibling")).filter(e || "*")
                    },
                    next: function t(e) {
                        return n(this.pluck("nextElementSibling")).filter(e || "*")
                    },
                    html: function t(e) {
                        return 0 in arguments ? this.each(function(t) {
                            var r = this.innerHTML;
                            n(this).empty().append(V(this, e, t, r))
                        }) : 0 in this ? this[0].innerHTML : null
                    },
                    text: function t(e) {
                        return 0 in arguments ? this.each(function(t) {
                            var n = V(this, e, t, this.textContent);
                            this.textContent = null == n ? "" : "" + n
                        }) : 0 in this ? this[0].textContent : null
                    },
                    attr: function n(r, i) {
                        var o;
                        return "string" != typeof r || 1 in arguments ? this.each(function(t) {
                            if (1 === this.nodeType)
                                if (j(r))
                                    for (e in r)
                                        J(this, e, r[e]);
                                else
                                    J(this, r, V(this, i, t, this.getAttribute(r)))
                        }) : this.length && 1 === this[0].nodeType ? !(o = this[0].getAttribute(r)) && r in this[0] ? this[0][r] : o : t
                    },
                    removeAttr: function t(e) {
                        return this.each(function() {
                            1 === this.nodeType && J(this, e)
                        })
                    },
                    prop: function t(e, n) {
                        return e = A[e] || e,
                            1 in arguments ? this.each(function(t) {
                                this[e] = V(this, n, t, this[e])
                            }) : this[0] && this[0][e]
                    },
                    data: function e(n, r) {
                        var i = "data-" + n.replace(g, "-$1").toLowerCase()
                            , e = 1 in arguments ? this.attr(i, r) : this.attr(i);
                        return null !== e ? z(e) : t
                    },
                    val: function t(e) {
                        return 0 in arguments ? this.each(function(t) {
                            this.value = V(this, e, t, this.value)
                        }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                            return this.selected
                        }).pluck("value") : this[0].value)
                    },
                    offset: function t(e) {
                        if (e)
                            return this.each(function(t) {
                                var r = n(this)
                                    , i = V(this, e, t, r.offset())
                                    , o = r.offsetParent().offset()
                                    , a = {
                                    top: i.top - o.top,
                                    left: i.left - o.left
                                };
                                "static" == r.css("position") && (a.position = "relative"),
                                    r.css(a)
                            });
                        if (!this.length)
                            return null;
                        var r = this[0].getBoundingClientRect();
                        return {
                            left: r.left + window.pageXOffset,
                            top: r.top + window.pageYOffset,
                            width: Math.round(r.width),
                            height: Math.round(r.height)
                        }
                    },
                    css: function t(r, i) {
                        if (arguments.length < 2) {
                            var o = this[0]
                                , a = getComputedStyle(o, "");
                            if (!o)
                                return;
                            if ("string" == typeof r)
                                return o.style[k(r)] || a.getPropertyValue(r);
                            if (I(r)) {
                                var c = {};
                                return n.each(I(r) ? r : [r], function(t, e) {
                                    c[e] = o.style[k(e)] || a.getPropertyValue(e)
                                }),
                                    c
                            }
                        }
                        var t = "";
                        if ("string" == N(r))
                            i || 0 === i ? t = G(r) + ":" + F(r, i) : this.each(function() {
                                this.style.removeProperty(G(r))
                            });
                        else
                            for (e in r)
                                r[e] || 0 === r[e] ? t += G(e) + ":" + F(e, r[e]) + ";" : this.each(function() {
                                    this.style.removeProperty(G(e))
                                });
                        return this.each(function() {
                            this.style.cssText += ";" + t
                        })
                    },
                    index: function t(e) {
                        return e ? this.indexOf(n(e)[0]) : this.parent().children().indexOf(this[0])
                    },
                    hasClass: function t(e) {
                        return !!e && o.some.call(this, function(t) {
                            return this.test(X(t))
                        }, W(e))
                    },
                    addClass: function t(e) {
                        return e ? this.each(function(t) {
                            r = [];
                            var i = X(this), o;
                            V(this, e, t, i).split(/\s+/g).forEach(function(t) {
                                n(this).hasClass(t) || r.push(t)
                            }, this),
                            r.length && X(this, i + (i ? " " : "") + r.join(" "))
                        }) : this
                    },
                    removeClass: function e(n) {
                        return this.each(function(e) {
                            if (n === t)
                                return X(this, "");
                            r = X(this),
                                V(this, n, e, r).split(/\s+/g).forEach(function(t) {
                                    r = r.replace(W(t), " ")
                                }),
                                X(this, r.trim())
                        })
                    },
                    toggleClass: function e(r, i) {
                        return r ? this.each(function(e) {
                            var o = n(this), a;
                            V(this, r, e, X(this)).split(/\s+/g).forEach(function(e) {
                                (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
                            })
                        }) : this
                    },
                    scrollTop: function e(n) {
                        if (this.length) {
                            var r = "scrollTop"in this[0];
                            return n === t ? r ? this[0].scrollTop : this[0].pageYOffset : this.each(r ? function() {
                                        this.scrollTop = n
                                    }
                                    : function() {
                                        this.scrollTo(this.scrollX, n)
                                    }
                            )
                        }
                    },
                    scrollLeft: function e(n) {
                        if (this.length) {
                            var r = "scrollLeft"in this[0];
                            return n === t ? r ? this[0].scrollLeft : this[0].pageXOffset : this.each(r ? function() {
                                        this.scrollLeft = n
                                    }
                                    : function() {
                                        this.scrollTo(n, this.scrollY)
                                    }
                            )
                        }
                    },
                    position: function t() {
                        if (this.length) {
                            var e = this[0]
                                , r = this.offsetParent()
                                , i = this.offset()
                                , o = m.test(r[0].nodeName) ? {
                                top: 0,
                                left: 0
                            } : r.offset();
                            return i.top -= parseFloat(n(e).css("margin-top")) || 0,
                                i.left -= parseFloat(n(e).css("margin-left")) || 0,
                                o.top += parseFloat(n(r[0]).css("border-top-width")) || 0,
                                o.left += parseFloat(n(r[0]).css("border-left-width")) || 0,
                                {
                                    top: i.top - o.top,
                                    left: i.left - o.left
                                }
                        }
                    },
                    offsetParent: function t() {
                        return this.map(function() {
                            for (var t = this.offsetParent || u.body; t && !m.test(t.nodeName) && "static" == n(t).css("position"); )
                                t = t.offsetParent;
                            return t
                        })
                    }
                },
                n.fn.detach = n.fn.remove,
                ["width", "height"].forEach(function(e) {
                    var r = e.replace(/./, function(t) {
                        return t[0].toUpperCase()
                    });
                    n.fn[e] = function(i) {
                        var o, a = this[0];
                        return i === t ? R(a) ? a["inner" + r] : D(a) ? a.documentElement["scroll" + r] : (o = this.offset()) && o[e] : this.each(function(t) {
                            (a = n(this)).css(e, V(this, i, t, a[e]()))
                        })
                    }
                }),
                w.forEach(function(t, e) {
                    var r = e % 2;
                    n.fn[t] = function() {
                        var t, i = n.map(arguments, function(e) {
                            return "object" == (t = N(e)) || "array" == t || null == e ? e : P.fragment(e)
                        }), o, a = this.length > 1;
                        return i.length < 1 ? this : this.each(function(t, c) {
                            o = r ? c : c.parentNode,
                                c = 0 == e ? c.nextSibling : 1 == e ? c.firstChild : 2 == e ? c : null;
                            var s = n.contains(u.documentElement, o);
                            i.forEach(function(t) {
                                if (a)
                                    t = t.cloneNode(!0);
                                else if (!o)
                                    return n(t).remove();
                                o.insertBefore(t, c),
                                s && $(t, function(t) {
                                    null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                                })
                            })
                        })
                    }
                        ,
                        n.fn[r ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
                            return n(e)[t](this),
                                this
                        }
                }),
                P.Z.prototype = n.fn,
                P.uniq = C,
                P.deserializeValue = z,
                n.zepto = P,
                n
        }(), tt, et, nt;
        e.default = Z,
            et = [],
            (tt = Z).fn.remove = function() {
                return this.each(function() {
                    this.parentNode && ("IMG" === this.tagName && (et.push(this),
                        this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
                    nt && clearTimeout(nt),
                        nt = setTimeout(function() {
                            et = []
                        }, 6e4)),
                        this.parentNode.removeChild(this))
                })
            }
            ,
            function(t) {
                t.Callbacks = function(e) {
                    e = t.extend({}, e);
                    var n, r, i, o, a, c, u = [], s = !e.once && [], l = function t(d) {
                        for (n = e.memory && d,
                                 r = !0,
                                 c = o || 0,
                                 o = 0,
                                 a = u.length,
                                 i = !0; u && c < a; ++c)
                            if (!1 === u[c].apply(d[0], d[1]) && e.stopOnFalse) {
                                n = !1;
                                break
                            }
                        i = !1,
                        u && (s ? s.length && l(s.shift()) : n ? u.length = 0 : f.disable())
                    }, f = {
                        add: function r() {
                            if (u) {
                                var c = u.length
                                    , s = function n(r) {
                                    t.each(r, function(t, n) {
                                        "function" == typeof n ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" != typeof n && s(n)
                                    })
                                };
                                s(arguments),
                                    i ? a = u.length : n && (o = c,
                                        l(n))
                            }
                            return this
                        },
                        remove: function e() {
                            return u && t.each(arguments, function(e, n) {
                                for (var r; (r = t.inArray(n, u, r)) > -1; )
                                    u.splice(r, 1),
                                    i && (r <= a && --a,
                                    r <= c && --c)
                            }),
                                this
                        },
                        has: function e(n) {
                            return !(!u || !(n ? t.inArray(n, u) > -1 : u.length))
                        },
                        empty: function t() {
                            return a = u.length = 0,
                                this
                        },
                        disable: function t() {
                            return u = s = n = void 0,
                                this
                        },
                        disabled: function t() {
                            return !u
                        },
                        lock: function t() {
                            return s = void 0,
                            n || f.disable(),
                                this
                        },
                        locked: function t() {
                            return !s
                        },
                        fireWith: function t(e, n) {
                            return !u || r && !s || (n = [e, (n = n || []).slice ? n.slice() : n],
                                i ? s.push(n) : l(n)),
                                this
                        },
                        fire: function t() {
                            return f.fireWith(this, arguments)
                        },
                        fired: function t() {
                            return !!r
                        }
                    };
                    return f
                }
            }(Z),
            function(t) {
                var e = {}
                    , n = t.fn.data
                    , r = t.camelCase
                    , i = t.expando = "Zepto" + +new Date
                    , o = [];
                function a(o, a) {
                    var u = o[i]
                        , s = u && e[u];
                    if (void 0 === a)
                        return s || c(o);
                    if (s) {
                        if (a in s)
                            return s[a];
                        var l = r(a);
                        if (l in s)
                            return s[l]
                    }
                    return n.call(t(o), a)
                }
                function c(n, o, a) {
                    var c = n[i] || (n[i] = ++t.uuid)
                        , s = e[c] || (e[c] = u(n));
                    return void 0 !== o && (s[r(o)] = a),
                        s
                }
                function u(e) {
                    var n = {};
                    return t.each(e.attributes || o, function(e, i) {
                        0 == i.name.indexOf("data-") && (n[r(i.name.replace("data-", ""))] = t.zepto.deserializeValue(i.value))
                    }),
                        n
                }
                t.fn.data = function(e, n) {
                    return void 0 === n ? t.isPlainObject(e) ? this.each(function(n, r) {
                        t.each(e, function(t, e) {
                            c(r, t, e)
                        })
                    }) : 0 in this ? a(this[0], e) : void 0 : this.each(function() {
                        c(this, e, n)
                    })
                }
                    ,
                    t.fn.removeData = function(n) {
                        return "string" == typeof n && (n = n.split(/\s+/)),
                            this.each(function() {
                                var o = this[i]
                                    , a = o && e[o];
                                a && t.each(n || a, function(t) {
                                    delete a[n ? r(this) : t]
                                })
                            })
                    }
                    ,
                    ["remove", "empty"].forEach(function(e) {
                        var n = t.fn[e];
                        t.fn[e] = function() {
                            var t = this.find("*");
                            return "remove" === e && (t = t.add(this)),
                                t.removeData(),
                                n.call(this)
                        }
                    })
            }(Z),
            function(t) {
                var e = Array.prototype.slice;
                function n(e) {
                    var r = [["resolve", "done", t.Callbacks({
                        once: 1,
                        memory: 1
                    }), "resolved"], ["reject", "fail", t.Callbacks({
                        once: 1,
                        memory: 1
                    }), "rejected"], ["notify", "progress", t.Callbacks({
                        memory: 1
                    })]]
                        , i = "pending"
                        , o = {
                        state: function t() {
                            return i
                        },
                        always: function t() {
                            return a.done(arguments).fail(arguments),
                                this
                        },
                        then: function e() {
                            var i = arguments;
                            return n(function(e) {
                                t.each(r, function(n, r) {
                                    var c = t.isFunction(i[n]) && i[n];
                                    a[r[1]](function() {
                                        var n = c && c.apply(this, arguments);
                                        if (n && t.isFunction(n.promise))
                                            n.promise().done(e.resolve).fail(e.reject).progress(e.notify);
                                        else {
                                            var i = this === o ? e.promise() : this
                                                , a = c ? [n] : arguments;
                                            e[r[0] + "With"](i, a)
                                        }
                                    })
                                }),
                                    i = null
                            }).promise()
                        },
                        promise: function e(n) {
                            return null != n ? t.extend(n, o) : o
                        }
                    }
                        , a = {};
                    return t.each(r, function(t, e) {
                        var n = e[2]
                            , c = e[3];
                        o[e[1]] = n.add,
                        c && n.add(function() {
                            i = c
                        }, r[1 ^ t][2].disable, r[2][2].lock),
                            a[e[0]] = function() {
                                return a[e[0] + "With"](this === a ? o : this, arguments),
                                    this
                            }
                            ,
                            a[e[0] + "With"] = n.fireWith
                    }),
                        o.promise(a),
                    e && e.call(a, a),
                        a
                }
                t.when = function(r) {
                    var i = e.call(arguments), o = i.length, a = 0, c = 1 !== o || r && t.isFunction(r.promise) ? o : 0, u = 1 === c ? r : n(), s, l, f, d = function t(n, r, i) {
                        return function(t) {
                            r[n] = this,
                                i[n] = arguments.length > 1 ? e.call(arguments) : t,
                                i === s ? u.notifyWith(r, i) : --c || u.resolveWith(r, i)
                        }
                    };
                    if (o > 1)
                        for (s = new Array(o),
                                 l = new Array(o),
                                 f = new Array(o); a < o; ++a)
                            i[a] && t.isFunction(i[a].promise) ? i[a].promise().done(d(a, f, i)).fail(u.reject).progress(d(a, l, s)) : --c;
                    return c || u.resolveWith(f, i),
                        u.promise()
                }
                    ,
                    t.Deferred = n
            }(Z),
            function(t) {
                function e(t) {
                    var e = this.os = {}
                        , n = this.browser = {}
                        , r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
                        , i = t.match(/(Android);?[\s\/]+([\d.]+)?/)
                        , o = !!t.match(/\(Macintosh\; Intel /)
                        , a = t.match(/(iPad).*OS\s([\d_]+)/)
                        , c = t.match(/(iPod)(.*OS\s([\d_]+))?/)
                        , u = !a && t.match(/(iPhone\sOS)\s([\d_]+)/)
                        , s = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
                        , l = t.match(/Windows Phone ([\d.]+)/)
                        , f = s && t.match(/TouchPad/)
                        , d = t.match(/Kindle\/([\d.]+)/)
                        , p = t.match(/Silk\/([\d._]+)/)
                        , h = t.match(/(BlackBerry).*Version\/([\d.]+)/)
                        , m = t.match(/(BB10).*Version\/([\d.]+)/)
                        , g = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
                        , v = t.match(/PlayBook/)
                        , w = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/)
                        , y = t.match(/Firefox\/([\d.]+)/)
                        , _ = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
                        , b = !w && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
                        , O = b || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
                    (n.webkit = !!r) && (n.version = r[1]),
                    i && (e.android = !0,
                        e.version = i[2]),
                    u && !c && (e.ios = e.iphone = !0,
                        e.version = u[2].replace(/_/g, ".")),
                    a && (e.ios = e.ipad = !0,
                        e.version = a[2].replace(/_/g, ".")),
                    c && (e.ios = e.ipod = !0,
                        e.version = c[3] ? c[3].replace(/_/g, ".") : null),
                    l && (e.wp = !0,
                        e.version = l[1]),
                    s && (e.webos = !0,
                        e.version = s[2]),
                    f && (e.touchpad = !0),
                    h && (e.blackberry = !0,
                        e.version = h[2]),
                    m && (e.bb10 = !0,
                        e.version = m[2]),
                    g && (e.rimtabletos = !0,
                        e.version = g[2]),
                    v && (n.playbook = !0),
                    d && (e.kindle = !0,
                        e.version = d[1]),
                    p && (n.silk = !0,
                        n.version = p[1]),
                    !p && e.android && t.match(/Kindle Fire/) && (n.silk = !0),
                    w && (n.chrome = !0,
                        n.version = w[1]),
                    y && (n.firefox = !0,
                        n.version = y[1]),
                    _ && (n.ie = !0,
                        n.version = _[1]),
                    O && (o || e.ios) && (n.safari = !0,
                    o && (n.version = O[1])),
                    b && (n.webview = !0),
                        e.tablet = !!(a || v || i && !t.match(/Mobile/) || y && t.match(/Tablet/) || _ && !t.match(/Phone/) && t.match(/Touch/)),
                        e.phone = !(e.tablet || e.ipod || !(i || u || s || h || m || w && t.match(/Android/) || w && t.match(/CriOS\/([\d.]+)/) || y && t.match(/Mobile/) || _ && t.match(/Touch/)))
                }
                e.call(t, navigator.userAgent),
                    t.__detect = e
            }(Z),
            function(t) {
                var e = 1, n, r = Array.prototype.slice, i = t.isFunction, o = function t(e) {
                    return "string" == typeof e
                }, a = {}, c = {}, u = "onfocusin"in window, s = {
                    focus: "focusin",
                    blur: "focusout"
                }, l = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };
                function f(t) {
                    return t._zid || (t._zid = e++)
                }
                function d(t, e, n, r) {
                    if ((e = p(e)).ns)
                        var i = h(e.ns);
                    return (a[f(t)] || []).filter(function(t) {
                        return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || f(t.fn) === f(n)) && (!r || t.sel == r)
                    })
                }
                function p(t) {
                    var e = ("" + t).split(".");
                    return {
                        e: e[0],
                        ns: e.slice(1).sort().join(" ")
                    }
                }
                function h(t) {
                    return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
                }
                function m(t, e) {
                    return t.del && !u && t.e in s || !!e
                }
                function g(t) {
                    return l[t] || u && s[t] || t
                }
                function v(e, r, i, o, c, u, s) {
                    var d = f(e)
                        , h = a[d] || (a[d] = []);
                    r.split(/\s/).forEach(function(r) {
                        if ("ready" == r)
                            return t(document).ready(i);
                        var a = p(r);
                        a.fn = i,
                            a.sel = c,
                        a.e in l && (i = function e(n) {
                                var r = n.relatedTarget;
                                if (!r || r !== this && !t.contains(this, r))
                                    return a.fn.apply(this, arguments)
                            }
                        ),
                            a.del = u;
                        var f = u || i;
                        a.proxy = function(t) {
                            if (!(t = x(t)).isImmediatePropagationStopped()) {
                                t.data = o;
                                var r = f.apply(e, t._args == n ? [t] : [t].concat(t._args));
                                return !1 === r && (t.preventDefault(),
                                    t.stopPropagation()),
                                    r
                            }
                        }
                            ,
                            a.i = h.length,
                            h.push(a),
                        "addEventListener"in e && e.addEventListener(g(a.e), a.proxy, m(a, s))
                    })
                }
                function w(t, e, n, r, i) {
                    var o = f(t);
                    (e || "").split(/\s/).forEach(function(e) {
                        d(t, e, n, r).forEach(function(e) {
                            delete a[o][e.i],
                            "removeEventListener"in t && t.removeEventListener(g(e.e), e.proxy, m(e, i))
                        })
                    })
                }
                c.click = c.mousedown = c.mouseup = c.mousemove = "MouseEvents",
                    t.event = {
                        add: v,
                        remove: w
                    },
                    t.proxy = function(e, n) {
                        var a = 2 in arguments && r.call(arguments, 2);
                        if (i(e)) {
                            var c = function t() {
                                return e.apply(n, a ? a.concat(r.call(arguments)) : arguments)
                            };
                            return c._zid = f(e),
                                c
                        }
                        if (o(n))
                            return a ? (a.unshift(e[n], e),
                                t.proxy.apply(null, a)) : t.proxy(e[n], e);
                        throw new TypeError("expected function")
                    }
                    ,
                    t.fn.bind = function(t, e, n) {
                        return this.on(t, e, n)
                    }
                    ,
                    t.fn.unbind = function(t, e) {
                        return this.off(t, e)
                    }
                    ,
                    t.fn.one = function(t, e, n, r) {
                        return this.on(t, e, n, r, 1)
                    }
                ;
                var y = function t() {
                    return !0
                }
                    , _ = function t() {
                    return !1
                }
                    , b = /^([A-Z]|returnValue$|layer[XY]$)/
                    , O = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };
                function x(e, r) {
                    return !r && e.isDefaultPrevented || (r || (r = e),
                        t.each(O, function(t, n) {
                            var i = r[t];
                            e[t] = function() {
                                return this[n] = y,
                                i && i.apply(r, arguments)
                            }
                                ,
                                e[n] = _
                        }),
                    (r.defaultPrevented !== n ? r.defaultPrevented : "returnValue"in r ? !1 === r.returnValue : r.getPreventDefault && r.getPreventDefault()) && (e.isDefaultPrevented = y)),
                        e
                }
                function E(t) {
                    var e, r = {
                        originalEvent: t
                    };
                    for (e in t)
                        b.test(e) || t[e] === n || (r[e] = t[e]);
                    return x(r, t)
                }
                t.fn.delegate = function(t, e, n) {
                    return this.on(e, t, n)
                }
                    ,
                    t.fn.undelegate = function(t, e, n) {
                        return this.off(e, t, n)
                    }
                    ,
                    t.fn.live = function(e, n) {
                        return t(document.body).delegate(this.selector, e, n),
                            this
                    }
                    ,
                    t.fn.die = function(e, n) {
                        return t(document.body).undelegate(this.selector, e, n),
                            this
                    }
                    ,
                    t.fn.on = function(e, a, c, u, s) {
                        var l, f, d = this;
                        return e && !o(e) ? (t.each(e, function(t, e) {
                            d.on(t, a, c, e, s)
                        }),
                            d) : (o(a) || i(u) || !1 === u || (u = c,
                            c = a,
                            a = n),
                        (i(c) || !1 === c) && (u = c,
                            c = n),
                        !1 === u && (u = _),
                            d.each(function(n, i) {
                                s && (l = function t(e) {
                                        return w(i, e.type, u),
                                            u.apply(this, arguments)
                                    }
                                ),
                                a && (f = function e(n) {
                                        var o, c = t(n.target).closest(a, i).get(0);
                                        if (c && c !== i)
                                            return o = t.extend(E(n), {
                                                currentTarget: c,
                                                liveFired: i
                                            }),
                                                (l || u).apply(c, [o].concat(r.call(arguments, 1)))
                                    }
                                ),
                                    v(i, e, u, c, a, f || l)
                            }))
                    }
                    ,
                    t.fn.off = function(e, r, a) {
                        var c = this;
                        return e && !o(e) ? (t.each(e, function(t, e) {
                            c.off(t, r, e)
                        }),
                            c) : (o(r) || i(a) || !1 === a || (a = r,
                            r = n),
                        !1 === a && (a = _),
                            c.each(function() {
                                w(this, e, a, r)
                            }))
                    }
                    ,
                    t.fn.trigger = function(e, n) {
                        return (e = o(e) || t.isPlainObject(e) ? t.Event(e) : x(e))._args = n,
                            this.each(function() {
                                "dispatchEvent"in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
                            })
                    }
                    ,
                    t.fn.triggerHandler = function(e, n) {
                        var r, i;
                        return this.each(function(a, c) {
                            (r = E(o(e) ? t.Event(e) : e))._args = n,
                                r.target = c,
                                t.each(d(c, e.type || e), function(t, e) {
                                    if (i = e.proxy(r),
                                        r.isImmediatePropagationStopped())
                                        return !1
                                })
                        }),
                            i
                    }
                    ,
                    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
                        t.fn[e] = function(t) {
                            return t ? this.bind(e, t) : this.trigger(e)
                        }
                    }),
                    ["focus", "blur"].forEach(function(e) {
                        t.fn[e] = function(t) {
                            return t ? this.bind(e, t) : this.each(function() {
                                try {
                                    this[e]()
                                } catch (t) {}
                            }),
                                this
                        }
                    }),
                    t.Event = function(t, e) {
                        o(t) || (t = (e = t).type);
                        var n = document.createEvent(c[t] || "Events")
                            , r = !0;
                        if (e)
                            for (var i in e)
                                "bubbles" == i ? r = !!e[i] : n[i] = e[i];
                        return n.initEvent(t, r, !0),
                            x(n)
                    }
            }(Z),
            function(t) {
                t.fn.serializeArray = function() {
                    var e, n, r = [];
                    return t([].slice.call(this.get(0).elements)).each(function() {
                        e = t(this),
                            n = e.attr("type"),
                        "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != n && "reset" != n && "button" != n && ("radio" != n && "checkbox" != n || this.checked) && r.push({
                            name: e.attr("name"),
                            value: e.val()
                        })
                    }),
                        r
                }
                    ,
                    t.fn.serialize = function() {
                        var t = [];
                        return this.serializeArray().forEach(function(e) {
                            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
                        }),
                            t.join("&")
                    }
                    ,
                    t.fn.submit = function(e) {
                        if (e)
                            this.bind("submit", e);
                        else if (this.length) {
                            var n = t.Event("submit");
                            this.eq(0).trigger(n),
                            n.isDefaultPrevented() || this.get(0).submit()
                        }
                        return this
                    }
            }(Z),
            function(t, e) {
                var n = "", r, o, a, c = {
                    Webkit: "webkit",
                    Moz: "",
                    O: "o"
                }, u, s = window.document.createElement("div"), l = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, f, d, p, h, m, g, v, w, y, _ = {};
                function b(t) {
                    return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
                }
                function O(t) {
                    return r ? r + t : t.toLowerCase()
                }
                t.each(c, function(t, i) {
                    if (s.style[t + "TransitionProperty"] !== e)
                        return n = "-" + t.toLowerCase() + "-",
                            r = i,
                            !1
                }),
                    f = n + "transform",
                    _[d = n + "transition-property"] = _[p = n + "transition-duration"] = _[m = n + "transition-delay"] = _[h = n + "transition-timing-function"] = _[g = n + "animation-name"] = _[v = n + "animation-duration"] = _[y = n + "animation-delay"] = _[w = n + "animation-timing-function"] = "",
                    t.fx = {
                        off: r === e && s.style.transitionProperty === e,
                        speeds: {
                            _default: 400,
                            fast: 200,
                            slow: 600
                        },
                        cssPrefix: n,
                        transitionEnd: O("TransitionEnd"),
                        animationEnd: O("AnimationEnd")
                    },
                    t.fn.animate = function(n, r, i, o, a) {
                        return t.isFunction(r) && (o = r,
                            i = e,
                            r = e),
                        t.isFunction(i) && (o = i,
                            i = e),
                        t.isPlainObject(r) && (i = r.easing,
                            o = r.complete,
                            a = r.delay,
                            r = r.duration),
                        r && (r = ("number" == typeof r ? r : t.fx.speeds[r] || t.fx.speeds._default) / 1e3),
                        a && (a = parseFloat(a) / 1e3),
                            this.anim(n, r, i, o, a)
                    }
                    ,
                    t.fn.anim = function(n, r, o, a, c) {
                        var u, s = {}, O, x = "", E = this, T, P = t.fx.transitionEnd, k = !1;
                        if (r === e && (r = t.fx.speeds._default / 1e3),
                        c === e && (c = 0),
                        t.fx.off && (r = 0),
                        "string" == typeof n)
                            s[g] = n,
                                s[v] = r + "s",
                                s[y] = c + "s",
                                s[w] = o || "linear",
                                P = t.fx.animationEnd;
                        else {
                            for (u in O = [],
                                n)
                                l.test(u) ? x += u + "(" + n[u] + ") " : (s[u] = n[u],
                                    O.push(b(u)));
                            x && (s[f] = x,
                                O.push(f)),
                            r > 0 && "object" === i()(n) && (s[d] = O.join(", "),
                                s[p] = r + "s",
                                s[m] = c + "s",
                                s[h] = o || "linear")
                        }
                        return T = function e(n) {
                            if (void 0 !== n) {
                                if (n.target !== n.currentTarget)
                                    return;
                                t(n.target).unbind(P, T)
                            } else
                                t(this).unbind(P, T);
                            k = !0,
                                t(this).css(_),
                            a && a.call(this)
                        }
                            ,
                        r > 0 && (this.bind(P, T),
                            setTimeout(function() {
                                k || T.call(E)
                            }, 1e3 * r + 25)),
                        this.size() && this.get(0).clientLeft,
                            this.css(s),
                        r <= 0 && setTimeout(function() {
                            E.each(function() {
                                T.call(this)
                            })
                        }, 0),
                            this
                    }
                    ,
                    s = null
            }(Z),
            function(t) {
                if (t.os.ios) {
                    var e = function t(e) {
                        return "tagName"in e ? e : e.parentNode
                    }, n = {}, r;
                    t(document).bind("gesturestart", function(t) {
                        var r = Date.now()
                            , i = r - (n.last || r);
                        n.target = e(t.target),
                            n.e1 = t.scale,
                            n.last = r
                    }).bind("gesturechange", function(t) {
                        n.e2 = t.scale
                    }).bind("gestureend", function(e) {
                        n.e2 > 0 ? (0 != Math.abs(n.e1 - n.e2) && t(n.target).trigger("pinch") && t(n.target).trigger("pinch" + (n.e1 - n.e2 > 0 ? "In" : "Out")),
                            n.e1 = n.e2 = n.last = 0) : "last"in n && (n = {})
                    }),
                        ["pinch", "pinchIn", "pinchOut"].forEach(function(e) {
                            t.fn[e] = function(t) {
                                return this.bind(e, t)
                            }
                        })
                }
            }(Z),
            function(t) {
                String.prototype.trim === t && (String.prototype.trim = function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    }
                ),
                Array.prototype.reduce === t && (Array.prototype.reduce = function(e) {
                        if (null == this)
                            throw new TypeError;
                        var n = Object(this), r = n.length >>> 0, i = 0, o;
                        if ("function" != typeof e)
                            throw new TypeError;
                        if (0 == r && 1 == arguments.length)
                            throw new TypeError;
                        if (arguments.length >= 2)
                            o = arguments[1];
                        else
                            for (; ; ) {
                                if (i in n) {
                                    o = n[i++];
                                    break
                                }
                                if (++i >= r)
                                    throw new TypeError
                            }
                        for (; i < r; )
                            i in n && (o = e.call(t, o, n[i], i, n)),
                                i++;
                        return o
                    }
                )
            }(),
            function(t) {
                var e = t.zepto
                    , n = e.qsa
                    , r = e.matches;
                function i(e) {
                    return !(!(e = t(e)).width() && !e.height()) && "none" !== e.css("display")
                }
                var o = t.expr[":"] = {
                    visible: function t() {
                        if (i(this))
                            return this
                    },
                    hidden: function t() {
                        if (!i(this))
                            return this
                    },
                    selected: function t() {
                        if (this.selected)
                            return this
                    },
                    checked: function t() {
                        if (this.checked)
                            return this
                    },
                    parent: function t() {
                        return this.parentNode
                    },
                    first: function t(e) {
                        if (0 === e)
                            return this
                    },
                    last: function t(e, n) {
                        if (e === n.length - 1)
                            return this
                    },
                    eq: function t(e, n, r) {
                        if (e === r)
                            return this
                    },
                    contains: function e(n, r, i) {
                        if (t(this).text().indexOf(i) > -1)
                            return this
                    },
                    has: function t(n, r, i) {
                        if (e.qsa(this, i).length)
                            return this
                    }
                }
                    , a = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*")
                    , c = /^\s*>/
                    , u = "Zepto" + +new Date;
                function s(t, e) {
                    t = t.replace(/=#\]/g, '="#"]');
                    var n, r, i = a.exec(t);
                    if (i && i[2]in o && (n = o[i[2]],
                        r = i[3],
                        t = i[1],
                        r)) {
                        var c = Number(r);
                        r = isNaN(c) ? r.replace(/^["']|["']$/g, "") : c
                    }
                    return e(t, n, r)
                }
                e.qsa = function(r, i) {
                    return s(i, function(o, a, s) {
                        try {
                            var l;
                            !o && a ? o = "*" : c.test(o) && (l = t(r).addClass(u),
                                o = "." + u + " " + o);
                            var f = n(r, o)
                        } catch (t) {
                            throw console.error("error performing selector: %o", i),
                                t
                        } finally {
                            l && l.removeClass(u)
                        }
                        return a ? e.uniq(t.map(f, function(t, e) {
                            return a.call(t, e, f, s)
                        })) : f
                    })
                }
                    ,
                    e.matches = function(t, e) {
                        return s(e, function(e, n, i) {
                            return (!e || r(t, e)) && (!n || n.call(t, null, i) === t)
                        })
                    }
            }(Z),
            function(t) {
                t.fn.end = function() {
                    return this.prevObject || t()
                }
                    ,
                    t.fn.andSelf = function() {
                        return this.add(this.prevObject || t())
                    }
                    ,
                    "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e) {
                        var n = t.fn[e];
                        t.fn[e] = function() {
                            var t = n.apply(this, arguments);
                            return t.prevObject = this,
                                t
                        }
                    })
            }(Z),
            function(t) {
                var e = {}, n, r, i, o, a = 750, c;
                function u(t, e, n, r) {
                    return Math.abs(t - e) >= Math.abs(n - r) ? t - e > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
                }
                function s() {
                    o = null,
                    e.last && (e.el.trigger("longTap"),
                        e = {})
                }
                function l() {
                    o && clearTimeout(o),
                        o = null
                }
                function f() {
                    n && clearTimeout(n),
                    r && clearTimeout(r),
                    i && clearTimeout(i),
                    o && clearTimeout(o),
                        n = r = i = o = null,
                        e = {}
                }
                function d(t) {
                    return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
                }
                function p(t, e) {
                    return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
                }
                t(document).ready(function() {
                    var h, m, g = 0, v = 0, w, y;
                    "MSGesture"in window && ((c = new MSGesture).target = document.body),
                        t(document).bind("MSGestureEnd", function(t) {
                            var n = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                            n && (e.el.trigger("swipe"),
                                e.el.trigger("swipe" + n))
                        }).on("touchstart MSPointerDown pointerdown", function(r) {
                            (y = p(r, "down")) && !d(r) || (w = y ? r : r.touches[0],
                            r.touches && 1 === r.touches.length && e.x2 && (e.x2 = void 0,
                                e.y2 = void 0),
                                h = Date.now(),
                                m = h - (e.last || h),
                                e.el = t("tagName"in w.target ? w.target : w.target.parentNode),
                            n && clearTimeout(n),
                                e.x1 = w.pageX,
                                e.y1 = w.pageY,
                            m > 0 && m <= 250 && (e.isDoubleTap = !0),
                                e.last = h,
                                o = setTimeout(s, a),
                            c && y && c.addPointer(r.pointerId))
                        }).on("touchmove MSPointerMove pointermove", function(t) {
                            (y = p(t, "move")) && !d(t) || (w = y ? t : t.touches[0],
                                l(),
                                e.x2 = w.pageX,
                                e.y2 = w.pageY,
                                g += Math.abs(e.x1 - e.x2),
                                v += Math.abs(e.y1 - e.y2))
                        }).on("touchend MSPointerUp pointerup", function(o) {
                            (y = p(o, "up")) && !d(o) || (l(),
                                e.x2 && Math.abs(e.x1 - e.x2) > 30 || e.y2 && Math.abs(e.y1 - e.y2) > 30 ? i = setTimeout(function() {
                                    e.el && (e.el.trigger("swipe"),
                                        e.el.trigger("swipe" + u(e.x1, e.x2, e.y1, e.y2))),
                                        e = {}
                                }, 0) : "last"in e && (g < 30 && v < 30 ? r = setTimeout(function() {
                                    var r = t.Event("tap");
                                    r.cancelTouch = f,
                                    e.el && e.el.trigger(r),
                                        e.isDoubleTap ? (e.el && e.el.trigger("doubleTap"),
                                            e = {}) : n = setTimeout(function() {
                                            n = null,
                                            e.el && e.el.trigger("singleTap"),
                                                e = {}
                                        }, 250)
                                }, 0) : e = {}),
                                g = v = 0)
                        }).on("touchcancel MSPointerCancel pointercancel", f),
                        t(window).on("scroll", f)
                }),
                    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
                        t.fn[e] = function(t) {
                            return this.on(e, t)
                        }
                    })
            }(Z),
            function(t) {
                var e = +new Date, n = window.document, r, i, o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, a = /^(?:text|application)\/javascript/i, c = /^(?:text|application)\/xml/i, u = "application/json", s = "text/html", l = /^\s*$/, f = n.createElement("a");
                function d(e, n, r) {
                    var i = t.Event(n);
                    return t(e).trigger(i, r),
                        !i.isDefaultPrevented()
                }
                function p(t, e, r, i) {
                    if (t.global)
                        return d(e || n, r, i)
                }
                function h(e) {
                    e.global && 0 === t.active++ && p(e, null, "ajaxStart")
                }
                function m(e) {
                    e.global && !--t.active && p(e, null, "ajaxStop")
                }
                function g(t, e) {
                    var n = e.context;
                    if (!1 === e.beforeSend.call(n, t, e) || !1 === p(e, n, "ajaxBeforeSend", [t, e]))
                        return !1;
                    p(e, n, "ajaxSend", [t, e])
                }
                function v(t, e, n, r) {
                    var i = n.context
                        , o = "success";
                    n.success.call(i, t, o, e),
                    r && r.resolveWith(i, [t, o, e]),
                        p(n, i, "ajaxSuccess", [e, n, t]),
                        y(o, e, n)
                }
                function w(t, e, n, r, i) {
                    var o = r.context;
                    r.error.call(o, n, e, t),
                    i && i.rejectWith(o, [n, e, t]),
                        p(r, o, "ajaxError", [n, r, t || e]),
                        y(e, n, r)
                }
                function y(t, e, n) {
                    var r = n.context;
                    n.complete.call(r, e, t),
                        p(n, r, "ajaxComplete", [e, n]),
                        m(n)
                }
                function _(t, e, n) {
                    if (n.dataFilter == b)
                        return t;
                    var r = n.context;
                    return n.dataFilter.call(r, t, e)
                }
                function b() {}
                function O(t) {
                    return t && (t = t.split(";", 2)[0]),
                    t && (t == s ? "html" : t == u ? "json" : a.test(t) ? "script" : c.test(t) && "xml") || "text"
                }
                function x(t, e) {
                    return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
                }
                function E(e) {
                    e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
                    !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = x(e.url, e.data),
                        e.data = void 0)
                }
                function T(e, n, r, i) {
                    return t.isFunction(n) && (i = r,
                        r = n,
                        n = void 0),
                    t.isFunction(r) || (i = r,
                        r = void 0),
                        {
                            url: e,
                            data: n,
                            success: r,
                            dataType: i
                        }
                }
                f.href = window.location.href,
                    t.active = 0,
                    t.ajaxJSONP = function(r, i) {
                        if (!("type"in r))
                            return t.ajax(r);
                        var o = r.jsonpCallback, a = (t.isFunction(o) ? o() : o) || "Zepto" + e++, c = n.createElement("script"), u = window[a], s, l = function e(n) {
                            t(c).triggerHandler("error", n || "abort")
                        }, f = {
                            abort: l
                        }, d;
                        return i && i.promise(f),
                            t(c).on("load error", function(e, n) {
                                clearTimeout(d),
                                    t(c).off().remove(),
                                    "error" != e.type && s ? v(s[0], f, r, i) : w(null, n || "error", f, r, i),
                                    window[a] = u,
                                s && t.isFunction(u) && u(s[0]),
                                    u = s = void 0
                            }),
                            !1 === g(f, r) ? (l("abort"),
                                f) : (window[a] = function() {
                                s = arguments
                            }
                                ,
                                c.src = r.url.replace(/\?(.+)=\?/, "?$1=" + a),
                                n.head.appendChild(c),
                            r.timeout > 0 && (d = setTimeout(function() {
                                l("timeout")
                            }, r.timeout)),
                                f)
                    }
                    ,
                    t.ajaxSettings = {
                        type: "GET",
                        beforeSend: b,
                        success: b,
                        error: b,
                        complete: b,
                        context: null,
                        global: !0,
                        xhr: function t() {
                            return new window.XMLHttpRequest
                        },
                        accepts: {
                            script: "text/javascript, application/javascript, application/x-javascript",
                            json: u,
                            xml: "application/xml, text/xml",
                            html: s,
                            text: "text/plain"
                        },
                        crossDomain: !1,
                        timeout: 0,
                        processData: !0,
                        cache: !0,
                        dataFilter: b
                    },
                    t.ajax = function(e) {
                        var o = t.extend({}, e || {}), a = t.Deferred && t.Deferred(), c, u;
                        for (r in t.ajaxSettings)
                            void 0 === o[r] && (o[r] = t.ajaxSettings[r]);
                        h(o),
                        o.crossDomain || ((c = n.createElement("a")).href = o.url,
                            c.href = c.href,
                            o.crossDomain = f.protocol + "//" + f.host != c.protocol + "//" + c.host),
                        o.url || (o.url = window.location.toString()),
                        (u = o.url.indexOf("#")) > -1 && (o.url = o.url.slice(0, u)),
                            E(o);
                        var s = o.dataType
                            , d = /\?.+=\?/.test(o.url);
                        if (d && (s = "jsonp"),
                        !1 !== o.cache && (e && !0 === e.cache || "script" != s && "jsonp" != s) || (o.url = x(o.url, "_=" + Date.now())),
                        "jsonp" == s)
                            return d || (o.url = x(o.url, o.jsonp ? o.jsonp + "=?" : !1 === o.jsonp ? "" : "callback=?")),
                                t.ajaxJSONP(o, a);
                        var p = o.accepts[s], m = {}, y = function t(e, n) {
                            m[e.toLowerCase()] = [e, n]
                        }, T = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol, P = o.xhr(), k = P.setRequestHeader, C;
                        if (a && a.promise(P),
                        o.crossDomain || y("X-Requested-With", "XMLHttpRequest"),
                            y("Accept", p || "*/*"),
                        (p = o.mimeType || p) && (p.indexOf(",") > -1 && (p = p.split(",", 2)[0]),
                        P.overrideMimeType && P.overrideMimeType(p)),
                        (o.contentType || !1 !== o.contentType && o.data && "GET" != o.type.toUpperCase()) && y("Content-Type", o.contentType || "application/x-www-form-urlencoded"),
                            o.headers)
                            for (i in o.headers)
                                y(i, o.headers[i]);
                        if (P.setRequestHeader = y,
                            P.onreadystatechange = function() {
                                if (4 == P.readyState) {
                                    P.onreadystatechange = b,
                                        clearTimeout(C);
                                    var e, n = !1;
                                    if (P.status >= 200 && P.status < 300 || 304 == P.status || 0 == P.status && "file:" == T) {
                                        if (s = s || O(o.mimeType || P.getResponseHeader("content-type")),
                                        "arraybuffer" == P.responseType || "blob" == P.responseType)
                                            e = P.response;
                                        else {
                                            e = P.responseText;
                                            try {
                                                e = _(e, s, o),
                                                    "script" == s ? (0,
                                                        eval)(e) : "xml" == s ? e = P.responseXML : "json" == s && (e = l.test(e) ? null : t.parseJSON(e))
                                            } catch (t) {
                                                n = t
                                            }
                                            if (n)
                                                return w(n, "parsererror", P, o, a)
                                        }
                                        v(e, P, o, a)
                                    } else
                                        X("Illegal Error Code", "code: ".concat(P.status), {
                                            xhr: P,
                                            request: o
                                        }),
                                            $("illegal_code", 1, {
                                                code: P.status,
                                                path: (o.url || "").split("?")[0]
                                            }),
                                            w(P.statusText || null, P.status ? "error" : "abort", P, o, a)
                                }
                            }
                            ,
                        !1 === g(P, o))
                            return P.abort(),
                                w(null, "abort", P, o, a),
                                P;
                        var S = !("async"in o) || o.async;
                        if (window.top === window)
                            try {
                                o.method = o.type || "GET",
                                    H5guard.sign(o).then(function(t) {
                                        if (!e.guardIngnore && o.url.match(/\.waimai\.test\.sankuai|\.waimai\.st\.meituan|\.waimai\.meituan/) && P.setRequestHeader("mtgsig", t.headers.mtgsig),
                                            P.open(o.type, o.url, S, o.username, o.password),
                                            o.xhrFields)
                                            for (i in o.xhrFields)
                                                P[i] = o.xhrFields[i];
                                        for (i in m)
                                            k.apply(P, m[i]);
                                        o.timeout > 0 && (C = setTimeout(function() {
                                            P.onreadystatechange = b,
                                                P.abort(),
                                                w(null, "timeout", P, o, a)
                                        }, o.timeout)),
                                            P.send(o.data ? o.data : null)
                                    })
                            } catch (t) {
                                if (z("\u98ce\u63a7\u62a5\u9519", "h5guard\u52a0\u7b7e\u5931\u8d25", {
                                    error: t
                                }),
                                    P.open(o.type, o.url, S, o.username, o.password),
                                    o.xhrFields)
                                    for (i in o.xhrFields)
                                        P[i] = o.xhrFields[i];
                                for (i in m)
                                    k.apply(P, m[i]);
                                o.timeout > 0 && (C = setTimeout(function() {
                                    P.onreadystatechange = b,
                                        P.abort(),
                                        w(null, "timeout", P, o, a)
                                }, o.timeout)),
                                    P.send(o.data ? o.data : null)
                            }
                        else {
                            if (P.open(o.type, o.url, S, o.username, o.password),
                                o.xhrFields)
                                for (i in o.xhrFields)
                                    P[i] = o.xhrFields[i];
                            for (i in m)
                                k.apply(P, m[i]);
                            o.timeout > 0 && (C = setTimeout(function() {
                                P.onreadystatechange = b,
                                    P.abort(),
                                    w(null, "timeout", P, o, a)
                            }, o.timeout)),
                                P.send(o.data ? o.data : null)
                        }
                        return P
                    }
                    ,
                    t.get = function() {
                        return t.ajax(T.apply(null, arguments))
                    }
                    ,
                    t.post = function() {
                        var e = T.apply(null, arguments);
                        return e.type = "POST",
                            t.ajax(e)
                    }
                    ,
                    t.getJSON = function() {
                        var e = T.apply(null, arguments);
                        return e.dataType = "json",
                            t.ajax(e)
                    }
                    ,
                    t.fn.load = function(e, n, r) {
                        if (!this.length)
                            return this;
                        var i = this, a = e.split(/\s/), c, u = T(e, n, r), s = u.success;
                        return a.length > 1 && (u.url = a[0],
                            c = a[1]),
                            u.success = function(e) {
                                i.html(c ? t("<div>").html(e.replace(o, "")).find(c) : e),
                                s && s.apply(i, arguments)
                            }
                            ,
                            t.ajax(u),
                            this
                    }
                ;
                var P = encodeURIComponent;
                function k(e, n, r, i) {
                    var o, a = t.isArray(n), c = t.isPlainObject(n);
                    t.each(n, function(n, u) {
                        o = t.type(u),
                        i && (n = r ? i : i + "[" + (c || "object" == o || "array" == o ? n : "") + "]"),
                            !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? k(e, u, r, n) : e.add(n, u)
                    })
                }
                t.param = function(e, n) {
                    var r = [];
                    return r.add = function(e, n) {
                        t.isFunction(n) && (n = n()),
                        null == n && (n = ""),
                            this.push(P(e) + "=" + P(n))
                    }
                        ,
                        k(r, e, n),
                        r.join("&").replace(/%20/g, "+")
                }
            }(Z),
            function(t) {
                "__proto__"in {} || t.extend(t.zepto, {
                    Z: function e(n, r) {
                        return n = n || [],
                            t.extend(n, t.fn),
                            n.selector = r || "",
                            n.__Z = !0,
                            n
                    },
                    isZ: function e(n) {
                        return "array" === t.type(n) && "__Z"in n
                    }
                });
                try {
                    getComputedStyle(void 0)
                } catch (t) {
                    var e = getComputedStyle;
                    window.getComputedStyle = function(t) {
                        try {
                            return e(t)
                        } catch (t) {
                            return null
                        }
                    }
                }
            }(Z)
    },
    73049: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(5219);
        e.default = r.default
    },
    42264: function(t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, {
                QUICK_APP: function() {
                    return Q
                },
                wm_order_channel: function() {
                    return K
                },
                IS_TINY_PKG: function() {
                    return $
                },
                IS_QUICKAPP: function() {
                    return Z
                },
                IS_INQUICKAPP: function() {
                    return tt
                },
                IS_WECHAT_EDIT: function() {
                    return et
                },
                IS_MTJJ: function() {
                    return nt
                },
                IS_HWSH: function() {
                    return rt
                },
                IS_UNICOM: function() {
                    return it
                },
                IS_TUAN_OR_WAIMAI_APP: function() {
                    return ot
                },
                IS_SQCABJ: function() {
                    return at
                },
                IS_GROUP_MEAL: function() {
                    return ct
                },
                IS_KYDX: function() {
                    return ut
                },
                IS_QYTCWM: function() {
                    return st
                },
                IS_BDXCX: function() {
                    return lt
                },
                IS_BANK: function() {
                    return ft
                },
                IS_JSYH: function() {
                    return dt
                },
                IS_MSYH: function() {
                    return pt
                },
                IS_CCB: function() {
                    return ht
                },
                isHarmony: function() {
                    return mt
                },
                IS_TCQD_LSW: function() {
                    return gt
                },
                IS_TCQD_LSW_TWO: function() {
                    return vt
                },
                IS_TCQD_KG: function() {
                    return wt
                },
                IS_TCQD_ZSYH: function() {
                    return yt
                },
                IS_TCQD_GDYH: function() {
                    return _t
                },
                IS_TCQD_YB: function() {
                    return bt
                },
                IS_TCQD_OR_TCZX: function() {
                    return Ot
                },
                IS_TCQD_OR_TCZX_WITH_COMMON_SOP: function() {
                    return xt
                },
                IS_QYTC_CHANNEL: function() {
                    return Et
                },
                IS_QYTC_CHANNEL_OR_LITE: function() {
                    return Tt
                },
                TCQD_FLAG: function() {
                    return Pt
                },
                TCQD_LSW_FLAG: function() {
                    return kt
                },
                TCQD_COMMON_FLAG: function() {
                    return Ct
                },
                TCQD_COMMON_USER_FLAG: function() {
                    return St
                },
                TCQD_LSW_USER_FLAG: function() {
                    return At
                },
                TCQD_COMMON_FLAG_KEY: function() {
                    return It
                },
                TCQD_COMMON_FLAG_KEYVALUE_SPLIT: function() {
                    return Nt
                },
                TCQD_COMMON_FLAG_MULIT_SPLIT: function() {
                    return Mt
                },
                GET_TCQD_COMMON_FLAG_OBJ: function() {
                    return Rt
                },
                SET_TCQD_COMMON_FLAG_KEY: function() {
                    return Dt
                },
                GROUP_COMMMON_LOGIN: function() {
                    return Lt
                },
                GROUP_COMMMON_HIDE_BOTTOM: function() {
                    return Ut
                },
                GROUP_COMMMON_HIDE_KINGKONG_BANNER: function() {
                    return qt
                },
                GROUP_COMMMON_HIDE_LOGOUT: function() {
                    return Bt
                },
                GROUP_COMMMON_USE_PAYURL: function() {
                    return Gt
                },
                GROUP_COMMMON_HIDE_INVOICE: function() {
                    return Wt
                },
                GROUP_COMMMON_SHOW_BACK_BUTTON: function() {
                    return Ft
                },
                GROUP_COMMMON_BACK_OUT: function() {
                    return Ht
                },
                IS_TC_LITE: function() {
                    return Qt
                },
                IS_TUAN_APP_UA: function() {
                    return Yt
                },
                IS_WAIMAI_APP_UA: function() {
                    return Kt
                },
                IS_DIANPING_APP_UA: function() {
                    return Vt
                },
                IS_UNION: function() {
                    return Jt
                },
                isTtadx: function() {
                    return Xt
                },
                SQT_SCENE: function() {
                    return zt
                },
                GEO_WHITE_LIST_CHANNEL: function() {
                    return $t
                },
                CHANNEL_CONFIG: function() {
                    return Zt
                }
            });
        var r = n(38416)
            , i = n.n(r)
            , o = n(27424)
            , a = n.n(o)
            , c = n(34338)
            , u = n.n(c)
            , s = n(59749)
            , l = n.n(s)
            , f = n(38077)
            , d = n.n(f)
            , p = n(76801)
            , h = n.n(p)
            , m = n(97195)
            , g = n.n(m)
            , v = n(93374)
            , w = n.n(v)
            , y = n(69358)
            , _ = n.n(y)
            , b = n(35082)
            , O = n.n(b)
            , x = n(40739)
            , E = n.n(x)
            , T = n(81919)
            , P = n.n(T)
            , k = n(99474)
            , C = n.n(k)
            , S = n(60228)
            , A = n.n(S)
            , I = n(64043)
            , N = n.n(I)
            , M = n(43843)
            , R = n.n(M)
            , D = n(22462)
            , j = n.n(D)
            , L = n(9873)
            , U = n.n(L)
            , q = n(47522)
            , B = n.n(q)
            , G = n(4389)
            , W = n(36199);
        function F(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                    n.push.apply(n, r)
            }
            return n
        }
        function H(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? F(Object(n), !0).forEach(function(e) {
                    i()(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var Q = ["vivokyy", "vivofyp01", "vivofyp02", "vivoqjss", "oppokyy", "oppovoice", "hwkyy", "kyyhwsh", "kyyfyp", "kyyqb", "xmkyy", "toufanghwfwgg", "hwfwggdt", "hwfwggfw", "hwfwggaw", "hwfwggjy", "hwfwgggjc", "hwfwggnr", "hwfwggph"], Y = window.navigator.userAgent, K = G.get("wm_order_channel"), V = G.get("utm_source"), J, X = (G.get("tc_func_config") || "000000").split("").reverse(), z = G.get("dining_scene_serialize_info"), $ = Y.includes("MeituanTiny") || Y.includes("MeituanTurbo"), Z = -1 !== Q.indexOf(K), tt = Y.includes("com.meituan.waimai.quickapp"), et = "tuanxcx" === K && "60389" === V, nt = "mtjj" === K, rt = /^hwsh/.test(K), it = "yzlt" === K && "60379" === V, ot = Y.match(/meituangroup|meituantakeout|meituanwaimai/i), at = "tuanxcx" === K && "60389" === V, ct = "qiyetuancan" === K && "60395" === V, ut = "kydx" === K && "60390" === V, st = "qytcwm" === K && "60415" === V, lt = "bdxcx" === K && "60040" === V, ft = "ycyh" === K && "60128" === V || "stll-CCB" === K && "87137" === V, dt = "sqt_stll_jsyh" === K && "87197" === V, pt = "sqt_stll_msyh" === K, ht = "sqt_stll_ccb" === K, mt = /ArkWeb/i.test(window.navigator.userAgent) || /OpenHarmony/i.test(window.navigator.userAgent) || /HarmonyOS/i.test(window.navigator.userAgent), gt = "tcqd_lsw" === K && "60417" === V, vt = "tcqd_lsw2" === K && "60440" === V, wt = "tcqd_kg" === K && "60418" === V, yt = "tczx_zh" === K && "60424" === V, _t = "tcqd_gd" === K && "60446" === V, bt = "tcqd_yb" === K, Ot = /^tc(qd|zx)_/.test(K), xt = Ot && "tcqd_gat" !== K, Et = Ot || st, Tt = Ot || st || ct, Pt = ["tcqd_flag"], kt = ["tcqd_lsw_flag"], Ct = ["e_user_id", "e_flag", "out_back_url", "tcExtend", "e_user_token"], St = "e_user_id", At = "tcqd_lsw_flag", It = "tcqd_common_flag_key", Nt = "|||", Mt = ">>>", Rt = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , n = e || {}
                , r = n.withReportUserId
                , i = void 0 !== r && r
                , o = n.withoutKey
                , c = void 0 === o ? "e_user_token" : o
                , u = "";
            try {
                u = window.localStorage.getItem(It) || ""
            } catch (t) {
                u = "",
                    console.log(t)
            }
            if (!u)
                return i && xt && (0,
                    W.reportWarn)("tc_common_cache_flag", "get_tc_common_cache_flag", K || "default", {
                    value: "empty",
                    options: e
                }),
                    {};
            var s = u.split(Mt)
                , l = {};
            s && s.length && s.forEach(function() {
                var t, e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").split(Nt);
                if (e && e.length) {
                    var n = a()(e, 2)
                        , r = n[0]
                        , i = n[1];
                    c && c === r || c && Array.isArray(c) && c.includes(r) || (l[r] = i || "")
                }
            });
            var f = l[St] || l[At] || l.tcqd_flag;
            if (i && xt && !f && (0,
                W.reportWarn)("tc_common_cache_flag", "get_tc_common_cache_flag", K || "default", {
                value: u,
                res: l,
                options: e
            }),
            l && !l.union_id) {
                var d = G.get("union_id");
                d && 0 === d.indexOf(K) && (l.union_id = d)
            }
            return l
        }, Dt = function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e) {
                var r = H({}, e)
                    , i = Rt({
                    withoutKey: []
                });
                n && (r = H(H({}, i), e));
                var o = Object.keys(r)
                    , a = "";
                o && o.length && o.forEach(function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    a += "".concat(a ? Mt : "").concat(t).concat(Nt).concat(r[t] || "")
                });
                try {
                    window.localStorage.setItem(It, a)
                } catch (t) {
                    (0,
                        W.reportWarn)("tc_common_cache_flag", "set_tc_common_cache_flag", K || "default", {
                        keyValue: e,
                        currKeyValue: i,
                        resStr: a,
                        isAppend: n
                    }),
                        console.log(t)
                }
            }
        }, jt = "1", Lt = X[0] === jt, Ut = X[1] === jt, qt = X[2] === jt, Bt = X[3] === jt, Gt = X[4] === jt, Wt = X[5] === jt, Ft = X[6] === jt, Ht = X[7] === jt, Qt = z, Yt = Y.match(/meituangroup/i), Kt = Y.match(/meituantakeout|meituanwaimai/i), Vt = Y.match(/dianping/i), Jt = "union" === K, Xt = "ttadx" === K, zt = G.get("sqt_scene") || "", $t = ["stll-bjyd", "stll-wyyyy", "stll-aqy", "sqt_stll_jsyh", "stll-txsp", "stll-bdjsb", "sqt_stll_zxyh", "sqt_stll_gsyh", "sqt_stll_hxyh", "sqt_stll_msyh", "sqt_stll_ysf", "stll-CCB", "stll-QQ", "stll-nyyh", "mtjjb", "mtjxb", "hongmengwaimai", "stll-alimp"], Zt = {
            SDJK: {
                search_category_code: 104326,
                hotLabel_category_code: 104326,
                home_poilist_category_code: 104326,
                showKingkong: !1,
                showBanner: !1,
                noResultText: "\u62b1\u6b49\uff0c\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5546\u5bb6\u6216\u5546\u54c1",
                showFooter: !0
            },
            QYTCWM: {
                search_category_code: 0,
                hotLabel_category_code: 0,
                home_poilist_category_code: 0,
                showFooter: !1,
                showKingkong: !1,
                showBanner: !1,
                noResultText: "\u54ce\u5440\uff0c\u6ca1\u6709\u627e\u5230\u80fd\u591f\u9001\u9910\u7684\u9910\u5385"
            },
            DEFAULT: {
                search_category_code: 0,
                hotLabel_category_code: 0,
                home_poilist_category_code: 0,
                showKingkong: !0,
                showBanner: !0,
                showFooter: !0,
                showTopHeader: !0,
                noResultText: "\u54ce\u5440\uff0c\u6ca1\u6709\u627e\u5230\u80fd\u591f\u9001\u9910\u7684\u9910\u5385"
            }
        };
        if ((Ut || qt) && K) {
            var te = K.toUpperCase();
            Zt[te] = {
                search_category_code: 0,
                hotLabel_category_code: 0,
                home_poilist_category_code: 0,
                showFooter: !Ut,
                showKingkong: !qt,
                showBanner: !qt,
                noResultText: "\u54ce\u5440\uff0c\u6ca1\u6709\u627e\u5230\u80fd\u591f\u9001\u9910\u7684\u9910\u5385"
            }
        }
    },
    24654: function() {}
}]);
//# sourceMappingURL=//mss.vip.sankuai.com/static-prod01/ws-assets/com.sankuai.wmcapp.openh5.static/S3W78pplTgIyijqAU9e9I/sourcemap/js/common.360c9d38.js.map
//# sourceURL=//s3.meituan.net/static-prod01/ws-assets/com.sankuai.wmcapp.openh5.static/S3W78pplTgIyijqAU9e9I/js/common.360c9d38.js
