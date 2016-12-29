/*! no_rails_asset_compression */

webpackJsonp([43],{304:function(){/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
!function(e,t,i,o){var n=i("html"),a=i(e),r=i(t),l=i.fancybox=function(){l.open.apply(this,arguments)},s=navigator.userAgent.match(/msie/i),c=null,d=t.createTouch!==o,p=function(e){return e&&e.hasOwnProperty&&e instanceof i},u=function(e){return e&&"string"===i.type(e)},h=function(e){return u(e)&&0<e.indexOf("%")},f=function(e,t){var i=parseInt(e,10)||0
t&&h(e)&&(i*=l.getViewport()[t]/100)
return Math.ceil(i)},m=function(e,t){return f(e,t)+"px"}
i.extend(l,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(s?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(i.isPlainObject(t)||(t={}),!1!==l.close(!0)))return i.isArray(e)||(e=p(e)?i(e).get():[e]),i.each(e,function(n,a){var r,s,c,d,h,f={}
"object"===i.type(a)&&(a.nodeType&&(a=i(a)),p(a)?(f={href:a.data("fancybox-href")||a.attr("href"),title:i("<div/>").text(a.data("fancybox-title")||a.attr("title")).html(),isDom:!0,element:a},i.metadata&&i.extend(!0,f,a.metadata())):f=a)
r=t.href||f.href||(u(a)?a:null)
s=t.title!==o?t.title:f.title||""
d=(c=t.content||f.content)?"html":t.type||f.type
!d&&f.isDom&&(d=a.data("fancybox-type"),d||(d=(d=a.prop("class").match(/fancybox\.(\w+)/))?d[1]:null))
u(r)&&(d||(l.isImage(r)?d="image":l.isSWF(r)?d="swf":"#"===r.charAt(0)?d="inline":u(a)&&(d="html",c=a)),"ajax"===d&&(h=r.split(/\s+/,2),r=h.shift(),h=h.shift()))
c||("inline"===d?r?c=i(u(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):f.isDom&&(c=a):"html"===d?c=r:d||r||!f.isDom||(d="inline",c=a))
i.extend(f,{href:r,type:d,content:c,title:s,selector:h})
e[n]=f}),l.opts=i.extend(!0,{},l.defaults,t),t.keys!==o&&(l.opts.keys=!!t.keys&&i.extend({},l.defaults.keys,t.keys)),l.group=e,l._start(l.opts.index)},cancel:function(){var e=l.coming
e&&!1===l.trigger("onCancel")||(l.hideLoading(),e&&(l.ajaxLoad&&l.ajaxLoad.abort(),l.ajaxLoad=null,l.imgPreload&&(l.imgPreload.onload=l.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),l.coming=null,l.current||l._afterZoomOut(e)))},close:function(e){l.cancel()
!1!==l.trigger("beforeClose")&&(l.unbindEvents(),l.isActive&&(l.isOpen&&!0!==e?(l.isOpen=l.isOpened=!1,l.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),l.wrap.stop(!0,!0).removeClass("fancybox-opened"),l.transitions[l.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),l._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(l.player.timer)},i=function(){t()
l.current&&l.player.isActive&&(l.player.timer=setTimeout(l.next,l.current.playSpeed))},o=function(){t()
r.unbind(".player")
l.player.isActive=!1
l.trigger("onPlayEnd")}
!0===e||!l.player.isActive&&!1!==e?l.current&&(l.current.loop||l.current.index<l.group.length-1)&&(l.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":o,"onUpdate.player":i,"beforeLoad.player":t}),i(),l.trigger("onPlayStart")):o()},next:function(e){var t=l.current
t&&(u(e)||(e=t.direction.next),l.jumpto(t.index+1,e,"next"))},prev:function(e){var t=l.current
t&&(u(e)||(e=t.direction.prev),l.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var n=l.current
n&&(e=f(e),l.direction=t||n.direction[e>=n.index?"next":"prev"],l.router=i||"jumpto",n.loop&&(0>e&&(e=n.group.length+e%n.group.length),e%=n.group.length),n.group[e]!==o&&(l.cancel(),l._start(e)))},reposition:function(e,t){var o,n=l.current,a=n?n.wrap:null
a&&(o=l._getPosition(t),e&&"scroll"===e.type?(delete o.position,a.stop(!0,!0).animate(o,200)):(a.css(o),n.pos=i.extend({},n.dim,o)))},update:function(e){var t=e&&e.originalEvent&&e.originalEvent.type,i=!t||"orientationchange"===t
i&&(clearTimeout(c),c=null)
l.isOpen&&!c&&(c=setTimeout(function(){var o=l.current
o&&!l.isClosing&&(l.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&o.autoResize)&&l._setDimension(),"scroll"===t&&o.canShrink||l.reposition(e),l.trigger("onUpdate"),c=null)},i&&!d?0:300))},toggle:function(e){l.isOpen&&(l.current.fitToView="boolean"===i.type(e)?e:!l.current.fitToView,d&&(l.wrap.removeAttr("style").addClass("fancybox-tmp"),l.trigger("onUpdate")),l.update())},hideLoading:function(){r.unbind(".loading")
i("#fancybox-loading").remove()},showLoading:function(){var e,t
l.hideLoading()
e=i('<div id="fancybox-loading"><div></div></div>').click(l.cancel).appendTo("body")
r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),l.cancel())})
l.defaults.fixed||(t=l.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))
l.trigger("onLoading")},getViewport:function(){var t=l.current&&l.current.locked||!1,i={x:a.scrollLeft(),y:a.scrollTop()}
t&&t.length?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=d&&e.innerWidth?e.innerWidth:a.width(),i.h=d&&e.innerHeight?e.innerHeight:a.height())
return i},unbindEvents:function(){l.wrap&&p(l.wrap)&&l.wrap.unbind(".fb")
r.unbind(".fb")
a.unbind(".fb")},bindEvents:function(){var e,t=l.current
t&&(a.bind("orientationchange.fb"+(d?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),l.update),(e=t.keys)&&r.bind("keydown.fb",function(n){var a=n.which||n.keyCode,r=n.target||n.srcElement
if(27===a&&l.coming)return!1
n.ctrlKey||n.altKey||n.shiftKey||n.metaKey||r&&(r.type||i(r).is("[contenteditable]"))||i.each(e,function(e,r){return 1<t.group.length&&r[a]!==o?(l[e](r[a]),n.preventDefault(),!1):-1<i.inArray(a,r)?(l[e](),n.preventDefault(),!1):void 0})}),i.fn.mousewheel&&t.mouseWheel&&l.wrap.bind("mousewheel.fb",function(e,o,n,a){for(var r=i(e.target||null),s=!1;r.length&&!(s||r.is(".fancybox-skin")||r.is(".fancybox-wrap"));)s=r[0]&&!(r[0].style.overflow&&"hidden"===r[0].style.overflow)&&(r[0].clientWidth&&r[0].scrollWidth>r[0].clientWidth||r[0].clientHeight&&r[0].scrollHeight>r[0].clientHeight),r=i(r).parent()
0!==o&&!s&&1<l.group.length&&!t.canShrink&&(0<a||0<n?l.prev(0<a?"down":"left"):(0>a||0>n)&&l.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var o,n=t||l.coming||l.current
if(n){i.isFunction(n[e])&&(o=n[e].apply(n,Array.prototype.slice.call(arguments,1)))
if(!1===o)return!1
n.helpers&&i.each(n.helpers,function(t,o){o&&l.helpers[t]&&i.isFunction(l.helpers[t][e])&&l.helpers[t][e](i.extend(!0,{},l.helpers[t].defaults,o),n)})}r.trigger(e)},isImage:function(e){return u(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return u(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,o,n={}
e=f(e)
t=l.group[e]||null
if(!t)return!1
n=i.extend(!0,{},l.opts,t)
t=n.margin
o=n.padding
"number"===i.type(t)&&(n.margin=[t,t,t,t])
"number"===i.type(o)&&(n.padding=[o,o,o,o])
n.modal&&i.extend(!0,n,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}})
n.autoSize&&(n.autoWidth=n.autoHeight=!0)
"auto"===n.width&&(n.autoWidth=!0)
"auto"===n.height&&(n.autoHeight=!0)
n.group=l.group
n.index=e
l.coming=n
if(!1===l.trigger("beforeLoad"))l.coming=null
else{o=n.type
t=n.href
if(!o)return l.coming=null,!(!l.current||!l.router||"jumpto"===l.router)&&(l.current.index=e,l[l.router](l.direction))
l.isActive=!0
"image"!==o&&"swf"!==o||(n.autoHeight=n.autoWidth=!1,n.scrolling="visible")
"image"===o&&(n.aspectRatio=!0)
"iframe"===o&&d&&(n.scrolling="scroll")
n.wrap=i(n.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+n.wrapCSS).appendTo(n.parent||"body")
i.extend(n,{skin:i(".fancybox-skin",n.wrap),outer:i(".fancybox-outer",n.wrap),inner:i(".fancybox-inner",n.wrap)})
i.each(["Top","Right","Bottom","Left"],function(e,t){n.skin.css("padding"+t,m(n.padding[e]))})
l.trigger("onReady")
if("inline"===o||"html"===o){if(!n.content||!n.content.length)return l._error("content")}else if(!t)return l._error("href")
"image"===o?l._loadImage():"ajax"===o?l._loadAjax():"iframe"===o?l._loadIframe():l._afterLoad()}},_error:function(e){i.extend(l.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:l.coming.tpl.error})
l._afterLoad()},_loadImage:function(){var e=l.imgPreload=new Image
e.onload=function(){this.onload=this.onerror=null
l.coming.width=this.width/l.opts.pixelRatio
l.coming.height=this.height/l.opts.pixelRatio
l._afterLoad()}
e.onerror=function(){this.onload=this.onerror=null
l._error("image")}
e.src=l.coming.href
!0!==e.complete&&l.showLoading()},_loadAjax:function(){var e=l.coming
l.showLoading()
l.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){l.coming&&"abort"!==t?l._error("ajax",e):l.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,l._afterLoad())}}))},_loadIframe:function(){var e=l.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":e.iframe.scrolling).attr("src",e.href)
i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}})
e.iframe.preload&&(l.showLoading(),t.one("load",function(){i(this).data("ready",1)
d||i(this).bind("load.fb",l.update)
i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show()
l._afterLoad()}))
e.content=t.appendTo(e.inner)
e.iframe.preload||l._afterLoad()},_preloadImages:function(){var e,t,i=l.group,o=l.current,n=i.length,a=o.preload?Math.min(o.preload,n-1):0
for(t=1;t<=a;t+=1)e=i[(o.index+t)%n],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,o,n,a,r=l.coming,s=l.current
l.hideLoading()
if(r&&!1!==l.isActive)if(!1===l.trigger("afterLoad",r,s))r.wrap.stop(!0).trigger("onReset").remove(),l.coming=null
else{s&&(l.trigger("beforeChange",s),s.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove())
l.unbindEvents()
e=r.content
t=r.type
o=r.scrolling
i.extend(l,{wrap:r.wrap,skin:r.skin,outer:r.outer,inner:r.inner,current:r,previous:s})
n=r.href
switch(t){case"inline":case"ajax":case"html":r.selector?e=i("<div>").html(e).find(r.selector):p(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),r.wrap.bind("onReset",function(){i(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}))
break
case"image":e=r.tpl.image.replace(/\{href\}/g,n)
break
case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+n+'"></param>',a="",i.each(r.swf,function(t,i){e+='<param name="'+t+'" value="'+i+'"></param>'
a+=" "+t+'="'+i+'"'}),e+='<embed src="'+n+'" type="application/x-shockwave-flash" width="100%" height="100%"'+a+"></embed></object>"}p(e)&&e.parent().is(r.inner)||r.inner.append(e)
l.trigger("beforeShow")
r.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o)
l._setDimension()
l.reposition()
l.isOpen=!1
l.coming=null
l.bindEvents()
l.isOpened?s.prevMethod&&l.transitions[s.prevMethod]():i(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove()
l.transitions[l.isOpened?r.nextMethod:r.openMethod]()
l._preloadImages()}},_setDimension:function(){var e,t,o,n,a,r,s,c,d,p=l.getViewport(),u=0,g=!1,y=!1,g=l.wrap,w=l.skin,v=l.inner,b=l.current,y=b.width,x=b.height,k=b.minWidth,C=b.minHeight,O=b.maxWidth,_=b.maxHeight,T=b.scrolling,H=b.scrollOutside?b.scrollbarWidth:0,E=b.margin,L=f(E[1]+E[3]),D=f(E[0]+E[2])
g.add(w).add(v).width("auto").height("auto").removeClass("fancybox-tmp")
E=f(w.outerWidth(!0)-w.width())
e=f(w.outerHeight(!0)-w.height())
t=L+E
o=D+e
n=h(y)?(p.w-t)*f(y)/100:y
a=h(x)?(p.h-o)*f(x)/100:x
if("iframe"===b.type){if(d=b.content,b.autoHeight&&1===d.data("ready"))try{d[0].contentWindow.document.location&&(v.width(n).height(9999),r=d.contents().find("body"),H&&r.css("overflow-x","hidden"),a=r.outerHeight(!0))}catch(e){}}else(b.autoWidth||b.autoHeight)&&(v.addClass("fancybox-tmp"),b.autoWidth||v.width(n),b.autoHeight||v.height(a),b.autoWidth&&(n=v.width()),b.autoHeight&&(a=v.height()),v.removeClass("fancybox-tmp"))
y=f(n)
x=f(a)
c=n/a
k=f(h(k)?f(k,"w")-t:k)
O=f(h(O)?f(O,"w")-t:O)
C=f(h(C)?f(C,"h")-o:C)
_=f(h(_)?f(_,"h")-o:_)
r=O
s=_
b.fitToView&&(O=Math.min(p.w-t,O),_=Math.min(p.h-o,_))
t=p.w-L
D=p.h-D
b.aspectRatio?(y>O&&(y=O,x=f(y/c)),x>_&&(x=_,y=f(x*c)),y<k&&(y=k,x=f(y/c)),x<C&&(x=C,y=f(x*c))):(y=Math.max(k,Math.min(y,O)),b.autoHeight&&"iframe"!==b.type&&(v.width(y),x=v.height()),x=Math.max(C,Math.min(x,_)))
if(b.fitToView)if(v.width(y).height(x),g.width(y+E),p=g.width(),L=g.height(),b.aspectRatio)for(;(p>t||L>D)&&y>k&&x>C&&!(19<u++);)x=Math.max(C,Math.min(_,x-10)),y=f(x*c),y<k&&(y=k,x=f(y/c)),y>O&&(y=O,x=f(y/c)),v.width(y).height(x),g.width(y+E),p=g.width(),L=g.height()
else y=Math.max(k,Math.min(y,y-(p-t))),x=Math.max(C,Math.min(x,x-(L-D)))
H&&"auto"===T&&x<a&&y+E+H<t&&(y+=H)
v.width(y).height(x)
g.width(y+E)
p=g.width()
L=g.height()
g=(p>t||L>D)&&y>k&&x>C
y=b.aspectRatio?y<r&&x<s&&y<n&&x<a:(y<r||x<s)&&(y<n||x<a)
i.extend(b,{dim:{width:m(p),height:m(L)},origWidth:n,origHeight:a,canShrink:g,canExpand:y,wPadding:E,hPadding:e,wrapSpace:L-w.outerHeight(!0),skinSpace:w.height()-x})
!d&&b.autoHeight&&x>C&&x<_&&!y&&v.height("auto")},_getPosition:function(e){var t=l.current,i=l.getViewport(),o=t.margin,n=l.wrap.width()+o[1]+o[3],a=l.wrap.height()+o[0]+o[2],o={position:"absolute",top:o[0],left:o[3]}
t.autoCenter&&t.fixed&&!e&&a<=i.h&&n<=i.w?o.position="fixed":t.locked||(o.top+=i.y,o.left+=i.x)
o.top=m(Math.max(o.top,o.top+(i.h-a)*t.topRatio))
o.left=m(Math.max(o.left,o.left+(i.w-n)*t.leftRatio))
return o},_afterZoomIn:function(){var e=l.current
e&&(l.isOpen=l.isOpened=!0,l.wrap.css("overflow","visible").addClass("fancybox-opened"),l.update(),(e.closeClick||e.nextClick&&1<l.group.length)&&l.inner.css("cursor","pointer").bind("click.fb",function(t){i(t.target).is("a")||i(t.target).parent().is("a")||(t.preventDefault(),l[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(l.skin).bind("click.fb",function(e){e.preventDefault()
l.close()}),e.arrows&&1<l.group.length&&((e.loop||0<e.index)&&i(e.tpl.prev).appendTo(l.outer).bind("click.fb",l.prev),(e.loop||e.index<l.group.length-1)&&i(e.tpl.next).appendTo(l.outer).bind("click.fb",l.next)),l.trigger("afterShow"),e.loop||e.index!==e.group.length-1?l.opts.autoPlay&&!l.player.isActive&&(l.opts.autoPlay=!1,l.play(!0)):l.play(!1))},_afterZoomOut:function(e){e=e||l.current
i(".fancybox-wrap").trigger("onReset").remove()
i.extend(l,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null})
l.trigger("afterClose",e)}})
l.transitions={getOrigPosition:function(){var e=l.current,t=e.element,i=e.orig,o={},n=50,a=50,r=e.hPadding,s=e.wPadding,c=l.getViewport()
!i&&e.isDom&&t.is(":visible")&&(i=t.find("img:first"),i.length||(i=t))
p(i)?(o=i.offset(),i.is("img")&&(n=i.outerWidth(),a=i.outerHeight())):(o.top=c.y+(c.h-a)*e.topRatio,o.left=c.x+(c.w-n)*e.leftRatio);("fixed"===l.wrap.css("position")||e.locked)&&(o.top-=c.y,o.left-=c.x)
return o={top:m(o.top-r*e.topRatio),left:m(o.left-s*e.leftRatio),width:m(n+s),height:m(a+r)}},step:function(e,t){var i,o,n=t.prop
o=l.current
var a=o.wrapSpace,r=o.skinSpace
"width"!==n&&"height"!==n||(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),l.isClosing&&(i=1-i),o="width"===n?o.wPadding:o.hPadding,o=e-o,l.skin[n](f("width"===n?o:o-a*i)),l.inner[n](f("width"===n?o:o-a*i-r*i)))},zoomIn:function(){var e=l.current,t=e.pos,o=e.openEffect,n="elastic"===o,a=i.extend({opacity:1},t)
delete a.position
n?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===o&&(t.opacity=.1)
l.wrap.css(t).animate(a,{duration:"none"===o?0:e.openSpeed,easing:e.openEasing,step:n?this.step:null,complete:l._afterZoomIn})},zoomOut:function(){var e=l.current,t=e.closeEffect,i="elastic"===t,o={opacity:.1}
i&&(o=this.getOrigPosition(),e.closeOpacity&&(o.opacity=.1))
l.wrap.animate(o,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:l._afterZoomOut})},changeIn:function(){var e,t=l.current,i=t.nextEffect,o=t.pos,n={opacity:1},a=l.direction
o.opacity=.1
"elastic"===i&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(o[e]=m(f(o[e])-200),n[e]="+=200px"):(o[e]=m(f(o[e])+200),n[e]="-=200px"))
"none"===i?l._afterZoomIn():l.wrap.css(o).animate(n,{duration:t.nextSpeed,easing:t.nextEasing,complete:l._afterZoomIn})},changeOut:function(){var e=l.previous,t=e.prevEffect,o={opacity:.1},n=l.direction
"elastic"===t&&(o["down"===n||"up"===n?"top":"left"]=("up"===n||"left"===n?"-":"+")+"=200px")
e.wrap.animate(o,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}}
l.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(e){var t
e=i.extend({},this.defaults,e)
this.overlay&&this.close()
t=l.coming?l.coming.parent:e.parent
this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(t&&t.lenth?t:"body")
this.fixed=!1
e.fixed&&l.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this
e=i.extend({},this.defaults,e)
this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e)
this.fixed||(a.bind("resize.overlay",i.proxy(this.update,this)),this.update())
e.closeClick&&this.overlay.bind("click.overlay",function(e){if(i(e.target).hasClass("fancybox-overlay"))return l.isActive?l.close():t.close(),!1})
this.overlay.css(e.css).show()},close:function(){a.unbind("resize.overlay")
this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),a.scrollTop(this.scrollV).scrollLeft(this.scrollH))
i(".fancybox-overlay").remove().hide()
i.extend(this,{overlay:null,fixed:!1})},update:function(){var e,i="100%"
this.overlay.width(i).height("100%")
s?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(i=r.width())):r.width()>a.width()&&(i=r.width())
this.overlay.width(i).height(r.height())},onReady:function(e,t){var o=this.overlay
i(".fancybox-overlay").stop(!0,!0)
o||this.create(e)
e.locked&&this.fixed&&t.fixed&&(t.locked=this.overlay.append(t.wrap),t.fixed=!1)
!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){t.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=a.scrollTop(),this.scrollH=a.scrollLeft(),this.el.addClass("fancybox-lock"),a.scrollTop(this.scrollV).scrollLeft(this.scrollH))
this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!l.coming&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}}
l.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=l.current,o=t.title,n=e.type
i.isFunction(o)&&(o=o.call(t.element,t))
if(u(o)&&""!==i.trim(o)){t=i('<div class="fancybox-title fancybox-title-'+n+'-wrap">'+o+"</div>")
switch(n){case"inside":n=l.skin
break
case"outside":n=l.wrap
break
case"over":n=l.inner
break
default:n=l.skin,t.appendTo("body"),s&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),l.current.margin[2]+=Math.abs(f(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](n)}}}
i.fn.fancybox=function(e){var t,o=i(this),n=this.selector||"",a=function(a){var r,s,c=i(this).blur(),d=t
a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(r=e.groupAttr||"data-fancybox-group",s=c.attr(r),s||(r="rel",s=c.get(0)[r]),s&&""!==s&&"nofollow"!==s&&(c=n.length?i(n):o,c=c.filter("["+r+'="'+s+'"]'),d=c.index(this)),e.index=d,!1!==l.open(c,e)&&a.preventDefault())}
e=e||{}
t=e.index||0
n&&!1!==e.live?r.undelegate(n,"click.fb-start").delegate(n+":not('.fancybox-item, .fancybox-nav')","click.fb-start",a):o.unbind("click.fb-start").bind("click.fb-start",a)
this.filter("[data-fancybox-start=1]").trigger("click")
return this}
r.ready(function(){var t,a
i.scrollbarWidth===o&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth()
e.remove()
return t})
i.support.fixedPosition===o&&(i.support.fixedPosition=function(){var e=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop
e.remove()
return t}())
i.extend(l.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")})
t=i(e).width()
n.addClass("fancybox-lock-test")
a=i(e).width()
n.removeClass("fancybox-lock-test")
i("<style type='text/css'>.fancybox-margin{margin-right:"+(a-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery)},671:function(e,t,i){"use strict"
var o,n,a,r,l
o=i(161).RegexConstants
l=o.VIDEO_UPLOAD.YOUTUBE
r=o.VIDEO_UPLOAD.VIMEO
a=function(e){return l.test(e)?"youtube":r.test(e)?"vimeo":o.VIDEO_UPLOAD.YOUKU.test(e)?"youku":o.VIDEO_UPLOAD.TUDOU.test(e)?"tudou":o.VIDEO_UPLOAD.QQ.test(e)?"qq":""}
n={getVideoType:a,getVideoID:function(e,t){t||(t=a(e))
switch(t){case"youtube":return e.match(l)[1].split("&")[0]
case"vimeo":return e.match(r)[1]}},getSmallYTThumbnail:function(e){return"//img.youtube.com/vi/"+e+"/mqdefault.jpg"},getNormalYTThumbnail:function(e){return"//img.youtube.com/vi/"+e+"/hqdefault.jpg"},getHDYTThumbnail:function(e){return"//img.youtube.com/vi/"+e+"/maxresdefault.jpg"},getYTIFrameHtml:function(e,t,i){var o
null==t&&(t=854)
null==i&&(i=480)
o=e+"_"+(new Date).getTime()
return"<iframe id='"+o+"' src='//www.youtube.com/embed/"+e+"?rel=1&autoplay=1&loop=1&playlist="+e+"&showinfo=0&wmode=transparent&controls=0&enablejsapi=1&origin=' frameborder='0' width='"+t+"' height='"+i+"'></iframe>"},getVimeoIFrameHtml:function(e,t,i){var o
o=e+"_"+(new Date).getTime()
return"<iframe id='"+o+"' src='//player.vimeo.com/video/"+e+"?api=1&player_id="+o+"&autopause=0&autoplay=1&badge=0&loop=1&portrait=0&title=0&origin=' frameborder='0' width='"+t+"' height='"+i+"'></iframe>"},getVideoHtmlByUrl:function(e,t,i){var o
o=a(e)
switch(o){case"youtube":return n.getYTIFrameHtml(n.getVideoID(e,"youtube"),t,i)
case"vimeo":return n.getVimeoIFrameHtml(n.getVideoID(e,"vimeo"),t,i)}},getYouKuHtml:function(e,t,i){var o,n
null==t&&(t=854)
null==i&&(i=480)
o=e.match(/\/id_([^.\/]*)(?:.html)?/)||[]
if(o.length){n=o[1]
return"<iframe width='"+t+"' height='"+i+"' src='http://player.youku.com/embed/"+n+"' frameborder=0 allowfullscreen></iframe>"}return""},getTuDouHtml:function(e,t,i){var o,n,a,r
null==t&&(t=854)
null==i&&(i=480)
if(/\/programs\/view\//.test(e)){n=e.match(/\/programs\/view\/([^.\/]*)\//)||[]
a=0}else if(/\/listplay\//.test(e)){n=e.match(/\/listplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/)||[]
a=1}else{if(!/\/albumplay\//.test(e))return""
n=e.match(/\/albumplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/)||[]
a=2}if(n.length){r=""
o=""
switch(n.length){case 3:r=n[2]
o=n[1]
break
case 2:r=n[1]}return"<iframe src='http://www.tudou.com/programs/view/html5embed.action?type="+a+"&code="+r+"&lcode="+o+"' width='"+t+"' height='"+i+"' allowtransparency='true' allowfullscreen='true' allowfullscreenInteractive='true' scrolling='no' border='0' frameborder='0'></iframe>"}return""},getQQHtml:function(e,t,i){var o,n,a,r
null==t&&(t=640)
null==i&&(i=498)
o=/v\.qq\.com.*vid=(\w*)$/
n=/v\.qq\.com.*\/page.*\/(\w*)\.html/
r=""
a=e.match(o);(null!=a?a.length:void 0)&&(r=a[1])
a=e.match(n);(null!=a?a.length:void 0)&&(r=a[1])
return r?"<iframe frameborder='0' width='"+t+"' height='"+i+"' src='http://v.qq.com/iframe/player.html?vid="+r+"&tiny=0&auto=0' allowfullscreen></iframe>":""},getMoreVideoTypesForFancybox:function(){return{youku:{matcher:/v\.youku\.com\/v_show\/id_([^.\/]*)(?:.html)?/,type:"iframe",url:"http://player.youku.com/embed/$1"},tudou1:{matcher:/www\.tudou\.com\/programs\/view\/([^.\/]*)\//,type:"iframe",url:"http://www.tudou.com/programs/view/html5embed.action?type=0&code=$1"},tudou2:{matcher:/www\.tudou\.com\/listplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/,type:"iframe",url:"http://www.tudou.com/programs/view/html5embed.action?type=1&code=$2&lcode=$1"},tudou3:{matcher:/www\.tudou\.com\/albumplay\/([^.\/]*)\/([^.\/]*)(?:.html)?/,type:"iframe",url:"http://www.tudou.com/programs/view/html5embed.action?type=1&code=$2&lcode=$1"}}}}
e.exports=n},685:function(){!function(e){"use strict"
var t=e.fancybox,i=function(t,i,o){o=o||""
"object"===e.type(o)&&(o=e.param(o,!0))
e.each(i,function(e,i){t=t.replace("$"+e,i||"")})
o.length&&(t+=(t.indexOf("?")>0?"&":"?")+o)
return t}
t.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(t,i,o){o.swf.flashVars="playerVars="+e.param(i,!0)
return"//www.metacafe.com/fplayer/"+t[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[1]+"/"+e[3]+e[4]+"&output="+(e[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(t,o){var n,a,r,l,s=o.href||"",c=!1
for(n in t)if(t.hasOwnProperty(n)){a=t[n]
r=s.match(a.matcher)
if(r){c=a.type
l=e.extend(!0,{},a.params,o[n]||(e.isPlainObject(t[n])?t[n].params:null))
s="function"===e.type(a.url)?a.url.call(this,r,l,o):i(a.url,r,l)
break}}if(c){o.href=s
o.type=c
o.autoHeight=!1}}}}(jQuery)}})
;
