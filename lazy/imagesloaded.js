function cancelZoom() {
    function e(e) {
        t.content = i + ("blur" == e.type ? i.match(r, "") ? "" : o + 10 : o + 1)
    }
    var t, i, n = document, o = ",maximum-scale=", r = /,*maximum\-scale\=\d*\.*\d*/;
    this.addEventListener && n.querySelector && (t = n.querySelector('meta[name="viewport"]'),
    i = t.content,
    this.addEventListener("focus", e, !0),
    this.addEventListener("blur", e, !1))
}
function initViewPort() {
    $.cookie("clientWidth", $(window).width(), {
        path: "/"
    }),
    Modernizr.mq("only screen and (min-width: 0em)") && (mqMode = {
        name: "xxs",
        num: 1,
        truncChars: 80,
        mapZoom: 11
    }),
    Modernizr.mq("only screen and (min-width: 35em)") && (mqMode = {
        name: "xs",
        num: 2,
        truncChars: 260,
        mapZoom: 7
    }),
    Modernizr.mq("only screen and (min-width: 40em)") && (mqMode = {
        name: "s",
        num: 3,
        truncChars: 320,
        mapZoom: 5
    }),
    Modernizr.mq("only screen and (min-width: 48em)") && (mqMode = {
        name: "m",
        num: 4,
        truncChars: 340,
        mapZoom: 5
    }),
    Modernizr.mq("only screen and (min-width: 64em)") && (mqMode = {
        name: "l",
        num: 5,
        truncChars: 600,
        mapZoom: 3
    })
}
function log(e) {}
function imageLoadHandler(e) {
    e.each(function(e) {
        var t = $(this);
        t.hide();
        var i = t.parent();
        console.log('imageLoadHandler', t, i.width(), t.width(),
                   t.attr("src"), t.data("src-large"), t.attr("src", t.data("src-large")))
        i.width() > t.width() && t.attr("src") != t.data("src-large") && t.attr("src", t.data("src-large")),
        i.css("background-image", "url(" + t.attr("src") + ")"),
        i.addClass("image"),
        Modernizr.backgroundsize || i.backstretch(t.attr("src"))
    })
}
function imageLoad() {
    $(".photos img").imagesLoaded(function(e, t, i) {
        imageLoadHandler(e)
    })
}
function imageLayout() {
    var e = $(".photos li").first().width();
    $(".photos li figure > a").each(function(t) {
        $(this).height(e)
    })
}
function navLayout() {
    $(".nav-fold").each(function(e) {
        0 == $(this).closest("nav").find("li:hidden").not(".nav-fold").length ? $(this).hide() : $(this).is(":hidden") && $(this).show()
    })
}
!function(e) {
    e.fn.cancelZoom = function() {
        return this.each(cancelZoom)
    }
    ,
    e("input:text,select,textarea").cancelZoom()
}(jQuery),
function(e) {
    e.isScrollToFixed = function(t) {
        return !!e(t).data("ScrollToFixed")
    }
    ,
    e.ScrollToFixed = function(t, i) {
        function n() {
            $.trigger("preUnfixed.ScrollToFixed"),
            d(),
            $.trigger("unfixed.ScrollToFixed"),
            T = -1,
            w = $.offset().top,
            k = $.offset().left,
            g.options.offsets && (k += $.offset().left - $.position().left),
            -1 == S && (S = k),
            v = $.css("position"),
            y = !0,
            -1 != g.options.bottom && ($.trigger("preFixed.ScrollToFixed"),
            c(),
            $.trigger("fixed.ScrollToFixed"))
        }
        function o() {
            var e = g.options.limit;
            return e ? "function" == typeof e ? e.apply($) : e : 0
        }
        function r() {
            return "fixed" === v
        }
        function a() {
            return "absolute" === v
        }
        function s() {
            return !(r() || a())
        }
        function c() {
            r() || (F.css({
                display: $.css("display"),
                width: $.outerWidth(!0),
                height: $.outerHeight(!0),
                "float": $.css("float")
            }),
            cssOptions = {
                position: "fixed",
                top: -1 == g.options.bottom ? h() : "",
                bottom: -1 == g.options.bottom ? "" : g.options.bottom,
                "margin-left": "0px"
            },
            g.options.dontSetWidth || (cssOptions.width = $.width()),
            $.css(cssOptions),
            $.addClass(g.options.baseClassName),
            g.options.className && $.addClass(g.options.className),
            v = "fixed")
        }
        function l() {
            var e = o()
              , t = k;
            g.options.removeOffsets && (t = "",
            e -= w),
            cssOptions = {
                position: "absolute",
                top: e,
                left: t,
                "margin-left": "0px",
                bottom: ""
            },
            g.options.dontSetWidth || (cssOptions.width = $.width()),
            $.css(cssOptions),
            v = "absolute"
        }
        function d() {
            s() || (T = -1,
            F.css("display", "none"),
            $.css({
                width: "",
                position: x,
                left: "",
                top: b,
                "margin-left": ""
            }),
            $.removeClass("scroll-to-fixed-fixed"),
            g.options.className && $.removeClass(g.options.className),
            v = null)
        }
        function u(e) {
            e != T && ($.css("left", k - e),
            T = e)
        }
        function h() {
            var e = g.options.marginTop;
            return e ? "function" == typeof e ? e.apply($) : e : 0
        }
        function p() {
            if (e.isScrollToFixed($)) {
                var t = y;
                y || n();
                var i = e(window).scrollLeft()
                  , p = e(window).scrollTop()
                  , v = o();
                g.options.minWidth && e(window).width() < g.options.minWidth ? s() && t || (m(),
                $.trigger("preUnfixed.ScrollToFixed"),
                d(),
                $.trigger("unfixed.ScrollToFixed")) : g.options.maxWidth && e(window).width() > g.options.maxWidth ? s() && t || (m(),
                $.trigger("preUnfixed.ScrollToFixed"),
                d(),
                $.trigger("unfixed.ScrollToFixed")) : -1 == g.options.bottom ? v > 0 && p >= v - h() ? a() && t || (m(),
                $.trigger("preAbsolute.ScrollToFixed"),
                l(),
                $.trigger("unfixed.ScrollToFixed")) : p >= w - h() ? (r() && t || (m(),
                $.trigger("preFixed.ScrollToFixed"),
                c(),
                T = -1,
                $.trigger("fixed.ScrollToFixed")),
                u(i)) : s() && t || (m(),
                $.trigger("preUnfixed.ScrollToFixed"),
                d(),
                $.trigger("unfixed.ScrollToFixed")) : v > 0 ? p + e(window).height() - $.outerHeight(!0) >= v - (h() || -f()) ? r() && (m(),
                $.trigger("preUnfixed.ScrollToFixed"),
                "absolute" === x ? l() : d(),
                $.trigger("unfixed.ScrollToFixed")) : (r() || (m(),
                $.trigger("preFixed.ScrollToFixed"),
                c()),
                u(i),
                $.trigger("fixed.ScrollToFixed")) : u(i)
            }
        }
        function f() {
            return g.options.bottom ? g.options.bottom : 0
        }
        function m() {
            var e = $.css("position");
            $.trigger("absolute" == e ? "postAbsolute.ScrollToFixed" : "fixed" == e ? "postFixed.ScrollToFixed" : "postUnfixed.ScrollToFixed")
        }
        var g = this;
        g.$el = e(t),
        g.el = t,
        g.$el.data("ScrollToFixed", g);
        var v, x, b, y = !1, $ = g.$el, w = 0, k = 0, S = -1, T = -1, F = null, C = function(e) {
            $.is(":visible") && (y = !1,
            p())
        }, L = function(e) {
            p()
        }, A = function(e) {
            e = e || window.event,
            e.preventDefault && e.preventDefault(),
            e.returnValue = !1
        };
        g.init = function() {
            g.options = e.extend({}, e.ScrollToFixed.defaultOptions, i),
            g.$el.css("z-index", g.options.zIndex),
            F = e("<div />"),
            v = $.css("position"),
            x = $.css("position"),
            b = $.css("top"),
            s() && g.$el.after(F),
            e(window).bind("resize.ScrollToFixed", C),
            e(window).bind("scroll.ScrollToFixed", L),
            g.options.preFixed && $.bind("preFixed.ScrollToFixed", g.options.preFixed),
            g.options.postFixed && $.bind("postFixed.ScrollToFixed", g.options.postFixed),
            g.options.preUnfixed && $.bind("preUnfixed.ScrollToFixed", g.options.preUnfixed),
            g.options.postUnfixed && $.bind("postUnfixed.ScrollToFixed", g.options.postUnfixed),
            g.options.preAbsolute && $.bind("preAbsolute.ScrollToFixed", g.options.preAbsolute),
            g.options.postAbsolute && $.bind("postAbsolute.ScrollToFixed", g.options.postAbsolute),
            g.options.fixed && $.bind("fixed.ScrollToFixed", g.options.fixed),
            g.options.unfixed && $.bind("unfixed.ScrollToFixed", g.options.unfixed),
            g.options.spacerClass && F.addClass(g.options.spacerClass),
            $.bind("resize.ScrollToFixed", function() {
                F.height($.height())
            }),
            $.bind("scroll.ScrollToFixed", function() {
                $.trigger("preUnfixed.ScrollToFixed"),
                d(),
                $.trigger("unfixed.ScrollToFixed"),
                p()
            }),
            $.bind("detach.ScrollToFixed", function(t) {
                A(t),
                $.trigger("preUnfixed.ScrollToFixed"),
                d(),
                $.trigger("unfixed.ScrollToFixed"),
                e(window).unbind("resize.ScrollToFixed", C),
                e(window).unbind("scroll.ScrollToFixed", L),
                $.unbind(".ScrollToFixed"),
                F.remove(),
                g.$el.removeData("ScrollToFixed")
            }),
            C()
        }
        ,
        g.init()
    }
    ,
    e.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1e3,
        baseClassName: "scroll-to-fixed-fixed"
    },
    e.fn.scrollToFixed = function(t) {
        return this.each(function() {
            new e.ScrollToFixed(this,t)
        })
    }
}(jQuery),
function(e, t, i) {
    "use strict";
    e.fn.backstretch = function(n, r) {
        return (n === i || 0 === n.length) && e.error("No images were supplied for Backstretch"),
        0 === e(t).scrollTop() && t.scrollTo(0, 0),
        this.each(function() {
            var t = e(this)
              , i = t.data("backstretch");
            i && (r = e.extend(i.options, r),
            i.destroy(!0)),
            i = new o(this,n,r),
            t.data("backstretch", i)
        })
    }
    ,
    e.backstretch = function(t, i) {
        return e("body").backstretch(t, i).data("backstretch")
    }
    ,
    e.expr[":"].backstretch = function(t) {
        return e(t).data("backstretch") !== i
    }
    ,
    e.fn.backstretch.defaults = {
        centeredX: !0,
        centeredY: !0,
        duration: 5e3,
        fade: 0
    };
    var n = {
        wrap: {
            left: 0,
            top: 0,
            overflow: "hidden",
            margin: 0,
            padding: 0,
            height: "100%",
            width: "100%",
            zIndex: -999999
        },
        img: {
            position: "absolute",
            //display: "none",
            margin: 0,
            padding: 0,
            border: "none",
            width: "auto",
            height: "auto",
            maxWidth: "none",
            zIndex: -999999
        }
    }
      , o = function(i, o, a) {
        if (this.options = e.extend({}, e.fn.backstretch.defaults, a || {}),
        this.images = e.isArray(o) ? o : [o],
        e.each(this.images, function() {
            e("<img />")[0].src = this
        }),
        this.isBody = i === document.body,
        this.$container = e(i),
        this.$wrap = e('<div class="backstretch"></div>').css(n.wrap).appendTo(this.$container),
        this.$root = this.isBody ? e(r ? t : document) : this.$container,
        !this.isBody) {
            var s = this.$container.css("position")
              , c = this.$container.css("zIndex");
            this.$container.css({
                position: "static" === s ? "relative" : s,
                zIndex: "auto" === c ? 0 : c,
                background: "none"
            }),
            this.$wrap.css({
                zIndex: -999998
            })
        }
        this.$wrap.css({
            position: this.isBody && r ? "fixed" : "absolute"
        }),
        this.index = 0,
        this.show(this.index),
        e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function() {
            this.isBody && 0 === t.pageYOffset && (t.scrollTo(0, 1),
            this.resize())
        }, this))
    };
    o.prototype = {
        resize: function() {
            try {
                var e, i = {
                    left: 0,
                    top: 0
                }, n = this.isBody ? this.$root.width() : this.$root.innerWidth(), o = n, r = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(), a = o / this.$img.data("ratio");
                a >= r ? (e = (a - r) / 2,
                this.options.centeredY && (i.top = "-" + e + "px")) : (a = r,
                o = a * this.$img.data("ratio"),
                e = (o - n) / 2,
                this.options.centeredX && (i.left = "-" + e + "px")),
                this.$wrap.css({
                    width: n,
                    height: r
                }).find("img:not(.deleteable)").css({
                    width: o,
                    height: a
                }).css(i)
            } catch (s) {}
            return this
        },
        show: function(t) {
            if (!(Math.abs(t) > this.images.length - 1)) {
                this.index = t;
                var i = this
                  , o = i.$wrap.find("img").addClass("deleteable")
                  , r = e.Event("backstretch.show", {
                    relatedTarget: i.$container[0]
                });
                return clearInterval(i.interval),
                i.$img = e("<img />").css(n.img).bind("load", function(t) {
                    var n = this.width || e(t.target).width()
                      , a = this.height || e(t.target).height();
                    e(this).data("ratio", n / a),
                    e(this).fadeIn(i.options.speed || i.options.fade, function() {
                        o.remove(),
                        i.paused || i.cycle(),
                        i.$container.trigger(r, i)
                    }),
                    i.resize()
                }).appendTo(i.$wrap),
                i.$img.attr("src", i.images[t]),
                i
            }
        },
        next: function() {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        },
        prev: function() {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        },
        pause: function() {
            return this.paused = !0,
            this
        },
        resume: function() {
            return this.paused = !1,
            this.next(),
            this
        },
        cycle: function() {
            return this.images.length > 1 && (clearInterval(this.interval),
            this.interval = setInterval(e.proxy(function() {
                this.paused || this.next()
            }, this), this.options.duration)),
            this
        },
        destroy: function(i) {
            e(t).off("resize.backstretch orientationchange.backstretch"),
            clearInterval(this.interval),
            i || this.$wrap.remove(),
            this.$container.removeData("backstretch")
        }
    };
    var r = function() {
        var e = navigator.userAgent
          , i = navigator.platform
          , n = e.match(/AppleWebKit\/([0-9]+)/)
          , o = !!n && n[1]
          , r = e.match(/Fennec\/([0-9]+)/)
          , a = !!r && r[1]
          , s = e.match(/Opera Mobi\/([0-9]+)/)
          , c = !!s && s[1]
          , l = e.match(/MSIE ([0-9]+)/)
          , d = !!l && l[1];
        return !((i.indexOf("iPhone") > -1 || i.indexOf("iPad") > -1 || i.indexOf("iPod") > -1) && o && 534 > o || t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini) || s && 7458 > c || e.indexOf("Android") > -1 && o && 533 > o || a && 6 > a || "palmGetResource"in t && o && 534 > o || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || d && 6 >= d)
    }()
}(jQuery, window),
function(e) {
    e.fn.truncatable = function(t) {
        var i = {
            limit: 100,
            more: "...",
            less: !1,
            hideText: "[read less]"
        }
          , t = e.extend(i, t);
        return this.each(function(t) {
            var n = e(this).html().length;
            if (n > i.limit)
                for (var o = e(this).html().substr(i.limit), r = (o.substr(0, 1),
                new RegExp(/^\s+$/)), a = i.limit; n > a; a++) {
                    var s = e(this).html().substr(0, a)
                      , c = e(this).html().substr(a)
                      , l = s.slice(-1);
                    if (r.test(l)) {
                        {
                            var d = '<span class="hiddenText_' + t + '" style="display:none">' + c + "</span>"
                              , u = a - 1;
                            e("<a>").attr("class", "more_" + t)
                        }
                        e(this).html(e(this).html().substr(0, u)).append('<a class="more_' + t + '" href="#">' + i.more + "<a/> " + d),
                        e("a.more_" + t).bind("click", function() {
                            e("span.hiddenText_" + t).show(),
                            e("a.more_" + t).hide(),
                            1 == i.less && (e("span.hiddenText_" + t).append('<a class="hide_' + t + '" href="" title="' + i.hideText + '">' + i.hideText + "</a>"),
                            e("a.hide_" + t).bind("click", function() {
                                return e(".hiddenText_" + t).hide(),
                                e(".more_" + t).show(),
                                e(".hide_" + t).empty(),
                                !1
                            }))
                        }),
                        a = n
                    }
                }
        })
    }
}(jQuery),
function(e) {
    e.cookie = function(t, i, n) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(i)) || null === i || void 0 === i)) {
            if (n = e.extend({}, n),
            (null === i || void 0 === i) && (n.expires = -1),
            "number" == typeof n.expires) {
                var o = n.expires
                  , r = n.expires = new Date;
                r.setDate(r.getDate() + o)
            }
            return i = String(i),
            document.cookie = [encodeURIComponent(t), "=", n.raw ? i : encodeURIComponent(i), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
        }
        n = i || {};
        for (var a, s = n.raw ? function(e) {
            return e
        }
        : decodeURIComponent, c = document.cookie.split("; "), l = 0; a = c[l] && c[l].split("="); l++)
            if (s(a[0]) === t)
                return s(a[1] || "");
        return null
    }
}(jQuery),
function(e, t) {
    "use strict";
    var i = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    console.log('line 527')
    e.fn.imagesLoaded = function(n) {
        console.log('line 529')
        function o() {
            console.log('line 531')
            var t = e(u)
              , i = e(h);
            s && (h.length ? s.reject(l, t, i) : s.resolve(l)),
            e.isFunction(n) && n.call(a, l, t, i)
        }
        function r(t, n) {
            console.log('line 538')
            t.src !== i && -1 === e.inArray(t, d) && (d.push(t),
            n ? h.push(t) : u.push(t),
            e.data(t, "imagesLoaded", {
                isBroken: n,
                src: t.src
            }),
            c && s.notifyWith(e(t), [n, l, e(u), e(h)]),
            l.length === d.length && (setTimeout(o),
            l.unbind(".imagesLoaded")))
        }
        var a = this
          , s = e.isFunction(e.Deferred) ? e.Deferred() : 0
          , c = e.isFunction(s.notify)
          , l = a.find("img").add(a.filter("img"))
          , d = []
          , u = []
          , h = [];
        console.log('line 556')
        return e.isPlainObject(n) && e.each(n, function(e, t) {
            "callback" === e ? n = t : s && s[e](t)
        }),
        l.length ? l.bind("load.imagesLoaded error.imagesLoaded", function(e) {
            r(e.target, "error" === e.type)
        }).each(function(n, o) {
            console.log('line 563')
            var a = o.src
              , s = e.data(o, "imagesLoaded");
            return s && s.src === a ? void r(o, s.isBroken) : o.complete && o.naturalWidth !== t ? void r(o, 0 === o.naturalWidth || 0 === o.naturalHeight) : void ((o.readyState || o.complete) && (o.src = i,
            o.src = a))
        }) : o(),
        s ? s.promise(a) : a
    }
}(jQuery),
function($) {
    $.fn.extend({
        tagdragon: function(e) {
            return this.each(function() {
                $.tagdragonz(this, e)
            })
        },
        tagdragon_configure: function(e) {
            return this.trigger("tagdragon_configure", [e])
        },
        tagdragon_load: function() {
            return this.trigger("tagdragon_load")
        },
        tagdragon_clear: function() {
            return this.trigger("tagdragon_clear")
        }
    }),
    $.tagdragonz = function(input, options) {
        var tagbox = input
          , defaults = {
            field: "tags",
            url: "jsontags.php",
            tagsep: ",",
            enclose: "",
            max: 10,
            cache: !0,
            delay: 500,
            charMin: 1,
            dblClick: !0,
            postData: null,
            visible: !0,
            dataType: "json",
            onRenderItem: function(e) {
                return e.tag
            },
            onSelectItem: function(e) {
                return !0
            },
            onSelectedItem: function(e) {
                return !0
            },
            onLoadList: function(e) {
                return !0
            },
            onLoadedList: function(e) {
                return !0
            }
        };
        options = $.extend(defaults, options),
        input = $(tagbox).find("#" + options.field),
        $(input).attr("autocomplete", "off");
        var lkup = document.createElement("div");
        $(lkup).attr({
            id: "tagbox-lkup"
        }),
        $(lkup, tagbox).show(),
        input.after(lkup);
        var lkuplst = document.createElement("ol");
        $(lkup, tagbox).append(lkuplst);
        var cursor = -1
          , length = 0
          , loading = !1
          , loaded = !1
          , cacheLst = {
            lastSearch: "",
            data: []
        }
          , inserted = !1
          , preg_escape = function(e) {
            return (e + "").replace(/([\/\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, "\\$1")
        }
          , hideLkup = function() {
            $(lkuplst, tagbox).empty(),
            $(lkup, tagbox).hide(),
            loaded = !1,
            inserted = !1
        }
          , insertTag = function(filter, tag) {
            var cur = input.val()
              , words = tag.split(" ").length
              , enclose = words > 1 && options.enclose.length > 0 ? options.enclose : "";
            cur = cur.replace(eval("/" + preg_escape(filter) + "$/i"), enclose + tag + enclose),
            cur = $("<div/>").html(cur).text(),
            input.val(cur),
            cursor = -1
        }
          , parseFilter = function(e) {
            return 0 == options.tagsep.length ? e : (e.indexOf(options.tagsep) > -1 && (e = " " == options.tagsep ? e.substring(e.lastIndexOf(options.tagsep) + 1, e.length) : $.trim(e.substring(e.lastIndexOf(options.tagsep) + 1, e.length))),
            e)
        }
          , addItem = function(val, filter, index) {
            if (options.visible) {
                var row = val;
                val = options.onRenderItem(val, index, length, filter);
                var li = document.createElement("li");
                lkuplst.appendChild(li);
                var aLink = document.createElement("a");
                $(aLink).attr({
                    href: "#"
                }),
                $(aLink, tagbox).text(val),
                $(aLink, tagbox).addClass(index % 2 == 0 ? "td-odd" : "td-even"),
                $(aLink, tagbox).html($(aLink, tagbox).text().replace(eval("/(" + preg_escape(filter) + ")/gi"), "<em>$1</em>")),
                li.appendChild(aLink),
                $(aLink).click(function(e) {
                    options.onSelectItem(row),
                    insertTag(filter, val),
                    options.onSelectedItem(row),
                    e.preventDefault(),
                    cacheLst = {
                        lastSearch: parseFilter(input.val())
                    },
                    hideLkup(),
                    input.focus()
                })
            }
        }
          , clearCache = function() {
            cacheLst = {
                lastSearch: "",
                data: []
            }
        }
          , loadShowList = function(e, t) {
            if ($(lkuplst, tagbox).empty(),
            t) {
                length = t ? t.length : 0,
                cacheLst = {
                    lastSearch: e,
                    data: t
                },
                cursor = -1;
                for (var i = 0; i < t.length && i < options.max; i++)
                    addItem(t[i], e, i);
                options.visible && $(lkup, tagbox).show()
            }
            loading = !1,
            loaded = !0,
            options.onLoadedList(t)
        }
          , loadList = function() {
            inserted = !1;
            var e = parseFilter(input.val());
            return cacheLst.lastSearch == e ? void loadShowList(e, cacheLst.data) : (options.onLoadList(e),
            $(lkuplst, tagbox).empty(),
            void $.ajax({
                type: "POST",
                url: options.url,
                data: $.extend({
                    tag: e,
                    max: options.max
                }, options.postData),
                dataType: options.dataType,
                cache: options.cache,
                success: function(t) {
                    e != parseFilter(input.val()) ? loadList() : loadShowList(e, t)
                },
                error: function(e, t, i) {
                    length = 0,
                    cacheLst = {
                        lastSearch: "",
                        data: []
                    },
                    loading = !1,
                    loaded = !1,
                    options.onLoadedList(!1)
                }
            }))
        }
          , triggerLoad = function() {
            if (inserted)
                return !1;
            var e = parseFilter(input.val());
            e.length >= options.charMin ? (loading = !0,
            setTimeout(function() {
                loadList()
            }, options.delay)) : hideLkup()
        };
        $(input).focus(function(e) {
            cacheLst.lastSearch != parseFilter(input.val()) && triggerLoad()
        }),
        $(input).blur(function(e) {
            setTimeout(function(e) {
                hideLkup()
            }, 250)
        }),
        input.dblclick(function(e) {
            options.dblClick && !loading && triggerLoad()
        }),
        $(lkuplst, tagbox).blur(function(e) {
            hideLkup()
        });
        var handleSpecials = function(e) {
            e = e || window.event;
            var t = e.charCode || e.keyCode;
            if (!loaded)
                return !0;
            switch (t) {
            case 9:
                cursor = length > cursor + 1 ? cursor + 1 : cursor,
                length > cursor && ($("li:eq(" + cursor + ")", tagbox).addClass("hl"),
                cursor - 1 > -1 && $("li:eq(" + (cursor - 1) + ")", tagbox).removeClass("hl"),
                e.preventDefault());
                break;
            case 40:
                cursor = length > cursor + 1 ? cursor + 1 : cursor,
                length > cursor && ($("li:eq(" + cursor + ")", tagbox).addClass("hl"),
                cursor - 1 > -1 && $("li:eq(" + (cursor - 1) + ")", tagbox).removeClass("hl"),
                e.preventDefault());
                break;
            case 38:
                cursor = cursor - 1 >= 0 ? cursor - 1 : cursor,
                cursor >= 0 && ($("li:eq(" + cursor + ")", tagbox).addClass("hl"),
                $("li:eq(" + (cursor + 1) + ")", tagbox).removeClass("hl"),
                e.preventDefault());
                break;
            case 13:
                if (cursor >= 0 && length > cursor) {
                    var i = cacheLst.data[cursor];
                    options.onSelectItem(i),
                    insertTag(parseFilter(input.val()), $("li:eq(" + cursor + ")", tagbox).text()),
                    options.onSelectedItem(i),
                    e.preventDefault(),
                    cacheLst = {
                        lastSearch: parseFilter(input.val())
                    },
                    hideLkup()
                }
                break;
            case 27:
                hideLkup(),
                e.preventDefault()
            }
        }
          , handleKey = function(e) {
            e = e || window.event;
            var t = e.charCode || e.keyCode;
            return 13 == t ? !0 : t > 8 && 46 > t && 32 != t ? !1 : (0 == loading && triggerLoad(),
            void (options.visible && $(lkup, tagbox).show()))
        };
        $(input).keyup(handleKey),
        $(input).keydown(handleSpecials),
        $(tagbox).bind("tagdragon_configure", function() {
            $.extend(options, arguments[1])
        }),
        $(tagbox).bind("tagdragon_load", function() {
            triggerLoad()
        }),
        $(tagbox).bind("tagdragon_clear", function() {
            hideLkup()
        })
    }
}(jQuery),
window.Modernizr = function(e, t, i) {
    function n(e) {
        b.cssText = e
    }
    function o(e, t) {
        return n(y.join(e + ";") + (t || ""))
    }
    function r(e, t) {
        return typeof e === t
    }
    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function s(e, t) {
        for (var n in e) {
            var o = e[n];
            if (!a(o, "-") && b[o] !== i)
                return "pfx" == t ? o : !0
        }
        return !1
    }
    function c(e, t, n) {
        for (var o in e) {
            var a = t[e[o]];
            if (a !== i)
                return n === !1 ? e[o] : r(a, "function") ? a.bind(n || t) : a
        }
        return !1
    }
    function l(e, t, i) {
        var n = e.charAt(0).toUpperCase() + e.slice(1)
          , o = (e + " " + w.join(n + " ") + n).split(" ");
        return r(t, "string") || r(t, "undefined") ? s(o, t) : (o = (e + " " + k.join(n + " ") + n).split(" "),
        c(o, t, i))
    }
    var d, u, h, p = "2.7.1", f = {}, m = !0, g = t.documentElement, v = "modernizr", x = t.createElement(v), b = x.style, y = ({}.toString,
    " -webkit- -moz- -o- -ms- ".split(" ")), $ = "Webkit Moz O ms", w = $.split(" "), k = $.toLowerCase().split(" "), S = {}, T = [], F = T.slice, C = function(e, i, n, o) {
        var r, a, s, c, l = t.createElement("div"), d = t.body, u = d || t.createElement("body");
        if (parseInt(n, 10))
            for (; n--; )
                s = t.createElement("div"),
                s.id = o ? o[n] : v + (n + 1),
                l.appendChild(s);
        return r = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""),
        l.id = v,
        (d ? l : u).innerHTML += r,
        u.appendChild(l),
        d || (u.style.background = "",
        u.style.overflow = "hidden",
        c = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(u)),
        a = i(l, e),
        d ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u),
        g.style.overflow = c),
        !!a
    }, L = function(t) {
        var i = e.matchMedia || e.msMatchMedia;
        if (i)
            return i(t).matches;
        var n;
        return C("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
            n = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }),
        n
    }, A = {}.hasOwnProperty;
    h = r(A, "undefined") || r(A.call, "undefined") ? function(e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    }
    : function(e, t) {
        return A.call(e, t)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var i = F.call(arguments, 1)
          , n = function() {
            if (this instanceof n) {
                var o = function() {};
                o.prototype = t.prototype;
                var r = new o
                  , a = t.apply(r, i.concat(F.call(arguments)));
                return Object(a) === a ? a : r
            }
            return t.apply(e, i.concat(F.call(arguments)))
        };
        return n
    }
    ),
    S.touch = function() {
        var i;
        return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? i = !0 : C(["@media (", y.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            i = 9 === e.offsetTop
        }),
        i
    }
    ,
    S.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    S.rgba = function() {
        return n("background-color:rgba(150,255,150,.5)"),
        a(b.backgroundColor, "rgba")
    }
    ,
    S.backgroundsize = function() {
        return l("backgroundSize")
    }
    ,
    S.borderradius = function() {
        return l("borderRadius")
    }
    ,
    S.boxshadow = function() {
        return l("boxShadow")
    }
    ,
    S.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }
    ,
    S.opacity = function() {
        return o("opacity:.55"),
        /^0.55$/.test(b.opacity)
    }
    ,
    S.csscolumns = function() {
        return l("columnCount")
    }
    ,
    S.cssgradients = function() {
        var e = "background-image:"
          , t = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , i = "linear-gradient(left top,#9f9, white);";
        return n((e + "-webkit- ".split(" ").join(t + e) + y.join(i + e)).slice(0, -e.length)),
        a(b.backgroundImage, "gradient")
    }
    ,
    S.fontface = function() {
        var e;
        return C('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
            var o = t.getElementById("smodernizr")
              , r = o.sheet || o.styleSheet
              , a = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0])
        }),
        e
    }
    ;
    for (var j in S)
        h(S, j) && (u = j.toLowerCase(),
        f[u] = S[j](),
        T.push((f[u] ? "" : "no-") + u));
    return f.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                h(e, n) && f.addTest(n, e[n]);
        else {
            if (e = e.toLowerCase(),
            f[e] !== i)
                return f;
            t = "function" == typeof t ? t() : t,
            "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e),
            f[e] = t
        }
        return f
    }
    ,
    n(""),
    x = d = null,
    function(e, t) {
        function i(e, t) {
            var i = e.createElement("p")
              , n = e.getElementsByTagName("head")[0] || e.documentElement;
            return i.innerHTML = "x<style>" + t + "</style>",
            n.insertBefore(i.lastChild, n.firstChild)
        }
        function n() {
            var e = x.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function o(e) {
            var t = v[e[m]];
            return t || (t = {},
            g++,
            e[m] = g,
            v[g] = t),
            t
        }
        function r(e, i, n) {
            if (i || (i = t),
            d)
                return i.createElement(e);
            n || (n = o(i));
            var r;
            return r = n.cache[e] ? n.cache[e].cloneNode() : f.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e),
            !r.canHaveChildren || p.test(e) || r.tagUrn ? r : n.frag.appendChild(r)
        }
        function a(e, i) {
            if (e || (e = t),
            d)
                return e.createDocumentFragment();
            i = i || o(e);
            for (var r = i.frag.cloneNode(), a = 0, s = n(), c = s.length; c > a; a++)
                r.createElement(s[a]);
            return r
        }
        function s(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(i) {
                return x.shivMethods ? r(i, e, t) : t.createElem(i)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(x, t.frag)
        }
        function c(e) {
            e || (e = t);
            var n = o(e);
            return x.shivCSS && !l && !n.hasCSS && (n.hasCSS = !!i(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            d || s(e, n),
            e
        }
        var l, d, u = "3.7.0", h = e.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, m = "_html5shiv", g = 0, v = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                l = "hidden"in e,
                d = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (i) {
                l = !0,
                d = !0
            }
        }();
        var x = {
            elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: u,
            shivCSS: h.shivCSS !== !1,
            supportsUnknownElements: d,
            shivMethods: h.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: r,
            createDocumentFragment: a
        };
        e.html5 = x,
        c(t)
    }(this, t),
    f._version = p,
    f._prefixes = y,
    f._domPrefixes = k,
    f._cssomPrefixes = w,
    f.mq = L,
    f.testProp = function(e) {
        return s([e])
    }
    ,
    f.testAllProps = l,
    f.testStyles = C,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + T.join(" ") : ""),
    f
}(this, this.document),
function(e, t, i) {
    function n(e) {
        return "[object Function]" == g.call(e)
    }
    function o(e) {
        return "string" == typeof e
    }
    function r() {}
    function a(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }
    function s() {
        var e = v.shift();
        x = 1,
        e ? e.t ? f(function() {
            ("c" == e.t ? h.injectCss : h.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(),
        s()) : x = 0
    }
    function c(e, i, n, o, r, c, l) {
        function d(t) {
            if (!p && a(u.readyState) && (b.r = p = 1,
            !x && s(),
            u.onload = u.onreadystatechange = null,
            t)) {
                "img" != e && f(function() {
                    $.removeChild(u)
                }, 50);
                for (var n in F[i])
                    F[i].hasOwnProperty(n) && F[i][n].onload()
            }
        }
        var l = l || h.errorTimeout
          , u = t.createElement(e)
          , p = 0
          , g = 0
          , b = {
            t: n,
            s: i,
            e: r,
            a: c,
            x: l
        };
        1 === F[i] && (g = 1,
        F[i] = []),
        "object" == e ? u.data = i : (u.src = i,
        u.type = e),
        u.width = u.height = "0",
        u.onerror = u.onload = u.onreadystatechange = function() {
            d.call(this, g)
        }
        ,
        v.splice(o, 0, b),
        "img" != e && (g || 2 === F[i] ? ($.insertBefore(u, y ? null : m),
        f(d, l)) : F[i].push(u))
    }
    function l(e, t, i, n, r) {
        return x = 0,
        t = t || "j",
        o(e) ? c("c" == t ? k : w, e, t, this.i++, i, n, r) : (v.splice(this.i++, 0, e),
        1 == v.length && s()),
        this
    }
    function d() {
        var e = h;
        return e.loader = {
            load: l,
            i: 0
        },
        e
    }
    var u, h, p = t.documentElement, f = e.setTimeout, m = t.getElementsByTagName("script")[0], g = {}.toString, v = [], x = 0, b = "MozAppearance"in p.style, y = b && !!t.createRange().compareNode, $ = y ? p : m.parentNode, p = e.opera && "[object Opera]" == g.call(e.opera), p = !!t.attachEvent && !p, w = b ? "object" : p ? "script" : "img", k = p ? "script" : w, S = Array.isArray || function(e) {
        return "[object Array]" == g.call(e)
    }
    , T = [], F = {}, C = {
        timeout: function(e, t) {
            return t.length && (e.timeout = t[0]),
            e
        }
    };
    h = function(e) {
        function t(e) {
            var t, i, n, e = e.split("!"), o = T.length, r = e.pop(), a = e.length, r = {
                url: r,
                origUrl: r,
                prefixes: e
            };
            for (i = 0; a > i; i++)
                n = e[i].split("="),
                (t = C[n.shift()]) && (r = t(r, n));
            for (i = 0; o > i; i++)
                r = T[i](r);
            return r
        }
        function a(e, o, r, a, s) {
            var c = t(e)
              , l = c.autoCallback;
            c.url.split(".").pop().split("?").shift(),
            c.bypass || (o && (o = n(o) ? o : o[e] || o[a] || o[e.split("/").pop().split("?")[0]]),
            c.instead ? c.instead(e, o, r, a, s) : (F[c.url] ? c.noexec = !0 : F[c.url] = 1,
            r.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : i, c.noexec, c.attrs, c.timeout),
            (n(o) || n(l)) && r.load(function() {
                d(),
                o && o(c.origUrl, s, a),
                l && l(c.origUrl, s, a),
                F[c.url] = 2
            })))
        }
        function s(e, t) {
            function i(e, i) {
                if (e) {
                    if (o(e))
                        i || (u = function() {
                            var e = [].slice.call(arguments);
                            h.apply(this, e),
                            p()
                        }
                        ),
                        a(e, u, t, 0, l);
                    else if (Object(e) === e)
                        for (c in s = function() {
                            var t, i = 0;
                            for (t in e)
                                e.hasOwnProperty(t) && i++;
                            return i
                        }(),
                        e)
                            e.hasOwnProperty(c) && (!i && !--s && (n(u) ? u = function() {
                                var e = [].slice.call(arguments);
                                h.apply(this, e),
                                p()
                            }
                            : u[c] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t),
                                    p()
                                }
                            }(h[c])),
                            a(e[c], u, t, c, l))
                } else
                    !i && p()
            }
            var s, c, l = !!e.test, d = e.load || e.both, u = e.callback || r, h = u, p = e.complete || r;
            i(l ? e.yep : e.nope, !!d),
            d && i(d)
        }
        var c, l, u = this.yepnope.loader;
        if (o(e))
            a(e, 0, u, 0);
        else if (S(e))
            for (c = 0; c < e.length; c++)
                l = e[c],
                o(l) ? a(l, 0, u, 0) : S(l) ? h(l) : Object(l) === l && s(l, u);
        else
            Object(e) === e && s(e, u)
    }
    ,
    h.addPrefix = function(e, t) {
        C[e] = t
    }
    ,
    h.addFilter = function(e) {
        T.push(e)
    }
    ,
    h.errorTimeout = 1e4,
    null == t.readyState && t.addEventListener && (t.readyState = "loading",
    t.addEventListener("DOMContentLoaded", u = function() {
        t.removeEventListener("DOMContentLoaded", u, 0),
        t.readyState = "complete"
    }
    , 0)),
    e.yepnope = d(),
    e.yepnope.executeStack = s,
    e.yepnope.injectJs = function(e, i, n, o, c, l) {
        var d, u, p = t.createElement("script"), o = o || h.errorTimeout;
        p.src = e;
        for (u in n)
            p.setAttribute(u, n[u]);
        i = l ? s : i || r,
        p.onreadystatechange = p.onload = function() {
            !d && a(p.readyState) && (d = 1,
            i(),
            p.onload = p.onreadystatechange = null)
        }
        ,
        f(function() {
            d || (d = 1,
            i(1))
        }, o),
        c ? p.onload() : m.parentNode.insertBefore(p, m)
    }
    ,
    e.yepnope.injectCss = function(e, i, n, o, a, c) {
        var l, o = t.createElement("link"), i = c ? s : i || r;
        o.href = e,
        o.rel = "stylesheet",
        o.type = "text/css";
        for (l in n)
            o.setAttribute(l, n[l]);
        a || (m.parentNode.insertBefore(o, m),
        f(i, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
,
Modernizr.addTest("csspositionsticky", function() {
    var e = "position:"
      , t = "sticky"
      , i = document.createElement("modernizr")
      , n = i.style;
    return n.cssText = e + Modernizr._prefixes.join(t + ";" + e).slice(0, -e.length),
    -1 !== n.position.indexOf(t)
});
var mqMode = {
    name: "l",
    num: 5,
    truncChars: 600,
    mapZoom: 3
};
$(window).resize(function() {
    initViewPort(),
    navLayout(),
    imageLayout()
}),
$(document).ready(function() {
    function e(e) {
        $.get(e, function(e) {
            var t = $("#modal");
            t.html(e),
            $(window).width() > 2 * t.width() && (leftMargin = -(t.width() / 2),
            t.css({
                "margin-left": leftMargin
            })),
            $("#darken").css("filter", "alpha(opacity=70)"),
            $("#darken").show(0),
            t.show(200)
        })
    }
    if (initViewPort(),
    Modernizr.csspositionsticky !== !0 && ($("header.site").scrollToFixed({
        dontSetWidth: !0
    }),
    $(".navprimary").scrollToFixed({
        marginTop: function() {
            return $("header.site").outerHeight()
        },
        dontSetWidth: !0
    })),
    Modernizr.touch && $("html").addClass("touchscroll"),
    Modernizr.addTest("filereader", !!(window.File && window.FileList && window.FileReader)),
    Modernizr.addTest("xhr2", "FormData"in window),
    $(".disabled").live("click", function(e) {
        return !1
    }),
    $(".message").length > 0 && $(".message").slideDown(500).delay(5e3).slideUp(500),
    $(".message").click(function() {
        $(this).slideUp(500)
    }),
    $(".del-img").live("click", function(e) {
        return confirm("When you delete this image, you will lose any karma you may have earned with it. Continue?")
    }),
    $(".del-specie").live("click", function(e) {
        return confirm("Are you sure you want to remove this specie from this image?")
    }),
    $(".del-list").live("click", function(e) {
        return confirm("Are you sure you want to delete this list? You will lose any karma you may have earned with it.")
    }),
    $(".del-reply").click(function(e) {
        return confirm("Are you sure you want to delete this reply? You will lose any karma earned with it!")
    }),
    $(".del-site").click(function(e) {
        return confirm("Are you sure you want to delete this site?")
    }),
    $(".del-topic").click(function(e) {
        return confirm("Are you sure you want to delete this topic? You will lose any karma earned with it and the topic responses will be deleted as well!")
    }),
    $(".del-fav").click(function(e) {
        if (confirm("Are you sure you want to remove this favorite? This will not remove the photo itself, only the entry from your favorites.")) {
            var t = $(this).attr("rel")
              , i = $(this).attr("id")
              , n = basepath + "image/" + i + "/removefavorite/";
            $.ajax({
                cache: !1,
                async: !1,
                url: n,
                type: "POST",
                success: function(e) {
                    "TRUE" == e && $("#img-" + t).fadeOut()
                }
            })
        }
        return !1
    }),
    $(".del-imglist").click(function(e) {
        if (confirm("Are you sure you want to remove this photo from this list? This will not remove the photo itself, just the entry in this list.")) {
            var t = $(this).attr("rel")
              , i = $(this).attr("id")
              , n = basepath + "image/" + t + "/removefromlist/" + i;
            $.ajax({
                cache: !1,
                async: !1,
                url: n,
                type: "POST",
                success: function(e) {
                    "TRUE" == e && $("#img-" + t).fadeOut()
                }
            })
        }
        return !1
    }),
    $(".del-video").click(function(e) {
        if (confirm("Are you sure you want to remove this video?")) {
            var t = $(this).attr("rel");
            location.href = basepath + "video/" + t + "/remove"
        }
        return !1
    }),
    $(".deletefav").click(function(e) {
        return confirm("Are you sure you want to remove this image from your favorites?")
    }),
    $(".deletecomment").click(function(e) {
        return confirm("Are you sure you want to delete this comment?")
    }),
    $(".restore").click(function(e) {
        var t = confirm("Are you sure you would like to restore this version? This will overwrite the current photo details with the photo details of the version you have selected.");
        if (t) {
            var i = "#" + this.id;
            $(i).text("Restoring...")
        }
        return t
    }),
    $("#closeModal").live("click", function(e) {
        $("#darken").hide(0),
        $("#modal").hide(0),
        e.preventDefault()
    }),
    $("*").live("keydown", function(e) {
        27 == e.which && ($("#darken").hide(0),
        $("#modal").hide(0))
    }),
    $(".dlg-img-addtolist").live("click", function() {
        return e(basepath + "image/" + this.rel + "/addtolist"),
        !1
    }),
    $(".dlg-img-report").live("click", function() {
        return e(basepath + "image/" + this.rel + "/report"),
        !1
    }),
    $(".dlg-img-addspecie").live("click", function() {
        return e(basepath + "image/" + this.rel + "/addspecie"),
        !1
    }),
    $(".dlg-img-requestspecie").live("click", function() {
        return e(basepath + "specie/" + this.rel + "/request"),
        !1
    }),
    $(".dlg-img-editlic").live("click", function() {
        return e(basepath + "image/" + this.rel + "/editlicense"),
        !1
    }),
    $(".dlg-tax-edit").live("click", function() {
        return e(basepath + "moderate/edittaxonomyinline/" + this.rel),
        !1
    }),
    $(".dlg-share").live("click", function() {
        return e(basepath + "share"),
        !1
    }),
    $(".dlg-addvideo").click(function() {
        return e(basepath + "specie/" + this.rel + "/addvideo"),
        !1
    }),
    $(".dlg-addcountryvideo").click(function() {
        return e(basepath + "wildlifemap/" + this.rel + "/addvideo"),
        !1
    }),
    $(".dlg-subscribe").click(function() {
        return e(basepath + "forum/" + this.rel + "/subscribe"),
        !1
    }),
    $(".dlg-ft-report").click(function() {
        return e(basepath + "forum/" + this.rel + "/reporttopic"),
        !1
    }),
    $(".dlg-fc-report").click(function() {
        return e(basepath + "forum/" + this.rel + "/reportcomment"),
        !1
    }),
    $(".dlg-usr-report").live("click", function() {
        return e(basepath + "user/" + this.rel + "/report"),
        !1
    }),
    $(".dlg-usr-rights").live("click", function() {
        return e(basepath + "user/" + this.rel + "/setrights"),
        !1
    }),
    $(".dlg-specie-site").live("click", function() {
        return e(basepath + "specie/addsite"),
        !1
    }),
    $(".dlg-guidance").live("click", function() {
        return e(basepath + "mod/guidance"),
        !1
    }),
    $(".dlg-setcountry").live("click", function() {
        return e(basepath + "image/" + this.rel + "/setcountry"),
        !1
    }),
    $(".del-img-admin").live("click", function(t) {
        return confirm("Are you sure you want to delete this photo?") && e(basepath + "image/" + this.rel + "/deleteform"),
        !1
    }),
    $(".img-sec").bind("contextmenu", function(e) {
        return !1
    }),
    initViewPort(),
    navLayout(),
    imageLayout(),
    imageLoad(),
    $.ajaxSetup({
        error: function(e, t, i, n) {
            switch (e.status) {
            case 401:
                window.location = basepath + "signin";
                break;
            case 404:
                window.location = basepath
            }
        }
    }),
    $(".nav-fold").click(function(e) {
        var t = $("#nav-menu-mini");
        t.is(":visible") ? (t.hide(),
        t.remove(),
        $(".hero").show(),
        $(".navsecondary").show(),
        $(".user-header").show(),
        $("html").removeClass("dialog-open"),
        $("body").removeClass("dialog-open"),
        $("#page").removeClass("dialog-open")) : ($("#page").prepend($('<div id="nav-menu-mini"><ul></ul></div>')),
        $(this).closest("nav").find("li:hidden").not(".nav-fold").each(function(e) {
            var t = $(this).clone().appendTo($("#nav-menu-mini ul"))
              , i = t.find("a");
            i.find("span").text(i.data("menu-title"))
        }),
        $(".hero").hide(),
        $(".navsecondary").hide(),
        $(".user-header").hide(),
        $("#nav-menu-mini").show(),
        $("html").addClass("dialog-open"),
        $("body").addClass("dialog-open"),
        $("#page").addClass("dialog-open")),
        e.preventDefault()
    }),
    $(".img-vote").live("click", function(e) {
        if (!$(this).hasClass("disabled")) {
            var t = $(this).attr("rel")
              , i = $(this);
            $.post(basepath + "image/" + t + "/json_vote", function(e) {
                var t = "EC" == e.substring(0, 2).toUpperCase();
                return t ? (alert(e.substring(3, e.length)),
                !1) : ($(i).addClass("disabled"),
                $(i).find("span").text("Voted " + e),
                !0)
            })
        }
        e.preventDefault()
    }),
    $(".img-favorite").live("click", function(e) {
        if (!$(this).hasClass("disabled")) {
            var t = $(this).attr("rel")
              , i = $(this);
            $.post(basepath + "image/" + t + "/json_favorite", function(e) {
                var t = "EC" == e.substring(0, 2).toUpperCase();
                return t ? (alert(e.substring(3, e.length)),
                !1) : ($(i).addClass("disabled"),
                $(i).find("span").text("Favorited " + e),
                !0)
            })
        }
        e.preventDefault()
    }),
    $(".list-vote").live("click", function(e) {
        var t = $(this).attr("rel")
          , i = $(this);
        $.post(basepath + "list/" + t + "/json_vote", function(e) {
            var t = "EC" == e.substring(0, 2).toUpperCase();
            return t ? (alert(e.substring(3, e.length)),
            !1) : ($(i).addClass("disabled"),
            $(i).find("span").text("Voted " + e),
            !0)
        }),
        e.preventDefault()
    }),
    $(".js-truncatable").each(function(e) {
        var t = $(this).data("trunc-" + mqMode.name);
        $(this).truncatable({
            limit: t,
            more: " ..more ",
            less: !0,
            hideText: " ..hide "
        })
    }),
    $("body").data("scrollto") && $("body").data("scrollto").length > 0 && mqMode.num <= 2) {
        var t = $($("body").data("scrollto"));
        $("html, body").animate({
            scrollTop: t.offset().top
        })
    }
});
