/*! Thrive Themes - 2016-07-07
* https://thrivethemes.com/
* Copyright (c) 2016 Thrive Themes */
if(void 0===ThriveApp)var ThriveApp={};var _isAdmin=0,_is_blankPage=0;ThriveApp.bind_comments=!1,ThriveApp.is_theme_layout=!1,ThriveApp.winWidth=jQuery(window).width(),ThriveApp.viewportHeight=jQuery(window).height(),jQuery(window).load(function(){ThriveApp.resize_blank_page()}),jQuery(function(){if(_isAdmin=jQuery("#wpadminbar").length,_is_blankPage=jQuery(".bp-t").length,_is_blankPage||(ThriveApp.menuPositionTop=jQuery("nav.right").length?jQuery("nav.right").position().top:0),ThriveApp.is_theme_layout=!!(jQuery(".bSe .awr").length+jQuery(".bp-t .wrp").length),ThriveApp.menuResponsive(),ThriveApp.shortcodeTabsResize(),ThriveApp.setPageSectionHeight(),ThriveApp.bind_comments_handlers(),ThriveApp.check_comments_hash(),ThriveApp.videoShorcode(),ThriveApp.truncatePostGallery(),ThriveApp.image_post_resize(),ThriveApp.post_title_background(),ThriveApp.blog_gallery(),ThriveApp.post_format_gallery(),ThriveApp.grid_layout(".scbg",".scc"),jQuery(".cdt").thrive_timer(),jQuery(".showTags").each(function(){jQuery(this).mouseover(function(){jQuery(".tagsList",this).show()}),jQuery(this).mouseout(function(){jQuery(".tagsList",this).hide()}),jQuery(this).click(function(a){jQuery(".tagsList",this).toggle(),a.preventDefault()})}),jQuery(".sm_icons, .scfm .ss").each(function(){jQuery(this).mouseover(function(){jQuery(".bubb",this).css("left",function(){return(jQuery(this).parent().width()-jQuery(this).width())/2}).show(0)}),jQuery(this).mouseout(function(){jQuery(".bubb",this).hide()})}),jQuery(".faqI h4").click(function(){return jQuery(this).toggleClass("oFaq"),jQuery(this).parents(".faqI").find(".faqC").slideToggle("fast"),!1}),jQuery(".accss .acc-h").click(function(){var a=jQuery(this),b=jQuery(this).parents(".accs"),c=b.find(".accss");return a.parent().hasClass("opac")?!1:(a.parents(".accs").find(".opac").find(".accsi").slideUp(function(){c.removeClass("opac")}),void a.next(".accsi").slideDown(function(){a.parents(".accss").addClass("opac")}))}),jQuery(".tmw").hover(function(){jQuery(this).find(".tmm").slideDown()},function(){jQuery(this).find(".tmm").slideUp()}),jQuery(".bSe").hasClass("mry")){var a=document.querySelector(".mry");new Masonry(a,{itemSelector:".mry-i",gutter:".mry-g"})}jQuery(window).resize(function(){var a=window.innerWidth,b=jQuery(window).height();ThriveApp.winWidth!==a&&ThriveApp.delay(function(){ThriveApp.menuResponsive()},1),ThriveApp.winWidth=a,ThriveApp.viewportHeight=b,ThriveApp.menuPositionTop=jQuery("nav.right").length?jQuery("nav.right").position().top:0,ThriveApp.shortcodeTabsResize(),ThriveApp.videoShorcode(),ThriveApp.setVideoPosition(),ThriveApp.setPageSectionHeight(),ThriveApp.image_post_resize(),ThriveApp.post_title_background(),ThriveApp.grid_layout(".scbg",".scc")}),jQuery(".thrive-borderless .wp-video-shortcode").length>0&&(jQuery(".thrive-borderless .wp-video-shortcode").css("width","100%"),jQuery(".thrive-borderless div").css("width","100%")),ThriveApp.comments_page=1,1==ThriveApp.lazy_load_comments&&(jQuery(window).scroll(ThriveApp.bind_scroll),ThriveApp.load_comments()),jQuery(".far.f1").on("click",function(a){jQuery(this).addClass("fof"),a.preventDefault()}),jQuery(".hfp").children().each(function(){var a=jQuery(this),b=jQuery.trim(a.text()),c=a.html().replace(/&nbsp;/g,"");if(!a.is(":hidden")&&!a.is(":empty")){if("P"!=a.prop("tagName"))return!1;if(""!=b&&""!=c)return a.addClass("ifp"),!1;if(""!=b||""!=c)return!1}}),jQuery(window).trigger("scroll"),jQuery("body").on("added_to_cart",function(a,b,c,d){var e=jQuery(b[".mini-cart-contents"]).find("a.cart-contents-btn");jQuery(".mobile-mini-cart").html("").append(e)}),window.FB&&window.FB.XFBML&&jQuery(".fb-comments").each(function(){window.FB.XFBML.parse(this.parentNode)})}),ThriveApp.grid_layout=function(a,b){jQuery(a).length>0&&jQuery(a).each(function(){var a=jQuery(b,this),c=a.length,d=function(b){for(var d="",e=0;c>e;e+=b){3==b&&(d=":eq("+e+"),:eq("+(e+1)+"),:eq("+(e+2)+")"),2==b&&(d=":eq("+e+"),:eq("+(e+1)+")");var f=a.filter(d),g=jQuery(f).map(function(){return f.css("height",""),jQuery(this).height()}),h=Math.max.apply(null,g);f.height(h)}};ThriveApp.winWidth>=940?d(jQuery(".bSe").hasClass("fullWidth")?3:2):940>ThriveApp.winWidth&&ThriveApp.winWidth>=741&&d(2)})},ThriveApp.number_counter=function(){jQuery(".nbc.nsds").each(function(){function a(c,d){f=Math.ceil(d/100),d>=c?(b.text(c),c+=f,c+f>d&&(b.text(d),clearTimeout(e)),e=setTimeout(function(){a(c,d)},50)):clearTimeout(e)}var b=jQuery(".nbcn",this),c=b.attr("data-counter"),d=0,e=null,f=1;"false"==jQuery(this).attr("data-started")&&(a(d,c),jQuery(this).attr("data-started","true"))})},ThriveApp.image_post_resize=function(){jQuery(".tt-dmy").css({"max-height":ThriveApp.viewportHeight,"max-width":ThriveApp.winWidth})},ThriveApp.post_title_background=function(){var a=jQuery(".hru.fih");a.css("max-height",ThriveApp.viewportHeight)},ThriveApp.setPageSectionHeight=function(){var a=jQuery(".wrp .bpd,.wrp .fullWidth"),b=a.length;b?ThriveApp.winWidth+"px":"100%";jQuery(".pddbg, .scvps").css("max-width",ThriveApp.winWidth+"px"),jQuery(".pdfbg").each(function(){var a=jQuery(this).css("box-sizing","border-box"),c=a.attr("data-height"),d=a.attr("data-width");if(void 0===c||void 0===d)a.css("min-height","100%");else{var e=b?ThriveApp.winWidth:a.parent().width(),f=e*c/d;d>=e?a.css("min-height",f+"px"):a.css({"min-height":c+"px"})}})},ThriveApp.showMenu=function(){jQuery("header nav ul li").each(function(){jQuery(this).mouseenter(function(){if(jQuery(this).hasClass("has-extended")&&ThriveApp.winWidth>=722){var a=jQuery(this).children(".sub-menu"),b=jQuery(this).offset().left,c=a.width(),d=jQuery(".wrp.cnt"),e=d.width(),f=d.offset().left;(f>b||b+c>f+e)&&(a.addClass("position_menu"),f>b?a.hasClass("position_right")||a.addClass("position_left"):b+c>f+e&&(a.hasClass("position_left")||a.addClass("position_right"))),jQuery(this).children(".sub-menu").stop().fadeIn("fast")}else jQuery(this).children(".sub-menu").show()}),jQuery(this).mouseleave(function(){var a=jQuery(this);a.children(".sub-menu").stop().fadeOut("fast")})})},ThriveApp.shortcodeTabsResize=function(){jQuery(".scT ul.scT-tab li").on("click",function(a){var b=jQuery(this),c=b.parents(".shortcode_tabs").first(),d=c.find(".scTC").eq(b.index());c.find(".tS").removeClass("tS"),b.addClass("tS"),c.find(".scTC").hide(),d.show(),a.preventDefault()})},ThriveApp.menuResponsive=function(){ThriveApp.winWidth<775?(jQuery("header nav ul li").each(function(){jQuery(this).unbind("mouseenter"),jQuery(this).unbind("mouseleave")}),jQuery("header #nav_right").hide(0),jQuery("header .sub-menu").show(0),jQuery(".rmn").unbind("click").click(function(){var a=jQuery("#floating_menu").height(),b=jQuery("#wpadminbar").length?46:0,c=a+b,d=ThriveApp.viewportHeight-c;jQuery("header #nav_right").fadeToggle("fast",function(){var a=jQuery("#floating_menu nav").height();ThriveApp.viewportHeight<=a+c&&(jQuery("#nav_right").css({"max-height":d+"px"}),jQuery("html").addClass("html-hidden")),0>=a&&jQuery("html").removeClass("html-hidden")})})):ThriveApp.winWidth>=775&&(jQuery("header .sub-menu").hide(0),jQuery("header #nav_right").show(0),ThriveApp.showMenu())},ThriveApp.delay=function(){var a=0;return function(b,c){clearTimeout(a),a=setTimeout(b,c)}}(),ThriveApp.check_comments_hash=function(){if(location.hash){var a=location.hash.indexOf("#comment-")+9,b=location.hash.substring(a,location.hash.length),c=jQuery("#comment-container-"+b);0!==c.length&&jQuery("html,body").animate({scrollTop:c.offset().top-30},"slow")}},ThriveApp.videoShorcode=function(){jQuery(".scvps .pvb").click(function(){var a=jQuery(this).parents(".scvps").height();if(jQuery(this).parents(".scvps").css("height",a+"px"),jQuery(this).parents(".vdc").find("h1").hide(),jQuery(this).parents(".vdc").find("h2").hide(),jQuery(this).parents(".vdc").find("h3").hide(),jQuery(this).parents(".vdc").find("p").hide(),jQuery(this).hide(),jQuery(this).parents(".scvps").find(".video-container").show(),jQuery(this).parents(".scvps").find("iframe").length>0){var b=jQuery(this).parents(".scvps").find("iframe"),c=jQuery(this).parents(".scvps").outerWidth(),d=b.attr("width");d>c&&(b.attr("width",c),b.attr("height",9*c/16))}var e=jQuery(this).parents(".scvps").find(".vwr"),f=jQuery(this).parents(".scvps").outerHeight()/2-e.height()/2;if(e.css({top:0>f?0:f,left:jQuery(this).parents(".scvps").outerWidth()/2-e.width()/2}),jQuery(this).parents(".scvps").find("video").length>0&&jQuery(this).parents(".scvps").find("video")[0].player.play(),jQuery(this).parents(".scvps").find("iframe").length>0){var b=jQuery(this).parents(".scvps").find("iframe"),g=(b.attr("id"),b.attr("src"));g.indexOf("vimeo")>=0?b.attr("src",ThriveApp.updateQueryStringParameter(g,"autoplay","1")):g.indexOf("youtube")>=0&&b.attr("src",ThriveApp.updateQueryStringParameter(g,"autoplay","1")),jQuery(this).parents(".scvps").find("iframe").trigger("click")}})},ThriveApp.bind_scroll=function(){if(jQuery("#comment-bottom").length>0){var a=jQuery("#comment-bottom").offset().top;a>0&&a<jQuery(window).height()+jQuery(document).scrollTop()&&ThriveApp.load_comments()}},ThriveApp.load_comments=function(){if(1!=ThriveApp.comments_loaded){ThriveApp.comments_loaded=1,"undefined"==typeof _thriveCurrentPost&&(_thriveCurrentPost=0),jQuery("#thrive_container_preload_comments").show();var a={action:"thrive_lazy_load_comments",post_id:_thriveCurrentPost,comment_page:ThriveApp.comments_page};window.TVE_Dash&&!TVE_Dash.ajax_sent?jQuery(document).on("tve-dash.load",function(){TVE_Dash.add_load_item("theme_comments",a,ThriveApp.load_comments_handle)}):jQuery.post(ThriveApp.ajax_url,a,ThriveApp.load_comments_handle)}},ThriveApp.load_comments_handle=function(a){ThriveApp.comments_page++,""==a?ThriveApp.comments_loaded=1:ThriveApp.comments_loaded=0,jQuery("#thrive_container_preload_comments").hide(),jQuery("#thrive_container_list_comments").append(a),jQuery("#thrive_container_form_add_comment").show(),ThriveApp.bind_comments===!1&&ThriveApp.bind_comments_handlers(),ThriveApp.check_comments_hash()},ThriveApp.bind_comments_handlers=function(){ThriveApp.bind_comments=!0,jQuery(document).on("click",".txt_thrive_link_to_comments",function(){var a=jQuery("#commentform");return jQuery("html,body").animate({scrollTop:a.offset().top},"slow"),!1}),jQuery(document).on("click",".reply",function(){var a=jQuery(this).attr("cid");return jQuery("#respond-container-"+a).slideDown(),!1}),jQuery(document).on("click",".cancel_reply",function(){var a=jQuery(this).attr("cid");return jQuery("#respond-container-"+a).slideUp(),!1})},ThriveApp.youtube_play=function(a,b,c){"use strict";jQuery("#videoContainer").html('<iframe width="'+b+'" height="'+c+'" src="https://www.youtube.com/embed/'+a+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>')},ThriveApp._get_element_height=function(a){var b,c,d=document.getElementById(a);return document.all?(b=d.currentStyle.height,c=parseInt(d.currentStyle.marginTop,10)+parseInt(d.currentStyle.marginBottom,10)+"px"):(b=document.defaultView.getComputedStyle(d,"").getPropertyValue("height"),c=parseInt(document.defaultView.getComputedStyle(d,"").getPropertyValue("margin-top"))+parseInt(document.defaultView.getComputedStyle(d,"").getPropertyValue("margin-bottom"))+"px"),b+c},ThriveApp.updateQueryStringParameter=function(a,b,c){var d=new RegExp("([?|&])"+b+"=.*?(&|$)","i");return separator=-1!==a.indexOf("?")?"&":"?",a.match(d)?a.replace(d,"$1"+b+"="+c+"$2"):a+separator+b+"="+c},ThriveApp.social_scripts={twitter:{src:"https://platform.twitter.com/widgets.js",loaded:0},google:{src:"https://apis.google.com/js/plusone.js?onload=onLoadCallback",loaded:0},facebook:{src:"://platform.twitter.com/widgets.js",loaded:0},linkedin:{src:"//platform.linkedin.com/in.js",loaded:0},pinterest:{src:"//assets.pinterest.com/js/pinit.js",loaded:0},youtube:{src:"https://apis.google.com/js/platform.js",loaded:0}},ThriveApp.load_script=function(a){if(0===ThriveApp.social_scripts[a].loaded)if("//assets.pinterest.com/js/pinit.js"==ThriveApp.social_scripts[a].src){var b=document.createElement("script");b.type="text/javascript",b.async=!0,b.src="https://assets.pinterest.com/js/pinit.js",b["data-pin-build"]="parsePins";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c),ThriveApp.social_scripts[a].loaded=1}else jQuery.getScript(ThriveApp.social_scripts[a].src,function(){ThriveApp.social_scripts[a].loaded=1})},ThriveApp.setVideoPosition=function(){jQuery(".scvps .pvb").each(function(){var a=jQuery(this).parents(".scvps").find(".vwr");a.css({top:jQuery(this).parents(".scvps").outerHeight()/2-a.height()/2,left:jQuery(this).parents(".scvps").outerWidth()/2-a.width()/2})})},ThriveApp.truncatePostGallery=function(){var a=jQuery(".gdl .text-truncate");0!==a.length&&(ThriveApp.dot_loaded||(jQuery.getScript(ThriveApp.theme_uri+"/js/jquery.dotdotdot.min.js",function(){a.dotdotdot({ellipsis:" [...]"})}),ThriveApp.dot_loaded=!0))},ThriveApp.open_share_popup=function(a,b,c){var d,e;return d=window.screen.width/2-(b/2+10),e=window.screen.height/2-(c/2+50),window.open(a,"Window","status=no,height="+c+",width="+b+",resizable=yes,left="+d+",top="+e+",screenX="+d+",screenY="+e+",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no"),!1};var _lastScrollTop=0,_theMenu=jQuery("#floating_menu"),_nextElement=_theMenu.next(),_floatingOption=_theMenu.attr("data-float"),_hasFloatingMenu="float-fixed"==_floatingOption||"float-scroll"==_floatingOption,_defaultPadding=_nextElement.css("padding-top"),_menuHeight=0,_textLogoHeight=_theMenu.find("#text_logo").height(),_hero=jQuery(".hru"),_hasHero=_hero.length,_heroHeight=_hasHero?_hero.height():60,_hasCenterLogo=_theMenu.find(".center_logo").length,_custom_header=_theMenu.children("header"),_custom_header_class=_custom_header.attr("class"),_is_custom_header="hic"==_custom_header_class||"hif"==_custom_header_class,_center_header_height;""===_defaultPadding&&(_defaultPadding="0"),ThriveApp.menu_float={current_scroll_top:0,anim_done:!1,scroll_dir:"down",hasScroll:function(){return _is_custom_header?this.current_scroll_top>_center_header_height:this.current_scroll_top>_heroHeight},onScroll:function(a){return _is_custom_header&&(_center_header_height="hic"==_custom_header_class?jQuery("header .tt-dmy").height():jQuery("header").height()),this.current_scroll_top<a?this.scroll_dir="down":this.scroll_dir="up",this.current_scroll_top=a,this.hasScroll()?this.handle():(_theMenu.removeClass("mff a60 mfs"),_nextElement.css("padding-top",_defaultPadding),void ThriveApp.menu_float.showLogo())},handle:function(){_nextElement.css("padding-top",_theMenu.outerHeight()+"px"),_theMenu.addClass("mff"),"float-scroll"==_floatingOption&&("down"==this.scroll_dir?_theMenu.removeClass("mfu mfd").addClass("mfd"):_theMenu.removeClass("mfu mfd").addClass("mfu")),this.current_scroll_top>_heroHeight?(ThriveApp.menu_float.hideLogo(),_theMenu.addClass("a60")):_theMenu.removeClass("a60")},hideLogo:function(){_hasCenterLogo&&(_theMenu.find("#logo img").hide(),this.anim_done||(_theMenu.find("#text_logo").stop().animate({opacity:0,height:0},50),this.anim_done=!0))},showLogo:function(){_hasCenterLogo&&(_theMenu.find("#logo img").show(),_theMenu.find("#text_logo").animate({height:_textLogoHeight,opacity:1},50),this.anim_done=!1)}},jQuery(window).scroll(function(){var a=jQuery(document).scrollTop(),b=0,c=0,d=jQuery(".entry-title"),e=d.length,f=jQuery(".ssf");if(ThriveApp.is_theme_layout&&(b=_is_blankPage?jQuery(".bp-t .wrp").offset().top:jQuery(".bSe .awr").first().offset().top,c=_is_blankPage?jQuery(".bp-t .wrp").height():jQuery(".bSe .awr").first().height()),ThriveApp.show_shortcodes(a),_hasFloatingMenu&&ThriveApp.menu_float.onScroll(a),f.hasClass("apsf"))return!1;if(1==e?(postTitleTop=d.offset().top,condition=a>postTitleTop):condition=a>b,condition)if(f.show(0),a>b+c-f.height()){f.removeClass("fpss").addClass("apss");var g=jQuery(".ssf.apss");jQuery(".bSe").hasClass("right")?g.css({right:"-82px",left:"auto"}):g.css({left:"-82px",right:"auto"})}else{f.removeClass("apss").addClass("fpss");var g=jQuery(".ssf.fpss");if("float-fixed"!==_theMenu.attr("data-float")&&"float-scroll"!==_theMenu.attr("data-float")||(_is_custom_header?g.css({top:"100px",bottom:"auto"}):g.css({top:_menuHeight+40,bottom:"auto"})),jQuery(".bSe").hasClass("right")){var h=parseInt(jQuery(".bSe").offset().left+jQuery(".bSe").outerWidth());g.css("left",h+10+"px")}else h=jQuery(".bSe").offset().left,g.css("left",h-g.width()-"10")}else f.hide(0)}),ThriveApp.show_shortcodes=function(a){jQuery(".nsd").each(function(){var b=jQuery(this);a+ThriveApp.viewportHeight>=b.offset().top+b.outerHeight()&&(b.addClass("nsds"),ThriveApp.number_counter())})},ThriveApp.display_no_shares=function(a){function b(){e.val(d),d>999&&f.addClass("tt-share-long"),f.html(ThriveApp._get_share_count_display_text(d,2)),jQuery("#tt-share-count").show()}function c(a){a&&a.total&&(d=parseInt(a.total),b())}var d=0,e=jQuery("#tt-hidden-share-no"),f=jQuery("#share_no_element"),g=[];if(a.linkedin&&g.push("in_share"),a.facebook&&g.push("fb_share"),a.google&&g.push("g_share"),a.pinterest&&g.push("pin_share"),g.length){var h={action:"thrive_get_share_counts",url:a.url,networks:g};window.TVE_Dash&&!TVE_Dash.ajax_sent?jQuery(document).on("tve-dash.load",function(){TVE_Dash.add_load_item("theme_shares",h,c)}):jQuery.post(ThriveApp.ajax_url,h,c)}};var _overlayElement=jQuery(".galleryOverlay");ThriveApp.blog_gallery=function(a){return function(){function b(b,c){a('<div class="galleryWrapper"><img data-pos="'+b.attr("data-position")+'" data-cap="'+b.attr("data-caption")+'" data-index="'+b.attr("data-index")+'" src="'+b.attr("data-src")+'" alt=""/></div>').appendTo(c)}function c(a,b,c){c?a.removeClass("g-n-a"):a.addClass("g-n-a");var f=a.find("img[data-index="+b+"]"),g=f.attr("data-cap"),h=f.attr("data-pos");b=f.parent().index(),a.css({left:"-"+100*b+"%"}),e=b,ThriveApp.winWidth>650&&d(f),jQuery(".img_count").text(h),jQuery(".cap_txt").text(g),""!=g?jQuery(".mob_text").text(g):jQuery(".mob_text").text(" - Swipe left/right to see more")}function d(a){var b=a.parents(".galleryOverlay").first().find(".nav_close");if(!a.width())return b.css({top:"20px",right:"20px"});var c=a.position().left-a.parent().position().left+a.width(),d=a.position().top;a.width()>=ThriveApp.winWidth&&(c-=16,d+=16),_isAdmin&&a.position().top<=32&&(d+=32),b.css({top:d-16+"px",left:c-16+"px"})}var e=0,f=0;a(".gallery").each(function(){var d=a(this),g=a(this).find(".galleryOverlay"),h=a(this).find(".galleryStage"),i=d.find(".gallery-item a").length,j=!1,k=!1,l=function(){k||(i-1>e?c(h,e+1,!0):(h.addClass("g-n-a").css("left","100%"),k=!0,setTimeout(function(){c(h,0,!0),k=!1},20)))},m=function(){k||(e>0?c(h,e-1,!0):(h.addClass("g-n-a").css("left",-100*i+"%"),k=!0,setTimeout(function(){c(h,i-1,!0),k=!1},20)))};d.find(".gallery-item a").each(function(d){a(this).click(function(){return jQuery(this).parents(".gallery ").hasClass("no-gallery")?!1:(j=!0,g.show(0).addClass("g-v"),c(h,d,!1),!1)}),b(a(this),g.find(".galleryStage"))}),d.find("a.nav_prev").click(function(){return m(),!1}),d.find("a.nav_next").click(function(){return l(),!1}),d.find(".nav_close").click(function(){return j=!1,g.removeClass("g-v").hide(),!1}),d.find(".galleryWrapper").touchwipe({wipeLeft:function(){l()},wipeRight:function(){m()},wipeUp:function(){j=!1,g.removeClass("g-v").hide()},wipeDown:function(){return!1},min_move_x:20,min_move_y:20,preventDefaultEvents:!0}),ThriveApp.winWidth<=650?h.click(function(b){var c=a(b.target);return c.is("img")?!1:(j=!1,void g.removeClass("g-v").hide())}):(h.click(function(b){var c=a(b.target);return c.is("img")?!1:(j=!1,void g.removeClass("g-v").hide())}),d.mousemove(function(b){clearTimeout(f),a(".gl_ctrl, .gl_ctrl_mob").fadeIn(200),ThriveApp.winWidth<=650||a(b.target).is(".gl_ctrl,.gl_ctrl_mob")||(f=setTimeout(function(){jQuery(".gl_ctrl, .gl_ctrl_mob").fadeOut(200)},1e3))})),a("html").unbind("keydown").keydown(function(a){return j?37==a.keyCode?(m(),!1):39==a.keyCode?(l(),!1):27==a.keyCode?(g.removeClass("g-v").hide(),!1):void 0:!0})})}}(jQuery),ThriveApp.post_format_gallery=function(){jQuery("#thrive-gallery-header").attr("data-count",jQuery(".thrive-gallery-item").length),jQuery(".thrive-gallery-item").click(function(){return jQuery("#thrive-gallery-header").attr("data-index",jQuery(this).attr("data-index")),jQuery("#thrive-gallery-header").css("background-image","url("+jQuery(this).attr("data-image")+")"),!1}),jQuery(".gprev").click(function(){var a=parseInt(jQuery("#thrive-gallery-header").attr("data-index")),b=a-1;return 0>b&&(b=jQuery("#thrive-gallery-header").attr("data-count")-1),jQuery("#li-thrive-gallery-item-"+b).length>0&&(jQuery("#thrive-gallery-header").attr("data-index",jQuery("#li-thrive-gallery-item-"+b).find("a").attr("data-index")),jQuery("#thrive-gallery-header").css("background-image","url("+jQuery("#li-thrive-gallery-item-"+b).find("a").attr("data-image")+")"),jQuery("#thive-gallery-dummy").attr("src",jQuery("#li-thrive-gallery-item-"+b).find("a").attr("data-image"))),!1}),jQuery(".gnext").click(function(){var a=parseInt(jQuery("#thrive-gallery-header").attr("data-index")),b=a+1;return b>=jQuery("#thrive-gallery-header").attr("data-count")&&(b=0),jQuery("#li-thrive-gallery-item-"+b).length>0&&(jQuery("#thrive-gallery-header").attr("data-index",jQuery("#li-thrive-gallery-item-"+b).find("a").attr("data-index")),jQuery("#thrive-gallery-header").css("background-image","url("+jQuery("#li-thrive-gallery-item-"+b).find("a").attr("data-image")+")"),jQuery("#thive-gallery-dummy").attr("src",jQuery("#li-thrive-gallery-item-"+b).find("a").attr("data-image"))),!1})},jQuery.fn.thrive_timer=function(){return this.each(function(){var a,b=jQuery(this),c=b.attr("data-server-now"),d=c?new Date(c):new Date,e=new Date(b.attr("data-date")),f=0,g=0,h=0,i=0,j=2,k=b.attr("data-fade"),l=b.attr("data-message"),m=function(){var a=function(a,b){return jQuery('<span class="part-'+a+'">'+b+"</span>")};b.find(".second .cdfc").append(a(2,Math.floor(i/10))).append(a(1,i%10)),b.find(".minute .cdfc").append(a(2,Math.floor(h/10))).append(a(1,h%10)),b.find(".hour .cdfc").append(a(2,Math.floor(g/10))).append(a(1,g%10));for(var c=b.find(".day .cdfc"),d=f,e=1;j>=e;e++)c.append(a(e,d%10)),d=Math.floor(d/10);o(c.css("min-width",35*j+"px"),f,j)},n=function(a,b){if(a.html()==b)return a;a.removeClass("next");var c=a.clone().removeClass("go-down").addClass("next").html(b);return a.before(c).next(".go-down").remove(),a.addClass("go-down"),setTimeout(function(){c.addClass("go-down")},20),a},o=function(a,b,c){"undefined"==typeof c&&(c=!1);var d=0;if(99>=b)n(a.find(".part-1").first(),b%10),n(a.find(".part-2").first(),Math.floor(b/10)),d=2;else for(;b;)d++,n(a.find(".part-"+d).first(),b%10),b=Math.floor(b/10);if(c!==!1&&c>d)for(var e=d+1;c>=e;e++)n(a.find(".part-"+e).first(),0)},p=function(){i--,0>i&&(i=59,h--),0>h&&(h=59,g--),0>g&&(g=23,f--),o(b.find(".second .cdfc"),i),o(b.find(".minute .cdfc"),h),o(b.find(".hour .cdfc"),g),o(b.find(".day .cdfc"),f,j),0==f&&0==g&&0==h&&0==i&&(clearInterval(a),q())},q=function(){"1"==k?b.find(".cdti").addClass("fdtc"):b.find(".cdti").addClass("fv"),"1"==l&&(b.find(".cdti").addClass("fdtc"),setTimeout(function(){b.find(".cdtm").fadeIn(2e3)},500))};d>e?q():(i=Math.floor((e.getTime()-d.getTime())/1e3),h=Math.floor(i/60),i%=60,g=Math.floor(h/60),h%=60,f=Math.floor(g/24),g%=24,f>99&&(j=f.toString().length),m(),b.find(".cdti").addClass("init_done"),a=setInterval(p,1e3))})},ThriveApp._get_share_count_display_text=function(a,b){b=Math.pow(10,b);for(var c=["k","m"],d=c.length-1;d>=0;d--){var e=Math.pow(10,3*(d+1));if(a>=e){a=Math.round(a*b/e)/b,1e3==a&&d<c.length-1&&(a=1,d++),a+=c[d];break}}return a},ThriveApp.resize_blank_page=function(){if(_is_blankPage=jQuery("html.bp-th").length){var a=jQuery(".wrp").outerHeight(),b=jQuery("body");ThriveApp.viewportHeight>=a?b.css("height",ThriveApp.viewportHeight):b.css("height",a)}};