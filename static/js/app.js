function isURL(e){var t=e,i=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;return 1==new RegExp(i).test(t)}function isPC(){for(var e=navigator.userAgent,t=["Android","iPhone","webOS","BlackBerry","SymbianOS","Windows Phone","iPad","iPod"],i=!0,a=0;a<t.length;a++)if(e.indexOf(t[a])>0){i=!1;break}return i}function chack_name(e){return!!RegExp(/[( )(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\*)(\()(\))(\+)(\=)(\[)(\])(\{)(\})(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\»)(\«)(\“)(\”)(\?)(\)]+/).test(e)}function showAlert(e){var t,i,a;switch(e.status){case 1:t="成功",i="success",a="icon-adopt";break;case 2:t="信息",i="info",a="icon-tishi";break;case 3:t="警告",i="warning",a="icon-warning";break;case 4:t="错误",i="danger",a="icon-close-circle"}var s=e.msg;$("#alert_placeholder").hasClass("text-sm")||$("body").append('<div id="alert_placeholder" class="text-sm" style="position: fixed;bottom: 10px;right: 10px;z-index: 2000;text-align: right;text-align: -webkit-right"></div>'),$html=$('<div class="alert-body" style="display:none;"><div class="alert alert-'+i+' text-lg pr-4 pr-md-5" style="text-align:initial"><i class="iconfont '+a+' icon-lg" style="vertical-align: middle;margin-right: 10px"></i><span style="vertical-align:middle">'+t+'</span><br><span class="text-md" style="margin-left:30px;vertical-align:middle">'+s+"</span></div></div>"),$("#alert_placeholder").append($html),$html.show(200).delay(3500).hide(300,function(){$(this).remove()})}function toTarget(e,t,i){var a=e.children(".anchor"),s=e.children(".hover").first();s&&0<s.length||(s=i?e.find(".active").parent():e.find(".active")),0<s.length?t?a.css({left:s.position().left+s.scrollLeft()+"px",width:s.outerWidth()+"px",opacity:"1"}):a.css({left:s.position().left+s.scrollLeft()+s.outerWidth()/4+"px",width:s.outerWidth()/2+"px",opacity:"1"}):a.css({opacity:"0"})}function loadingShow(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body";if($(".load-loading")[0])return ioadindex++,$(".load-loading");var t=$('<div class="load-loading" style="display:none"><div class="bg"></div><div class="rounded-lg bg-light" style="z-index:1"><div class="spinner-border m-4" role="status"><span class="sr-only">Loading...</span></div></div></div>');return $(e).prepend(t),t.fadeIn(200),t}function loadingHid(e){ioadindex>0?ioadindex--:(ioadindex=0,e.fadeOut(300,function(){e.remove()}))}function ioPopupTips(e,t,i){var a="";switch(e){case 1:a="icon-adopt";break;case 2:a="icon-tishi";break;case 3:a="icon-warning";break;case 4:a="icon-close-circle"}var s=1==e?"tips-success":"tips-error",o='<section class="io-bomb '+s+' io-bomb-sm io-bomb-open"><div class="io-bomb-overlay"></div><div class="io-bomb-body text-center"><div class="io-bomb-content bg-white px-5"><i class="iconfont '+a+' icon-8x"></i><p class="text-md mt-3">'+t+"</p></div></div></section>",n=$(o);$("body").addClass("modal-open").append(n),setTimeout(function(){$("body").removeClass("modal-open"),$.isFunction(i)&&i(!0),n.removeClass("io-bomb-open").addClass("io-bomb-close"),setTimeout(function(){n.removeClass("io-bomb-close"),setTimeout(function(){n.remove()},200)},400)},2e3)}function ioPopup(e,t,i,a){var i=i?'style="'+i+'"':"",s="";"big"==e?s="io-bomb-lg":"no-padding"==e?s="io-bomb-nopd":"cover"==e?s="io-bomb-cover io-bomb-nopd":"full"==e?s="io-bomb-xl":"small"==e?s="io-bomb-sm":"confirm"==e&&(s="io-bomb-md");var o='<div class="io-bomb '+s+' io-bomb-open">  <div class="io-bomb-overlay" '+i+'></div>  <div class="io-bomb-body text-center">    <div class="io-bomb-content bg-white">      '+t+'    </div>    <div class="btn-close-bomb mt-2">              <i class="iconfont icon-close-circle"></i>          </div>  </div></div>',n=$(o);$("body").addClass("modal-open").append(n);var r=function(){$("body").removeClass("modal-open"),$(n).removeClass("io-bomb-open").addClass("io-bomb-close"),setTimeout(function(){$(n).removeClass("io-bomb-close"),setTimeout(function(){n.remove()},200)},600)};return $(n).on("click touchstart",".btn-close-bomb i, .io-bomb-overlay",function(e){e.preventDefault(),$.isFunction(a)&&a(!0),r()}),n}function ioConfirm(e,t){var i='<div class="io-bomb io-bomb-confirm io-bomb-open">  <div class="io-bomb-overlay"></div>  <div class="io-bomb-body">    <div class="io-bomb-content bg-white">      '+e+'              <div class="text-center mt-3">                  <button class="btn btn-danger mx-2" onclick="_onclick(true);">确定</button>                  <button class="btn btn-light mx-2" onclick="_onclick(false);">取消</button>              </div>    </div>  </div></div>',a=$(i);$("body").addClass("modal-open").append(a),_onclick=function(e){s(),$.isFunction(t)&&t(e)};var s=function(){$("body").removeClass("modal-open"),$(a).removeClass("io-bomb-open").addClass("io-bomb-close"),setTimeout(function(){$(a).removeClass("io-bomb-close"),setTimeout(function(){a.remove()},200)},600)};return a}function hasScrollbar(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)?"11":"22"}function getScrollbarWidth(){var e,t,i=document.createElement("DIV");return i.style.cssText="position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;",e=document.body.appendChild(i).clientWidth,i.style.overflowY="scroll",t=i.clientWidth,document.body.removeChild(i),e-t}function setCookie(e,t,i){var a="";if(""!=i){var s=new Date;s.setTime(s.getTime()+24*i*60*60*1e3),a="expires="+s.toGMTString()}document.cookie=e+"="+t+"; "+a+"; path=/"}function getCookie(e){for(var t=e+"=",i=document.cookie.split(";"),a=0;a<i.length;a++){var s=i[a].trim();if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""}function switchNightMode(){"0"==(document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/,"$1")||"0")?(document.body.classList.remove("io-grey-mode"),document.body.classList.add("io-black-mode"),document.cookie="night=1;path=/",$(".switch-dark-mode").attr("data-original-title","日间模式"),$(".mode-ico").removeClass("fa-certificate"),$(".mode-ico").addClass("fa-moon-o")):(document.body.classList.remove("io-black-mode"),document.body.classList.add("io-grey-mode"),document.cookie="night=0;path=/",$(".switch-dark-mode").attr("data-original-title","夜间模式"),$(".mode-ico").removeClass("fa-moon-o"),$(".mode-ico").addClass("fa-certificate"))}$(document).ready(function(){var e=$("#loading");e.addClass("close"),setTimeout(function(){e.remove()},600)}),$(document).ready(function(){setTimeout(function(){$('a.smooth[href="'+window.location.hash+'"]')[0]?$('a.smooth[href="'+window.location.hash+'"]').click():""!=window.location.hash&&$("html, body").animate({scrollTop:$(window.location.hash).offset().top-90},{duration:500,easing:"swing"})},300),$(document).on("click","a.smooth",function(e){e.preventDefault(),$("#sidebar").hasClass("show")&&!$(this).hasClass("change-href")&&$("#sidebar").modal("toggle"),"#"==$(this).attr("href").substr(0,1)&&$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-90},{duration:500,easing:"swing"}),$(this).hasClass("go-search-btn")&&$("#search-text").focus(),$(this).hasClass("change-href")}),$(document).on("click","a.tab-noajax",function(e){var t=$(this).data("link");t?$(this).parents(".d-flex.flex-fill.flex-tab").children(".btn-move.tab-move").show().attr("href",t):$(this).parents(".d-flex.flex-fill.flex-tab").children(".btn-move.tab-move").hide()})});var imgArr=["/wallpaper/01.jpg","/wallpaper/02.jpg","/wallpaper/03.jpg","/wallpaper/04.jpg","/wallpaper/05.jpg","/wallpaper/06.jpg","/wallpaper/07.jpg","/wallpaper/08.jpg","/wallpaper/09.jpg","/wallpaper/10.jpg","/wallpaper/11.jpg","/wallpaper/12.jpg","/wallpaper/13.jpg","/wallpaper/14.jpg","/wallpaper/15.jpg","/wallpaper/16.jpg","/wallpaper/17.jpg","/wallpaper/18.jpg","/wallpaper/19.jpg","/wallpaper/20.jpg","/wallpaper/21.jpg","/wallpaper/22.jpg","/wallpaper/01.png","/wallpaper/02.png"];bgImg=imgArr[Math.floor(Math.random()*imgArr.length)],$(".img-bg").css("background-image","url("+bgImg+")");var theme={ajaxurl:"",addico:"/images/add.png",order:"asc",formpostion:"top",defaultclass:"io-grey-mode",isCustomize:"1",icourl:"",icopng:".png",urlformat:"1",customizemax:"10",newWindow:"0",lazyload:"1",minNav:"1",loading:"1",hotWords:"baidu",classColumns:"col-sm-6 col-md-4 col-xl-5a col-xxl-6a",apikey:""};!function(e){function t(){s(),o(!0)}function i(){e("body").hasClass("io-black-mode")?(e(".switch-dark-mode").attr("data-original-title")?e(".switch-dark-mode").attr("data-original-title","日间模式"):e(".switch-dark-mode").attr("title","日间模式"),e(".mode-ico").removeClass("icon-night"),e(".mode-ico").addClass("icon-light")):(e(".switch-dark-mode").attr("data-original-title")?e(".switch-dark-mode").attr("data-original-title","夜间模式"):e(".switch-dark-mode").attr("title","夜间模式"),e(".mode-ico").removeClass("icon-light"),e(".mode-ico").addClass("icon-night"))}function a(){e(".slider_menu[sliderTab]").each(function(){if(!e(this).hasClass("into")){var t=e(this).children("ul");t.prepend('<li class="anchor" style="position:absolute;width:0;height:28px"></li>');var i=t.find(".active").parent();0<i.length&&t.children(".anchor").css({left:i.position().left+i.scrollLeft()+"px",width:i.outerWidth()+"px",height:i.height()+"px",opacity:"1"}),e(this).addClass("into")}})}function s(){if(e(".main-footer").attr("style",""),e(".main-footer").hasClass("text-xs")){var t=jQuery(window).height(),i=e(".main-footer").outerHeight(!0),a=e(".main-footer").position().top+i;t>a-parseInt(e(".main-footer").css("marginTop"),10)&&e(".main-footer").css({marginTop:t-a})}}function o(t){"1"==theme.minNav&&!y&&767.98<e(window).width()||!y&&767.98<e(window).width()&&e(window).width()<1024?(e("#mini-button").prop("checked",!0),n(t),y=!0,k&&(e("#sidebar").addClass("mini-sidebar"),e(".sidebar-nav .change-href").each(function(){e(this).attr("href",e(this).data("change"))}),k=!1)):"1"!=theme.minNav&&(y&&e(window).width()>=1024||k&&!y&&e(window).width()>=1024)?(e("#mini-button").prop("checked",!0),n(t),y=!1,k&&(k=!1)):e(window).width()<767.98&&e("#sidebar").hasClass("mini-sidebar")&&(e("#sidebar").removeClass("mini-sidebar"),e(".sidebar-nav .change-href").attr("href","javascript:;"),k=!0,y=!1)}function n(t){e('.header-mini-btn input[type="checkbox"]').prop("checked")?(e(".sidebar-nav").removeClass("mini-sidebar"),e(".sidebar-nav .change-href").attr("href","javascript:;"),e(".sidebar-menu ul ul").css("display","none"),t?(e(".sidebar-nav").removeClass("animate-nav"),e(".sidebar-nav").width(170)):(e(".sidebar-nav").addClass("animate-nav"),e(".sidebar-nav").stop().animate({width:170},200))):(e(".sidebar-item.sidebar-show").removeClass("sidebar-show"),e(".sidebar-menu ul").removeAttr("style"),e(".sidebar-nav").addClass("mini-sidebar"),e(".sidebar-nav .change-href").each(function(){e(this).attr("href",e(this).data("change"))}),t?(e(".sidebar-nav").removeClass("animate-nav"),e(".sidebar-nav").width(60)):(e(".sidebar-nav").addClass("animate-nav"),e(".sidebar-nav").stop().animate({width:60},200)))}function r(t,i,a){t.hasClass("active")||(i.find("a").removeClass("active"),t.addClass("active"),0==e(a).children(".ajax-loading").length&&e(a).append('<div class="ajax-loading text-center rounded" style="position:absolute;display:flex;left:0;width:100%;top:-1rem;bottom:.5rem;background:rgba(125,125,125,.5)"><div class="col align-self-center"><i class="iconfont icon-loading icon-spin icon-2x"></i></div></div>'),e.ajax({url:theme.ajaxurl,type:"POST",dataType:"html",data:t.data(),cache:!0}).done(function(i){if(i.trim()){e(a).html(""),e(a).append(i);var s=e(a).children("#ajax-cat-url").data("url");s?t.parents(".d-flex.flex-fill.flex-tab").children(".btn-move.tab-move").show().attr("href",s):t.parents(".d-flex.flex-fill.flex-tab").children(".btn-move.tab-move").hide(),isPC()&&e('.ajax-url [data-toggle="tooltip"]').tooltip({trigger:"hover"})}else e(".ajax-loading").remove()}).fail(function(){e(".ajax-loading").remove()}))}function l(e){for(var t=c("myLinks"),i=0;i<t.length;i++)if(t[i].url==e.url)return void showAlert(JSON.parse('{"status":4,"msg":"该网址已经存在了 --."}'));t.unshift(e),d(e,!1,!1),m(t,"myLinks")}function d(t,i,a){i?e(".customize_nothing_click").remove():e(".customize_nothing").remove();var s,o=t.url.match(/^(?:https?:\/\/)?((?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6})/);!o||o.length<2?s=t.url:(s=o[0],"1"==theme.urlformat&&(s=o[1]));var n=e('<div class="url-card  col-6 '+theme.classColumns+' col-xxl-10a"><div class="url-body mini"><a href="'+t.url+'" target="_blank" class="card new-site mb-3 site-'+t.id+'" data-id="'+t.id+'" data-url="'+t.url+'" data-toggle="tooltip" data-placement="bottom" title="'+t.name+'" rel="external nofollow"><div class="card-body" style="padding:0.4rem 0.5rem;"><div class="url-content d-flex align-items-center"><div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"><img src="'+theme.icourl+s+theme.icopng+'"></div><div class="url-info flex-fill"><div class="text-sm overflowClip_1"><strong>'+t.name+'</strong></div></div></div></div></a></div><a href="javascript:;" class="text-center remove-site" data-id="'+t.id+'" style="display: none"><i class="iconfont icon-close-circle"></i></a></div>');i?(a?e(".my-click-list").prepend(n):e(".my-click-list").append(n),n.children(".remove-site").on("click",p)):(e("#add-site").before(n),n.children(".remove-site").on("click",u)),x&&n.children(".remove-site").show(),isPC()&&e('.new-site[data-toggle="tooltip"]').tooltip({trigger:"hover"})}function c(e){var t=window.localStorage.getItem(e);return t?t=JSON.parse(t):[]}function m(e,t){window.localStorage.setItem(t,JSON.stringify(e))}function h(t){var i=c(t?"livelists":"myLinks");if(i.length&&!t&&!e("#add-site")[0])return void e(".customize_nothing.custom-site").children(".nothing").html('<a href="javascript:;" class="add-new-custom-site" data-action="add_custom_urls" data-term_name="我的导航" data-urls="'+Base64.encode(JSON.stringify(i))+'" >您已登录，检测到您的设备上有数据，点击<strong style="color:#db2323">同步到服务器</strong>。</a>');if(i.length)for(var a=0;a<i.length;a++)d(i[a],t,!1)}function u(){for(var t=e(this).data("id"),i=c("myLinks"),a=0;a<i.length;a++)if(parseInt(i[a].id)===parseInt(t)){console.log(i[a].id,t),i.splice(a,1);break}m(i,"myLinks"),e(this).parent().remove()}function p(){for(var t=e(this).data("id"),i=c("livelists"),a=0;a<i.length;a++)if(parseInt(i[a].id)===parseInt(t)){console.log(i[a].id,t),i.splice(a,1);break}m(i,"livelists"),e(this).parent().remove()}function f(){e(".customize-sites").hasClass("edit")?(isPC()&&e('.customize-sites .new-site[data-toggle="tooltip"]').tooltip("disable"),e(".customize-sites .site-list").sortable({items:".sortable",containment:".main-content",update:function(t,i){e(".customize-sites .site-list").sortable("disable");var a=e(this).data("term_id"),s=e(this).sortable("serialize"),o={action:"update_custom_url_order",term_id:a,order:s};e.ajax({url:theme.ajaxurl,type:"POST",data:o,cache:!1,dataType:"json",success:function(t){1!=t.status&&showAlert(t),e(".customize-sites .site-list").sortable("enable")},error:function(t){e(".customize-sites .site-list").sortable("enable"),showAlert(JSON.parse('{"status":4,"msg":"网络错误 --."}'))}})}})):(isPC()&&e('.customize-sites .new-site[data-toggle="tooltip"]').tooltip("enable"),e(".customize-sites .site-list").sortable("destroy"))}function v(){window.localStorage.getItem("searchlist")&&(e(".hide-type-list input#"+window.localStorage.getItem("searchlist")).prop("checked",!0),e(".hide-type-list input#m_"+window.localStorage.getItem("searchlist")).prop("checked",!0)),window.localStorage.getItem("searchlistmenu")&&(e(".s-type-list.big label").removeClass("active"),e(".s-type-list [data-id="+window.localStorage.getItem("searchlistmenu")+"]").addClass("active")),toTarget(e(".s-type-list.big"),!1,!1),e(".hide-type-list .s-current").removeClass("s-current"),e('.hide-type-list input:radio[name="type"]:checked').parents(".search-group").addClass("s-current"),e('.hide-type-list input:radio[name="type2"]:checked').parents(".search-group").addClass("s-current"),e(".super-search-fm").attr("action",e(".hide-type-list input:radio:checked").val()),e(".search-key").attr("placeholder",e(".hide-type-list input:radio:checked").data("placeholder")),"type-zhannei"==window.localStorage.getItem("searchlist")&&e(".search-key").attr("zhannei","true")}function b(t,i){e.ajax({type:"GET",url:"//suggestqueries.google.com/complete/search?client=firefox&callback=iowenHot",async:!0,data:{q:t},dataType:"jsonp",jsonp:"callback",success:function(t){var a=i.children(".search-smart-tips");if(a.children("ul").text(""),$=t[1].length){for(var s=0;s<$;s++)a.children("ul").append("<li>"+t[1][s]+"</li>"),a.find("li").eq(s).click(function(){var t=e(this).html();i.find(".smart-tips.search-key").val(t),i.children(".super-search-fm").submit(),a.slideUp(200)});a.slideDown(200)}else a.slideUp(200)},error:function(e){$=0}})}function g(t,i){e.ajax({type:"GET",url:"//sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=iowenHot",async:!0,data:{wd:t},dataType:"jsonp",jsonp:"cb",success:function(t){var a=i.children(".search-smart-tips");if(a.children("ul").text(""),$=t.s.length){for(var s=0;s<$;s++)a.children("ul").append("<li>"+t.s[s]+"</li>"),a.find("li").eq(s).click(function(){var t=e(this).html();i.find(".smart-tips.search-key").val(t),i.children(".super-search-fm").submit(),a.slideUp(200)});a.slideDown(200)}else a.slideUp(200)},error:function(e){$=0}})}e(document).ready(function(){"1"!=theme.minNav&&o(!0),i(),v(),s(),isPC()?e('[data-toggle="tooltip"]').tooltip({trigger:"hover"}):e('.qr-img[data-toggle="tooltip"]').tooltip({trigger:"hover"}),a(),e(".sidebar").theiaStickySidebar({additionalMarginTop:90,additionalMarginBottom:20}),"1"==theme.isCustomize&&(h(!1),h(!0))}),e(".panel-body.single img").each(function(t){this.parentNode.href||(theme.lazyload?e(this).wrap("<a href='"+e(this).data("src")+"' data-fancybox='fancybox' data-caption='"+this.alt+"'></a>"):e(this).wrap("<a href='"+this.src+"' data-fancybox='fancybox' data-caption='"+this.alt+"'></a>"))});var w=0;e(window).resize(function(){clearTimeout(w),w=setTimeout(t,200)}),e(".count-a").each(function(){e(this).prop("Counter",0).animate({Counter:e(this).text()},{duration:1e3,easing:"swing",step:function(t){e(this).text(Math.ceil(t))}})}),e(document).on("click","a[target!='_blank']",function(){if("1"==theme.loading&&e(this).attr("href")&&0!=e(this).attr("href").indexOf("#")&&0!=e(this).attr("href").indexOf("java")&&!e(this).data("fancybox")&&!e(this).data("commentid")&&!e(this).hasClass("nofx")){var t=e('<div id="load-loading"></div>');e("body").prepend(t),t.animate({opacity:"1"},200,"swing").delay(2e3).hide(300,function(){t.remove()})}}),e(".btn-like").click(function(){var t=e(this);if("post_like"==t.data("action"))if(t.hasClass("liked"))showAlert(JSON.parse('{"status":3,"msg":"您已经赞过了!"}'));else{var i=t.children(".flex-column");t.addClass("liked"),e.ajax({type:"POST",url:theme.ajaxurl,data:{action:t.data("action"),post_id:t.data("id"),ticket:t.data("ticket")},success:function(t){$am=e('<i class="iconfont icon-heart" style="color: #f12345;transform: scale(1) translateY(0);position: absolute;transition: .6s;opacity: 1;"></i>'),i.prepend($am),showAlert(JSON.parse('{"status":1,"msg":"谢谢点赞!"}')),e(".like-count").html(t),$am.addClass("home-like-hide")},error:function(){showAlert(JSON.parse('{"status":4,"msg":"网络错误 --."}'))}})}else{if(t.hasClass("disabled"))return!1;var a=0,s=t.data("id");t.hasClass("liked")&&(a=1),t.addClass("disabled"),e.ajax({type:"POST",url:theme.ajaxurl,data:{action:t.data("action"),post_id:t.data("id"),post_type:t.data("post_type"),delete:a,ticket:t.data("ticket")},success:function(i){if(t.removeClass("disabled"),1==i.status)return e(".star-count-"+s).html(i.count),1==a?(t.removeClass("liked"),t.find(".star-ico").removeClass("icon-collection").addClass("icon-collection-line")):(t.addClass("liked"),t.find(".star-ico").removeClass("icon-collection-line").addClass("icon-collection")),ioPopupTips(i.status,i.msg),!1;ioPopupTips(i.status,i.msg)},error:function(){t.removeClass("disabled"),ioPopupTips(4,"网络错误 --.")}})}return!1}),e(document).on("click",".home-like",function(){if(e(this).hasClass("liked"))showAlert(JSON.parse('{"status":3,"msg":"您已经赞过了!"}'));else{var t=e(this),i=e(this).data("id");e(this).addClass("liked"),e.ajax({type:"POST",url:theme.ajaxurl,data:{action:"post_like",post_id:i},success:function(a){$am=e('<i class="iconfont icon-heart" style="color: #f12345;transform: scale(1) translateY(0);position: absolute;transition: .6s;opacity: 1;"></i>'),t.prepend($am),showAlert(JSON.parse('{"status":1,"msg":"谢谢点赞!"}')),e(".home-like-"+i).html(a),$am.addClass("home-like-hide")},error:function(){showAlert(JSON.parse('{"status":4,"msg":"网络错误 --."}'))}})}return!1}),e(document).on("click",".url-card a.is-views[data-id]",function(){e.ajax({type:"GET",url:theme.ajaxurl,data:{action:"io_postviews",postviews_id:e(this).data("id")},cache:!1})}),e(document).on("click",".switch-dark-mode",function(t){t.preventDefault(),e.ajax({url:theme.ajaxurl,type:"POST",dataType:"html",data:{mode_toggle:!0===e("body").hasClass("io-black-mode")?1:0,action:"switch_dark_mode"}}).done(function(t){e("body").toggleClass("io-black-mode "+theme.defaultclass),i(),e("#"+e(".switch-dark-mode").attr("aria-describedby")).remove()})}),e(window).scroll(function(){e(this).scrollTop()>=50?(e("#go-to-up").fadeIn(200),e(".big-header-banner").addClass("header-bg")):(e("#go-to-up").fadeOut(200),e(".big-header-banner").removeClass("header-bg"))}),e(".go-up").click(function(){return e("body,html").animate({scrollTop:0},500),!1}),e(".slider_menu").children("ul").children("li").not(".anchor").hover(function(){e(this).addClass("hover"),toTarget(e(this).parent(),!0,!0)},function(){e(this).removeClass("hover")}),e(".slider_menu").mouseleave(function(t){var i=e(this).children("ul");window.setTimeout(function(){toTarget(i,!0,!0)},50)}),e("#sidebar-switch").on("click",function(){e("#sidebar").removeClass("mini-sidebar"),e(".sidebar-nav .change-href").attr("href","javascript:;")});var y=!1,k=!1;e(".sidebar-menu-inner a").on("click",function(){e(".sidebar-nav").hasClass("mini-sidebar")||(e(this).parent("li").siblings("li.sidebar-item").children("ul").slideUp(200),"none"==e(this).next().css("display")?(e(this).next("ul").slideDown(200),e(this).parent("li").addClass("sidebar-show").siblings("li").removeClass("sidebar-show")):(e(this).next("ul").slideUp(200),e(this).parent("li").removeClass("sidebar-show")))}),e("#mini-button").on("click",function(){n(!1)}),e(document).on("mouseover",".mini-sidebar .sidebar-menu ul:first>li,.mini-sidebar .flex-bottom ul:first>li",function(){var t=2;0!=e(this).parents(".flex-bottom").length&&(t=-3),0==e(".sidebar-popup.second").length&&e("body").append("<div class='second sidebar-popup sidebar-menu-inner text-sm'><div></div></div>"),e(".sidebar-popup.second>div").html(e(this).html()),e(".sidebar-popup.second").show();var i=e(this).offset().top-e(window).scrollTop()+t,a=e(window).height()-e(".sidebar-popup.second>div").height();a-i<=0&&(i=a>=0?a-8:0),e(".sidebar-popup.second").stop().animate({top:i},50)}),e(document).on("mouseleave",".mini-sidebar .sidebar-menu ul:first, .mini-sidebar .slimScrollBar,.second.sidebar-popup",function(){e(".sidebar-popup.second").hide()}),e(document).on("mouseover",".mini-sidebar .slimScrollBar,.second.sidebar-popup",function(){e(".sidebar-popup.second").show()}),e(document).on("click",".ajax-cm-home .ajax-cm",function(t){t.preventDefault();var i=e(this),a=i.data("id"),s=e(i.attr("href")).children(".site-list");0==s.children(".url-card").length&&(i.addClass("disabled"),e.ajax({url:theme.ajaxurl,type:"POST",dataType:"html",data:{action:i.data("action"),term_id:a},cache:!0}).done(function(t){if(t.trim()){var a=e(t);s.html(a),isPC()&&a.find('[data-toggle="tooltip"]').tooltip({trigger:"hover"})}i.removeClass("disabled")}).fail(function(){i.removeClass("disabled")}))}),e(document).on("click",".ajax-list a",function(t){t.preventDefault(),r(e(this),e(this).parents(".ajax-list"),"."+e(this).data("target"))}),e(document).on("click",".ajax-list-home a",function(t){t.preventDefault(),r(e(this),e(this).parents(".ajax-list-home"),".ajax-"+e(this).parents(".ajax-list-home").data("id"))}),e(".add-link-form").on("submit",function(){var t=e(".site-add-name").val(),i=e(".site-add-url").val();l({id:+new Date,name:t,url:i}),this.reset(),this.querySelector("input").focus(),e(this).find(".btn-close-fm").click()});var x=!1;e(".customize-menu .btn-edit").click(function(){x?(e(".url-card .remove-site,#add-site").hide(),e(".url-card .remove-site,.add-custom-site").hide(),e(".url-card .remove-cm-site").hide(),e(".customize-sites").removeClass("edit"),f(),e(".customize-menu .btn-edit").html("编辑")):(e(".url-card .remove-site,#add-site").show(),e(".url-card .remove-site,.add-custom-site").show(),e(".url-card .remove-cm-site").show(),e(".customize-sites").addClass("edit"),f(),e(".customize-menu .btn-edit").html("确定")),x=!x}),e(document).on("click",".add-new-custom-site",function(t){var i=e(this);e.ajax({url:theme.ajaxurl,type:"POST",dataType:"json",data:i.data()}).done(function(e){showAlert(e)}).fail(function(){showAlert(JSON.parse('{"status":4,"msg":"网络错误 --."}'))})}),e(".add-custom-site-form").on("submit",function(){var t=e(this),i=this,a=t.find("input[name=url]").val(),s=t.find("input[name=url_name]").val(),o=t.find("input:radio:checked").val();if(""==t.find("input[name=term_name]").val()&&void 0==o)return showAlert(JSON.parse('{"status":3,"msg":"为什么不选分类"}')),!1;e.ajax({url:theme.ajaxurl,type:"POST",dataType:"json",data:t.serialize()+"&action=add_custom_url"}).done(function(n){if(1!=n.status)return void showAlert(n);var r,l=a.match(/^(?:https?:\/\/)?((?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6})/);!l||l.length<2?r=a:(r=l[0],"1"==theme.urlformat&&(r=l[1]));var d=n.id,c=e('<div id="url-'+d+'" class="url-card sortable col-6 '+theme.classColumns+' col-xxl-10a"><div class="url-body mini"><a href="'+a+'" target="_blank" class="card new-site mb-3 site-'+d+'" data-id="'+d+'" data-url="'+a+'" data-toggle="tooltip" data-placement="bottom" title="'+s+'" rel="external nofollow"><div class="card-body" style="padding:0.4rem 0.5rem;"><div class="url-content d-flex align-items-center"><div class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center"><img src="'+theme.icourl+r+theme.icopng+'"></div><div class="url-info flex-fill"><div class="text-sm overflowClip_1"><strong>'+s+'</strong></div></div></div></div></a></div><a href="javascript:;" class="text-center remove-cm-site" data-action="delete_custom_url" data-id="'+d+'"><i class="iconfont icon-close-circle"></i></a></div>');e(".add-custom-site[data-term_id="+o+"]").before(c),i.reset(),i.querySelector("input").focus(),t.find(".btn-close-fm").click(),showAlert(JSON.parse('{"status":1,"msg":"添加成功。"}'))}).fail(function(){showAlert(JSON.parse('{"status":4,"msg":"网络错误 --."}'))})}),e(document).on("click",".url-card .remove-cm-site",function(t){var i=e(this);i.addClass("disabled"),e.ajax({url:theme.ajaxurl,type:"POST",dataType:"json",data:i.data()}).done(function(e){1==e.status&&i.parent().remove(),i.removeClass("disabled"),showAlert(e)}).fail(function(){i.removeClass("disabled"),showAlert(JSON.parse('{"status":4,"msg":"网络错误 --."}'))})}),e("input[name=term_name]").focus(function(){e("input[name=term_id]").prop("checked",!1)}),e(".form_custom_term_id").on("click",function(t){e("input[name=term_name]").val("")}),e(document).on("click",".url-card a.card",function(t){var i={id:e(this).data("id"),name:e(this).find("strong").html(),url:e(this).data("url")};if(""!==i.url){for(var a=c("livelists"),s=!0,o=0;o<a.length;o++)a[o].name===i.name&&(s=!1);if(s){var n=theme.customizemax;a.length>n-1&&(e(".my-click-list .site-"+a[n-1].id).parent().remove(),a.splice(n-1,1)),d(i,!0,!0),a.unshift(i),m(a,"livelists")}}}),e(document).on("click",".s-type-list label",function(t){e(".s-type-list.big label").removeClass("active"),e(this).addClass("active"),window.localStorage.setItem("searchlistmenu",e(this).data("id"));var i=e(this).parents(".s-search");i.find(".search-group").removeClass("s-current"),i.find("#"+e(this).attr("for")).parents(".search-group").addClass("s-current"),toTarget(e(this).parents(".s-type-list"),!1,!1)}),e(".hide-type-list .search-group input").on("click",function(){var t=e(this).parents(".s-search");window.localStorage.setItem("searchlist",e(this).attr("id").replace("m_","")),t.children(".super-search-fm").attr("action",e(this).val()),t.find(".search-key").attr("placeholder",e(this).data("placeholder")),"type-zhannei"==e(this).attr("id")||"m_type-zhannei"==e(this).attr("id")?t.find(".search-key").attr("zhannei","true"):t.find(".search-key").attr("zhannei",""),t.find(".search-key").select(),t.find(".search-key").focus()}),e(document).on("submit",".super-search-fm",function(){var t=encodeURIComponent(e(this).find(".search-key").val());return""!=t&&(window.open(e(this).attr("action")+t),!1)});var C,j=-1,$=0,_=!1;e(document).on("blur",".smart-tips.search-key",function(){C="",e(".search-smart-tips").delay(150).slideUp(200)}),e(document).on("focus",".smart-tips.search-key",function(){if(_=""!=e(this).attr("zhannei"),C=e(this).parents("#search"),e(this).val()&&!_)switch(theme.hotWords){case"baidu":g(e(this).val(),C);break;case"google":b(e(this).val(),C)}}),e(document).on("keyup",".smart-tips.search-key",function(t){if(_=""!=e(this).attr("zhannei"),C=e(this).parents("#search"),e(this).val()){if(38==t.keyCode||40==t.keyCode||_)return;switch(theme.hotWords){case"baidu":g(e(this).val(),C);break;case"google":b(e(this).val(),C)}j=-1}else e(".search-smart-tips").slideUp(200)}),e(document).on("keydown",".smart-tips.search-key",function(t){if(C=e(this).parents("#search"),40===t.keyCode){j===$-1?j=0:j++,C.find(".search-smart-tips ul li").eq(j).addClass("current").siblings().removeClass("current");var i=C.find(".search-smart-tips ul li").eq(j).html();C.find(".smart-tips.search-key").val(i)}if(38===t.keyCode){t.preventDefault&&t.preventDefault(),t.returnValue&&(t.returnValue=!1),0===j||-1===j?j=$-1:j--,C.find(".search-smart-tips ul li").eq(j).addClass("current").siblings().removeClass("current");var i=C.find(".search-smart-tips ul li").eq(j).html();C.find(".smart-tips.search-key").val(i)}}),e(".nav-login-user.dropdown").hover(function(){e(this).hasClass("show")||e(this).children("a").click()},function(){}),e("#add-new-sites-modal").on("show.bs.modal",function(t){var i=e(t.relatedTarget),a=e(this);a.find('[name="term_id"]').val(i.data("terms_id")),a.find('[name="url"]').val(i.data("new_url")),a.find('[name="url_name"]').val(""),a.find('[name="url_summary"]').removeClass("is-invalid").val(""),i.data("new_url","");var s=a.find('[name="url"]').val();""!=s&&(T=s)});var T="";e("#modal-new-url").on("blur",function(){var t=e(this);""!=t.val()&&(isURL(t.val())?T!=t.val()&&(T=t.val()):showAlert(JSON.parse('{"status":4,"msg":"URL 无效！"}')))}),e("#modal-new-url-summary").on("blur",function(){var t=e(this);""!=t.val()&&t.removeClass("is-invalid")})}(jQuery);var ioadindex=0;!function(){if(""===document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/,"$1"))(new Date).getHours()>22||(new Date).getHours()<6?(document.body.classList.remove("io-black-mode"),document.body.classList.add("io-grey-mode"),document.cookie="night=1;path=/",console.log("夜间模式开启")):(document.body.classList.remove("night"),document.cookie="night=0;path=/",console.log("夜间模式关闭"));else{var e=document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/,"$1")||"0";"0"==e?document.body.classList.remove("night"):"1"==e&&document.body.classList.add("night")}}();