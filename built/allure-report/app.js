!function (t) { function e(r) { if (n[r])
    return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports; } var n = {}; e.m = t, e.c = n, e.d = function (t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }); }, e.n = function (t) { var n = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return e.d(n, "a", n), n; }, e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, e.p = "", e(e.s = 258); }([function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function () { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]; var r = e.pop(); return i.default.apply(void 0, e.concat([r.hash])); };
        var r = n(164), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return a.default.t(t, e ? e.hash : {}); }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
        var i = n(61), a = function (t) { return t && t.__esModule ? t : { default: t }; }(i);
    }, function (t, e, n) { t.exports = { default: n(268), __esModule: !0 }; }, function (t, e, n) {
        "use strict";
        e.__esModule = !0, e.default = function (t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); };
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(155), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        e.default = function (t, e) { if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" !== (void 0 === e ? "undefined" : (0, i.default)(e)) && "function" != typeof e ? t : e; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        e.__esModule = !0;
        var i = n(287), a = r(i), o = n(291), s = r(o), u = n(155), l = r(u);
        e.default = function (t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, l.default)(e))); t.prototype = (0, s.default)(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (a.default ? (0, a.default)(t, e) : t.__proto__ = e); };
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(154), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        e.default = function () { function t(t, e) { for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(t, r.key, r);
        } } return function (e, n, r) { return n && t(e.prototype, n), r && t(e, r), e; }; }();
    }, function (t, e, n) { t.exports = n(308).default; }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return function (n) { var r = n.prototype; r.behaviors = (0, f.default)((0, l.default)({}, t, e), r.behaviors); }; }
        function a(t) { return function (e) { e.prototype.className = t; }; }
        function o(t) { return function (e) { e.prototype.regions = (0, f.default)(t, e.regions); }; }
        function s(t) { return function (e) { e.prototype.options = (0, f.default)(t, e.options); }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.on = void 0;
        var u = n(163), l = r(u), c = n(29), f = r(c), d = n(307);
        Object.defineProperty(e, "on", { enumerable: !0, get: function () { return d.on; } }), e.behavior = i, e.className = a, e.regions = o, e.options = s;
    }, function (t, e, n) { !function (e, r) { t.exports = r(n(14), n(16), n(262)); }(0, function (t, e, n) {
        "use strict";
        function r(t, e, n) { return n.toUpperCase(); }
        function i(t) { for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
            r[i - 1] = arguments[i]; var a = G(t), o = H.call(this, a), s = void 0; return e.isFunction(o) && (s = o.apply(this, r)), this.trigger.apply(this, arguments), s; }
        function a(t) { for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
            r[a - 1] = arguments[a]; return e.isFunction(t.triggerMethod) ? t.triggerMethod.apply(t, r) : i.apply(t, r); }
        function o(t, n, r) { t._getImmediateChildren && e.each(t._getImmediateChildren(), function (t) { r(t) && a(t, n, t); }); }
        function s(t) { return !t._isAttached; }
        function u(t) { return !!s(t) && (t._isAttached = !0, !0); }
        function l(t) { return t._isAttached; }
        function c(t) { return !!l(t) && (t._isAttached = !1, !0); }
        function f(t) { t._isAttached && t._isRendered && a(t, "dom:refresh", t); }
        function d(t) { t._isAttached && t._isRendered && a(t, "dom:remove", t); }
        function h() { o(this, "before:attach", s); }
        function p() { o(this, "attach", u), f(this); }
        function v() { o(this, "before:detach", l), d(this); }
        function g() { o(this, "detach", c); }
        function m() { d(this); }
        function b() { f(this); }
        function y(t) { t._areViewEventsMonitored || (t._areViewEventsMonitored = !0, t.on({ "before:attach": h, attach: p, "before:detach": v, detach: g, "before:render": m, render: b })); }
        function _(t, n, r, i, a) { var o = i.split(/\s+/); e.each(o, function (e) { var i = t[e]; if (!i)
            throw new Y('Method "' + e + '" was configured as an event handler, but does not exist.'); t[a](n, r, i); }); }
        function w(t, n, r, i) { if (n && r) {
            if (!e.isObject(r))
                throw new Y({ message: "Bindings must be an object.", url: "marionette.functions.html#marionettebindevents" });
            e.each(r, function (r, a) { if (e.isString(r))
                return void _(t, n, a, r, i); t[i](n, a, r); });
        } }
        function x(t, e) { return w(this, t, e, "listenTo"), this; }
        function k(t, e) { return w(this, t, e, "stopListening"), this; }
        function O(t, n, r, i) { if (n && r) {
            if (!e.isObject(r))
                throw new Y({ message: "Bindings must be an object.", url: "marionette.functions.html#marionettebindrequests" });
            var a = q.call(t, r);
            n[i](a, t);
        } }
        function C(t, e) { return O(this, t, e, "reply"), this; }
        function M(t, e) { return O(this, t, e, "stopReplying"), this; }
        function j(t, n) { return t.behaviorClass ? t.behaviorClass : e.isFunction(t) ? t : e.isFunction(zt.Behaviors.behaviorsLookup) ? zt.Behaviors.behaviorsLookup(t, n)[n] : zt.Behaviors.behaviorsLookup[n]; }
        function E(t, n) { return e.chain(n).map(function (n, r) { var i = j(n, r), a = n === i ? {} : n, o = new i(a, t); return [o].concat(E(t, e.result(o, "behaviors"))); }).flatten().value(); }
        function S(t, n) { return [t + e.uniqueId(".evt"), n].join(" "); }
        function T(t) { return !!st[t]; }
        function A(t, e) { return st[t] = e; }
        function N(t, n) { e.isString(n) && (n = { event: n }); var r = n.event, i = !!n.preventDefault; T("triggersPreventDefault") && (i = !1 !== n.preventDefault); var a = !!n.stopPropagation; return T("triggersStopPropagation") && (a = !1 !== n.stopPropagation), function (e) { i && e.preventDefault(), a && e.stopPropagation(), t.triggerMethod(r, t, e); }; }
        function R(t) { t.supportsDestroyLifecycle || a(t, "before:destroy", t); var e = !!t._isAttached; e && a(t, "before:detach", t), t.remove(), e && (t._isAttached = !1, a(t, "detach", t)), t._isDestroyed = !0, t.supportsDestroyLifecycle || a(t, "destroy", t); }
        function P(t, n) { var r = e.extend({}, n); if (e.isString(t))
            return e.extend(r, { el: t }), D(r); if (e.isFunction(t))
            return e.extend(r, { regionClass: t }), D(r); if (e.isObject(t))
            return t.selector && I("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), e.extend(r, { el: t.selector }, t), D(r); throw new Y({ message: "Improper region configuration type.", url: "marionette.region.html#region-configuration-types" }); }
        function D(t) { return new (0, t.regionClass)(e.omit(t, "regionClass")); }
        function L(t, e) { return e.model && e.model.get(t); }
        function V() { throw new Y({ message: "You must define where your behaviors are stored.", url: "marionette.behaviors.md#behaviorslookup" }); }
        t = "default" in t ? t.default : t, e = "default" in e ? e.default : e, n = "default" in n ? n.default : n;
        var B = function (t) { return function (e) { for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
            r[i - 1] = arguments[i]; return t.apply(e, r); }; }, z = t.Model.extend, I = function t(n, r) { e.isObject(n) && (n = n.prev + " is going to be removed in the future. Please use " + n.next + " instead." + (n.url ? " See: " + n.url : "")), zt.DEV_MODE && (void 0 !== r && r || t._cache[n] || (t._warn("Deprecation warning: " + n), t._cache[n] = !0)); };
        I._console = "undefined" != typeof console ? console : {}, I._warn = function () { return (I._console.warn || I._console.log || e.noop).apply(I._console, arguments); }, I._cache = {};
        var U = function (t) { return document.documentElement.contains(t && t.parentNode); }, F = function (t, n) { var r = this; t && e.each(n, function (e) { var n = t[e]; void 0 !== n && (r[e] = n); }); }, H = function (t) { if (t)
            return this.options && void 0 !== this.options[t] ? this.options[t] : this[t]; }, q = function (t) { var n = this; return e.reduce(t, function (t, r, i) { return e.isFunction(r) || (r = n[r]), r && (t[i] = r), t; }, {}); }, $ = /(^|:)(\w)/gi, G = e.memoize(function (t) { return "on" + t.replace($, r); }), W = ["description", "fileName", "lineNumber", "name", "message", "number"], Y = z.call(Error, { urlRoot: "http://marionettejs.com/docs/v3.3.1/", constructor: function (t, n) { e.isObject(t) ? (n = t, t = n.message) : n || (n = {}); var r = Error.call(this, t); e.extend(this, e.pick(r, W), e.pick(n, W)), this.captureStackTrace(), n.url && (this.url = this.urlRoot + n.url); }, captureStackTrace: function () { Error.captureStackTrace && Error.captureStackTrace(this, Y); }, toString: function () { return this.name + ": " + this.message + (this.url ? " See: " + this.url : ""); } });
        Y.extend = z;
        var X = function () { for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]; this.options = e.extend.apply(e, [{}, e.result(this, "options")].concat(n)); }, K = { normalizeMethods: q, _setOptions: X, mergeOptions: F, getOption: H, bindEvents: x, unbindEvents: k }, J = { _initRadio: function () { var t = e.result(this, "channelName"); if (t) {
                if (!n)
                    throw new Y({ name: "BackboneRadioMissing", message: 'The dependency "backbone.radio" is missing.' });
                var r = this._channel = n.channel(t), i = e.result(this, "radioEvents");
                this.bindEvents(r, i);
                var a = e.result(this, "radioRequests");
                this.bindRequests(r, a), this.on("destroy", this._destroyRadio);
            } }, _destroyRadio: function () { this._channel.stopReplying(null, null, this); }, getChannel: function () { return this._channel; }, bindEvents: x, unbindEvents: k, bindRequests: C, unbindRequests: M }, Z = ["channelName", "radioEvents", "radioRequests"], Q = function (t) { this._setOptions(t), this.mergeOptions(t, Z), this.cid = e.uniqueId(this.cidPrefix), this._initRadio(), this.initialize.apply(this, arguments); };
        Q.extend = z, e.extend(Q.prototype, t.Events, K, J, { cidPrefix: "mno", _isDestroyed: !1, isDestroyed: function () { return this._isDestroyed; }, initialize: function () { }, destroy: function () { if (this._isDestroyed)
                return this; for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n]; return this.triggerMethod.apply(this, ["before:destroy", this].concat(e)), this._isDestroyed = !0, this.triggerMethod.apply(this, ["destroy", this].concat(e)), this.stopListening(), this; }, triggerMethod: i });
        var tt = { createBuffer: function () { return document.createDocumentFragment(); }, appendChildren: function (e, n) { t.$(e).append(n); }, beforeEl: function (e, n) { t.$(e).before(n); }, replaceEl: function (t, e) { if (t !== e) {
                var n = e.parentNode;
                n && n.replaceChild(t, e);
            } }, detachContents: function (e) { t.$(e).contents().detach(); }, setInnerContent: function (e, n) { t.$(e).html(n); }, detachEl: function (e) { t.$(e).detach(); }, removeEl: function (e) { t.$(e).remove(); }, findEls: function (e, n) { return t.$(e, n); } }, et = function (t) { this.templateId = t; };
        e.extend(et, { templateCaches: {}, get: function (t, e) { var n = this.templateCaches[t]; return n || (n = new et(t), this.templateCaches[t] = n), n.load(e); }, clear: function () { for (var t = void 0, e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r]; var i = n.length; if (i > 0)
                for (t = 0; t < i; t++)
                    delete this.templateCaches[n[t]];
            else
                this.templateCaches = {}; } }), e.extend(et.prototype, tt, { load: function (t) { if (this.compiledTemplate)
                return this.compiledTemplate; var e = this.loadTemplate(this.templateId, t); return this.compiledTemplate = this.compileTemplate(e, t), this.compiledTemplate; }, loadTemplate: function (t, e) { var n = this.findEls(t); if (!n.length)
                throw new Y({ name: "NoTemplateError", message: 'Could not find template: "' + t + '"' }); return n.html(); }, compileTemplate: function (t, n) { return e.template(t, n); } });
        var nt = e.invokeMap || e.invoke, rt = { _initBehaviors: function () { this._behaviors = this._getBehaviors(); }, _getBehaviors: function () { var t = e.result(this, "behaviors"); return e.isObject(t) ? E(this, t) : {}; }, _getBehaviorTriggers: function () { var t = nt(this._behaviors, "getTriggers"); return e.reduce(t, function (t, n) { return e.extend(t, n); }, {}); }, _getBehaviorEvents: function () { var t = nt(this._behaviors, "getEvents"); return e.reduce(t, function (t, n) { return e.extend(t, n); }, {}); }, _proxyBehaviorViewProperties: function () { nt(this._behaviors, "proxyViewProperties"); }, _delegateBehaviorEntityEvents: function () { nt(this._behaviors, "delegateEntityEvents"); }, _undelegateBehaviorEntityEvents: function () { nt(this._behaviors, "undelegateEntityEvents"); }, _destroyBehaviors: function () { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n]; nt.apply(void 0, [this._behaviors, "destroy"].concat(e)); }, _removeBehavior: function (t) { this._isDestroyed || (this._behaviors = e.without(this._behaviors, t)); }, _bindBehaviorUIElements: function () { nt(this._behaviors, "bindUIElements"); }, _unbindBehaviorUIElements: function () { nt(this._behaviors, "unbindUIElements"); }, _triggerEventOnBehaviors: function () { for (var t = this._behaviors, e = 0, n = t && t.length; e < n; e++)
                i.apply(t[e], arguments); } }, it = { _delegateEntityEvents: function (t, n) { this._undelegateEntityEvents(t, n); var r = e.result(this, "modelEvents"); x.call(this, t, r); var i = e.result(this, "collectionEvents"); x.call(this, n, i); }, _undelegateEntityEvents: function (t, n) { var r = e.result(this, "modelEvents"); k.call(this, t, r); var i = e.result(this, "collectionEvents"); k.call(this, n, i); } }, at = /^(\S+)\s*(.*)$/, ot = function (t) { var e = t.match(at); return S(e[1], e[2]); }, st = { childViewEventPrefix: !0, triggersStopPropagation: !0, triggersPreventDefault: !0 }, ut = { _getViewTriggers: function (t, n) { return e.reduce(n, function (e, n, r) { return r = ot(r), e[r] = N(t, n), e; }, {}); } }, lt = function (t, n) { return e.reduce(t, function (t, e, r) { return t[ct(r, n)] = e, t; }, {}); }, ct = function (t, e) { return t.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function (t) { return e[t.slice(4)]; }); }, ft = function t(n, r, i) { return e.each(n, function (a, o) { e.isString(a) ? n[o] = ct(a, r) : e.isObject(a) && e.isArray(i) && (e.extend(a, t(e.pick(a, i), r)), e.each(i, function (t) { var n = a[t]; e.isString(n) && (a[t] = ct(n, r)); })); }), n; }, dt = { normalizeUIKeys: function (t) { var e = this._getUIBindings(); return lt(t, e); }, normalizeUIString: function (t) { var e = this._getUIBindings(); return ct(t, e); }, normalizeUIValues: function (t, e) { var n = this._getUIBindings(); return ft(t, n, e); }, _getUIBindings: function () { var t = e.result(this, "_uiBindings"), n = e.result(this, "ui"); return t || n; }, _bindUIElements: function () { var t = this; if (this.ui) {
                this._uiBindings || (this._uiBindings = this.ui);
                var n = e.result(this, "_uiBindings");
                this._ui = {}, e.each(n, function (e, n) { t._ui[n] = t.$(e); }), this.ui = this._ui;
            } }, _unbindUIElements: function () { var t = this; this.ui && this._uiBindings && (e.each(this.ui, function (e, n) { delete t.ui[n]; }), this.ui = this._uiBindings, delete this._uiBindings, delete this._ui); }, _getUI: function (t) { return this._ui[t]; } }, ht = { supportsRenderLifecycle: !0, supportsDestroyLifecycle: !0, _isDestroyed: !1, isDestroyed: function () { return !!this._isDestroyed; }, _isRendered: !1, isRendered: function () { return !!this._isRendered; }, _isAttached: !1, isAttached: function () { return !!this._isAttached; }, delegateEvents: function (n) { this._proxyBehaviorViewProperties(), this._buildEventProxies(); var r = this._getEvents(n); void 0 === n && (this.events = r); var i = e.extend({}, this._getBehaviorEvents(), r, this._getBehaviorTriggers(), this.getTriggers()); return t.View.prototype.delegateEvents.call(this, i), this; }, _getEvents: function (t) { var n = t || this.events; return e.isFunction(n) ? this.normalizeUIKeys(n.call(this)) : this.normalizeUIKeys(n); }, getTriggers: function () { if (this.triggers) {
                var t = this.normalizeUIKeys(e.result(this, "triggers"));
                return this._getViewTriggers(this, t);
            } }, delegateEntityEvents: function () { return this._delegateEntityEvents(this.model, this.collection), this._delegateBehaviorEntityEvents(), this; }, undelegateEntityEvents: function () { return this._undelegateEntityEvents(this.model, this.collection), this._undelegateBehaviorEntityEvents(), this; }, destroy: function () { if (this._isDestroyed)
                return this; for (var t = !!this._isAttached, e = arguments.length, n = Array(e), r = 0; r < e; r++)
                n[r] = arguments[r]; return this.triggerMethod.apply(this, ["before:destroy", this].concat(n)), t && this.triggerMethod("before:detach", this), this.unbindUIElements(), this.removeEl(this.el), t && (this._isAttached = !1, this.triggerMethod("detach", this)), this._removeChildren(), this._isDestroyed = !0, this._isRendered = !1, this._destroyBehaviors.apply(this, n), this.triggerMethod.apply(this, ["destroy", this].concat(n)), this.stopListening(), this; }, bindUIElements: function () { return this._bindUIElements(), this._bindBehaviorUIElements(), this; }, unbindUIElements: function () { return this._unbindUIElements(), this._unbindBehaviorUIElements(), this; }, getUI: function (t) { return this._getUI(t); }, childViewEventPrefix: function () { return !!T("childViewEventPrefix") && "childview"; }, triggerMethod: function () { var t = i.apply(this, arguments); return this._triggerEventOnBehaviors.apply(this, arguments), t; }, _buildEventProxies: function () { this._childViewEvents = e.result(this, "childViewEvents"), this._childViewTriggers = e.result(this, "childViewTriggers"); }, _proxyChildViewEvents: function (t) { this.listenTo(t, "all", this._childViewEventHandler); }, _childViewEventHandler: function (t) { for (var n = this.normalizeMethods(this._childViewEvents), r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                i[a - 1] = arguments[a]; void 0 !== n && e.isFunction(n[t]) && n[t].apply(this, i); var o = this._childViewTriggers; o && e.isString(o[t]) && this.triggerMethod.apply(this, [o[t]].concat(i)); var s = e.result(this, "childViewEventPrefix"); if (!1 !== s) {
                var u = s + ":" + t;
                this.triggerMethod.apply(this, [u].concat(i));
            } } };
        e.extend(ht, tt, rt, K, it, ut, dt);
        var pt = ["allowMissingEl", "parentEl", "replaceElement"], vt = Q.extend({ cidPrefix: "mnr", replaceElement: !1, _isReplaced: !1, _isSwappingView: !1, constructor: function (e) { if (this._setOptions(e), this.mergeOptions(e, pt), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof t.$ ? this.el[0] : this.el, !this.el)
                throw new Y({ name: "NoElError", message: 'An "el" must be specified for a region.' }); this.$el = this.getEl(this.el), Q.call(this, e); }, show: function (t, e) { if (this._ensureElement(e))
                return (t = this._getView(t, e)) === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, t, e), t._isAttached || this.empty(e), this._setupChildView(t), this._renderView(t), this._attachView(t, e), this.currentView = t, this.triggerMethod("show", this, t, e), this._isSwappingView = !1, this); }, _setupChildView: function (t) { y(t), this._proxyChildViewEvents(t), t.on("destroy", this._empty, this); }, _proxyChildViewEvents: function (t) { var e = this._parentView; e && e._proxyChildViewEvents(t); }, _renderView: function (t) { t._isRendered || (t.supportsRenderLifecycle || a(t, "before:render", t), t.render(), t.supportsRenderLifecycle || (t._isRendered = !0, a(t, "render", t))); }, _attachView: function (t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = !t._isAttached && U(this.el), i = void 0 === n.replaceElement ? !!e.result(this, "replaceElement") : !!n.replaceElement; r && a(t, "before:attach", t), i ? this._replaceEl(t) : this.attachHtml(t), r && (t._isAttached = !0, a(t, "attach", t)); }, _ensureElement: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if (e.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0]), !this.$el || 0 === this.$el.length) {
                if (void 0 === t.allowMissingEl ? !!e.result(this, "allowMissingEl") : !!t.allowMissingEl)
                    return !1;
                throw new Y('An "el" must exist in DOM for this region ' + this.cid);
            } return !0; }, _getView: function (e) { if (!e)
                throw new Y({ name: "ViewNotValid", message: "The view passed is undefined and therefore invalid. You must pass a view instance to show." }); if (e._isDestroyed)
                throw new Y({ name: "ViewDestroyedError", message: 'View (cid: "' + e.cid + '") has already been destroyed and cannot be used.' }); if (e instanceof t.View)
                return e; var n = this._getViewOptions(e); return new _t(n); }, _getViewOptions: function (t) { return e.isFunction(t) ? { template: t } : e.isObject(t) ? t : { template: function () { return t; } }; }, getEl: function (t) { return this.findEls(t, e.result(this, "parentEl")); }, _replaceEl: function (t) { this._restoreEl(), t.on("before:destroy", this._restoreEl, this), this.replaceEl(t.el, this.el), this._isReplaced = !0; }, _restoreEl: function () { if (this._isReplaced) {
                var t = this.currentView;
                t && (this._detachView(t), this._isReplaced = !1);
            } }, isReplaced: function () { return !!this._isReplaced; }, isSwappingView: function () { return !!this._isSwappingView; }, attachHtml: function (t) { this.appendChildren(this.el, t.el); }, empty: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { allowMissingEl: !0 }, e = this.currentView; if (!e)
                return this._ensureElement(t) && this.detachHtml(), this; var n = !t.preventDestroy; return n || I("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(e, n), this; }, _empty: function (t, e) { t.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, t), this._restoreEl(), delete this.currentView, t._isDestroyed || (e ? this.removeView(t) : this._detachView(t), this._stopChildViewEvents(t)), this.triggerMethod("empty", this, t); }, _stopChildViewEvents: function (t) { this._parentView && this._parentView.stopListening(t); }, destroyView: function (t) { return t._isDestroyed ? t : (t.destroy ? t.destroy() : R(t), t); }, removeView: function (t) { this.destroyView(t); }, detachView: function () { var t = this.currentView; if (t)
                return this._empty(t), t; }, _detachView: function (t) { var e = !!t._isAttached, n = this._isReplaced; e && a(t, "before:detach", t), n ? this.replaceEl(this.el, t.el) : this.detachHtml(), e && (t._isAttached = !1, a(t, "detach", t)); }, detachHtml: function () { this.detachContents(this.el); }, hasView: function () { return !!this.currentView; }, reset: function (t) { return this.empty(t), this.$el && (this.el = this._initEl), delete this.$el, this; }, destroy: function (t) { return this._isDestroyed ? this : (this.reset(t), this._name && this._parentView._removeReferences(this._name), delete this._parentView, delete this._name, Q.prototype.destroy.apply(this, arguments)); } });
        e.extend(vt.prototype, tt);
        var gt = function (t, e) { return t instanceof vt ? t : P(t, e); }, mt = { regionClass: vt, _initRegions: function () { this.regions = this.regions || {}, this._regions = {}, this.addRegions(e.result(this, "regions")); }, _reInitRegions: function () { nt(this._regions, "reset"); }, addRegion: function (t, e) { var n = {}; return n[t] = e, this.addRegions(n)[t]; }, addRegions: function (t) { if (!e.isEmpty(t))
                return t = this.normalizeUIValues(t, ["selector", "el"]), this.regions = e.extend({}, this.regions, t), this._addRegions(t); }, _addRegions: function (t) { var n = this, r = { regionClass: this.regionClass, parentEl: e.partial(e.result, this, "el") }; return e.reduce(t, function (t, e, i) { return t[i] = gt(e, r), n._addRegion(t[i], i), t; }, {}); }, _addRegion: function (t, e) { this.triggerMethod("before:add:region", this, e, t), t._parentView = this, t._name = e, this._regions[e] = t, this.triggerMethod("add:region", this, e, t); }, removeRegion: function (t) { var e = this._regions[t]; return this._removeRegion(e, t), e; }, removeRegions: function () { var t = this._getRegions(); return e.each(this._regions, e.bind(this._removeRegion, this)), t; }, _removeRegion: function (t, e) { this.triggerMethod("before:remove:region", this, e, t), t.destroy(), this.triggerMethod("remove:region", this, e, t); }, _removeReferences: function (t) { delete this.regions[t], delete this._regions[t]; }, emptyRegions: function () { var t = this.getRegions(); return nt(t, "empty"), t; }, hasRegion: function (t) { return !!this.getRegion(t); }, getRegion: function (t) { return this._isRendered || this.render(), this._regions[t]; }, _getRegions: function () { return e.clone(this._regions); }, getRegions: function () { return this._isRendered || this.render(), this._getRegions(); }, showChildView: function (t, e) { for (var n = this.getRegion(t), r = arguments.length, i = Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
                i[a - 2] = arguments[a]; return n.show.apply(n, [e].concat(i)); }, detachChildView: function (t) { return this.getRegion(t).detachView(); }, getChildView: function (t) { return this.getRegion(t).currentView; } }, bt = { render: function (t, n) { if (!t)
                throw new Y({ name: "TemplateNotFoundError", message: "Cannot render the template since its false, null or undefined." }); return (e.isFunction(t) ? t : et.get(t))(n); } }, yt = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"], _t = t.View.extend({ constructor: function (n) { this.render = e.bind(this.render, this), this._setOptions(n), this.mergeOptions(n, yt), y(this), this._initBehaviors(), this._initRegions(); var r = Array.prototype.slice.call(arguments); r[0] = this.options, t.View.prototype.constructor.apply(this, r), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this); }, serializeData: function () { return this.model || this.collection ? this.model ? this.serializeModel() : { items: this.serializeCollection() } : {}; }, serializeModel: function () { return this.model ? e.clone(this.model.attributes) : {}; }, serializeCollection: function () { return this.collection ? this.collection.map(function (t) { return e.clone(t.attributes); }) : {}; }, setElement: function () { var e = !!this.el; return t.View.prototype.setElement.apply(this, arguments), e && (this._isRendered = !!this.$el.length, this._isAttached = U(this.el)), this._isRendered && this.bindUIElements(), this; }, render: function () { return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._isRendered && this._reInitRegions(), this._renderTemplate(), this.bindUIElements(), this._isRendered = !0, this.triggerMethod("render", this), this); }, _renderTemplate: function () { var t = this.getTemplate(); if (!1 === t)
                return void I("template:false is deprecated.  Use _.noop."); var e = this.mixinTemplateContext(this.serializeData()), n = this._renderHtml(t, e); this.attachElContent(n); }, _renderHtml: function (t, e) { return bt.render(t, e, this); }, getTemplate: function () { return this.template; }, mixinTemplateContext: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.result(this, "templateContext"); return e.extend(t, n); }, attachElContent: function (t) { return this.setInnerContent(this.el, t), this; }, _removeChildren: function () { this.removeRegions(); }, _getImmediateChildren: function () { return e.chain(this._getRegions()).map("currentView").compact().value(); } }, { setRenderer: function (t) { this.prototype._renderHtml = t; } });
        e.extend(_t.prototype, ht, mt);
        var wt = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"], xt = function (t, n) { e.each(wt, function (r) { t[r] = function () { var t = e.values(e.result(this, n)), i = [t].concat(e.toArray(arguments)); return e[r].apply(e, i); }; }); }, kt = function (t) { this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), e.each(t, e.bind(this.add, this)); };
        xt(kt.prototype, "_views"), e.extend(kt.prototype, { add: function (t, e) { return this._add(t, e)._updateLength(); }, _add: function (t, e) { var n = t.cid; return this._views[n] = t, t.model && (this._indexByModel[t.model.cid] = n), e && (this._indexByCustom[e] = n), this; }, findByModel: function (t) { return this.findByModelCid(t.cid); }, findByModelCid: function (t) { var e = this._indexByModel[t]; return this.findByCid(e); }, findByCustom: function (t) { var e = this._indexByCustom[t]; return this.findByCid(e); }, findByIndex: function (t) { return e.values(this._views)[t]; }, findByCid: function (t) { return this._views[t]; }, remove: function (t) { return this._remove(t)._updateLength(); }, _remove: function (t) { var n = t.cid; return t.model && delete this._indexByModel[t.model.cid], e.some(this._indexByCustom, e.bind(function (t, e) { if (t === n)
                return delete this._indexByCustom[e], !0; }, this)), delete this._views[n], this; }, _updateLength: function () { return this.length = e.size(this._views), this; } });
        var Ot = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"], Ct = t.View.extend({ sort: !0, constructor: function (n) { this.render = e.bind(this.render, this), this._setOptions(n), this.mergeOptions(n, Ot), y(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = []; var r = Array.prototype.slice.call(arguments); r[0] = this.options, t.View.prototype.constructor.apply(this, r), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this); }, _startBuffering: function () { this._isBuffering = !0; }, _endBuffering: function () { var t = !!this._isAttached, n = t ? this._getImmediateChildren() : []; this._isBuffering = !1, e.each(n, function (t) { a(t, "before:attach", t); }), this.attachBuffer(this, this._createBuffer()), e.each(n, function (t) { t._isAttached = !0, a(t, "attach", t); }), this._bufferedChildren = []; }, _getImmediateChildren: function () { return e.values(this.children._views); }, _initialEvents: function () { this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews)); }, _onCollectionAdd: function (t, n, r) { var i = void 0 !== r.at && (r.index || n.indexOf(t)); (this.filter || !1 === i) && (i = e.indexOf(this._filteredSortedModels(i), t)), this._shouldAddChild(t, i) && (this._destroyEmptyView(), this._addChild(t, i)); }, _onCollectionUpdate: function (t, e) { var n = e.changes; this._removeChildModels(n.removed); }, _removeChildModels: function (t) { var e = this._getRemovedViews(t); e.length && (this.children._updateLength(), this._updateIndices(e, !1), this.isEmpty() && this._showEmptyView()); }, _getRemovedViews: function (t) { var n = this; return e.reduce(t, function (t, e) { var r = e && n.children.findByModel(e); return !r || r._isDestroyed ? t : (n._removeChildView(r), t.push(r), t); }, []); }, _removeChildView: function (t) { this.triggerMethod("before:remove:child", this, t), this.children._remove(t), t.destroy ? t.destroy() : R(t), this.stopListening(t), this.triggerMethod("remove:child", this, t); }, setElement: function () { var e = !!this.el; return t.View.prototype.setElement.apply(this, arguments), e && (this._isAttached = U(this.el)), this; }, render: function () { return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this); }, setFilter: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.preventRender, r = this._isRendered && !this._isDestroyed, i = this.filter !== t; if (r && i && !n) {
                var a = this._filteredSortedModels();
                this.filter = t;
                var o = this._filteredSortedModels();
                this._applyModelDeltas(o, a);
            }
            else
                this.filter = t; return this; }, removeFilter: function (t) { return this.setFilter(null, t); }, _applyModelDeltas: function (t, n) { var r = this, i = {}; e.each(t, function (t, e) { !r.children.findByModel(t) && r._onCollectionAdd(t, r.collection, { at: e }), i[t.cid] = !0; }); var a = e.filter(n, function (t) { return !i[t.cid] && r.children.findByModel(t); }); this._removeChildModels(a); }, reorder: function () { var t = this.children, n = this._filteredSortedModels(); if (!n.length && this._showingEmptyView)
                return this; if (e.some(n, function (e) { return !t.findByModel(e); }))
                this.render();
            else {
                var r = [], i = t.reduce(function (t, i) { var a = e.indexOf(n, i.model); return -1 === a ? (r.push(i.model), t) : (i._index = a, t[a] = i.el, t); }, new Array(n.length));
                this.triggerMethod("before:reorder", this), this._appendReorderedChildren(i), this._removeChildModels(r), this.triggerMethod("reorder", this);
            } return this; }, resortView: function () { return this.reorderOnSort ? this.reorder() : this._renderChildren(), this; }, _sortViews: function () { var t = this, n = this._filteredSortedModels(); e.find(n, function (e, n) { var r = t.children.findByModel(e); return !r || r._index !== n; }) && this.resortView(); }, _emptyViewIndex: -1, _appendReorderedChildren: function (t) { this.appendChildren(this.el, t); }, _renderChildren: function () { this._isRendered && (this._destroyEmptyView(), this._destroyChildren()); var t = this._filteredSortedModels(); this.isEmpty({ processedModels: t }) ? this._showEmptyView() : (this.triggerMethod("before:render:children", this), this._startBuffering(), this._showCollection(t), this._endBuffering(), this.triggerMethod("render:children", this)); }, _createView: function (t, e) { var n = this._getChildView(t), r = this._getChildViewOptions(t, e); return this.buildChildView(t, n, r); }, _setupChildView: function (t, e) { y(t), this._proxyChildViewEvents(t), this.sort && (t._index = e); }, _showCollection: function (t) { e.each(t, e.bind(this._addChild, this)), this.children._updateLength(); }, _filteredSortedModels: function (t) { if (!this.collection || !this.collection.length)
                return []; var e = this.getViewComparator(), n = this.collection.models; if (t = Math.min(Math.max(t, 0), n.length - 1), e) {
                var r = void 0;
                t && (r = n[t], n = n.slice(0, t).concat(n.slice(t + 1))), n = this._sortModelsBy(n, e), r && n.splice(t, 0, r);
            } return n = this._filterModels(n); }, getViewComparator: function () { return this.viewComparator; }, _filterModels: function (t) { var n = this; return this.filter && (t = e.filter(t, function (t, e) { return n._shouldAddChild(t, e); })), t; }, _sortModelsBy: function (t, n) { return "string" == typeof n ? e.sortBy(t, function (t) { return t.get(n); }) : 1 === n.length ? e.sortBy(t, e.bind(n, this)) : e.clone(t).sort(e.bind(n, this)); }, _showEmptyView: function () { var n = this._getEmptyView(); if (n && !this._showingEmptyView) {
                this._showingEmptyView = !0;
                var r = new t.Model, i = this.emptyViewOptions || this.childViewOptions;
                e.isFunction(i) && (i = i.call(this, r, this._emptyViewIndex));
                var a = this.buildChildView(r, n, i);
                this.triggerMethod("before:render:empty", this, a), this.addChildView(a, 0), this.triggerMethod("render:empty", this, a);
            } }, _destroyEmptyView: function () { this._showingEmptyView && (this.triggerMethod("before:remove:empty", this), this._destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty", this)); }, _getEmptyView: function () { var t = this.emptyView; if (t)
                return this._getView(t); }, _getChildView: function (t) { var e = this.childView; if (!e)
                throw new Y({ name: "NoChildViewError", message: 'A "childView" must be specified' }); if (!(e = this._getView(e, t)))
                throw new Y({ name: "InvalidChildViewError", message: '"childView" must be a view class or a function that returns a view class' }); return e; }, _getView: function (n, r) { return n.prototype instanceof t.View || n === t.View ? n : e.isFunction(n) ? n.call(this, r) : void 0; }, _addChild: function (t, e) { var n = this._createView(t, e); return this.addChildView(n, e), n; }, _getChildViewOptions: function (t, n) { return e.isFunction(this.childViewOptions) ? this.childViewOptions(t, n) : this.childViewOptions; }, addChildView: function (t, e) { return this.triggerMethod("before:add:child", this, t), this._setupChildView(t, e), this._isBuffering ? this.children._add(t) : (this._updateIndices(t, !0), this.children.add(t)), this._renderView(t), this._attachView(t, e), this.triggerMethod("add:child", this, t), t; }, _updateIndices: function (t, n) { if (this.sort) {
                if (!n)
                    return void e.each(e.sortBy(this.children._views, "_index"), function (t, e) { t._index = e; });
                var r = e.isArray(t) ? e.max(t, "_index") : t;
                e.isObject(r) && this.children.each(function (t) { t._index >= r._index && (t._index += 1); });
            } }, _renderView: function (t) { t._isRendered || (t.supportsRenderLifecycle || a(t, "before:render", t), t.render(), t.supportsRenderLifecycle || (t._isRendered = !0, a(t, "render", t))); }, _attachView: function (t, e) { var n = !t._isAttached && !this._isBuffering && this._isAttached; n && a(t, "before:attach", t), this.attachHtml(this, t, e), n && (t._isAttached = !0, a(t, "attach", t)); }, buildChildView: function (t, n, r) { return new n(e.extend({ model: t }, r)); }, removeChildView: function (t) { return !t || t._isDestroyed ? t : (this._removeChildView(t), this.children._updateLength(), this._updateIndices(t, !1), t); }, isEmpty: function (t) { var n = void 0; return e.result(t, "processedModels") ? n = t.processedModels : (n = this.collection ? this.collection.models : [], n = this._filterModels(n)), 0 === n.length; }, attachBuffer: function (t, e) { this.appendChildren(t.el, e); }, _createBuffer: function () { var t = this, n = this.createBuffer(); return e.each(this._bufferedChildren, function (e) { t.appendChildren(n, e.el); }), n; }, attachHtml: function (t, e, n) { t._isBuffering ? t._bufferedChildren.splice(n, 0, e) : t._insertBefore(e, n) || t._insertAfter(e); }, _insertBefore: function (t, e) { var n = void 0; return this.sort && e < this.children.length - 1 && (n = this.children.find(function (t) { return t._index === e + 1; })), !!n && (this.beforeEl(n.el, t.el), !0); }, _insertAfter: function (t) { this.appendChildren(this.el, t.el); }, _initChildViewStorage: function () { this.children = new kt; }, _removeChildren: function () { this._destroyChildren(); }, _destroyChildren: function (t) { this.children.length && (this.triggerMethod("before:destroy:children", this), this.children.each(e.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod("destroy:children", this)); }, _shouldAddChild: function (t, n) { var r = this.filter; return !e.isFunction(r) || r.call(this, t, n, this.collection); } });
        e.extend(Ct.prototype, ht);
        var Mt = function () { this._init(); };
        xt(Mt.prototype, "_views"), e.extend(Mt.prototype, { _init: function () { this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength(); }, _add: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._views.length, n = t.cid; this._viewsByCid[n] = t, t.model && (this._indexByModel[t.model.cid] = n), this._views.splice(e, 0, t), this._updateLength(); }, _sort: function (t) { return "string" == typeof t ? (t = e.partial(L, t), this._sortBy(t)) : 1 === t.length ? this._sortBy(t) : this._views.sort(t); }, _sortBy: function (t) { var n = e.sortBy(this._views, t); return this._set(n), n; }, _set: function (t) { this._views.length = 0, this._views.push.apply(this._views, t.slice(0)), this._updateLength(); }, findByModel: function (t) { return this.findByModelCid(t.cid); }, findByModelCid: function (t) { var e = this._indexByModel[t]; return this.findByCid(e); }, findByIndex: function (t) { return this._views[t]; }, findIndexByView: function (t) { return this._views.indexOf(t); }, findByCid: function (t) { return this._viewsByCid[t]; }, _remove: function (t) { if (this._viewsByCid[t.cid]) {
                t.model && delete this._indexByModel[t.model.cid], delete this._viewsByCid[t.cid];
                var e = this.findIndexByView(t);
                this._views.splice(e, 1), this._updateLength();
            } }, _updateLength: function () { this.length = this._views.length; } });
        var jt = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"], Et = t.View.extend({ sortWithCollection: !0, constructor: function (e) { this._setOptions(e), this.mergeOptions(e, jt), y(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors(); var n = Array.prototype.slice.call(arguments); n[0] = this.options, t.View.prototype.constructor.apply(this, n), this._initEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this); }, _initChildViewStorage: function () { this.children = new Mt; }, _initEmptyRegion: function () { this.emptyRegion = new vt({ el: this.el }), this.emptyRegion._parentView = this; }, _initialEvents: function () { this.listenTo(this.collection, { sort: this._onCollectionSort, reset: this._onCollectionReset, update: this._onCollectionUpdate }); }, _onCollectionSort: function () { var t = this; if (this.sortWithCollection && this.collection.length === this.children.length) {
                this.collection.some(function (e) { return !t.children.findByModel(e); }) || this.sort();
            } }, _onCollectionReset: function () { this.render(); }, _onCollectionUpdate: function (t, e) { var n = e.changes, r = this._removeChildModels(n.removed); this._addChildModels(n.added), this._detachChildren(r), this._showChildren(), this._removeChildViews(r); }, _removeChildModels: function (t) { return e.map(t, e.bind(this._removeChildModel, this)); }, _removeChildModel: function (t) { var e = this.children.findByModel(t); return this._removeChild(e), e; }, _removeChild: function (t) { this.triggerMethod("before:remove:child", this, t), this.children._remove(t), this.triggerMethod("remove:child", this, t); }, _addChildModels: function (t) { return e.map(t, e.bind(this._addChildModel, this)); }, _addChildModel: function (t) { var e = this._createChildView(t); return this._addChild(e), e; }, _createChildView: function (t) { var e = this._getChildView(t), n = this._getChildViewOptions(t); return this.buildChildView(t, e, n); }, _addChild: function (t, e) { this.triggerMethod("before:add:child", this, t), this._setupChildView(t), this.children._add(t, e), this.triggerMethod("add:child", this, t); }, _getChildView: function (t) { var e = this.childView; if (!e)
                throw new Y({ name: "NoChildViewError", message: 'A "childView" must be specified' }); if (!(e = this._getView(e, t)))
                throw new Y({ name: "InvalidChildViewError", message: '"childView" must be a view class or a function that returns a view class' }); return e; }, _getView: function (n, r) { return n.prototype instanceof t.View || n === t.View ? n : e.isFunction(n) ? n.call(this, r) : void 0; }, _getChildViewOptions: function (t) { return e.isFunction(this.childViewOptions) ? this.childViewOptions(t) : this.childViewOptions; }, buildChildView: function (t, n, r) { return new n(e.extend({ model: t }, r)); }, _setupChildView: function (t) { y(t), t.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(t); }, _getImmediateChildren: function () { return this.children._views; }, setElement: function () { var e = !!this.el; return t.View.prototype.setElement.apply(this, arguments), e && (this._isAttached = U(this.el)), this; }, render: function () { return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._destroyChildren(), this.children._init(), this.collection && this._addChildModels(this.collection.models), this._showChildren(), this._isRendered = !0, this.triggerMethod("render", this), this); }, sort: function () { return this._isDestroyed ? this : this.children.length ? (this._showChildren(), this) : this; }, _showChildren: function () { if (this.isEmpty())
                return void this._showEmptyView(); this._sortChildren(), this.filter(); }, isEmpty: function (t) { return t || !this.children.length; }, _showEmptyView: function () { var t = this._getEmptyView(); if (t) {
                var e = this._getEmptyViewOptions();
                this.emptyRegion.show(new t(e));
            } }, _getEmptyView: function () { var t = this.emptyView; if (t)
                return this._getView(t); }, _destroyEmptyView: function () { this.emptyRegion.hasView() && this.emptyRegion.empty(); }, _getEmptyViewOptions: function () { var t = this.emptyViewOptions || this.childViewOptions; return e.isFunction(t) ? t.call(this) : t; }, _sortChildren: function () { this.triggerMethod("before:sort", this); var t = this.getComparator(); e.isFunction(t) && (t = t.bind(this)), this.children._sort(t), this.triggerMethod("sort", this); }, setComparator: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.preventRender, r = this.viewComparator !== t, i = r && !n; return this.viewComparator = t, i && this.sort(), this; }, removeComparator: function (t) { return this.setComparator(null, t); }, getComparator: function () { return this.viewComparator || this._viewComparator; }, _viewComparator: function (t) { if (this.collection)
                return this.collection.indexOf(t.model); }, filter: function () { if (this._isDestroyed)
                return this; if (!this.children.length)
                return this; var t = this._filterChildren(); return this._renderChildren(t), this; }, _filterChildren: function () { var t = this._getFilter(); if (!t)
                return this.children._views; this.triggerMethod("before:filter", this); var n = this.children.partition(e.bind(t, this)); return this._detachChildren(n[1]), this.triggerMethod("filter", this), n[0]; }, _getFilter: function () { var t = this.getFilter(); if (!t)
                return !1; if (e.isFunction(t))
                return t; if (e.isObject(t)) {
                var n = e.matches(t);
                return function (t) { return n(t.model && t.model.attributes); };
            } if (e.isString(t))
                return function (e) { return e.model && e.model.get(t); }; throw new Y({ name: "InvalidViewFilterError", message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy' }); }, getFilter: function () { return this.viewFilter; }, setFilter: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.preventRender, r = this.viewFilter !== t, i = r && !n; return this.viewFilter = t, i && this.filter(), this; }, removeFilter: function (t) { return this.setFilter(null, t); }, _detachChildren: function (t) { e.each(t, e.bind(this._detachChildView, this)); }, _detachChildView: function (t) { var e = !!t._isAttached; e && a(t, "before:detach", t), this.detachHtml(t), e && (t._isAttached = !1, a(t, "detach", t)); }, detachHtml: function (t) { this.detachEl(t.el); }, _renderChildren: function (t) { if (this.isEmpty(!t.length))
                return void this._showEmptyView(); this._destroyEmptyView(), this.triggerMethod("before:render:children", this, t); var e = this._getBuffer(t); this._attachChildren(e, t), this.triggerMethod("render:children", this, t); }, _attachChildren: function (t, n) { n = !this._isAttached ? [] : n, e.each(n, function (t) { t._isAttached || a(t, "before:attach", t); }), this.attachHtml(this, t), e.each(n, function (t) { t._isAttached || (t._isAttached = !0, a(t, "attach", t)); }); }, _getBuffer: function (t) { var n = this, r = this.createBuffer(); return e.each(t, function (t) { n._renderChildView(t), n.appendChildren(r, t.el); }), r; }, _renderChildView: function (t) { t._isRendered || (t.supportsRenderLifecycle || a(t, "before:render", t), t.render(), t.supportsRenderLifecycle || (t._isRendered = !0, a(t, "render", t))); }, attachHtml: function (t, e) { this.appendChildren(t.el, e); }, addChildView: function (t, e) { return !t || t._isDestroyed ? t : (this._addChild(t, e), this._showChildren(), t); }, detachChildView: function (t) { return this.removeChildView(t, { shouldDetach: !0 }), t; }, removeChildView: function (t, e) { return t ? (this._removeChildView(t, e), this._removeChild(t), this.isEmpty() && this._showEmptyView(), t) : t; }, _removeChildViews: function (t) { e.each(t, e.bind(this._removeChildView, this)); }, _removeChildView: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.shouldDetach; t.off("destroy", this.removeChildView, this), n ? this._detachChildView(t) : this._destroyChildView(t), this.stopListening(t); }, _destroyChildView: function (t) { t._isDestroyed || (t.destroy ? t.destroy() : R(t)); }, _removeChildren: function () { this._destroyChildren(), this.emptyRegion.destroy(); }, _destroyChildren: function () { this.children && this.children.length && (this.triggerMethod("before:destroy:children", this), this.children.each(e.bind(this._removeChildView, this)), this.triggerMethod("destroy:children", this)); } });
        e.extend(Et.prototype, ht);
        var St = ["childViewContainer", "template", "templateContext"], Tt = Ct.extend({ constructor: function (t) { I("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(t, St), Ct.prototype.constructor.apply(this, arguments); }, _initialEvents: function () { this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews)); }, _getChildView: function (t) { var e = this.childView; if (!e)
                return this.constructor; if (!(e = this._getView(e, t)))
                throw new Y({ name: "InvalidChildViewError", message: '"childView" must be a view class or a function that returns a view class' }); return e; }, serializeData: function () { return this.serializeModel(); }, render: function () { return this._isDestroyed ? this : (this._isRendering = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this.bindUIElements(), this.renderChildren(), this._isRendering = !1, this._isRendered = !0, this.triggerMethod("render", this), this); }, renderChildren: function () { (this._isRendered || this._isRendering) && Ct.prototype._renderChildren.call(this); }, attachBuffer: function (t, e) { var n = this.getChildViewContainer(t); this.appendChildren(n, e); }, _insertAfter: function (t) { var e = this.getChildViewContainer(this, t); this.appendChildren(e, t.el); }, _appendReorderedChildren: function (t) { var e = this.getChildViewContainer(this); this.appendChildren(e, t); }, getChildViewContainer: function (t, n) { if (t.$childViewContainer)
                return t.$childViewContainer; var r = void 0; if (t.childViewContainer) {
                var i = e.result(t, "childViewContainer");
                if (r = "@" === i.charAt(0) && t.ui ? t.ui[i.substr(4)] : this.findEls(i, t.$el), r.length <= 0)
                    throw new Y({ name: "ChildViewContainerMissingError", message: 'The specified "childViewContainer" was not found: ' + t.childViewContainer });
            }
            else
                r = t.$el; return t.$childViewContainer = r, r; }, resetChildViewContainer: function () { this.$childViewContainer && (this.$childViewContainer = void 0); } }), At = e.pick(_t.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        e.extend(Tt.prototype, At);
        var Nt = ["collectionEvents", "events", "modelEvents", "triggers", "ui"], Rt = Q.extend({ cidPrefix: "mnb", constructor: function (t, n) { this.view = n, this.defaults && I("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = e.clone(e.result(this, "defaults", {})), this._setOptions(this.defaults, t), this.mergeOptions(this.options, Nt), this.ui = e.extend({}, e.result(this, "ui"), e.result(n, "ui")), Q.apply(this, arguments); }, $: function () { return this.view.$.apply(this.view, arguments); }, destroy: function () { return this.stopListening(), this.view._removeBehavior(this), this; }, proxyViewProperties: function () { return this.$el = this.view.$el, this.el = this.view.el, this; }, bindUIElements: function () { return this._bindUIElements(), this; }, unbindUIElements: function () { return this._unbindUIElements(), this; }, getUI: function (t) { return this._getUI(t); }, delegateEntityEvents: function () { return this._delegateEntityEvents(this.view.model, this.view.collection), this; }, undelegateEntityEvents: function () { return this._undelegateEntityEvents(this.view.model, this.view.collection), this; }, getEvents: function () { var t = this, n = this.normalizeUIKeys(e.result(this, "events")); return e.reduce(n, function (n, r, i) { if (e.isFunction(r) || (r = t[r]), r)
                return i = ot(i), n[i] = e.bind(r, t), n; }, {}); }, getTriggers: function () { if (this.triggers) {
                var t = this.normalizeUIKeys(e.result(this, "triggers"));
                return this._getViewTriggers(this.view, t);
            } } });
        e.extend(Rt.prototype, it, ut, dt);
        var Pt = ["region", "regionClass"], Dt = Q.extend({ cidPrefix: "mna", constructor: function (t) { this._setOptions(t), this.mergeOptions(t, Pt), this._initRegion(), Q.prototype.constructor.apply(this, arguments); }, regionClass: vt, _initRegion: function () { var t = this.region; if (t) {
                var e = { regionClass: this.regionClass };
                this._region = gt(t, e);
            } }, getRegion: function () { return this._region; }, showView: function (t) { for (var e = this.getRegion(), n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                r[i - 1] = arguments[i]; return e.show.apply(e, [t].concat(r)); }, getView: function () { return this.getRegion().currentView; }, start: function (t) { return this.triggerMethod("before:start", this, t), this.triggerMethod("start", this, t), this; } }), Lt = ["appRoutes", "controller"], Vt = t.Router.extend({ constructor: function (e) { this._setOptions(e), this.mergeOptions(e, Lt), t.Router.apply(this, arguments); var n = this.appRoutes, r = this._getController(); this.processAppRoutes(r, n), this.on("route", this._processOnRoute, this); }, appRoute: function (t, e) { var n = this._getController(); return this._addAppRoute(n, t, e), this; }, _processOnRoute: function (t, n) { if (e.isFunction(this.onRoute)) {
                var r = e.invert(this.appRoutes)[t];
                this.onRoute(t, r, n);
            } }, processAppRoutes: function (t, n) { var r = this; if (!n)
                return this; var i = e.keys(n).reverse(); return e.each(i, function (e) { r._addAppRoute(t, e, n[e]); }), this; }, _getController: function () { return this.controller; }, _addAppRoute: function (t, n, r) { var i = t[r]; if (!i)
                throw new Y('Method "' + r + '" was not found on the controller'); this.route(n, r, e.bind(i, t)); }, triggerMethod: i });
        e.extend(Vt.prototype, K);
        var Bt = t.Marionette, zt = t.Marionette = {};
        return zt.noConflict = function () { return t.Marionette = Bt, this; }, zt.bindEvents = B(x), zt.unbindEvents = B(k), zt.bindRequests = B(C), zt.unbindRequests = B(M), zt.mergeOptions = B(F), zt.getOption = B(H), zt.normalizeMethods = B(q), zt.extend = z, zt.isNodeAttached = U, zt.deprecate = I, zt.triggerMethod = B(i), zt.triggerMethodOn = a, zt.isEnabled = T, zt.setEnabled = A, zt.monitorViewEvents = y, zt.Behaviors = {}, zt.Behaviors.behaviorsLookup = V, zt.Application = Dt, zt.AppRouter = Vt, zt.Renderer = bt, zt.TemplateCache = et, zt.View = _t, zt.CollectionView = Ct, zt.NextCollectionView = Et, zt.CompositeView = Tt, zt.Behavior = Rt, zt.Region = vt, zt.Error = Y, zt.Object = Q, zt.DEV_MODE = !1, zt.FEATURES = st, zt.VERSION = "3.3.1", zt;
    }); }, function (t, e, n) {
        "use strict";
        e.a = function (t) { for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e;)
            n[r] = "#" + t.slice(6 * r, 6 * ++r); return n; };
    }, function (t, e, n) {
        "use strict";
        var r = n(23);
        e.a = function (t) { return Object(r.interpolateRgbBasis)(t[t.length - 1]); };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(126);
        n.d(e, "creator", function () { return r.a; });
        var i = n(467);
        n.d(e, "local", function () { return i.a; });
        var a = n(196);
        n.d(e, "matcher", function () { return a.a; });
        var o = n(468);
        n.d(e, "mouse", function () { return o.a; });
        var s = n(127);
        n.d(e, "namespace", function () { return s.a; });
        var u = n(128);
        n.d(e, "namespaces", function () { return u.a; });
        var l = n(87);
        n.d(e, "clientPoint", function () { return l.a; });
        var c = n(469);
        n.d(e, "select", function () { return c.a; });
        var f = n(497);
        n.d(e, "selectAll", function () { return f.a; });
        var d = n(25);
        n.d(e, "selection", function () { return d.b; });
        var h = n(131);
        n.d(e, "selector", function () { return h.a; });
        var p = n(197);
        n.d(e, "selectorAll", function () { return p.a; });
        var v = n(200);
        n.d(e, "style", function () { return v.b; });
        var g = n(498);
        n.d(e, "touch", function () { return g.a; });
        var m = n(499);
        n.d(e, "touches", function () { return m.a; });
        var b = n(132);
        n.d(e, "window", function () { return b.a; });
        var y = n(130);
        n.d(e, "event", function () { return y.c; }), n.d(e, "customEvent", function () { return y.a; });
    }, function (t, e) { var n = t.exports = { version: "2.5.3" }; "number" == typeof __e && (__e = n); }, function (t, e, n) { (function (r) { var i, a; !function (o) { var s = "object" == typeof self && self.self === self && self || "object" == typeof r && r.global === r && r; i = [n(16), n(27), e], void 0 !== (a = function (t, e, n) { s.Backbone = o(s, n, t, e); }.apply(e, i)) && (t.exports = a); }(function (t, e, n, r) { var i = t.Backbone, a = Array.prototype.slice; e.VERSION = "1.3.3", e.$ = r, e.noConflict = function () { return t.Backbone = i, this; }, e.emulateHTTP = !1, e.emulateJSON = !1; var o = function (t, e, r) { switch (t) {
        case 1: return function () { return n[e](this[r]); };
        case 2: return function (t) { return n[e](this[r], t); };
        case 3: return function (t, i) { return n[e](this[r], u(t, this), i); };
        case 4: return function (t, i, a) { return n[e](this[r], u(t, this), i, a); };
        default: return function () { var t = a.call(arguments); return t.unshift(this[r]), n[e].apply(n, t); };
    } }, s = function (t, e, r) { n.each(e, function (e, i) { n[i] && (t.prototype[i] = o(e, i, r)); }); }, u = function (t, e) { return n.isFunction(t) ? t : n.isObject(t) && !e._isModel(t) ? l(t) : n.isString(t) ? function (e) { return e.get(t); } : t; }, l = function (t) { var e = n.matches(t); return function (t) { return e(t.attributes); }; }, c = e.Events = {}, f = /\s+/, d = function (t, e, r, i, a) { var o, s = 0; if (r && "object" == typeof r) {
        void 0 !== i && "context" in a && void 0 === a.context && (a.context = i);
        for (o = n.keys(r); s < o.length; s++)
            e = d(t, e, o[s], r[o[s]], a);
    }
    else if (r && f.test(r))
        for (o = r.split(f); s < o.length; s++)
            e = t(e, o[s], i, a);
    else
        e = t(e, r, i, a); return e; }; c.on = function (t, e, n) { return h(this, t, e, n); }; var h = function (t, e, n, r, i) { if (t._events = d(p, t._events || {}, e, n, { context: r, ctx: t, listening: i }), i) {
        (t._listeners || (t._listeners = {}))[i.id] = i;
    } return t; }; c.listenTo = function (t, e, r) { if (!t)
        return this; var i = t._listenId || (t._listenId = n.uniqueId("l")), a = this._listeningTo || (this._listeningTo = {}), o = a[i]; if (!o) {
        var s = this._listenId || (this._listenId = n.uniqueId("l"));
        o = a[i] = { obj: t, objId: i, id: s, listeningTo: a, count: 0 };
    } return h(t, e, r, this, o), this; }; var p = function (t, e, n, r) { if (n) {
        var i = t[e] || (t[e] = []), a = r.context, o = r.ctx, s = r.listening;
        s && s.count++, i.push({ callback: n, context: a, ctx: a || o, listening: s });
    } return t; }; c.off = function (t, e, n) { return this._events ? (this._events = d(v, this._events, t, e, { context: n, listeners: this._listeners }), this) : this; }, c.stopListening = function (t, e, r) { var i = this._listeningTo; if (!i)
        return this; for (var a = t ? [t._listenId] : n.keys(i), o = 0; o < a.length; o++) {
        var s = i[a[o]];
        if (!s)
            break;
        s.obj.off(e, r, this);
    } return this; }; var v = function (t, e, r, i) { if (t) {
        var a, o = 0, s = i.context, u = i.listeners;
        if (e || r || s) {
            for (var l = e ? [e] : n.keys(t); o < l.length; o++) {
                e = l[o];
                var c = t[e];
                if (!c)
                    break;
                for (var f = [], d = 0; d < c.length; d++) {
                    var h = c[d];
                    r && r !== h.callback && r !== h.callback._callback || s && s !== h.context ? f.push(h) : (a = h.listening) && 0 == --a.count && (delete u[a.id], delete a.listeningTo[a.objId]);
                }
                f.length ? t[e] = f : delete t[e];
            }
            return t;
        }
        for (var p = n.keys(u); o < p.length; o++)
            a = u[p[o]], delete u[a.id], delete a.listeningTo[a.objId];
    } }; c.once = function (t, e, r) { var i = d(g, {}, t, e, n.bind(this.off, this)); return "string" == typeof t && null == r && (e = void 0), this.on(i, e, r); }, c.listenToOnce = function (t, e, r) { var i = d(g, {}, e, r, n.bind(this.stopListening, this, t)); return this.listenTo(t, i); }; var g = function (t, e, r, i) { if (r) {
        var a = t[e] = n.once(function () { i(e, a), r.apply(this, arguments); });
        a._callback = r;
    } return t; }; c.trigger = function (t) { if (!this._events)
        return this; for (var e = Math.max(0, arguments.length - 1), n = Array(e), r = 0; r < e; r++)
        n[r] = arguments[r + 1]; return d(m, this._events, t, void 0, n), this; }; var m = function (t, e, n, r) { if (t) {
        var i = t[e], a = t.all;
        i && a && (a = a.slice()), i && b(i, r), a && b(a, [e].concat(r));
    } return t; }, b = function (t, e) { var n, r = -1, i = t.length, a = e[0], o = e[1], s = e[2]; switch (e.length) {
        case 0:
            for (; ++r < i;)
                (n = t[r]).callback.call(n.ctx);
            return;
        case 1:
            for (; ++r < i;)
                (n = t[r]).callback.call(n.ctx, a);
            return;
        case 2:
            for (; ++r < i;)
                (n = t[r]).callback.call(n.ctx, a, o);
            return;
        case 3:
            for (; ++r < i;)
                (n = t[r]).callback.call(n.ctx, a, o, s);
            return;
        default:
            for (; ++r < i;)
                (n = t[r]).callback.apply(n.ctx, e);
            return;
    } }; c.bind = c.on, c.unbind = c.off, n.extend(e, c); var y = e.Model = function (t, e) { var r = t || {}; e || (e = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (r = this.parse(r, e) || {}); var i = n.result(this, "defaults"); r = n.defaults(n.extend({}, i, r), i), this.set(r, e), this.changed = {}, this.initialize.apply(this, arguments); }; n.extend(y.prototype, c, { changed: null, validationError: null, idAttribute: "id", cidPrefix: "c", initialize: function () { }, toJSON: function (t) { return n.clone(this.attributes); }, sync: function () { return e.sync.apply(this, arguments); }, get: function (t) { return this.attributes[t]; }, escape: function (t) { return n.escape(this.get(t)); }, has: function (t) { return null != this.get(t); }, matches: function (t) { return !!n.iteratee(t, this)(this.attributes); }, set: function (t, e, r) { if (null == t)
            return this; var i; if ("object" == typeof t ? (i = t, r = e) : (i = {})[t] = e, r || (r = {}), !this._validate(i, r))
            return !1; var a = r.unset, o = r.silent, s = [], u = this._changing; this._changing = !0, u || (this._previousAttributes = n.clone(this.attributes), this.changed = {}); var l = this.attributes, c = this.changed, f = this._previousAttributes; for (var d in i)
            e = i[d], n.isEqual(l[d], e) || s.push(d), n.isEqual(f[d], e) ? delete c[d] : c[d] = e, a ? delete l[d] : l[d] = e; if (this.idAttribute in i && (this.id = this.get(this.idAttribute)), !o) {
            s.length && (this._pending = r);
            for (var h = 0; h < s.length; h++)
                this.trigger("change:" + s[h], this, l[s[h]], r);
        } if (u)
            return this; if (!o)
            for (; this._pending;)
                r = this._pending, this._pending = !1, this.trigger("change", this, r); return this._pending = !1, this._changing = !1, this; }, unset: function (t, e) { return this.set(t, void 0, n.extend({}, e, { unset: !0 })); }, clear: function (t) { var e = {}; for (var r in this.attributes)
            e[r] = void 0; return this.set(e, n.extend({}, t, { unset: !0 })); }, hasChanged: function (t) { return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t); }, changedAttributes: function (t) { if (!t)
            return !!this.hasChanged() && n.clone(this.changed); var e = this._changing ? this._previousAttributes : this.attributes, r = {}; for (var i in t) {
            var a = t[i];
            n.isEqual(e[i], a) || (r[i] = a);
        } return !!n.size(r) && r; }, previous: function (t) { return null != t && this._previousAttributes ? this._previousAttributes[t] : null; }, previousAttributes: function () { return n.clone(this._previousAttributes); }, fetch: function (t) { t = n.extend({ parse: !0 }, t); var e = this, r = t.success; return t.success = function (n) { var i = t.parse ? e.parse(n, t) : n; if (!e.set(i, t))
            return !1; r && r.call(t.context, e, n, t), e.trigger("sync", e, n, t); }, z(this, t), this.sync("read", this, t); }, save: function (t, e, r) { var i; null == t || "object" == typeof t ? (i = t, r = e) : (i = {})[t] = e, r = n.extend({ validate: !0, parse: !0 }, r); var a = r.wait; if (i && !a) {
            if (!this.set(i, r))
                return !1;
        }
        else if (!this._validate(i, r))
            return !1; var o = this, s = r.success, u = this.attributes; r.success = function (t) { o.attributes = u; var e = r.parse ? o.parse(t, r) : t; if (a && (e = n.extend({}, i, e)), e && !o.set(e, r))
            return !1; s && s.call(r.context, o, t, r), o.trigger("sync", o, t, r); }, z(this, r), i && a && (this.attributes = n.extend({}, u, i)); var l = this.isNew() ? "create" : r.patch ? "patch" : "update"; "patch" !== l || r.attrs || (r.attrs = i); var c = this.sync(l, this, r); return this.attributes = u, c; }, destroy: function (t) { t = t ? n.clone(t) : {}; var e = this, r = t.success, i = t.wait, a = function () { e.stopListening(), e.trigger("destroy", e, e.collection, t); }; t.success = function (n) { i && a(), r && r.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t); }; var o = !1; return this.isNew() ? n.defer(t.success) : (z(this, t), o = this.sync("delete", this, t)), i || a(), o; }, url: function () { var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || B(); if (this.isNew())
            return t; var e = this.get(this.idAttribute); return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e); }, parse: function (t, e) { return t; }, clone: function () { return new this.constructor(this.attributes); }, isNew: function () { return !this.has(this.idAttribute); }, isValid: function (t) { return this._validate({}, n.extend({}, t, { validate: !0 })); }, _validate: function (t, e) { if (!e.validate || !this.validate)
            return !0; t = n.extend({}, this.attributes, t); var r = this.validationError = this.validate(t, e) || null; return !r || (this.trigger("invalid", this, r, n.extend(e, { validationError: r })), !1); } }), s(y, { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }, "attributes"); var _ = e.Collection = function (t, e) { e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({ silent: !0 }, e)); }, w = { add: !0, remove: !0, merge: !0 }, x = { add: !0, remove: !1 }, k = function (t, e, n) { n = Math.min(Math.max(n, 0), t.length); var r, i = Array(t.length - n), a = e.length; for (r = 0; r < i.length; r++)
        i[r] = t[r + n]; for (r = 0; r < a; r++)
        t[r + n] = e[r]; for (r = 0; r < i.length; r++)
        t[r + a + n] = i[r]; }; n.extend(_.prototype, c, { model: y, initialize: function () { }, toJSON: function (t) { return this.map(function (e) { return e.toJSON(t); }); }, sync: function () { return e.sync.apply(this, arguments); }, add: function (t, e) { return this.set(t, n.extend({ merge: !1 }, e, x)); }, remove: function (t, e) { e = n.extend({}, e); var r = !n.isArray(t); t = r ? [t] : t.slice(); var i = this._removeModels(t, e); return !e.silent && i.length && (e.changes = { added: [], merged: [], removed: i }, this.trigger("update", this, e)), r ? i[0] : i; }, set: function (t, e) { if (null != t) {
            e = n.extend({}, w, e), e.parse && !this._isModel(t) && (t = this.parse(t, e) || []);
            var r = !n.isArray(t);
            t = r ? [t] : t.slice();
            var i = e.at;
            null != i && (i = +i), i > this.length && (i = this.length), i < 0 && (i += this.length + 1);
            var a, o, s = [], u = [], l = [], c = [], f = {}, d = e.add, h = e.merge, p = e.remove, v = !1, g = this.comparator && null == i && !1 !== e.sort, m = n.isString(this.comparator) ? this.comparator : null;
            for (o = 0; o < t.length; o++) {
                a = t[o];
                var b = this.get(a);
                if (b) {
                    if (h && a !== b) {
                        var y = this._isModel(a) ? a.attributes : a;
                        e.parse && (y = b.parse(y, e)), b.set(y, e), l.push(b), g && !v && (v = b.hasChanged(m));
                    }
                    f[b.cid] || (f[b.cid] = !0, s.push(b)), t[o] = b;
                }
                else
                    d && (a = t[o] = this._prepareModel(a, e)) && (u.push(a), this._addReference(a, e), f[a.cid] = !0, s.push(a));
            }
            if (p) {
                for (o = 0; o < this.length; o++)
                    a = this.models[o], f[a.cid] || c.push(a);
                c.length && this._removeModels(c, e);
            }
            var _ = !1, x = !g && d && p;
            if (s.length && x ? (_ = this.length !== s.length || n.some(this.models, function (t, e) { return t !== s[e]; }), this.models.length = 0, k(this.models, s, 0), this.length = this.models.length) : u.length && (g && (v = !0), k(this.models, u, null == i ? this.length : i), this.length = this.models.length), v && this.sort({ silent: !0 }), !e.silent) {
                for (o = 0; o < u.length; o++)
                    null != i && (e.index = i + o), a = u[o], a.trigger("add", a, this, e);
                (v || _) && this.trigger("sort", this, e), (u.length || c.length || l.length) && (e.changes = { added: u, removed: c, merged: l }, this.trigger("update", this, e));
            }
            return r ? t[0] : t;
        } }, reset: function (t, e) { e = e ? n.clone(e) : {}; for (var r = 0; r < this.models.length; r++)
            this._removeReference(this.models[r], e); return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({ silent: !0 }, e)), e.silent || this.trigger("reset", this, e), t; }, push: function (t, e) { return this.add(t, n.extend({ at: this.length }, e)); }, pop: function (t) { var e = this.at(this.length - 1); return this.remove(e, t); }, unshift: function (t, e) { return this.add(t, n.extend({ at: 0 }, e)); }, shift: function (t) { var e = this.at(0); return this.remove(e, t); }, slice: function () { return a.apply(this.models, arguments); }, get: function (t) { if (null != t)
            return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || t.cid && this._byId[t.cid]; }, has: function (t) { return null != this.get(t); }, at: function (t) { return t < 0 && (t += this.length), this.models[t]; }, where: function (t, e) { return this[e ? "find" : "filter"](t); }, findWhere: function (t) { return this.where(t, !0); }, sort: function (t) { var e = this.comparator; if (!e)
            throw new Error("Cannot sort a set without a comparator"); t || (t = {}); var r = e.length; return n.isFunction(e) && (e = n.bind(e, this)), 1 === r || n.isString(e) ? this.models = this.sortBy(e) : this.models.sort(e), t.silent || this.trigger("sort", this, t), this; }, pluck: function (t) { return this.map(t + ""); }, fetch: function (t) { t = n.extend({ parse: !0 }, t); var e = t.success, r = this; return t.success = function (n) { var i = t.reset ? "reset" : "set"; r[i](n, t), e && e.call(t.context, r, n, t), r.trigger("sync", r, n, t); }, z(this, t), this.sync("read", this, t); }, create: function (t, e) { e = e ? n.clone(e) : {}; var r = e.wait; if (!(t = this._prepareModel(t, e)))
            return !1; r || this.add(t, e); var i = this, a = e.success; return e.success = function (t, e, n) { r && i.add(t, n), a && a.call(n.context, t, e, n); }, t.save(null, e), t; }, parse: function (t, e) { return t; }, clone: function () { return new this.constructor(this.models, { model: this.model, comparator: this.comparator }); }, modelId: function (t) { return t[this.model.prototype.idAttribute || "id"]; }, _reset: function () { this.length = 0, this.models = [], this._byId = {}; }, _prepareModel: function (t, e) { if (this._isModel(t))
            return t.collection || (t.collection = this), t; e = e ? n.clone(e) : {}, e.collection = this; var r = new this.model(t, e); return r.validationError ? (this.trigger("invalid", this, r.validationError, e), !1) : r; }, _removeModels: function (t, e) { for (var n = [], r = 0; r < t.length; r++) {
            var i = this.get(t[r]);
            if (i) {
                var a = this.indexOf(i);
                this.models.splice(a, 1), this.length--, delete this._byId[i.cid];
                var o = this.modelId(i.attributes);
                null != o && delete this._byId[o], e.silent || (e.index = a, i.trigger("remove", i, this, e)), n.push(i), this._removeReference(i, e);
            }
        } return n; }, _isModel: function (t) { return t instanceof y; }, _addReference: function (t, e) { this._byId[t.cid] = t; var n = this.modelId(t.attributes); null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this); }, _removeReference: function (t, e) { delete this._byId[t.cid]; var n = this.modelId(t.attributes); null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this); }, _onModelEvent: function (t, e, n, r) { if (e) {
            if (("add" === t || "remove" === t) && n !== this)
                return;
            if ("destroy" === t && this.remove(e, r), "change" === t) {
                var i = this.modelId(e.previousAttributes()), a = this.modelId(e.attributes);
                i !== a && (null != i && delete this._byId[i], null != a && (this._byId[a] = e));
            }
        } this.trigger.apply(this, arguments); } }), s(_, { forEach: 3, each: 3, map: 3, collect: 3, reduce: 0, foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3, select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3, contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3, head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3, without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3, isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3, sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3 }, "models"); var O = e.View = function (t) { this.cid = n.uniqueId("view"), n.extend(this, n.pick(t, M)), this._ensureElement(), this.initialize.apply(this, arguments); }, C = /^(\S+)\s*(.*)$/, M = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"]; n.extend(O.prototype, c, { tagName: "div", $: function (t) { return this.$el.find(t); }, initialize: function () { }, render: function () { return this; }, remove: function () { return this._removeElement(), this.stopListening(), this; }, _removeElement: function () { this.$el.remove(); }, setElement: function (t) { return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this; }, _setElement: function (t) { this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0]; }, delegateEvents: function (t) { if (t || (t = n.result(this, "events")), !t)
            return this; this.undelegateEvents(); for (var e in t) {
            var r = t[e];
            if (n.isFunction(r) || (r = this[r]), r) {
                var i = e.match(C);
                this.delegate(i[1], i[2], n.bind(r, this));
            }
        } return this; }, delegate: function (t, e, n) { return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this; }, undelegateEvents: function () { return this.$el && this.$el.off(".delegateEvents" + this.cid), this; }, undelegate: function (t, e, n) { return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this; }, _createElement: function (t) { return document.createElement(t); }, _ensureElement: function () { if (this.el)
            this.setElement(n.result(this, "el"));
        else {
            var t = n.extend({}, n.result(this, "attributes"));
            this.id && (t.id = n.result(this, "id")), this.className && (t.class = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(t);
        } }, _setAttributes: function (t) { this.$el.attr(t); } }), e.sync = function (t, r, i) { var a = j[t]; n.defaults(i || (i = {}), { emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON }); var o = { type: a, dataType: "json" }; if (i.url || (o.url = n.result(r, "url") || B()), null != i.data || !r || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? { model: o.data } : {}), i.emulateHTTP && ("PUT" === a || "DELETE" === a || "PATCH" === a)) {
        o.type = "POST", i.emulateJSON && (o.data._method = a);
        var s = i.beforeSend;
        i.beforeSend = function (t) { if (t.setRequestHeader("X-HTTP-Method-Override", a), s)
            return s.apply(this, arguments); };
    } "GET" === o.type || i.emulateJSON || (o.processData = !1); var u = i.error; i.error = function (t, e, n) { i.textStatus = e, i.errorThrown = n, u && u.call(i.context, t, e, n); }; var l = i.xhr = e.ajax(n.extend(o, i)); return r.trigger("request", r, l, i), l; }; var j = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" }; e.ajax = function () { return e.$.ajax.apply(e.$, arguments); }; var E = e.Router = function (t) { t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments); }, S = /\((.*?)\)/g, T = /(\(\?)?:\w+/g, A = /\*\w+/g, N = /[\-{}\[\]+?.,\\\^$|#\s]/g; n.extend(E.prototype, c, { initialize: function () { }, route: function (t, r, i) { n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]); var a = this; return e.history.route(t, function (n) { var o = a._extractParameters(t, n); !1 !== a.execute(i, o, r) && (a.trigger.apply(a, ["route:" + r].concat(o)), a.trigger("route", r, o), e.history.trigger("route", a, r, o)); }), this; }, execute: function (t, e, n) { t && t.apply(this, e); }, navigate: function (t, n) { return e.history.navigate(t, n), this; }, _bindRoutes: function () { if (this.routes) {
            this.routes = n.result(this, "routes");
            for (var t, e = n.keys(this.routes); null != (t = e.pop());)
                this.route(t, this.routes[t]);
        } }, _routeToRegExp: function (t) { return t = t.replace(N, "\\$&").replace(S, "(?:$1)?").replace(T, function (t, e) { return e ? t : "([^/?]+)"; }).replace(A, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$"); }, _extractParameters: function (t, e) { var r = t.exec(e).slice(1); return n.map(r, function (t, e) { return e === r.length - 1 ? t || null : t ? decodeURIComponent(t) : null; }); } }); var R = e.History = function () { this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history); }, P = /^[#\/]|\s+$/g, D = /^\/+|\/+$/g, L = /#.*$/; R.started = !1, n.extend(R.prototype, c, { interval: 50, atRoot: function () { return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch(); }, matchRoot: function () { return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root; }, decodeFragment: function (t) { return decodeURI(t.replace(/%25/g, "%2525")); }, getSearch: function () { var t = this.location.href.replace(/#.*/, "").match(/\?.+/); return t ? t[0] : ""; }, getHash: function (t) { var e = (t || this).location.href.match(/#(.*)$/); return e ? e[1] : ""; }, getPath: function () { var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1); return "/" === t.charAt(0) ? t.slice(1) : t; }, getFragment: function (t) { return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(P, ""); }, start: function (t) { if (R.started)
            throw new Error("Backbone.history has already been started"); if (R.started = !0, this.options = n.extend({ root: "/" }, this.options, t), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(D, "/"), this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !this.atRoot()) {
                var e = this.root.slice(0, -1) || "/";
                return this.location.replace(e + "#" + this.getPath()), !0;
            }
            this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
        } if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
            this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
            var r = document.body, i = r.insertBefore(this.iframe, r.firstChild).contentWindow;
            i.document.open(), i.document.close(), i.location.hash = "#" + this.fragment;
        } var a = window.addEventListener || function (t, e) { return attachEvent("on" + t, e); }; if (this._usePushState ? a("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? a("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent)
            return this.loadUrl(); }, stop: function () { var t = window.removeEventListener || function (t, e) { return detachEvent("on" + t, e); }; this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), R.started = !1; }, route: function (t, e) { this.handlers.unshift({ route: t, callback: e }); }, checkUrl: function (t) { var e = this.getFragment(); if (e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment)
            return !1; this.iframe && this.navigate(e), this.loadUrl(); }, loadUrl: function (t) { return !!this.matchRoot() && (t = this.fragment = this.getFragment(t), n.some(this.handlers, function (e) { if (e.route.test(t))
            return e.callback(t), !0; })); }, navigate: function (t, e) { if (!R.started)
            return !1; e && !0 !== e || (e = { trigger: !!e }), t = this.getFragment(t || ""); var n = this.root; "" !== t && "?" !== t.charAt(0) || (n = n.slice(0, -1) || "/"); var r = n + t; if (t = this.decodeFragment(t.replace(L, "")), this.fragment !== t) {
            if (this.fragment = t, this._usePushState)
                this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, r);
            else {
                if (!this._wantsHashChange)
                    return this.location.assign(r);
                if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                    var i = this.iframe.contentWindow;
                    e.replace || (i.document.open(), i.document.close()), this._updateHash(i.location, t, e.replace);
                }
            }
            return e.trigger ? this.loadUrl(t) : void 0;
        } }, _updateHash: function (t, e, n) { if (n) {
            var r = t.href.replace(/(javascript:|#).*$/, "");
            t.replace(r + "#" + e);
        }
        else
            t.hash = "#" + e; } }), e.history = new R; var V = function (t, e) { var r, i = this; return r = t && n.has(t, "constructor") ? t.constructor : function () { return i.apply(this, arguments); }, n.extend(r, i, e), r.prototype = n.create(i.prototype, t), r.prototype.constructor = r, r.__super__ = i.prototype, r; }; y.extend = _.extend = E.extend = O.extend = R.extend = V; var B = function () { throw new Error('A "url" property or function must be specified'); }, z = function (t, e) { var n = e.error; e.error = function (r) { n && n.call(e.context, t, r, e), t.trigger("error", t, r, e); }; }; return e; }); }).call(e, n(74)); }, function (t, e, n) { t.exports = { default: n(304), __esModule: !0 }; }, function (t, e, n) { var r, i; (function () { function n(t) { function e(e, n, r, i, a, o) { for (; a >= 0 && a < o; a += t) {
        var s = i ? i[a] : a;
        r = n(r, e[s], s, e);
    } return r; } return function (n, r, i, a) { r = k(r, a, 4); var o = !T(n) && x.keys(n), s = (o || n).length, u = t > 0 ? 0 : s - 1; return arguments.length < 3 && (i = n[o ? o[u] : u], u += t), e(n, r, i, o, u, s); }; } function a(t) { return function (e, n, r) { n = O(n, r); for (var i = S(e), a = t > 0 ? 0 : i - 1; a >= 0 && a < i; a += t)
        if (n(e[a], a, e))
            return a; return -1; }; } function o(t, e, n) { return function (r, i, a) { var o = 0, s = S(r); if ("number" == typeof a)
        t > 0 ? o = a >= 0 ? a : Math.max(a + s, o) : s = a >= 0 ? Math.min(a + 1, s) : a + s + 1;
    else if (n && a && s)
        return a = n(r, i), r[a] === i ? a : -1; if (i !== i)
        return a = e(p.call(r, o, s), x.isNaN), a >= 0 ? a + o : -1; for (a = t > 0 ? o : s - 1; a >= 0 && a < s; a += t)
        if (r[a] === i)
            return a; return -1; }; } function s(t, e) { var n = D.length, r = t.constructor, i = x.isFunction(r) && r.prototype || f, a = "constructor"; for (x.has(t, a) && !x.contains(e, a) && e.push(a); n--;)
        (a = D[n]) in t && t[a] !== i[a] && !x.contains(e, a) && e.push(a); } var u = this, l = u._, c = Array.prototype, f = Object.prototype, d = Function.prototype, h = c.push, p = c.slice, v = f.toString, g = f.hasOwnProperty, m = Array.isArray, b = Object.keys, y = d.bind, _ = Object.create, w = function () { }, x = function (t) { return t instanceof x ? t : this instanceof x ? void (this._wrapped = t) : new x(t); }; void 0 !== t && t.exports && (e = t.exports = x), e._ = x, x.VERSION = "1.8.3"; var k = function (t, e, n) { if (void 0 === e)
        return t; switch (null == n ? 3 : n) {
        case 1: return function (n) { return t.call(e, n); };
        case 2: return function (n, r) { return t.call(e, n, r); };
        case 3: return function (n, r, i) { return t.call(e, n, r, i); };
        case 4: return function (n, r, i, a) { return t.call(e, n, r, i, a); };
    } return function () { return t.apply(e, arguments); }; }, O = function (t, e, n) { return null == t ? x.identity : x.isFunction(t) ? k(t, e, n) : x.isObject(t) ? x.matcher(t) : x.property(t); }; x.iteratee = function (t, e) { return O(t, e, 1 / 0); }; var C = function (t, e) { return function (n) { var r = arguments.length; if (r < 2 || null == n)
        return n; for (var i = 1; i < r; i++)
        for (var a = arguments[i], o = t(a), s = o.length, u = 0; u < s; u++) {
            var l = o[u];
            e && void 0 !== n[l] || (n[l] = a[l]);
        } return n; }; }, M = function (t) { if (!x.isObject(t))
        return {}; if (_)
        return _(t); w.prototype = t; var e = new w; return w.prototype = null, e; }, j = function (t) { return function (e) { return null == e ? void 0 : e[t]; }; }, E = Math.pow(2, 53) - 1, S = j("length"), T = function (t) { var e = S(t); return "number" == typeof e && e >= 0 && e <= E; }; x.each = x.forEach = function (t, e, n) { e = k(e, n); var r, i; if (T(t))
        for (r = 0, i = t.length; r < i; r++)
            e(t[r], r, t);
    else {
        var a = x.keys(t);
        for (r = 0, i = a.length; r < i; r++)
            e(t[a[r]], a[r], t);
    } return t; }, x.map = x.collect = function (t, e, n) { e = O(e, n); for (var r = !T(t) && x.keys(t), i = (r || t).length, a = Array(i), o = 0; o < i; o++) {
        var s = r ? r[o] : o;
        a[o] = e(t[s], s, t);
    } return a; }, x.reduce = x.foldl = x.inject = n(1), x.reduceRight = x.foldr = n(-1), x.find = x.detect = function (t, e, n) { var r; if (void 0 !== (r = T(t) ? x.findIndex(t, e, n) : x.findKey(t, e, n)) && -1 !== r)
        return t[r]; }, x.filter = x.select = function (t, e, n) { var r = []; return e = O(e, n), x.each(t, function (t, n, i) { e(t, n, i) && r.push(t); }), r; }, x.reject = function (t, e, n) { return x.filter(t, x.negate(O(e)), n); }, x.every = x.all = function (t, e, n) { e = O(e, n); for (var r = !T(t) && x.keys(t), i = (r || t).length, a = 0; a < i; a++) {
        var o = r ? r[a] : a;
        if (!e(t[o], o, t))
            return !1;
    } return !0; }, x.some = x.any = function (t, e, n) { e = O(e, n); for (var r = !T(t) && x.keys(t), i = (r || t).length, a = 0; a < i; a++) {
        var o = r ? r[a] : a;
        if (e(t[o], o, t))
            return !0;
    } return !1; }, x.contains = x.includes = x.include = function (t, e, n, r) { return T(t) || (t = x.values(t)), ("number" != typeof n || r) && (n = 0), x.indexOf(t, e, n) >= 0; }, x.invoke = function (t, e) { var n = p.call(arguments, 2), r = x.isFunction(e); return x.map(t, function (t) { var i = r ? e : t[e]; return null == i ? i : i.apply(t, n); }); }, x.pluck = function (t, e) { return x.map(t, x.property(e)); }, x.where = function (t, e) { return x.filter(t, x.matcher(e)); }, x.findWhere = function (t, e) { return x.find(t, x.matcher(e)); }, x.max = function (t, e, n) { var r, i, a = -1 / 0, o = -1 / 0; if (null == e && null != t) {
        t = T(t) ? t : x.values(t);
        for (var s = 0, u = t.length; s < u; s++)
            (r = t[s]) > a && (a = r);
    }
    else
        e = O(e, n), x.each(t, function (t, n, r) { ((i = e(t, n, r)) > o || i === -1 / 0 && a === -1 / 0) && (a = t, o = i); }); return a; }, x.min = function (t, e, n) { var r, i, a = 1 / 0, o = 1 / 0; if (null == e && null != t) {
        t = T(t) ? t : x.values(t);
        for (var s = 0, u = t.length; s < u; s++)
            (r = t[s]) < a && (a = r);
    }
    else
        e = O(e, n), x.each(t, function (t, n, r) { ((i = e(t, n, r)) < o || i === 1 / 0 && a === 1 / 0) && (a = t, o = i); }); return a; }, x.shuffle = function (t) { for (var e, n = T(t) ? t : x.values(t), r = n.length, i = Array(r), a = 0; a < r; a++)
        e = x.random(0, a), e !== a && (i[a] = i[e]), i[e] = n[a]; return i; }, x.sample = function (t, e, n) { return null == e || n ? (T(t) || (t = x.values(t)), t[x.random(t.length - 1)]) : x.shuffle(t).slice(0, Math.max(0, e)); }, x.sortBy = function (t, e, n) { return e = O(e, n), x.pluck(x.map(t, function (t, n, r) { return { value: t, index: n, criteria: e(t, n, r) }; }).sort(function (t, e) { var n = t.criteria, r = e.criteria; if (n !== r) {
        if (n > r || void 0 === n)
            return 1;
        if (n < r || void 0 === r)
            return -1;
    } return t.index - e.index; }), "value"); }; var A = function (t) { return function (e, n, r) { var i = {}; return n = O(n, r), x.each(e, function (r, a) { var o = n(r, a, e); t(i, r, o); }), i; }; }; x.groupBy = A(function (t, e, n) { x.has(t, n) ? t[n].push(e) : t[n] = [e]; }), x.indexBy = A(function (t, e, n) { t[n] = e; }), x.countBy = A(function (t, e, n) { x.has(t, n) ? t[n]++ : t[n] = 1; }), x.toArray = function (t) { return t ? x.isArray(t) ? p.call(t) : T(t) ? x.map(t, x.identity) : x.values(t) : []; }, x.size = function (t) { return null == t ? 0 : T(t) ? t.length : x.keys(t).length; }, x.partition = function (t, e, n) { e = O(e, n); var r = [], i = []; return x.each(t, function (t, n, a) { (e(t, n, a) ? r : i).push(t); }), [r, i]; }, x.first = x.head = x.take = function (t, e, n) { if (null != t)
        return null == e || n ? t[0] : x.initial(t, t.length - e); }, x.initial = function (t, e, n) { return p.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e))); }, x.last = function (t, e, n) { if (null != t)
        return null == e || n ? t[t.length - 1] : x.rest(t, Math.max(0, t.length - e)); }, x.rest = x.tail = x.drop = function (t, e, n) { return p.call(t, null == e || n ? 1 : e); }, x.compact = function (t) { return x.filter(t, x.identity); }; var N = function (t, e, n, r) { for (var i = [], a = 0, o = r || 0, s = S(t); o < s; o++) {
        var u = t[o];
        if (T(u) && (x.isArray(u) || x.isArguments(u))) {
            e || (u = N(u, e, n));
            var l = 0, c = u.length;
            for (i.length += c; l < c;)
                i[a++] = u[l++];
        }
        else
            n || (i[a++] = u);
    } return i; }; x.flatten = function (t, e) { return N(t, e, !1); }, x.without = function (t) { return x.difference(t, p.call(arguments, 1)); }, x.uniq = x.unique = function (t, e, n, r) { x.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = O(n, r)); for (var i = [], a = [], o = 0, s = S(t); o < s; o++) {
        var u = t[o], l = n ? n(u, o, t) : u;
        e ? (o && a === l || i.push(u), a = l) : n ? x.contains(a, l) || (a.push(l), i.push(u)) : x.contains(i, u) || i.push(u);
    } return i; }, x.union = function () { return x.uniq(N(arguments, !0, !0)); }, x.intersection = function (t) { for (var e = [], n = arguments.length, r = 0, i = S(t); r < i; r++) {
        var a = t[r];
        if (!x.contains(e, a)) {
            for (var o = 1; o < n && x.contains(arguments[o], a); o++)
                ;
            o === n && e.push(a);
        }
    } return e; }, x.difference = function (t) { var e = N(arguments, !0, !0, 1); return x.filter(t, function (t) { return !x.contains(e, t); }); }, x.zip = function () { return x.unzip(arguments); }, x.unzip = function (t) { for (var e = t && x.max(t, S).length || 0, n = Array(e), r = 0; r < e; r++)
        n[r] = x.pluck(t, r); return n; }, x.object = function (t, e) { for (var n = {}, r = 0, i = S(t); r < i; r++)
        e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1]; return n; }, x.findIndex = a(1), x.findLastIndex = a(-1), x.sortedIndex = function (t, e, n, r) { n = O(n, r, 1); for (var i = n(e), a = 0, o = S(t); a < o;) {
        var s = Math.floor((a + o) / 2);
        n(t[s]) < i ? a = s + 1 : o = s;
    } return a; }, x.indexOf = o(1, x.findIndex, x.sortedIndex), x.lastIndexOf = o(-1, x.findLastIndex), x.range = function (t, e, n) { null == e && (e = t || 0, t = 0), n = n || 1; for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), a = 0; a < r; a++, t += n)
        i[a] = t; return i; }; var R = function (t, e, n, r, i) { if (!(r instanceof e))
        return t.apply(n, i); var a = M(t.prototype), o = t.apply(a, i); return x.isObject(o) ? o : a; }; x.bind = function (t, e) { if (y && t.bind === y)
        return y.apply(t, p.call(arguments, 1)); if (!x.isFunction(t))
        throw new TypeError("Bind must be called on a function"); var n = p.call(arguments, 2), r = function () { return R(t, r, e, this, n.concat(p.call(arguments))); }; return r; }, x.partial = function (t) { var e = p.call(arguments, 1), n = function () { for (var r = 0, i = e.length, a = Array(i), o = 0; o < i; o++)
        a[o] = e[o] === x ? arguments[r++] : e[o]; for (; r < arguments.length;)
        a.push(arguments[r++]); return R(t, n, this, this, a); }; return n; }, x.bindAll = function (t) { var e, n, r = arguments.length; if (r <= 1)
        throw new Error("bindAll must be passed function names"); for (e = 1; e < r; e++)
        n = arguments[e], t[n] = x.bind(t[n], t); return t; }, x.memoize = function (t, e) { var n = function (r) { var i = n.cache, a = "" + (e ? e.apply(this, arguments) : r); return x.has(i, a) || (i[a] = t.apply(this, arguments)), i[a]; }; return n.cache = {}, n; }, x.delay = function (t, e) { var n = p.call(arguments, 2); return setTimeout(function () { return t.apply(null, n); }, e); }, x.defer = x.partial(x.delay, x, 1), x.throttle = function (t, e, n) { var r, i, a, o = null, s = 0; n || (n = {}); var u = function () { s = !1 === n.leading ? 0 : x.now(), o = null, a = t.apply(r, i), o || (r = i = null); }; return function () { var l = x.now(); s || !1 !== n.leading || (s = l); var c = e - (l - s); return r = this, i = arguments, c <= 0 || c > e ? (o && (clearTimeout(o), o = null), s = l, a = t.apply(r, i), o || (r = i = null)) : o || !1 === n.trailing || (o = setTimeout(u, c)), a; }; }, x.debounce = function (t, e, n) { var r, i, a, o, s, u = function () { var l = x.now() - o; l < e && l >= 0 ? r = setTimeout(u, e - l) : (r = null, n || (s = t.apply(a, i), r || (a = i = null))); }; return function () { a = this, i = arguments, o = x.now(); var l = n && !r; return r || (r = setTimeout(u, e)), l && (s = t.apply(a, i), a = i = null), s; }; }, x.wrap = function (t, e) { return x.partial(e, t); }, x.negate = function (t) { return function () { return !t.apply(this, arguments); }; }, x.compose = function () { var t = arguments, e = t.length - 1; return function () { for (var n = e, r = t[e].apply(this, arguments); n--;)
        r = t[n].call(this, r); return r; }; }, x.after = function (t, e) { return function () { if (--t < 1)
        return e.apply(this, arguments); }; }, x.before = function (t, e) { var n; return function () { return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n; }; }, x.once = x.partial(x.before, 2); var P = !{ toString: null }.propertyIsEnumerable("toString"), D = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]; x.keys = function (t) { if (!x.isObject(t))
        return []; if (b)
        return b(t); var e = []; for (var n in t)
        x.has(t, n) && e.push(n); return P && s(t, e), e; }, x.allKeys = function (t) { if (!x.isObject(t))
        return []; var e = []; for (var n in t)
        e.push(n); return P && s(t, e), e; }, x.values = function (t) { for (var e = x.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++)
        r[i] = t[e[i]]; return r; }, x.mapObject = function (t, e, n) { e = O(e, n); for (var r, i = x.keys(t), a = i.length, o = {}, s = 0; s < a; s++)
        r = i[s], o[r] = e(t[r], r, t); return o; }, x.pairs = function (t) { for (var e = x.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++)
        r[i] = [e[i], t[e[i]]]; return r; }, x.invert = function (t) { for (var e = {}, n = x.keys(t), r = 0, i = n.length; r < i; r++)
        e[t[n[r]]] = n[r]; return e; }, x.functions = x.methods = function (t) { var e = []; for (var n in t)
        x.isFunction(t[n]) && e.push(n); return e.sort(); }, x.extend = C(x.allKeys), x.extendOwn = x.assign = C(x.keys), x.findKey = function (t, e, n) { e = O(e, n); for (var r, i = x.keys(t), a = 0, o = i.length; a < o; a++)
        if (r = i[a], e(t[r], r, t))
            return r; }, x.pick = function (t, e, n) { var r, i, a = {}, o = t; if (null == o)
        return a; x.isFunction(e) ? (i = x.allKeys(o), r = k(e, n)) : (i = N(arguments, !1, !1, 1), r = function (t, e, n) { return e in n; }, o = Object(o)); for (var s = 0, u = i.length; s < u; s++) {
        var l = i[s], c = o[l];
        r(c, l, o) && (a[l] = c);
    } return a; }, x.omit = function (t, e, n) { if (x.isFunction(e))
        e = x.negate(e);
    else {
        var r = x.map(N(arguments, !1, !1, 1), String);
        e = function (t, e) { return !x.contains(r, e); };
    } return x.pick(t, e, n); }, x.defaults = C(x.allKeys, !0), x.create = function (t, e) { var n = M(t); return e && x.extendOwn(n, e), n; }, x.clone = function (t) { return x.isObject(t) ? x.isArray(t) ? t.slice() : x.extend({}, t) : t; }, x.tap = function (t, e) { return e(t), t; }, x.isMatch = function (t, e) { var n = x.keys(e), r = n.length; if (null == t)
        return !r; for (var i = Object(t), a = 0; a < r; a++) {
        var o = n[a];
        if (e[o] !== i[o] || !(o in i))
            return !1;
    } return !0; }; var L = function (t, e, n, r) { if (t === e)
        return 0 !== t || 1 / t == 1 / e; if (null == t || null == e)
        return t === e; t instanceof x && (t = t._wrapped), e instanceof x && (e = e._wrapped); var i = v.call(t); if (i !== v.call(e))
        return !1; switch (i) {
        case "[object RegExp]":
        case "[object String]": return "" + t == "" + e;
        case "[object Number]": return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
        case "[object Date]":
        case "[object Boolean]": return +t == +e;
    } var a = "[object Array]" === i; if (!a) {
        if ("object" != typeof t || "object" != typeof e)
            return !1;
        var o = t.constructor, s = e.constructor;
        if (o !== s && !(x.isFunction(o) && o instanceof o && x.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in e)
            return !1;
    } n = n || [], r = r || []; for (var u = n.length; u--;)
        if (n[u] === t)
            return r[u] === e; if (n.push(t), r.push(e), a) {
        if ((u = t.length) !== e.length)
            return !1;
        for (; u--;)
            if (!L(t[u], e[u], n, r))
                return !1;
    }
    else {
        var l, c = x.keys(t);
        if (u = c.length, x.keys(e).length !== u)
            return !1;
        for (; u--;)
            if (l = c[u], !x.has(e, l) || !L(t[l], e[l], n, r))
                return !1;
    } return n.pop(), r.pop(), !0; }; x.isEqual = function (t, e) { return L(t, e); }, x.isEmpty = function (t) { return null == t || (T(t) && (x.isArray(t) || x.isString(t) || x.isArguments(t)) ? 0 === t.length : 0 === x.keys(t).length); }, x.isElement = function (t) { return !(!t || 1 !== t.nodeType); }, x.isArray = m || function (t) { return "[object Array]" === v.call(t); }, x.isObject = function (t) { var e = typeof t; return "function" === e || "object" === e && !!t; }, x.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) { x["is" + t] = function (e) { return v.call(e) === "[object " + t + "]"; }; }), x.isArguments(arguments) || (x.isArguments = function (t) { return x.has(t, "callee"); }), "function" != typeof /./ && "object" != typeof Int8Array && (x.isFunction = function (t) { return "function" == typeof t || !1; }), x.isFinite = function (t) { return isFinite(t) && !isNaN(parseFloat(t)); }, x.isNaN = function (t) { return x.isNumber(t) && t !== +t; }, x.isBoolean = function (t) { return !0 === t || !1 === t || "[object Boolean]" === v.call(t); }, x.isNull = function (t) { return null === t; }, x.isUndefined = function (t) { return void 0 === t; }, x.has = function (t, e) { return null != t && g.call(t, e); }, x.noConflict = function () { return u._ = l, this; }, x.identity = function (t) { return t; }, x.constant = function (t) { return function () { return t; }; }, x.noop = function () { }, x.property = j, x.propertyOf = function (t) { return null == t ? function () { } : function (e) { return t[e]; }; }, x.matcher = x.matches = function (t) { return t = x.extendOwn({}, t), function (e) { return x.isMatch(e, t); }; }, x.times = function (t, e, n) { var r = Array(Math.max(0, t)); e = k(e, n, 1); for (var i = 0; i < t; i++)
        r[i] = e(i); return r; }, x.random = function (t, e) { return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1)); }, x.now = Date.now || function () { return (new Date).getTime(); }; var V = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, B = x.invert(V), z = function (t) { var e = function (e) { return t[e]; }, n = "(?:" + x.keys(t).join("|") + ")", r = RegExp(n), i = RegExp(n, "g"); return function (t) { return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t; }; }; x.escape = z(V), x.unescape = z(B), x.result = function (t, e, n) { var r = null == t ? void 0 : t[e]; return void 0 === r && (r = n), x.isFunction(r) ? r.call(t) : r; }; var I = 0; x.uniqueId = function (t) { var e = ++I + ""; return t ? t + e : e; }, x.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var U = /(.)^/, F = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, H = /\\|'|\r|\n|\u2028|\u2029/g, q = function (t) { return "\\" + F[t]; }; x.template = function (t, e, n) { !e && n && (e = n), e = x.defaults({}, e, x.templateSettings); var r = RegExp([(e.escape || U).source, (e.interpolate || U).source, (e.evaluate || U).source].join("|") + "|$", "g"), i = 0, a = "__p+='"; t.replace(r, function (e, n, r, o, s) { return a += t.slice(i, s).replace(H, q), i = s + e.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (a += "';\n" + o + "\n__p+='"), e; }), a += "';\n", e.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n"; try {
        var o = new Function(e.variable || "obj", "_", a);
    }
    catch (t) {
        throw t.source = a, t;
    } var s = function (t) { return o.call(this, t, x); }; return s.source = "function(" + (e.variable || "obj") + "){\n" + a + "}", s; }, x.chain = function (t) { var e = x(t); return e._chain = !0, e; }; var $ = function (t, e) { return t._chain ? x(e).chain() : e; }; x.mixin = function (t) { x.each(x.functions(t), function (e) { var n = x[e] = t[e]; x.prototype[e] = function () { var t = [this._wrapped]; return h.apply(t, arguments), $(this, n.apply(x, t)); }; }); }, x.mixin(x), x.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) { var e = c[t]; x.prototype[t] = function () { var n = this._wrapped; return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], $(this, n); }; }), x.each(["concat", "join", "slice"], function (t) { var e = c[t]; x.prototype[t] = function () { return $(this, e.apply(this._wrapped, arguments)); }; }), x.prototype.value = function () { return this._wrapped; }, x.prototype.valueOf = x.prototype.toJSON = x.prototype.value, x.prototype.toString = function () { return "" + this._wrapped; }, r = [], void 0 !== (i = function () { return x; }.apply(e, r)) && (t.exports = i); }).call(this); }, function (t, e, n) {
        "use strict";
        function r(t, e, n, o) { function s(e) { return t(e = new Date(+e)), e; } return s.floor = s, s.ceil = function (n) { return t(n = new Date(n - 1)), e(n, 1), t(n), n; }, s.round = function (t) { var e = s(t), n = s.ceil(t); return t - e < n - t ? e : n; }, s.offset = function (t, n) { return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t; }, s.range = function (n, r, i) { var a, o = []; if (n = s.ceil(n), i = null == i ? 1 : Math.floor(i), !(n < r && i > 0))
            return o; do {
            o.push(a = new Date(+n)), e(n, i), t(n);
        } while (a < n && n < r); return o; }, s.filter = function (n) { return r(function (e) { if (e >= e)
            for (; t(e), !n(e);)
                e.setTime(e - 1); }, function (t, r) { if (t >= t)
            if (r < 0)
                for (; ++r <= 0;)
                    for (; e(t, -1), !n(t);)
                        ;
            else
                for (; --r >= 0;)
                    for (; e(t, 1), !n(t);)
                        ; }); }, n && (s.count = function (e, r) { return i.setTime(+e), a.setTime(+r), t(i), t(a), Math.floor(n(i, a)); }, s.every = function (t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? s.filter(o ? function (e) { return o(e) % t == 0; } : function (e) { return s.count(0, e) % t == 0; }) : s : null; }), s; }
        e.a = r;
        var i = new Date, a = new Date;
    }, function (t, e, n) { var r = n(105)("wks"), i = n(76), a = n(19).Symbol, o = "function" == typeof a; (t.exports = function (t) { return r[t] || (r[t] = o && a[t] || (o ? a : i)("Symbol." + t)); }).store = r; }, function (t, e) { var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n); }, function (t, e, n) { var r = n(19), i = n(13), a = n(50), o = n(43), s = function (t, e, n) { var u, l, c, f = t & s.F, d = t & s.G, h = t & s.S, p = t & s.P, v = t & s.B, g = t & s.W, m = d ? i : i[e] || (i[e] = {}), b = m.prototype, y = d ? r : h ? r[e] : (r[e] || {}).prototype; d && (n = e); for (u in n)
        (l = !f && y && void 0 !== y[u]) && u in m || (c = l ? y[u] : n[u], m[u] = d && "function" != typeof y[u] ? n[u] : v && l ? a(c, r) : g && y[u] == c ? function (t) { var e = function (e, n, r) { if (this instanceof t) {
            switch (arguments.length) {
                case 0: return new t;
                case 1: return new t(e);
                case 2: return new t(e, n);
            }
            return new t(e, n, r);
        } return t.apply(this, arguments); }; return e.prototype = t.prototype, e; }(c) : p && "function" == typeof c ? a(Function.call, c) : c, p && ((m.virtual || (m.virtual = {}))[u] = c, t & s.R && b && !b[u] && o(b, u, c))); }; s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s; }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        e.__esModule = !0;
        var i = n(2), a = r(i), o = n(15), s = r(o);
        e.default = function t(e, n, r) { null === e && (e = Function.prototype); var i = (0, s.default)(e, n); if (void 0 === i) {
            var o = (0, a.default)(e);
            return null === o ? void 0 : t(o, n, r);
        } if ("value" in i)
            return i.value; var u = i.get; if (void 0 !== u)
            return u.call(r); };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(201);
        n.d(e, "bisect", function () { return r.c; }), n.d(e, "bisectRight", function () { return r.b; }), n.d(e, "bisectLeft", function () { return r.a; });
        var i = n(54);
        n.d(e, "ascending", function () { return i.a; });
        var a = n(202);
        n.d(e, "bisector", function () { return a.a; });
        var o = n(502);
        n.d(e, "cross", function () { return o.a; });
        var s = n(503);
        n.d(e, "descending", function () { return s.a; });
        var u = n(204);
        n.d(e, "deviation", function () { return u.a; });
        var l = n(206);
        n.d(e, "extent", function () { return l.a; });
        var c = n(504);
        n.d(e, "histogram", function () { return c.a; });
        var f = n(507);
        n.d(e, "thresholdFreedmanDiaconis", function () { return f.a; });
        var d = n(508);
        n.d(e, "thresholdScott", function () { return d.a; });
        var h = n(210);
        n.d(e, "thresholdSturges", function () { return h.a; });
        var p = n(509);
        n.d(e, "max", function () { return p.a; });
        var v = n(510);
        n.d(e, "mean", function () { return v.a; });
        var g = n(511);
        n.d(e, "median", function () { return g.a; });
        var m = n(512);
        n.d(e, "merge", function () { return m.a; });
        var b = n(211);
        n.d(e, "min", function () { return b.a; });
        var y = n(203);
        n.d(e, "pairs", function () { return y.a; });
        var _ = n(513);
        n.d(e, "permute", function () { return _.a; });
        var w = n(133);
        n.d(e, "quantile", function () { return w.a; });
        var x = n(208);
        n.d(e, "range", function () { return x.a; });
        var k = n(514);
        n.d(e, "scan", function () { return k.a; });
        var O = n(515);
        n.d(e, "shuffle", function () { return O.a; });
        var C = n(516);
        n.d(e, "sum", function () { return C.a; });
        var M = n(209);
        n.d(e, "ticks", function () { return M.a; }), n.d(e, "tickIncrement", function () { return M.b; }), n.d(e, "tickStep", function () { return M.c; });
        var j = n(212);
        n.d(e, "transpose", function () { return j.a; });
        var E = n(205);
        n.d(e, "variance", function () { return E.a; });
        var S = n(517);
        n.d(e, "zip", function () { return S.a; });
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(135);
        n.d(e, "interpolate", function () { return r.a; });
        var i = n(218);
        n.d(e, "interpolateArray", function () { return i.a; });
        var a = n(138);
        n.d(e, "interpolateBasis", function () { return a.b; });
        var o = n(216);
        n.d(e, "interpolateBasisClosed", function () { return o.a; });
        var s = n(219);
        n.d(e, "interpolateDate", function () { return s.a; });
        var u = n(88);
        n.d(e, "interpolateNumber", function () { return u.a; });
        var l = n(220);
        n.d(e, "interpolateObject", function () { return l.a; });
        var c = n(527);
        n.d(e, "interpolateRound", function () { return c.a; });
        var f = n(221);
        n.d(e, "interpolateString", function () { return f.a; });
        var d = n(528);
        n.d(e, "interpolateTransformCss", function () { return d.a; }), n.d(e, "interpolateTransformSvg", function () { return d.b; });
        var h = n(531);
        n.d(e, "interpolateZoom", function () { return h.a; });
        var p = n(215);
        n.d(e, "interpolateRgb", function () { return p.a; }), n.d(e, "interpolateRgbBasis", function () { return p.b; }), n.d(e, "interpolateRgbBasisClosed", function () { return p.c; });
        var v = n(532);
        n.d(e, "interpolateHsl", function () { return v.a; }), n.d(e, "interpolateHslLong", function () { return v.b; });
        var g = n(533);
        n.d(e, "interpolateLab", function () { return g.a; });
        var m = n(534);
        n.d(e, "interpolateHcl", function () { return m.a; }), n.d(e, "interpolateHclLong", function () { return m.b; });
        var b = n(535);
        n.d(e, "interpolateCubehelix", function () { return b.b; }), n.d(e, "interpolateCubehelixLong", function () { return b.a; });
        var y = n(536);
        n.d(e, "quantize", function () { return y.a; });
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t, e) { return t === e; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { this._groups = t, this._parents = e; }
        function i() { return new r([[document.documentElement]], P); }
        n.d(e, "c", function () { return P; }), e.a = r;
        var a = n(470), o = n(471), s = n(472), u = n(473), l = n(198), c = n(475), f = n(476), d = n(477), h = n(478), p = n(479), v = n(480), g = n(481), m = n(482), b = n(483), y = n(484), _ = n(485), w = n(200), x = n(486), k = n(487), O = n(488), C = n(489), M = n(490), j = n(491), E = n(492), S = n(493), T = n(494), A = n(495), N = n(130), R = n(496), P = [null];
        r.prototype = i.prototype = { constructor: r, select: a.a, selectAll: o.a, filter: s.a, data: u.a, enter: l.b, exit: c.a, merge: f.a, order: d.a, sort: h.a, call: p.a, nodes: v.a, node: g.a, size: m.a, empty: b.a, each: y.a, attr: _.a, style: w.a, property: x.a, classed: k.a, text: O.a, html: C.a, raise: M.a, lower: j.a, append: E.a, insert: S.a, remove: T.a, datum: A.a, on: N.b, dispatch: R.a }, e.b = i;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { var n = a(t, e); if (n.state > f)
            throw new Error("too late; already scheduled"); return n; }
        function i(t, e) { var n = a(t, e); if (n.state > h)
            throw new Error("too late; already started"); return n; }
        function a(t, e) { var n = t.__transition; if (!n || !(n = n[e]))
            throw new Error("transition not found"); return n; }
        function o(t, e, n) { function r(t) { n.state = d, n.timer.restart(i, n.delay, n.time), n.delay <= t && i(t - n.delay); } function i(r) { var c, f, g, b; if (n.state !== d)
            return o(); for (c in l)
            if (b = l[c], b.name === n.name) {
                if (b.state === p)
                    return Object(u.b)(i);
                b.state === v ? (b.state = m, b.timer.stop(), b.on.call("interrupt", t, t.__data__, b.index, b.group), delete l[c]) : +c < e && (b.state = m, b.timer.stop(), delete l[c]);
            } if (Object(u.b)(function () { n.state === p && (n.state = v, n.timer.restart(a, n.delay, n.time), a(r)); }), n.state = h, n.on.call("start", t, t.__data__, n.index, n.group), n.state === h) {
            for (n.state = p, s = new Array(g = n.tween.length), c = 0, f = -1; c < g; ++c)
                (b = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (s[++f] = b);
            s.length = f + 1;
        } } function a(e) { for (var r = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(o), n.state = g, 1), i = -1, a = s.length; ++i < a;)
            s[i].call(null, r); n.state === g && (n.on.call("end", t, t.__data__, n.index, n.group), o()); } function o() { n.state = m, n.timer.stop(), delete l[e]; for (var r in l)
            return; delete t.__transition; } var s, l = t.__transition; l[e] = n, n.timer = Object(u.c)(r, 0, n.time); }
        n.d(e, "c", function () { return d; }), n.d(e, "d", function () { return h; }), n.d(e, "b", function () { return g; }), n.d(e, "a", function () { return m; }), e.g = r, e.h = i, e.f = a;
        var s = n(143), u = n(238), l = Object(s.a)("start", "end", "interrupt"), c = [], f = 0, d = 1, h = 2, p = 3, v = 4, g = 5, m = 6;
        e.e = function (t, e, n, r, i, a) { var s = t.__transition; if (s) {
            if (n in s)
                return;
        }
        else
            t.__transition = {}; o(t, n, { name: e, index: r, group: i, on: l, tween: c, time: a.time, delay: a.delay, duration: a.duration, ease: a.ease, timer: null, state: f }); };
    }, function (t, e, n) {
        var r, i; /*!
         * jQuery JavaScript Library v3.2.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2017-03-20T18:59Z
         */
        !function (e, n) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) { if (!t.document)
                throw new Error("jQuery requires a window with a document"); return n(t); } : n(e);
        }("undefined" != typeof window ? window : this, function (n, a) {
            "use strict";
            function o(t, e) { e = e || ot; var n = e.createElement("script"); n.text = t, e.head.appendChild(n).parentNode.removeChild(n); }
            function s(t) { var e = !!t && "length" in t && t.length, n = bt.type(t); return "function" !== n && !bt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t); }
            function u(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase(); }
            function l(t, e, n) { return bt.isFunction(e) ? bt.grep(t, function (t, r) { return !!e.call(t, r, t) !== n; }) : e.nodeType ? bt.grep(t, function (t) { return t === e !== n; }) : "string" != typeof e ? bt.grep(t, function (t) { return ft.call(e, t) > -1 !== n; }) : Et.test(e) ? bt.filter(e, t, n) : (e = bt.filter(e, t), bt.grep(t, function (t) { return ft.call(e, t) > -1 !== n && 1 === t.nodeType; })); }
            function c(t, e) { for (; (t = t[e]) && 1 !== t.nodeType;)
                ; return t; }
            function f(t) { var e = {}; return bt.each(t.match(Rt) || [], function (t, n) { e[n] = !0; }), e; }
            function d(t) { return t; }
            function h(t) { throw t; }
            function p(t, e, n, r) { var i; try {
                t && bt.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && bt.isFunction(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [t].slice(r));
            }
            catch (t) {
                n.apply(void 0, [t]);
            } }
            function v() { ot.removeEventListener("DOMContentLoaded", v), n.removeEventListener("load", v), bt.ready(); }
            function g() { this.expando = bt.expando + g.uid++; }
            function m(t) { return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : It.test(t) ? JSON.parse(t) : t); }
            function b(t, e, n) { var r; if (void 0 === n && 1 === t.nodeType)
                if (r = "data-" + e.replace(Ut, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(r))) {
                    try {
                        n = m(n);
                    }
                    catch (t) { }
                    zt.set(t, e, n);
                }
                else
                    n = void 0; return n; }
            function y(t, e, n, r) { var i, a = 1, o = 20, s = r ? function () { return r.cur(); } : function () { return bt.css(t, e, ""); }, u = s(), l = n && n[3] || (bt.cssNumber[e] ? "" : "px"), c = (bt.cssNumber[e] || "px" !== l && +u) && Ht.exec(bt.css(t, e)); if (c && c[3] !== l) {
                l = l || c[3], n = n || [], c = +u || 1;
                do {
                    a = a || ".5", c /= a, bt.style(t, e, c + l);
                } while (a !== (a = s() / u) && 1 !== a && --o);
            } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i; }
            function _(t) { var e, n = t.ownerDocument, r = t.nodeName, i = Wt[r]; return i || (e = n.body.appendChild(n.createElement(r)), i = bt.css(e, "display"), e.parentNode.removeChild(e), "none" === i && (i = "block"), Wt[r] = i, i); }
            function w(t, e) { for (var n, r, i = [], a = 0, o = t.length; a < o; a++)
                r = t[a], r.style && (n = r.style.display, e ? ("none" === n && (i[a] = Bt.get(r, "display") || null, i[a] || (r.style.display = "")), "" === r.style.display && $t(r) && (i[a] = _(r))) : "none" !== n && (i[a] = "none", Bt.set(r, "display", n))); for (a = 0; a < o; a++)
                null != i[a] && (t[a].style.display = i[a]); return t; }
            function x(t, e) { var n; return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && u(t, e) ? bt.merge([t], n) : n; }
            function k(t, e) { for (var n = 0, r = t.length; n < r; n++)
                Bt.set(t[n], "globalEval", !e || Bt.get(e[n], "globalEval")); }
            function O(t, e, n, r, i) { for (var a, o, s, u, l, c, f = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
                if ((a = t[h]) || 0 === a)
                    if ("object" === bt.type(a))
                        bt.merge(d, a.nodeType ? [a] : a);
                    else if (Zt.test(a)) {
                        for (o = o || f.appendChild(e.createElement("div")), s = (Xt.exec(a) || ["", ""])[1].toLowerCase(), u = Jt[s] || Jt._default, o.innerHTML = u[1] + bt.htmlPrefilter(a) + u[2], c = u[0]; c--;)
                            o = o.lastChild;
                        bt.merge(d, o.childNodes), o = f.firstChild, o.textContent = "";
                    }
                    else
                        d.push(e.createTextNode(a)); for (f.textContent = "", h = 0; a = d[h++];)
                if (r && bt.inArray(a, r) > -1)
                    i && i.push(a);
                else if (l = bt.contains(a.ownerDocument, a), o = x(f.appendChild(a), "script"), l && k(o), n)
                    for (c = 0; a = o[c++];)
                        Kt.test(a.type || "") && n.push(a); return f; }
            function C() { return !0; }
            function M() { return !1; }
            function j() { try {
                return ot.activeElement;
            }
            catch (t) { } }
            function E(t, e, n, r, i, a) { var o, s; if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in e)
                    E(t, s, n, r, e[s], a);
                return t;
            } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)
                i = M;
            else if (!i)
                return t; return 1 === a && (o = i, i = function (t) { return bt().off(t), o.apply(this, arguments); }, i.guid = o.guid || (o.guid = bt.guid++)), t.each(function () { bt.event.add(this, e, i, r, n); }); }
            function S(t, e) { return u(t, "table") && u(11 !== e.nodeType ? e : e.firstChild, "tr") ? bt(">tbody", t)[0] || t : t; }
            function T(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t; }
            function A(t) { var e = oe.exec(t.type); return e ? t.type = e[1] : t.removeAttribute("type"), t; }
            function N(t, e) { var n, r, i, a, o, s, u, l; if (1 === e.nodeType) {
                if (Bt.hasData(t) && (a = Bt.access(t), o = Bt.set(e, a), l = a.events)) {
                    delete o.handle, o.events = {};
                    for (i in l)
                        for (n = 0, r = l[i].length; n < r; n++)
                            bt.event.add(e, i, l[i][n]);
                }
                zt.hasData(t) && (s = zt.access(t), u = bt.extend({}, s), zt.set(e, u));
            } }
            function R(t, e) { var n = e.nodeName.toLowerCase(); "input" === n && Yt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue); }
            function P(t, e, n, r) { e = lt.apply([], e); var i, a, s, u, l, c, f = 0, d = t.length, h = d - 1, p = e[0], v = bt.isFunction(p); if (v || d > 1 && "string" == typeof p && !mt.checkClone && ae.test(p))
                return t.each(function (i) { var a = t.eq(i); v && (e[0] = p.call(this, i, a.html())), P(a, e, n, r); }); if (d && (i = O(e, t[0].ownerDocument, !1, t, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
                for (s = bt.map(x(i, "script"), T), u = s.length; f < d; f++)
                    l = i, f !== h && (l = bt.clone(l, !0, !0), u && bt.merge(s, x(l, "script"))), n.call(t[f], l, f);
                if (u)
                    for (c = s[s.length - 1].ownerDocument, bt.map(s, A), f = 0; f < u; f++)
                        l = s[f], Kt.test(l.type || "") && !Bt.access(l, "globalEval") && bt.contains(c, l) && (l.src ? bt._evalUrl && bt._evalUrl(l.src) : o(l.textContent.replace(se, ""), c));
            } return t; }
            function D(t, e, n) { for (var r, i = e ? bt.filter(e, t) : t, a = 0; null != (r = i[a]); a++)
                n || 1 !== r.nodeType || bt.cleanData(x(r)), r.parentNode && (n && bt.contains(r.ownerDocument, r) && k(x(r, "script")), r.parentNode.removeChild(r)); return t; }
            function L(t, e, n) { var r, i, a, o, s = t.style; return n = n || ce(t), n && (o = n.getPropertyValue(e) || n[e], "" !== o || bt.contains(t.ownerDocument, t) || (o = bt.style(t, e)), !mt.pixelMarginRight() && le.test(o) && ue.test(e) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 !== o ? o + "" : o; }
            function V(t, e) { return { get: function () { return t() ? void delete this.get : (this.get = e).apply(this, arguments); } }; }
            function B(t) { if (t in ge)
                return t; for (var e = t[0].toUpperCase() + t.slice(1), n = ve.length; n--;)
                if ((t = ve[n] + e) in ge)
                    return t; }
            function z(t) { var e = bt.cssProps[t]; return e || (e = bt.cssProps[t] = B(t) || t), e; }
            function I(t, e, n) { var r = Ht.exec(e); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e; }
            function U(t, e, n, r, i) { var a, o = 0; for (a = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0; a < 4; a += 2)
                "margin" === n && (o += bt.css(t, n + qt[a], !0, i)), r ? ("content" === n && (o -= bt.css(t, "padding" + qt[a], !0, i)), "margin" !== n && (o -= bt.css(t, "border" + qt[a] + "Width", !0, i))) : (o += bt.css(t, "padding" + qt[a], !0, i), "padding" !== n && (o += bt.css(t, "border" + qt[a] + "Width", !0, i))); return o; }
            function F(t, e, n) { var r, i = ce(t), a = L(t, e, i), o = "border-box" === bt.css(t, "boxSizing", !1, i); return le.test(a) ? a : (r = o && (mt.boxSizingReliable() || a === t.style[e]), "auto" === a && (a = t["offset" + e[0].toUpperCase() + e.slice(1)]), (a = parseFloat(a) || 0) + U(t, e, n || (o ? "border" : "content"), r, i) + "px"); }
            function H(t, e, n, r, i) { return new H.prototype.init(t, e, n, r, i); }
            function q() { be && (!1 === ot.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(q) : n.setTimeout(q, bt.fx.interval), bt.fx.tick()); }
            function $() { return n.setTimeout(function () { me = void 0; }), me = bt.now(); }
            function G(t, e) { var n, r = 0, i = { height: t }; for (e = e ? 1 : 0; r < 4; r += 2 - e)
                n = qt[r], i["margin" + n] = i["padding" + n] = t; return e && (i.opacity = i.width = t), i; }
            function W(t, e, n) { for (var r, i = (K.tweeners[e] || []).concat(K.tweeners["*"]), a = 0, o = i.length; a < o; a++)
                if (r = i[a].call(n, e, t))
                    return r; }
            function Y(t, e, n) { var r, i, a, o, s, u, l, c, f = "width" in e || "height" in e, d = this, h = {}, p = t.style, v = t.nodeType && $t(t), g = Bt.get(t, "fxshow"); n.queue || (o = bt._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function () { o.unqueued || s(); }), o.unqueued++, d.always(function () { d.always(function () { o.unqueued--, bt.queue(t, "fx").length || o.empty.fire(); }); })); for (r in e)
                if (i = e[r], ye.test(i)) {
                    if (delete e[r], a = a || "toggle" === i, i === (v ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r])
                            continue;
                        v = !0;
                    }
                    h[r] = g && g[r] || bt.style(t, r);
                } if ((u = !bt.isEmptyObject(e)) || !bt.isEmptyObject(h)) {
                f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = g && g.display, null == l && (l = Bt.get(t, "display")), c = bt.css(t, "display"), "none" === c && (l ? c = l : (w([t], !0), l = t.style.display || l, c = bt.css(t, "display"), w([t]))), ("inline" === c || "inline-block" === c && null != l) && "none" === bt.css(t, "float") && (u || (d.done(function () { p.display = l; }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]; })), u = !1;
                for (r in h)
                    u || (g ? "hidden" in g && (v = g.hidden) : g = Bt.access(t, "fxshow", { display: l }), a && (g.hidden = !v), v && w([t], !0), d.done(function () { v || w([t]), Bt.remove(t, "fxshow"); for (r in h)
                        bt.style(t, r, h[r]); })), u = W(v ? g[r] : 0, r, d), r in g || (g[r] = u.start, v && (u.end = u.start, u.start = 0));
            } }
            function X(t, e) { var n, r, i, a, o; for (n in t)
                if (r = bt.camelCase(n), i = e[r], a = t[n], Array.isArray(a) && (i = a[1], a = t[n] = a[0]), n !== r && (t[r] = a, delete t[n]), (o = bt.cssHooks[r]) && "expand" in o) {
                    a = o.expand(a), delete t[r];
                    for (n in a)
                        n in t || (t[n] = a[n], e[n] = i);
                }
                else
                    e[r] = i; }
            function K(t, e, n) { var r, i, a = 0, o = K.prefilters.length, s = bt.Deferred().always(function () { delete u.elem; }), u = function () { if (i)
                return !1; for (var e = me || $(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, a = 1 - r, o = 0, u = l.tweens.length; o < u; o++)
                l.tweens[o].run(a); return s.notifyWith(t, [l, a, n]), a < 1 && u ? n : (u || s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l]), !1); }, l = s.promise({ elem: t, props: bt.extend({}, e), opts: bt.extend(!0, { specialEasing: {}, easing: bt.easing._default }, n), originalProperties: e, originalOptions: n, startTime: me || $(), duration: n.duration, tweens: [], createTween: function (e, n) { var r = bt.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(r), r; }, stop: function (e) { var n = 0, r = e ? l.tweens.length : 0; if (i)
                    return this; for (i = !0; n < r; n++)
                    l.tweens[n].run(1); return e ? (s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l, e])) : s.rejectWith(t, [l, e]), this; } }), c = l.props; for (X(c, l.opts.specialEasing); a < o; a++)
                if (r = K.prefilters[a].call(l, t, c, l.opts))
                    return bt.isFunction(r.stop) && (bt._queueHooks(l.elem, l.opts.queue).stop = bt.proxy(r.stop, r)), r; return bt.map(c, W, l), bt.isFunction(l.opts.start) && l.opts.start.call(t, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), bt.fx.timer(bt.extend(u, { elem: t, anim: l, queue: l.opts.queue })), l; }
            function J(t) { return (t.match(Rt) || []).join(" "); }
            function Z(t) { return t.getAttribute && t.getAttribute("class") || ""; }
            function Q(t, e, n, r) { var i; if (Array.isArray(e))
                bt.each(e, function (e, i) { n || Te.test(t) ? r(t, i) : Q(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r); });
            else if (n || "object" !== bt.type(e))
                r(t, e);
            else
                for (i in e)
                    Q(t + "[" + i + "]", e[i], n, r); }
            function tt(t) { return function (e, n) { "string" != typeof e && (n = e, e = "*"); var r, i = 0, a = e.toLowerCase().match(Rt) || []; if (bt.isFunction(n))
                for (; r = a[i++];)
                    "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n); }; }
            function et(t, e, n, r) { function i(s) { var u; return a[s] = !0, bt.each(t[s] || [], function (t, s) { var l = s(e, n, r); return "string" != typeof l || o || a[l] ? o ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1); }), u; } var a = {}, o = t === Fe; return i(e.dataTypes[0]) || !a["*"] && i("*"); }
            function nt(t, e) { var n, r, i = bt.ajaxSettings.flatOptions || {}; for (n in e)
                void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]); return r && bt.extend(!0, t, r), t; }
            function rt(t, e, n) { for (var r, i, a, o, s = t.contents, u = t.dataTypes; "*" === u[0];)
                u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type")); if (r)
                for (i in s)
                    if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break;
                    } if (u[0] in n)
                a = u[0];
            else {
                for (i in n) {
                    if (!u[0] || t.converters[i + " " + u[0]]) {
                        a = i;
                        break;
                    }
                    o || (o = i);
                }
                a = a || o;
            } if (a)
                return a !== u[0] && u.unshift(a), n[a]; }
            function it(t, e, n, r) { var i, a, o, s, u, l = {}, c = t.dataTypes.slice(); if (c[1])
                for (o in t.converters)
                    l[o.toLowerCase()] = t.converters[o]; for (a = c.shift(); a;)
                if (t.responseFields[a] && (n[t.responseFields[a]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = a, a = c.shift())
                    if ("*" === a)
                        a = u;
                    else if ("*" !== u && u !== a) {
                        if (!(o = l[u + " " + a] || l["* " + a]))
                            for (i in l)
                                if (s = i.split(" "), s[1] === a && (o = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === o ? o = l[i] : !0 !== l[i] && (a = s[0], c.unshift(s[1]));
                                    break;
                                }
                        if (!0 !== o)
                            if (o && t.throws)
                                e = o(e);
                            else
                                try {
                                    e = o(e);
                                }
                                catch (t) {
                                    return { state: "parsererror", error: o ? t : "No conversion from " + u + " to " + a };
                                }
                    } return { state: "success", data: e }; }
            var at = [], ot = n.document, st = Object.getPrototypeOf, ut = at.slice, lt = at.concat, ct = at.push, ft = at.indexOf, dt = {}, ht = dt.toString, pt = dt.hasOwnProperty, vt = pt.toString, gt = vt.call(Object), mt = {}, bt = function (t, e) { return new bt.fn.init(t, e); }, yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, _t = /^-ms-/, wt = /-([a-z])/g, xt = function (t, e) { return e.toUpperCase(); };
            bt.fn = bt.prototype = { jquery: "3.2.1", constructor: bt, length: 0, toArray: function () { return ut.call(this); }, get: function (t) { return null == t ? ut.call(this) : t < 0 ? this[t + this.length] : this[t]; }, pushStack: function (t) { var e = bt.merge(this.constructor(), t); return e.prevObject = this, e; }, each: function (t) { return bt.each(this, t); }, map: function (t) { return this.pushStack(bt.map(this, function (e, n) { return t.call(e, n, e); })); }, slice: function () { return this.pushStack(ut.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, eq: function (t) { var e = this.length, n = +t + (t < 0 ? e : 0); return this.pushStack(n >= 0 && n < e ? [this[n]] : []); }, end: function () { return this.prevObject || this.constructor(); }, push: ct, sort: at.sort, splice: at.splice }, bt.extend = bt.fn.extend = function () { var t, e, n, r, i, a, o = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == typeof o || bt.isFunction(o) || (o = {}), s === u && (o = this, s--); s < u; s++)
                if (null != (t = arguments[s]))
                    for (e in t)
                        n = o[e], r = t[e], o !== r && (l && r && (bt.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, a = n && Array.isArray(n) ? n : []) : a = n && bt.isPlainObject(n) ? n : {}, o[e] = bt.extend(l, a, r)) : void 0 !== r && (o[e] = r)); return o; }, bt.extend({ expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) { throw new Error(t); }, noop: function () { }, isFunction: function (t) { return "function" === bt.type(t); }, isWindow: function (t) { return null != t && t === t.window; }, isNumeric: function (t) { var e = bt.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)); }, isPlainObject: function (t) { var e, n; return !(!t || "[object Object]" !== ht.call(t)) && (!(e = st(t)) || "function" == typeof (n = pt.call(e, "constructor") && e.constructor) && vt.call(n) === gt); }, isEmptyObject: function (t) { var e; for (e in t)
                    return !1; return !0; }, type: function (t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? dt[ht.call(t)] || "object" : typeof t; }, globalEval: function (t) { o(t); }, camelCase: function (t) { return t.replace(_t, "ms-").replace(wt, xt); }, each: function (t, e) { var n, r = 0; if (s(t))
                    for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++)
                        ;
                else
                    for (r in t)
                        if (!1 === e.call(t[r], r, t[r]))
                            break; return t; }, trim: function (t) { return null == t ? "" : (t + "").replace(yt, ""); }, makeArray: function (t, e) { var n = e || []; return null != t && (s(Object(t)) ? bt.merge(n, "string" == typeof t ? [t] : t) : ct.call(n, t)), n; }, inArray: function (t, e, n) { return null == e ? -1 : ft.call(e, t, n); }, merge: function (t, e) { for (var n = +e.length, r = 0, i = t.length; r < n; r++)
                    t[i++] = e[r]; return t.length = i, t; }, grep: function (t, e, n) { for (var r = [], i = 0, a = t.length, o = !n; i < a; i++)
                    !e(t[i], i) !== o && r.push(t[i]); return r; }, map: function (t, e, n) { var r, i, a = 0, o = []; if (s(t))
                    for (r = t.length; a < r; a++)
                        null != (i = e(t[a], a, n)) && o.push(i);
                else
                    for (a in t)
                        null != (i = e(t[a], a, n)) && o.push(i); return lt.apply([], o); }, guid: 1, proxy: function (t, e) { var n, r, i; if ("string" == typeof e && (n = t[e], e = t, t = n), bt.isFunction(t))
                    return r = ut.call(arguments, 2), i = function () { return t.apply(e || this, r.concat(ut.call(arguments))); }, i.guid = t.guid = t.guid || bt.guid++, i; }, now: Date.now, support: mt }), "function" == typeof Symbol && (bt.fn[Symbol.iterator] = at[Symbol.iterator]), bt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) { dt["[object " + e + "]"] = e.toLowerCase(); });
            var kt = function (t) { function e(t, e, n, r) { var i, a, o, s, u, c, d, h = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n; if (!r && ((e ? e.ownerDocument || e : z) !== A && T(e), e = e || A, R)) {
                if (11 !== p && (u = vt.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(o = e.getElementById(i)))
                                return n;
                            if (o.id === i)
                                return n.push(o), n;
                        }
                        else if (h && (o = h.getElementById(i)) && V(e, o) && o.id === i)
                            return n.push(o), n;
                    }
                    else {
                        if (u[2])
                            return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && _.getElementsByClassName && e.getElementsByClassName)
                            return K.apply(n, e.getElementsByClassName(i)), n;
                    }
                if (_.qsa && !q[t + " "] && (!P || !P.test(t))) {
                    if (1 !== p)
                        h = e, d = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(yt, _t) : e.setAttribute("id", s = B), c = O(t), a = c.length; a--;)
                            c[a] = "#" + s + " " + f(c[a]);
                        d = c.join(","), h = gt.test(t) && l(e.parentNode) || e;
                    }
                    if (d)
                        try {
                            return K.apply(n, h.querySelectorAll(d)), n;
                        }
                        catch (t) { }
                        finally {
                            s === B && e.removeAttribute("id");
                        }
                }
            } return M(t.replace(at, "$1"), e, n, r); } function n() { function t(n, r) { return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = r; } var e = []; return t; } function r(t) { return t[B] = !0, t; } function i(t) { var e = A.createElement("fieldset"); try {
                return !!t(e);
            }
            catch (t) {
                return !1;
            }
            finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            } } function a(t, e) { for (var n = t.split("|"), r = n.length; r--;)
                w.attrHandle[n[r]] = e; } function o(t, e) { var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex; if (r)
                return r; if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return -1; return t ? 1 : -1; } function s(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && xt(e) === t : e.disabled === t : "label" in e && e.disabled === t; }; } function u(t) { return r(function (e) { return e = +e, r(function (n, r) { for (var i, a = t([], n.length, e), o = a.length; o--;)
                n[i = a[o]] && (n[i] = !(r[i] = n[i])); }); }); } function l(t) { return t && void 0 !== t.getElementsByTagName && t; } function c() { } function f(t) { for (var e = 0, n = t.length, r = ""; e < n; e++)
                r += t[e].value; return r; } function d(t, e, n) { var r = e.dir, i = e.next, a = i || r, o = n && "parentNode" === a, s = U++; return e.first ? function (e, n, i) { for (; e = e[r];)
                if (1 === e.nodeType || o)
                    return t(e, n, i); return !1; } : function (e, n, u) { var l, c, f, d = [I, s]; if (u) {
                for (; e = e[r];)
                    if ((1 === e.nodeType || o) && t(e, n, u))
                        return !0;
            }
            else
                for (; e = e[r];)
                    if (1 === e.nodeType || o)
                        if (f = e[B] || (e[B] = {}), c = f[e.uniqueID] || (f[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase())
                            e = e[r] || e;
                        else {
                            if ((l = c[a]) && l[0] === I && l[1] === s)
                                return d[2] = l[2];
                            if (c[a] = d, d[2] = t(e, n, u))
                                return !0;
                        } return !1; }; } function h(t) { return t.length > 1 ? function (e, n, r) { for (var i = t.length; i--;)
                if (!t[i](e, n, r))
                    return !1; return !0; } : t[0]; } function p(t, n, r) { for (var i = 0, a = n.length; i < a; i++)
                e(t, n[i], r); return r; } function v(t, e, n, r, i) { for (var a, o = [], s = 0, u = t.length, l = null != e; s < u; s++)
                (a = t[s]) && (n && !n(a, r, i) || (o.push(a), l && e.push(s))); return o; } function g(t, e, n, i, a, o) { return i && !i[B] && (i = g(i)), a && !a[B] && (a = g(a, o)), r(function (r, o, s, u) { var l, c, f, d = [], h = [], g = o.length, m = r || p(e || "*", s.nodeType ? [s] : s, []), b = !t || !r && e ? m : v(m, d, t, s, u), y = n ? a || (r ? t : g || i) ? [] : o : b; if (n && n(b, y, s, u), i)
                for (l = v(y, h), i(l, [], s, u), c = l.length; c--;)
                    (f = l[c]) && (y[h[c]] = !(b[h[c]] = f)); if (r) {
                if (a || t) {
                    if (a) {
                        for (l = [], c = y.length; c--;)
                            (f = y[c]) && l.push(b[c] = f);
                        a(null, y = [], l, u);
                    }
                    for (c = y.length; c--;)
                        (f = y[c]) && (l = a ? Z(r, f) : d[c]) > -1 && (r[l] = !(o[l] = f));
                }
            }
            else
                y = v(y === o ? y.splice(g, y.length) : y), a ? a(null, o, y, u) : K.apply(o, y); }); } function m(t) { for (var e, n, r, i = t.length, a = w.relative[t[0].type], o = a || w.relative[" "], s = a ? 1 : 0, u = d(function (t) { return t === e; }, o, !0), l = d(function (t) { return Z(e, t) > -1; }, o, !0), c = [function (t, n, r) { var i = !a && (r || n !== j) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r)); return e = null, i; }]; s < i; s++)
                if (n = w.relative[t[s].type])
                    c = [d(h(c), n)];
                else {
                    if (n = w.filter[t[s].type].apply(null, t[s].matches), n[B]) {
                        for (r = ++s; r < i && !w.relative[t[r].type]; r++)
                            ;
                        return g(s > 1 && h(c), s > 1 && f(t.slice(0, s - 1).concat({ value: " " === t[s - 2].type ? "*" : "" })).replace(at, "$1"), n, s < r && m(t.slice(s, r)), r < i && m(t = t.slice(r)), r < i && f(t));
                    }
                    c.push(n);
                } return h(c); } function b(t, n) { var i = n.length > 0, a = t.length > 0, o = function (r, o, s, u, l) { var c, f, d, h = 0, p = "0", g = r && [], m = [], b = j, y = r || a && w.find.TAG("*", l), _ = I += null == b ? 1 : Math.random() || .1, x = y.length; for (l && (j = o === A || o || l); p !== x && null != (c = y[p]); p++) {
                if (a && c) {
                    for (f = 0, o || c.ownerDocument === A || (T(c), s = !R); d = t[f++];)
                        if (d(c, o || A, s)) {
                            u.push(c);
                            break;
                        }
                    l && (I = _);
                }
                i && ((c = !d && c) && h--, r && g.push(c));
            } if (h += p, i && p !== h) {
                for (f = 0; d = n[f++];)
                    d(g, m, o, s);
                if (r) {
                    if (h > 0)
                        for (; p--;)
                            g[p] || m[p] || (m[p] = Y.call(u));
                    m = v(m);
                }
                K.apply(u, m), l && !r && m.length > 0 && h + n.length > 1 && e.uniqueSort(u);
            } return l && (I = _, j = b), g; }; return i ? r(o) : o; } var y, _, w, x, k, O, C, M, j, E, S, T, A, N, R, P, D, L, V, B = "sizzle" + 1 * new Date, z = t.document, I = 0, U = 0, F = n(), H = n(), q = n(), $ = function (t, e) { return t === e && (S = !0), 0; }, G = {}.hasOwnProperty, W = [], Y = W.pop, X = W.push, K = W.push, J = W.slice, Z = function (t, e) { for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e)
                    return n; return -1; }, Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", rt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)", it = new RegExp(tt + "+", "g"), at = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), ot = new RegExp("^" + tt + "*," + tt + "*"), st = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), lt = new RegExp(rt), ct = new RegExp("^" + et + "$"), ft = { ID: new RegExp("^#(" + et + ")"), CLASS: new RegExp("^\\.(" + et + ")"), TAG: new RegExp("^(" + et + "|[*])"), ATTR: new RegExp("^" + nt), PSEUDO: new RegExp("^" + rt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"), bool: new RegExp("^(?:" + Q + ")$", "i"), needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i") }, dt = /^(?:input|select|textarea|button)$/i, ht = /^h\d$/i, pt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, mt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), bt = function (t, e, n) { var r = "0x" + e - 65536; return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320); }, yt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _t = function (t, e) { return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t; }, wt = function () { T(); }, xt = d(function (t) { return !0 === t.disabled && ("form" in t || "label" in t); }, { dir: "parentNode", next: "legend" }); try {
                K.apply(W = J.call(z.childNodes), z.childNodes), W[z.childNodes.length].nodeType;
            }
            catch (t) {
                K = { apply: W.length ? function (t, e) { X.apply(t, J.call(e)); } : function (t, e) { for (var n = t.length, r = 0; t[n++] = e[r++];)
                        ; t.length = n - 1; } };
            } _ = e.support = {}, k = e.isXML = function (t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName; }, T = e.setDocument = function (t) { var e, n, r = t ? t.ownerDocument || t : z; return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, N = A.documentElement, R = !k(A), z !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), _.attributes = i(function (t) { return t.className = "i", !t.getAttribute("className"); }), _.getElementsByTagName = i(function (t) { return t.appendChild(A.createComment("")), !t.getElementsByTagName("*").length; }), _.getElementsByClassName = pt.test(A.getElementsByClassName), _.getById = i(function (t) { return N.appendChild(t).id = B, !A.getElementsByName || !A.getElementsByName(B).length; }), _.getById ? (w.filter.ID = function (t) { var e = t.replace(mt, bt); return function (t) { return t.getAttribute("id") === e; }; }, w.find.ID = function (t, e) { if (void 0 !== e.getElementById && R) {
                var n = e.getElementById(t);
                return n ? [n] : [];
            } }) : (w.filter.ID = function (t) { var e = t.replace(mt, bt); return function (t) { var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return n && n.value === e; }; }, w.find.ID = function (t, e) { if (void 0 !== e.getElementById && R) {
                var n, r, i, a = e.getElementById(t);
                if (a) {
                    if ((n = a.getAttributeNode("id")) && n.value === t)
                        return [a];
                    for (i = e.getElementsByName(t), r = 0; a = i[r++];)
                        if ((n = a.getAttributeNode("id")) && n.value === t)
                            return [a];
                }
                return [];
            } }), w.find.TAG = _.getElementsByTagName ? function (t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0; } : function (t, e) { var n, r = [], i = 0, a = e.getElementsByTagName(t); if ("*" === t) {
                for (; n = a[i++];)
                    1 === n.nodeType && r.push(n);
                return r;
            } return a; }, w.find.CLASS = _.getElementsByClassName && function (t, e) { if (void 0 !== e.getElementsByClassName && R)
                return e.getElementsByClassName(t); }, D = [], P = [], (_.qsa = pt.test(A.querySelectorAll)) && (i(function (t) { N.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + tt + "*(?:value|" + Q + ")"), t.querySelectorAll("[id~=" + B + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || P.push(".#.+[+~]"); }), i(function (t) { t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var e = A.createElement("input"); e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), N.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:"); })), (_.matchesSelector = pt.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function (t) { _.disconnectedMatch = L.call(t, "*"), L.call(t, "[s!='']:x"), D.push("!=", rt); }), P = P.length && new RegExp(P.join("|")), D = D.length && new RegExp(D.join("|")), e = pt.test(N.compareDocumentPosition), V = e || pt.test(N.contains) ? function (t, e) { var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode; return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r))); } : function (t, e) { if (e)
                for (; e = e.parentNode;)
                    if (e === t)
                        return !0; return !1; }, $ = e ? function (t, e) { if (t === e)
                return S = !0, 0; var n = !t.compareDocumentPosition - !e.compareDocumentPosition; return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === A || t.ownerDocument === z && V(z, t) ? -1 : e === A || e.ownerDocument === z && V(z, e) ? 1 : E ? Z(E, t) - Z(E, e) : 0 : 4 & n ? -1 : 1); } : function (t, e) { if (t === e)
                return S = !0, 0; var n, r = 0, i = t.parentNode, a = e.parentNode, s = [t], u = [e]; if (!i || !a)
                return t === A ? -1 : e === A ? 1 : i ? -1 : a ? 1 : E ? Z(E, t) - Z(E, e) : 0; if (i === a)
                return o(t, e); for (n = t; n = n.parentNode;)
                s.unshift(n); for (n = e; n = n.parentNode;)
                u.unshift(n); for (; s[r] === u[r];)
                r++; return r ? o(s[r], u[r]) : s[r] === z ? -1 : u[r] === z ? 1 : 0; }, A) : A; }, e.matches = function (t, n) { return e(t, null, null, n); }, e.matchesSelector = function (t, n) { if ((t.ownerDocument || t) !== A && T(t), n = n.replace(ut, "='$1']"), _.matchesSelector && R && !q[n + " "] && (!D || !D.test(n)) && (!P || !P.test(n)))
                try {
                    var r = L.call(t, n);
                    if (r || _.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return r;
                }
                catch (t) { } return e(n, A, null, [t]).length > 0; }, e.contains = function (t, e) { return (t.ownerDocument || t) !== A && T(t), V(t, e); }, e.attr = function (t, e) { (t.ownerDocument || t) !== A && T(t); var n = w.attrHandle[e.toLowerCase()], r = n && G.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0; return void 0 !== r ? r : _.attributes || !R ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null; }, e.escape = function (t) { return (t + "").replace(yt, _t); }, e.error = function (t) { throw new Error("Syntax error, unrecognized expression: " + t); }, e.uniqueSort = function (t) { var e, n = [], r = 0, i = 0; if (S = !_.detectDuplicates, E = !_.sortStable && t.slice(0), t.sort($), S) {
                for (; e = t[i++];)
                    e === t[i] && (r = n.push(i));
                for (; r--;)
                    t.splice(n[r], 1);
            } return E = null, t; }, x = e.getText = function (t) { var e, n = "", r = 0, i = t.nodeType; if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += x(t);
                }
                else if (3 === i || 4 === i)
                    return t.nodeValue;
            }
            else
                for (; e = t[r++];)
                    n += x(e); return n; }, w = e.selectors = { cacheLength: 50, createPseudo: r, match: ft, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (t) { return t[1] = t[1].replace(mt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(mt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4); }, CHILD: function (t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t; }, PSEUDO: function (t) { var e, n = !t[6] && t[2]; return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && lt.test(n) && (e = O(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3)); } }, filter: { TAG: function (t) { var e = t.replace(mt, bt).toLowerCase(); return "*" === t ? function () { return !0; } : function (t) { return t.nodeName && t.nodeName.toLowerCase() === e; }; }, CLASS: function (t) { var e = F[t + " "]; return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && F(t, function (t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || ""); }); }, ATTR: function (t, n, r) { return function (i) { var a = e.attr(i, t); return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(it, " ") + " ").indexOf(r) > -1 : "|=" === n && (a === r || a.slice(0, r.length + 1) === r + "-")); }; }, CHILD: function (t, e, n, r, i) { var a = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), s = "of-type" === e; return 1 === r && 0 === i ? function (t) { return !!t.parentNode; } : function (e, n, u) { var l, c, f, d, h, p, v = a !== o ? "nextSibling" : "previousSibling", g = e.parentNode, m = s && e.nodeName.toLowerCase(), b = !u && !s, y = !1; if (g) {
                        if (a) {
                            for (; v;) {
                                for (d = e; d = d[v];)
                                    if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)
                                        return !1;
                                p = v = "only" === t && !p && "nextSibling";
                            }
                            return !0;
                        }
                        if (p = [o ? g.firstChild : g.lastChild], o && b) {
                            for (d = g, f = d[B] || (d[B] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[t] || [], h = l[0] === I && l[1], y = h && l[2], d = h && g.childNodes[h]; d = ++h && d && d[v] || (y = h = 0) || p.pop();)
                                if (1 === d.nodeType && ++y && d === e) {
                                    c[t] = [I, h, y];
                                    break;
                                }
                        }
                        else if (b && (d = e, f = d[B] || (d[B] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[t] || [], h = l[0] === I && l[1], y = h), !1 === y)
                            for (; (d = ++h && d && d[v] || (y = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++y || (b && (f = d[B] || (d[B] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[t] = [I, y]), d !== e));)
                                ;
                        return (y -= i) === r || y % r == 0 && y / r >= 0;
                    } }; }, PSEUDO: function (t, n) { var i, a = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t); return a[B] ? a(n) : a.length > 1 ? (i = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) { for (var r, i = a(t, n), o = i.length; o--;)
                        r = Z(t, i[o]), t[r] = !(e[r] = i[o]); }) : function (t) { return a(t, 0, i); }) : a; } }, pseudos: { not: r(function (t) { var e = [], n = [], i = C(t.replace(at, "$1")); return i[B] ? r(function (t, e, n, r) { for (var a, o = i(t, null, r, []), s = t.length; s--;)
                        (a = o[s]) && (t[s] = !(e[s] = a)); }) : function (t, r, a) { return e[0] = t, i(e, null, a, n), e[0] = null, !n.pop(); }; }), has: r(function (t) { return function (n) { return e(t, n).length > 0; }; }), contains: r(function (t) { return t = t.replace(mt, bt), function (e) { return (e.textContent || e.innerText || x(e)).indexOf(t) > -1; }; }), lang: r(function (t) { return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(mt, bt).toLowerCase(), function (e) { var n; do {
                        if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                            return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                    } while ((e = e.parentNode) && 1 === e.nodeType); return !1; }; }), target: function (e) { var n = t.location && t.location.hash; return n && n.slice(1) === e.id; }, root: function (t) { return t === N; }, focus: function (t) { return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex); }, enabled: s(!1), disabled: s(!0), checked: function (t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected; }, selected: function (t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected; }, empty: function (t) { for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1; return !0; }, parent: function (t) { return !w.pseudos.empty(t); }, header: function (t) { return ht.test(t.nodeName); }, input: function (t) { return dt.test(t.nodeName); }, button: function (t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e; }, text: function (t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()); }, first: u(function () { return [0]; }), last: u(function (t, e) { return [e - 1]; }), eq: u(function (t, e, n) { return [n < 0 ? n + e : n]; }), even: u(function (t, e) { for (var n = 0; n < e; n += 2)
                        t.push(n); return t; }), odd: u(function (t, e) { for (var n = 1; n < e; n += 2)
                        t.push(n); return t; }), lt: u(function (t, e, n) { for (var r = n < 0 ? n + e : n; --r >= 0;)
                        t.push(r); return t; }), gt: u(function (t, e, n) { for (var r = n < 0 ? n + e : n; ++r < e;)
                        t.push(r); return t; }) } }, w.pseudos.nth = w.pseudos.eq; for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                w.pseudos[y] = function (t) { return function (e) { return "input" === e.nodeName.toLowerCase() && e.type === t; }; }(y); for (y in { submit: !0, reset: !0 })
                w.pseudos[y] = function (t) { return function (e) { var n = e.nodeName.toLowerCase(); return ("input" === n || "button" === n) && e.type === t; }; }(y); return c.prototype = w.filters = w.pseudos, w.setFilters = new c, O = e.tokenize = function (t, n) { var r, i, a, o, s, u, l, c = H[t + " "]; if (c)
                return n ? 0 : c.slice(0); for (s = t, u = [], l = w.preFilter; s;) {
                r && !(i = ot.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(a = [])), r = !1, (i = st.exec(s)) && (r = i.shift(), a.push({ value: r, type: i[0].replace(at, " ") }), s = s.slice(r.length));
                for (o in w.filter)
                    !(i = ft[o].exec(s)) || l[o] && !(i = l[o](i)) || (r = i.shift(), a.push({ value: r, type: o, matches: i }), s = s.slice(r.length));
                if (!r)
                    break;
            } return n ? s.length : s ? e.error(t) : H(t, u).slice(0); }, C = e.compile = function (t, e) { var n, r = [], i = [], a = q[t + " "]; if (!a) {
                for (e || (e = O(t)), n = e.length; n--;)
                    a = m(e[n]), a[B] ? r.push(a) : i.push(a);
                a = q(t, b(i, r)), a.selector = t;
            } return a; }, M = e.select = function (t, e, n, r) { var i, a, o, s, u, c = "function" == typeof t && t, d = !r && O(t = c.selector || t); if (n = n || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && 9 === e.nodeType && R && w.relative[a[1].type]) {
                    if (!(e = (w.find.ID(o.matches[0].replace(mt, bt), e) || [])[0]))
                        return n;
                    c && (e = e.parentNode), t = t.slice(a.shift().value.length);
                }
                for (i = ft.needsContext.test(t) ? 0 : a.length; i-- && (o = a[i], !w.relative[s = o.type]);)
                    if ((u = w.find[s]) && (r = u(o.matches[0].replace(mt, bt), gt.test(a[0].type) && l(e.parentNode) || e))) {
                        if (a.splice(i, 1), !(t = r.length && f(a)))
                            return K.apply(n, r), n;
                        break;
                    }
            } return (c || C(t, d))(r, e, !R, n, !e || gt.test(t) && l(e.parentNode) || e), n; }, _.sortStable = B.split("").sort($).join("") === B, _.detectDuplicates = !!S, T(), _.sortDetached = i(function (t) { return 1 & t.compareDocumentPosition(A.createElement("fieldset")); }), i(function (t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href"); }) || a("type|href|height|width", function (t, e, n) { if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2); }), _.attributes && i(function (t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value"); }) || a("value", function (t, e, n) { if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue; }), i(function (t) { return null == t.getAttribute("disabled"); }) || a(Q, function (t, e, n) { var r; if (!n)
                return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null; }), e; }(n);
            bt.find = kt, bt.expr = kt.selectors, bt.expr[":"] = bt.expr.pseudos, bt.uniqueSort = bt.unique = kt.uniqueSort, bt.text = kt.getText, bt.isXMLDoc = kt.isXML, bt.contains = kt.contains, bt.escapeSelector = kt.escape;
            var Ot = function (t, e, n) { for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (i && bt(t).is(n))
                        break;
                    r.push(t);
                } return r; }, Ct = function (t, e) { for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t); return n; }, Mt = bt.expr.match.needsContext, jt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Et = /^.[^:#\[\.,]*$/;
            bt.filter = function (t, e, n) { var r = e[0]; return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? bt.find.matchesSelector(r, t) ? [r] : [] : bt.find.matches(t, bt.grep(e, function (t) { return 1 === t.nodeType; })); }, bt.fn.extend({ find: function (t) { var e, n, r = this.length, i = this; if ("string" != typeof t)
                    return this.pushStack(bt(t).filter(function () { for (e = 0; e < r; e++)
                        if (bt.contains(i[e], this))
                            return !0; })); for (n = this.pushStack([]), e = 0; e < r; e++)
                    bt.find(t, i[e], n); return r > 1 ? bt.uniqueSort(n) : n; }, filter: function (t) { return this.pushStack(l(this, t || [], !1)); }, not: function (t) { return this.pushStack(l(this, t || [], !0)); }, is: function (t) { return !!l(this, "string" == typeof t && Mt.test(t) ? bt(t) : t || [], !1).length; } });
            var St, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (bt.fn.init = function (t, e, n) { var r, i; if (!t)
                return this; if (n = n || St, "string" == typeof t) {
                if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Tt.exec(t)) || !r[1] && e)
                    return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof bt ? e[0] : e, bt.merge(this, bt.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : ot, !0)), jt.test(r[1]) && bt.isPlainObject(e))
                        for (r in e)
                            bt.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this;
                }
                return i = ot.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
            } return t.nodeType ? (this[0] = t, this.length = 1, this) : bt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(bt) : bt.makeArray(t, this); }).prototype = bt.fn, St = bt(ot);
            var At = /^(?:parents|prev(?:Until|All))/, Nt = { children: !0, contents: !0, next: !0, prev: !0 };
            bt.fn.extend({ has: function (t) { var e = bt(t, this), n = e.length; return this.filter(function () { for (var t = 0; t < n; t++)
                    if (bt.contains(this, e[t]))
                        return !0; }); }, closest: function (t, e) { var n, r = 0, i = this.length, a = [], o = "string" != typeof t && bt(t); if (!Mt.test(t))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && bt.find.matchesSelector(n, t))) {
                                a.push(n);
                                break;
                            } return this.pushStack(a.length > 1 ? bt.uniqueSort(a) : a); }, index: function (t) { return t ? "string" == typeof t ? ft.call(bt(t), this[0]) : ft.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (t, e) { return this.pushStack(bt.uniqueSort(bt.merge(this.get(), bt(t, e)))); }, addBack: function (t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)); } }), bt.each({ parent: function (t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null; }, parents: function (t) { return Ot(t, "parentNode"); }, parentsUntil: function (t, e, n) { return Ot(t, "parentNode", n); }, next: function (t) { return c(t, "nextSibling"); }, prev: function (t) { return c(t, "previousSibling"); }, nextAll: function (t) { return Ot(t, "nextSibling"); }, prevAll: function (t) { return Ot(t, "previousSibling"); }, nextUntil: function (t, e, n) { return Ot(t, "nextSibling", n); }, prevUntil: function (t, e, n) { return Ot(t, "previousSibling", n); }, siblings: function (t) { return Ct((t.parentNode || {}).firstChild, t); }, children: function (t) { return Ct(t.firstChild); }, contents: function (t) { return u(t, "iframe") ? t.contentDocument : (u(t, "template") && (t = t.content || t), bt.merge([], t.childNodes)); } }, function (t, e) { bt.fn[t] = function (n, r) { var i = bt.map(this, e, n); return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = bt.filter(r, i)), this.length > 1 && (Nt[t] || bt.uniqueSort(i), At.test(t) && i.reverse()), this.pushStack(i); }; });
            var Rt = /[^\x20\t\r\n\f]+/g;
            bt.Callbacks = function (t) { t = "string" == typeof t ? f(t) : bt.extend({}, t); var e, n, r, i, a = [], o = [], s = -1, u = function () { for (i = i || t.once, r = e = !0; o.length; s = -1)
                for (n = o.shift(); ++s < a.length;)
                    !1 === a[s].apply(n[0], n[1]) && t.stopOnFalse && (s = a.length, n = !1); t.memory || (n = !1), e = !1, i && (a = n ? [] : ""); }, l = { add: function () { return a && (n && !e && (s = a.length - 1, o.push(n)), function e(n) { bt.each(n, function (n, r) { bt.isFunction(r) ? t.unique && l.has(r) || a.push(r) : r && r.length && "string" !== bt.type(r) && e(r); }); }(arguments), n && !e && u()), this; }, remove: function () { return bt.each(arguments, function (t, e) { for (var n; (n = bt.inArray(e, a, n)) > -1;)
                    a.splice(n, 1), n <= s && s--; }), this; }, has: function (t) { return t ? bt.inArray(t, a) > -1 : a.length > 0; }, empty: function () { return a && (a = []), this; }, disable: function () { return i = o = [], a = n = "", this; }, disabled: function () { return !a; }, lock: function () { return i = o = [], n || e || (a = n = ""), this; }, locked: function () { return !!i; }, fireWith: function (t, n) { return i || (n = n || [], n = [t, n.slice ? n.slice() : n], o.push(n), e || u()), this; }, fire: function () { return l.fireWith(this, arguments), this; }, fired: function () { return !!r; } }; return l; }, bt.extend({ Deferred: function (t) { var e = [["notify", "progress", bt.Callbacks("memory"), bt.Callbacks("memory"), 2], ["resolve", "done", bt.Callbacks("once memory"), bt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", bt.Callbacks("once memory"), bt.Callbacks("once memory"), 1, "rejected"]], r = "pending", i = { state: function () { return r; }, always: function () { return a.done(arguments).fail(arguments), this; }, catch: function (t) { return i.then(null, t); }, pipe: function () { var t = arguments; return bt.Deferred(function (n) { bt.each(e, function (e, r) { var i = bt.isFunction(t[r[4]]) && t[r[4]]; a[r[1]](function () { var t = i && i.apply(this, arguments); t && bt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [t] : arguments); }); }), t = null; }).promise(); }, then: function (t, r, i) { function a(t, e, r, i) { return function () { var s = this, u = arguments, l = function () { var n, l; if (!(t < o)) {
                        if ((n = r.apply(s, u)) === e.promise())
                            throw new TypeError("Thenable self-resolution");
                        l = n && ("object" == typeof n || "function" == typeof n) && n.then, bt.isFunction(l) ? i ? l.call(n, a(o, e, d, i), a(o, e, h, i)) : (o++, l.call(n, a(o, e, d, i), a(o, e, h, i), a(o, e, d, e.notifyWith))) : (r !== d && (s = void 0, u = [n]), (i || e.resolveWith)(s, u));
                    } }, c = i ? l : function () { try {
                        l();
                    }
                    catch (n) {
                        bt.Deferred.exceptionHook && bt.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= o && (r !== h && (s = void 0, u = [n]), e.rejectWith(s, u));
                    } }; t ? c() : (bt.Deferred.getStackHook && (c.stackTrace = bt.Deferred.getStackHook()), n.setTimeout(c)); }; } var o = 0; return bt.Deferred(function (n) { e[0][3].add(a(0, n, bt.isFunction(i) ? i : d, n.notifyWith)), e[1][3].add(a(0, n, bt.isFunction(t) ? t : d)), e[2][3].add(a(0, n, bt.isFunction(r) ? r : h)); }).promise(); }, promise: function (t) { return null != t ? bt.extend(t, i) : i; } }, a = {}; return bt.each(e, function (t, n) { var o = n[2], s = n[5]; i[n[1]] = o.add, s && o.add(function () { r = s; }, e[3 - t][2].disable, e[0][2].lock), o.add(n[3].fire), a[n[0]] = function () { return a[n[0] + "With"](this === a ? void 0 : this, arguments), this; }, a[n[0] + "With"] = o.fireWith; }), i.promise(a), t && t.call(a, a), a; }, when: function (t) { var e = arguments.length, n = e, r = Array(n), i = ut.call(arguments), a = bt.Deferred(), o = function (t) { return function (n) { r[t] = this, i[t] = arguments.length > 1 ? ut.call(arguments) : n, --e || a.resolveWith(r, i); }; }; if (e <= 1 && (p(t, a.done(o(n)).resolve, a.reject, !e), "pending" === a.state() || bt.isFunction(i[n] && i[n].then)))
                    return a.then(); for (; n--;)
                    p(i[n], o(n), a.reject); return a.promise(); } });
            var Pt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            bt.Deferred.exceptionHook = function (t, e) { n.console && n.console.warn && t && Pt.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e); }, bt.readyException = function (t) { n.setTimeout(function () { throw t; }); };
            var Dt = bt.Deferred();
            bt.fn.ready = function (t) { return Dt.then(t).catch(function (t) { bt.readyException(t); }), this; }, bt.extend({ isReady: !1, readyWait: 1, ready: function (t) { (!0 === t ? --bt.readyWait : bt.isReady) || (bt.isReady = !0, !0 !== t && --bt.readyWait > 0 || Dt.resolveWith(ot, [bt])); } }), bt.ready.then = Dt.then, "complete" === ot.readyState || "loading" !== ot.readyState && !ot.documentElement.doScroll ? n.setTimeout(bt.ready) : (ot.addEventListener("DOMContentLoaded", v), n.addEventListener("load", v));
            var Lt = function (t, e, n, r, i, a, o) { var s = 0, u = t.length, l = null == n; if ("object" === bt.type(n)) {
                i = !0;
                for (s in n)
                    Lt(t, e, s, n[s], !0, a, o);
            }
            else if (void 0 !== r && (i = !0, bt.isFunction(r) || (o = !0), l && (o ? (e.call(t, r), e = null) : (l = e, e = function (t, e, n) { return l.call(bt(t), n); })), e))
                for (; s < u; s++)
                    e(t[s], n, o ? r : r.call(t[s], s, e(t[s], n))); return i ? t : l ? e.call(t) : u ? e(t[0], n) : a; }, Vt = function (t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType; };
            g.uid = 1, g.prototype = { cache: function (t) { var e = t[this.expando]; return e || (e = {}, Vt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e; }, set: function (t, e, n) { var r, i = this.cache(t); if ("string" == typeof e)
                    i[bt.camelCase(e)] = n;
                else
                    for (r in e)
                        i[bt.camelCase(r)] = e[r]; return i; }, get: function (t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][bt.camelCase(e)]; }, access: function (t, e, n) { return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e); }, remove: function (t, e) { var n, r = t[this.expando]; if (void 0 !== r) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(bt.camelCase) : (e = bt.camelCase(e), e = e in r ? [e] : e.match(Rt) || []), n = e.length;
                        for (; n--;)
                            delete r[e[n]];
                    }
                    (void 0 === e || bt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
                } }, hasData: function (t) { var e = t[this.expando]; return void 0 !== e && !bt.isEmptyObject(e); } };
            var Bt = new g, zt = new g, It = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ut = /[A-Z]/g;
            bt.extend({ hasData: function (t) { return zt.hasData(t) || Bt.hasData(t); }, data: function (t, e, n) { return zt.access(t, e, n); }, removeData: function (t, e) { zt.remove(t, e); }, _data: function (t, e, n) { return Bt.access(t, e, n); }, _removeData: function (t, e) { Bt.remove(t, e); } }), bt.fn.extend({ data: function (t, e) { var n, r, i, a = this[0], o = a && a.attributes; if (void 0 === t) {
                    if (this.length && (i = zt.get(a), 1 === a.nodeType && !Bt.get(a, "hasDataAttrs"))) {
                        for (n = o.length; n--;)
                            o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = bt.camelCase(r.slice(5)), b(a, r, i[r])));
                        Bt.set(a, "hasDataAttrs", !0);
                    }
                    return i;
                } return "object" == typeof t ? this.each(function () { zt.set(this, t); }) : Lt(this, function (e) { var n; if (a && void 0 === e) {
                    if (void 0 !== (n = zt.get(a, t)))
                        return n;
                    if (void 0 !== (n = b(a, t)))
                        return n;
                }
                else
                    this.each(function () { zt.set(this, t, e); }); }, null, e, arguments.length > 1, null, !0); }, removeData: function (t) { return this.each(function () { zt.remove(this, t); }); } }), bt.extend({ queue: function (t, e, n) { var r; if (t)
                    return e = (e || "fx") + "queue", r = Bt.get(t, e), n && (!r || Array.isArray(n) ? r = Bt.access(t, e, bt.makeArray(n)) : r.push(n)), r || []; }, dequeue: function (t, e) { e = e || "fx"; var n = bt.queue(t, e), r = n.length, i = n.shift(), a = bt._queueHooks(t, e), o = function () { bt.dequeue(t, e); }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete a.stop, i.call(t, o, a)), !r && a && a.empty.fire(); }, _queueHooks: function (t, e) { var n = e + "queueHooks"; return Bt.get(t, n) || Bt.access(t, n, { empty: bt.Callbacks("once memory").add(function () { Bt.remove(t, [e + "queue", n]); }) }); } }), bt.fn.extend({ queue: function (t, e) { var n = 2; return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? bt.queue(this[0], t) : void 0 === e ? this : this.each(function () { var n = bt.queue(this, t, e); bt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && bt.dequeue(this, t); }); }, dequeue: function (t) { return this.each(function () { bt.dequeue(this, t); }); }, clearQueue: function (t) { return this.queue(t || "fx", []); }, promise: function (t, e) { var n, r = 1, i = bt.Deferred(), a = this, o = this.length, s = function () { --r || i.resolveWith(a, [a]); }; for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)
                    (n = Bt.get(a[o], t + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(e); } });
            var Ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ht = new RegExp("^(?:([+-])=|)(" + Ft + ")([a-z%]*)$", "i"), qt = ["Top", "Right", "Bottom", "Left"], $t = function (t, e) { return t = e || t, "none" === t.style.display || "" === t.style.display && bt.contains(t.ownerDocument, t) && "none" === bt.css(t, "display"); }, Gt = function (t, e, n, r) { var i, a, o = {}; for (a in e)
                o[a] = t.style[a], t.style[a] = e[a]; i = n.apply(t, r || []); for (a in e)
                t.style[a] = o[a]; return i; }, Wt = {};
            bt.fn.extend({ show: function () { return w(this, !0); }, hide: function () { return w(this); }, toggle: function (t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () { $t(this) ? bt(this).show() : bt(this).hide(); }); } });
            var Yt = /^(?:checkbox|radio)$/i, Xt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Kt = /^$|\/(?:java|ecma)script/i, Jt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
            Jt.optgroup = Jt.option, Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td;
            var Zt = /<|&#?\w+;/;
            !function () { var t = ot.createDocumentFragment(), e = t.appendChild(ot.createElement("div")), n = ot.createElement("input"); n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), mt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", mt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue; }();
            var Qt = ot.documentElement, te = /^key/, ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ne = /^([^.]*)(?:\.(.+)|)/;
            bt.event = { global: {}, add: function (t, e, n, r, i) { var a, o, s, u, l, c, f, d, h, p, v, g = Bt.get(t); if (g)
                    for (n.handler && (a = n, n = a.handler, i = a.selector), i && bt.find.matchesSelector(Qt, i), n.guid || (n.guid = bt.guid++), (u = g.events) || (u = g.events = {}), (o = g.handle) || (o = g.handle = function (e) { return void 0 !== bt && bt.event.triggered !== e.type ? bt.event.dispatch.apply(t, arguments) : void 0; }), e = (e || "").match(Rt) || [""], l = e.length; l--;)
                        s = ne.exec(e[l]) || [], h = v = s[1], p = (s[2] || "").split(".").sort(), h && (f = bt.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = bt.event.special[h] || {}, c = bt.extend({ type: h, origType: v, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && bt.expr.match.needsContext.test(i), namespace: p.join(".") }, a), (d = u[h]) || (d = u[h] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, p, o) || t.addEventListener && t.addEventListener(h, o)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), bt.event.global[h] = !0); }, remove: function (t, e, n, r, i) { var a, o, s, u, l, c, f, d, h, p, v, g = Bt.hasData(t) && Bt.get(t); if (g && (u = g.events)) {
                    for (e = (e || "").match(Rt) || [""], l = e.length; l--;)
                        if (s = ne.exec(e[l]) || [], h = v = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (f = bt.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = d.length; a--;)
                                c = d[a], !i && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(a, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(t, c));
                            o && !d.length && (f.teardown && !1 !== f.teardown.call(t, p, g.handle) || bt.removeEvent(t, h, g.handle), delete u[h]);
                        }
                        else
                            for (h in u)
                                bt.event.remove(t, h + e[l], n, r, !0);
                    bt.isEmptyObject(u) && Bt.remove(t, "handle events");
                } }, dispatch: function (t) { var e, n, r, i, a, o, s = bt.event.fix(t), u = new Array(arguments.length), l = (Bt.get(this, "events") || {})[s.type] || [], c = bt.event.special[s.type] || {}; for (u[0] = s, e = 1; e < arguments.length; e++)
                    u[e] = arguments[e]; if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (o = bt.event.handlers.call(this, s, l), e = 0; (i = o[e++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !s.isImmediatePropagationStopped();)
                            s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a, s.data = a.data, void 0 !== (r = ((bt.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result;
                } }, handlers: function (t, e) { var n, r, i, a, o, s = [], u = e.delegateCount, l = t.target; if (u && l.nodeType && !("click" === t.type && t.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                            for (a = [], o = {}, n = 0; n < u; n++)
                                r = e[n], i = r.selector + " ", void 0 === o[i] && (o[i] = r.needsContext ? bt(i, this).index(l) > -1 : bt.find(i, this, null, [l]).length), o[i] && a.push(r);
                            a.length && s.push({ elem: l, handlers: a });
                        } return l = this, u < e.length && s.push({ elem: l, handlers: e.slice(u) }), s; }, addProp: function (t, e) { Object.defineProperty(bt.Event.prototype, t, { enumerable: !0, configurable: !0, get: bt.isFunction(e) ? function () { if (this.originalEvent)
                        return e(this.originalEvent); } : function () { if (this.originalEvent)
                        return this.originalEvent[t]; }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }); } }); }, fix: function (t) { return t[bt.expando] ? t : new bt.Event(t); }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== j() && this.focus)
                            return this.focus(), !1; }, delegateType: "focusin" }, blur: { trigger: function () { if (this === j() && this.blur)
                            return this.blur(), !1; }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && u(this, "input"))
                            return this.click(), !1; }, _default: function (t) { return u(t.target, "a"); } }, beforeunload: { postDispatch: function (t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result); } } } }, bt.removeEvent = function (t, e, n) { t.removeEventListener && t.removeEventListener(e, n); }, bt.Event = function (t, e) { if (!(this instanceof bt.Event))
                return new bt.Event(t, e); t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? C : M, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && bt.extend(this, e), this.timeStamp = t && t.timeStamp || bt.now(), this[bt.expando] = !0; }, bt.Event.prototype = { constructor: bt.Event, isDefaultPrevented: M, isPropagationStopped: M, isImmediatePropagationStopped: M, isSimulated: !1, preventDefault: function () { var t = this.originalEvent; this.isDefaultPrevented = C, t && !this.isSimulated && t.preventDefault(); }, stopPropagation: function () { var t = this.originalEvent; this.isPropagationStopped = C, t && !this.isSimulated && t.stopPropagation(); }, stopImmediatePropagation: function () { var t = this.originalEvent; this.isImmediatePropagationStopped = C, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation(); } }, bt.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (t) { var e = t.button; return null == t.which && te.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ee.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which; } }, bt.event.addProp), bt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) { bt.event.special[t] = { delegateType: e, bindType: e, handle: function (t) { var n, r = this, i = t.relatedTarget, a = t.handleObj; return i && (i === r || bt.contains(r, i)) || (t.type = a.origType, n = a.handler.apply(this, arguments), t.type = e), n; } }; }), bt.fn.extend({ on: function (t, e, n, r) { return E(this, t, e, n, r); }, one: function (t, e, n, r) { return E(this, t, e, n, r, 1); }, off: function (t, e, n) { var r, i; if (t && t.preventDefault && t.handleObj)
                    return r = t.handleObj, bt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof t) {
                    for (i in t)
                        this.off(i, e, t[i]);
                    return this;
                } return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = M), this.each(function () { bt.event.remove(this, t, n, e); }); } });
            var re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, ie = /<script|<style|<link/i, ae = /checked\s*(?:[^=]|=\s*.checked.)/i, oe = /^true\/(.*)/, se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            bt.extend({ htmlPrefilter: function (t) { return t.replace(re, "<$1></$2>"); }, clone: function (t, e, n) { var r, i, a, o, s = t.cloneNode(!0), u = bt.contains(t.ownerDocument, t); if (!(mt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || bt.isXMLDoc(t)))
                    for (o = x(s), a = x(t), r = 0, i = a.length; r < i; r++)
                        R(a[r], o[r]); if (e)
                    if (n)
                        for (a = a || x(t), o = o || x(s), r = 0, i = a.length; r < i; r++)
                            N(a[r], o[r]);
                    else
                        N(t, s); return o = x(s, "script"), o.length > 0 && k(o, !u && x(t, "script")), s; }, cleanData: function (t) { for (var e, n, r, i = bt.event.special, a = 0; void 0 !== (n = t[a]); a++)
                    if (Vt(n)) {
                        if (e = n[Bt.expando]) {
                            if (e.events)
                                for (r in e.events)
                                    i[r] ? bt.event.remove(n, r) : bt.removeEvent(n, r, e.handle);
                            n[Bt.expando] = void 0;
                        }
                        n[zt.expando] && (n[zt.expando] = void 0);
                    } } }), bt.fn.extend({ detach: function (t) { return D(this, t, !0); }, remove: function (t) { return D(this, t); }, text: function (t) { return Lt(this, function (t) { return void 0 === t ? bt.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t); }); }, null, t, arguments.length); }, append: function () { return P(this, arguments, function (t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    S(this, t).appendChild(t);
                } }); }, prepend: function () { return P(this, arguments, function (t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = S(this, t);
                    e.insertBefore(t, e.firstChild);
                } }); }, before: function () { return P(this, arguments, function (t) { this.parentNode && this.parentNode.insertBefore(t, this); }); }, after: function () { return P(this, arguments, function (t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling); }); }, empty: function () { for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (bt.cleanData(x(t, !1)), t.textContent = ""); return this; }, clone: function (t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function () { return bt.clone(this, t, e); }); }, html: function (t) { return Lt(this, function (t) { var e = this[0] || {}, n = 0, r = this.length; if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML; if ("string" == typeof t && !ie.test(t) && !Jt[(Xt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = bt.htmlPrefilter(t);
                    try {
                        for (; n < r; n++)
                            e = this[n] || {}, 1 === e.nodeType && (bt.cleanData(x(e, !1)), e.innerHTML = t);
                        e = 0;
                    }
                    catch (t) { }
                } e && this.empty().append(t); }, null, t, arguments.length); }, replaceWith: function () { var t = []; return P(this, arguments, function (e) { var n = this.parentNode; bt.inArray(this, t) < 0 && (bt.cleanData(x(this)), n && n.replaceChild(e, this)); }, t); } }), bt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) { bt.fn[t] = function (t) { for (var n, r = [], i = bt(t), a = i.length - 1, o = 0; o <= a; o++)
                n = o === a ? this : this.clone(!0), bt(i[o])[e](n), ct.apply(r, n.get()); return this.pushStack(r); }; });
            var ue = /^margin/, le = new RegExp("^(" + Ft + ")(?!px)[a-z%]+$", "i"), ce = function (t) { var e = t.ownerDocument.defaultView; return e && e.opener || (e = n), e.getComputedStyle(t); };
            !function () { function t() { if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Qt.appendChild(o);
                var t = n.getComputedStyle(s);
                e = "1%" !== t.top, a = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Qt.removeChild(o), s = null;
            } } var e, r, i, a, o = ot.createElement("div"), s = ot.createElement("div"); s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", mt.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), bt.extend(mt, { pixelPosition: function () { return t(), e; }, boxSizingReliable: function () { return t(), r; }, pixelMarginRight: function () { return t(), i; }, reliableMarginLeft: function () { return t(), a; } })); }();
            var fe = /^(none|table(?!-c[ea]).+)/, de = /^--/, he = { position: "absolute", visibility: "hidden", display: "block" }, pe = { letterSpacing: "0", fontWeight: "400" }, ve = ["Webkit", "Moz", "ms"], ge = ot.createElement("div").style;
            bt.extend({ cssHooks: { opacity: { get: function (t, e) { if (e) {
                            var n = L(t, "opacity");
                            return "" === n ? "1" : n;
                        } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function (t, e, n, r) { if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var i, a, o, s = bt.camelCase(e), u = de.test(e), l = t.style;
                    if (u || (e = z(s)), o = bt.cssHooks[e] || bt.cssHooks[s], void 0 === n)
                        return o && "get" in o && void 0 !== (i = o.get(t, !1, r)) ? i : l[e];
                    a = typeof n, "string" === a && (i = Ht.exec(n)) && i[1] && (n = y(t, e, i), a = "number"), null != n && n === n && ("number" === a && (n += i && i[3] || (bt.cssNumber[s] ? "" : "px")), mt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, r)) || (u ? l.setProperty(e, n) : l[e] = n));
                } }, css: function (t, e, n, r) { var i, a, o, s = bt.camelCase(e); return de.test(e) || (e = z(s)), o = bt.cssHooks[e] || bt.cssHooks[s], o && "get" in o && (i = o.get(t, !0, n)), void 0 === i && (i = L(t, e, r)), "normal" === i && e in pe && (i = pe[e]), "" === n || n ? (a = parseFloat(i), !0 === n || isFinite(a) ? a || 0 : i) : i; } }), bt.each(["height", "width"], function (t, e) { bt.cssHooks[e] = { get: function (t, n, r) { if (n)
                    return !fe.test(bt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? F(t, e, r) : Gt(t, he, function () { return F(t, e, r); }); }, set: function (t, n, r) { var i, a = r && ce(t), o = r && U(t, e, r, "border-box" === bt.css(t, "boxSizing", !1, a), a); return o && (i = Ht.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = bt.css(t, e)), I(t, n, o); } }; }), bt.cssHooks.marginLeft = V(mt.reliableMarginLeft, function (t, e) { if (e)
                return (parseFloat(L(t, "marginLeft")) || t.getBoundingClientRect().left - Gt(t, { marginLeft: 0 }, function () { return t.getBoundingClientRect().left; })) + "px"; }), bt.each({ margin: "", padding: "", border: "Width" }, function (t, e) { bt.cssHooks[t + e] = { expand: function (n) { for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[t + qt[r] + e] = a[r] || a[r - 2] || a[0]; return i; } }, ue.test(t) || (bt.cssHooks[t + e].set = I); }), bt.fn.extend({ css: function (t, e) { return Lt(this, function (t, e, n) { var r, i, a = {}, o = 0; if (Array.isArray(e)) {
                    for (r = ce(t), i = e.length; o < i; o++)
                        a[e[o]] = bt.css(t, e[o], !1, r);
                    return a;
                } return void 0 !== n ? bt.style(t, e, n) : bt.css(t, e); }, t, e, arguments.length > 1); } }), bt.Tween = H, H.prototype = { constructor: H, init: function (t, e, n, r, i, a) { this.elem = t, this.prop = n, this.easing = i || bt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = a || (bt.cssNumber[n] ? "" : "px"); }, cur: function () { var t = H.propHooks[this.prop]; return t && t.get ? t.get(this) : H.propHooks._default.get(this); }, run: function (t) { var e, n = H.propHooks[this.prop]; return this.options.duration ? this.pos = e = bt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this; } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function (t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = bt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0); }, set: function (t) { bt.fx.step[t.prop] ? bt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[bt.cssProps[t.prop]] && !bt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : bt.style(t.elem, t.prop, t.now + t.unit); } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function (t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now); } }, bt.easing = { linear: function (t) { return t; }, swing: function (t) { return .5 - Math.cos(t * Math.PI) / 2; }, _default: "swing" }, bt.fx = H.prototype.init, bt.fx.step = {};
            var me, be, ye = /^(?:toggle|show|hide)$/, _e = /queueHooks$/;
            bt.Animation = bt.extend(K, { tweeners: { "*": [function (t, e) { var n = this.createTween(t, e); return y(n.elem, t, Ht.exec(e), n), n; }] }, tweener: function (t, e) { bt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Rt); for (var n, r = 0, i = t.length; r < i; r++)
                    n = t[r], K.tweeners[n] = K.tweeners[n] || [], K.tweeners[n].unshift(e); }, prefilters: [Y], prefilter: function (t, e) { e ? K.prefilters.unshift(t) : K.prefilters.push(t); } }), bt.speed = function (t, e, n) { var r = t && "object" == typeof t ? bt.extend({}, t) : { complete: n || !n && e || bt.isFunction(t) && t, duration: t, easing: n && e || e && !bt.isFunction(e) && e }; return bt.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in bt.fx.speeds ? r.duration = bt.fx.speeds[r.duration] : r.duration = bt.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { bt.isFunction(r.old) && r.old.call(this), r.queue && bt.dequeue(this, r.queue); }, r; }, bt.fn.extend({ fadeTo: function (t, e, n, r) { return this.filter($t).css("opacity", 0).show().end().animate({ opacity: e }, t, n, r); }, animate: function (t, e, n, r) { var i = bt.isEmptyObject(t), a = bt.speed(e, n, r), o = function () { var e = K(this, bt.extend({}, t), a); (i || Bt.get(this, "finish")) && e.stop(!0); }; return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o); }, stop: function (t, e, n) { var r = function (t) { var e = t.stop; delete t.stop, e(n); }; return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () { var e = !0, i = null != t && t + "queueHooks", a = bt.timers, o = Bt.get(this); if (i)
                    o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o)
                        o[i] && o[i].stop && _e.test(i) && r(o[i]); for (i = a.length; i--;)
                    a[i].elem !== this || null != t && a[i].queue !== t || (a[i].anim.stop(n), e = !1, a.splice(i, 1)); !e && n || bt.dequeue(this, t); }); }, finish: function (t) { return !1 !== t && (t = t || "fx"), this.each(function () { var e, n = Bt.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], a = bt.timers, o = r ? r.length : 0; for (n.finish = !0, bt.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = a.length; e--;)
                    a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1)); for (e = 0; e < o; e++)
                    r[e] && r[e].finish && r[e].finish.call(this); delete n.finish; }); } }), bt.each(["toggle", "show", "hide"], function (t, e) { var n = bt.fn[e]; bt.fn[e] = function (t, r, i) { return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(G(e, !0), t, r, i); }; }), bt.each({ slideDown: G("show"), slideUp: G("hide"), slideToggle: G("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) { bt.fn[t] = function (t, n, r) { return this.animate(e, t, n, r); }; }), bt.timers = [], bt.fx.tick = function () { var t, e = 0, n = bt.timers; for (me = bt.now(); e < n.length; e++)
                (t = n[e])() || n[e] !== t || n.splice(e--, 1); n.length || bt.fx.stop(), me = void 0; }, bt.fx.timer = function (t) { bt.timers.push(t), bt.fx.start(); }, bt.fx.interval = 13, bt.fx.start = function () { be || (be = !0, q()); }, bt.fx.stop = function () { be = null; }, bt.fx.speeds = { slow: 600, fast: 200, _default: 400 }, bt.fn.delay = function (t, e) { return t = bt.fx ? bt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, r) { var i = n.setTimeout(e, t); r.stop = function () { n.clearTimeout(i); }; }); }, function () { var t = ot.createElement("input"), e = ot.createElement("select"), n = e.appendChild(ot.createElement("option")); t.type = "checkbox", mt.checkOn = "" !== t.value, mt.optSelected = n.selected, t = ot.createElement("input"), t.value = "t", t.type = "radio", mt.radioValue = "t" === t.value; }();
            var we, xe = bt.expr.attrHandle;
            bt.fn.extend({ attr: function (t, e) { return Lt(this, bt.attr, t, e, arguments.length > 1); }, removeAttr: function (t) { return this.each(function () { bt.removeAttr(this, t); }); } }), bt.extend({ attr: function (t, e, n) { var r, i, a = t.nodeType; if (3 !== a && 8 !== a && 2 !== a)
                    return void 0 === t.getAttribute ? bt.prop(t, e, n) : (1 === a && bt.isXMLDoc(t) || (i = bt.attrHooks[e.toLowerCase()] || (bt.expr.match.bool.test(e) ? we : void 0)), void 0 !== n ? null === n ? void bt.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = bt.find.attr(t, e), null == r ? void 0 : r)); }, attrHooks: { type: { set: function (t, e) { if (!mt.radioValue && "radio" === e && u(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e;
                        } } } }, removeAttr: function (t, e) { var n, r = 0, i = e && e.match(Rt); if (i && 1 === t.nodeType)
                    for (; n = i[r++];)
                        t.removeAttribute(n); } }), we = { set: function (t, e, n) { return !1 === e ? bt.removeAttr(t, n) : t.setAttribute(n, n), n; } }, bt.each(bt.expr.match.bool.source.match(/\w+/g), function (t, e) { var n = xe[e] || bt.find.attr; xe[e] = function (t, e, r) { var i, a, o = e.toLowerCase(); return r || (a = xe[o], xe[o] = i, i = null != n(t, e, r) ? o : null, xe[o] = a), i; }; });
            var ke = /^(?:input|select|textarea|button)$/i, Oe = /^(?:a|area)$/i;
            bt.fn.extend({ prop: function (t, e) { return Lt(this, bt.prop, t, e, arguments.length > 1); }, removeProp: function (t) { return this.each(function () { delete this[bt.propFix[t] || t]; }); } }), bt.extend({ prop: function (t, e, n) { var r, i, a = t.nodeType; if (3 !== a && 8 !== a && 2 !== a)
                    return 1 === a && bt.isXMLDoc(t) || (e = bt.propFix[e] || e, i = bt.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]; }, propHooks: { tabIndex: { get: function (t) { var e = bt.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : ke.test(t.nodeName) || Oe.test(t.nodeName) && t.href ? 0 : -1; } } }, propFix: { for: "htmlFor", class: "className" } }), mt.optSelected || (bt.propHooks.selected = { get: function (t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null; }, set: function (t) { var e = t.parentNode; e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex); } }), bt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { bt.propFix[this.toLowerCase()] = this; }), bt.fn.extend({ addClass: function (t) { var e, n, r, i, a, o, s, u = 0; if (bt.isFunction(t))
                    return this.each(function (e) { bt(this).addClass(t.call(this, e, Z(this))); }); if ("string" == typeof t && t)
                    for (e = t.match(Rt) || []; n = this[u++];)
                        if (i = Z(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                            for (o = 0; a = e[o++];)
                                r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                            s = J(r), i !== s && n.setAttribute("class", s);
                        } return this; }, removeClass: function (t) { var e, n, r, i, a, o, s, u = 0; if (bt.isFunction(t))
                    return this.each(function (e) { bt(this).removeClass(t.call(this, e, Z(this))); }); if (!arguments.length)
                    return this.attr("class", ""); if ("string" == typeof t && t)
                    for (e = t.match(Rt) || []; n = this[u++];)
                        if (i = Z(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                            for (o = 0; a = e[o++];)
                                for (; r.indexOf(" " + a + " ") > -1;)
                                    r = r.replace(" " + a + " ", " ");
                            s = J(r), i !== s && n.setAttribute("class", s);
                        } return this; }, toggleClass: function (t, e) { var n = typeof t; return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : bt.isFunction(t) ? this.each(function (n) { bt(this).toggleClass(t.call(this, n, Z(this), e), e); }) : this.each(function () { var e, r, i, a; if ("string" === n)
                    for (r = 0, i = bt(this), a = t.match(Rt) || []; e = a[r++];)
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else
                    void 0 !== t && "boolean" !== n || (e = Z(this), e && Bt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Bt.get(this, "__className__") || "")); }); }, hasClass: function (t) { var e, n, r = 0; for (e = " " + t + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + J(Z(n)) + " ").indexOf(e) > -1)
                        return !0; return !1; } });
            var Ce = /\r/g;
            bt.fn.extend({ val: function (t) { var e, n, r, i = this[0]; {
                    if (arguments.length)
                        return r = bt.isFunction(t), this.each(function (n) { var i; 1 === this.nodeType && (i = r ? t.call(this, n, bt(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = bt.map(i, function (t) { return null == t ? "" : t + ""; })), (e = bt.valHooks[this.type] || bt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i)); });
                    if (i)
                        return (e = bt.valHooks[i.type] || bt.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Ce, "") : null == n ? "" : n);
                } } }), bt.extend({ valHooks: { option: { get: function (t) { var e = bt.find.attr(t, "value"); return null != e ? e : J(bt.text(t)); } }, select: { get: function (t) { var e, n, r, i = t.options, a = t.selectedIndex, o = "select-one" === t.type, s = o ? null : [], l = o ? a + 1 : i.length; for (r = a < 0 ? l : o ? a : 0; r < l; r++)
                            if (n = i[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))) {
                                if (e = bt(n).val(), o)
                                    return e;
                                s.push(e);
                            } return s; }, set: function (t, e) { for (var n, r, i = t.options, a = bt.makeArray(e), o = i.length; o--;)
                            r = i[o], (r.selected = bt.inArray(bt.valHooks.option.get(r), a) > -1) && (n = !0); return n || (t.selectedIndex = -1), a; } } } }), bt.each(["radio", "checkbox"], function () { bt.valHooks[this] = { set: function (t, e) { if (Array.isArray(e))
                    return t.checked = bt.inArray(bt(t).val(), e) > -1; } }, mt.checkOn || (bt.valHooks[this].get = function (t) { return null === t.getAttribute("value") ? "on" : t.value; }); });
            var Me = /^(?:focusinfocus|focusoutblur)$/;
            bt.extend(bt.event, { trigger: function (t, e, r, i) { var a, o, s, u, l, c, f, d = [r || ot], h = pt.call(t, "type") ? t.type : t, p = pt.call(t, "namespace") ? t.namespace.split(".") : []; if (o = s = r = r || ot, 3 !== r.nodeType && 8 !== r.nodeType && !Me.test(h + bt.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[bt.expando] ? t : new bt.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : bt.makeArray(e, [t]), f = bt.event.special[h] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, e))) {
                    if (!i && !f.noBubble && !bt.isWindow(r)) {
                        for (u = f.delegateType || h, Me.test(u + h) || (o = o.parentNode); o; o = o.parentNode)
                            d.push(o), s = o;
                        s === (r.ownerDocument || ot) && d.push(s.defaultView || s.parentWindow || n);
                    }
                    for (a = 0; (o = d[a++]) && !t.isPropagationStopped();)
                        t.type = a > 1 ? u : f.bindType || h, c = (Bt.get(o, "events") || {})[t.type] && Bt.get(o, "handle"), c && c.apply(o, e), (c = l && o[l]) && c.apply && Vt(o) && (t.result = c.apply(o, e), !1 === t.result && t.preventDefault());
                    return t.type = h, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), e) || !Vt(r) || l && bt.isFunction(r[h]) && !bt.isWindow(r) && (s = r[l], s && (r[l] = null), bt.event.triggered = h, r[h](), bt.event.triggered = void 0, s && (r[l] = s)), t.result;
                } }, simulate: function (t, e, n) { var r = bt.extend(new bt.Event, n, { type: t, isSimulated: !0 }); bt.event.trigger(r, null, e); } }), bt.fn.extend({ trigger: function (t, e) { return this.each(function () { bt.event.trigger(t, e, this); }); }, triggerHandler: function (t, e) { var n = this[0]; if (n)
                    return bt.event.trigger(t, e, n, !0); } }), bt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) { bt.fn[e] = function (t, n) { return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e); }; }), bt.fn.extend({ hover: function (t, e) { return this.mouseenter(t).mouseleave(e || t); } }), mt.focusin = "onfocusin" in n, mt.focusin || bt.each({ focus: "focusin", blur: "focusout" }, function (t, e) { var n = function (t) { bt.event.simulate(e, t.target, bt.event.fix(t)); }; bt.event.special[e] = { setup: function () { var r = this.ownerDocument || this, i = Bt.access(r, e); i || r.addEventListener(t, n, !0), Bt.access(r, e, (i || 0) + 1); }, teardown: function () { var r = this.ownerDocument || this, i = Bt.access(r, e) - 1; i ? Bt.access(r, e, i) : (r.removeEventListener(t, n, !0), Bt.remove(r, e)); } }; });
            var je = n.location, Ee = bt.now(), Se = /\?/;
            bt.parseXML = function (t) { var e; if (!t || "string" != typeof t)
                return null; try {
                e = (new n.DOMParser).parseFromString(t, "text/xml");
            }
            catch (t) {
                e = void 0;
            } return e && !e.getElementsByTagName("parsererror").length || bt.error("Invalid XML: " + t), e; };
            var Te = /\[\]$/, Ae = /\r?\n/g, Ne = /^(?:submit|button|image|reset|file)$/i, Re = /^(?:input|select|textarea|keygen)/i;
            bt.param = function (t, e) { var n, r = [], i = function (t, e) { var n = bt.isFunction(e) ? e() : e; r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n); }; if (Array.isArray(t) || t.jquery && !bt.isPlainObject(t))
                bt.each(t, function () { i(this.name, this.value); });
            else
                for (n in t)
                    Q(n, t[n], e, i); return r.join("&"); }, bt.fn.extend({ serialize: function () { return bt.param(this.serializeArray()); }, serializeArray: function () { return this.map(function () { var t = bt.prop(this, "elements"); return t ? bt.makeArray(t) : this; }).filter(function () { var t = this.type; return this.name && !bt(this).is(":disabled") && Re.test(this.nodeName) && !Ne.test(t) && (this.checked || !Yt.test(t)); }).map(function (t, e) { var n = bt(this).val(); return null == n ? null : Array.isArray(n) ? bt.map(n, function (t) { return { name: e.name, value: t.replace(Ae, "\r\n") }; }) : { name: e.name, value: n.replace(Ae, "\r\n") }; }).get(); } });
            var Pe = /%20/g, De = /#.*$/, Le = /([?&])_=[^&]*/, Ve = /^(.*?):[ \t]*([^\r\n]*)$/gm, Be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ze = /^(?:GET|HEAD)$/, Ie = /^\/\//, Ue = {}, Fe = {}, He = "*/".concat("*"), qe = ot.createElement("a");
            qe.href = je.href, bt.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: je.href, type: "GET", isLocal: Be.test(je.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": He, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": bt.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (t, e) { return e ? nt(nt(t, bt.ajaxSettings), e) : nt(bt.ajaxSettings, t); }, ajaxPrefilter: tt(Ue), ajaxTransport: tt(Fe), ajax: function (t, e) { function r(t, e, r, s) { var l, d, h, _, w, x = e; c || (c = !0, u && n.clearTimeout(u), i = void 0, o = s || "", k.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (_ = rt(p, k, r)), _ = it(p, _, k, l), l ? (p.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (bt.lastModified[a] = w), (w = k.getResponseHeader("etag")) && (bt.etag[a] = w)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, d = _.data, h = _.error, l = !h)) : (h = x, !t && x || (x = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (e || x) + "", l ? m.resolveWith(v, [d, x, k]) : m.rejectWith(v, [k, x, h]), k.statusCode(y), y = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [k, p, l ? d : h]), b.fireWith(v, [k, x]), f && (g.trigger("ajaxComplete", [k, p]), --bt.active || bt.event.trigger("ajaxStop"))); } "object" == typeof t && (e = t, t = void 0), e = e || {}; var i, a, o, s, u, l, c, f, d, h, p = bt.ajaxSetup({}, e), v = p.context || p, g = p.context && (v.nodeType || v.jquery) ? bt(v) : bt.event, m = bt.Deferred(), b = bt.Callbacks("once memory"), y = p.statusCode || {}, _ = {}, w = {}, x = "canceled", k = { readyState: 0, getResponseHeader: function (t) { var e; if (c) {
                        if (!s)
                            for (s = {}; e = Ve.exec(o);)
                                s[e[1].toLowerCase()] = e[2];
                        e = s[t.toLowerCase()];
                    } return null == e ? null : e; }, getAllResponseHeaders: function () { return c ? o : null; }, setRequestHeader: function (t, e) { return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, _[t] = e), this; }, overrideMimeType: function (t) { return null == c && (p.mimeType = t), this; }, statusCode: function (t) { var e; if (t)
                        if (c)
                            k.always(t[k.status]);
                        else
                            for (e in t)
                                y[e] = [y[e], t[e]]; return this; }, abort: function (t) { var e = t || x; return i && i.abort(e), r(0, e), this; } }; if (m.promise(k), p.url = ((t || p.url || je.href) + "").replace(Ie, je.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Rt) || [""], null == p.crossDomain) {
                    l = ot.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = qe.protocol + "//" + qe.host != l.protocol + "//" + l.host;
                    }
                    catch (t) {
                        p.crossDomain = !0;
                    }
                } if (p.data && p.processData && "string" != typeof p.data && (p.data = bt.param(p.data, p.traditional)), et(Ue, p, e, k), c)
                    return k; f = bt.event && p.global, f && 0 == bt.active++ && bt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ze.test(p.type), a = p.url.replace(De, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Pe, "+")) : (h = p.url.slice(a.length), p.data && (a += (Se.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (a = a.replace(Le, "$1"), h = (Se.test(a) ? "&" : "?") + "_=" + Ee++ + h), p.url = a + h), p.ifModified && (bt.lastModified[a] && k.setRequestHeader("If-Modified-Since", bt.lastModified[a]), bt.etag[a] && k.setRequestHeader("If-None-Match", bt.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + He + "; q=0.01" : "") : p.accepts["*"]); for (d in p.headers)
                    k.setRequestHeader(d, p.headers[d]); if (p.beforeSend && (!1 === p.beforeSend.call(v, k, p) || c))
                    return k.abort(); if (x = "abort", b.add(p.complete), k.done(p.success), k.fail(p.error), i = et(Fe, p, e, k)) {
                    if (k.readyState = 1, f && g.trigger("ajaxSend", [k, p]), c)
                        return k;
                    p.async && p.timeout > 0 && (u = n.setTimeout(function () { k.abort("timeout"); }, p.timeout));
                    try {
                        c = !1, i.send(_, r);
                    }
                    catch (t) {
                        if (c)
                            throw t;
                        r(-1, t);
                    }
                }
                else
                    r(-1, "No Transport"); return k; }, getJSON: function (t, e, n) { return bt.get(t, e, n, "json"); }, getScript: function (t, e) { return bt.get(t, void 0, e, "script"); } }), bt.each(["get", "post"], function (t, e) { bt[e] = function (t, n, r, i) { return bt.isFunction(n) && (i = i || r, r = n, n = void 0), bt.ajax(bt.extend({ url: t, type: e, dataType: i, data: n, success: r }, bt.isPlainObject(t) && t)); }; }), bt._evalUrl = function (t) { return bt.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }); }, bt.fn.extend({ wrapAll: function (t) { var e; return this[0] && (bt.isFunction(t) && (t = t.call(this[0])), e = bt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () { for (var t = this; t.firstElementChild;)
                    t = t.firstElementChild; return t; }).append(this)), this; }, wrapInner: function (t) { return bt.isFunction(t) ? this.each(function (e) { bt(this).wrapInner(t.call(this, e)); }) : this.each(function () { var e = bt(this), n = e.contents(); n.length ? n.wrapAll(t) : e.append(t); }); }, wrap: function (t) { var e = bt.isFunction(t); return this.each(function (n) { bt(this).wrapAll(e ? t.call(this, n) : t); }); }, unwrap: function (t) { return this.parent(t).not("body").each(function () { bt(this).replaceWith(this.childNodes); }), this; } }), bt.expr.pseudos.hidden = function (t) { return !bt.expr.pseudos.visible(t); }, bt.expr.pseudos.visible = function (t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length); }, bt.ajaxSettings.xhr = function () { try {
                return new n.XMLHttpRequest;
            }
            catch (t) { } };
            var $e = { 0: 200, 1223: 204 }, Ge = bt.ajaxSettings.xhr();
            mt.cors = !!Ge && "withCredentials" in Ge, mt.ajax = Ge = !!Ge, bt.ajaxTransport(function (t) { var e, r; if (mt.cors || Ge && !t.crossDomain)
                return { send: function (i, a) { var o, s = t.xhr(); if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields)
                            s[o] = t.xhrFields[o]; t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); for (o in i)
                        s.setRequestHeader(o, i[o]); e = function (t) { return function () { e && (e = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a($e[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())); }; }, s.onload = e(), r = s.onerror = e("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () { 4 === s.readyState && n.setTimeout(function () { e && r(); }); }, e = e("abort"); try {
                        s.send(t.hasContent && t.data || null);
                    }
                    catch (t) {
                        if (e)
                            throw t;
                    } }, abort: function () { e && e(); } }; }), bt.ajaxPrefilter(function (t) { t.crossDomain && (t.contents.script = !1); }), bt.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (t) { return bt.globalEval(t), t; } } }), bt.ajaxPrefilter("script", function (t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET"); }), bt.ajaxTransport("script", function (t) { if (t.crossDomain) {
                var e, n;
                return { send: function (r, i) { e = bt("<script>").prop({ charset: t.scriptCharset, src: t.url }).on("load error", n = function (t) { e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type); }), ot.head.appendChild(e[0]); }, abort: function () { n && n(); } };
            } });
            var We = [], Ye = /(=)\?(?=&|$)|\?\?/;
            bt.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var t = We.pop() || bt.expando + "_" + Ee++; return this[t] = !0, t; } }), bt.ajaxPrefilter("json jsonp", function (t, e, r) { var i, a, o, s = !1 !== t.jsonp && (Ye.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0])
                return i = t.jsonpCallback = bt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ye, "$1" + i) : !1 !== t.jsonp && (t.url += (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () { return o || bt.error(i + " was not called"), o[0]; }, t.dataTypes[0] = "json", a = n[i], n[i] = function () { o = arguments; }, r.always(function () { void 0 === a ? bt(n).removeProp(i) : n[i] = a, t[i] && (t.jsonpCallback = e.jsonpCallback, We.push(i)), o && bt.isFunction(a) && a(o[0]), o = a = void 0; }), "script"; }), mt.createHTMLDocument = function () { var t = ot.implementation.createHTMLDocument("").body; return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length; }(), bt.parseHTML = function (t, e, n) { if ("string" != typeof t)
                return []; "boolean" == typeof e && (n = e, e = !1); var r, i, a; return e || (mt.createHTMLDocument ? (e = ot.implementation.createHTMLDocument(""), r = e.createElement("base"), r.href = ot.location.href, e.head.appendChild(r)) : e = ot), i = jt.exec(t), a = !n && [], i ? [e.createElement(i[1])] : (i = O([t], e, a), a && a.length && bt(a).remove(), bt.merge([], i.childNodes)); }, bt.fn.load = function (t, e, n) { var r, i, a, o = this, s = t.indexOf(" "); return s > -1 && (r = J(t.slice(s)), t = t.slice(0, s)), bt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), o.length > 0 && bt.ajax({ url: t, type: i || "GET", dataType: "html", data: e }).done(function (t) { a = arguments, o.html(r ? bt("<div>").append(bt.parseHTML(t)).find(r) : t); }).always(n && function (t, e) { o.each(function () { n.apply(this, a || [t.responseText, e, t]); }); }), this; }, bt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) { bt.fn[e] = function (t) { return this.on(e, t); }; }), bt.expr.pseudos.animated = function (t) { return bt.grep(bt.timers, function (e) { return t === e.elem; }).length; }, bt.offset = { setOffset: function (t, e, n) { var r, i, a, o, s, u, l, c = bt.css(t, "position"), f = bt(t), d = {}; "static" === c && (t.style.position = "relative"), s = f.offset(), a = bt.css(t, "top"), u = bt.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (a + u).indexOf("auto") > -1, l ? (r = f.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(u) || 0), bt.isFunction(e) && (e = e.call(t, n, bt.extend({}, s))), null != e.top && (d.top = e.top - s.top + o), null != e.left && (d.left = e.left - s.left + i), "using" in e ? e.using.call(t, d) : f.css(d); } }, bt.fn.extend({ offset: function (t) { if (arguments.length)
                    return void 0 === t ? this : this.each(function (e) { bt.offset.setOffset(this, t, e); }); var e, n, r, i, a = this[0]; if (a)
                    return a.getClientRects().length ? (r = a.getBoundingClientRect(), e = a.ownerDocument, n = e.documentElement, i = e.defaultView, { top: r.top + i.pageYOffset - n.clientTop, left: r.left + i.pageXOffset - n.clientLeft }) : { top: 0, left: 0 }; }, position: function () { if (this[0]) {
                    var t, e, n = this[0], r = { top: 0, left: 0 };
                    return "fixed" === bt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), u(t[0], "html") || (r = t.offset()), r = { top: r.top + bt.css(t[0], "borderTopWidth", !0), left: r.left + bt.css(t[0], "borderLeftWidth", !0) }), { top: e.top - r.top - bt.css(n, "marginTop", !0), left: e.left - r.left - bt.css(n, "marginLeft", !0) };
                } }, offsetParent: function () { return this.map(function () { for (var t = this.offsetParent; t && "static" === bt.css(t, "position");)
                    t = t.offsetParent; return t || Qt; }); } }), bt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) { var n = "pageYOffset" === e; bt.fn[t] = function (r) { return Lt(this, function (t, r, i) { var a; if (bt.isWindow(t) ? a = t : 9 === t.nodeType && (a = t.defaultView), void 0 === i)
                return a ? a[e] : t[r]; a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : t[r] = i; }, t, r, arguments.length); }; }), bt.each(["top", "left"], function (t, e) { bt.cssHooks[e] = V(mt.pixelPosition, function (t, n) { if (n)
                return n = L(t, e), le.test(n) ? bt(t).position()[e] + "px" : n; }); }), bt.each({ Height: "height", Width: "width" }, function (t, e) { bt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, r) { bt.fn[r] = function (i, a) { var o = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === a ? "margin" : "border"); return Lt(this, function (e, n, i) { var a; return bt.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement, Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === i ? bt.css(e, n, s) : bt.style(e, n, i, s); }, e, o ? i : void 0, o); }; }); }), bt.fn.extend({ bind: function (t, e, n) { return this.on(t, null, e, n); }, unbind: function (t, e) { return this.off(t, null, e); }, delegate: function (t, e, n, r) { return this.on(e, t, n, r); }, undelegate: function (t, e, n) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n); } }), bt.holdReady = function (t) { t ? bt.readyWait++ : bt.ready(!0); }, bt.isArray = Array.isArray, bt.parseJSON = JSON.parse, bt.nodeName = u, r = [], void 0 !== (i = function () { return bt; }.apply(e, r)) && (t.exports = i);
            var Xe = n.jQuery, Ke = n.$;
            return bt.noConflict = function (t) { return n.$ === bt && (n.$ = Ke), t && n.jQuery === bt && (n.jQuery = Xe), bt; }, a || (n.jQuery = n.$ = bt), bt;
        });
    }, function (t, e, n) { var r = n(31); t.exports = function (t) { if (!r(t))
        throw TypeError(t + " is not an object!"); return t; }; }, function (t, e, n) { t.exports = { default: n(263), __esModule: !0 }; }, function (t, e, n) { var r = n(28), i = n(150), a = n(100), o = Object.defineProperty; e.f = n(32) ? Object.defineProperty : function (t, e, n) { if (r(t), e = a(e, !0), r(n), i)
        try {
            return o(t, e, n);
        }
        catch (t) { } if ("get" in n || "set" in n)
        throw TypeError("Accessors not supported!"); return "value" in n && (t[e] = n.value), t; }; }, function (t, e) { t.exports = function (t) { return "object" == typeof t ? null !== t : "function" == typeof t; }; }, function (t, e, n) { t.exports = !n(51)(function () { return 7 != Object.defineProperty({}, "a", { get: function () { return 7; } }).a; }); }, function (t, e, n) {
        "use strict";
        function r(t) { return f[t]; }
        function i(t) { for (var e = 1; e < arguments.length; e++)
            for (var n in arguments[e])
                Object.prototype.hasOwnProperty.call(arguments[e], n) && (t[n] = arguments[e][n]); return t; }
        function a(t, e) { for (var n = 0, r = t.length; n < r; n++)
            if (t[n] === e)
                return n; return -1; }
        function o(t) { if ("string" != typeof t) {
            if (t && t.toHTML)
                return t.toHTML();
            if (null == t)
                return "";
            if (!t)
                return t + "";
            t = "" + t;
        } return h.test(t) ? t.replace(d, r) : t; }
        function s(t) { return !t && 0 !== t || !(!g(t) || 0 !== t.length); }
        function u(t) { var e = i({}, t); return e._parent = t, e; }
        function l(t, e) { return t.path = e, t; }
        function c(t, e) { return (t ? t + "." : "") + e; }
        e.__esModule = !0, e.extend = i, e.indexOf = a, e.escapeExpression = o, e.isEmpty = s, e.createFrame = u, e.blockParams = l, e.appendContextPath = c;
        var f = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;" }, d = /[&<>"'`=]/g, h = /[&<>"'`=]/, p = Object.prototype.toString;
        e.toString = p;
        var v = function (t) { return "function" == typeof t; };
        v(/x/) && (e.isFunction = v = function (t) { return "function" == typeof t && "[object Function]" === p.call(t); }), e.isFunction = v;
        var g = Array.isArray || function (t) { return !(!t || "object" != typeof t) && "[object Array]" === p.call(t); };
        e.isArray = g;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t, e) { return t ? (t instanceof Date || (t = new Date(t)), "boolean" != typeof e && (e = !1), [t.getHours(), (0, i.default)(t.getMinutes(), 2, "0"), (0, i.default)(t.getSeconds(), 2, "0") + (e ? "." + t.getMilliseconds() : "")].join(":")) : "unknown"; };
        var r = n(120), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
    }, function (t, e, n) {
        "use strict";
        var r = n(136);
        n.d(e, "a", function () { return r.e; }), n.d(e, "f", function () { return r.g; }), n.d(e, "d", function () { return r.f; });
        var i = n(525);
        n.d(e, "e", function () { return i.a; }), n.d(e, "c", function () { return i.b; });
        var a = n(526);
        n.d(e, "b", function () { return a.a; });
    }, function (t, e, n) {
        "use strict";
        n.d(e, "d", function () { return r; }), n.d(e, "c", function () { return i; }), n.d(e, "b", function () { return a; }), n.d(e, "a", function () { return o; }), n.d(e, "e", function () { return s; });
        var r = 1e3, i = 6e4, a = 36e5, o = 864e5, s = 6048e5;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(29), a = r(i), o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p), g = n(16), m = n(14), b = n(294), y = r(b), _ = function (t) { function e() { (0, l.default)(this, e); var t = (0, h.default)(this, (e.__proto__ || (0, s.default)(e)).call(this, { routes: { "testresult/:uid(/)(:tabName)": "testresultPage", "*default": "notFound" } })); return t.currentUrl = null, t.on("route", t.onRouteChange, t), t; } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "onRouteChange", value: function () { this.previousUrl = this.currentUrl, this.currentUrl = this.getCurrentUrl(); } }, { key: "getCurrentUrl", value: function () { return m.history.getFragment(); } }, { key: "reload", value: function () { m.history.loadUrl(this.getCurrentUrl()); } }, { key: "to", value: function (t, e, n) { e = (0, g.omit)(e, function (t) { return null === t; }); var r = y.default.format({ pathname: t, query: e }); return this.toUrl(r, n); } }, { key: "toUrl", value: function (t, e) { return this.navigate(t, (0, a.default)({ trigger: !0 }, e)); } }, { key: "setSearch", value: function (t) { var e = y.default.parse(this.getCurrentUrl()), n = e.pathname; return this.to(n, t); } }, { key: "getUrlParams", value: function () { var t = y.default.parse(this.getCurrentUrl(), !0); return t ? t.query : {}; } }]), e; }(m.Router);
        e.default = new _;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function i(t) { if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
            return n;
        } return Array.from(t); }
        var a = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        } return t; }, o = { type: "logger", log: function (t) { this.output("log", t); }, warn: function (t) { this.output("warn", t); }, error: function (t) { this.output("error", t); }, output: function (t, e) { var n; console && console[t] && (n = console)[t].apply(n, i(e)); } }, s = function () { function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; r(this, t), this.init(e, n); } return t.prototype.init = function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; this.prefix = e.prefix || "i18next:", this.logger = t || o, this.options = e, this.debug = e.debug; }, t.prototype.setDebug = function (t) { this.debug = t; }, t.prototype.log = function () { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]; return this.forward(e, "log", "", !0); }, t.prototype.warn = function () { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]; return this.forward(e, "warn", "", !0); }, t.prototype.error = function () { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]; return this.forward(e, "error", ""); }, t.prototype.deprecate = function () { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]; return this.forward(e, "warn", "WARNING DEPRECATED: ", !0); }, t.prototype.forward = function (t, e, n, r) { return r && !this.debug ? null : ("string" == typeof t[0] && (t[0] = "" + n + this.prefix + " " + t[0]), this.logger[e](t)); }, t.prototype.create = function (e) { return new t(this.logger, a({ prefix: this.prefix + ":" + e + ":" }, this.options)); }, t; }();
        e.a = new s;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t, e) { if (0 === t)
            return "0s"; if (!t)
            return "Unknown"; var n = new Date(t), r = o.map(function (t) { var e = t.method, r = t.suffix, i = t.pad; return { value: (0, a.isFunction)(e) ? e(n) : n[e](), suffix: r, pad: i }; }).reduce(function (t, e) { var n = t.hasValue, r = t.out; return n = n || e.value > 0, (e.value > 0 || n && "ms" !== e.suffix) && r.push(e), { hasValue: n, out: r }; }, { hasValue: !1, out: [] }).out.map(function (t, e) { return (0 === e ? t.value : (0, i.default)(t.value, t.pad || 2, "0")) + t.suffix; }); return "number" != typeof e && (e = 2), r.slice(0, e).join(" "); };
        var r = n(120), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r), a = n(16), o = [{ suffix: "d", method: function (t) { return Math.floor(t.valueOf() / 864e5); } }, { suffix: "h", method: "getUTCHours" }, { suffix: "m", method: "getUTCMinutes" }, { suffix: "s", method: "getUTCSeconds" }, { pad: 3, suffix: "ms", method: "getUTCMilliseconds" }];
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.values = ["failed", "broken", "passed", "skipped", "unknown"];
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(501);
        n.d(e, "scaleBand", function () { return r.a; }), n.d(e, "scalePoint", function () { return r.b; });
        var i = n(524);
        n.d(e, "scaleIdentity", function () { return i.a; });
        var a = n(67);
        n.d(e, "scaleLinear", function () { return a.a; });
        var o = n(547);
        n.d(e, "scaleLog", function () { return o.a; });
        var s = n(213);
        n.d(e, "scaleOrdinal", function () { return s.a; }), n.d(e, "scaleImplicit", function () { return s.b; });
        var u = n(548);
        n.d(e, "scalePow", function () { return u.a; }), n.d(e, "scaleSqrt", function () { return u.b; });
        var l = n(549);
        n.d(e, "scaleQuantile", function () { return l.a; });
        var c = n(550);
        n.d(e, "scaleQuantize", function () { return c.a; });
        var f = n(551);
        n.d(e, "scaleThreshold", function () { return f.a; });
        var d = n(229);
        n.d(e, "scaleTime", function () { return d.b; });
        var h = n(567);
        n.d(e, "scaleUtc", function () { return h.a; });
        var p = n(568);
        n.d(e, "schemeCategory10", function () { return p.a; });
        var v = n(569);
        n.d(e, "schemeCategory20b", function () { return v.a; });
        var g = n(570);
        n.d(e, "schemeCategory20c", function () { return g.a; });
        var m = n(571);
        n.d(e, "schemeCategory20", function () { return m.a; });
        var b = n(572);
        n.d(e, "interpolateCubehelixDefault", function () { return b.a; });
        var y = n(573);
        n.d(e, "interpolateRainbow", function () { return y.b; }), n.d(e, "interpolateWarm", function () { return y.c; }), n.d(e, "interpolateCool", function () { return y.a; });
        var _ = n(574);
        n.d(e, "interpolateViridis", function () { return _.a; }), n.d(e, "interpolateMagma", function () { return _.c; }), n.d(e, "interpolateInferno", function () { return _.b; }), n.d(e, "interpolatePlasma", function () { return _.d; });
        var w = n(575);
        n.d(e, "scaleSequential", function () { return w.a; });
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n, r) { this._groups = t, this._parents = e, this._name = n, this._id = r; }
        function i(t) { return Object(o.selection)().transition(t); }
        function a() { return ++O; }
        e.a = r, e.b = i, e.c = a;
        var o = n(12), s = n(587), u = n(588), l = n(589), c = n(590), f = n(591), d = n(592), h = n(593), p = n(594), v = n(595), g = n(596), m = n(597), b = n(598), y = n(599), _ = n(600), w = n(601), x = n(602), k = n(91), O = 0, C = o.selection.prototype;
        r.prototype = i.prototype = { constructor: r, select: g.a, selectAll: m.a, filter: d.a, merge: h.a, selection: b.a, transition: x.a, call: C.call, nodes: C.nodes, node: C.node, size: C.size, empty: C.empty, each: C.each, on: p.a, attr: s.a, attrTween: u.a, style: y.a, styleTween: _.a, text: w.a, remove: v.a, tween: k.a, delay: l.a, duration: c.a, ease: f.a };
    }, function (t, e, n) { var r = n(30), i = n(55); t.exports = n(32) ? function (t, e, n) { return r.f(t, e, i(1, n)); } : function (t, e, n) { return t[e] = n, t; }; }, function (t, e) { var n = {}.hasOwnProperty; t.exports = function (t, e) { return n.call(t, e); }; }, function (t, e, n) { var r = n(152), i = n(101); t.exports = function (t) { return r(i(t)); }; }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.POSITION = void 0;
        var i, a, o, s, u = n(2), l = r(u), c = n(3), f = r(c), d = n(6), h = r(d), p = n(4), v = r(p), g = n(5), m = r(g);
        n(306);
        var b = n(14), y = n(8), _ = n(164), w = r(_), x = n(27), k = r(x), O = n(16), C = e.POSITION = { top: function (t, e, n) { var r = t.top, i = t.left, a = t.width, o = e.offset; return { top: r - n.height - o, left: i + a / 2 - n.width / 2 }; }, center: function (t, e, n) { var r = t.top, i = t.left; return { top: r + t.height / 2, left: i + t.width / 2 - n.width / 2 }; }, right: function (t, e, n) { var r = t.top, i = t.left, a = t.height, o = t.width, s = e.offset; return { top: r + a / 2 - n.height / 2, left: i + o + s }; }, left: function (t, e, n) { var r = t.top, i = t.left, a = t.height, o = e.offset; return { top: r + a / 2 - n.height / 2, left: i - o - n.width }; }, bottom: function (t, e, n) { var r = t.top, i = t.left, a = t.height, o = t.width; return { top: r + a + e.offset, left: i + o / 2 - n.width / 2 }; }, "bottom-left": function (t, e, n) { var r = t.top, i = t.left, a = t.height, o = t.width; return { top: r + a + e.offset, left: i + o - n.width }; } }, M = (i = (0, y.className)("tooltip"))((s = o = function (t) { function e() { return (0, f.default)(this, e), (0, v.default)(this, (e.__proto__ || (0, l.default)(e)).apply(this, arguments)); } return (0, m.default)(e, t), (0, h.default)(e, [{ key: "initialize", value: function (t) { this.options = t, (0, O.defaults)(this.options, { offset: 10 }); } }, { key: "render", value: function () { this.constructor.container.append(this.$el); } }, { key: "isVisible", value: function () { return this.$el.is(":visible"); } }, { key: "setContent", value: function (t) { this.$el.html(t); } }, { key: "show", value: function (t, e) { var n = this.options.position; this.setContent(t), this.$el.addClass((0, w.default)(this.className, { position: n })), this.render(), "rtl" === document.dir && "right" === n ? this.$el.css(C.left(e[0].getBoundingClientRect(), { offset: this.options.offset }, this.$el[0].getBoundingClientRect())) : "rtl" === document.dir && "left" === n ? this.$el.css(C.right(e[0].getBoundingClientRect(), { offset: this.options.offset }, this.$el[0].getBoundingClientRect())) : this.$el.css(C[n](e[0].getBoundingClientRect(), { offset: this.options.offset }, this.$el[0].getBoundingClientRect())); } }, { key: "hide", value: function () { this.$el.remove(); } }]), e; }(b.View), o.container = (0, k.default)(document.body), a = s)) || a;
        e.default = M;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v);
        n(350);
        var m = n(9), b = n(8), y = n(351), _ = r(y), w = n(352), x = r(w), k = n(85), O = r(k), C = n(1), M = r(C), j = (i = (0, b.className)("app"), a = (0, b.regions)({ content: ".app__content", nav: ".app__nav" }), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, c.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, p.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(o))), r.template = _.default, i = n, (0, p.default)(r, i); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "initialize", value: function () { } }, { key: "onRender", value: function () { var t = this; this.showChildView("nav", new x.default); var e = this.loadData(); e ? e.then(function () { t.showChildView("content", t.getContentView()), t.onViewReady(); }).catch(function () { t.showChildView("content", new O.default({ code: 404, message: (0, M.default)("errors.notFound") })); }) : this.showChildView("content", this.getContentView()); } }, { key: "onViewReady", value: function () { } }, { key: "loadData", value: function () { } }, { key: "getContentView", value: function () { throw new Error("attempt to call abstract method"); } }, { key: "shouldKeepState", value: function () { return !0; } }]), e; }(m.View)) || o) || o);
        e.default = j;
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return i; }), n.d(e, "b", function () { return a; });
        var r = Array.prototype, i = r.map, a = r.slice;
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return function () { return t; }; };
    }, function (t, e, n) { var r = n(75); t.exports = function (t, e, n) { if (r(t), void 0 === e)
        return t; switch (n) {
        case 1: return function (n) { return t.call(e, n); };
        case 2: return function (n, r) { return t.call(e, n, r); };
        case 3: return function (n, r, i) { return t.call(e, n, r, i); };
    } return function () { return t.apply(e, arguments); }; }; }, function (t, e) { t.exports = function (t) { try {
        return !!t();
    }
    catch (t) {
        return !0;
    } }; }, function (t, e) { t.exports = {}; }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) { return t ? (t instanceof Date || (t = new Date(t)), [(0, i.default)(t.getDate(), 2, "0"), (0, i.default)(t.getMonth() + 1, 2, "0"), t.getFullYear()].join("/")) : "unknown"; };
        var r = n(120), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN; };
    }, function (t, e) { t.exports = function (t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }; }; }, function (t, e, n) { var r = n(151), i = n(106); t.exports = Object.keys || function (t) { return r(t, i); }; }, function (t, e) { var n = {}.toString; t.exports = function (t) { return n.call(t).slice(8, -1); }; }, function (t, e, n) { var r = n(101); t.exports = function (t) { return Object(r(t)); }; }, function (t, e, n) {
        "use strict";
        var r = n(274)(!0);
        n(156)(String, "String", function (t) { this._t = String(t), this._i = 0; }, function () { var t, e = this._t, n = this._i; return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 }); });
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { var n = e && e.loc, a = void 0, o = void 0; n && (a = n.start.line, o = n.start.column, t += " - " + a + ":" + o); for (var s = Error.prototype.constructor.call(this, t), u = 0; u < i.length; u++)
            this[i[u]] = s[i[u]]; Error.captureStackTrace && Error.captureStackTrace(this, r); try {
            n && (this.lineNumber = a, Object.defineProperty ? Object.defineProperty(this, "column", { value: o, enumerable: !0 }) : this.column = o);
        }
        catch (t) { } }
        e.__esModule = !0;
        var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        r.prototype = new Error, e.default = r, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i() { return new s.default(function (t, e) { l.default.init({ lng: f.default.get("language"), interpolation: { escapeValue: !1 }, fallbackLng: "en" }, function (n) { return n ? e(n) : t(); }); }); }
        function a(t, e) { l.default.on("initialized", function () { l.default.services.resourceStore.addResourceBundle(t, l.default.options.ns[0], e, !0, !0); }); }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.LANGUAGES = void 0;
        var o = n(166), s = r(o);
        e.initTranslations = i, e.addTranslation = a;
        var u = n(335), l = r(u), c = n(83), f = r(c);
        (e.LANGUAGES = [{ id: "en", title: "English" }, { id: "ru", title: "Русский" }, { id: "zh", title: "中文" }, { id: "de", title: "Deutsch" }, { id: "he", title: "Hebrew" }]).map(function (t) { return t.id; }).forEach(function (t) { return a(t, n(348)("./" + t)); }), e.default = l.default;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        var i = function () { function t() { r(this, t), this.observers = {}; } return t.prototype.on = function (t, e) { var n = this; t.split(" ").forEach(function (t) { n.observers[t] = n.observers[t] || [], n.observers[t].push(e); }); }, t.prototype.off = function (t, e) { var n = this; this.observers[t] && this.observers[t].forEach(function () { if (e) {
            var r = n.observers[t].indexOf(e);
            r > -1 && n.observers[t].splice(r, 1);
        }
        else
            delete n.observers[t]; }); }, t.prototype.emit = function (t) { for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
            n[r - 1] = arguments[r]; if (this.observers[t]) {
            [].concat(this.observers[t]).forEach(function (t) { t.apply(void 0, n); });
        } if (this.observers["*"]) {
            [].concat(this.observers["*"]).forEach(function (e) { var r; e.apply(e, (r = [t]).concat.apply(r, n)); });
        } }, t; }();
        e.a = i;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(3), a = r(i), o = n(6), s = r(o), u = n(61), l = n(37), c = r(l), f = n(149), d = n(1), h = r(d), p = n(358), v = r(p), g = function () { function t() { (0, a.default)(this, t), this.tabs = [], this.testResultTabs = [], this.testResultBlocks = { tag: [], before: [], after: [] }, this.widgets = {}; } return (0, s.default)(t, [{ key: "addTab", value: function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.title, r = e.icon, i = e.route, a = e.onEnter, o = void 0 === a ? f.notFound : a; n = n || t, this.tabs.push({ tabName: t, title: n, icon: r }), c.default.route(i, t), c.default.on("route:" + t, (0, f.showView)(o)); } }, { key: "addWidget", value: function (t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : v.default; this.widgets[t] || (this.widgets[t] = {}), this.widgets[t][e] = { widget: n, model: r }; } }, { key: "addTranslation", value: function (t, e) { (0, u.addTranslation)(t, e); } }, { key: "translate", value: function (t, e) { (0, h.default)(t, e); } }, { key: "addTestResultBlock", value: function (t, e) { var n = e.position; this.testResultBlocks[n].push(t); } }, { key: "addTestResultTab", value: function (t, e, n) { this.testResultTabs.push({ id: t, name: e, View: n }); } }]), t; }();
        e.default = new g;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = o[t]; return n ? new r.SafeString('<span class="' + n.className + " " + e + '" data-tooltip="' + (0, a.default)(n.tooltip) + '"></span>') : ""; };
        var r = n(7), i = n(1), a = function (t) { return t && t.__esModule ? t : { default: t }; }(i), o = { flaky: { className: "fa fa-bomb", tooltip: "status.flaky" }, failed: { className: "fa fa-times-circle fa-fw text_status_failed", tooltip: "status.failed" }, broken: { className: "fa fa-exclamation-circle fa-fw text_status_broken", tooltip: "status.broken" }, passed: { className: "fa fa-check-circle fa-fw text_status_passed", tooltip: "status.passed" }, skipped: { className: "fa fa-minus-circle fa-fw text_status_skipped", tooltip: "status.skipped" }, unknown: { className: "fa fa-question-circle fa-fw text_status_unknown", tooltip: "status.unknown" } };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(125), a = r(i), o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p);
        n(463);
        var g = n(14), m = n(195), b = n(12), y = n(500), _ = r(y), w = function (t) { function e(t) { (0, l.default)(this, e); var n = (0, h.default)(this, (e.__proto__ || (0, s.default)(e)).call(this, t)); return n.PAD_LEFT = 50, n.PAD_RIGHT = 15, n.PAD_TOP = 10, n.PAD_BOTTOM = 30, n.options = t, n.firstRender = !0, n; } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "onRender", value: function () { (0, b.select)(window).on("resize." + this.cid, this.onAttach.bind(this)); } }, { key: "onDestroy", value: function () { (0, b.select)(window).on("resize." + this.cid, null); } }, { key: "onAttach", value: function () { this.firstRender = !1; } }, { key: "setupViewport", value: function () { this.width = Math.floor(this.$el.outerWidth()) - this.PAD_LEFT - this.PAD_RIGHT, this.height = Math.floor(this.$el.outerHeight()) - this.PAD_BOTTOM - this.PAD_TOP, this.$el.html((0, _.default)(this)), this.svg = (0, b.select)(this.$el[0]).select(".chart__svg"), this.plot = this.svg.select(".chart__plot"); } }, { key: "makeLeftAxis", value: function (t) { var e = (0, m.axisLeft)(); return this.makeAxis(e, this.svg.select(".chart__axis_y"), t, { left: this.PAD_LEFT, top: this.PAD_TOP }); } }, { key: "makeBottomAxis", value: function (t) { var e = (0, m.axisBottom)(); return this.makeAxis(e, this.svg.select(".chart__axis_x"), t, { left: this.PAD_LEFT, top: this.PAD_TOP + this.height }); } }, { key: "makeAxis", value: function (t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = r.left, o = void 0 === i ? 0 : i, s = r.top, u = void 0 === s ? 0 : s; return (0, a.default)(n).forEach(function (e) { return t[e](n[e]); }), e.call(t).attrs({ transform: "translate(" + o + "," + u + ")" }), t; } }, { key: "getTooltipContent", value: function () { } }, { key: "onItemOver", value: function (t) { this.showTooltip(t, b.event.target); } }, { key: "showTooltip", value: function (t, e) { this.tooltip.show(this.getTooltipContent(t), this.$(e)); } }, { key: "hideTooltip", value: function () { this.tooltip.hide(); } }, { key: "bindTooltip", value: function (t) { t.on("mouseenter", this.onItemOver.bind(this)).on("mouseleave", this.hideTooltip.bind(this)); } }]), e; }(g.View);
        e.default = w;
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return null === t ? NaN : +t; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { var e = t.domain; return t.ticks = function (t) { var n = e(); return Object(a.ticks)(n[0], n[n.length - 1], null == t ? 10 : t); }, t.tickFormat = function (t, n) { return Object(u.a)(e(), t, n); }, t.nice = function (n) { null == n && (n = 10); var r, i = e(), o = 0, s = i.length - 1, u = i[o], l = i[s]; return l < u && (r = u, u = l, l = r, r = o, o = s, s = r), r = Object(a.tickIncrement)(u, l, n), r > 0 ? (u = Math.floor(u / r) * r, l = Math.ceil(l / r) * r, r = Object(a.tickIncrement)(u, l, n)) : r < 0 && (u = Math.ceil(u * r) / r, l = Math.floor(l * r) / r, r = Object(a.tickIncrement)(u, l, n)), r > 0 ? (i[o] = Math.floor(u / r) * r, i[s] = Math.ceil(l / r) * r, e(i)) : r < 0 && (i[o] = Math.ceil(u * r) / r, i[s] = Math.floor(l * r) / r, e(i)), t; }, t; }
        function i() { var t = Object(s.b)(s.c, o.interpolateNumber); return t.copy = function () { return Object(s.a)(t, i()); }, r(t); }
        e.b = r, e.a = i;
        var a = n(22), o = n(23), s = n(89), u = n(537);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return function (n) { return t + n * e; }; }
        function i(t, e, n) { return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) { return Math.pow(t + r * e, n); }; }
        function a(t, e) { var n = e - t; return n ? r(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Object(u.a)(isNaN(t) ? e : t); }
        function o(t) { return 1 == (t = +t) ? s : function (e, n) { return n - e ? i(e, n, t) : Object(u.a)(isNaN(e) ? n : e); }; }
        function s(t, e) { var n = e - t; return n ? r(t, n) : Object(u.a)(isNaN(t) ? e : t); }
        e.c = a, e.b = o, e.a = s;
        var u = n(217);
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return t.match(/.{6}/g).map(function (t) { return "#" + t; }); };
    }, function (t, e, n) {
        "use strict";
        var r = n(629);
        n.d(e, "a", function () { return r.a; });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t > 1 ? 0 : t < -1 ? h : Math.acos(t); }
        function i(t) { return t >= 1 ? p : t <= -1 ? -p : Math.asin(t); }
        n.d(e, "a", function () { return a; }), n.d(e, "d", function () { return o; }), n.d(e, "e", function () { return s; }), n.d(e, "h", function () { return u; }), n.d(e, "i", function () { return l; }), n.d(e, "k", function () { return c; }), n.d(e, "l", function () { return f; }), n.d(e, "f", function () { return d; }), n.d(e, "j", function () { return h; }), n.d(e, "g", function () { return p; }), n.d(e, "m", function () { return v; }), e.b = r, e.c = i;
        var a = Math.abs, o = Math.atan2, s = Math.cos, u = Math.max, l = Math.min, c = Math.sin, f = Math.sqrt, d = 1e-12, h = Math.PI, p = h / 2, v = 2 * h;
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { if ((i = t.length) > 1)
            for (var n, r, i, a = 1, o = t[e[0]], s = o.length; a < i; ++a)
                for (r = o, o = t[e[a]], n = 0; n < s; ++n)
                    o[n][1] += o[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1]; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { for (var e = t.length, n = new Array(e); --e >= 0;)
            n[e] = e; return n; };
    }, function (t, e) { var n; n = function () { return this; }(); try {
        n = n || Function("return this")() || (0, eval)("this");
    }
    catch (t) {
        "object" == typeof window && (n = window);
    } t.exports = n; }, function (t, e) { t.exports = function (t) { if ("function" != typeof t)
        throw TypeError(t + " is not a function!"); return t; }; }, function (t, e) { var n = 0, r = Math.random(); t.exports = function (t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36)); }; }, function (t, e) { e.f = {}.propertyIsEnumerable; }, function (t, e, n) { var r = n(20), i = n(13), a = n(51); t.exports = function (t, e) { var n = (i.Object || {})[t] || Object[t], o = {}; o[t] = e(n), r(r.S + r.F * a(function () { n(1); }), "Object", o); }; }, function (t, e) { t.exports = !0; }, function (t, e, n) { var r = n(30).f, i = n(44), a = n(18)("toStringTag"); t.exports = function (t, e, n) { t && !i(t = n ? t : t.prototype, a) && r(t, a, { configurable: !0, value: e }); }; }, function (t, e, n) { n(276); for (var r = n(19), i = n(43), a = n(52), o = n(18)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
        var l = s[u], c = r[l], f = c && c.prototype;
        f && !f[o] && i(f, o, l), a[l] = a.Array;
    } }, function (t, e, n) {
        "use strict";
        function r(t) { return null == t ? "" : "" + t; }
        function i(t, e, n) { t.forEach(function (t) { e[t] && (n[t] = e[t]); }); }
        function a(t, e, n) { function r(t) { return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t; } function i() { return !t || "string" == typeof t; } for (var a = "string" != typeof e ? [].concat(e) : e.split("."); a.length > 1;) {
            if (i())
                return {};
            var o = r(a.shift());
            !t[o] && n && (t[o] = new n), t = t[o];
        } return i() ? {} : { obj: t, k: r(a.shift()) }; }
        function o(t, e, n) { var r = a(t, e, Object); r.obj[r.k] = n; }
        function s(t, e, n, r) { var i = a(t, e, Object), o = i.obj, s = i.k; o[s] = o[s] || [], r && (o[s] = o[s].concat(n)), r || o[s].push(n); }
        function u(t, e) { var n = a(t, e), r = n.obj, i = n.k; if (r)
            return r[i]; }
        function l(t, e, n) { for (var r in e)
            r in t ? "string" == typeof t[r] || t[r] instanceof String || "string" == typeof e[r] || e[r] instanceof String ? n && (t[r] = e[r]) : l(t[r], e[r], n) : t[r] = e[r]; return t; }
        function c(t) { return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); }
        function f(t) { return "string" == typeof t ? t.replace(/[&<>"'\/]/g, function (t) { return d[t]; }) : t; }
        e.e = r, e.a = i, e.h = o, e.f = s, e.d = u, e.b = l, e.g = c, e.c = f;
        var d = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(84), i = (0, r.getGlobalSettings)();
        e.default = i;
    }, function (t, e, n) {
        "use strict";
        function r() { var t = u.default.extend({ defaults: function () { return l; }, getLanguage: function () { return this.get("language"); }, setLanguage: function (t) { return this.save("language", t); }, isSidebarCollapsed: function () { return this.get("sidebarCollapsed"); }, setSidebarCollapsed: function (t) { return this.save("sidebarCollapsed", t); } }), e = new t; return e.fetch(), e; }
        function i(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = u.default.extend({ storageKey: function () { return "ALLURE_REPORT_SETTINGS_" + t.toUpperCase(); }, defaults: function () { return e; } }), r = new n; return r.fetch(), r; }
        function a(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f, n = u.default.extend({ storageKey: function () { return "ALLURE_REPORT_SETTINGS_" + t.toUpperCase(); }, defaults: function () { return e; }, getWidgetsArrangement: function () { return this.get("widgets"); }, setWidgetsArrangement: function (t) { this.save("widgets", t); } }), r = new n; return r.fetch(), r; }
        function o(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c, n = u.default.extend({ storageKey: function () { return "ALLURE_REPORT_SETTINGS_" + t.toUpperCase(); }, defaults: function () { return e; }, getVisibleStatuses: function () { return this.get("visibleStatuses"); }, setVisibleStatuses: function (t) { return this.save("visibleStatuses", t); }, getTreeSorting: function () { return this.get("treeSorting"); }, setTreeSorting: function (t) { this.save("treeSorting", t); }, isShowGroupInfo: function () { return this.get("showGroupInfo"); }, setShowGroupInfo: function (t) { this.save("showGroupInfo", t); } }), r = new n; return r.fetch(), r; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.getSettingsForWidgetGridPlugin = e.getSettingsForTreePlugin = e.getSettingsForPlugin = e.getGlobalSettings = void 0;
        var s = n(345), u = function (t) { return t && t.__esModule ? t : { default: t }; }(s), l = { language: "en", sidebarCollapsed: !1 }, c = { visibleStatuses: { failed: !0, broken: !0, skipped: !0, unknown: !0, passed: !0 }, showGroupInfo: !1, treeSorting: { ascending: !0, sorter: "sorter.name" } }, f = { widgets: [[], []] };
        e.getGlobalSettings = r, e.getSettingsForPlugin = i, e.getSettingsForTreePlugin = o, e.getSettingsForWidgetGridPlugin = a;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p);
        n(360);
        var g = n(9), m = n(8), b = n(361), y = r(b), _ = (i = (0, m.className)("error-splash"))(a = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = y.default, i = n, (0, h.default)(r, i); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "serializeData", value: function () { return { cls: this.className, code: this.options.code, message: this.options.message }; } }]), e; }(g.View)) || a;
        e.default = _;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        e.__esModule = !0;
        var i = n(456), a = r(i), o = n(459), s = r(o);
        e.default = function (t, e) { return (0, s.default)((0, a.default)(t, { raw: { value: (0, s.default)(e) } })); };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { var n = t.ownerSVGElement || t; if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
        } var i = t.getBoundingClientRect(); return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { return t = +t, e -= t, function (n) { return t + e * n; }; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return (e -= t = +t) ? function (n) { return (n - t) / e; } : Object(h.a)(e); }
        function i(t) { return function (e, n) { var r = t(e = +e, n = +n); return function (t) { return t <= e ? 0 : t >= n ? 1 : r(t); }; }; }
        function a(t) { return function (e, n) { var r = t(e = +e, n = +n); return function (t) { return t <= 0 ? e : t >= 1 ? n : r(t); }; }; }
        function o(t, e, n, r) { var i = t[0], a = t[1], o = e[0], s = e[1]; return a < i ? (i = n(a, i), o = r(s, o)) : (i = n(i, a), o = r(o, s)), function (t) { return o(i(t)); }; }
        function s(t, e, n, r) { var i = Math.min(t.length, e.length) - 1, a = new Array(i), o = new Array(i), s = -1; for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i;)
            a[s] = n(t[s], t[s + 1]), o[s] = r(e[s], e[s + 1]); return function (e) { var n = Object(c.bisect)(t, e, 1, i) - 1; return o[n](a[n](e)); }; }
        function u(t, e) { return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()); }
        function l(t, e) { function n() { return l = Math.min(g.length, m.length) > 2 ? s : o, c = h = null, u; } function u(e) { return (c || (c = l(g, m, y ? i(t) : t, b)))(+e); } var l, c, h, g = v, m = v, b = f.interpolate, y = !1; return u.invert = function (t) { return (h || (h = l(m, g, r, y ? a(e) : e)))(+t); }, u.domain = function (t) { return arguments.length ? (g = d.a.call(t, p.a), n()) : g.slice(); }, u.range = function (t) { return arguments.length ? (m = d.b.call(t), n()) : m.slice(); }, u.rangeRound = function (t) { return m = d.b.call(t), b = f.interpolateRound, n(); }, u.clamp = function (t) { return arguments.length ? (y = !!t, n()) : y; }, u.interpolate = function (t) { return arguments.length ? (b = t, n()) : b; }, n(); }
        e.c = r, e.a = u, e.b = l;
        var c = n(22), f = n(23), d = n(48), h = n(139), p = n(222), v = [0, 1];
    }, function (t, e, n) {
        "use strict";
        var r = n(140);
        e.a = function (t) { return t = Object(r.a)(Math.abs(t)), t ? t[1] : NaN; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { var n, r; return function () { var i = Object(o.h)(this, t), a = i.tween; if (a !== n) {
            r = n = a;
            for (var s = 0, u = r.length; s < u; ++s)
                if (r[s].name === e) {
                    r = r.slice(), r.splice(s, 1);
                    break;
                }
        } i.tween = r; }; }
        function i(t, e, n) { var r, i; if ("function" != typeof n)
            throw new Error; return function () { var a = Object(o.h)(this, t), s = a.tween; if (s !== r) {
            i = (r = s).slice();
            for (var u = { name: e, value: n }, l = 0, c = i.length; l < c; ++l)
                if (i[l].name === e) {
                    i[l] = u;
                    break;
                }
            l === c && i.push(u);
        } a.tween = i; }; }
        function a(t, e, n) { var r = t._id; return t.each(function () { var t = Object(o.h)(this, r); (t.value || (t.value = {}))[e] = n.apply(this, arguments); }), function (t) { return Object(o.f)(t, r).value[e]; }; }
        e.b = a;
        var o = n(26);
        e.a = function (t, e) { var n = this._id; if (t += "", arguments.length < 2) {
            for (var a, s = Object(o.f)(this.node(), n).tween, u = 0, l = s.length; u < l; ++u)
                if ((a = s[u]).name === t)
                    return a.value;
            return null;
        } return this.each((null == e ? r : i)(n, t, e)); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
            n[r - 1] = arguments[r]; return t.reduce(function (t, e, r) { return t + (0, i.escapeExpression)(n[r - 1]) + e; }); }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
        var i = n(7);
    }, function (t, e, n) {
        "use strict";
        function r(t) { this._context = t; }
        r.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._point = 0; }, lineEnd: function () { (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line; }, point: function (t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1: this._point = 2;
                default: this._context.lineTo(t, e);
            } } }, e.a = function (t) { return new r(t); };
    }, function (t, e, n) {
        "use strict";
        e.a = function () { };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n) { t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6); }
        function i(t) { this._context = t; }
        e.c = r, e.a = i, i.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0; }, lineEnd: function () { switch (this._point) {
                case 3: r(this, this._x1, this._y1);
                case 2: this._context.lineTo(this._x1, this._y1);
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line; }, point: function (t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2: this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default: r(this, t, e);
            } this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e; } }, e.b = function (t) { return new i(t); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n) { t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2); }
        function i(t, e) { this._context = t, this._k = (1 - e) / 6; }
        e.c = r, e.a = i, i.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0; }, lineEnd: function () { switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3: r(this, this._x1, this._y1);
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line; }, point: function (t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = e;
                    break;
                case 2: this._point = 3;
                default: r(this, t, e);
            } this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e; } }, e.b = function t(e) { function n(t) { return new i(t, e); } return n.tension = function (e) { return t(+e); }, n; }(0);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(29), a = r(i), o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(21), v = r(p), g = n(5), m = r(g);
        n(670);
        var b = n(41), y = n(22), _ = n(241), w = n(1), x = r(w), k = n(65), O = r(k), C = n(46), M = r(C), j = n(671), E = r(j), S = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.PAD_BOTTOM = 50, i = n, (0, h.default)(r, i); } return (0, m.default)(e, t), (0, f.default)(e, [{ key: "initialize", value: function (t) { this.x = (0, b.scalePoint)(), this.y = (0, b.scaleLinear)(), this.tooltip = new M.default({ position: "top" }), this.keys = t.keys || this.model.keys(), this.stack = (0, _.stack)().keys(this.keys).value(function (t, e) { return t.data[e] || 0; }), this.color = t.colors || (0, b.scaleOrdinal)(b.schemeCategory20), t.notStacked && this.stack.offset(function () { }), this.yTickFormat = t.yTickFormat || function (t) { return t; }; } }, { key: "onAttach", value: function () { var t = this.model.toJSON(); t && t.length > 1 ? this.doShow(t) : this.$el.html('<div class="widget__noitems">' + (0, x.default)("chart.trend.empty") + "</div>"), (0, v.default)(e.prototype.__proto__ || (0, s.default)(e.prototype), "onAttach", this).call(this); } }, { key: "doShow", value: function (t) { this.setupViewport(), this.x.range([0, this.width]), this.y.range([this.height, 0]), this.x.domain(t.map(function (t) { return t.id; })), this.y.domain([0, (0, y.max)(t, function (t) { return t.total; })]).nice(); var e = this.stack(t); this.makeBottomAxis({ scale: this.x, tickFormat: function (e, n) { return t[n].name; } }), this.makeLeftAxis({ scale: this.y, tickFormat: this.yTickFormat }), "rtl" === document.dir ? this.svg.selectAll(".chart__axis_x").selectAll("text").style("text-anchor", "start") : this.svg.selectAll(".chart__axis_x").selectAll("text").style("text-anchor", "end"), this.svg.selectAll(".chart__axis_x").selectAll("text").attr("dx", "-.8em").attr("dy", "-.6em").attr("transform", "rotate(-90)"), this.options.hideAreas || this.showAreas(e), this.options.hideLines || this.showLines(e), this.options.hidePoints || this.showPoints(e), this.showSlices(t); } }, { key: "showAreas", value: function (t) { var e = this, n = (0, _.area)().x(function (t) { return e.x(t.data.id); }).y0(function (t) { return e.y(t[0]); }).y1(function (t) { return e.y(t[1]); }); this.plot.selectAll(".trend__area").data(t).enter().append("path").attr("class", "trend__area").attr("d", n).style("fill", function (t) { return e.color(t.key); }).style("opacity", .85); } }, { key: "showLines", value: function (t) { var e = this, n = (0, _.line)().x(function (t) { return e.x(t.data.id); }).y(function (t) { return e.y(t[1]); }); this.plot.selectAll(".trend__line").data(t).enter().append("path").attr("class", ".trend__line").attr("d", n).style("stroke-width", 2).style("stroke", function (t) { return e.color(t.key); }); } }, { key: "showPoints", value: function (t) { var e = this; this.plot.selectAll(".trend_points").data(t).enter().append("g").attr("class", ".trend_point").style("fill", function (t) { return e.color(t.key); }).selectAll(".trend_point").data(function (t) { return t; }).enter().append("circle").attr("r", 2).attr("cx", function (t) { return e.x(t.data.id); }).attr("cy", function (t) { return e.y(t[1]); }).attr("class", "trend_point"); } }, { key: "showSlices", value: function (t) { var e = this; this.plot.selectAll(".slice").data(t).enter().append("g").attr("class", "slice"), this.plot.selectAll(".slice").filter(function (t) { return t.reportUrl; }).append("a").attr("class", "edge").filter(function (t) { return t.reportUrl; }).attr("xlink:href", function (t) { return t.reportUrl; }), this.plot.selectAll(".slice").filter(function (t) { return !t.reportUrl; }).append("g").attr("class", "edge"), this.plot.selectAll(".edge").append("line").attr("id", function (t) { return t.id; }).attr("x1", function (t) { return e.x(t.id); }).attr("y1", function (t) { return e.y(t.total); }).attr("x2", function (t) { return e.x(t.id); }).attr("y2", this.y(0)).attr("stroke", "white").attr("stroke-width", 1).attr("class", "report-line"), this.plot.selectAll(".edge").append("rect").style("opacity", 0).attr("class", "report-edge").attr("x", function (t, n) { return n > 0 ? e.x(t.id) - e.x.step() / 2 : 0; }).attr("y", 0).attr("height", this.height).attr("width", function (t, n) { return 0 === n || e.x(t.id) === e.width ? e.x.step() / 2 : e.x.step(); }).on("mouseover", function (t) { var n = e.plot.append("circle").attr("class", "anchor").attr("cx", "" + e.x(t.id)).attr("cy", "" + e.y(t.total / 2)); e.showTooltip(t, n.node()); }).on("mouseout", function () { e.plot.selectAll(".anchor").remove(), e.hideTooltip(); }); } }, { key: "getTooltipContent", value: function (t) { var e = this, n = (0, a.default)({}, t, { data: this.keys.map(function (n) { return { key: n, num: e.yTickFormat(t.data[n]), color: e.color(n) }; }).filter(function (t) { return !!t.num; }).reverse() }); return (0, E.default)(n); } }]), e; }(O.default);
        e.default = S;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(29), a = r(i), o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p), g = n(14), m = n(16), b = function (t) { function e() { return (0, l.default)(this, e), (0, h.default)(this, (e.__proto__ || (0, s.default)(e)).apply(this, arguments)); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "initialize", value: function (t, e) { this.options = e; } }, { key: "url", value: function () { return "widgets/" + this.options.name + ".json"; } }, { key: "parse", value: function (t) { return t.reverse().map(function (t, e) { return (0, a.default)({}, t, { id: e, name: t.buildOrder ? "#" + t.buildOrder : "", total: (0, m.values)((0, m.omit)(t.data, "total")).reduce(function (t, e) { return t + e; }, 0), data: (0, m.omit)(t.data, "total") }); }); } }, { key: "keys", value: function () { return (0, m.uniq)((0, m.flatten)(this.map(function (t) { return (0, m.keys)(t.get("data")); }))); } }, { key: "sortedKeysByLastValue", value: function () { var t = this.keys(), e = this.last().get("data"); return t.sort(function (t, n) { return (e[n] || 0) - (e[t] || 0); }); } }]), e; }(g.Collection);
        e.default = b;
    }, function (t, e, n) { var r = n(31), i = n(19).document, a = r(i) && r(i.createElement); t.exports = function (t) { return a ? i.createElement(t) : {}; }; }, function (t, e, n) { var r = n(31); t.exports = function (t, e) { if (!r(t))
        return t; var n, i; if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
        return i; if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t)))
        return i; if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
        return i; throw TypeError("Can't convert object to primitive value"); }; }, function (t, e) { t.exports = function (t) { if (void 0 == t)
        throw TypeError("Can't call method on  " + t); return t; }; }, function (t, e, n) { var r = n(103), i = Math.min; t.exports = function (t) { return t > 0 ? i(r(t), 9007199254740991) : 0; }; }, function (t, e) { var n = Math.ceil, r = Math.floor; t.exports = function (t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t); }; }, function (t, e, n) { var r = n(105)("keys"), i = n(76); t.exports = function (t) { return r[t] || (r[t] = i(t)); }; }, function (t, e, n) { var r = n(19), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {}); t.exports = function (t) { return i[t] || (i[t] = {}); }; }, function (t, e) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","); }, function (t, e) { e.f = Object.getOwnPropertySymbols; }, function (t, e, n) { var r = n(28), i = n(158), a = n(106), o = n(104)("IE_PROTO"), s = function () { }, u = function () { var t, e = n(99)("iframe"), r = a.length; for (e.style.display = "none", n(159).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;)
        delete u.prototype[a[r]]; return u(); }; t.exports = Object.create || function (t, e) { var n; return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[o] = t) : n = u(), void 0 === e ? n : i(n, e); }; }, function (t, e, n) { e.f = n(18); }, function (t, e, n) { var r = n(19), i = n(13), a = n(79), o = n(109), s = n(30).f; t.exports = function (t) { var e = i.Symbol || (i.Symbol = a ? {} : r.Symbol || {}); "_" == t.charAt(0) || t in e || s(e, t, { value: o.f(t) }); }; }, function (t, e, n) { var r = n(77), i = n(55), a = n(45), o = n(100), s = n(44), u = n(150), l = Object.getOwnPropertyDescriptor; e.f = n(32) ? l : function (t, e) { if (t = a(t), e = o(e, !0), u)
        try {
            return l(t, e);
        }
        catch (t) { } if (s(t, e))
        return i(!r.f.call(t, e), t[e]); }; }, function (t, e, n) { var r = n(57), i = n(18)("toStringTag"), a = "Arguments" == r(function () { return arguments; }()), o = function (t, e) { try {
        return t[e];
    }
    catch (t) { } }; t.exports = function (t) { var e, n, s; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = o(e = Object(t), i)) ? n : a ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s; }; }, function (t, e, n) { var r = n(112), i = n(18)("iterator"), a = n(52); t.exports = n(13).getIteratorMethod = function (t) { if (void 0 != t)
        return t[i] || t["@@iterator"] || a[r(t)]; }; }, function (t, e, n) {
        "use strict";
        function r(t) { var e, n; this.promise = new t(function (t, r) { if (void 0 !== e || void 0 !== n)
            throw TypeError("Bad Promise constructor"); e = t, n = r; }), this.resolve = i(e), this.reject = i(n); }
        var i = n(75);
        t.exports.f = function (t) { return new r(t); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(4), f = r(c), d = n(5), h = r(d);
        n(356);
        var p = n(46), v = r(p), g = n(8), m = (i = (0, g.className)("popover"))(a = function (t) { function e() { return (0, l.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, s.default)(e)).apply(this, arguments)); } return (0, h.default)(e, t), e; }(v.default)) || a;
        e.default = m;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression; return '            <div class="' + l(r(n(0)).call(u, "status-details", "trace-toggle", { name: "b", hash: { status: null != e ? e.status : e }, data: o })) + ' clickable" data-tooltip="' + l(r(n(1)).call(u, "testResult.status.trace", { name: "t", hash: {}, data: o })) + '">\n                <pre class="status-details__message"><code>' + l(t.lambda(null != e ? e.statusMessage : e, e)) + '</code></pre>\n            </div>\n\n            <pre class="' + l(r(n(0)).call(u, "status-details", "trace", { name: "b", hash: {}, data: o })) + '"><code>' + (null != (s = i.if.call(u, null != e ? e.statusTrace : e, { name: "if", hash: {}, fn: t.program(2, o, 0), inverse: t.program(4, o, 0), data: o })) ? s : "") + "</code></pre>\n"; }, 2: function (t, e, n, r, i) { return t.escapeExpression(t.lambda(null != e ? e.statusTrace : e, e)); }, 4: function (t, e, i, a, o) { return t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "testResult.status.empty", { name: "t", hash: {}, data: o })); }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '<div class="' + t.escapeExpression(r(n(0)).call(u, "status-details", { name: "b", hash: { status: null != e ? e.status : e }, data: o })) + '">\n    <div class="status-details__content">\n' + (null != (s = i.if.call(u, null != e ? e.statusMessage : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.noop, data: o })) ? s : "") + "    </div>\n</div>\n"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return new Function("d", "return {" + t.map(function (t, e) { return JSON.stringify(t) + ": d[" + e + "]"; }).join(",") + "}"); }
        function i(t, e) { var n = r(t); return function (r, i) { return e(n(r), i, t); }; }
        function a(t) { var e = Object.create(null), n = []; return t.forEach(function (t) { for (var r in t)
            r in e || n.push(e[r] = r); }), n; }
        var o = {}, s = {}, u = 34, l = 10, c = 13;
        e.a = function (t) { function e(t, e) { var a, o, s = n(t, function (t, n) { if (a)
            return a(t, n - 1); o = t, a = e ? i(t, e) : r(t); }); return s.columns = o || [], s; } function n(t, e) { function n() { if (h)
            return s; if (p)
            return p = !1, o; var e, n, r = f; if (t.charCodeAt(r) === u) {
            for (; f++ < a && t.charCodeAt(f) !== u || t.charCodeAt(++f) === u;)
                ;
            return (e = f) >= a ? h = !0 : (n = t.charCodeAt(f++)) === l ? p = !0 : n === c && (p = !0, t.charCodeAt(f) === l && ++f), t.slice(r + 1, e - 1).replace(/""/g, '"');
        } for (; f < a;) {
            if ((n = t.charCodeAt(e = f++)) === l)
                p = !0;
            else if (n === c)
                p = !0, t.charCodeAt(f) === l && ++f;
            else if (n !== g)
                continue;
            return t.slice(r, e);
        } return h = !0, t.slice(r, a); } var r, i = [], a = t.length, f = 0, d = 0, h = a <= 0, p = !1; for (t.charCodeAt(a - 1) === l && --a, t.charCodeAt(a - 1) === c && --a; (r = n()) !== s;) {
            for (var v = []; r !== o && r !== s;)
                v.push(r), r = n();
            e && null == (v = e(v, d++)) || i.push(v);
        } return i; } function f(e, n) { return null == n && (n = a(e)), [n.map(p).join(t)].concat(e.map(function (e) { return n.map(function (t) { return p(e[t]); }).join(t); })).join("\n"); } function d(t) { return t.map(h).join("\n"); } function h(e) { return e.map(p).join(t); } function p(t) { return null == t ? "" : v.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t; } var v = new RegExp('["' + t + "\n\r]"), g = t.charCodeAt(0); return { parse: e, parseRows: n, format: f, formatRows: d }; };
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o, s, u) { var l, c = null != e ? e : t.nullContext || {}, f = t.escapeExpression; return '    <div class="' + f(r(n(0)).call(c, "step", { name: "b", hash: { expanded: null != e ? e.expanded : e }, data: o })) + '">\n        <div class="' + f(r(n(0)).call(c, "step", "title", { name: "b", hash: { stage: !0, hasContent: !0 }, data: o })) + '">\n            <span class="step__arrow block__arrow">' + f(r(n(119)).call(c, { name: "angle", hash: {}, data: o })) + "</span>\n            " + f(t.lambda(null != e ? e.name : e, e)) + '\n        </div>\n        <div class="' + f(r(n(0)).call(c, "step", "content", { name: "b", hash: {}, data: o })) + '">\n' + (null != (l = i.each.call(c, null != e ? e.stages : e, { name: "each", hash: {}, fn: t.program(2, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + "        </div>\n    </div>\n"; }, 2: function (t, e, n, r, i, a, o) { var s; return null != (s = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.name : e, { name: "if", hash: {}, fn: t.program(3, i, 0, a, o), inverse: t.program(12, i, 0, a, o), data: i })) ? s : ""; }, 3: function (t, e, i, a, o, s, u) { var l, c = null != e ? e : t.nullContext || {}, f = t.escapeExpression; return '                    <div class="' + f(r(n(0)).call(c, "step", { name: "b", hash: {}, data: o })) + '">\n                        <div class="' + f(r(n(0)).call(c, "step", "title", { name: "b", hash: { stage: !0, hasContent: null != e ? e.hasContent : e }, data: o })) + '">\n' + (null != (l = i.if.call(c, null != e ? e.hasContent : e, { name: "if", hash: {}, fn: t.program(4, o, 0, s, u), inverse: t.program(6, o, 0, s, u), data: o })) ? l : "") + "                            " + f(t.lambda(null != e ? e.name : e, e)) + "\n" + (null != (l = t.invokePartial(n(184), e, { name: "../../blocks/step-stats/step-stats", hash: { baseUrl: null != u[2] ? u[2].baseUrl : u[2] }, data: o, indent: "                            ", helpers: i, partials: a, decorators: t.decorators })) ? l : "") + '                        </div>\n                        <div class="' + f(r(n(0)).call(c, "step", "content", { name: "b", hash: {}, data: o })) + '">\n' + (null != (l = t.invokePartial(n(185), e, { name: "../../blocks/parameters-table/parameters-table", hash: { parameters: null != e ? e.parameters : e }, data: o, indent: "                            ", helpers: i, partials: a, decorators: t.decorators })) ? l : "") + (null != (l = t.invokePartial(n(121), e, { name: "steps-list", hash: { baseUrl: null != u[1] ? u[1].baseUrl : u[1], steps: null != e ? e.steps : e }, data: o, helpers: i, partials: a, decorators: t.decorators })) ? l : "") + (null != (l = i.each.call(c, null != e ? e.attachments : e, { name: "each", hash: {}, fn: t.program(8, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + (null != (l = i.if.call(c, null != e ? e.shouldDisplayMessage : e, { name: "if", hash: {}, fn: t.program(10, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + "                        </div>\n                    </div>\n"; }, 4: function (t, e, i, a, o) { return '                                <span class="step__arrow block__arrow">' + t.escapeExpression(r(n(186)).call(null != e ? e : t.nullContext || {}, null != e ? e.status : e, { name: "arrow", hash: {}, data: o })) + "</span>\n"; }, 6: function (t, e, i, a, o) { return '                                <span class="step__status">' + t.escapeExpression(r(n(64)).call(null != e ? e : t.nullContext || {}, null != e ? e.status : e, { name: "allure-icon", hash: {}, data: o })) + "</span>\n"; }, 8: function (t, e, r, i, a, o, s) { var u; return null != (u = t.invokePartial(n(122), e, { name: "../../blocks/attachment-row/attachment-row", hash: { baseUrl: null != s[2] ? s[2].baseUrl : s[2] }, data: a, indent: "                                ", helpers: r, partials: i, decorators: t.decorators })) ? u : ""; }, 10: function (t, e, r, i, a) { var o; return null != (o = t.invokePartial(n(116), e, { name: "../../blocks/status-details/status-details", data: a, helpers: r, partials: i, decorators: t.decorators })) ? o : ""; }, 12: function (t, e, r, i, a, o, s) { var u, l = null != e ? e : t.nullContext || {}; return (null != (u = t.invokePartial(n(121), e, { name: "steps-list", hash: { baseUrl: null != s[1] ? s[1].baseUrl : s[1], steps: null != e ? e.steps : e }, data: a, helpers: r, partials: i, decorators: t.decorators })) ? u : "") + (null != (u = r.each.call(l, null != e ? e.attachments : e, { name: "each", hash: {}, fn: t.program(13, a, 0, o, s), inverse: t.noop, data: a })) ? u : "") + (null != (u = r.if.call(l, null != e ? e.shouldDisplayMessage : e, { name: "if", hash: {}, fn: t.program(10, a, 0, o, s), inverse: t.noop, data: a })) ? u : ""); }, 13: function (t, e, r, i, a, o, s) { var u; return null != (u = t.invokePartial(n(122), e, { name: "../../blocks/attachment-row/attachment-row", hash: { baseUrl: null != s[2] ? s[2].baseUrl : s[2] }, data: a, indent: "                        ", helpers: r, partials: i, decorators: t.decorators })) ? u : ""; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i, a, o) { var s; return null != (s = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.stages : e, { name: "if", hash: {}, fn: t.program(1, i, 0, a, o), inverse: t.noop, data: i })) ? s : ""; }, usePartial: !0, useData: !0, useDepths: !0 }); }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function () { return new r.SafeString('<span class="angle fa fa-angle-right fa-fw fa-lg"></span>'); };
        var r = n(7);
    }, function (t, e, n) { var r = n(385), i = n(386); t.exports = function (t, e, n, a) { t = r(t), e = ~~e; var o = 0; switch (n ? n.length > 1 && (n = n.charAt(0)) : n = " ", a) {
        case "right": return o = e - t.length, t + i(n, o);
        case "both": return o = e - t.length, i(n, Math.ceil(o / 2)) + t + i(n, Math.floor(o / 2));
        default: return o = e - t.length, i(n, o) + t;
    } }; }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o, s, u) { var l, c = null != e ? e : t.nullContext || {}, f = t.escapeExpression; return '    <div class="step">\n        <div class="' + f(r(n(0)).call(c, "step", "title", { name: "b", hash: { hasContent: null != e ? e.hasContent : e }, data: o })) + ' long-line">\n' + (null != (l = i.if.call(c, null != e ? e.hasContent : e, { name: "if", hash: {}, fn: t.program(2, o, 0, s, u), inverse: t.program(4, o, 0, s, u), data: o })) ? l : "") + '            <div class="step__name">\n            ' + f(t.lambda(null != e ? e.name : e, e)) + "\n            </div>\n" + (null != (l = t.invokePartial(n(184), e, { name: "../../blocks/step-stats/step-stats", hash: { baseUrl: null != u[2] ? u[2].baseUrl : u[2] }, data: o, indent: "            ", helpers: i, partials: a, decorators: t.decorators })) ? l : "") + '        </div>\n        <div class="step__content">\n' + (null != (l = t.invokePartial(n(185), e, { name: "../../blocks/parameters-table/parameters-table", hash: { parameters: null != e ? e.parameters : e }, data: o, indent: "            ", helpers: i, partials: a, decorators: t.decorators })) ? l : "") + (null != (l = t.invokePartial(n(121), e, { name: "steps-list", hash: { baseUrl: null != u[1] ? u[1].baseUrl : u[1], steps: null != e ? e.steps : e }, data: o, helpers: i, partials: a, decorators: t.decorators })) ? l : "") + (null != (l = i.each.call(c, null != e ? e.attachments : e, { name: "each", hash: {}, fn: t.program(6, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + (null != (l = i.if.call(c, null != e ? e.shouldDisplayMessage : e, { name: "if", hash: {}, fn: t.program(8, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + "        </div>\n    </div>\n"; }, 2: function (t, e, i, a, o) { return '                <span class="step__arrow block__arrow">' + t.escapeExpression(r(n(186)).call(null != e ? e : t.nullContext || {}, null != e ? e.status : e, { name: "arrow", hash: {}, data: o })) + "</span>\n"; }, 4: function (t, e, i, a, o) { return '                <span class="step__status">' + t.escapeExpression(r(n(64)).call(null != e ? e : t.nullContext || {}, null != e ? e.status : e, { name: "allure-icon", hash: {}, data: o })) + "</span>\n"; }, 6: function (t, e, r, i, a, o, s) { var u; return null != (u = t.invokePartial(n(122), e, { name: "../../blocks/attachment-row/attachment-row", hash: { baseUrl: null != s[2] ? s[2].baseUrl : s[2] }, data: a, indent: "                ", helpers: r, partials: i, decorators: t.decorators })) ? u : ""; }, 8: function (t, e, n, r, i, a, o) { var s; return null != (s = n.with.call(null != e ? e : t.nullContext || {}, null != e ? e.statusDetails : e, { name: "with", hash: {}, fn: t.program(9, i, 0, a, o), inverse: t.noop, data: i })) ? s : ""; }, 9: function (t, e, r, i, a, o, s) { var u; return null != (u = t.invokePartial(n(116), e, { name: "../../blocks/status-details/status-details", hash: { status: null != s[1] ? s[1].status : s[1] }, data: a, helpers: r, partials: i, decorators: t.decorators })) ? u : ""; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i, a, o) { var s; return null != (s = n.each.call(null != e ? e : t.nullContext || {}, null != e ? e.steps : e, { name: "each", hash: {}, fn: t.program(1, i, 0, a, o), inverse: t.noop, data: i })) ? s : ""; }, usePartial: !0, useData: !0, useDepths: !0 }); }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, n, r, i) { return "                " + t.escapeExpression(t.lambda(null != e ? e.name : e, e)) + "\n"; }, 3: function (t, e, n, r, i) { return "                " + t.escapeExpression(t.lambda(null != e ? e.source : e, e)) + "\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = t.lambda, l = t.escapeExpression, c = null != e ? e : t.nullContext || {}; return '<div>\n    <div class="attachment-row" data-uid="' + l(u(null != e ? e.uid : e, e)) + '">\n        <span class="attachment-row__arrow block__arrow">' + l(r(n(119)).call(c, { name: "angle", hash: {}, data: o })) + '</span>\n        <div class="attachment-row__icon">\n            <span class="' + l(r(n(387)).call(c, null != e ? e.type : e, { name: "fileicon", hash: {}, data: o })) + '" data-tooltip="' + l(u(null != e ? e.type : e, e)) + '"></span>\n        </div>\n        <div class="attachment-row__name long-line">\n' + (null != (s = i.if.call(c, null != e ? e.name : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.program(3, o, 0), data: o })) ? s : "") + '        </div>\n        <div class="attachment-row__control attachment-row__link">\n            <a class="link" href="data/attachments/' + l(u(null != e ? e.source : e, e)) + '" target="_blank"\n               data-tooltip="Open attachment in new tab">\n                <span class="fa fa-save"></span> ' + l(r(n(388)).call(c, null != e ? e.size : e, { name: "filesize", hash: {}, data: o })) + '\n            </a>\n        </div>\n        <div class="attachment-row__control attachment-row__fullscreen">\n            <a class="link">\n                <span class="fa fa-arrows-alt"></span>\n            </a>\n        </div>\n    </div>\n    <div class="attachment-row__preview">\n        <div class="attachment-row__content ' + l(r(n(0)).call(c, "attachment", null != e ? e.uid : e, { name: "b", hash: {}, data: o })) + '"></div>\n    </div>\n</div>'; }, useData: !0 }); }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s = t.lambda, u = t.escapeExpression; return '    <span class="node__time" data-tooltip="' + u(s(null != e ? e.tooltip : e, e)) + '">\n        ' + u(s(null != e ? e.name : e, e)) + ":\n        <b>" + u(r(n(39)).call(null != e ? e : t.nullContext || {}, null != e ? e.value : e, { name: "duration", hash: {}, data: o })) + "</b>\n    </span>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return null != (s = i.if.call(u, r(n(424)).call(u, null != e ? e.value : e, { name: "is-def", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.noop, data: o })) ? s : ""; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(29), a = r(i), o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(21), v = r(p), g = n(5), m = r(g), b = n(9), y = n(429), _ = r(y), w = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = _.default, i = n, (0, h.default)(r, i); } return (0, m.default)(e, t), (0, f.default)(e, [{ key: "serializeData", value: function () { var t = void 0 === this.showLinks || this.showLinks, n = void 0 === this.showAll || this.showAll; return (0, a.default)((0, v.default)(e.prototype.__proto__ || (0, s.default)(e.prototype), "serializeData", this).call(this), { rowTag: t ? "a" : "span", title: this.title, showAll: n, baseUrl: this.baseUrl }); } }]), e; }(b.View);
        e.default = w;
    }, function (t, e, n) { t.exports = { default: n(433), __esModule: !0 }; }, function (t, e, n) {
        "use strict";
        function r(t) { return function () { var e = this.ownerDocument, n = this.namespaceURI; return n === o.b && e.documentElement.namespaceURI === o.b ? e.createElement(t) : e.createElementNS(n, t); }; }
        function i(t) { return function () { return this.ownerDocument.createElementNS(t.space, t.local); }; }
        var a = n(127), o = n(128);
        e.a = function (t) { var e = Object(a.a)(t); return (e.local ? i : r)(e); };
    }, function (t, e, n) {
        "use strict";
        var r = n(128);
        e.a = function (t) { var e = t += "", n = e.indexOf(":"); return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), r.a.hasOwnProperty(e) ? { space: r.a[e], local: t } : t; };
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return r; });
        var r = "http://www.w3.org/1999/xhtml";
        e.a = { svg: "http://www.w3.org/2000/svg", xhtml: r, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
    }, function (t, e, n) {
        "use strict";
        var r = n(130);
        e.a = function () { for (var t, e = r.c; t = e.sourceEvent;)
            e = t; return e; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n) { return t = i(t, e, n), function (e) { var n = e.relatedTarget; n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e); }; }
        function i(t, e, n) { return function (r) { var i = c; c = r; try {
            t.call(this, this.__data__, e, n);
        }
        finally {
            c = i;
        } }; }
        function a(t) { return t.trim().split(/^|\s+/).map(function (t) { var e = "", n = t.indexOf("."); return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), { type: t, name: e }; }); }
        function o(t) { return function () { var e = this.__on; if (e) {
            for (var n, r = 0, i = -1, a = e.length; r < a; ++r)
                n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
            ++i ? e.length = i : delete this.__on;
        } }; }
        function s(t, e, n) { var a = l.hasOwnProperty(t.type) ? r : i; return function (r, i, o) { var s, u = this.__on, l = a(e, i, o); if (u)
            for (var c = 0, f = u.length; c < f; ++c)
                if ((s = u[c]).type === t.type && s.name === t.name)
                    return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = l, s.capture = n), void (s.value = e); this.addEventListener(t.type, l, n), s = { type: t.type, name: t.name, value: e, listener: l, capture: n }, u ? u.push(s) : this.__on = [s]; }; }
        function u(t, e, n, r) { var i = c; t.sourceEvent = c, c = t; try {
            return e.apply(n, r);
        }
        finally {
            c = i;
        } }
        n.d(e, "c", function () { return c; }), e.a = u;
        var l = {}, c = null;
        if ("undefined" != typeof document) {
            "onmouseenter" in document.documentElement || (l = { mouseenter: "mouseover", mouseleave: "mouseout" });
        }
        e.b = function (t, e, n) { var r, i, u = a(t + ""), l = u.length; {
            if (!(arguments.length < 2)) {
                for (c = e ? s : o, null == n && (n = !1), r = 0; r < l; ++r)
                    this.each(c(u[r], e, n));
                return this;
            }
            var c = this.node().__on;
            if (c)
                for (var f, d = 0, h = c.length; d < h; ++d)
                    for (r = 0, f = c[d]; r < l; ++r)
                        if ((i = u[r]).type === f.type && i.name === f.name)
                            return f.value;
        } };
    }, function (t, e, n) {
        "use strict";
        function r() { }
        e.a = function (t) { return null == t ? r : function () { return this.querySelector(t); }; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView; };
    }, function (t, e, n) {
        "use strict";
        var r = n(66);
        e.a = function (t, e, n) { if (null == n && (n = r.a), i = t.length) {
            if ((e = +e) <= 0 || i < 2)
                return +n(t[0], 0, t);
            if (e >= 1)
                return +n(t[i - 1], i - 1, t);
            var i, a = (i - 1) * e, o = Math.floor(a), s = +n(t[o], o, t);
            return s + (+n(t[o + 1], o + 1, t) - s) * (a - o);
        } };
    }, function (t, e, n) {
        "use strict";
        function r() { }
        function i(t, e) { var n = new r; if (t instanceof r)
            t.each(function (t, e) { n.set(e, t); });
        else if (Array.isArray(t)) {
            var i, a = -1, o = t.length;
            if (null == e)
                for (; ++a < o;)
                    n.set(a, t[a]);
            else
                for (; ++a < o;)
                    n.set(e(i = t[a], a, t), i);
        }
        else if (t)
            for (var s in t)
                n.set(s, t[s]); return n; }
        n.d(e, "b", function () { return a; });
        var a = "$";
        r.prototype = i.prototype = { constructor: r, has: function (t) { return a + t in this; }, get: function (t) { return this[a + t]; }, set: function (t, e) { return this[a + t] = e, this; }, remove: function (t) { var e = a + t; return e in this && delete this[e]; }, clear: function () { for (var t in this)
                t[0] === a && delete this[t]; }, keys: function () { var t = []; for (var e in this)
                e[0] === a && t.push(e.slice(1)); return t; }, values: function () { var t = []; for (var e in this)
                e[0] === a && t.push(this[e]); return t; }, entries: function () { var t = []; for (var e in this)
                e[0] === a && t.push({ key: e.slice(1), value: this[e] }); return t; }, size: function () { var t = 0; for (var e in this)
                e[0] === a && ++t; return t; }, empty: function () { for (var t in this)
                if (t[0] === a)
                    return !1; return !0; }, each: function (t) { for (var e in this)
                e[0] === a && t(this[e], e.slice(1), this); } }, e.a = i;
    }, function (t, e, n) {
        "use strict";
        var r = n(35), i = n(215), a = n(218), o = n(219), s = n(88), u = n(220), l = n(221), c = n(217);
        e.a = function (t, e) { var n, f = typeof e; return null == e || "boolean" === f ? Object(c.a)(e) : ("number" === f ? s.a : "string" === f ? (n = Object(r.a)(e)) ? (e = n, i.a) : l.a : e instanceof r.a ? i.a : e instanceof Date ? o.a : Array.isArray(e) ? a.a : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? u.a : s.a)(t, e); };
    }, function (t, e, n) {
        "use strict";
        function r() { }
        function i(t) { var e; return t = (t + "").trim().toLowerCase(), (e = w.exec(t)) ? (e = parseInt(e[1], 16), new l(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1)) : (e = x.exec(t)) ? a(parseInt(e[1], 16)) : (e = k.exec(t)) ? new l(e[1], e[2], e[3], 1) : (e = O.exec(t)) ? new l(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = C.exec(t)) ? o(e[1], e[2], e[3], e[4]) : (e = M.exec(t)) ? o(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = j.exec(t)) ? c(e[1], e[2] / 100, e[3] / 100, 1) : (e = E.exec(t)) ? c(e[1], e[2] / 100, e[3] / 100, e[4]) : S.hasOwnProperty(t) ? a(S[t]) : "transparent" === t ? new l(NaN, NaN, NaN, 0) : null; }
        function a(t) { return new l(t >> 16 & 255, t >> 8 & 255, 255 & t, 1); }
        function o(t, e, n, r) { return r <= 0 && (t = e = n = NaN), new l(t, e, n, r); }
        function s(t) { return t instanceof r || (t = i(t)), t ? (t = t.rgb(), new l(t.r, t.g, t.b, t.opacity)) : new l; }
        function u(t, e, n, r) { return 1 === arguments.length ? s(t) : new l(t, e, n, null == r ? 1 : r); }
        function l(t, e, n, r) { this.r = +t, this.g = +e, this.b = +n, this.opacity = +r; }
        function c(t, e, n, r) { return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new h(t, e, n, r); }
        function f(t) { if (t instanceof h)
            return new h(t.h, t.s, t.l, t.opacity); if (t instanceof r || (t = i(t)), !t)
            return new h; if (t instanceof h)
            return t; t = t.rgb(); var e = t.r / 255, n = t.g / 255, a = t.b / 255, o = Math.min(e, n, a), s = Math.max(e, n, a), u = NaN, l = s - o, c = (s + o) / 2; return l ? (u = e === s ? (n - a) / l + 6 * (n < a) : n === s ? (a - e) / l + 2 : (e - n) / l + 4, l /= c < .5 ? s + o : 2 - s - o, u *= 60) : l = c > 0 && c < 1 ? 0 : u, new h(u, l, c, t.opacity); }
        function d(t, e, n, r) { return 1 === arguments.length ? f(t) : new h(t, e, n, null == r ? 1 : r); }
        function h(t, e, n, r) { this.h = +t, this.s = +e, this.l = +n, this.opacity = +r; }
        function p(t, e, n) { return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e); }
        e.a = r, n.d(e, "d", function () { return g; }), n.d(e, "c", function () { return m; }), e.e = i, e.h = s, e.g = u, e.b = l, e.f = d;
        var v = n(137), g = .7, m = 1 / g, b = "\\s*([+-]?\\d+)\\s*", y = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", _ = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", w = /^#([0-9a-f]{3})$/, x = /^#([0-9a-f]{6})$/, k = new RegExp("^rgb\\(" + [b, b, b] + "\\)$"), O = new RegExp("^rgb\\(" + [_, _, _] + "\\)$"), C = new RegExp("^rgba\\(" + [b, b, b, y] + "\\)$"), M = new RegExp("^rgba\\(" + [_, _, _, y] + "\\)$"), j = new RegExp("^hsl\\(" + [y, _, _] + "\\)$"), E = new RegExp("^hsla\\(" + [y, _, _, y] + "\\)$"), S = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
        Object(v.a)(r, i, { displayable: function () { return this.rgb().displayable(); }, toString: function () { return this.rgb() + ""; } }), Object(v.a)(l, u, Object(v.b)(r, { brighter: function (t) { return t = null == t ? m : Math.pow(m, t), new l(this.r * t, this.g * t, this.b * t, this.opacity); }, darker: function (t) { return t = null == t ? g : Math.pow(g, t), new l(this.r * t, this.g * t, this.b * t, this.opacity); }, rgb: function () { return this; }, displayable: function () { return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1; }, toString: function () { var t = this.opacity; return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")"); } })), Object(v.a)(h, d, Object(v.b)(r, { brighter: function (t) { return t = null == t ? m : Math.pow(m, t), new h(this.h, this.s, this.l * t, this.opacity); }, darker: function (t) { return t = null == t ? g : Math.pow(g, t), new h(this.h, this.s, this.l * t, this.opacity); }, rgb: function () { var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * e, i = 2 * n - r; return new l(p(t >= 240 ? t - 240 : t + 120, i, r), p(t, i, r), p(t < 120 ? t + 240 : t - 120, i, r), this.opacity); }, displayable: function () { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1; } }));
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { var n = Object.create(t.prototype); for (var r in e)
            n[r] = e[r]; return n; }
        e.b = r, e.a = function (t, e, n) { t.prototype = e.prototype = n, n.constructor = t; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n, r, i) { var a = t * t, o = a * t; return ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * r + o * i) / 6; }
        e.a = r, e.b = function (t) { var e = t.length - 1; return function (n) { var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), a = t[i], o = t[i + 1], s = i > 0 ? t[i - 1] : 2 * a - o, u = i < e - 1 ? t[i + 2] : 2 * o - a; return r((n - i / e) * e, s, a, o, u); }; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return function () { return t; }; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
            return null; var n, r = t.slice(0, n); return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)]; };
    }, function (t, e, n) {
        "use strict";
        var r = (n(17), n(552));
        n.d(e, "c", function () { return r.a; }), n.d(e, "n", function () { return r.a; });
        var i = n(553);
        n.d(e, "g", function () { return i.a; }), n.d(e, "r", function () { return i.a; });
        var a = n(554);
        n.d(e, "d", function () { return a.a; });
        var o = n(555);
        n.d(e, "b", function () { return o.a; });
        var s = n(556);
        n.d(e, "a", function () { return s.a; });
        var u = n(557);
        n.d(e, "j", function () { return u.b; }), n.d(e, "h", function () { return u.b; }), n.d(e, "e", function () { return u.a; }), n.d(e, "i", function () { return u.c; });
        var l = n(558);
        n.d(e, "f", function () { return l.a; });
        var c = n(559);
        n.d(e, "k", function () { return c.a; });
        var f = n(560);
        n.d(e, "o", function () { return f.a; });
        var d = n(561);
        n.d(e, "m", function () { return d.a; });
        var h = n(562);
        n.d(e, "l", function () { return h.a; });
        var p = n(563);
        n.d(e, "u", function () { return p.b; }), n.d(e, "s", function () { return p.b; }), n.d(e, "p", function () { return p.a; }), n.d(e, "t", function () { return p.c; });
        var v = n(564);
        n.d(e, "q", function () { return v.a; });
        var g = n(565);
        n.d(e, "v", function () { return g.a; });
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return i; }), n.d(e, "b", function () { return o; }), n.d(e, "c", function () { return s; });
        var r, i, a, o, s, u = n(231);
        !function (t) { r = Object(u.a)(t), i = r.format, a = r.parse, o = r.utcFormat, s = r.utcParse; }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
    }, function (t, e, n) {
        "use strict";
        var r = n(578);
        n.d(e, "a", function () { return r.a; });
    }, function (t, e, n) {
        "use strict";
        function r() { return y || (x(i), y = w.now() + _); }
        function i() { y = 0; }
        function a() { this._call = this._time = this._next = null; }
        function o(t, e, n) { var r = new a; return r.restart(t, e, n), r; }
        function s() { r(), ++p; for (var t, e = d; e;)
            (t = y - e._time) >= 0 && e._call.call(null, t), e = e._next; --p; }
        function u() { y = (b = w.now()) + _, p = v = 0; try {
            s();
        }
        finally {
            p = 0, c(), y = 0;
        } }
        function l() { var t = w.now(), e = t - b; e > m && (_ -= e, b = t); }
        function c() { for (var t, e, n = d, r = 1 / 0; n;)
            n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : d = e); h = t, f(r); }
        function f(t) { if (!p) {
            v && (v = clearTimeout(v));
            t - y > 24 ? (t < 1 / 0 && (v = setTimeout(u, t - w.now() - _)), g && (g = clearInterval(g))) : (g || (b = w.now(), g = setInterval(l, m)), p = 1, x(u));
        } }
        e.b = r, e.a = a, e.c = o;
        var d, h, p = 0, v = 0, g = 0, m = 1e3, b = 0, y = 0, _ = 0, w = "object" == typeof performance && performance.now ? performance : Date, x = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) { setTimeout(t, 17); };
        a.prototype = o.prototype = { constructor: a, restart: function (t, e, n) { if ("function" != typeof t)
                throw new TypeError("callback is not a function"); n = (null == n ? r() : +n) + (null == e ? 0 : +e), this._next || h === this || (h ? h._next = this : d = this, h = this), this._call = t, this._time = n, f(); }, stop: function () { this._call && (this._call = null, this._time = 1 / 0, f()); } };
    }, function (t, e, n) {
        "use strict";
        var r = n(70), i = n(49), a = n(93), o = n(146);
        e.a = function () { function t(t) { var i, a, o, f = t.length, d = !1; for (null == u && (c = l(o = Object(r.a)())), i = 0; i <= f; ++i)
            !(i < f && s(a = t[i], i, t)) === d && ((d = !d) ? c.lineStart() : c.lineEnd()), d && c.point(+e(a, i, t), +n(a, i, t)); if (o)
            return c = null, o + "" || null; } var e = o.a, n = o.b, s = Object(i.a)(!0), u = null, l = a.a, c = null; return t.x = function (n) { return arguments.length ? (e = "function" == typeof n ? n : Object(i.a)(+n), t) : e; }, t.y = function (e) { return arguments.length ? (n = "function" == typeof e ? e : Object(i.a)(+e), t) : n; }, t.defined = function (e) { return arguments.length ? (s = "function" == typeof e ? e : Object(i.a)(!!e), t) : s; }, t.curve = function (e) { return arguments.length ? (l = e, null != u && (c = l(u)), t) : l; }, t.context = function (e) { return arguments.length ? (null == e ? u = c = null : c = l(u = e), t) : u; }, t; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t[0]; }
        function i(t) { return t[1]; }
        e.a = r, e.b = i;
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n) { var r = t._x1, i = t._y1, o = t._x2, s = t._y2; if (t._l01_a > a.f) {
            var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, l = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / l, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / l;
        } if (t._l23_a > a.f) {
            var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, f = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * c + t._x1 * t._l23_2a - e * t._l12_2a) / f, s = (s * c + t._y1 * t._l23_2a - n * t._l12_2a) / f;
        } t._context.bezierCurveTo(r, i, o, s, t._x2, t._y2); }
        function i(t, e) { this._context = t, this._alpha = e; }
        e.b = r;
        var a = n(71), o = n(96);
        i.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0; }, lineEnd: function () { switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3: this.point(this._x2, this._y2);
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line; }, point: function (t, e) { if (t = +t, e = +e, this._point) {
                var n = this._x2 - t, i = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + i * i, this._alpha));
            } switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2: this._point = 3;
                default: r(this, t, e);
            } this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e; } }, e.a = function t(e) { function n(t) { return e ? new i(t, e) : new o.a(t, 0); } return n.alpha = function (e) { return t(+e); }, n; }(.5);
    }, function (t, e, n) {
        "use strict";
        function r(t) { for (var e, n = 0, r = -1, i = t.length; ++r < i;)
            (e = +t[r][1]) && (n += e); return n; }
        e.b = r;
        var i = n(73);
        e.a = function (t) { var e = t.map(r); return Object(i.a)(t).sort(function (t, n) { return e[t] - e[n]; }); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t) { return t.split("/")[0]; }
        function a() { return i(f.default.getCurrentUrl()) === i(f.default.currentUrl); }
        function o(t) { return function () { var e = x.getView(); e && a() && e.shouldKeepState.apply(e, arguments) ? e.onRouteUpdate.apply(e, arguments) : x.showView(t.apply(void 0, arguments)); }; }
        function s() { return new v.default({ code: 404, message: (0, w.default)("errors.notFound") }); }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.showView = o, e.notFound = s, n(260), n(261);
        var u = n(9), l = n(14), c = n(37), f = r(c), d = n(301), h = function (t) { if (t && t.__esModule)
            return t; var e = {}; if (null != t)
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e.default = t, e; }(d), p = n(349), v = r(p), g = n(362), m = r(g), b = n(61), y = r(b), _ = n(1), w = r(_);
        "function" == typeof window.requestAnimationFrame && (window.requestAnimationFrame = window.requestAnimationFrame.bind(window)), u.Behaviors.behaviorsLookup = h;
        var x = new u.Application({ region: "#content" });
        x.on("start", function () { (0, b.initTranslations)().then(function () { l.history.start(), document.dir = y.default.dir(), y.default.on("languageChanged", function () { x.getRegion().reset(), f.default.reload(), document.dir = y.default.dir(); }); }), f.default.on("route:notFound", o(s)), f.default.on("route:testresultPage", o(function (t, e) { return new m.default({ uid: t, tabName: e }); })); }), e.default = x;
    }, function (t, e, n) { t.exports = !n(32) && !n(51)(function () { return 7 != Object.defineProperty(n(99)("div"), "a", { get: function () { return 7; } }).a; }); }, function (t, e, n) { var r = n(44), i = n(45), a = n(266)(!1), o = n(104)("IE_PROTO"); t.exports = function (t, e) { var n, s = i(t), u = 0, l = []; for (n in s)
        n != o && r(s, n) && l.push(n); for (; e.length > u;)
        r(s, n = e[u++]) && (~a(l, n) || l.push(n)); return l; }; }, function (t, e, n) { var r = n(57); t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) { return "String" == r(t) ? t.split("") : Object(t); }; }, function (t, e, n) { var r = n(44), i = n(58), a = n(104)("IE_PROTO"), o = Object.prototype; t.exports = Object.getPrototypeOf || function (t) { return t = i(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null; }; }, function (t, e, n) { t.exports = { default: n(270), __esModule: !0 }; }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        e.__esModule = !0;
        var i = n(272), a = r(i), o = n(279), s = r(o), u = "function" == typeof s.default && "symbol" == typeof a.default ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : typeof t; };
        e.default = "function" == typeof s.default && "symbol" === u(a.default) ? function (t) { return void 0 === t ? "undefined" : u(t); } : function (t) { return t && "function" == typeof s.default && t.constructor === s.default && t !== s.default.prototype ? "symbol" : void 0 === t ? "undefined" : u(t); };
    }, function (t, e, n) {
        "use strict";
        var r = n(79), i = n(20), a = n(157), o = n(43), s = n(44), u = n(52), l = n(275), c = n(80), f = n(153), d = n(18)("iterator"), h = !([].keys && "next" in [].keys()), p = function () { return this; };
        t.exports = function (t, e, n, v, g, m, b) { l(n, e, v); var y, _, w, x = function (t) { if (!h && t in M)
            return M[t]; switch (t) {
            case "keys":
            case "values": return function () { return new n(this, t); };
        } return function () { return new n(this, t); }; }, k = e + " Iterator", O = "values" == g, C = !1, M = t.prototype, j = M[d] || M["@@iterator"] || g && M[g], E = !h && j || x(g), S = g ? O ? x("entries") : E : void 0, T = "Array" == e ? M.entries || j : j; if (T && (w = f(T.call(new t))) !== Object.prototype && w.next && (c(w, k, !0), r || s(w, d) || o(w, d, p)), O && j && "values" !== j.name && (C = !0, E = function () { return j.call(this); }), r && !b || !h && !C && M[d] || o(M, d, E), u[e] = E, u[k] = p, g)
            if (y = { values: O ? E : x("values"), keys: m ? E : x("keys"), entries: S }, b)
                for (_ in y)
                    _ in M || a(M, _, y[_]);
            else
                i(i.P + i.F * (h || C), e, y); return y; };
    }, function (t, e, n) { t.exports = n(43); }, function (t, e, n) { var r = n(30), i = n(28), a = n(56); t.exports = n(32) ? Object.defineProperties : function (t, e) { i(t); for (var n, o = a(e), s = o.length, u = 0; s > u;)
        r.f(t, n = o[u++], e[n]); return t; }; }, function (t, e, n) { var r = n(19).document; t.exports = r && r.documentElement; }, function (t, e, n) { var r = n(76)("meta"), i = n(31), a = n(44), o = n(30).f, s = 0, u = Object.isExtensible || function () { return !0; }, l = !n(51)(function () { return u(Object.preventExtensions({})); }), c = function (t) { o(t, r, { value: { i: "O" + ++s, w: {} } }); }, f = function (t, e) { if (!i(t))
        return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!a(t, r)) {
        if (!u(t))
            return "F";
        if (!e)
            return "E";
        c(t);
    } return t[r].i; }, d = function (t, e) { if (!a(t, r)) {
        if (!u(t))
            return !0;
        if (!e)
            return !1;
        c(t);
    } return t[r].w; }, h = function (t) { return l && p.NEED && u(t) && !a(t, r) && c(t), t; }, p = t.exports = { KEY: r, NEED: !1, fastKey: f, getWeak: d, onFreeze: h }; }, function (t, e, n) { var r = n(151), i = n(106).concat("length", "prototype"); e.f = Object.getOwnPropertyNames || function (t) { return r(t, i); }; }, function (t, e) { }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(154), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        e.default = function (t, e, n) { return e in t ? (0, i.default)(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t; };
    }, function (t, e, n) { !function (e, n) {
        "use strict";
        t.exports = n();
    }(0, function () { function t(e) { if (!(this instanceof t))
        return n(e); e = e || {}, this.tailSpace = e.tailSpace || "", this.elementSeparator = e.elementSeparator || "__", this.modSeparator = e.modSeparator || "_", this.modValueSeparator = e.modValueSeparator || "_", this.classSeparator = e.classSeparator || " ", this.isFullModifier = void 0 === e.isFullModifier || e.isFullModifier, this.isFullBoolValue = void 0 !== e.isFullBoolValue && e.isFullBoolValue; } function e(t, e, n) { return this.bind.apply(this, [null].concat(Array.prototype.slice.call(arguments))); } function n(n) { var r = new t(n), i = r.stringify.bind(r); return i.with = i.lock = e, i; } t.prototype = { _stringifyModifier: function (t, e, n) { var r = ""; return void 0 === n ? r : this.isFullBoolValue || !1 !== n ? (r += this.classSeparator + t + this.modSeparator + e, (this.isFullBoolValue || !0 !== n) && (r += this.modValueSeparator + String(n)), r) : r; }, _stringifyModifiers: function (t, e) { var n = ""; this.isFullModifier || (t = ""); for (var r in e)
            e.hasOwnProperty(r) && (n += this._stringifyModifier(t, r, e[r])); return n; }, stringify: function (t, e, n) { var r = String(t); return e && "object" == typeof e && void 0 === n && (n = e, e = null), e && (r += this.elementSeparator + String(e)), n && (r += this._stringifyModifiers(r, n)), r + this.tailSpace; } }; var r = n(); return r.B = t, r; }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t, e, n) { this.helpers = t || {}, this.partials = e || {}, this.decorators = n || {}, u.registerDefaultHelpers(this), l.registerDefaultDecorators(this); }
        e.__esModule = !0, e.HandlebarsEnvironment = i;
        var a = n(33), o = n(60), s = r(o), u = n(309), l = n(317), c = n(319), f = r(c);
        e.VERSION = "4.0.11";
        e.COMPILER_REVISION = 7;
        var d = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0" };
        e.REVISION_CHANGES = d;
        i.prototype = { constructor: i, logger: f.default, log: f.default.log, registerHelper: function (t, e) { if ("[object Object]" === a.toString.call(t)) {
                if (e)
                    throw new s.default("Arg not supported with multiple helpers");
                a.extend(this.helpers, t);
            }
            else
                this.helpers[t] = e; }, unregisterHelper: function (t) { delete this.helpers[t]; }, registerPartial: function (t, e) { if ("[object Object]" === a.toString.call(t))
                a.extend(this.partials, t);
            else {
                if (void 0 === e)
                    throw new s.default('Attempting to register a partial called "' + t + '" as undefined');
                this.partials[t] = e;
            } }, unregisterPartial: function (t) { delete this.partials[t]; }, registerDecorator: function (t, e) { if ("[object Object]" === a.toString.call(t)) {
                if (e)
                    throw new s.default("Arg not supported with multiple decorators");
                a.extend(this.decorators, t);
            }
            else
                this.decorators[t] = e; }, unregisterDecorator: function (t) { delete this.decorators[t]; } };
        var h = f.default.log;
        e.log = h, e.createFrame = a.createFrame, e.logger = f.default;
    }, function (t, e, n) { t.exports = { default: n(325), __esModule: !0 }; }, function (t, e, n) { var r = n(28); t.exports = function (t, e, n, i) { try {
        return i ? e(r(n)[0], n[1]) : e(n);
    }
    catch (e) {
        var a = t.return;
        throw void 0 !== a && r(a.call(t)), e;
    } }; }, function (t, e, n) { var r = n(52), i = n(18)("iterator"), a = Array.prototype; t.exports = function (t) { return void 0 !== t && (r.Array === t || a[i] === t); }; }, function (t, e, n) { var r = n(28), i = n(75), a = n(18)("species"); t.exports = function (t, e) { var n, o = r(t).constructor; return void 0 === o || void 0 == (n = r(o)[a]) ? e : i(n); }; }, function (t, e, n) { var r, i, a, o = n(50), s = n(329), u = n(159), l = n(99), c = n(19), f = c.process, d = c.setImmediate, h = c.clearImmediate, p = c.MessageChannel, v = c.Dispatch, g = 0, m = {}, b = function () { var t = +this; if (m.hasOwnProperty(t)) {
        var e = m[t];
        delete m[t], e();
    } }, y = function (t) { b.call(t.data); }; d && h || (d = function (t) { for (var e = [], n = 1; arguments.length > n;)
        e.push(arguments[n++]); return m[++g] = function () { s("function" == typeof t ? t : Function(t), e); }, r(g), g; }, h = function (t) { delete m[t]; }, "process" == n(57)(f) ? r = function (t) { f.nextTick(o(b, t, 1)); } : v && v.now ? r = function (t) { v.now(o(b, t, 1)); } : p ? (i = new p, a = i.port2, i.port1.onmessage = y, r = o(a.postMessage, a, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function (t) { c.postMessage(t + "", "*"); }, c.addEventListener("message", y, !1)) : r = "onreadystatechange" in l("script") ? function (t) { u.appendChild(l("script")).onreadystatechange = function () { u.removeChild(this), b.call(t); }; } : function (t) { setTimeout(o(b, t, 1), 0); }), t.exports = { set: d, clear: h }; }, function (t, e) { t.exports = function (t) { try {
        return { e: !1, v: t() };
    }
    catch (t) {
        return { e: !0, v: t };
    } }; }, function (t, e, n) { var r = n(28), i = n(31), a = n(114); t.exports = function (t, e) { if (r(t), i(e) && e.constructor === t)
        return e; var n = a.f(t); return (0, n.resolve)(e), n.promise; }; }, function (t, e, n) { var r = n(18)("iterator"), i = !1; try {
        var a = [7][r]();
        a.return = function () { i = !0; }, Array.from(a, function () { throw 2; });
    }
    catch (t) { } t.exports = function (t, e) { if (!e && !i)
        return !1; var n = !1; try {
        var a = [7], o = a[r]();
        o.next = function () { return { done: n = !0 }; }, a[r] = function () { return o; }, t(a);
    }
    catch (t) { } return n; }; }, function (t, e, n) {
        "use strict";
        e.a = { processors: {}, addPostProcessor: function (t) { this.processors[t.name] = t; }, handle: function (t, e, n, r, i) { var a = this; return t.forEach(function (t) { a.processors[t] && (e = a.processors[t].process(e, n, r, i)); }), e; } };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t.interpolation = { unescapeSuffix: "HTML" }, t.interpolation.prefix = t.interpolationPrefix || "__", t.interpolation.suffix = t.interpolationSuffix || "__", t.interpolation.escapeValue = t.escapeInterpolation || !1, t.interpolation.nestingPrefix = t.reusePrefix || "$t(", t.interpolation.nestingSuffix = t.reuseSuffix || ")", t; }
        function i(t) { return t.resStore && (t.resources = t.resStore), t.ns && t.ns.defaultNs ? (t.defaultNS = t.ns.defaultNs, t.ns = t.ns.namespaces) : t.defaultNS = t.ns || "translation", t.fallbackToDefaultNS && t.defaultNS && (t.fallbackNS = t.defaultNS), t.saveMissing = t.sendMissing, t.saveMissingTo = t.sendMissingTo || "current", t.returnNull = !t.fallbackOnNull, t.returnEmptyString = !t.fallbackOnEmpty, t.returnObjects = t.returnObjectTrees, t.joinArrays = "\n", t.returnedObjectHandler = t.objectTreeKeyHandler, t.parseMissingKeyHandler = t.parseMissingKey, t.appendNamespaceToMissingKey = !0, t.nsSeparator = t.nsseparator || ":", t.keySeparator = t.keyseparator || ".", "sprintf" === t.shortcutFunction && (t.overloadTranslationOptionHandler = function (t) { for (var e = [], n = 1; n < t.length; n++)
            e.push(t[n]); return { postProcess: "sprintf", sprintf: e }; }), t.whitelist = t.lngWhitelist, t.preload = t.preload, "current" === t.load && (t.load = "currentOnly"), "unspecific" === t.load && (t.load = "languageOnly"), t.backend = t.backend || {}, t.backend.loadPath = t.resGetPath || "locales/__lng__/__ns__.json", t.backend.addPath = t.resPostPath || "locales/add/__lng__/__ns__", t.backend.allowMultiLoading = t.dynamicLoad, t.cache = t.cache || {}, t.cache.prefix = "res_", t.cache.expirationTime = 6048e5, t.cache.enabled = t.useLocalStorage, t = r(t), t.defaultVariables && (t.interpolation.defaultVariables = t.defaultVariables), t; }
        function a(t) { return t = r(t), t.joinArrays = "\n", t; }
        function o(t) { return (t.interpolationPrefix || t.interpolationSuffix || void 0 !== t.escapeInterpolation) && (t = r(t)), t.nsSeparator = t.nsseparator, t.keySeparator = t.keyseparator, t.returnObjects = t.returnObjectTrees, t; }
        function s(t) { t.lng = function () { return u.a.deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."), t.services.languageUtils.toResolveHierarchy(t.language)[0]; }, t.preload = function (e, n) { u.a.deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"), t.loadLanguages(e, n); }, t.setLng = function (e, n, r) { return u.a.deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."), "function" == typeof n && (r = n, n = {}), n || (n = {}), !0 === n.fixLng && r ? r(null, t.getFixedT(e)) : t.changeLanguage(e, r); }, t.addPostProcessor = function (e, n) { u.a.deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"), t.use({ type: "postProcessor", name: e, process: n }); }; }
        e.b = i, e.c = a, e.d = o, e.a = s;
        var u = n(38);
    }, function (t, e) { t.exports = { status: { failed: "Fehlgeschlagen", broken: "Defekt", passed: "Erfolgreich", skipped: "Übersprungen", unknown: "Unbekannt", flaky: "Instabil" }, sorter: { order: "Reihenfolge", name: "Name", duration: "Dauer", status: "Status" }, tab: { overview: { name: "Übersicht" }, categories: { name: "Kategorien" }, suites: { name: "Suiten" }, graph: { name: "Grafiken" }, timeline: { name: "Zeitstrahl", selected: "{{count}} Test ausgewählt ({{percent}}%) mit einer Dauer von über {{duration}}", selected_plural: "{{count}} Tests ausgewählt ({{percent}}%) mit einer Dauer von über {{duration}}" } }, widget: { summary: { aggregatedName: "Aggregierter Report", launches: "Durchlauf", launches_plural: "Durchläufe", testResults: "Testfall", testResults_plural: "Testfälle" }, trend: { name: "Trend" }, categoriesTrend: { name: "Kategorien Trend" }, durationTrend: { name: "Dauer Trend" }, retryTrend: { name: "Wiederholungen Trend" }, executors: { name: "Durchführer", unknown: "Unbekannt", empty: "Keine Informationen zu Testdurchführern verfügbar" }, launches: { name: "Durchläufe", empty: "Keine Informationen zu Durchläufen verfügbar" }, environment: { name: "Umgebung", empty: "Keine Umgebungsvariablen verfügbar", showAll: "Zeige alle" }, suites: { name: "Suiten" }, categories: { name: "Kategorien" } }, chart: { duration: { name: "Dauer", empty: "Hier gibt es nichts zu zeigen" }, trend: { empty: "Hier gibt es nichts zu zeigen" }, severity: { name: "Ausmaß" }, status: { name: "Status" } }, testResult: { status: { empty: "Keine Status Details", trace: "Zeige Stracktrace" }, overview: { name: "Übersicht" }, categories: { name: "Kategorien" }, description: { name: "Beschreibung" }, duration: { name: "Dauer" }, history: { name: "Historie", successRate: "Erfolgsrate" }, owner: { name: "Besitzer" }, retries: { name: "Wiederholungen", empty: "Keine Informationen zu Wiederholungen verfügbar" }, parameters: { name: "Parameter" }, links: { name: "Links" }, severity: { name: "Ausmaß" }, execution: { name: "Durchführung", setup: "Vorbereitung", teardown: "Aufräumung", body: "Test" }, stats: { count: { steps: "{{count}} Unterschritt", steps_plural: "{{count}} Unterschritte", attachments: "{{count}} Anhang", attachments_plural: "{{count}} Anhänge", parameters: "{{count}} Parameter", parameters_plural: "{{count}} Parameter" } } }, controls: { collapse: "Verkleinern", expand: "Vergrößern", fullscreen: "Vollbild", language: "Sprache ändern", clipboard: "In Zwischenablage kopieren", clipboardSuccess: "Erfolgreich in Zwischenablage kopiert", clipboardError: "Wert konnte nicht in Zwischenablage kopiert werden. Ihr Browser scheint dieses Feature nicht zu unterstützen", backto: "Zurück zu" }, errors: { missedAttachment: "Anhang nicht gefunden", notFound: "Nicht gefunden" }, component: { tree: { filter: "Filtere Testfälle nach Status", groups: "Gruppeninformationen an- / ausschalten", download: "CSV herunterladen", empty: "Keine Einträge verfügbar", time: { total: { name: "Gesamt", tooltip: "Dauer vom Start des ersten bis zum Ende des letzten Tests" }, max: { name: "Max", tooltip: "Längste Testdauer" }, sum: { name: "Summe", tooltip: "Summe aller Testdauern" } }, filtered: { total: "{{count}} Testergebnis", total_plural: "{{count}} Testergebnisse", shown: "{{count}} angezeigt" } }, widgetStatus: { showAll: "Zeige alle", total: "{{count}} Eintrag insgesamt", total_plural: "{{count}} Einträge insgesamt" }, statusToggle: { showCases: "Zeige Testergebnisse mit Status {{status}}", hideCases: "Verstecke Testergebnisse mit Status {{status}}" } } }; }, function (t, e) { t.exports = { status: { failed: "Failed", broken: "Broken", passed: "Passed", skipped: "Skipped", unknown: "Unknown", flaky: "Test is flaky" }, sorter: { order: "order", name: "name", duration: "duration", status: "status" }, tab: { overview: { name: "Overview" }, categories: { name: "Categories" }, suites: { name: "Suites" }, graph: { name: "Graphs" }, timeline: { name: "Timeline", selected: "Selected {{count}} test ({{percent}}%) with duration above {{duration}}", selected_plural: "Selected {{count}} tests ({{percent}}%) with duration above {{duration}}" } }, widget: { summary: { aggregatedName: "Aggregated report", launches: "launch", launches_plural: "launches", testResults: "test case", testResults_plural: "test cases" }, trend: { name: "Trend" }, categoriesTrend: { name: "Categories trend" }, durationTrend: { name: "Duration trend" }, retryTrend: { name: "Retries trend" }, executors: { name: "Executors", unknown: "Unknown", empty: "There is no information about tests executors" }, launches: { name: "Launches", empty: "There is no information about launches" }, environment: { name: "Environment", empty: "There are no environment variables", showAll: "Show all" }, suites: { name: "Suites" }, categories: { name: "Categories" } }, chart: { duration: { name: "Duration", empty: "There is nothing to show" }, trend: { empty: "There is nothing to show" }, severity: { name: "Severity" }, status: { name: "Status" } }, testResult: { status: { empty: "Empty status details", trace: "Show trace" }, overview: { name: "Overview" }, categories: { name: "Categories" }, description: { name: "Description" }, duration: { name: "Duration" }, history: { name: "History", successRate: "Success rate" }, owner: { name: "Owner" }, retries: { name: "Retries", empty: "There is no information available about test retries" }, parameters: { name: "Parameters" }, links: { name: "Links" }, severity: { name: "Severity" }, execution: { name: "Execution", setup: "Set up", teardown: "Tear down", body: "Test body" }, stats: { count: { steps: "{{count}} sub-step", steps_plural: "{{count}} sub-steps", attachments: "{{count}} attachment", attachments_plural: "{{count}} attachments", parameters: "{{count}} parameter", parameters_plural: "{{count}} parameters" } } }, controls: { collapse: "Collapse", expand: "Expand", fullscreen: "Full screen", language: "Change language", clipboard: "Copy to clipboard", clipboardSuccess: "Successfully copied", clipboardError: "Can not copy value to clipboard. Seems like this feature is not supported for your browser", backto: "Back to" }, errors: { missedAttachment: "Attachment not found", notFound: "Not found" }, component: { tree: { filter: "Filter by status", groups: "Toggle groups info", download: "Download CSV", empty: "There are no items", time: { total: { name: "Total", tooltip: "Duration from first test started to last test finished" }, max: { name: "Max", tooltip: "Longest test duration" }, sum: { name: "Sum", tooltip: "Sum of all tests durations" } }, filtered: { total: "{{count}} test result", total_plural: "{{count}} test results", shown: "{{count}} shown" } }, widgetStatus: { showAll: "Show all", total: "{{count}} item total", total_plural: "{{count}} items total" }, statusToggle: { showCases: "Show test results with {{status}} status", hideCases: "Hide test results with {{status}} status" } } }; }, function (t, e) { t.exports = { status: { failed: "נכשל", broken: "שבור", passed: "עבר", skipped: "דולג", unknown: "לא ידוע", flaky: "לא יציב" }, sorter: { order: "סדר", name: "שם מקרה הבדיקה", duration: "זמן ריצה", status: "סטטוס" }, tab: { overview: { name: "סקירה כללית" }, categories: { name: "קטגוריות" }, suites: { name: "קבוצות מקרי בדיקה" }, graph: { name: "גרפים" }, timeline: { name: "ציר זמן", selected: "נבחר מקרה בדיקה {{count}} ({{percent}}%) עם זמן ריצה מעל {{duration}}", selected_plural: "נבחרו {{count}} מקרי בדיקה ({{percent}}%) עם זמן ריצה מעל {{duration}}" } }, widget: { summary: { aggregatedName: "דוח", launches: "חבילת הרצה", launches_plural: "חבילות הרצה", testResults: "תוצאת בדיקה", testResults_plural: "תוצאות בדיקה" }, trend: { name: "מגמת ריצות" }, categoriesTrend: { name: "מגמת ריצה על קטגוריות" }, durationTrend: { name: "מגמת זמן ריצה" }, retryTrend: { name: "מגמת חזרות על ריצה" }, executors: { name: "כלי הרצה", unknown: "לא ידוע", empty: "לא קיים מידע על כלי הרצת מקרי הבדיקה" }, launches: { name: "חבילות הרצה", empty: "לא קיים מידע על חבילות הרצה" }, environment: { name: "משתני סביבה", empty: "לא קיימים משתני סביבה", showAll: "הצג את כל משתני הסביבה" }, suites: { name: "קבוצות מקרי בדיקה" }, categories: { name: "קטגוריות" } }, chart: { duration: { name: "זמן ריצה", empty: "אין דבר להציג" }, trend: { empty: "אין דבר להציג" }, severity: { name: "חומרה" }, status: { name: "סטטוס" } }, testResult: { status: { empty: "לא קיימים פרטים על מצב מקרה הבדיקה", trace: "הצג מידע נוסף" }, overview: { name: "סקירה כללית" }, categories: { name: "קטגוריות" }, description: { name: "תיאור" }, duration: { name: "זמן ריצה" }, history: { name: "היסטוריה", successRate: "שיעור הצלחה" }, owner: { name: "האחראי למקרה הבדיקה" }, retries: { name: "ניסיונות ריצה חוזרים", empty: "אין מידע זמין על ניסיונות ריצה חוזרים" }, parameters: { name: "פרמטרים" }, links: { name: "קישורים" }, severity: { name: "חומרה" }, execution: { name: "הרצה", setup: "הכנת הריצה", teardown: "סיום הריצה", body: "תוכן מקרה הבדיקה" }, stats: { count: { steps: "צעד משנה {{count}}", steps_plural: "{{count}} צעדי משנה", attachments: "תוכן מצורף {{count}}", attachments_plural: "{{count}} תכנים מצורפים", parameters: "פרמטר {{count}}", parameters_plural: "{{count}} פרמטרים" } } }, controls: { collapse: "כווץ", expand: "הרחב", fullscreen: "מסך מלא", language: "שנה שפה", clipboard: "העתק אל מגש המערכת", clipboardSuccess: "הועתק בהצלחה", clipboardError: "לא ניתן להעתיק את הערך אל מגש המערכת. נראה שהתכונה הזאת לא נתמכת על ידי הדפדפן שלך", backto: "חזור ל" }, errors: { missedAttachment: "התוכן המצורף לא נמצא", notFound: "לא נמצא" }, component: { tree: { filter: "מיין מקרי בדיקה על ידי סטטוס", groups: "הצג/הסתר את המידע על הקבוצות", download: "הורד קובץ CSV", empty: "לא קיימים פריטים", time: { total: { name: "סך הכול", tooltip: "משך זמן הריצה מתחילת ריצת מקרה הבדיקה הראשון עד סיום ריצת מקרה הבדיקה האחרון" }, max: { name: "מקסימלי", tooltip: "זמן הריצה הכי ארוך" }, sum: { name: "סכום", tooltip: "סכום כל זמני תוצאות הריצה" } }, filtered: { total: "תוצאת ריצה {{count}}", total_plural: "{{count}} תוצאות ריצה", shown: "מופיעים {{count}}" } }, widgetStatus: { showAll: "הצג את כל הפריטים", total: "סך הכול פריט {{count}}", total_plural: "סך הכול {{count}} פריטים" }, statusToggle: { showCases: "הצג תוצאות ריצה עם הסטטוס {{status}}", hideCases: "הסתר תוצאות ריצה עם הסטטוס {{status}}" } } }; }, function (t, e) { t.exports = { status: { failed: "Не прошло", broken: "Сломалось", passed: "Прошло", skipped: "Пропущено", unknown: "Неизвестно", flaky: "Нестабильный тест" }, sorter: { order: "порядок", name: "имя", duration: "длительность", status: "статус" }, tab: { overview: { name: "Обзор" }, categories: { name: "Категории" }, suites: { name: "Тест сюиты" }, graph: { name: "Графики" }, timeline: { name: "Временная шкала", selected_0: "Выбран {{count}} тест ({{percent}}%) с длительностью выше {{duration}}", selected_1: "Выбрано {{count}} теста ({{percent}}%) с длительностью выше {{duration}}", selected_2: "Выбрано {{count}} тестов ({{percent}}%) с длительностью выше {{duration}}" } }, widget: { summary: { aggregatedName: "Агрегированый отчет", launches_0: "запуск тестов", launches_1: "запуска тестов", launches_2: "запусков тестов", testResults_0: "тестовый сценарий", testResults_1: "тестовых сценария", testResults_2: "тестовых сценариев" }, trend: { name: "Тренд" }, executors: { name: "Система выполнения тестов", unknown: "Неизвестно", empty: "Данные о системе выполнения тестов отсутствуют" }, launches: { name: "Запуски тестов", empty: "Отсутствует информация про запуски" }, environment: { name: "Окружение", empty: "Отсутствует информация про окружение", showAll: "Показать все" }, suites: { name: "Тест сюиты" }, categories: { name: "Категории" } }, chart: { duration: { name: "Длительность тестов", empty: "Нет данных" }, trend: { empty: "Нет данных" }, severity: { name: "Важность тестов" }, status: { name: "Статусы тестов" } }, testResult: { status: { empty: "Дополнительная информация о статусе отсутствует", trace: "Показать трейс" }, overview: { name: "Обзор" }, categories: { name: "Категории" }, description: { name: "Описание" }, duration: { name: "Длительность" }, history: { name: "История", successRate: "Success rate" }, owner: { name: "Ответственный" }, retries: { name: "Перезапуски", empty: "Нет информации о перезапусках теста" }, parameters: { name: "Параметры" }, links: { name: "Ссылки" }, severity: { name: "Важность" }, execution: { name: "Выполнение", setup: "Подготовка", teardown: "Завершение", body: "Тело теста" }, stats: { count: { steps_0: "{{count}} вложенный шаг", steps_1: "{{count}} вложенных шага", steps_2: "{{count}} вложенных шагов", attachments_0: "{{count}} вложение", attachments_1: "{{count}} вложения", attachments_2: "{{count}} вложений", parameters_0: "{{count}} параметр", parameters_1: "{{count}} параметра", parameters_2: "{{count}} параметров" } } }, controls: { collapse: "Свернуть", expand: "Развернуть", fullscreen: "На весь экран", language: "Сменить язык", clipboard: "Скопировать в буфер обмена", clipboardSuccess: "Значение успешно скопировано", clipboardError: "Ошибка. Скорее всего ваш браузер не поддерживает данную функциональность", backto: "Вернуться на" }, errors: { missedAttachment: "Вложение не найдено", notFound: "Не найдено" }, component: { tree: { filter: "Фильтрация по статусам", groups: "Показывать информацию о группах", empty: "Нет данных", unknown: "Неизвестная группа", time: { total: { name: "Итого", tooltip: "Время с начала первого теста до конца последнего" }, max: { name: "Самый долгий", tooltip: "Длительность самого долгого теста в группе" }, sum: { name: "Суммарно", tooltip: "Сумма длительностей всех тестов в группе" } }, filtered: { total_0: "всего {{count}} тест", total_1: "всего {{count}} теста", total_2: "всего {{count}} тестов", shown_0: "{{count}} показан", shown_1: "{{count}} показано", shown_2: "{{count}} показано" } }, widgetStatus: { showAll: "Показать все", total_0: "Всего {{count}} элемент", total_1: "Всего {{count}} элемента", total_2: "Всего {{count}} элементов" }, statusToggle: { showCases: 'Показать результаты со статусом "{{status}}"', hideCases: 'Скрыть результаты со статусом "{{status}}"' } } }; }, function (t, e) { t.exports = { status: { failed: "失败", broken: "故障", passed: "通过", skipped: "跳过", unknown: "未知", flaky: "不稳定" }, sorter: { name: "名称", duration: "用时", status: "状态" }, tab: { overview: { name: "总览" }, categories: { name: "类别" }, suites: { name: "测试套" }, graph: { name: "图表" }, timeline: { name: "时间刻度", selected: "{{count}}个测试用例({{percent}}%)执行时间超过{{duration}}", selected_plural: "{{count}}个测试用例({{percent}}%)执行时间超过{{duration}}" } }, widget: { summary: { aggregatedName: "汇总报告", launches: "启动", launches_plural: "启动", testResults: "测试用例", testResults_plural: "测试用例" }, trend: { name: "趋势" }, executors: { name: "运行器", unknown: "未知", empty: "没有运行器的信息" }, launches: { name: "启动", empty: "没有用例启动执行的信息" }, environment: { name: "环境", empty: "没有环境变量", showAll: "显示所有" }, suites: { name: "测试套" }, categories: { name: "类别" } }, chart: { duration: { name: "耗时", empty: "没有信息" }, trend: { empty: "没有信息" }, severity: { name: "优先级" }, status: { name: "状态" } }, testResult: { status: { empty: "状态详情为空", trace: "展示堆栈" }, overview: { name: "总览" }, categories: { name: "类别" }, description: { name: "描述" }, duration: { name: "耗时" }, history: { name: "历史", successRate: "成功率" }, owner: { name: "作者" }, retries: { name: "重试次数" }, parameters: { name: "参数" }, links: { name: "链接" }, severity: { name: "优先级" }, execution: { name: "执行", setup: "前置", teardown: "后置", body: "测试步骤" }, stats: { count: { steps: "{{count}}个步骤", steps_plural: "{{count}}个步骤", attachments: "{{count}}个附件", attachments_plural: "{{count}}个附件", parameters: "{{count}}个参数", parameters_plural: "{{count}}个参数" } } }, controls: { collapse: "折叠", expand: "展开", fullscreen: "全屏", language: "切换地区语言", clipboard: "复制到剪贴板", backto: "返回" }, errors: { missedAttachment: "没有找到附件", notFound: "没有找到" }, component: { tree: { filter: "通过用例状态过滤", groups: "开关测试套信息", empty: "没有记录", time: { total: { name: "整体", tooltip: "从首个用例的开始时间到最后一个用例的结束时间" }, max: { name: "最长", tooltip: "好使最长的用例" }, sum: { name: "合并", tooltip: "所有用例耗时之和" } }, filtered: { total: "共{{count}}个用例", total_plural: "共{{count}}个用例", shown: "显示{{count}}个" } }, widgetStatus: { showAll: "显示所有", total: "总共{{count}}项", total_plural: "总共{{count}}项" }, statusToggle: { showCases: "显示{{status}}状态的用例", hideCases: "隐藏{{status}}状态的用例" } } }; }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s, u, l, c, f = n(15), d = r(f), h = n(2), p = r(h), v = n(3), g = r(v), m = n(6), b = r(m), y = n(4), _ = r(y), w = n(5), x = r(w);
        n(363);
        var k = n(9), O = n(8), C = n(364), M = r(C), j = n(367), E = r(j), S = n(85), T = r(S), A = n(63), N = r(A), R = n(390), P = r(R), D = n(182), L = r(D), V = n(1), B = r(V), z = n(16), I = [{ id: "", name: "testResult.overview.name", View: E.default }], U = (i = (0, O.className)("test-result"), a = (0, O.behavior)("TooltipBehavior", { position: "left" }), o = (0, O.behavior)("ClipboardBehavior"), s = (0, O.regions)({ content: ".test-result__content" }), u = (0, O.on)("click .status-details__trace-toggle"), i(l = a(l = o(l = s((c = function (t) { function e() { var t, n, r, i; (0, g.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, _.default)(this, (t = e.__proto__ || (0, p.default)(e)).call.apply(t, [this].concat(o))), r.template = M.default, i = n, (0, _.default)(r, i); } return (0, x.default)(e, t), (0, b.default)(e, [{ key: "initialize", value: function (t) { var e = this, n = t.routeState; this.routeState = n, this.tabs = I.concat(N.default.testResultTabs), this.tabName = this.routeState.get("testResultTab") || "", this.listenTo(this.routeState, "change:testResultTab", function (t, n) { return e.onTabChange(n); }), this.listenTo(this.routeState, "change:attachment", function (t, n) { return e.onShowAttachment(n); }); } }, { key: "onRender", value: function () { var t = (0, z.findWhere)(this.tabs, { id: this.tabName }); this.showChildView("content", t ? new t.View(this.options) : new T.default({ code: 404, message: 'Tab "' + this.tabName + '" not found' })); var e = this.routeState.get("attachment"); e && this.onShowAttachment(e); } }, { key: "onTabChange", value: function (t) { this.tabName = t || "", this.render(); } }, { key: "onShowAttachment", value: function (t) { if (!t && this.modalView && this.modalView.destroy(), t) {
                    var e = this.model.getAttachment(t);
                    this.modalView = new P.default({ childView: e ? new L.default({ attachment: e, fullScreen: !0 }) : new T.default({ code: 404, message: (0, B.default)("errors.missedAttachment") }), title: e ? e.name || e.source : (0, B.default)("errors.notFound") }), this.modalView.show();
                } } }, { key: "templateContext", value: function () { var t = this, e = this.options.baseUrl; return { cls: this.className, statusName: "status." + this.model.get("status"), links: this.tabs.map(function (n) { return { href: e + "/" + n.id, name: n.name, active: n.id === t.tabName }; }) }; } }, { key: "onStacktraceClick", value: function (t) { this.$(t.currentTarget).closest(".status-details").toggleClass("status-details__expanded"); } }]), e; }(k.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(c.prototype, "onStacktraceClick", [u], (0, d.default)(c.prototype, "onStacktraceClick"), c.prototype), l = c)) || l) || l) || l) || l);
        e.default = U;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s, u, l = n(15), c = r(l), f = n(2), d = r(f), h = n(3), p = r(h), v = n(6), g = r(v), m = n(4), b = r(m), y = n(5), _ = r(y);
        n(372);
        var w = n(373), x = r(w), k = n(9), O = n(27), C = r(O), M = n(37), j = r(M), E = n(8), S = n(183), T = r(S), A = n(383), N = r(A), R = (i = (0, E.className)("attachment"), a = (0, E.behavior)("TooltipBehavior", { position: "bottom" }), o = (0, E.on)("click .attachment__media-container"), i(s = a((u = function (t) { function e() { var t, n, r, i; (0, p.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, b.default)(this, (t = e.__proto__ || (0, d.default)(e)).call.apply(t, [this].concat(o))), r.template = N.default, i = n, (0, b.default)(r, i); } return (0, _.default)(e, t), (0, g.default)(e, [{ key: "initialize", value: function () { this.fullScreen = !!this.options.fullScreen, this.attachment = this.options.attachment, this.attachmentInfo = (0, T.default)(this.attachment.type), this.sourceUrl = "data/attachments/" + this.attachment.source; } }, { key: "onRender", value: function () { if (this.needsFetch() && !this.content)
                    this.loadContent().then(this.render);
                else if ("code" === this.attachmentInfo.type) {
                    var t = this.$(".attachment__code");
                    t.addClass("language-" + this.attachment.type.split("/").pop()), x.default.highlightBlock(t[0]);
                } } }, { key: "onDestroy", value: function () { j.default.setSearch({ attachment: null }); } }, { key: "onImageClick", value: function (t) { this.$(t.currentTarget).hasClass("attachment__media-container_fullscreen") ? this.onDestroy() : j.default.setSearch({ attachment: this.attachment.uid }); } }, { key: "loadContent", value: function () { var t = this; return C.default.ajax(this.sourceUrl, { dataType: "text" }).then(function (e) { var n = t.attachmentInfo.parser; t.content = n(e); }); } }, { key: "needsFetch", value: function () { return "parser" in this.attachmentInfo; } }, { key: "serializeData", value: function () { return { type: this.attachmentInfo.type, content: this.content, sourceUrl: this.sourceUrl, attachment: this.attachment, fullScreen: this.fullScreen }; } }]), e; }(k.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(u.prototype, "onImageClick", [o], (0, c.default)(u.prototype, "onImageClick"), u.prototype), s = u)) || s) || s);
        e.default = R;
    }, function (t, e, n) {
        "use strict";
        function r(t) { switch (t) {
            case "image/bmp":
            case "image/gif":
            case "image/tiff":
            case "image/jpeg":
            case "image/jpg":
            case "image/png":
            case "image/*": return { type: "image", icon: "fa fa-file-image-o" };
            case "text/xml":
            case "application/xml":
            case "application/json":
            case "text/json":
            case "text/yaml":
            case "application/yaml":
            case "application/x-yaml":
            case "text/x-yaml": return { type: "code", icon: "fa fa-file-code-o", parser: function (t) { return t; } };
            case "text/plain":
            case "text/*": return { type: "text", icon: "fa fa-file-text-o", parser: function (t) { return t; } };
            case "text/html": return { type: "html", icon: "fa fa-file-code-o" };
            case "text/csv": return { type: "table", icon: "fa fa-table", parser: function (t) { return (0, i.csvParseRows)(t); } };
            case "text/tab-separated-values": return { type: "table", icon: "fa fa-table", parser: function (t) { return (0, i.tsvParseRows)(t); } };
            case "image/svg+xml": return { type: "svg", icon: "fa fa-file-image-o" };
            case "video/mp4":
            case "video/ogg":
            case "video/webm": return { type: "video", icon: "fa fa-file-video-o" };
            case "text/uri-list": return { type: "uri", icon: "fa fa-list-alt", parser: function (t) { return t.split("\n").map(function (t) { return t.trim(); }).filter(function (t) { return t.length > 0; }).map(function (t) { return { comment: 0 === t.indexOf("#"), text: t }; }); } };
            case "application/x-tar":
            case "application/x-gtar":
            case "application/x-bzip2":
            case "application/gzip":
            case "application/zip": return { type: "archive", icon: "fa fa-file-archive-o" };
            default: return { type: null, icon: "fa fa-file-o" };
        } }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
        var i = n(380);
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s; return t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "testResult.stats.count.parameters", { name: "t", hash: { count: null != (s = null != e ? e.parameters : e) ? s.length : s }, data: o })) + '<span class="step-stats__info_separator">,&nbsp;</span>'; }, 3: function (t, e, i, a, o) { return t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "testResult.stats.count.steps", { name: "t", hash: { count: null != e ? e.stepsCount : e }, data: o })) + '<span class="step-stats__info_separator">,&nbsp;</span>'; }, 5: function (t, e, i, a, o) { return t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "testResult.stats.count.attachments", { name: "t", hash: { count: null != e ? e.attachmentsCount : e }, data: o })) + '<span class="step-stats__info_separator">,&nbsp;</span>'; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression; return '<span class="step-stats__info">\n    <span>' + (null != (s = i.if.call(u, null != (s = null != e ? e.parameters : e) ? s.length : s, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.noop, data: o })) ? s : "") + (null != (s = i.if.call(u, null != e ? e.stepsCount : e, { name: "if", hash: {}, fn: t.program(3, o, 0), inverse: t.noop, data: o })) ? s : "") + (null != (s = i.if.call(u, null != e ? e.attachmentsCount : e, { name: "if", hash: {}, fn: t.program(5, o, 0), inverse: t.noop, data: o })) ? s : "") + '</span>\n    <span class="step-stats__info_time" data-tooltip="' + l(r(n(53)).call(u, null != (s = null != e ? e.time : e) ? s.start : s, { name: "date", hash: {}, data: o })) + " " + l(r(n(34)).call(u, null != (s = null != e ? e.time : e) ? s.start : s, !0, { name: "time", hash: {}, data: o })) + "&nbsp;&ndash;&nbsp;" + l(r(n(34)).call(u, null != (s = null != e ? e.time : e) ? s.stop : s, !0, { name: "time", hash: {}, data: o })) + '">' + l(r(n(39)).call(u, null != (s = null != e ? e.time : e) ? s.duration : s, { name: "duration", hash: {}, data: o })) + "</span>\n</span>\n"; }, useData: !0 }); }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, n, r, i) { var a; return '    <div class="parameters-table">\n' + (null != (a = n.each.call(null != e ? e : t.nullContext || {}, null != e ? e.parameters : e, { name: "each", hash: {}, fn: t.program(2, i, 0), inverse: t.noop, data: i })) ? a : "") + "    </div>\n"; }, 2: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression, l = t.lambda; return '            <div class="' + u(r(n(0)).call(s, "parameters-table", "row", { name: "b", hash: {}, data: o })) + '">\n                <div class="' + u(r(n(0)).call(s, "parameters-table", "cell", { name: "b", hash: { name: !0 }, data: o })) + ' line-ellipsis">' + u(l(null != e ? e.name : e, e)) + '</div>\n                <div class="' + u(r(n(0)).call(s, "parameters-table", "cell", { name: "b", hash: { value: !0 }, data: o })) + ' line-ellipsis">' + u(l(null != e ? e.value : e, e)) + "</div>\n            </div>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return null != (a = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.parameters : e, { name: "if", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : ""; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown"; return new r.SafeString('<span class="fa fa-chevron-right fa-fw text_status_' + t + '"></span>'); };
        var r = n(7);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return Array.isArray(t) ? t : t ? [t] : []; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.makeArray = r;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t) { var e = t.steps, n = t.attachments; return (0, m.makeArray)(e).reduce(function (t, e) { return t.concat(i(e)); }, []).concat((0, m.makeArray)(n)); }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var a = n(2), o = r(a), s = n(3), u = r(s), l = n(6), c = r(l), f = n(4), d = r(f), h = n(5), p = r(h), v = n(16), g = n(14), m = n(187), b = function (t) { function e() { return (0, u.default)(this, e), (0, d.default)(this, (e.__proto__ || (0, o.default)(e)).apply(this, arguments)); } return (0, p.default)(e, t), (0, c.default)(e, [{ key: "parse", value: function (t) { return this.allAttachments = (0, m.makeArray)(t.beforeStages).concat((0, m.makeArray)(t.testStage)).concat((0, m.makeArray)(t.afterStages)).reduce(function (t, e) { return t.concat(i(e)); }, []), t; } }, { key: "getAttachment", value: function (t) { return (0, v.findWhere)(this.allAttachments, { uid: t }); } }, { key: "url", value: function () { return "data/test-cases/" + this.id + ".json"; } }, { key: "idAttribute", get: function () { return "uid"; } }]), e; }(g.Model);
        e.default = b;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t, e, n, r) { e && e[n] && (t[n] = r(t[n], e[n])); }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var a = n(29), o = r(a), s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v), m = n(14), b = n(16), y = n(40), _ = function (t) { function e() { return (0, c.default)(this, e), (0, p.default)(this, (e.__proto__ || (0, u.default)(e)).apply(this, arguments)); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "initialize", value: function (t, e) { var n = e.url; this.url = n; } }, { key: "findLeaf", value: function (t, e) { return (0, b.findWhere)(this.allResults, { parentUid: t, uid: e }); } }, { key: "getFlattenTestResults", value: function (t) { var e = this; return (0, b.flatten)(t.map(function (t) { return t.children ? e.getFlattenTestResults(t.children) : t; })); } }, { key: "parse", value: function (t) { var e = t.uid, n = t.children, r = n || []; return this.uid = e, this.allResults = this.getFlattenTestResults(r), this.allNodes = r, this.time = this.calculateTime(this.allResults), this.statistic = this.calculateStatistic(this.allResults), r; } }, { key: "applyFilterAndSorting", value: function (t, e) { var n = this.getFilteredAndSortedChildren(this.allNodes, t, e); this.reset(n), this.testResults = this.getFlattenTestResults(n); } }, { key: "getFilteredAndSortedChildren", value: function (t, e, n) { var r = this; return this.calculateOrder(t).map(function (t) { if (t.children) {
                    var i = r.getFilteredAndSortedChildren(t.children, e, n);
                    return (0, o.default)({}, t, { children: i, statistic: r.calculateStatistic(i), time: r.calculateTime(i) });
                } return t; }).filter(e).sort(n); } }, { key: "getFirstTestResult", value: function () { if (this.testResults.length > 0)
                    return this.testResults[0]; } }, { key: "getLastTestResult", value: function () { if (this.testResults.length > 0)
                    return this.testResults[this.testResults.length - 1]; } }, { key: "getNextTestResult", value: function (t) { var e = this.testResults.findIndex(function (e) { return e.uid === t; }); if (e < this.testResults.length - 1)
                    return this.testResults[e + 1]; } }, { key: "getPreviousTestResult", value: function (t) { var e = this.testResults.findIndex(function (e) { return e.uid === t; }); if (e > 0)
                    return this.testResults[e - 1]; } }, { key: "calculateOrder", value: function (t) { var e = this, n = 0; return t.forEach(function (t) { t.children ? e.calculateOrder(t.children) : t.order = ++n; }), t; } }, { key: "calculateStatistic", value: function (t) { var e = {}; return y.values.forEach(function (t) { e[t] = 0; }), t.forEach(function (t) { t.children ? y.values.forEach(function (n) { e[n] += t.statistic ? t.statistic[n] : 0; }) : e[t.status]++; }), e; } }, { key: "calculateTime", value: function (t) { var e = { maxDuration: Number.MIN_VALUE, minDuration: Number.MAX_VALUE, sumDuration: 0, duration: 0, start: Number.MAX_VALUE, stop: Number.MIN_VALUE }; return t.forEach(function (t) { t.children ? (i(e, t.time, "maxDuration", Math.max), i(e, t.time, "minDuration", Math.min), i(e, t.time, "sumDuration", function (t, e) { return t + e; })) : t.time && isFinite(t.time.duration) && (e.maxDuration = Math.max(e.maxDuration, t.time.duration), e.minDuration = Math.min(e.minDuration, t.time.duration), e.sumDuration = e.sumDuration + t.time.duration), i(e, t.time, "start", Math.min), i(e, t.time, "stop", Math.max), e.duration = e.stop - e.start; }), e; } }]), e; }(m.Collection);
        e.default = _;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.SEARCH_QUERY_KEY = void 0;
        var i, a, o, s, u = n(15), l = r(u), c = n(2), f = r(c), d = n(3), h = r(d), p = n(6), v = r(p), g = n(4), m = r(g), b = n(5), y = r(b);
        n(414);
        var _ = n(8), w = n(415), x = r(w), k = n(9), O = e.SEARCH_QUERY_KEY = "searchQuery", C = (i = (0, _.className)("search"), a = (0, _.on)("input input"), i((s = function (t) { function e() { var t, n, r, i; (0, h.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, m.default)(this, (t = e.__proto__ || (0, f.default)(e)).call.apply(t, [this].concat(o))), r.template = x.default, i = n, (0, m.default)(r, i); } return (0, y.default)(e, t), (0, v.default)(e, [{ key: "initialize", value: function (t) { var e = t.state; this.state = e; } }, { key: "onRender", value: function () { this.$("input").val(this.state.get(O)); } }, { key: "onChangeSorting", value: function (t) { this.state.set(O, t.target.value); } }, { key: "close", value: function () { this.state.set(O, ""); } }]), e; }(k.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(s.prototype, "onChangeSorting", [a], (0, l.default)(s.prototype, "onChangeSorting"), s.prototype), o = s)) || o);
        e.default = C;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o, s, u) { var l, c = t.escapeExpression, f = null != e ? e : t.nullContext || {}; return '    <div class="node">\n        <div class="node__title long-line" data-uid="' + c(t.lambda(null != e ? e.uid : e, e)) + '">\n            <span class="node__arrow block__arrow">' + c(r(n(119)).call(f, { name: "angle", hash: {}, data: o })) + "</span>\n" + (null != (l = i.if.call(f, null != e ? e.name : e, { name: "if", hash: {}, fn: t.program(2, o, 0, s, u), inverse: t.program(4, o, 0, s, u), data: o })) ? l : "") + '            <div class="tree__strut">&nbsp</div>\n            <span class="node__stats">\n                ' + c(r(n(423)).call(f, null != e ? e.statistic : e, { name: "statistic-bar", hash: {}, data: o })) + '\n            </span>\n        </div>\n\n        <div class="node__children">\n' + (null != (l = i.if.call(f, null != e ? e.showGroupInfo : e, { name: "if", hash: {}, fn: t.program(6, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + (null != (l = i.each.call(f, null != e ? e.children : e, { name: "each", hash: {}, fn: t.program(8, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + "        </div>\n    </div>\n"; }, 2: function (t, e, n, r, i) { return '                <div class="node__name">\n                    ' + t.escapeExpression(t.lambda(null != e ? e.name : e, e)) + "\n                </div>\n"; }, 4: function (t, e, i, a, o) { return "                " + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "component.tree.unknown", { name: "t", hash: {}, data: o })) + "\n"; }, 6: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '                <div class="node">\n                    <div class="node__info long-line" data-uid="' + t.escapeExpression(t.lambda(null != e ? e.uid : e, e)) + '">\n                        <span class="fa fa-clock-o"></span>\n' + (null != (s = t.invokePartial(n(123), e, { name: "tree-time", hash: { tooltip: r(n(1)).call(u, "component.tree.time.total.tooltip", { name: "t", hash: {}, data: o }), name: r(n(1)).call(u, "component.tree.time.total.name", { name: "t", hash: {}, data: o }), value: null != (s = null != e ? e.time : e) ? s.duration : s }, data: o, indent: "                        ", helpers: i, partials: a, decorators: t.decorators })) ? s : "") + (null != (s = t.invokePartial(n(123), e, { name: "tree-time", hash: { tooltip: r(n(1)).call(u, "component.tree.time.max.tooltip", { name: "t", hash: {}, data: o }), name: r(n(1)).call(u, "component.tree.time.max.name", { name: "t", hash: {}, data: o }), value: null != (s = null != e ? e.time : e) ? s.maxDuration : s }, data: o, indent: "                        ", helpers: i, partials: a, decorators: t.decorators })) ? s : "") + (null != (s = t.invokePartial(n(123), e, { name: "tree-time", hash: { tooltip: r(n(1)).call(u, "component.tree.time.sum.tooltip", { name: "t", hash: {}, data: o }), name: r(n(1)).call(u, "component.tree.time.sum.name", { name: "t", hash: {}, data: o }), value: null != (s = null != e ? e.time : e) ? s.sumDuration : s }, data: o, indent: "                        ", helpers: i, partials: a, decorators: t.decorators })) ? s : "") + "                    </div>\n                </div>\n"; }, 8: function (t, e, r, i, a, o, s) { var u; return null != (u = t.invokePartial(n(191), e, { name: "tree-group", hash: { testResultTab: null != s[1] ? s[1].testResultTab : s[1], tabName: null != s[1] ? s[1].tabName : s[1], showGroupInfo: null != s[1] ? s[1].showGroupInfo : s[1], baseUrl: null != s[1] ? s[1].baseUrl : s[1] }, data: a, helpers: r, partials: i, decorators: t.decorators })) ? u : ""; }, 10: function (t, e, r, i, a) { var o; return null != (o = t.invokePartial(n(425), e, { name: "tree-leaf", hash: { testResultTab: null != e ? e.testResultTab : e, baseUrl: null != e ? e.baseUrl : e }, data: a, helpers: r, partials: i, decorators: t.decorators })) ? o : ""; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i, a, o) { var s; return null != (s = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.children : e, { name: "if", hash: {}, fn: t.program(1, i, 0, a, o), inverse: t.program(10, i, 0, a, o), data: i })) ? s : ""; }, usePartial: !0, useData: !0, useDepths: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t, e) { return t.order < e.order ? -1 : 1; }
        function i(t, e) { return t.name.toLowerCase() < e.name.toLowerCase() ? -1 : 1; }
        function a(t, e) { return t.time && t.time.duration && e.time && e.time.duration && t.time.duration < e.time.duration ? -1 : 1; }
        function o(t, e) { return t.time && t.time.maxDuration && e.time && e.time.maxDuration && t.time.maxDuration < e.time.maxDuration ? -1 : 1; }
        function s(t, e) { return f.values.indexOf(t.status) > f.values.indexOf(e.status) ? -1 : 1; }
        function u(t, e) { return f.values.reduce(function (n, r) { return t.statistic[r] !== e.statistic[r] && 0 === n ? t.statistic[r] - e.statistic[r] : n; }, 0); }
        function l(t, e, n, r, i) { return t.children && !e.children ? -1 : !t.children && e.children ? 1 : t.children && e.children ? i * r(t, e) : t.children || e.children ? 0 : i * n(t, e); }
        function c(t) { var e = t.sorter, n = t.ascending, c = n ? 1 : -1; switch (e) {
            case "sorter.order": return function (t, e) { return l(t, e, r, i, c); };
            case "sorter.name": return function (t, e) { return l(t, e, i, i, c); };
            case "sorter.duration": return function (t, e) { return l(t, e, a, o, c); };
            case "sorter.status": return function (t, e) { return l(t, e, s, u, c); };
            default: return 0;
        } }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = c;
        var f = n(40);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function (e) { return e.children ? e.children.length > 0 : t[e.status]; }; }
        function i(t, e) { return function (n) { return n.children ? n.children.length > 0 : t <= n.time.duration && n.time.duration <= e; }; }
        function a(t) { return t = t && t.toLowerCase() || "", function (e) { return !t || e.name.toLowerCase().indexOf(t) > -1 || e.children && e.children.some(a(t)); }; }
        function o() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]; return function (t) { var n = !0; return e.forEach(function (e) { n = n && e(t); }), n; }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.byStatuses = r, e.byDuration = i, e.byText = a, e.mix = o;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(125), s = r(o), u = n(435), l = r(u), c = n(2), f = r(c), d = n(3), h = r(d), p = n(6), v = r(p), g = n(4), m = r(g), b = n(5), y = r(b);
        n(442);
        var _ = n(9), w = n(27), x = r(w), k = n(443), O = r(k), C = n(8), M = n(63), j = r(M), E = n(84), S = n(444), T = function (t) { return '<div class="widget island" data-id="' + t + '">\n    <div class="widget__handle">\n        <span class="draggable-icon"></span>\n    </div>\n    <div class="widget__body"></div>\n</div>'; }, A = (i = (0, C.className)("widgets-grid"))(a = function (t) { function e() { var t, n, r, i; (0, h.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, m.default)(this, (t = e.__proto__ || (0, f.default)(e)).call.apply(t, [this].concat(o))), r.template = function () { return ""; }, i = n, (0, m.default)(r, i); } return (0, y.default)(e, t), (0, v.default)(e, [{ key: "initialize", value: function () { this.widgets = j.default.widgets[this.options.tabName], this.settings = this.options.settings || (0, E.getSettingsForWidgetGridPlugin)(this.options.tabName); } }, { key: "onRender", value: function () { var t = this; this.getWidgetsArrangement().map(function (e) { return e.map(function (e) { return [e, t.widgets[e].widget, t.widgets[e].model]; }); }).forEach(function (e) { var n = (0, x.default)('<div class="widgets-grid__col"></div>'); t.$el.append(n), e.forEach(function (e) { var r = (0, l.default)(e, 3), i = r[0], a = r[1], o = r[2]; t.addWidget(n, i, a, o); }); }), this.$(".widgets-grid__col").each(function (e, n) { return new O.default(n, { group: "widgets", ghostClass: "widget_ghost", handle: ".widget__handle", onEnd: t.saveWidgetsArrangement.bind(t) }); }); } }, { key: "getWidgetsArrangement", value: function () { var t = this, e = this.settings.getWidgetsArrangement(), n = e.map(function (e) { return e.filter(function (e) { return t.widgets[e]; }); }); return (0, s.default)(this.widgets).forEach(function (t) { if (n.every(function (e) { return -1 === e.indexOf(t); })) {
                    n.reduce(function (t, e) { return e.length < t.length ? e : t; }).push(t);
                } }), n; } }, { key: "saveWidgetsArrangement", value: function () { this.settings.setWidgetsArrangement(this.$(".widgets-grid__col").toArray().map(function (t) { return (0, x.default)(t).find(".widget").toArray().map(function (t) { return (0, x.default)(t).data("id"); }); })); } }, { key: "addWidget", value: function (t, e, n, r) { var i = (0, x.default)(T(e)); t.append(i), this.addRegion(e, { el: i.find(".widget__body") }); var a = new r({}, { name: e }); (0, S.fetchAndShow)(this, e, a, new n({ model: a })); } }]), e; }(_.View)) || a;
        e.default = A;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(464);
        n.d(e, "axisTop", function () { return r.d; }), n.d(e, "axisRight", function () { return r.c; }), n.d(e, "axisBottom", function () { return r.a; }), n.d(e, "axisLeft", function () { return r.b; });
    }, function (t, e, n) {
        "use strict";
        var r = function (t) { return function () { return this.matches(t); }; };
        if ("undefined" != typeof document) {
            var i = document.documentElement;
            if (!i.matches) {
                var a = i.webkitMatchesSelector || i.msMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector;
                r = function (t) { return function () { return a.call(this, t); }; };
            }
        }
        e.a = r;
    }, function (t, e, n) {
        "use strict";
        function r() { return []; }
        e.a = function (t) { return null == t ? r : function () { return this.querySelectorAll(t); }; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e; }
        e.a = r;
        var i = n(199), a = n(25);
        e.b = function () { return new a.a(this._enter || this._groups.map(i.a), this._parents); }, r.prototype = { constructor: r, appendChild: function (t) { return this._parent.insertBefore(t, this._next); }, insertBefore: function (t, e) { return this._parent.insertBefore(t, e); }, querySelector: function (t) { return this._parent.querySelector(t); }, querySelectorAll: function (t) { return this._parent.querySelectorAll(t); } };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return new Array(t.length); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function () { this.style.removeProperty(t); }; }
        function i(t, e, n) { return function () { this.style.setProperty(t, e, n); }; }
        function a(t, e, n) { return function () { var r = e.apply(this, arguments); null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n); }; }
        function o(t, e) { return t.style.getPropertyValue(e) || Object(s.a)(t).getComputedStyle(t, null).getPropertyValue(e); }
        e.b = o;
        var s = n(132);
        e.a = function (t, e, n) { return arguments.length > 1 ? this.each((null == e ? r : "function" == typeof e ? a : i)(t, e, null == n ? "" : n)) : o(this.node(), t); };
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return o; }), n.d(e, "a", function () { return s; });
        var r = n(54), i = n(202), a = Object(i.a)(r.a), o = a.right, s = a.left;
        e.c = o;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function (e, n) { return Object(i.a)(t(e), n); }; }
        var i = n(54);
        e.a = function (t) { return 1 === t.length && (t = r(t)), { left: function (e, n, r, i) { for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
                var a = r + i >>> 1;
                t(e[a], n) < 0 ? r = a + 1 : i = a;
            } return r; }, right: function (e, n, r, i) { for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
                var a = r + i >>> 1;
                t(e[a], n) > 0 ? i = a : r = a + 1;
            } return r; } }; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return [t, e]; }
        e.b = r, e.a = function (t, e) { null == e && (e = r); for (var n = 0, i = t.length - 1, a = t[0], o = new Array(i < 0 ? 0 : i); n < i;)
            o[n] = e(a, a = t[++n]); return o; };
    }, function (t, e, n) {
        "use strict";
        var r = n(205);
        e.a = function (t, e) { var n = Object(r.a)(t, e); return n ? Math.sqrt(n) : n; };
    }, function (t, e, n) {
        "use strict";
        var r = n(66);
        e.a = function (t, e) { var n, i, a = t.length, o = 0, s = -1, u = 0, l = 0; if (null == e)
            for (; ++s < a;)
                isNaN(n = Object(r.a)(t[s])) || (i = n - u, u += i / ++o, l += i * (n - u));
        else
            for (; ++s < a;)
                isNaN(n = Object(r.a)(e(t[s], s, t))) || (i = n - u, u += i / ++o, l += i * (n - u)); if (o > 1)
            return l / (o - 1); };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { var n, r, i, a = t.length, o = -1; if (null == e) {
            for (; ++o < a;)
                if (null != (n = t[o]) && n >= n)
                    for (r = i = n; ++o < a;)
                        null != (n = t[o]) && (r > n && (r = n), i < n && (i = n));
        }
        else
            for (; ++o < a;)
                if (null != (n = e(t[o], o, t)) && n >= n)
                    for (r = i = n; ++o < a;)
                        null != (n = e(t[o], o, t)) && (r > n && (r = n), i < n && (i = n)); return [r, i]; };
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return i; }), n.d(e, "a", function () { return a; });
        var r = Array.prototype, i = r.slice, a = r.map;
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e, n) { t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n; for (var r = -1, i = 0 | Math.max(0, Math.ceil((e - t) / n)), a = new Array(i); ++r < i;)
            a[r] = t + r * n; return a; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n) { var r = (e - t) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), u = r / Math.pow(10, i); return i >= 0 ? (u >= a ? 10 : u >= o ? 5 : u >= s ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (u >= a ? 10 : u >= o ? 5 : u >= s ? 2 : 1); }
        function i(t, e, n) { var r = Math.abs(e - t) / Math.max(0, n), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), u = r / i; return u >= a ? i *= 10 : u >= o ? i *= 5 : u >= s && (i *= 2), e < t ? -i : i; }
        e.b = r, e.c = i;
        var a = Math.sqrt(50), o = Math.sqrt(10), s = Math.sqrt(2);
        e.a = function (t, e, n) { var i, a, o, s, u = -1; if (e = +e, t = +t, n = +n, t === e && n > 0)
            return [t]; if ((i = e < t) && (a = t, t = e, e = a), 0 === (s = r(t, e, n)) || !isFinite(s))
            return []; if (s > 0)
            for (t = Math.ceil(t / s), e = Math.floor(e / s), o = new Array(a = Math.ceil(e - t + 1)); ++u < a;)
                o[u] = (t + u) * s;
        else
            for (t = Math.floor(t * s), e = Math.ceil(e * s), o = new Array(a = Math.ceil(t - e + 1)); ++u < a;)
                o[u] = (t - u) / s; return i && o.reverse(), o; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return Math.ceil(Math.log(t.length) / Math.LN2) + 1; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { var n, r, i = t.length, a = -1; if (null == e) {
            for (; ++a < i;)
                if (null != (n = t[a]) && n >= n)
                    for (r = n; ++a < i;)
                        null != (n = t[a]) && r > n && (r = n);
        }
        else
            for (; ++a < i;)
                if (null != (n = e(t[a], a, t)) && n >= n)
                    for (r = n; ++a < i;)
                        null != (n = e(t[a], a, t)) && r > n && (r = n); return r; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t.length; }
        var i = n(211);
        e.a = function (t) { if (!(o = t.length))
            return []; for (var e = -1, n = Object(i.a)(t, r), a = new Array(n); ++e < n;)
            for (var o, s = -1, u = a[e] = new Array(o); ++s < o;)
                u[s] = t[s][e]; return a; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { function e(e) { var r = e + "", i = n.get(r); if (!i) {
            if (u !== o)
                return u;
            n.set(r, i = s.push(e));
        } return t[(i - 1) % t.length]; } var n = Object(i.a)(), s = [], u = o; return t = null == t ? [] : a.b.call(t), e.domain = function (t) { if (!arguments.length)
            return s.slice(); s = [], n = Object(i.a)(); for (var r, a, o = -1, u = t.length; ++o < u;)
            n.has(a = (r = t[o]) + "") || n.set(a, s.push(r)); return e; }, e.range = function (n) { return arguments.length ? (t = a.b.call(n), e) : t.slice(); }, e.unknown = function (t) { return arguments.length ? (u = t, e) : u; }, e.copy = function () { return r().domain(s).range(t).unknown(u); }, e; }
        n.d(e, "b", function () { return o; }), e.a = r;
        var i = n(518), a = n(48), o = { name: "implicit" };
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return r; }), n.d(e, "b", function () { return i; });
        var r = Math.PI / 180, i = 180 / Math.PI;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function (e) { var n, r, a = e.length, o = new Array(a), s = new Array(a), u = new Array(a); for (n = 0; n < a; ++n)
            r = Object(i.f)(e[n]), o[n] = r.r || 0, s[n] = r.g || 0, u[n] = r.b || 0; return o = t(o), s = t(s), u = t(u), r.opacity = 1, function (t) { return r.r = o(t), r.g = s(t), r.b = u(t), r + ""; }; }; }
        n.d(e, "b", function () { return u; }), n.d(e, "c", function () { return l; });
        var i = n(35), a = n(138), o = n(216), s = n(68);
        e.a = function t(e) { function n(t, e) { var n = r((t = Object(i.f)(t)).r, (e = Object(i.f)(e)).r), a = r(t.g, e.g), o = r(t.b, e.b), u = Object(s.a)(t.opacity, e.opacity); return function (e) { return t.r = n(e), t.g = a(e), t.b = o(e), t.opacity = u(e), t + ""; }; } var r = Object(s.b)(e); return n.gamma = t, n; }(1);
        var u = r(a.b), l = r(o.a);
    }, function (t, e, n) {
        "use strict";
        var r = n(138);
        e.a = function (t) { var e = t.length; return function (n) { var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e), a = t[(i + e - 1) % e], o = t[i % e], s = t[(i + 1) % e], u = t[(i + 2) % e]; return Object(r.a)((n - i / e) * e, a, o, s, u); }; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return function () { return t; }; };
    }, function (t, e, n) {
        "use strict";
        var r = n(135);
        e.a = function (t, e) { var n, i = e ? e.length : 0, a = t ? Math.min(i, t.length) : 0, o = new Array(a), s = new Array(i); for (n = 0; n < a; ++n)
            o[n] = Object(r.a)(t[n], e[n]); for (; n < i; ++n)
            s[n] = e[n]; return function (t) { for (n = 0; n < a; ++n)
            s[n] = o[n](t); return s; }; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { var n = new Date; return t = +t, e -= t, function (r) { return n.setTime(t + e * r), n; }; };
    }, function (t, e, n) {
        "use strict";
        var r = n(135);
        e.a = function (t, e) { var n, i = {}, a = {}; null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}); for (n in e)
            n in t ? i[n] = Object(r.a)(t[n], e[n]) : a[n] = e[n]; return function (t) { for (n in i)
            a[n] = i[n](t); return a; }; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function () { return t; }; }
        function i(t) { return function (e) { return t(e) + ""; }; }
        var a = n(88), o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, s = new RegExp(o.source, "g");
        e.a = function (t, e) { var n, u, l, c = o.lastIndex = s.lastIndex = 0, f = -1, d = [], h = []; for (t += "", e += ""; (n = o.exec(t)) && (u = s.exec(e));)
            (l = u.index) > c && (l = e.slice(c, l), d[f] ? d[f] += l : d[++f] = l), (n = n[0]) === (u = u[0]) ? d[f] ? d[f] += u : d[++f] = u : (d[++f] = null, h.push({ i: f, x: Object(a.a)(n, u) })), c = s.lastIndex; return c < e.length && (l = e.slice(c), d[f] ? d[f] += l : d[++f] = l), d.length < 2 ? h[0] ? i(h[0].x) : r(e) : (e = h.length, function (t) { for (var n, r = 0; r < e; ++r)
            d[(n = h[r]).i] = n.x(t); return d.join(""); }); };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return +t; };
    }, function (t, e, n) {
        "use strict";
        var r = n(538);
        n.d(e, "a", function () { return r.a; }), n.d(e, "b", function () { return r.b; });
        var i = (n(224), n(225));
        n.d(e, "c", function () { return i.a; });
        var a = n(544);
        n.d(e, "d", function () { return a.a; });
        var o = n(545);
        n.d(e, "e", function () { return o.a; });
        var s = n(546);
        n.d(e, "f", function () { return s.a; });
    }, function (t, e, n) {
        "use strict";
        var r = n(90), i = n(539), a = n(540), o = n(225), s = n(226), u = n(227), l = n(543), c = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
        e.a = function (t) { function e(t) { function e(t) { var e, a, o, s = _, d = w; if ("c" === y)
            d = x(t) + d, t = "";
        else {
            t = +t;
            var v = t < 0;
            if (t = x(Math.abs(t), b), v && 0 == +t && (v = !1), s = (v ? "(" === i ? i : "-" : "-" === i || "(" === i ? "" : i) + s, d = d + ("s" === y ? c[8 + u.b / 3] : "") + (v && "(" === i ? ")" : ""), k)
                for (e = -1, a = t.length; ++e < a;)
                    if (48 > (o = t.charCodeAt(e)) || o > 57) {
                        d = (46 === o ? h + t.slice(e + 1) : t.slice(e)) + d, t = t.slice(0, e);
                        break;
                    }
        } m && !l && (t = f(t, 1 / 0)); var O = s.length + t.length + d.length, C = O < g ? new Array(g - O + 1).join(n) : ""; switch (m && l && (t = f(C + t, C.length ? g - d.length : 1 / 0), C = ""), r) {
            case "<":
                t = s + t + d + C;
                break;
            case "=":
                t = s + C + t + d;
                break;
            case "^":
                t = C.slice(0, O = C.length >> 1) + s + t + d + C.slice(O);
                break;
            default: t = C + s + t + d;
        } return p(t); } t = Object(o.a)(t); var n = t.fill, r = t.align, i = t.sign, a = t.symbol, l = t.zero, g = t.width, m = t.comma, b = t.precision, y = t.type, _ = "$" === a ? d[0] : "#" === a && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", w = "$" === a ? d[1] : /[%p]/.test(y) ? v : "", x = s.a[y], k = !y || /[defgprs%]/.test(y); return b = null == b ? y ? 6 : 12 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b)), e.toString = function () { return t + ""; }, e; } function n(t, n) { var i = e((t = Object(o.a)(t), t.type = "f", t)), a = 3 * Math.max(-8, Math.min(8, Math.floor(Object(r.a)(n) / 3))), s = Math.pow(10, -a), u = c[8 + a / 3]; return function (t) { return i(s * t) + u; }; } var f = t.grouping && t.thousands ? Object(i.a)(t.grouping, t.thousands) : l.a, d = t.currency, h = t.decimal, p = t.numerals ? Object(a.a)(t.numerals) : l.a, v = t.percent || "%"; return { format: e, formatPrefix: n }; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return new i(t); }
        function i(t) { if (!(e = o.exec(t)))
            throw new Error("invalid format: " + t); var e, n = e[1] || " ", r = e[2] || ">", i = e[3] || "-", s = e[4] || "", u = !!e[5], l = e[6] && +e[6], c = !!e[7], f = e[8] && +e[8].slice(1), d = e[9] || ""; "n" === d ? (c = !0, d = "g") : a.a[d] || (d = ""), (u || "0" === n && "=" === r) && (u = !0, n = "0", r = "="), this.fill = n, this.align = r, this.sign = i, this.symbol = s, this.zero = u, this.width = l, this.comma = c, this.precision = f, this.type = d; }
        e.a = r;
        var a = n(226), o = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
        r.prototype = i.prototype, i.prototype.toString = function () { return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type; };
    }, function (t, e, n) {
        "use strict";
        var r = n(541), i = n(227), a = n(542);
        e.a = { "": r.a, "%": function (t, e) { return (100 * t).toFixed(e); }, b: function (t) { return Math.round(t).toString(2); }, c: function (t) { return t + ""; }, d: function (t) { return Math.round(t).toString(10); }, e: function (t, e) { return t.toExponential(e); }, f: function (t, e) { return t.toFixed(e); }, g: function (t, e) { return t.toPrecision(e); }, o: function (t) { return Math.round(t).toString(8); }, p: function (t, e) { return Object(a.a)(100 * t, e); }, r: a.a, s: i.a, X: function (t) { return Math.round(t).toString(16).toUpperCase(); }, x: function (t) { return Math.round(t).toString(16); } };
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return r; });
        var r, i = n(140);
        e.a = function (t, e) { var n = Object(i.a)(t, e); if (!n)
            return t + ""; var a = n[0], o = n[1], s = o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1, u = a.length; return s === u ? a : s > u ? a + new Array(s - u + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Object(i.a)(t, Math.max(0, e + s - 1))[0]; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { t = t.slice(); var n, r = 0, i = t.length - 1, a = t[r], o = t[i]; return o < a && (n = r, r = i, i = n, n = a, a = o, o = n), t[r] = e.floor(a), t[i] = e.ceil(o), t; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return new Date(t); }
        function i(t) { return t instanceof Date ? +t : +new Date(+t); }
        function a(t, e, n, u, l, _, w, x, k) { function O(r) { return (w(r) < r ? S : _(r) < r ? T : l(r) < r ? A : u(r) < r ? N : e(r) < r ? n(r) < r ? R : P : t(r) < r ? D : L)(r); } function C(e, n, r, i) { if (null == e && (e = 10), "number" == typeof e) {
            var a = Math.abs(r - n) / e, s = Object(o.bisector)(function (t) { return t[2]; }).right(V, a);
            s === V.length ? (i = Object(o.tickStep)(n / y, r / y, e), e = t) : s ? (s = V[a / V[s - 1][2] < V[s][2] / a ? s - 1 : s], i = s[1], e = s[0]) : (i = Math.max(Object(o.tickStep)(n, r, e), 1), e = x);
        } return null == i ? e : e.every(i); } var M = Object(f.b)(f.c, s.interpolateNumber), j = M.invert, E = M.domain, S = k(".%L"), T = k(":%S"), A = k("%I:%M"), N = k("%I %p"), R = k("%a %d"), P = k("%b %d"), D = k("%B"), L = k("%Y"), V = [[w, 1, h], [w, 5, 5 * h], [w, 15, 15 * h], [w, 30, 30 * h], [_, 1, p], [_, 5, 5 * p], [_, 15, 15 * p], [_, 30, 30 * p], [l, 1, v], [l, 3, 3 * v], [l, 6, 6 * v], [l, 12, 12 * v], [u, 1, g], [u, 2, 2 * g], [n, 1, m], [e, 1, b], [e, 3, 3 * b], [t, 1, y]]; return M.invert = function (t) { return new Date(j(t)); }, M.domain = function (t) { return arguments.length ? E(c.a.call(t, i)) : E().map(r); }, M.ticks = function (t, e) { var n, r = E(), i = r[0], a = r[r.length - 1], o = a < i; return o && (n = i, i = a, a = n), n = C(t, i, a, e), n = n ? n.range(i, a + 1) : [], o ? n.reverse() : n; }, M.tickFormat = function (t, e) { return null == e ? O : k(e); }, M.nice = function (t, e) { var n = E(); return (t = C(t, n[0], n[n.length - 1], e)) ? E(Object(d.a)(n, t)) : M; }, M.copy = function () { return Object(f.a)(M, a(t, e, n, u, l, _, w, x, k)); }, M; }
        e.a = a;
        var o = n(22), s = n(23), u = n(141), l = n(230), c = n(48), f = n(89), d = n(228), h = 1e3, p = 60 * h, v = 60 * p, g = 24 * v, m = 7 * g, b = 30 * g, y = 365 * g;
        e.b = function () { return a(u.k, u.f, u.j, u.a, u.b, u.d, u.g, u.c, l.a).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]); };
    }, function (t, e, n) {
        "use strict";
        var r = n(142);
        n.d(e, "a", function () { return r.a; }), n.d(e, "b", function () { return r.b; });
        n(231), n(232), n(566);
    }, function (t, e, n) {
        "use strict";
        function r(t) { if (0 <= t.y && t.y < 100) {
            var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return e.setFullYear(t.y), e;
        } return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L); }
        function i(t) { if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y), e;
        } return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L)); }
        function a(t) { return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 }; }
        function o(t) { function e(t, e) { return function (n) { var r, i, a, o = [], s = -1, u = 0, l = t.length; for (n instanceof Date || (n = new Date(+n)); ++s < l;)
            37 === t.charCodeAt(s) && (o.push(t.slice(u, s)), null != (i = pt[r = t.charAt(++s)]) ? r = t.charAt(++s) : i = "e" === r ? " " : "0", (a = e[r]) && (r = a(n, i)), o.push(r), u = s + 1); return o.push(t.slice(u, s)), o.join(""); }; } function n(t, e) { return function (n) { var r, s, u = a(1900), l = o(u, t, n += "", 0); if (l != n.length)
            return null; if ("Q" in u)
            return new Date(u.Q); if ("p" in u && (u.H = u.H % 12 + 12 * u.p), "V" in u) {
            if (u.V < 1 || u.V > 53)
                return null;
            "w" in u || (u.w = 1), "Z" in u ? (r = i(a(u.y)), s = r.getUTCDay(), r = s > 4 || 0 === s ? ht.p.ceil(r) : Object(ht.p)(r), r = ht.l.offset(r, 7 * (u.V - 1)), u.y = r.getUTCFullYear(), u.m = r.getUTCMonth(), u.d = r.getUTCDate() + (u.w + 6) % 7) : (r = e(a(u.y)), s = r.getDay(), r = s > 4 || 0 === s ? ht.e.ceil(r) : Object(ht.e)(r), r = ht.a.offset(r, 7 * (u.V - 1)), u.y = r.getFullYear(), u.m = r.getMonth(), u.d = r.getDate() + (u.w + 6) % 7);
        }
        else
            ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), s = "Z" in u ? i(a(u.y)).getUTCDay() : e(a(u.y)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + 7 * u.W - (s + 5) % 7 : u.w + 7 * u.U - (s + 6) % 7); return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, i(u)) : e(u); }; } function o(t, e, n, r) { for (var i, a, o = 0, s = e.length, u = n.length; o < s;) {
            if (r >= u)
                return -1;
            if (37 === (i = e.charCodeAt(o++))) {
                if (i = e.charAt(o++), !(a = Jt[i in pt ? e.charAt(o++) : i]) || (r = a(t, n, r)) < 0)
                    return -1;
            }
            else if (i != n.charCodeAt(r++))
                return -1;
        } return r; } function s(t, e, n) { var r = zt.exec(e.slice(n)); return r ? (t.p = It[r[0].toLowerCase()], n + r[0].length) : -1; } function u(t, e, n) { var r = Ht.exec(e.slice(n)); return r ? (t.w = qt[r[0].toLowerCase()], n + r[0].length) : -1; } function vt(t, e, n) { var r = Ut.exec(e.slice(n)); return r ? (t.w = Ft[r[0].toLowerCase()], n + r[0].length) : -1; } function gt(t, e, n) { var r = Wt.exec(e.slice(n)); return r ? (t.m = Yt[r[0].toLowerCase()], n + r[0].length) : -1; } function mt(t, e, n) { var r = $t.exec(e.slice(n)); return r ? (t.m = Gt[r[0].toLowerCase()], n + r[0].length) : -1; } function bt(t, e, n) { return o(t, At, e, n); } function yt(t, e, n) { return o(t, Nt, e, n); } function _t(t, e, n) { return o(t, Rt, e, n); } function wt(t) { return Lt[t.getDay()]; } function xt(t) { return Dt[t.getDay()]; } function kt(t) { return Bt[t.getMonth()]; } function Ot(t) { return Vt[t.getMonth()]; } function Ct(t) { return Pt[+(t.getHours() >= 12)]; } function Mt(t) { return Lt[t.getUTCDay()]; } function jt(t) { return Dt[t.getUTCDay()]; } function Et(t) { return Bt[t.getUTCMonth()]; } function St(t) { return Vt[t.getUTCMonth()]; } function Tt(t) { return Pt[+(t.getUTCHours() >= 12)]; } var At = t.dateTime, Nt = t.date, Rt = t.time, Pt = t.periods, Dt = t.days, Lt = t.shortDays, Vt = t.months, Bt = t.shortMonths, zt = l(Pt), It = c(Pt), Ut = l(Dt), Ft = c(Dt), Ht = l(Lt), qt = c(Lt), $t = l(Vt), Gt = c(Vt), Wt = l(Bt), Yt = c(Bt), Xt = { a: wt, A: xt, b: kt, B: Ot, c: null, d: T, e: T, f: D, H: A, I: N, j: R, L: P, m: L, M: V, p: Ct, Q: ft, s: dt, S: B, u: z, U: I, V: U, w: F, W: H, x: null, X: null, y: q, Y: $, Z: G, "%": ct }, Kt = { a: Mt, A: jt, b: Et, B: St, c: null, d: W, e: W, f: Z, H: Y, I: X, j: K, L: J, m: Q, M: tt, p: Tt, Q: ft, s: dt, S: et, u: nt, U: rt, V: it, w: at, W: ot, x: null, X: null, y: st, Y: ut, Z: lt, "%": ct }, Jt = { a: u, A: vt, b: gt, B: mt, c: bt, d: _, e: _, f: M, H: x, I: x, j: w, L: C, m: y, M: k, p: s, Q: E, s: S, S: O, u: d, U: h, V: p, w: f, W: v, x: yt, X: _t, y: m, Y: g, Z: b, "%": j }; return Xt.x = e(Nt, Xt), Xt.X = e(Rt, Xt), Xt.c = e(At, Xt), Kt.x = e(Nt, Kt), Kt.X = e(Rt, Kt), Kt.c = e(At, Kt), { format: function (t) { var n = e(t += "", Xt); return n.toString = function () { return t; }, n; }, parse: function (t) { var e = n(t += "", r); return e.toString = function () { return t; }, e; }, utcFormat: function (t) { var n = e(t += "", Kt); return n.toString = function () { return t; }, n; }, utcParse: function (t) { var e = n(t, i); return e.toString = function () { return t; }, e; } }; }
        function s(t, e, n) { var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", a = i.length; return r + (a < n ? new Array(n - a + 1).join(e) + i : i); }
        function u(t) { return t.replace(mt, "\\$&"); }
        function l(t) { return new RegExp("^(?:" + t.map(u).join("|") + ")", "i"); }
        function c(t) { for (var e = {}, n = -1, r = t.length; ++n < r;)
            e[t[n].toLowerCase()] = n; return e; }
        function f(t, e, n) { var r = vt.exec(e.slice(n, n + 1)); return r ? (t.w = +r[0], n + r[0].length) : -1; }
        function d(t, e, n) { var r = vt.exec(e.slice(n, n + 1)); return r ? (t.u = +r[0], n + r[0].length) : -1; }
        function h(t, e, n) { var r = vt.exec(e.slice(n, n + 2)); return r ? (t.U = +r[0], n + r[0].length) : -1; }
        function p(t, e, n) { var r = vt.exec(e.slice(n, n + 2)); return r ? (t.V = +r[0], n + r[0].length) : -1; }
        function v(t, e, n) { var r = vt.exec(e.slice(n, n + 2)); return r ? (t.W = +r[0], n + r[0].length) : -1; }
        function g(t, e, n) { var r = vt.exec(e.slice(n, n + 4)); return r ? (t.y = +r[0], n + r[0].length) : -1; }
        function m(t, e, n) { var r = vt.exec(e.slice(n, n + 2)); return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1; }
        function b(t, e, n) { var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6)); return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1; }
        function y(t, e, n) { var r = vt.exec(e.slice(n, n + 2)); return r ? (t.m = r[0] - 1, n + r[0].length) : -1; }
        function _(t, e, n) { var r = vt.exec(e.slice(n, n + 2)); return r ? (t.d = +r[0], n + r[0].length) : -1; }
        function w(t, e, n) { var r = vt.exec(e.slice(n, n + 3)); return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1; }
        function x(t, e, n) { var r = vt.exec(e.slice(n, n + 2)); return r ? (t.H = +r[0], n + r[0].length) : -1; }
        function k(t, e, n) { var r = vt.exec(e.slice(n, n + 2)); return r ? (t.M = +r[0], n + r[0].length) : -1; }
        function O(t, e, n) { var r = vt.exec(e.slice(n, n + 2)); return r ? (t.S = +r[0], n + r[0].length) : -1; }
        function C(t, e, n) { var r = vt.exec(e.slice(n, n + 3)); return r ? (t.L = +r[0], n + r[0].length) : -1; }
        function M(t, e, n) { var r = vt.exec(e.slice(n, n + 6)); return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1; }
        function j(t, e, n) { var r = gt.exec(e.slice(n, n + 1)); return r ? n + r[0].length : -1; }
        function E(t, e, n) { var r = vt.exec(e.slice(n)); return r ? (t.Q = +r[0], n + r[0].length) : -1; }
        function S(t, e, n) { var r = vt.exec(e.slice(n)); return r ? (t.Q = 1e3 * +r[0], n + r[0].length) : -1; }
        function T(t, e) { return s(t.getDate(), e, 2); }
        function A(t, e) { return s(t.getHours(), e, 2); }
        function N(t, e) { return s(t.getHours() % 12 || 12, e, 2); }
        function R(t, e) { return s(1 + ht.a.count(Object(ht.k)(t), t), e, 3); }
        function P(t, e) { return s(t.getMilliseconds(), e, 3); }
        function D(t, e) { return P(t, e) + "000"; }
        function L(t, e) { return s(t.getMonth() + 1, e, 2); }
        function V(t, e) { return s(t.getMinutes(), e, 2); }
        function B(t, e) { return s(t.getSeconds(), e, 2); }
        function z(t) { var e = t.getDay(); return 0 === e ? 7 : e; }
        function I(t, e) { return s(ht.h.count(Object(ht.k)(t), t), e, 2); }
        function U(t, e) { var n = t.getDay(); return t = n >= 4 || 0 === n ? Object(ht.i)(t) : ht.i.ceil(t), s(ht.i.count(Object(ht.k)(t), t) + (4 === Object(ht.k)(t).getDay()), e, 2); }
        function F(t) { return t.getDay(); }
        function H(t, e) { return s(ht.e.count(Object(ht.k)(t), t), e, 2); }
        function q(t, e) { return s(t.getFullYear() % 100, e, 2); }
        function $(t, e) { return s(t.getFullYear() % 1e4, e, 4); }
        function G(t) { var e = t.getTimezoneOffset(); return (e > 0 ? "-" : (e *= -1, "+")) + s(e / 60 | 0, "0", 2) + s(e % 60, "0", 2); }
        function W(t, e) { return s(t.getUTCDate(), e, 2); }
        function Y(t, e) { return s(t.getUTCHours(), e, 2); }
        function X(t, e) { return s(t.getUTCHours() % 12 || 12, e, 2); }
        function K(t, e) { return s(1 + ht.l.count(Object(ht.v)(t), t), e, 3); }
        function J(t, e) { return s(t.getUTCMilliseconds(), e, 3); }
        function Z(t, e) { return J(t, e) + "000"; }
        function Q(t, e) { return s(t.getUTCMonth() + 1, e, 2); }
        function tt(t, e) { return s(t.getUTCMinutes(), e, 2); }
        function et(t, e) { return s(t.getUTCSeconds(), e, 2); }
        function nt(t) { var e = t.getUTCDay(); return 0 === e ? 7 : e; }
        function rt(t, e) { return s(ht.s.count(Object(ht.v)(t), t), e, 2); }
        function it(t, e) { var n = t.getUTCDay(); return t = n >= 4 || 0 === n ? Object(ht.t)(t) : ht.t.ceil(t), s(ht.t.count(Object(ht.v)(t), t) + (4 === Object(ht.v)(t).getUTCDay()), e, 2); }
        function at(t) { return t.getUTCDay(); }
        function ot(t, e) { return s(ht.p.count(Object(ht.v)(t), t), e, 2); }
        function st(t, e) { return s(t.getUTCFullYear() % 100, e, 2); }
        function ut(t, e) { return s(t.getUTCFullYear() % 1e4, e, 4); }
        function lt() { return "+0000"; }
        function ct() { return "%"; }
        function ft(t) { return +t; }
        function dt(t) { return Math.floor(+t / 1e3); }
        e.a = o;
        var ht = n(141), pt = { "-": "", _: " ", 0: "0" }, vt = /^\s*\d+/, gt = /^%/, mt = /[\\^$*+?|[\]().{}]/g;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t.toISOString(); }
        n.d(e, "a", function () { return a; });
        var i = n(142), a = "%Y-%m-%dT%H:%M:%S.%LZ";
        Date.prototype.toISOString || Object(i.b)(a);
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(579);
        n.d(e, "drag", function () { return r.a; });
        var i = n(234);
        n.d(e, "dragDisable", function () { return i.a; }), n.d(e, "dragEnable", function () { return i.b; });
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { var n = t.document.documentElement, r = Object(i.select)(t).on("dragstart.drag", null); e && (r.on("click.drag", a.a, !0), setTimeout(function () { r.on("click.drag", null); }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect); }
        e.b = r;
        var i = n(12), a = n(235);
        e.a = function (t) { var e = t.document.documentElement, n = Object(i.select)(t).on("dragstart.drag", a.a, !0); "onselectstart" in e ? n.on("selectstart.drag", a.a, !0) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none"); };
    }, function (t, e, n) {
        "use strict";
        function r() { i.event.stopImmediatePropagation(); }
        e.b = r;
        var i = n(12);
        e.a = function () { i.event.preventDefault(), i.event.stopImmediatePropagation(); };
    }, function (t, e, n) {
        "use strict";
        var r = (n(582), n(42));
        n.d(e, "b", function () { return r.b; });
        var i = (n(614), n(237));
        n.d(e, "a", function () { return i.a; });
    }, function (t, e, n) {
        "use strict";
        var r = n(26);
        e.a = function (t, e) { var n, i, a, o = t.__transition, s = !0; if (o) {
            e = null == e ? null : e + "";
            for (a in o)
                (n = o[a]).name === e ? (i = n.state > r.d && n.state < r.b, n.state = r.a, n.timer.stop(), i && n.on.call("interrupt", t, t.__data__, n.index, n.group), delete o[a]) : s = !1;
            s && delete t.__transition;
        } };
    }, function (t, e, n) {
        "use strict";
        var r = n(144);
        n.d(e, "a", function () { return r.b; }), n.d(e, "c", function () { return r.c; });
        var i = n(584);
        n.d(e, "b", function () { return i.a; });
        n(585);
    }, function (t, e, n) {
        "use strict";
        var r = n(35), i = n(23);
        e.a = function (t, e) { var n; return ("number" == typeof e ? i.interpolateNumber : e instanceof r.a ? i.interpolateRgb : (n = Object(r.a)(e)) ? (e = n, i.interpolateRgb) : i.interpolateString)(t, e); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a, o, s, u = n(15), l = r(u), c = n(86), f = r(c), d = n(125), h = r(d), p = n(2), v = r(p), g = n(3), m = r(g), b = n(6), y = r(b), _ = n(4), w = r(_), x = n(21), k = r(x), O = n(5), C = r(O), M = (0, f.default)(["\n            ", " tests (", "%)<br>\n            ", "\n        "], ["\n            ", " tests (", "%)<br>\n            ", "\n        "]), j = n(65), E = r(j), S = n(46), T = r(S), A = n(8), N = n(16), R = n(241), P = n(23), D = n(12), L = n(92), V = r(L), B = n(40), z = n(1), I = r(z), U = (a = (0, A.on)("mouseleave .chart__legend-row"), o = (0, A.on)("mouseenter .chart__legend-row"), s = function (t) { function e() { return (0, m.default)(this, e), (0, w.default)(this, (e.__proto__ || (0, v.default)(e)).apply(this, arguments)); } return (0, C.default)(e, t), (0, y.default)(e, [{ key: "initialize", value: function (t) { this.options = t, this.model = this.options.model, this.showLegend = !!this.options && (this.options.showLegend || !1), this.arc = (0, R.arc)(), this.pie = (0, R.pie)().sort(null).value(function (t) { return t.value; }), this.tooltip = new T.default({ position: "center" }), this.getChartData(); } }, { key: "getChartData", value: function () { this.statistic = this.model.get("statistic"); var t = this.statistic.total, e = (0, N.omit)(this.statistic, "total"); this.data = (0, h.default)(e).map(function (n) { return { name: n.toUpperCase(), value: e[n], part: e[n] / t }; }); } }, { key: "setupViewport", value: function () { return (0, k.default)(e.prototype.__proto__ || (0, v.default)(e.prototype), "setupViewport", this).call(this), this.showLegend && this.$el.append(this.getLegendTpl()), this.svg; } }, { key: "onAttach", value: function () { var t = this, n = this.data, r = this.$el.outerWidth(), i = this.$el.outerHeight(), a = Math.min(r, i) / 2 - 10, o = i / 2, s = r / 2; this.showLegend && (s -= 70), this.arc.innerRadius(.8 * a).outerRadius(a), this.svg = this.setupViewport(); var u = this.svg.select(".chart__plot").attrs({ transform: "translate(" + s + "," + o + ")" }).selectAll(".chart__arc").data(this.pie(n)).enter().append("path").attr("class", function (t) { return "chart__arc chart__fill_status_" + t.data.name.toLowerCase(); }); this.bindTooltip(u), this.svg.select(".chart__plot").append("text").classed("chart__caption", !0).attrs({ dy: "0.4em" }).styles({ "font-size": a / 3 + "px" }).text(this.getChartTitle()), this.firstRender ? u.transition().duration(750).attrTween("d", function (e) { var n = (0, P.interpolate)(0, e.startAngle), r = (0, P.interpolate)(0, e.endAngle); return function (e) { return t.arc({ startAngle: n(e), endAngle: r(e) }); }; }) : u.attr("d", function (e) { return t.arc(e); }), (0, k.default)(e.prototype.__proto__ || (0, v.default)(e.prototype), "onAttach", this).call(this); } }, { key: "formatNumber", value: function (t) { return (Math.floor(100 * t) / 100).toString(); } }, { key: "getChartTitle", value: function () { var t = this.statistic, e = t.passed, n = t.total; return this.formatNumber((e || 0) / n * 100) + "%"; } }, { key: "getTooltipContent", value: function (t) { var e = t.data, n = e.value || 0, r = e.part || 0, i = e.name.toLowerCase(), a = (0, I.default)("status." + i, {}); return (0, V.default)(M, n, this.formatNumber(100 * r), a); } }, { key: "getLegendTpl", value: function () { return '<div class="chart__legend">\n    ' + B.values.map(function (t) { return '<div class="chart__legend-row" data-status="' + t + '">\n<span class="chart__legend-icon chart__legend-icon_status_' + t + '"></span> ' + (0, I.default)("status." + t) + "</div>"; }).join("") + "\n</div>"; } }, { key: "onLegendOut", value: function () { this.hideTooltip(); } }, { key: "onLegendHover", value: function (t) { var e = this.$(t.currentTarget), n = e.data("status"), r = this.$(".chart__fill_status_" + n)[0], i = (0, D.select)(r).datum(); this.showTooltip(i, r); } }]), e; }(E.default), i(s.prototype, "onLegendOut", [a], (0, l.default)(s.prototype, "onLegendOut"), s.prototype), i(s.prototype, "onLegendHover", [o], (0, l.default)(s.prototype, "onLegendHover"), s.prototype), s);
        e.default = U;
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(628);
        n.d(e, "arc", function () { return r.a; });
        var i = n(242);
        n.d(e, "area", function () { return i.a; });
        var a = n(145);
        n.d(e, "line", function () { return a.a; });
        var o = n(630);
        n.d(e, "pie", function () { return o.a; });
        var s = n(633);
        n.d(e, "areaRadial", function () { return s.a; }), n.d(e, "radialArea", function () { return s.a; });
        var u = n(244);
        n.d(e, "lineRadial", function () { return u.a; }), n.d(e, "radialLine", function () { return u.a; });
        var l = n(245);
        n.d(e, "pointRadial", function () { return l.a; });
        var c = n(634);
        n.d(e, "linkHorizontal", function () { return c.a; }), n.d(e, "linkVertical", function () { return c.c; }), n.d(e, "linkRadial", function () { return c.b; });
        var f = n(635);
        n.d(e, "symbol", function () { return f.a; }), n.d(e, "symbols", function () { return f.b; });
        var d = n(247);
        n.d(e, "symbolCircle", function () { return d.a; });
        var h = n(248);
        n.d(e, "symbolCross", function () { return h.a; });
        var p = n(249);
        n.d(e, "symbolDiamond", function () { return p.a; });
        var v = n(251);
        n.d(e, "symbolSquare", function () { return v.a; });
        var g = n(250);
        n.d(e, "symbolStar", function () { return g.a; });
        var m = n(252);
        n.d(e, "symbolTriangle", function () { return m.a; });
        var b = n(253);
        n.d(e, "symbolWye", function () { return b.a; });
        var y = n(636);
        n.d(e, "curveBasisClosed", function () { return y.a; });
        var _ = n(637);
        n.d(e, "curveBasisOpen", function () { return _.a; });
        var w = n(95);
        n.d(e, "curveBasis", function () { return w.b; });
        var x = n(638);
        n.d(e, "curveBundle", function () { return x.a; });
        var k = n(254);
        n.d(e, "curveCardinalClosed", function () { return k.b; });
        var O = n(255);
        n.d(e, "curveCardinalOpen", function () { return O.b; });
        var C = n(96);
        n.d(e, "curveCardinal", function () { return C.b; });
        var M = n(639);
        n.d(e, "curveCatmullRomClosed", function () { return M.a; });
        var j = n(640);
        n.d(e, "curveCatmullRomOpen", function () { return j.a; });
        var E = n(147);
        n.d(e, "curveCatmullRom", function () { return E.a; });
        var S = n(641);
        n.d(e, "curveLinearClosed", function () { return S.a; });
        var T = n(93);
        n.d(e, "curveLinear", function () { return T.a; });
        var A = n(642);
        n.d(e, "curveMonotoneX", function () { return A.a; }), n.d(e, "curveMonotoneY", function () { return A.b; });
        var N = n(643);
        n.d(e, "curveNatural", function () { return N.a; });
        var R = n(644);
        n.d(e, "curveStep", function () { return R.a; }), n.d(e, "curveStepAfter", function () { return R.b; }), n.d(e, "curveStepBefore", function () { return R.c; });
        var P = n(645);
        n.d(e, "stack", function () { return P.a; });
        var D = n(646);
        n.d(e, "stackOffsetExpand", function () { return D.a; });
        var L = n(647);
        n.d(e, "stackOffsetDiverging", function () { return L.a; });
        var V = n(72);
        n.d(e, "stackOffsetNone", function () { return V.a; });
        var B = n(648);
        n.d(e, "stackOffsetSilhouette", function () { return B.a; });
        var z = n(649);
        n.d(e, "stackOffsetWiggle", function () { return z.a; });
        var I = n(148);
        n.d(e, "stackOrderAscending", function () { return I.a; });
        var U = n(650);
        n.d(e, "stackOrderDescending", function () { return U.a; });
        var F = n(651);
        n.d(e, "stackOrderInsideOut", function () { return F.a; });
        var H = n(73);
        n.d(e, "stackOrderNone", function () { return H.a; });
        var q = n(652);
        n.d(e, "stackOrderReverse", function () { return q.a; });
    }, function (t, e, n) {
        "use strict";
        var r = n(70), i = n(49), a = n(93), o = n(145), s = n(146);
        e.a = function () { function t(t) { var e, i, a, o, s, v = t.length, g = !1, m = new Array(v), b = new Array(v); for (null == d && (p = h(s = Object(r.a)())), e = 0; e <= v; ++e) {
            if (!(e < v && f(o = t[e], e, t)) === g)
                if (g = !g)
                    i = e, p.areaStart(), p.lineStart();
                else {
                    for (p.lineEnd(), p.lineStart(), a = e - 1; a >= i; --a)
                        p.point(m[a], b[a]);
                    p.lineEnd(), p.areaEnd();
                }
            g && (m[e] = +n(o, e, t), b[e] = +l(o, e, t), p.point(u ? +u(o, e, t) : m[e], c ? +c(o, e, t) : b[e]));
        } if (s)
            return p = null, s + "" || null; } function e() { return Object(o.a)().defined(f).curve(h).context(d); } var n = s.a, u = null, l = Object(i.a)(0), c = s.b, f = Object(i.a)(!0), d = null, h = a.a, p = null; return t.x = function (e) { return arguments.length ? (n = "function" == typeof e ? e : Object(i.a)(+e), u = null, t) : n; }, t.x0 = function (e) { return arguments.length ? (n = "function" == typeof e ? e : Object(i.a)(+e), t) : n; }, t.x1 = function (e) { return arguments.length ? (u = null == e ? null : "function" == typeof e ? e : Object(i.a)(+e), t) : u; }, t.y = function (e) { return arguments.length ? (l = "function" == typeof e ? e : Object(i.a)(+e), c = null, t) : l; }, t.y0 = function (e) { return arguments.length ? (l = "function" == typeof e ? e : Object(i.a)(+e), t) : l; }, t.y1 = function (e) { return arguments.length ? (c = null == e ? null : "function" == typeof e ? e : Object(i.a)(+e), t) : c; }, t.lineX0 = t.lineY0 = function () { return e().x(n).y(l); }, t.lineY1 = function () { return e().x(n).y(c); }, t.lineX1 = function () { return e().x(u).y(l); }, t.defined = function (e) { return arguments.length ? (f = "function" == typeof e ? e : Object(i.a)(!!e), t) : f; }, t.curve = function (e) { return arguments.length ? (h = e, null != d && (p = h(d)), t) : h; }, t.context = function (e) { return arguments.length ? (null == e ? d = p = null : p = h(d = e), t) : d; }, t; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { this._curve = t; }
        function i(t) { function e(e) { return new r(t(e)); } return e._curve = t, e; }
        n.d(e, "a", function () { return o; }), e.b = i;
        var a = n(93), o = i(a.a);
        r.prototype = { areaStart: function () { this._curve.areaStart(); }, areaEnd: function () { this._curve.areaEnd(); }, lineStart: function () { this._curve.lineStart(); }, lineEnd: function () { this._curve.lineEnd(); }, point: function (t, e) { this._curve.point(e * Math.sin(t), e * -Math.cos(t)); } };
    }, function (t, e, n) {
        "use strict";
        function r(t) { var e = t.curve; return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) { return arguments.length ? e(Object(i.b)(t)) : e()._curve; }, t; }
        e.b = r;
        var i = n(243), a = n(145);
        e.a = function () { return r(Object(a.a)().curve(i.a)); };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { return [(e = +e) * Math.cos(t -= Math.PI / 2), e * Math.sin(t)]; };
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return r; });
        var r = Array.prototype.slice;
    }, function (t, e, n) {
        "use strict";
        var r = n(71);
        e.a = { draw: function (t, e) { var n = Math.sqrt(e / r.j); t.moveTo(n, 0), t.arc(0, 0, n, 0, r.m); } };
    }, function (t, e, n) {
        "use strict";
        e.a = { draw: function (t, e) { var n = Math.sqrt(e / 5) / 2; t.moveTo(-3 * n, -n), t.lineTo(-n, -n), t.lineTo(-n, -3 * n), t.lineTo(n, -3 * n), t.lineTo(n, -n), t.lineTo(3 * n, -n), t.lineTo(3 * n, n), t.lineTo(n, n), t.lineTo(n, 3 * n), t.lineTo(-n, 3 * n), t.lineTo(-n, n), t.lineTo(-3 * n, n), t.closePath(); } };
    }, function (t, e, n) {
        "use strict";
        var r = Math.sqrt(1 / 3), i = 2 * r;
        e.a = { draw: function (t, e) { var n = Math.sqrt(e / i), a = n * r; t.moveTo(0, -n), t.lineTo(a, 0), t.lineTo(0, n), t.lineTo(-a, 0), t.closePath(); } };
    }, function (t, e, n) {
        "use strict";
        var r = n(71), i = Math.sin(r.j / 10) / Math.sin(7 * r.j / 10), a = Math.sin(r.m / 10) * i, o = -Math.cos(r.m / 10) * i;
        e.a = { draw: function (t, e) { var n = Math.sqrt(.8908130915292852 * e), i = a * n, s = o * n; t.moveTo(0, -n), t.lineTo(i, s); for (var u = 1; u < 5; ++u) {
                var l = r.m * u / 5, c = Math.cos(l), f = Math.sin(l);
                t.lineTo(f * n, -c * n), t.lineTo(c * i - f * s, f * i + c * s);
            } t.closePath(); } };
    }, function (t, e, n) {
        "use strict";
        e.a = { draw: function (t, e) { var n = Math.sqrt(e), r = -n / 2; t.rect(r, r, n, n); } };
    }, function (t, e, n) {
        "use strict";
        var r = Math.sqrt(3);
        e.a = { draw: function (t, e) { var n = -Math.sqrt(e / (3 * r)); t.moveTo(0, 2 * n), t.lineTo(-r * n, -n), t.lineTo(r * n, -n), t.closePath(); } };
    }, function (t, e, n) {
        "use strict";
        var r = -.5, i = Math.sqrt(3) / 2, a = 1 / Math.sqrt(12), o = 3 * (a / 2 + 1);
        e.a = { draw: function (t, e) { var n = Math.sqrt(e / o), s = n / 2, u = n * a, l = s, c = n * a + n, f = -l, d = c; t.moveTo(s, u), t.lineTo(l, c), t.lineTo(f, d), t.lineTo(r * s - i * u, i * s + r * u), t.lineTo(r * l - i * c, i * l + r * c), t.lineTo(r * f - i * d, i * f + r * d), t.lineTo(r * s + i * u, r * u - i * s), t.lineTo(r * l + i * c, r * c - i * l), t.lineTo(r * f + i * d, r * d - i * f), t.closePath(); } };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { this._context = t, this._k = (1 - e) / 6; }
        e.a = r;
        var i = n(94), a = n(96);
        r.prototype = { areaStart: i.a, areaEnd: i.a, lineStart: function () { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0; }, lineEnd: function () { switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3: this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
            } }, point: function (t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = e;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = e;
                    break;
                default: Object(a.c)(this, t, e);
            } this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e; } }, e.b = function t(e) { function n(t) { return new r(t, e); } return n.tension = function (e) { return t(+e); }, n; }(0);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { this._context = t, this._k = (1 - e) / 6; }
        e.a = r;
        var i = n(96);
        r.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0; }, lineEnd: function () { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line; }, point: function (t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3: this._point = 4;
                default: Object(i.c)(this, t, e);
            } this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e; } }, e.b = function t(e) { function n(t) { return new r(t, e); } return n.tension = function (e) { return t(+e); }, n; }(0);
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(676);
        n.d(e, "schemeAccent", function () { return r.a; });
        var i = n(677);
        n.d(e, "schemeDark2", function () { return i.a; });
        var a = n(678);
        n.d(e, "schemePaired", function () { return a.a; });
        var o = n(679);
        n.d(e, "schemePastel1", function () { return o.a; });
        var s = n(680);
        n.d(e, "schemePastel2", function () { return s.a; });
        var u = n(681);
        n.d(e, "schemeSet1", function () { return u.a; });
        var l = n(682);
        n.d(e, "schemeSet2", function () { return l.a; });
        var c = n(683);
        n.d(e, "schemeSet3", function () { return c.a; });
        var f = n(684);
        n.d(e, "interpolateBrBG", function () { return f.a; }), n.d(e, "schemeBrBG", function () { return f.b; });
        var d = n(685);
        n.d(e, "interpolatePRGn", function () { return d.a; }), n.d(e, "schemePRGn", function () { return d.b; });
        var h = n(686);
        n.d(e, "interpolatePiYG", function () { return h.a; }), n.d(e, "schemePiYG", function () { return h.b; });
        var p = n(687);
        n.d(e, "interpolatePuOr", function () { return p.a; }), n.d(e, "schemePuOr", function () { return p.b; });
        var v = n(688);
        n.d(e, "interpolateRdBu", function () { return v.a; }), n.d(e, "schemeRdBu", function () { return v.b; });
        var g = n(689);
        n.d(e, "interpolateRdGy", function () { return g.a; }), n.d(e, "schemeRdGy", function () { return g.b; });
        var m = n(690);
        n.d(e, "interpolateRdYlBu", function () { return m.a; }), n.d(e, "schemeRdYlBu", function () { return m.b; });
        var b = n(691);
        n.d(e, "interpolateRdYlGn", function () { return b.a; }), n.d(e, "schemeRdYlGn", function () { return b.b; });
        var y = n(692);
        n.d(e, "interpolateSpectral", function () { return y.a; }), n.d(e, "schemeSpectral", function () { return y.b; });
        var _ = n(693);
        n.d(e, "interpolateBuGn", function () { return _.a; }), n.d(e, "schemeBuGn", function () { return _.b; });
        var w = n(694);
        n.d(e, "interpolateBuPu", function () { return w.a; }), n.d(e, "schemeBuPu", function () { return w.b; });
        var x = n(695);
        n.d(e, "interpolateGnBu", function () { return x.a; }), n.d(e, "schemeGnBu", function () { return x.b; });
        var k = n(696);
        n.d(e, "interpolateOrRd", function () { return k.a; }), n.d(e, "schemeOrRd", function () { return k.b; });
        var O = n(697);
        n.d(e, "interpolatePuBuGn", function () { return O.a; }), n.d(e, "schemePuBuGn", function () { return O.b; });
        var C = n(698);
        n.d(e, "interpolatePuBu", function () { return C.a; }), n.d(e, "schemePuBu", function () { return C.b; });
        var M = n(699);
        n.d(e, "interpolatePuRd", function () { return M.a; }), n.d(e, "schemePuRd", function () { return M.b; });
        var j = n(700);
        n.d(e, "interpolateRdPu", function () { return j.a; }), n.d(e, "schemeRdPu", function () { return j.b; });
        var E = n(701);
        n.d(e, "interpolateYlGnBu", function () { return E.a; }), n.d(e, "schemeYlGnBu", function () { return E.b; });
        var S = n(702);
        n.d(e, "interpolateYlGn", function () { return S.a; }), n.d(e, "schemeYlGn", function () { return S.b; });
        var T = n(703);
        n.d(e, "interpolateYlOrBr", function () { return T.a; }), n.d(e, "schemeYlOrBr", function () { return T.b; });
        var A = n(704);
        n.d(e, "interpolateYlOrRd", function () { return A.a; }), n.d(e, "schemeYlOrRd", function () { return A.b; });
        var N = n(705);
        n.d(e, "interpolateBlues", function () { return N.a; }), n.d(e, "schemeBlues", function () { return N.b; });
        var R = n(706);
        n.d(e, "interpolateGreens", function () { return R.a; }), n.d(e, "schemeGreens", function () { return R.b; });
        var P = n(707);
        n.d(e, "interpolateGreys", function () { return P.a; }), n.d(e, "schemeGreys", function () { return P.b; });
        var D = n(708);
        n.d(e, "interpolatePurples", function () { return D.a; }), n.d(e, "schemePurples", function () { return D.b; });
        var L = n(709);
        n.d(e, "interpolateReds", function () { return L.a; }), n.d(e, "schemeReds", function () { return L.b; });
        var V = n(710);
        n.d(e, "interpolateOranges", function () { return V.a; }), n.d(e, "schemeOranges", function () { return V.b; });
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) { return i.test(t) ? new r.SafeString('<a href="' + t + '"  class="link" target="_blank">' + t + "</a>") : t; };
        var r = n(7), i = /^(\w)+:\/\/.*/;
    }, function (t, e, n) { t.exports = n(259); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        var i = n(149), a = r(i), o = n(27), s = r(o);
        n(393), n(394), n(395), n(396), n(397), n(398), n(399), n(400), n(431), n(448), n(449), n(450), n(453), n(625), n(653), n(657), n(661), n(672), n(711), n(715), n(719), n(723), n(724), n(725), n(728), n(731), n(734), n(737), n(740), n(744), n(748), n(751), n(753), n(756), n(760), window.jQuery = s.default, (0, s.default)(document).ready(function () { return a.default.start(); });
    }, function (t, e) { }, function (t, e) { }, function (t, e, n) { !function (e, r) { t.exports = r(n(16), n(14)); }(0, function (t, e) {
        "use strict";
        function n(t, e, n, r) { var i = t[e]; if (!(n && n !== i.callback && n !== i.callback._callback || r && r !== i.context))
            return delete t[e], !0; }
        function r(e, r, i, a) { e || (e = {}); for (var o = r ? [r] : t.keys(e), s = !1, u = 0, l = o.length; u < l; u++)
            r = o[u], e[r] && n(e, r, i, a) && (s = !0); return s; }
        function i(e) { return c[e] || (c[e] = t.bind(u.log, u, e)); }
        function a(e) { return t.isFunction(e) ? e : function () { return e; }; }
        t = "default" in t ? t.default : t, e = "default" in e ? e.default : e;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t; }, s = e.Radio, u = e.Radio = {};
        u.VERSION = "2.0.0", u.noConflict = function () { return e.Radio = s, this; }, u.DEBUG = !1, u._debugText = function (t, e, n) { return t + (n ? " on the " + n + " channel" : "") + ': "' + e + '"'; }, u.debugLog = function (t, e, n) { u.DEBUG && console && console.warn && console.warn(u._debugText(t, e, n)); };
        var l = /\s+/;
        u._eventsApi = function (e, n, r, i) { if (!r)
            return !1; var a = {}; if ("object" === (void 0 === r ? "undefined" : o(r))) {
            for (var s in r) {
                var u = e[n].apply(e, [s, r[s]].concat(i));
                l.test(s) ? t.extend(a, u) : a[s] = u;
            }
            return a;
        } if (l.test(r)) {
            for (var c = r.split(l), f = 0, d = c.length; f < d; f++)
                a[c[f]] = e[n].apply(e, [c[f]].concat(i));
            return a;
        } return !1; }, u._callHandler = function (t, e, n) { var r = n[0], i = n[1], a = n[2]; switch (n.length) {
            case 0: return t.call(e);
            case 1: return t.call(e, r);
            case 2: return t.call(e, r, i);
            case 3: return t.call(e, r, i, a);
            default: return t.apply(e, n);
        } };
        var c = {};
        t.extend(u, { log: function (e, n) { if ("undefined" != typeof console) {
                var r = t.toArray(arguments).slice(2);
                console.log("[" + e + '] "' + n + '"', r);
            } }, tuneIn: function (t) { var e = u.channel(t); return e._tunedIn = !0, e.on("all", i(t)), this; }, tuneOut: function (t) { var e = u.channel(t); return e._tunedIn = !1, e.off("all", i(t)), delete c[t], this; } }), u.Requests = { request: function (e) { var n = t.toArray(arguments).slice(1), r = u._eventsApi(this, "request", e, n); if (r)
                return r; var i = this.channelName, a = this._requests; if (i && this._tunedIn && u.log.apply(this, [i, e].concat(n)), a && (a[e] || a.default)) {
                var o = a[e] || a.default;
                return n = a[e] ? n : arguments, u._callHandler(o.callback, o.context, n);
            } u.debugLog("An unhandled request was fired", e, i); }, reply: function (t, e, n) { return u._eventsApi(this, "reply", t, [e, n]) ? this : (this._requests || (this._requests = {}), this._requests[t] && u.debugLog("A request was overwritten", t, this.channelName), this._requests[t] = { callback: a(e), context: n || this }, this); }, replyOnce: function (e, n, r) { if (u._eventsApi(this, "replyOnce", e, [n, r]))
                return this; var i = this, o = t.once(function () { return i.stopReplying(e), a(n).apply(this, arguments); }); return this.reply(e, o, r); }, stopReplying: function (t, e, n) { return u._eventsApi(this, "stopReplying", t) ? this : (t || e || n ? r(this._requests, t, e, n) || u.debugLog("Attempted to remove the unregistered request", t, this.channelName) : delete this._requests, this); } }, u._channels = {}, u.channel = function (t) { if (!t)
            throw new Error("You must provide a name for the channel."); return u._channels[t] ? u._channels[t] : u._channels[t] = new u.Channel(t); }, u.Channel = function (t) { this.channelName = t; }, t.extend(u.Channel.prototype, e.Events, u.Requests, { reset: function () { return this.off(), this.stopListening(), this.stopReplying(), this; } });
        var f, d, h = [e.Events, u.Requests];
        return t.each(h, function (e) { t.each(e, function (e, n) { u[n] = function (e) { return d = t.toArray(arguments).slice(1), f = this.channel(e), f[n].apply(f, d); }; }); }), u.reset = function (e) { var n = e ? [this._channels[e]] : this._channels; t.each(n, function (t) { t.reset(); }); }, u;
    }); }, function (t, e, n) { n(264), t.exports = n(13).Object.assign; }, function (t, e, n) { var r = n(20); r(r.S + r.F, "Object", { assign: n(265) }); }, function (t, e, n) {
        "use strict";
        var r = n(56), i = n(107), a = n(77), o = n(58), s = n(152), u = Object.assign;
        t.exports = !u || n(51)(function () { var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst"; return t[n] = 7, r.split("").forEach(function (t) { e[t] = t; }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r; }) ? function (t, e) { for (var n = o(t), u = arguments.length, l = 1, c = i.f, f = a.f; u > l;)
            for (var d, h = s(arguments[l++]), p = c ? r(h).concat(c(h)) : r(h), v = p.length, g = 0; v > g;)
                f.call(h, d = p[g++]) && (n[d] = h[d]); return n; } : u;
    }, function (t, e, n) { var r = n(45), i = n(102), a = n(267); t.exports = function (t) { return function (e, n, o) { var s, u = r(e), l = i(u.length), c = a(o, l); if (t && n != n) {
        for (; l > c;)
            if ((s = u[c++]) != s)
                return !0;
    }
    else
        for (; l > c; c++)
            if ((t || c in u) && u[c] === n)
                return t || c || 0; return !t && -1; }; }; }, function (t, e, n) { var r = n(103), i = Math.max, a = Math.min; t.exports = function (t, e) { return t = r(t), t < 0 ? i(t + e, 0) : a(t, e); }; }, function (t, e, n) { n(269), t.exports = n(13).Object.getPrototypeOf; }, function (t, e, n) { var r = n(58), i = n(153); n(78)("getPrototypeOf", function () { return function (t) { return i(r(t)); }; }); }, function (t, e, n) { n(271); var r = n(13).Object; t.exports = function (t, e, n) { return r.defineProperty(t, e, n); }; }, function (t, e, n) { var r = n(20); r(r.S + r.F * !n(32), "Object", { defineProperty: n(30).f }); }, function (t, e, n) { t.exports = { default: n(273), __esModule: !0 }; }, function (t, e, n) { n(59), n(81), t.exports = n(109).f("iterator"); }, function (t, e, n) { var r = n(103), i = n(101); t.exports = function (t) { return function (e, n) { var a, o, s = String(i(e)), u = r(n), l = s.length; return u < 0 || u >= l ? t ? "" : void 0 : (a = s.charCodeAt(u), a < 55296 || a > 56319 || u + 1 === l || (o = s.charCodeAt(u + 1)) < 56320 || o > 57343 ? t ? s.charAt(u) : a : t ? s.slice(u, u + 2) : o - 56320 + (a - 55296 << 10) + 65536); }; }; }, function (t, e, n) {
        "use strict";
        var r = n(108), i = n(55), a = n(80), o = {};
        n(43)(o, n(18)("iterator"), function () { return this; }), t.exports = function (t, e, n) { t.prototype = r(o, { next: i(1, n) }), a(t, e + " Iterator"); };
    }, function (t, e, n) {
        "use strict";
        var r = n(277), i = n(278), a = n(52), o = n(45);
        t.exports = n(156)(Array, "Array", function (t, e) { this._t = o(t), this._i = 0, this._k = e; }, function () { var t = this._t, e = this._k, n = this._i++; return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]]); }, "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries");
    }, function (t, e) { t.exports = function () { }; }, function (t, e) { t.exports = function (t, e) { return { value: e, done: !!t }; }; }, function (t, e, n) { t.exports = { default: n(280), __esModule: !0 }; }, function (t, e, n) { n(281), n(162), n(285), n(286), t.exports = n(13).Symbol; }, function (t, e, n) {
        "use strict";
        var r = n(19), i = n(44), a = n(32), o = n(20), s = n(157), u = n(160).KEY, l = n(51), c = n(105), f = n(80), d = n(76), h = n(18), p = n(109), v = n(110), g = n(282), m = n(283), b = n(28), y = n(31), _ = n(45), w = n(100), x = n(55), k = n(108), O = n(284), C = n(111), M = n(30), j = n(56), E = C.f, S = M.f, T = O.f, A = r.Symbol, N = r.JSON, R = N && N.stringify, P = h("_hidden"), D = h("toPrimitive"), L = {}.propertyIsEnumerable, V = c("symbol-registry"), B = c("symbols"), z = c("op-symbols"), I = Object.prototype, U = "function" == typeof A, F = r.QObject, H = !F || !F.prototype || !F.prototype.findChild, q = a && l(function () { return 7 != k(S({}, "a", { get: function () { return S(this, "a", { value: 7 }).a; } })).a; }) ? function (t, e, n) { var r = E(I, e); r && delete I[e], S(t, e, n), r && t !== I && S(I, e, r); } : S, $ = function (t) { var e = B[t] = k(A.prototype); return e._k = t, e; }, G = U && "symbol" == typeof A.iterator ? function (t) { return "symbol" == typeof t; } : function (t) { return t instanceof A; }, W = function (t, e, n) { return t === I && W(z, e, n), b(t), e = w(e, !0), b(n), i(B, e) ? (n.enumerable ? (i(t, P) && t[P][e] && (t[P][e] = !1), n = k(n, { enumerable: x(0, !1) })) : (i(t, P) || S(t, P, x(1, {})), t[P][e] = !0), q(t, e, n)) : S(t, e, n); }, Y = function (t, e) { b(t); for (var n, r = g(e = _(e)), i = 0, a = r.length; a > i;)
            W(t, n = r[i++], e[n]); return t; }, X = function (t, e) { return void 0 === e ? k(t) : Y(k(t), e); }, K = function (t) { var e = L.call(this, t = w(t, !0)); return !(this === I && i(B, t) && !i(z, t)) && (!(e || !i(this, t) || !i(B, t) || i(this, P) && this[P][t]) || e); }, J = function (t, e) { if (t = _(t), e = w(e, !0), t !== I || !i(B, e) || i(z, e)) {
            var n = E(t, e);
            return !n || !i(B, e) || i(t, P) && t[P][e] || (n.enumerable = !0), n;
        } }, Z = function (t) { for (var e, n = T(_(t)), r = [], a = 0; n.length > a;)
            i(B, e = n[a++]) || e == P || e == u || r.push(e); return r; }, Q = function (t) { for (var e, n = t === I, r = T(n ? z : _(t)), a = [], o = 0; r.length > o;)
            !i(B, e = r[o++]) || n && !i(I, e) || a.push(B[e]); return a; };
        U || (A = function () { if (this instanceof A)
            throw TypeError("Symbol is not a constructor!"); var t = d(arguments.length > 0 ? arguments[0] : void 0), e = function (n) { this === I && e.call(z, n), i(this, P) && i(this[P], t) && (this[P][t] = !1), q(this, t, x(1, n)); }; return a && H && q(I, t, { configurable: !0, set: e }), $(t); }, s(A.prototype, "toString", function () { return this._k; }), C.f = J, M.f = W, n(161).f = O.f = Z, n(77).f = K, n(107).f = Q, a && !n(79) && s(I, "propertyIsEnumerable", K, !0), p.f = function (t) { return $(h(t)); }), o(o.G + o.W + o.F * !U, { Symbol: A });
        for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;)
            h(tt[et++]);
        for (var nt = j(h.store), rt = 0; nt.length > rt;)
            v(nt[rt++]);
        o(o.S + o.F * !U, "Symbol", { for: function (t) { return i(V, t += "") ? V[t] : V[t] = A(t); }, keyFor: function (t) { if (!G(t))
                throw TypeError(t + " is not a symbol!"); for (var e in V)
                if (V[e] === t)
                    return e; }, useSetter: function () { H = !0; }, useSimple: function () { H = !1; } }), o(o.S + o.F * !U, "Object", { create: X, defineProperty: W, defineProperties: Y, getOwnPropertyDescriptor: J, getOwnPropertyNames: Z, getOwnPropertySymbols: Q }), N && o(o.S + o.F * (!U || l(function () { var t = A(); return "[null]" != R([t]) || "{}" != R({ a: t }) || "{}" != R(Object(t)); })), "JSON", { stringify: function (t) { for (var e, n, r = [t], i = 1; arguments.length > i;)
                r.push(arguments[i++]); if (n = e = r[1], (y(e) || void 0 !== t) && !G(t))
                return m(e) || (e = function (t, e) { if ("function" == typeof n && (e = n.call(this, t, e)), !G(e))
                    return e; }), r[1] = e, R.apply(N, r); } }), A.prototype[D] || n(43)(A.prototype, D, A.prototype.valueOf), f(A, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
    }, function (t, e, n) { var r = n(56), i = n(107), a = n(77); t.exports = function (t) { var e = r(t), n = i.f; if (n)
        for (var o, s = n(t), u = a.f, l = 0; s.length > l;)
            u.call(t, o = s[l++]) && e.push(o); return e; }; }, function (t, e, n) { var r = n(57); t.exports = Array.isArray || function (t) { return "Array" == r(t); }; }, function (t, e, n) { var r = n(45), i = n(161).f, a = {}.toString, o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function (t) { try {
        return i(t);
    }
    catch (t) {
        return o.slice();
    } }; t.exports.f = function (t) { return o && "[object Window]" == a.call(t) ? s(t) : i(r(t)); }; }, function (t, e, n) { n(110)("asyncIterator"); }, function (t, e, n) { n(110)("observable"); }, function (t, e, n) { t.exports = { default: n(288), __esModule: !0 }; }, function (t, e, n) { n(289), t.exports = n(13).Object.setPrototypeOf; }, function (t, e, n) { var r = n(20); r(r.S, "Object", { setPrototypeOf: n(290).set }); }, function (t, e, n) { var r = n(31), i = n(28), a = function (t, e) { if (i(t), !r(e) && null !== e)
        throw TypeError(e + ": can't set as prototype!"); }; t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) { try {
            r = n(50)(Function.call, n(111).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array);
        }
        catch (t) {
            e = !0;
        } return function (t, n) { return a(t, n), e ? t.__proto__ = n : r(t, n), t; }; }({}, !1) : void 0), check: a }; }, function (t, e, n) { t.exports = { default: n(292), __esModule: !0 }; }, function (t, e, n) { n(293); var r = n(13).Object; t.exports = function (t, e) { return r.create(t, e); }; }, function (t, e, n) { var r = n(20); r(r.S, "Object", { create: n(108) }); }, function (t, e, n) {
        "use strict";
        function r() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null; }
        function i(t, e, n) { if (t && l.isObject(t) && t instanceof r)
            return t; var i = new r; return i.parse(t, e, n), i; }
        function a(t) { return l.isString(t) && (t = i(t)), t instanceof r ? t.format() : r.prototype.format.call(t); }
        function o(t, e) { return i(t, !1, !0).resolve(e); }
        function s(t, e) { return t ? i(t, !1, !0).resolveObject(e) : e; }
        var u = n(295), l = n(297);
        e.parse = i, e.resolve = o, e.resolveObject = s, e.format = a, e.Url = r;
        var c = /^([a-z0-9.+-]+:)/i, f = /:[0-9]*$/, d = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, h = ["<", ">", '"', "`", " ", "\r", "\n", "\t"], p = ["{", "}", "|", "\\", "^", "`"].concat(h), v = ["'"].concat(p), g = ["%", "/", "?", ";", "#"].concat(v), m = ["/", "?", "#"], b = /^[+a-z0-9A-Z_-]{0,63}$/, y = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, _ = { javascript: !0, "javascript:": !0 }, w = { javascript: !0, "javascript:": !0 }, x = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, k = n(298);
        r.prototype.parse = function (t, e, n) { if (!l.isString(t))
            throw new TypeError("Parameter 'url' must be a string, not " + typeof t); var r = t.indexOf("?"), i = -1 !== r && r < t.indexOf("#") ? "?" : "#", a = t.split(i), o = /\\/g; a[0] = a[0].replace(o, "/"), t = a.join(i); var s = t; if (s = s.trim(), !n && 1 === t.split("#").length) {
            var f = d.exec(s);
            if (f)
                return this.path = s, this.href = s, this.pathname = f[1], f[2] ? (this.search = f[2], this.query = e ? k.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
        } var h = c.exec(s); if (h) {
            h = h[0];
            var p = h.toLowerCase();
            this.protocol = p, s = s.substr(h.length);
        } if (n || h || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var O = "//" === s.substr(0, 2);
            !O || h && w[h] || (s = s.substr(2), this.slashes = !0);
        } if (!w[h] && (O || h && !x[h])) {
            for (var C = -1, M = 0; M < m.length; M++) {
                var j = s.indexOf(m[M]);
                -1 !== j && (-1 === C || j < C) && (C = j);
            }
            var E, S;
            S = -1 === C ? s.lastIndexOf("@") : s.lastIndexOf("@", C), -1 !== S && (E = s.slice(0, S), s = s.slice(S + 1), this.auth = decodeURIComponent(E)), C = -1;
            for (var M = 0; M < g.length; M++) {
                var j = s.indexOf(g[M]);
                -1 !== j && (-1 === C || j < C) && (C = j);
            }
            -1 === C && (C = s.length), this.host = s.slice(0, C), s = s.slice(C), this.parseHost(), this.hostname = this.hostname || "";
            var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!T)
                for (var A = this.hostname.split(/\./), M = 0, N = A.length; M < N; M++) {
                    var R = A[M];
                    if (R && !R.match(b)) {
                        for (var P = "", D = 0, L = R.length; D < L; D++)
                            R.charCodeAt(D) > 127 ? P += "x" : P += R[D];
                        if (!P.match(b)) {
                            var V = A.slice(0, M), B = A.slice(M + 1), z = R.match(y);
                            z && (V.push(z[1]), B.unshift(z[2])), B.length && (s = "/" + B.join(".") + s), this.hostname = V.join(".");
                            break;
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = u.toASCII(this.hostname));
            var I = this.port ? ":" + this.port : "", U = this.hostname || "";
            this.host = U + I, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s));
        } if (!_[p])
            for (var M = 0, N = v.length; M < N; M++) {
                var F = v[M];
                if (-1 !== s.indexOf(F)) {
                    var H = encodeURIComponent(F);
                    H === F && (H = escape(F)), s = s.split(F).join(H);
                }
            } var q = s.indexOf("#"); -1 !== q && (this.hash = s.substr(q), s = s.slice(0, q)); var $ = s.indexOf("?"); if (-1 !== $ ? (this.search = s.substr($), this.query = s.substr($ + 1), e && (this.query = k.parse(this.query)), s = s.slice(0, $)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), x[p] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var I = this.pathname || "", G = this.search || "";
            this.path = I + G;
        } return this.href = this.format(), this; }, r.prototype.format = function () { var t = this.auth || ""; t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@"); var e = this.protocol || "", n = this.pathname || "", r = this.hash || "", i = !1, a = ""; this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && l.isObject(this.query) && Object.keys(this.query).length && (a = k.stringify(this.query)); var o = this.search || a && "?" + a || ""; return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || x[e]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), o && "?" !== o.charAt(0) && (o = "?" + o), n = n.replace(/[?#]/g, function (t) { return encodeURIComponent(t); }), o = o.replace("#", "%23"), e + i + n + o + r; }, r.prototype.resolve = function (t) { return this.resolveObject(i(t, !1, !0)).format(); }, r.prototype.resolveObject = function (t) { if (l.isString(t)) {
            var e = new r;
            e.parse(t, !1, !0), t = e;
        } for (var n = new r, i = Object.keys(this), a = 0; a < i.length; a++) {
            var o = i[a];
            n[o] = this[o];
        } if (n.hash = t.hash, "" === t.href)
            return n.href = n.format(), n; if (t.slashes && !t.protocol) {
            for (var s = Object.keys(t), u = 0; u < s.length; u++) {
                var c = s[u];
                "protocol" !== c && (n[c] = t[c]);
            }
            return x[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
        } if (t.protocol && t.protocol !== n.protocol) {
            if (!x[t.protocol]) {
                for (var f = Object.keys(t), d = 0; d < f.length; d++) {
                    var h = f[d];
                    n[h] = t[h];
                }
                return n.href = n.format(), n;
            }
            if (n.protocol = t.protocol, t.host || w[t.protocol])
                n.pathname = t.pathname;
            else {
                for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift());)
                    ;
                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/");
            }
            if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
                var v = n.pathname || "", g = n.search || "";
                n.path = v + g;
            }
            return n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
        } var m = n.pathname && "/" === n.pathname.charAt(0), b = t.host || t.pathname && "/" === t.pathname.charAt(0), y = b || m || n.host && t.pathname, _ = y, k = n.pathname && n.pathname.split("/") || [], p = t.pathname && t.pathname.split("/") || [], O = n.protocol && !x[n.protocol]; if (O && (n.hostname = "", n.port = null, n.host && ("" === k[0] ? k[0] = n.host : k.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)), t.host = null), y = y && ("" === p[0] || "" === k[0])), b)
            n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, k = p;
        else if (p.length)
            k || (k = []), k.pop(), k = k.concat(p), n.search = t.search, n.query = t.query;
        else if (!l.isNullOrUndefined(t.search)) {
            if (O) {
                n.hostname = n.host = k.shift();
                var C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                C && (n.auth = C.shift(), n.host = n.hostname = C.shift());
            }
            return n.search = t.search, n.query = t.query, l.isNull(n.pathname) && l.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
        } if (!k.length)
            return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n; for (var M = k.slice(-1)[0], j = (n.host || t.host || k.length > 1) && ("." === M || ".." === M) || "" === M, E = 0, S = k.length; S >= 0; S--)
            M = k[S], "." === M ? k.splice(S, 1) : ".." === M ? (k.splice(S, 1), E++) : E && (k.splice(S, 1), E--); if (!y && !_)
            for (; E--; E)
                k.unshift(".."); !y || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""), j && "/" !== k.join("/").substr(-1) && k.push(""); var T = "" === k[0] || k[0] && "/" === k[0].charAt(0); if (O) {
            n.hostname = n.host = T ? "" : k.length ? k.shift() : "";
            var C = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
            C && (n.auth = C.shift(), n.host = n.hostname = C.shift());
        } return y = y || n.host && k.length, y && !T && k.unshift(""), k.length ? n.pathname = k.join("/") : (n.pathname = null, n.path = null), l.isNull(n.pathname) && l.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n; }, r.prototype.parseHost = function () { var t = this.host, e = f.exec(t); e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t); };
    }, function (t, e, n) { (function (t, r) { var i; !function (a) { function o(t) { throw new RangeError(N[t]); } function s(t, e) { for (var n = t.length, r = []; n--;)
        r[n] = e(t[n]); return r; } function u(t, e) { var n = t.split("@"), r = ""; return n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(A, "."), r + s(t.split("."), e).join("."); } function l(t) { for (var e, n, r = [], i = 0, a = t.length; i < a;)
        e = t.charCodeAt(i++), e >= 55296 && e <= 56319 && i < a ? (n = t.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e); return r; } function c(t) { return s(t, function (t) { var e = ""; return t > 65535 && (t -= 65536, e += D(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += D(t); }).join(""); } function f(t) { return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : w; } function d(t, e) { return t + 22 + 75 * (t < 26) - ((0 != e) << 5); } function h(t, e, n) { var r = 0; for (t = n ? P(t / C) : t >> 1, t += P(t / e); t > R * k >> 1; r += w)
        t = P(t / R); return P(r + (R + 1) * t / (t + O)); } function p(t) { var e, n, r, i, a, s, u, l, d, p, v = [], g = t.length, m = 0, b = j, y = M; for (n = t.lastIndexOf(E), n < 0 && (n = 0), r = 0; r < n; ++r)
        t.charCodeAt(r) >= 128 && o("not-basic"), v.push(t.charCodeAt(r)); for (i = n > 0 ? n + 1 : 0; i < g;) {
        for (a = m, s = 1, u = w; i >= g && o("invalid-input"), l = f(t.charCodeAt(i++)), (l >= w || l > P((_ - m) / s)) && o("overflow"), m += l * s, d = u <= y ? x : u >= y + k ? k : u - y, !(l < d); u += w)
            p = w - d, s > P(_ / p) && o("overflow"), s *= p;
        e = v.length + 1, y = h(m - a, e, 0 == a), P(m / e) > _ - b && o("overflow"), b += P(m / e), m %= e, v.splice(m++, 0, b);
    } return c(v); } function v(t) { var e, n, r, i, a, s, u, c, f, p, v, g, m, b, y, O = []; for (t = l(t), g = t.length, e = j, n = 0, a = M, s = 0; s < g; ++s)
        (v = t[s]) < 128 && O.push(D(v)); for (r = i = O.length, i && O.push(E); r < g;) {
        for (u = _, s = 0; s < g; ++s)
            (v = t[s]) >= e && v < u && (u = v);
        for (m = r + 1, u - e > P((_ - n) / m) && o("overflow"), n += (u - e) * m, e = u, s = 0; s < g; ++s)
            if (v = t[s], v < e && ++n > _ && o("overflow"), v == e) {
                for (c = n, f = w; p = f <= a ? x : f >= a + k ? k : f - a, !(c < p); f += w)
                    y = c - p, b = w - p, O.push(D(d(p + y % b, 0))), c = P(y / b);
                O.push(D(d(c, 0))), a = h(n, m, r == i), n = 0, ++r;
            }
        ++n, ++e;
    } return O.join(""); } function g(t) { return u(t, function (t) { return S.test(t) ? p(t.slice(4).toLowerCase()) : t; }); } function m(t) { return u(t, function (t) { return T.test(t) ? "xn--" + v(t) : t; }); } var b = ("object" == typeof e && e && e.nodeType, "object" == typeof t && t && t.nodeType, "object" == typeof r && r); var y, _ = 2147483647, w = 36, x = 1, k = 26, O = 38, C = 700, M = 72, j = 128, E = "-", S = /^xn--/, T = /[^\x20-\x7E]/, A = /[\x2E\u3002\uFF0E\uFF61]/g, N = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, R = w - x, P = Math.floor, D = String.fromCharCode; y = { version: "1.4.1", ucs2: { decode: l, encode: c }, decode: p, encode: v, toASCII: m, toUnicode: g }, void 0 !== (i = function () { return y; }.call(e, n, e, t)) && (t.exports = i); }(); }).call(e, n(296)(t), n(74)); }, function (t, e) { t.exports = function (t) { return t.webpackPolyfill || (t.deprecate = function () { }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function () { return t.l; } }), Object.defineProperty(t, "id", { enumerable: !0, get: function () { return t.i; } }), t.webpackPolyfill = 1), t; }; }, function (t, e, n) {
        "use strict";
        t.exports = { isString: function (t) { return "string" == typeof t; }, isObject: function (t) { return "object" == typeof t && null !== t; }, isNull: function (t) { return null === t; }, isNullOrUndefined: function (t) { return null == t; } };
    }, function (t, e, n) {
        "use strict";
        e.decode = e.parse = n(299), e.encode = e.stringify = n(300);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return Object.prototype.hasOwnProperty.call(t, e); }
        t.exports = function (t, e, n, a) { e = e || "&", n = n || "="; var o = {}; if ("string" != typeof t || 0 === t.length)
            return o; var s = /\+/g; t = t.split(e); var u = 1e3; a && "number" == typeof a.maxKeys && (u = a.maxKeys); var l = t.length; u > 0 && l > u && (l = u); for (var c = 0; c < l; ++c) {
            var f, d, h, p, v = t[c].replace(s, "%20"), g = v.indexOf(n);
            g >= 0 ? (f = v.substr(0, g), d = v.substr(g + 1)) : (f = v, d = ""), h = decodeURIComponent(f), p = decodeURIComponent(d), r(o, h) ? i(o[h]) ? o[h].push(p) : o[h] = [o[h], p] : o[h] = p;
        } return o; };
        var i = Array.isArray || function (t) { return "[object Array]" === Object.prototype.toString.call(t); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { if (t.map)
            return t.map(e); for (var n = [], r = 0; r < t.length; r++)
            n.push(e(t[r], r)); return n; }
        var i = function (t) { switch (typeof t) {
            case "string": return t;
            case "boolean": return t ? "true" : "false";
            case "number": return isFinite(t) ? t : "";
            default: return "";
        } };
        t.exports = function (t, e, n, s) { return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? r(o(t), function (o) { var s = encodeURIComponent(i(o)) + n; return a(t[o]) ? r(t[o], function (t) { return s + encodeURIComponent(i(t)); }).join(e) : s + encodeURIComponent(i(t[o])); }).join(e) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(t)) : ""; };
        var a = Array.isArray || function (t) { return "[object Array]" === Object.prototype.toString.call(t); }, o = Object.keys || function (t) { var e = []; for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e.push(n); return e; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.ClipboardBehavior = e.TooltipBehavior = e.LoadBehavior = void 0;
        var i = n(302), a = r(i), o = n(303), s = r(o), u = n(323), l = r(u);
        e.LoadBehavior = a.default, e.TooltipBehavior = s.default, e.ClipboardBehavior = l.default;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(6), l = r(u), c = n(4), f = r(c), d = n(5), h = r(d), p = n(9), v = function (t) { function e() { return (0, s.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, a.default)(e)).apply(this, arguments)); } return (0, h.default)(e, t), (0, l.default)(e, [{ key: "initialize", value: function () { var t = this, e = this.view.render.bind(this.view); this.loaded = !1, this.view.render = function () { t.loaded ? e() : t.view.loadData().then(function () { t.loaded = !0, e(); }); }; } }]), e; }(p.Behavior);
        e.default = v;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var a, o, s, u = n(15), l = r(u), c = n(2), f = r(c), d = n(3), h = r(d), p = n(6), v = r(p), g = n(4), m = r(g), b = n(5), y = r(b), _ = n(9), w = n(46), x = r(w), k = n(7), O = n(8), C = (a = (0, O.on)("mouseenter [data-tooltip]"), o = (0, O.on)("mouseleave [data-tooltip]"), s = function (t) { function e() { return (0, h.default)(this, e), (0, m.default)(this, (e.__proto__ || (0, f.default)(e)).apply(this, arguments)); } return (0, y.default)(e, t), (0, v.default)(e, [{ key: "initialize", value: function () { this.tooltip = new x.default(this.options); } }, { key: "onDestroy", value: function () { this.tooltip.hide(); } }, { key: "onTipHover", value: function (t) { var e = this.$(t.currentTarget); this.tooltip.show((0, k.escapeExpression)(e.data("tooltip")), e); } }, { key: "onTipLeave", value: function () { this.tooltip.hide(); } }]), e; }(_.Behavior), i(s.prototype, "onTipHover", [a], (0, l.default)(s.prototype, "onTipHover"), s.prototype), i(s.prototype, "onTipLeave", [o], (0, l.default)(s.prototype, "onTipLeave"), s.prototype), s);
        e.default = C;
    }, function (t, e, n) { n(305); var r = n(13).Object; t.exports = function (t, e) { return r.getOwnPropertyDescriptor(t, e); }; }, function (t, e, n) { var r = n(45), i = n(111).f; n(78)("getOwnPropertyDescriptor", function () { return function (t, e) { return i(r(t), e); }; }); }, function (t, e) { }, function (t, e, n) { !function (t, r) { r(e, n(16), n(14)); }(0, function (t, e, n) {
        "use strict";
        function r(t) { return function (n, r, i) { if (n.events && !e.has(n, "events") && (n.events = e.clone(n.events)), n.events || (n.events = {}), e.isFunction(n.events))
            throw new Error("The on decorator is not compatible with an events method"); if (!t)
            throw new Error("The on decorator requires an eventName argument"); return n.events[t] = r, i; }; }
        function i(t) { return function (e) { e.prototype.tagName = t; }; }
        function a(t) { return function (e) { if (!(t.prototype instanceof n.Model))
            throw new Error("The model decorator takes either a single argument that should be an instance of Backbone.Model"); e.prototype.model = t; }; }
        function o(t) { return function (n) { if (!e.isString(t))
            throw new Error("The comparator decorator takes either a single argument that should be a string"); n.prototype.comparator = t; }; }
        function s() { for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]; return function (t) { var r = t.prototype.defaults || {}, i = n[0], a = n[1]; if (e.isObject(i))
            e.extend(r, i);
        else {
            if (!e.isString(i) || e.isUndefined(a))
                throw new Error("The defaults decorator takes either a single object as an argument or a key and value");
            r[i] = a;
        } t.prototype.defaults = r; }; }
        function u(t) { return function (n, r, i) { if (n.routes || (n.routes = {}), e.isFunction(n.routes))
            throw new Error("The route decorator is not compatible with a route method"); if (!t)
            throw new Error("The route decorator requires an route string argument"); return n.routes[t] = r, i; }; }
        function l(t) { return function (n, r, i) { if (n.modelEvents || (n.modelEvents = {}), e.isFunction(n.modelEvents))
            throw new Error("The onModel decorator is not compatible with a modelEvents method"); if (!t)
            throw new Error("The onModel decorator requires an eventName argument"); return n.modelEvents[t] = r, i; }; }
        function c(t) { return function (n, r, i) { if (n.collectionEvents || (n.collectionEvents = {}), e.isFunction(n.collectionEvents))
            throw new Error("The onCollection decorator is not compatible with a collectionEvents method"); if (!t)
            throw new Error("The onCollection decorator requires an eventName argument"); return n.collectionEvents[t] = r, i; }; }
        function f(t) { return function (e) { e.prototype.template = t; }; }
        function d(t) { return function (e) { e.prototype.childView = t; }; }
        function h(t) { return function (e) { e.prototype.childViewContainer = t; }; }
        function p() { for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]; return function (t) { var r = t.prototype.ui || {}, i = n[0], a = n[1]; if (e.isObject(i))
            e.extend(r, n[0]);
        else {
            if (!e.isString(i) || !e.isString(a))
                throw new Error("The ui decorator takes either a single object as an argument or a key and value string");
            r[i] = a;
        } t.prototype.ui = r; }; }
        function v(t, n, r) { var i = Object.getPrototypeOf(t)[n]; if (!e.isFunction(i))
            throw new Error("The useSuper method requires the parent class to implement this function somewhere on its prototype chain"); return r.value = function () { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n]; i.apply(this, e); }, r; }
        function g(t) { return function (r) { if (!n.LocalStorage)
            throw new Error("The localStorage decorator requires Backbone.LocalStorage to have been loaded before use"); if (!e.isString(t))
            throw new Error("The localStorage decorator requires a single string argument which will serve as the localStorage key"); r.prototype.localStorage = new n.LocalStorage(t); }; }
        function m(t, n) { return function (r, i, a) { if (r.radioRequests || (r.radioRequests = {}), e.isFunction(r.radioRequests))
            throw new Error("The replyRadio decorator is not compatible with a radioRequests method"); if (!e.isString(t) || !e.isString(n))
            throw new Error("The replyRadio decorator requires 2 arguments, a channel and a request string."); return r.radioRequests[t + " " + n] = i, a; }; }
        e = "default" in e ? e.default : e, n = "default" in n ? n.default : n, t.on = r, t.tagName = i, t.model = a, t.comparator = o, t.defaults = s, t.route = u, t.onModel = l, t.onCollection = c, t.template = f, t.childView = d, t.childViewContainer = h, t.ui = p, t.useSuper = v, t.localStorage = g, t.replyRadio = m;
    }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t) { if (t && t.__esModule)
            return t; var e = {}; if (null != t)
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e.default = t, e; }
        function a() { var t = new s.HandlebarsEnvironment; return h.extend(t, s), t.SafeString = l.default, t.Exception = f.default, t.Utils = h, t.escapeExpression = h.escapeExpression, t.VM = v, t.template = function (e) { return v.template(e, t); }, t; }
        e.__esModule = !0;
        var o = n(165), s = i(o), u = n(320), l = r(u), c = n(60), f = r(c), d = n(33), h = i(d), p = n(321), v = i(p), g = n(322), m = r(g), b = a();
        b.create = a, m.default(b), b.default = b, e.default = b, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t) { o.default(t), u.default(t), c.default(t), d.default(t), p.default(t), g.default(t), b.default(t); }
        e.__esModule = !0, e.registerDefaultHelpers = i;
        var a = n(310), o = r(a), s = n(311), u = r(s), l = n(312), c = r(l), f = n(313), d = r(f), h = n(314), p = r(h), v = n(315), g = r(v), m = n(316), b = r(m);
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(33);
        e.default = function (t) { t.registerHelper("blockHelperMissing", function (e, n) { var i = n.inverse, a = n.fn; if (!0 === e)
            return a(this); if (!1 === e || null == e)
            return i(this); if (r.isArray(e))
            return e.length > 0 ? (n.ids && (n.ids = [n.name]), t.helpers.each(e, n)) : i(this); if (n.data && n.ids) {
            var o = r.createFrame(n.data);
            o.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = { data: o };
        } return a(e, n); }); }, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(33), i = n(60), a = function (t) { return t && t.__esModule ? t : { default: t }; }(i);
        e.default = function (t) { t.registerHelper("each", function (t, e) { function n(e, n, a) { l && (l.key = e, l.index = n, l.first = 0 === n, l.last = !!a, c && (l.contextPath = c + e)), u += i(t[e], { data: l, blockParams: r.blockParams([t[e], e], [c + e, null]) }); } if (!e)
            throw new a.default("Must pass iterator to #each"); var i = e.fn, o = e.inverse, s = 0, u = "", l = void 0, c = void 0; if (e.data && e.ids && (c = r.appendContextPath(e.data.contextPath, e.ids[0]) + "."), r.isFunction(t) && (t = t.call(this)), e.data && (l = r.createFrame(e.data)), t && "object" == typeof t)
            if (r.isArray(t))
                for (var f = t.length; s < f; s++)
                    s in t && n(s, s, s === t.length - 1);
            else {
                var d = void 0;
                for (var h in t)
                    t.hasOwnProperty(h) && (void 0 !== d && n(d, s - 1), d = h, s++);
                void 0 !== d && n(d, s - 1, !0);
            } return 0 === s && (u = o(this)), u; }); }, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(60), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        e.default = function (t) { t.registerHelper("helperMissing", function () { if (1 !== arguments.length)
            throw new i.default('Missing helper: "' + arguments[arguments.length - 1].name + '"'); }); }, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(33);
        e.default = function (t) { t.registerHelper("if", function (t, e) { return r.isFunction(t) && (t = t.call(this)), !e.hash.includeZero && !t || r.isEmpty(t) ? e.inverse(this) : e.fn(this); }), t.registerHelper("unless", function (e, n) { return t.helpers.if.call(this, e, { fn: n.inverse, inverse: n.fn, hash: n.hash }); }); }, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0, e.default = function (t) { t.registerHelper("log", function () { for (var e = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++)
            e.push(arguments[r]); var i = 1; null != n.hash.level ? i = n.hash.level : n.data && null != n.data.level && (i = n.data.level), e[0] = i, t.log.apply(t, e); }); }, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0, e.default = function (t) { t.registerHelper("lookup", function (t, e) { return t && t[e]; }); }, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(33);
        e.default = function (t) { t.registerHelper("with", function (t, e) { r.isFunction(t) && (t = t.call(this)); var n = e.fn; if (r.isEmpty(t))
            return e.inverse(this); var i = e.data; return e.data && e.ids && (i = r.createFrame(e.data), i.contextPath = r.appendContextPath(e.data.contextPath, e.ids[0])), n(t, { data: i, blockParams: r.blockParams([t], [i && i.contextPath]) }); }); }, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        function r(t) { a.default(t); }
        e.__esModule = !0, e.registerDefaultDecorators = r;
        var i = n(318), a = function (t) { return t && t.__esModule ? t : { default: t }; }(i);
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(33);
        e.default = function (t) { t.registerDecorator("inline", function (t, e, n, i) { var a = t; return e.partials || (e.partials = {}, a = function (i, a) { var o = n.partials; n.partials = r.extend({}, o, e.partials); var s = t(i, a); return n.partials = o, s; }), e.partials[i.args[0]] = i.fn, a; }); }, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(33), i = { methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function (t) { if ("string" == typeof t) {
                var e = r.indexOf(i.methodMap, t.toLowerCase());
                t = e >= 0 ? e : parseInt(t, 10);
            } return t; }, log: function (t) { if (t = i.lookupLevel(t), "undefined" != typeof console && i.lookupLevel(i.level) <= t) {
                var e = i.methodMap[t];
                console[e] || (e = "log");
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                    r[a - 1] = arguments[a];
                console[e].apply(console, r);
            } } };
        e.default = i, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        function r(t) { this.string = t; }
        e.__esModule = !0, r.prototype.toString = r.prototype.toHTML = function () { return "" + this.string; }, e.default = r, t.exports = e.default;
    }, function (t, e, n) {
        "use strict";
        function r(t) { var e = t && t[0] || 1, n = v.COMPILER_REVISION; if (e !== n) {
            if (e < n) {
                var r = v.REVISION_CHANGES[n], i = v.REVISION_CHANGES[e];
                throw new p.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").");
            }
            throw new p.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").");
        } }
        function i(t, e) { function n(n, r, i) { i.hash && (r = d.extend({}, r, i.hash), i.ids && (i.ids[0] = !0)), n = e.VM.resolvePartial.call(this, n, r, i); var a = e.VM.invokePartial.call(this, n, r, i); if (null == a && e.compile && (i.partials[i.name] = e.compile(n, t.compilerOptions, e), a = i.partials[i.name](r, i)), null != a) {
            if (i.indent) {
                for (var o = a.split("\n"), s = 0, u = o.length; s < u && (o[s] || s + 1 !== u); s++)
                    o[s] = i.indent + o[s];
                a = o.join("\n");
            }
            return a;
        } throw new p.default("The partial " + i.name + " could not be compiled when running in runtime-only mode"); } function r(e) { function n(e) { return "" + t.main(i, e, i.helpers, i.partials, o, u, s); } var a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], o = a.data; r._setup(a), !a.partial && t.useData && (o = l(e, o)); var s = void 0, u = t.useBlockParams ? [] : void 0; return t.useDepths && (s = a.depths ? e != a.depths[0] ? [e].concat(a.depths) : a.depths : [e]), (n = c(t.main, n, i, a.depths || [], o, u))(e, a); } if (!e)
            throw new p.default("No environment passed to template"); if (!t || !t.main)
            throw new p.default("Unknown template object: " + typeof t); t.main.decorator = t.main_d, e.VM.checkRevision(t.compiler); var i = { strict: function (t, e) { if (!(e in t))
                throw new p.default('"' + e + '" not defined in ' + t); return t[e]; }, lookup: function (t, e) { for (var n = t.length, r = 0; r < n; r++)
                if (t[r] && null != t[r][e])
                    return t[r][e]; }, lambda: function (t, e) { return "function" == typeof t ? t.call(e) : t; }, escapeExpression: d.escapeExpression, invokePartial: n, fn: function (e) { var n = t[e]; return n.decorator = t[e + "_d"], n; }, programs: [], program: function (t, e, n, r, i) { var o = this.programs[t], s = this.fn(t); return e || i || r || n ? o = a(this, t, s, e, n, r, i) : o || (o = this.programs[t] = a(this, t, s)), o; }, data: function (t, e) { for (; t && e--;)
                t = t._parent; return t; }, merge: function (t, e) { var n = t || e; return t && e && t !== e && (n = d.extend({}, e, t)), n; }, nullContext: Object.seal({}), noop: e.VM.noop, compilerInfo: t.compiler }; return r.isTop = !0, r._setup = function (n) { n.partial ? (i.helpers = n.helpers, i.partials = n.partials, i.decorators = n.decorators) : (i.helpers = i.merge(n.helpers, e.helpers), t.usePartial && (i.partials = i.merge(n.partials, e.partials)), (t.usePartial || t.useDecorators) && (i.decorators = i.merge(n.decorators, e.decorators))); }, r._child = function (e, n, r, o) { if (t.useBlockParams && !r)
            throw new p.default("must pass block params"); if (t.useDepths && !o)
            throw new p.default("must pass parent depths"); return a(i, e, t[e], n, 0, r, o); }, r; }
        function a(t, e, n, r, i, a, o) { function s(e) { var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], s = o; return !o || e == o[0] || e === t.nullContext && null === o[0] || (s = [e].concat(o)), n(t, e, t.helpers, t.partials, i.data || r, a && [i.blockParams].concat(a), s); } return s = c(n, s, t, o, r, a), s.program = e, s.depth = o ? o.length : 0, s.blockParams = i || 0, s; }
        function o(t, e, n) { return t ? t.call || n.name || (n.name = t, t = n.partials[t]) : t = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], t; }
        function s(t, e, n) { var r = n.data && n.data["partial-block"]; n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath); var i = void 0; if (n.fn && n.fn !== u && function () { n.data = v.createFrame(n.data); var t = n.fn; i = n.data["partial-block"] = function (e) { var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; return n.data = v.createFrame(n.data), n.data["partial-block"] = r, t(e, n); }, t.partials && (n.partials = d.extend({}, n.partials, t.partials)); }(), void 0 === t && i && (t = i), void 0 === t)
            throw new p.default("The partial " + n.name + " could not be found"); if (t instanceof Function)
            return t(e, n); }
        function u() { return ""; }
        function l(t, e) { return e && "root" in e || (e = e ? v.createFrame(e) : {}, e.root = t), e; }
        function c(t, e, n, r, i, a) { if (t.decorator) {
            var o = {};
            e = t.decorator(e, o, n, r && r[0], i, a, r), d.extend(e, o);
        } return e; }
        e.__esModule = !0, e.checkRevision = r, e.template = i, e.wrapProgram = a, e.resolvePartial = o, e.invokePartial = s, e.noop = u;
        var f = n(33), d = function (t) { if (t && t.__esModule)
            return t; var e = {}; if (null != t)
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e.default = t, e; }(f), h = n(60), p = function (t) { return t && t.__esModule ? t : { default: t }; }(h), v = n(165);
    }, function (t, e, n) {
        "use strict";
        (function (n) { e.__esModule = !0, e.default = function (t) { var e = void 0 !== n ? n : window, r = e.Handlebars; t.noConflict = function () { return e.Handlebars === t && (e.Handlebars = r), t; }; }, t.exports = e.default; }).call(e, n(74));
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var a, o, s, u, l = n(15), c = r(l), f = n(2), d = r(f), h = n(3), p = r(h), v = n(6), g = r(v), m = n(4), b = r(m), y = n(5), _ = r(y), w = n(9), x = n(8), k = n(324), O = r(k), C = n(46), M = r(C), j = n(1), E = r(j), S = (a = (0, x.on)("mouseenter [data-copy]"), o = (0, x.on)("mouseleave [data-copy]"), s = (0, x.on)("click [data-copy]"), u = function (t) { function e() { return (0, p.default)(this, e), (0, b.default)(this, (e.__proto__ || (0, d.default)(e)).apply(this, arguments)); } return (0, _.default)(e, t), (0, g.default)(e, [{ key: "initialize", value: function () { this.tooltip = new M.default({ position: "left" }); } }, { key: "onTipHover", value: function (t) { var e = this.$(t.currentTarget); this.tooltip.show((0, E.default)("controls.clipboard"), e); } }, { key: "onTipLeave", value: function () { this.tooltip.hide(); } }, { key: "onCopyableClick", value: function (t) { var e = this.$(t.currentTarget); (0, O.default)(e.data("copy")) ? this.tooltip.show((0, E.default)("controls.clipboardSuccess"), e) : this.tooltip.show((0, E.default)("controls.clipboardError"), e); } }]), e; }(w.Behavior), i(u.prototype, "onTipHover", [a], (0, c.default)(u.prototype, "onTipHover"), u.prototype), i(u.prototype, "onTipLeave", [o], (0, c.default)(u.prototype, "onTipLeave"), u.prototype), i(u.prototype, "onCopyableClick", [s], (0, c.default)(u.prototype, "onCopyableClick"), u.prototype), u);
        e.default = S;
    }, function (t, e, n) {
        "use strict";
        t.exports = function (t) { var e = document.createElement("textarea"); e.value = t, e.setAttribute("readonly", ""), e.style.contain = "strict", e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "12pt"; var n = getSelection(), r = !1; n.rangeCount > 0 && (r = n.getRangeAt(0)), document.body.appendChild(e), e.select(); var i = !1; try {
            i = document.execCommand("copy");
        }
        catch (t) { } return document.body.removeChild(e), r && (n.removeAllRanges(), n.addRange(r)), i; };
    }, function (t, e, n) { n(162), n(59), n(81), n(326), n(333), n(334), t.exports = n(13).Promise; }, function (t, e, n) {
        "use strict";
        var r, i, a, o, s = n(79), u = n(19), l = n(50), c = n(112), f = n(20), d = n(31), h = n(75), p = n(327), v = n(328), g = n(169), m = n(170).set, b = n(330)(), y = n(114), _ = n(171), w = n(172), x = u.TypeError, k = u.process, O = u.Promise, C = "process" == c(k), M = function () { }, j = i = y.f, E = !!function () { try {
            var t = O.resolve(1), e = (t.constructor = {})[n(18)("species")] = function (t) { t(M, M); };
            return (C || "function" == typeof PromiseRejectionEvent) && t.then(M) instanceof e;
        }
        catch (t) { } }(), S = function (t) { var e; return !(!d(t) || "function" != typeof (e = t.then)) && e; }, T = function (t, e) { if (!t._n) {
            t._n = !0;
            var n = t._c;
            b(function () { for (var r = t._v, i = 1 == t._s, a = 0; n.length > a;)
                !function (e) { var n, a, o = i ? e.ok : e.fail, s = e.resolve, u = e.reject, l = e.domain; try {
                    o ? (i || (2 == t._h && R(t), t._h = 1), !0 === o ? n = r : (l && l.enter(), n = o(r), l && l.exit()), n === e.promise ? u(x("Promise-chain cycle")) : (a = S(n)) ? a.call(n, s, u) : s(n)) : u(r);
                }
                catch (t) {
                    u(t);
                } }(n[a++]); t._c = [], t._n = !1, e && !t._h && A(t); });
        } }, A = function (t) { m.call(u, function () { var e, n, r, i = t._v, a = N(t); if (a && (e = _(function () { C ? k.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({ promise: t, reason: i }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i); }), t._h = C || N(t) ? 2 : 1), t._a = void 0, a && e.e)
            throw e.v; }); }, N = function (t) { return 1 !== t._h && 0 === (t._a || t._c).length; }, R = function (t) { m.call(u, function () { var e; C ? k.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({ promise: t, reason: t._v }); }); }, P = function (t) { var e = this; e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), T(e, !0)); }, D = function (t) { var e, n = this; if (!n._d) {
            n._d = !0, n = n._w || n;
            try {
                if (n === t)
                    throw x("Promise can't be resolved itself");
                (e = S(t)) ? b(function () { var r = { _w: n, _d: !1 }; try {
                    e.call(t, l(D, r, 1), l(P, r, 1));
                }
                catch (t) {
                    P.call(r, t);
                } }) : (n._v = t, n._s = 1, T(n, !1));
            }
            catch (t) {
                P.call({ _w: n, _d: !1 }, t);
            }
        } };
        E || (O = function (t) { p(this, O, "Promise", "_h"), h(t), r.call(this); try {
            t(l(D, this, 1), l(P, this, 1));
        }
        catch (t) {
            P.call(this, t);
        } }, r = function (t) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1; }, r.prototype = n(331)(O.prototype, { then: function (t, e) { var n = j(g(this, O)); return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = C ? k.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && T(this, !1), n.promise; }, catch: function (t) { return this.then(void 0, t); } }), a = function () { var t = new r; this.promise = t, this.resolve = l(D, t, 1), this.reject = l(P, t, 1); }, y.f = j = function (t) { return t === O || t === o ? new a(t) : i(t); }), f(f.G + f.W + f.F * !E, { Promise: O }), n(80)(O, "Promise"), n(332)("Promise"), o = n(13).Promise, f(f.S + f.F * !E, "Promise", { reject: function (t) { var e = j(this); return (0, e.reject)(t), e.promise; } }), f(f.S + f.F * (s || !E), "Promise", { resolve: function (t) { return w(s && this === o ? O : this, t); } }), f(f.S + f.F * !(E && n(173)(function (t) { O.all(t).catch(M); })), "Promise", { all: function (t) { var e = this, n = j(e), r = n.resolve, i = n.reject, a = _(function () { var n = [], a = 0, o = 1; v(t, !1, function (t) { var s = a++, u = !1; n.push(void 0), o++, e.resolve(t).then(function (t) { u || (u = !0, n[s] = t, --o || r(n)); }, i); }), --o || r(n); }); return a.e && i(a.v), n.promise; }, race: function (t) { var e = this, n = j(e), r = n.reject, i = _(function () { v(t, !1, function (t) { e.resolve(t).then(n.resolve, r); }); }); return i.e && r(i.v), n.promise; } });
    }, function (t, e) { t.exports = function (t, e, n, r) { if (!(t instanceof e) || void 0 !== r && r in t)
        throw TypeError(n + ": incorrect invocation!"); return t; }; }, function (t, e, n) { var r = n(50), i = n(167), a = n(168), o = n(28), s = n(102), u = n(113), l = {}, c = {}, e = t.exports = function (t, e, n, f, d) { var h, p, v, g, m = d ? function () { return t; } : u(t), b = r(n, f, e ? 2 : 1), y = 0; if ("function" != typeof m)
        throw TypeError(t + " is not iterable!"); if (a(m)) {
        for (h = s(t.length); h > y; y++)
            if ((g = e ? b(o(p = t[y])[0], p[1]) : b(t[y])) === l || g === c)
                return g;
    }
    else
        for (v = m.call(t); !(p = v.next()).done;)
            if ((g = i(v, b, p.value, e)) === l || g === c)
                return g; }; e.BREAK = l, e.RETURN = c; }, function (t, e) { t.exports = function (t, e, n) { var r = void 0 === n; switch (e.length) {
        case 0: return r ? t() : t.call(n);
        case 1: return r ? t(e[0]) : t.call(n, e[0]);
        case 2: return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3: return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4: return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
    } return t.apply(n, e); }; }, function (t, e, n) { var r = n(19), i = n(170).set, a = r.MutationObserver || r.WebKitMutationObserver, o = r.process, s = r.Promise, u = "process" == n(57)(o); t.exports = function () { var t, e, n, l = function () { var r, i; for (u && (r = o.domain) && r.exit(); t;) {
        i = t.fn, t = t.next;
        try {
            i();
        }
        catch (r) {
            throw t ? n() : e = void 0, r;
        }
    } e = void 0, r && r.enter(); }; if (u)
        n = function () { o.nextTick(l); };
    else if (!a || r.navigator && r.navigator.standalone)
        if (s && s.resolve) {
            var c = s.resolve();
            n = function () { c.then(l); };
        }
        else
            n = function () { i.call(r, l); };
    else {
        var f = !0, d = document.createTextNode("");
        new a(l).observe(d, { characterData: !0 }), n = function () { d.data = f = !f; };
    } return function (r) { var i = { fn: r, next: void 0 }; e && (e.next = i), t || (t = i, n()), e = i; }; }; }, function (t, e, n) { var r = n(43); t.exports = function (t, e, n) { for (var i in e)
        n && t[i] ? t[i] = e[i] : r(t, i, e[i]); return t; }; }, function (t, e, n) {
        "use strict";
        var r = n(19), i = n(13), a = n(30), o = n(32), s = n(18)("species");
        t.exports = function (t) { var e = "function" == typeof i[t] ? i[t] : r[t]; o && e && !e[s] && a.f(e, s, { configurable: !0, get: function () { return this; } }); };
    }, function (t, e, n) {
        "use strict";
        var r = n(20), i = n(13), a = n(19), o = n(169), s = n(172);
        r(r.P + r.R, "Promise", { finally: function (t) { var e = o(this, i.Promise || a.Promise), n = "function" == typeof t; return this.then(n ? function (n) { return s(e, t()).then(function () { return n; }); } : t, n ? function (n) { return s(e, t()).then(function () { throw n; }); } : t); } });
    }, function (t, e, n) {
        "use strict";
        var r = n(20), i = n(114), a = n(171);
        r(r.S, "Promise", { try: function (t) { var e = i.f(this), n = a(t); return (n.e ? e.reject : e.resolve)(n.v), e.promise; } });
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), n.d(e, "changeLanguage", function () { return i; }), n.d(e, "cloneInstance", function () { return a; }), n.d(e, "createInstance", function () { return o; }), n.d(e, "dir", function () { return s; }), n.d(e, "exists", function () { return u; }), n.d(e, "getFixedT", function () { return l; }), n.d(e, "init", function () { return c; }), n.d(e, "loadLanguages", function () { return f; }), n.d(e, "loadNamespaces", function () { return d; }), n.d(e, "loadResources", function () { return h; }), n.d(e, "off", function () { return p; }), n.d(e, "on", function () { return v; }), n.d(e, "setDefaultNamespace", function () { return g; }), n.d(e, "t", function () { return m; }), n.d(e, "use", function () { return b; });
        var r = n(336);
        e.default = r.a;
        var i = r.a.changeLanguage.bind(r.a), a = r.a.cloneInstance.bind(r.a), o = r.a.createInstance.bind(r.a), s = r.a.dir.bind(r.a), u = r.a.exists.bind(r.a), l = r.a.getFixedT.bind(r.a), c = r.a.init.bind(r.a), f = r.a.loadLanguages.bind(r.a), d = r.a.loadNamespaces.bind(r.a), h = r.a.loadResources.bind(r.a), p = r.a.off.bind(r.a), v = r.a.on.bind(r.a), g = r.a.setDefaultNamespace.bind(r.a), m = r.a.t.bind(r.a), b = r.a.use.bind(r.a);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var i = n[r], a = Object.getOwnPropertyDescriptor(e, i);
            a && a.configurable && void 0 === t[i] && Object.defineProperty(t, i, a);
        } return t; }
        function i(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function a(t, e) { if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e; }
        function o(t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e)); }
        function s() { }
        var u = n(38), l = n(62), c = n(337), f = n(338), d = n(339), h = n(340), p = n(341), v = n(342), g = n(343), m = n(344), b = n(174), y = n(175), _ = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        } return t; }, w = function (t) { function e() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments[1]; i(this, e); var o = a(this, t.call(this)); if (o.options = Object(m.b)(n), o.services = {}, o.logger = u.a, o.modules = { external: [] }, r && !o.isInitialized && !n.isClone) {
            var s;
            if (!o.options.initImmediate)
                return s = o.init(n, r), a(o, s);
            setTimeout(function () { o.init(n, r); }, 0);
        } return o; } return o(e, t), e.prototype.init = function (t, e) { function n(t) { return t ? "function" == typeof t ? new t : t : null; } var r = this; if ("function" == typeof t && (e = t, t = {}), t || (t = {}), "v1" === t.compatibilityAPI ? this.options = _({}, Object(m.a)(), Object(m.b)(y.b(t)), {}) : "v1" === t.compatibilityJSON ? this.options = _({}, Object(m.a)(), Object(m.b)(y.c(t)), {}) : this.options = _({}, Object(m.a)(), this.options, Object(m.b)(t)), this.format = this.options.interpolation.format, e || (e = s), !this.options.isClone) {
            this.modules.logger ? u.a.init(n(this.modules.logger), this.options) : u.a.init(null, this.options);
            var i = new d.a(this.options);
            this.store = new c.a(this.options.resources, this.options);
            var a = this.services;
            a.logger = u.a, a.resourceStore = this.store, a.resourceStore.on("added removed", function (t, e) { a.cacheConnector.save(); }), a.languageUtils = i, a.pluralResolver = new h.a(i, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), a.interpolator = new p.a(this.options), a.backendConnector = new v.a(n(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", function (t) { for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                n[i - 1] = arguments[i]; r.emit.apply(r, [t].concat(n)); }), a.backendConnector.on("loaded", function (t) { a.cacheConnector.save(); }), a.cacheConnector = new g.a(n(this.modules.cache), a.resourceStore, a, this.options), a.cacheConnector.on("*", function (t) { for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                n[i - 1] = arguments[i]; r.emit.apply(r, [t].concat(n)); }), this.modules.languageDetector && (a.languageDetector = n(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.translator = new f.a(this.services, this.options), this.translator.on("*", function (t) { for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                n[i - 1] = arguments[i]; r.emit.apply(r, [t].concat(n)); }), this.modules.external.forEach(function (t) { t.init && t.init(r); });
        } ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"].forEach(function (t) { r[t] = function () { var e; return (e = r.store)[t].apply(e, arguments); }; }), "v1" === this.options.compatibilityAPI && y.a(this); var o = function () { r.changeLanguage(r.options.lng, function (t, n) { r.isInitialized = !0, r.logger.log("initialized", r.options), r.emit("initialized", r.options), e(t, n); }); }; return this.options.resources || !this.options.initImmediate ? o() : setTimeout(o, 0), this; }, e.prototype.loadResources = function () { var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s; if (this.options.resources)
            e(null);
        else {
            if (this.language && "cimode" === this.language.toLowerCase())
                return e();
            var n = [], r = function (e) { if (e) {
                t.services.languageUtils.toResolveHierarchy(e).forEach(function (t) { n.indexOf(t) < 0 && n.push(t); });
            } };
            if (this.language)
                r(this.language);
            else {
                this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function (t) { return r(t); });
            }
            this.options.preload && this.options.preload.forEach(function (t) { return r(t); }), this.services.cacheConnector.load(n, this.options.ns, function () { t.services.backendConnector.load(n, t.options.ns, e); });
        } }, e.prototype.reloadResources = function (t, e) { t || (t = this.languages), e || (e = this.options.ns), this.services.backendConnector.reload(t, e); }, e.prototype.use = function (t) { return "backend" === t.type && (this.modules.backend = t), "cache" === t.type && (this.modules.cache = t), ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t), "languageDetector" === t.type && (this.modules.languageDetector = t), "postProcessor" === t.type && b.a.addPostProcessor(t), "3rdParty" === t.type && this.modules.external.push(t), this; }, e.prototype.changeLanguage = function (t, e) { var n = this, r = function (t, r) { r && (n.emit("languageChanged", r), n.logger.log("languageChanged", r)), e && e(t, function () { return n.t.apply(n, arguments); }); }, i = function (t) { t && (n.language = t, n.languages = n.services.languageUtils.toResolveHierarchy(t), n.translator.changeLanguage(t), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(t)), n.loadResources(function (e) { r(e, t); }); }; t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(t) : i(this.services.languageDetector.detect()); }, e.prototype.getFixedT = function (t, e) { var n = this, r = function t(e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = _({}, r); return i.lng = i.lng || t.lng, i.lngs = i.lngs || t.lngs, i.ns = i.ns || t.ns, n.t(e, i); }; return "string" == typeof t ? r.lng = t : r.lngs = t, r.ns = e, r; }, e.prototype.t = function () { var t; return this.translator && (t = this.translator).translate.apply(t, arguments); }, e.prototype.exists = function () { var t; return this.translator && (t = this.translator).exists.apply(t, arguments); }, e.prototype.setDefaultNamespace = function (t) { this.options.defaultNS = t; }, e.prototype.loadNamespaces = function (t, e) { var n = this; if (!this.options.ns)
            return e && e(); "string" == typeof t && (t = [t]), t.forEach(function (t) { n.options.ns.indexOf(t) < 0 && n.options.ns.push(t); }), this.loadResources(e); }, e.prototype.loadLanguages = function (t, e) { "string" == typeof t && (t = [t]); var n = this.options.preload || [], r = t.filter(function (t) { return n.indexOf(t) < 0; }); if (!r.length)
            return e(); this.options.preload = n.concat(r), this.loadResources(e); }, e.prototype.dir = function (t) { return t || (t = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), t ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t)) >= 0 ? "rtl" : "ltr" : "rtl"; }, e.prototype.createInstance = function () { return new e(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments[1]); }, e.prototype.cloneInstance = function () { var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s, i = _({}, this.options, n, { isClone: !0 }), a = new e(i, r); return ["store", "services", "language"].forEach(function (e) { a[e] = t[e]; }), a.translator = new f.a(a.services, a.options), a.translator.on("*", function (t) { for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
            n[r - 1] = arguments[r]; a.emit.apply(a, [t].concat(n)); }), a.init(i, r), a; }, e; }(l.a);
        e.a = new w;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var i = n[r], a = Object.getOwnPropertyDescriptor(e, i);
            a && a.configurable && void 0 === t[i] && Object.defineProperty(t, i, a);
        } return t; }
        function i(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function a(t, e) { if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e; }
        function o(t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e)); }
        var s = n(62), u = n(82), l = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        } return t; }, c = function (t) { function e() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" }; i(this, e); var o = a(this, t.call(this)); return o.data = n, o.options = r, o; } return o(e, t), e.prototype.addNamespaces = function (t) { this.options.ns.indexOf(t) < 0 && this.options.ns.push(t); }, e.prototype.removeNamespaces = function (t) { var e = this.options.ns.indexOf(t); e > -1 && this.options.ns.splice(e, 1); }, e.prototype.getResource = function (t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = r.keySeparator || this.options.keySeparator; void 0 === i && (i = "."); var a = [t, e]; return n && "string" != typeof n && (a = a.concat(n)), n && "string" == typeof n && (a = a.concat(i ? n.split(i) : n)), t.indexOf(".") > -1 && (a = t.split(".")), u.d(this.data, a); }, e.prototype.addResource = function (t, e, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 }, a = this.options.keySeparator; void 0 === a && (a = "."); var o = [t, e]; n && (o = o.concat(a ? n.split(a) : n)), t.indexOf(".") > -1 && (o = t.split("."), r = e, e = o[1]), this.addNamespaces(e), u.h(this.data, o, r), i.silent || this.emit("added", t, e, n, r); }, e.prototype.addResources = function (t, e, n) { for (var r in n)
            "string" == typeof n[r] && this.addResource(t, e, r, n[r], { silent: !0 }); this.emit("added", t, e, n); }, e.prototype.addResourceBundle = function (t, e, n, r, i) { var a = [t, e]; t.indexOf(".") > -1 && (a = t.split("."), r = n, n = e, e = a[1]), this.addNamespaces(e); var o = u.d(this.data, a) || {}; r ? u.b(o, n, i) : o = l({}, o, n), u.h(this.data, a, o), this.emit("added", t, e, n); }, e.prototype.removeResourceBundle = function (t, e) { this.hasResourceBundle(t, e) && delete this.data[t][e], this.removeNamespaces(e), this.emit("removed", t, e); }, e.prototype.hasResourceBundle = function (t, e) { return void 0 !== this.getResource(t, e); }, e.prototype.getResourceBundle = function (t, e) { return e || (e = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? l({}, this.getResource(t, e)) : this.getResource(t, e); }, e.prototype.toJSON = function () { return this.data; }, e; }(s.a);
        e.a = c;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var i = n[r], a = Object.getOwnPropertyDescriptor(e, i);
            a && a.configurable && void 0 === t[i] && Object.defineProperty(t, i, a);
        } return t; }
        function i(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function a(t, e) { if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e; }
        function o(t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e)); }
        var s = n(38), u = n(62), l = n(174), c = n(175), f = n(82), d = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        } return t; }, h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t; } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t; }, p = function (t) { function e(n) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; i(this, e); var o = a(this, t.call(this)); return f.a(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], n, o), o.options = r, o.logger = s.a.create("translator"), o; } return o(e, t), e.prototype.changeLanguage = function (t) { t && (this.language = t); }, e.prototype.exists = function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} }; return "v1" === this.options.compatibilityAPI && (e = c.d(e)), void 0 !== this.resolve(t, e); }, e.prototype.extractFromKey = function (t, e) { var n = e.nsSeparator || this.options.nsSeparator; void 0 === n && (n = ":"); var r = e.keySeparator || this.options.keySeparator || ".", i = e.ns || this.options.defaultNS; if (n && t.indexOf(n) > -1) {
            var a = t.split(n);
            (n !== r || n === r && this.options.ns.indexOf(a[0]) > -1) && (i = a.shift()), t = a.join(r);
        } return "string" == typeof i && (i = [i]), { key: t, namespaces: i }; }, e.prototype.translate = function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if ("object" !== (void 0 === e ? "undefined" : h(e)) ? e = this.options.overloadTranslationOptionHandler(arguments) : "v1" === this.options.compatibilityAPI && (e = c.d(e)), void 0 === t || null === t || "" === t)
            return ""; "number" == typeof t && (t = String(t)), "string" == typeof t && (t = [t]); var n = e.keySeparator || this.options.keySeparator || ".", r = this.extractFromKey(t[t.length - 1], e), i = r.key, a = r.namespaces, o = a[a.length - 1], s = e.lng || this.language, u = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode; if (s && "cimode" === s.toLowerCase()) {
            if (u) {
                return o + (e.nsSeparator || this.options.nsSeparator) + i;
            }
            return i;
        } var l = this.resolve(t, e), f = Object.prototype.toString.apply(l), p = ["[object Number]", "[object Function]", "[object RegExp]"], v = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays; if (l && "string" != typeof l && p.indexOf(f) < 0 && (!v || "[object Array]" !== f)) {
            if (!e.returnObjects && !this.options.returnObjects)
                return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(i, l, e) : "key '" + i + " (" + this.language + ")' returned an object instead of string.";
            if (e.keySeparator || this.options.keySeparator) {
                var g = "[object Array]" === f ? [] : {};
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (g[m] = this.translate("" + i + n + m, d({}, e, { joinArrays: !1, ns: a })));
                l = g;
            }
        }
        else if (v && "[object Array]" === f)
            (l = l.join(v)) && (l = this.extendTranslation(l, i, e));
        else {
            var b = !1, y = !1;
            if (this.isValidLookup(l) || void 0 === e.defaultValue || (b = !0, l = e.defaultValue), this.isValidLookup(l) || (y = !0, l = i), y || b) {
                this.logger.log("missingKey", s, o, i, l);
                var _ = [], w = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                if ("fallback" === this.options.saveMissingTo && w && w[0])
                    for (var x = 0; x < w.length; x++)
                        _.push(w[x]);
                else
                    "all" === this.options.saveMissingTo ? _ = this.languageUtils.toResolveHierarchy(e.lng || this.language) : _.push(e.lng || this.language);
                this.options.saveMissing && (this.options.missingKeyHandler ? this.options.missingKeyHandler(_, o, i, l) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(_, o, i, l)), this.emit("missingKey", _, o, i, l);
            }
            l = this.extendTranslation(l, i, e), y && l === i && this.options.appendNamespaceToMissingKey && (l = o + ":" + i), y && this.options.parseMissingKeyHandler && (l = this.options.parseMissingKeyHandler(l));
        } return l; }, e.prototype.extendTranslation = function (t, e, n) { var r = this; n.interpolation && this.interpolator.init(d({}, n, { interpolation: d({}, this.options.interpolation, n.interpolation) })); var i = n.replace && "string" != typeof n.replace ? n.replace : n; this.options.interpolation.defaultVariables && (i = d({}, this.options.interpolation.defaultVariables, i)), t = this.interpolator.interpolate(t, i, n.lng || this.language), !1 !== n.nest && (t = this.interpolator.nest(t, function () { return r.translate.apply(r, arguments); }, n)), n.interpolation && this.interpolator.reset(); var a = n.postProcess || this.options.postProcess, o = "string" == typeof a ? [a] : a; return void 0 !== t && o && o.length && !1 !== n.applyPostProcessor && (t = l.a.handle(o, t, e, n, this)), t; }, e.prototype.resolve = function (t) { var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = void 0; return "string" == typeof t && (t = [t]), t.forEach(function (t) { if (!e.isValidLookup(r)) {
            var i = e.extractFromKey(t, n), a = i.key, o = i.namespaces;
            e.options.fallbackNS && (o = o.concat(e.options.fallbackNS));
            var s = void 0 !== n.count && "string" != typeof n.count, u = void 0 !== n.context && "string" == typeof n.context && "" !== n.context, l = n.lngs ? n.lngs : e.languageUtils.toResolveHierarchy(n.lng || e.language);
            o.forEach(function (t) { e.isValidLookup(r) || l.forEach(function (i) { if (!e.isValidLookup(r)) {
                var o = a, l = [o], c = void 0;
                s && (c = e.pluralResolver.getSuffix(i, n.count)), s && u && l.push(o + c), u && l.push(o += "" + e.options.contextSeparator + n.context), s && l.push(o += c);
                for (var f = void 0; f = l.pop();)
                    e.isValidLookup(r) || (r = e.getResource(i, t, f, n));
            } }); });
        } }), r; }, e.prototype.isValidLookup = function (t) { return !(void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t); }, e.prototype.getResource = function (t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; return this.resourceStore.getResource(t, e, n, r); }, e; }(u.a);
        e.a = p;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function i(t) { return t.charAt(0).toUpperCase() + t.slice(1); }
        var a = n(38), o = function () { function t(e) { r(this, t), this.options = e, this.whitelist = this.options.whitelist || !1, this.logger = a.a.create("languageUtils"); } return t.prototype.getScriptPartFromCode = function (t) { if (!t || t.indexOf("-") < 0)
            return null; var e = t.split("-"); return 2 === e.length ? null : (e.pop(), this.formatLanguageCode(e.join("-"))); }, t.prototype.getLanguagePartFromCode = function (t) { if (!t || t.indexOf("-") < 0)
            return t; var e = t.split("-"); return this.formatLanguageCode(e[0]); }, t.prototype.formatLanguageCode = function (t) { if ("string" == typeof t && t.indexOf("-") > -1) {
            var e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], n = t.split("-");
            return this.options.lowerCaseLng ? n = n.map(function (t) { return t.toLowerCase(); }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = i(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = i(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = i(n[2].toLowerCase()))), n.join("-");
        } return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t; }, t.prototype.isWhitelisted = function (t) { return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (t = this.getLanguagePartFromCode(t)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(t) > -1; }, t.prototype.getFallbackCodes = function (t, e) { if (!t)
            return []; if ("string" == typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.apply(t))
            return t; if (!e)
            return t.default || []; var n = t[e]; return n || (n = t[this.getScriptPartFromCode(e)]), n || (n = t[this.formatLanguageCode(e)]), n || (n = t.default), n || []; }, t.prototype.toResolveHierarchy = function (t, e) { var n = this, r = this.getFallbackCodes(e || this.options.fallbackLng || [], t), i = [], a = function (t) { t && (n.isWhitelisted(t) ? i.push(t) : n.logger.warn("rejecting non-whitelisted language code: " + t)); }; return "string" == typeof t && t.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && a(this.formatLanguageCode(t)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && a(this.getScriptPartFromCode(t)), "currentOnly" !== this.options.load && a(this.getLanguagePartFromCode(t))) : "string" == typeof t && a(this.formatLanguageCode(t)), r.forEach(function (t) { i.indexOf(t) < 0 && a(n.formatLanguageCode(t)); }), i; }, t; }();
        e.a = o;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function i() { var t = {}; return o.forEach(function (e) { e.lngs.forEach(function (n) { t[n] = { numbers: e.nr, plurals: s[e.fc] }; }); }), t; }
        var a = n(38), o = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "tg", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "es_ar", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt", "pt_br", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }], s = { 1: function (t) { return Number(t > 1); }, 2: function (t) { return Number(1 != t); }, 3: function (t) { return 0; }, 4: function (t) { return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2); }, 5: function (t) { return Number(0 === t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5); }, 6: function (t) { return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2); }, 7: function (t) { return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2); }, 8: function (t) { return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3); }, 9: function (t) { return Number(t >= 2); }, 10: function (t) { return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4); }, 11: function (t) { return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3); }, 12: function (t) { return Number(t % 10 != 1 || t % 100 == 11); }, 13: function (t) { return Number(0 !== t); }, 14: function (t) { return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3); }, 15: function (t) { return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2); }, 16: function (t) { return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2); }, 17: function (t) { return Number(1 == t || t % 10 == 1 ? 0 : 1); }, 18: function (t) { return Number(0 == t ? 0 : 1 == t ? 1 : 2); }, 19: function (t) { return Number(1 == t ? 0 : 0 === t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3); }, 20: function (t) { return Number(1 == t ? 0 : 0 === t || t % 100 > 0 && t % 100 < 20 ? 1 : 2); }, 21: function (t) { return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0); } }, u = function () { function t(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; r(this, t), this.languageUtils = e, this.options = n, this.logger = a.a.create("pluralResolver"), this.rules = i(); } return t.prototype.addRule = function (t, e) { this.rules[t] = e; }, t.prototype.getRule = function (t) { return this.rules[this.languageUtils.getLanguagePartFromCode(t)]; }, t.prototype.needsPlural = function (t) { var e = this.getRule(t); return e && e.numbers.length > 1; }, t.prototype.getSuffix = function (t, e) { var n = this, r = this.getRule(t); if (r) {
            if (1 === r.numbers.length)
                return "";
            var i = r.noAbs ? r.plurals(e) : r.plurals(Math.abs(e)), a = r.numbers[i];
            this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === a ? a = "plural" : 1 === a && (a = ""));
            var o = function () { return n.options.prepend && a.toString() ? n.options.prepend + a.toString() : a.toString(); };
            return "v1" === this.options.compatibilityJSON ? 1 === a ? "" : "number" == typeof a ? "_plural_" + a.toString() : o() : "v2" === this.options.compatibilityJSON || 2 === r.numbers.length && 1 === r.numbers[0] ? o() : 2 === r.numbers.length && 1 === r.numbers[0] ? o() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
        } return this.logger.warn("no plural rule found for: " + t), ""; }, t; }();
        e.a = u;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        var i = n(82), a = n(38), o = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        } return t; }, s = function () { function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; r(this, t), this.logger = a.a.create("interpolator"), this.init(e, !0); } return t.prototype.init = function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; arguments[1] && (this.options = t, this.format = t.interpolation && t.interpolation.format || function (t) { return t; }, this.escape = t.interpolation && t.interpolation.escape || i.c), t.interpolation || (t.interpolation = { escapeValue: !0 }); var e = t.interpolation; this.escapeValue = void 0 === e.escapeValue || e.escapeValue, this.prefix = e.prefix ? i.g(e.prefix) : e.prefixEscaped || "{{", this.suffix = e.suffix ? i.g(e.suffix) : e.suffixEscaped || "}}", this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ",", this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : e.unescapeSuffix || "", this.nestingPrefix = e.nestingPrefix ? i.g(e.nestingPrefix) : e.nestingPrefixEscaped || i.g("$t("), this.nestingSuffix = e.nestingSuffix ? i.g(e.nestingSuffix) : e.nestingSuffixEscaped || i.g(")"), this.resetRegExp(); }, t.prototype.reset = function () { this.options && this.init(this.options); }, t.prototype.resetRegExp = function () { var t = this.prefix + "(.+?)" + this.suffix; this.regexp = new RegExp(t, "g"); var e = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix; this.regexpUnescape = new RegExp(e, "g"); var n = this.nestingPrefix + "(.+?)" + this.nestingSuffix; this.nestingRegexp = new RegExp(n, "g"); }, t.prototype.interpolate = function (t, e, n) { function r(t) { return t.replace(/\$/g, "$$$$"); } var a = this, o = void 0, s = void 0, u = function (t) { if (t.indexOf(a.formatSeparator) < 0)
            return i.d(e, t); var r = t.split(a.formatSeparator), o = r.shift().trim(), s = r.join(a.formatSeparator).trim(); return a.format(i.d(e, o), s, n); }; for (this.resetRegExp(); o = this.regexpUnescape.exec(t);)
            s = u(o[1].trim()), t = t.replace(o[0], s), this.regexpUnescape.lastIndex = 0; for (; o = this.regexp.exec(t);)
            s = u(o[1].trim()), "string" != typeof s && (s = i.e(s)), s || (this.logger.warn("missed to pass in variable " + o[1] + " for interpolating " + t), s = ""), s = r(this.escapeValue ? this.escape(s) : s), t = t.replace(o[0], s), this.regexp.lastIndex = 0; return t; }, t.prototype.nest = function (t, e) { function n(t) { if (t.indexOf(",") < 0)
            return t; var e = t.split(","); t = e.shift(); var n = e.join(","); n = this.interpolate(n, u), n = n.replace(/'/g, '"'); try {
            u = JSON.parse(n);
        }
        catch (e) {
            this.logger.error("failed parsing options string in nesting for key " + t, e);
        } return t; } var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = void 0, s = void 0, u = o({}, r); for (u.applyPostProcessor = !1; a = this.nestingRegexp.exec(t);) {
            if ((s = e(n.call(this, a[1].trim()), u)) && a[0] === t && "string" != typeof s)
                return s;
            "string" != typeof s && (s = i.e(s)), s || (this.logger.warn("missed to resolve " + a[1] + " for nesting " + t), s = ""), t = t.replace(a[0], s), this.regexp.lastIndex = 0;
        } return t; }, t; }();
        e.a = s;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var i = n[r], a = Object.getOwnPropertyDescriptor(e, i);
            a && a.configurable && void 0 === t[i] && Object.defineProperty(t, i, a);
        } return t; }
        function i(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function a(t, e) { if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e; }
        function o(t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e)); }
        function s(t, e) { for (var n = t.indexOf(e); -1 !== n;)
            t.splice(n, 1), n = t.indexOf(e); }
        var u = n(82), l = n(38), c = n(62), f = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        } return t; }, d = function () { function t(t, e) { var n = [], r = !0, i = !1, a = void 0; try {
            for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0)
                ;
        }
        catch (t) {
            i = !0, a = t;
        }
        finally {
            try {
                !r && s.return && s.return();
            }
            finally {
                if (i)
                    throw a;
            }
        } return n; } return function (e, n) { if (Array.isArray(e))
            return e; if (Symbol.iterator in Object(e))
            return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }(), h = function (t) { function e(n, r, o) { var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; i(this, e); var u = a(this, t.call(this)); return u.backend = n, u.store = r, u.services = o, u.options = s, u.logger = l.a.create("backendConnector"), u.state = {}, u.queue = [], u.backend && u.backend.init && u.backend.init(o, s.backend, s), u; } return o(e, t), e.prototype.queueLoad = function (t, e, n) { var r = this, i = [], a = [], o = [], s = []; return t.forEach(function (t) { var n = !0; e.forEach(function (e) { var o = t + "|" + e; r.store.hasResourceBundle(t, e) ? r.state[o] = 2 : r.state[o] < 0 || (1 === r.state[o] ? a.indexOf(o) < 0 && a.push(o) : (r.state[o] = 1, n = !1, a.indexOf(o) < 0 && a.push(o), i.indexOf(o) < 0 && i.push(o), s.indexOf(e) < 0 && s.push(e))); }), n || o.push(t); }), (i.length || a.length) && this.queue.push({ pending: a, loaded: {}, errors: [], callback: n }), { toLoad: i, pending: a, toLoadLanguages: o, toLoadNamespaces: s }; }, e.prototype.loaded = function (t, e, n) { var r = this, i = t.split("|"), a = d(i, 2), o = a[0], l = a[1]; e && this.emit("failedLoading", o, l, e), n && this.store.addResourceBundle(o, l, n), this.state[t] = e ? -1 : 2, this.queue.forEach(function (n) { u.f(n.loaded, [o], l), s(n.pending, t), e && n.errors.push(e), 0 !== n.pending.length || n.done || (r.emit("loaded", n.loaded), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback()); }), this.queue = this.queue.filter(function (t) { return !t.done; }); }, e.prototype.read = function (t, e, n) { var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, i = this, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250, o = arguments[5]; return t.length ? this.backend[n](t, e, function (s, u) { if (s && u && r < 5)
            return void setTimeout(function () { i.read.call(i, t, e, n, r + 1, 2 * a, o); }, a); o(s, u); }) : o(null, {}); }, e.prototype.load = function (t, e, n) { var r = this; if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n(); var i = f({}, this.backend.options, this.options.backend); "string" == typeof t && (t = this.services.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]); var a = this.queueLoad(t, e, n); if (!a.toLoad.length)
            return a.pending.length || n(), null; i.allowMultiLoading && this.backend.readMulti ? this.read(a.toLoadLanguages, a.toLoadNamespaces, "readMulti", null, null, function (t, e) { t && r.logger.warn("loading namespaces " + a.toLoadNamespaces.join(", ") + " for languages " + a.toLoadLanguages.join(", ") + " via multiloading failed", t), !t && e && r.logger.log("successfully loaded namespaces " + a.toLoadNamespaces.join(", ") + " for languages " + a.toLoadLanguages.join(", ") + " via multiloading", e), a.toLoad.forEach(function (n) { var i = n.split("|"), a = d(i, 2), o = a[0], s = a[1], l = u.d(e, [o, s]); if (l)
            r.loaded(n, t, l);
        else {
            var c = "loading namespace " + s + " for language " + o + " via multiloading failed";
            r.loaded(n, c), r.logger.error(c);
        } }); }) : a.toLoad.forEach(function (t) { r.loadOne(t); }); }, e.prototype.reload = function (t, e) { var n = this; this.backend || this.logger.warn("No backend was added via i18next.use. Will not load resources."); var r = f({}, this.backend.options, this.options.backend); "string" == typeof t && (t = this.services.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]), r.allowMultiLoading && this.backend.readMulti ? this.read(t, e, "readMulti", null, null, function (r, i) { r && n.logger.warn("reloading namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading failed", r), !r && i && n.logger.log("successfully reloaded namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading", i), t.forEach(function (t) { e.forEach(function (e) { var a = u.d(i, [t, e]); if (a)
            n.loaded(t + "|" + e, r, a);
        else {
            var o = "reloading namespace " + e + " for language " + t + " via multiloading failed";
            n.loaded(t + "|" + e, o), n.logger.error(o);
        } }); }); }) : t.forEach(function (t) { e.forEach(function (e) { n.loadOne(t + "|" + e, "re"); }); }); }, e.prototype.loadOne = function (t) { var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = t.split("|"), i = d(r, 2), a = i[0], o = i[1]; this.read(a, o, "read", null, null, function (r, i) { r && e.logger.warn(n + "loading namespace " + o + " for language " + a + " failed", r), !r && i && e.logger.log(n + "loaded namespace " + o + " for language " + a, i), e.loaded(t, r, i); }); }, e.prototype.saveMissing = function (t, e, n, r) { this.backend && this.backend.create && this.backend.create(t, e, n, r), t && t[0] && this.store.addResource(t[0], e, n, r); }, e; }(c.a);
        e.a = h;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
            var i = n[r], a = Object.getOwnPropertyDescriptor(e, i);
            a && a.configurable && void 0 === t[i] && Object.defineProperty(t, i, a);
        } return t; }
        function i(t, e) { if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function"); }
        function a(t, e) { if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e; }
        function o(t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e)); }
        var s = n(38), u = n(62), l = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        } return t; }, c = function (t) { function e(n, r, o) { var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; i(this, e); var l = a(this, t.call(this)); return l.cache = n, l.store = r, l.services = o, l.options = u, l.logger = s.a.create("cacheConnector"), l.cache && l.cache.init && l.cache.init(o, u.cache, u), l; } return o(e, t), e.prototype.load = function (t, e, n) { var r = this; if (!this.cache)
            return n && n(); var i = l({}, this.cache.options, this.options.cache), a = "string" == typeof t ? this.services.languageUtils.toResolveHierarchy(t) : t; i.enabled ? this.cache.load(a, function (t, e) { if (t && r.logger.error("loading languages " + a.join(", ") + " from cache failed", t), e)
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i))
                    for (var o in e[i])
                        if (Object.prototype.hasOwnProperty.call(e[i], o) && "i18nStamp" !== o) {
                            var s = e[i][o];
                            s && r.store.addResourceBundle(i, o, s);
                        } n && n(); }) : n && n(); }, e.prototype.save = function () { this.cache && this.options.cache && this.options.cache.enabled && this.cache.save(this.store.data); }, e; }(u.a);
        e.a = c;
    }, function (t, e, n) {
        "use strict";
        function r() { return { debug: !1, initImmediate: !0, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, whitelist: !1, nonExplicitWhitelist: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", saveMissing: !1, saveMissingTo: "fallback", missingKeyHandler: !1, postProcess: !1, returnNull: !0, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: function () { }, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function (t) { return { defaultValue: t[1] }; }, interpolation: { escapeValue: !0, format: function (t, e, n) { return t; }, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", defaultVariables: void 0 } }; }
        function i(t) { return "string" == typeof t.ns && (t.ns = [t.ns]), "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]), "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]), t.whitelist && t.whitelist.indexOf("cimode") < 0 && t.whitelist.push("cimode"), t; }
        n.d(e, "a", function () { return r; }), e.b = i;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(346), a = r(i), o = n(166), s = r(o), u = n(2), l = r(u), c = n(3), f = r(c), d = n(6), h = r(d), p = n(4), v = r(p), g = n(5), m = r(g), b = n(14), y = function (t) { function e() { return (0, f.default)(this, e), (0, v.default)(this, (e.__proto__ || (0, l.default)(e)).apply(this, arguments)); } return (0, m.default)(e, t), (0, h.default)(e, [{ key: "storageKey", value: function () { return "ALLURE_REPORT_SETTINGS"; } }, { key: "fetch", value: function () { var t = this; return new s.default(function (e) { var n = window.localStorage.getItem(t.storageKey()); n && t.set(JSON.parse(n)), e(); }); } }, { key: "save", value: function (t, e) { this.set(t, e); var n = this.toJSON(); window.localStorage.setItem(this.storageKey(), (0, a.default)(n)); } }]), e; }(b.Model);
        e.default = y;
    }, function (t, e, n) { t.exports = { default: n(347), __esModule: !0 }; }, function (t, e, n) { var r = n(13), i = r.JSON || (r.JSON = { stringify: JSON.stringify }); t.exports = function (t) { return i.stringify.apply(i, arguments); }; }, function (t, e, n) { function r(t) { return n(i(t)); } function i(t) { var e = a[t]; if (!(e + 1))
        throw new Error("Cannot find module '" + t + "'."); return e; } var a = { "./de": 176, "./de.json": 176, "./en": 177, "./en.json": 177, "./he": 178, "./he.json": 178, "./ru": 179, "./ru.json": 179, "./zh": 180, "./zh.json": 180 }; r.keys = function () { return Object.keys(a); }, r.resolve = i, t.exports = r, r.id = 348; }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(6), l = r(u), c = n(4), f = r(c), d = n(5), h = r(d), p = n(47), v = r(p), g = n(85), m = r(g), b = function (t) { function e() { return (0, s.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, a.default)(e)).apply(this, arguments)); } return (0, h.default)(e, t), (0, l.default)(e, [{ key: "getContentView", value: function () { var t = this.options, e = t.code, n = t.message; return new m.default({ code: e, message: n }); } }]), e; }(v.default);
        e.default = b;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression; return '<div class="' + u(r(n(0)).call(s, "app", "nav", { name: "b", hash: {}, data: o })) + '"></div>\n<div class="' + u(r(n(0)).call(s, "app", "content", { name: "b", hash: {}, data: o })) + '"></div>\n'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a, o, s, u, l, c, f, d, h = n(15), p = r(h), v = n(2), g = r(v), m = n(3), b = r(m), y = n(6), _ = r(y), w = n(4), x = r(w), k = n(5), O = r(k);
        n(353);
        var C = n(8), M = n(16), j = n(9), E = n(46), S = r(E), T = n(354), A = r(T), N = n(61), R = n(63), P = r(R), D = n(359), L = r(D), V = n(7), B = n(37), z = r(B), I = n(83), U = r(I), F = (a = (0, C.className)("side-nav"), o = (0, C.on)("mouseenter [data-tooltip]"), s = (0, C.on)("mouseleave [data-tooltip]"), u = (0, C.on)("click .side-nav__collapse"), l = (0, C.on)("click .side-nav__language"), c = (0, C.on)("click .side-nav__language-small"), a((d = function (t) { function e() { var t, n, r, i; (0, b.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, x.default)(this, (t = e.__proto__ || (0, g.default)(e)).call.apply(t, [this].concat(o))), r.template = L.default, i = n, (0, x.default)(r, i); } return (0, O.default)(e, t), (0, _.default)(e, [{ key: "initialize", value: function () { var t = this; this.tabs = P.default.tabs.map(function (e) { var n = e.tabName; return { tabName: n, icon: e.icon, title: e.title, active: t.isTabActive(n) }; }), this.tooltip = new S.default({ position: "right" }), this.langSelect = new A.default; } }, { key: "onRender", value: function () { this.$el.toggleClass("side-nav_collapsed", U.default.isSidebarCollapsed()); } }, { key: "onDestroy", value: function () { this.tooltip.hide(); } }, { key: "serializeData", value: function () { return { language: (0, M.findWhere)(N.LANGUAGES, { id: U.default.getLanguage() }), tabs: this.tabs }; } }, { key: "isTabActive", value: function (t) { var e = z.default.getCurrentUrl(); return t ? 0 === e.indexOf(t) : e === t; } }, { key: "onSidelinkHover", value: function (t) { if (this.$el.hasClass("side-nav_collapsed")) {
                    var e = this.$(t.currentTarget);
                    this.tooltip.show((0, V.escapeExpression)(e.data("tooltip")), e);
                } } }, { key: "onSidelinkLeave", value: function () { this.tooltip.hide(); } }, { key: "onCollapseClick", value: function () { this.$el.toggleClass("side-nav_collapsed"), U.default.setSidebarCollapsed(this.$el.hasClass("side-nav_collapsed")), this.tooltip.hide(); } }, { key: "onLanguageClick", value: function (t) { this.langSelect.isVisible() ? this.langSelect.hide() : this.langSelect.show(this.$(t.currentTarget)), this.tooltip.hide(); } }]), e; }(j.View), i(d.prototype, "onSidelinkHover", [o], (0, p.default)(d.prototype, "onSidelinkHover"), d.prototype), i(d.prototype, "onSidelinkLeave", [s], (0, p.default)(d.prototype, "onSidelinkLeave"), d.prototype), i(d.prototype, "onCollapseClick", [u], (0, p.default)(d.prototype, "onCollapseClick"), d.prototype), i(d.prototype, "onLanguageClick", [l, c], (0, p.default)(d.prototype, "onLanguageClick"), d.prototype), f = d)) || f);
        e.default = F;
    }, function (t, e) { }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s, u = n(15), l = r(u), c = n(2), f = r(c), d = n(3), h = r(d), p = n(6), v = r(p), g = n(4), m = r(g), b = n(21), y = r(b), _ = n(5), w = r(_);
        n(355);
        var x = n(115), k = r(x), O = n(8), C = n(357), M = r(C), j = n(61), E = r(j), S = n(83), T = r(S), A = n(27), N = r(A), R = (i = (0, O.className)("language-select popover"), a = (0, O.on)("click .language-select__item"), i((s = function (t) { function e() { return (0, h.default)(this, e), (0, m.default)(this, (e.__proto__ || (0, f.default)(e)).apply(this, arguments)); } return (0, w.default)(e, t), (0, v.default)(e, [{ key: "initialize", value: function () { (0, y.default)(e.prototype.__proto__ || (0, f.default)(e.prototype), "initialize", this).call(this, { position: "right" }); } }, { key: "setContent", value: function () { this.$el.html((0, M.default)({ languages: j.LANGUAGES, currentLang: T.default.getLanguage() })); } }, { key: "show", value: function (t) { var n = this; (0, y.default)(e.prototype.__proto__ || (0, f.default)(e.prototype), "show", this).call(this, null, t), this.delegateEvents(), setTimeout(function () { (0, N.default)(document).one("click", function () { return n.hide(); }); }); } }, { key: "onLanguageClick", value: function (t) { var e = this.$(t.currentTarget).data("id"); T.default.setLanguage(e), E.default.changeLanguage(e); } }]), e; }(k.default), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(s.prototype, "onLanguageClick", [a], (0, l.default)(s.prototype, "onLanguageClick"), s.prototype), o = s)) || o);
        e.default = R;
    }, function (t, e) { }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o, s, u) { var l = null != e ? e : t.nullContext || {}, c = t.escapeExpression, f = t.lambda; return '        <li class="' + c(r(n(0)).call(l, "language-select", "item", { name: "b", hash: { active: r(n(24)).call(l, null != e ? e.id : e, null != u[1] ? u[1].currentLang : u[1], { name: "eq", hash: {}, data: o }) }, data: o })) + '" data-id="' + c(f(null != e ? e.id : e, e)) + '">' + c(f(null != e ? e.title : e, e)) + "</li>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o, s, u) { var l, c = null != e ? e : t.nullContext || {}; return '<ul class="' + t.escapeExpression(r(n(0)).call(c, "language-select", "menu", { name: "b", hash: {}, data: o })) + '">\n' + (null != (l = i.each.call(c, null != e ? e.languages : e, { name: "each", hash: {}, fn: t.program(1, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + "</ul>\n"; }, useData: !0, useDepths: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(6), l = r(u), c = n(4), f = r(c), d = n(5), h = r(d), p = n(14), v = function (t) { function e() { return (0, s.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, a.default)(e)).apply(this, arguments)); } return (0, h.default)(e, t), (0, l.default)(e, [{ key: "initialize", value: function (t, e) { this.options = e; } }, { key: "url", value: function () { return "widgets/" + this.options.name + ".json"; } }, { key: "parse", value: function (t) { return Array.isArray(t) ? { items: t } : t; } }, { key: "getWidgetData", value: function (t) { var e = this.get(t); return new p.Model(Array.isArray(e) ? { items: e } : e); } }]), e; }(p.Model);
        e.default = v;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression, l = t.lambda; return '        <li class="' + u(r(n(0)).call(s, "side-nav", "item", { name: "b", hash: {}, data: o })) + '" data-tooltip="' + u(r(n(1)).call(s, null != e ? e.title : e, { name: "t", hash: {}, data: o })) + '">\n            <a href="#' + u(l(null != e ? e.tabName : e, e)) + '" class="' + u(r(n(0)).call(s, "side-nav", "link", { name: "b", hash: { active: null != e ? e.active : e }, data: o })) + '">\n                <span class="' + u(r(n(0)).call(s, "side-nav", "icon", { name: "b", hash: {}, data: o })) + " " + u(l(null != e ? e.icon : e, e)) + '"></span>\n                <div class="' + u(r(n(0)).call(s, "side-nav", "text", { name: "b", hash: {}, data: o })) + '">' + u(r(n(1)).call(s, null != e ? e.title : e, { name: "t", hash: {}, data: o })) + "</div>\n            </a>\n        </li>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression; return '<div class="' + l(r(n(0)).call(u, "side-nav", "head", { name: "b", hash: {}, data: o })) + '">\n    <a href="#" class="' + l(r(n(0)).call(u, "side-nav", "brand", { name: "b", hash: {}, data: o })) + '">\n        <span class="' + l(r(n(0)).call(u, "side-nav", "brand-text", { name: "b", hash: {}, data: o })) + '">Allure</span>\n    </a>\n</div>\n<ul class="' + l(r(n(0)).call(u, "side-nav", "menu", { name: "b", hash: {}, data: o })) + '">\n' + (null != (s = i.each.call(u, null != e ? e.tabs : e, { name: "each", hash: {}, fn: t.program(1, o, 0), inverse: t.noop, data: o })) ? s : "") + '</ul>\n<div class="' + l(r(n(0)).call(u, "side-nav", "strut", { name: "b", hash: {}, data: o })) + '"></div>\n<div class="' + l(r(n(0)).call(u, "side-nav", "footer", { name: "b", hash: {}, data: o })) + '">\n    <div class="' + l(r(n(0)).call(u, "side-nav", "item", { name: "b", hash: {}, data: o })) + '" data-tooltip="' + l(r(n(1)).call(u, "controls.language", { name: "t", hash: {}, data: o })) + '">\n        <button class="' + l(r(n(0)).call(u, "button", { name: "b", hash: {}, data: o })) + " " + l(r(n(0)).call(u, "button", { name: "b", hash: { inverse: !0 }, data: o })) + " " + l(r(n(0)).call(u, "side-nav", "language-small", { name: "b", hash: { lang: null != (s = null != e ? e.language : e) ? s.id : s }, data: o })) + '">\n            ' + l(t.lambda(null != (s = null != e ? e.language : e) ? s.id : s, e)) + '\n        </button>\n    </div>\n\n    <div class="' + l(r(n(0)).call(u, "side-nav", "item", { name: "b", hash: {}, data: o })) + ' " data-tooltip="' + l(r(n(1)).call(u, "controls.expand", { name: "t", hash: {}, data: o })) + '">\n        <div class="' + l(r(n(0)).call(u, "side-nav", "collapse", { name: "b", hash: {}, data: o })) + '">\n            <span class="' + l(r(n(0)).call(u, "side-nav", "icon", { name: "b", hash: {}, data: o })) + ' fa fa-angle-left"></span>\n            <span class="' + l(r(n(0)).call(u, "side-nav", "text", { name: "b", hash: {}, data: o })) + '">' + l(r(n(1)).call(u, "controls.collapse", { name: "t", hash: {}, data: o })) + "</span>\n        </div>\n    </div>\n</div>\n"; }, useData: !0 }); }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s = t.lambda, u = t.escapeExpression, l = null != e ? e : t.nullContext || {}; return '<div class="' + u(s(null != e ? e.cls : e, e)) + '">\n    <h1 class="' + u(r(n(0)).call(l, null != e ? e.cls : e, "title", { name: "b", hash: {}, data: o })) + '">' + u(s(null != e ? e.code : e, e)) + '</h1>\n    <p class="' + u(r(n(0)).call(l, null != e ? e.cls : e, "message", { name: "b", hash: {}, data: o })) + '">' + u(s(null != e ? e.message : e, e)) + "</p>\n</div>"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(6), l = r(u), c = n(4), f = r(c), d = n(21), h = r(d), p = n(5), v = r(p), g = n(47), m = r(g), b = n(181), y = r(b), _ = n(14), w = n(188), x = r(w), k = function (t) { function e() { return (0, s.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, a.default)(e)).apply(this, arguments)); } return (0, v.default)(e, t), (0, l.default)(e, [{ key: "initialize", value: function (t) { var n = t.uid; (0, h.default)(e.prototype.__proto__ || (0, a.default)(e.prototype), "initialize", this).call(this), this.uid = n, this.model = new x.default({ uid: n }), this.routeState = new _.Model; } }, { key: "loadData", value: function () { return this.model.fetch(); } }, { key: "getContentView", value: function () { var t = "#testresult/" + this.uid; return new y.default({ baseUrl: t, model: this.model, routeState: this.routeState }); } }, { key: "onViewReady", value: function () { var t = this.options, e = t.uid, n = t.tabName; this.onRouteUpdate(e, n); } }, { key: "onRouteUpdate", value: function (t, e) { this.routeState.set("testResultTab", e); } }, { key: "shouldKeepState", value: function (t) { return this.uid === t; } }]), e; }(m.default);
        e.default = k;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, r, i, a) { var o; return '    <div class="pane__subtitle long-line line-ellipsis">\n' + (null != (o = t.invokePartial(n(365), e, { name: "../../blocks/clipboard-copy/clipboard-copy", hash: { value: null != e ? e.fullName : e }, data: a, indent: "        ", helpers: r, partials: i, decorators: t.decorators })) ? o : "") + '        <span class="fullname__body">' + t.escapeExpression(t.lambda(null != e ? e.fullName : e, e)) + "</span>\n    </div>\n"; }, 3: function (t, e, i, a, o) { return "        " + t.escapeExpression(r(n(64)).call(null != e ? e : t.nullContext || {}, "flaky", { name: "allure-icon", hash: {}, data: o })) + "\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression, c = t.lambda; return (null != (s = i.if.call(u, null != e ? e.fullName : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.noop, data: o })) ? s : "") + '<h2 class="' + l(r(n(0)).call(u, "pane", "title", { name: "b", hash: { borderless: !0 }, data: o })) + '">\n' + (null != (s = i.if.call(u, null != e ? e.flaky : e, { name: "if", hash: {}, fn: t.program(3, o, 0), inverse: t.noop, data: o })) ? s : "") + '    <div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "status", { name: "b", hash: {}, data: o })) + '">\n        <span class="label label_status_' + l(c(null != e ? e.status : e, e)) + '">' + l(r(n(1)).call(u, null != e ? e.statusName : e, { name: "t", hash: {}, data: o })) + '</span>\n    </div>\n    <div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "name", { name: "b", hash: {}, data: o })) + '">\n        <span class="long-line">' + l(c(null != e ? e.name : e, e)) + "</span>\n    </div>\n</h2>\n\n" + (null != (s = t.invokePartial(n(366), e, { name: "../../blocks/tabs/tabs", data: o, helpers: i, partials: a, decorators: t.decorators })) ? s : "") + '<div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "content", { name: "b", hash: {}, data: o })) + '"></div>\n'; }, usePartial: !0, useData: !0 }); }, function (t, e, n) { var r = n(7); t.exports = (r.default || r).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return '<span class="fa fa-files-o fullname__copy" data-copy="' + t.escapeExpression((a = null != (a = n.value || (null != e ? e.value : e)) ? a : n.helperMissing, "function" == typeof a ? a.call(null != e ? e : t.nullContext || {}, { name: "value", hash: {}, data: i }) : a)) + '"></span>'; }, useData: !0 }); }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression; return '        <li class="' + u(r(n(0)).call(s, "tab", { name: "b", hash: { active: null != e ? e.active : e }, data: o })) + '"><a class="link link__no-decoration" href="' + u(t.lambda(null != e ? e.href : e, e)) + '">' + u(r(n(1)).call(s, null != e ? e.name : e, { name: "t", hash: {}, data: o })) + "</a></li>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return '<ul class="tabs">\n' + (null != (a = n.each.call(null != e ? e : t.nullContext || {}, null != e ? e.links : e, { name: "each", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : "") + "</ul>"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v);
        n(368);
        var m = n(9), b = n(8), y = n(369), _ = r(y), w = n(63), x = r(w), k = n(370), O = r(k), C = (i = (0, b.className)("test-result-overview"), a = (0, b.regions)({ execution: ".test-result-overview__execution" }), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, c.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, p.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(o))), r.template = _.default, i = n, (0, p.default)(r, i); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "initialize", value: function () { this.blocks = []; } }, { key: "onRender", value: function () { this.showBlock(this.$(".test-result-overview__tags"), x.default.testResultBlocks.tag), this.showBlock(this.$(".test-result-overview__before"), x.default.testResultBlocks.before), this.showChildView("execution", new O.default(this.options)), this.showBlock(this.$(".test-result-overview__after"), x.default.testResultBlocks.after); } }, { key: "onDestroy", value: function () { this.blocks.forEach(function (t) { return t.destroy(); }); } }, { key: "showBlock", value: function (t, e) { var n = this; e.forEach(function (e) { var r = new e({ model: n.model }); r.$el.appendTo(t), n.blocks.push(r), r.render(); }); } }, { key: "templateContext", value: function () { return { cls: this.className }; } }]), e; }(m.View)) || o) || o);
        e.default = C;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression; return '<div class="' + l(r(n(0)).call(u, "alert", "wide", { name: "b", hash: { status: null != e ? e.status : e }, data: o })) + '">' + (null != (s = t.invokePartial(n(116), e, { name: "../../blocks/status-details/status-details", data: o, helpers: i, partials: a, decorators: t.decorators })) ? s : "") + '</div>\n\n<div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "tags", { name: "b", hash: {}, data: o })) + '"></div>\n<div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "before", { name: "b", hash: {}, data: o })) + '"></div>\n<div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "execution", { name: "b", hash: {}, data: o })) + '"></div>\n<div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "after", { name: "b", hash: {}, data: o })) + '"></div>'; }, usePartial: !0, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a, o, s, u, l, c, f, d, h = n(15), p = r(h), v = n(2), g = r(v), m = n(3), b = r(m), y = n(6), _ = r(y), w = n(4), x = r(w), k = n(5), O = r(k), C = n(27), M = r(C);
        n(371);
        var j = n(182), E = r(j), S = n(384), T = r(S), A = n(37), N = r(A), R = n(8), P = n(187), D = n(14), L = n(9), V = (a = (0, R.className)("test-result-execution"), o = (0, R.on)("click .step__title_hasContent"), s = (0, R.on)("click .attachment-row"), u = (0, R.on)("click .attachment-row__fullscreen"), l = (0, R.on)("click .attachment-row__link"), c = (0, R.on)("click .parameters-table__cell"), a((d = function (t) { function e() { var t, n, r, i; (0, b.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, x.default)(this, (t = e.__proto__ || (0, g.default)(e)).call.apply(t, [this].concat(o))), r.template = T.default, i = n, (0, x.default)(r, i); } return (0, O.default)(e, t), (0, _.default)(e, [{ key: "initialize", value: function () { this.state = new D.Model, this.routeState = this.options.routeState, this.listenTo(this.state, "change:attachment", this.highlightSelectedAttachment, this); } }, { key: "onRender", value: function () { var t = this.routeState.get("attachment"); t && this.highlightSelectedAttachment(t); } }, { key: "highlightSelectedAttachment", value: function (t) { this.$(".attachment-row").removeClass("attachment-row_selected"); var e = this.$('.attachment-row[data-uid="' + t + '"]'); e.addClass("attachment-row_selected"), e.parents(".step").addClass("step_expanded"); } }, { key: "serializeData", value: function () { var t = (0, P.makeArray)(this.model.get("beforeStages")), e = (0, P.makeArray)(this.model.get("testStage")), n = (0, P.makeArray)(this.model.get("afterStages")); return { hasContent: t.length + e.length + n.length > 0, before: t, test: e, after: n, baseUrl: this.options.baseUrl }; } }, { key: "onStepClick", value: function (t) { this.$(t.currentTarget).parent().toggleClass("step_expanded"); } }, { key: "onAttachmentClick", value: function (t) { var e = (0, M.default)(t.currentTarget).data("uid"), n = "attachment__" + e; (0, M.default)(t.currentTarget).hasClass("attachment-row_selected") && this.getRegion(n) ? this.getRegion(n).destroy() : (this.addRegion(n, { el: this.$("." + n) }), this.getRegion(n).show(new E.default({ attachment: this.model.getAttachment(e) }))), this.$(t.currentTarget).toggleClass("attachment-row_selected"); } }, { key: "onAttachmnetFullScrennClick", value: function (t) { var e = (0, M.default)(t.currentTarget).closest(".attachment-row").data("uid"); N.default.setSearch({ attachment: e }), t.stopPropagation(); } }, { key: "onAttachmentFileClick", value: function (t) { t.stopPropagation(); } }, { key: "onParameterClick", value: function (t) { this.$(t.target).siblings().addBack().toggleClass("line-ellipsis"); } }]), e; }(L.View), i(d.prototype, "onStepClick", [o], (0, p.default)(d.prototype, "onStepClick"), d.prototype), i(d.prototype, "onAttachmentClick", [s], (0, p.default)(d.prototype, "onAttachmentClick"), d.prototype), i(d.prototype, "onAttachmnetFullScrennClick", [u], (0, p.default)(d.prototype, "onAttachmnetFullScrennClick"), d.prototype), i(d.prototype, "onAttachmentFileClick", [l], (0, p.default)(d.prototype, "onAttachmentFileClick"), d.prototype), i(d.prototype, "onParameterClick", [c], (0, p.default)(d.prototype, "onParameterClick"), d.prototype), f = d)) || f);
        e.default = V;
    }, function (t, e) { }, function (t, e) { }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(374), a = r(i), o = n(375), s = r(o), u = n(376), l = r(u), c = n(377), f = r(c), d = n(378), h = r(d), p = n(379), v = r(p);
        a.default.registerLanguage("xml", s.default), a.default.registerLanguage("bash", l.default), a.default.registerLanguage("markdown", f.default), a.default.registerLanguage("diff", h.default), a.default.registerLanguage("json", v.default), e.default = a.default;
    }, function (t, e, n) { !function (t) { "object" == typeof window && window || "object" == typeof self && self; t(e); }(function (t) { function e(t) { return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); } function n(t) { return t.nodeName.toLowerCase(); } function r(t, e) { var n = t && t.exec(e); return n && 0 === n.index; } function i(t) { return M.test(t); } function a(t) { var e, n, r, a, o = t.className + " "; if (o += t.parentNode ? t.parentNode.className : "", n = j.exec(o))
        return w(n[1]) ? n[1] : "no-highlight"; for (o = o.split(/\s+/), e = 0, r = o.length; e < r; e++)
        if (a = o[e], i(a) || w(a))
            return a; } function o(t) { var e, n = {}, r = Array.prototype.slice.call(arguments, 1); for (e in t)
        n[e] = t[e]; return r.forEach(function (t) { for (e in t)
        n[e] = t[e]; }), n; } function s(t) { var e = []; return function t(r, i) { for (var a = r.firstChild; a; a = a.nextSibling)
        3 === a.nodeType ? i += a.nodeValue.length : 1 === a.nodeType && (e.push({ event: "start", offset: i, node: a }), i = t(a, i), n(a).match(/br|hr|img|input/) || e.push({ event: "stop", offset: i, node: a })); return i; }(t, 0), e; } function u(t, r, i) { function a() { return t.length && r.length ? t[0].offset !== r[0].offset ? t[0].offset < r[0].offset ? t : r : "start" === r[0].event ? t : r : t.length ? t : r; } function o(t) { function r(t) { return " " + t.nodeName + '="' + e(t.value).replace('"', "&quot;") + '"'; } c += "<" + n(t) + x.map.call(t.attributes, r).join("") + ">"; } function s(t) { c += "</" + n(t) + ">"; } function u(t) { ("start" === t.event ? o : s)(t.node); } for (var l = 0, c = "", f = []; t.length || r.length;) {
        var d = a();
        if (c += e(i.substring(l, d[0].offset)), l = d[0].offset, d === t) {
            f.reverse().forEach(s);
            do {
                u(d.splice(0, 1)[0]), d = a();
            } while (d === t && d.length && d[0].offset === l);
            f.reverse().forEach(o);
        }
        else
            "start" === d[0].event ? f.push(d[0].node) : f.pop(), u(d.splice(0, 1)[0]);
    } return c + e(i.substr(l)); } function l(t) { return t.variants && !t.cached_variants && (t.cached_variants = t.variants.map(function (e) { return o(t, { variants: null }, e); })), t.cached_variants || t.endsWithParent && [o(t)] || [t]; } function c(t) { function e(t) { return t && t.source || t; } function n(n, r) { return new RegExp(e(n), "m" + (t.case_insensitive ? "i" : "") + (r ? "g" : "")); } function r(i, a) { if (!i.compiled) {
        if (i.compiled = !0, i.keywords = i.keywords || i.beginKeywords, i.keywords) {
            var o = {}, s = function (e, n) { t.case_insensitive && (n = n.toLowerCase()), n.split(" ").forEach(function (t) { var n = t.split("|"); o[n[0]] = [e, n[1] ? Number(n[1]) : 1]; }); };
            "string" == typeof i.keywords ? s("keyword", i.keywords) : k(i.keywords).forEach(function (t) { s(t, i.keywords[t]); }), i.keywords = o;
        }
        i.lexemesRe = n(i.lexemes || /\w+/, !0), a && (i.beginKeywords && (i.begin = "\\b(" + i.beginKeywords.split(" ").join("|") + ")\\b"), i.begin || (i.begin = /\B|\b/), i.beginRe = n(i.begin), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end && (i.endRe = n(i.end)), i.terminator_end = e(i.end) || "", i.endsWithParent && a.terminator_end && (i.terminator_end += (i.end ? "|" : "") + a.terminator_end)), i.illegal && (i.illegalRe = n(i.illegal)), null == i.relevance && (i.relevance = 1), i.contains || (i.contains = []), i.contains = Array.prototype.concat.apply([], i.contains.map(function (t) { return l("self" === t ? i : t); })), i.contains.forEach(function (t) { r(t, i); }), i.starts && r(i.starts, a);
        var u = i.contains.map(function (t) { return t.beginKeywords ? "\\.?(" + t.begin + ")\\.?" : t.begin; }).concat([i.terminator_end, i.illegal]).map(e).filter(Boolean);
        i.terminators = u.length ? n(u.join("|"), !0) : { exec: function () { return null; } };
    } } r(t); } function f(t, n, i, a) { function o(t, e) { var n, i; for (n = 0, i = e.contains.length; n < i; n++)
        if (r(e.contains[n].beginRe, t))
            return e.contains[n]; } function s(t, e) { if (r(t.endRe, e)) {
        for (; t.endsParent && t.parent;)
            t = t.parent;
        return t;
    } if (t.endsWithParent)
        return s(t.parent, e); } function u(t, e) { return !i && r(e.illegalRe, t); } function l(t, e) { var n = y.case_insensitive ? e[0].toLowerCase() : e[0]; return t.keywords.hasOwnProperty(n) && t.keywords[n]; } function h(t, e, n, r) { var i = r ? "" : T.classPrefix, a = '<span class="' + i, o = n ? "" : S; return (a += t + '">') + e + o; } function p() { var t, n, r, i; if (!x.keywords)
        return e(M); for (i = "", n = 0, x.lexemesRe.lastIndex = 0, r = x.lexemesRe.exec(M); r;)
        i += e(M.substring(n, r.index)), t = l(x, r), t ? (j += t[1], i += h(t[0], e(r[0]))) : i += e(r[0]), n = x.lexemesRe.lastIndex, r = x.lexemesRe.exec(M); return i + e(M.substr(n)); } function v() { var t = "string" == typeof x.subLanguage; if (t && !O[x.subLanguage])
        return e(M); var n = t ? f(x.subLanguage, M, !0, k[x.subLanguage]) : d(M, x.subLanguage.length ? x.subLanguage : void 0); return x.relevance > 0 && (j += n.relevance), t && (k[x.subLanguage] = n.top), h(n.language, n.value, !1, !0); } function g() { C += null != x.subLanguage ? v() : p(), M = ""; } function m(t) { C += t.className ? h(t.className, "", !0) : "", x = Object.create(t, { parent: { value: x } }); } function b(t, e) { if (M += t, null == e)
        return g(), 0; var n = o(e, x); if (n)
        return n.skip ? M += e : (n.excludeBegin && (M += e), g(), n.returnBegin || n.excludeBegin || (M = e)), m(n, e), n.returnBegin ? 0 : e.length; var r = s(x, e); if (r) {
        var i = x;
        i.skip ? M += e : (i.returnEnd || i.excludeEnd || (M += e), g(), i.excludeEnd && (M = e));
        do {
            x.className && (C += S), x.skip || (j += x.relevance), x = x.parent;
        } while (x !== r.parent);
        return r.starts && m(r.starts, ""), i.returnEnd ? 0 : e.length;
    } if (u(e, x))
        throw new Error('Illegal lexeme "' + e + '" for mode "' + (x.className || "<unnamed>") + '"'); return M += e, e.length || 1; } var y = w(t); if (!y)
        throw new Error('Unknown language: "' + t + '"'); c(y); var _, x = a || y, k = {}, C = ""; for (_ = x; _ !== y; _ = _.parent)
        _.className && (C = h(_.className, "", !0) + C); var M = "", j = 0; try {
        for (var E, A, N = 0;;) {
            if (x.terminators.lastIndex = N, !(E = x.terminators.exec(n)))
                break;
            A = b(n.substring(N, E.index), E[0]), N = E.index + A;
        }
        for (b(n.substr(N)), _ = x; _.parent; _ = _.parent)
            _.className && (C += S);
        return { relevance: j, value: C, language: t, top: x };
    }
    catch (t) {
        if (t.message && -1 !== t.message.indexOf("Illegal"))
            return { relevance: 0, value: e(n) };
        throw t;
    } } function d(t, n) { n = n || T.languages || k(O); var r = { relevance: 0, value: e(t) }, i = r; return n.filter(w).forEach(function (e) { var n = f(e, t, !1); n.language = e, n.relevance > i.relevance && (i = n), n.relevance > r.relevance && (i = r, r = n); }), i.language && (r.second_best = i), r; } function h(t) { return T.tabReplace || T.useBR ? t.replace(E, function (t, e) { return T.useBR && "\n" === t ? "<br>" : T.tabReplace ? e.replace(/\t/g, T.tabReplace) : ""; }) : t; } function p(t, e, n) { var r = e ? C[e] : n, i = [t.trim()]; return t.match(/\bhljs\b/) || i.push("hljs"), -1 === t.indexOf(r) && i.push(r), i.join(" ").trim(); } function v(t) { var e, n, r, o, l, c = a(t); i(c) || (T.useBR ? (e = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), e.innerHTML = t.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : e = t, l = e.textContent, r = c ? f(c, l, !0) : d(l), n = s(e), n.length && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), o.innerHTML = r.value, r.value = u(n, s(o), l)), r.value = h(r.value), t.innerHTML = r.value, t.className = p(t.className, c, r.language), t.result = { language: r.language, re: r.relevance }, r.second_best && (t.second_best = { language: r.second_best.language, re: r.second_best.relevance })); } function g(t) { T = o(T, t); } function m() { if (!m.called) {
        m.called = !0;
        var t = document.querySelectorAll("pre code");
        x.forEach.call(t, v);
    } } function b() { addEventListener("DOMContentLoaded", m, !1), addEventListener("load", m, !1); } function y(e, n) { var r = O[e] = n(t); r.aliases && r.aliases.forEach(function (t) { C[t] = e; }); } function _() { return k(O); } function w(t) { return t = (t || "").toLowerCase(), O[t] || O[C[t]]; } var x = [], k = Object.keys, O = {}, C = {}, M = /^(no-?highlight|plain|text)$/i, j = /\blang(?:uage)?-([\w-]+)\b/i, E = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, S = "</span>", T = { classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0 }; return t.highlight = f, t.highlightAuto = d, t.fixMarkup = h, t.highlightBlock = v, t.configure = g, t.initHighlighting = m, t.initHighlightingOnLoad = b, t.registerLanguage = y, t.listLanguages = _, t.getLanguage = w, t.inherit = o, t.IDENT_RE = "[a-zA-Z]\\w*", t.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", t.NUMBER_RE = "\\b\\d+(\\.\\d+)?", t.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", t.BINARY_NUMBER_RE = "\\b(0b[01]+)", t.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", t.BACKSLASH_ESCAPE = { begin: "\\\\[\\s\\S]", relevance: 0 }, t.APOS_STRING_MODE = { className: "string", begin: "'", end: "'", illegal: "\\n", contains: [t.BACKSLASH_ESCAPE] }, t.QUOTE_STRING_MODE = { className: "string", begin: '"', end: '"', illegal: "\\n", contains: [t.BACKSLASH_ESCAPE] }, t.PHRASAL_WORDS_MODE = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, t.COMMENT = function (e, n, r) { var i = t.inherit({ className: "comment", begin: e, end: n, contains: [] }, r || {}); return i.contains.push(t.PHRASAL_WORDS_MODE), i.contains.push({ className: "doctag", begin: "(?:TODO|FIXME|NOTE|BUG|XXX):", relevance: 0 }), i; }, t.C_LINE_COMMENT_MODE = t.COMMENT("//", "$"), t.C_BLOCK_COMMENT_MODE = t.COMMENT("/\\*", "\\*/"), t.HASH_COMMENT_MODE = t.COMMENT("#", "$"), t.NUMBER_MODE = { className: "number", begin: t.NUMBER_RE, relevance: 0 }, t.C_NUMBER_MODE = { className: "number", begin: t.C_NUMBER_RE, relevance: 0 }, t.BINARY_NUMBER_MODE = { className: "number", begin: t.BINARY_NUMBER_RE, relevance: 0 }, t.CSS_NUMBER_MODE = { className: "number", begin: t.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", relevance: 0 }, t.REGEXP_MODE = { className: "regexp", begin: /\//, end: /\/[gimuy]*/, illegal: /\n/, contains: [t.BACKSLASH_ESCAPE, { begin: /\[/, end: /\]/, relevance: 0, contains: [t.BACKSLASH_ESCAPE] }] }, t.TITLE_MODE = { className: "title", begin: t.IDENT_RE, relevance: 0 }, t.UNDERSCORE_TITLE_MODE = { className: "title", begin: t.UNDERSCORE_IDENT_RE, relevance: 0 }, t.METHOD_GUARD = { begin: "\\.\\s*" + t.UNDERSCORE_IDENT_RE, relevance: 0 }, t; }); }, function (t, e) { t.exports = function (t) { var e = { endsWithParent: !0, illegal: /</, relevance: 0, contains: [{ className: "attr", begin: "[A-Za-z0-9\\._:-]+", relevance: 0 }, { begin: /=\s*/, relevance: 0, contains: [{ className: "string", endsParent: !0, variants: [{ begin: /"/, end: /"/ }, { begin: /'/, end: /'/ }, { begin: /[^\s"'=<>`]+/ }] }] }] }; return { aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"], case_insensitive: !0, contains: [{ className: "meta", begin: "<!DOCTYPE", end: ">", relevance: 10, contains: [{ begin: "\\[", end: "\\]" }] }, t.COMMENT("\x3c!--", "--\x3e", { relevance: 10 }), { begin: "<\\!\\[CDATA\\[", end: "\\]\\]>", relevance: 10 }, { begin: /<\?(php)?/, end: /\?>/, subLanguage: "php", contains: [{ begin: "/\\*", end: "\\*/", skip: !0 }] }, { className: "tag", begin: "<style(?=\\s|>|$)", end: ">", keywords: { name: "style" }, contains: [e], starts: { end: "</style>", returnEnd: !0, subLanguage: ["css", "xml"] } }, { className: "tag", begin: "<script(?=\\s|>|$)", end: ">", keywords: { name: "script" }, contains: [e], starts: { end: "<\/script>", returnEnd: !0, subLanguage: ["actionscript", "javascript", "handlebars", "xml"] } }, { className: "meta", variants: [{ begin: /<\?xml/, end: /\?>/, relevance: 10 }, { begin: /<\?\w+/, end: /\?>/ }] }, { className: "tag", begin: "</?", end: "/?>", contains: [{ className: "name", begin: /[^\/><\s]+/, relevance: 0 }, e] }] }; }; }, function (t, e) { t.exports = function (t) { var e = { className: "variable", variants: [{ begin: /\$[\w\d#@][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }] }, n = { className: "string", begin: /"/, end: /"/, contains: [t.BACKSLASH_ESCAPE, e, { className: "variable", begin: /\$\(/, end: /\)/, contains: [t.BACKSLASH_ESCAPE] }] }, r = { className: "string", begin: /'/, end: /'/ }; return { aliases: ["sh", "zsh"], lexemes: /\b-?[a-z\._]+\b/, keywords: { keyword: "if then else elif fi for while in do done case esac function", literal: "true false", built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp", _: "-ne -eq -lt -gt -f -d -e -s -l -a" }, contains: [{ className: "meta", begin: /^#![^\n]+sh\s*$/, relevance: 10 }, { className: "function", begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/, returnBegin: !0, contains: [t.inherit(t.TITLE_MODE, { begin: /\w[\w\d_]*/ })], relevance: 0 }, t.HASH_COMMENT_MODE, n, r, e] }; }; }, function (t, e) { t.exports = function (t) { return { aliases: ["md", "mkdown", "mkd"], contains: [{ className: "section", variants: [{ begin: "^#{1,6}", end: "$" }, { begin: "^.+?\\n[=-]{2,}$" }] }, { begin: "<", end: ">", subLanguage: "xml", relevance: 0 }, { className: "bullet", begin: "^([*+-]|(\\d+\\.))\\s+" }, { className: "strong", begin: "[*_]{2}.+?[*_]{2}" }, { className: "emphasis", variants: [{ begin: "\\*.+?\\*" }, { begin: "_.+?_", relevance: 0 }] }, { className: "quote", begin: "^>\\s+", end: "$" }, { className: "code", variants: [{ begin: "^```w*s*$", end: "^```s*$" }, { begin: "`.+?`" }, { begin: "^( {4}|\t)", end: "$", relevance: 0 }] }, { begin: "^[-\\*]{3,}", end: "$" }, { begin: "\\[.+?\\][\\(\\[].*?[\\)\\]]", returnBegin: !0, contains: [{ className: "string", begin: "\\[", end: "\\]", excludeBegin: !0, returnEnd: !0, relevance: 0 }, { className: "link", begin: "\\]\\(", end: "\\)", excludeBegin: !0, excludeEnd: !0 }, { className: "symbol", begin: "\\]\\[", end: "\\]", excludeBegin: !0, excludeEnd: !0 }], relevance: 10 }, { begin: /^\[[^\n]+\]:/, returnBegin: !0, contains: [{ className: "symbol", begin: /\[/, end: /\]/, excludeBegin: !0, excludeEnd: !0 }, { className: "link", begin: /:\s*/, end: /$/, excludeBegin: !0 }] }] }; }; }, function (t, e) { t.exports = function (t) { return { aliases: ["patch"], contains: [{ className: "meta", relevance: 10, variants: [{ begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ }, { begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ }, { begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ }] }, { className: "comment", variants: [{ begin: /Index: /, end: /$/ }, { begin: /={3,}/, end: /$/ }, { begin: /^\-{3}/, end: /$/ }, { begin: /^\*{3} /, end: /$/ }, { begin: /^\+{3}/, end: /$/ }, { begin: /\*{5}/, end: /\*{5}$/ }] }, { className: "addition", begin: "^\\+", end: "$" }, { className: "deletion", begin: "^\\-", end: "$" }, { className: "addition", begin: "^\\!", end: "$" }] }; }; }, function (t, e) { t.exports = function (t) { var e = { literal: "true false null" }, n = [t.QUOTE_STRING_MODE, t.C_NUMBER_MODE], r = { end: ",", endsWithParent: !0, excludeEnd: !0, contains: n, keywords: e }, i = { begin: "{", end: "}", contains: [{ className: "attr", begin: /"/, end: /"/, contains: [t.BACKSLASH_ESCAPE], illegal: "\\n" }, t.inherit(r, { begin: /:/ })], illegal: "\\S" }, a = { begin: "\\[", end: "\\]", contains: [t.inherit(r)], illegal: "\\S" }; return n.splice(n.length, 0, i, a), { contains: n, keywords: e, illegal: "\\S" }; }; }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(117);
        n.d(e, "dsvFormat", function () { return r.a; });
        var i = n(381);
        n.d(e, "csvParse", function () { return i.c; }), n.d(e, "csvParseRows", function () { return i.d; }), n.d(e, "csvFormat", function () { return i.a; }), n.d(e, "csvFormatRows", function () { return i.b; });
        var a = n(382);
        n.d(e, "tsvParse", function () { return a.c; }), n.d(e, "tsvParseRows", function () { return a.d; }), n.d(e, "tsvFormat", function () { return a.a; }), n.d(e, "tsvFormatRows", function () { return a.b; });
    }, function (t, e, n) {
        "use strict";
        n.d(e, "c", function () { return a; }), n.d(e, "d", function () { return o; }), n.d(e, "a", function () { return s; }), n.d(e, "b", function () { return u; });
        var r = n(117), i = Object(r.a)(","), a = i.parse, o = i.parseRows, s = i.format, u = i.formatRows;
    }, function (t, e, n) {
        "use strict";
        n.d(e, "c", function () { return a; }), n.d(e, "d", function () { return o; }), n.d(e, "a", function () { return s; }), n.d(e, "b", function () { return u; });
        var r = n(117), i = Object(r.a)("\t"), a = i.parse, o = i.parseRows, s = i.format, u = i.formatRows;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s = t.escapeExpression; return '    <div class="' + s(r(n(0)).call(null != e ? e : t.nullContext || {}, "attachment__text-container", { name: "b", hash: { fullscreen: null != e ? e.fullScreen : e }, data: o })) + '">\n        <pre class="attachment__code">' + s(t.lambda(null != e ? e.content : e, e)) + "</pre>\n    </div>\n"; }, 3: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "text", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(4, o, 0), inverse: t.program(6, o, 0), data: o })) ? s : ""; }, 4: function (t, e, i, a, o) { var s = t.escapeExpression; return '    <div class="' + s(r(n(0)).call(null != e ? e : t.nullContext || {}, "attachment__text-container", { name: "b", hash: { fullscreen: null != e ? e.fullScreen : e }, data: o })) + '">\n        <pre class="attachment__text">' + s(t.lambda(null != e ? e.content : e, e)) + "</pre>\n    </div>\n"; }, 6: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "table", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(7, o, 0), inverse: t.program(11, o, 0), data: o })) ? s : ""; }, 7: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '    <div class="' + t.escapeExpression(r(n(0)).call(u, "attachment__table-container", { name: "b", hash: { fullscreen: null != e ? e.fullScreen : e }, data: o })) + '">\n        <table class="table attachment__table">\n            <tbody>\n' + (null != (s = i.each.call(u, null != e ? e.content : e, { name: "each", hash: {}, fn: t.program(8, o, 0), inverse: t.noop, data: o })) ? s : "") + "            </tbody>\n        </table>\n    </div>\n"; }, 8: function (t, e, n, r, i) { var a; return "                <tr>\n" + (null != (a = n.each.call(null != e ? e : t.nullContext || {}, e, { name: "each", hash: {}, fn: t.program(9, i, 0), inverse: t.noop, data: i })) ? a : "") + "                </tr>\n"; }, 9: function (t, e, n, r, i) { return "                        <td>" + t.escapeExpression(t.lambda(e, e)) + "</td>\n"; }, 11: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "image", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(12, o, 0), inverse: t.program(14, o, 0), data: o })) ? s : ""; }, 12: function (t, e, i, a, o) { var s = t.escapeExpression; return '    <div class="' + s(r(n(0)).call(null != e ? e : t.nullContext || {}, "attachment__media-container", { name: "b", hash: { fullscreen: null != e ? e.fullScreen : e }, data: o })) + '"><img class="attachment__media" src="' + s(t.lambda(null != e ? e.sourceUrl : e, e)) + '"/>\n    </div>\n'; }, 14: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "svg", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(15, o, 0), inverse: t.program(17, o, 0), data: o })) ? s : ""; }, 15: function (t, e, n, r, i) { return '    <object class="attachment__embed" type="image/svg+xml" data="' + t.escapeExpression(t.lambda(null != e ? e.sourceUrl : e, e)) + '">\n        Your browser does not support SVG\n    </object>\n'; }, 17: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "video", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(18, o, 0), inverse: t.program(20, o, 0), data: o })) ? s : ""; }, 18: function (t, e, n, r, i) { var a, o = t.lambda, s = t.escapeExpression; return '    <div class="attachment__media-container">\n        <video class="attachment__media" controls>\n            <source src="' + s(o(null != e ? e.sourceUrl : e, e)) + '" type="' + s(o(null != (a = null != e ? e.attachment : e) ? a.type : a, e)) + '">\n            Your browser does not support video tag\n        </video>\n    </div>\n'; }, 20: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "uri", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(21, o, 0), inverse: t.program(27, o, 0), data: o })) ? s : ""; }, 21: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '    <div class="' + t.escapeExpression(r(n(0)).call(u, "attachment__text-container", { name: "b", hash: { fullscreen: null != e ? e.fullScreen : e }, data: o })) + '">\n' + (null != (s = i.each.call(u, null != e ? e.content : e, { name: "each", hash: {}, fn: t.program(22, o, 0), inverse: t.noop, data: o })) ? s : "") + "    </div>\n"; }, 22: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '            <p class="' + t.escapeExpression(r(n(0)).call(u, "attachment", "url", { name: "b", hash: { comment: null != e ? e.comment : e }, data: o })) + '">\n' + (null != (s = i.if.call(u, null != e ? e.comment : e, { name: "if", hash: {}, fn: t.program(23, o, 0), inverse: t.program(25, o, 0), data: o })) ? s : "") + "            </p>\n"; }, 23: function (t, e, n, r, i) { return "                    " + t.escapeExpression(t.lambda(null != e ? e.text : e, e)) + "\n"; }, 25: function (t, e, n, r, i) { var a = t.lambda, o = t.escapeExpression; return '                    <a href="' + o(a(null != e ? e.text : e, e)) + '" target="_blank" class="link">' + o(a(null != e ? e.text : e, e)) + "</a>\n"; }, 27: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "html", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(28, o, 0), inverse: t.program(30, o, 0), data: o })) ? s : ""; }, 28: function (t, e, i, a, o) { var s = t.escapeExpression; return '        <iframe class="' + s(r(n(0)).call(null != e ? e : t.nullContext || {}, "attachment__iframe", { name: "b", hash: { fullscreen: null != e ? e.fullScreen : e }, data: o })) + '" frameborder="0" src="' + s(t.lambda(null != e ? e.sourceUrl : e, e)) + '"></iframe>\n'; }, 30: function (t, e, i, a, o) { var s = t.escapeExpression; return '    <div class="' + s(r(n(0)).call(null != e ? e : t.nullContext || {}, "attachment__text-container", { name: "b", hash: { fullscreen: null != e ? e.fullScreen : e }, data: o })) + '">\n        <span class="fa fa-download"></span>\n        <a class="link" href="' + s(t.lambda(null != e ? e.sourceUrl : e, e)) + '" download>Click to download attachment</a>\n    </div>\n'; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "code", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.program(3, o, 0), data: o })) ? s : ""; }, useData: !0 }); }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '    <div class="execution__content">' + (null != (s = t.invokePartial(n(118), e, { name: "stages-block", hash: { expanded: !1, baseUrl: null != e ? e.baseUrl : e, name: r(n(1)).call(u, "testResult.execution.setup", { name: "t", hash: {}, data: o }), stages: null != e ? e.before : e }, data: o, helpers: i, partials: a, decorators: t.decorators })) ? s : "") + (null != (s = t.invokePartial(n(118), e, { name: "stages-block", hash: { expanded: !0, baseUrl: null != e ? e.baseUrl : e, name: r(n(1)).call(u, "testResult.execution.body", { name: "t", hash: {}, data: o }), stages: null != e ? e.test : e }, data: o, helpers: i, partials: a, decorators: t.decorators })) ? s : "") + (null != (s = t.invokePartial(n(118), e, { name: "stages-block", hash: { expanded: !1, baseUrl: null != e ? e.baseUrl : e, name: r(n(1)).call(u, "testResult.execution.teardown", { name: "t", hash: {}, data: o }), stages: null != e ? e.after : e }, data: o, helpers: i, partials: a, decorators: t.decorators })) ? s : "") + "    </div>\n"; }, 3: function (t, e, i, a, o) { return '    <div class="' + t.escapeExpression(r(n(0)).call(null != e ? e : t.nullContext || {}, "pane", "section", { name: "b", hash: {}, data: o })) + '">\n        No information about test execution is available.\n    </div>\n'; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '<h3 class="test-result-execution__title">' + t.escapeExpression(r(n(1)).call(u, "testResult.execution.name", { name: "t", hash: {}, data: o })) + "</h3>\n\n" + (null != (s = i.if.call(u, null != e ? e.hasContent : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.program(3, o, 0), data: o })) ? s : ""); }, usePartial: !0, useData: !0 }); }, function (t, e) { t.exports = function (t) { return null == t ? "" : "" + t; }; }, function (t, e) { t.exports = function (t, e) { if (e < 1)
        return ""; for (var n = ""; e > 0;)
        1 & e && (n += t), e >>= 1, t += t; return n; }; }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) { return (0, i.default)(t).icon; };
        var r = n(183), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) { return (0, i.default)(t, { base: 2, round: 1 }); };
        var r = n(389), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
    }, function (t, e, n) {
        "use strict";
        (function (e) {
            !function (e) { function n(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [], o = 0, s = void 0, u = void 0, l = void 0, c = void 0, f = void 0, d = void 0, h = void 0, p = void 0, v = void 0, g = void 0, m = void 0, b = void 0, y = void 0, _ = void 0; if (isNaN(t))
                throw new Error("Invalid arguments"); return l = !0 === e.bits, m = !0 === e.unix, u = e.base || 2, g = void 0 !== e.round ? e.round : m ? 1 : 2, b = void 0 !== e.spacer ? e.spacer : m ? "" : " ", _ = e.symbols || e.suffixes || {}, y = 2 === u ? e.standard || "jedec" : "jedec", v = e.output || "string", f = !0 === e.fullform, d = e.fullforms instanceof Array ? e.fullforms : [], s = void 0 !== e.exponent ? e.exponent : -1, p = Number(t), h = p < 0, c = u > 2 ? 1e3 : 1024, h && (p = -p), (-1 === s || isNaN(s)) && (s = Math.floor(Math.log(p) / Math.log(c))) < 0 && (s = 0), s > 8 && (s = 8), 0 === p ? (n[0] = 0, n[1] = m ? "" : i[y][l ? "bits" : "bytes"][s]) : (o = p / (2 === u ? Math.pow(2, 10 * s) : Math.pow(1e3, s)), l && (o *= 8) >= c && s < 8 && (o /= c, s++), n[0] = Number(o.toFixed(s > 0 ? g : 0)), n[1] = 10 === u && 1 === s ? l ? "kb" : "kB" : i[y][l ? "bits" : "bytes"][s], m && (n[1] = "jedec" === y ? n[1].charAt(0) : s > 0 ? n[1].replace(/B$/, "") : n[1], r.test(n[1]) && (n[0] = Math.floor(n[0]), n[1] = ""))), h && (n[0] = -n[0]), n[1] = _[n[1]] || n[1], "array" === v ? n : "exponent" === v ? s : "object" === v ? { value: n[0], suffix: n[1], symbol: n[1] } : (f && (n[1] = d[s] ? d[s] : a[y][s] + (l ? "bit" : "byte") + (1 === n[0] ? "" : "s")), n.join(b)); } var r = /^(b|B)$/, i = { iec: { bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"], bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"] }, jedec: { bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"], bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] } }, a = { iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"], jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"] }; n.partial = function (t) { return function (e) { return n(e, t); }; }, t.exports = n; }("undefined" != typeof window && window);
        }).call(e, n(74));
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a, o, s, u, l, c, f, d, h = n(15), p = r(h), v = n(2), g = r(v), m = n(3), b = r(m), y = n(6), _ = r(y), w = n(4), x = r(w), k = n(5), O = r(k);
        n(391);
        var C = n(27), M = r(C), j = n(9), E = n(392), S = r(E), T = n(8), A = (a = (0, T.className)("modal"), o = (0, T.regions)({ content: ".modal__content" }), s = (0, T.on)("click .modal__content"), u = (0, T.on)("click .modal__background, .modal__close"), a(l = o((d = f = function (t) { function e() { var t, n, r, i; (0, b.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, x.default)(this, (t = e.__proto__ || (0, g.default)(e)).call.apply(t, [this].concat(o))), r.template = S.default, i = n, (0, x.default)(r, i); } return (0, O.default)(e, t), (0, _.default)(e, [{ key: "show", value: function () { this.constructor.container.append(this.$el), this.showChildView("content", this.options.childView), (0, M.default)("#content").toggleClass("blur", !0); } }, { key: "onDestroy", value: function () { (0, M.default)("#content").toggleClass("blur", !1); } }, { key: "onKeepOpen", value: function (t) { t.stopPropagation(); } }, { key: "onClose", value: function () { this.destroy(); } }, { key: "serializeData", value: function () { return { cls: this.className, title: this.options.title }; } }]), e; }(j.View), f.container = (0, M.default)(document.body), c = d, i(c.prototype, "onKeepOpen", [s], (0, p.default)(c.prototype, "onKeepOpen"), c.prototype), i(c.prototype, "onClose", [u], (0, p.default)(c.prototype, "onClose"), c.prototype), l = c)) || l) || l);
        e.default = A;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s = t.escapeExpression; return '<div class="modal__background">\n    <div class="modal__window">\n        <h2 class="' + s(r(n(0)).call(null != e ? e : t.nullContext || {}, null != e ? e.cls : e, "title", { name: "b", hash: {}, data: o })) + '">\n            <span>' + s(t.lambda(null != e ? e.title : e, e)) + '</span>\n            <div class="pane__controls">\n                <span class="modal__close fa fa-close" data-tooltip="Close"></span>\n            </div>\n        </h2>\n        <div class="modal__content"></div>\n        <br>\n    </div>\n\n</div>\n'; }, useData: !0 }); }, function (t, e, n) { t.exports = n.p + "favicon.ico"; }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e) { }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        var i = n(63), a = r(i), o = n(401), s = r(o), u = n(47), l = r(u), c = n(124), f = r(c), d = n(84), h = n(83), p = r(h);
        window.allure = { api: a.default, getPluginSettings: function (t, e) { return (0, d.getSettingsForPlugin)(t, e); }, settings: p.default, components: { AppLayout: l.default, TreeLayout: s.default, WidgetStatusView: f.default } };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(6), l = r(u), c = n(4), f = r(c), d = n(21), h = r(d), p = n(5), v = r(p), g = n(47), m = r(g), b = n(189), y = r(b), _ = n(14), w = n(402), x = r(w), k = n(37), O = r(k), C = function (t) { function e() { return (0, s.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, a.default)(e)).apply(this, arguments)); } return (0, v.default)(e, t), (0, l.default)(e, [{ key: "initialize", value: function (t) { var n = t.url; (0, h.default)(e.prototype.__proto__ || (0, a.default)(e.prototype), "initialize", this).call(this), this.tree = new y.default([], { url: n }), this.routeState = new _.Model; } }, { key: "loadData", value: function () { return this.tree.fetch(); } }, { key: "getContentView", value: function () { var t = this.options, e = t.baseUrl, n = t.tabName, r = t.csvUrl; return new x.default({ tree: this.tree, routeState: this.routeState, tabName: n, baseUrl: e, csvUrl: r }); } }, { key: "onViewReady", value: function () { var t = this.options, e = t.testGroup, n = t.testResult, r = t.testResultTab; this.onRouteUpdate(e, n, r); } }, { key: "onRouteUpdate", value: function (t, e, n) { this.routeState.set("treeNode", { testGroup: t, testResult: e }), this.routeState.set("testResultTab", n); var r = O.default.getUrlParams().attachment; r ? this.routeState.set("attachment", r) : this.routeState.unset("attachment"); } }]), e; }(m.default);
        e.default = C;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(21), v = r(p), g = n(5), m = r(g), b = n(8), y = n(403), _ = r(y), w = n(407), x = r(w), k = n(426), O = r(k), C = n(181), M = r(C), j = n(188), E = r(j), S = n(85), T = r(S), A = (i = (0, b.className)("side-by-side"))(a = function (t) { function e() { return (0, l.default)(this, e), (0, h.default)(this, (e.__proto__ || (0, s.default)(e)).apply(this, arguments)); } return (0, m.default)(e, t), (0, f.default)(e, [{ key: "initialize", value: function (t) { var n = this, r = t.tree, i = t.routeState, a = t.csvUrl; (0, v.default)(e.prototype.__proto__ || (0, s.default)(e.prototype), "initialize", this).call(this), this.csvUrl = a, this.tree = r, this.routeState = i, this.listenTo(this.routeState, "change:treeNode", function (t, e) { return n.showLeaf(e); }); } }, { key: "showLeaf", value: function (t) { var e = this; if (t && t.testResult) {
                    var n = "#" + this.options.baseUrl + "/" + t.testGroup + "/" + t.testResult, r = new E.default({ uid: t.testResult });
                    r.fetch({ success: function () { return e.showChildView("right", new M.default({ baseUrl: n, model: r, routeState: e.routeState })); }, error: function () { return e.showChildView("right", new T.default({ code: 404, message: 'Test result with uid "' + t.testResult + '" not found' })); } });
                }
                else
                    this.showChildView("right", new O.default({ message: "No item selected" })); } }, { key: "onRender", value: function () { var t = this.options, e = t.tabName, n = t.baseUrl, r = new x.default({ collection: this.tree, routeState: this.routeState, treeSorters: [], tabName: e, baseUrl: n, csvUrl: this.csvUrl }); this.showChildView("left", r); } }, { key: "templateContext", value: function () { return { cls: "testresult-tree" }; } }]), e; }(_.default)) || a;
        e.default = A;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v);
        n(404);
        var m = n(405), b = r(m), y = n(9), _ = n(8), w = n(406), x = r(w), k = (i = (0, _.className)("side-by-side"), a = (0, _.regions)({ left: ".side-by-side__left", right: ".side-by-side__right" }), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, c.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, p.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(o))), r.template = x.default, i = n, (0, p.default)(r, i); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "onAttach", value: function () { (0, b.default)([".side-by-side__left", ".side-by-side__right"], { gutterSize: 7 }); } }, { key: "onRender", value: function () { var t = this.options, e = t.left, n = t.right; this.showChildView("left", e), this.showChildView("right", n); } }, { key: "templateContext", value: function () { return { cls: "side-by-side" }; } }]), e; }(y.View)) || o) || o);
        e.default = k;
    }, function (t, e) { }, function (t, e, n) {
        !function (e, n) { t.exports = n(); }(0, function () {
            "use strict";
            var t = window, e = t.document, n = "addEventListener", r = "removeEventListener", i = "getBoundingClientRect", a = function () { return !1; }, o = t.attachEvent && !t[n], s = ["", "-webkit-", "-moz-", "-o-"].filter(function (t) { var n = e.createElement("div"); return n.style.cssText = "width:" + t + "calc(9px)", !!n.style.length; }).shift() + "calc", u = function (t) { return "string" == typeof t || t instanceof String ? e.querySelector(t) : t; };
            return function (l, c) { function f(t, e, n) { var r = P(_, e, n); Object.keys(r).forEach(function (e) { return t.style[e] = r[e]; }); } function d(t, e) { var n = D(_, e); Object.keys(n).forEach(function (e) { return t.style[e] = n[e]; }); } function h(t) { var e = k[this.a], n = k[this.b], r = e.size + n.size; e.size = t / this.size * r, n.size = r - t / this.size * r, f(e.element, e.size, this.aGutterSize), f(n.element, n.size, this.bGutterSize); } function p(t) { var e; this.dragging && (e = "touches" in t ? t.touches[0][w] - this.start : t[w] - this.start, e <= k[this.a].minSize + T + this.aGutterSize ? e = k[this.a].minSize + this.aGutterSize : e >= this.size - (k[this.b].minSize + T + this.bGutterSize) && (e = this.size - (k[this.b].minSize + this.bGutterSize)), h.call(this, e), c.onDrag && c.onDrag()); } function v() { var t = k[this.a].element, e = k[this.b].element; this.size = t[i]()[_] + e[i]()[_] + this.aGutterSize + this.bGutterSize, this.start = t[i]()[x]; } function g() { var e = this, n = k[e.a].element, i = k[e.b].element; e.dragging && c.onDragEnd && c.onDragEnd(), e.dragging = !1, t[r]("mouseup", e.stop), t[r]("touchend", e.stop), t[r]("touchcancel", e.stop), e.parent[r]("mousemove", e.move), e.parent[r]("touchmove", e.move), delete e.stop, delete e.move, n[r]("selectstart", a), n[r]("dragstart", a), i[r]("selectstart", a), i[r]("dragstart", a), n.style.userSelect = "", n.style.webkitUserSelect = "", n.style.MozUserSelect = "", n.style.pointerEvents = "", i.style.userSelect = "", i.style.webkitUserSelect = "", i.style.MozUserSelect = "", i.style.pointerEvents = "", e.gutter.style.cursor = "", e.parent.style.cursor = ""; } function m(e) { var r = this, i = k[r.a].element, o = k[r.b].element; !r.dragging && c.onDragStart && c.onDragStart(), e.preventDefault(), r.dragging = !0, r.move = p.bind(r), r.stop = g.bind(r), t[n]("mouseup", r.stop), t[n]("touchend", r.stop), t[n]("touchcancel", r.stop), r.parent[n]("mousemove", r.move), r.parent[n]("touchmove", r.move), i[n]("selectstart", a), i[n]("dragstart", a), o[n]("selectstart", a), o[n]("dragstart", a), i.style.userSelect = "none", i.style.webkitUserSelect = "none", i.style.MozUserSelect = "none", i.style.pointerEvents = "none", o.style.userSelect = "none", o.style.webkitUserSelect = "none", o.style.MozUserSelect = "none", o.style.pointerEvents = "none", r.gutter.style.cursor = N, r.parent.style.cursor = N, v.call(r); } function b(t) { t.forEach(function (e, n) { if (n > 0) {
                var r = L[n - 1], i = k[r.a], a = k[r.b];
                i.size = t[n - 1], a.size = e, f(i.element, i.size, r.aGutterSize), f(a.element, a.size, r.bGutterSize);
            } }); } function y() { L.forEach(function (t) { t.parent.removeChild(t.gutter), k[t.a].element.style[_] = "", k[t.b].element.style[_] = ""; }); } void 0 === c && (c = {}); var _, w, x, k, O = u(l[0]).parentNode, C = t.getComputedStyle(O).flexDirection, M = c.sizes || l.map(function () { return 100 / l.length; }), j = void 0 !== c.minSize ? c.minSize : 100, E = Array.isArray(j) ? j : l.map(function () { return j; }), S = void 0 !== c.gutterSize ? c.gutterSize : 10, T = void 0 !== c.snapOffset ? c.snapOffset : 30, A = c.direction || "horizontal", N = c.cursor || ("horizontal" === A ? "ew-resize" : "ns-resize"), R = c.gutter || function (t, n) { var r = e.createElement("div"); return r.className = "gutter gutter-" + n, r; }, P = c.elementStyle || function (t, e, n) { var r = {}; return "string" == typeof e || e instanceof String ? r[t] = e : r[t] = o ? e + "%" : s + "(" + e + "% - " + n + "px)", r; }, D = c.gutterStyle || function (t, e) { return n = {}, n[t] = e + "px", n; var n; }; "horizontal" === A ? (_ = "width", "clientWidth", w = "clientX", x = "left", "paddingLeft") : "vertical" === A && (_ = "height", "clientHeight", w = "clientY", x = "top", "paddingTop"); var L = []; return k = l.map(function (t, e) { var r, a = { element: u(t), size: M[e], minSize: E[e] }; if (e > 0 && (r = { a: e - 1, b: e, dragging: !1, isFirst: 1 === e, isLast: e === l.length - 1, direction: A, parent: O }, r.aGutterSize = S, r.bGutterSize = S, r.isFirst && (r.aGutterSize = S / 2), r.isLast && (r.bGutterSize = S / 2), "row-reverse" === C || "column-reverse" === C)) {
                var s = r.a;
                r.a = r.b, r.b = s;
            } if (!o && e > 0) {
                var c = R(e, A);
                d(c, S), c[n]("mousedown", m.bind(r)), c[n]("touchstart", m.bind(r)), O.insertBefore(c, a.element), r.gutter = c;
            } 0 === e || e === l.length - 1 ? f(a.element, a.size, S / 2) : f(a.element, a.size, S); var h = a.element[i]()[_]; return h < a.minSize && (a.minSize = h), e > 0 && L.push(r), a; }), o ? { setSizes: b, destroy: y } : { setSizes: b, getSizes: function () { return k.map(function (t) { return t.size; }); }, collapse: function (t) { if (t === L.length) {
                    var e = L[t - 1];
                    v.call(e), o || h.call(e, e.size - e.bGutterSize);
                }
                else {
                    var n = L[t];
                    v.call(n), o || h.call(n, n.aGutterSize);
                } }, destroy: y }; };
        });
    }, function (t, e, n) { var r = n(7); t.exports = (r.default || r).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { return '<div class="side-by-side__left"></div>\n<div class="side-by-side__right"></div>'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s, u, l, c = n(15), f = r(c), d = n(2), h = r(d), p = n(3), v = r(p), g = n(6), m = r(g), b = n(4), y = r(b), _ = n(5), w = r(_);
        n(408);
        var x = n(9), k = n(409), O = r(k), C = n(8), M = n(410), j = r(M), E = n(190), S = r(E), T = n(416), A = r(T), N = n(419), R = r(N), P = n(14), D = n(84), L = (i = (0, C.className)("tree"), a = (0, C.behavior)("TooltipBehavior", { position: "bottom" }), o = (0, C.regions)({ search: ".pane__search", sorter: ".tree__sorter", filter: ".tree__filter", content: ".tree__content" }), s = (0, C.on)("click .tree__info"), i(u = a(u = o((l = function (t) { function e() { var t, n, r, i; (0, v.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, y.default)(this, (t = e.__proto__ || (0, h.default)(e)).call.apply(t, [this].concat(o))), r.template = O.default, i = n, (0, y.default)(r, i); } return (0, w.default)(e, t), (0, m.default)(e, [{ key: "initialize", value: function (t) { var e = t.routeState, n = t.state, r = void 0 === n ? new P.Model : n, i = t.tabName, a = t.baseUrl, o = t.csvUrl, s = void 0 === o ? null : o, u = t.settings, l = void 0 === u ? (0, D.getSettingsForTreePlugin)(a) : u; this.state = r, this.routeState = e, this.baseUrl = a, this.csvUrl = s, this.tabName = i, this.listenTo(this.routeState, "change:testResultTab", this.render), this.settings = l; } }, { key: "onInfoClick", value: function () { var t = this.settings.isShowGroupInfo(); this.settings.setShowGroupInfo(!t); } }, { key: "onRender", value: function () { this.showChildView("content", new R.default({ state: this.state, routeState: this.routeState, tabName: this.tabName, baseUrl: this.baseUrl, settings: this.settings, collection: this.collection })), this.showChildView("search", new S.default({ state: this.state })), this.showChildView("sorter", new j.default({ settings: this.settings })), this.showChildView("filter", new A.default({ settings: this.settings, statistic: this.collection.statistic })); } }, { key: "templateContext", value: function () { return { cls: this.className, showGroupInfo: this.settings.isShowGroupInfo(), tabName: this.tabName, shownCases: 0, totalCases: 0, filtered: !1, csvUrl: this.csvUrl }; } }]), e; }(x.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(l.prototype, "onInfoClick", [s], (0, f.default)(l.prototype, "onInfoClick"), l.prototype), u = l)) || u) || u) || u);
        e.default = L;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression; return '        <span class="' + u(r(n(0)).call(s, "pane", "subtitle", { name: "b", hash: {}, data: o })) + '">\n        ' + u(r(n(1)).call(s, "component.tree.filtered.total", { name: "t", hash: { count: null != e ? e.totalCases : e }, data: o })) + ",\n            " + u(r(n(1)).call(s, "component.tree.filtered.shown", { name: "t", hash: { count: null != e ? e.shownCases : e }, data: o })) + "\n    </span>\n"; }, 3: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression; return '            <a class="fa fa-download ' + u(r(n(0)).call(s, null != e ? e.cls : e, "control", { name: "b", hash: {}, data: o })) + " " + u(r(n(0)).call(s, null != e ? e.cls : e, "download", { name: "b", hash: {}, data: o })) + '" data-tooltip="' + u(r(n(1)).call(s, "component.tree.download", { name: "t", hash: {}, data: o })) + '"\n               href="' + u(t.lambda(null != e ? e.csvUrl : e, e)) + '" download></a>\n'; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression; return '<div class="' + l(r(n(0)).call(u, "pane", "title", { name: "b", hash: { borderless: !0 }, data: o })) + '">\n    <span class="' + l(r(n(0)).call(u, "pane", "title-text", { name: "b", hash: {}, data: o })) + '">' + l(r(n(1)).call(u, null != e ? e.tabName : e, { name: "t", hash: {}, data: o })) + "</span>\n" + (null != (s = i.if.call(u, null != e ? e.filtered : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.noop, data: o })) ? s : "") + '    <div class="' + l(r(n(0)).call(u, "pane", "search", { name: "b", hash: {}, data: o })) + '"></div>\n    <span class="pane__controls">\n        <a class="fa fa-info-circle ' + l(r(n(0)).call(u, null != e ? e.cls : e, "control", { name: "b", hash: {}, data: o })) + " " + l(r(n(0)).call(u, null != e ? e.cls : e, "info", { name: "b", hash: {}, data: o })) + '" data-tooltip="' + l(r(n(1)).call(u, "component.tree.groups", { name: "t", hash: {}, data: o })) + '"></a>\n' + (null != (s = i.if.call(u, null != e ? e.csvUrl : e, { name: "if", hash: {}, fn: t.program(3, o, 0), inverse: t.noop, data: o })) ? s : "") + '    </span>\n</div>\n\n<div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "ctrl", { name: "b", hash: {}, data: o })) + '">\n    <div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "sorter", { name: "b", hash: {}, data: o })) + '"></div>\n    <div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "strut", { name: "b", hash: {}, data: o })) + '"></div>\n    <div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "filter", { name: "b", hash: {}, data: o })) + '"></div>\n</div>\n\n<div class="' + l(r(n(0)).call(u, null != e ? e.cls : e, "content", { name: "b", hash: {}, data: o })) + '" ></div>'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s, u = n(15), l = r(u), c = n(2), f = r(c), d = n(3), h = r(d), p = n(6), v = r(p), g = n(4), m = r(g), b = n(5), y = r(b);
        n(411);
        var _ = n(8), w = n(412), x = r(w), k = n(9), O = ["sorter.order", "sorter.name", "sorter.duration", "sorter.status"], C = (i = (0, _.className)("sorter"), a = (0, _.on)("click .sorter__item"), i((s = function (t) { function e() { var t, n, r, i; (0, h.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, m.default)(this, (t = e.__proto__ || (0, f.default)(e)).call.apply(t, [this].concat(o))), r.template = x.default, i = n, (0, m.default)(r, i); } return (0, y.default)(e, t), (0, v.default)(e, [{ key: "initialize", value: function (t) { var e = t.settings; this.settings = e; } }, { key: "onChangeSorting", value: function (t) { var e = this.$(t.currentTarget); this.settings.setTreeSorting({ sorter: e.data("name"), ascending: !e.data("asc") }); var n = e.data("asc"); this.$(".sorter_enabled").toggleClass("sorter_enabled"), e.data("asc", !n), e.find(".sorter__name").toggleClass("sorter_enabled"), e.find(n ? ".fa-sort-asc" : ".fa-sort-desc").toggleClass("sorter_enabled"); } }, { key: "serializeData", value: function () { var t = this.settings.getTreeSorting(); return { sorters: O.map(function (e) { return { name: e, asc: t.sorter === e && t.ascending, desc: t.sorter === e && !t.ascending }; }) }; } }]), e; }(k.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(s.prototype, "onChangeSorting", [a], (0, l.default)(s.prototype, "onChangeSorting"), s.prototype), o = s)) || o);
        e.default = C;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression, l = t.lambda; return '    <div class="' + u(r(n(0)).call(s, "sorter", "item", { name: "b", hash: {}, data: o })) + '" data-name="' + u(l(null != e ? e.name : e, e)) + '" data-asc=' + u(l(null != e ? e.asc : e, e)) + '>\n        <span class="' + u(r(n(0)).call(s, "sorter", { name: "b", hash: { enabled: r(n(413)).call(s, null != e ? e.asc : e, null != e ? e.desc : e, { name: "or", hash: {}, data: o }) }, data: o })) + " " + u(r(n(0)).call(s, "sorter", "name", { name: "b", hash: {}, data: o })) + '">' + u(r(n(1)).call(s, null != e ? e.name : e, { name: "t", hash: {}, data: o })) + '</span>\n        <span class="fa-stack ' + u(r(n(0)).call(s, "sorter", "icon", { name: "b", hash: {}, data: o })) + '">\n            <i class="fa fa-sort-asc fa-stack-1x ' + u(r(n(0)).call(s, "sorter", { name: "b", hash: { enabled: null != e ? e.asc : e }, data: o })) + '"></i>\n            <i class="fa fa-sort-desc fa-stack-1x ' + u(r(n(0)).call(s, "sorter", { name: "b", hash: { enabled: null != e ? e.desc : e }, data: o })) + '"></i>\n        </span>\n    </div>\n'; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return '<div class="sorter">\n' + (null != (a = n.each.call(null != e ? e : t.nullContext || {}, null != e ? e.sorters : e, { name: "each", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : "") + "</div>\n"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t, e) { return !(!t && !e); };
    }, function (t, e) { }, function (t, e, n) { var r = n(7); t.exports = (r.default || r).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { return '<div class="search__container">\n    <input class="search__input"\n           type="text" />\n</div>\n'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s, u = n(15), l = r(u), c = n(163), f = r(c), d = n(29), h = r(d), p = n(2), v = r(p), g = n(3), m = r(g), b = n(6), y = r(b), _ = n(4), w = r(_), x = n(5), k = r(x);
        n(417);
        var O = n(8), C = n(418), M = r(C), j = n(40), E = n(9), S = n(1), T = r(S), A = (i = (0, O.className)("status-toggle"), a = (0, O.on)("click .y-label, .n-label"), i((s = function (t) { function e() { var t, n, r, i; (0, m.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, w.default)(this, (t = e.__proto__ || (0, v.default)(e)).call.apply(t, [this].concat(o))), r.template = M.default, i = n, (0, w.default)(r, i); } return (0, k.default)(e, t), (0, y.default)(e, [{ key: "initialize", value: function (t) { var e = t.settings, n = t.statistic; this.settings = e, this.statistic = n, this.listenTo(e, "change", this.render); } }, { key: "serializeData", value: function () { var t = this, e = this.settings.getVisibleStatuses(); return { statuses: j.values.map(function (n) { return { status: n, statusName: (0, T.default)("status." + n, {}), active: !!e[n], count: t.statistic ? t.statistic[n.toLowerCase()] : 0 }; }) }; } }, { key: "onToggleStatus", value: function (t) { var e = this.$(t.currentTarget), n = e.data("status"), r = e.hasClass("n-label"), i = this.settings.getVisibleStatuses(); this.settings.setVisibleStatuses((0, h.default)({}, i, (0, f.default)({}, n, r))); } }]), e; }(E.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(s.prototype, "onToggleStatus", [a], (0, l.default)(s.prototype, "onToggleStatus"), s.prototype), o = s)) || o);
        e.default = A;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '        <div class="' + t.escapeExpression(r(n(0)).call(u, "status-toggle", "item", { name: "b", hash: {}, data: o })) + '">\n' + (null != (s = i.if.call(u, null != e ? e.active : e, { name: "if", hash: {}, fn: t.program(2, o, 0), inverse: t.program(4, o, 0), data: o })) ? s : "") + "        </div>\n"; }, 2: function (t, e, i, a, o) { var s = t.lambda, u = t.escapeExpression; return '            <span class="y-label y-label_status_' + u(s(null != e ? e.status : e, e)) + '" data-status="' + u(s(null != e ? e.status : e, e)) + '"\n                    data-tooltip="' + u(r(n(1)).call(null != e ? e : t.nullContext || {}, "component.statusToggle.hideCases", { name: "t", hash: { status: null != e ? e.statusName : e }, data: o })) + '">' + u(s(null != e ? e.count : e, e)) + "</span>\n"; }, 4: function (t, e, i, a, o) { var s = t.lambda, u = t.escapeExpression; return '            <span class="n-label n-label_status_' + u(s(null != e ? e.status : e, e)) + '" data-status="' + u(s(null != e ? e.status : e, e)) + '"\n                    data-tooltip="' + u(r(n(1)).call(null != e ? e : t.nullContext || {}, "component.statusToggle.showCases", { name: "t", hash: { status: null != e ? e.statusName : e }, data: o })) + '">' + u(s(null != e ? e.count : e, e)) + "</span>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression; return '<div class="' + l(r(n(0)).call(u, "status-toggle", "items", { name: "b", hash: {}, data: o })) + '">\n    ' + l(r(n(1)).call(u, "component.tree.filter", { name: "t", hash: {}, data: o })) + ":\n" + (null != (s = i.each.call(u, null != e ? e.statuses : e, { name: "each", hash: {}, fn: t.program(1, o, 0), inverse: t.noop, data: o })) ? s : "") + "</div>"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s, u, l = n(15), c = r(l), f = n(2), d = r(f), h = n(3), p = r(h), v = n(6), g = r(v), m = n(4), b = r(m), y = n(5), _ = r(y);
        n(420);
        var w = n(9), x = n(421), k = r(x), O = n(422), C = r(O), M = n(8), j = n(37), E = r(j), S = n(192), T = r(S), A = n(193), N = n(190), R = (i = (0, M.className)("tree"), a = (0, M.behavior)("TooltipBehavior", { position: "bottom" }), o = (0, M.on)("click .node__title"), i(s = a((u = function (t) { function e() { var t, n, r, i; (0, p.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, b.default)(this, (t = e.__proto__ || (0, d.default)(e)).call.apply(t, [this].concat(o))), r.template = C.default, r.cachedQuery = "", i = n, (0, b.default)(r, i); } return (0, _.default)(e, t), (0, g.default)(e, [{ key: "initialize", value: function (t) { var e = t.routeState, n = t.state, r = t.tabName, i = t.baseUrl, a = t.settings; this.state = n, this.routeState = e, this.baseUrl = i, this.tabName = r, this.setState(), this.listenTo(this.routeState, "change:treeNode", this.selectNode), this.listenTo(this.routeState, "change:testResultTab", this.render), this.settings = a, this.listenTo(this.settings, "change", this.render), this.listenTo(this.state, "change", this.handleStateChange), this.listenTo(k.default, "key:up", this.onKeyUp, this), this.listenTo(k.default, "key:down", this.onKeyDown, this), this.listenTo(k.default, "key:esc", this.onKeyBack, this), this.listenTo(k.default, "key:left", this.onKeyBack, this); } }, { key: "applyFilters", value: function () { var t = this.settings.getVisibleStatuses(), e = this.state.get(N.SEARCH_QUERY_KEY), n = (0, A.mix)((0, A.byText)(e), (0, A.byStatuses)(t)), r = this.settings.getTreeSorting(), i = (0, T.default)(r); this.collection.applyFilterAndSorting(n, i); } }, { key: "setState", value: function () { var t = this.routeState.get("treeNode"); if (t && t.testResult) {
                    var e = t.testResult;
                    this.state.set(e, !0);
                } if (t && t.testGroup) {
                    var n = t.testGroup;
                    this.state.set(n, !0);
                } } }, { key: "onBeforeRender", value: function () { this.applyFilters(); } }, { key: "handleStateChange", value: function () { var t = this.state.get(N.SEARCH_QUERY_KEY); t !== this.cachedQuery && (this.cachedQuery = t, this.render()); } }, { key: "onRender", value: function () { var t = this; this.selectNode(), this.state.get(N.SEARCH_QUERY_KEY) ? this.$(".node__title").each(function (e, n) { t.$(n).parent().addClass("node__expanded"); }) : this.restoreState(); } }, { key: "selectNode", value: function () { var t = this.routeState.previous("treeNode"); this.toggleNode(t, !1); var e = this.routeState.get("treeNode"); this.toggleNode(e, !0), this.restoreState(); } }, { key: "toggleNode", value: function (t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; if (t) {
                    this.findElement(t).toggleClass("node__title_active", e), this.changeState(t.testResult), this.changeState(t.testGroup);
                } } }, { key: "changeState", value: function (t) { arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] ? this.state.unset(t) : this.state.set(t, !0); } }, { key: "restoreState", value: function () { var t = this; this.$("[data-uid]").each(function (e, n) { var r = t.$(n), i = r.data("uid"); r.toggleClass("node__expanded", t.state.has(i)); }), this.$(".node__title_active").parents(".node").toggleClass("node__expanded", !0), this.$(".node__expanded").parents(".node").toggleClass("node__expanded", !0); } }, { key: "findElement", value: function (t) { return t.testResult ? this.$("[data-uid='" + t.testResult + "'][data-parentUid='" + t.testGroup + "']") : this.$("[data-uid='" + t.testGroup + "']"); } }, { key: "onNodeClick", value: function (t) { var e = this.$(t.currentTarget), n = e.data("uid"); this.changeState(n, !this.state.has(n)), e.parent().toggleClass("node__expanded"); } }, { key: "onKeyUp", value: function (t) { t.preventDefault(); var e = this.routeState.get("treeNode"); e && e.testResult ? this.selectTestResult(this.collection.getPreviousTestResult(e.testResult)) : this.selectTestResult(this.collection.getLastTestResult()); } }, { key: "onKeyDown", value: function (t) { t.preventDefault(); var e = this.routeState.get("treeNode"); e && e.testResult ? this.selectTestResult(this.collection.getNextTestResult(e.testResult)) : this.selectTestResult(this.collection.getFirstTestResult()); } }, { key: "onKeyBack", value: function (t) { t.preventDefault(); var e = this.routeState.get("treeNode"); e && (e.testGroup && e.testResult ? this.routeState.get("attachment") ? E.default.setSearch({ attachment: null }) : E.default.toUrl(this.baseUrl + "/" + e.testGroup) : e.testGroup && E.default.toUrl("" + this.baseUrl)); } }, { key: "selectTestResult", value: function (t) { if (t) {
                    var e = this.routeState.get("testResultTab") || "";
                    E.default.toUrl(this.baseUrl + "/" + t.parentUid + "/" + t.uid + "/" + e, { replace: !0 });
                } } }, { key: "templateContext", value: function () { return { cls: this.className, baseUrl: this.baseUrl, showGroupInfo: this.settings.isShowGroupInfo(), time: this.collection.time, statistic: this.collection.statistic, uid: this.collection.uid, tabName: this.tabName, items: this.collection.toJSON(), testResultTab: this.routeState.get("testResultTab") || "" }; } }]), e; }(w.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(u.prototype, "onNodeClick", [o], (0, c.default)(u.prototype, "onNodeClick"), u.prototype), s = u)) || s) || s);
        e.default = R;
    }, function (t, e) { }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(6), l = r(u), c = n(4), f = r(c), d = n(5), h = r(d), p = n(9), v = n(27), g = r(v), m = { 27: "esc", 37: "left", 38: "up", 39: "right", 40: "down" }, b = function (t) { function e() { return (0, s.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, a.default)(e)).apply(this, arguments)); } return (0, h.default)(e, t), (0, l.default)(e, [{ key: "initialize", value: function () { (0, g.default)(document).on("keydown", this.keyHandler.bind(this)); } }, { key: "keyHandler", value: function (t) { var e = m[t.keyCode]; e && this.trigger("key:" + e, t); } }]), e; }(p.Object);
        e.default = new b;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, n, r, i, a, o) { var s; return null != (s = n.each.call(null != e ? e : t.nullContext || {}, null != e ? e.items : e, { name: "each", hash: {}, fn: t.program(2, i, 0, a, o), inverse: t.noop, data: i })) ? s : ""; }, 2: function (t, e, r, i, a, o, s) { var u; return null != (u = t.invokePartial(n(191), e, { name: "tree-group", hash: { testResultTab: null != s[1] ? s[1].testResultTab : s[1], tabName: null != s[1] ? s[1].tabName : s[1], showGroupInfo: null != s[1] ? s[1].showGroupInfo : s[1], baseUrl: null != s[1] ? s[1].baseUrl : s[1] }, data: a, helpers: r, partials: i, decorators: t.decorators })) ? u : ""; }, 4: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression; return '           <div class="' + u(r(n(0)).call(s, null != e ? e.cls : e, "empty", { name: "b", hash: {}, data: o })) + '">' + u(r(n(1)).call(s, "component.tree.empty", { name: "t", hash: {}, data: o })) + "</div>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o, s, u) { var l, c = null != e ? e : t.nullContext || {}, f = t.escapeExpression; return '<div class="' + f(r(n(0)).call(c, null != e ? e.cls : e, "content", { name: "b", hash: {}, data: o })) + '" data-uid="' + f(t.lambda(null != e ? e.uid : e, e)) + '">\n' + (null != (l = i.if.call(c, null != e ? e.items : e, { name: "if", hash: {}, fn: t.program(1, o, 0, s, u), inverse: t.program(4, o, 0, s, u), data: o })) ? l : "") + "</div>\n"; }, usePartial: !0, useData: !0, useDepths: !0 }); }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) { var e = i.values.map(function (e) { var n = t && void 0 !== t[e] ? t[e] : 0; return 0 === n ? "" : '<span class="label label_status_' + e + '">' + n + "</span> "; }).join(""); return new r.SafeString("" + e); };
        var r = n(7), i = n(40);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t || "number" == typeof t; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, n, r, i) { var a; return '\n        <div class="node__parameters long-line line-ellipsis">\n            <span>&nbsp</span>\n' + (null != (a = n.each.call(null != e ? e : t.nullContext || {}, null != e ? e.parameters : e, { name: "each", hash: {}, fn: t.program(2, i, 0), inverse: t.noop, data: i })) ? a : "") + "        </div>\n"; }, 2: function (t, e, n, r, i) { var a; return (null != (a = n.if.call(null != e ? e : t.nullContext || {}, e, { name: "if", hash: {}, fn: t.program(3, i, 0), inverse: t.program(5, i, 0), data: i })) ? a : "") + '<span class="node__parameters_separator">,</span>\n'; }, 3: function (t, e, n, r, i) { return "                    " + t.escapeExpression(t.lambda(e, e)); }, 5: function (t, e, n, r, i) { return "                    null"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = t.lambda, l = t.escapeExpression, c = null != e ? e : t.nullContext || {}; return '<a class="node node__leaf" href="#' + l(u(null != e ? e.baseUrl : e, e)) + "/" + l(u(null != e ? e.parentUid : e, e)) + "/" + l(u(null != e ? e.uid : e, e)) + "/" + l(u(null != e ? e.testResultTab : e, e)) + '">\n    <div class="node__title" data-uid="' + l(u(null != e ? e.uid : e, e)) + '" data-parentUid="' + l(u(null != e ? e.parentUid : e, e)) + '">\n        <div class="node__anchor">\n            ' + l(r(n(64)).call(c, null != e ? e.status : e, "fa-lg", { name: "allure-icon", hash: {}, data: o })) + '\n        </div>\n        <div class="node__order">#' + l(u(null != e ? e.order : e, e)) + '</div>\n        <div class="node__name">\n            ' + l(u(null != e ? e.name : e, e)) + '\n        </div>\n        <div class="' + l(r(n(0)).call(c, "node", "flaky", { name: "b", hash: { shown: null != e ? e.flaky : e }, data: o })) + '">\n            ' + l(r(n(64)).call(c, "flaky", { name: "allure-icon", hash: {}, data: o })) + "\n        </div>\n" + (null != (s = i.if.call(c, null != e ? e.parameters : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.noop, data: o })) ? s : "") + '        <div class="tree__strut">&nbsp</div>\n        <div class="node__stats">' + l(r(n(39)).call(c, null != (s = null != e ? e.time : e) ? s.duration : s, { name: "duration", hash: {}, data: o })) + "</div>\n    </div>\n</a>"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p);
        n(427);
        var g = n(9), m = n(8), b = n(428), y = r(b), _ = (i = (0, m.className)("empty-view"))(a = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = y.default, i = n, (0, h.default)(r, i); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "serializeData", value: function () { return { cls: this.className, message: this.options.message }; } }]), e; }(g.View)) || a;
        e.default = _;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s = t.lambda, u = t.escapeExpression; return '<div class="' + u(s(null != e ? e.cls : e, e)) + '">\n    <p class="' + u(r(n(0)).call(null != e ? e : t.nullContext || {}, null != e ? e.cls : e, "message", { name: "b", hash: {}, data: o })) + '">' + u(s(null != e ? e.message : e, e)) + "</p>\n</div>"; }, useData: !0 }); }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o, s, u) { var l = t.lambda, c = t.escapeExpression; return "        <" + c(l(null != u[1] ? u[1].rowTag : u[1], e)) + ' class="table__row" href="#' + c(l(null != u[1] ? u[1].baseUrl : u[1], e)) + "/" + c(l(null != e ? e.uid : e, e)) + '">\n            <div class="table__col">' + c(l(null != e ? e.name : e, e)) + '</div>\n            <div class="table__col">\n                ' + c(r(n(430)).call(null != e ? e : t.nullContext || {}, null != e ? e.statistic : e, { name: "status-bar", hash: {}, data: o })) + "\n            </div>\n        </" + c(l(null != u[1] ? u[1].rowTag : u[1], e)) + ">\n"; }, 3: function (t, e, i, a, o) { var s = t.escapeExpression; return '        <a class="table__row" href="#' + s(t.lambda(null != e ? e.baseUrl : e, e)) + '">\n            <div class="table__col table__col_center">\n                ' + s(r(n(1)).call(null != e ? e : t.nullContext || {}, "component.widgetStatus.showAll", { name: "t", hash: {}, data: o })) + "\n            </div>\n        </a>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o, s, u) { var l, c = null != e ? e : t.nullContext || {}, f = t.escapeExpression; return '<h2 class="widget__title">\n    ' + f(r(n(1)).call(c, null != e ? e.title : e, { name: "t", hash: {}, data: o })) + '\n    <span class="widget__subtitle">' + f(r(n(1)).call(c, "component.widgetStatus.total", { name: "t", hash: { count: null != e ? e.total : e }, data: o })) + '</span>\n</h2>\n<div class="table table_hover widget__table">\n' + (null != (l = i.each.call(c, null != e ? e.items : e, { name: "each", hash: {}, fn: t.program(1, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + (null != (l = i.if.call(c, null != e ? e.showAll : e, { name: "if", hash: {}, fn: t.program(3, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + "</div>\n"; }, useData: !0, useDepths: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { var e = a.values.map(function (e) { var n = void 0 === t[e] ? 0 : t[e]; return 0 === n ? "" : '<div class="bar__fill bar__fill_status_' + e + '" style="flex-grow: ' + n + '">' + n + "</div>"; }).join(""); return new i.SafeString('<div class="bar">' + e + "</div>"); }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
        var i = n(7), a = n(40);
    }, function (t, e, n) {
        "use strict";
        var r = n(432), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTab("", { title: "tab.overview.name", icon: "fa fa-home", route: "", onEnter: function () { return new i.default({ tabName: "tab.overview.name" }); } });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(6), l = r(u), c = n(4), f = r(c), d = n(5), h = r(d), p = n(47), v = r(p), g = n(194), m = r(g), b = function (t) { function e() { return (0, s.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, a.default)(e)).apply(this, arguments)); } return (0, h.default)(e, t), (0, l.default)(e, [{ key: "getContentView", value: function () { return new m.default({ tabName: "widgets" }); } }]), e; }(v.default);
        e.default = b;
    }, function (t, e, n) { n(434), t.exports = n(13).Object.keys; }, function (t, e, n) { var r = n(58), i = n(56); n(78)("keys", function () { return function (t) { return i(r(t)); }; }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        e.__esModule = !0;
        var i = n(436), a = r(i), o = n(439), s = r(o);
        e.default = function () { function t(t, e) { var n = [], r = !0, i = !1, a = void 0; try {
            for (var o, u = (0, s.default)(t); !(r = (o = u.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0)
                ;
        }
        catch (t) {
            i = !0, a = t;
        }
        finally {
            try {
                !r && u.return && u.return();
            }
            finally {
                if (i)
                    throw a;
            }
        } return n; } return function (e, n) { if (Array.isArray(e))
            return e; if ((0, a.default)(Object(e)))
            return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }; }();
    }, function (t, e, n) { t.exports = { default: n(437), __esModule: !0 }; }, function (t, e, n) { n(81), n(59), t.exports = n(438); }, function (t, e, n) { var r = n(112), i = n(18)("iterator"), a = n(52); t.exports = n(13).isIterable = function (t) { var e = Object(t); return void 0 !== e[i] || "@@iterator" in e || a.hasOwnProperty(r(e)); }; }, function (t, e, n) { t.exports = { default: n(440), __esModule: !0 }; }, function (t, e, n) { n(81), n(59), t.exports = n(441); }, function (t, e, n) { var r = n(28), i = n(113); t.exports = n(13).getIterator = function (t) { var e = i(t); if ("function" != typeof e)
        throw TypeError(t + " is not iterable!"); return r(e.call(t)); }; }, function (t, e) { }, function (t, e, n) {
        var r, i; /**!
         * Sortable
         * @author	RubaXa   <trash@rubaxa.org>
         * @license MIT
         */
        !function (a) {
            "use strict";
            r = a, void 0 !== (i = "function" == typeof r ? r.call(e, n, e, t) : r) && (t.exports = i);
        }(function () {
            "use strict";
            function t(e, n) { if (!e || !e.nodeType || 1 !== e.nodeType)
                throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(e); this.el = e, this.options = n = y({}, n), e[W] = this; var r = { group: Math.random(), sort: !0, disabled: !1, store: null, handle: null, scroll: !0, scrollSensitivity: 30, scrollSpeed: 10, draggable: /[uo]l/i.test(e.nodeName) ? "li" : ">*", ghostClass: "sortable-ghost", chosenClass: "sortable-chosen", dragClass: "sortable-drag", ignore: "a, img", filter: null, preventOnFilter: !0, animation: 0, setData: function (t, e) { t.setData("Text", e.textContent); }, dropBubble: !1, dragoverBubble: !1, dataIdAttr: "data-id", delay: 0, forceFallback: !1, fallbackClass: "sortable-fallback", fallbackOnBody: !1, fallbackTolerance: 0, fallbackOffset: { x: 0, y: 0 }, supportPointer: !1 !== t.supportPointer }; for (var i in r)
                !(i in n) && (n[i] = r[i]); ct(n); for (var o in this)
                "_" === o.charAt(0) && "function" == typeof this[o] && (this[o] = this[o].bind(this)); this.nativeDraggable = !n.forceFallback && nt, a(e, "mousedown", this._onTapStart), a(e, "touchstart", this._onTapStart), n.supportPointer && a(e, "pointerdown", this._onTapStart), this.nativeDraggable && (a(e, "dragover", this), a(e, "dragenter", this)), ut.push(this._onDragOver), n.store && this.sort(n.store.get(this)); }
            function e(t, e) { "clone" !== t.lastPullMode && (e = !0), j && j.state !== e && (u(j, "display", e ? "none" : ""), e || j.state && (t.options.group.revertClone ? (E.insertBefore(j, S), t._animate(O, j)) : E.insertBefore(j, O)), j.state = e); }
            function n(t, e, n) { if (t) {
                n = n || X;
                do {
                    if (">*" === e && t.parentNode === n || m(t, e))
                        return t;
                } while (t = r(t));
            } return null; }
            function r(t) { var e = t.host; return e && e.nodeType ? e : t.parentNode; }
            function i(t) { t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.preventDefault(); }
            function a(t, e, n) { t.addEventListener(e, n, tt); }
            function o(t, e, n) { t.removeEventListener(e, n, tt); }
            function s(t, e, n) { if (t)
                if (t.classList)
                    t.classList[n ? "add" : "remove"](e);
                else {
                    var r = (" " + t.className + " ").replace($, " ").replace(" " + e + " ", " ");
                    t.className = (r + (n ? " " + e : "")).replace($, " ");
                } }
            function u(t, e, n) { var r = t && t.style; if (r) {
                if (void 0 === n)
                    return X.defaultView && X.defaultView.getComputedStyle ? n = X.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
                e in r || (e = "-webkit-" + e), r[e] = n + ("string" == typeof n ? "" : "px");
            } }
            function l(t, e, n) { if (t) {
                var r = t.getElementsByTagName(e), i = 0, a = r.length;
                if (n)
                    for (; i < a; i++)
                        n(r[i], i);
                return r;
            } return []; }
            function c(t, e, n, r, i, a, o, s) { t = t || e[W]; var u = X.createEvent("Event"), l = t.options, c = "on" + n.charAt(0).toUpperCase() + n.substr(1); u.initEvent(n, !0, !0), u.to = i || e, u.from = a || e, u.item = r || e, u.clone = j, u.oldIndex = o, u.newIndex = s, e.dispatchEvent(u), l[c] && l[c].call(t, u); }
            function f(t, e, n, r, i, a, o, s) { var u, l, c = t[W], f = c.options.onMove; return u = X.createEvent("Event"), u.initEvent("move", !0, !0), u.to = e, u.from = t, u.dragged = n, u.draggedRect = r, u.related = i || e, u.relatedRect = a || e.getBoundingClientRect(), u.willInsertAfter = s, t.dispatchEvent(u), f && (l = f.call(c, u, o)), l; }
            function d(t) { t.draggable = !1; }
            function h() { it = !1; }
            function p(t, e) { var n = t.lastElementChild, r = n.getBoundingClientRect(); return e.clientY - (r.top + r.height) > 5 || e.clientX - (r.left + r.width) > 5; }
            function v(t) { for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--;)
                r += e.charCodeAt(n); return r.toString(36); }
            function g(t, e) { var n = 0; if (!t || !t.parentNode)
                return -1; for (; t && (t = t.previousElementSibling);)
                "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !m(t, e) || n++; return n; }
            function m(t, e) { if (t) {
                e = e.split(".");
                var n = e.shift().toUpperCase(), r = new RegExp("\\s(" + e.join("|") + ")(?=\\s)", "g");
                return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(r) || []).length != e.length);
            } return !1; }
            function b(t, e) { var n, r; return function () { void 0 === n && (n = arguments, r = this, J(function () { 1 === n.length ? t.call(r, n[0]) : t.apply(r, n), n = void 0; }, e)); }; }
            function y(t, e) { if (t && e)
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n]); return t; }
            function _(t) { return Q && Q.dom ? Q.dom(t).cloneNode(!0) : Z ? Z(t).clone(!0)[0] : t.cloneNode(!0); }
            function w(t) { for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
                var r = e[n];
                r.checked && st.push(r);
            } }
            function x(t) { return J(t, 0); }
            function k(t) { return clearTimeout(t); }
            if ("undefined" == typeof window || !window.document)
                return function () { throw new Error("Sortable.js requires a window with a document"); };
            var O, C, M, j, E, S, T, A, N, R, P, D, L, V, B, z, I, U, F, H, q = {}, $ = /\s+/g, G = /left|right|inline/, W = "Sortable" + (new Date).getTime(), Y = window, X = Y.document, K = Y.parseInt, J = Y.setTimeout, Z = Y.jQuery || Y.Zepto, Q = Y.Polymer, tt = !1, et = !1, nt = "draggable" in X.createElement("div"), rt = function (t) { return !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && (t = X.createElement("x"), t.style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents); }(), it = !1, at = Math.abs, ot = Math.min, st = [], ut = [], lt = b(function (t, e, n) { if (n && e.scroll) {
                var r, i, a, o, s, u, l = n[W], c = e.scrollSensitivity, f = e.scrollSpeed, d = t.clientX, h = t.clientY, p = window.innerWidth, v = window.innerHeight;
                if (N !== n && (A = e.scroll, N = n, R = e.scrollFn, !0 === A)) {
                    A = n;
                    do {
                        if (A.offsetWidth < A.scrollWidth || A.offsetHeight < A.scrollHeight)
                            break;
                    } while (A = A.parentNode);
                }
                A && (r = A, i = A.getBoundingClientRect(), a = (at(i.right - d) <= c) - (at(i.left - d) <= c), o = (at(i.bottom - h) <= c) - (at(i.top - h) <= c)), a || o || (a = (p - d <= c) - (d <= c), o = (v - h <= c) - (h <= c), (a || o) && (r = Y)), q.vx === a && q.vy === o && q.el === r || (q.el = r, q.vx = a, q.vy = o, clearInterval(q.pid), r && (q.pid = setInterval(function () { if (u = o ? o * f : 0, s = a ? a * f : 0, "function" == typeof R)
                    return R.call(l, s, u, t); r === Y ? Y.scrollTo(Y.pageXOffset + s, Y.pageYOffset + u) : (r.scrollTop += u, r.scrollLeft += s); }, 24)));
            } }, 30), ct = function (t) { function e(t, e) { return void 0 !== t && !0 !== t || (t = n.name), "function" == typeof t ? t : function (n, r) { var i = r.options.group.name; return e ? t : t && (t.join ? t.indexOf(i) > -1 : i == t); }; } var n = {}, r = t.group; r && "object" == typeof r || (r = { name: r }), n.name = r.name, n.checkPull = e(r.pull, !0), n.checkPut = e(r.put), n.revertClone = r.revertClone, t.group = n; };
            try {
                window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function () { et = !1, tt = { capture: !1, passive: et }; } }));
            }
            catch (t) { }
            return t.prototype = { constructor: t, _onTapStart: function (t) { var e, r = this, i = this.el, a = this.options, o = a.preventOnFilter, s = t.type, u = t.touches && t.touches[0], l = (u || t).target, f = t.target.shadowRoot && t.path && t.path[0] || l, d = a.filter; if (w(i), !O && !(/mousedown|pointerdown/.test(s) && 0 !== t.button || a.disabled) && !f.isContentEditable && (l = n(l, a.draggable, i)) && T !== l) {
                    if (e = g(l, a.draggable), "function" == typeof d) {
                        if (d.call(this, t, l, this))
                            return c(r, f, "filter", l, i, i, e), void (o && t.preventDefault());
                    }
                    else if (d && (d = d.split(",").some(function (t) { if (t = n(f, t.trim(), i))
                        return c(r, t, "filter", l, i, i, e), !0; })))
                        return void (o && t.preventDefault());
                    a.handle && !n(f, a.handle, i) || this._prepareDragStart(t, u, l, e);
                } }, _prepareDragStart: function (t, e, n, r) { var i, o = this, u = o.el, f = o.options, h = u.ownerDocument; n && !O && n.parentNode === u && (U = t, E = u, O = n, C = O.parentNode, S = O.nextSibling, T = n, z = f.group, V = r, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, O.style["will-change"] = "all", i = function () { o._disableDelayedDrag(), O.draggable = o.nativeDraggable, s(O, f.chosenClass, !0), o._triggerDragStart(t, e), c(o, E, "choose", O, E, E, V); }, f.ignore.split(",").forEach(function (t) { l(O, t.trim(), d); }), a(h, "mouseup", o._onDrop), a(h, "touchend", o._onDrop), a(h, "touchcancel", o._onDrop), a(h, "selectstart", o), f.supportPointer && a(h, "pointercancel", o._onDrop), f.delay ? (a(h, "mouseup", o._disableDelayedDrag), a(h, "touchend", o._disableDelayedDrag), a(h, "touchcancel", o._disableDelayedDrag), a(h, "mousemove", o._disableDelayedDrag), a(h, "touchmove", o._disableDelayedDrag), f.supportPointer && a(h, "pointermove", o._disableDelayedDrag), o._dragStartTimer = J(i, f.delay)) : i()); }, _disableDelayedDrag: function () { var t = this.el.ownerDocument; clearTimeout(this._dragStartTimer), o(t, "mouseup", this._disableDelayedDrag), o(t, "touchend", this._disableDelayedDrag), o(t, "touchcancel", this._disableDelayedDrag), o(t, "mousemove", this._disableDelayedDrag), o(t, "touchmove", this._disableDelayedDrag), o(t, "pointermove", this._disableDelayedDrag); }, _triggerDragStart: function (t, e) { e = e || ("touch" == t.pointerType ? t : null), e ? (U = { target: O, clientX: e.clientX, clientY: e.clientY }, this._onDragStart(U, "touch")) : this.nativeDraggable ? (a(O, "dragend", this), a(E, "dragstart", this._onDragStart)) : this._onDragStart(U, !0); try {
                    X.selection ? x(function () { X.selection.empty(); }) : window.getSelection().removeAllRanges();
                }
                catch (t) { } }, _dragStarted: function () { if (E && O) {
                    var e = this.options;
                    s(O, e.ghostClass, !0), s(O, e.dragClass, !1), t.active = this, c(this, E, "start", O, E, E, V);
                }
                else
                    this._nulling(); }, _emulateDragOver: function () { if (F) {
                    if (this._lastX === F.clientX && this._lastY === F.clientY)
                        return;
                    this._lastX = F.clientX, this._lastY = F.clientY, rt || u(M, "display", "none");
                    var t = X.elementFromPoint(F.clientX, F.clientY), e = t, n = ut.length;
                    if (t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(F.clientX, F.clientY), e = t), e)
                        do {
                            if (e[W]) {
                                for (; n--;)
                                    ut[n]({ clientX: F.clientX, clientY: F.clientY, target: t, rootEl: e });
                                break;
                            }
                            t = e;
                        } while (e = e.parentNode);
                    rt || u(M, "display", "");
                } }, _onTouchMove: function (e) { if (U) {
                    var n = this.options, r = n.fallbackTolerance, i = n.fallbackOffset, a = e.touches ? e.touches[0] : e, o = a.clientX - U.clientX + i.x, s = a.clientY - U.clientY + i.y, l = e.touches ? "translate3d(" + o + "px," + s + "px,0)" : "translate(" + o + "px," + s + "px)";
                    if (!t.active) {
                        if (r && ot(at(a.clientX - this._lastX), at(a.clientY - this._lastY)) < r)
                            return;
                        this._dragStarted();
                    }
                    this._appendGhost(), H = !0, F = a, u(M, "webkitTransform", l), u(M, "mozTransform", l), u(M, "msTransform", l), u(M, "transform", l), e.preventDefault();
                } }, _appendGhost: function () { if (!M) {
                    var t, e = O.getBoundingClientRect(), n = u(O), r = this.options;
                    M = O.cloneNode(!0), s(M, r.ghostClass, !1), s(M, r.fallbackClass, !0), s(M, r.dragClass, !0), u(M, "top", e.top - K(n.marginTop, 10)), u(M, "left", e.left - K(n.marginLeft, 10)), u(M, "width", e.width), u(M, "height", e.height), u(M, "opacity", "0.8"), u(M, "position", "fixed"), u(M, "zIndex", "100000"), u(M, "pointerEvents", "none"), r.fallbackOnBody && X.body.appendChild(M) || E.appendChild(M), t = M.getBoundingClientRect(), u(M, "width", 2 * e.width - t.width), u(M, "height", 2 * e.height - t.height);
                } }, _onDragStart: function (t, e) { var n = this, r = t.dataTransfer, i = n.options; n._offUpEvents(), z.checkPull(n, n, O, t) && (j = _(O), j.draggable = !1, j.style["will-change"] = "", u(j, "display", "none"), s(j, n.options.chosenClass, !1), n._cloneId = x(function () { E.insertBefore(j, O), c(n, E, "clone", O); })), s(O, i.dragClass, !0), e ? ("touch" === e ? (a(X, "touchmove", n._onTouchMove), a(X, "touchend", n._onDrop), a(X, "touchcancel", n._onDrop), i.supportPointer && (a(X, "pointermove", n._onTouchMove), a(X, "pointerup", n._onDrop))) : (a(X, "mousemove", n._onTouchMove), a(X, "mouseup", n._onDrop)), n._loopId = setInterval(n._emulateDragOver, 50)) : (r && (r.effectAllowed = "move", i.setData && i.setData.call(n, r, O)), a(X, "drop", n), n._dragStartId = x(n._dragStarted)); }, _onDragOver: function (r) { var i, a, o, s, l = this.el, c = this.options, d = c.group, v = t.active, g = z === d, m = !1, b = c.sort; if (void 0 !== r.preventDefault && (r.preventDefault(), !c.dragoverBubble && r.stopPropagation()), !O.animated && (H = !0, v && !c.disabled && (g ? b || (s = !E.contains(O)) : I === this || (v.lastPullMode = z.checkPull(this, v, O, r)) && d.checkPut(this, v, O, r)) && (void 0 === r.rootEl || r.rootEl === this.el))) {
                    if (lt(r, c, this.el), it)
                        return;
                    if (i = n(r.target, c.draggable, l), a = O.getBoundingClientRect(), I !== this && (I = this, m = !0), s)
                        return e(v, !0), C = E, void (j || S ? E.insertBefore(O, j || S) : b || E.appendChild(O));
                    if (0 === l.children.length || l.children[0] === M || l === r.target && p(l, r)) {
                        if (0 !== l.children.length && l.children[0] !== M && l === r.target && (i = l.lastElementChild), i) {
                            if (i.animated)
                                return;
                            o = i.getBoundingClientRect();
                        }
                        e(v, g), !1 !== f(E, l, O, a, i, o, r) && (O.contains(l) || (l.appendChild(O), C = l), this._animate(a, O), i && this._animate(o, i));
                    }
                    else if (i && !i.animated && i !== O && void 0 !== i.parentNode[W]) {
                        P !== i && (P = i, D = u(i), L = u(i.parentNode)), o = i.getBoundingClientRect();
                        var y = o.right - o.left, _ = o.bottom - o.top, w = G.test(D.cssFloat + D.display) || "flex" == L.display && 0 === L["flex-direction"].indexOf("row"), x = i.offsetWidth > O.offsetWidth, k = i.offsetHeight > O.offsetHeight, T = (w ? (r.clientX - o.left) / y : (r.clientY - o.top) / _) > .5, A = i.nextElementSibling, N = !1;
                        if (w) {
                            var R = O.offsetTop, V = i.offsetTop;
                            N = R === V ? i.previousElementSibling === O && !x || T && x : i.previousElementSibling === O || O.previousElementSibling === i ? (r.clientY - o.top) / _ > .5 : V > R;
                        }
                        else
                            m || (N = A !== O && !k || T && k);
                        var B = f(E, l, O, a, i, o, r, N);
                        !1 !== B && (1 !== B && -1 !== B || (N = 1 === B), it = !0, J(h, 30), e(v, g), O.contains(l) || (N && !A ? l.appendChild(O) : i.parentNode.insertBefore(O, N ? A : i)), C = O.parentNode, this._animate(a, O), this._animate(o, i));
                    }
                } }, _animate: function (t, e) { var n = this.options.animation; if (n) {
                    var r = e.getBoundingClientRect();
                    1 === t.nodeType && (t = t.getBoundingClientRect()), u(e, "transition", "none"), u(e, "transform", "translate3d(" + (t.left - r.left) + "px," + (t.top - r.top) + "px,0)"), e.offsetWidth, u(e, "transition", "all " + n + "ms"), u(e, "transform", "translate3d(0,0,0)"), clearTimeout(e.animated), e.animated = J(function () { u(e, "transition", ""), u(e, "transform", ""), e.animated = !1; }, n);
                } }, _offUpEvents: function () { var t = this.el.ownerDocument; o(X, "touchmove", this._onTouchMove), o(X, "pointermove", this._onTouchMove), o(t, "mouseup", this._onDrop), o(t, "touchend", this._onDrop), o(t, "pointerup", this._onDrop), o(t, "touchcancel", this._onDrop), o(t, "pointercancel", this._onDrop), o(t, "selectstart", this); }, _onDrop: function (e) { var n = this.el, r = this.options; clearInterval(this._loopId), clearInterval(q.pid), clearTimeout(this._dragStartTimer), k(this._cloneId), k(this._dragStartId), o(X, "mouseover", this), o(X, "mousemove", this._onTouchMove), this.nativeDraggable && (o(X, "drop", this), o(n, "dragstart", this._onDragStart)), this._offUpEvents(), e && (H && (e.preventDefault(), !r.dropBubble && e.stopPropagation()), M && M.parentNode && M.parentNode.removeChild(M), E !== C && "clone" === t.active.lastPullMode || j && j.parentNode && j.parentNode.removeChild(j), O && (this.nativeDraggable && o(O, "dragend", this), d(O), O.style["will-change"] = "", s(O, this.options.ghostClass, !1), s(O, this.options.chosenClass, !1), c(this, E, "unchoose", O, C, E, V), E !== C ? (B = g(O, r.draggable)) >= 0 && (c(null, C, "add", O, C, E, V, B), c(this, E, "remove", O, C, E, V, B), c(null, C, "sort", O, C, E, V, B), c(this, E, "sort", O, C, E, V, B)) : O.nextSibling !== S && (B = g(O, r.draggable)) >= 0 && (c(this, E, "update", O, C, E, V, B), c(this, E, "sort", O, C, E, V, B)), t.active && (null != B && -1 !== B || (B = V), c(this, E, "end", O, C, E, V, B), this.save()))), this._nulling(); }, _nulling: function () { E = O = C = M = S = j = T = A = N = U = F = H = B = P = D = I = z = t.active = null, st.forEach(function (t) { t.checked = !0; }), st.length = 0; }, handleEvent: function (t) { switch (t.type) {
                    case "drop":
                    case "dragend":
                        this._onDrop(t);
                        break;
                    case "dragover":
                    case "dragenter":
                        O && (this._onDragOver(t), i(t));
                        break;
                    case "mouseover":
                        this._onDrop(t);
                        break;
                    case "selectstart": t.preventDefault();
                } }, toArray: function () { for (var t, e = [], r = this.el.children, i = 0, a = r.length, o = this.options; i < a; i++)
                    t = r[i], n(t, o.draggable, this.el) && e.push(t.getAttribute(o.dataIdAttr) || v(t)); return e; }, sort: function (t) { var e = {}, r = this.el; this.toArray().forEach(function (t, i) { var a = r.children[i]; n(a, this.options.draggable, r) && (e[t] = a); }, this), t.forEach(function (t) { e[t] && (r.removeChild(e[t]), r.appendChild(e[t])); }); }, save: function () { var t = this.options.store; t && t.set(this); }, closest: function (t, e) { return n(t, e || this.options.draggable, this.el); }, option: function (t, e) { var n = this.options; if (void 0 === e)
                    return n[t]; n[t] = e, "group" === t && ct(n); }, destroy: function () { var t = this.el; t[W] = null, o(t, "mousedown", this._onTapStart), o(t, "touchstart", this._onTapStart), o(t, "pointerdown", this._onTapStart), this.nativeDraggable && (o(t, "dragover", this), o(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function (t) { t.removeAttribute("draggable"); }), ut.splice(ut.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null; } }, a(X, "touchmove", function (e) { t.active && e.preventDefault(); }), t.utils = { on: a, off: o, css: u, find: l, is: function (t, e) { return !!n(t, e, t); }, extend: y, throttle: b, closest: n, toggleClass: s, clone: _, index: g, nextTick: x, cancelNextTick: k }, t.create = function (e, n) { return new t(e, n); }, t.version = "1.7.0", t;
        });
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () { }; t.showChildView(e, new a.default), n.fetch().then(function () { t.showChildView(e, r), i(); }); }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.fetchAndShow = r;
        var i = n(445), a = function (t) { return t && t.__esModule ? t : { default: t }; }(i);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p);
        n(446);
        var g = n(9), m = n(8), b = n(447), y = r(b), _ = (i = (0, m.options)({ text: "Loading..." }))(a = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = y.default, i = n, (0, h.default)(r, i); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "initialize", value: function (t) { this.options = t; } }, { key: "serializeData", value: function () { return this.options; } }]), e; }(g.View)) || a;
        e.default = _;
    }, function (t, e) { }, function (t, e, n) { var r = n(7); t.exports = (r.default || r).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a, o = null != e ? e : t.nullContext || {}, s = n.helperMissing, u = t.escapeExpression; return '<div class="loader__mask">\n    <div class="loader">\n        ' + u((a = null != (a = n.spinner || (null != e ? e.spinner : e)) ? a : s, "function" == typeof a ? a.call(o, { name: "spinner", hash: {}, data: i }) : a)) + '\n        <p class="loader__text">' + u((a = null != (a = n.text || (null != e ? e.text : e)) ? a : s, "function" == typeof a ? a.call(o, { name: "text", hash: {}, data: i }) : a)) + "</p>\n    </div>\n</div>\n"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        allure.api.addTab("categories", { title: "tab.categories.name", icon: "fa fa-flag", route: "categories(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)", onEnter: function (t, e, n) { return new allure.components.TreeLayout({ testGroup: t, testResult: e, testResultTab: n, tabName: "tab.categories.name", baseUrl: "categories", url: "data/categories.json", csvUrl: "data/categories.csv" }); } });
    }, function (t, e, n) {
        "use strict";
        allure.api.addTab("suites", { title: "tab.suites.name", icon: "fa fa-briefcase", route: "suites(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)", onEnter: function (t, e, n) { return new allure.components.TreeLayout({ testGroup: t, testResult: e, testResultTab: n, tabName: "tab.suites.name", baseUrl: "suites", url: "data/suites.json", csvUrl: "data/suites.csv" }); } });
    }, function (t, e, n) {
        "use strict";
        var r = n(451), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTab("graph", { title: "tab.graph.name", icon: "fa fa-bar-chart", route: "graph", onEnter: function () { return new i.default; } });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(6), l = r(u), c = n(4), f = r(c), d = n(5), h = r(d), p = n(47), v = r(p), g = n(452), m = r(g), b = n(194), y = r(b), _ = function (t) { function e() { return (0, s.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, a.default)(e)).apply(this, arguments)); } return (0, h.default)(e, t), (0, l.default)(e, [{ key: "initialize", value: function () { this.collection = new m.default; } }, { key: "loadData", value: function () { return this.collection.fetch(); } }, { key: "getContentView", value: function () { return new y.default({ model: this.collection, tabName: "graph" }); } }]), e; }(v.default);
        e.default = _;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(4), l = r(u), c = n(5), f = r(c), d = n(14), h = function (t) { function e() { var t, n, r, i; (0, s.default)(this, e); for (var o = arguments.length, u = Array(o), c = 0; c < o; c++)
            u[c] = arguments[c]; return n = r = (0, l.default)(this, (t = e.__proto__ || (0, a.default)(e)).call.apply(t, [this].concat(u))), r.url = "widgets/status-chart.json", i = n, (0, l.default)(r, i); } return (0, f.default)(e, t), e; }(d.Collection);
        e.default = h;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        var i = n(29), a = r(i), o = n(454), s = r(o);
        allure.api.addTab("timeline", { title: "tab.timeline.name", icon: "fa fa-clock-o", route: "timeline", onEnter: function () { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n]; return new s.default((0, a.default)({}, e, { url: "data/timeline.json" })); } });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(6), l = r(u), c = n(4), f = r(c), d = n(21), h = r(d), p = n(5), v = r(p), g = n(47), m = r(g), b = n(455), y = r(b), _ = n(189), w = r(_), x = function (t) { function e() { return (0, s.default)(this, e), (0, f.default)(this, (e.__proto__ || (0, a.default)(e)).apply(this, arguments)); } return (0, v.default)(e, t), (0, l.default)(e, [{ key: "initialize", value: function (t) { var n = t.url; (0, h.default)(e.prototype.__proto__ || (0, a.default)(e.prototype), "initialize", this).call(this), this.items = new w.default([], { url: n }); } }, { key: "loadData", value: function () { return this.items.fetch(); } }, { key: "getContentView", value: function () { return new y.default({ collection: this.items }); } }]), e; }(m.default);
        e.default = x;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(86), s = r(o), u = n(2), l = r(u), c = n(3), f = r(c), d = n(6), h = r(d), p = n(4), v = r(p), g = n(21), m = r(g), b = n(5), y = r(b), _ = (0, s.default)(["", "<br>\n            ", " — ", ""], ["", "<br>\n            ", " — ", ""]);
        n(462);
        var w = n(65), x = r(w), k = n(8), O = n(39), C = r(O), M = n(1), j = r(M), E = n(193), S = n(192), T = r(S), A = n(41), N = n(12), R = n(576), P = n(233);
        n(618);
        var D = n(92), L = r(D), V = n(46), B = r(V), z = n(624), I = r(z), U = n(195), F = (i = (0, k.className)("timeline"))(a = function (t) { function e() { return (0, f.default)(this, e), (0, v.default)(this, (e.__proto__ || (0, l.default)(e)).apply(this, arguments)); } return (0, y.default)(e, t), (0, h.default)(e, [{ key: "initialize", value: function () { var t = this; this.chartX = (0, A.scaleLinear)(), this.brushX = (0, A.scaleLinear)(), this.sorter = (0, T.default)({ sorter: "sorter.name", ascending: !0 }), this.brush = (0, R.brushX)().on("start brush end", this.onBrushChange.bind(this)), this.tooltip = new B.default({ position: "bottom" }), this.collection.applyFilterAndSorting(function () { return 1; }, this.sorter), this.minDuration = this.collection.time.minDuration, this.maxDuration = this.collection.time.maxDuration, this.selectedDuration = this.minDuration, this.data = this.collection.toJSON(), this.total = this.collection.allResults.length, this.timeOffset = function (e) { return e - t.collection.time.start; }; } }, { key: "onAttach", value: function () { this.doShow(); } }, { key: "setupViewport", value: function () { this.$el.html((0, I.default)({ PADDING: 30 })), this.svgChart = (0, N.select)(this.$el[0]).select(".timeline__chart_svg"), this.svgBrush = (0, N.select)(this.$el[0]).select(".timeline__brush_svg"), this.slider = this.svgChart.select(".timeline__slider"); } }, { key: "setupSlider", value: function () { var t = this, e = (0, A.scaleLinear)().range([0, this.width]).domain([this.minDuration, this.maxDuration]).clamp(!0); this.slider.append("line").attrs({ class: "timeline__slider_track", x1: e.range()[0], x2: e.range()[1] }), this.handle = this.slider.insert("circle").attrs({ class: "timeline__slider_handle", cx: e(this.selectedDuration), r: 8 }).call((0, P.drag)().on("drag", function () { t.selectedDuration = e.invert(N.event.x), t.handle.attr("cx", e(t.selectedDuration)); }).on("end", function () { var n = (0, E.byDuration)(t.selectedDuration, t.maxDuration); t.collection.applyFilterAndSorting(n, t.sorter), t.data = t.collection.toJSON(), t.doShow(), t.handle.attr("cx", e(t.selectedDuration)); })); var n = this.collection.testResults.length, r = { count: n, percent: (100 * n / this.total).toFixed(2), duration: (0, C.default)(this.selectedDuration) }; this.slider.insert("g").append("text").attr("transform", "translate(" + this.width / 2 + ", 20)").attr("class", "timeline__slider_text").text((0, j.default)("tab.timeline.selected", { hash: r })), this.slider.insert("g").attr("class", "timeline__slider_text").attr("transform", "translate(0, 20)").selectAll("text").data(e.domain()).enter().append("text").attr("x", e).text(function (t) { return (0, C.default)(t, 1); }); } }, { key: "doShow", value: function () { var t = this; this.width = this.$el.width() > 60 ? this.$el.width() - 60 : this.$el.width(); var n = [this.collection.time.start, this.collection.time.stop]; this.chartX.domain(n).range([0, this.width]), this.brushX.domain(n).range([0, this.width]), this.setupViewport(), this.setupSlider(); var r = 10, i = this.svgChart.select(".timeline__plot"); r += this.drawTestGroups(this.data, r, i, !0), (0, N.select)(this.$el[0]).select(".timeline__brush").style("top", function () { return Math.min(t.$el.height() - 20, r + 30) + "px"; }), this.xChartAxis = this.makeAxis((0, U.axisBottom)(), this.svgChart.select(".timeline__chart__axis_x"), { scale: this.chartX, tickFormat: function () { return ""; }, tickSizeOuter: 0, tickSizeInner: r }), this.xBrushAxis = this.makeAxis((0, U.axisBottom)(), this.svgBrush.select(".timeline__brush__axis_x"), { scale: this.chartX, tickFormat: function (e) { return (0, C.default)(e - t.collection.time.start, 2); }, tickSizeOuter: 0 }, { top: 24, left: 30 }), this.brush.extent([[0, 0], [this.width, 20]]), this.svgBrush.append("g").attrs({ transform: "translate(30, 2)", class: "brush" }).call(this.brush).call(this.brush.move, this.chartX.range()), this.firstRender && this.svgBrush.select(".brush").transition().duration(300).call(this.brush.move, [1 / 16 * this.width, .9375 * this.width]).transition().duration(500).call(this.brush.move, this.chartX.range()), this.svgChart.attr("height", function () { return 30 + r + 20; }), (0, m.default)(e.prototype.__proto__ || (0, l.default)(e.prototype), "onRender", this).call(this); } }, { key: "drawTestGroups", value: function (t, e, n, r) { var i = this; return t.filter(function (t) { return t.children; }).forEach(function (t) { var a = 0, o = n.append("g").attrs({ class: "timeline__group", transform: "translate(0, " + e + ")" }); if (r) {
                    var s = o.append("text").datum(t).text(function (t) { return t.name; }).attr("class", "timeline__group_title");
                    i.bindTooltip(s), a = 22, e += a;
                } e += i.drawTestGroups(t.children, a, o, !1); }), e += this.drawTestResults(t.filter(function (t) { return !t.children; }), n, e); } }, { key: "drawTestResults", value: function (t, e) { var n = this; if (t.length) {
                    var r = e.selectAll(".timeline__item").data(t).enter().append("a").attr("xlink:href", function (t) { return "#testresult/" + t.uid; }).append("rect").attrs({ class: function (t) { return "timeline__item chart__fill_status_" + t.status; }, x: function (t) { return n.chartX(t.time.start); }, width: function (t) { return n.chartX(t.time.start + t.time.duration); }, rx: 2, ry: 2, height: 20 });
                    return this.bindTooltip(r), r.on("click", this.hideTooltip.bind(this)), 22;
                } return 0; } }, { key: "onBrushChange", value: function () { var t = this, e = N.event.selection, n = function (e) { return Math.max(0, Math.min(t.chartX(e.time.start), t.width)); }, r = function (e) { return Math.max(0, Math.min(t.chartX(e.time.stop), t.width)); }; e && (this.chartX.domain(e.map(this.brushX.invert, this.brushX)), this.svgChart.selectAll(".timeline__item").attrs({ x: function (t) { return n(t); }, width: function (t) { return r(t) - n(t); } }), this.svgBrush.select(".timeline__brush__axis_x").call(this.xBrushAxis), this.svgChart.select(".timeline__chart__axis_x").call(this.xChartAxis)), this.svgBrush.selectAll(".handle").attrs({ y: 0, height: 20 }); } }, { key: "getTooltipContent", value: function (t) { return (0, L.default)(_, t.name, (0, C.default)(this.timeOffset(t.time.start)), (0, C.default)(this.timeOffset(t.time.stop))); } }]), e; }(x.default)) || a;
        e.default = F;
    }, function (t, e, n) { t.exports = { default: n(457), __esModule: !0 }; }, function (t, e, n) { n(458); var r = n(13).Object; t.exports = function (t, e) { return r.defineProperties(t, e); }; }, function (t, e, n) { var r = n(20); r(r.S + r.F * !n(32), "Object", { defineProperties: n(158) }); }, function (t, e, n) { t.exports = { default: n(460), __esModule: !0 }; }, function (t, e, n) { n(461), t.exports = n(13).Object.freeze; }, function (t, e, n) { var r = n(31), i = n(160).onFreeze; n(78)("freeze", function (t) { return function (e) { return t && r(e) ? t(i(e)) : e; }; }); }, function (t, e) { }, function (t, e) { }, function (t, e, n) {
        "use strict";
        function r(t) { return "translate(" + (t + .5) + ",0)"; }
        function i(t) { return "translate(0," + (t + .5) + ")"; }
        function a(t) { return function (e) { return +t(e); }; }
        function o(t) { var e = Math.max(0, t.bandwidth() - 1) / 2; return t.round() && (e = Math.round(e)), function (n) { return +t(n) + e; }; }
        function s() { return !this.__axis; }
        function u(t, e) { function n(n) { var r = null == l ? e.ticks ? e.ticks.apply(e, u) : e.domain() : l, i = null == c ? e.tickFormat ? e.tickFormat.apply(e, u) : p.a : c, h = Math.max(f, 0) + _, O = e.range(), C = +O[0] + .5, M = +O[O.length - 1] + .5, j = (e.bandwidth ? o : a)(e.copy()), E = n.selection ? n.selection() : n, S = E.selectAll(".domain").data([null]), T = E.selectAll(".tick").data(r, e).order(), A = T.exit(), N = T.enter().append("g").attr("class", "tick"), R = T.select("line"), P = T.select("text"); S = S.merge(S.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), T = T.merge(N), R = R.merge(N.append("line").attr("stroke", "#000").attr(x + "2", w * f)), P = P.merge(N.append("text").attr("fill", "#000").attr(x, w * h).attr("dy", t === v ? "0em" : t === m ? "0.71em" : "0.32em")), n !== E && (S = S.transition(n), T = T.transition(n), R = R.transition(n), P = P.transition(n), A = A.transition(n).attr("opacity", y).attr("transform", function (t) { return isFinite(t = j(t)) ? k(t) : this.getAttribute("transform"); }), N.attr("opacity", y).attr("transform", function (t) { var e = this.parentNode.__axis; return k(e && isFinite(e = e(t)) ? e : j(t)); })), A.remove(), S.attr("d", t === b || t == g ? "M" + w * d + "," + C + "H0.5V" + M + "H" + w * d : "M" + C + "," + w * d + "V0.5H" + M + "V" + w * d), T.attr("opacity", 1).attr("transform", function (t) { return k(j(t)); }), R.attr(x + "2", w * f), P.attr(x, w * h).text(i), E.filter(s).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === g ? "start" : t === b ? "end" : "middle"), E.each(function () { this.__axis = j; }); } var u = [], l = null, c = null, f = 6, d = 6, _ = 3, w = t === v || t === b ? -1 : 1, x = t === b || t === g ? "x" : "y", k = t === v || t === m ? r : i; return n.scale = function (t) { return arguments.length ? (e = t, n) : e; }, n.ticks = function () { return u = h.a.call(arguments), n; }, n.tickArguments = function (t) { return arguments.length ? (u = null == t ? [] : h.a.call(t), n) : u.slice(); }, n.tickValues = function (t) { return arguments.length ? (l = null == t ? null : h.a.call(t), n) : l && l.slice(); }, n.tickFormat = function (t) { return arguments.length ? (c = t, n) : c; }, n.tickSize = function (t) { return arguments.length ? (f = d = +t, n) : f; }, n.tickSizeInner = function (t) { return arguments.length ? (f = +t, n) : f; }, n.tickSizeOuter = function (t) { return arguments.length ? (d = +t, n) : d; }, n.tickPadding = function (t) { return arguments.length ? (_ = +t, n) : _; }, n; }
        function l(t) { return u(v, t); }
        function c(t) { return u(g, t); }
        function f(t) { return u(m, t); }
        function d(t) { return u(b, t); }
        e.d = l, e.c = c, e.a = f, e.b = d;
        var h = n(465), p = n(466), v = 1, g = 2, m = 3, b = 4, y = 1e-6;
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return r; });
        var r = Array.prototype.slice;
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return t; };
    }, function (t, e, n) {
        "use strict";
        function r() { return new i; }
        function i() { this._ = "@" + (++a).toString(36); }
        e.a = r;
        var a = 0;
        i.prototype = r.prototype = { constructor: i, get: function (t) { for (var e = this._; !(e in t);)
                if (!(t = t.parentNode))
                    return; return t[e]; }, set: function (t, e) { return t[this._] = e; }, remove: function (t) { return this._ in t && delete t[this._]; }, toString: function () { return this._; } };
    }, function (t, e, n) {
        "use strict";
        var r = n(129), i = n(87);
        e.a = function (t) { var e = Object(r.a)(); return e.changedTouches && (e = e.changedTouches[0]), Object(i.a)(t, e); };
    }, function (t, e, n) {
        "use strict";
        var r = n(25);
        e.a = function (t) { return "string" == typeof t ? new r.a([[document.querySelector(t)]], [document.documentElement]) : new r.a([[t]], r.c); };
    }, function (t, e, n) {
        "use strict";
        var r = n(25), i = n(131);
        e.a = function (t) { "function" != typeof t && (t = Object(i.a)(t)); for (var e = this._groups, n = e.length, a = new Array(n), o = 0; o < n; ++o)
            for (var s, u, l = e[o], c = l.length, f = a[o] = new Array(c), d = 0; d < c; ++d)
                (s = l[d]) && (u = t.call(s, s.__data__, d, l)) && ("__data__" in s && (u.__data__ = s.__data__), f[d] = u); return new r.a(a, this._parents); };
    }, function (t, e, n) {
        "use strict";
        var r = n(25), i = n(197);
        e.a = function (t) { "function" != typeof t && (t = Object(i.a)(t)); for (var e = this._groups, n = e.length, a = [], o = [], s = 0; s < n; ++s)
            for (var u, l = e[s], c = l.length, f = 0; f < c; ++f)
                (u = l[f]) && (a.push(t.call(u, u.__data__, f, l)), o.push(u)); return new r.a(a, o); };
    }, function (t, e, n) {
        "use strict";
        var r = n(25), i = n(196);
        e.a = function (t) { "function" != typeof t && (t = Object(i.a)(t)); for (var e = this._groups, n = e.length, a = new Array(n), o = 0; o < n; ++o)
            for (var s, u = e[o], l = u.length, c = a[o] = [], f = 0; f < l; ++f)
                (s = u[f]) && t.call(s, s.__data__, f, u) && c.push(s); return new r.a(a, this._parents); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n, r, i, a) { for (var s, u = 0, l = e.length, c = a.length; u < c; ++u)
            (s = e[u]) ? (s.__data__ = a[u], r[u] = s) : n[u] = new o.a(t, a[u]); for (; u < l; ++u)
            (s = e[u]) && (i[u] = s); }
        function i(t, e, n, r, i, a, s) { var l, c, f, d = {}, h = e.length, p = a.length, v = new Array(h); for (l = 0; l < h; ++l)
            (c = e[l]) && (v[l] = f = u + s.call(c, c.__data__, l, e), f in d ? i[l] = c : d[f] = c); for (l = 0; l < p; ++l)
            f = u + s.call(t, a[l], l, a), (c = d[f]) ? (r[l] = c, c.__data__ = a[l], d[f] = null) : n[l] = new o.a(t, a[l]); for (l = 0; l < h; ++l)
            (c = e[l]) && d[v[l]] === c && (i[l] = c); }
        var a = n(25), o = n(198), s = n(474), u = "$";
        e.a = function (t, e) { if (!t)
            return m = new Array(this.size()), h = -1, this.each(function (t) { m[++h] = t; }), m; var n = e ? i : r, o = this._parents, u = this._groups; "function" != typeof t && (t = Object(s.a)(t)); for (var l = u.length, c = new Array(l), f = new Array(l), d = new Array(l), h = 0; h < l; ++h) {
            var p = o[h], v = u[h], g = v.length, m = t.call(p, p && p.__data__, h, o), b = m.length, y = f[h] = new Array(b), _ = c[h] = new Array(b);
            n(p, v, y, _, d[h] = new Array(g), m, e);
            for (var w, x, k = 0, O = 0; k < b; ++k)
                if (w = y[k]) {
                    for (k >= O && (O = k + 1); !(x = _[O]) && ++O < b;)
                        ;
                    w._next = x || null;
                }
        } return c = new a.a(c, o), c._enter = f, c._exit = d, c; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return function () { return t; }; };
    }, function (t, e, n) {
        "use strict";
        var r = n(199), i = n(25);
        e.a = function () { return new i.a(this._exit || this._groups.map(r.a), this._parents); };
    }, function (t, e, n) {
        "use strict";
        var r = n(25);
        e.a = function (t) { for (var e = this._groups, n = t._groups, i = e.length, a = n.length, o = Math.min(i, a), s = new Array(i), u = 0; u < o; ++u)
            for (var l, c = e[u], f = n[u], d = c.length, h = s[u] = new Array(d), p = 0; p < d; ++p)
                (l = c[p] || f[p]) && (h[p] = l); for (; u < i; ++u)
            s[u] = e[u]; return new r.a(s, this._parents); };
    }, function (t, e, n) {
        "use strict";
        e.a = function () { for (var t = this._groups, e = -1, n = t.length; ++e < n;)
            for (var r, i = t[e], a = i.length - 1, o = i[a]; --a >= 0;)
                (r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r); return this; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN; }
        var i = n(25);
        e.a = function (t) { function e(e, n) { return e && n ? t(e.__data__, n.__data__) : !e - !n; } t || (t = r); for (var n = this._groups, a = n.length, o = new Array(a), s = 0; s < a; ++s) {
            for (var u, l = n[s], c = l.length, f = o[s] = new Array(c), d = 0; d < c; ++d)
                (u = l[d]) && (f[d] = u);
            f.sort(e);
        } return new i.a(o, this._parents).order(); };
    }, function (t, e, n) {
        "use strict";
        e.a = function () { var t = arguments[0]; return arguments[0] = this, t.apply(null, arguments), this; };
    }, function (t, e, n) {
        "use strict";
        e.a = function () { var t = new Array(this.size()), e = -1; return this.each(function () { t[++e] = this; }), t; };
    }, function (t, e, n) {
        "use strict";
        e.a = function () { for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
            for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
                var o = r[i];
                if (o)
                    return o;
            } return null; };
    }, function (t, e, n) {
        "use strict";
        e.a = function () { var t = 0; return this.each(function () { ++t; }), t; };
    }, function (t, e, n) {
        "use strict";
        e.a = function () { return !this.node(); };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
            for (var i, a = e[n], o = 0, s = a.length; o < s; ++o)
                (i = a[o]) && t.call(i, i.__data__, o, a); return this; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function () { this.removeAttribute(t); }; }
        function i(t) { return function () { this.removeAttributeNS(t.space, t.local); }; }
        function a(t, e) { return function () { this.setAttribute(t, e); }; }
        function o(t, e) { return function () { this.setAttributeNS(t.space, t.local, e); }; }
        function s(t, e) { return function () { var n = e.apply(this, arguments); null == n ? this.removeAttribute(t) : this.setAttribute(t, n); }; }
        function u(t, e) { return function () { var n = e.apply(this, arguments); null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n); }; }
        var l = n(127);
        e.a = function (t, e) { var n = Object(l.a)(t); if (arguments.length < 2) {
            var c = this.node();
            return n.local ? c.getAttributeNS(n.space, n.local) : c.getAttribute(n);
        } return this.each((null == e ? n.local ? i : r : "function" == typeof e ? n.local ? u : s : n.local ? o : a)(n, e)); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function () { delete this[t]; }; }
        function i(t, e) { return function () { this[t] = e; }; }
        function a(t, e) { return function () { var n = e.apply(this, arguments); null == n ? delete this[t] : this[t] = n; }; }
        e.a = function (t, e) { return arguments.length > 1 ? this.each((null == e ? r : "function" == typeof e ? a : i)(t, e)) : this.node()[t]; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t.trim().split(/^|\s+/); }
        function i(t) { return t.classList || new a(t); }
        function a(t) { this._node = t, this._names = r(t.getAttribute("class") || ""); }
        function o(t, e) { for (var n = i(t), r = -1, a = e.length; ++r < a;)
            n.add(e[r]); }
        function s(t, e) { for (var n = i(t), r = -1, a = e.length; ++r < a;)
            n.remove(e[r]); }
        function u(t) { return function () { o(this, t); }; }
        function l(t) { return function () { s(this, t); }; }
        function c(t, e) { return function () { (e.apply(this, arguments) ? o : s)(this, t); }; }
        a.prototype = { add: function (t) { this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" "))); }, remove: function (t) { var e = this._names.indexOf(t); e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" "))); }, contains: function (t) { return this._names.indexOf(t) >= 0; } }, e.a = function (t, e) { var n = r(t + ""); if (arguments.length < 2) {
            for (var a = i(this.node()), o = -1, s = n.length; ++o < s;)
                if (!a.contains(n[o]))
                    return !1;
            return !0;
        } return this.each(("function" == typeof e ? c : e ? u : l)(n, e)); };
    }, function (t, e, n) {
        "use strict";
        function r() { this.textContent = ""; }
        function i(t) { return function () { this.textContent = t; }; }
        function a(t) { return function () { var e = t.apply(this, arguments); this.textContent = null == e ? "" : e; }; }
        e.a = function (t) { return arguments.length ? this.each(null == t ? r : ("function" == typeof t ? a : i)(t)) : this.node().textContent; };
    }, function (t, e, n) {
        "use strict";
        function r() { this.innerHTML = ""; }
        function i(t) { return function () { this.innerHTML = t; }; }
        function a(t) { return function () { var e = t.apply(this, arguments); this.innerHTML = null == e ? "" : e; }; }
        e.a = function (t) { return arguments.length ? this.each(null == t ? r : ("function" == typeof t ? a : i)(t)) : this.node().innerHTML; };
    }, function (t, e, n) {
        "use strict";
        function r() { this.nextSibling && this.parentNode.appendChild(this); }
        e.a = function () { return this.each(r); };
    }, function (t, e, n) {
        "use strict";
        function r() { this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild); }
        e.a = function () { return this.each(r); };
    }, function (t, e, n) {
        "use strict";
        var r = n(126);
        e.a = function (t) { var e = "function" == typeof t ? t : Object(r.a)(t); return this.select(function () { return this.appendChild(e.apply(this, arguments)); }); };
    }, function (t, e, n) {
        "use strict";
        function r() { return null; }
        var i = n(126), a = n(131);
        e.a = function (t, e) { var n = "function" == typeof t ? t : Object(i.a)(t), o = null == e ? r : "function" == typeof e ? e : Object(a.a)(e); return this.select(function () { return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null); }); };
    }, function (t, e, n) {
        "use strict";
        function r() { var t = this.parentNode; t && t.removeChild(this); }
        e.a = function () { return this.each(r); };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return arguments.length ? this.property("__data__", t) : this.node().__data__; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n) { var r = Object(o.a)(t), i = r.CustomEvent; "function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i); }
        function i(t, e) { return function () { return r(this, t, e); }; }
        function a(t, e) { return function () { return r(this, t, e.apply(this, arguments)); }; }
        var o = n(132);
        e.a = function (t, e) { return this.each(("function" == typeof e ? a : i)(t, e)); };
    }, function (t, e, n) {
        "use strict";
        var r = n(25);
        e.a = function (t) { return "string" == typeof t ? new r.a([document.querySelectorAll(t)], [document.documentElement]) : new r.a([null == t ? [] : t], r.c); };
    }, function (t, e, n) {
        "use strict";
        var r = n(129), i = n(87);
        e.a = function (t, e, n) { arguments.length < 3 && (n = e, e = Object(r.a)().changedTouches); for (var a, o = 0, s = e ? e.length : 0; o < s; ++o)
            if ((a = e[o]).identifier === n)
                return Object(i.a)(t, a); return null; };
    }, function (t, e, n) {
        "use strict";
        var r = n(129), i = n(87);
        e.a = function (t, e) { null == e && (e = Object(r.a)().touches); for (var n = 0, a = e ? e.length : 0, o = new Array(a); n < a; ++n)
            o[n] = Object(i.a)(t, e[n]); return o; };
    }, function (t, e, n) { var r = n(7); t.exports = (r.default || r).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a, o = null != e ? e : t.nullContext || {}, s = n.helperMissing, u = t.escapeExpression; return '<svg class="chart__svg">\n    <g class="chart__plot" transform="translate(' + u((a = null != (a = n.PAD_LEFT || (null != e ? e.PAD_LEFT : e)) ? a : s, "function" == typeof a ? a.call(o, { name: "PAD_LEFT", hash: {}, data: i }) : a)) + ", " + u((a = null != (a = n.PAD_TOP || (null != e ? e.PAD_TOP : e)) ? a : s, "function" == typeof a ? a.call(o, { name: "PAD_TOP", hash: {}, data: i }) : a)) + ')"></g>\n    <g class="chart__axis chart__axis_x"></g>\n    <g class="chart__axis chart__axis_y"></g>\n</svg>'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r() { function t() { var t = a().length, r = l[1] < l[0], i = l[r - 0], s = l[1 - r]; e = (s - i) / Math.max(1, t - f + 2 * d), c && (e = Math.floor(e)), i += (s - i - e * (t - f)) * h, n = e * (1 - f), c && (i = Math.round(i), n = Math.round(n)); var p = Object(o.range)(t).map(function (t) { return i + e * t; }); return u(r ? p.reverse() : p); } var e, n, i = Object(s.a)().unknown(void 0), a = i.domain, u = i.range, l = [0, 1], c = !1, f = 0, d = 0, h = .5; return delete i.unknown, i.domain = function (e) { return arguments.length ? (a(e), t()) : a(); }, i.range = function (e) { return arguments.length ? (l = [+e[0], +e[1]], t()) : l.slice(); }, i.rangeRound = function (e) { return l = [+e[0], +e[1]], c = !0, t(); }, i.bandwidth = function () { return n; }, i.step = function () { return e; }, i.round = function (e) { return arguments.length ? (c = !!e, t()) : c; }, i.padding = function (e) { return arguments.length ? (f = d = Math.max(0, Math.min(1, e)), t()) : f; }, i.paddingInner = function (e) { return arguments.length ? (f = Math.max(0, Math.min(1, e)), t()) : f; }, i.paddingOuter = function (e) { return arguments.length ? (d = Math.max(0, Math.min(1, e)), t()) : d; }, i.align = function (e) { return arguments.length ? (h = Math.max(0, Math.min(1, e)), t()) : h; }, i.copy = function () { return r().domain(a()).range(l).round(c).paddingInner(f).paddingOuter(d).align(h); }, t(); }
        function i(t) { var e = t.copy; return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () { return i(e()); }, t; }
        function a() { return i(r().paddingInner(1)); }
        e.a = r, e.b = a;
        var o = n(22), s = n(213);
    }, function (t, e, n) {
        "use strict";
        var r = n(203);
        e.a = function (t, e, n) { var i, a, o, s, u = t.length, l = e.length, c = new Array(u * l); for (null == n && (n = r.b), i = o = 0; i < u; ++i)
            for (s = t[i], a = 0; a < l; ++a, ++o)
                c[o] = n(s, e[a]); return c; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN; };
    }, function (t, e, n) {
        "use strict";
        var r = n(207), i = n(201), a = n(505), o = n(206), s = n(506), u = n(208), l = n(209), c = n(210);
        e.a = function () { function t(t) { var r, a, o = t.length, s = new Array(o); for (r = 0; r < o; ++r)
            s[r] = e(t[r], r, t); var c = n(s), d = c[0], h = c[1], p = f(s, d, h); Array.isArray(p) || (p = Object(l.c)(d, h, p), p = Object(u.a)(Math.ceil(d / p) * p, Math.floor(h / p) * p, p)); for (var v = p.length; p[0] <= d;)
            p.shift(), --v; for (; p[v - 1] > h;)
            p.pop(), --v; var g, m = new Array(v + 1); for (r = 0; r <= v; ++r)
            g = m[r] = [], g.x0 = r > 0 ? p[r - 1] : d, g.x1 = r < v ? p[r] : h; for (r = 0; r < o; ++r)
            a = s[r], d <= a && a <= h && m[Object(i.c)(p, a, 0, v)].push(t[r]); return m; } var e = s.a, n = o.a, f = c.a; return t.value = function (n) { return arguments.length ? (e = "function" == typeof n ? n : Object(a.a)(n), t) : e; }, t.domain = function (e) { return arguments.length ? (n = "function" == typeof e ? e : Object(a.a)([e[0], e[1]]), t) : n; }, t.thresholds = function (e) { return arguments.length ? (f = "function" == typeof e ? e : Array.isArray(e) ? Object(a.a)(r.b.call(e)) : Object(a.a)(e), t) : f; }, t; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return function () { return t; }; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return t; };
    }, function (t, e, n) {
        "use strict";
        var r = n(207), i = n(54), a = n(66), o = n(133);
        e.a = function (t, e, n) { return t = r.a.call(t, a.a).sort(i.a), Math.ceil((n - e) / (2 * (Object(o.a)(t, .75) - Object(o.a)(t, .25)) * Math.pow(t.length, -1 / 3))); };
    }, function (t, e, n) {
        "use strict";
        var r = n(204);
        e.a = function (t, e, n) { return Math.ceil((n - e) / (3.5 * Object(r.a)(t) * Math.pow(t.length, -1 / 3))); };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { var n, r, i = t.length, a = -1; if (null == e) {
            for (; ++a < i;)
                if (null != (n = t[a]) && n >= n)
                    for (r = n; ++a < i;)
                        null != (n = t[a]) && n > r && (r = n);
        }
        else
            for (; ++a < i;)
                if (null != (n = e(t[a], a, t)) && n >= n)
                    for (r = n; ++a < i;)
                        null != (n = e(t[a], a, t)) && n > r && (r = n); return r; };
    }, function (t, e, n) {
        "use strict";
        var r = n(66);
        e.a = function (t, e) { var n, i = t.length, a = i, o = -1, s = 0; if (null == e)
            for (; ++o < i;)
                isNaN(n = Object(r.a)(t[o])) ? --a : s += n;
        else
            for (; ++o < i;)
                isNaN(n = Object(r.a)(e(t[o], o, t))) ? --a : s += n; if (a)
            return s / a; };
    }, function (t, e, n) {
        "use strict";
        var r = n(54), i = n(66), a = n(133);
        e.a = function (t, e) { var n, o = t.length, s = -1, u = []; if (null == e)
            for (; ++s < o;)
                isNaN(n = Object(i.a)(t[s])) || u.push(n);
        else
            for (; ++s < o;)
                isNaN(n = Object(i.a)(e(t[s], s, t))) || u.push(n); return Object(a.a)(u.sort(r.a), .5); };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { for (var e, n, r, i = t.length, a = -1, o = 0; ++a < i;)
            o += t[a].length; for (n = new Array(o); --i >= 0;)
            for (r = t[i], e = r.length; --e >= 0;)
                n[--o] = r[e]; return n; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { for (var n = e.length, r = new Array(n); n--;)
            r[n] = t[e[n]]; return r; };
    }, function (t, e, n) {
        "use strict";
        var r = n(54);
        e.a = function (t, e) { if (n = t.length) {
            var n, i, a = 0, o = 0, s = t[o];
            for (null == e && (e = r.a); ++a < n;)
                (e(i = t[a], s) < 0 || 0 !== e(s, s)) && (s = i, o = a);
            return 0 === e(s, s) ? o : void 0;
        } };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e, n) { for (var r, i, a = (null == n ? t.length : n) - (e = null == e ? 0 : +e); a;)
            i = Math.random() * a-- | 0, r = t[a + e], t[a + e] = t[i + e], t[i + e] = r; return t; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { var n, r = t.length, i = -1, a = 0; if (null == e)
            for (; ++i < r;)
                (n = +t[i]) && (a += n);
        else
            for (; ++i < r;)
                (n = +e(t[i], i, t)) && (a += n); return a; };
    }, function (t, e, n) {
        "use strict";
        var r = n(212);
        e.a = function () { return Object(r.a)(arguments); };
    }, function (t, e, n) {
        "use strict";
        var r = (n(519), n(520), n(134));
        n.d(e, "a", function () { return r.a; });
        n(521), n(522), n(523);
    }, function (t, e, n) {
        "use strict";
        n(134);
    }, function (t, e, n) {
        "use strict";
        function r() { }
        function i(t, e) { var n = new r; if (t instanceof r)
            t.each(function (t) { n.add(t); });
        else if (t) {
            var i = -1, a = t.length;
            if (null == e)
                for (; ++i < a;)
                    n.add(t[i]);
            else
                for (; ++i < a;)
                    n.add(e(t[i], i, t));
        } return n; }
        var a = n(134), o = a.a.prototype;
        r.prototype = i.prototype = { constructor: r, has: o.has, add: function (t) { return t += "", this[a.b + t] = t, this; }, remove: o.remove, clear: o.clear, values: o.keys, size: o.size, empty: o.empty, each: o.each };
    }, function (t, e, n) {
        "use strict";
    }, function (t, e, n) {
        "use strict";
    }, function (t, e, n) {
        "use strict";
    }, function (t, e, n) {
        "use strict";
        function r() { function t(t) { return +t; } var e = [0, 1]; return t.invert = t, t.domain = t.range = function (n) { return arguments.length ? (e = i.a.call(n, o.a), t) : e.slice(); }, t.copy = function () { return r().domain(e); }, Object(a.b)(t); }
        e.a = r;
        var i = n(48), a = n(67), o = n(222);
    }, function (t, e, n) {
        "use strict";
        function r(t) { if (t instanceof a)
            return new a(t.l, t.a, t.b, t.opacity); if (t instanceof d) {
            var e = t.h * v.a;
            return new a(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
        } t instanceof p.b || (t = Object(p.h)(t)); var n = l(t.r), r = l(t.g), i = l(t.b), s = o((.4124564 * n + .3575761 * r + .1804375 * i) / g), u = o((.2126729 * n + .7151522 * r + .072175 * i) / m); return new a(116 * u - 16, 500 * (s - u), 200 * (u - o((.0193339 * n + .119192 * r + .9503041 * i) / b)), t.opacity); }
        function i(t, e, n, i) { return 1 === arguments.length ? r(t) : new a(t, e, n, null == i ? 1 : i); }
        function a(t, e, n, r) { this.l = +t, this.a = +e, this.b = +n, this.opacity = +r; }
        function o(t) { return t > x ? Math.pow(t, 1 / 3) : t / w + y; }
        function s(t) { return t > _ ? t * t * t : w * (t - y); }
        function u(t) { return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055); }
        function l(t) { return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4); }
        function c(t) { if (t instanceof d)
            return new d(t.h, t.c, t.l, t.opacity); t instanceof a || (t = r(t)); var e = Math.atan2(t.b, t.a) * v.b; return new d(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity); }
        function f(t, e, n, r) { return 1 === arguments.length ? c(t) : new d(t, e, n, null == r ? 1 : r); }
        function d(t, e, n, r) { this.h = +t, this.c = +e, this.l = +n, this.opacity = +r; }
        e.a = i, e.b = f;
        var h = n(137), p = n(136), v = n(214), g = .95047, m = 1, b = 1.08883, y = 4 / 29, _ = 6 / 29, w = 3 * _ * _, x = _ * _ * _;
        Object(h.a)(a, i, Object(h.b)(p.a, { brighter: function (t) { return new a(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity); }, darker: function (t) { return new a(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity); }, rgb: function () { var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, n = isNaN(this.b) ? t : t - this.b / 200; return t = m * s(t), e = g * s(e), n = b * s(n), new p.b(u(3.2404542 * e - 1.5371385 * t - .4985314 * n), u(-.969266 * e + 1.8760108 * t + .041556 * n), u(.0556434 * e - .2040259 * t + 1.0572252 * n), this.opacity); } })), Object(h.a)(d, f, Object(h.b)(p.a, { brighter: function (t) { return new d(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity); }, darker: function (t) { return new d(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity); }, rgb: function () { return r(this).rgb(); } }));
    }, function (t, e, n) {
        "use strict";
        function r(t) { if (t instanceof a)
            return new a(t.h, t.s, t.l, t.opacity); t instanceof s.b || (t = Object(s.h)(t)); var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = (g * r + p * e - v * n) / (g + p - v), o = r - i, l = (h * (n - i) - f * o) / d, c = Math.sqrt(l * l + o * o) / (h * i * (1 - i)), m = c ? Math.atan2(l, o) * u.b - 120 : NaN; return new a(m < 0 ? m + 360 : m, c, i, t.opacity); }
        function i(t, e, n, i) { return 1 === arguments.length ? r(t) : new a(t, e, n, null == i ? 1 : i); }
        function a(t, e, n, r) { this.h = +t, this.s = +e, this.l = +n, this.opacity = +r; }
        e.a = i;
        var o = n(137), s = n(136), u = n(214), l = -.14861, c = 1.78277, f = -.29227, d = -.90649, h = 1.97294, p = h * d, v = h * c, g = c * f - d * l;
        Object(o.a)(a, i, Object(o.b)(s.a, { brighter: function (t) { return t = null == t ? s.c : Math.pow(s.c, t), new a(this.h, this.s, this.l * t, this.opacity); }, darker: function (t) { return t = null == t ? s.d : Math.pow(s.d, t), new a(this.h, this.s, this.l * t, this.opacity); }, rgb: function () { var t = isNaN(this.h) ? 0 : (this.h + 120) * u.a, e = +this.l, n = isNaN(this.s) ? 0 : this.s * e * (1 - e), r = Math.cos(t), i = Math.sin(t); return new s.b(255 * (e + n * (l * r + c * i)), 255 * (e + n * (f * r + d * i)), 255 * (e + n * (h * r)), this.opacity); } }));
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { return t = +t, e -= t, function (n) { return Math.round(t + e * n); }; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n, r) { function a(t) { return t.length ? t.pop() + " " : ""; } function o(t, r, a, o, s, u) { if (t !== a || r !== o) {
            var l = s.push("translate(", null, e, null, n);
            u.push({ i: l - 4, x: Object(i.a)(t, a) }, { i: l - 2, x: Object(i.a)(r, o) });
        }
        else
            (a || o) && s.push("translate(" + a + e + o + n); } function s(t, e, n, o) { t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), o.push({ i: n.push(a(n) + "rotate(", null, r) - 2, x: Object(i.a)(t, e) })) : e && n.push(a(n) + "rotate(" + e + r); } function u(t, e, n, o) { t !== e ? o.push({ i: n.push(a(n) + "skewX(", null, r) - 2, x: Object(i.a)(t, e) }) : e && n.push(a(n) + "skewX(" + e + r); } function l(t, e, n, r, o, s) { if (t !== n || e !== r) {
            var u = o.push(a(o) + "scale(", null, ",", null, ")");
            s.push({ i: u - 4, x: Object(i.a)(t, n) }, { i: u - 2, x: Object(i.a)(e, r) });
        }
        else
            1 === n && 1 === r || o.push(a(o) + "scale(" + n + "," + r + ")"); } return function (e, n) { var r = [], i = []; return e = t(e), n = t(n), o(e.translateX, e.translateY, n.translateX, n.translateY, r, i), s(e.rotate, n.rotate, r, i), u(e.skewX, n.skewX, r, i), l(e.scaleX, e.scaleY, n.scaleX, n.scaleY, r, i), e = n = null, function (t) { for (var e, n = -1, a = i.length; ++n < a;)
            r[(e = i[n]).i] = e.x(t); return r.join(""); }; }; }
        n.d(e, "a", function () { return o; }), n.d(e, "b", function () { return s; });
        var i = n(88), a = n(529), o = r(a.a, "px, ", "px)", "deg)"), s = r(a.b, ", ", ")", ")");
    }, function (t, e, n) {
        "use strict";
        function r(t) { return "none" === t ? l.b : (a || (a = document.createElement("DIV"), o = document.documentElement, s = document.defaultView), a.style.transform = t, t = s.getComputedStyle(o.appendChild(a), null).getPropertyValue("transform"), o.removeChild(a), t = t.slice(7, -1).split(","), Object(l.a)(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5])); }
        function i(t) { return null == t ? l.b : (u || (u = document.createElementNS("http://www.w3.org/2000/svg", "g")), u.setAttribute("transform", t), (t = u.transform.baseVal.consolidate()) ? (t = t.matrix, Object(l.a)(t.a, t.b, t.c, t.d, t.e, t.f)) : l.b); }
        e.a = r, e.b = i;
        var a, o, s, u, l = n(530);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return i; });
        var r = 180 / Math.PI, i = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
        e.a = function (t, e, n, i, a, o) { var s, u, l; return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * i) && (n -= t * l, i -= e * l), (u = Math.sqrt(n * n + i * i)) && (n /= u, i /= u, l /= u), t * i < e * n && (t = -t, e = -e, l = -l, s = -s), { translateX: a, translateY: o, rotate: Math.atan2(e, t) * r, skewX: Math.atan(l) * r, scaleX: s, scaleY: u }; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return ((t = Math.exp(t)) + 1 / t) / 2; }
        function i(t) { return ((t = Math.exp(t)) - 1 / t) / 2; }
        function a(t) { return ((t = Math.exp(2 * t)) - 1) / (t + 1); }
        var o = Math.SQRT2;
        e.a = function (t, e) { var n, s, u = t[0], l = t[1], c = t[2], f = e[0], d = e[1], h = e[2], p = f - u, v = d - l, g = p * p + v * v; if (g < 1e-12)
            s = Math.log(h / c) / o, n = function (t) { return [u + t * p, l + t * v, c * Math.exp(o * t * s)]; };
        else {
            var m = Math.sqrt(g), b = (h * h - c * c + 4 * g) / (2 * c * 2 * m), y = (h * h - c * c - 4 * g) / (2 * h * 2 * m), _ = Math.log(Math.sqrt(b * b + 1) - b), w = Math.log(Math.sqrt(y * y + 1) - y);
            s = (w - _) / o, n = function (t) { var e = t * s, n = r(_), f = c / (2 * m) * (n * a(o * e + _) - i(_)); return [u + f * p, l + f * v, c * n / r(o * e + _)]; };
        } return n.duration = 1e3 * s, n; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function (e, n) { var r = t((e = Object(i.d)(e)).h, (n = Object(i.d)(n)).h), o = Object(a.a)(e.s, n.s), s = Object(a.a)(e.l, n.l), u = Object(a.a)(e.opacity, n.opacity); return function (t) { return e.h = r(t), e.s = o(t), e.l = s(t), e.opacity = u(t), e + ""; }; }; }
        n.d(e, "b", function () { return o; });
        var i = n(35), a = n(68);
        e.a = r(a.c);
        var o = r(a.a);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { var n = Object(a.a)((t = Object(i.e)(t)).l, (e = Object(i.e)(e)).l), r = Object(a.a)(t.a, e.a), o = Object(a.a)(t.b, e.b), s = Object(a.a)(t.opacity, e.opacity); return function (e) { return t.l = n(e), t.a = r(e), t.b = o(e), t.opacity = s(e), t + ""; }; }
        e.a = r;
        var i = n(35), a = n(68);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function (e, n) { var r = t((e = Object(i.c)(e)).h, (n = Object(i.c)(n)).h), o = Object(a.a)(e.c, n.c), s = Object(a.a)(e.l, n.l), u = Object(a.a)(e.opacity, n.opacity); return function (t) { return e.h = r(t), e.c = o(t), e.l = s(t), e.opacity = u(t), e + ""; }; }; }
        n.d(e, "b", function () { return o; });
        var i = n(35), a = n(68);
        e.a = r(a.c);
        var o = r(a.a);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function e(n) { function r(e, r) { var o = t((e = Object(i.b)(e)).h, (r = Object(i.b)(r)).h), s = Object(a.a)(e.s, r.s), u = Object(a.a)(e.l, r.l), l = Object(a.a)(e.opacity, r.opacity); return function (t) { return e.h = o(t), e.s = s(t), e.l = u(Math.pow(t, n)), e.opacity = l(t), e + ""; }; } return n = +n, r.gamma = e, r; }(1); }
        n.d(e, "a", function () { return o; });
        var i = n(35), a = n(68);
        e.b = r(a.c);
        var o = r(a.a);
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { for (var n = new Array(e), r = 0; r < e; ++r)
            n[r] = t(r / (e - 1)); return n; };
    }, function (t, e, n) {
        "use strict";
        var r = n(22), i = n(223);
        e.a = function (t, e, n) { var a, o = t[0], s = t[t.length - 1], u = Object(r.tickStep)(o, s, null == e ? 10 : e); switch (n = Object(i.c)(null == n ? ",f" : n), n.type) {
            case "s":
                var l = Math.max(Math.abs(o), Math.abs(s));
                return null != n.precision || isNaN(a = Object(i.e)(u, l)) || (n.precision = a), Object(i.b)(n, l);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != n.precision || isNaN(a = Object(i.f)(u, Math.max(Math.abs(o), Math.abs(s)))) || (n.precision = a - ("e" === n.type));
                break;
            case "f":
            case "%": null != n.precision || isNaN(a = Object(i.d)(u)) || (n.precision = a - 2 * ("%" === n.type));
        } return Object(i.a)(n); };
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return i; }), n.d(e, "b", function () { return a; });
        var r, i, a, o = n(224);
        !function (t) { r = Object(o.a)(t), i = r.format, a = r.formatPrefix; }({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { return function (n, r) { for (var i = n.length, a = [], o = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), a.push(n.substring(i -= s, i + s)), !((u += s + 1) > r));)
            s = t[o = (o + 1) % t.length]; return a.reverse().join(e); }; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return function (e) { return e.replace(/[0-9]/g, function (e) { return t[+e]; }); }; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { t = t.toPrecision(e); t: for (var n, r = t.length, i = 1, a = -1; i < r; ++i)
            switch (t[i]) {
                case ".":
                    a = n = i;
                    break;
                case "0":
                    0 === a && (a = i), n = i;
                    break;
                case "e": break t;
                default: a > 0 && (a = 0);
            } return a > 0 ? t.slice(0, a) + t.slice(n + 1) : t; };
    }, function (t, e, n) {
        "use strict";
        var r = n(140);
        e.a = function (t, e) { var n = Object(r.a)(t, e); if (!n)
            return t + ""; var i = n[0], a = n[1]; return a < 0 ? "0." + new Array(-a).join("0") + i : i.length > a + 1 ? i.slice(0, a + 1) + "." + i.slice(a + 1) : i + new Array(a - i.length + 2).join("0"); };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return t; };
    }, function (t, e, n) {
        "use strict";
        var r = n(90);
        e.a = function (t) { return Math.max(0, -Object(r.a)(Math.abs(t))); };
    }, function (t, e, n) {
        "use strict";
        var r = n(90);
        e.a = function (t, e) { return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Object(r.a)(e) / 3))) - Object(r.a)(Math.abs(t))); };
    }, function (t, e, n) {
        "use strict";
        var r = n(90);
        e.a = function (t, e) { return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Object(r.a)(e) - Object(r.a)(t)) + 1; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return (e = Math.log(e / t)) ? function (n) { return Math.log(n / t) / e; } : Object(d.a)(e); }
        function i(t, e) { return t < 0 ? function (n) { return -Math.pow(-e, n) * Math.pow(-t, 1 - n); } : function (n) { return Math.pow(e, n) * Math.pow(t, 1 - n); }; }
        function a(t) { return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t; }
        function o(t) { return 10 === t ? a : t === Math.E ? Math.exp : function (e) { return Math.pow(t, e); }; }
        function s(t) { return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (e) { return Math.log(e) / t; }); }
        function u(t) { return function (e) { return -t(-e); }; }
        function l() { function t() { return d = s(a), v = o(a), n()[0] < 0 && (d = u(d), v = u(v)), e; } var e = Object(p.b)(r, i).domain([1, 10]), n = e.domain, a = 10, d = s(10), v = o(10); return e.base = function (e) { return arguments.length ? (a = +e, t()) : a; }, e.domain = function (e) { return arguments.length ? (n(e), t()) : n(); }, e.ticks = function (t) { var e, r = n(), i = r[0], o = r[r.length - 1]; (e = o < i) && (f = i, i = o, o = f); var s, u, l, f = d(i), h = d(o), p = null == t ? 10 : +t, g = []; if (!(a % 1) && h - f < p) {
            if (f = Math.round(f) - 1, h = Math.round(h) + 1, i > 0) {
                for (; f < h; ++f)
                    for (u = 1, s = v(f); u < a; ++u)
                        if (!((l = s * u) < i)) {
                            if (l > o)
                                break;
                            g.push(l);
                        }
            }
            else
                for (; f < h; ++f)
                    for (u = a - 1, s = v(f); u >= 1; --u)
                        if (!((l = s * u) < i)) {
                            if (l > o)
                                break;
                            g.push(l);
                        }
        }
        else
            g = Object(c.ticks)(f, h, Math.min(h - f, p)).map(v); return e ? g.reverse() : g; }, e.tickFormat = function (t, n) { if (null == n && (n = 10 === a ? ".0e" : ","), "function" != typeof n && (n = Object(f.a)(n)), t === 1 / 0)
            return n; null == t && (t = 10); var r = Math.max(1, a * t / e.ticks().length); return function (t) { var e = t / v(Math.round(d(t))); return e * a < a - .5 && (e *= a), e <= r ? n(t) : ""; }; }, e.nice = function () { return n(Object(h.a)(n(), { floor: function (t) { return v(Math.floor(d(t))); }, ceil: function (t) { return v(Math.ceil(d(t))); } })); }, e.copy = function () { return Object(p.a)(e, l().base(a)); }, e; }
        e.a = l;
        var c = n(22), f = n(223), d = n(139), h = n(228), p = n(89);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e); }
        function i() { function t(t, e) { return (e = r(e, n) - (t = r(t, n))) ? function (i) { return (r(i, n) - t) / e; } : Object(o.a)(e); } function e(t, e) { return e = r(e, n) - (t = r(t, n)), function (i) { return r(t + e * i, 1 / n); }; } var n = 1, a = Object(u.b)(t, e), l = a.domain; return a.exponent = function (t) { return arguments.length ? (n = +t, l(l())) : n; }, a.copy = function () { return Object(u.a)(a, i().exponent(n)); }, Object(s.b)(a); }
        function a() { return i().exponent(.5); }
        e.a = i, e.b = a;
        var o = n(139), s = n(67), u = n(89);
    }, function (t, e, n) {
        "use strict";
        function r() { function t() { var t = 0, r = Math.max(1, o.length); for (s = new Array(r - 1); ++t < r;)
            s[t - 1] = Object(i.quantile)(n, t / r); return e; } function e(t) { if (!isNaN(t = +t))
            return o[Object(i.bisect)(s, t)]; } var n = [], o = [], s = []; return e.invertExtent = function (t) { var e = o.indexOf(t); return e < 0 ? [NaN, NaN] : [e > 0 ? s[e - 1] : n[0], e < s.length ? s[e] : n[n.length - 1]]; }, e.domain = function (e) { if (!arguments.length)
            return n.slice(); n = []; for (var r, a = 0, o = e.length; a < o; ++a)
            null == (r = e[a]) || isNaN(r = +r) || n.push(r); return n.sort(i.ascending), t(); }, e.range = function (e) { return arguments.length ? (o = a.b.call(e), t()) : o.slice(); }, e.quantiles = function () { return s.slice(); }, e.copy = function () { return r().domain(n).range(o); }, e; }
        e.a = r;
        var i = n(22), a = n(48);
    }, function (t, e, n) {
        "use strict";
        function r() { function t(t) { if (t <= t)
            return c[Object(i.bisect)(l, t, 0, u)]; } function e() { var e = -1; for (l = new Array(u); ++e < u;)
            l[e] = ((e + 1) * s - (e - u) * n) / (u + 1); return t; } var n = 0, s = 1, u = 1, l = [.5], c = [0, 1]; return t.domain = function (t) { return arguments.length ? (n = +t[0], s = +t[1], e()) : [n, s]; }, t.range = function (t) { return arguments.length ? (u = (c = a.b.call(t)).length - 1, e()) : c.slice(); }, t.invertExtent = function (t) { var e = c.indexOf(t); return e < 0 ? [NaN, NaN] : e < 1 ? [n, l[0]] : e >= u ? [l[u - 1], s] : [l[e - 1], l[e]]; }, t.copy = function () { return r().domain([n, s]).range(c); }, Object(o.b)(t); }
        e.a = r;
        var i = n(22), a = n(48), o = n(67);
    }, function (t, e, n) {
        "use strict";
        function r() { function t(t) { if (t <= t)
            return n[Object(i.bisect)(e, t, 0, o)]; } var e = [.5], n = [0, 1], o = 1; return t.domain = function (r) { return arguments.length ? (e = a.b.call(r), o = Math.min(e.length, n.length - 1), t) : e.slice(); }, t.range = function (r) { return arguments.length ? (n = a.b.call(r), o = Math.min(e.length, n.length - 1), t) : n.slice(); }, t.invertExtent = function (t) { var r = n.indexOf(t); return [e[r - 1], e[r]]; }, t.copy = function () { return r().domain(e).range(n); }, t; }
        e.a = r;
        var i = n(22), a = n(48);
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = Object(r.a)(function () { }, function (t, e) { t.setTime(+t + e); }, function (t, e) { return e - t; });
        i.every = function (t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Object(r.a)(function (e) { e.setTime(Math.floor(e / t) * t); }, function (e, n) { e.setTime(+e + n * t); }, function (e, n) { return (n - e) / t; }) : i : null; }, e.a = i;
        i.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = n(36), a = Object(r.a)(function (t) { t.setTime(Math.floor(t / i.d) * i.d); }, function (t, e) { t.setTime(+t + e * i.d); }, function (t, e) { return (e - t) / i.d; }, function (t) { return t.getUTCSeconds(); });
        e.a = a;
        a.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = n(36), a = Object(r.a)(function (t) { t.setTime(Math.floor(t / i.c) * i.c); }, function (t, e) { t.setTime(+t + e * i.c); }, function (t, e) { return (e - t) / i.c; }, function (t) { return t.getMinutes(); });
        e.a = a;
        a.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = n(36), a = Object(r.a)(function (t) { var e = t.getTimezoneOffset() * i.c % i.b; e < 0 && (e += i.b), t.setTime(Math.floor((+t - e) / i.b) * i.b + e); }, function (t, e) { t.setTime(+t + e * i.b); }, function (t, e) { return (e - t) / i.b; }, function (t) { return t.getHours(); });
        e.a = a;
        a.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = n(36), a = Object(r.a)(function (t) { t.setHours(0, 0, 0, 0); }, function (t, e) { t.setDate(t.getDate() + e); }, function (t, e) { return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * i.c) / i.a; }, function (t) { return t.getDate() - 1; });
        e.a = a;
        a.range;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return Object(i.a)(function (e) { e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0); }, function (t, e) { t.setDate(t.getDate() + 7 * e); }, function (t, e) { return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * a.c) / a.e; }); }
        n.d(e, "b", function () { return o; }), n.d(e, "a", function () { return s; }), n.d(e, "c", function () { return c; });
        var i = n(17), a = n(36), o = r(0), s = r(1), u = r(2), l = r(3), c = r(4), f = r(5), d = r(6);
        o.range, s.range, u.range, l.range, c.range, f.range, d.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = Object(r.a)(function (t) { t.setDate(1), t.setHours(0, 0, 0, 0); }, function (t, e) { t.setMonth(t.getMonth() + e); }, function (t, e) { return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear()); }, function (t) { return t.getMonth(); });
        e.a = i;
        i.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = Object(r.a)(function (t) { t.setMonth(0, 1), t.setHours(0, 0, 0, 0); }, function (t, e) { t.setFullYear(t.getFullYear() + e); }, function (t, e) { return e.getFullYear() - t.getFullYear(); }, function (t) { return t.getFullYear(); });
        i.every = function (t) { return isFinite(t = Math.floor(t)) && t > 0 ? Object(r.a)(function (e) { e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0); }, function (e, n) { e.setFullYear(e.getFullYear() + n * t); }) : null; }, e.a = i;
        i.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = n(36), a = Object(r.a)(function (t) { t.setUTCSeconds(0, 0); }, function (t, e) { t.setTime(+t + e * i.c); }, function (t, e) { return (e - t) / i.c; }, function (t) { return t.getUTCMinutes(); });
        e.a = a;
        a.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = n(36), a = Object(r.a)(function (t) { t.setUTCMinutes(0, 0, 0); }, function (t, e) { t.setTime(+t + e * i.b); }, function (t, e) { return (e - t) / i.b; }, function (t) { return t.getUTCHours(); });
        e.a = a;
        a.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = n(36), a = Object(r.a)(function (t) { t.setUTCHours(0, 0, 0, 0); }, function (t, e) { t.setUTCDate(t.getUTCDate() + e); }, function (t, e) { return (e - t) / i.a; }, function (t) { return t.getUTCDate() - 1; });
        e.a = a;
        a.range;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return Object(i.a)(function (e) { e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0); }, function (t, e) { t.setUTCDate(t.getUTCDate() + 7 * e); }, function (t, e) { return (e - t) / a.e; }); }
        n.d(e, "b", function () { return o; }), n.d(e, "a", function () { return s; }), n.d(e, "c", function () { return c; });
        var i = n(17), a = n(36), o = r(0), s = r(1), u = r(2), l = r(3), c = r(4), f = r(5), d = r(6);
        o.range, s.range, u.range, l.range, c.range, f.range, d.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = Object(r.a)(function (t) { t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0); }, function (t, e) { t.setUTCMonth(t.getUTCMonth() + e); }, function (t, e) { return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear()); }, function (t) { return t.getUTCMonth(); });
        e.a = i;
        i.range;
    }, function (t, e, n) {
        "use strict";
        var r = n(17), i = Object(r.a)(function (t) { t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0); }, function (t, e) { t.setUTCFullYear(t.getUTCFullYear() + e); }, function (t, e) { return e.getUTCFullYear() - t.getUTCFullYear(); }, function (t) { return t.getUTCFullYear(); });
        i.every = function (t) { return isFinite(t = Math.floor(t)) && t > 0 ? Object(r.a)(function (e) { e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0); }, function (e, n) { e.setUTCFullYear(e.getUTCFullYear() + n * t); }) : null; }, e.a = i;
        i.range;
    }, function (t, e, n) {
        "use strict";
        function r(t) { var e = new Date(t); return isNaN(e) ? null : e; }
        var i = n(232), a = n(142);
        +new Date("2000-01-01T00:00:00.000Z") || Object(a.c)(i.a);
    }, function (t, e, n) {
        "use strict";
        var r = n(229), i = n(230), a = n(141);
        e.a = function () { return Object(r.a)(a.v, a.q, a.u, a.l, a.m, a.o, a.r, a.n, i.b).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]); };
    }, function (t, e, n) {
        "use strict";
        var r = n(69);
        e.a = Object(r.a)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    }, function (t, e, n) {
        "use strict";
        var r = n(69);
        e.a = Object(r.a)("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");
    }, function (t, e, n) {
        "use strict";
        var r = n(69);
        e.a = Object(r.a)("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");
    }, function (t, e, n) {
        "use strict";
        var r = n(69);
        e.a = Object(r.a)("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");
    }, function (t, e, n) {
        "use strict";
        var r = n(35), i = n(23);
        e.a = Object(i.interpolateCubehelixLong)(Object(r.b)(300, .5, 0), Object(r.b)(-240, .5, 1));
    }, function (t, e, n) {
        "use strict";
        n.d(e, "c", function () { return a; }), n.d(e, "a", function () { return o; });
        var r = n(35), i = n(23), a = Object(i.interpolateCubehelixLong)(Object(r.b)(-100, .75, .35), Object(r.b)(80, 1.5, .8)), o = Object(i.interpolateCubehelixLong)(Object(r.b)(260, .75, .35), Object(r.b)(80, 1.5, .8)), s = Object(r.b)();
        e.b = function (t) { (t < 0 || t > 1) && (t -= Math.floor(t)); var e = Math.abs(t - .5); return s.h = 360 * t - 100, s.s = 1.5 - 1.5 * e, s.l = .8 - .9 * e, s + ""; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { var e = t.length; return function (n) { return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))]; }; }
        n.d(e, "c", function () { return a; }), n.d(e, "b", function () { return o; }), n.d(e, "d", function () { return s; });
        var i = n(69);
        e.a = r(Object(i.a)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
        var a = r(Object(i.a)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), o = r(Object(i.a)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), s = r(Object(i.a)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    }, function (t, e, n) {
        "use strict";
        function r(t) { function e(e) { var r = (e - n) / (a - n); return t(o ? Math.max(0, Math.min(1, r)) : r); } var n = 0, a = 1, o = !1; return e.domain = function (t) { return arguments.length ? (n = +t[0], a = +t[1], e) : [n, a]; }, e.clamp = function (t) { return arguments.length ? (o = !!t, e) : o; }, e.interpolator = function (n) { return arguments.length ? (t = n, e) : t; }, e.copy = function () { return r(t).domain([n, a]).clamp(o); }, Object(i.b)(e); }
        e.a = r;
        var i = n(67);
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(577);
        n.d(e, "brush", function () { return r.d; }), n.d(e, "brushX", function () { return r.b; }), n.d(e, "brushY", function () { return r.c; }), n.d(e, "brushSelection", function () { return r.a; });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return { type: t }; }
        function i() { return !v.event.button; }
        function a() { var t = this.ownerSVGElement || this; return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]; }
        function o(t) { for (; !t.__brush;)
            if (!(t = t.parentNode))
                return; return t.__brush; }
        function s(t) { return t[0][0] === t[1][0] || t[0][1] === t[1][1]; }
        function u(t) { var e = t.__brush; return e ? e.dim.output(e.selection) : null; }
        function l() { return f(O); }
        function c() { return f(C); }
        function f(t) { function e(e) { var i = e.property("__brush", f).selectAll(".overlay").data([r("overlay")]); i.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", j.overlay).merge(i).each(function () { var t = o(this).extent; Object(v.select)(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]); }), e.selectAll(".selection").data([r("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", j.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges"); var a = e.selectAll(".handle").data(t.handles, function (t) { return t.type; }); a.exit().remove(), a.enter().append("rect").attr("class", function (t) { return "handle handle--" + t.type; }).attr("cursor", function (t) { return j[t.type]; }), e.each(n).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", c); } function n() { var t = Object(v.select)(this), e = o(this).selection; e ? (t.selectAll(".selection").style("display", null).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) { return "e" === t.type[t.type.length - 1] ? e[1][0] - D / 2 : e[0][0] - D / 2; }).attr("y", function (t) { return "s" === t.type[0] ? e[1][1] - D / 2 : e[0][1] - D / 2; }).attr("width", function (t) { return "n" === t.type || "s" === t.type ? e[1][0] - e[0][0] + D : D; }).attr("height", function (t) { return "e" === t.type || "w" === t.type ? e[1][1] - e[0][1] + D : D; })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null); } function u(t, e) { return t.__brush.emitter || new l(t, e); } function l(t, e) { this.that = t, this.args = e, this.state = t.__brush, this.active = 0; } function c() { function e() { var t = Object(v.mouse)(I); !Z || B || z || (Math.abs(t[0] - tt[0]) > Math.abs(t[1] - tt[1]) ? z = !0 : B = !0), tt = t, V = !0, Object(y.a)(), r(); } function r() { var t; switch (D = tt[0] - Q[0], L = tt[1] - Q[1], F) {
            case w:
            case _:
                H && (D = Math.max(Y - c, Math.min(K - m, D)), f = c + D, b = m + D), q && (L = Math.max(X - d, Math.min(J - N, L)), p = d + L, P = N + L);
                break;
            case x:
                H < 0 ? (D = Math.max(Y - c, Math.min(K - c, D)), f = c + D, b = m) : H > 0 && (D = Math.max(Y - m, Math.min(K - m, D)), f = c, b = m + D), q < 0 ? (L = Math.max(X - d, Math.min(J - d, L)), p = d + L, P = N) : q > 0 && (L = Math.max(X - N, Math.min(J - N, L)), p = d, P = N + L);
                break;
            case k: H && (f = Math.max(Y, Math.min(K, c - D * H)), b = Math.max(Y, Math.min(K, m + D * H))), q && (p = Math.max(X, Math.min(J, d - L * q)), P = Math.max(X, Math.min(J, N + L * q)));
        } b < f && (H *= -1, t = c, c = m, m = t, t = f, f = b, b = t, U in E && rt.attr("cursor", j[U = E[U]])), P < p && (q *= -1, t = d, d = N, N = t, t = p, p = P, P = t, U in S && rt.attr("cursor", j[U = S[U]])), $.selection && (W = $.selection), B && (f = W[0][0], b = W[1][0]), z && (p = W[0][1], P = W[1][1]), W[0][0] === f && W[0][1] === p && W[1][0] === b && W[1][1] === P || ($.selection = [[f, p], [b, P]], n.call(I), et.brush()); } function i() { if (Object(y.b)(), v.event.touches) {
            if (v.event.touches.length)
                return;
            M && clearTimeout(M), M = setTimeout(function () { M = null; }, 500), nt.on("touchmove.brush touchend.brush touchcancel.brush", null);
        }
        else
            Object(h.dragEnable)(v.event.view, V), it.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null); nt.attr("pointer-events", "all"), rt.attr("cursor", j.overlay), $.selection && (W = $.selection), s(W) && ($.selection = null, n.call(I)), et.end(); } function a() { switch (v.event.keyCode) {
            case 16:
                Z = H && q;
                break;
            case 18:
                F === x && (H && (m = b - D * H, c = f + D * H), q && (N = P - L * q, d = p + L * q), F = k, r());
                break;
            case 32:
                F !== x && F !== k || (H < 0 ? m = b - D : H > 0 && (c = f - D), q < 0 ? N = P - L : q > 0 && (d = p - L), F = w, rt.attr("cursor", j.selection), r());
                break;
            default: return;
        } Object(y.a)(); } function l() { switch (v.event.keyCode) {
            case 16:
                Z && (B = z = Z = !1, r());
                break;
            case 18:
                F === k && (H < 0 ? m = b : H > 0 && (c = f), q < 0 ? N = P : q > 0 && (d = p), F = x, r());
                break;
            case 32:
                F === w && (v.event.altKey ? (H && (m = b - D * H, c = f + D * H), q && (N = P - L * q, d = p + L * q), F = k) : (H < 0 ? m = b : H > 0 && (c = f), q < 0 ? N = P : q > 0 && (d = p), F = x), rt.attr("cursor", j[U]), r());
                break;
            default: return;
        } Object(y.a)(); } if (v.event.touches) {
            if (v.event.changedTouches.length < v.event.touches.length)
                return Object(y.a)();
        }
        else if (M)
            return; if (R.apply(this, arguments)) {
            var c, f, d, p, m, b, N, P, D, L, V, B, z, I = this, U = v.event.target.__data__.type, F = "selection" === (v.event.metaKey ? U = "overlay" : U) ? _ : v.event.altKey ? k : x, H = t === C ? null : T[U], q = t === O ? null : A[U], $ = o(I), G = $.extent, W = $.selection, Y = G[0][0], X = G[0][1], K = G[1][0], J = G[1][1], Z = H && q && v.event.shiftKey, Q = Object(v.mouse)(I), tt = Q, et = u(I, arguments).beforestart();
            "overlay" === U ? $.selection = W = [[c = t === C ? Y : Q[0], d = t === O ? X : Q[1]], [m = t === C ? K : c, N = t === O ? J : d]] : (c = W[0][0], d = W[0][1], m = W[1][0], N = W[1][1]), f = c, p = d, b = m, P = N;
            var nt = Object(v.select)(I).attr("pointer-events", "none"), rt = nt.selectAll(".overlay").attr("cursor", j[U]);
            if (v.event.touches)
                nt.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", i, !0);
            else {
                var it = Object(v.select)(v.event.view).on("keydown.brush", a, !0).on("keyup.brush", l, !0).on("mousemove.brush", e, !0).on("mouseup.brush", i, !0);
                Object(h.dragDisable)(v.event.view);
            }
            Object(y.b)(), Object(g.a)(I), n.call(I), et.start();
        } } function f() { var e = this.__brush || { selection: null }; return e.extent = N.apply(this, arguments), e.dim = t, e; } var M, N = a, R = i, P = Object(d.a)(e, "start", "brush", "end"), D = 6; return e.move = function (e, r) { e.selection ? e.on("start.brush", function () { u(this, arguments).beforestart().start(); }).on("interrupt.brush end.brush", function () { u(this, arguments).end(); }).tween("brush", function () { function e(t) { a.selection = 1 === t && s(c) ? null : f(t), n.call(i), o.brush(); } var i = this, a = i.__brush, o = u(i, arguments), l = a.selection, c = t.input("function" == typeof r ? r.apply(this, arguments) : r, a.extent), f = Object(p.interpolate)(l, c); return l && c ? e : e(1); }) : e.each(function () { var e = this, i = arguments, a = e.__brush, o = t.input("function" == typeof r ? r.apply(e, i) : r, a.extent), l = u(e, i).beforestart(); Object(g.a)(e), a.selection = null == o || s(o) ? null : o, n.call(e), l.start().brush().end(); }); }, l.prototype = { beforestart: function () { return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this; }, start: function () { return this.starting && (this.starting = !1, this.emit("start")), this; }, brush: function () { return this.emit("brush"), this; }, end: function () { return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this; }, emit: function (n) { Object(v.customEvent)(new b.a(e, n, t.output(this.state.selection)), P.apply, P, [n, this.that, this.args]); } }, e.extent = function (t) { return arguments.length ? (N = "function" == typeof t ? t : Object(m.a)([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), e) : N; }, e.filter = function (t) { return arguments.length ? (R = "function" == typeof t ? t : Object(m.a)(!!t), e) : R; }, e.handleSize = function (t) { return arguments.length ? (D = +t, e) : D; }, e.on = function () { var t = P.on.apply(P, arguments); return t === P ? e : t; }, e; }
        e.a = u, e.b = l, e.c = c;
        var d = n(143), h = n(233), p = n(23), v = n(12), g = n(236), m = n(615), b = n(616), y = n(617), _ = { name: "drag" }, w = { name: "space" }, x = { name: "handle" }, k = { name: "center" }, O = { name: "x", handles: ["e", "w"].map(r), input: function (t, e) { return t && [[t[0], e[0][1]], [t[1], e[1][1]]]; }, output: function (t) { return t && [t[0][0], t[1][0]]; } }, C = { name: "y", handles: ["n", "s"].map(r), input: function (t, e) { return t && [[e[0][0], t[0]], [e[1][0], t[1]]]; }, output: function (t) { return t && [t[0][1], t[1][1]]; } }, M = { name: "xy", handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(r), input: function (t) { return t; }, output: function (t) { return t; } }, j = { overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" }, E = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" }, S = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" }, T = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 }, A = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 };
        e.d = function () { return f(M); };
    }, function (t, e, n) {
        "use strict";
        function r() { for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
            if (!(t = arguments[e] + "") || t in r)
                throw new Error("illegal type: " + t);
            r[t] = [];
        } return new i(r); }
        function i(t) { this._ = t; }
        function a(t, e) { return t.trim().split(/^|\s+/).map(function (t) { var n = "", r = t.indexOf("."); if (r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), t && !e.hasOwnProperty(t))
            throw new Error("unknown type: " + t); return { type: t, name: n }; }); }
        function o(t, e) { for (var n, r = 0, i = t.length; r < i; ++r)
            if ((n = t[r]).name === e)
                return n.value; }
        function s(t, e, n) { for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === e) {
                t[r] = u, t = t.slice(0, r).concat(t.slice(r + 1));
                break;
            } return null != n && t.push({ name: e, value: n }), t; }
        var u = { value: function () { } };
        i.prototype = r.prototype = { constructor: i, on: function (t, e) { var n, r = this._, i = a(t + "", r), u = -1, l = i.length; {
                if (!(arguments.length < 2)) {
                    if (null != e && "function" != typeof e)
                        throw new Error("invalid callback: " + e);
                    for (; ++u < l;)
                        if (n = (t = i[u]).type)
                            r[n] = s(r[n], t.name, e);
                        else if (null == e)
                            for (n in r)
                                r[n] = s(r[n], t.name, null);
                    return this;
                }
                for (; ++u < l;)
                    if ((n = (t = i[u]).type) && (n = o(r[n], t.name)))
                        return n;
            } }, copy: function () { var t = {}, e = this._; for (var n in e)
                t[n] = e[n].slice(); return new i(t); }, call: function (t, e) { if ((n = arguments.length - 2) > 0)
                for (var n, r, i = new Array(n), a = 0; a < n; ++a)
                    i[a] = arguments[a + 2]; if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t); for (r = this._[t], a = 0, n = r.length; a < n; ++a)
                r[a].value.apply(e, i); }, apply: function (t, e, n) { if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t); for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
                r[i].value.apply(e, n); } }, e.a = r;
    }, function (t, e, n) {
        "use strict";
        function r() { return !u.event.button; }
        function i() { return this.parentNode; }
        function a(t) { return null == t ? { x: u.event.x, y: u.event.y } : t; }
        function o() { return "ontouchstart" in this; }
        var s = n(143), u = n(12), l = n(234), c = n(235), f = n(580), d = n(581);
        e.a = function () { function t(t) { t.on("mousedown.drag", e).filter(C).on("touchstart.drag", p).on("touchmove.drag", v).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)"); } function e() { if (!w && x.apply(this, arguments)) {
            var t = m("mouse", k.apply(this, arguments), u.mouse, this, arguments);
            t && (Object(u.select)(u.event.view).on("mousemove.drag", n, !0).on("mouseup.drag", h, !0), Object(l.a)(u.event.view), Object(c.b)(), _ = !1, b = u.event.clientX, y = u.event.clientY, t("start"));
        } } function n() { if (Object(c.a)(), !_) {
            var t = u.event.clientX - b, e = u.event.clientY - y;
            _ = t * t + e * e > S;
        } M.mouse("drag"); } function h() { Object(u.select)(u.event.view).on("mousemove.drag mouseup.drag", null), Object(l.b)(u.event.view, _), Object(c.a)(), M.mouse("end"); } function p() { if (x.apply(this, arguments)) {
            var t, e, n = u.event.changedTouches, r = k.apply(this, arguments), i = n.length;
            for (t = 0; t < i; ++t)
                (e = m(n[t].identifier, r, u.touch, this, arguments)) && (Object(c.b)(), e("start"));
        } } function v() { var t, e, n = u.event.changedTouches, r = n.length; for (t = 0; t < r; ++t)
            (e = M[n[t].identifier]) && (Object(c.a)(), e("drag")); } function g() { var t, e, n = u.event.changedTouches, r = n.length; for (w && clearTimeout(w), w = setTimeout(function () { w = null; }, 500), t = 0; t < r; ++t)
            (e = M[n[t].identifier]) && (Object(c.b)(), e("end")); } function m(e, n, r, i, a) { var o, s, l, c = r(n, e), f = j.copy(); if (Object(u.customEvent)(new d.a(t, "beforestart", o, e, E, c[0], c[1], 0, 0, f), function () { return null != (u.event.subject = o = O.apply(i, a)) && (s = o.x - c[0] || 0, l = o.y - c[1] || 0, !0); }))
            return function h(p) { var v, g = c; switch (p) {
                case "start":
                    M[e] = h, v = E++;
                    break;
                case "end": delete M[e], --E;
                case "drag": c = r(n, e), v = E;
            } Object(u.customEvent)(new d.a(t, p, o, e, v, c[0] + s, c[1] + l, c[0] - g[0], c[1] - g[1], f), f.apply, f, [p, i, a]); }; } var b, y, _, w, x = r, k = i, O = a, C = o, M = {}, j = Object(s.a)("start", "drag", "end"), E = 0, S = 0; return t.filter = function (e) { return arguments.length ? (x = "function" == typeof e ? e : Object(f.a)(!!e), t) : x; }, t.container = function (e) { return arguments.length ? (k = "function" == typeof e ? e : Object(f.a)(e), t) : k; }, t.subject = function (e) { return arguments.length ? (O = "function" == typeof e ? e : Object(f.a)(e), t) : O; }, t.touchable = function (e) { return arguments.length ? (C = "function" == typeof e ? e : Object(f.a)(!!e), t) : C; }, t.on = function () { var e = j.on.apply(j, arguments); return e === j ? t : e; }, t.clickDistance = function (e) { return arguments.length ? (S = (e = +e) * e, t) : Math.sqrt(S); }, t; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return function () { return t; }; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n, r, i, a, o, s, u, l) { this.target = t, this.type = e, this.subject = n, this.identifier = r, this.active = i, this.x = a, this.y = o, this.dx = s, this.dy = u, this._ = l; }
        e.a = r, r.prototype.on = function () { var t = this._.on.apply(this._, arguments); return t === this._ ? this : t; };
    }, function (t, e, n) {
        "use strict";
        var r = n(12), i = n(583), a = n(586);
        r.selection.prototype.interrupt = i.a, r.selection.prototype.transition = a.a;
    }, function (t, e, n) {
        "use strict";
        var r = n(237);
        e.a = function (t) { return this.each(function () { Object(r.a)(this, t); }); };
    }, function (t, e, n) {
        "use strict";
        var r = n(144);
        e.a = function (t, e, n) { var i = new r.a; return e = null == e ? 0 : +e, i.restart(function (n) { i.stop(), t(n + e); }, e, n), i; };
    }, function (t, e, n) {
        "use strict";
        n(144);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { for (var n; !(n = t.__transition) || !(n = n[e]);)
            if (!(t = t.parentNode))
                return u.time = Object(s.a)(), u; return n; }
        var i = n(42), a = n(26), o = n(603), s = n(238), u = { time: null, delay: 0, duration: 250, ease: o.a };
        e.a = function (t) { var e, n; t instanceof i.a ? (e = t._id, t = t._name) : (e = Object(i.c)(), (n = u).time = Object(s.a)(), t = null == t ? null : t + ""); for (var o = this._groups, l = o.length, c = 0; c < l; ++c)
            for (var f, d = o[c], h = d.length, p = 0; p < h; ++p)
                (f = d[p]) && Object(a.e)(f, t, e, p, d, n || r(f, e)); return new i.a(o, this._parents, t, e); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function () { this.removeAttribute(t); }; }
        function i(t) { return function () { this.removeAttributeNS(t.space, t.local); }; }
        function a(t, e, n) { var r, i; return function () { var a = this.getAttribute(t); return a === n ? null : a === r ? i : i = e(r = a, n); }; }
        function o(t, e, n) { var r, i; return function () { var a = this.getAttributeNS(t.space, t.local); return a === n ? null : a === r ? i : i = e(r = a, n); }; }
        function s(t, e, n) { var r, i, a; return function () { var o, s = n(this); return null == s ? void this.removeAttribute(t) : (o = this.getAttribute(t), o === s ? null : o === r && s === i ? a : a = e(r = o, i = s)); }; }
        function u(t, e, n) { var r, i, a; return function () { var o, s = n(this); return null == s ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), o === s ? null : o === r && s === i ? a : a = e(r = o, i = s)); }; }
        var l = n(23), c = n(12), f = n(91), d = n(239);
        e.a = function (t, e) { var n = Object(c.namespace)(t), h = "transform" === n ? l.interpolateTransformSvg : d.a; return this.attrTween(t, "function" == typeof e ? (n.local ? u : s)(n, h, Object(f.b)(this, "attr." + t, e)) : null == e ? (n.local ? i : r)(n) : (n.local ? o : a)(n, h, e + "")); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { function n() { var n = this, r = e.apply(n, arguments); return r && function (e) { n.setAttributeNS(t.space, t.local, r(e)); }; } return n._value = e, n; }
        function i(t, e) { function n() { var n = this, r = e.apply(n, arguments); return r && function (e) { n.setAttribute(t, r(e)); }; } return n._value = e, n; }
        var a = n(12);
        e.a = function (t, e) { var n = "attr." + t; if (arguments.length < 2)
            return (n = this.tween(n)) && n._value; if (null == e)
            return this.tween(n, null); if ("function" != typeof e)
            throw new Error; var o = Object(a.namespace)(t); return this.tween(n, (o.local ? r : i)(o, e)); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return function () { Object(a.g)(this, t).delay = +e.apply(this, arguments); }; }
        function i(t, e) { return e = +e, function () { Object(a.g)(this, t).delay = e; }; }
        var a = n(26);
        e.a = function (t) { var e = this._id; return arguments.length ? this.each(("function" == typeof t ? r : i)(e, t)) : Object(a.f)(this.node(), e).delay; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return function () { Object(a.h)(this, t).duration = +e.apply(this, arguments); }; }
        function i(t, e) { return e = +e, function () { Object(a.h)(this, t).duration = e; }; }
        var a = n(26);
        e.a = function (t) { var e = this._id; return arguments.length ? this.each(("function" == typeof t ? r : i)(e, t)) : Object(a.f)(this.node(), e).duration; };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { if ("function" != typeof e)
            throw new Error; return function () { Object(i.h)(this, t).ease = e; }; }
        var i = n(26);
        e.a = function (t) { var e = this._id; return arguments.length ? this.each(r(e, t)) : Object(i.f)(this.node(), e).ease; };
    }, function (t, e, n) {
        "use strict";
        var r = n(12), i = n(42);
        e.a = function (t) { "function" != typeof t && (t = Object(r.matcher)(t)); for (var e = this._groups, n = e.length, a = new Array(n), o = 0; o < n; ++o)
            for (var s, u = e[o], l = u.length, c = a[o] = [], f = 0; f < l; ++f)
                (s = u[f]) && t.call(s, s.__data__, f, u) && c.push(s); return new i.a(a, this._parents, this._name, this._id); };
    }, function (t, e, n) {
        "use strict";
        var r = n(42);
        e.a = function (t) { if (t._id !== this._id)
            throw new Error; for (var e = this._groups, n = t._groups, i = e.length, a = n.length, o = Math.min(i, a), s = new Array(i), u = 0; u < o; ++u)
            for (var l, c = e[u], f = n[u], d = c.length, h = s[u] = new Array(d), p = 0; p < d; ++p)
                (l = c[p] || f[p]) && (h[p] = l); for (; u < i; ++u)
            s[u] = e[u]; return new r.a(s, this._parents, this._name, this._id); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return (t + "").trim().split(/^|\s+/).every(function (t) { var e = t.indexOf("."); return e >= 0 && (t = t.slice(0, e)), !t || "start" === t; }); }
        function i(t, e, n) { var i, o, s = r(e) ? a.g : a.h; return function () { var r = s(this, t), a = r.on; a !== i && (o = (i = a).copy()).on(e, n), r.on = o; }; }
        var a = n(26);
        e.a = function (t, e) { var n = this._id; return arguments.length < 2 ? Object(a.f)(this.node(), n).on.on(t) : this.each(i(n, t, e)); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function () { var e = this.parentNode; for (var n in this.__transition)
            if (+n !== t)
                return; e && e.removeChild(this); }; }
        e.a = function () { return this.on("end.remove", r(this._id)); };
    }, function (t, e, n) {
        "use strict";
        var r = n(12), i = n(42), a = n(26);
        e.a = function (t) { var e = this._name, n = this._id; "function" != typeof t && (t = Object(r.selector)(t)); for (var o = this._groups, s = o.length, u = new Array(s), l = 0; l < s; ++l)
            for (var c, f, d = o[l], h = d.length, p = u[l] = new Array(h), v = 0; v < h; ++v)
                (c = d[v]) && (f = t.call(c, c.__data__, v, d)) && ("__data__" in c && (f.__data__ = c.__data__), p[v] = f, Object(a.e)(p[v], e, n, v, p, Object(a.f)(c, n))); return new i.a(u, this._parents, e, n); };
    }, function (t, e, n) {
        "use strict";
        var r = n(12), i = n(42), a = n(26);
        e.a = function (t) { var e = this._name, n = this._id; "function" != typeof t && (t = Object(r.selectorAll)(t)); for (var o = this._groups, s = o.length, u = [], l = [], c = 0; c < s; ++c)
            for (var f, d = o[c], h = d.length, p = 0; p < h; ++p)
                if (f = d[p]) {
                    for (var v, g = t.call(f, f.__data__, p, d), m = Object(a.f)(f, n), b = 0, y = g.length; b < y; ++b)
                        (v = g[b]) && Object(a.e)(v, e, n, b, g, m);
                    u.push(g), l.push(f);
                } return new i.a(u, l, e, n); };
    }, function (t, e, n) {
        "use strict";
        var r = n(12), i = r.selection.prototype.constructor;
        e.a = function () { return new i(this._groups, this._parents); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { var n, r, i; return function () { var a = Object(u.style)(this, t), o = (this.style.removeProperty(t), Object(u.style)(this, t)); return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o); }; }
        function i(t) { return function () { this.style.removeProperty(t); }; }
        function a(t, e, n) { var r, i; return function () { var a = Object(u.style)(this, t); return a === n ? null : a === r ? i : i = e(r = a, n); }; }
        function o(t, e, n) { var r, i, a; return function () { var o = Object(u.style)(this, t), s = n(this); return null == s && (this.style.removeProperty(t), s = Object(u.style)(this, t)), o === s ? null : o === r && s === i ? a : a = e(r = o, i = s); }; }
        var s = n(23), u = n(12), l = n(91), c = n(239);
        e.a = function (t, e, n) { var u = "transform" == (t += "") ? s.interpolateTransformCss : c.a; return null == e ? this.styleTween(t, r(t, u)).on("end.style." + t, i(t)) : this.styleTween(t, "function" == typeof e ? o(t, u, Object(l.b)(this, "style." + t, e)) : a(t, u, e + ""), n); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n) { function r() { var r = this, i = e.apply(r, arguments); return i && function (e) { r.style.setProperty(t, i(e), n); }; } return r._value = e, r; }
        e.a = function (t, e, n) { var i = "style." + (t += ""); if (arguments.length < 2)
            return (i = this.tween(i)) && i._value; if (null == e)
            return this.tween(i, null); if ("function" != typeof e)
            throw new Error; return this.tween(i, r(t, e, null == n ? "" : n)); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return function () { this.textContent = t; }; }
        function i(t) { return function () { var e = t(this); this.textContent = null == e ? "" : e; }; }
        var a = n(91);
        e.a = function (t) { return this.tween("text", "function" == typeof t ? i(Object(a.b)(this, "text", t)) : r(null == t ? "" : t + "")); };
    }, function (t, e, n) {
        "use strict";
        var r = n(42), i = n(26);
        e.a = function () { for (var t = this._name, e = this._id, n = Object(r.c)(), a = this._groups, o = a.length, s = 0; s < o; ++s)
            for (var u, l = a[s], c = l.length, f = 0; f < c; ++f)
                if (u = l[f]) {
                    var d = Object(i.f)(u, e);
                    Object(i.e)(u, t, n, f, l, { time: d.time + d.delay + d.duration, delay: 0, duration: d.duration, ease: d.ease });
                } return new r.a(a, this._parents, t, n); };
    }, function (t, e, n) {
        "use strict";
        var r = (n(604), n(605), n(606));
        n.d(e, "a", function () { return r.a; });
        n(607), n(608), n(609), n(610), n(611), n(612), n(613);
    }, function (t, e, n) {
        "use strict";
    }, function (t, e, n) {
        "use strict";
    }, function (t, e, n) {
        "use strict";
        function r(t) { return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2; }
        e.a = r;
    }, function (t, e, n) {
        "use strict";
        (function t(e) { function n(t) { return Math.pow(t, e); } return e = +e, n.exponent = t, n; })(3), function t(e) { function n(t) { return 1 - Math.pow(1 - t, e); } return e = +e, n.exponent = t, n; }(3), function t(e) { function n(t) { return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2; } return e = +e, n.exponent = t, n; }(3);
    }, function (t, e, n) {
        "use strict";
        Math.PI;
    }, function (t, e, n) {
        "use strict";
    }, function (t, e, n) {
        "use strict";
    }, function (t, e, n) {
        "use strict";
    }, function (t, e, n) {
        "use strict";
        (function t(e) { function n(t) { return t * t * ((e + 1) * t - e); } return e = +e, n.overshoot = t, n; })(1.70158), function t(e) { function n(t) { return --t * t * ((e + 1) * t + e) + 1; } return e = +e, n.overshoot = t, n; }(1.70158), function t(e) { function n(t) { return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2; } return e = +e, n.overshoot = t, n; }(1.70158);
    }, function (t, e, n) {
        "use strict";
        var r = 2 * Math.PI;
        (function t(e, n) { function i(t) { return e * Math.pow(2, 10 * --t) * Math.sin((a - t) / n); } var a = Math.asin(1 / (e = Math.max(1, e))) * (n /= r); return i.amplitude = function (e) { return t(e, n * r); }, i.period = function (n) { return t(e, n); }, i; })(1, .3), function t(e, n) { function i(t) { return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + a) / n); } var a = Math.asin(1 / (e = Math.max(1, e))) * (n /= r); return i.amplitude = function (e) { return t(e, n * r); }, i.period = function (n) { return t(e, n); }, i; }(1, .3), function t(e, n) { function i(t) { return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((a - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((a + t) / n)) / 2; } var a = Math.asin(1 / (e = Math.max(1, e))) * (n /= r); return i.amplitude = function (e) { return t(e, n * r); }, i.period = function (n) { return t(e, n); }, i; }(1, .3);
    }, function (t, e, n) {
        "use strict";
        n(42), n(26);
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return function () { return t; }; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e, n) { this.target = t, this.type = e, this.selection = n; };
    }, function (t, e, n) {
        "use strict";
        function r() { i.event.stopImmediatePropagation(); }
        e.b = r;
        var i = n(12);
        e.a = function () { i.event.preventDefault(), i.event.stopImmediatePropagation(); };
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = n(12), i = n(236), a = n(619), o = n(620), s = n(621), u = n(622), l = n(623);
        r.selection.prototype.attrs = a.a, r.selection.prototype.styles = o.a, r.selection.prototype.properties = s.a, i.b.prototype.attrs = u.a, i.b.prototype.styles = l.a;
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return t.each(function () { var t = e.apply(this, arguments), n = Object(a.select)(this); for (var r in t)
            n.attr(r, t[r]); }); }
        function i(t, e) { for (var n in e)
            t.attr(n, e[n]); return t; }
        var a = n(12);
        e.a = function (t) { return ("function" == typeof t ? r : i)(this, t); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n) { return t.each(function () { var t = e.apply(this, arguments), r = Object(a.select)(this); for (var i in t)
            r.style(i, t[i], n); }); }
        function i(t, e, n) { for (var r in e)
            t.style(r, e[r], n); return t; }
        var a = n(12);
        e.a = function (t, e) { return ("function" == typeof t ? r : i)(this, t, null == e ? "" : e); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return t.each(function () { var t = e.apply(this, arguments), n = Object(a.select)(this); for (var r in t)
            n.property(r, t[r]); }); }
        function i(t, e) { for (var n in e)
            t.property(n, e[n]); return t; }
        var a = n(12);
        e.a = function (t) { return ("function" == typeof t ? r : i)(this, t); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return t.each(function () { var n = e.apply(this, arguments), r = Object(a.select)(this).transition(t); for (var i in n)
            r.attr(i, n[i]); }); }
        function i(t, e) { for (var n in e)
            t.attr(n, e[n]); return t; }
        var a = n(12);
        e.a = function (t) { return ("function" == typeof t ? r : i)(this, t); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e, n) { return t.each(function () { var r = e.apply(this, arguments), i = Object(a.select)(this).transition(t); for (var o in r)
            i.style(o, r[o], n); }); }
        function i(t, e, n) { for (var r in e)
            t.style(r, e[r], n); return t; }
        var a = n(12);
        e.a = function (t, e) { return ("function" == typeof t ? r : i)(this, t, null == e ? "" : e); };
    }, function (t, e, n) { var r = n(7); t.exports = (r.default || r).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a, o = null != e ? e : t.nullContext || {}, s = n.helperMissing, u = t.escapeExpression; return '<div class="timeline__body">\n    <div class=\'timeline__chart\'>\n        <svg class="timeline__chart_svg">\n            <g transform="translate(' + u((a = null != (a = n.PADDING || (null != e ? e.PADDING : e)) ? a : s, "function" == typeof a ? a.call(o, { name: "PADDING", hash: {}, data: i }) : a)) + ', 15)">\n                <g class="timeline__slider"/>\n                <g class="timeline__plot" transform="translate(0, ' + u((a = null != (a = n.PADDING || (null != e ? e.PADDING : e)) ? a : s, "function" == typeof a ? a.call(o, { name: "PADDING", hash: {}, data: i }) : a)) + ')">\n                    <g class="timeline__chart__axis timeline__chart__axis_x"/>\n                </g>\n            </g>\n        </svg>\n    </div>\n    <div class=\'timeline__brush\'>\n        <svg class="timeline__brush_svg">\n            <g class="timeline__brush__axis timeline__brush__axis_x"/>\n        </svg>\n    </div>\n</div>'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(626), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addWidget("graph", "status-chart", i.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i, a, o, s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v), m = n(627), b = r(m), y = n(9), _ = n(8), w = n(14), x = n(240), k = r(x), O = (i = (0, _.className)("status-widget"), a = (0, _.regions)({ chart: ".status-widget__content" }), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, c.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, p.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(o))), r.template = b.default, i = n, (0, p.default)(r, i); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "onRender", value: function () { this.showChildView("chart", new k.default({ model: this.getStatusChartData(), showLegend: !0 })); } }, { key: "getStatusChartData", value: function () { this.items = this.model.get("items"); var t = this.items.reduce(function (t, e) { return t[e.status.toLowerCase()]++, t; }, { total: this.items.length, failed: 0, broken: 0, skipped: 0, passed: 0, unknown: 0 }); return new w.Model({ statistic: t }); } }]), e; }(y.View)) || o) || o);
        e.default = O;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { return '<h2 class="widget__title">\n    ' + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "chart.status.name", { name: "t", hash: {}, data: o })) + '\n</h2>\n<div class="status-widget__content chart__body"></div>\n'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t.innerRadius; }
        function i(t) { return t.outerRadius; }
        function a(t) { return t.startAngle; }
        function o(t) { return t.endAngle; }
        function s(t) { return t && t.padAngle; }
        function u(t, e, n, r, i, a, o, s) { var u = n - t, l = r - e, c = o - i, f = s - a, d = (c * (e - a) - f * (t - i)) / (f * u - c * l); return [t + d * u, e + d * l]; }
        function l(t, e, n, r, i, a, o) { var s = t - n, u = e - r, l = (o ? a : -a) / Object(d.l)(s * s + u * u), c = l * u, f = -l * s, h = t + c, p = e + f, v = n + c, g = r + f, m = (h + v) / 2, b = (p + g) / 2, y = v - h, _ = g - p, w = y * y + _ * _, x = i - a, k = h * g - v * p, O = (_ < 0 ? -1 : 1) * Object(d.l)(Object(d.h)(0, x * x * w - k * k)), C = (k * _ - y * O) / w, M = (-k * y - _ * O) / w, j = (k * _ + y * O) / w, E = (-k * y + _ * O) / w, S = C - m, T = M - b, A = j - m, N = E - b; return S * S + T * T > A * A + N * N && (C = j, M = E), { cx: C, cy: M, x01: -c, y01: -f, x11: C * (i / x - 1), y11: M * (i / x - 1) }; }
        var c = n(70), f = n(49), d = n(71);
        e.a = function () { function t() { var t, r, i = +e.apply(this, arguments), a = +n.apply(this, arguments), o = v.apply(this, arguments) - d.g, s = g.apply(this, arguments) - d.g, f = Object(d.a)(s - o), y = s > o; if (b || (b = t = Object(c.a)()), a < i && (r = a, a = i, i = r), a > d.f)
            if (f > d.m - d.f)
                b.moveTo(a * Object(d.e)(o), a * Object(d.k)(o)), b.arc(0, 0, a, o, s, !y), i > d.f && (b.moveTo(i * Object(d.e)(s), i * Object(d.k)(s)), b.arc(0, 0, i, s, o, y));
            else {
                var _, w, x = o, k = s, O = o, C = s, M = f, j = f, E = m.apply(this, arguments) / 2, S = E > d.f && (p ? +p.apply(this, arguments) : Object(d.l)(i * i + a * a)), T = Object(d.i)(Object(d.a)(a - i) / 2, +h.apply(this, arguments)), A = T, N = T;
                if (S > d.f) {
                    var R = Object(d.c)(S / i * Object(d.k)(E)), P = Object(d.c)(S / a * Object(d.k)(E));
                    (M -= 2 * R) > d.f ? (R *= y ? 1 : -1, O += R, C -= R) : (M = 0, O = C = (o + s) / 2), (j -= 2 * P) > d.f ? (P *= y ? 1 : -1, x += P, k -= P) : (j = 0, x = k = (o + s) / 2);
                }
                var D = a * Object(d.e)(x), L = a * Object(d.k)(x), V = i * Object(d.e)(C), B = i * Object(d.k)(C);
                if (T > d.f) {
                    var z = a * Object(d.e)(k), I = a * Object(d.k)(k), U = i * Object(d.e)(O), F = i * Object(d.k)(O);
                    if (f < d.j) {
                        var H = M > d.f ? u(D, L, U, F, z, I, V, B) : [V, B], q = D - H[0], $ = L - H[1], G = z - H[0], W = I - H[1], Y = 1 / Object(d.k)(Object(d.b)((q * G + $ * W) / (Object(d.l)(q * q + $ * $) * Object(d.l)(G * G + W * W))) / 2), X = Object(d.l)(H[0] * H[0] + H[1] * H[1]);
                        A = Object(d.i)(T, (i - X) / (Y - 1)), N = Object(d.i)(T, (a - X) / (Y + 1));
                    }
                }
                j > d.f ? N > d.f ? (_ = l(U, F, D, L, a, N, y), w = l(z, I, V, B, a, N, y), b.moveTo(_.cx + _.x01, _.cy + _.y01), N < T ? b.arc(_.cx, _.cy, N, Object(d.d)(_.y01, _.x01), Object(d.d)(w.y01, w.x01), !y) : (b.arc(_.cx, _.cy, N, Object(d.d)(_.y01, _.x01), Object(d.d)(_.y11, _.x11), !y), b.arc(0, 0, a, Object(d.d)(_.cy + _.y11, _.cx + _.x11), Object(d.d)(w.cy + w.y11, w.cx + w.x11), !y), b.arc(w.cx, w.cy, N, Object(d.d)(w.y11, w.x11), Object(d.d)(w.y01, w.x01), !y))) : (b.moveTo(D, L), b.arc(0, 0, a, x, k, !y)) : b.moveTo(D, L), i > d.f && M > d.f ? A > d.f ? (_ = l(V, B, z, I, i, -A, y), w = l(D, L, U, F, i, -A, y), b.lineTo(_.cx + _.x01, _.cy + _.y01), A < T ? b.arc(_.cx, _.cy, A, Object(d.d)(_.y01, _.x01), Object(d.d)(w.y01, w.x01), !y) : (b.arc(_.cx, _.cy, A, Object(d.d)(_.y01, _.x01), Object(d.d)(_.y11, _.x11), !y), b.arc(0, 0, i, Object(d.d)(_.cy + _.y11, _.cx + _.x11), Object(d.d)(w.cy + w.y11, w.cx + w.x11), y), b.arc(w.cx, w.cy, A, Object(d.d)(w.y11, w.x11), Object(d.d)(w.y01, w.x01), !y))) : b.arc(0, 0, i, C, O, y) : b.lineTo(V, B);
            }
        else
            b.moveTo(0, 0); if (b.closePath(), t)
            return b = null, t + "" || null; } var e = r, n = i, h = Object(f.a)(0), p = null, v = a, g = o, m = s, b = null; return t.centroid = function () { var t = (+e.apply(this, arguments) + +n.apply(this, arguments)) / 2, r = (+v.apply(this, arguments) + +g.apply(this, arguments)) / 2 - d.j / 2; return [Object(d.e)(r) * t, Object(d.k)(r) * t]; }, t.innerRadius = function (n) { return arguments.length ? (e = "function" == typeof n ? n : Object(f.a)(+n), t) : e; }, t.outerRadius = function (e) { return arguments.length ? (n = "function" == typeof e ? e : Object(f.a)(+e), t) : n; }, t.cornerRadius = function (e) { return arguments.length ? (h = "function" == typeof e ? e : Object(f.a)(+e), t) : h; }, t.padRadius = function (e) { return arguments.length ? (p = null == e ? null : "function" == typeof e ? e : Object(f.a)(+e), t) : p; }, t.startAngle = function (e) { return arguments.length ? (v = "function" == typeof e ? e : Object(f.a)(+e), t) : v; }, t.endAngle = function (e) { return arguments.length ? (g = "function" == typeof e ? e : Object(f.a)(+e), t) : g; }, t.padAngle = function (e) { return arguments.length ? (m = "function" == typeof e ? e : Object(f.a)(+e), t) : m; }, t.context = function (e) { return arguments.length ? (b = null == e ? null : e, t) : b; }, t; };
    }, function (t, e, n) {
        "use strict";
        function r() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""; }
        function i() { return new r; }
        var a = Math.PI, o = 2 * a, s = o - 1e-6;
        r.prototype = i.prototype = { constructor: r, moveTo: function (t, e) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e); }, closePath: function () { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z"); }, lineTo: function (t, e) { this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e); }, quadraticCurveTo: function (t, e, n, r) { this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r); }, bezierCurveTo: function (t, e, n, r, i, a) { this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a); }, arcTo: function (t, e, n, r, i) { t = +t, e = +e, n = +n, r = +r, i = +i; var o = this._x1, s = this._y1, u = n - t, l = r - e, c = o - t, f = s - e, d = c * c + f * f; if (i < 0)
                throw new Error("negative radius: " + i); if (null === this._x1)
                this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
            else if (d > 1e-6)
                if (Math.abs(f * u - l * c) > 1e-6 && i) {
                    var h = n - o, p = r - s, v = u * u + l * l, g = h * h + p * p, m = Math.sqrt(v), b = Math.sqrt(d), y = i * Math.tan((a - Math.acos((v + d - g) / (2 * m * b))) / 2), _ = y / b, w = y / m;
                    Math.abs(_ - 1) > 1e-6 && (this._ += "L" + (t + _ * c) + "," + (e + _ * f)), this._ += "A" + i + "," + i + ",0,0," + +(f * h > c * p) + "," + (this._x1 = t + w * u) + "," + (this._y1 = e + w * l);
                }
                else
                    this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
            else
                ; }, arc: function (t, e, n, r, i, u) { t = +t, e = +e, n = +n; var l = n * Math.cos(r), c = n * Math.sin(r), f = t + l, d = e + c, h = 1 ^ u, p = u ? r - i : i - r; if (n < 0)
                throw new Error("negative radius: " + n); null === this._x1 ? this._ += "M" + f + "," + d : (Math.abs(this._x1 - f) > 1e-6 || Math.abs(this._y1 - d) > 1e-6) && (this._ += "L" + f + "," + d), n && (p < 0 && (p = p % o + o), p > s ? this._ += "A" + n + "," + n + ",0,1," + h + "," + (t - l) + "," + (e - c) + "A" + n + "," + n + ",0,1," + h + "," + (this._x1 = f) + "," + (this._y1 = d) : p > 1e-6 && (this._ += "A" + n + "," + n + ",0," + +(p >= a) + "," + h + "," + (this._x1 = t + n * Math.cos(i)) + "," + (this._y1 = e + n * Math.sin(i)))); }, rect: function (t, e, n, r) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z"; }, toString: function () { return this._; } }, e.a = i;
    }, function (t, e, n) {
        "use strict";
        var r = n(49), i = n(631), a = n(632), o = n(71);
        e.a = function () { function t(t) { var r, i, a, f, d, h = t.length, p = 0, v = new Array(h), g = new Array(h), m = +u.apply(this, arguments), b = Math.min(o.m, Math.max(-o.m, l.apply(this, arguments) - m)), y = Math.min(Math.abs(b) / h, c.apply(this, arguments)), _ = y * (b < 0 ? -1 : 1); for (r = 0; r < h; ++r)
            (d = g[v[r] = r] = +e(t[r], r, t)) > 0 && (p += d); for (null != n ? v.sort(function (t, e) { return n(g[t], g[e]); }) : null != s && v.sort(function (e, n) { return s(t[e], t[n]); }), r = 0, a = p ? (b - h * _) / p : 0; r < h; ++r, m = f)
            i = v[r], d = g[i], f = m + (d > 0 ? d * a : 0) + _, g[i] = { data: t[i], index: r, value: d, startAngle: m, endAngle: f, padAngle: y }; return g; } var e = a.a, n = i.a, s = null, u = Object(r.a)(0), l = Object(r.a)(o.m), c = Object(r.a)(0); return t.value = function (n) { return arguments.length ? (e = "function" == typeof n ? n : Object(r.a)(+n), t) : e; }, t.sortValues = function (e) { return arguments.length ? (n = e, s = null, t) : n; }, t.sort = function (e) { return arguments.length ? (s = e, n = null, t) : s; }, t.startAngle = function (e) { return arguments.length ? (u = "function" == typeof e ? e : Object(r.a)(+e), t) : u; }, t.endAngle = function (e) { return arguments.length ? (l = "function" == typeof e ? e : Object(r.a)(+e), t) : l; }, t.padAngle = function (e) { return arguments.length ? (c = "function" == typeof e ? e : Object(r.a)(+e), t) : c; }, t; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN; };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) { return t; };
    }, function (t, e, n) {
        "use strict";
        var r = n(243), i = n(242), a = n(244);
        e.a = function () { var t = Object(i.a)().curve(r.a), e = t.curve, n = t.lineX0, o = t.lineX1, s = t.lineY0, u = t.lineY1; return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () { return Object(a.b)(n()); }, delete t.lineX0, t.lineEndAngle = function () { return Object(a.b)(o()); }, delete t.lineX1, t.lineInnerRadius = function () { return Object(a.b)(s()); }, delete t.lineY0, t.lineOuterRadius = function () { return Object(a.b)(u()); }, delete t.lineY1, t.curve = function (t) { return arguments.length ? e(Object(r.b)(t)) : e()._curve; }, t; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t.source; }
        function i(t) { return t.target; }
        function a(t) { function e() { var e, r = h.a.call(arguments), i = n.apply(this, r), l = a.apply(this, r); if (u || (u = e = Object(d.a)()), t(u, +o.apply(this, (r[0] = i, r)), +s.apply(this, r), +o.apply(this, (r[0] = l, r)), +s.apply(this, r)), e)
            return u = null, e + "" || null; } var n = r, a = i, o = v.a, s = v.b, u = null; return e.source = function (t) { return arguments.length ? (n = t, e) : n; }, e.target = function (t) { return arguments.length ? (a = t, e) : a; }, e.x = function (t) { return arguments.length ? (o = "function" == typeof t ? t : Object(p.a)(+t), e) : o; }, e.y = function (t) { return arguments.length ? (s = "function" == typeof t ? t : Object(p.a)(+t), e) : s; }, e.context = function (t) { return arguments.length ? (u = null == t ? null : t, e) : u; }, e; }
        function o(t, e, n, r, i) { t.moveTo(e, n), t.bezierCurveTo(e = (e + r) / 2, n, e, i, r, i); }
        function s(t, e, n, r, i) { t.moveTo(e, n), t.bezierCurveTo(e, n = (n + i) / 2, r, n, r, i); }
        function u(t, e, n, r, i) { var a = Object(g.a)(e, n), o = Object(g.a)(e, n = (n + i) / 2), s = Object(g.a)(r, n), u = Object(g.a)(r, i); t.moveTo(a[0], a[1]), t.bezierCurveTo(o[0], o[1], s[0], s[1], u[0], u[1]); }
        function l() { return a(o); }
        function c() { return a(s); }
        function f() { var t = a(u); return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t; }
        e.a = l, e.c = c, e.b = f;
        var d = n(70), h = n(246), p = n(49), v = n(146), g = n(245);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return d; });
        var r = n(70), i = n(247), a = n(248), o = n(249), s = n(250), u = n(251), l = n(252), c = n(253), f = n(49), d = [i.a, a.a, o.a, u.a, s.a, l.a, c.a];
        e.a = function () { function t() { var t; if (a || (a = t = Object(r.a)()), e.apply(this, arguments).draw(a, +n.apply(this, arguments)), t)
            return a = null, t + "" || null; } var e = Object(f.a)(i.a), n = Object(f.a)(64), a = null; return t.type = function (n) { return arguments.length ? (e = "function" == typeof n ? n : Object(f.a)(n), t) : e; }, t.size = function (e) { return arguments.length ? (n = "function" == typeof e ? e : Object(f.a)(+e), t) : n; }, t.context = function (e) { return arguments.length ? (a = null == e ? null : e, t) : a; }, t; };
    }, function (t, e, n) {
        "use strict";
        function r(t) { this._context = t; }
        var i = n(94), a = n(95);
        r.prototype = { areaStart: i.a, areaEnd: i.a, lineStart: function () { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0; }, lineEnd: function () { switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                    break;
                case 3: this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
            } }, point: function (t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = e;
                    break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = e;
                    break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                    break;
                default: Object(a.c)(this, t, e);
            } this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e; } }, e.a = function (t) { return new r(t); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { this._context = t; }
        var i = n(95);
        r.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0; }, lineEnd: function () { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line; }, point: function (t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var n = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
                    this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
                    break;
                case 3: this._point = 4;
                default: Object(i.c)(this, t, e);
            } this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e; } }, e.a = function (t) { return new r(t); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { this._basis = new i.a(t), this._beta = e; }
        var i = n(95);
        r.prototype = { lineStart: function () { this._x = [], this._y = [], this._basis.lineStart(); }, lineEnd: function () { var t = this._x, e = this._y, n = t.length - 1; if (n > 0)
                for (var r, i = t[0], a = e[0], o = t[n] - i, s = e[n] - a, u = -1; ++u <= n;)
                    r = u / n, this._basis.point(this._beta * t[u] + (1 - this._beta) * (i + r * o), this._beta * e[u] + (1 - this._beta) * (a + r * s)); this._x = this._y = null, this._basis.lineEnd(); }, point: function (t, e) { this._x.push(+t), this._y.push(+e); } }, e.a = function t(e) { function n(t) { return 1 === e ? new i.a(t) : new r(t, e); } return n.beta = function (e) { return t(+e); }, n; }(.85);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { this._context = t, this._alpha = e; }
        var i = n(254), a = n(94), o = n(147);
        r.prototype = { areaStart: a.a, areaEnd: a.a, lineStart: function () { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0; }, lineEnd: function () { switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3: this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
            } }, point: function (t, e) { if (t = +t, e = +e, this._point) {
                var n = this._x2 - t, r = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
            } switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = e;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = e;
                    break;
                default: Object(o.b)(this, t, e);
            } this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e; } }, e.a = function t(e) { function n(t) { return e ? new r(t, e) : new i.a(t, 0); } return n.alpha = function (e) { return t(+e); }, n; }(.5);
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { this._context = t, this._alpha = e; }
        var i = n(255), a = n(147);
        r.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0; }, lineEnd: function () { (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line; }, point: function (t, e) { if (t = +t, e = +e, this._point) {
                var n = this._x2 - t, r = this._y2 - e;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
            } switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3: this._point = 4;
                default: Object(a.b)(this, t, e);
            } this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e; } }, e.a = function t(e) { function n(t) { return e ? new r(t, e) : new i.a(t, 0); } return n.alpha = function (e) { return t(+e); }, n; }(.5);
    }, function (t, e, n) {
        "use strict";
        function r(t) { this._context = t; }
        var i = n(94);
        r.prototype = { areaStart: i.a, areaEnd: i.a, lineStart: function () { this._point = 0; }, lineEnd: function () { this._point && this._context.closePath(); }, point: function (t, e) { t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e)); } }, e.a = function (t) { return new r(t); };
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t < 0 ? -1 : 1; }
        function i(t, e, n) { var i = t._x1 - t._x0, a = e - t._x1, o = (t._y1 - t._y0) / (i || a < 0 && -0), s = (n - t._y1) / (a || i < 0 && -0), u = (o * a + s * i) / (i + a); return (r(o) + r(s)) * Math.min(Math.abs(o), Math.abs(s), .5 * Math.abs(u)) || 0; }
        function a(t, e) { var n = t._x1 - t._x0; return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e; }
        function o(t, e, n) { var r = t._x0, i = t._y0, a = t._x1, o = t._y1, s = (a - r) / 3; t._context.bezierCurveTo(r + s, i + s * e, a - s, o - s * n, a, o); }
        function s(t) { this._context = t; }
        function u(t) { this._context = new l(t); }
        function l(t) { this._context = t; }
        function c(t) { return new s(t); }
        function f(t) { return new u(t); }
        e.a = c, e.b = f, s.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0; }, lineEnd: function () { switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3: o(this, this._t0, a(this, this._t0));
            } (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line; }, point: function (t, e) { var n = NaN; if (t = +t, e = +e, t !== this._x1 || e !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, o(this, a(this, n = i(this, t, e)), n);
                        break;
                    default: o(this, this._t0, n = i(this, t, e));
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n;
            } } }, (u.prototype = Object.create(s.prototype)).point = function (t, e) { s.prototype.point.call(this, e, t); }, l.prototype = { moveTo: function (t, e) { this._context.moveTo(e, t); }, closePath: function () { this._context.closePath(); }, lineTo: function (t, e) { this._context.lineTo(e, t); }, bezierCurveTo: function (t, e, n, r, i, a) { this._context.bezierCurveTo(e, t, r, n, a, i); } };
    }, function (t, e, n) {
        "use strict";
        function r(t) { this._context = t; }
        function i(t) { var e, n, r = t.length - 1, i = new Array(r), a = new Array(r), o = new Array(r); for (i[0] = 0, a[0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e)
            i[e] = 1, a[e] = 4, o[e] = 4 * t[e] + 2 * t[e + 1]; for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e)
            n = i[e] / a[e - 1], a[e] -= n, o[e] -= n * o[e - 1]; for (i[r - 1] = o[r - 1] / a[r - 1], e = r - 2; e >= 0; --e)
            i[e] = (o[e] - i[e + 1]) / a[e]; for (a[r - 1] = (t[r] + i[r - 1]) / 2, e = 0; e < r - 1; ++e)
            a[e] = 2 * t[e + 1] - i[e + 1]; return [i, a]; }
        r.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._x = [], this._y = []; }, lineEnd: function () { var t = this._x, e = this._y, n = t.length; if (n)
                if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === n)
                    this._context.lineTo(t[1], e[1]);
                else
                    for (var r = i(t), a = i(e), o = 0, s = 1; s < n; ++o, ++s)
                        this._context.bezierCurveTo(r[0][o], a[0][o], r[1][o], a[1][o], t[s], e[s]); (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null; }, point: function (t, e) { this._x.push(+t), this._y.push(+e); } }, e.a = function (t) { return new r(t); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { this._context = t, this._t = e; }
        function i(t) { return new r(t, 0); }
        function a(t) { return new r(t, 1); }
        e.c = i, e.b = a, r.prototype = { areaStart: function () { this._line = 0; }, areaEnd: function () { this._line = NaN; }, lineStart: function () { this._x = this._y = NaN, this._point = 0; }, lineEnd: function () { 0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line); }, point: function (t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1: this._point = 2;
                default: if (this._t <= 0)
                    this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                    var n = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(n, this._y), this._context.lineTo(n, e);
                }
            } this._x = t, this._y = e; } }, e.a = function (t) { return new r(t, .5); };
    }, function (t, e, n) {
        "use strict";
        function r(t, e) { return t[e]; }
        var i = n(246), a = n(49), o = n(72), s = n(73);
        e.a = function () { function t(t) { var r, i, a = e.apply(this, arguments), o = t.length, s = a.length, c = new Array(s); for (r = 0; r < s; ++r) {
            for (var f, d = a[r], h = c[r] = new Array(o), p = 0; p < o; ++p)
                h[p] = f = [0, +l(t[p], d, p, t)], f.data = t[p];
            h.key = d;
        } for (r = 0, i = n(c); r < s; ++r)
            c[i[r]].index = r; return u(c, i), c; } var e = Object(a.a)([]), n = s.a, u = o.a, l = r; return t.keys = function (n) { return arguments.length ? (e = "function" == typeof n ? n : Object(a.a)(i.a.call(n)), t) : e; }, t.value = function (e) { return arguments.length ? (l = "function" == typeof e ? e : Object(a.a)(+e), t) : l; }, t.order = function (e) { return arguments.length ? (n = null == e ? s.a : "function" == typeof e ? e : Object(a.a)(i.a.call(e)), t) : n; }, t.offset = function (e) { return arguments.length ? (u = null == e ? o.a : e, t) : u; }, t; };
    }, function (t, e, n) {
        "use strict";
        var r = n(72);
        e.a = function (t, e) { if ((i = t.length) > 0) {
            for (var n, i, a, o = 0, s = t[0].length; o < s; ++o) {
                for (a = n = 0; n < i; ++n)
                    a += t[n][o][1] || 0;
                if (a)
                    for (n = 0; n < i; ++n)
                        t[n][o][1] /= a;
            }
            Object(r.a)(t, e);
        } };
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) { if ((s = t.length) > 1)
            for (var n, r, i, a, o, s, u = 0, l = t[e[0]].length; u < l; ++u)
                for (a = o = 0, n = 0; n < s; ++n)
                    (i = (r = t[e[n]][u])[1] - r[0]) >= 0 ? (r[0] = a, r[1] = a += i) : i < 0 ? (r[1] = o, r[0] = o += i) : r[0] = a; };
    }, function (t, e, n) {
        "use strict";
        var r = n(72);
        e.a = function (t, e) { if ((n = t.length) > 0) {
            for (var n, i = 0, a = t[e[0]], o = a.length; i < o; ++i) {
                for (var s = 0, u = 0; s < n; ++s)
                    u += t[s][i][1] || 0;
                a[i][1] += a[i][0] = -u / 2;
            }
            Object(r.a)(t, e);
        } };
    }, function (t, e, n) {
        "use strict";
        var r = n(72);
        e.a = function (t, e) { if ((a = t.length) > 0 && (i = (n = t[e[0]]).length) > 0) {
            for (var n, i, a, o = 0, s = 1; s < i; ++s) {
                for (var u = 0, l = 0, c = 0; u < a; ++u) {
                    for (var f = t[e[u]], d = f[s][1] || 0, h = f[s - 1][1] || 0, p = (d - h) / 2, v = 0; v < u; ++v) {
                        var g = t[e[v]];
                        p += (g[s][1] || 0) - (g[s - 1][1] || 0);
                    }
                    l += d, c += p * d;
                }
                n[s - 1][1] += n[s - 1][0] = o, l && (o -= c / l);
            }
            n[s - 1][1] += n[s - 1][0] = o, Object(r.a)(t, e);
        } };
    }, function (t, e, n) {
        "use strict";
        var r = n(148);
        e.a = function (t) { return Object(r.a)(t).reverse(); };
    }, function (t, e, n) {
        "use strict";
        var r = n(73), i = n(148);
        e.a = function (t) { var e, n, a = t.length, o = t.map(i.b), s = Object(r.a)(t).sort(function (t, e) { return o[e] - o[t]; }), u = 0, l = 0, c = [], f = []; for (e = 0; e < a; ++e)
            n = s[e], u < l ? (u += o[n], c.push(n)) : (l += o[n], f.push(n)); return f.reverse().concat(c); };
    }, function (t, e, n) {
        "use strict";
        var r = n(73);
        e.a = function (t) { return Object(r.a)(t).reverse(); };
    }, function (t, e, n) {
        "use strict";
        var r = n(654), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addWidget("graph", "severity", i.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i, a, o, s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v), m = n(655), b = r(m), y = n(9), _ = n(8), w = n(656), x = r(w), k = (i = (0, _.className)("severity-widget"), a = (0, _.regions)({ chart: ".severity-widget__content" }), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, c.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, p.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(o))), r.template = b.default, i = n, (0, p.default)(r, i); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "onRender", value: function () { this.showChildView("chart", new x.default({ model: this.model.get("items") })); } }]), e; }(y.View)) || o) || o);
        e.default = k;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { return '<h2 class="widget__title">\n    ' + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "chart.severity.name", { name: "t", hash: {}, data: o })) + '\n</h2>\n<div class="severity-widget__content chart__body"></div>'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(86), a = r(i), o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(21), v = r(p), g = n(5), m = r(g), b = (0, a.default)(["<li>", "</li>"], ["<li>", "</li>"]), y = n(65), _ = r(y), w = n(115), x = r(w), k = n(92), O = r(k), C = n(40), M = n(41), j = n(22), E = ["blocker", "critical", "normal", "minor", "trivial"], S = function (t) { function e() { return (0, l.default)(this, e), (0, h.default)(this, (e.__proto__ || (0, s.default)(e)).apply(this, arguments)); } return (0, m.default)(e, t), (0, f.default)(e, [{ key: "initialize", value: function () { this.x = (0, M.scaleBand)().domain(E), this.y = (0, M.scaleSqrt)(), this.status = (0, M.scaleBand)().domain(C.values), this.tooltip = new x.default({ position: "right" }), this.collection = this.model, this.getChartData(); } }, { key: "getChartData", value: function () { var t = this; this.data = E.map(function (e) { return C.values.map(function (n) { var r = t.collection.filter(function (t) { return t.status === n && t.severity === e; }); return { value: r.length, testResults: r, severity: e, status: n }; }); }); } }, { key: "onAttach", value: function () { var t = this, n = this.data; this.setupViewport(), this.x.range([0, this.width]), this.y.range([this.height, 0], 1), this.y.domain([0, (0, j.max)(n, function (t) { return (0, j.max)(t, function (t) { return t.value; }); })]).nice(), this.status.rangeRound([0, this.x.step()]), this.makeBottomAxis({ tickFormat: function (t) { return t.toLowerCase(); }, scale: this.x }), this.svg.selectAll(".tick").select("line").attr("transform", "translate(" + this.x.step() / 2 + " , 0)"), this.makeLeftAxis({ scale: this.y, ticks: Math.min(10, this.y.domain()[1]) }); var r = this.svg.select(".chart__plot").selectAll(".chart__group").data(n).enter().append("g").attr("transform", function (e) { return "translate(" + t.x(e[0].severity) + ",0)"; }).selectAll(".bar").data(function (t) { return t; }).enter().append("rect"); r.attrs({ x: function (e) { return t.status(e.status); }, y: this.height, height: 0, width: this.status.step(), class: function (t) { return "chart__bar chart__fill_status_" + t.status; } }), this.bindTooltip(r), this.firstRender && (r = r.transition().duration(500)), r.attrs({ y: function (e) { return t.y(e.value); }, height: function (e) { return t.height - t.y(e.value); } }), (0, v.default)(e.prototype.__proto__ || (0, s.default)(e.prototype), "onAttach", this).call(this); } }, { key: "getTooltipContent", value: function (t) { var e = t.value, n = t.severity, r = t.status, i = t.testResults, a = i.slice(0, 10), o = i.length - a.length; return "<b>" + e + " " + n.toLowerCase() + " test cases " + r.toLowerCase() + '</b><br>\n            <ul class="popover__list">\n                ' + a.map(function (t) { return (0, O.default)(b, t.name); }).join("") + "\n            </ul>\n            " + (o ? "...and " + o + " more" : "") + "\n        "; } }]), e; }(_.default);
        e.default = S;
    }, function (t, e, n) {
        "use strict";
        var r = n(658), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addWidget("graph", "duration", i.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i, a, o, s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v), m = n(659), b = r(m), y = n(9), _ = n(8), w = n(660), x = r(w), k = (i = (0, _.className)("duration-widget"), a = (0, _.regions)({ chart: ".duration-widget__content" }), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, c.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, p.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(o))), r.template = b.default, i = n, (0, p.default)(r, i); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "onRender", value: function () { this.showChildView("chart", new x.default({ model: this.model.get("items") })); } }]), e; }(y.View)) || o) || o);
        e.default = k;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { return '<h2 class="widget__title">\n    ' + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "chart.duration.name", { name: "t", hash: {}, data: o })) + '\n</h2>\n<div class="duration-widget__content chart__body"></div>'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i = n(86), a = r(i), o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(21), v = r(p), g = n(5), m = r(g), b = (0, a.default)(["<li>", "</li>"], ["<li>", "</li>"]), y = n(65), _ = r(y), w = n(41), x = n(22), k = n(115), O = r(k), C = n(92), M = r(C), j = n(39), E = r(j), S = n(1), T = r(S), A = function (t) { function e() { return (0, l.default)(this, e), (0, h.default)(this, (e.__proto__ || (0, s.default)(e)).apply(this, arguments)); } return (0, m.default)(e, t), (0, f.default)(e, [{ key: "initialize", value: function () { this.collection = this.model, this.getChartData(); } }, { key: "getChartData", value: function () { this.data = this.collection.map(function (t) { return { value: t.time.duration, name: t.name }; }).filter(function (t) { return null !== t.value; }); } }, { key: "onAttach", value: function () { this.data && this.data.length ? this.doShow() : this.$el.html('<div class="widget__noitems">' + (0, T.default)("chart.duration.empty") + "</div>"), (0, v.default)(e.prototype.__proto__ || (0, s.default)(e.prototype), "onAttach", this).call(this); } }, { key: "doShow", value: function () { var t = this; this.x = (0, w.scaleLinear)(), this.y = (0, w.scaleSqrt)(), this.tooltip = new O.default({ position: "right" }), this.setupViewport(), this.x.range([0, this.width]), this.y.range([this.height, 0], 1); var e = (0, x.max)(this.data, function (t) { return t.value; }); this.x.domain([0, Math.max(e, 10)]).nice(); var n = (0, x.histogram)().value(function (t) { return t.value; }).domain(this.x.domain()).thresholds(this.x.ticks())(this.data).map(function (t) { return { x0: t.x0, x1: t.x1, y: t.length, testResults: t }; }), r = (0, x.max)(n, function (t) { return t.y; }); this.y.domain([0, r]).nice(), this.makeBottomAxis({ scale: this.x, tickFormat: function (t) { return (0, E.default)(t, 1); } }), this.makeLeftAxis({ scale: this.y, ticks: Math.min(10, r) }); var i = this.plot.selectAll(".chart__bar").data(n).enter().append("rect").classed("chart__bar", !0); this.bindTooltip(i), i.attrs({ x: function (e) { return t.x(e.x0) + 2; }, y: this.height, width: function (e) { return Math.max(t.x(e.x1) - t.x(e.x0) - 2, 0); }, height: 0 }), this.firstRender && (i = i.transition().duration(500)), i.attrs({ y: function (e) { return t.y(e.y); }, height: function (e) { return t.height - t.y(e.y); } }); } }, { key: "getTooltipContent", value: function (t) { var e = t.testResults, n = e.slice(0, 10), r = e.length - n.length; return "<b>" + e.length + ' test cases</b><br>\n            <ul class="popover__list">\n                ' + n.map(function (t) { return (0, M.default)(b, t.name); }).join("") + "\n            </ul>\n            " + (r ? "...and " + r + " more" : "") + "\n        "; } }]), e; }(_.default);
        e.default = A;
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        var i = n(662), a = r(i), o = n(98), s = r(o);
        allure.api.addWidget("graph", "duration-trend", a.default, s.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i, a, o, s = n(663), u = r(s), l = n(2), c = r(l), f = n(3), d = r(f), h = n(6), p = r(h), v = n(4), g = r(v), m = n(5), b = r(m);
        n(668);
        var y = n(669), _ = r(y), w = n(9), x = n(8), k = n(97), O = r(k), C = n(39), M = r(C), j = n(41), E = n(23), S = n(16), T = (i = (0, x.regions)({ chart: ".duration-trend__chart" }), a = (0, x.className)("duration-trend"), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, d.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, g.default)(this, (t = e.__proto__ || (0, c.default)(e)).call.apply(t, [this].concat(o))), r.template = _.default, i = n, (0, g.default)(r, i); } return (0, b.default)(e, t), (0, p.default)(e, [{ key: "onRender", value: function () { var t = this.model.map(function (t) { return t.get("data").duration; }), e = Math.min.apply(Math, (0, u.default)([function (t) { return t >= 0; }, function (t) { return t <= 0; }].map(function (e) { return t.reduce(function (n, r, i) { return e(r - t[i - 1]) ? i : n; }, -1); }))), n = Math.max.apply(Math, (0, u.default)(t)) - Math.min.apply(Math, (0, u.default)(t)), r = t[e] - (0, S.last)(t), i = (0, j.scaleLinear)().domain([0, Math.max(n, .25 * Math.max.apply(Math, (0, u.default)(t)))]); i.range(r > 0 ? ["#c4cac6", "#31a354"] : ["#cdc5c4", "#e34a33"]).interpolate(E.interpolateRgb); var a = (0, j.scaleOrdinal)().range([i(Math.abs(r))]); this.showChildView("chart", new O.default({ model: this.model, hidePoints: !0, hideLines: !0, colors: a, keys: ["duration"], yTickFormat: function (t) { return (0, M.default)(t, 2); } })); } }]), e; }(w.View)) || o) || o);
        e.default = T;
    }, function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = n(664), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        e.default = function (t) { if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
            return n;
        } return (0, i.default)(t); };
    }, function (t, e, n) { t.exports = { default: n(665), __esModule: !0 }; }, function (t, e, n) { n(59), n(666), t.exports = n(13).Array.from; }, function (t, e, n) {
        "use strict";
        var r = n(50), i = n(20), a = n(58), o = n(167), s = n(168), u = n(102), l = n(667), c = n(113);
        i(i.S + i.F * !n(173)(function (t) { Array.from(t); }), "Array", { from: function (t) { var e, n, i, f, d = a(t), h = "function" == typeof this ? this : Array, p = arguments.length, v = p > 1 ? arguments[1] : void 0, g = void 0 !== v, m = 0, b = c(d); if (g && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == b || h == Array && s(b))
                for (e = u(d.length), n = new h(e); e > m; m++)
                    l(n, m, g ? v(d[m], m) : d[m]);
            else
                for (f = b.call(d), n = new h; !(i = f.next()).done; m++)
                    l(n, m, g ? o(f, v, [i.value, m], !0) : i.value); return n.length = m, n; } });
    }, function (t, e, n) {
        "use strict";
        var r = n(30), i = n(55);
        t.exports = function (t, e, n) { e in t ? r.f(t, e, i(0, n)) : t[e] = n; };
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { return '<h2 class="widget__title">\n    ' + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "widget.durationTrend.name", { name: "t", hash: {}, data: o })) + '\n</h2>\n<div class="duration-trend__chart"></div>\n'; }, useData: !0 }); }, function (t, e) { }, function (t, e, n) { var r = n(7); t.exports = (r.default || r).template({ 1: function (t, e, n, r, i) { var a, o = null != e ? e : t.nullContext || {}, s = n.helperMissing, u = t.escapeExpression; return '        <div class="trend__tooltip_label">\n            <span class="label" style="background-color: ' + u((a = null != (a = n.color || (null != e ? e.color : e)) ? a : s, "function" == typeof a ? a.call(o, { name: "color", hash: {}, data: i }) : a)) + '">' + u((a = null != (a = n.num || (null != e ? e.num : e)) ? a : s, "function" == typeof a ? a.call(o, { name: "num", hash: {}, data: i }) : a)) + '</span>\n            <span class="trend__tooltip_name">' + u((a = null != (a = n.key || (null != e ? e.key : e)) ? a : s, "function" == typeof a ? a.call(o, { name: "key", hash: {}, data: i }) : a)) + "</span>\n        </div>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a, o, s = null != e ? e : t.nullContext || {}; return t.escapeExpression((o = null != (o = n.name || (null != e ? e.name : e)) ? o : n.helperMissing, "function" == typeof o ? o.call(s, { name: "name", hash: {}, data: i }) : o)) + '\n<div class="trend__tooltip">\n' + (null != (a = n.each.call(s, null != e ? e.data : e, { name: "each", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : "") + "</div>\n"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        var i = n(673), a = r(i), o = n(98), s = r(o);
        allure.api.addWidget("graph", "retry-trend", a.default, s.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i, a, o, s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v);
        n(674);
        var m = n(675), b = r(m), y = n(9), _ = n(8), w = n(97), x = r(w), k = n(41), O = n(256), C = (i = (0, _.regions)({ chart: ".retry-trend__chart" }), a = (0, _.className)("retry-trend"), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, c.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, p.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(o))), r.template = b.default, i = n, (0, p.default)(r, i); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "onRender", value: function () { var t = this.model.last().get("data"), e = t.retry, n = t.run, r = Math.min(e, n) / n, i = (0, k.scaleOrdinal)(["#4682b4", (0, O.interpolateYlOrRd)(r)]); this.showChildView("chart", new x.default({ model: this.model, keys: ["run", "retry"], colors: i, hideLines: !0, hidePoints: !0 })); } }]), e; }(y.View)) || o) || o);
        e.default = C;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { return '<h2 class="widget__title">\n    ' + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "widget.retryTrend.name", { name: "t", hash: {}, data: o })) + '\n</h2>\n<div class="retry-trend__chart"></div>\n'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(10);
        e.a = Object(r.a)("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
    }, function (t, e, n) {
        "use strict";
        var r = n(10);
        e.a = Object(r.a)("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
    }, function (t, e, n) {
        "use strict";
        var r = n(10);
        e.a = Object(r.a)("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
    }, function (t, e, n) {
        "use strict";
        var r = n(10);
        e.a = Object(r.a)("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
    }, function (t, e, n) {
        "use strict";
        var r = n(10);
        e.a = Object(r.a)("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
    }, function (t, e, n) {
        "use strict";
        var r = n(10);
        e.a = Object(r.a)("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
    }, function (t, e, n) {
        "use strict";
        var r = n(10);
        e.a = Object(r.a)("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
    }, function (t, e, n) {
        "use strict";
        var r = n(10);
        e.a = Object(r.a)("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return a; });
        var r = n(10), i = n(11), a = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(r.a);
        e.a = Object(i.a)(a);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        var i = n(712), a = r(i), o = n(98), s = r(o);
        allure.api.addWidget("graph", "categories-trend", a.default, s.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v);
        n(713);
        var m = n(714), b = r(m), y = n(9), _ = n(8), w = n(97), x = r(w), k = n(256), O = n(41), C = n(16), M = (i = (0, _.regions)({ chart: ".categories-trend__chart" }), a = (0, _.className)("categories-trend"), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, c.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, p.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(o))), r.template = b.default, i = n, (0, p.default)(r, i); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "onRender", value: function () { var t = this.model.sortedKeysByLastValue(), e = (0, O.scaleOrdinal)((0, C.range)(0, 1, 1 / t.length).map(function (t) { return (0, k.interpolateYlOrRd)(1 - t); })); this.showChildView("chart", new x.default({ model: this.model, keys: t, colors: e, hideLines: !0, hidePoints: !0 })); } }]), e; }(y.View)) || o) || o);
        e.default = M;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { return '<h2 class="widget__title">\n    ' + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "widget.categoriesTrend.name", { name: "t", hash: {}, data: o })) + '\n</h2>\n<div class="categories-trend__chart"></div>\n'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(716), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addWidget("widgets", "summary", i.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(29), s = r(o), u = n(2), l = r(u), c = n(3), f = r(c), d = n(6), h = r(d), p = n(4), v = r(p), g = n(21), m = r(g), b = n(5), y = r(b);
        n(717);
        var _ = n(9), w = n(718), x = r(w), k = n(8), O = n(240), C = r(O), M = (i = (0, k.regions)({ chart: ".summary-widget__chart" }))(a = function (t) { function e() { var t, n, r, i; (0, f.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, v.default)(this, (t = e.__proto__ || (0, l.default)(e)).call.apply(t, [this].concat(o))), r.template = x.default, i = n, (0, v.default)(r, i); } return (0, y.default)(e, t), (0, h.default)(e, [{ key: "onRender", value: function () { this.showChildView("chart", new C.default({ model: this.model, showLegend: !1 })); } }, { key: "serializeData", value: function () { var t = this.model.get("testRuns"), n = t && t.length; return (0, s.default)((0, m.default)(e.prototype.__proto__ || (0, l.default)(e.prototype), "serializeData", this).call(this), { isAggregated: n > 1, launchesCount: n }); } }]), e; }(_.View)) || a;
        e.default = M;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression; return "                " + u(r(n(1)).call(s, "widget.summary.aggregatedName", { name: "t", hash: {}, data: o })) + '\n                <span class="' + u(r(n(0)).call(s, "widget", "subtitle", { name: "b", hash: {}, data: o })) + '">' + u(t.lambda(null != e ? e.launchesCount : e, e)) + " " + u(r(n(1)).call(s, "widget.summary.launches", { name: "t", hash: { count: null != e ? e.launchesCount : e }, data: o })) + "</span>\n"; }, 3: function (t, e, i, a, o) { var s, u = t.escapeExpression; return "                " + u(t.lambda(null != e ? e.reportName : e, e)) + " " + u(r(n(53)).call(null != e ? e : t.nullContext || {}, null != (s = null != e ? e.time : e) ? s.stop : s, { name: "date", hash: {}, data: o })) + "\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression; return '<div class="' + l(r(n(0)).call(u, "widget", "flex-line", { name: "b", hash: {}, data: o })) + '">\n    <div class="' + l(r(n(0)).call(u, "widget", "column", { name: "b", hash: {}, data: o })) + '">\n        <h2 class="' + l(r(n(0)).call(u, "widget", "title", { name: "b", hash: {}, data: o })) + '">\n' + (null != (s = i.if.call(u, null != e ? e.isAggregated : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.program(3, o, 0), data: o })) ? s : "") + '            <div class="' + l(r(n(0)).call(u, "widget", "subtitle", { name: "b", hash: {}, data: o })) + '">\n                ' + l(r(n(34)).call(u, null != (s = null != e ? e.time : e) ? s.start : s, { name: "time", hash: {}, data: o })) + " - " + l(r(n(34)).call(u, null != (s = null != e ? e.time : e) ? s.stop : s, { name: "time", hash: {}, data: o })) + " (" + l(r(n(39)).call(u, null != (s = null != e ? e.time : e) ? s.duration : s, 2, { name: "duration", hash: {}, data: o })) + ')\n            </div>\n        </h2>\n        <div class="' + l(r(n(0)).call(u, "summary-widget", "stats", { name: "b", hash: {}, data: o })) + ' splash">\n            <div class="' + l(r(n(0)).call(u, "splash", "title", { name: "b", hash: {}, data: o })) + '">' + l(t.lambda(null != (s = null != e ? e.statistic : e) ? s.total : s, e)) + '</div>\n            <div class="' + l(r(n(0)).call(u, "splash", "subtitle", { name: "b", hash: {}, data: o })) + '">' + l(r(n(1)).call(u, "widget.summary.testResults", { name: "t", hash: { count: null != (s = null != e ? e.statistic : e) ? s.total : s }, data: o })) + '</div>\n        </div>\n    </div>\n    <div class="' + l(r(n(0)).call(u, "widget", "column", { name: "b", hash: {}, data: o })) + " " + l(r(n(0)).call(u, "summary-widget", "chart", { name: "b", hash: {}, data: o })) + '"></div>\n</div>\n'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        var i = n(720), a = r(i), o = n(98), s = r(o);
        allure.api.addWidget("widgets", "history-trend", a.default, s.default), allure.api.addWidget("graph", "history-trend", a.default, s.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s = n(2), u = r(s), l = n(3), c = r(l), f = n(6), d = r(f), h = n(4), p = r(h), v = n(5), g = r(v);
        n(721);
        var m = n(722), b = r(m), y = n(9), _ = n(8), w = n(97), x = r(w), k = n(41), O = n(40), C = (i = (0, _.regions)({ chart: ".history-trend__chart" }), a = (0, _.className)("history-trend"), i(o = a(o = function (t) { function e() { var t, n, r, i; (0, c.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, p.default)(this, (t = e.__proto__ || (0, u.default)(e)).call.apply(t, [this].concat(o))), r.template = b.default, i = n, (0, p.default)(r, i); } return (0, g.default)(e, t), (0, d.default)(e, [{ key: "onRender", value: function () { this.showChildView("chart", new x.default({ model: this.model, hideLines: !0, hidePoints: !0, colors: (0, k.scaleOrdinal)(["#fd5a3e", "#ffd050", "#97cc64", "#aaa", "#d35ebe"]).domain(O.values), keys: O.values })); } }]), e; }(y.View)) || o) || o);
        e.default = C;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { return '<h2 class="widget__title">\n    ' + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "widget.trend.name", { name: "t", hash: {}, data: o })) + '\n</h2>\n<div class="history-trend__chart"></div>\n'; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(124), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addWidget("widgets", "suites", i.default.extend({ rowTag: "a", title: "widget.suites.name", baseUrl: "suites", showLinks: !0 }));
    }, function (t, e, n) {
        "use strict";
        var r = n(124), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addWidget("widgets", "categories", i.default.extend({ rowTag: "a", title: "widget.categories.name", baseUrl: "categories", showLinks: !0 }));
    }, function (t, e, n) {
        "use strict";
        var r = n(726), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addWidget("widgets", "environment", i.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
        var i, a, o = n(15), s = r(o), u = n(2), l = r(u), c = n(3), f = r(c), d = n(6), h = r(d), p = n(4), v = r(p), g = n(5), m = r(g), b = n(9), y = n(8), _ = n(727), w = r(_), x = (i = (0, y.on)("click .environment-widget__expand"), a = function (t) { function e() { var t, n, r, i; (0, f.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, v.default)(this, (t = e.__proto__ || (0, l.default)(e)).call.apply(t, [this].concat(o))), r.template = w.default, i = n, (0, v.default)(r, i); } return (0, m.default)(e, t), (0, h.default)(e, [{ key: "initialize", value: function () { this.listLimit = 5; } }, { key: "onExpandClick", value: function () { this.listLimit = this.model.get("items").length, this.render(); } }, { key: "serializeData", value: function () { var t = this.model.get("items"); return { items: t.slice(0, this.listLimit), overLimit: t.length > this.listLimit }; } }]), e; }(b.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(a.prototype, "onExpandClick", [i], (0, s.default)(a.prototype, "onExpandClick"), a.prototype), a);
        e.default = x;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, n, r, i) { var a, o = null != e ? e : t.nullContext || {}; return '    <div class="table  table_hover widget__table">\n' + (null != (a = n.each.call(o, null != e ? e.items : e, { name: "each", hash: {}, fn: t.program(2, i, 0), inverse: t.noop, data: i })) ? a : "") + (null != (a = n.if.call(o, null != e ? e.overLimit : e, { name: "if", hash: {}, fn: t.program(6, i, 0), inverse: t.noop, data: i })) ? a : "") + "    </div>\n\n"; }, 2: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression; return '        <div class="' + l(r(n(0)).call(u, "table", "row", { name: "b", hash: {}, data: o })) + '" disabled>\n            <div class="' + l(r(n(0)).call(u, "table", "col", { name: "b", hash: {}, data: o })) + ' long-line">\n                ' + l(t.lambda(null != e ? e.name : e, e)) + '\n            </div>\n            <div class="' + l(r(n(0)).call(u, "table", "col", { name: "b", hash: {}, data: o })) + ' long-line">\n' + (null != (s = i.each.call(u, null != e ? e.values : e, { name: "each", hash: {}, fn: t.program(3, o, 0), inverse: t.noop, data: o })) ? s : "") + "            </div>\n        </div>\n"; }, 3: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return "                    " + t.escapeExpression(r(n(257)).call(u, e, { name: "linky", hash: {}, data: o })) + (null != (s = i.unless.call(u, o && o.last, { name: "unless", hash: {}, fn: t.program(4, o, 0), inverse: t.noop, data: o })) ? s : "") + "\n"; }, 4: function (t, e, n, r, i) { return ",<br>"; }, 6: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression; return '        <a class="' + u(r(n(0)).call(s, "table", "row", { name: "b", hash: {}, data: o })) + ' clickable environment-widget__expand">\n            <div class="' + u(r(n(0)).call(s, "table", "col", { name: "b", hash: { center: !0 }, data: o })) + '">' + u(r(n(1)).call(s, "widget.environment.showAll", { name: "t", hash: {}, data: o })) + "</div>\n        </a>\n"; }, 8: function (t, e, i, a, o) { return '    <div class="widget__noitems">' + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "widget.environment.empty", { name: "t", hash: {}, data: o })) + "</div>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '<h2 class="widget__title">\n    ' + t.escapeExpression(r(n(1)).call(u, "widget.environment.name", { name: "t", hash: {}, data: o })) + "\n</h2>\n" + (null != (s = i.if.call(u, null != e ? e.items : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.program(8, o, 0), data: o })) ? s : ""); }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(729), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addWidget("widgets", "executors", i.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n(2), a = r(i), o = n(3), s = r(o), u = n(4), l = r(u), c = n(5), f = r(c), d = n(9), h = n(730), p = r(h), v = function (t) { function e() { var t, n, r, i; (0, s.default)(this, e); for (var o = arguments.length, u = Array(o), c = 0; c < o; c++)
            u[c] = arguments[c]; return n = r = (0, l.default)(this, (t = e.__proto__ || (0, a.default)(e)).call.apply(t, [this].concat(u))), r.template = p.default, i = n, (0, l.default)(r, i); } return (0, f.default)(e, t), e; }(d.View);
        e.default = v;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, n, r, i) { var a; return null != (a = n.each.call(null != e ? e : t.nullContext || {}, null != e ? e.items : e, { name: "each", hash: {}, fn: t.program(2, i, 0), inverse: t.noop, data: i })) ? a : ""; }, 2: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression, c = t.lambda; return '    <span class="table__row">\n        <div class="' + l(r(n(0)).call(u, "table", "col", { name: "b", hash: {}, data: o })) + ' executor">\n            <span class="executor-icon executor-icon__' + l(c(null != e ? e.type : e, e)) + '">&nbsp;</span>\n            ' + l(c(null != e ? e.name : e, e)) + "\n        </div>\n" + (null != (s = i.if.call(u, null != e ? e.buildName : e, { name: "if", hash: {}, fn: t.program(3, o, 0), inverse: t.program(8, o, 0), data: o })) ? s : "") + "    </span>\n"; }, 3: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '            <div class="' + t.escapeExpression(r(n(0)).call(u, "table", "col", { name: "b", hash: { right: !0 }, data: o })) + ' executor">\n' + (null != (s = i.if.call(u, null != e ? e.buildUrl : e, { name: "if", hash: {}, fn: t.program(4, o, 0), inverse: t.program(6, o, 0), data: o })) ? s : "") + "\n            </div>\n"; }, 4: function (t, e, n, r, i) { var a = t.lambda, o = t.escapeExpression; return '                    <a class="link" href="' + o(a(null != e ? e.buildUrl : e, e)) + '">\n                        ' + o(a(null != e ? e.buildName : e, e)) + '\n                        <span class="fa fa-external-link"></span>\n                    </a>\n'; }, 6: function (t, e, n, r, i) { return "                    " + t.escapeExpression(t.lambda(null != e ? e.buildName : e, e)) + "\n"; }, 8: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression; return '            <div class="' + u(r(n(0)).call(s, "table", "col", { name: "b", hash: { right: !0 }, data: o })) + '">\n                ' + u(r(n(1)).call(s, "widget.executors.unknown", { name: "t", hash: {}, data: o })) + "\n            </div>\n"; }, 10: function (t, e, i, a, o) { var s = null != e ? e : t.nullContext || {}, u = t.escapeExpression; return '    <div class="table__row">\n        <div class="' + u(r(n(0)).call(s, "table", "col", { name: "b", hash: { center: !0 }, data: o })) + '">\n            ' + u(r(n(1)).call(s, "widget.executors.empty", { name: "t", hash: {}, data: o })) + "\n        </div>\n    </div>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '<h2 class="widget__title">\n    ' + t.escapeExpression(r(n(1)).call(u, "widget.executors.name", { name: "t", hash: {}, data: o })) + '\n</h2>\n<div class="table table_hover widget__table">\n' + (null != (s = i.if.call(u, null != e ? e.items : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.program(10, o, 0), data: o })) ? s : "") + "</div>\n"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(732), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultBlock(i.default, { position: "before" });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p), g = n(9), m = n(8), b = n(733), y = r(b), _ = (i = (0, m.className)("pane__section"))(a = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = y.default, i = n, (0, h.default)(r, i); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "serializeData", value: function () { return { descriptionHtml: this.model.get("descriptionHtml") }; } }]), e; }(g.View)) || a;
        e.default = _;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s; return '    <h3 class="pane__section-title">' + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "testResult.description.name", { name: "t", hash: {}, data: o })) + '</h3>\n    <div class="description__text">' + (null != (s = t.lambda(null != e ? e.descriptionHtml : e, e)) ? s : "") + "</div>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return null != (a = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.descriptionHtml : e, { name: "if", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : ""; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(735), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultBlock(i.default, { position: "tag" });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p), g = n(9), m = n(8), b = n(736), y = r(b), _ = (i = (0, m.className)("pane__section"))(a = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = y.default, i = n, (0, h.default)(r, i); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "serializeData", value: function () { var t = this.model.get("extra"); return { tags: t ? t.tags : null }; } }]), e; }(g.View)) || a;
        e.default = _;
    }, function (t, e, n) { var r = n(7); t.exports = (r.default || r).template({ 1: function (t, e, n, r, i) { var a; return "    Tags: " + (null != (a = n.each.call(null != e ? e : t.nullContext || {}, null != e ? e.tags : e, { name: "each", hash: {}, fn: t.program(2, i, 0), inverse: t.noop, data: i })) ? a : ""); }, 2: function (t, e, n, r, i) { var a; return '\n        <span class="label label__info">' + (null != (a = n.if.call(null != e ? e : t.nullContext || {}, e, { name: "if", hash: {}, fn: t.program(3, i, 0), inverse: t.program(5, i, 0), data: i })) ? a : "") + "</span>\n"; }, 3: function (t, e, n, r, i) { return t.escapeExpression(t.lambda(e, e)); }, 5: function (t, e, n, r, i) { return "null"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return null != (a = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.tags : e, { name: "if", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : ""; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(738), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultBlock(i.default, { position: "tag" });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p), g = n(9), m = n(739), b = r(m), y = n(8), _ = (i = (0, y.className)("pane__section"))(a = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = b.default, i = n, (0, h.default)(r, i); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "serializeData", value: function () { var t = this.model.get("extra"); return { categories: t ? t.categories : null }; } }]), e; }(g.View)) || a;
        e.default = _;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return "    " + t.escapeExpression(r(n(1)).call(u, "testResult.categories.name", { name: "t", hash: {}, data: o })) + ":\n" + (null != (s = i.each.call(u, null != e ? e.categories : e, { name: "each", hash: {}, fn: t.program(2, o, 0), inverse: t.noop, data: o })) ? s : ""); }, 2: function (t, e, n, r, i) { return "        <span>" + t.escapeExpression(t.lambda(null != e ? e.name : e, e)) + " </span>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return null != (a = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.categories : e, { name: "if", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : ""; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(741), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultTab("history", "testResult.history.name", i.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        function i(t) { return (Math.floor(100 * t) / 100).toString(); }
        function a(t) { if (!t || !t.statistic || !t.statistic.total)
            return "unknown"; var e = t.statistic, n = e.passed, r = e.total; return i((n || 0) / r * 100) + "%"; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o, s, u = n(2), l = r(u), c = n(3), f = r(c), d = n(6), h = r(d), p = n(4), v = r(p), g = n(5), m = r(g);
        n(742);
        var b = n(9), y = n(743), _ = r(y), w = n(8), x = (o = (0, w.className)("test-result-history"))(s = function (t) { function e() { var t, n, r, i; (0, f.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, v.default)(this, (t = e.__proto__ || (0, l.default)(e)).call.apply(t, [this].concat(o))), r.template = _.default, i = n, (0, v.default)(r, i); } return (0, m.default)(e, t), (0, h.default)(e, [{ key: "serializeData", value: function () { var t = this.model.get("extra"), e = t ? t.history : null; return { cls: this.className, history: e, successRate: a(e) }; } }]), e; }(b.View)) || s;
        e.default = x;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o, s, u) { var l, c = null != e ? e : t.nullContext || {}, f = t.escapeExpression; return '        <div class="' + f(r(n(0)).call(c, null != e ? e.cls : e, "success-rate", { name: "b", hash: {}, data: o })) + '">\n            ' + f(r(n(1)).call(c, "testResult.history.successRate", { name: "t", hash: {}, data: o })) + " " + f(t.lambda(null != e ? e.successRate : e, e)) + "\n" + (null != (l = i.if.call(c, null != (l = null != (l = null != e ? e.history : e) ? l.statistic : l) ? l.total : l, { name: "if", hash: {}, fn: t.program(2, o, 0, s, u), inverse: t.noop, data: o })) ? l : "") + "        </div>\n" + (null != (l = i.each.call(c, null != (l = null != e ? e.history : e) ? l.items : l, { name: "each", hash: {}, fn: t.program(4, o, 0, s, u), inverse: t.noop, data: o })) ? l : ""); }, 2: function (t, e, n, r, i) { var a, o = t.lambda, s = t.escapeExpression; return "                (" + s(o(null != (a = null != (a = null != e ? e.history : e) ? a.statistic : a) ? a.passed : a, e)) + " of " + s(o(null != (a = null != (a = null != e ? e.history : e) ? a.statistic : a) ? a.total : a, e)) + ")\n"; }, 4: function (t, e, n, r, i, a, o) { var s; return null != (s = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.reportUrl : e, { name: "if", hash: {}, fn: t.program(5, i, 0, a, o), inverse: t.program(7, i, 0, a, o), data: i })) ? s : ""; }, 5: function (t, e, i, a, o, s, u) { var l, c = null != e ? e : t.nullContext || {}, f = t.escapeExpression, d = t.lambda; return '                <div class="' + f(r(n(0)).call(c, null != u[1] ? u[1].cls : u[1], "row", { name: "b", hash: {}, data: o })) + '">\n                    <a class="link" href="' + f(d(null != e ? e.reportUrl : e, e)) + '" target="_blank">\n                        <span class="label label_status_' + f(d(null != e ? e.status : e, e)) + '">' + f(d(null != e ? e.status : e, e)) + "</span>\n                        <span>" + f(r(n(53)).call(c, null != (l = null != e ? e.time : e) ? l.start : l, { name: "date", hash: {}, data: o })) + " at " + f(r(n(34)).call(c, null != (l = null != e ? e.time : e) ? l.start : l, { name: "time", hash: {}, data: o })) + "</span>\n                    </a>\n                </div>\n"; }, 7: function (t, e, i, a, o) { var s, u = t.lambda, l = t.escapeExpression, c = null != e ? e : t.nullContext || {}; return '                <div>\n                    <span class="label label_status_' + l(u(null != e ? e.status : e, e)) + '">' + l(u(null != e ? e.status : e, e)) + "</span>\n                    <span>" + l(r(n(53)).call(c, null != (s = null != e ? e.time : e) ? s.start : s, { name: "date", hash: {}, data: o })) + " at " + l(r(n(34)).call(c, null != (s = null != e ? e.time : e) ? s.start : s, { name: "time", hash: {}, data: o })) + "</span>\n                </div>\n"; }, 9: function (t, e, n, r, i) { return "        No history information are available.\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o, s, u) { var l, c = null != e ? e : t.nullContext || {}; return '<div class="' + t.escapeExpression(r(n(0)).call(c, "pane", "section", { name: "b", hash: {}, data: o })) + '">\n' + (null != (l = i.if.call(c, null != e ? e.history : e, { name: "if", hash: {}, fn: t.program(1, o, 0, s, u), inverse: t.program(9, o, 0, s, u), data: o })) ? l : "") + "</div>"; }, useData: !0, useDepths: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(745), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultTab("retries", "testResult.retries.name", i.default);
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s, u = n(15), l = r(u), c = n(2), f = r(c), d = n(3), h = r(d), p = n(6), v = r(p), g = n(4), m = r(g), b = n(5), y = r(b);
        n(746);
        var _ = n(9), w = n(747), x = r(w), k = n(8), O = n(37), C = r(O), M = n(27), j = r(M), E = n(8), S = (i = (0, E.className)("test-result-retries"), a = (0, k.on)("click .retry-row"), i((s = function (t) { function e() { var t, n, r, i; (0, h.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, m.default)(this, (t = e.__proto__ || (0, f.default)(e)).call.apply(t, [this].concat(o))), r.template = x.default, i = n, (0, m.default)(r, i); } return (0, y.default)(e, t), (0, v.default)(e, [{ key: "serializeData", value: function () { var t = this.model.get("extra"), e = t ? t.retries : null; return { cls: this.className, retries: e }; } }, { key: "onRetryClick", value: function (t) { var e = (0, j.default)(t.currentTarget).data("uid"); C.default.toUrl("#testresult/" + e); } }]), e; }(_.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(s.prototype, "onRetryClick", [a], (0, l.default)(s.prototype, "onRetryClick"), s.prototype), o = s)) || o);
        e.default = S;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, n, r, i) { var a; return null != (a = n.each.call(null != e ? e : t.nullContext || {}, null != e ? e.retries : e, { name: "each", hash: {}, fn: t.program(2, i, 0), inverse: t.noop, data: i })) ? a : ""; }, 2: function (t, e, i, a, o) { var s, u = t.lambda, l = t.escapeExpression, c = null != e ? e : t.nullContext || {}; return '            <a class="link" href="#/testresult/' + l(u(null != e ? e.uid : e, e)) + '">\n                <span class="label label_status_' + l(u(null != e ? e.status : e, e)) + '">' + l(u(null != e ? e.status : e, e)) + "</span>\n                <span>" + l(r(n(53)).call(c, null != (s = null != e ? e.time : e) ? s.start : s, { name: "date", hash: {}, data: o })) + " at " + l(r(n(34)).call(c, null != (s = null != e ? e.time : e) ? s.start : s, { name: "time", hash: {}, data: o })) + '</span>\n                <pre class="preformated-text"><code>' + l(u(null != e ? e.statusDetails : e, e)) + "</code></pre>\n            </a>\n"; }, 4: function (t, e, i, a, o) { return "        " + t.escapeExpression(r(n(1)).call(null != e ? e : t.nullContext || {}, "testResult.retries.empty", { name: "t", hash: {}, data: o })) + "\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '<div class="' + t.escapeExpression(r(n(0)).call(u, "pane", "section", { name: "b", hash: {}, data: o })) + '">\n' + (null != (s = i.if.call(u, null != e ? e.retries : e, { name: "if", hash: {}, fn: t.program(1, o, 0), inverse: t.program(4, o, 0), data: o })) ? s : "") + "</div>"; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(749), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultBlock(i.default, { position: "before" });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p), g = n(9), m = n(750), b = r(m), y = n(8), _ = (i = (0, y.className)("pane__section"))(a = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = b.default, i = n, (0, h.default)(r, i); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "serializeData", value: function () { var t = this.model.get("extra"); return { owner: t ? t.owner : null }; } }]), e; }(g.View)) || a;
        e.default = _;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s = t.escapeExpression; return '    <h3 class="pane__section-title">' + s(r(n(1)).call(null != e ? e : t.nullContext || {}, "testResult.owner.name", { name: "t", hash: {}, data: o })) + "</h3>\n    <div>" + s(t.lambda(null != e ? e.owner : e, e)) + "</div>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return null != (a = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.owner : e, { name: "if", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : ""; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(752), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultBlock(i.default, { position: "tag" });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p), g = n(9), m = n(8), b = n(7), y = n(1), _ = r(y), w = (i = (0, m.className)("pane__section"))(a = function (t) { function e() { return (0, l.default)(this, e), (0, h.default)(this, (e.__proto__ || (0, s.default)(e)).apply(this, arguments)); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "template", value: function (t) { return t.severity ? (0, _.default)("testResult.severity.name") + ": " + (0, b.escapeExpression)(t.severity) : ""; } }, { key: "serializeData", value: function () { var t = this.model.get("extra"); return { severity: t ? t.severity : null }; } }]), e; }(g.View)) || a;
        e.default = w;
    }, function (t, e, n) {
        "use strict";
        var r = n(754), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultBlock(i.default, { position: "tag" });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p), g = n(9), m = n(8), b = n(755), y = r(b), _ = (i = (0, m.className)("pane__section"))(a = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = y.default, i = n, (0, h.default)(r, i); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "serializeData", value: function () { return { time: this.model.get("time") }; } }]), e; }(g.View)) || a;
        e.default = _;
    }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.escapeExpression; return '    <span data-tooltip="' + l(r(n(53)).call(u, null != (s = null != e ? e.time : e) ? s.start : s, { name: "date", hash: {}, data: o })) + " " + l(r(n(34)).call(u, null != (s = null != e ? e.time : e) ? s.start : s, { name: "time", hash: {}, data: o })) + "&nbsp;&ndash;&nbsp;" + l(r(n(34)).call(u, null != (s = null != e ? e.time : e) ? s.stop : s, { name: "time", hash: {}, data: o })) + '">\n        ' + l(r(n(1)).call(u, "testResult.duration.name", { name: "t", hash: {}, data: o })) + ':\n        <span class="fa fa-clock-o"></span>\n        ' + l(r(n(39)).call(u, null != (s = null != e ? e.time : e) ? s.duration : s, 2, { name: "duration", hash: {}, data: o })) + "\n    </span>\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return null != (a = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.time : e, { name: "if", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : ""; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(757), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultBlock(i.default, { position: "before" });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o, s, u = n(15), l = r(u), c = n(2), f = r(c), d = n(3), h = r(d), p = n(6), v = r(p), g = n(4), m = r(g), b = n(5), y = r(b);
        n(758);
        var _ = n(9), w = n(8), x = n(759), k = r(x), O = (i = (0, w.className)("pane__section"), a = (0, w.on)("click .environment"), i((s = function (t) { function e() { var t, n, r, i; (0, h.default)(this, e); for (var a = arguments.length, o = Array(a), s = 0; s < a; s++)
            o[s] = arguments[s]; return n = r = (0, m.default)(this, (t = e.__proto__ || (0, f.default)(e)).call.apply(t, [this].concat(o))), r.template = k.default, i = n, (0, m.default)(r, i); } return (0, y.default)(e, t), (0, v.default)(e, [{ key: "serializeData", value: function () { return { parameters: this.model.get("parameters") }; } }, { key: "onParameterClick", value: function () { this.$(".environment").toggleClass("line-ellipsis", !1); } }]), e; }(_.View), function (t, e, n, r, i) { var a = {}; return Object.keys(r).forEach(function (t) { a[t] = r[t]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = n.slice().reverse().reduce(function (n, r) { return r(t, e, n) || n; }, a), i && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(i) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(t, e, a), a = null), a; }(s.prototype, "onParameterClick", [a], (0, l.default)(s.prototype, "onParameterClick"), s.prototype), o = s)) || o);
        e.default = O;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return "<h3>" + t.escapeExpression(r(n(1)).call(u, "testResult.parameters.name", { name: "t", hash: {}, data: o })) + "</h3>\n" + (null != (s = i.each.call(u, null != e ? e.parameters : e, { name: "each", hash: {}, fn: t.program(2, o, 0), inverse: t.noop, data: o })) ? s : ""); }, 2: function (t, e, n, r, i) { var a, o = null != e ? e : t.nullContext || {}; return '        <div class="environment long-line line-ellipsis">\n            <span class="environment__key">' + (null != (a = n.if.call(o, null != e ? e.name : e, { name: "if", hash: {}, fn: t.program(3, i, 0), inverse: t.program(5, i, 0), data: i })) ? a : "") + "</span>:\n" + (null != (a = n.if.call(o, null != e ? e.value : e, { name: "if", hash: {}, fn: t.program(7, i, 0), inverse: t.program(9, i, 0), data: i })) ? a : "") + "        </div>\n"; }, 3: function (t, e, n, r, i) { return t.escapeExpression(t.lambda(null != e ? e.name : e, e)); }, 5: function (t, e, n, r, i) { return "&lt;null&gt;"; }, 7: function (t, e, i, a, o) { return "                <span>" + t.escapeExpression(r(n(257)).call(null != e ? e : t.nullContext || {}, null != e ? e.value : e, { name: "linky", hash: {}, data: o })) + "</span>\n"; }, 9: function (t, e, n, r, i) { return "                null\n"; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return null != (a = n.if.call(null != e ? e : t.nullContext || {}, null != (a = null != e ? e.parameters : e) ? a.length : a, { name: "if", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : ""; }, useData: !0 }); }, function (t, e, n) {
        "use strict";
        var r = n(761), i = function (t) { return t && t.__esModule ? t : { default: t }; }(r);
        allure.api.addTestResultBlock(i.default, { position: "before" });
    }, function (t, e, n) {
        "use strict";
        function r(t) { return t && t.__esModule ? t : { default: t }; }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i, a, o = n(2), s = r(o), u = n(3), l = r(u), c = n(6), f = r(c), d = n(4), h = r(d), p = n(5), v = r(p);
        n(762);
        var g = n(9), m = n(8), b = n(763), y = r(b), _ = (i = (0, m.className)("pane__section"))(a = function (t) { function e() { var t, n, r, i; (0, l.default)(this, e); for (var a = arguments.length, o = Array(a), u = 0; u < a; u++)
            o[u] = arguments[u]; return n = r = (0, h.default)(this, (t = e.__proto__ || (0, s.default)(e)).call.apply(t, [this].concat(o))), r.template = y.default, i = n, (0, h.default)(r, i); } return (0, v.default)(e, t), (0, f.default)(e, [{ key: "serializeData", value: function () { return { links: this.model.get("links") }; } }]), e; }(g.View)) || a;
        e.default = _;
    }, function (t, e) { }, function (t, e, n) { function r(t) { return t && (t.__esModule ? t.default : t); } var i = n(7); t.exports = (i.default || i).template({ 1: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}; return '    <h3 class="pane__section-title">' + t.escapeExpression(r(n(1)).call(u, "testResult.links.name", { name: "t", hash: {}, data: o })) + "</h3>\n" + (null != (s = i.each.call(u, null != e ? e.links : e, { name: "each", hash: {}, fn: t.program(2, o, 0), inverse: t.noop, data: o })) ? s : ""); }, 2: function (t, e, i, a, o) { var s, u = null != e ? e : t.nullContext || {}, l = t.lambda, c = t.escapeExpression; return '        <span class="testresult-link">\n' + (null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "issue", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(3, o, 0), inverse: t.noop, data: o })) ? s : "") + (null != (s = i.if.call(u, r(n(24)).call(u, null != e ? e.type : e, "tms", { name: "eq", hash: {}, data: o }), { name: "if", hash: {}, fn: t.program(5, o, 0), inverse: t.noop, data: o })) ? s : "") + '        <a class="link" href="' + c(l(null != e ? e.url : e, e)) + '" target="_blank">' + c(l(null != e ? e.name : e, e)) + "</a>\n    </span>\n"; }, 3: function (t, e, n, r, i) { return '            <span class="fa fa-bug"></span>\n'; }, 5: function (t, e, n, r, i) { return '            <span class="fa fa-database"></span>\n'; }, compiler: [7, ">= 4.0.0"], main: function (t, e, n, r, i) { var a; return null != (a = n.if.call(null != e ? e : t.nullContext || {}, null != e ? e.links : e, { name: "if", hash: {}, fn: t.program(1, i, 0), inverse: t.noop, data: i })) ? a : ""; }, useData: !0 }); }]);
//# sourceMappingURL=app.js.map