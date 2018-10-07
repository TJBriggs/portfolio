var kssNav=function(){var t=$(".kss-sidebar");t.on("click",function(){console.log("clicked"),t.hasClass("active")?t.removeClass("active"):t.addClass("active")})};$(document).ready(function(){kssNav()});var scrollToAnchor=function(){var t="html, body",e=$(window);$("a[href*='#']").click(function(n){n.preventDefault();var i=($(this),this.hash),r=$(i),o=r.offset().top;$(t).stop().animate({scrollTop:o},800,"swing",function(){window.location.hash=i,e.scrollTop(o)})})};$(document).ready(function(){scrollToAnchor()});var kssAccordion=function(){var t=$(".kss-markup");t.hide(),t.wrap('<div class="accordion__content"></div>').before('<a class="accordion__link" href="javascript:void(0)">Expand Code [+]</a>').prev().on("click",function(){var t=$(this),e=t.next();e.slideToggle("slow").toggleClass("active"),e.hasClass("active")?t.text("Collapse Code [-]"):t.text("Expand Code [+]")})};$(document).ready(function(){kssAccordion()}),function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},e=[].slice;!function(t,e){return"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(n){return e(n,t)}):e(t.jQuery,t)}(this,function(n,i){var r,o,a,s,l,c,u,p,d,f,h,m,g,v,y,x;return r=n(i),p=t.call(i,"ontouchstart")>=0,s={horizontal:{},vertical:{}},l=1,u={},c="waypoints-context-id",h="resize.waypoints",m="scroll.waypoints",g=1,v="waypoints-waypoint-ids",y="waypoint",x="waypoints",o=function(){function t(t){var e=this;this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+l++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},this.element[c]=this.id,u[this.id]=this,t.bind(m,function(){var t;return e.didScroll||p?void 0:(e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},i.setTimeout(t,n[x].settings.scrollThrottle))}),t.bind(h,function(){var t;return e.didResize?void 0:(e.didResize=!0,t=function(){return n[x]("refresh"),e.didResize=!1},i.setTimeout(t,n[x].settings.resizeThrottle))})}return t.prototype.doScroll=function(){var t,e=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!p||t.vertical.oldScroll&&t.vertical.newScroll||n[x]("refresh"),n.each(t,function(t,i){var r,o,a;return a=[],o=i.newScroll>i.oldScroll,r=o?i.forward:i.backward,n.each(e.waypoints[t],function(t,e){var n,r;return i.oldScroll<(n=e.offset)&&n<=i.newScroll?a.push(e):i.newScroll<(r=e.offset)&&r<=i.oldScroll?a.push(e):void 0}),a.sort(function(t,e){return t.offset-e.offset}),o||a.reverse(),n.each(a,function(t,e){return e.options.continuous||t===a.length-1?e.trigger([r]):void 0})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,i,r=this;return i=n.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:i?0:e.left,contextScroll:i?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:i?0:e.top,contextScroll:i?0:this.oldScroll.y,contextDimension:i?n[x]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},n.each(t,function(t,e){return n.each(r.waypoints[t],function(t,i){var r,o,a,s,l;return r=i.options.offset,a=i.offset,o=n.isWindow(i.element)?0:i.$element.offset()[e.offsetProp],n.isFunction(r)?r=r.apply(i.element):"string"==typeof r&&(r=parseFloat(r),i.options.offset.indexOf("%")>-1&&(r=Math.ceil(e.contextDimension*r/100))),i.offset=o-e.contextOffset+e.contextScroll-r,i.options.onlyOnScroll&&null!=a||!i.enabled?void 0:null!==a&&a<(s=e.oldScroll)&&s<=i.offset?i.trigger([e.backward]):null!==a&&a>(l=e.oldScroll)&&l>=i.offset?i.trigger([e.forward]):null===a&&e.oldScroll>=i.offset?i.trigger([e.forward]):void 0})})},t.prototype.checkEmpty=function(){return n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)?(this.$element.unbind([h,m].join(" ")),delete u[this.id]):void 0},t}(),a=function(){function t(t,e,i){var r,o;i=n.extend({},n.fn[y].defaults,i),"bottom-in-view"===i.offset&&(i.offset=function(){var t;return t=n[x]("viewportHeight"),n.isWindow(e.element)||(t=e.$element.height()),t-n(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=i.horizontal?"horizontal":"vertical",this.callback=i.handler,this.context=e,this.enabled=i.enabled,this.id="waypoints"+g++,this.offset=null,this.options=i,e.waypoints[this.axis][this.id]=this,s[this.axis][this.id]=this,r=null!=(o=this.element[v])?o:[],r.push(this.id),this.element[v]=r}return t.prototype.trigger=function(t){return this.enabled?(null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0):void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete s[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,i;return(i=t[v])?(e=n.extend({},s.horizontal,s.vertical),n.map(i,function(t){return e[t]})):[]},t}(),f={init:function(t,e){var i;return null==e&&(e={}),null==(i=e.handler)&&(e.handler=t),this.each(function(){var t,i,r,s;return t=n(this),r=null!=(s=e.context)?s:n.fn[y].defaults.context,n.isWindow(r)||(r=t.closest(r)),r=n(r),i=u[r[0][c]],i||(i=new o(r)),new a(t,i,e)}),n[x]("refresh"),this},disable:function(){return f._invoke.call(this,"disable")},enable:function(){return f._invoke.call(this,"enable")},destroy:function(){return f._invoke.call(this,"destroy")},prev:function(t,e){return f._traverse.call(this,t,e,function(t,e,n){return e>0?t.push(n[e-1]):void 0})},next:function(t,e){return f._traverse.call(this,t,e,function(t,e,n){return e<n.length-1?t.push(n[e+1]):void 0})},_traverse:function(t,e,r){var o,a;return null==t&&(t="vertical"),null==e&&(e=i),a=d.aggregate(e),o=[],this.each(function(){var e;return e=n.inArray(this,a[t]),r(o,e,a[t])}),this.pushStack(o)},_invoke:function(t){return this.each(function(){var e;return e=a.getWaypointsByElement(this),n.each(e,function(e,n){return n[t](),!0})}),this}},n.fn[y]=function(){var t,i;return i=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],f[i]?f[i].apply(this,t):n.isFunction(i)?f.init.apply(this,arguments):n.isPlainObject(i)?f.init.apply(this,[null,i]):i?n.error("The "+i+" method does not exist in jQuery Waypoints."):n.error("jQuery Waypoints needs a callback function or handler option.")},n.fn[y].defaults={context:i,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},d={refresh:function(){return n.each(u,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=i.innerHeight)?t:r.height()},aggregate:function(t){var e,i,r;return e=s,t&&(e=null!=(r=u[n(t)[0][c]])?r.waypoints:void 0),e?(i={horizontal:[],vertical:[]},n.each(i,function(t,r){return n.each(e[t],function(t,e){return r.push(e)}),r.sort(function(t,e){return t.offset-e.offset}),i[t]=n.map(r,function(t){return t.element}),i[t]=n.unique(i[t])}),i):[]},above:function(t){return null==t&&(t=i),d._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=i),d._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=i),d._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=i),d._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return d._invoke("enable")},disable:function(){return d._invoke("disable")},destroy:function(){return d._invoke("destroy")},extendFn:function(t,e){return f[t]=e},_invoke:function(t){var e;return e=n.extend({},s.vertical,s.horizontal),n.each(e,function(e,n){return n[t](),!0})},_filter:function(t,e,i){var r,o;return(r=u[n(t)[0][c]])?(o=[],n.each(r.waypoints[e],function(t,e){return i(r,e)?o.push(e):void 0}),o.sort(function(t,e){return t.offset-e.offset}),n.map(o,function(t){return t.element})):[]}},n[x]=function(){var t,n;return n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],d[n]?d[n].apply(null,t):d.aggregate.call(null,n)},n[x].settings={resizeThrottle:100,scrollThrottle:30},r.load(function(){return n[x]("refresh")})})}.call(this),function(t,e,n,i){var r=n("html"),o=n(t),a=n(e),s=n.fancybox=function(){s.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,u=e.createTouch!==i,p=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(t){return t&&"string"===n.type(t)},f=function(t){return d(t)&&0<t.indexOf("%")},h=function(t,e){var n=parseInt(t,10)||0;return e&&f(t)&&(n*=s.getViewport()[e]/100),Math.ceil(n)},m=function(t,e){return h(t,e)+"px"};n.extend(s,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!u,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(t,e){return t&&(n.isPlainObject(e)||(e={}),!1!==s.close(!0))?(n.isArray(t)||(t=p(t)?n(t).get():[t]),n.each(t,function(r,o){var a,l,c,u,f,h={};"object"===n.type(o)&&(o.nodeType&&(o=n(o)),p(o)?(h={href:o.data("fancybox-href")||o.attr("href"),title:o.data("fancybox-title")||o.attr("title"),isDom:!0,element:o},n.metadata&&n.extend(!0,h,o.metadata())):h=o),a=e.href||h.href||(d(o)?o:null),l=e.title!==i?e.title:h.title||"",u=(c=e.content||h.content)?"html":e.type||h.type,!u&&h.isDom&&(u=o.data("fancybox-type"),u||(u=(u=o.prop("class").match(/fancybox\.(\w+)/))?u[1]:null)),d(a)&&(u||(s.isImage(a)?u="image":s.isSWF(a)?u="swf":"#"===a.charAt(0)?u="inline":d(o)&&(u="html",c=o)),"ajax"===u&&(f=a.split(/\s+/,2),a=f.shift(),f=f.shift())),c||("inline"===u?a?c=n(d(a)?a.replace(/.*(?=#[^\s]+$)/,""):a):h.isDom&&(c=o):"html"===u?c=a:!u&&!a&&h.isDom&&(u="inline",c=o)),n.extend(h,{href:a,type:u,content:c,title:l,selector:f}),t[r]=h}),s.opts=n.extend(!0,{},s.defaults,e),e.keys!==i&&(s.opts.keys=e.keys?n.extend({},s.defaults.keys,e.keys):!1),s.group=t,s._start(s.opts.index)):void 0},cancel:function(){var t=s.coming;t&&!1!==s.trigger("onCancel")&&(s.hideLoading(),s.ajaxLoad&&s.ajaxLoad.abort(),s.ajaxLoad=null,s.imgPreload&&(s.imgPreload.onload=s.imgPreload.onerror=null),t.wrap&&t.wrap.stop(!0,!0).trigger("onReset").remove(),s.coming=null,s.current||s._afterZoomOut(t))},close:function(t){s.cancel(),!1!==s.trigger("beforeClose")&&(s.unbindEvents(),s.isActive&&(s.isOpen&&!0!==t?(s.isOpen=s.isOpened=!1,s.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),s.wrap.stop(!0,!0).removeClass("fancybox-opened"),s.transitions[s.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),s._afterZoomOut())))},play:function(t){var e=function(){clearTimeout(s.player.timer)},n=function(){e(),s.current&&s.player.isActive&&(s.player.timer=setTimeout(s.next,s.current.playSpeed))},i=function(){e(),a.unbind(".player"),s.player.isActive=!1,s.trigger("onPlayEnd")};!0===t||!s.player.isActive&&!1!==t?s.current&&(s.current.loop||s.current.index<s.group.length-1)&&(s.player.isActive=!0,a.bind({"onCancel.player beforeClose.player":i,"onUpdate.player":n,"beforeLoad.player":e}),n(),s.trigger("onPlayStart")):i()},next:function(t){var e=s.current;e&&(d(t)||(t=e.direction.next),s.jumpto(e.index+1,t,"next"))},prev:function(t){var e=s.current;e&&(d(t)||(t=e.direction.prev),s.jumpto(e.index-1,t,"prev"))},jumpto:function(t,e,n){var r=s.current;r&&(t=h(t),s.direction=e||r.direction[t>=r.index?"next":"prev"],s.router=n||"jumpto",r.loop&&(0>t&&(t=r.group.length+t%r.group.length),t%=r.group.length),r.group[t]!==i&&(s.cancel(),s._start(t)))},reposition:function(t,e){var i,r=s.current,o=r?r.wrap:null;o&&(i=s._getPosition(e),t&&"scroll"===t.type?(delete i.position,o.stop(!0,!0).animate(i,200)):(o.css(i),r.pos=n.extend({},r.dim,i)))},update:function(t){var e=t&&t.type,n=!e||"orientationchange"===e;n&&(clearTimeout(c),c=null),s.isOpen&&!c&&(c=setTimeout(function(){var i=s.current;i&&!s.isClosing&&(s.wrap.removeClass("fancybox-tmp"),(n||"load"===e||"resize"===e&&i.autoResize)&&s._setDimension(),"scroll"===e&&i.canShrink||s.reposition(t),s.trigger("onUpdate"),c=null)},n&&!u?0:300))},toggle:function(t){s.isOpen&&(s.current.fitToView="boolean"===n.type(t)?t:!s.current.fitToView,u&&(s.wrap.removeAttr("style").addClass("fancybox-tmp"),s.trigger("onUpdate")),s.update())},hideLoading:function(){a.unbind(".loading"),n("#fancybox-loading").remove()},showLoading:function(){var t,e;s.hideLoading(),t=n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"),a.bind("keydown.loading",function(t){27===(t.which||t.keyCode)&&(t.preventDefault(),s.cancel())}),s.defaults.fixed||(e=s.getViewport(),t.css({position:"absolute",top:.5*e.h+e.y,left:.5*e.w+e.x}))},getViewport:function(){var e=s.current&&s.current.locked||!1,n={x:o.scrollLeft(),y:o.scrollTop()};return e?(n.w=e[0].clientWidth,n.h=e[0].clientHeight):(n.w=u&&t.innerWidth?t.innerWidth:o.width(),n.h=u&&t.innerHeight?t.innerHeight:o.height()),n},unbindEvents:function(){s.wrap&&p(s.wrap)&&s.wrap.unbind(".fb"),a.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var t,e=s.current;e&&(o.bind("orientationchange.fb"+(u?"":" resize.fb")+(e.autoCenter&&!e.locked?" scroll.fb":""),s.update),(t=e.keys)&&a.bind("keydown.fb",function(r){var o=r.which||r.keyCode,a=r.target||r.srcElement;return 27===o&&s.coming?!1:void(!r.ctrlKey&&!r.altKey&&!r.shiftKey&&!r.metaKey&&(!a||!a.type&&!n(a).is("[contenteditable]"))&&n.each(t,function(t,a){return 1<e.group.length&&a[o]!==i?(s[t](a[o]),r.preventDefault(),!1):-1<n.inArray(o,a)?(s[t](),r.preventDefault(),!1):void 0}))}),n.fn.mousewheel&&e.mouseWheel&&s.wrap.bind("mousewheel.fb",function(t,i,r,o){for(var a=n(t.target||null),l=!1;a.length&&!l&&!a.is(".fancybox-skin")&&!a.is(".fancybox-wrap");)l=a[0]&&!(a[0].style.overflow&&"hidden"===a[0].style.overflow)&&(a[0].clientWidth&&a[0].scrollWidth>a[0].clientWidth||a[0].clientHeight&&a[0].scrollHeight>a[0].clientHeight),a=n(a).parent();0!==i&&!l&&1<s.group.length&&!e.canShrink&&(o>0||r>0?s.prev(o>0?"down":"left"):(0>o||0>r)&&s.next(0>o?"up":"right"),t.preventDefault())}))},trigger:function(t,e){var i,r=e||s.coming||s.current;if(r){if(n.isFunction(r[t])&&(i=r[t].apply(r,Array.prototype.slice.call(arguments,1))),!1===i)return!1;r.helpers&&n.each(r.helpers,function(e,i){i&&s.helpers[e]&&n.isFunction(s.helpers[e][t])&&s.helpers[e][t](n.extend(!0,{},s.helpers[e].defaults,i),r)}),a.trigger(t)}},isImage:function(t){return d(t)&&t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(t){return d(t)&&t.match(/\.(swf)((\?|#).*)?$/i)},_start:function(t){var e,i,r={};if(t=h(t),e=s.group[t]||null,!e)return!1;if(r=n.extend(!0,{},s.opts,e),e=r.margin,i=r.padding,"number"===n.type(e)&&(r.margin=[e,e,e,e]),"number"===n.type(i)&&(r.padding=[i,i,i,i]),r.modal&&n.extend(!0,r,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),r.autoSize&&(r.autoWidth=r.autoHeight=!0),"auto"===r.width&&(r.autoWidth=!0),"auto"===r.height&&(r.autoHeight=!0),r.group=s.group,r.index=t,s.coming=r,!1===s.trigger("beforeLoad"))s.coming=null;else{if(i=r.type,e=r.href,!i)return s.coming=null,s.current&&s.router&&"jumpto"!==s.router?(s.current.index=t,s[s.router](s.direction)):!1;if(s.isActive=!0,("image"===i||"swf"===i)&&(r.autoHeight=r.autoWidth=!1,r.scrolling="visible"),"image"===i&&(r.aspectRatio=!0),"iframe"===i&&u&&(r.scrolling="scroll"),r.wrap=n(r.tpl.wrap).addClass("fancybox-"+(u?"mobile":"desktop")+" fancybox-type-"+i+" fancybox-tmp "+r.wrapCSS).appendTo(r.parent||"body"),n.extend(r,{skin:n(".fancybox-skin",r.wrap),outer:n(".fancybox-outer",r.wrap),inner:n(".fancybox-inner",r.wrap)}),n.each(["Top","Right","Bottom","Left"],function(t,e){r.skin.css("padding"+e,m(r.padding[t]))}),s.trigger("onReady"),"inline"===i||"html"===i){if(!r.content||!r.content.length)return s._error("content")}else if(!e)return s._error("href");"image"===i?s._loadImage():"ajax"===i?s._loadAjax():"iframe"===i?s._loadIframe():s._afterLoad()}},_error:function(t){n.extend(s.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:t,content:s.coming.tpl.error}),s._afterLoad()},_loadImage:function(){var t=s.imgPreload=new Image;t.onload=function(){this.onload=this.onerror=null,s.coming.width=this.width/s.opts.pixelRatio,s.coming.height=this.height/s.opts.pixelRatio,s._afterLoad()},t.onerror=function(){this.onload=this.onerror=null,s._error("image")},t.src=s.coming.href,!0!==t.complete&&s.showLoading()},_loadAjax:function(){var t=s.coming;s.showLoading(),s.ajaxLoad=n.ajax(n.extend({},t.ajax,{url:t.href,error:function(t,e){s.coming&&"abort"!==e?s._error("ajax",t):s.hideLoading()},success:function(e,n){"success"===n&&(t.content=e,s._afterLoad())}}))},_loadIframe:function(){var t=s.coming,e=n(t.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",u?"auto":t.iframe.scrolling).attr("src",t.href);n(t.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(t){}}),t.iframe.preload&&(s.showLoading(),e.one("load",function(){n(this).data("ready",1),u||n(this).bind("load.fb",s.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),s._afterLoad()})),t.content=e.appendTo(t.inner),t.iframe.preload||s._afterLoad()},_preloadImages:function(){var t,e,n=s.group,i=s.current,r=n.length,o=i.preload?Math.min(i.preload,r-1):0;for(e=1;o>=e;e+=1)t=n[(i.index+e)%r],"image"===t.type&&t.href&&((new Image).src=t.href)},_afterLoad:function(){var t,e,i,r,o,a=s.coming,l=s.current;if(s.hideLoading(),a&&!1!==s.isActive)if(!1===s.trigger("afterLoad",a,l))a.wrap.stop(!0).trigger("onReset").remove(),s.coming=null;else{switch(l&&(s.trigger("beforeChange",l),l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),s.unbindEvents(),t=a.content,e=a.type,i=a.scrolling,n.extend(s,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:l}),r=a.href,e){case"inline":case"ajax":case"html":a.selector?t=n("<div>").html(t).find(a.selector):p(t)&&(t.data("fancybox-placeholder")||t.data("fancybox-placeholder",n('<div class="fancybox-placeholder"></div>').insertAfter(t).hide()),t=t.show().detach(),a.wrap.bind("onReset",function(){n(this).find(t).length&&t.hide().replaceAll(t.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":t=a.tpl.image.replace("{href}",r);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>',o="",n.each(a.swf,function(e,n){t+='<param name="'+e+'" value="'+n+'"></param>',o+=" "+e+'="'+n+'"'}),t+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+o+"></embed></object>"}(!p(t)||!t.parent().is(a.inner))&&a.inner.append(t),s.trigger("beforeShow"),a.inner.css("overflow","yes"===i?"scroll":"no"===i?"hidden":i),s._setDimension(),s.reposition(),s.isOpen=!1,s.coming=null,s.bindEvents(),s.isOpened?l.prevMethod&&s.transitions[l.prevMethod]():n(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(),s.transitions[s.isOpened?a.nextMethod:a.openMethod](),s._preloadImages()}},_setDimension:function(){var t,e,i,r,o,a,l,c,u,p=s.getViewport(),d=0,g=!1,v=!1,g=s.wrap,y=s.skin,x=s.inner,w=s.current,v=w.width,b=w.height,C=w.minWidth,S=w.minHeight,k=w.maxWidth,I=w.maxHeight,T=w.scrolling,P=w.scrollOutside?w.scrollbarWidth:0,$=w.margin,A=h($[1]+$[3]),_=h($[0]+$[2]);if(g.add(y).add(x).width("auto").height("auto").removeClass("fancybox-tmp"),$=h(y.outerWidth(!0)-y.width()),t=h(y.outerHeight(!0)-y.height()),e=A+$,i=_+t,r=f(v)?(p.w-e)*h(v)/100:v,o=f(b)?(p.h-i)*h(b)/100:b,"iframe"===w.type){if(u=w.content,w.autoHeight&&1===u.data("ready"))try{u[0].contentWindow.document.location&&(x.width(r).height(9999),a=u.contents().find("body"),P&&a.css("overflow-x","hidden"),o=a.outerHeight(!0))}catch(M){}}else(w.autoWidth||w.autoHeight)&&(x.addClass("fancybox-tmp"),w.autoWidth||x.width(r),w.autoHeight||x.height(o),w.autoWidth&&(r=x.width()),w.autoHeight&&(o=x.height()),x.removeClass("fancybox-tmp"));if(v=h(r),b=h(o),c=r/o,C=h(f(C)?h(C,"w")-e:C),k=h(f(k)?h(k,"w")-e:k),S=h(f(S)?h(S,"h")-i:S),I=h(f(I)?h(I,"h")-i:I),a=k,l=I,w.fitToView&&(k=Math.min(p.w-e,k),I=Math.min(p.h-i,I)),e=p.w-A,_=p.h-_,w.aspectRatio?(v>k&&(v=k,b=h(v/c)),b>I&&(b=I,v=h(b*c)),C>v&&(v=C,b=h(v/c)),S>b&&(b=S,v=h(b*c))):(v=Math.max(C,Math.min(v,k)),w.autoHeight&&"iframe"!==w.type&&(x.width(v),b=x.height()),b=Math.max(S,Math.min(b,I))),w.fitToView)if(x.width(v).height(b),g.width(v+$),p=g.width(),A=g.height(),w.aspectRatio)for(;(p>e||A>_)&&v>C&&b>S&&!(19<d++);)b=Math.max(S,Math.min(I,b-10)),v=h(b*c),C>v&&(v=C,b=h(v/c)),v>k&&(v=k,b=h(v/c)),x.width(v).height(b),g.width(v+$),p=g.width(),A=g.height();else v=Math.max(C,Math.min(v,v-(p-e))),b=Math.max(S,Math.min(b,b-(A-_)));P&&"auto"===T&&o>b&&e>v+$+P&&(v+=P),x.width(v).height(b),g.width(v+$),p=g.width(),A=g.height(),g=(p>e||A>_)&&v>C&&b>S,v=w.aspectRatio?a>v&&l>b&&r>v&&o>b:(a>v||l>b)&&(r>v||o>b),n.extend(w,{dim:{width:m(p),height:m(A)},origWidth:r,origHeight:o,canShrink:g,canExpand:v,wPadding:$,hPadding:t,wrapSpace:A-y.outerHeight(!0),skinSpace:y.height()-b}),!u&&w.autoHeight&&b>S&&I>b&&!v&&x.height("auto")},_getPosition:function(t){var e=s.current,n=s.getViewport(),i=e.margin,r=s.wrap.width()+i[1]+i[3],o=s.wrap.height()+i[0]+i[2],i={position:"absolute",top:i[0],left:i[3]};return e.autoCenter&&e.fixed&&!t&&o<=n.h&&r<=n.w?i.position="fixed":e.locked||(i.top+=n.y,i.left+=n.x),i.top=m(Math.max(i.top,i.top+(n.h-o)*e.topRatio)),i.left=m(Math.max(i.left,i.left+(n.w-r)*e.leftRatio)),i},_afterZoomIn:function(){var t=s.current;t&&(s.isOpen=s.isOpened=!0,s.wrap.css("overflow","visible").addClass("fancybox-opened"),s.update(),(t.closeClick||t.nextClick&&1<s.group.length)&&s.inner.css("cursor","pointer").bind("click.fb",function(e){!n(e.target).is("a")&&!n(e.target).parent().is("a")&&(e.preventDefault(),s[t.closeClick?"close":"next"]())}),t.closeBtn&&n(t.tpl.closeBtn).appendTo(s.skin).bind("click.fb",function(t){t.preventDefault(),s.close()}),t.arrows&&1<s.group.length&&((t.loop||0<t.index)&&n(t.tpl.prev).appendTo(s.outer).bind("click.fb",s.prev),(t.loop||t.index<s.group.length-1)&&n(t.tpl.next).appendTo(s.outer).bind("click.fb",s.next)),s.trigger("afterShow"),t.loop||t.index!==t.group.length-1?s.opts.autoPlay&&!s.player.isActive&&(s.opts.autoPlay=!1,s.play()):s.play(!1))},_afterZoomOut:function(t){t=t||s.current,n(".fancybox-wrap").trigger("onReset").remove(),n.extend(s,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),s.trigger("afterClose",t)}}),s.transitions={getOrigPosition:function(){var t=s.current,e=t.element,n=t.orig,i={},r=50,o=50,a=t.hPadding,l=t.wPadding,c=s.getViewport();return!n&&t.isDom&&e.is(":visible")&&(n=e.find("img:first"),n.length||(n=e)),p(n)?(i=n.offset(),n.is("img")&&(r=n.outerWidth(),o=n.outerHeight())):(i.top=c.y+(c.h-o)*t.topRatio,i.left=c.x+(c.w-r)*t.leftRatio),("fixed"===s.wrap.css("position")||t.locked)&&(i.top-=c.y,i.left-=c.x),i={top:m(i.top-a*t.topRatio),left:m(i.left-l*t.leftRatio),width:m(r+l),height:m(o+a)}},step:function(t,e){var n,i,r=e.prop;i=s.current;var o=i.wrapSpace,a=i.skinSpace;("width"===r||"height"===r)&&(n=e.end===e.start?1:(t-e.start)/(e.end-e.start),s.isClosing&&(n=1-n),i="width"===r?i.wPadding:i.hPadding,i=t-i,s.skin[r](h("width"===r?i:i-o*n)),s.inner[r](h("width"===r?i:i-o*n-a*n)))},zoomIn:function(){var t=s.current,e=t.pos,i=t.openEffect,r="elastic"===i,o=n.extend({opacity:1},e);delete o.position,r?(e=this.getOrigPosition(),t.openOpacity&&(e.opacity=.1)):"fade"===i&&(e.opacity=.1),s.wrap.css(e).animate(o,{duration:"none"===i?0:t.openSpeed,easing:t.openEasing,step:r?this.step:null,complete:s._afterZoomIn})},zoomOut:function(){var t=s.current,e=t.closeEffect,n="elastic"===e,i={opacity:.1};n&&(i=this.getOrigPosition(),t.closeOpacity&&(i.opacity=.1)),s.wrap.animate(i,{duration:"none"===e?0:t.closeSpeed,easing:t.closeEasing,step:n?this.step:null,complete:s._afterZoomOut})},changeIn:function(){var t,e=s.current,n=e.nextEffect,i=e.pos,r={opacity:1},o=s.direction;i.opacity=.1,"elastic"===n&&(t="down"===o||"up"===o?"top":"left","down"===o||"right"===o?(i[t]=m(h(i[t])-200),r[t]="+=200px"):(i[t]=m(h(i[t])+200),r[t]="-=200px")),"none"===n?s._afterZoomIn():s.wrap.css(i).animate(r,{duration:e.nextSpeed,easing:e.nextEasing,complete:s._afterZoomIn})},changeOut:function(){var t=s.previous,e=t.prevEffect,i={opacity:.1},r=s.direction;"elastic"===e&&(i["down"===r||"up"===r?"top":"left"]=("up"===r||"left"===r?"-":"+")+"=200px"),t.wrap.animate(i,{duration:"none"===e?0:t.prevSpeed,easing:t.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},s.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!u,fixed:!0},overlay:null,fixed:!1,el:n("html"),create:function(t){t=n.extend({},this.defaults,t),this.overlay&&this.close(),this.overlay=n('<div class="fancybox-overlay"></div>').appendTo(s.coming?s.coming.parent:t.parent),this.fixed=!1,t.fixed&&s.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(t){var e=this;t=n.extend({},this.defaults,t),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(t),this.fixed||(o.bind("resize.overlay",n.proxy(this.update,this)),this.update()),t.closeClick&&this.overlay.bind("click.overlay",function(t){return n(t.target).hasClass("fancybox-overlay")?(s.isActive?s.close():e.close(),!1):void 0}),this.overlay.css(t.css).show()},close:function(){var t,e;o.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(n(".fancybox-margin").removeClass("fancybox-margin"),t=o.scrollTop(),e=o.scrollLeft(),this.el.removeClass("fancybox-lock"),o.scrollTop(t).scrollLeft(e)),n(".fancybox-overlay").remove().hide(),n.extend(this,{overlay:null,fixed:!1})},update:function(){var t,n="100%";this.overlay.width(n).height("100%"),l?(t=Math.max(e.documentElement.offsetWidth,e.body.offsetWidth),a.width()>t&&(n=a.width())):a.width()>o.width()&&(n=a.width()),this.overlay.width(n).height(a.height())},onReady:function(t,e){var i=this.overlay;n(".fancybox-overlay").stop(!0,!0),i||this.create(t),t.locked&&this.fixed&&e.fixed&&(i||(this.margin=a.height()>o.height()?n("html").css("margin-right").replace("px",""):!1),e.locked=this.overlay.append(e.wrap),e.fixed=!1),!0===t.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(t,e){var i,r;e.locked&&(!1!==this.margin&&(n("*").filter(function(){return"fixed"===n(this).css("position")&&!n(this).hasClass("fancybox-overlay")&&!n(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),i=o.scrollTop(),r=o.scrollLeft(),this.el.addClass("fancybox-lock"),o.scrollTop(i).scrollLeft(r)),this.open(t)},onUpdate:function(){this.fixed||this.update()},afterClose:function(t){this.overlay&&!s.coming&&this.overlay.fadeOut(t.speedOut,n.proxy(this.close,this))}},s.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(t){var e=s.current,i=e.title,r=t.type;if(n.isFunction(i)&&(i=i.call(e.element,e)),d(i)&&""!==n.trim(i)){switch(e=n('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+i+"</div>"),r){case"inside":r=s.skin;break;case"outside":r=s.wrap;break;case"over":r=s.inner;break;default:r=s.skin,e.appendTo("body"),l&&e.width(e.width()),e.wrapInner('<span class="child"></span>'),s.current.margin[2]+=Math.abs(h(e.css("margin-bottom")))}e["top"===t.position?"prependTo":"appendTo"](r)}}},n.fn.fancybox=function(t){var e,i=n(this),r=this.selector||"",o=function(o){var a,l,c=n(this).blur(),u=e;!o.ctrlKey&&!o.altKey&&!o.shiftKey&&!o.metaKey&&!c.is(".fancybox-wrap")&&(a=t.groupAttr||"data-fancybox-group",l=c.attr(a),l||(a="rel",l=c.get(0)[a]),l&&""!==l&&"nofollow"!==l&&(c=r.length?n(r):i,c=c.filter("["+a+'="'+l+'"]'),u=c.index(this)),t.index=u,!1!==s.open(c,t)&&o.preventDefault())};return t=t||{},e=t.index||0,r&&!1!==t.live?a.undelegate(r,"click.fb-start").delegate(r+":not('.fancybox-item, .fancybox-nav')","click.fb-start",o):i.unbind("click.fb-start").bind("click.fb-start",o),this.filter("[data-fancybox-start=1]").trigger("click"),this},a.ready(function(){var e,o;if(n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var t=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),e=t.children(),e=e.innerWidth()-e.height(99).innerWidth();return t.remove(),e}),n.support.fixedPosition===i){e=n.support,o=n('<div style="position:fixed;top:20px;"></div>').appendTo("body");var a=20===o[0].offsetTop||15===o[0].offsetTop;o.remove(),e.fixedPosition=a}n.extend(s.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")}),e=n(t).width(),r.addClass("fancybox-lock-test"),o=n(t).width(),r.removeClass("fancybox-lock-test"),n("<style type='text/css'>.fancybox-margin{margin-right:"+(o-e)+"px;}</style>").appendTo("head")})}(window,document,jQuery),function(t){"use strict";var e=t.fancybox,n=function(e,n,i){return i=i||"","object"===t.type(i)&&(i=t.param(i,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),i.length&&(e+=(e.indexOf("?")>0?"&":"?")+i),e};e.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"
},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(e,n,i){return i.swf.flashVars="playerVars="+t.param(n,!0),"//www.metacafe.com/fplayer/"+e[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[1]+"/"+t[3]+t[4]+"&output="+(t[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(e,i){var r,o,a,s,l=i.href||"",c=!1;for(r in e)if(e.hasOwnProperty(r)&&(o=e[r],a=l.match(o.matcher))){c=o.type,s=t.extend(!0,{},o.params,i[r]||(t.isPlainObject(e[r])?e[r].params:null)),l="function"===t.type(o.url)?o.url.call(this,a,s,i):n(o.url,a,s);break}c&&(i.href=l,i.type=c,i.autoHeight=!1)}}}(jQuery),"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,n){var i={init:function(e,n){var i=this;i.$elem=t(n),i.options=t.extend({},t.fn.owlCarousel.options,i.$elem.data(),e),i.userOptions=e,i.loadContent()},loadContent:function(){function e(t){var e,n="";if("function"==typeof i.options.jsonSuccess)i.options.jsonSuccess.apply(this,[t]);else{for(e in t.owl)t.owl.hasOwnProperty(e)&&(n+=t.owl[e].item);i.$elem.html(n)}i.logIn()}var n,i=this;"function"==typeof i.options.beforeInit&&i.options.beforeInit.apply(this,[i.$elem]),"string"==typeof i.options.jsonPath?(n=i.options.jsonPath,t.getJSON(n,e)):i.logIn()},logIn:function(){var t=this;t.$elem.data("owl-originalStyles",t.$elem.attr("style")),t.$elem.data("owl-originalClasses",t.$elem.attr("class")),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible=null,t.setVars()},setVars:function(){var t=this;return 0===t.$elem.children().length?!1:(t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),void t.onStartup())},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),t.options.transitionStyle!==!1&&t.transitionTypes(t.options.transitionStyle),t.options.autoPlay===!0&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;t.options.lazyLoad===!0&&t.lazyLoad(),t.options.autoHeight===!0&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(){var t=this;e.setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var t=this;return t.$elem.is(":visible")!==!1?!1:(t.$elem.css({opacity:0}),e.clearInterval(t.autoPlayInterval),e.clearInterval(t.checkVisible),void(t.checkVisible=e.setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),e.clearInterval(t.checkVisible))},500)))},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),n=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),n||t.$elem.addClass(t.options.theme)},updateItems:function(){var e,n,i=this;if(i.options.responsive===!1)return!1;if(i.options.singleItem===!0)return i.options.items=i.orignalItems=1,i.options.itemsCustom=!1,i.options.itemsDesktop=!1,i.options.itemsDesktopSmall=!1,i.options.itemsTablet=!1,i.options.itemsTabletSmall=!1,i.options.itemsMobile=!1,!1;if(e=t(i.options.responsiveBaseWidth).width(),e>(i.options.itemsDesktop[0]||i.orignalItems)&&(i.options.items=i.orignalItems),i.options.itemsCustom!==!1)for(i.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.options.itemsCustom.length;n+=1)i.options.itemsCustom[n][0]<=e&&(i.options.items=i.options.itemsCustom[n][1]);else e<=i.options.itemsDesktop[0]&&i.options.itemsDesktop!==!1&&(i.options.items=i.options.itemsDesktop[1]),e<=i.options.itemsDesktopSmall[0]&&i.options.itemsDesktopSmall!==!1&&(i.options.items=i.options.itemsDesktopSmall[1]),e<=i.options.itemsTablet[0]&&i.options.itemsTablet!==!1&&(i.options.items=i.options.itemsTablet[1]),e<=i.options.itemsTabletSmall[0]&&i.options.itemsTabletSmall!==!1&&(i.options.items=i.options.itemsTabletSmall[1]),e<=i.options.itemsMobile[0]&&i.options.itemsMobile!==!1&&(i.options.items=i.options.itemsMobile[1]);i.options.items>i.itemsAmount&&i.options.itemsScaleUp===!0&&(i.options.items=i.itemsAmount)},response:function(){var n,i,r=this;return r.options.responsive!==!0?!1:(i=t(e).width(),r.resizer=function(){t(e).width()!==i&&(r.options.autoPlay!==!1&&e.clearInterval(r.autoPlayInterval),e.clearTimeout(n),n=e.setTimeout(function(){i=t(e).width(),r.updateVars()},r.options.responsiveRefreshRate))},void t(e).resize(r.resizer))},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),t.options.autoPlay!==!1&&t.checkAp()},appendItemsSizes:function(){var e=this,n=0,i=e.itemsAmount-e.options.items;e.$owlItems.each(function(r){var o=t(this);o.css({width:e.itemWidth}).data("owl-item",Number(r)),(r%e.options.items===0||r===i)&&(r>i||(n+=1)),o.data("owl-roundPages",n)})},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,left:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=-1*(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth);return t.options.items>t.itemsAmount?(t.maximumItem=0,e=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var e,n,i,r=this,o=0,a=0;for(r.positionsInArray=[0],r.pagesInArray=[],e=0;e<r.itemsAmount;e+=1)a+=r.itemWidth,r.positionsInArray.push(-a),r.options.scrollPerPage===!0&&(n=t(r.$owlItems[e]),i=n.data("owl-roundPages"),i!==o&&(r.pagesInArray[o]=r.positionsInArray[e],o=i))},buildControls:function(){var e=this;(e.options.navigation===!0||e.options.pagination===!0)&&(e.owlControls=t('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)),e.options.pagination===!0&&e.buildPagination(),e.options.navigation===!0&&e.buildButtons()},buildButtons:function(){var e=this,n=t('<div class="owl-buttons"/>');e.owlControls.append(n),e.buttonPrev=t("<div/>",{"class":"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=t("<div/>",{"class":"owl-next",html:e.options.navigationText[1]||""}),n.append(e.buttonPrev).append(e.buttonNext),n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault(),t(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=t('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault(),Number(t(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(t(this).data("owl-page")),!0)})},updatePagination:function(){var e,n,i,r,o,a,s=this;if(s.options.pagination===!1)return!1;for(s.paginationWrapper.html(""),e=0,n=s.itemsAmount-s.itemsAmount%s.options.items,r=0;r<s.itemsAmount;r+=1)r%s.options.items===0&&(e+=1,n===r&&(i=s.itemsAmount-s.options.items),o=t("<div/>",{"class":"owl-page"}),a=t("<span></span>",{text:s.options.paginationNumbers===!0?e:"","class":s.options.paginationNumbers===!0?"owl-numbers":""}),o.append(a),o.data("owl-page",n===r?i:r),o.data("owl-roundPages",e),s.paginationWrapper.append(o));s.checkPagination()},checkPagination:function(){var e=this;return e.options.pagination===!1?!1:void e.paginationWrapper.find(".owl-page").each(function(){t(this).data("owl-roundPages")===t(e.$owlItems[e.currentItem]).data("owl-roundPages")&&(e.paginationWrapper.find(".owl-page").removeClass("active"),t(this).addClass("active"))})},checkNavigation:function(){var t=this;return t.options.navigation===!1?!1:void(t.options.rewindNav===!1&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled"))))},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){var t=this;t.owlControls&&t.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem>e.maximumItem+(e.options.scrollPerPage===!0?e.options.items-1:0)){if(e.options.rewindNav!==!0)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(e.options.scrollPerPage===!0&&e.currentItem>0&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem<0){if(e.options.rewindNav!==!0)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,n,i){var r,o=this;return o.isTransition?!1:("function"==typeof o.options.beforeMove&&o.options.beforeMove.apply(this,[o.$elem]),t>=o.maximumItem?t=o.maximumItem:0>=t&&(t=0),o.currentItem=o.owl.currentItem=t,o.options.transitionStyle!==!1&&"drag"!==i&&1===o.options.items&&o.browser.support3d===!0?(o.swapSpeed(0),o.browser.support3d===!0?o.transition3d(o.positionsInArray[t]):o.css2slide(o.positionsInArray[t],1),o.afterGo(),o.singleItemTransition(),!1):(r=o.positionsInArray[t],o.browser.support3d===!0?(o.isCss3Finish=!1,n===!0?(o.swapSpeed("paginationSpeed"),e.setTimeout(function(){o.isCss3Finish=!0},o.options.paginationSpeed)):"rewind"===n?(o.swapSpeed(o.options.rewindSpeed),e.setTimeout(function(){o.isCss3Finish=!0},o.options.rewindSpeed)):(o.swapSpeed("slideSpeed"),e.setTimeout(function(){o.isCss3Finish=!0},o.options.slideSpeed)),o.transition3d(r)):n===!0?o.css2slide(r,o.options.paginationSpeed):"rewind"===n?o.css2slide(r,o.options.rewindSpeed):o.css2slide(r,o.options.slideSpeed),void o.afterGo()))},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||-1===t?t=e.maximumItem:0>=t&&(t=0),e.swapSpeed(0),e.browser.support3d===!0?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),t.options.autoPlay!==!1&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){var t=this;t.apStatus="stop",e.clearInterval(t.autoPlayInterval)},checkAp:function(){var t=this;"stop"!==t.apStatus&&t.play()},play:function(){var t=this;return t.apStatus="play",t.options.autoPlay===!1?!1:(e.clearInterval(t.autoPlayInterval),void(t.autoPlayInterval=e.setInterval(function(){t.next(!0)},t.options.autoPlay)))},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){var e=this;e.$owlWrapper.css(e.doTranslate(t))},css2move:function(t){var e=this;e.$owlWrapper.css({left:t})},css2slide:function(t,e){var n=this;n.isCssFinish=!1,n.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||n.options.slideSpeed,complete:function(){n.isCssFinish=!0}})},checkBrowser:function(){var t,i,r,o,a=this,s="translate3d(0px, 0px, 0px)",l=n.createElement("div");l.style.cssText="  -moz-transform:"+s+"; -ms-transform:"+s+"; -o-transform:"+s+"; -webkit-transform:"+s+"; transform:"+s,t=/translate3d\(0px, 0px, 0px\)/g,i=l.style.cssText.match(t),r=null!==i&&1===i.length,o="ontouchstart"in e||e.navigator.msMaxTouchPoints,a.browser={support3d:r,isTouch:o}},moveEvents:function(){var t=this;(t.options.mouseDrag!==!1||t.options.touchDrag!==!1)&&(t.gestures(),t.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},t.options.mouseDrag===!0&&t.options.touchDrag===!0?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:t.options.mouseDrag===!1&&t.options.touchDrag===!0?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:t.options.mouseDrag===!0&&t.options.touchDrag===!1&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){var e=this;e.$elem.on("dragstart.owl",function(t){t.preventDefault()}),e.$elem.on("mousedown.disableTextSelect",function(e){return t(e.target).is("input, textarea, select, option")})},gestures:function(){function i(t){if(void 0!==t.touches)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(void 0===t.touches){if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY};if(void 0===t.pageX)return{x:t.clientX,y:t.clientY}}}function r(e){"on"===e?(t(n).on(l.ev_types.move,a),t(n).on(l.ev_types.end,s)):"off"===e&&(t(n).off(l.ev_types.move),t(n).off(l.ev_types.end))}function o(n){var o,a=n.originalEvent||n||e.event;if(3===a.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(l.isCssFinish===!1&&!l.options.dragBeforeAnimFinish)return!1;if(l.isCss3Finish===!1&&!l.options.dragBeforeAnimFinish)return!1;l.options.autoPlay!==!1&&e.clearInterval(l.autoPlayInterval),l.browser.isTouch===!0||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,t(this).css(l.removeTransition()),o=t(this).position(),c.relativePos=o.left,c.offsetX=i(a).x-o.left,c.offsetY=i(a).y-o.top,r("on"),c.sliding=!1,c.targetElement=a.target||a.srcElement}}function a(r){var o,a,s=r.originalEvent||r||e.event;l.newPosX=i(s).x-c.offsetX,l.newPosY=i(s).y-c.offsetY,l.newRelativeX=l.newPosX-c.relativePos,"function"==typeof l.options.startDragging&&c.dragging!==!0&&0!==l.newRelativeX&&(c.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&l.browser.isTouch===!0&&(void 0!==s.preventDefault?s.preventDefault():s.returnValue=!1,c.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&c.sliding===!1&&t(n).off("touchmove.owl"),o=function(){return l.newRelativeX/5},a=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,o()),a()),l.browser.support3d===!0?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function s(n){var i,o,a,s=n.originalEvent||n||e.event;s.target=s.target||s.srcElement,c.dragging=!1,l.browser.isTouch!==!0&&l.$owlWrapper.removeClass("grabbing"),l.newRelativeX<0?l.dragDirection=l.owl.dragDirection="left":l.dragDirection=l.owl.dragDirection="right",0!==l.newRelativeX&&(i=l.getNewPosition(),l.goTo(i,!1,"drag"),c.targetElement===s.target&&l.browser.isTouch!==!0&&(t(s.target).on("click.disable",function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),t(e.target).off("click.disable")}),o=t._data(s.target,"events").click,a=o.pop(),o.splice(0,0,a))),r("off")}var l=this,c={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",o)},getNewPosition:function(){var t=this,e=t.closestItem();return e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var e=this,n=e.options.scrollPerPage===!0?e.pagesInArray:e.positionsInArray,i=e.newPosX,r=null;return t.each(n,function(o,a){i-e.itemWidth/20>n[o+1]&&i-e.itemWidth/20<a&&"left"===e.moveDirection()?(r=a,e.options.scrollPerPage===!0?e.currentItem=t.inArray(r,e.positionsInArray):e.currentItem=o):i+e.itemWidth/20<a&&i+e.itemWidth/20>(n[o+1]||n[o]-e.itemWidth)&&"right"===e.moveDirection()&&(e.options.scrollPerPage===!0?(r=n[o+1]||n[n.length-1],e.currentItem=t.inArray(r,e.positionsInArray)):(r=n[o+1],e.currentItem=o+1))}),e.currentItem},moveDirection:function(){var t,e=this;return e.newRelativeX<0?(t="right",e.playDirection="next"):(t="left",e.playDirection="prev"),t},customEvents:function(){var t=this;t.$elem.on("owl.next",function(){t.next()}),t.$elem.on("owl.prev",function(){t.prev()}),t.$elem.on("owl.play",function(e,n){t.options.autoPlay=n,t.play(),t.hoverStatus="play"}),t.$elem.on("owl.stop",function(){t.stop(),t.hoverStatus="stop"}),t.$elem.on("owl.goTo",function(e,n){t.goTo(n)}),t.$elem.on("owl.jumpTo",function(e,n){t.jumpTo(n)})},stopOnHover:function(){var t=this;t.options.stopOnHover===!0&&t.browser.isTouch!==!0&&t.options.autoPlay!==!1&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var e,n,i,r,o,a=this;if(a.options.lazyLoad===!1)return!1;for(e=0;e<a.itemsAmount;e+=1)n=t(a.$owlItems[e]),"loaded"!==n.data("owl-loaded")&&(i=n.data("owl-item"),r=n.find(".lazyOwl"),"string"==typeof r.data("src")?(void 0===n.data("owl-loaded")&&(r.hide(),n.addClass("loading").data("owl-loaded","checked")),o=a.options.lazyFollow===!0?i>=a.currentItem:!0,o&&i<a.currentItem+a.options.items&&r.length&&a.lazyPreload(n,r)):n.data("owl-loaded","loaded"))},lazyPreload:function(t,n){function i(){t.data("owl-loaded","loaded").removeClass("loading"),n.removeAttr("data-src"),"fade"===a.options.lazyEffect?n.fadeIn(400):n.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function r(){s+=1,a.completeImg(n.get(0))||o===!0?i():100>=s?e.setTimeout(r,100):i()}var o,a=this,s=0;"DIV"===n.prop("tagName")?(n.css("background-image","url("+n.data("src")+")"),o=!0):n[0].src=n.data("src"),r()},autoHeight:function(){function n(){var n=t(o.$owlItems[o.currentItem]).height();o.wrapperOuter.css("height",n+"px"),o.wrapperOuter.hasClass("autoHeight")||e.setTimeout(function(){o.wrapperOuter.addClass("autoHeight")},0)}function i(){r+=1,o.completeImg(a.get(0))?n():100>=r?e.setTimeout(i,100):o.wrapperOuter.css("height","")}var r,o=this,a=t(o.$owlItems[o.currentItem]).find("img");void 0!==a.get(0)?(r=0,i()):n()},completeImg:function(t){var e;return t.complete?(e=typeof t.naturalWidth,"undefined"!==e&&0===t.naturalWidth?!1:!0):!1},onVisibleItems:function(){var e,n=this;for(n.options.addClassActive===!0&&n.$owlItems.removeClass("active"),n.visibleItems=[],e=n.currentItem;e<n.currentItem+n.options.items;e+=1)n.visibleItems.push(e),n.options.addClassActive===!0&&t(n.$owlItems[e]).addClass("active");n.owl.visibleItems=n.visibleItems},transitionTypes:function(t){var e=this;e.outClass="owl-"+t+"-out",e.inClass="owl-"+t+"-in"},singleItemTransition:function(){function t(t){return{position:"relative",left:t+"px"}}var e=this,n=e.outClass,i=e.inClass,r=e.$owlItems.eq(e.currentItem),o=e.$owlItems.eq(e.prevItem),a=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],s=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":s+"px","-moz-perspective-origin":s+"px","perspective-origin":s+"px"}),o.css(t(a,10)).addClass(n).on(l,function(){e.endPrev=!0,o.off(l),e.clearTransStyle(o,n)}),r.addClass(i).on(l,function(){e.endCurrent=!0,r.off(l),e.clearTransStyle(r,i)})},clearTransStyle:function(t,e){var n=this;t.css({position:"",left:""}).removeClass(e),n.endPrev&&n.endCurrent&&(n.$owlWrapper.removeClass("owl-origin"),n.endPrev=!1,n.endCurrent=!1,n.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){var i=this;i.$elem.off(".owl owl mousedown.disableTextSelect"),t(n).off(".owl owl"),t(e).off("resize",i.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr("style",t.$elem.data("owl-originalStyles")||"").attr("class",t.$elem.data("owl-originalClasses"))},destroy:function(){var t=this;t.stop(),e.clearInterval(t.checkVisible),t.unWrap(),t.$elem.removeData()},reinit:function(e){var n=this,i=t.extend({},n.userOptions,e);n.unWrap(),n.init(i,n.$elem)},addItem:function(t,e){var n,i=this;return t?0===i.$elem.children().length?(i.$elem.append(t),i.setVars(),!1):(i.unWrap(),n=void 0===e||-1===e?-1:e,n>=i.$userItems.length||-1===n?i.$userItems.eq(-1).after(t):i.$userItems.eq(n).before(t),void i.setVars()):!1},removeItem:function(t){var e,n=this;return 0===n.$elem.children().length?!1:(e=void 0===t||-1===t?-1:t,n.unWrap(),n.$userItems.eq(e).remove(),void n.setVars())}};t.fn.owlCarousel=function(e){return this.each(function(){if(t(this).data("owl-init")===!0)return!1;t(this).data("owl-init",!0);var n=Object.create(i);n.init(e,this),t.data(this,"owlCarousel",n)})},t.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);var basicSlider=function(){var t="../images/global/arrow-prev.png",e="../images/global/arrow-next.png",n=$(".js-owl-carousel--basic-slider");n.length>0&&n.owlCarousel({navigation:!0,singleItem:!0,pagination:!0,navigationText:['<img src="'+t+'" alt="Arrow Previous">','<img src="'+e+'" alt="Arrow Next">']})};jQuery(function(t){basicSlider()});var buttonSlider=function(){var t=$(".js-owl-carousel--button-slider");t.length>0&&t.owlCarousel({singleItem:!0,pagination:!1,mouseDrag:!1,touchDrag:!1,navigation:!1,addClassActive:!0,transitionStyle:"fade",afterInit:function(){var t=this,e=t.$elem.next().find("a");e.on("click",function(){var n=$(this);e.removeClass("active"),n.addClass("active"),t.goTo(n.index())}).eq(0).trigger("click")}})};$(document).ready(function(){buttonSlider()});var dotCarousel=function(){var t=$(".js-owl-carousel--dot-carousel");t.length>0&&t.owlCarousel({items:5,itemsCustom:[[0,1],[1025,2],[1700,3]],pagination:!0,navigation:!1})};$(document).ready(function(){dotCarousel()});var dotSlider=function(){var t=$(".js-owl-carousel--dot-slider");t.length>0&&t.owlCarousel({navigation:!1,singleItem:!0,pagination:!0})};jQuery(function(t){dotSlider()});var heroSlider=function(){var t="../images/global/arrow-prev.png",e="../images/global/arrow-next.png",n=$(".js-owl-carousel--hero-slider");n.length>0&&n.owlCarousel({navigation:!0,singleItem:!0,pagination:!0,navigationText:['<img src="'+t+'" alt="Arrow Previous">','<img src="'+e+'" alt="Arrow Next">']})};jQuery(function(t){heroSlider()});var tabSlider=function(){var t=$(".js-owl-carousel--tab-slider");t.length>0&&t.owlCarousel({singleItem:!0,pagination:!1,mouseDrag:!1,touchDrag:!1,navigation:!1,addClassActive:!0,afterInit:function(){var t=this,e=t.$elem.parent().next().find("li");e.on("click",function(){var n=$(this);e.removeClass("active"),n.addClass("active"),t.goTo(n.index())}).eq(0).trigger("click")}})};$(document).ready(function(){tabSlider()}),function(t){var e,n,i="0.4.2",r="hasOwnProperty",o=/[\.\/]/,a="*",s=function(){},l=function(t,e){return t-e},c={n:{}},u=function(t,i){t=String(t);var r,o=n,a=Array.prototype.slice.call(arguments,2),s=u.listeners(t),c=0,p=[],d={},f=[],h=e;e=t,n=0;for(var m=0,g=s.length;g>m;m++)"zIndex"in s[m]&&(p.push(s[m].zIndex),s[m].zIndex<0&&(d[s[m].zIndex]=s[m]));for(p.sort(l);p[c]<0;)if(r=d[p[c++]],f.push(r.apply(i,a)),n)return n=o,f;for(m=0;g>m;m++)if(r=s[m],"zIndex"in r)if(r.zIndex==p[c]){if(f.push(r.apply(i,a)),n)break;do if(c++,r=d[p[c]],r&&f.push(r.apply(i,a)),n)break;while(r)}else d[r.zIndex]=r;else if(f.push(r.apply(i,a)),n)break;return n=o,e=h,f.length?f:null};u._events=c,u.listeners=function(t){var e,n,i,r,s,l,u,p,d=t.split(o),f=c,h=[f],m=[];for(r=0,s=d.length;s>r;r++){for(p=[],l=0,u=h.length;u>l;l++)for(f=h[l].n,n=[f[d[r]],f[a]],i=2;i--;)e=n[i],e&&(p.push(e),m=m.concat(e.f||[]));h=p}return m},u.on=function(t,e){if(t=String(t),"function"!=typeof e)return function(){};for(var n=t.split(o),i=c,r=0,a=n.length;a>r;r++)i=i.n,i=i.hasOwnProperty(n[r])&&i[n[r]]||(i[n[r]]={n:{}});for(i.f=i.f||[],r=0,a=i.f.length;a>r;r++)if(i.f[r]==e)return s;return i.f.push(e),function(t){+t==+t&&(e.zIndex=+t)}},u.f=function(t){var e=[].slice.call(arguments,1);return function(){u.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},u.stop=function(){n=1},u.nt=function(t){return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},u.nts=function(){return e.split(o)},u.off=u.unbind=function(t,e){if(!t)return void(u._events=c={n:{}});var n,i,s,l,p,d,f,h=t.split(o),m=[c];for(l=0,p=h.length;p>l;l++)for(d=0;d<m.length;d+=s.length-2){if(s=[d,1],n=m[d].n,h[l]!=a)n[h[l]]&&s.push(n[h[l]]);else for(i in n)n[r](i)&&s.push(n[i]);m.splice.apply(m,s)}for(l=0,p=m.length;p>l;l++)for(n=m[l];n.n;){if(e){if(n.f){for(d=0,f=n.f.length;f>d;d++)if(n.f[d]==e){n.f.splice(d,1);break}!n.f.length&&delete n.f}for(i in n.n)if(n.n[r](i)&&n.n[i].f){var g=n.n[i].f;for(d=0,f=g.length;f>d;d++)if(g[d]==e){g.splice(d,1);break}!g.length&&delete n.n[i].f}}else{delete n.f;for(i in n.n)n.n[r](i)&&n.n[i].f&&delete n.n[i].f}n=n.n}},u.once=function(t,e){var n=function(){return u.unbind(t,n),e.apply(this,arguments)};return u.on(t,n)},u.version=i,u.toString=function(){return"You are running Eve "+i},"undefined"!=typeof module&&module.exports?module.exports=u:"undefined"!=typeof define?define("eve",[],function(){return u}):t.eve=u}(this),function(t,e){"function"==typeof define&&define.amd?define(["eve"],function(n){return e(t,n)}):e(t,t.eve)}(this,function(t,e){var n=function(e){var n={},i=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(t){setTimeout(t,16)},r=Array.isArray||function(t){return t instanceof Array||"[object Array]"==Object.prototype.toString.call(t)},o=0,a="M"+(+new Date).toString(36),s=function(){return a+(o++).toString(36)},l=Date.now||function(){return+new Date},c=function(t){var e=this;if(null==t)return e.s;var n=e.s-t;e.b+=e.dur*n,e.B+=e.dur*n,e.s=t},u=function(t){var e=this;return null==t?e.spd:void(e.spd=t)},p=function(t){var e=this;return null==t?e.dur:(e.s=e.s*t/e.dur,void(e.dur=t))},d=function(){var t=this;delete n[t.id],e("mina.stop."+t.id,t)},f=function(){var t=this;t.pdif||(delete n[t.id],t.pdif=t.get()-t.b)},h=function(){var t=this;t.pdif&&(t.b=t.get()-t.pdif,delete t.pdif,n[t.id]=t)},m=function(){var t=0;for(var o in n)if(n.hasOwnProperty(o)){var a,s=n[o],l=s.get();if(t++,s.s=(l-s.b)/(s.dur/s.spd),s.s>=1&&(delete n[o],s.s=1,t--,function(t){setTimeout(function(){e("mina.finish."+t.id,t)})}(s)),r(s.start)){a=[];for(var c=0,u=s.start.length;u>c;c++)a[c]=+s.start[c]+(s.end[c]-s.start[c])*s.easing(s.s)}else a=+s.start+(s.end-s.start)*s.easing(s.s);s.set(a)}t&&i(m)},g=function(t,e,r,o,a,l,v){var y={id:s(),start:t,end:e,b:r,s:0,dur:o-r,spd:1,get:a,set:l,easing:v||g.linear,status:c,speed:u,duration:p,stop:d,pause:f,resume:h};n[y.id]=y;var x,w=0;for(x in n)if(n.hasOwnProperty(x)&&(w++,2==w))break;return 1==w&&i(m),y};return g.time=l,g.getById=function(t){return n[t]||null},g.linear=function(t){return t},g.easeout=function(t){return Math.pow(t,1.7)},g.easein=function(t){return Math.pow(t,.48)},g.easeinout=function(t){if(1==t)return 1;if(0==t)return 0;var e=.48-t/1.04,n=Math.sqrt(.1734+e*e),i=n-e,r=Math.pow(Math.abs(i),1/3)*(0>i?-1:1),o=-n-e,a=Math.pow(Math.abs(o),1/3)*(0>o?-1:1),s=r+a+.5;return 3*(1-s)*s*s+s*s*s},g.backin=function(t){if(1==t)return 1;var e=1.70158;return t*t*((e+1)*t-e)},g.backout=function(t){if(0==t)return 0;t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},g.elastic=function(t){return t==!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1},g.bounce=function(t){var e,n=7.5625,i=2.75;return 1/i>t?e=n*t*t:2/i>t?(t-=1.5/i,e=n*t*t+.75):2.5/i>t?(t-=2.25/i,e=n*t*t+.9375):(t-=2.625/i,e=n*t*t+.984375),e},t.mina=g,g}("undefined"==typeof e?function(){}:e),i=function(){function i(t,e){if(t){if(t.tagName)return I(t);if(t instanceof w)return t;if(null==e)return t=B.doc.querySelector(t),I(t)}return t=null==t?"100%":t,e=null==e?"100%":e,new k(t,e)}function r(t,e){if(e){if("string"==typeof t&&(t=r(t)),"string"==typeof e)return"xlink:"==e.substring(0,6)?t.getAttributeNS(ot,e.substring(6)):"xml:"==e.substring(0,4)?t.getAttributeNS(at,e.substring(4)):t.getAttribute(e);for(var n in e)if(e[D](n)){var i=W(e[n]);i?"xlink:"==n.substring(0,6)?t.setAttributeNS(ot,n.substring(6),i):"xml:"==n.substring(0,4)?t.setAttributeNS(at,n.substring(4),i):t.setAttribute(n,i):t.removeAttribute(n);
}}else t=B.doc.createElementNS(at,t);return t}function o(t,e){return e=W.prototype.toLowerCase.call(e),"finite"==e?isFinite(t):"array"==e&&(t instanceof Array||Array.isArray&&Array.isArray(t))?!0:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||X.call(t).slice(8,-1).toLowerCase()==e}function a(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var n in t)t[D](n)&&(e[n]=a(t[n]));return e}function s(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return t.push(t.splice(n,1)[0])}function l(t,e,n){function i(){var r=Array.prototype.slice.call(arguments,0),o=r.join("␀"),a=i.cache=i.cache||{},l=i.count=i.count||[];return a[D](o)?(s(l,o),n?n(a[o]):a[o]):(l.length>=1e3&&delete a[l.shift()],l.push(o),a[o]=t.apply(e,r),n?n(a[o]):a[o])}return i}function c(t,e,n,i,r,o){if(null==r){var a=t-n,s=e-i;return a||s?(180+180*O.atan2(-s,-a)/H+360)%360:0}return c(t,e,r,o)-c(n,i,r,o)}function u(t){return t%360*H/180}function p(t){return 180*t/H%360}function d(t,e,n,i,r,o){return null==e&&"[object SVGMatrix]"==X.call(t)?(this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.e=t.e,void(this.f=t.f)):void(null!=t?(this.a=+t,this.b=+e,this.c=+n,this.d=+i,this.e=+r,this.f=+o):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0))}function f(t){var e=[];return t=t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g,function(t,n,i){return i=i.split(/\s*,\s*|\s+/),"rotate"==n&&1==i.length&&i.push(0,0),"scale"==n&&(2==i.length&&i.push(0,0),1==i.length&&i.push(i[0],0,0)),"skewX"==n?e.push(["m",1,0,O.tan(u(i[0])),1,0,0]):"skewY"==n?e.push(["m",1,O.tan(u(i[0])),0,1,0,0]):e.push([n.charAt(0)].concat(i)),t}),e}function h(t,e){var n=gt(t),i=new d;if(n)for(var r=0,o=n.length;o>r;r++){var a,s,l,c,u,p=n[r],f=p.length,h=W(p[0]).toLowerCase(),m=p[0]!=h,g=m?i.invert():0;"t"==h&&2==f?i.translate(p[1],0):"t"==h&&3==f?m?(a=g.x(0,0),s=g.y(0,0),l=g.x(p[1],p[2]),c=g.y(p[1],p[2]),i.translate(l-a,c-s)):i.translate(p[1],p[2]):"r"==h?2==f?(u=u||e,i.rotate(p[1],u.x+u.width/2,u.y+u.height/2)):4==f&&(m?(l=g.x(p[2],p[3]),c=g.y(p[2],p[3]),i.rotate(p[1],l,c)):i.rotate(p[1],p[2],p[3])):"s"==h?2==f||3==f?(u=u||e,i.scale(p[1],p[f-1],u.x+u.width/2,u.y+u.height/2)):4==f?m?(l=g.x(p[2],p[3]),c=g.y(p[2],p[3]),i.scale(p[1],p[1],l,c)):i.scale(p[1],p[1],p[2],p[3]):5==f&&(m?(l=g.x(p[3],p[4]),c=g.y(p[3],p[4]),i.scale(p[1],p[2],l,c)):i.scale(p[1],p[2],p[3],p[4])):"m"==h&&7==f&&i.add(p[1],p[2],p[3],p[4],p[5],p[6])}return i}function m(t,e){if(null==e){var n=!0;if(e="linearGradient"==t.type||"radialGradient"==t.type?t.node.getAttribute("gradientTransform"):"pattern"==t.type?t.node.getAttribute("patternTransform"):t.node.getAttribute("transform"),!e)return new d;e=f(e)}else e=i._.rgTransform.test(e)?W(e).replace(/\.{3}|\u2026/g,t._.transform||q):f(e),o(e,"array")&&(e=i.path?i.path.toString.call(e):W(e)),t._.transform=e;var r=h(e,t.getBBox(1));return n?r:void(t.matrix=r)}function v(t){var e=i._.someDefs;if(e&&vt(e.ownerDocument.documentElement,e))return e;var n=t.node.ownerSVGElement&&I(t.node.ownerSVGElement)||t.node.parentNode&&I(t.node.parentNode)||i.select("svg")||i(0,0),r=n.select("defs"),o=null==r?!1:r.node;return o||(o=S("defs",n.node).node),i._.someDefs=o,o}function y(t,e,n){function i(t){return null==t?q:t==+t?t:(r(c,{width:t}),c.getBBox().width)}function o(t){return null==t?q:t==+t?t:(r(c,{height:t}),c.getBBox().height)}function a(i,r){null==e?l[i]=r(t.attr(i)):i==e&&(l=r(null==n?t.attr(i):n))}var s=v(t),l={},c=s.querySelector(".svg---mgr");switch(c||(c=r("rect"),r(c,{width:10,height:10,"class":"svg---mgr"}),s.appendChild(c)),t.type){case"rect":a("rx",i),a("ry",o);case"image":a("width",i),a("height",o);case"text":a("x",i),a("y",o);break;case"circle":a("cx",i),a("cy",o),a("r",i);break;case"ellipse":a("cx",i),a("cy",o),a("rx",i),a("ry",o);break;case"line":a("x1",i),a("x2",i),a("y1",o),a("y2",o);break;case"marker":a("refX",i),a("markerWidth",i),a("refY",o),a("markerHeight",o);break;case"radialGradient":a("fx",i),a("fy",o);break;case"tspan":a("dx",i),a("dy",o);break;default:a(e,i)}return l}function x(t){o(t,"array")||(t=Array.prototype.slice.call(arguments,0));for(var e=0,n=0,i=this.node;this[e];)delete this[e++];for(e=0;e<t.length;e++)"set"==t[e].type?t[e].forEach(function(t){i.appendChild(t.node)}):i.appendChild(t[e].node);var r=i.childNodes;for(e=0;e<r.length;e++)this[n++]=I(r[e]);return this}function w(t){if(t.snap in st)return st[t.snap];var e,n=this.id=rt();try{e=t.ownerSVGElement}catch(i){}if(this.node=t,e&&(this.paper=new k(e)),this.type=t.tagName,this.anims={},this._={transform:[]},t.snap=n,st[n]=this,"g"==this.type){this.add=x;for(var r in k.prototype)k.prototype[D](r)&&(this[r]=k.prototype[r])}}function b(t){for(var e,n=0,i=t.length;i>n;n++)if(e=e||t[n])return e}function C(t){this.node=t}function S(t,e){var n=r(t);e.appendChild(n);var i=I(n);return i.type=t,i}function k(t,e){var n,i,o,a=k.prototype;if(t&&"svg"==t.tagName){if(t.snap in st)return st[t.snap];n=new w(t),i=t.getElementsByTagName("desc")[0],o=t.getElementsByTagName("defs")[0],i||(i=r("desc"),i.appendChild(B.doc.createTextNode("Created with Snap")),n.node.appendChild(i)),o||(o=r("defs"),n.node.appendChild(o)),n.defs=o;for(var s in a)a[D](s)&&(n[s]=a[s]);n.paper=n.root=n}else n=S("svg",B.doc.body),r(n.node,{height:e,version:1.1,width:t,xmlns:at});return n}function I(t){return t?t instanceof w||t instanceof C?t:"svg"==t.tagName?new k(t):new w(t):t}function T(){return this.selectAll("stop")}function P(t,e){var n=r("stop"),o={offset:+e+"%"};return t=i.color(t),o["stop-color"]=t.hex,t.opacity<1&&(o["stop-opacity"]=t.opacity),r(n,o),this.node.appendChild(n),this}function $(){if("linearGradient"==this.type){var t=r(this.node,"x1")||0,e=r(this.node,"x2")||1,n=r(this.node,"y1")||0,o=r(this.node,"y2")||0;return i._.box(t,n,O.abs(e-t),O.abs(o-n))}var a=this.node.cx||.5,s=this.node.cy||.5,l=this.node.r||0;return i._.box(a-l,s-l,2*l,2*l)}function A(t,n){function i(t,e){for(var n=(e-c)/(t-u),i=u;t>i;i++)s[i].offset=+(+c+n*(i-u)).toFixed(2);u=t,c=e}var o,a=b(e("snap.util.grad.parse",null,n));if(!a)return null;a.params.unshift(t),o="l"==a.type.toLowerCase()?_.apply(0,a.params):M.apply(0,a.params),a.type!=a.type.toLowerCase()&&r(o.node,{gradientUnits:"userSpaceOnUse"});var s=a.stops,l=s.length,c=0,u=0;l--;for(var p=0;l>p;p++)"offset"in s[p]&&i(p,s[p].offset);for(s[l].offset=s[l].offset||100,i(l,s[l].offset),p=0;l>=p;p++){var d=s[p];o.addStop(d.color,d.offset)}return o}function _(t,e,n,i,o){var a=S("linearGradient",t);return a.stops=T,a.addStop=P,a.getBBox=$,null!=e&&r(a.node,{x1:e,y1:n,x2:i,y2:o}),a}function M(t,e,n,i,o,a){var s=S("radialGradient",t);return s.stops=T,s.addStop=P,s.getBBox=$,null!=e&&r(s.node,{cx:e,cy:n,r:i}),null!=o&&null!=a&&r(s.node,{fx:o,fy:a}),s}function j(t){return function(n){if(e.stop(),n instanceof C&&1==n.node.childNodes.length&&("radialGradient"==n.node.firstChild.tagName||"linearGradient"==n.node.firstChild.tagName||"pattern"==n.node.firstChild.tagName)&&(n=n.node.firstChild,v(this).appendChild(n),n=I(n)),n instanceof w)if("radialGradient"==n.type||"linearGradient"==n.type||"pattern"==n.type){n.node.id||r(n.node,{id:n.id});var o=lt(n.node.id)}else o=n.attr(t);else if(o=i.color(n),o.error){var a=A(v(this),n);a?(a.node.id||r(a.node,{id:a.id}),o=lt(a.node.id)):o=n}else o=W(o);var s={};s[t]=o,r(this.node,s),this.node.style[t]=q}}function E(t){for(var e=[],n=t.childNodes,i=0,r=n.length;r>i;i++){var o=n[i];3==o.nodeType&&e.push(o.nodeValue),"tspan"==o.tagName&&(1==o.childNodes.length&&3==o.firstChild.nodeType?e.push(o.firstChild.nodeValue):e.push(E(o)))}return e}i.version="0.2.0",i.toString=function(){return"Snap v"+this.version},i._={};var B={win:t,doc:t.document};i._.glob=B;var D="hasOwnProperty",W=String,z=parseFloat,F=parseInt,O=Math,L=O.max,R=O.min,N=O.abs,H=(O.pow,O.PI),q=(O.round,""),V=" ",X=Object.prototype.toString,G=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,U=/^url\(#?([^)]+)\)$/,Y="  \n\f\r   ᠎             　\u2028\u2029",Z=new RegExp("[,"+Y+"]+"),Q=(new RegExp("["+Y+"]","g"),new RegExp("["+Y+"]*,["+Y+"]*")),K={hs:1,rg:1},J=new RegExp("([a-z])["+Y+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+Y+"]*,?["+Y+"]*)+)","ig"),tt=new RegExp("([rstm])["+Y+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+Y+"]*,?["+Y+"]*)+)","ig"),et=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+Y+"]*,?["+Y+"]*","ig"),nt=0,it="S"+(+new Date).toString(36),rt=function(){return it+(nt++).toString(36)},ot="http://www.w3.org/1999/xlink",at="http://www.w3.org/2000/svg",st={},lt=i.url=function(t){return"url('#"+t+"')"};i._.$=r,i._.id=rt,i.format=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,n=function(t,n,i){var r=i;return n.replace(e,function(t,e,n,i,o){e=e||i,r&&(e in r&&(r=r[e]),"function"==typeof r&&o&&(r=r()))}),r=(null==r||r==i?t:r)+""};return function(e,i){return W(e).replace(t,function(t,e){return n(t,e,i)})}}();var ct=function(){function t(){this.parentNode.removeChild(this)}return function(e,n){var i=B.doc.createElement("img"),r=B.doc.body;i.style.cssText="position:absolute;left:-9999em;top:-9999em",i.onload=function(){n.call(i),i.onload=i.onerror=null,r.removeChild(i)},i.onerror=t,r.appendChild(i),i.src=e}}();i._.clone=a,i._.cacher=l,i.rad=u,i.deg=p,i.angle=c,i.is=o,i.snapTo=function(t,e,n){if(n=o(n,"finite")?n:10,o(t,"array")){for(var i=t.length;i--;)if(N(t[i]-e)<=n)return t[i]}else{t=+t;var r=e%t;if(n>r)return e-r;if(r>t-n)return e-r+t}return e},function(t){function e(t){return t[0]*t[0]+t[1]*t[1]}function n(t){var n=O.sqrt(e(t));t[0]&&(t[0]/=n),t[1]&&(t[1]/=n)}t.add=function(t,e,n,i,r,o){var a,s,l,c,u=[[],[],[]],p=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,n,r],[e,i,o],[0,0,1]];for(t&&t instanceof d&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),a=0;3>a;a++)for(s=0;3>s;s++){for(c=0,l=0;3>l;l++)c+=p[a][l]*f[l][s];u[a][s]=c}return this.a=u[0][0],this.b=u[1][0],this.c=u[0][1],this.d=u[1][1],this.e=u[0][2],this.f=u[1][2],this},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new d(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new d(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){return this.add(1,0,0,1,t,e)},t.scale=function(t,e,n,i){return null==e&&(e=t),(n||i)&&this.add(1,0,0,1,n,i),this.add(t,0,0,e,0,0),(n||i)&&this.add(1,0,0,1,-n,-i),this},t.rotate=function(t,e,n){t=u(t),e=e||0,n=n||0;var i=+O.cos(t).toFixed(9),r=+O.sin(t).toFixed(9);return this.add(i,r,-r,i,e,n),this.add(1,0,0,1,-e,-n)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[W.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var i=[[this.a,this.c],[this.b,this.d]];t.scalex=O.sqrt(e(i[0])),n(i[0]),t.shear=i[0][0]*i[1][0]+i[0][1]*i[1][1],i[1]=[i[1][0]-i[0][0]*t.shear,i[1][1]-i[0][1]*t.shear],t.scaley=O.sqrt(e(i[1])),n(i[1]),t.shear/=t.scaley;var r=-i[0][1],o=i[1][1];return 0>o?(t.rotate=p(O.acos(o)),0>r&&(t.rotate=360-t.rotate)):t.rotate=p(O.asin(r)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this.split();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[+e.dx.toFixed(4),+e.dy.toFixed(4)]:q)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:q)+(e.rotate?"r"+[+e.rotate.toFixed(4),0,0]:q)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(d.prototype),i.Matrix=d,i.getRGB=l(function(t){if(!t||(t=W(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:ft};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:ft};if(!(K[D](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=ut(t)),!t)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:ft};var e,n,r,a,s,l,c=t.match(G);return c?(c[2]&&(r=F(c[2].substring(5),16),n=F(c[2].substring(3,5),16),e=F(c[2].substring(1,3),16)),c[3]&&(r=F((s=c[3].charAt(3))+s,16),n=F((s=c[3].charAt(2))+s,16),e=F((s=c[3].charAt(1))+s,16)),c[4]&&(l=c[4].split(Q),e=z(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),n=z(l[1]),"%"==l[1].slice(-1)&&(n*=2.55),r=z(l[2]),"%"==l[2].slice(-1)&&(r*=2.55),"rgba"==c[1].toLowerCase().slice(0,4)&&(a=z(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100)),c[5]?(l=c[5].split(Q),e=z(l[0]),"%"==l[0].slice(-1)&&(e/=100),n=z(l[1]),"%"==l[1].slice(-1)&&(n/=100),r=z(l[2]),"%"==l[2].slice(-1)&&(r/=100),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(e/=360),"hsba"==c[1].toLowerCase().slice(0,4)&&(a=z(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),i.hsb2rgb(e,n,r,a)):c[6]?(l=c[6].split(Q),e=z(l[0]),"%"==l[0].slice(-1)&&(e/=100),n=z(l[1]),"%"==l[1].slice(-1)&&(n/=100),r=z(l[2]),"%"==l[2].slice(-1)&&(r/=100),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(e/=360),"hsla"==c[1].toLowerCase().slice(0,4)&&(a=z(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),i.hsl2rgb(e,n,r,a)):(e=R(O.round(e),255),n=R(O.round(n),255),r=R(O.round(r),255),a=R(L(a,0),1),c={r:e,g:n,b:r,toString:ft},c.hex="#"+(16777216|r|n<<8|e<<16).toString(16).slice(1),c.opacity=o(a,"finite")?a:1,c)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:ft}},i),i.hsb=l(function(t,e,n){return i.hsb2rgb(t,e,n).hex}),i.hsl=l(function(t,e,n){return i.hsl2rgb(t,e,n).hex}),i.rgb=l(function(t,e,n,i){if(o(i,"finite")){var r=O.round;return"rgba("+[r(t),r(e),r(n),+i.toFixed(2)]+")"}return"#"+(16777216|n|e<<8|t<<16).toString(16).slice(1)});var ut=function(t){var e=B.doc.getElementsByTagName("head")[0],n="rgb(255, 0, 0)";return(ut=l(function(t){if("red"==t.toLowerCase())return n;e.style.color=n,e.style.color=t;var i=B.doc.defaultView.getComputedStyle(e,q).getPropertyValue("color");return i==n?null:i}))(t)},pt=function(){return"hsb("+[this.h,this.s,this.b]+")"},dt=function(){return"hsl("+[this.h,this.s,this.l]+")"},ft=function(){return 1==this.opacity||null==this.opacity?this.hex:"rgba("+[this.r,this.g,this.b,this.opacity]+")"},ht=function(t,e,n){if(null==e&&o(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(n=t.b,e=t.g,t=t.r),null==e&&o(t,string)){var r=i.getRGB(t);t=r.r,e=r.g,n=r.b}return(t>1||e>1||n>1)&&(t/=255,e/=255,n/=255),[t,e,n]},mt=function(t,e,n,r){t=O.round(255*t),e=O.round(255*e),n=O.round(255*n);var a={r:t,g:e,b:n,opacity:o(r,"finite")?r:1,hex:i.rgb(t,e,n),toString:ft};return o(r,"finite")&&(a.opacity=r),a};i.color=function(t){var e;return o(t,"object")&&"h"in t&&"s"in t&&"b"in t?(e=i.hsb2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.opacity=1,t.hex=e.hex):o(t,"object")&&"h"in t&&"s"in t&&"l"in t?(e=i.hsl2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.opacity=1,t.hex=e.hex):(o(t,"string")&&(t=i.getRGB(t)),o(t,"object")&&"r"in t&&"g"in t&&"b"in t&&!("error"in t)?(e=i.rgb2hsl(t),t.h=e.h,t.s=e.s,t.l=e.l,e=i.rgb2hsb(t),t.v=e.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1,t.error=1)),t.toString=ft,t},i.hsb2rgb=function(t,e,n,i){o(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(n=t.b,e=t.s,t=t.h,i=t.o),t*=360;var r,a,s,l,c;return t=t%360/60,c=n*e,l=c*(1-N(t%2-1)),r=a=s=n-c,t=~~t,r+=[c,l,0,0,l,c][t],a+=[l,c,c,l,0,0][t],s+=[0,0,l,c,c,l][t],mt(r,a,s,i)},i.hsl2rgb=function(t,e,n,i){o(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(n=t.l,e=t.s,t=t.h),(t>1||e>1||n>1)&&(t/=360,e/=100,n/=100),t*=360;var r,a,s,l,c;return t=t%360/60,c=2*e*(.5>n?n:1-n),l=c*(1-N(t%2-1)),r=a=s=n-c/2,t=~~t,r+=[c,l,0,0,l,c][t],a+=[l,c,c,l,0,0][t],s+=[0,0,l,c,c,l][t],mt(r,a,s,i)},i.rgb2hsb=function(t,e,n){n=ht(t,e,n),t=n[0],e=n[1],n=n[2];var i,r,o,a;return o=L(t,e,n),a=o-R(t,e,n),i=0==a?null:o==t?(e-n)/a:o==e?(n-t)/a+2:(t-e)/a+4,i=(i+360)%6*60/360,r=0==a?0:a/o,{h:i,s:r,b:o,toString:pt}},i.rgb2hsl=function(t,e,n){n=ht(t,e,n),t=n[0],e=n[1],n=n[2];var i,r,o,a,s,l;return a=L(t,e,n),s=R(t,e,n),l=a-s,i=0==l?null:a==t?(e-n)/l:a==e?(n-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,o=(a+s)/2,r=0==l?0:.5>o?l/(2*o):l/(2-2*o),{h:i,s:r,l:o,toString:dt}},i.parsePathString=function(t){if(!t)return null;var e=i.path(t);if(e.arr)return i.path.clone(e.arr);var n={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},r=[];return o(t,"array")&&o(t[0],"array")&&(r=i.path.clone(t)),r.length||W(t).replace(J,function(t,e,i){var o=[],a=e.toLowerCase();if(i.replace(et,function(t,e){e&&o.push(+e)}),"m"==a&&o.length>2&&(r.push([e].concat(o.splice(0,2))),a="l",e="m"==e?"l":"L"),"o"==a&&1==o.length&&r.push([e,o[0]]),"r"==a)r.push([e].concat(o));else for(;o.length>=n[a]&&(r.push([e].concat(o.splice(0,n[a]))),n[a]););}),r.toString=i.path.toString,e.arr=i.path.clone(r),r};var gt=i.parseTransformString=function(t){if(!t)return null;var e=[];return o(t,"array")&&o(t[0],"array")&&(e=i.path.clone(t)),e.length||W(t).replace(tt,function(t,n,i){var r=[];n.toLowerCase();i.replace(et,function(t,e){e&&r.push(+e)}),e.push([n].concat(r))}),e.toString=i.path.toString,e};i._.svgTransform2string=f,i._.rgTransform=new RegExp("^[a-z]["+Y+"]*-?\\.?\\d","i"),i._.transform2matrix=h,i._unit2px=y;var vt=B.doc.contains||B.doc.compareDocumentPosition?function(t,e){var n=9==t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t==i||!(!i||1!=i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e;)if(e=e.parentNode,e==t)return!0;return!1};i._.getSomeDefs=v,i.select=function(t){return I(B.doc.querySelector(t))},i.selectAll=function(t){for(var e=B.doc.querySelectorAll(t),n=(i.set||Array)(),r=0;r<e.length;r++)n.push(I(e[r]));return n},function(t){function a(t){function e(t,e){var n=r(t.node,e);n=n&&n.match(a),n=n&&n[2],n&&"#"==n.charAt()&&(n=n.substring(1),n&&(l[n]=(l[n]||[]).concat(function(n){var i={};i[e]=lt(n),r(t.node,i)})))}function n(t){var e=r(t.node,"xlink:href");e&&"#"==e.charAt()&&(e=e.substring(1),e&&(l[e]=(l[e]||[]).concat(function(e){t.attr("xlink:href","#"+e)})))}for(var i,o=t.selectAll("*"),a=/^\s*url\(("|'|)(.*)\1\)\s*$/,s=[],l={},c=0,u=o.length;u>c;c++){i=o[c],e(i,"fill"),e(i,"stroke"),e(i,"filter"),e(i,"mask"),e(i,"clip-path"),n(i);var p=r(i.node,"id");p&&(r(i.node,{id:i.id}),s.push({old:p,id:i.id}))}for(c=0,u=s.length;u>c;c++){var d=l[s[c].old];if(d)for(var f=0,h=d.length;h>f;f++)d[f](s[c].id)}}function s(t,e,n){return function(i){var r=i.slice(t,e);return 1==r.length&&(r=r[0]),n?n(r):r}}function l(t){return function(){var e=t?"<"+this.type:"",n=this.node.attributes,i=this.node.childNodes;if(t)for(var r=0,o=n.length;o>r;r++)e+=" "+n[r].name+'="'+n[r].value.replace(/"/g,'\\"')+'"';if(i.length){for(t&&(e+=">"),r=0,o=i.length;o>r;r++)3==i[r].nodeType?e+=i[r].nodeValue:1==i[r].nodeType&&(e+=I(i[r]).toString());t&&(e+="</"+this.type+">")}else t&&(e+="/>");return e}}t.attr=function(t,n){var i=this;i.node;if(!t)return i;if(o(t,"string")){if(!(arguments.length>1))return b(e("snap.util.getattr."+t,i));var r={};r[t]=n,t=r}for(var a in t)t[D](a)&&e("snap.util.attr."+a,i,t[a]);return i},t.getBBox=function(t){var e=this;if("use"==e.type&&(e=e.original),e.removed)return{};var n=e._;return t?(n.bboxwt=i.path.get[e.type]?i.path.getBBox(e.realPath=i.path.get[e.type](e)):i._.box(e.node.getBBox()),i._.box(n.bboxwt)):(e.realPath=(i.path.get[e.type]||i.path.get.deflt)(e),n.bbox=i.path.getBBox(i.path.map(e.realPath,e.matrix)),i._.box(n.bbox))};var c=function(){return this.string};t.transform=function(t){var e=this._;if(null==t){var n=new d(this.node.getCTM()),i=m(this),o=i.toTransformString(),a=W(i)==W(this.matrix)?e.transform:o;return{string:a,globalMatrix:n,localMatrix:i,diffMatrix:n.clone().add(i.invert()),global:n.toTransformString(),local:o,toString:c}}return t instanceof d&&(t=t.toTransformString()),m(this,t),this.node&&("linearGradient"==this.type||"radialGradient"==this.type?r(this.node,{gradientTransform:this.matrix}):"pattern"==this.type?r(this.node,{patternTransform:this.matrix}):r(this.node,{transform:this.matrix})),this},t.parent=function(){return I(this.node.parentNode)},t.append=t.add=function(t){if(t){if("set"==t.type){var e=this;return t.forEach(function(t){e.add(t)}),this}t=I(t),this.node.appendChild(t.node),t.paper=this.paper}return this},t.appendTo=function(t){return t&&(t=I(t),t.append(this)),this},t.prepend=function(t){if(t){t=I(t);var e=t.parent();this.node.insertBefore(t.node,this.node.firstChild),this.add&&this.add(),t.paper=this.paper,this.parent()&&this.parent().add(),e&&e.add()}return this},t.prependTo=function(t){return t=I(t),t.prepend(this),this},t.before=function(t){if("set"==t.type){var e=this;return t.forEach(function(t){var n=t.parent();e.node.parentNode.insertBefore(t.node,e.node),n&&n.add()}),this.parent().add(),this}t=I(t);var n=t.parent();return this.node.parentNode.insertBefore(t.node,this.node),this.parent()&&this.parent().add(),n&&n.add(),t.paper=this.paper,this},t.after=function(t){t=I(t);var e=t.parent();return this.node.nextSibling?this.node.parentNode.insertBefore(t.node,this.node.nextSibling):this.node.parentNode.appendChild(t.node),this.parent()&&this.parent().add(),e&&e.add(),t.paper=this.paper,this},t.insertBefore=function(t){t=I(t);var e=this.parent();return t.node.parentNode.insertBefore(this.node,t.node),this.paper=t.paper,e&&e.add(),t.parent()&&t.parent().add(),this},t.insertAfter=function(t){t=I(t);var e=this.parent();return t.node.parentNode.insertBefore(this.node,t.node.nextSibling),this.paper=t.paper,e&&e.add(),t.parent()&&t.parent().add(),this},t.remove=function(){var t=this.parent();return this.node.parentNode&&this.node.parentNode.removeChild(this.node),delete this.paper,this.removed=!0,t&&t.add(),this},t.select=function(t){return I(this.node.querySelector(t))},t.selectAll=function(t){for(var e=this.node.querySelectorAll(t),n=(i.set||Array)(),r=0;r<e.length;r++)n.push(I(e[r]));return n},t.asPX=function(t,e){return null==e&&(e=this.attr(t)),+y(this,t,e)},t.use=function(){var t,e=this.node.id;return e||(e=this.id,r(this.node,{id:e})),t="linearGradient"==this.type||"radialGradient"==this.type||"pattern"==this.type?S(this.type,this.node.parentNode):S("use",this.node.parentNode),r(t.node,{"xlink:href":"#"+e}),t.original=this,t},t.clone=function(){var t=I(this.node.cloneNode(!0));return r(t.node,"id")&&r(t.node,{id:t.id}),a(t),t.insertAfter(this),t},t.toDefs=function(){var t=v(this);return t.appendChild(this.node),this},t.pattern=function(t,e,n,i){var a=S("pattern",v(this));return null==t&&(t=this.getBBox()),o(t,"object")&&"x"in t&&(e=t.y,n=t.width,i=t.height,t=t.x),r(a.node,{x:t,y:e,width:n,height:i,patternUnits:"userSpaceOnUse",id:a.id,viewBox:[t,e,n,i].join(" ")}),a.node.appendChild(this.node),a},t.marker=function(t,e,n,i,a,s){var l=S("marker",v(this));return null==t&&(t=this.getBBox()),o(t,"object")&&"x"in t&&(e=t.y,n=t.width,i=t.height,a=t.refX||t.cx,s=t.refY||t.cy,t=t.x),r(l.node,{viewBox:[t,e,n,i].join(V),markerWidth:n,markerHeight:i,orient:"auto",refX:a||0,refY:s||0,id:l.id}),l.node.appendChild(this.node),l};var u=function(t,e,i,r){"function"!=typeof i||i.length||(r=i,i=n.linear),this.attr=t,this.dur=e,i&&(this.easing=i),r&&(this.callback=r)};i.animation=function(t,e,n,i){return new u(t,e,n,i)},t.inAnim=function(){var t=this,e=[];for(var n in t.anims)t.anims[D](n)&&!function(t){e.push({anim:new u(t._attrs,t.dur,t.easing,t._callback),curStatus:t.status(),status:function(e){return t.status(e)},stop:function(){t.stop()}})}(t.anims[n]);return e},i.animate=function(t,i,r,o,a,s){"function"!=typeof a||a.length||(s=a,a=n.linear);var l=n.time(),c=n(t,i,l,l+o,n.time,r,a);return s&&e.once("mina.finish."+c.id,s),c},t.stop=function(){for(var t=this.inAnim(),e=0,n=t.length;n>e;e++)t[e].stop();return this},t.animate=function(t,i,r,a){"function"!=typeof r||r.length||(a=r,r=n.linear),t instanceof u&&(a=t.callback,r=t.easing,i=r.dur,t=t.attr);var l,c,p,d,f=[],h=[],m={},g=this;for(var v in t)if(t[D](v)){g.equal?(d=g.equal(v,W(t[v])),l=d.from,c=d.to,p=d.f):(l=+g.attr(v),c=+t[v]);var y=o(l,"array")?l.length:1;m[v]=s(f.length,f.length+y,p),f=f.concat(l),h=h.concat(c)}var x=n.time(),w=n(f,h,x,x+i,n.time,function(t){var e={};for(var n in m)m[D](n)&&(e[n]=m[n](t));g.attr(e)},r);return g.anims[w.id]=w,w._attrs=t,w._callback=a,e.once("mina.finish."+w.id,function(){delete g.anims[w.id],a&&a.call(g)}),e.once("mina.stop."+w.id,function(){delete g.anims[w.id]}),g};var p={};t.data=function(t,n){var r=p[this.id]=p[this.id]||{};if(0==arguments.length)return e("snap.data.get."+this.id,this,r,null),r;if(1==arguments.length){if(i.is(t,"object")){for(var o in t)t[D](o)&&this.data(o,t[o]);return this}return e("snap.data.get."+this.id,this,r[t],t),r[t]}return r[t]=n,e("snap.data.set."+this.id,this,n,t),this},t.removeData=function(t){return null==t?p[this.id]={}:p[this.id]&&delete p[this.id][t],this},t.outerSVG=t.toString=l(1),t.innerSVG=l()}(w.prototype),i.parse=function(t){var e=B.doc.createDocumentFragment(),n=!0,i=B.doc.createElement("div");if(t=W(t),t.match(/^\s*<\s*svg(?:\s|>)/)||(t="<svg>"+t+"</svg>",n=!1),i.innerHTML=t,t=i.getElementsByTagName("svg")[0])if(n)e=t;else for(;t.firstChild;)e.appendChild(t.firstChild);return i.innerHTML=q,new C(e)},C.prototype.select=w.prototype.select,C.prototype.selectAll=w.prototype.selectAll,i.fragment=function(){for(var t=Array.prototype.slice.call(arguments,0),e=B.doc.createDocumentFragment(),n=0,r=t.length;r>n;n++){var o=t[n];o.node&&o.node.nodeType&&e.appendChild(o.node),o.nodeType&&e.appendChild(o),"string"==typeof o&&e.appendChild(i.parse(o).node)}return new C(e)},function(t){t.el=function(t,e){return S(t,this.node).attr(e)},t.rect=function(t,e,n,i,r,a){var s;return null==a&&(a=r),o(t,"object")&&"x"in t?s=t:null!=t&&(s={x:t,y:e,width:n,height:i},null!=r&&(s.rx=r,s.ry=a)),this.el("rect",s)},t.circle=function(t,e,n){var i;return o(t,"object")&&"cx"in t?i=t:null!=t&&(i={cx:t,cy:e,r:n}),this.el("circle",i)},t.image=function(t,e,n,i,a){var s=S("image",this.node);if(o(t,"object")&&"src"in t)s.attr(t);else if(null!=t){var l={"xlink:href":t,preserveAspectRatio:"none"};null!=e&&null!=n&&(l.x=e,l.y=n),null!=i&&null!=a?(l.width=i,l.height=a):ct(t,function(){r(s.node,{width:this.offsetWidth,height:this.offsetHeight})}),r(s.node,l)}return s},t.ellipse=function(t,e,n,i){var r=S("ellipse",this.node);return o(t,"object")&&"cx"in t?r.attr(t):null!=t&&r.attr({cx:t,cy:e,rx:n,ry:i}),r},t.path=function(t){var e=S("path",this.node);return o(t,"object")&&!o(t,"array")?e.attr(t):t&&e.attr({d:t}),e},t.group=t.g=function(e){var n=S("g",this.node);n.add=x;for(var i in t)t[D](i)&&(n[i]=t[i]);return 1==arguments.length&&e&&!e.type?n.attr(e):arguments.length&&n.add(Array.prototype.slice.call(arguments,0)),n},t.text=function(t,e,n){var i=S("text",this.node);return o(t,"object")?i.attr(t):null!=t&&i.attr({x:t,y:e,text:n||""}),i},t.line=function(t,e,n,i){var r=S("line",this.node);return o(t,"object")?r.attr(t):null!=t&&r.attr({x1:t,x2:n,y1:e,y2:i}),r},t.polyline=function(t){arguments.length>1&&(t=Array.prototype.slice.call(arguments,0));var e=S("polyline",this.node);return o(t,"object")&&!o(t,"array")?e.attr(t):null!=t&&e.attr({points:t}),e},t.polygon=function(t){arguments.length>1&&(t=Array.prototype.slice.call(arguments,0));var e=S("polygon",this.node);return o(t,"object")&&!o(t,"array")?e.attr(t):null!=t&&e.attr({points:t}),e},function(){t.gradient=function(t){return A(this.defs,t)},t.gradientLinear=function(t,e,n,i){return _(this.defs,t,e,n,i)},t.gradientRadial=function(t,e,n,i,r){return M(this.defs,t,e,n,i,r)},t.toString=function(){var t,e=B.doc.createDocumentFragment(),n=B.doc.createElement("div"),i=this.node.cloneNode(!0);return e.appendChild(n),n.appendChild(i),r(i,{xmlns:at}),t=n.innerHTML,e.removeChild(e.firstChild),t},t.clear=function(){for(var t,e=this.node.firstChild;e;)t=e.nextSibling,"defs"!=e.tagName&&e.parentNode.removeChild(e),e=t}}()}(k.prototype),i.ajax=function(t,n,i,r){var a=new XMLHttpRequest,s=rt();if(a){if(o(n,"function"))r=i,i=n,n=null;else if(o(n,"object")){var l=[];for(var c in n)n.hasOwnProperty(c)&&l.push(encodeURIComponent(c)+"="+encodeURIComponent(n[c]));n=l.join("&")}return a.open(n?"POST":"GET",t,!0),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),n&&a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i&&(e.once("snap.ajax."+s+".0",i),e.once("snap.ajax."+s+".200",i),e.once("snap.ajax."+s+".304",i)),a.onreadystatechange=function(){4==a.readyState&&e("snap.ajax."+s+"."+a.status,r,a)},4==a.readyState?a:(a.send(n),a)}},i.load=function(t,e,n){i.ajax(t,function(t){var r=i.parse(t.responseText);n?e.call(n,r):e(r)})},e.on("snap.util.attr.mask",function(t){if(t instanceof w||t instanceof C){if(e.stop(),t instanceof C&&1==t.node.childNodes.length&&(t=t.node.firstChild,v(this).appendChild(t),t=I(t)),"mask"==t.type)var n=t;else n=S("mask",v(this)),n.node.appendChild(t.node),!n.node.id&&r(n.node,{id:n.id});r(this.node,{mask:lt(n.id)})}}),function(t){e.on("snap.util.attr.clip",t),e.on("snap.util.attr.clip-path",t),e.on("snap.util.attr.clipPath",t)}(function(t){if(t instanceof w||t instanceof C){if(e.stop(),"clipPath"==t.type)var n=t;else n=S("clipPath",v(this)),n.node.appendChild(t.node),!n.node.id&&r(n.node,{id:n.id});r(this.node,{"clip-path":lt(n.id)})}}),e.on("snap.util.attr.fill",j("fill")),e.on("snap.util.attr.stroke",j("stroke"));var yt=/^([lr])(?:\(([^)]*)\))?(.*)$/i;e.on("snap.util.grad.parse",function(t){t=W(t);var e=t.match(yt);if(!e)return null;var n=e[1],i=e[2],r=e[3];return i=i.split(/\s*,\s*/).map(function(t){return+t==t?+t:t}),1==i.length&&0==i[0]&&(i=[]),r=r.split("-"),r=r.map(function(t){t=t.split(":");var e={color:t[0]};return t[1]&&(e.offset=t[1]),e}),{type:n,params:i,stops:r}}),e.on("snap.util.attr.d",function(t){e.stop(),o(t,"array")&&o(t[0],"array")&&(t=i.path.toString.call(t)),t=W(t),t.match(/[ruo]/i)&&(t=i.path.toAbsolute(t)),r(this.node,{d:t})})(-1),e.on("snap.util.attr.#text",function(t){e.stop(),t=W(t);for(var n=B.doc.createTextNode(t);this.node.firstChild;)this.node.removeChild(this.node.firstChild);this.node.appendChild(n)})(-1),e.on("snap.util.attr.path",function(t){e.stop(),this.attr({d:t})})(-1),e.on("snap.util.attr.viewBox",function(t){var n;n=o(t,"object")&&"x"in t?[t.x,t.y,t.width,t.height].join(" "):o(t,"array")?t.join(" "):t,r(this.node,{viewBox:n}),e.stop()})(-1),e.on("snap.util.attr.transform",function(t){this.transform(t),e.stop()})(-1),e.on("snap.util.attr.r",function(t){"rect"==this.type&&(e.stop(),r(this.node,{rx:t,ry:t}))})(-1),e.on("snap.util.attr.textpath",function(t){if(e.stop(),"text"==this.type){var n,i,a;if(!t&&this.textPath){for(i=this.textPath;i.node.firstChild;)this.node.appendChild(i.node.firstChild);return i.remove(),void delete this.textPath}if(o(t,"string")){var s=v(this),l=I(s.parentNode).path(t);s.appendChild(l.node),n=l.id,l.attr({id:n})}else t=I(t),t instanceof w&&(n=t.attr("id"),n||(n=t.id,t.attr({id:n})));if(n)if(i=this.textPath,a=this.node,i)i.attr({"xlink:href":"#"+n});else{for(i=r("textPath",{"xlink:href":"#"+n});a.firstChild;)i.appendChild(a.firstChild);a.appendChild(i),this.textPath=I(i)}}})(-1),e.on("snap.util.attr.text",function(t){if("text"==this.type){for(var n=this.node,i=function(t){var e=r("tspan");if(o(t,"array"))for(var n=0;n<t.length;n++)e.appendChild(i(t[n]));else e.appendChild(B.doc.createTextNode(t));return e.normalize&&e.normalize(),e};n.firstChild;)n.removeChild(n.firstChild);for(var a=i(t);a.firstChild;)n.appendChild(a.firstChild)}e.stop()})(-1);var xt={"alignment-baseline":0,"baseline-shift":0,clip:0,"clip-path":0,"clip-rule":0,color:0,"color-interpolation":0,"color-interpolation-filters":0,"color-profile":0,"color-rendering":0,cursor:0,direction:0,display:0,"dominant-baseline":0,"enable-background":0,fill:0,"fill-opacity":0,"fill-rule":0,filter:0,"flood-color":0,"flood-opacity":0,font:0,"font-family":0,"font-size":0,"font-size-adjust":0,
"font-stretch":0,"font-style":0,"font-variant":0,"font-weight":0,"glyph-orientation-horizontal":0,"glyph-orientation-vertical":0,"image-rendering":0,kerning:0,"letter-spacing":0,"lighting-color":0,marker:0,"marker-end":0,"marker-mid":0,"marker-start":0,mask:0,opacity:0,overflow:0,"pointer-events":0,"shape-rendering":0,"stop-color":0,"stop-opacity":0,stroke:0,"stroke-dasharray":0,"stroke-dashoffset":0,"stroke-linecap":0,"stroke-linejoin":0,"stroke-miterlimit":0,"stroke-opacity":0,"stroke-width":0,"text-anchor":0,"text-decoration":0,"text-rendering":0,"unicode-bidi":0,visibility:0,"word-spacing":0,"writing-mode":0};e.on("snap.util.attr",function(t){var n=e.nt(),i={};n=n.substring(n.lastIndexOf(".")+1),i[n]=t;var o=n.replace(/-(\w)/gi,function(t,e){return e.toUpperCase()}),a=n.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()});xt[D](a)?this.node.style[o]=null==t?q:t:r(this.node,i)}),e.on("snap.util.getattr.transform",function(){return e.stop(),this.transform()})(-1),e.on("snap.util.getattr.textpath",function(){return e.stop(),this.textPath})(-1),function(){function t(t){return function(){e.stop();var n=B.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue("marker-"+t);return"none"==n?n:i(B.doc.getElementById(n.match(U)[1]))}}function n(t){return function(n){e.stop();var i="marker"+t.charAt(0).toUpperCase()+t.substring(1);if(""==n||!n)return void(this.node.style[i]="none");if("marker"==n.type){var o=n.node.id;return o||r(n.node,{id:n.id}),void(this.node.style[i]=lt(o))}}}e.on("snap.util.getattr.marker-end",t("end"))(-1),e.on("snap.util.getattr.markerEnd",t("end"))(-1),e.on("snap.util.getattr.marker-start",t("start"))(-1),e.on("snap.util.getattr.markerStart",t("start"))(-1),e.on("snap.util.getattr.marker-mid",t("mid"))(-1),e.on("snap.util.getattr.markerMid",t("mid"))(-1),e.on("snap.util.attr.marker-end",n("end"))(-1),e.on("snap.util.attr.markerEnd",n("end"))(-1),e.on("snap.util.attr.marker-start",n("start"))(-1),e.on("snap.util.attr.markerStart",n("start"))(-1),e.on("snap.util.attr.marker-mid",n("mid"))(-1),e.on("snap.util.attr.markerMid",n("mid"))(-1)}(),e.on("snap.util.getattr.r",function(){return"rect"==this.type&&r(this.node,"rx")==r(this.node,"ry")?(e.stop(),r(this.node,"rx")):void 0})(-1),e.on("snap.util.getattr.text",function(){if("text"==this.type||"tspan"==this.type){e.stop();var t=E(this.node);return 1==t.length?t[0]:t}})(-1),e.on("snap.util.getattr.#text",function(){return this.node.textContent})(-1),e.on("snap.util.getattr.viewBox",function(){e.stop();var t=r(this.node,"viewBox").split(Z);return i._.box(+t[0],+t[1],+t[2],+t[3])})(-1),e.on("snap.util.getattr.points",function(){var t=r(this.node,"points");return e.stop(),t.split(Z)}),e.on("snap.util.getattr.path",function(){var t=r(this.node,"d");return e.stop(),t}),e.on("snap.util.getattr",function(){var t=e.nt();t=t.substring(t.lastIndexOf(".")+1);var n=t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()});return xt[D](n)?B.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue(n):r(this.node,t)});var wt=function(t){var e=t.getBoundingClientRect(),n=t.ownerDocument,i=n.body,r=n.documentElement,o=r.clientTop||i.clientTop||0,a=r.clientLeft||i.clientLeft||0,s=e.top+(g.win.pageYOffset||r.scrollTop||i.scrollTop)-o,l=e.left+(g.win.pageXOffset||r.scrollLeft||i.scrollLeft)-a;return{y:s,x:l}};return i.getElementByPoint=function(t,e){var n=this,i=(n.canvas,B.doc.elementFromPoint(t,e));if(B.win.opera&&"svg"==i.tagName){var r=wt(i),o=i.createSVGRect();o.x=t-r.x,o.y=e-r.y,o.width=o.height=1;var a=i.getIntersectionList(o,null);a.length&&(i=a[a.length-1])}return i?I(i):null},i.plugin=function(t){t(i,w,k,B)},B.win.Snap=i,i}();return i.plugin(function(t,e,n,i){function r(t){var e=r.ps=r.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var n in e)e[O](n)&&n!=t&&(e[n].sleep--,!e[n].sleep&&delete e[n])}),e[t]}function o(t,e,n,i){return null==t&&(t=e=n=i=0),null==e&&(e=t.y,n=t.width,i=t.height,t=t.x),{x:t,y:e,width:n,w:n,height:i,h:i,x2:t+n,y2:e+i,cx:t+n/2,cy:e+i/2,r1:N.min(n,i)/2,r2:N.max(n,i)/2,r0:N.sqrt(n*n+i*i)/2,path:k(t,e,n,i),vb:[t,e,n,i].join(" ")}}function a(){return this.join(",").replace(L,"$1")}function s(t){var e=F(t);return e.toString=a,e}function l(t,e,n,i,r,o,a,s,l){return null==l?m(t,e,n,i,r,o,a,s):u(t,e,n,i,r,o,a,s,g(t,e,n,i,r,o,a,s,l))}function c(n,i){function r(t){return+(+t).toFixed(3)}return t._.cacher(function(t,o,a){t instanceof e&&(t=t.attr("d")),t=E(t);for(var s,c,p,d,f,h="",m={},g=0,v=0,y=t.length;y>v;v++){if(p=t[v],"M"==p[0])s=+p[1],c=+p[2];else{if(d=l(s,c,p[1],p[2],p[3],p[4],p[5],p[6]),g+d>o){if(i&&!m.start){if(f=l(s,c,p[1],p[2],p[3],p[4],p[5],p[6],o-g),h+=["C"+r(f.start.x),r(f.start.y),r(f.m.x),r(f.m.y),r(f.x),r(f.y)],a)return h;m.start=h,h=["M"+r(f.x),r(f.y)+"C"+r(f.n.x),r(f.n.y),r(f.end.x),r(f.end.y),r(p[5]),r(p[6])].join(),g+=d,s=+p[5],c=+p[6];continue}if(!n&&!i)return f=l(s,c,p[1],p[2],p[3],p[4],p[5],p[6],o-g)}g+=d,s=+p[5],c=+p[6]}h+=p.shift()+p}return m.end=h,f=n?g:i?m:u(s,c,p[0],p[1],p[2],p[3],p[4],p[5],1)},null,t._.clone)}function u(t,e,n,i,r,o,a,s,l){var c=1-l,u=X(c,3),p=X(c,2),d=l*l,f=d*l,h=u*t+3*p*l*n+3*c*l*l*r+f*a,m=u*e+3*p*l*i+3*c*l*l*o+f*s,g=t+2*l*(n-t)+d*(r-2*n+t),v=e+2*l*(i-e)+d*(o-2*i+e),y=n+2*l*(r-n)+d*(a-2*r+n),x=i+2*l*(o-i)+d*(s-2*o+i),w=c*t+l*n,b=c*e+l*i,C=c*r+l*a,S=c*o+l*s,k=90-180*N.atan2(g-y,v-x)/H;return{x:h,y:m,m:{x:g,y:v},n:{x:y,y:x},start:{x:w,y:b},end:{x:C,y:S},alpha:k}}function p(e,n,i,r,a,s,l,c){t.is(e,"array")||(e=[e,n,i,r,a,s,l,c]);var u=j.apply(null,e);return o(u.min.x,u.min.y,u.max.x-u.min.x,u.max.y-u.min.y)}function d(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height}function f(t,e){return t=o(t),e=o(e),d(e,t.x,t.y)||d(e,t.x2,t.y)||d(e,t.x,t.y2)||d(e,t.x2,t.y2)||d(t,e.x,e.y)||d(t,e.x2,e.y)||d(t,e.x,e.y2)||d(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)}function h(t,e,n,i,r){var o=-3*e+9*n-9*i+3*r,a=t*o+6*e-12*n+6*i;return t*a-3*e+3*n}function m(t,e,n,i,r,o,a,s,l){null==l&&(l=1),l=l>1?1:0>l?0:l;for(var c=l/2,u=12,p=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],d=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],f=0,m=0;u>m;m++){var g=c*p[m]+c,v=h(g,t,n,r,a),y=h(g,e,i,o,s),x=v*v+y*y;f+=d[m]*N.sqrt(x)}return c*f}function g(t,e,n,i,r,o,a,s,l){if(!(0>l||m(t,e,n,i,r,o,a,s)<l)){var c,u=1,p=u/2,d=u-p,f=.01;for(c=m(t,e,n,i,r,o,a,s,d);G(c-l)>f;)p/=2,d+=(l>c?1:-1)*p,c=m(t,e,n,i,r,o,a,s,d);return d}}function v(t,e,n,i,r,o,a,s){if(!(V(t,n)<q(r,a)||q(t,n)>V(r,a)||V(e,i)<q(o,s)||q(e,i)>V(o,s))){var l=(t*i-e*n)*(r-a)-(t-n)*(r*s-o*a),c=(t*i-e*n)*(o-s)-(e-i)*(r*s-o*a),u=(t-n)*(o-s)-(e-i)*(r-a);if(u){var p=l/u,d=c/u,f=+p.toFixed(2),h=+d.toFixed(2);if(!(f<+q(t,n).toFixed(2)||f>+V(t,n).toFixed(2)||f<+q(r,a).toFixed(2)||f>+V(r,a).toFixed(2)||h<+q(e,i).toFixed(2)||h>+V(e,i).toFixed(2)||h<+q(o,s).toFixed(2)||h>+V(o,s).toFixed(2)))return{x:p,y:d}}}}function y(t,e,n){var i=p(t),r=p(e);if(!f(i,r))return n?0:[];for(var o=m.apply(0,t),a=m.apply(0,e),s=~~(o/5),l=~~(a/5),c=[],d=[],h={},g=n?0:[],y=0;s+1>y;y++){var x=u.apply(0,t.concat(y/s));c.push({x:x.x,y:x.y,t:y/s})}for(y=0;l+1>y;y++)x=u.apply(0,e.concat(y/l)),d.push({x:x.x,y:x.y,t:y/l});for(y=0;s>y;y++)for(var w=0;l>w;w++){var b=c[y],C=c[y+1],S=d[w],k=d[w+1],I=G(C.x-b.x)<.001?"y":"x",T=G(k.x-S.x)<.001?"y":"x",P=v(b.x,b.y,C.x,C.y,S.x,S.y,k.x,k.y);if(P){if(h[P.x.toFixed(4)]==P.y.toFixed(4))continue;h[P.x.toFixed(4)]=P.y.toFixed(4);var $=b.t+G((P[I]-b[I])/(C[I]-b[I]))*(C.t-b.t),A=S.t+G((P[T]-S[T])/(k[T]-S[T]))*(k.t-S.t);$>=0&&1>=$&&A>=0&&1>=A&&(n?g++:g.push({x:P.x,y:P.y,t1:$,t2:A}))}}return g}function x(t,e){return b(t,e)}function w(t,e){return b(t,e,1)}function b(t,e,n){t=E(t),e=E(e);for(var i,r,o,a,s,l,c,u,p,d,f=n?0:[],h=0,m=t.length;m>h;h++){var g=t[h];if("M"==g[0])i=s=g[1],r=l=g[2];else{"C"==g[0]?(p=[i,r].concat(g.slice(1)),i=p[6],r=p[7]):(p=[i,r,i,r,s,l,s,l],i=s,r=l);for(var v=0,x=e.length;x>v;v++){var w=e[v];if("M"==w[0])o=c=w[1],a=u=w[2];else{"C"==w[0]?(d=[o,a].concat(w.slice(1)),o=d[6],a=d[7]):(d=[o,a,o,a,c,u,c,u],o=c,a=u);var b=y(p,d,n);if(n)f+=b;else{for(var C=0,S=b.length;S>C;C++)b[C].segment1=h,b[C].segment2=v,b[C].bez1=p,b[C].bez2=d;f=f.concat(b)}}}}}return f}function C(t,e,n){var i=S(t);return d(i,e,n)&&b(t,[["M",e,n],["H",i.x2+10]],1)%2==1}function S(t){var e=r(t);if(e.bbox)return F(e.bbox);if(!t)return o();t=E(t);for(var n,i=0,a=0,s=[],l=[],c=0,u=t.length;u>c;c++)if(n=t[c],"M"==n[0])i=n[1],a=n[2],s.push(i),l.push(a);else{var p=j(i,a,n[1],n[2],n[3],n[4],n[5],n[6]);s=s.concat(p.min.x,p.max.x),l=l.concat(p.min.y,p.max.y),i=n[5],a=n[6]}var d=q.apply(0,s),f=q.apply(0,l),h=V.apply(0,s),m=V.apply(0,l),g=o(d,f,h-d,m-f);return e.bbox=F(g),g}function k(t,e,n,i,r){if(r)return[["M",t+r,e],["l",n-2*r,0],["a",r,r,0,0,1,r,r],["l",0,i-2*r],["a",r,r,0,0,1,-r,r],["l",2*r-n,0],["a",r,r,0,0,1,-r,-r],["l",0,2*r-i],["a",r,r,0,0,1,r,-r],["z"]];var o=[["M",t,e],["l",n,0],["l",0,i],["l",-n,0],["z"]];return o.toString=a,o}function I(t,e,n,i,r){if(null==r&&null==i&&(i=n),null!=r)var o=Math.PI/180,s=t+n*Math.cos(-i*o),l=t+n*Math.cos(-r*o),c=e+n*Math.sin(-i*o),u=e+n*Math.sin(-r*o),p=[["M",s,c],["A",n,n,0,+(r-i>180),0,l,u]];else p=[["M",t,e],["m",0,-i],["a",n,i,0,1,1,0,2*i],["a",n,i,0,1,1,0,-2*i],["z"]];return p.toString=a,p}function T(e){var n=r(e),i=String.prototype.toLowerCase;if(n.rel)return s(n.rel);t.is(e,"array")&&t.is(e&&e[0],"array")||(e=t.parsePathString(e));var o=[],l=0,c=0,u=0,p=0,d=0;"M"==e[0][0]&&(l=e[0][1],c=e[0][2],u=l,p=c,d++,o.push(["M",l,c]));for(var f=d,h=e.length;h>f;f++){var m=o[f]=[],g=e[f];if(g[0]!=i.call(g[0]))switch(m[0]=i.call(g[0]),m[0]){case"a":m[1]=g[1],m[2]=g[2],m[3]=g[3],m[4]=g[4],m[5]=g[5],m[6]=+(g[6]-l).toFixed(3),m[7]=+(g[7]-c).toFixed(3);break;case"v":m[1]=+(g[1]-c).toFixed(3);break;case"m":u=g[1],p=g[2];default:for(var v=1,y=g.length;y>v;v++)m[v]=+(g[v]-(v%2?l:c)).toFixed(3)}else{m=o[f]=[],"m"==g[0]&&(u=g[1]+l,p=g[2]+c);for(var x=0,w=g.length;w>x;x++)o[f][x]=g[x]}var b=o[f].length;switch(o[f][0]){case"z":l=u,c=p;break;case"h":l+=+o[f][b-1];break;case"v":c+=+o[f][b-1];break;default:l+=+o[f][b-2],c+=+o[f][b-1]}}return o.toString=a,n.rel=s(o),o}function P(e){var n=r(e);if(n.abs)return s(n.abs);if(z(e,"array")&&z(e&&e[0],"array")||(e=t.parsePathString(e)),!e||!e.length)return[["M",0,0]];var i,o=[],l=0,c=0,u=0,p=0,d=0;"M"==e[0][0]&&(l=+e[0][1],c=+e[0][2],u=l,p=c,d++,o[0]=["M",l,c]);for(var f,h,m=3==e.length&&"M"==e[0][0]&&"R"==e[1][0].toUpperCase()&&"Z"==e[2][0].toUpperCase(),g=d,v=e.length;v>g;g++){if(o.push(f=[]),h=e[g],i=h[0],i!=i.toUpperCase())switch(f[0]=i.toUpperCase(),f[0]){case"A":f[1]=h[1],f[2]=h[2],f[3]=h[3],f[4]=h[4],f[5]=h[5],f[6]=+(h[6]+l),f[7]=+(h[7]+c);break;case"V":f[1]=+h[1]+c;break;case"H":f[1]=+h[1]+l;break;case"R":for(var y=[l,c].concat(h.slice(1)),x=2,w=y.length;w>x;x++)y[x]=+y[x]+l,y[++x]=+y[x]+c;o.pop(),o=o.concat(D(y,m));break;case"O":o.pop(),y=I(l,c,h[1],h[2]),y.push(y[0]),o=o.concat(y);break;case"U":o.pop(),o=o.concat(I(l,c,h[1],h[2],h[3])),f=["U"].concat(o[o.length-1].slice(-2));break;case"M":u=+h[1]+l,p=+h[2]+c;default:for(x=1,w=h.length;w>x;x++)f[x]=+h[x]+(x%2?l:c)}else if("R"==i)y=[l,c].concat(h.slice(1)),o.pop(),o=o.concat(D(y,m)),f=["R"].concat(h.slice(-2));else if("O"==i)o.pop(),y=I(l,c,h[1],h[2]),y.push(y[0]),o=o.concat(y);else if("U"==i)o.pop(),o=o.concat(I(l,c,h[1],h[2],h[3])),f=["U"].concat(o[o.length-1].slice(-2));else for(var b=0,C=h.length;C>b;b++)f[b]=h[b];if(i=i.toUpperCase(),"O"!=i)switch(f[0]){case"Z":l=u,c=p;break;case"H":l=f[1];break;case"V":c=f[1];break;case"M":u=f[f.length-2],p=f[f.length-1];default:l=f[f.length-2],c=f[f.length-1]}}return o.toString=a,n.abs=s(o),o}function $(t,e,n,i){return[t,e,n,i,n,i]}function A(t,e,n,i,r,o){var a=1/3,s=2/3;return[a*t+s*n,a*e+s*i,a*r+s*n,a*o+s*i,r,o]}function _(e,n,i,r,o,a,s,l,c,u){var p,d=120*H/180,f=H/180*(+o||0),h=[],m=t._.cacher(function(t,e,n){var i=t*N.cos(n)-e*N.sin(n),r=t*N.sin(n)+e*N.cos(n);return{x:i,y:r}});if(u)k=u[0],I=u[1],C=u[2],S=u[3];else{p=m(e,n,-f),e=p.x,n=p.y,p=m(l,c,-f),l=p.x,c=p.y;var g=(N.cos(H/180*o),N.sin(H/180*o),(e-l)/2),v=(n-c)/2,y=g*g/(i*i)+v*v/(r*r);y>1&&(y=N.sqrt(y),i=y*i,r=y*r);var x=i*i,w=r*r,b=(a==s?-1:1)*N.sqrt(G((x*w-x*v*v-w*g*g)/(x*v*v+w*g*g))),C=b*i*v/r+(e+l)/2,S=b*-r*g/i+(n+c)/2,k=N.asin(((n-S)/r).toFixed(9)),I=N.asin(((c-S)/r).toFixed(9));k=C>e?H-k:k,I=C>l?H-I:I,0>k&&(k=2*H+k),0>I&&(I=2*H+I),s&&k>I&&(k-=2*H),!s&&I>k&&(I-=2*H)}var T=I-k;if(G(T)>d){var P=I,$=l,A=c;I=k+d*(s&&I>k?1:-1),l=C+i*N.cos(I),c=S+r*N.sin(I),h=_(l,c,i,r,o,0,s,$,A,[I,P,C,S])}T=I-k;var M=N.cos(k),j=N.sin(k),E=N.cos(I),B=N.sin(I),D=N.tan(T/4),W=4/3*i*D,z=4/3*r*D,F=[e,n],O=[e+W*j,n-z*M],L=[l+W*B,c-z*E],R=[l,c];if(O[0]=2*F[0]-O[0],O[1]=2*F[1]-O[1],u)return[O,L,R].concat(h);h=[O,L,R].concat(h).join().split(",");for(var q=[],V=0,X=h.length;X>V;V++)q[V]=V%2?m(h[V-1],h[V],f).y:m(h[V],h[V+1],f).x;return q}function M(t,e,n,i,r,o,a,s,l){var c=1-l;return{x:X(c,3)*t+3*X(c,2)*l*n+3*c*l*l*r+X(l,3)*a,y:X(c,3)*e+3*X(c,2)*l*i+3*c*l*l*o+X(l,3)*s}}function j(t,e,n,i,r,o,a,s){var l,c=r-2*n+t-(a-2*r+n),u=2*(n-t)-2*(r-n),p=t-n,d=(-u+N.sqrt(u*u-4*c*p))/2/c,f=(-u-N.sqrt(u*u-4*c*p))/2/c,h=[e,s],m=[t,a];return G(d)>"1e12"&&(d=.5),G(f)>"1e12"&&(f=.5),d>0&&1>d&&(l=M(t,e,n,i,r,o,a,s,d),m.push(l.x),h.push(l.y)),f>0&&1>f&&(l=M(t,e,n,i,r,o,a,s,f),m.push(l.x),h.push(l.y)),c=o-2*i+e-(s-2*o+i),u=2*(i-e)-2*(o-i),p=e-i,d=(-u+N.sqrt(u*u-4*c*p))/2/c,f=(-u-N.sqrt(u*u-4*c*p))/2/c,G(d)>"1e12"&&(d=.5),G(f)>"1e12"&&(f=.5),d>0&&1>d&&(l=M(t,e,n,i,r,o,a,s,d),m.push(l.x),h.push(l.y)),f>0&&1>f&&(l=M(t,e,n,i,r,o,a,s,f),m.push(l.x),h.push(l.y)),{min:{x:q.apply(0,m),y:q.apply(0,h)},max:{x:V.apply(0,m),y:V.apply(0,h)}}}function E(t,e){var n=!e&&r(t);if(!e&&n.curve)return s(n.curve);for(var i=P(t),o=e&&P(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},l={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},c=(function(t,e){var n,i;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(_.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":n=e.x+(e.x-(e.bx||e.x)),i=e.y+(e.y-(e.by||e.y)),t=["C",n,i].concat(t.slice(1));break;case"T":e.qx=e.x+(e.x-(e.qx||e.x)),e.qy=e.y+(e.y-(e.qy||e.y)),t=["C"].concat(A(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(A(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat($(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat($(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat($(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat($(e.x,e.y,e.X,e.Y))}return t}),u=function(t,e){if(t[e].length>7){t[e].shift();for(var n=t[e];n.length;)t.splice(e++,0,["C"].concat(n.splice(0,6)));t.splice(e,1),f=V(i.length,o&&o.length||0)}},p=function(t,e,n,r,a){t&&e&&"M"==t[a][0]&&"M"!=e[a][0]&&(e.splice(a,0,["M",r.x,r.y]),n.bx=0,n.by=0,n.x=t[a][1],n.y=t[a][2],f=V(i.length,o&&o.length||0))},d=0,f=V(i.length,o&&o.length||0);f>d;d++){i[d]=c(i[d],a),u(i,d),o&&(o[d]=c(o[d],l)),o&&u(o,d),p(i,o,a,l,d),p(o,i,l,a,d);var h=i[d],m=o&&o[d],g=h.length,v=o&&m.length;a.x=h[g-2],a.y=h[g-1],a.bx=R(h[g-4])||a.x,a.by=R(h[g-3])||a.y,l.bx=o&&(R(m[v-4])||l.x),l.by=o&&(R(m[v-3])||l.y),l.x=o&&m[v-2],l.y=o&&m[v-1]}return o||(n.curve=s(i)),o?[i,o]:i}function B(t,e){if(!e)return t;var n,i,r,o,a,s,l;for(t=E(t),r=0,a=t.length;a>r;r++)for(l=t[r],o=1,s=l.length;s>o;o+=2)n=e.x(l[o],l[o+1]),i=e.y(l[o],l[o+1]),l[o]=n,l[o+1]=i;return t}function D(t,e){for(var n=[],i=0,r=t.length;r-2*!e>i;i+=2){var o=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?r-4==i?o[3]={x:+t[0],y:+t[1]}:r-2==i&&(o[2]={x:+t[0],y:+t[1]},o[3]={x:+t[2],y:+t[3]}):o[0]={x:+t[r-2],y:+t[r-1]}:r-4==i?o[3]=o[2]:i||(o[0]={x:+t[i],y:+t[i+1]}),n.push(["C",(-o[0].x+6*o[1].x+o[2].x)/6,(-o[0].y+6*o[1].y+o[2].y)/6,(o[1].x+6*o[2].x-o[3].x)/6,(o[1].y+6*o[2].y-o[3].y)/6,o[2].x,o[2].y])}return n}var W=e.prototype,z=t.is,F=t._.clone,O="hasOwnProperty",L=/,?([a-z]),?/gi,R=parseFloat,N=Math,H=N.PI,q=N.min,V=N.max,X=N.pow,G=N.abs,U=c(1),Y=c(),Z=c(0,1),Q=t._unit2px,K={path:function(t){return t.attr("path")},circle:function(t){var e=Q(t);return I(e.cx,e.cy,e.r)},ellipse:function(t){var e=Q(t);return I(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=Q(t);return k(e.x,e.y,e.width,e.height,e.rx,e.ry)},image:function(t){var e=Q(t);return k(e.x,e.y,e.width,e.height)},text:function(t){var e=t.node.getBBox();return k(e.x,e.y,e.width,e.height)},g:function(t){var e=t.node.getBBox();return k(e.x,e.y,e.width,e.height)},symbol:function(t){var e=t.getBBox();return k(e.x,e.y,e.width,e.height)},line:function(t){return"M"+[t.attr("x1"),t.attr("y1"),t.attr("x2"),t.attr("y2")]},polyline:function(t){return"M"+t.attr("points")},polygon:function(t){return"M"+t.attr("points")+"z"},svg:function(t){var e=t.node.getBBox();return k(e.x,e.y,e.width,e.height)},deflt:function(t){var e=t.node.getBBox();return k(e.x,e.y,e.width,e.height)}};t.path=r,t.path.getTotalLength=U,t.path.getPointAtLength=Y,t.path.getSubpath=function(t,e,n){if(this.getTotalLength(t)-n<1e-6)return Z(t,e).end;var i=Z(t,n,1);return e?Z(i,e).end:i},W.getTotalLength=function(){return this.node.getTotalLength?this.node.getTotalLength():void 0},W.getPointAtLength=function(t){return Y(this.attr("d"),t)},W.getSubpath=function(e,n){return t.path.getSubpath(this.attr("d"),e,n)},t._.box=o,t.path.findDotsAtSegment=u,t.path.bezierBBox=p,t.path.isPointInsideBBox=d,t.path.isBBoxIntersect=f,t.path.intersection=x,t.path.intersectionNumber=w,t.path.isPointInside=C,t.path.getBBox=S,t.path.get=K,t.path.toRelative=T,t.path.toAbsolute=P,t.path.toCubic=E,t.path.map=B,t.path.toString=a,t.path.clone=s}),i.plugin(function(t,e,n,i){var r=Math.max,o=Math.min,a=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,n=t.length;n>e;e++)t[e]&&(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},s=a.prototype;s.push=function(){for(var t,e,n=0,i=arguments.length;i>n;n++)t=arguments[n],t&&(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},s.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},s.forEach=function(t,e){for(var n=0,i=this.items.length;i>n;n++)if(t.call(e,this.items[n],n)===!1)return this;return this},s.remove=function(){for(;this.length;)this.pop().remove();return this},s.attr=function(t){for(var e=0,n=this.items.length;n>e;e++)this.items[e].attr(t);return this},s.clear=function(){for(;this.length;)this.pop()},s.splice=function(t,e,n){t=0>t?r(this.length+t,0):t,e=r(0,o(this.length-t,e));var i,s=[],l=[],c=[];for(i=2;i<arguments.length;i++)c.push(arguments[i]);for(i=0;e>i;i++)l.push(this[t+i]);for(;i<this.length-t;i++)s.push(this[t+i]);var u=c.length;for(i=0;i<u+s.length;i++)this.items[t+i]=this[t+i]=u>i?c[i]:s[i-u];for(i=this.items.length=this.length-=e-u;this[i];)delete this[i++];return new a(l)},s.exclude=function(t){for(var e=0,n=this.length;n>e;e++)if(this[e]==t)return this.splice(e,1),!0;return!1},s.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},s.getBBox=function(){for(var t=[],e=[],n=[],i=[],a=this.items.length;a--;)if(!this.items[a].removed){var s=this.items[a].getBBox();t.push(s.x),e.push(s.y),n.push(s.x+s.width),i.push(s.y+s.height)}return t=o.apply(0,t),e=o.apply(0,e),n=r.apply(0,n),i=r.apply(0,i),{x:t,y:e,x2:n,y2:i,width:n-t,height:i-e,cx:t+(n-t)/2,cy:e+(i-e)/2}},s.clone=function(t){t=new a;for(var e=0,n=this.items.length;n>e;e++)t.push(this.items[e].clone());return t},s.toString=function(){return"Snap‘s set"},s.type="set",t.set=function(){var t=new a;return arguments.length&&t.push.apply(t,Array.prototype.slice.call(arguments,0)),t}}),i.plugin(function(t,e,n,i){function r(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}}function o(e,n,i){n=f(n).replace(/\.{3}|\u2026/g,e),e=t.parseTransformString(e)||[],n=t.parseTransformString(n)||[];for(var o,a,s,l,p=Math.max(e.length,n.length),d=[],h=[],m=0;p>m;m++){if(s=e[m]||r(n[m]),l=n[m]||r(s),s[0]!=l[0]||"r"==s[0].toLowerCase()&&(s[2]!=l[2]||s[3]!=l[3])||"s"==s[0].toLowerCase()&&(s[3]!=l[3]||s[4]!=l[4])){e=t._.transform2matrix(e,i()),n=t._.transform2matrix(n,i()),d=[["m",e.a,e.b,e.c,e.d,e.e,e.f]],h=[["m",n.a,n.b,n.c,n.d,n.e,n.f]];break}for(d[m]=[],h[m]=[],o=0,a=Math.max(s.length,l.length);a>o;o++)o in s&&(d[m][o]=s[o]),o in l&&(h[m][o]=l[o])}return{from:u(d),to:u(h),f:c(d)}}function a(t){return t}function s(t){return function(e){return+e.toFixed(3)+t}}function l(e){return t.rgb(e[0],e[1],e[2])}function c(t){var e,n,i,r,o,a,s=0,l=[];for(e=0,n=t.length;n>e;e++){for(o="[",a=['"'+t[e][0]+'"'],i=1,r=t[e].length;r>i;i++)a[i]="val["+s++ +"]";o+=a+"]",l[e]=o}return Function("val","return Snap.path.toString.call(["+l+"])")}function u(t){for(var e=[],n=0,i=t.length;i>n;n++)for(var r=1,o=t[n].length;o>r;r++)e.push(t[n][r]);return e}var p={},d=/[a-z]+$/i,f=String;p.stroke=p.fill="colour",e.prototype.equal=function(e,n){var i,r,h=f(this.attr(e)||""),m=this;if(h==+h&&n==+n)return{from:+h,to:+n,f:a};if("colour"==p[e])return i=t.color(h),r=t.color(n),{from:[i.r,i.g,i.b,i.opacity],to:[r.r,r.g,r.b,r.opacity],f:l};if("transform"==e||"gradientTransform"==e||"patternTransform"==e)return n instanceof t.Matrix&&(n=n.toTransformString()),t._.rgTransform.test(n)||(n=t._.svgTransform2string(n)),o(h,n,function(){return m.getBBox(1)});if("d"==e||"path"==e)return i=t.path.toCubic(h,n),{from:u(i[0]),to:u(i[1]),f:c(i[0])};if("points"==e)return i=f(h).split(","),r=f(n).split(","),{from:i,to:r,f:function(t){return t}};var g=h.match(d),v=f(n).match(d);return g&&g==v?{from:parseFloat(h),to:parseFloat(n),f:s(g)}:{from:this.asPX(e),to:this.asPX(e,n),f:a}}}),i.plugin(function(t,n,i,r){for(var o=n.prototype,a="hasOwnProperty",s=("createTouch"in r.doc),l=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","touchstart","touchmove","touchend","touchcancel"],c={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},u=function(t){var e="y"==t?"scrollTop":"scrollLeft";return r.doc.documentElement[e]||r.doc.body[e]},p=function(){this.returnValue=!1},d=function(){return this.originalEvent.preventDefault()},f=function(){this.cancelBubble=!0},h=function(){return this.originalEvent.stopPropagation()},m=function(){return r.doc.addEventListener?function(t,e,n,i){var r=s&&c[e]?c[e]:e,o=function(r){var o=u("y"),l=u("x");if(s&&c[a](e))for(var p=0,f=r.targetTouches&&r.targetTouches.length;f>p;p++)if(r.targetTouches[p].target==t||t.contains(r.targetTouches[p].target)){var m=r;r=r.targetTouches[p],r.originalEvent=m,r.preventDefault=d,r.stopPropagation=h;break}var g=r.clientX+l,v=r.clientY+o;return n.call(i,r,g,v)};return e!==r&&t.addEventListener(e,o,!1),t.addEventListener(r,o,!1),function(){return e!==r&&t.removeEventListener(e,o,!1),t.removeEventListener(r,o,!1),!0}}:r.doc.attachEvent?function(t,e,n,i){var o=function(t){t=t||r.win.event;var e=u("y"),o=u("x"),a=t.clientX+o,s=t.clientY+e;return t.preventDefault=t.preventDefault||p,t.stopPropagation=t.stopPropagation||f,n.call(i,t,a,s)};t.attachEvent("on"+e,o);var a=function(){return t.detachEvent("on"+e,o),!0};return a}:void 0}(),g=[],v=function(n){for(var i,r=n.clientX,o=n.clientY,a=u("y"),l=u("x"),c=g.length;c--;){if(i=g[c],s){for(var p,d=n.touches&&n.touches.length;d--;)if(p=n.touches[d],p.identifier==i.el._drag.id||i.el.node.contains(p.target)){r=p.clientX,o=p.clientY,(n.originalEvent?n.originalEvent:n).preventDefault();break}}else n.preventDefault();var f=i.el.node;t._.glob,f.nextSibling,f.parentNode,f.style.display;r+=l,o+=a,e("snap.drag.move."+i.el.id,i.move_scope||i.el,r-i.el._drag.x,o-i.el._drag.y,r,o,n)}},y=function(n){t.unmousemove(v).unmouseup(y);for(var i,r=g.length;r--;)i=g[r],i.el._drag={},e("snap.drag.end."+i.el.id,i.end_scope||i.start_scope||i.move_scope||i.el,n);g=[]},x=l.length;x--;)!function(e){t[e]=o[e]=function(n,i){return t.is(n,"function")&&(this.events=this.events||[],this.events.push({name:e,f:n,unbind:m(this.shape||this.node||r.doc,e,n,i||this)})),this},t["un"+e]=o["un"+e]=function(t){for(var n=this.events||[],i=n.length;i--;)if(n[i].name==e&&(n[i].f==t||!t))return n[i].unbind(),n.splice(i,1),!n.length&&delete this.events,this;return this}}(l[x]);o.hover=function(t,e,n,i){return this.mouseover(t,n).mouseout(e,i||n)},o.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var w=[];o.drag=function(n,i,r,o,a,s){function l(l,c,u){(l.originalEvent||l).preventDefault(),this._drag.x=c,this._drag.y=u,this._drag.id=l.identifier,!g.length&&t.mousemove(v).mouseup(y),g.push({el:this,move_scope:o,start_scope:a,end_scope:s}),i&&e.on("snap.drag.start."+this.id,i),n&&e.on("snap.drag.move."+this.id,n),r&&e.on("snap.drag.end."+this.id,r),e("snap.drag.start."+this.id,a||o||this,c,u,l)}if(!arguments.length){var c;return this.drag(function(t,e){this.attr({transform:c+(c?"T":"t")+[t,e]})},function(){c=this.transform().local})}return this._drag={},w.push({el:this,start:l}),this.mousedown(l),this},o.undrag=function(){for(var n=w.length;n--;)w[n].el==this&&(this.unmousedown(w[n].start),w.splice(n,1),e.unbind("snap.drag.*."+this.id));return!w.length&&t.unmousemove(v).unmouseup(y),this}}),i.plugin(function(t,n,i,r){var o=(n.prototype,i.prototype),a=/^\s*url\((.+)\)/,s=String,l=t._.$;t.filter={},o.filter=function(e){var i=this;"svg"!=i.type&&(i=i.paper);var r=t.parse(s(e)),o=t._.id(),a=(i.node.offsetWidth,i.node.offsetHeight,l("filter"));return l(a,{id:o,filterUnits:"userSpaceOnUse"}),a.appendChild(r.node),i.defs.appendChild(a),new n(a)},e.on("snap.util.getattr.filter",function(){e.stop();var n=l(this.node,"filter");if(n){var i=s(n).match(a);return i&&t.select(i[1])}}),e.on("snap.util.attr.filter",function(i){if(i instanceof n&&"filter"==i.type){e.stop();var r=i.node.id;r||(l(i.node,{id:i.id}),r=i.id),l(this.node,{filter:t.url(r)})}i&&"none"!=i||(e.stop(),this.node.removeAttribute("filter"))}),t.filter.blur=function(e,n){null==e&&(e=2);var i=null==n?e:[e,n];return t.format('<feGaussianBlur stdDeviation="{def}"/>',{def:i})},t.filter.blur.toString=function(){return this()},t.filter.shadow=function(e,n,i,r){return r=r||"#000",null==i&&(i=4),"string"==typeof i&&(r=i,i=4),null==e&&(e=0,n=2),null==n&&(n=e),r=t.color(r),t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',{color:r,dx:e,dy:n,blur:i})},t.filter.shadow.toString=function(){return this()},t.filter.grayscale=function(e){return null==e&&(e=1),t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',{a:.2126+.7874*(1-e),b:.7152-.7152*(1-e),c:.0722-.0722*(1-e),d:.2126-.2126*(1-e),e:.7152+.2848*(1-e),f:.0722-.0722*(1-e),g:.2126-.2126*(1-e),h:.0722+.9278*(1-e)})},t.filter.grayscale.toString=function(){return this()},t.filter.sepia=function(e){return null==e&&(e=1),t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',{a:.393+.607*(1-e),b:.769-.769*(1-e),c:.189-.189*(1-e),d:.349-.349*(1-e),e:.686+.314*(1-e),f:.168-.168*(1-e),g:.272-.272*(1-e),h:.534-.534*(1-e),i:.131+.869*(1-e)})},t.filter.sepia.toString=function(){return this()},t.filter.saturate=function(e){return null==e&&(e=1),t.format('<feColorMatrix type="saturate" values="{amount}"/>',{amount:1-e})},t.filter.saturate.toString=function(){return this()},t.filter.hueRotate=function(e){return e=e||0,t.format('<feColorMatrix type="hueRotate" values="{angle}"/>',{angle:e})},t.filter.hueRotate.toString=function(){return this()},t.filter.invert=function(e){return null==e&&(e=1),t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',{amount:e,amount2:1-e})},t.filter.invert.toString=function(){return this()},t.filter.brightness=function(e){return null==e&&(e=1),t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',{amount:e})},t.filter.brightness.toString=function(){return this()},t.filter.contrast=function(e){return null==e&&(e=1),t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',{amount:e,amount2:.5-e/2})},t.filter.contrast.toString=function(){return this()}}),i}),function(t){function e(){var e=window.innerHeight,n=document.compatMode;return(n||!t.support.boxModel)&&(e="CSS1Compat"==n?document.documentElement.clientHeight:document.body.clientHeight),e}t(window).scroll(function(){var n=e(),i=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,r=[];t(".stat__frame").each(function(){r.push(t(this))}),r.length&&t(r).each(function(){var e=t(this),r=e.offset().top,o=e.height(),a=e.data("inview")||!1;i>r+o||r>i+n?a&&(e.data("inview",!1),e.trigger("inview",[!1])):r+o>i&&(a||(e.data("inview",!0),e.trigger("inview",[!0])))})}),t(function(){t(window).scroll()})}(jQuery),function(){jQuery(function(t){function e(e,n){t({counter:0}).animate({counter:n},{duration:2500,easing:"swing",step:function(){var t=Math.ceil(this.counter),i=t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");e.text(i);0!==n?this.counter/n:1}})}t(".stat__frame").each(function(){var n=t(this),i=n.find(".stat__number"),r=i.text();i.text("").removeClass("stat__number--hide"),n.bind("inview",function(t,o){if(!n.hasClass("animation-complete")){if(o!==!0)return!1;e(i,r),n.addClass("animation-complete")}})})})}();var ajaxReplace=function(){$(".js-ajax-replace").each(function(){var t=$(this),e=t.attr("class");$.get(t.attr("src"),function(n){var i=$(n).find("svg");i.attr("class",e).find("style").remove().end().attr("fill","").find("*").attr("fill",""),t.replaceWith(i)})})};$(document).ready(function(){ajaxReplace()});var fancyFancy=function(){$(".fancybox-media").fancybox({openEffect:"none",closeEffect:"none",helpers:{media:{}}})};$(document).ready(function(){$.isFunction($.fn.fancybox)&&fancyFancy()});var clickable=function(t,e){e=e||!1,e&&t.find("a").click(function(t){t.stopPropagation()}),t.click(function(){t.not(this).removeClass("active"),$(this).toggleClass("active")})};jQuery(function(t){var e=t("#js-nav-trigger");clickable(t("#menu-main").find(".menu-item-has-children"),!0),clickable(e),e.on("click",function(){var e=t("body");e.hasClass("active")?(t("body, html").toggleClass("locked"),t(".main-head__trigger span").text("Menu")):(t("body, html").toggleClass("locked"),t(".main-head__trigger span").text("Close")),e.toggleClass("active")}),t(window).scroll(function(){var e=t(".hero-block").outerHeight();t(document).scrollTop()<=e-400?t(".main-head").removeClass("main-head--sticky").addClass("main-head--normal"):t(".main-head").removeClass("main-head--normal").addClass("main-head--sticky")})});var iconCallouts=function(){var t=$(".icon-callouts");t.removeClass("visible"),t.waypoint(function(){$(this).addClass("visible")},{offset:"50%"})},centeredCTA=function(){var t=$(".centered-cta"),e=$(".centered-cta__wrap");t.removeClass("visible"),e.removeClass("visible"),t.waypoint(function(){$(this).addClass("visible"),e.addClass("visible")},{offset:"50%"})},columnCallout=function(){var t=$(".column-callout");t.removeClass("visible"),t.waypoint(function(){t.addClass("visible")},{offset:"50%"})},coachesBlock=function(){var t=$(".coaches-block");t.removeClass("visible"),t.waypoint(function(){t.addClass("visible")},{offset:"50%"})};$(document).ready(function(){$.isFunction($.fn.waypoint)&&(iconCallouts(),centeredCTA(),columnCallout(),coachesBlock())});
/*------------------------------------*\
    ::Map
\*------------------------------------*/
(function($) {

    // global array of maps
    var allMaps = [];

    /*------------------------------------*\
        ::Render Map
    \*------------------------------------*/
    function renderMap($el) {
        // marker elements
        var $markers = $el.find('.js-map-marker');
        // map setup
        var args = {
            zoom        : 13,
            center      : new google.maps.LatLng(0, 0),
            draggable: true,
            scrollwheel: false,
            mapTypeId   : google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            streetViewControl: false,
            scaleControl: false,
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
        };
        // create map
        var map = new google.maps.Map($el[0], args);
        // add a markers reference
        map.markers = [];
        // add markers
        $markers.each(function(){
            addMarker($(this), map);
        });
        // center map
        centerMap(map);
        // style the map
        styleMap(map);

        // collect this in an array
        allMaps.push(map);
    }

    /*------------------------------------*\
        ::Style Map
    \*------------------------------------*/
    function styleMap(map) {
        // establish styles
        // taken from
        var styles = [];
        // apply them to the map
        var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
    }

    /*------------------------------------*\
        ::Add Markers
    \*------------------------------------*/
    function addMarker($marker, map) {
        // set location
        var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
        // create marker
        var marker = new google.maps.Marker({
            position    : latlng,
            map         : map,
            icon        : '../images/modules/map-block/marker-green-lg.png'
        });
        // add to array
        map.markers.push(marker);
        // if marker contains HTML, add it to an infoWindow
        if($marker.html()) {
            // create the info window
            var infowindow = new google.maps.InfoWindow({
                content     : $marker.html(),
                icon        : ''
            });
            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
    }
    /*------------------------------------*\
        ::Center Map to Markers
    \*------------------------------------*/
    function centerMap(map) {
        // set bounds
        var bounds = new google.maps.LatLngBounds();
        // loop through all markers and create bounds
        $.each(map.markers, function(i, marker){
            var xAdjust = 0; // negative shifts left and positive shifts right
            var yAdjust = ($(window).width() > 800 ? 0.005 : 0.012); // positive shifts up and negative shifts down
            var latlng = new google.maps.LatLng(marker.position.lat() + yAdjust, marker.position.lng() + xAdjust);
            bounds.extend(latlng);
        });
        // if there's only 1 marker
        if(map.markers.length == 1) {
            // set it as the center of map
            map.setCenter(bounds.getCenter());
            map.setZoom(13);
        // if there are many markers
        } else {
            // fit to bounds
            map.fitBounds(bounds);
        }
    }
    // recenter the map on window resize
    $(window).resize(function(){
        for (var i = 0; i < allMaps.length; i++) {
            centerMap(allMaps[i]);
            // set draggable for mobile
            var mapHeight = $(allMaps[i].__gm.ca).height();
            var isMobile = ($(window).height() > mapHeight + 100 ? true : false);
            allMaps[i].setOptions({draggable: isMobile});
        }
    });

    /*------------------------------------*\
        ::Add Map
    \*------------------------------------*/
    $(document).ready(function(){
        $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCiRv6_rpOrMHFKAOvvCCLWazCdwWge-Aw')
            .done(function( script, textStatus ) {
                $('#js-map').each(function(){
                    renderMap($(this));
                });
                $('#js-center-map').each(function(){
                    renderMap($(this));
                });
            })
            .fail(function( jqxhr, settings, exception ) {
                console.log('error getting map: ' + exception);
            });
    });

})(jQuery);
/*------------------------------------*\
    :: Owl JS 
\*------------------------------------*/
// Load with sliders.min.js to save on HTTP request
/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
            base.$elem.data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));
/*------------------------------------*\
    :: Basic slider
\*------------------------------------*/
var basicSlider = function(){
    var $prev = '../images/global/arrow-prev.png';
    var $next = '../images/global/arrow-next.png';
    var $slides = $('.js-owl-carousel--basic-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            navigation:true,
            singleItem: true,
            pagination: true,
            navigationText: [
                '<img src="'+ $prev +'" alt="Arrow Previous">',
                '<img src="'+ $next +'" alt="Arrow Next">'
            ],
        });
    }
};
jQuery(function($){
    basicSlider();
});  

/*------------------------------------*\
    :: Button Slider
\*------------------------------------*/
var buttonSlider = function(){
    var $slides = $('.js-owl-carousel--button-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            singleItem: true,
            pagination: false,
            mouseDrag:  false,
            touchDrag:  false,
            navigation: false,
            addClassActive: true,
            transitionStyle: "fade",
            afterInit: function(){
                var that = this;
                var $nav = that.$elem.next().find('a');
                $nav.on('click', function(){
                    var $this = $(this);
                    $nav.removeClass('active');
                    $this.addClass('active');
                    that.goTo($this.index());
                }).eq(0).trigger('click');
            }
        });
    }
};
$(document).ready(function() {
    buttonSlider();
});
/*------------------------------------*\
    ::  Dot Carousel
\*------------------------------------*/    
var dotCarousel = function(){
    var $slides = $('.js-owl-carousel--dot-carousel');
    if($slides.length > 0){
        $slides.owlCarousel({
            items : 5,
            itemsCustom : [
                [0, 1],
                [1025, 2],
                [1700, 3]
            ],
            pagination : true,
            navigation : false
        });
    }
};
$(document).ready(function() {
    dotCarousel();
});
/*------------------------------------*\
    :: dot slider
\*------------------------------------*/
var dotSlider = function(){
    var $slides = $('.js-owl-carousel--dot-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            navigation:false,
            singleItem: true,
            pagination: true
        });
    }
};
jQuery(function($){
    dotSlider();
}); 
/*------------------------------------*\
    :: Hero slider
\*------------------------------------*/
var heroSlider = function(){
    var $prev = '../images/global/arrow-prev.png';
    var $next = '../images/global/arrow-next.png';
    var $slides = $('.js-owl-carousel--hero-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            navigation:true,
            singleItem: true,
            pagination: true,
            navigationText: [
                '<img src="'+ $prev +'" alt="Arrow Previous">',
                '<img src="'+ $next +'" alt="Arrow Next">'
            ],
        });
    }
};
jQuery(function($){
    heroSlider();
});  

/*------------------------------------*\
    :: Tab Slider
\*------------------------------------*/
var tabSlider = function(){
    var $slides = $('.js-owl-carousel--tab-slider');
    if($slides.length > 0){
        $slides.owlCarousel({
            singleItem: true,
            pagination: false,
            mouseDrag:  false,
            touchDrag:  false,
            navigation: false,
            addClassActive: true,
            afterInit: function(){
                var that = this;
                var $nav = that.$elem.parent().next().find('li');
                $nav.on('click', function(){
                    var $this = $(this);
                    $nav.removeClass('active');
                    $this.addClass('active');
                    that.goTo($this.index());
                }).eq(0).trigger('click');
            }
        });
    }
};
$(document).ready(function() {
    tabSlider();
});
// Snap.svg 0.2.0
//
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2013-12-23
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.4.2 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.4.2",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        wildcard = "*",
        fun = function () {},
        numsort = function (a, b) {
            return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     > Arguments

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners
    \*/
        eve = function (name, scope) {
            name = String(name);
            var e = events,
                oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                f = false,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event,
                errors = [];
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l)
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out.length ? out : null;
        };
        // Undocumented. Debug only.
        eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     > Arguments

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };

    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment.
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt()` function will be called before `eatIt()`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        name = String(name);
        if (typeof f != "function") {
            return function () {};
        }
        var names = name.split(separator),
            e = events;
        for (var i = 0, ii = names.length; i < ii; i++) {
            e = e.n;
            e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
        }
        e.f = e.f || [];
        for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
            return fun;
        }
        e.f.push(f);
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     > Arguments
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     > Arguments
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
        }
        return current_event;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = {n: {}};
            return;
        }
        var names = name.split(separator),
            e,
            key,
            splice,
            i, ii, j, jj,
            cur = [events];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                    }
                } else {
                    for (key in e) if (e[has](key)) {
                        splice.push(e[key]);
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function () {
            eve.unbind(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : (typeof define != "undefined" ? (define("eve", [], function() { return eve; })) : (glob.eve = eve));
})(this);

(function (glob, factory) {
    // AMD support
    if (typeof define === "function" && define.amd) {
        // Define as an anonymous module
        define(["eve"], function( eve ) {
            return factory(glob, eve);
        });
    } else {
        // Browser globals (glob is window)
        // Snap adds itself to window
        factory(glob, glob.eve);
    }
}(this, function (window, eve) {
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var mina = (function (eve) {
    var animations = {},
    requestAnimFrame = window.requestAnimationFrame       ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame    ||
                       window.oRequestAnimationFrame      ||
                       window.msRequestAnimationFrame     ||
                       function (callback) {
                           setTimeout(callback, 16);
                       },
    isArray = Array.isArray || function (a) {
        return a instanceof Array ||
            Object.prototype.toString.call(a) == "[object Array]";
    },
    idgen = 0,
    idprefix = "M" + (+new Date).toString(36),
    ID = function () {
        return idprefix + (idgen++).toString(36);
    },
    diff = function (a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for (var i = 0, ii = a.length; i < ii; i++) {
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function (bb) {
            return a + dif * (bb - b);
        };
    },
    timer = Date.now || function () {
        return +new Date;
    },
    sta = function (val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    },
    speed = function (val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    },
    duration = function (val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    },
    stopit = function () {
        var a = this;
        delete animations[a.id];
        eve("mina.stop." + a.id, a);
    },
    pause = function () {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.pdif = a.get() - a.b;
    },
    resume = function () {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
    },
    frame = function () {
        var len = 0;
        for (var i in animations) if (animations.hasOwnProperty(i)) {
            var a = animations[i],
                b = a.get(),
                res;
            len++;
            a.s = (b - a.b) / (a.dur / a.spd);
            if (a.s >= 1) {
                delete animations[i];
                a.s = 1;
                len--;
                (function (a) {
                    setTimeout(function () {
                        eve("mina.finish." + a.id, a);
                    });
                }(a));
            }
            if (isArray(a.start)) {
                res = [];
                for (var j = 0, jj = a.start.length; j < jj; j++) {
                    res[j] = +a.start[j] +
                        (a.end[j] - a.start[j]) * a.easing(a.s);
                }
            } else {
                res = +a.start + (a.end - a.start) * a.easing(a.s);
            }
            a.set(res);
        }
        len && requestAnimFrame(frame);
    },
    // SIERRA Unfamiliar with the word _slave_ in this context. Also, I don't know what _gereal_ means. Do you mean _general_?
    /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in gereal case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o }
    \*/
    mina = function (a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume
        };
        animations[anim.id] = anim;
        var len = 0, i;
        for (i in animations) if (animations.hasOwnProperty(i)) {
            len++;
            if (len == 2) {
                break;
            }
        }
        len == 1 && requestAnimFrame(frame);
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/
    mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/
    mina.getById = function (id) {
        return animations[id] || null;
    };

    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.linear = function (n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeout = function (n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easein = function (n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeinout = function (n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backin = function (n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backout = function (n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.elastic = function (n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) *
            (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.bounce = function (n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < (1 / p)) {
            l = s * n * n;
        } else {
            if (n < (2 / p)) {
                n -= (1.5 / p);
                l = s * n * n + .75;
            } else {
                if (n < (2.5 / p)) {
                    n -= (2.25 / p);
                    l = s * n * n + .9375;
                } else {
                    n -= (2.625 / p);
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
})(typeof eve == "undefined" ? function () {} : eve);
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Snap = (function() {
Snap.version = "0.2.0";
/*\
 * Snap
 [ method ]
 **
 * Creates a drawing surface or wraps existing SVG element.
 **
 - width (number|string) width of surface
 - height (number|string) height of surface
 * or
 - DOM (SVGElement) element to be wrapped into Snap structure
 * or
 - query (string) CSS query selector
 = (object) @Element
\*/
function Snap(w, h) {
    if (w) {
        if (w.tagName) {
            return wrap(w);
        }
        if (w instanceof Element) {
            return w;
        }
        if (h == null) {
            w = glob.doc.querySelector(w);
            return wrap(w);
        }
    }
    w = w == null ? "100%" : w;
    h = h == null ? "100%" : h;
    return new Paper(w, h);
}
Snap.toString = function () {
    return "Snap v" + this.version;
};
Snap._ = {};
var glob = {
    win: window,
    doc: window.document
};
Snap._.glob = glob;
var has = "hasOwnProperty",
    Str = String,
    toFloat = parseFloat,
    toInt = parseInt,
    math = Math,
    mmax = math.max,
    mmin = math.min,
    abs = math.abs,
    pow = math.pow,
    PI = math.PI,
    round = math.round,
    E = "",
    S = " ",
    objectToString = Object.prototype.toString,
    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
    reURLValue = /^url\(#?([^)]+)\)$/,
    spaces = "\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029",
    separator = new RegExp("[," + spaces + "]+"),
    whitespace = new RegExp("[" + spaces + "]", "g"),
    commaSpaces = new RegExp("[" + spaces + "]*,[" + spaces + "]*"),
    hsrg = {hs: 1, rg: 1},
    pathCommand = new RegExp("([a-z])[" + spaces + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + spaces + "]*,?[" + spaces + "]*)+)", "ig"),
    tCommand = new RegExp("([rstm])[" + spaces + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + spaces + "]*,?[" + spaces + "]*)+)", "ig"),
    pathValues = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + spaces + "]*,?[" + spaces + "]*", "ig"),
    idgen = 0,
    idprefix = "S" + (+new Date).toString(36),
    ID = function () {
        return idprefix + (idgen++).toString(36);
    },
    xlink = "http://www.w3.org/1999/xlink",
    xmlns = "http://www.w3.org/2000/svg",
    hub = {},
    URL = Snap.url = function (url) {
        return "url('#" + url + "')";
    };

function $(el, attr) {
    if (attr) {
        if (typeof el == "string") {
            el = $(el);
        }
        if (typeof attr == "string") {
            if (attr.substring(0, 6) == "xlink:") {
                return el.getAttributeNS(xlink, attr.substring(6));
            }
            if (attr.substring(0, 4) == "xml:") {
                return el.getAttributeNS(xmlns, attr.substring(4));
            }
            return el.getAttribute(attr);
        }
        for (var key in attr) if (attr[has](key)) {
            var val = Str(attr[key]);
            if (val) {
                if (key.substring(0, 6) == "xlink:") {
                    el.setAttributeNS(xlink, key.substring(6), val);
                } else if (key.substring(0, 4) == "xml:") {
                    el.setAttributeNS(xmlns, key.substring(4), val);
                } else {
                    el.setAttribute(key, val);
                }
            } else {
                el.removeAttribute(key);
            }
        }
    } else {
        el = glob.doc.createElementNS(xmlns, el);
        // el.style && (el.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
    }
    return el;
}
Snap._.$ = $;
Snap._.id = ID;
function getAttrs(el) {
    var attrs = el.attributes,
        name,
        out = {};
    for (var i = 0; i < attrs.length; i++) {
        if (attrs[i].namespaceURI == xlink) {
            name = "xlink:";
        } else {
            name = "";
        }
        name += attrs[i].name;
        out[name] = attrs[i].textContent;
    }
    return out;
}
function is(o, type) {
    type = Str.prototype.toLowerCase.call(type);
    if (type == "finite") {
        return isFinite(o);
    }
    if (type == "array" &&
        (o instanceof Array || Array.isArray && Array.isArray(o))) {
        return true;
    }
    return  (type == "null" && o === null) ||
            (type == typeof o && o !== null) ||
            (type == "object" && o === Object(o)) ||
            objectToString.call(o).slice(8, -1).toLowerCase() == type;
}
/*\
 * Snap.format
 [ method ]
 **
 * Replaces construction of type `{<name>}` to the corresponding argument
 **
 - token (string) string to format
 - json (object) object which properties are used as a replacement
 = (string) formatted string
 > Usage
 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
 |     x: 10,
 |     y: 20,
 |     dim: {
 |         width: 40,
 |         height: 50,
 |         "negative width": -40
 |     }
 | }));
\*/
Snap.format = (function () {
    var tokenRegex = /\{([^\}]+)\}/g,
        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
        replacer = function (all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
        };
    return function (str, obj) {
        return Str(str).replace(tokenRegex, function (all, key) {
            return replacer(all, key, obj);
        });
    };
})();
var preload = (function () {
    function onerror() {
        this.parentNode.removeChild(this);
    }
    return function (src, f) {
        var img = glob.doc.createElement("img"),
            body = glob.doc.body;
        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
        img.onload = function () {
            f.call(img);
            img.onload = img.onerror = null;
            body.removeChild(img);
        };
        img.onerror = onerror;
        body.appendChild(img);
        img.src = src;
    };
}());
function clone(obj) {
    if (typeof obj == "function" || Object(obj) !== obj) {
        return obj;
    }
    var res = new obj.constructor;
    for (var key in obj) if (obj[has](key)) {
        res[key] = clone(obj[key]);
    }
    return res;
}
Snap._.clone = clone;
function repush(array, item) {
    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
    }
}
function cacher(f, scope, postprocessor) {
    function newf() {
        var arg = Array.prototype.slice.call(arguments, 0),
            args = arg.join("\u2400"),
            cache = newf.cache = newf.cache || {},
            count = newf.count = newf.count || [];
        if (cache[has](args)) {
            repush(count, args);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        count.length >= 1e3 && delete cache[count.shift()];
        count.push(args);
        cache[args] = f.apply(scope, arg);
        return postprocessor ? postprocessor(cache[args]) : cache[args];
    }
    return newf;
}
Snap._.cacher = cacher;
function angle(x1, y1, x2, y2, x3, y3) {
    if (x3 == null) {
        var x = x1 - x2,
            y = y1 - y2;
        if (!x && !y) {
            return 0;
        }
        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
    } else {
        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
    }
}
function rad(deg) {
    return deg % 360 * PI / 180;
}
function deg(rad) {
    return rad * 180 / PI % 360;
}
function x_y() {
    return this.x + S + this.y;
}
function x_y_w_h() {
    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
}

/*\
 * Snap.rad
 [ method ]
 **
 * Transform angle to radians
 - deg (number) angle in degrees
 = (number) angle in radians
\*/
Snap.rad = rad;
/*\
 * Snap.deg
 [ method ]
 **
 * Transform angle to degrees
 - rad (number) angle in radians
 = (number) angle in degrees
\*/
Snap.deg = deg;
// SIERRA for which point is the angle calculated?
/*\
 * Snap.angle
 [ method ]
 **
 * Returns an angle between two or three points
 > Parameters
 - x1 (number) x coord of first point
 - y1 (number) y coord of first point
 - x2 (number) x coord of second point
 - y2 (number) y coord of second point
 - x3 (number) #optional x coord of third point
 - y3 (number) #optional y coord of third point
 = (number) angle in degrees
\*/
Snap.angle = angle;
/*\
 * Snap.is
 [ method ]
 **
 * Handy replacement for the `typeof` operator
 - o (…) any object or primitive
 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
 = (boolean) `true` if given value is of given type
\*/
Snap.is = is;
/*\
 * Snap.snapTo
 [ method ]
 **
 * Snaps given value to given grid
 - values (array|number) given array of values or step of the grid
 - value (number) value to adjust
 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
 = (number) adjusted value
\*/
Snap.snapTo = function (values, value, tolerance) {
    tolerance = is(tolerance, "finite") ? tolerance : 10;
    if (is(values, "array")) {
        var i = values.length;
        while (i--) if (abs(values[i] - value) <= tolerance) {
            return values[i];
        }
    } else {
        values = +values;
        var rem = value % values;
        if (rem < tolerance) {
            return value - rem;
        }
        if (rem > values - tolerance) {
            return value - rem + values;
        }
    }
    return value;
};

// MATRIX
function Matrix(a, b, c, d, e, f) {
    if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
        this.a = a.a;
        this.b = a.b;
        this.c = a.c;
        this.d = a.d;
        this.e = a.e;
        this.f = a.f;
        return;
    }
    if (a != null) {
        this.a = +a;
        this.b = +b;
        this.c = +c;
        this.d = +d;
        this.e = +e;
        this.f = +f;
    } else {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.e = 0;
        this.f = 0;
    }
}
(function (matrixproto) {
    /*\
     * Matrix.add
     [ method ]
     **
     * Adds the given matrix to existing one
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - matrix (object) @Matrix
    \*/
    matrixproto.add = function (a, b, c, d, e, f) {
        var out = [[], [], []],
            m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
            matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
            x, y, z, res;

        if (a && a instanceof Matrix) {
            matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
        }

        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                res = 0;
                for (z = 0; z < 3; z++) {
                    res += m[x][z] * matrix[z][y];
                }
                out[x][y] = res;
            }
        }
        this.a = out[0][0];
        this.b = out[1][0];
        this.c = out[0][1];
        this.d = out[1][1];
        this.e = out[0][2];
        this.f = out[1][2];
        return this;
    };
    /*\
     * Matrix.invert
     [ method ]
     **
     * Returns an inverted version of the matrix
     = (object) @Matrix
    \*/
    matrixproto.invert = function () {
        var me = this,
            x = me.a * me.d - me.b * me.c;
        return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
    };
    /*\
     * Matrix.clone
     [ method ]
     **
     * Returns a copy of the matrix
     = (object) @Matrix
    \*/
    matrixproto.clone = function () {
        return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    /*\
     * Matrix.translate
     [ method ]
     **
     * Translate the matrix
     - x (number) horizontal offset distance
     - y (number) vertical offset distance
    \*/
    matrixproto.translate = function (x, y) {
        return this.add(1, 0, 0, 1, x, y);
    };
    /*\
     * Matrix.scale
     [ method ]
     **
     * Scales the matrix
     - x (number) amount to be scaled, with `1` resulting in no change
     - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
     - cx (number) #optional horizontal origin point from which to scale
     - cy (number) #optional vertical origin point from which to scale
     * Default cx, cy is the middle point of the element.
    \*/
    matrixproto.scale = function (x, y, cx, cy) {
        y == null && (y = x);
        (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
        this.add(x, 0, 0, y, 0, 0);
        (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
        return this;
    };
    /*\
     * Matrix.rotate
     [ method ]
     **
     * Rotates the matrix
     - a (number) angle of rotation, in degrees
     - x (number) horizontal origin point from which to rotate
     - y (number) vertical origin point from which to rotate
    \*/
    matrixproto.rotate = function (a, x, y) {
        a = rad(a);
        x = x || 0;
        y = y || 0;
        var cos = +math.cos(a).toFixed(9),
            sin = +math.sin(a).toFixed(9);
        this.add(cos, sin, -sin, cos, x, y);
        return this.add(1, 0, 0, 1, -x, -y);
    };
    /*\
     * Matrix.x
     [ method ]
     **
     * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
     - x (number)
     - y (number)
     = (number) x
    \*/
    matrixproto.x = function (x, y) {
        return x * this.a + y * this.c + this.e;
    };
    /*\
     * Matrix.y
     [ method ]
     **
     * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
     - x (number)
     - y (number)
     = (number) y
    \*/
    matrixproto.y = function (x, y) {
        return x * this.b + y * this.d + this.f;
    };
    matrixproto.get = function (i) {
        return +this[Str.fromCharCode(97 + i)].toFixed(4);
    };
    matrixproto.toString = function () {
        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
    };
    matrixproto.offset = function () {
        return [this.e.toFixed(4), this.f.toFixed(4)];
    };
    function norm(a) {
        return a[0] * a[0] + a[1] * a[1];
    }
    function normalize(a) {
        var mag = math.sqrt(norm(a));
        a[0] && (a[0] /= mag);
        a[1] && (a[1] /= mag);
    }
    /*\
     * Matrix.split
     [ method ]
     **
     * Splits matrix into primitive transformations
     = (object) in format:
     o dx (number) translation by x
     o dy (number) translation by y
     o scalex (number) scale by x
     o scaley (number) scale by y
     o shear (number) shear
     o rotate (number) rotation in deg
     o isSimple (boolean) could it be represented via simple transformations
    \*/
    matrixproto.split = function () {
        var out = {};
        // translation
        out.dx = this.e;
        out.dy = this.f;

        // scale and shear
        var row = [[this.a, this.c], [this.b, this.d]];
        out.scalex = math.sqrt(norm(row[0]));
        normalize(row[0]);

        out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
        row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

        out.scaley = math.sqrt(norm(row[1]));
        normalize(row[1]);
        out.shear /= out.scaley;

        // rotation
        var sin = -row[0][1],
            cos = row[1][1];
        if (cos < 0) {
            out.rotate = deg(math.acos(cos));
            if (sin < 0) {
                out.rotate = 360 - out.rotate;
            }
        } else {
            out.rotate = deg(math.asin(sin));
        }

        out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
        out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
        out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
        return out;
    };
    /*\
     * Matrix.toTransformString
     [ method ]
     **
     * Returns transform string that represents given matrix
     = (string) transform string
    \*/
    matrixproto.toTransformString = function (shorter) {
        var s = shorter || this.split();
        if (s.isSimple) {
            s.scalex = +s.scalex.toFixed(4);
            s.scaley = +s.scaley.toFixed(4);
            s.rotate = +s.rotate.toFixed(4);
            return  (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) +
                    (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
                    (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E);
        } else {
            return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
        }
    };
})(Matrix.prototype);
/*\
 * Snap.Matrix
 [ method ]
 **
 * Utility method
 **
 * Returns a matrix based on the given parameters
 - a (number)
 - b (number)
 - c (number)
 - d (number)
 - e (number)
 - f (number)
 * or
 - svgMatrix (SVGMatrix)
 = (object) @Matrix
\*/
Snap.Matrix = Matrix;
// Colour
/*\
 * Snap.getRGB
 [ method ]
 **
 * Parses color string as RGB object
 - color (string) color string in one of the following formats:
 # <ul>
 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
 # </ul>
 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) true if string can't be parsed
 o }
\*/
Snap.getRGB = cacher(function (colour) {
    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    if (colour == "none") {
        return {r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString};
    }
    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
    if (!colour) {
        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
    }
    var res,
        red,
        green,
        blue,
        opacity,
        t,
        values,
        rgb = colour.match(colourRegExp);
    if (rgb) {
        if (rgb[2]) {
            blue = toInt(rgb[2].substring(5), 16);
            green = toInt(rgb[2].substring(3, 5), 16);
            red = toInt(rgb[2].substring(1, 3), 16);
        }
        if (rgb[3]) {
            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
            green = toInt((t = rgb[3].charAt(2)) + t, 16);
            red = toInt((t = rgb[3].charAt(1)) + t, 16);
        }
        if (rgb[4]) {
            values = rgb[4].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue *= 2.55);
            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
        }
        if (rgb[5]) {
            values = rgb[5].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsb2rgb(red, green, blue, opacity);
        }
        if (rgb[6]) {
            values = rgb[6].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap.hsl2rgb(red, green, blue, opacity);
        }
        red = mmin(math.round(red), 255);
        green = mmin(math.round(green), 255);
        blue = mmin(math.round(blue), 255);
        opacity = mmin(mmax(opacity, 0), 1);
        rgb = {r: red, g: green, b: blue, toString: rgbtoString};
        rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
        rgb.opacity = is(opacity, "finite") ? opacity : 1;
        return rgb;
    }
    return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString};
}, Snap);
// SIERRA It seems odd that the following 3 conversion methods are not expressed as .this2that(), like the others.
/*\
 * Snap.hsb
 [ method ]
 **
 * Converts HSB values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - b (number) value or brightness
 = (string) hex representation of the color
\*/
Snap.hsb = cacher(function (h, s, b) {
    return Snap.hsb2rgb(h, s, b).hex;
});
/*\
 * Snap.hsl
 [ method ]
 **
 * Converts HSL values to a hex representation of the color
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (string) hex representation of the color
\*/
Snap.hsl = cacher(function (h, s, l) {
    return Snap.hsl2rgb(h, s, l).hex;
});
/*\
 * Snap.rgb
 [ method ]
 **
 * Converts RGB values to a hex representation of the color
 - r (number) red
 - g (number) green
 - b (number) blue
 = (string) hex representation of the color
\*/
Snap.rgb = cacher(function (r, g, b, o) {
    if (is(o, "finite")) {
        var round = math.round;
        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
    }
    return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
});
var toHex = function (color) {
    var i = glob.doc.getElementsByTagName("head")[0],
        red = "rgb(255, 0, 0)";
    toHex = cacher(function (color) {
        if (color.toLowerCase() == "red") {
            return red;
        }
        i.style.color = red;
        i.style.color = color;
        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
        return out == red ? null : out;
    });
    return toHex(color);
},
hsbtoString = function () {
    return "hsb(" + [this.h, this.s, this.b] + ")";
},
hsltoString = function () {
    return "hsl(" + [this.h, this.s, this.l] + ")";
},
rgbtoString = function () {
    return this.opacity == 1 || this.opacity == null ?
            this.hex :
            "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
},
prepareRGB = function (r, g, b) {
    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
        b = r.b;
        g = r.g;
        r = r.r;
    }
    if (g == null && is(r, string)) {
        var clr = Snap.getRGB(r);
        r = clr.r;
        g = clr.g;
        b = clr.b;
    }
    if (r > 1 || g > 1 || b > 1) {
        r /= 255;
        g /= 255;
        b /= 255;
    }

    return [r, g, b];
},
packageRGB = function (r, g, b, o) {
    r = math.round(r * 255);
    g = math.round(g * 255);
    b = math.round(b * 255);
    var rgb = {
        r: r,
        g: g,
        b: b,
        opacity: is(o, "finite") ? o : 1,
        hex: Snap.rgb(r, g, b),
        toString: rgbtoString
    };
    is(o, "finite") && (rgb.opacity = o);
    return rgb;
};
// SIERRA Clarify if Snap does not support consolidated HSLA/RGBA colors. E.g., can you specify a semi-transparent value for Snap.filter.shadow()?
/*\
 * Snap.color
 [ method ]
 **
 * Parses the color string and returns an object featuring the color's component values
 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
 = (object) Combined RGB/HSB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••,
 o     error (boolean) `true` if string can't be parsed,
 o     h (number) hue,
 o     s (number) saturation,
 o     v (number) value (brightness),
 o     l (number) lightness
 o }
\*/
Snap.color = function (clr) {
    var rgb;
    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
        rgb = Snap.hsb2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
        rgb = Snap.hsl2rgb(clr);
        clr.r = rgb.r;
        clr.g = rgb.g;
        clr.b = rgb.b;
        clr.opacity = 1;
        clr.hex = rgb.hex;
    } else {
        if (is(clr, "string")) {
            clr = Snap.getRGB(clr);
        }
        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
            rgb = Snap.rgb2hsl(clr);
            clr.h = rgb.h;
            clr.s = rgb.s;
            clr.l = rgb.l;
            rgb = Snap.rgb2hsb(clr);
            clr.v = rgb.b;
        } else {
            clr = {hex: "none"};
            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            clr.error = 1;
        }
    }
    clr.toString = rgbtoString;
    return clr;
};
/*\
 * Snap.hsb2rgb
 [ method ]
 **
 * Converts HSB values to an RGB object
 - h (number) hue
 - s (number) saturation
 - v (number) value or brightness
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsb2rgb = function (h, s, v, o) {
    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
        v = h.b;
        s = h.s;
        h = h.h;
        o = h.o;
    }
    h *= 360;
    var R, G, B, X, C;
    h = (h % 360) / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.hsl2rgb
 [ method ]
 **
 * Converts HSL values to an RGB object
 - h (number) hue
 - s (number) saturation
 - l (number) luminosity
 = (object) RGB object in the following format:
 o {
 o     r (number) red,
 o     g (number) green,
 o     b (number) blue,
 o     hex (string) color in HTML/CSS format: #••••••
 o }
\*/
Snap.hsl2rgb = function (h, s, l, o) {
    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
        l = h.l;
        s = h.s;
        h = h.h;
    }
    if (h > 1 || s > 1 || l > 1) {
        h /= 360;
        s /= 100;
        l /= 100;
    }
    h *= 360;
    var R, G, B, X, C;
    h = (h % 360) / 60;
    C = 2 * s * (l < .5 ? l : 1 - l);
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = l - C / 2;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
};
/*\
 * Snap.rgb2hsb
 [ method ]
 **
 * Converts RGB values to an HSB object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSB object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     b (number) brightness
 o }
\*/
Snap.rgb2hsb = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, V, C;
    V = mmax(r, g, b);
    C = V - mmin(r, g, b);
    H = (C == 0 ? null :
         V == r ? (g - b) / C :
         V == g ? (b - r) / C + 2 :
                  (r - g) / C + 4
        );
    H = ((H + 360) % 6) * 60 / 360;
    S = C == 0 ? 0 : C / V;
    return {h: H, s: S, b: V, toString: hsbtoString};
};
/*\
 * Snap.rgb2hsl
 [ method ]
 **
 * Converts RGB values to an HSL object
 - r (number) red
 - g (number) green
 - b (number) blue
 = (object) HSL object in the following format:
 o {
 o     h (number) hue,
 o     s (number) saturation,
 o     l (number) luminosity
 o }
\*/
Snap.rgb2hsl = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];

    var H, S, L, M, m, C;
    M = mmax(r, g, b);
    m = mmin(r, g, b);
    C = M - m;
    H = (C == 0 ? null :
         M == r ? (g - b) / C :
         M == g ? (b - r) / C + 2 :
                  (r - g) / C + 4);
    H = ((H + 360) % 6) * 60 / 360;
    L = (M + m) / 2;
    S = (C == 0 ? 0 :
         L < .5 ? C / (2 * L) :
                  C / (2 - 2 * L));
    return {h: H, s: S, l: L, toString: hsltoString};
};

// Transformations
// SIERRA Snap.parsePathString(): By _array of arrays,_ I assume you mean a format like this for two separate segments? [ ["M10,10","L90,90"], ["M90,10","L10,90"] ] Otherwise how is each command structured?
/*\
 * Snap.parsePathString
 [ method ]
 **
 * Utility method
 **
 * Parses given path string into an array of arrays of path segments
 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
 = (array) array of segments
\*/
Snap.parsePathString = function (pathString) {
    if (!pathString) {
        return null;
    }
    var pth = Snap.path(pathString);
    if (pth.arr) {
        return Snap.path.clone(pth.arr);
    }

    var paramCounts = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0},
        data = [];
    if (is(pathString, "array") && is(pathString[0], "array")) { // rough assumption
        data = Snap.path.clone(pathString);
    }
    if (!data.length) {
        Str(pathString).replace(pathCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            if (name == "m" && params.length > 2) {
                data.push([b].concat(params.splice(0, 2)));
                name = "l";
                b = b == "m" ? "l" : "L";
            }
            if (name == "o" && params.length == 1) {
                data.push([b, params[0]]);
            }
            if (name == "r") {
                data.push([b].concat(params));
            } else while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        });
    }
    data.toString = Snap.path.toString;
    pth.arr = Snap.path.clone(data);
    return data;
};
/*\
 * Snap.parseTransformString
 [ method ]
 **
 * Utility method
 **
 * Parses given transform string into an array of transformations
 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
 = (array) array of transformations
\*/
var parseTransformString = Snap.parseTransformString = function (TString) {
    if (!TString) {
        return null;
    }
    var paramCounts = {r: 3, s: 4, t: 2, m: 6},
        data = [];
    if (is(TString, "array") && is(TString[0], "array")) { // rough assumption
        data = Snap.path.clone(TString);
    }
    if (!data.length) {
        Str(TString).replace(tCommand, function (a, b, c) {
            var params = [],
                name = b.toLowerCase();
            c.replace(pathValues, function (a, b) {
                b && params.push(+b);
            });
            data.push([b].concat(params));
        });
    }
    data.toString = Snap.path.toString;
    return data;
};
function svgTransform2string(tstr) {
    var res = [];
    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
        params = params.split(/\s*,\s*|\s+/);
        if (name == "rotate" && params.length == 1) {
            params.push(0, 0);
        }
        if (name == "scale") {
            if (params.length == 2) {
                params.push(0, 0);
            }
            if (params.length == 1) {
                params.push(params[0], 0, 0);
            }
        }
        if (name == "skewX") {
            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
        } else if (name == "skewY") {
            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
        } else {
            res.push([name.charAt(0)].concat(params));
        }
        return all;
    });
    return res;
}
Snap._.svgTransform2string = svgTransform2string;
Snap._.rgTransform = new RegExp("^[a-z][" + spaces + "]*-?\\.?\\d", "i");
function transform2matrix(tstr, bbox) {
    var tdata = parseTransformString(tstr),
        m = new Matrix;
    if (tdata) {
        for (var i = 0, ii = tdata.length; i < ii; i++) {
            var t = tdata[i],
                tlen = t.length,
                command = Str(t[0]).toLowerCase(),
                absolute = t[0] != command,
                inver = absolute ? m.invert() : 0,
                x1,
                y1,
                x2,
                y2,
                bb;
            if (command == "t" && tlen == 2){
                m.translate(t[1], 0);
            } else if (command == "t" && tlen == 3) {
                if (absolute) {
                    x1 = inver.x(0, 0);
                    y1 = inver.y(0, 0);
                    x2 = inver.x(t[1], t[2]);
                    y2 = inver.y(t[1], t[2]);
                    m.translate(x2 - x1, y2 - y1);
                } else {
                    m.translate(t[1], t[2]);
                }
            } else if (command == "r") {
                if (tlen == 2) {
                    bb = bb || bbox;
                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.rotate(t[1], x2, y2);
                    } else {
                        m.rotate(t[1], t[2], t[3]);
                    }
                }
            } else if (command == "s") {
                if (tlen == 2 || tlen == 3) {
                    bb = bb || bbox;
                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                    if (absolute) {
                        x2 = inver.x(t[2], t[3]);
                        y2 = inver.y(t[2], t[3]);
                        m.scale(t[1], t[1], x2, y2);
                    } else {
                        m.scale(t[1], t[1], t[2], t[3]);
                    }
                } else if (tlen == 5) {
                    if (absolute) {
                        x2 = inver.x(t[3], t[4]);
                        y2 = inver.y(t[3], t[4]);
                        m.scale(t[1], t[2], x2, y2);
                    } else {
                        m.scale(t[1], t[2], t[3], t[4]);
                    }
                }
            } else if (command == "m" && tlen == 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
        }
    }
    return m;
}
Snap._.transform2matrix = transform2matrix;
function extractTransform(el, tstr) {
    if (tstr == null) {
        var doReturn = true;
        if (el.type == "linearGradient" || el.type == "radialGradient") {
            tstr = el.node.getAttribute("gradientTransform");
        } else if (el.type == "pattern") {
            tstr = el.node.getAttribute("patternTransform");
        } else {
            tstr = el.node.getAttribute("transform");
        }
        if (!tstr) {
            return new Matrix;
        }
        tstr = svgTransform2string(tstr);
    } else {
        if (!Snap._.rgTransform.test(tstr)) {
            tstr = svgTransform2string(tstr);
        } else {
            tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
        }
        if (is(tstr, "array")) {
            tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
        }
        el._.transform = tstr;
    }
    var m = transform2matrix(tstr, el.getBBox(1));
    if (doReturn) {
        return m;
    } else {
        el.matrix = m;
    }
}
Snap._unit2px = unit2px;
var contains = glob.doc.contains || glob.doc.compareDocumentPosition ?
    function (a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a,
            bup = b && b.parentNode;
            return a == bup || !!(bup && bup.nodeType == 1 && (
                adown.contains ?
                    adown.contains(bup) :
                    a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
            ));
    } :
    function (a, b) {
        if (b) {
            while (b) {
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
function getSomeDefs(el) {
    var cache = Snap._.someDefs;
    if (cache && contains(cache.ownerDocument.documentElement, cache)) {
        return cache;
    }
    var p = (el.node.ownerSVGElement && wrap(el.node.ownerSVGElement)) ||
            (el.node.parentNode && wrap(el.node.parentNode)) ||
            Snap.select("svg") ||
            Snap(0, 0),
        pdefs = p.select("defs"),
        defs  = pdefs == null ? false : pdefs.node;
    if (!defs) {
        defs = make("defs", p.node).node;
    }
    Snap._.someDefs = defs;
    return defs;
}
Snap._.getSomeDefs = getSomeDefs;
function unit2px(el, name, value) {
    var defs = getSomeDefs(el),
        out = {},
        mgr = defs.querySelector(".svg---mgr");
    if (!mgr) {
        mgr = $("rect");
        $(mgr, {width: 10, height: 10, "class": "svg---mgr"});
        defs.appendChild(mgr);
    }
    function getW(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {width: val});
        return mgr.getBBox().width;
    }
    function getH(val) {
        if (val == null) {
            return E;
        }
        if (val == +val) {
            return val;
        }
        $(mgr, {height: val});
        return mgr.getBBox().height;
    }
    function set(nam, f) {
        if (name == null) {
            out[nam] = f(el.attr(nam));
        } else if (nam == name) {
            out = f(value == null ? el.attr(nam) : value);
        }
    }
    switch (el.type) {
        case "rect":
            set("rx", getW);
            set("ry", getH);
        case "image":
            set("width", getW);
            set("height", getH);
        case "text":
            set("x", getW);
            set("y", getH);
        break;
        case "circle":
            set("cx", getW);
            set("cy", getH);
            set("r", getW);
        break;
        case "ellipse":
            set("cx", getW);
            set("cy", getH);
            set("rx", getW);
            set("ry", getH);
        break;
        case "line":
            set("x1", getW);
            set("x2", getW);
            set("y1", getH);
            set("y2", getH);
        break;
        case "marker":
            set("refX", getW);
            set("markerWidth", getW);
            set("refY", getH);
            set("markerHeight", getH);
        break;
        case "radialGradient":
            set("fx", getW);
            set("fy", getH);
        break;
        case "tspan":
            set("dx", getW);
            set("dy", getH);
        break;
        default:
            set(name, getW);
    }
    return out;
}
/*\
 * Snap.select
 [ method ]
 **
 * Wraps a DOM element specified by CSS selector as @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.select = function (query) {
    return wrap(glob.doc.querySelector(query));
};
/*\
 * Snap.selectAll
 [ method ]
 **
 * Wraps DOM elements specified by CSS selector as set or array of @Element
 - query (string) CSS selector of the element
 = (Element) the current element
\*/
Snap.selectAll = function (query) {
    var nodelist = glob.doc.querySelectorAll(query),
        set = (Snap.set || Array)();
    for (var i = 0; i < nodelist.length; i++) {
        set.push(wrap(nodelist[i]));
    }
    return set;
};

function add2group(list) {
    if (!is(list, "array")) {
        list = Array.prototype.slice.call(arguments, 0);
    }
    var i = 0,
        j = 0,
        node = this.node;
    while (this[i]) delete this[i++];
    for (i = 0; i < list.length; i++) {
        if (list[i].type == "set") {
            list[i].forEach(function (el) {
                node.appendChild(el.node);
            });
        } else {
            node.appendChild(list[i].node);
        }
    }
    var children = node.childNodes;
    for (i = 0; i < children.length; i++) {
        this[j++] = wrap(children[i]);
    }
    return this;
}
function Element(el) {
    if (el.snap in hub) {
        return hub[el.snap];
    }
    var id = this.id = ID(),
        svg;
    try {
        svg = el.ownerSVGElement;
    } catch(e) {}
    this.node = el;
    if (svg) {
        this.paper = new Paper(svg);
    }
    this.type = el.tagName;
    this.anims = {};
    this._ = {
        transform: []
    };
    el.snap = id;
    hub[id] = this;
    if (this.type == "g") {
        this.add = add2group;
        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
            this[method] = Paper.prototype[method];
        }
    }
}
function arrayFirstValue(arr) {
    var res;
    for (var i = 0, ii = arr.length; i < ii; i++) {
        res = res || arr[i];
        if (res) {
            return res;
        }
    }
}
(function (elproto) {
    /*\
     * Element.attr
     [ method ]
     **
     * Gets or sets given attributes of the element
     **
     - params (object) contains key-value pairs of attributes you want to set
     * or
     - param (string) name of the attribute
     = (Element) the current element
     * or
     = (string) value of attribute
     > Usage
     | el.attr({
     |     fill: "#fc0",
     |     stroke: "#000",
     |     strokeWidth: 2, // CamelCase...
     |     "fill-opacity": 0.5 // or dash-separated names
     | });
     | console.log(el.attr("fill")); // #fc0
    \*/
    elproto.attr = function (params, value) {
        var el = this,
            node = el.node;
        if (!params) {
            return el;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return arrayFirstValue(eve("snap.util.getattr."+params, el));
            }
        }
        for (var att in params) {
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
// SIERRA Element.getBBox(): Unclear why you would want to express the dimension of the box as a path.
// SIERRA Element.getBBox(): Unclear why you would want to use r0/r1/r2. Also, basic definitions: wouldn't the _smallest circle that can be enclosed_ be a zero-radius point?
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/
    elproto.getBBox = function (isWithoutTransform) {
        var el = this;
        if (el.type == "use") {
            el = el.original;
        }
        if (el.removed) {
            return {};
        }
        var _ = el._;
        if (isWithoutTransform) {
            _.bboxwt = Snap.path.get[el.type] ? Snap.path.getBBox(el.realPath = Snap.path.get[el.type](el)) : Snap._.box(el.node.getBBox());
            return Snap._.box(_.bboxwt);
        } else {
            el.realPath = (Snap.path.get[el.type] || Snap.path.get.deflt)(el);
            _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, el.matrix));
        }
        return Snap._.box(_.bbox);
    };
    var propString = function () {
        return this.string;
    };
// SIERRA Element.transform(): seems to allow two return values, one of which (_Element_) is undefined.
// SIERRA Element.transform(): if this only accepts one argument, it's unclear how it can both _get_ and _set_ a transform.
// SIERRA Element.transform(): Unclear how Snap transform string format differs from SVG's.
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/
    elproto.transform = function (tstr) {
        var _ = this._;
        if (tstr == null) {
            var global = new Matrix(this.node.getCTM()),
                local = extractTransform(this),
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ?
                            _.transform : localString;
            return {
                string: string,
                globalMatrix: global,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Matrix) {
            // may be need to apply it directly
            // TODO: investigate
            tstr = tstr.toTransformString();
        }
        extractTransform(this, tstr);

        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, {gradientTransform: this.matrix});
            } else if (this.type == "pattern") {
                $(this.node, {patternTransform: this.matrix});
            } else {
                $(this.node, {transform: this.matrix});
            }
        }

        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/
    elproto.parent = function () {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/
    /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/
    elproto.append = elproto.add = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function (el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/
    elproto.appendTo = function (el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/
    elproto.prepend = function (el) {
        if (el) {
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/
    elproto.prependTo = function (el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.before = function (el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function (el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.after = function (el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertBefore = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertAfter = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/
    elproto.remove = function () {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/
    elproto.select = function (query) {
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/
    elproto.selectAll = function (query) {
        var nodelist = this.node.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/
    elproto.asPX = function (attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/
    elproto.use = function () {
        var use,
            id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" ||
            this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/
    function fixids(el) {
        var els = el.selectAll("*"),
            it,
            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            ids = [],
            uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    var attr = {};
                    attr[name] = URL(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, {id: it.id});
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
                for (var j = 0, jj = fs.length; j < jj; j++) {
                    fs[j](ids[i].id);
                }
            }
        }
    }
    elproto.clone = function () {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, {id: clone.id});
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
// SIERRA Element.toDefs(): If this _moves_ an element to the <defs> region, why is the return value a _clone_? Also unclear why it's called the _relative_ <defs> section. Perhaps _shared_?
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the clone
    \*/
    elproto.toDefs = function () {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
// SIERRA Element.pattern(): x/y/width/height data types are listed as both String and Number. Is that an error, or does it mean strings are coerced?
// SIERRA Element.pattern(): clarify that x/y are offsets that e.g., may add gutters between the tiles.
    /*\
     * Element.pattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/
    elproto.pattern = function (x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
// SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
// SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/
    // TODO add usage for markers
    elproto.marker = function (x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [x, y, width, height].join(S),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    // animation
    function slice(from, to, f) {
        return function (arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
                res = res[0];
            }
            return f ? f(res) : res;
        };
    }
    var Animation = function (attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    // SIERRA All object methods should feature sample code. This is just one instance.
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/
    Snap.animation = function (attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/
    elproto.inAnim = function () {
        var el = this,
            res = [];
        for (var id in el.anims) if (el.anims[has](id)) {
            (function (a) {
                res.push({
                    anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                    curStatus: a.status(),
                    status: function (val) {
                        return a.status(val);
                    },
                    stop: function () {
                        a.stop();
                    }
                });
            }(el.anims[id]));
        }
        return res;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/
    Snap.animate = function (from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(),
            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/
    elproto.stop = function () {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
            anims[i].stop();
        }
        return this;
    };
    // SIERRA Element.animate(): For _attrs_, clarify if they represent the destination values, and if the animation executes relative to the element's current attribute values.
    // SIERRA would a _custom_ animation function be an SVG keySplines value?
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/
    elproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq,
            el = this;
        for (var key in attrs) if (attrs[has](key)) {
            if (el.equal) {
                eq = el.equal(key, Str(attrs[key]));
                from = eq.from;
                to = eq.to;
                f = eq.f;
            } else {
                from = +el.attr(key);
                to = +attrs[key];
            }
            var len = is(from, "array") ? from.length : 1;
            keys[key] = slice(fkeys.length, fkeys.length + len, f);
            fkeys = fkeys.concat(from);
            tkeys = tkeys.concat(to);
        }
        var now = mina.time(),
            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
                var attr = {};
                for (var key in keys) if (keys[has](key)) {
                    attr[key] = keys[key](val);
                }
                el.attr(attr);
            }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve.once("mina.finish." + anim.id, function () {
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function () {
            delete el.anims[anim.id];
        });
        return el;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function (key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0){
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for (var i in key) if (key[has](i)) {
                    this.data(i, key[i]);
                }
                return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/
    /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/
    elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/
    elproto.innerSVG = toString();
    function toString(type) {
        return function () {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
                for (var i = 0, ii = attr.length; i < ii; i++) {
                    res += " " + attr[i].name + '="' +
                            attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res += ">");
                for (i = 0, ii = chld.length; i < ii; i++) {
                    if (chld[i].nodeType == 3) {
                        res += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res += wrap(chld[i]).toString();
                    }
                }
                type && (res += "</" + this.type + ">");
            } else {
                type && (res += "/>");
            }
            return res;
        };
    }
}(Element.prototype));
// SIERRA Snap.parse() accepts & returns a fragment, but there's no info on what it does in between. What if it doesn't parse?
/*\
 * Snap.parse
 [ method ]
 **
 * Parses SVG fragment and converts it into a @Fragment
 **
 - svg (string) SVG string
 = (Fragment) the @Fragment
\*/
Snap.parse = function (svg) {
    var f = glob.doc.createDocumentFragment(),
        full = true,
        div = glob.doc.createElement("div");
    svg = Str(svg);
    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
        svg = "<svg>" + svg + "</svg>";
        full = false;
    }
    div.innerHTML = svg;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
        if (full) {
            f = svg;
        } else {
            while (svg.firstChild) {
                f.appendChild(svg.firstChild);
            }
        }
    }
    div.innerHTML = E;
    return new Fragment(f);
};
function Fragment(frag) {
    this.node = frag;
}
/*\
 * Fragment.select
 [ method ]
 **
 * See @Element.select
\*/
Fragment.prototype.select = Element.prototype.select;
/*\
 * Fragment.selectAll
 [ method ]
 **
 * See @Element.selectAll
\*/
Fragment.prototype.selectAll = Element.prototype.selectAll;
// SIERRA Snap.fragment() could especially use a code example
/*\
 * Snap.fragment
 [ method ]
 **
 * Creates a DOM fragment from a given list of elements or strings
 **
 - varargs (…) SVG string
 = (Fragment) the @Fragment
\*/
Snap.fragment = function () {
    var args = Array.prototype.slice.call(arguments, 0),
        f = glob.doc.createDocumentFragment();
    for (var i = 0, ii = args.length; i < ii; i++) {
        var item = args[i];
        if (item.node && item.node.nodeType) {
            f.appendChild(item.node);
        }
        if (item.nodeType) {
            f.appendChild(item);
        }
        if (typeof item == "string") {
            f.appendChild(Snap.parse(item).node);
        }
    }
    return new Fragment(f);
};

function make(name, parent) {
    var res = $(name);
    parent.appendChild(res);
    var el = wrap(res);
    el.type = name;
    return el;
}
function Paper(w, h) {
    var res,
        desc,
        defs,
        proto = Paper.prototype;
    if (w && w.tagName == "svg") {
        if (w.snap in hub) {
            return hub[w.snap];
        }
        res = new Element(w);
        desc = w.getElementsByTagName("desc")[0];
        defs = w.getElementsByTagName("defs")[0];
        if (!desc) {
            desc = $("desc");
            desc.appendChild(glob.doc.createTextNode("Created with Snap"));
            res.node.appendChild(desc);
        }
        if (!defs) {
            defs = $("defs");
            res.node.appendChild(defs);
        }
        res.defs = defs;
        for (var key in proto) if (proto[has](key)) {
            res[key] = proto[key];
        }
        res.paper = res.root = res;
    } else {
        res = make("svg", glob.doc.body);
        $(res.node, {
            height: h,
            version: 1.1,
            width: w,
            xmlns: xmlns
        });
    }
    return res;
}
function wrap(dom) {
    if (!dom) {
        return dom;
    }
    if (dom instanceof Element || dom instanceof Fragment) {
        return dom;
    }
    if (dom.tagName == "svg") {
        return new Paper(dom);
    }
    return new Element(dom);
}
// gradients' helpers
function Gstops() {
    return this.selectAll("stop");
}
function GaddStop(color, offset) {
    var stop = $("stop"),
        attr = {
            offset: +offset + "%"
        };
    color = Snap.color(color);
    attr["stop-color"] = color.hex;
    if (color.opacity < 1) {
        attr["stop-opacity"] = color.opacity;
    }
    $(stop, attr);
    this.node.appendChild(stop);
    return this;
}
function GgetBBox() {
    if (this.type == "linearGradient") {
        var x1 = $(this.node, "x1") || 0,
            x2 = $(this.node, "x2") || 1,
            y1 = $(this.node, "y1") || 0,
            y2 = $(this.node, "y2") || 0;
        return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
    } else {
        var cx = this.node.cx || .5,
            cy = this.node.cy || .5,
            r = this.node.r || 0;
        return Snap._.box(cx - r, cy - r, r * 2, r * 2);
    }
}
function gradient(defs, str) {
    var grad = arrayFirstValue(eve("snap.util.grad.parse", null, str)),
        el;
    if (!grad) {
        return null;
    }
    grad.params.unshift(defs);
    if (grad.type.toLowerCase() == "l") {
        el = gradientLinear.apply(0, grad.params);
    } else {
        el = gradientRadial.apply(0, grad.params);
    }
    if (grad.type != grad.type.toLowerCase()) {
        $(el.node, {
            gradientUnits: "userSpaceOnUse"
        });
    }
    var stops = grad.stops,
        len = stops.length,
        start = 0,
        j = 0;
    function seed(i, end) {
        var step = (end - start) / (i - j);
        for (var k = j; k < i; k++) {
            stops[k].offset = +(+start + step * (k - j)).toFixed(2);
        }
        j = i;
        start = end;
    }
    len--;
    for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
        seed(i, stops[i].offset);
    }
    stops[len].offset = stops[len].offset || 100;
    seed(len, stops[len].offset);
    for (i = 0; i <= len; i++) {
        var stop = stops[i];
        el.addStop(stop.color, stop.offset);
    }
    return el;
}
function gradientLinear(defs, x1, y1, x2, y2) {
    var el = make("linearGradient", defs);
    el.stops = Gstops;
    el.addStop = GaddStop;
    el.getBBox = GgetBBox;
    if (x1 != null) {
        $(el.node, {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        });
    }
    return el;
}
function gradientRadial(defs, cx, cy, r, fx, fy) {
    var el = make("radialGradient", defs);
    el.stops = Gstops;
    el.addStop = GaddStop;
    el.getBBox = GgetBBox;
    if (cx != null) {
        $(el.node, {
            cx: cx,
            cy: cy,
            r: r
        });
    }
    if (fx != null && fy != null) {
        $(el.node, {
            fx: fx,
            fy: fy
        });
    }
    return el;
}
// Paper prototype methods
(function (proto) {
    /*\
     * Paper.el
     [ method ]
     **
     * Creates an element on paper with a given name and no attributes
     **
     - name (string) tag name
     - attr (object) attributes
     = (Element) the current element
     > Usage
     | var c = paper.circle(10, 10, 10); // is the same as...
     | var c = paper.el("circle").attr({
     |     cx: 10,
     |     cy: 10,
     |     r: 10
     | });
     | // and the same as
     | var c = paper.el("circle", {
     |     cx: 10,
     |     cy: 10,
     |     r: 10
     | });
    \*/
    proto.el = function (name, attr) {
        return make(name, this.node).attr(attr);
    };
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    proto.rect = function (x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && "x" in x) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    proto.circle = function (cx, cy, r) {
        var attr;
        if (is(cx, "object") && "cx" in cx) {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };

    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    proto.image = function (src, x, y, width, height) {
        var el = make("image", this.node);
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function () {
                    $(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            $(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    proto.ellipse = function (cx, cy, rx, ry) {
        var el = make("ellipse", this.node);
        if (is(cx, "object") && "cx" in cx) {
            el.attr(cx);
        } else if (cx != null) {
            el.attr({
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            });
        }
        return el;
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/
    proto.path = function (d) {
        var el = make("path", this.node);
        if (is(d, "object") && !is(d, "array")) {
            el.attr(d);
        } else if (d) {
            el.attr({
                d: d
            });
        }
        return el;
    };
// SIERRA Paper.g(): Don't understand the code comment about the order being _different._ Wouldn't it be a rect followed by a circle?
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/
    /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/
    proto.group = proto.g = function (first) {
        var el = make("g", this.node);
        el.add = add2group;
        for (var method in proto) if (proto[has](method)) {
            el[method] = proto[method];
        }
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/
    proto.text = function (x, y, text) {
        var el = make("text", this.node);
        if (is(x, "object")) {
            el.attr(x);
        } else if (x != null) {
            el.attr({
                x: x,
                y: y,
                text: text || ""
            });
        }
        return el;
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/
    proto.line = function (x1, y1, x2, y2) {
        var el = make("line", this.node);
        if (is(x1, "object")) {
            el.attr(x1);
        } else if (x1 != null) {
            el.attr({
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            });
        }
        return el;
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/
    proto.polyline = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var el = make("polyline", this.node);
        if (is(points, "object") && !is(points, "array")) {
            el.attr(points);
        } else if (points != null) {
            el.attr({
                points: points
            });
        }
        return el;
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/
    proto.polygon = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var el = make("polygon", this.node);
        if (is(points, "object") && !is(points, "array")) {
            el.attr(points);
        } else if (points != null) {
            el.attr({
                points: points
            });
        }
        return el;
    };
    // gradients
    (function () {
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25%-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/
        proto.gradient = function (str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function (x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function (cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/
        proto.toString = function () {
            var f = glob.doc.createDocumentFragment(),
                d = glob.doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            $(svg, {xmlns: xmlns});
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/
        proto.clear = function () {
            var node = this.node.firstChild,
                next;
            while (node) {
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                }
                node = next;
            }
        };
    }());
}(Paper.prototype));

// simple ajax
/*\
 * Snap.ajax
 [ method ]
 **
 * Simple implementation of Ajax
 **
 - url (string) URL
 - postData (object|string) data for post request
 - callback (function) callback
 - scope (object) #optional scope of callback
 * or
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
 = (XMLHttpRequest) the XMLHttpRequest object, just in case
\*/
Snap.ajax = function (url, postData, callback, scope){
    var req = new XMLHttpRequest,
        id = ID();
    if (req) {
        if (is(postData, "function")) {
            scope = callback;
            callback = postData;
            postData = null;
        } else if (is(postData, "object")) {
            var pd = [];
            for (var key in postData) if (postData.hasOwnProperty(key)) {
                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
            }
            postData = pd.join("&");
        }
        req.open((postData ? "POST" : "GET"), url, true);
        req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (postData) {
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        if (callback) {
            eve.once("snap.ajax." + id + ".0", callback);
            eve.once("snap.ajax." + id + ".200", callback);
            eve.once("snap.ajax." + id + ".304", callback);
        }
        req.onreadystatechange = function() {
            if (req.readyState != 4) return;
            eve("snap.ajax." + id + "." + req.status, scope, req);
        };
        if (req.readyState == 4) {
            return req;
        }
        req.send(postData);
        return req;
    }
};
/*\
 * Snap.load
 [ method ]
 **
 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
 **
 - url (string) URL
 - callback (function) callback
 - scope (object) #optional scope of callback
\*/
Snap.load = function (url, callback, scope) {
    Snap.ajax(url, function (req) {
        var f = Snap.parse(req.responseText);
        scope ? callback.call(scope, f) : callback(f);
    });
};

// Attributes event handlers
eve.on("snap.util.attr.mask", function (value) {
    if (value instanceof Element || value instanceof Fragment) {
        eve.stop();
        if (value instanceof Fragment && value.node.childNodes.length == 1) {
            value = value.node.firstChild;
            getSomeDefs(this).appendChild(value);
            value = wrap(value);
        }
        if (value.type == "mask") {
            var mask = value;
        } else {
            mask = make("mask", getSomeDefs(this));
            mask.node.appendChild(value.node);
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
        }
        $(this.node, {
            mask: URL(mask.id)
        });
    }
});
(function (clipIt) {
    eve.on("snap.util.attr.clip", clipIt);
    eve.on("snap.util.attr.clip-path", clipIt);
    eve.on("snap.util.attr.clipPath", clipIt);
}(function (value) {
    if (value instanceof Element || value instanceof Fragment) {
        eve.stop();
        if (value.type == "clipPath") {
            var clip = value;
        } else {
            clip = make("clipPath", getSomeDefs(this));
            clip.node.appendChild(value.node);
            !clip.node.id && $(clip.node, {
                id: clip.id
            });
        }
        $(this.node, {
            "clip-path": URL(clip.id)
        });
    }
}));
function fillStroke(name) {
    return function (value) {
        eve.stop();
        if (value instanceof Fragment && value.node.childNodes.length == 1 &&
            (value.node.firstChild.tagName == "radialGradient" ||
            value.node.firstChild.tagName == "linearGradient" ||
            value.node.firstChild.tagName == "pattern")) {
            value = value.node.firstChild;
            getSomeDefs(this).appendChild(value);
            value = wrap(value);
        }
        if (value instanceof Element) {
            if (value.type == "radialGradient" || value.type == "linearGradient"
               || value.type == "pattern") {
                if (!value.node.id) {
                    $(value.node, {
                        id: value.id
                    });
                }
                var fill = URL(value.node.id);
            } else {
                fill = value.attr(name);
            }
        } else {
            fill = Snap.color(value);
            if (fill.error) {
                var grad = gradient(getSomeDefs(this), value);
                if (grad) {
                    if (!grad.node.id) {
                        $(grad.node, {
                            id: grad.id
                        });
                    }
                    fill = URL(grad.node.id);
                } else {
                    fill = value;
                }
            } else {
                fill = Str(fill);
            }
        }
        var attrs = {};
        attrs[name] = fill;
        $(this.node, attrs);
        this.node.style[name] = E;
    };
}
eve.on("snap.util.attr.fill", fillStroke("fill"));
eve.on("snap.util.attr.stroke", fillStroke("stroke"));
var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
eve.on("snap.util.grad.parse", function parseGrad(string) {
    string = Str(string);
    var tokens = string.match(gradrg);
    if (!tokens) {
        return null;
    }
    var type = tokens[1],
        params = tokens[2],
        stops = tokens[3];
    params = params.split(/\s*,\s*/).map(function (el) {
        return +el == el ? +el : el;
    });
    if (params.length == 1 && params[0] == 0) {
        params = [];
    }
    stops = stops.split("-");
    stops = stops.map(function (el) {
        el = el.split(":");
        var out = {
            color: el[0]
        };
        if (el[1]) {
            out.offset = el[1];
        }
        return out;
    });
    return {
        type: type,
        params: params,
        stops: stops
    };
});

eve.on("snap.util.attr.d", function (value) {
    eve.stop();
    if (is(value, "array") && is(value[0], "array")) {
        value = Snap.path.toString.call(value);
    }
    value = Str(value);
    if (value.match(/[ruo]/i)) {
        value = Snap.path.toAbsolute(value);
    }
    $(this.node, {d: value});
})(-1);
eve.on("snap.util.attr.#text", function (value) {
    eve.stop();
    value = Str(value);
    var txt = glob.doc.createTextNode(value);
    while (this.node.firstChild) {
        this.node.removeChild(this.node.firstChild);
    }
    this.node.appendChild(txt);
})(-1);
eve.on("snap.util.attr.path", function (value) {
    eve.stop();
    this.attr({d: value});
})(-1);
eve.on("snap.util.attr.viewBox", function (value) {
    var vb;
    if (is(value, "object") && "x" in value) {
        vb = [value.x, value.y, value.width, value.height].join(" ");
    } else if (is(value, "array")) {
        vb = value.join(" ");
    } else {
        vb = value;
    }
    $(this.node, {
        viewBox: vb
    });
    eve.stop();
})(-1);
eve.on("snap.util.attr.transform", function (value) {
    this.transform(value);
    eve.stop();
})(-1);
eve.on("snap.util.attr.r", function (value) {
    if (this.type == "rect") {
        eve.stop();
        $(this.node, {
            rx: value,
            ry: value
        });
    }
})(-1);
eve.on("snap.util.attr.textpath", function (value) {
    eve.stop();
    if (this.type == "text") {
        var id, tp, node;
        if (!value && this.textPath) {
            tp = this.textPath;
            while (tp.node.firstChild) {
                this.node.appendChild(tp.node.firstChild);
            }
            tp.remove();
            delete this.textPath;
            return;
        }
        if (is(value, "string")) {
            var defs = getSomeDefs(this),
                path = wrap(defs.parentNode).path(value);
            defs.appendChild(path.node);
            id = path.id;
            path.attr({id: id});
        } else {
            value = wrap(value);
            if (value instanceof Element) {
                id = value.attr("id");
                if (!id) {
                    id = value.id;
                    value.attr({id: id});
                }
            }
        }
        if (id) {
            tp = this.textPath;
            node = this.node;
            if (tp) {
                tp.attr({"xlink:href": "#" + id});
            } else {
                tp = $("textPath", {
                    "xlink:href": "#" + id
                });
                while (node.firstChild) {
                    tp.appendChild(node.firstChild);
                }
                node.appendChild(tp);
                this.textPath = wrap(tp);
            }
        }
    }
})(-1);
eve.on("snap.util.attr.text", function (value) {
    if (this.type == "text") {
        var i = 0,
            node = this.node,
            tuner = function (chunk) {
                var out = $("tspan");
                if (is(chunk, "array")) {
                    for (var i = 0; i < chunk.length; i++) {
                        out.appendChild(tuner(chunk[i]));
                    }
                } else {
                    out.appendChild(glob.doc.createTextNode(chunk));
                }
                out.normalize && out.normalize();
                return out;
            };
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        var tuned = tuner(value);
        while (tuned.firstChild) {
            node.appendChild(tuned.firstChild);
        }
    }
    eve.stop();
})(-1);
// default
var cssAttr = {
    "alignment-baseline": 0,
    "baseline-shift": 0,
    "clip": 0,
    "clip-path": 0,
    "clip-rule": 0,
    "color": 0,
    "color-interpolation": 0,
    "color-interpolation-filters": 0,
    "color-profile": 0,
    "color-rendering": 0,
    "cursor": 0,
    "direction": 0,
    "display": 0,
    "dominant-baseline": 0,
    "enable-background": 0,
    "fill": 0,
    "fill-opacity": 0,
    "fill-rule": 0,
    "filter": 0,
    "flood-color": 0,
    "flood-opacity": 0,
    "font": 0,
    "font-family": 0,
    "font-size": 0,
    "font-size-adjust": 0,
    "font-stretch": 0,
    "font-style": 0,
    "font-variant": 0,
    "font-weight": 0,
    "glyph-orientation-horizontal": 0,
    "glyph-orientation-vertical": 0,
    "image-rendering": 0,
    "kerning": 0,
    "letter-spacing": 0,
    "lighting-color": 0,
    "marker": 0,
    "marker-end": 0,
    "marker-mid": 0,
    "marker-start": 0,
    "mask": 0,
    "opacity": 0,
    "overflow": 0,
    "pointer-events": 0,
    "shape-rendering": 0,
    "stop-color": 0,
    "stop-opacity": 0,
    "stroke": 0,
    "stroke-dasharray": 0,
    "stroke-dashoffset": 0,
    "stroke-linecap": 0,
    "stroke-linejoin": 0,
    "stroke-miterlimit": 0,
    "stroke-opacity": 0,
    "stroke-width": 0,
    "text-anchor": 0,
    "text-decoration": 0,
    "text-rendering": 0,
    "unicode-bidi": 0,
    "visibility": 0,
    "word-spacing": 0,
    "writing-mode": 0
};

eve.on("snap.util.attr", function (value) {
    var att = eve.nt(),
        attr = {};
    att = att.substring(att.lastIndexOf(".") + 1);
    attr[att] = value;
    var style = att.replace(/-(\w)/gi, function (all, letter) {
            return letter.toUpperCase();
        }),
        css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
    if (cssAttr[has](css)) {
        this.node.style[style] = value == null ? E : value;
    } else {
        $(this.node, attr);
    }
});
eve.on("snap.util.getattr.transform", function () {
    eve.stop();
    return this.transform();
})(-1);
eve.on("snap.util.getattr.textpath", function () {
    eve.stop();
    return this.textPath;
})(-1);
// Markers
(function () {
    function getter(end) {
        return function () {
            eve.stop();
            var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
            if (style == "none") {
                return style;
            } else {
                return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
            }
        };
    }
    function setter(end) {
        return function (value) {
            eve.stop();
            var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
            if (value == "" || !value) {
                this.node.style[name] = "none";
                return;
            }
            if (value.type == "marker") {
                var id = value.node.id;
                if (!id) {
                    $(value.node, {id: value.id});
                }
                this.node.style[name] = URL(id);
                return;
            }
        };
    }
    eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
    eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
    eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
    eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
    eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
    eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
    eve.on("snap.util.attr.marker-end", setter("end"))(-1);
    eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
    eve.on("snap.util.attr.marker-start", setter("start"))(-1);
    eve.on("snap.util.attr.markerStart", setter("start"))(-1);
    eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
    eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
}());
eve.on("snap.util.getattr.r", function () {
    if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
        eve.stop();
        return $(this.node, "rx");
    }
})(-1);
function textExtract(node) {
    var out = [];
    var children = node.childNodes;
    for (var i = 0, ii = children.length; i < ii; i++) {
        var chi = children[i];
        if (chi.nodeType == 3) {
            out.push(chi.nodeValue);
        }
        if (chi.tagName == "tspan") {
            if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                out.push(chi.firstChild.nodeValue);
            } else {
                out.push(textExtract(chi));
            }
        }
    }
    return out;
}
eve.on("snap.util.getattr.text", function () {
    if (this.type == "text" || this.type == "tspan") {
        eve.stop();
        var out = textExtract(this.node);
        return out.length == 1 ? out[0] : out;
    }
})(-1);
eve.on("snap.util.getattr.#text", function () {
    return this.node.textContent;
})(-1);
eve.on("snap.util.getattr.viewBox", function () {
    eve.stop();
    var vb = $(this.node, "viewBox").split(separator);
    return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
    // TODO: investigate why I need to z-index it
})(-1);
eve.on("snap.util.getattr.points", function () {
    var p = $(this.node, "points");
    eve.stop();
    return p.split(separator);
});
eve.on("snap.util.getattr.path", function () {
    var p = $(this.node, "d");
    eve.stop();
    return p;
});
// default
eve.on("snap.util.getattr", function () {
    var att = eve.nt();
    att = att.substring(att.lastIndexOf(".") + 1);
    var css = att.replace(/[A-Z]/g, function (letter) {
        return "-" + letter.toLowerCase();
    });
    if (cssAttr[has](css)) {
        return glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
    } else {
        return $(this.node, att);
    }
});
var getOffset = function (elem) {
    var box = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
        top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
    return {
        y: top,
        x: left
    };
};
/*\
 * Snap.getElementByPoint
 [ method ]
 **
 * Returns you topmost element under given point.
 **
 = (object) Snap element object
 - x (number) x coordinate from the top left corner of the window
 - y (number) y coordinate from the top left corner of the window
 > Usage
 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
\*/
Snap.getElementByPoint = function (x, y) {
    var paper = this,
        svg = paper.canvas,
        target = glob.doc.elementFromPoint(x, y);
    if (glob.win.opera && target.tagName == "svg") {
        var so = getOffset(target),
            sr = target.createSVGRect();
        sr.x = x - so.x;
        sr.y = y - so.y;
        sr.width = sr.height = 1;
        var hits = target.getIntersectionList(sr, null);
        if (hits.length) {
            target = hits[hits.length - 1];
        }
    }
    if (!target) {
        return null;
    }
    return wrap(target);
};
/*\
 * Snap.plugin
 [ method ]
 **
 * Let you write plugins. You pass in a function with four arguments, like this:
 | Snap.plugin(function (Snap, Element, Paper, global) {
 |     Snap.newmethod = function () {};
 |     Element.prototype.newmethod = function () {};
 |     Paper.prototype.newmethod = function () {};
 | });
 * Inside the function you have access to all main objects (and their
 * prototypes). This allow you to extend anything you want.
 **
 - f (function) your plugin body
\*/
Snap.plugin = function (f) {
    f(Snap, Element, Paper, glob);
};
glob.win.Snap = Snap;
return Snap;
}());
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        is = Snap.is,
        clone = Snap._.clone,
        has = "hasOwnProperty",
        p2s = /,?([a-z]),?/gi,
        toFloat = parseFloat,
        math = Math,
        PI = math.PI,
        mmin = math.min,
        mmax = math.max,
        pow = math.pow,
        abs = math.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function () {
            for (var key in p) if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res = clone(pathArray);
        res.toString = toString;
        return res;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y,
                getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function (path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x, y, p, l, sp = "", subpaths = {}, point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += [
                                "C" + O(point.start.x),
                                O(point.start.y),
                                O(point.m.x),
                                O(point.m.y),
                                O(point.x),
                                O(point.y)
                            ];
                            if (onlystart) {return sp;}
                            subpaths.start = sp;
                            sp = [
                                "M" + O(point.x),
                                O(point.y) + "C" + O(point.n.x),
                                O(point.n.y),
                                O(point.end.x),
                                O(point.end.y),
                                O(p[5]),
                                O(p[6])
                            ].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: {x: mx, y: my},
            n: {x: nx, y: ny},
            start: {x: ax, y: ay},
            end: {x: cx, y: cy},
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(
            bbox.min.x,
            bbox.min.y,
            bbox.max.x - bbox.min.x,
            bbox.max.y - bbox.min.y
        );
    }
    function isPointInsideBBox(bbox, x, y) {
        return  x >= bbox.x &&
                x <= bbox.x + bbox.width &&
                y >= bbox.y &&
                y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y)
            || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2)
            || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y)
            || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2)
            || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2)
            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x
                || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y
                || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],
            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l,
            e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (
            mmax(x1, x2) < mmin(x3, x4) ||
            mmin(x1, x2) > mmax(x3, x4) ||
            mmax(y1, y2) < mmin(y3, y4) ||
            mmin(y1, y2) > mmax(y3, y4)
        ) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (
            px2 < +mmin(x1, x2).toFixed(2) ||
            px2 > +mmax(x1, x2).toFixed(2) ||
            px2 < +mmin(x3, x4).toFixed(2) ||
            px2 > +mmax(x3, x4).toFixed(2) ||
            py2 < +mmin(y1, y2).toFixed(2) ||
            py2 > +mmax(y1, y2).toFixed(2) ||
            py2 < +mmin(y3, y4).toFixed(2) ||
            py2 > +mmax(y3, y4).toFixed(2)
        ) {
            return;
        }
        return {x: px, y: py};
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1),
            bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = ~~(l1 / 5),
            n2 = ~~(l2 / 5),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({x: p.x, y: p.y, t: i / n1});
        }
        for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({x: p.x, y: p.y, t: i / n2});
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) &&
               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0,
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X),
            ymin = mmin.apply(0, Y),
            xmax = mmax.apply(0, X),
            ymax = mmax.apply(0, Y),
            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [
                ["M", x + r, y],
                ["l", w - r * 2, 0],
                ["a", r, r, 0, 0, 1, r, r],
                ["l", 0, h - r * 2],
                ["a", r, r, 0, 0, 1, -r, r],
                ["l", r * 2 - w, 0],
                ["a", r, r, 0, 0, 1, -r, -r],
                ["l", 0, r * 2 - h],
                ["a", r, r, 0, 0, 1, r, -r],
                ["z"]
            ];
        }
        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res.toString = toString;
        return res;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
            res = [
                ["M", x, y],
                ["m", 0, -ry],
                ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
                ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
                ["z"]
            ];
        }
        res.toString = toString;
        return res;
    }
    var unit2px = Snap._unit2px,
        getPath = {
        path: function (el) {
            return el.attr("path");
        },
        circle: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function (el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.rx, attr.ry);
        },
        rect: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x, attr.y, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function (el) {
            var attr = unit2px(el);
            return rectPath(attr.x, attr.y, attr.width, attr.height);
        },
        text: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        },
        g: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        },
        symbol: function (el) {
            var bbox = el.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        },
        line: function (el) {
            return "M" + [el.attr("x1"), el.attr("y1"), el.attr("x2"), el.attr("y2")];
        },
        polyline: function (el) {
            return "M" + el.attr("points");
        },
        polygon: function (el) {
            return "M" + el.attr("points") + "z";
        },
        svg: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        },
        deflt: function (el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray),
            lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = toString;
        pth.rel = pathClone(res);
        return res;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 &&
            pathArray[0][0] == "M" &&
            pathArray[1][0].toUpperCase() == "R" &&
            pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] + x);
                        r[7] = +(pa[7] + y);
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y].concat(pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res = res.concat(dots);
                        break;
                    case "U":
                        res.pop();
                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = ["U"].concat(res[res.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + ((j % 2) ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [x, y].concat(pa.slice(1));
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
            } else if (pa0 == "U") {
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = mx;
                        y = my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res.toString = toString;
        pth.abs = pathClone(res);
        return res;
    }
    function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [
                _13 * x1 + _23 * ax,
                _13 * y1 + _23 * ay,
                _13 * x2 + _23 * ax,
                _13 * y2 + _23 * ay,
                x2,
                y2
            ];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = Snap._.cacher(function (x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad),
                    Y = x * math.sin(rad) + y * math.cos(rad);
                return {x: X, y: Y};
            });
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) *
                    math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math.cos(f1),
            s1 = math.sin(f1),
            c2 = math.cos(f2),
            s2 = math.sin(f2),
            t = math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }
    function curveDim(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        var a = (c2x - 2 * c1x + p1x) - (p2x - 2 * c2x + c1x),
            b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
            c = p1x - c1x,
            t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
            t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
            y = [p1y, p2y],
            x = [p1x, p2x],
            dot;
        abs(t1) > "1e12" && (t1 = .5);
        abs(t2) > "1e12" && (t2 = .5);
        if (t1 > 0 && t1 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
            x.push(dot.x);
            y.push(dot.y);
        }
        if (t2 > 0 && t2 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
            x.push(dot.x);
            y.push(dot.y);
        }
        a = (c2y - 2 * c1y + p1y) - (p2y - 2 * c2y + c1y);
        b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
        c = p1y - c1y;
        t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
        t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
        abs(t1) > "1e12" && (t1 = .5);
        abs(t2) > "1e12" && (t2 = .5);
        if (t1 > 0 && t1 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
            x.push(dot.x);
            y.push(dot.y);
        }
        if (t2 > 0 && t2 < 1) {
            dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
            x.push(dot.x);
            y.push(dot.y);
        }
        return {
            min: {x: mmin.apply(0, x), y: mmin.apply(0, y)},
            max: {x: mmax.apply(0, x), y: mmax.apply(0, y)}
        };
    }
    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
            p2 = path2 && pathToAbsolute(path2),
            attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
            processPath = function (path, d) {
                var nx, ny;
                if (!path) {
                    return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                }
                !(path[0] in {T:1, Q:1}) && (d.qx = d.qy = null);
                switch (path[0]) {
                    case "M":
                        d.X = path[1];
                        d.Y = path[2];
                        break;
                    case "A":
                        path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                        break;
                    case "S":
                        nx = d.x + (d.x - (d.bx || d.x));
                        ny = d.y + (d.y - (d.by || d.y));
                        path = ["C", nx, ny].concat(path.slice(1));
                        break;
                    case "T":
                        d.qx = d.x + (d.x - (d.qx || d.x));
                        d.qy = d.y + (d.y - (d.qy || d.y));
                        path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                        break;
                    case "Q":
                        d.qx = path[1];
                        d.qy = path[2];
                        path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                        break;
                    case "L":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                        break;
                    case "H":
                        path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                        break;
                    case "V":
                        path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                        break;
                    case "Z":
                        path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                        break;
                }
                return path;
            },
            fixArc = function (pp, i) {
                if (pp[i].length > 7) {
                    pp[i].shift();
                    var pi = pp[i];
                    while (pi.length) {
                        pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                    }
                    pp.splice(i, 1);
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            },
            fixM = function (path1, path2, a1, a2, i) {
                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                    path2.splice(i, 0, ["M", a2.x, a2.y]);
                    a1.bx = 0;
                    a1.by = 0;
                    a1.x = path1[i][1];
                    a1.y = path1[i][2];
                    ii = mmax(p.length, p2 && p2.length || 0);
                }
            };
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] = processPath(p[i], attrs);
            fixArc(p, i);
            p2 && (p2[i] = processPath(p2[i], attrs2));
            p2 && fixArc(p2, i);
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [
                        {x: +crp[i - 2], y: +crp[i - 1]},
                        {x: +crp[i],     y: +crp[i + 1]},
                        {x: +crp[i + 2], y: +crp[i + 3]},
                        {x: +crp[i + 4], y: +crp[i + 5]}
                    ];
            if (z) {
                if (!i) {
                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
                } else if (iLen - 4 == i) {
                    p[3] = {x: +crp[0], y: +crp[1]};
                } else if (iLen - 2 == i) {
                    p[2] = {x: +crp[0], y: +crp[1]};
                    p[3] = {x: +crp[2], y: +crp[3]};
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = {x: +crp[i], y: +crp[i + 1]};
                }
            }
            d.push(["C",
                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
                  (p[1].y + 6*p[2].y - p[3].y) / 6,
                  p[2].x,
                  p[2].y
            ]);
        }

        return d;
    }

    // export
    Snap.path = paths;

    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/
    Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    Snap.path.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/
    elproto.getTotalLength = function () {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function (length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/
    Snap.path.isPointInsideBBox = isPointInsideBBox;
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/
    Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/
    Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/
    Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/
    Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var mmax = Math.max,
        mmin = Math.min;

    // Set
    var Set = function (items) {
        this.items = [];
        this.length = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
    setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/
    setproto.push = function () {
        var item,
            len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    setproto.remove = function () {
        while (this.length) {
            this.pop().remove();
        }
        return this;
    };
    setproto.attr = function (value) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].attr(value);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
            this.splice(i, 1);
            return true;
        }
        return false;
    };
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
            var box = this.items[i].getBBox();
            x.push(box.x);
            y.push(box.y);
            x2.push(box.x + box.width);
            y2.push(box.y + box.height);
        }
        x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    setproto.clone = function (s) {
        s = new Set;
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    Snap.set = function () {
        var set = new Set;
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var names = {},
        reUnit = /[a-z]+$/i,
        Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t": return [l, 0, 0];
            case "m": return [l, 1, 0, 0, 1, 0, 0];
            case "r": if (item.length == 4) {
                return [l, 0, item[2], item[3]];
            } else {
                return [l, 0];
            }
            case "s": if (item.length == 5) {
                return [l, 1, 1, item[3], item[4]];
            } else if (item.length == 3) {
                return [l, 1, 1];
            } else {
                return [l, 1];
            }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
        t1 = Snap.parseTransformString(t1) || [];
        t2 = Snap.parseTransformString(t2) || [];
        var maxlength = Math.max(t1.length, t2.length),
            from = [],
            to = [],
            i = 0, j, jj,
            tt1, tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if ((tt1[0] != tt2[0]) ||
                (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
                (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
                ) {
                    t1 = Snap._.transform2matrix(t1, getBBox());
                    t2 = Snap._.transform2matrix(t2, getBBox());
                    from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                    to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                    break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2]);
    }
    function getPath(path) {
        var k = 0, i, ii, j, jj, out, a, b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
                a[j] = "val[" + (k++) + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
            for (var j = 1, jj = path[i].length; j < jj; j++) {
                out.push(path[i][j]);
            }
        }
        return out;
    }
    Element.prototype.equal = function (name, b) {
        var A, B, a = Str(this.attr(name) || ""),
            el = this;
        if (a == +a && b == +b) {
            return {
                from: +a,
                to: +b,
                f: getNumber
            };
        }
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [A.r, A.g, A.b, A.opacity],
                to: [B.r, B.g, B.b, B.opacity],
                f: getColour
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (b instanceof Snap.Matrix) {
                b = b.toTransformString();
            }
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.svgTransform2string(b);
            }
            return equaliseTransform(a, b, function () {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(",");
            B = Str(b).split(",");
            return {
                from: A,
                to: B,
                f: function (val) { return val; }
            };
        }
        var aUnit = a.match(reUnit),
            bUnit = Str(b).match(reUnit);
        if (aUnit && aUnit == bUnit) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
    has = "hasOwnProperty",
    supportsTouch = "createTouch" in glob.doc,
    events = [
        "click", "dblclick", "mousedown", "mousemove", "mouseout",
        "mouseover", "mouseup", "touchstart", "touchmove", "touchend",
        "touchcancel"
    ],
    touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    },
    getScroll = function (xy) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft";
        return glob.doc.documentElement[name] || glob.doc.body[name];
    },
    preventDefault = function () {
        this.returnValue = false;
    },
    preventTouch = function () {
        return this.originalEvent.preventDefault();
    },
    stopPropagation = function () {
        this.cancelBubble = true;
    },
    stopTouch = function () {
        return this.originalEvent.stopPropagation();
    },
    addEvent = (function () {
        if (glob.doc.addEventListener) {
            return function (obj, type, fn, element) {
                var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
                    f = function (e) {
                        var scrollY = getScroll("y"),
                            scrollX = getScroll("x");
                        if (supportsTouch && touchMap[has](type)) {
                            for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                                if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                                    var olde = e;
                                    e = e.targetTouches[i];
                                    e.originalEvent = olde;
                                    e.preventDefault = preventTouch;
                                    e.stopPropagation = stopTouch;
                                    break;
                                }
                            }
                        }
                        var x = e.clientX + scrollX,
                            y = e.clientY + scrollY;
                        return fn.call(element, e, x, y);
                    };

                if (type !== realName) {
                    obj.addEventListener(type, f, false);
                }

                obj.addEventListener(realName, f, false);

                return function () {
                    if (type !== realName) {
                        obj.removeEventListener(type, f, false);
                    }

                    obj.removeEventListener(realName, f, false);
                    return true;
                };
            };
        } else if (glob.doc.attachEvent) {
            return function (obj, type, fn, element) {
                var f = function (e) {
                    e = e || glob.win.event;
                    var scrollY = getScroll("y"),
                        scrollX = getScroll("x"),
                        x = e.clientX + scrollX,
                        y = e.clientY + scrollY;
                    e.preventDefault = e.preventDefault || preventDefault;
                    e.stopPropagation = e.stopPropagation || stopPropagation;
                    return fn.call(element, e, x, y);
                };
                obj.attachEvent("on" + type, f);
                var detacher = function () {
                    obj.detachEvent("on" + type, f);
                    return true;
                };
                return detacher;
            };
        }
    })(),
    drag = [],
    dragMove = function (e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = getScroll("y"),
            scrollX = getScroll("x"),
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node,
                o,
                glob = Snap._.glob,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
    dragUp = function (e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--;) {
        (function (eventName) {
            Snap[eventName] = elproto[eventName] = function (fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.shape || this.node || glob.doc, eventName, fn, scope || this)
                    });
                }
                return this;
            };
            Snap["un" + eventName] =
            elproto["un" + eventName] = function (fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) if (events[l].name == eventName &&
                               (events[l].f == fn || !fn)) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start,
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        if (!arguments.length) {
            var origTransform;
            return this.drag(function (dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                });
            }, function () {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            this._drag.x = x;
            this._drag.y = y;
            this._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({el: this, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
            onstart && eve.on("snap.drag.start." + this.id, onstart);
            onmove && eve.on("snap.drag.move." + this.id, onmove);
            onend && eve.on("snap.drag.end." + this.id, onend);
            eve("snap.drag.start." + this.id, start_scope || move_scope || this, x, y, e);
        }
        this._drag = {};
        draggable.push({el: this, start: start});
        this.mousedown(start);
        return this;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/
    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) if (draggable[i].el == this) {
            this.unmousedown(draggable[i].start);
            draggable.splice(i, 1);
            eve.unbind("snap.drag.*." + this.id);
        }
        !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        pproto = Paper.prototype,
        rgurl = /^\s*url\((.+)\)/,
        Str = String,
        $ = Snap._.$;
    Snap.filter = {};
// SIERRA Paper.filter(): I don't understand the note. Does that mean an HTML should dedicate a separate SVG region for a filter definition? What's the advantage over a DEFS?
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    pproto.filter = function (filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)),
            id = Snap._.id(),
            width = paper.node.offsetWidth,
            height = paper.node.offsetHeight,
            filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };

    eve.on("snap.util.getattr.filter", function () {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function (value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, {id: value.id});
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.blur = function (x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) horizontal shift of the shadow, in pixels
     - dy (number) vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, 3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.shadow = function (dx, dy, blur, color) {
        color = color || "#000";
        if (blur == null) {
            blur = 4;
        }
        if (typeof blur == "string") {
            color = blur;
            blur = 4;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur
        });
    };
    Snap.filter.shadow.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.grayscale = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.sepia = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.saturate = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/
    Snap.filter.hueRotate = function (angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.invert = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.brightness = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.contrast = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function () {
        return this();
    };
});
return Snap;
}));
/*------------------------------------*\
    ::Inview Plugin
\*------------------------------------*/
/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];

        // naughty, but this is how it knows which elements to check for
        // $.each($.cache, function () {
        //     if (this.events && this.events.inview) {
        //         elems.push(this.handle.elem);
        //     }
        // });
        // Hardcoded because jQuery wasn't finding elements with inview event bound
        $('.stat__frame').each(function () { // 
            elems.push($(this));
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height(),
                    inview = $el.data("inview") || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data("inview", false);
                        $el.trigger("inview", [ false ]);
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
                        $el.data("inview", true);
                        $el.trigger("inview", [ true ]);
                    }
                }
            });
        }
    });
    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    $(function () {
        $(window).scroll();
    });
})(jQuery);
/*------------------------------------*\
    ::Percentage Stats
\*------------------------------------*/
(function(){
    jQuery(function($){
        //for each group of stats
        $(".stat__frame").each(function(){
            //cache some stuff
            var that = $(this);
            var statObj = that.find(".stat__number");
            var statAmount = statObj.text();

            //empty the statistic
            statObj.text('').removeClass('stat__number--hide');
            // call the animation if this statistic is in view
            that.bind('inview', function (event, visible) {
                if(!that.hasClass('animation-complete')) {
                    if (visible === true) {
                        num(statObj, statAmount);
                        that.addClass('animation-complete');
                    } else {
                        return false;
                    }
                }
            });
        });
        //number animation function
        function num(statObj, statAmount){
            //adapted from http://codepen.io/hmcnellis/pen/emBOeq
            $({counter: 0})
                .animate({ counter: statAmount }, {
                    duration: 2500,
                    easing: 'swing',
                    step: function () {
                        var curCount = Math.ceil(this.counter);
                        var curCountComma = curCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                        statObj.text(curCountComma);
                        var opacity = (statAmount !== 0 ? this.counter/statAmount : 1);
                    }
                });
        }
    });
})();
/*------------------------------------*\
    ::Ajax In Images
    ----------------------------------*
    https://snippetlib.com/jquery/replace_all_svg_images_with_inline_svg
\*------------------------------------*/
// Using this script to convert icons from an image to an svg on load 
// this just allows me to load the SVG's via an image tag rather than 
// Large blocks of SVG code.
var ajaxReplace = function() {
    // find all img tags in need of changing to svg
    $('.js-ajax-replace').each(function(){
        // cache this image
        var $img = $(this);
        // capture it's classes
        var classes = $img.attr('class');
        // grab the svg via ajax
        $.get($img.attr('src'), function(data) {
            // find just the svg from what's retrieved
            var svg = $(data).find('svg');
            svg
                // reapply the classes
                .attr('class', classes)
                // remove inline style tags from svg's
                .find('style')
                    .remove()
                    .end()
                // remove fill on this and all children
                .attr('fill','')
                .find('*')
                    .attr('fill','');
            // replace the img with the svg
            $img.replaceWith(svg);
        });
    });
};
$(document).ready(function() {
    ajaxReplace();
});

/*------------------------------------------*\
    :: Open video in Fancybox
\*------------------------------------------*/
var fancyFancy = function () {
    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
};
$(document).ready(function() {
    if ($.isFunction($.fn.fancybox)) { // Check to see if fancybox function is on current page
    fancyFancy();
    }
});
/*------------------------------------*\
    ::  Navigation Functionality
\*------------------------------------*/    
var clickable = function($el, stopProp){
    stopProp = stopProp || false;
    // stop link propogation
    if(stopProp){
        $el.find('a').click(function(e){
            e.stopPropagation();
        });
    }
    // expand sub menu
    $el.click(function(){
        $el.not(this).removeClass('active');
        $(this).toggleClass('active');
    });
};
jQuery(function($){
    var trigger = $('#js-nav-trigger');
    clickable(
        $('#menu-main').find('.menu-item-has-children'),
        true
    );
    clickable(trigger);
    trigger.on("click", function(){
        var $bod = $('body');
        if(!$bod.hasClass('active')) {
            // set width to the width _before_ adding overflow:hidden
            $('body, html').toggleClass('locked');
            // change menu text to close
            $('.main-head__trigger span').text('Close');
        } else {
            // make flexible again
           $('body, html').toggleClass('locked');
            // change close back to menu
            $('.main-head__trigger span').text('Menu');
        }
        $bod.toggleClass('active');
    });
    /*------------------------------------*\
        :: Sticky Header
    \*------------------------------------*/
    $(window).scroll(
        function() {
            var heroHeight = $('.hero-block').outerHeight();
            if ($(document).scrollTop() <= heroHeight - 400) {
                $('.main-head').removeClass('main-head--sticky').addClass('main-head--normal');
            } else {
                $('.main-head').removeClass('main-head--normal').addClass('main-head--sticky');
            }
        }
    );
});
/*------------------------------------*\
    :: Way Point Animation Effects
\*------------------------------------*/
/*------------------------------------*\
    ::  Icon Callouts Waypoint
\*------------------------------------*/   
var iconCallouts = function () {
    var $section = $('.icon-callouts');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $section.waypoint(function(){  
        $(this).addClass('visible');
    }, { offset: '50%' });
};
/*------------------------------------*\
  :: Centered CTA Waypoint  
\*------------------------------------*/    
var centeredCTA = function () {
    var $section = $('.centered-cta');
    var $wrap = $('.centered-cta__wrap');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $wrap.removeClass('visible');
    $section.waypoint(function(){  
        $(this).addClass('visible');
        $wrap.addClass('visible');
    }, { offset: '50%' });
};
/*------------------------------------*\
  :: Column Callout Waypoint  
\*------------------------------------*/    
var columnCallout = function () {
    var $section = $('.column-callout');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $section.waypoint(function(){  
        $section.addClass('visible');
    }, { offset: '50%' });
};
/*------------------------------------*\
  :: Coaches Block 
\*------------------------------------*/    
var coachesBlock = function () {
    var $section = $('.coaches-block');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $section.waypoint(function(){  
        $section.addClass('visible');
    }, { offset: '50%' });
};
$(document).ready(function() {
    if ($.isFunction($.fn.waypoint)) { // Check to see if waypoint function is on current page
        iconCallouts();
        centeredCTA();
        columnCallout();
        coachesBlock();
    }
});
/*------------------------------------*\
    :: Way Point Animation Effects
\*------------------------------------*/
/*------------------------------------*\
    ::  Icon Callouts Waypoint
\*------------------------------------*/   
var iconCallouts = function () {
    var $section = $('.icon-callouts');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $section.waypoint(function(){  
        $(this).addClass('visible');
    }, { offset: '50%' });
};
/*------------------------------------*\
  :: Centered CTA Waypoint  
\*------------------------------------*/    
var centeredCTA = function () {
    var $section = $('.centered-cta');
    var $wrap = $('.centered-cta__wrap');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $wrap.removeClass('visible');
    $section.waypoint(function(){  
        $(this).addClass('visible');
        $wrap.addClass('visible');
    }, { offset: '50%' });
};
/*------------------------------------*\
  :: Column Callout Waypoint  
\*------------------------------------*/    
var columnCallout = function () {
    var $section = $('.column-callout');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $section.waypoint(function(){  
        $section.addClass('visible');
    }, { offset: '50%' });
};
/*------------------------------------*\
  :: Coaches Block 
\*------------------------------------*/    
var coachesBlock = function () {
    var $section = $('.coaches-block');
    // Remove visible class on page load so that it can animate in
    // If JS is off, images will automatically appear
    $section.removeClass('visible');
    $section.waypoint(function(){  
        $section.addClass('visible');
    }, { offset: '50%' });
};
$(document).ready(function() {
    if ($.isFunction($.fn.waypoint)) { // Check to see if waypoint function is on current page
        iconCallouts();
        centeredCTA();
        columnCallout();
        coachesBlock();
    }
});
