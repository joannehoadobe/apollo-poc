
/*!---- accessibility-----*/
$j(document).ready(function(){

    $j(".header-right .top-links ul.rad-loginBtn > li ul li > a").on('click',function () {
      $j(this).closest(".rad-loginBtnChild").addClass('shownavremove');
    });
  
    $j(".graph-box-item .plus-icon").on('click', function(){
      if($j(this).hasClass('active')){
        $j(this).find('span').text('Click here to hide dresetails');
      }else{
        $j(this).find('span').text('Click here for details');
      }
    });
    
    /* Alert */
    $j("#alertWrapper").each(function(){
      $j(this).find('p').find('a').append('<span class="invisible">Learn more about alert information</span>');
      $j(this).find('#alert-agree').append('<span class="invisible">Close alert</span>');
    });
    /* Alert */
    
    $j(".homeWrap .link-wrapper a").append('<span class="invisible">Learn more about apollo global management</span>');
    $j(".signpostRight p > a").append('<span class="invisible">about apollo</span>');
    
    $j("#our-business .headerSignpostLink .menulink").append('<span class="invisible">about this insight</span>');
    
    $j(".footer-twitter").append('<span class="invisible">see about apollo on twitter</span>');
    $j(".footer-linkedin").append('<span class="invisible">see about apollo on linkedin</span>');
    
    $j(".emp-filter-click").append('<span class="invisible">click here to filter information</span>');
    
    $j(".department-selected").on("focus",function() {
      $(".department-selected").click(); 
    });
    
    $j(document).keyup(function(e) {
      if (e.keyCode === 27){// esc
        $j('ul.filter-department').slideUp();
        $j('ul.filter-locations').slideUp();
        $j('ul.filter-fund').slideUp();
        $j('ul.filter-year').slideUp();
        $j('ul.filter-year-n').slideUp();
        $j('ul.filter-status').slideUp();
        $j('ul.filter-industry').slideUp();
        $j('ul.filter-investment-type').slideUp();
        $j('.share').removeClass("open");      
        $j('.share-details').removeClass("show");
      }
      
      if (e.keyCode === 9){// Tab
        //$j(".tabs-content.tabactive .video-content a:last-child").focusout(function(){
        //if($j(this).parents(".video-content").find(".content-btn").length){
        //$j(".content-btn a").focus();
        //}
        //$j(".withoutRefresh ul li.current + li a").focus();
        //});
        
        /*$j(".header-right .top-links ul.rad-loginBtn > li > a").on('focus',function () {
          $j(this).parent().children("ul").addClass('shownav');
          $j(this).parent().children("ul").stop().slideToggle(80);
        });
        
        $j(".header-right .top-links ul.rad-loginBtn > li ul li:last-child > a").focusout(function () {
          $j(".rad-loginBtnChild").removeClass('shownav').css('display','none');
        });*/
        
        
        $j(".history-slider .history-slider-year-nav .slick-prev.slick-disabled").attr("tabindex",-1);
        $j(".history-slider .history-slider-year-nav .slick-next.slick-disabled").attr("tabindex",-1);
        
        $j(".history-slider .history-slider-year-nav .slick-prev").attr("tabindex",0);
        $j(".history-slider .history-slider-year-nav .slick-next").attr("tabindex",0);
        
        $j(".history-slider .history-slider-year.slick-slide.slick-active .history-slider-year-subsection-nav-links:last-child a").focusout(function(){
          $j(".history-slider-year-nav-links.slick-slide.slick-current.slick-active").focus();
        });
        
        $j(".history-slider .history-slider-year-subsection-nav .slick-next").focusout(function(){
          $j(".history-slider-year-nav-links.slick-slide.slick-current.slick-active").focus();
        });
        
        $j(".history-slider .history-slider-year-nav .slick-next").focusout(function(){
          $j(".footer-link ul li:first-child a").focus();
        });
        
        setTimeout(function(){ 
          $j(".history-slider-year-nav-links.slick-slide.slick-active").one("focus click",function(){
            $j(".history-slider-year.slick-current .history-slider-year-subsection-nav span.history-slider-year-subsection-nav-links.slick-current").focus();
            $j("#MainWrapper").addClass("over");
          });
        }, 3000);
        
      }
      
      if(event.shiftKey && event.keyCode == 9) {
        //shift was down when tab was pressed
        $j(".history-slider .history-slider-year-nav .slick-prev").focusout(function(){
          $j(".intro-content a:first-child").focus();
        });
        
        if($j("#ip3-our-history").length){
        $j(".footer-link ul li:first-child a").focusout(function(){
          $j(".history-slider .history-slider-year.slick-slide.slick-current").focus();
        });
        }
        
      }
      
    });
    
  });
  /*!---- cookie-consent-----*/
  var _cookiePlaceHolderSelector = ".footer-links-container"; // placeholder for cookie consent data and accept button
  var _cookieWrapper = "_cookieConsentWrapper";
  var _cookieName = "_cookieConsent"; // name of the cookie which will be used to store flag if user has clicked on i accept button
  var _cookieTimeout = 160000; // Time in SECONDS after which the cookie consent will disappear
  
  var _cookieContent = '<p>This site uses cookies. To see how cookies are used, please review our <a href="/site-services/privacy-policy">cookie notice</a>. If you agree to our use of cookies, please continue to use our site.</p> <p><input name="cookieagree" id="cookie-agree" onclick="setCookies();" value="Continue" type="button"></p>';
  
  
  // disclaimer content
  /*document.write('<style type="text/css">');
  document.write('#' + _cookieWrapper + '{padding:10px 5px;margin-bottom: 20px;font-size: 1.3em;line-height: 1.2em;}');
  document.write('#' + _cookieWrapper + ' p{color:#000000;}');
  document.write('#' + _cookieWrapper + ' a{color:#000000;text-decoration:underline;}');
  document.write('#' + _cookieWrapper + ' a:hover{color:#474747;text-decoration:none;}');
  document.write('#' + _cookieWrapper + ' input{cursor:pointer; border:0px;text-decoration:underline;color:#000000;background:none;}');
  document.write('#' + _cookieWrapper + ' input:hover{color:#474747;text-decoration:none;}');
  document.write('</style>');*/
  
  function setCookies(name, value, hours) {
  
      name = typeof name !== 'undefined' ? name : _cookieName;
      value = typeof value !== 'undefined' ? value : 'yes';
      hours = typeof hours !== 'undefined' ? hours : 8760;
      var expire = "";
      if (hours != null) {
          expire = new Date((new Date()).getTime() + hours * 86400000);
          expire = "; expires=" + expire.toGMTString();
      }
      document.cookie = name + "=" + escape(value) + expire + "; path=/";
      $j("#" + _cookieWrapper).slideUp().promise().done(function() {
    });
    
  /*-------------------------Setting of Section Div height Etc on cookie wrapper close Ends-----------------------*/ 
  }
  
  function GetCookie(name) {
      var cookieValue = "";
      var search = name + "=";
      if (document.cookie.length > 0) {
          offset = document.cookie.indexOf(search);
          if (offset != -1) {
              offset += search.length;
              end = document.cookie.indexOf(";", offset);
              if (end == -1) end = document.cookie.length;
              cookieValue = unescape(document.cookie.substring(offset, end));
          }
      }
      return cookieValue;
  }
  
  function checkCookies() {
      var cval = GetCookie(_cookieName);
      if (cval == "yes") {
          $j("#" + _cookieWrapper).css("display", "none");
      } else {
          $j("#" + _cookieWrapper).slideDown(800);
          startTimeout();
      }
  }
  function startTimeout(){
      setTimeout(function(){
          $j("#" + _cookieWrapper).slideUp(600).promise().done(function() {
    });
      },_cookieTimeout*1000);
  }
  function cookieSetup() {
      wrapperDiv = '<div id="' + _cookieWrapper + '"><div class="cookie_inner">' + _cookieContent + '</div></div>';
      $j(wrapperDiv).insertAfter($j(_cookiePlaceHolderSelector));
      checkCookies();
  }
  window.onload = cookieSetup;
  /*!---- datatable-plugin-----*/
  /*!
   DataTables 1.10.13
   ©2008-2016 SpryMedia Ltd - datatables.net/license
  */
  (function(h){"function"===typeof define&&define.amd?define(["$j"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("$j"):require("$j")(E));return h(H,E,E.document)}:h($j,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
  d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
  a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&fb(a)}function gb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
  a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function hb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;b&&!h.isArray(b)&&(a.aDataSort=[b])}function ib(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",
  top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function jb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==
  e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=
  e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(hb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=R(g),i=b.mRender?R(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};
  b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return S(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=
  d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Z(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ma(a);s(a,null,"column-sizing",[a])}function $j(a,b){var c=na(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function aa(a,b){var c=na(a,"bVisible"),c=h.inArray(b,
  c);return-1!==c?c:null}function ba(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function na(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,r;e=0;for(f=b.length;e<f;e++)if(l=b[e],r=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){r[i]===k&&(r[i]=B(a,i,e,"type"));
  q=d[g](r[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function kb(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&
  d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function oa(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,
  f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function lb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}
  function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function R(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=R(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);
  for(var i=0,n=j.length;i<n;i++){f=j[i].match(ca);g=j[i].match(V);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function S(a){if(h.isPlainObject(a))return S(a._);
  if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ca);j=e[i].match(V);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,
  ""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function pa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function qa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
  c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],r=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
  -1!==c&&(c=a.substring(c+1),S(a)(d,b.getAttribute(c)))}},m=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(S(j.mData._)(d,n),r(j.mData.sort,a),r(j.mData.type,a),r(j.mData.filter,a)):q?(j._setter||(j._setter=S(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)m(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)m(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&S(a.rowId)(d,b);return{data:d,cells:e}}
  function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:H.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i);
  n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}s(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?sa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function mb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===
  h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
  if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);
  for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function O(a){var b=s(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=
  -1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!nb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var r=d[c%e];q._sRowStripe!=r&&(h(l).removeClass(q._sRowStripe).addClass(r),q._sRowStripe=r)}s(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:
  f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ba(a),"class":a.oClasses.sRowEmpty}).html(c))[0];s(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,i]);s(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));s(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;
  c.bSort&&ob(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=!1}function pb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];
  n=f[k+1];if("'"==n||'"'==n){l="";for(q=2;f[k+q]!=n;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=qb(a);else if("f"==j&&d.bFilter)g=rb(a);else if("r"==j&&d.bProcessing)g=sb(a);else if("t"==j)g=tb(a);else if("i"==j&&d.bInfo)g=ub(a);else if("p"==
  j&&d.bPaginate)g=vb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");
  q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ta(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ua(a,b,c){s(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},
  e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){s(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=s(a,null,"xhr",
  [a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;s(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function nb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,
  !0),ua(a,wb(a),function(b){xb(a,b)}),!1):!0}function wb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,k=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var r=function(a,b){j.push({name:a,value:b})};r("sEcho",a.iDraw);r("iColumns",c);r("sColumns",D(b,"sName").join(","));r("iDisplayStart",g);r("iDisplayLength",i);var ra={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],
  l=f[g],i="function"==typeof n.mData?"function":n.mData,ra.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),r("mDataProp_"+g,i),d.bFilter&&(r("sSearch_"+g,l.sSearch),r("bRegex_"+g,l.bRegex),r("bSearchable_"+g,n.bSearchable)),d.bSort&&r("bSortable_"+g,n.bSortable);d.bFilter&&(r("sSearch",e.sSearch),r("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){ra.order.push({column:b.col,dir:b.dir});r("iSortCol_"+a,b.col);r("sSortDir_"+
  a,b.dir)}),r("iSortingCols",k.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:ra:b?j:ra}function xb(a,b){var c=va(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}pa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||
  wa(a,b);a.bAjaxDataGet=!0;C(a,!1)}function va(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?R(c)(b):b}function rb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?
  "":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Qa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});
  return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){yb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)zb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);Ab(a)}else f(b);a.bFiltered=!0;s(a,null,"search",[a])}function Ab(a){for(var b=
  m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function zb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Ra(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function yb(a,b,c,d,e,f){var d=Ra(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==m.ext.search.length&&(c=!0);j=Bb(a);if(0>=b.length)a.aiDisplay=
  g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Ra(a,b,c,d){a=b?a:Sa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Bb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;
  d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(xa.innerHTML=i,i=$b?xa.textContent:xa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Cb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,
  caseInsensitive:a.bCaseInsensitive}}function Db(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function ub(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Eb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Eb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+
  1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Fb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Fb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,
  f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){pb(a);mb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));s(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ua(a,[],function(c){var f=va(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=
  d;T(a);C(a,!1);wa(a,c)},a):(C(a,!1),wa(a))}else setTimeout(function(){ha(a)},200)}function wa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Z(a);s(a,null,"plugin-init",[a,b]);s(a,"aoInitComplete","init",[a,b])}function Ta(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ua(a);s(a,null,"length",[a,c])}function qb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=
  new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ta(a,h(this).val());O(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function vb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+
  b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Va(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&
  (d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(s(a,null,"page",[a]),c&&O(a));return b}function sb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");
  s(a,null,"processing",[a,b])}function tb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
  {"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
  0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],r=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(r.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=r;a.aoDrawCallback.push({fn:ma,sName:"scrolling"});return i[0]}function ma(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"),
  j=a.nScrollBody,l=h(j),q=j.style,r=h(a.nScrollFoot).children("div"),m=r.children("table"),p=h(a.nTHead),o=h(a.nTable),u=o[0],s=u.style,t=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,ac=D(a.aoColumns,"nTh"),P,L,Q,w,Wa=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,Z(a);else{a.scrollBarVis=L;o.children("thead, tfoot").remove();
  t&&(Q=t.clone().prependTo(o),P=t.find("tr"),Q=Q.find("tr"));w=p.clone().prependTo(o);p=p.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ta(a,w),function(b,c){B=$j(a,b);c.style.width=a.aoColumns[B].sWidth});t&&I(function(a){a.style.width=""},Q);f=o.outerWidth();if(""===c){s.width="100%";if(U&&(o.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(o.outerWidth()-b);f=o.outerWidth()}else""!==d&&(s.width=
  v(d),f=o.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Wa.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,ac)!==-1)a.style.width=Wa[b]},p);h(L).height(0);t&&(I(C,Q),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},Q),I(function(a,b){a.style.width=y[b]},P),h(Q).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+z[b]+"</div>";a.style.width=Wa[b]},L);t&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+
  A[b]+"</div>";a.style.width=y[b]},Q);if(o.outerWidth()<f){P=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(P-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else P="100%";q.width=v(P);g.width=v(P);t&&(a.nScrollFoot.style.width=v(P));!e&&U&&(q.height=v(u.offsetHeight+b));c=o.outerWidth();n[0].style.width=v(c);i.width=v(c);d=o.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+
  (x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";t&&(m[0].style.width=v(c),r[0].style.width=v(c),r[0].style[e]=d?b+"px":"0px");o.children("colgroup").insertBefore(o.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,
  e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=na(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,r=!1,m,p,o=a.oBrowser,d=o.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)p=c[i[m]],null!==p.sWidth&&(p.sWidth=Gb(p.sWidthOrig,k),r=!0);if(d||!r&&!f&&!e&&j==ba(a)&&j==n.length)for(m=0;m<j;m++)i=$j(a,m),null!==i&&(c[i].sWidth=v(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var u=h("<tr/>").appendTo(j.find("tbody"));
  j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=ta(a,j.find("thead")[0]);for(m=0;m<i.length;m++)p=c[i[m]],n[m].style.width=null!==p.sWidthOrig&&""!==p.sWidthOrig?v(p.sWidthOrig):"",p.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:p.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)r=i[m],p=c[r],h(Hb(a,r)).clone(!1).append(p.sContentPadding).appendTo(u);h("[name]",
  j).removeAttr("name");p=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=o.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=v(k-g);b.style.width=v(e);p.remove()}l&&(b.style.width=
  v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Qa(function(){Z(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Gb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Hb(a,b){var c=Ib(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Ib(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(bc,
  ""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||
  "string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function ob(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Jb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=
  0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Kb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,
  "");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Xa(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,
  D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Ya(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Xa(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Xa(a,c,b.shiftKey,d))})}
  function ya(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Jb(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,aa(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],
  c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function za(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Cb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Cb(a.aoPreSearchCols[d])}})};s(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,
  b)}}function Lb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var i=s(a,"aoStateLoadParams","stateLoadParams",[a,g]);if(-1===h.inArray(!1,i)&&(i=a.iStateDuration,!(0<i&&b.time<+new Date-1E3*i)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},g);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==
  k&&h.extend(a.oPreviousSearch,Db(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)i=b.columns[d],i.visible!==k&&(f[d].bVisible=i.visible),i.search!==k&&h.extend(a.aoPreSearchCols[d],Db(i.search))}s(a,"aoStateLoaded","stateLoaded",[a,g])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function Aa(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+
  " - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&s(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Mb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],
  h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Ya(a,b,c){h(a).on("click.DT",b,function(b){a.blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function s(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+
  ".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ua(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Nb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,
  c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function fb(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Za)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Za)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Ob(a){return function(){var b=
  [Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m=function(a){this.$=function(a,b){return this.api(!0).$j(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new u(Aa(this[x.iApiIndex])):new u(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=
  function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ma(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};
  this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();
  return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return Aa(this[x.iApiIndex])};
  this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in m.ext.internal)e&&(this[e]=Ob(e));this.each(function(){var e={},g=1<d?Mb(e,a,!0):
  a,j=0,i,e=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{gb(l);hb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var r=m.settings,j=0;for(i=r.length;j<i;j++){var p=r[j];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){var u=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||u)return p.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){p.oInstance.fnDestroy();
  break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){r.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+m.ext._unique++;var o=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});o.nTable=this;o.oApi=b.internal;o.oInit=g;r.push(o);o.oInstance=1===b.length?b:q.dataTable();gb(g);g.oLanguage&&Fa(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);
  g=Mb(h.extend(!0,{},l),g);F(o.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(o,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],
  ["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["b$jUI","bJUI"]]);F(o.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(o.oLanguage,g,"fnInfoCallback");z(o,"aoDrawCallback",g.fnDrawCallback,"user");z(o,"aoServerParams",g.fnServerParams,"user");z(o,"aoStateSaveParams",g.fnStateSaveParams,"user");z(o,"aoStateLoadParams",g.fnStateLoadParams,"user");z(o,"aoStateLoaded",g.fnStateLoaded,
  "user");z(o,"aoRowCallback",g.fnRowCallback,"user");z(o,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(o,"aoHeaderCallback",g.fnHeaderCallback,"user");z(o,"aoFooterCallback",g.fnFooterCallback,"user");z(o,"aoInitComplete",g.fnInitComplete,"user");z(o,"aoPreDrawCallback",g.fnPreDrawCallback,"user");o.rowIdFn=R(g.rowId);ib(o);var t=o.oClasses;g.b$jUI?(h.extend(t,m.ext.oJUIClasses,g.oClasses),g.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&
  !o.renderer.header&&(o.renderer.header="$jui"):o.renderer="$jui":h.extend(t,m.ext.classes,g.oClasses);q.addClass(t.sTable);o.iInitDisplayStart===k&&(o.iInitDisplayStart=g.iDisplayStart,o._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(o.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),o._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,o._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=o.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Fa(a);
  J(l.oLanguage,a);h.extend(true,v,a);ha(o)},error:function(){ha(o)}}),n=!0);null===g.asStripeClasses&&(o.asStripeClasses=[t.sStripeOdd,t.sStripeEven]);var e=o.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),o.asDestroyStripes=e.slice());e=[];r=this.getElementsByTagName("thead");0!==r.length&&(ea(o.aoHeader,r[0]),e=ta(o));if(null===g.aoColumns){r=[];j=0;for(i=e.length;j<i;j++)r.push(null)}else r=
  g.aoColumns;j=0;for(i=r.length;j<i;j++)Ga(o,e?e[j]:null);kb(o,g.aoColumnDefs,r,function(a,b){la(o,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=o.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(o,a)}}})}var U=o.oFeatures,
  e=function(){if(g.aaSorting===k){var a=o.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=o.aoColumns[j].asSorting[0]}ya(o);U.bSort&&z(o,"aoDrawCallback",function(){if(o.bSorted){var a=W(o),b={};h.each(a,function(a,c){b[c.src]=c.dir});s(o,null,"order",[o,a,b]);Kb(o)}});z(o,"aoDrawCallback",function(){(o.bSorted||y(o)==="ssp"||U.bDeferRender)&&ya(o)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
  o.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));o.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(o.oScroll.sX!==""||o.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(t.sNoFooter);else if(b.length>0){o.nTFoot=b[0];ea(o.aoFooter,o.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)N(o,g.aaData[j]);else(o.bDeferLoading||y(o)=="dom")&&oa(o,h(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();
  o.bInitialised=true;n===false&&ha(o)};g.bStateSave?(U.bStateSave=!0,z(o,"aoDrawCallback",za,"state_save"),Lb(o,g,e)):e()}});b=null;return this},x,u,p,t,$a={},Pb=/[\r\n]/g,Ca=/<.*?>/g,cc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,dc=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Za=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Qb=function(a){var b=parseInt(a,10);return!isNaN(b)&&
  isFinite(a)?b:null},Rb=function(a,b){$a[b]||($a[b]=RegExp(Sa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace($a[b],"."):a},ab=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Rb(a,b));c&&d&&(a=a.replace(Za,""));return!isNaN(parseFloat(a))&&isFinite(a)},Sb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:ab(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
  f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Tb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},sa=function(a){var b=[],c,d,e=a.length,f,g=0;d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};m.util=
  {throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,h=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,h)},c)):(d=g,a.apply(b,h))}},escapeRegex:function(a){return a.replace(dc,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,V=/\(\)$/,Sa=m.util.escapeRegex,xa=h("<div>")[0],$b=xa.textContent!==k,bc=/<.*?>/g,Qa=m.util.throttle,Ub=[],w=Array.prototype,ec=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});
  if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};u=function(a,b){if(!(this instanceof u))return new u(a,b);var c=[],d=function(a){(a=ec(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);
  else d(a);this.context=sa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};u.extend(this,this,Ub)};m.Api=u;h.extend(u.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new u(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);
  else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new u(this.context,b)},flatten:function(){var a=[];return new u(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,n,l=this.context,m,p,t=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var s=new u(l[g]);if("table"===b)f=
  c.call(s,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(s,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],t.opts));i=0;for(n=p.length;i<n;i++)f=p[i],f="cell"===b?c.call(s,l[g],f.row,f.column,g,i):c.call(s,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new u(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=t.rows,b.cols=t.cols,b.opts=t.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,
  b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new u(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return jb(this,a,b,0,this.length,1)},reduceRight:w.reduceRight||function(a,b){return jb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,
  sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},to$j:function(){return h(this)},unique:function(){return new u(this.context,sa(this))},unshift:w.unshift});u.extend=function(a,b,c){if(c.length&&b&&(b instanceof u||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);u.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?
  {}:f.val,b[f.name].__dt_wrapper=!0,u.extend(a,b[f.name],f.propExt)}};u.register=p=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)u.register(a[c],b);else for(var e=a.split("."),f=Ub,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};u.registerPlural=t=function(a,b,c){u.register(a,
  c);u.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof u?a.length?h.isArray(a[0])?new u(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=u;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new u(b[0]):a});t("tables().nodes()",
  "table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});t("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});t("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});t("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});t("tables().containers()","table().container()",function(){return this.iterator("table",
  function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Va(b,a)})});p("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),
  pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ta(b,a)})});var Vb=function(a,b,c){if(c){var d=new u(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ua(a,[],function(c){pa(a);for(var c=va(a,c),d=0,e=c.length;d<
  e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});p("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?
  b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});var bb=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return sa(f)},
  cb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},db=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==
  d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=b,f;return bb("row",a,function(a){var b=Qb(a);if(b!==null&&!e)return[b];f||(f=Da(c,e));if(b!==
  null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Tb(ja(c.aoData,f,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){var i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},
  c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},1)});t("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});t("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",
  function(b,c){da(b,c,a)})});t("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});t("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new u(c,b)});t("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);
  g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i<n;i++)l[i]._DT_CellIndex.row=g}qa(b.aiDisplayMaster,c);qa(b.aiDisplay,c);qa(a[d],c,!1);Ua(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?
  h.push(oa(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return db(this.rows(a,b))});p("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;da(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);
  var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?oa(b,a)[0]:N(b,a)});return this.row(b[0])});var eb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Wb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new u(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
  0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=ba(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&eb(f,c)}))}}};p("row().child()",function(a,b){var c=
  this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)eb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ba(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);
  c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Wb(this,!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Wb(this,!1);return this});p(["row().child.remove()","row().child().remove()"],function(){eb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var fc=/^([^:]+):(name|visIdx|visible)$/,Xb=function(a,b,
  c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return bb("column",e,function(a){var b=Qb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Xb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(fc):
  "";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[$j(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},
  1);c.selector.cols=a;c.selector.opts=b;return c});t("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});t("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});t("columns().data()","column().data()",function(){return this.iterator("column-rows",Xb,1)});t("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},
  1)});t("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});t("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});t("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,
  i,n,l;if(a!==k&&g.bVisible!==a){if(a){var m=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(n=j.length;i<n;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[m]||null)}else h(D(b.aoData,"anCells",c)).detach();g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);za(b)}});a!==k&&(this.iterator("column",function(c,e){s(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});t("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===
  a?aa(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){Z(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return $j(c,b);if("fromData"===a||"toVisible"===a)return aa(c,b)}});p("column()",function(a,b){return db(this.columns(a,b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",
  function(b){var d=a,e=cb(c),f=b.aoData,g=Da(b,e),i=Tb(ja(f,g,"anCells")),j=h([].concat.apply([],i)),l,n=b.aoColumns.length,m,p,t,u,s,v;return bb("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){m=[];p=0;for(t=g.length;p<t;p++){l=g[p];for(u=0;u<n;u++){s={row:l,column:u};if(c){v=f[l];a(s,B(b,l,u),v.anCells?v.anCells[u]:null)&&m.push(s)}else m.push(s)}}return m}if(h.isPlainObject(a))return[a];c=j.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();
  if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b,c),e=this.rows(a,c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});t("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=
  a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});t("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});t("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});t("cells().indexes()","cell().index()",function(){return this.iterator("cell",
  function(a,b,c){return{row:b,column:c,columnVisible:aa(a,c)}},1)});t("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});p("cell()",function(a,b,c){return db(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;lb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===
  k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()",
  "column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});t("columns().search()","column().search()",function(a,
  b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?
  this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){za(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof m.Api)return!0;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?
  h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new u(c):c};m.camelToHungarian=J;p("$j()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);
  a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",function(a){pa(a)})});p("settings()",function(){return new u(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||
  !1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),p;b.bDestroying=!0;s(b,"aoDestroyCallback","destroy",[b]);a||(new u(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));
  b.aaSorting=[];b.aaSortingFixed=[];ya(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",
  b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=R(a)(d.oLanguage);a===k&&(a=b);c!==
  k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.13";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,
  mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,b$jUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,
  bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?
  sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",
  sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},
  oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,
  sType:null,sWidth:null};Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],
  aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,
  searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],
  fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,
  aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=x={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,
  oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",
  sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",
  sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Yb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",
  sSortDesc:G+" sorting_desc",sSortable:G+" sorting",sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Yb+
  " ui-corner-tl ui-corner-tr",sJUIFooter:Yb+" ui-corner-bl ui-corner-br"});var Nb=m.ext.pager;h.extend(Nb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,m.ext.renderer,
  {pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,p=0,r=function(b,d){var k,t,u,s,v=function(b){Va(a,b.data.action,true)};k=0;for(t=d.length;k<t;k++){s=d[k];if(h.isArray(s)){u=h("<"+(s.DT_el||"div")+"/>").appendTo(b);r(u,s)}else{m=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=s+(e>0?"":" "+
  g.sPageButtonDisabled);break;case "next":m=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=s+1;l=e===s?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":p,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(m).appendTo(b);Ya(u,{action:s},v);p++}}}},t;try{t=h(b).find(H.activeElement).data("dt-idx")}catch(u){}r(h(b).empty(),
  d);t!==k&&h(b).find("[data-dt-idx="+t+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!cc.test(a))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c,!0)?"html-num-fmt"+
  c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Pb," ").replace(Ca,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Pb," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Rb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||-Infinity},
  "html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});fb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]==
  "asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},$jui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+
  d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Zb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Zb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):
  "";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Zb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Ob,_fnBuildAjax:ua,_fnAjaxUpdate:nb,_fnAjaxParameters:wb,_fnAjaxUpdateDraw:xb,_fnAjaxDataSrc:va,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:Z,_fnVisibleToColumnIndex:$j,_fnColumnIndexToVisible:aa,_fnVisbleColumns:ba,_fnGetColumns:na,_fnColumnTypes:Ia,_fnApplyColumnDefs:kb,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,
  _fnBrowserDetect:ib,_fnAddData:N,_fnAddTr:oa,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:lb,_fnSplitObjNotation:La,_fnGetObjectDataFn:R,_fnSetObjectDataFn:S,_fnGetDataMaster:Ma,_fnClearTable:pa,_fnDeleteIndex:qa,_fnInvalidate:da,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:mb,_fnDrawHead:fa,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:pb,_fnDetectHeader:ea,
  _fnGetUniqueThs:ta,_fnFeatureHtmlFilter:rb,_fnFilterComplete:ga,_fnFilterCustom:Ab,_fnFilterColumn:zb,_fnFilter:yb,_fnFilterCreateSearch:Ra,_fnEscapeRegex:Sa,_fnFilterData:Bb,_fnFeatureHtmlInfo:ub,_fnUpdateInfo:Eb,_fnInfoMacros:Fb,_fnInitialise:ha,_fnInitComplete:wa,_fnLengthChange:Ta,_fnFeatureHtmlLength:qb,_fnFeatureHtmlPaginate:vb,_fnPageChange:Va,_fnFeatureHtmlProcessing:sb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:tb,_fnScrollDraw:ma,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:Qa,
  _fnConvertToWidth:Gb,_fnGetWidestNode:Hb,_fnGetMaxLenString:Ib,_fnStringToCss:v,_fnSortFlatten:W,_fnSort:ob,_fnSortAria:Kb,_fnSortListener:Xa,_fnSortAttachListener:Oa,_fnSortingClasses:ya,_fnSortData:Jb,_fnSaveState:za,_fnLoadState:Lb,_fnSettingsFromNode:Aa,_fnLog:K,_fnMap:F,_fnBindAction:Ya,_fnCallbackReg:z,_fnCallbackFire:s,_fnLengthOverflow:Ua,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=
  m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});
  
  /*!---- double-tap-to-go-----*/
  /*
      By Osvaldas Valutis, www.osvaldas.info
      Available for use under the MIT License
  */
  
  ;(function( $j, window, document, undefined )
  {
      $j.fn.doubleTapToGo = function( params )
      {
          if( !( 'ontouchstart' in window ) &&
              !navigator.msMaxTouchPoints &&
              !navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;
  
          this.each( function()
          {
              var curItem = false;
  
              $j( this ).on( 'click', function( e )
              {
                  var item = $j( this );
                  if( item[ 0 ] != curItem[ 0 ] )
                  {
                      e.preventDefault();
                      curItem = item;
                  }
              });
  
              $j( document ).on( 'click touchstart MSPointerDown', function( e )
              {
                  var resetItem = true,
                      parents	  = $j( e.target ).parents();
  
                  for( var i = 0; i < parents.length; i++ )
                      if( parents[ i ] == curItem[ 0 ] )
                          resetItem = false;
  
                  if( resetItem )
                      curItem = false;
              });
          });
          return this;
      };
  })( $j, window, document );
  
  
  $j(document).ready(function () {
  /*------------------- <Start> Double tap to Go ------------- */
  
    if ($j(window).width() < 1025) {
      $j('.topnavigation > ul > li.level1.haschildren').doubleTapToGo();
      $j('.sub-navigation > ul > li.level2.haschildren').doubleTapToGo();
    }
  
  /*------------------- <END> Double tap to Go ------------- */
  });
  /*!---- magnific-popup-plugin-----*/
  // Magnific Popup v1.1.0 by Dmitry Semenov
  // http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina
  (function(a){typeof define=="function"&&define.amd?define(["$j"],a):typeof exports=="object"?a(require("$j")):a(window.$j||window.Zepto)})(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.$j,q,r=a(window),s,t,u,v,w=function(a,b){n.ev.on(i+a+j,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},z=function(b){if(b!==v||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),v=b;return n.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isLowIE=n.isIE8=document.all&&!document.addEventListener,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=B(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],u="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=s,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=x("bg").on("click"+j,function(){n.close()}),n.wrap=x("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=x("container",n.wrap)),n.contentContainer=x("content"),n.st.preloader&&(n.preloader=x("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}y("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(w(f,function(a,b,c,d){c.close_replaceWith=z(d.type)}),u+=" mfp-close-btn-in"):n.wrap.append(z())),n.st.alignTop&&(u+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:s.height(),position:"absolute"}),n.st.enableEscapeKey&&s.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&n.wrap.addClass(u);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),y("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||a(document.body)),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),s.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),y(g),b},close:function(){if(!n.isOpen)return;y(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){y(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}s.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n.st.autoFocusLast&&n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,y(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),y("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;y("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;y("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}t&&t!==b.type&&n.container.removeClass("mfp-"+t+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,y(h,b),t=b.type,n.container.prepend(n.contentContainer),y("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(z()):n.content=a:n.content="",y(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,y("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey||b.altKey||b.shiftKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?s.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(f,[b,c,d]),a.each(c,function(c,d){if(d===undefined||d===!1)return!0;e=c.split("_");if(e.length>1){var f=b.find(j+"-"+e[0]);if(f.length>0){var g=e[1];g==="replaceWith"?f[0]!==d[0]&&f.replaceWith(d):g==="img"?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(j+"-"+c).html(d)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return A(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(b){A();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var C="inline",D,E,F,G=function(){F&&(E.after(F.addClass(D)).detach(),F=null)};a.magnificPopup.registerModule(C,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(C),w(b+"."+C,function(){G()})},getInline:function(b,c){G();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(E||(D=d.hiddenClass,E=x(D),D="mfp-"+D),F=e.after(E).detach().removeClass(D)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var H="ajax",I,J=function(){I&&a(document.body).removeClass(I)},K=function(){J(),n.req&&n.req.abort()};a.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(H),I=n.st.ajax.cursor,w(b+"."+H,K),w("BeforeChange."+H,K)},getAjax:function(b){I&&a(document.body).addClass(I),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};y("ParseAjax",f),n.appendContent(a(f.data),H),b.finished=!0,J(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var L,M=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=n.st.image,d=".image";n.types.push("image"),w(g+d,function(){n.currItem.type==="image"&&c.cursor&&a(document.body).addClass(c.cursor)}),w(b+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),r.off("resize"+j)}),w("Resize"+d,n.resizeImage),n.isLowIE&&w("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){L&&clearInterval(L),L=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(L),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,y("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.el&&b.el.find("img").length&&(i.alt=b.el.find("img").attr("alt")),b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:M(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(L&&clearInterval(L),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var N,O=function(){return N===undefined&&(N=document.createElement("p").style.MozTransform!==undefined),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;w("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,y("ZoomAnimationEnded")},16)},f)},16)}}),w(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),w(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return O()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var P="iframe",Q="//about:blank",R=function(a){if(n.currTemplate[P]){var b=n.currTemplate[P].find("iframe");b.length&&(a||(b[0].src=Q),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(b+"."+P,function(){R()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}});var S=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery";n.direction=!0;if(!c||!c.enabled)return!1;u+=" mfp-gallery",w(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),s.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),w("UpdateStatus"+d,function(a,b){b.text&&(b.text=T(b.text,n.currItem.index,n.items.length))}),w(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?T(c.tCounter,e.index,f):""}),w("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),e=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m);d.click(function(){n.prev()}),e.click(function(){n.next()}),n.container.append(d.add(e))}}),w(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),w(b+d,function(){s.off(d),n.wrap.off("click"+d),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=S(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=S(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=S(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),y("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,y("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=n.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(w("ImageHasSize."+U,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),w("ElementParse."+U,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),A()})
  
  
  $j(document).ready(function(){
    /*$j('.banner-video-link').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    */
    
    $j('.case-study-popup-link').magnificPopup({
      type:'inline',
      closeOnBgClick:false,
      midClick: true,
      callbacks: {
          open: function() {
          $j('html').addClass('popup-html-active');
          $j('body').addClass('popup-active');
          },
          close: function() {
          $j('html').removeClass('popup-html-active');
          $j('body').removeClass('popup-active');
          }
        },
    });
    
    
    
  
  
  $j('.profile-interview-link').magnificPopup({
      type:'ajax',
      callbacks: {
          open: function() {
          $j('html').addClass('popup-html-active');
          $j('body').addClass('popup-active');
          var mfp = $j.magnificPopup.instance;
          var proto = $j.magnificPopup.proto;
  
          // extend function that moves to next item
          mfp.next = function() {
  
              // if index is not last, call parent method
              if(mfp.index < mfp.items.length - 1) {
                  proto.next.call(mfp);
              } else {
                 // otherwise do whatever you want, e.g. hide "next" arrow
                 $j('.mfp-arrow-right').hide();
              }
          };
  
          // same with prev method
          mfp.prev = function() {
              if(mfp.index > 0) {
                  proto.prev.call(mfp);
              }
          };
  
      },
      close: function() {
      $j('html').removeClass('popup-html-active');
      $j('body').removeClass('popup-active');   
      var mypage = $j("body").attr("id");
      if(mypage==="ip3-careers"){
  $j('html, body').animate({scrollTop: $j('.meet-apollo').offset().top-240}, 1000);
  };
  
  },
        parseAjax: function(mfpResponse) {
          // mfpResponse.data is a "data" object from ajax "success" callback
          // for simple HTML file, it will be just String
          // You may modify it to change contents of the popup
          // For example, to show just #some-element:
          // mfpResponse.data = $(mfpResponse.data).find('#some-element');
          
          // mfpResponse.data must be a String or a DOM (jQuery) element
          
          
        },
        ajaxContentAdded: function() {
          // Ajax content is loaded and appended to DOM
          
          $j("#videoPlayer").InvPlayer();
        }
        
      },
      closeOnBgClick:false,
      gallery:{
      enabled:false
    },
      midClick: false // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  
  
    
    $j('.banner-video-link, .profiles-video-link, .meet-video-link, .video-popup-link, .video-popup-link-text, .bio-popup-link, .dei-popup-link').magnificPopup({
      type:'ajax',
      callbacks: {
        open: function() {
          $j('html').addClass('popup-html-active');
          $j('body').addClass('popup-active');
          var mfp = $j.magnificPopup.instance;
          var proto = $j.magnificPopup.proto;
          
          // extend function that moves to next item
          mfp.next = function() {
            
            // if index is not last, call parent method
            if(mfp.index < mfp.items.length - 1) {
              proto.next.call(mfp);
            } else {
              // otherwise do whatever you want, e.g. hide "next" arrow
              $j('.mfp-arrow-right').hide();
            }
          };
          
          // same with prev method
          mfp.prev = function() {
            if(mfp.index > 0) {
              proto.prev.call(mfp);
            }
          };
        },
      close: function() {
      $j('html').removeClass('popup-html-active');
      $j('body').removeClass('popup-active');   
  
  },
        parseAjax: function(mfpResponse) {
          // mfpResponse.data is a "data" object from ajax "success" callback
          // for simple HTML file, it will be just String
          // You may modify it to change contents of the popup
          // For example, to show just #some-element:
          // mfpResponse.data = $(mfpResponse.data).find('#some-element');
          
          // mfpResponse.data must be a String or a DOM (jQuery) element
          
          
        },
        ajaxContentAdded: function() {
          // Ajax content is loaded and appended to DOM
          
          $j("#videoPlayer").InvPlayer().done(function(e){  
              e.playVideo();
            });
            /*
          
          if($j(".mfp-ready").find(".inv_playerContainer").length > 0){
          
            $j(".mfp-ready").find(".inv_playerContainer").InvPlayer().done(function(e){  
              e.playVideo();
            });
          }
          */
        }
        
      },
      closeOnBgClick:false,
      gallery:{
      enabled:false
    },
      midClick: false // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    
    
    /*Video work with megamenu*/
    $j(document).on("click",".video-popup-link",function(){
      $j(".video-popup-link").magnificPopup({
        type:'ajax',
        callbacks: {
          open: function() {
            $j('html').addClass('popup-html-active');
            $j('body').addClass('popup-active');
            var mfp = $j.magnificPopup.instance;
            var proto = $j.magnificPopup.proto;
            
            // extend function that moves to next item
            mfp.next = function() {
              
              // if index is not last, call parent method
              if(mfp.index < mfp.items.length - 1) {
                proto.next.call(mfp);
              } else {
                // otherwise do whatever you want, e.g. hide "next" arrow
                $j('.mfp-arrow-right').hide();
              }
            };
            
            // same with prev method
            mfp.prev = function() {
              if(mfp.index > 0) {
                proto.prev.call(mfp);
              }
            };
          },
          close: function() {
            $j('html').removeClass('popup-html-active');
            $j('body').removeClass('popup-active');
            console.log("closed");
            $j("#videoPlayer").InvPlayer().done(function(e){  
              e.stopVideo();
            });
          },
          
          ajaxContentAdded: function() {
            // Ajax content is loaded and appended to DOM
            
            $j("#videoPlayer").InvPlayer().done(function(e){  
              e.playVideo();
            });
          }
          
        },
        closeOnBgClick:false,
        gallery:{
          enabled:false
        },
        midClick: false // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      });
    });
    /* Video work with megamenu */
    
  });
  /*!---- mmenu-----*/
  /*
   * jQuery mmenu v5.6.2
   * @requires jQuery 1.7.0 or later
   *
   * mmenu.frebsite.nl
   *	
   * Copyright (c) Fred Heusschen
   * www.frebsite.nl
   *
   * License: CC-BY-NC-4.0
   * http://creativecommons.org/licenses/by-nc/4.0/
   */
  !function(e){function t(){e[n].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},i={},a={},o={},e.each([i,a,o],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,s=e.length;s>n;n++)t[e[n]]=t.mm(e[n])}}),i.mm=function(e){return"mm-"+e},i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),i.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent sub"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=i,e[n]._d=a,e[n]._e=o,e[n].glbl=r)}var n="mmenu",s="5.6.2";if(!(e[n]&&e[n].version>s)){e[n]=function(e,t,n){this.$menu=e,this._api=["bind","init","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=t,this.conf=n,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var s=this.$pnls.children();return this._initAddons(),this.init(s),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=s,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],navbar:{add:!0,title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={init:function(e){e=e.not("."+i.nopanel),e=this._initPanels(e),this.trigger("init",e),this.trigger("update")},update:function(){this.trigger("update")},setSelected:function(e){this.$menu.find("."+i.listview).children().removeClass(i.selected),e.addClass(i.selected),this.trigger("setSelected",e)},openPanel:function(t){var s=t.parent(),a=this;if(s.hasClass(i.vertical)){var o=s.parents("."+i.subopened);if(o.length)return void this.openPanel(o.first());s.addClass(i.opened),this.trigger("openPanel",t),this.trigger("openingPanel",t),this.trigger("openedPanel",t)}else{if(t.hasClass(i.current))return;var r=this.$pnls.children("."+i.panel),l=r.filter("."+i.current);r.removeClass(i.highest).removeClass(i.current).not(t).not(l).not("."+i.vertical).addClass(i.hidden),e[n].support.csstransitions||l.addClass(i.hidden),t.hasClass(i.opened)?t.nextAll("."+i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(t.addClass(i.highest),l.addClass(i.subopened)),t.removeClass(i.hidden).addClass(i.current),a.trigger("openPanel",t),setTimeout(function(){t.removeClass(i.subopened).addClass(i.opened),a.trigger("openingPanel",t),a.__transitionend(t,function(){a.trigger("openedPanel",t)},a.conf.transitionDuration)},this.conf.openingInterval)}},closePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&(t.removeClass(i.opened),this.trigger("closePanel",e),this.trigger("closingPanel",e),this.trigger("closedPanel",e))},closeAllPanels:function(){this.$menu.find("."+i.listview).children().removeClass(i.selected).filter("."+i.vertical).removeClass(i.opened);var e=this.$pnls.children("."+i.panel),t=e.first();this.$pnls.children("."+i.panel).not(t).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden),this.openPanel(t)},togglePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&this[t.hasClass(i.opened)?"closePanel":"openPanel"](e)},getInstance:function(){return this},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var s=0,i=this.cbck[n].length;i>s;s++)this.cbck[n][s].apply(e,t)},_initMenu:function(){this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$pnls=e('<div class="'+i.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.parent().addClass(i.wrapper);var t=[i.menu];this.opts.slidingSubmenus||t.push(i.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&t.push(this.opts.extensions),this.$menu.addClass(t.join(" "))},_initPanels:function(t){var n=this,s=this.__findAddBack(t,"ul, ol");this.__refactorClass(s,this.conf.classNames.inset,"inset").addClass(i.nolistview+" "+i.nopanel),s.not("."+i.nolistview).addClass(i.listview);var o=this.__findAddBack(t,"."+i.listview).children();this.__refactorClass(o,this.conf.classNames.selected,"selected"),this.__refactorClass(o,this.conf.classNames.divider,"divider"),this.__refactorClass(o,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(t,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var r=e(),l=t.add(t.find("."+i.panel)).add(this.__findAddBack(t,"."+i.listview).children().children(this.conf.panelNodetype)).not("."+i.nopanel);this.__refactorClass(l,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||l.addClass(i.vertical),l.each(function(){var t=e(this),s=t;t.is("ul, ol")?(t.wrap('<div class="'+i.panel+'" />'),s=t.parent()):s.addClass(i.panel);var a=t.attr("id");t.removeAttr("id"),s.attr("id",a||n.__getUniqueId()),t.hasClass(i.vertical)&&(t.removeClass(n.conf.classNames.vertical),s.add(s.parent()).addClass(i.vertical)),r=r.add(s)});var d=e("."+i.panel,this.$menu);r.each(function(t){var s,o,r=e(this),l=r.parent(),d=l.children("a, span").first();if(l.is("."+i.panels)||(l.data(a.sub,r),r.data(a.parent,l)),l.children("."+i.next).length||l.parent().is("."+i.listview)&&(s=r.attr("id"),o=e('<a class="'+i.next+'" href="#'+s+'" data-target="#'+s+'" />').insertBefore(d),d.is("span")&&o.addClass(i.fullsubopen)),!r.children("."+i.navbar).length&&!l.hasClass(i.vertical)){l.parent().is("."+i.listview)?l=l.closest("."+i.panel):(d=l.closest("."+i.panel).find('a[href="#'+r.attr("id")+'"]').first(),l=d.closest("."+i.panel));var c=e('<div class="'+i.navbar+'" />');if(l.length){switch(s=l.attr("id"),n.opts.navbar.titleLink){case"anchor":_url=d.attr("href");break;case"panel":case"parent":_url="#"+s;break;default:_url=!1}c.append('<a class="'+i.btn+" "+i.prev+'" href="#'+s+'" data-target="#'+s+'" />').append(e('<a class="'+i.title+'"'+(_url?' href="'+_url+'"':"")+" />").text(d.text())).prependTo(r),n.opts.navbar.add&&r.addClass(i.hasnavbar)}else n.opts.navbar.title&&(c.append('<a class="'+i.title+'">'+n.opts.navbar.title+"</a>").prependTo(r),n.opts.navbar.add&&r.addClass(i.hasnavbar))}});var c=this.__findAddBack(t,"."+i.listview).children("."+i.selected).removeClass(i.selected).last().addClass(i.selected);c.add(c.parentsUntil("."+i.menu,"li")).filter("."+i.vertical).addClass(i.opened).end().each(function(){e(this).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened)}),c.children("."+i.panel).not("."+i.vertical).addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened);var h=d.filter("."+i.opened);return h.length||(h=r.first()),h.addClass(i.opened).last().addClass(i.current),r.not("."+i.vertical).not(h.last()).addClass(i.hidden).end().filter(function(){return!e(this).parent().hasClass(i.panels)}).appendTo(this.$pnls),r},_initAnchors:function(){var t=this;r.$body.on(o.click+"-oncanvas","a[href]",function(s){var a=e(this),o=!1,r=t.$menu.find(a).length;for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,t.$menu);c.is("."+i.panel)&&(o=!0,t[a.parent().hasClass(i.vertical)?"togglePanel":"openPanel"](c))}catch(h){}if(o&&s.preventDefault(),!o&&r&&a.is("."+i.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(s.target).parent());var u=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==d.slice(0,1));u&&s.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,u)&&t.close()}})},_initAddons:function(){var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return e&&e.length&&this.conf.clone&&(e=i.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var s=this;n[s]=function(){var e=t[s].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(i[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+i.divider).not("."+i.hidden)},__transitionend:function(e,t,n){var s=!1,i=function(){s||t.call(e[0]),s=!0};e.one(o.transitionend,i),e.one(o.webkitTransitionEnd,i),setTimeout(i,1.1*n)},__getUniqueId:function(){return i.mm(e[n].uniqueId++)}},e.fn[n]=function(s,i){return t(),s=e.extend(!0,{},e[n].defaults,s),i=e.extend(!0,{},e[n].configuration,i),this.each(function(){var t=e(this);if(!t.data(n)){var a=new e[n](t,s,i);a.$menu.data(n,a.__api())}})},e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){if("undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransitions)return Modernizr.csstransitions;var e=document.body||document.documentElement,t=e.style,n="transition";if("string"==typeof t[n])return!0;var s=["Moz","webkit","Webkit","Khtml","O","ms"];n=n.charAt(0).toUpperCase()+n.substr(1);for(var i=0;i<s.length;i++)if("string"==typeof t[s[i]+n])return!0;return!1}()};var i,a,o,r}}($j),/*	
   * jQuery mmenu offCanvas addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var i=this.opts[n],a=this.conf[n];o=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),("top"==i.position||"bottom"==i.position)&&(i.zposition="front"),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[s.offcanvas];"left"!=i.position&&r.push(s.mm(i.position)),"back"!=i.zposition&&r.push(s.mm(i.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper),this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector);var l=window.location.hash;if(l){var d=this._getOriginalMenuId();d&&d==l.slice(1)&&this.open()}}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("offcanvas slideout blocking modal background opening blocker page"),i.add("style"),a.add("resize")},clickAnchor:function(e,t){if(!this.opts[n])return!1;var s=this._getOriginalMenuId();if(s&&e.is('[href="#'+s+'"]'))return this.open(),!0;if(o.$page)return s=o.$page.first().attr("id"),s&&e.is('[href="#'+s+'"]')?(this.close(),!0):!1}},e[t].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[t].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[t].prototype._openSetup=function(){var t=this,r=this.opts[n];this.closeAllOthers(),o.$page.each(function(){e(this).data(i.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+n,[!0]);var l=[s.opened];r.blockUI&&l.push(s.blocking),"modal"==r.blockUI&&l.push(s.modal),r.moveBackground&&l.push(s.background),"left"!=r.position&&l.push(s.mm(this.opts[n].position)),"back"!=r.zposition&&l.push(s.mm(this.opts[n].zposition)),this.opts.extensions&&l.push(this.opts.extensions),o.$html.addClass(l.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(s.current+" "+s.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),o.$html.addClass(s.opening),this.trigger("opening")},e[t].prototype.close=function(){if(this.vars.opened){var t=this;this.__transitionend(o.$page.first(),function(){t.$menu.removeClass(s.current).removeClass(s.opened),o.$html.removeClass(s.opened).removeClass(s.blocking).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(t.opts[n].position)).removeClass(s.mm(t.opts[n].zposition)),t.opts.extensions&&o.$html.removeClass(t.opts.extensions),o.$page.each(function(){e(this).attr("style",e(this).data(i.style))}),t.vars.opened=!1,t.trigger("closed")},this.conf.transitionDuration),o.$html.removeClass(s.opening),this.trigger("close"),this.trigger("closing")}},e[t].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){var i=this,a=this.conf[n];t&&t.length||(t=o.$body.find(a.pageSelector),a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))),t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),t.addClass(s.page+" "+s.slideout),o.$page=t,this.trigger("setPage",t)},e[t].prototype["_initWindow_"+n]=function(){o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(e){return o.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var e=0;o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(t,n){if(1==o.$page.length&&(n||o.$html.hasClass(s.opened))){var i=o.$wndw.height();(n||i!=e)&&(e=i,o.$page.css("minHeight",i))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+s.blocker+'" class="'+s.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(e){e.preventDefault(),o.$html.hasClass(s.modal)||(t.closeAllOthers(),t.close())}))};var s,i,a,o}($j),/*	
   * jQuery mmenu scrollBugFix addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="scrollBugFix";e[t].addons[n]={setup:function(){var i=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,e[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof r&&(r={fix:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),r.fix)){var l=this.$menu.attr("id"),d=!1;this.bind("opening",function(){this.$pnls.children("."+s.current).scrollTop(0)}),o.$docu.on(a.touchmove,function(e){i.vars.opened&&e.preventDefault()}),o.$body.on(a.touchstart,"#"+l+"> ."+s.panels+"> ."+s.current,function(e){i.vars.opened&&(d||(d=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),d=!1))}).on(a.touchmove,"#"+l+"> ."+s.panels+"> ."+s.current,function(t){i.vars.opened&&e(this)[0].scrollHeight>e(this).innerHeight()&&t.stopPropagation()}),o.$wndw.on(a.orientationchange,function(){i.$pnls.children("."+s.current).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={fix:!0};var s,i,a,o}($j),/*	
   * jQuery mmenu backButton addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="backButton";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var i=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={close:a}),"object"!=typeof a&&(a={}),a=e.extend(!0,{},e[t].defaults[n],a),a.close){var r="#"+i.$menu.attr("id");this.bind("opened",function(e){location.hash!=r&&history.pushState(null,document.title,r)}),e(window).on("popstate",function(e){o.$html.hasClass(s.opened)?(e.stopPropagation(),i.close()):location.hash==r&&(e.stopPropagation(),i.open())})}}},add:function(){return window.history&&window.history.pushState?(s=e[t]._c,i=e[t]._d,void(a=e[t]._e)):void(e[t].addons[n].setup=function(){})},clickAnchor:function(e,t){}},e[t].defaults[n]={close:!1};var s,i,a,o}($j),/*	
   * jQuery mmenu autoHeight addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="autoHeight";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var i=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof i&&i&&(i={height:"auto"}),"string"==typeof i&&(i={height:i}),"object"!=typeof i&&(i={}),i=this.opts[n]=e.extend(!0,{},e[t].defaults[n],i),"auto"==i.height||"highest"==i.height){this.$menu.addClass(s.autoheight);var a=function(t){if(this.vars.opened){var n=parseInt(this.$pnls.css("top"),10)||0,a=parseInt(this.$pnls.css("bottom"),10)||0,o=0;this.$menu.addClass(s.measureheight),"auto"==i.height?(t=t||this.$pnls.children("."+s.current),t.is("."+s.vertical)&&(t=t.parents("."+s.panel).not("."+s.vertical).first()),o=t.outerHeight()):"highest"==i.height&&this.$pnls.children().each(function(){var t=e(this);t.is("."+s.vertical)&&(t=t.parents("."+s.panel).not("."+s.vertical).first()),o=Math.max(o,t.outerHeight())}),this.$menu.height(o+n+a).removeClass(s.measureheight)}};this.bind("opening",a),"highest"==i.height&&this.bind("init",a),"auto"==i.height&&(this.bind("update",a),this.bind("openPanel",a),this.bind("closePanel",a))}}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("autoheight measureheight"),a.add("resize")},clickAnchor:function(e,t){}},e[t].defaults[n]={height:"default"};var s,i,a,o}($j),/*	
   * jQuery mmenu counters addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="counters";e[t].addons[n]={setup:function(){var a=this,r=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof r&&(r={add:r,update:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("init",function(t){this.__refactorClass(e("em",t),this.conf.classNames[n].counter,"counter")}),r.add&&this.bind("init",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}n.each(function(){var t=e(this).data(i.parent);t&&(t.children("em."+s.counter).length||t.prepend(e('<em class="'+s.counter+'" />')))})}),r.update&&this.bind("update",function(){this.$pnls.children("."+s.panel).each(function(){var t=e(this),n=t.data(i.parent);if(n){var o=n.children("em."+s.counter);o.length&&(t=t.children("."+s.listview),t.length&&o.html(a.__filterListItems(t.children()).length))}})})},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("counter search noresultsmsg")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,addTo:"panels",update:!1},e[t].configuration.classNames[n]={counter:"Counter"};var s,i,a,o}($j),/*	
   * jQuery mmenu columns addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="columns";e[t].addons[n]={setup:function(){var i=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof i&&(i={add:i}),"number"==typeof i&&(i={add:!0,visible:i}),"object"!=typeof i&&(i={}),"number"==typeof i.visible&&(i.visible={min:i.visible,max:i.visible}),i=this.opts[n]=e.extend(!0,{},e[t].defaults[n],i),i.add){i.visible.min=Math.max(1,Math.min(6,i.visible.min)),i.visible.max=Math.max(i.visible.min,Math.min(6,i.visible.max)),this.$menu.addClass(s.columns);for(var a=this.opts.offCanvas?this.$menu.add(o.$html):this.$menu,r=[],l=0;l<=i.visible.max;l++)r.push(s.columns+"-"+l);r=r.join(" ");var d=function(e){u.call(this,this.$pnls.children("."+s.current)),i.hideNavbars&&e.removeClass(s.hasnavbar)},c=function(){var e=this.$pnls.children("."+s.panel).filter("."+s.opened).length;e=Math.min(i.visible.max,Math.max(i.visible.min,e)),a.removeClass(r).addClass(s.columns+"-"+e)},h=function(){this.opts.offCanvas&&o.$html.removeClass(r)},u=function(t){this.$pnls.children("."+s.panel).removeClass(r).filter("."+s.subopened).removeClass(s.hidden).add(t).slice(-i.visible.max).each(function(t){e(this).addClass(s.columns+"-"+t)})};this.bind("open",c),this.bind("close",h),this.bind("init",d),this.bind("openPanel",u),this.bind("openingPanel",c),this.bind("openedPanel",c),this.opts.offCanvas||c.call(this)}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("columns")},clickAnchor:function(t,i){if(!this.opts[n].add)return!1;if(i){var a=t.attr("href");if(a.length>1&&"#"==a.slice(0,1))try{var o=e(a,this.$menu);if(o.is("."+s.panel))for(var r=parseInt(t.closest("."+s.panel).attr("class").split(s.columns+"-")[1].split(" ")[0],10)+1;r!==!1;){var l=this.$pnls.children("."+s.columns+"-"+r);if(!l.length){r=!1;break}r++,l.removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden)}}catch(d){}}}},e[t].defaults[n]={add:!1,visible:{min:1,max:3},hideNavbars:!1};var s,i,a,o}($j),/*	
   * jQuery mmenu dividers addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="dividers";e[t].addons[n]={setup:function(){var i=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof r&&(r={add:r,fixed:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("init",function(t){this.__refactorClass(e("li",this.$menu),this.conf.classNames[n].collapsed,"collapsed")}),r.add&&this.bind("init",function(t){var n;switch(r.addTo){case"panels":n=t;break;default:n=t.filter(r.addTo)}e("."+s.divider,n).remove(),n.find("."+s.listview).not("."+s.vertical).each(function(){var t="";i.__filterListItems(e(this).children()).each(function(){var n=e.trim(e(this).children("a, span").text()).slice(0,1).toLowerCase();n!=t&&n.length&&(t=n,e('<li class="'+s.divider+'">'+n+"</li>").insertBefore(this))})})}),r.collapse&&this.bind("init",function(t){e("."+s.divider,t).each(function(){var t=e(this),n=t.nextUntil("."+s.divider,"."+s.collapsed);n.length&&(t.children("."+s.subopen).length||(t.wrapInner("<span />"),t.prepend('<a href="#" class="'+s.subopen+" "+s.fullsubopen+'" />')))})}),r.fixed){var l=function(t){t=t||this.$pnls.children("."+s.current);var n=t.find("."+s.divider).not("."+s.hidden);if(n.length){this.$menu.addClass(s.hasdividers);var i=t.scrollTop()||0,a="";t.is(":visible")&&t.find("."+s.divider).not("."+s.hidden).each(function(){e(this).position().top+i<i+1&&(a=e(this).text())}),this.$fixeddivider.text(a)}else this.$menu.removeClass(s.hasdividers)};this.$fixeddivider=e('<ul class="'+s.listview+" "+s.fixeddivider+'"><li class="'+s.divider+'"></li></ul>').prependTo(this.$pnls).children(),this.bind("openPanel",l),this.bind("update",l),this.bind("init",function(t){t.off(a.scroll+"-dividers "+a.touchmove+"-dividers").on(a.scroll+"-dividers "+a.touchmove+"-dividers",function(t){l.call(i,e(this))})})}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("collapsed uncollapsed fixeddivider hasdividers"),a.add("scroll")},clickAnchor:function(e,t){if(this.opts[n].collapse&&t){var i=e.parent();if(i.is("."+s.divider)){var a=i.nextUntil("."+s.divider,"."+s.collapsed);return i.toggleClass(s.opened),a[i.hasClass(s.opened)?"addClass":"removeClass"](s.uncollapsed),!0}}return!1}},e[t].defaults[n]={add:!1,addTo:"panels",fixed:!1,collapse:!1},e[t].configuration.classNames[n]={collapsed:"Collapsed"};var s,i,a,o}($j),/*	
   * jQuery mmenu dropdown addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="dropdown";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var r=this,l=this.opts[n],d=this.conf[n];if(o=e[t].glbl,"boolean"==typeof l&&l&&(l={drop:l}),"object"!=typeof l&&(l={}),"string"==typeof l.position&&(l.position={of:l.position}),l=this.opts[n]=e.extend(!0,{},e[t].defaults[n],l),l.drop){if("string"!=typeof l.position.of){var c=this.$menu.attr("id");c&&c.length&&(this.conf.clone&&(c=s.umm(c)),l.position.of='[href="#'+c+'"]')}if("string"==typeof l.position.of){var h=e(l.position.of);if(h.length){this.$menu.addClass(s.dropdown),l.tip&&this.$menu.addClass(s.tip),l.event=l.event.split(" "),1==l.event.length&&(l.event[1]=l.event[0]),"hover"==l.event[0]&&h.on(a.mouseenter+"-dropdown",function(){r.open()}),"hover"==l.event[1]&&this.$menu.on(a.mouseleave+"-dropdown",function(){r.close()}),this.bind("opening",function(){this.$menu.data(i.style,this.$menu.attr("style")||""),o.$html.addClass(s.dropdown)}),this.bind("closed",function(){this.$menu.attr("style",this.$menu.data(i.style)),o.$html.removeClass(s.dropdown)});var u=function(i,a){var r=a[0],c=a[1],u="x"==i?"scrollLeft":"scrollTop",p="x"==i?"outerWidth":"outerHeight",f="x"==i?"left":"top",v="x"==i?"right":"bottom",m="x"==i?"width":"height",g="x"==i?"maxWidth":"maxHeight",b=null,_=o.$wndw[u](),C=h.offset()[f]-=_,$=C+h[p](),y=o.$wndw[m](),x=d.offset.button[i]+d.offset.viewport[i];if(l.position[i])switch(l.position[i]){case"left":case"bottom":b="after";break;case"right":case"top":b="before"}null===b&&(b=y/2>C+($-C)/2?"after":"before");var w,k;return"after"==b?(w="x"==i?C:$,k=y-(w+x),r[f]=w+d.offset.button[i],r[v]="auto",c.push(s["x"==i?"tipleft":"tiptop"])):(w="x"==i?$:C,k=w-x,r[v]="calc( 100% - "+(w-d.offset.button[i])+"px )",r[f]="auto",c.push(s["x"==i?"tipright":"tipbottom"])),r[g]=Math.min(e[t].configuration[n][m].max,k),[r,c]},p=function(e){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(i.style));var t=[{},[]];t=u.call(this,"y",t),t=u.call(this,"x",t),this.$menu.css(t[0]),l.tip&&this.$menu.removeClass(s.tipleft+" "+s.tipright+" "+s.tiptop+" "+s.tipbottom).addClass(t[1].join(" "))}};this.bind("opening",p),o.$wndw.on(a.resize+"-dropdown",function(e){p.call(r)}),this.opts.offCanvas.blockUI||o.$wndw.on(a.scroll+"-dropdown",function(e){p.call(r)})}}}}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("dropdown tip tipleft tipright tiptop tipbottom"),a.add("mouseenter mouseleave resize scroll")},clickAnchor:function(e,t){}},e[t].defaults[n]={drop:!1,event:"click",position:{},tip:!0},e[t].configuration[n]={offset:{button:{x:-10,y:10},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var s,i,a,o}($j),/*	
   * jQuery mmenu dragOpen addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){function t(e,t,n){return t>e&&(e=t),e>n&&(e=n),e}var n="mmenu",s="dragOpen";e[n].addons[s]={setup:function(){if(this.opts.offCanvas){var a=this,o=this.opts[s],l=this.conf[s];if(r=e[n].glbl,"boolean"==typeof o&&(o={open:o}),"object"!=typeof o&&(o={}),o=this.opts[s]=e.extend(!0,{},e[n].defaults[s],o),o.open){var d,c,h,u,p,f={},v=0,m=!1,g=!1,b=0,_=0;switch(this.opts.offCanvas.position){case"left":case"right":f.events="panleft panright",f.typeLower="x",f.typeUpper="X",g="width";break;case"top":case"bottom":f.events="panup pandown",f.typeLower="y",f.typeUpper="Y",g="height"}switch(this.opts.offCanvas.position){case"right":case"bottom":f.negative=!0,u=function(e){e>=r.$wndw[g]()-o.maxStartPos&&(v=1)};break;default:f.negative=!1,u=function(e){e<=o.maxStartPos&&(v=1)}}switch(this.opts.offCanvas.position){case"left":f.open_dir="right",f.close_dir="left";break;case"right":f.open_dir="left",f.close_dir="right";break;case"top":f.open_dir="down",f.close_dir="up";break;case"bottom":f.open_dir="up",f.close_dir="down"}switch(this.opts.offCanvas.zposition){case"front":p=function(){return this.$menu};break;default:p=function(){return e("."+i.slideout)}}var C=this.__valueOrFn(o.pageNode,this.$menu,r.$page);"string"==typeof C&&(C=e(C));var $=new Hammer(C[0],o.vendors.hammer);$.on("panstart",function(e){u(e.center[f.typeLower]),r.$slideOutNodes=p(),m=f.open_dir}).on(f.events+" panend",function(e){v>0&&e.preventDefault()}).on(f.events,function(e){if(d=e["delta"+f.typeUpper],f.negative&&(d=-d),d!=b&&(m=d>=b?f.open_dir:f.close_dir),b=d,b>o.threshold&&1==v){if(r.$html.hasClass(i.opened))return;v=2,a._openSetup(),a.trigger("opening"),r.$html.addClass(i.dragging),_=t(r.$wndw[g]()*l[g].perc,l[g].min,l[g].max)}2==v&&(c=t(b,10,_)-("front"==a.opts.offCanvas.zposition?_:0),f.negative&&(c=-c),h="translate"+f.typeUpper+"("+c+"px )",r.$slideOutNodes.css({"-webkit-transform":"-webkit-"+h,transform:h}))}).on("panend",function(e){2==v&&(r.$html.removeClass(i.dragging),r.$slideOutNodes.css("transform",""),a[m==f.open_dir?"_openFinish":"close"]()),v=0})}}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?void(e[n].addons[s].setup=function(){}):(i=e[n]._c,a=e[n]._d,o=e[n]._e,void i.add("dragging"))},clickAnchor:function(e,t){}},e[n].defaults[s]={open:!1,maxStartPos:100,threshold:50,vendors:{hammer:{}}},e[n].configuration[s]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}};var i,a,o,r}($j),/*	
   * jQuery mmenu fixedElements addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="fixedElements";e[t].addons[n]={setup:function(){if(this.opts.offCanvas){var s=this.opts[n];this.conf[n];o=e[t].glbl,s=this.opts[n]=e.extend(!0,{},e[t].defaults[n],s);var i=function(e){var t=this.conf.classNames[n].fixed;this.__refactorClass(e.find("."+t),t,"slideout").appendTo(o.$body)};i.call(this,o.$page),this.bind("setPage",i)}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("fixed")},clickAnchor:function(e,t){}},e[t].configuration.classNames[n]={fixed:"Fixed"};var s,i,a,o}($j),/*	
   * jQuery mmenu iconPanels addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="iconPanels";e[t].addons[n]={setup:function(){var i=this,a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={add:a}),"number"==typeof a&&(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),a.visible++,a.add){this.$menu.addClass(s.iconpanel);for(var r=[],l=0;l<=a.visible;l++)r.push(s.iconpanel+"-"+l);r=r.join(" ");var d=function(t){t.hasClass(s.vertical)||i.$pnls.children("."+s.panel).removeClass(r).filter("."+s.subopened).removeClass(s.hidden).add(t).not("."+s.vertical).slice(-a.visible).each(function(t){e(this).addClass(s.iconpanel+"-"+t)})};this.bind("openPanel",d),this.bind("init",function(t){d.call(i,i.$pnls.children("."+s.current)),a.hideNavbars&&t.removeClass(s.hasnavbar),t.not("."+s.vertical).each(function(){e(this).children("."+s.subblocker).length||e(this).prepend('<a href="#'+e(this).closest("."+s.panel).attr("id")+'" class="'+s.subblocker+'" />')})})}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("iconpanel subblocker")},clickAnchor:function(e,t){}},e[t].defaults[n]={add:!1,visible:3,hideNavbars:!1};var s,i,a,o}($j),/*	
   * jQuery mmenu navbar addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars";e[t].addons[n]={setup:function(){var i=this,a=this.opts[n],r=this.conf[n];if(o=e[t].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);var l={};e.each(a,function(o){var d=a[o];"boolean"==typeof d&&d&&(d={}),"object"!=typeof d&&(d={}),"undefined"==typeof d.content&&(d.content=["prev","title"]),d.content instanceof Array||(d.content=[d.content]),d=e.extend(!0,{},i.opts.navbar,d);var c=d.position,h=d.height;"number"!=typeof h&&(h=1),h=Math.min(4,Math.max(1,h)),"bottom"!=c&&(c="top"),l[c]||(l[c]=0),l[c]++;var u=e("<div />").addClass(s.navbar+" "+s.navbar+"-"+c+" "+s.navbar+"-"+c+"-"+l[c]+" "+s.navbar+"-size-"+h);l[c]+=h-1;for(var p=0,f=0,v=d.content.length;v>f;f++){var m=e[t].addons[n][d.content[f]]||!1;m?p+=m.call(i,u,d,r):(m=d.content[f],m instanceof e||(m=e(d.content[f])),u.append(m))}p+=Math.ceil(u.children().not("."+s.btn).not("."+s.title+"-prev").length/h),p>1&&u.addClass(s.navbar+"-content-"+p),u.children("."+s.btn).length&&u.addClass(s.hasbtns),u.prependTo(i.$menu)});for(var d in l)i.$menu.addClass(s.hasnavbar+"-"+d+"-"+l[d])}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("close hasbtns")},clickAnchor:function(e,t){}},e[t].configuration[n]={breadcrumbSeparator:"/"},e[t].configuration.classNames[n]={};var s,i,a,o}($j),/*	
   * jQuery mmenu navbar addon breadcrumbs content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",s="breadcrumbs";e[t].addons[n][s]=function(n,s,i){var a=e[t]._c,o=e[t]._d;a.add("breadcrumbs separator");var r=e('<span class="'+a.breadcrumbs+'" />').appendTo(n);this.bind("init",function(t){t.removeClass(a.hasnavbar).each(function(){for(var t=[],n=e(this),s=e('<span class="'+a.breadcrumbs+'"></span>'),r=e(this).children().first(),l=!0;r&&r.length;){r.is("."+a.panel)||(r=r.closest("."+a.panel));var d=r.children("."+a.navbar).children("."+a.title).text();t.unshift(l?"<span>"+d+"</span>":'<a href="#'+r.attr("id")+'">'+d+"</a>"),l=!1,r=r.data(o.parent)}s.append(t.join('<span class="'+a.separator+'">'+i.breadcrumbSeparator+"</span>")).appendTo(n.children("."+a.navbar))})});var l=function(){r.html(this.$pnls.children("."+a.current).children("."+a.navbar).children("."+a.breadcrumbs).html())};return this.bind("openPanel",l),this.bind("init",l),0}}($j),/*	
   * jQuery mmenu navbar addon close content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",s="close";e[t].addons[n][s]=function(n,s){var i=e[t]._c,a=e[t].glbl,o=e('<a class="'+i.close+" "+i.btn+'" href="#" />').appendTo(n),r=function(e){o.attr("href","#"+e.attr("id"))};return r.call(this,a.$page),this.bind("setPage",r),-1}}($j),/*	
   * jQuery mmenu navbar addon next content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",s="next";e[t].addons[n][s]=function(s,i){var a,o,r=e[t]._c,l=e('<a class="'+r.next+" "+r.btn+'" href="#" />').appendTo(s),d=function(e){e=e||this.$pnls.children("."+r.current);var t=e.find("."+this.conf.classNames[n].panelNext);a=t.attr("href"),o=t.html(),l[a?"attr":"removeAttr"]("href",a),l[a||o?"removeClass":"addClass"](r.hidden),l.html(o)};return this.bind("openPanel",d),this.bind("init",function(){d.call(this)}),-1},e[t].configuration.classNames[n].panelNext="Next"}($j),/*	
   * jQuery mmenu navbar addon prev content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",s="prev";e[t].addons[n][s]=function(s,i){var a=e[t]._c,o=e('<a class="'+a.prev+" "+a.btn+'" href="#" />').appendTo(s);this.bind("init",function(e){e.removeClass(a.hasnavbar).children("."+a.navbar).addClass(a.hidden)});var r,l,d=function(e){if(e=e||this.$pnls.children("."+a.current),!e.hasClass(a.vertical)){var t=e.find("."+this.conf.classNames[n].panelPrev);t.length||(t=e.children("."+a.navbar).children("."+a.prev)),r=t.attr("href"),l=t.html(),o[r?"attr":"removeAttr"]("href",r),o[r||l?"removeClass":"addClass"](a.hidden),o.html(l)}};return this.bind("openPanel",d),this.bind("init",function(){d.call(this)}),-1},e[t].configuration.classNames[n].panelPrev="Prev"}($j),/*	
   * jQuery mmenu navbar addon searchfield content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",s="searchfield";e[t].addons[n][s]=function(n,s){var i=e[t]._c,a=e('<div class="'+i.search+'" />').appendTo(n);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=a,0}}($j),/*	
   * jQuery mmenu navbar addon title content
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="navbars",s="title";e[t].addons[n][s]=function(s,i){var a,o,r=e[t]._c,l=e('<a class="'+r.title+'" />').appendTo(s),d=function(e){if(e=e||this.$pnls.children("."+r.current),!e.hasClass(r.vertical)){var t=e.find("."+this.conf.classNames[n].panelTitle);t.length||(t=e.children("."+r.navbar).children("."+r.title)),a=t.attr("href"),o=t.html()||i.title,l[a?"attr":"removeAttr"]("href",a),l[a||o?"removeClass":"addClass"](r.hidden),l.html(o)}};return this.bind("openPanel",d),this.bind("init",function(e){d.call(this)}),0},e[t].configuration.classNames[n].panelTitle="Title"}($j),/*	
   * jQuery mmenu screenReader addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){function t(e,t,n){e.prop("aria-"+t,n)[n?"attr":"removeAttr"]("aria-"+t,"true")}function n(e){return'<span class="'+a.sronly+'">'+e+"</span>"}var s="mmenu",i="screenReader";e[s].addons[i]={setup:function(){var o=this.opts[i],r=this.conf[i];if(l=e[s].glbl,"boolean"==typeof o&&(o={aria:o,text:o}),"object"!=typeof o&&(o={}),o=this.opts[i]=e.extend(!0,{},e[s].defaults[i],o),o.aria){if(this.opts.offCanvas){var d=function(){t(this.$menu,"hidden",!1)},c=function(){t(this.$menu,"hidden",!0)};this.bind("open",d),this.bind("close",c),c.call(this)}var h=function(){t(this.$menu.find("."+a.hidden),"hidden",!0),t(this.$menu.find('[aria-hidden="true"]').not("."+a.hidden),"hidden",!1)},u=function(e){t(this.$pnls.children("."+a.panel).not(e).not("."+a.hidden),"hidden",!0),t(e,"hidden",!1)};this.bind("update",h),this.bind("openPanel",h),this.bind("openPanel",u);var p=function(e){t(e.find("."+a.prev+", ."+a.next),"haspopup",!0)};this.bind("init",p),p.call(this,this.$menu.children("."+a.navbar))}if(o.text){var f=function(t){t.children("."+a.navbar).children("."+a.prev).html(n(r.text.closeSubmenu)).end().children("."+a.next).html(n(r.text.openSubmenu)).end().children("."+a.close).html(n(r.text.closeMenu)),t.is("."+a.panel)&&t.find("."+a.listview).find("."+a.next).each(function(){e(this).html(n(r.text[e(this).parent().is("."+a.vertical)?"toggleSubmenu":"openSubmenu"]))})};this.bind("init",f),f.call(this,this.$menu)}},add:function(){a=e[s]._c,o=e[s]._d,r=e[s]._e,a.add("sronly")},clickAnchor:function(e,t){}},e[s].defaults[i]={aria:!1,text:!1},e[s].configuration[i]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}};var a,o,r,l}($j),/*	
   * jQuery mmenu searchfield addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){function t(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var n="mmenu",s="searchfield";e[n].addons[s]={setup:function(){var l=this,d=this.opts[s],c=this.conf[s];r=e[n].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),"boolean"==typeof d.resultsPanel&&(d.resultsPanel={add:d.resultsPanel}),d=this.opts[s]=e.extend(!0,{},e[n].defaults[s],d),c=this.conf[s]=e.extend(!0,{},e[n].configuration[s],c),this.bind("close",function(){this.$menu.find("."+i.search).find("input").blur()}),this.bind("init",function(n){if(d.add){var r;switch(d.addTo){case"panels":r=n;break;default:r=this.$menu.find(d.addTo)}if(r.each(function(){var t=e(this);if(!t.is("."+i.panel)||!t.is("."+i.vertical)){if(!t.children("."+i.search).length){var n=l.__valueOrFn(c.clear,t),s=l.__valueOrFn(c.form,t),a=l.__valueOrFn(c.input,t),r=l.__valueOrFn(c.submit,t),h=e("<"+(s?"form":"div")+' class="'+i.search+'" />'),u=e('<input placeholder="'+d.placeholder+'" type="text" autocomplete="off" />');h.append(u);var p;if(a)for(p in a)u.attr(p,a[p]);if(n&&e('<a class="'+i.btn+" "+i.clear+'" href="#" />').appendTo(h).on(o.click+"-searchfield",function(e){e.preventDefault(),u.val("").trigger(o.keyup+"-searchfield")}),s){for(p in s)h.attr(p,s[p]);r&&!n&&e('<a class="'+i.btn+" "+i.next+'" href="#" />').appendTo(h).on(o.click+"-searchfield",function(e){e.preventDefault(),h.submit()})}t.hasClass(i.search)?t.replaceWith(h):t.prepend(h).addClass(i.hassearch)}if(d.noResults){var f=t.closest("."+i.panel).length;if(f||(t=l.$pnls.children("."+i.panel).first()),!t.children("."+i.noresultsmsg).length){var v=t.children("."+i.listview).first();e('<div class="'+i.noresultsmsg+" "+i.hidden+'" />').append(d.noResults)[v.length?"insertAfter":"prependTo"](v.length?v:t)}}}}),d.search){if(d.resultsPanel.add){d.showSubPanels=!1;var h=this.$pnls.children("."+i.resultspanel);h.length||(h=e('<div class="'+i.panel+" "+i.resultspanel+" "+i.hidden+'" />').appendTo(this.$pnls).append('<div class="'+i.navbar+" "+i.hidden+'"><a class="'+i.title+'">'+d.resultsPanel.title+"</a></div>").append('<ul class="'+i.listview+'" />').append(this.$pnls.find("."+i.noresultsmsg).first().clone()),this.init(h))}this.$menu.find("."+i.search).each(function(){var n,r,c=e(this),u=c.closest("."+i.panel).length;u?(n=c.closest("."+i.panel),r=n):(n=e("."+i.panel,l.$menu),r=l.$menu),d.resultsPanel.add&&(n=n.not(h));var p=c.children("input"),f=l.__findAddBack(n,"."+i.listview).children("li"),v=f.filter("."+i.divider),m=l.__filterListItems(f),g="a",b=g+", span",_="",C=function(){var t=p.val().toLowerCase();if(t!=_){if(_=t,d.resultsPanel.add&&h.children("."+i.listview).empty(),n.scrollTop(0),m.add(v).addClass(i.hidden).find("."+i.fullsubopensearch).removeClass(i.fullsubopen+" "+i.fullsubopensearch),m.each(function(){var t=e(this),n=g;(d.showTextItems||d.showSubPanels&&t.find("."+i.next))&&(n=b);var s=t.data(a.searchtext)||t.children(n).text();s.toLowerCase().indexOf(_)>-1&&t.add(t.prevAll("."+i.divider).first()).removeClass(i.hidden)}),d.showSubPanels&&n.each(function(t){var n=e(this);l.__filterListItems(n.find("."+i.listview).children()).each(function(){var t=e(this),n=t.data(a.sub);t.removeClass(i.nosubresults),n&&n.find("."+i.listview).children().removeClass(i.hidden)})}),d.resultsPanel.add)if(""===_)this.closeAllPanels(),this.openPanel(this.$pnls.children("."+i.subopened).last());else{var s=e();n.each(function(){var t=l.__filterListItems(e(this).find("."+i.listview).children()).not("."+i.hidden).clone(!0);t.length&&(d.resultsPanel.dividers&&(s=s.add('<li class="'+i.divider+'">'+e(this).children("."+i.navbar).text()+"</li>")),s=s.add(t))}),s.find("."+i.next).remove(),h.children("."+i.listview).append(s),this.openPanel(h)}else e(n.get().reverse()).each(function(t){var n=e(this),s=n.data(a.parent);s&&(l.__filterListItems(n.find("."+i.listview).children()).length?(s.hasClass(i.hidden)&&s.children("."+i.next).not("."+i.fullsubopen).addClass(i.fullsubopen).addClass(i.fullsubopensearch),s.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("."+i.divider).first().removeClass(i.hidden)):u||(n.hasClass(i.opened)&&setTimeout(function(){l.openPanel(s.closest("."+i.panel))},(t+1)*(1.5*l.conf.openingInterval)),s.addClass(i.nosubresults)))});r.find("."+i.noresultsmsg)[m.not("."+i.hidden).length?"addClass":"removeClass"](i.hidden),this.update()}};p.off(o.keyup+"-"+s+" "+o.change+"-"+s).on(o.keyup+"-"+s,function(e){t(e.keyCode)||C.call(l)}).on(o.change+"-"+s,function(e){C.call(l)});var $=c.children("."+i.btn);$.length&&p.on(o.keyup+"-"+s,function(e){$[p.val().length?"removeClass":"addClass"](i.hidden)}),p.trigger(o.keyup+"-"+s)})}}})},add:function(){i=e[n]._c,a=e[n]._d,o=e[n]._e,i.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"),a.add("searchtext"),o.add("change keyup")},clickAnchor:function(e,t){}},e[n].defaults[s]={add:!1,addTo:"panels",placeholder:"Search",noResults:"No results found.",resultsPanel:{add:!1,dividers:!0,title:"Search results"},search:!0,showTextItems:!1,showSubPanels:!0},e[n].configuration[s]={clear:!1,form:!1,input:!1,submit:!1};var i,a,o,r}($j),/*	
   * jQuery mmenu sectionIndexer addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="sectionIndexer";e[t].addons[n]={setup:function(){var i=this,r=this.opts[n];this.conf[n];o=e[t].glbl,"boolean"==typeof r&&(r={add:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),this.bind("init",function(t){if(r.add){var n;switch(r.addTo){case"panels":n=t;break;default:n=e(r.addTo,this.$menu).filter("."+s.panel)}n.find("."+s.divider).closest("."+s.panel).addClass(s.hasindexer)}if(!this.$indexer&&this.$pnls.children("."+s.hasindexer).length){this.$indexer=e('<div class="'+s.indexer+'" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),this.$indexer.children().on(a.mouseover+"-sectionindexer "+s.touchstart+"-sectionindexer",function(t){var n=e(this).attr("href").slice(1),a=i.$pnls.children("."+s.current),o=a.find("."+s.listview),r=!1,l=a.scrollTop();a.scrollTop(0),o.children("."+s.divider).not("."+s.hidden).each(function(){r===!1&&n==e(this).text().slice(0,1).toLowerCase()&&(r=e(this).position().top)}),a.scrollTop(r!==!1?r:l)});var o=function(e){i.$menu[(e.hasClass(s.hasindexer)?"add":"remove")+"Class"](s.hasindexer)};this.bind("openPanel",o),o.call(this,this.$pnls.children("."+s.current))}})},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("indexer hasindexer"),a.add("mouseover touchstart")},clickAnchor:function(e,t){return e.parent().is("."+s.indexer)?!0:void 0}},e[t].defaults[n]={add:!1,addTo:"panels"};var s,i,a,o}($j),/*	
   * jQuery mmenu setSelected addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="setSelected";e[t].addons[n]={setup:function(){var a=this.opts[n];this.conf[n];if(o=e[t].glbl,"boolean"==typeof a&&(a={hover:a,parent:a}),"object"!=typeof a&&(a={}),a=this.opts[n]=e.extend(!0,{},e[t].defaults[n],a),a.current||this.bind("init",function(e){e.find("."+s.listview).children("."+s.selected).removeClass(s.selected)}),a.hover&&this.$menu.addClass(s.hoverselected),a.parent){this.$menu.addClass(s.parentselected);var r=function(e){this.$pnls.find("."+s.listview).find("."+s.next).removeClass(s.selected);for(var t=e.data(i.parent);t&&t.length;)t=t.children("."+s.next).addClass(s.selected).closest("."+s.panel).data(i.parent)};this.bind("openedPanel",r),this.bind("init",function(e){r.call(this,this.$pnls.children("."+s.current))})}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("hoverselected parentselected")},clickAnchor:function(e,t){}},e[t].defaults[n]={current:!0,hover:!1,parent:!1};var s,i,a,o}($j),/*	
   * jQuery mmenu toggles addon
   * mmenu.frebsite.nl
   *
   * Copyright (c) Fred Heusschen
   */
  function(e){var t="mmenu",n="toggles";e[t].addons[n]={setup:function(){var i=this;this.opts[n],this.conf[n];o=e[t].glbl,this.bind("init",function(t){this.__refactorClass(e("input",t),this.conf.classNames[n].toggle,"toggle"),this.__refactorClass(e("input",t),this.conf.classNames[n].check,"check"),e("input."+s.toggle+", input."+s.check,t).each(function(){var t=e(this),n=t.closest("li"),a=t.hasClass(s.toggle)?"toggle":"check",o=t.attr("id")||i.__getUniqueId();n.children('label[for="'+o+'"]').length||(t.attr("id",o),n.prepend(t),e('<label for="'+o+'" class="'+s[a]+'"></label>').insertBefore(n.children("a, span").last()))})})},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("toggle check")},clickAnchor:function(e,t){}},e[t].configuration.classNames[n]={toggle:"Toggle",check:"Check"};var s,i,a,o}($j);
  
  var mmenuObj = "";
  
  $j(document).ready(function() {
      
      $j(".mobi-topnavigation").mmenu({
          "extensions": [
              "pagedim-black"
          ],
          "navbars": [
         /* {
            "position": "bottom",
             "content": ["<ul class='mmenuFooter'>"+footerContent+"</ul>"]
          },*/
          {
            "position": "top",
            "content": ["<span class='mmenu-closed hambg icon-close-im'></span>"]
          }
        ],
          "offCanvas": {
              "position": "right",
              "zposition": "front"
          },
          "position": {
              "top": "0px"
          },
          "autoHeight": false,
          "slidingSubmenus": false,
          "iconPanels": true,
          "sectionIndexer": true
      }, {
          "offCanvas": {
              "pageSelector": "#MainForm"
          }
      });
  var api = $j('#mmenu').data('mmenu');
  api.bind('opened', function () {
          
      setTimeout(function(){ $j("#mm-blocker").addClass("showClose");},200);
  });
  api.bind('closing',function(){
      $j(".mm-panels .top-links .rad-loginBtn .rad-loginBtnChild").removeClass("shownav").hide();
  });
  api.bind('closed', function () {
      
      setTimeout(function(){ $j("#mm-blocker").removeClass("showClose");},200);   
  });
      /*var exLink = $j(".header-right .top-links").html();
      alert(exLink);*/
     
  var exLink = $j(".header-right .top-links").html();
      
      $j("<div class='top-links'>" + exLink + "</div>").appendTo(".mm-listview");
     
     
  
      $j(".me.mm-panel").each(function() {
          $j(this).prepend("<div class='mmenu-top-content-panel'><div class='mmenu-header-container clearfix'><div class='mmenu-back-button-container'></div></div></div>");
          $j(this).find(".mmenu-back-button-container").html($j(this).find(".mm-navbar .mm-prev").clone());
          $j(this).find(".mmenu-back-button-container").children("a").addClass("rad-link reverse");
  
      });
  
  
  if(window.location.href.indexOf('site-services') > -1){
      
    }
    else{
      if(!$j('#mmenu ul li').hasClass('current')){    
        var cur = $j('#mmenu ul li.selected.haschildren').last().find('.mm-next').attr('href');
        $j('.mm-panel').removeClass('mm-current mm-opened');
        $j(cur).addClass('mm-current mm-opened').removeClass('mm-hidden');
      }
      else{
        var cur = $j('#mmenu ul li.current').closest('.mm-panel');
        $j('.mm-panel').removeClass('mm-current mm-opened');
        $j(cur).addClass('mm-current mm-opened').removeClass('mm-hidden');           
      }
      
    }
    
    if (!$j('.mm-panels > div').hasClass('mm-current mm-opened')) {
      $j('#mm-0').addClass('mm-current mm-opened').removeClass('mm-hidden');        
    }
    
    
      $j('.mmenu-closed').click(function() {
      if ($j("html").hasClass("mm-opened")) {
      $j("#mmenu").data("mmenu").close();
      }
    });
  
      $j(".mm-prev").each(function() {
          $j(this).html("Back");
      });
  
  
      $j(".global-skip-to-main-content").prependTo("body");
  
  
  });
  
  $j(window).resize(function(){
  
      if($j(window).width()>991){
          
  var API = $j(".mobi-topnavigation").data( "mmenu" );
       
           API.close();
       
      }
      
       $j(".mm-next").append('<span class="invisible">Click to view menu</span>'); 
  });
  
  
  /*!---- portfolio-filter-----*/
  var showChar = 50;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "<span class='sm'>show more</span>";
  var lesstext = "<span class='sl'>show less</span>";
  
  function generateShowmoreLink(){
    // Configure/customize these variables.
    $j('.portfolio-module .portfolio-wrapper .portfolio-content').each(function() {
      var content = $j(this).html();
      
      if(content.length > showChar) {
        
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
        
        var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span></span>';
        
        $j(this).html(html);
        $j(this).prev().append('<a href="javascript:;" class="morelink">' + moretext + '</a>');      
      }
    });
    
    
    /*load more js based*/
    /*
    $j(".portfolio-loadmore").fadeIn('slow');
    if($j(".portfolio-item-wrapper").length <=3){
      $j(".portfolio-loadmore").hide();
    }
    $j(".portfolio-item-wrapper").addClass('hide');
    $j(".portfolio-item-wrapper").slice(0, 3).addClass('show').removeClass('hide');
    
    */
  }
  
  
  $j(document).ready(function(){
    
    /*showmore + show less with js*/
    generateShowmoreLink();
    
    //$j(".portfolio-module  .morelink").click(function(){
    $j(".portfolio-module").on('click', '.morelink', function(){
      if($j(this).hasClass("less")) {
        $j(this).removeClass("less");
        $j(this).html(moretext);
        $j(this).parent().next().find('.morecontent').hide();
        $j(this).parent().next().removeClass('opened');
      }else{
        $j(this).addClass("less");
        $j(this).html(lesstext);
        $j(this).parent().next().find('.morecontent').show();
        $j(this).parent().next().addClass('opened');
      }
      
      return false;
    });
    
    $j(".portfolio-module").on('click', '.portfolio-image', function(){
      $j(this).next('.portfolio-details').find('.morelink').trigger('click');
    });
    
    
    var contacts = $j('.data-wrapper-inner'), cont = contacts.children('.portfolio-item');
    
    cont.detach().sort(function(a,b) {
      if ($j(a).data('value') === $j(b).data('value')) {
        if ($j(a).data('value1') === $j(b).data('value1')) {
          return ($j(a).data('value2') < $j(b).data('value2')) ? -1 : ($j(a).data('value2') > $j(b).data('value2')) ? 1 : 0;
        } else {
          return ($j(a).data('value1') < $j(b).data('value1')) ? -1 : 1;
        }
      } else {
        return ($j(a).data('value') < $j(b).data('value')) ? 1 : -1;
      }
    });
    
    contacts.append(cont);
    
    //alert('done');
    /*
    $j('.portfolio-item-wrapper').getSameTopGroups({
      commonParent: '.data-wrapper-inner'
    }, function(gc) {
      for (i = 1; i <= gc; i++) {
        setEqualHeight_CommonClass(".gg-g-" + i);
        
      }    
    });
    */
    
    
    
    $j('.droplist-container li a').click(function(){
      $j(".masterDIV > div > div").remove();
      $j(this).closest('ul').find('a.active').removeClass('active');
      $j(this).addClass('active');
      //$j(this).addClass('active');
      var sText = $j(this).text();
      var link = '<a href="javascript:;">';
      $j(this).parents('.dd-wrap').find('span.drp-list').html(link + sText + '</a>');
      $j('.droplist-container li a').parents('.dd-wrap').siblings('.dd-wrap').find('ul').slideUp();
      //$j(this).closest('ul').find('a.active').removeClass('active');
      $j('.filter-inner-wrapper span.drp-list').removeClass('active');
      
      
      /*
      if($j('.data-wrapper-inner > div.hideforshowmore').length > 12){
        $j('.global-button').show();
      }else{
        $j('.global-button').hide();
      }
      */
      
      
      
      
      $j('.data-wrapper-inner').removeClass('tempClass');
      var myClick;
      myClick = $j(this).data('itemname');
      
      
      var active_arr =  [];
      
      $j('.droplist-container li a.active').each(function(){
        active_arr.push($j(this).attr('data-itemname'));
      });
      
      
      $j('.portfolio-item').addClass('hideresult');
      
      $j('.portfolio-item').each(function(){
        
        var count = 0;
        var $this=$j(this);
        
        for(var i=0;i<=(active_arr.length-1);i++){
          if($this.hasClass(active_arr[i])){
            count++;
          }
        }
        
        //console.log(count + ':'+ active_arr.length);
        
        if(count == active_arr.length){
          $this.removeClass('hideresult');
        }
        
      });
      
      /* Filter Load More */
      
      $j(".masterDIV > div > div").remove();
      
      //$j('.data-wrapper .data-wrapper-inner > div.all:not(".hideresult")').length();
      
      //$j('.data-wrapper .data-wrapper-inner > div.hideforshowmore:not(".hideresult")').clone().appendTo(".masterDIV > .data-wrapper-inner");
      
      $j('.data-wrapper .data-wrapper-inner > div.all:not(".hideresult")').clone().appendTo(".masterDIV > .data-wrapper-inner");
      
      $j(".masterDIV > .data-wrapper-inner > div").removeClass('hideforshowmore').addClass('hideforshowmoreNEW');
      
      
      if($j(".masterDIV .portfolio-item").length === 0){
        $j('<div class="no-data col-xs-12"><p>No match found</p></div>').appendTo(".masterDIV > .data-wrapper-inner");
      }
      
      
      var divs = $j(".masterDIV .data-wrapper-inner > div");
      for(var i = 0; i < divs.length; i+=4) {
        divs.slice(i, i+4).wrapAll("<div class='portfolio-item-wrapper show-pc'></div>");
      }
      
      //$j(".portfolio-loadmore-main").fadeIn('slow');
      $j(".portfolio-loadmore-main").show();
      if($j(".portfolio-item-wrapper").length <=3){
        $j(".portfolio-loadmore-main").hide();
        
      }
      $j(".portfolio-item-wrapper").addClass('hide-pc');
      $j(".portfolio-item-wrapper").slice(0, 3).addClass('show-pc').removeClass('hide-pc');
      
      /* Filter Load More */
      
    });
    
    
    /*
    $j(".data-wrapper-inner > div").each(function(i){
      if($j(this).css('display') == 'block'){
        if(i > 11)
        {
          $j(this).addClass('hideforshowmore');
          //$j(this).hide();
        }
      }
    });
    
    size_li = $j(".data-wrapper-inner > div:not('hideresult')").length;
    x=0;
    
    $j('.data-wrapper-inner > div:not("hideresult"):lt('+x+')').removeClass('hideforshowmore');
    //$j('.data-wrapper-inner > div:not("hideresult"):lt('+x+')').show();
    */
    
    
    $j(document).on('click','.portfolio-loadmore-main a', function (e) {
      e.preventDefault();
      $j(".portfolio-item-wrapper.hide-pc").slice(0, 3).addClass('show-pc').removeClass('hide-pc');
      if ($j(".masterDIV .portfolio-item-wrapper:hidden").length == 0) {
        $j(".portfolio-loadmore-main").hide();
      }    
    });
    
    
    //$j('.global-button-main').click(function () {    
      /*
      x= (x+12 <= size_li) ? x+12 : size_li;
      $j('.data-wrapper-inner > div:not("hideresult"):lt('+x+')').removeClass('hideforshowmore');
      //$j('.data-wrapper-inner > div:not("hideresult"):lt('+x+')').show();
      
      if(!$j('.masterDIV .data-wrapper-inner > div.hideforshowmore').length > 0)
      {
        $j('.portfolio-loadmore-main').hide();
      }
      */
      /*
      $j(".portfolio-loadmore").fadeIn('slow');
      if($j(".portfolio-item-wrapper").length <=3){
        $j(".portfolio-loadmore").hide();
      }
      $j(".portfolio-item-wrapper").addClass('hide-pc');
      $j(".portfolio-item-wrapper").slice(0, 3).addClass('show-pc').removeClass('hide-pc');
      */
    //});
    
  });
  
  
  
  $j(window).load(function(){
    $j(".data-wrapper-inner").clone().appendTo(".masterDIV");
    
    
    var divs = $j(".masterDIV .data-wrapper-inner > div");
    for(var i = 0; i < divs.length; i+=4) {
      divs.slice(i, i+4).wrapAll("<div class='portfolio-item-wrapper show-pc'></div>");
    }
    
    $j(".portfolio-loadmore-main").fadeIn('slow');
    if($j(".portfolio-item-wrapper").length <=3){
      $j(".portfolio-loadmore-main").hide();
    }
    $j(".portfolio-item-wrapper").addClass('hide-pc');
    $j(".portfolio-item-wrapper").slice(0, 3).addClass('show-pc').removeClass('hide-pc');
    
    
    
    
  });
  /*!---- positions-filter-----*/
  var positionsTable;
  
  function makePositionsDataTable(){
    if($j('.positions-list-table-wrapper .sort-table').length>0){
      
      var positionsTableLoad=false;
      positionsTable = $j('.positions-list-table-wrapper .sort-table').DataTable({
        paging: true,
        pagingType:'numbers',
        searching:false,
        "language": {
          "info": "Showing _START_–_END_ of _TOTAL_"
        },
        "pageLength": 10,
        "lengthChange": false,
        "initComplete": function(settings, json) {
          var tableID=settings.sTableId;
          if($j('#'+tableID).parents('div.scroll-table-container').length < 1){
            $j('#'+tableID).wrap('<div class="scroll-table-container"></div>');
          }
        },
        "fnDrawCallback": function( oSettings ) {
          if(positionsTableLoad){
            var tableID=oSettings.sTableId;
            var offsetTop=$j('#'+tableID).offset().top;
            $j('html,body').animate({scrollTop:offsetTop-$j('#headerwrapper').outerHeight()},500);
          }
        }
      });
      positionsTableLoad=true;
    }
  }
  
   var positionDepartment = [];
      var positionLocation = [];
  function test($this){
  var value;
     
      if($this.hasClass('.show-all-link')){
          if($this.closest('.departments-section').length){
              positionDepartment = ["all"];
          }
          if($this.closest('.locations-section').length){
              positionLocation = ["all"];
          }
          
        
        
      }
  
      if($this.closest('.positions-filter-section.departments-section').length){
        positionDepartment.length = 0;
        $this.closest('.positions-filter-section').find('.positions-filter-item').each(function(){
          if($j(this).find('input[type="checkbox"]').prop("checked")){
            value = $j(this).find('input[type="checkbox"]').attr('data-department');
            positionDepartment.push(value);
          }
          
        });
      }
      if($this.closest('.positions-filter-section.locations-section').length){
        positionLocation.length = 0;
        $this.closest('.positions-filter-section').find('.positions-filter-item').each(function(){
          if($j(this).find('input[type="checkbox"]').prop("checked")){
            value = $j(this).find('input[type="checkbox"]').attr('data-location');
            positionLocation.push(value);
          }
        });
      }
      
      return {
       positionDepartment: positionDepartment,
       positionLocation: positionLocation
      };
      
      
  }
  
  function filterData(positionDepartment, positionLocation){
  var positionDepartmentString;
  var positionLocationString;
  if($j.inArray("all",positionDepartment) !== -1){
      positionDepartmentString = "*";
  }
  else{
       positionDepartmentString = positionDepartment.toString();
        if(positionDepartment.length){
          positionDepartmentString = positionDepartmentString.toString();  
        }
        else{
          positionDepartmentString = "*";
        }
  }
  
  if($j.inArray("all",positionLocation) !== -1){
      positionLocationString = "*";
  }
  else{
    positionLocationString = positionLocation.toString();
    if(positionLocation.length){
      positionLocationString = positionLocationString.toString();  
    }
    else{
      positionLocationString = "*";
    }
  }
  
  
  
    
    
    
    
    currURL = window.location.href;
    tmp = currURL.split("/");
    protocol = tmp[0] + "//";
    $j.ajax({
      url:protocol+location.host+positionsAsyncUrl+"?async=1&department="+positionDepartmentString+"&location="+positionLocationString,
      type:"get",
      success:function(data){
          positionsTable.destroy();
          $j('.positions-list-table-wrapper').html(data); 
          makePositionsDataTable();
  
      }
    });
  }
  
  $j(document).ready(function(){
    var positionDepartment = [];
    var positionLocation = [];
    $j('.positions-section-wrapper .positions-filter-wrapper ul li input[type="checkbox"]').change(function() {
      /*var selectedArea=$j(this).parents('.positions-filter-section');
       
       var totalChk=selectedArea.find('.positions-filter-item input[type="checkbox"]').length;
       var totalSelChk=selectedArea.find('.positions-filter-item input[type="checkbox"]:checked').length;
       
       if(totalChk==totalSelChk){
         alert('IF');
       }else{
           console.log(selectedArea);
         selectedArea.find('.mob-filter-item-all').removeClass('active');
       }*/
       
       
        /*if($j(this).closest('.departments-section').length){
        if ($j(this).prop("checked")) {
          positionDepartment.push($j(this).attr('data-department'));
        }
        else{
          var removeMe = positionDepartment.indexOf($j(this).attr('data-department'));
          if(removeMe != -1) {
            positionDepartment.splice(removeMe, 1);
          }
        }
      }
      if($j(this).closest('.locations-section').length){
        if ($j(this).prop("checked")) {
          positionLocation.push($j(this).attr('data-location'));
        }
        else{
          var removeMe = positionLocation.indexOf($j(this).attr('data-location'));
          if(removeMe != -1) {
            positionLocation.splice(removeMe, 1);
          }
        }
      }*/
      var op = test($j(this));
    positionDepartment = op.positionDepartment;
    positionLocation = op.positionLocation;
      
      if ($j(this).prop("checked")) {
          $j(this).parent().children('label').addClass('active');
      }
      else{
          $j(this).parent().children('label').removeClass('active');
      }
      
      
      filterData(positionDepartment,positionLocation);
    });
    
    currWidth = viewport().width;
    if(currWidth<768){
      
      $j('.positions-filter-section .filter-title').click(function(){
        if($j(this).hasClass('active')){
          
          $j(this).parent().find('ul').slideUp();
          $j(this).removeClass('active');
        }else{
          $j('.positions-filter-section .filter-title').removeClass('active');
          $j(this).addClass('active');
          
          $j(this).parents('.positions-filter-wrapper').find('ul').slideUp();
          $j(this).parent().find('ul').slideDown();
        }
      });
      
      $j('.mob-positions-filter-item').click(function(){
          $j(this).parents('.positions-filter-section').find('.show-all-link').trigger('click');
      });
      
    }
    
  });
  function unique(list) {
      var result = [];
      $j.each(list, function(i, e) {
          if ($j.inArray(e, result) == -1) result.push(e);
      });
      return result;
  }
  $j(window).load(function(){
      makePositionsDataTable();
  
    if($j('.positions-section-wrapper').length>0){
      positionsAsyncUrl = $j('.positions-section-wrapper').attr('data-section');
    }
    
    $j('.positions-filter-wrapper').on('click','.show-all-link',function(){
      //$j(this).closest('.positions-filter-section').find('label').not('.active').trigger('click');
      $j(this).closest('.positions-filter-section').find('input[type="checkbox"]').prop('checked','true');
      
      var op = test($j(this));
      positionDepartment = op.positionDepartment;
    positionLocation = op.positionLocation;
      filterData(positionDepartment,positionLocation);
    });
    
    
    var locationsList = [];
    var departmentsList = [];
    $j('.positions-list-table-wrapper .col-department').each(function(){
      departmentsList.push($j(this).text().trim().toLowerCase().split(' ').join('-'));
    });
    $j('.positions-list-table-wrapper .col-location').each(function(){
      locationsList.push($j(this).text().trim().toLowerCase().split(' ').join('-'));
    });
    
    locationsList = unique(locationsList);
    departmentsList = unique(departmentsList);
    
    
    $j('.positions-filter-section.departments-section').find('.positions-filter-item').each(function(){
      var value = $j(this).find('input[type="checkbox"]').attr('data-department');
      if($j.inArray(value,departmentsList) == -1){
        ////Remove this and do not hide
        $j(this).remove();
      }
    });
    $j('.positions-filter-section.locations-section').find('.positions-filter-item').each(function(){
      var value = $j(this).find('input[type="checkbox"]').attr('data-location');
      if($j.inArray(value,locationsList) == -1){
        //Remove this and do not hide
        $j(this).remove();
      }
    });
    
    
  });
  /*!---- respond-----*/
  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
  /*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
  window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);
  
  /*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
  (function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
  /*!---- smooth-scroll-----*/
  if($j('body').hasClass('internetexplorer11') || $j('body').hasClass('ie9') || $j('body').hasClass('ie10')){ 
      if (window.addEventListener)
      {
          window.addEventListener('DOMMouseScroll', wheel, false);
      }
      window.onmousewheel = document.onmousewheel = wheel;
  }
  function wheel(event) {
   if(!$j('body').hasClass('popup-active')){
      var delta = 0;
      if (event.wheelDelta) delta = event.wheelDelta / 120;
      else if (event.detail) delta = -event.detail / 3;
  
      handle(delta);
      if (event.preventDefault) event.preventDefault();
      event.returnValue = false;
      }
  }
  
  var goUp = true;
  var end = null;
  var interval = null;
  
  function handle(delta) {
      var animationInterval = 5; //lower is faster
    var scrollSpeed = 5; //lower is faster
  
      if (end == null) {
        end = $j(window).scrollTop();
    }
    end -= 20 * delta;
    goUp = delta > 0;
  
    if (interval == null) {
      interval = setInterval(function () {
        var scrollTop = $j(window).scrollTop();
        var step = Math.round((end - scrollTop) / scrollSpeed);
        if (scrollTop <= 0 || 
            scrollTop >= $j(window).prop("scrollHeight") - $j(window).height() ||
            goUp && step > -1 || 
            !goUp && step < 1 ) {
          clearInterval(interval);
          interval = null;
          end = null;
        }
        $j(window).scrollTop(scrollTop + step );
      }, animationInterval);
    }
  }
  /*!---- responsive-----*/
  /*!
   * jQuery lightweight responsive web adaptation plugin
   * Original author: @stildv
   * Copyright © 2011: Devrim Vardar, @stildv -- http://stild.com/
   * Further changes, comments: @stildv -- http://stild.com/code/jquery-responsive-web/
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://stild.com/license/
   * Date: Thu Oct 20 01:27:32 2011 +0300
   * Version: 1.00 (20-OCT-2010)
   * PS. I am not a wonderful coder, I neither have the patience nor the repertoire so this is almost as good as I get. Cheers. :)
   */
  ;
  (function($j, window, document, undefined) {
  
      $j.responsiveWeb = function(element, options) {
  
          var windowadaptTimeout;
          var tempCounter = 0;
          var winWidth;
          var winHeight;
  
          this.options = {};
          var that = this;
          element.data('responsiveWeb', this);
  
          this.init = function(element, options) {
              this.options = $j.extend({}, $j.responsiveWeb.defaultOptions, options);
              options = this.options;
              element.resize(checkResize);
              checkResize();
              if (options.manipulateDesign) {
                  manipulateDesign();
              }
          };
  
          function delayedResize() {
              options = that.options;
              //window.status = ++tempCounter;
              var winNewWidth = $j(window).width();
              var winNewHeight = $j(window).height();
              if (winWidth != winNewWidth || winHeight != winNewHeight) {
                  winWidth = winNewWidth;
                  winHeight = winNewHeight;
  
                  if (options.applyBodyClasses) {
                      applyBodyClasses();
                  }
                  if (options.rearrangeObjects) {
                      rearrangeObjects();
                  }
              }
              //$j('body div.loadingDiv').remove();
          }
  
          function checkResize() {
              //window.scrollTo(0, 1);
              //$j('body').append('<div class="loadingDiv" style="width:100%;height:100%;position:absolute;left:0;top:0;zoom:1;filter:alpha(opacity=85);opacity:0.85;background:#AAA url(\'img/loading.gif\') no-repeat center center;">loading...</div>');
              window.clearTimeout(windowadaptTimeout);
              windowadaptTimeout = window.setTimeout(delayedResize, 250);
          }
  
          function applyBodyClasses() {
              options = that.options;
              clearBodyClasses();
  
              var currcC = '';
              var tmpWidth = decideResolution();
              var tmpArrWidth = tmpWidth.split(" ");
              tmpWidth = tmpArrWidth[0];
              if (options.applyPlatform) {
                  currcC += decidePlatform();
              }
              if (options.applyBrowser) {
                  currcC += decideBrowser();
              }
              if (options.applyResolution) {
                  currcC += decideResolution();
              }
              $j('body').addClass(currcC);
              $j('body').attr("data-width", tmpWidth.substr(1));
  
              if (options.debug) {
                  log(winWidth + 'x' + winHeight + ' || ' + $j('body').attr('class'));
              }
          }
  
          function log(str) {
              var debugDiv = '<div class="debugDiv" style="position:absolute;top:0;right:0;padding:2px;background:black;color:lime;font-size:9px;line-height:9px;"></div>';
              if ($j('.debugDiv ul').length) {
                  $j('.debugDiv ul').append('<li>' + str + '</li>');
              } else {
                  $j('body').append(debugDiv);
                  $j('.debugDiv').append('<ul></ul>');
                  $j('.debugDiv ul').append('<li>' + str + '</li>');
              }
          }
  
          function decidePlatform() {
              var cC = '';
  
              var platform = navigator.userAgent;
              if (platform.indexOf('Windows') > 0) {
                  cC = 'windows' + ' ';
              } else if (platform.indexOf('Linux') > 0 && platform.indexOf('Android') < 0) {
                  cC = 'linux' + ' ';
              } else if (platform.indexOf('Mac') > 0 && (platform.indexOf('iphone') < 0 || platform.indexOf('ipad') < 0)) {
                  cC = 'mac' + ' ';
              } else if (platform.indexOf('iPhone') > 0) {
                  cC = 'iphone' + ' ';
              } else if (platform.indexOf('iPad') > 0) {
                  cC = 'ipad' + ' ';
              } else if (platform.indexOf('Android') > 0) {
                  cC = 'android' + ' ';
              }
  
              return cC;
          }
  
          function decideBrowser() {
              var cC = '';
              options = that.options;
  
              var nVer = navigator.appVersion;
              var nAgt = navigator.userAgent;
              var browserName = navigator.appName;
              var fullVersion = '' + parseFloat(navigator.appVersion);
              var majorVersion = parseInt(navigator.appVersion, 10);
              var nameOffset, verOffset, ix;
  
              if ((verOffset = nAgt.indexOf("Opera")) != -1) {
                  browserName = "opera";
                  fullVersion = nAgt.substring(verOffset + 6);
                  if ((verOffset = nAgt.indexOf("Version")) != -1)
                      fullVersion = nAgt.substring(verOffset + 8);
              } else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
                  browserName = "msie";
                  fullVersion = nAgt.substring(verOffset + 5);
              } else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
                  browserName = "chrome";
                  fullVersion = nAgt.substring(verOffset + 7);
              } else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
                  browserName = "safari";
                  fullVersion = nAgt.substring(verOffset + 7);
                  if ((verOffset = nAgt.indexOf("Version")) != -1)
                      fullVersion = nAgt.substring(verOffset + 8);
              } else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
                  browserName = "firefox";
                  fullVersion = nAgt.substring(verOffset + 8);
              } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                  browserName = nAgt.substring(nameOffset, verOffset);
                  fullVersion = nAgt.substring(verOffset + 1);
                  if (browserName.toLowerCase() == browserName.toUpperCase()) {
                      browserName = navigator.appName;
                  }
              }
              if ((ix = fullVersion.indexOf(";")) != -1) fullVersion = fullVersion.substring(0, ix);
              if ((ix = fullVersion.indexOf(" ")) != -1) fullVersion = fullVersion.substring(0, ix);
  
              majorVersion = parseInt('' + fullVersion, 10);
              if (isNaN(majorVersion)) {
                  fullVersion = '' + parseFloat(navigator.appVersion);
                  majorVersion = parseInt(navigator.appVersion, 10);
              }
  
              if (options.applyBrowser) {
                  cC += browserName + ' ';
              }
              if (options.applyBrowserVersion) {
                  cC += browserName + majorVersion + ' ';
              }
  
              return cC;
          }
  
          function decideResolution() {
              var h = $j(window).height();
              var w = $j(window).width();
              var cC = '';
  
              if (w >= 1880) {
                  cC = 'w1920' + ' ';
              } else if (w >= 1560) {
                  cC = 'w1600' + ' ';
              } else if (w >= 1400) {
                  cC = 'w1440' + ' ';
              } else if (w >= 1240) {
                  cC = 'w1280' + ' ';
              } else if (w >= 984) {
                  cC = 'w1024' + ' ';
              } else if (w >= 728) {
                  cC = 'w768' + ' ';
              } else if (w >= 440) {
                  cC = 'w480' + ' ';
              } else if (w >= 280) {
                  cC = 'w320' + ' ';
              } else {
                  cC = 'wtiny' + ' ';
              }
  
              if (h >= 864) {
                  cC += 'h1024' + ' ';
              } else if (h >= 740) {
                  cC += 'h900' + ' ';
              } else if (h >= 608) {
                  cC += 'h768' + ' ';
              } else if (h >= 440) {
                  cC += 'h600' + ' ';
              } else if (h >= 320) {
                  cC += 'h480' + ' ';
              } else {
                  cC += 'htiny' + ' ';
              }
  
              return cC;
          }
  
          function clearBodyClasses() {
              $j('body').removeClass('w1920 w1600 w1440 w1280 w1024 w768 w480 w320 wtiny h1024 h900 h768 h600 h480 htiny');
          }
  
          this.init(element, options);
      };
  
      $j.fn.responsiveWeb = function(options) {
          return this.each(function() {
              (new $j.responsiveWeb($j(this), options));
          });
      };
  
  
      $j.responsiveWeb.defaultOptions = {
          applyBodyClasses: true,
          applyResolution: true,
          applyPlatform: true,
          applyBrowser: true,
          applyBrowserVersion: true,
          manipulateDesign: true,
          rearrangeObjects: true,
          debug: false
      };
  
  })($j, window, document);
  
  function viewport() {
      var e = window,
          a = 'inner';
      if (!('innerWidth' in window)) {
          a = 'client';
          e = document.documentElement || document.body;
      }
      return {
          width: e[a + 'Width'],
          height: e[a + 'Height']
      };
  }
  
  function manipulateDesign() {}
  
  var prevViewportWidth=0;
  
  /* banner height adjust except Homepage
   * Rule:1 top-bottom padding 60px
   * Rule:2 min-height 424px;
   */
  function adjustBannerHeight(){
      var minContentHeight=424;
      
      var maxHeight = Math.max.apply(minContentHeight, $j(".bannerWrap").map(function (){
          return $j(this).outerHeight();
      }).get());
      
      if(!($j('.home-banner').length>0)){
        if(minContentHeight>=maxHeight){
          $j(".bannerWrap").height(minContentHeight - 120);
        }else{
          $j(".bannerWrap").height(maxHeight - 120);
        }
      }
      
  }
  
  
  function rearrangeObjects() {
    currWidth = viewport().width;
    
    //adjustBannerHeight();
    $j('.member-mod .accordion-inner-wrapper.opened').removeClass('opened');
    $j('.member-mod .accordion-btn.active').removeClass('active');
    $j('.member-mod .accordionWrap.selected').removeClass('selected');
  //  BODSnapdown();
    
    /*if(currWidth>767){
          if(prevViewportWidth>0 && prevViewportWidth!=currWidth){
              bod_arranged=false;
          }
          
          if(!bod_arranged){
              $j('.member-mod .accordion-inner-wrapper.opened').removeClass('opened');
              $j('.member-mod .accordion-btn.active').removeClass('active');
              $j('.member-mod .accordionWrap.selected').removeClass('selected');
              
              BODSnapdown();
          }else{
              prevViewportWidth=currWidth;
          }
      }*/
    
    if(currWidth>767){
    
      if($j('.meet-team-content > p:first-child').length > 0){
        setEqualHeight_CommonClass('.meet-team-content > p:first-child');
      }
        
  
  
        //setEqualHeight_CommonClass('.bannerWrap .banner-content');
        setEqualHeight_CommonClass('.homepage-banner .banner-slide-item');
  
  
        
        
    
      $j('.loc-address').getSameTopGroups({
        commonParent: '.location-item-inner-wrapper'
      }, function(gc) {
        for (i = 1; i <= gc; i++) {
          setEqualHeight_CommonClass(".gg-g-" + i + " .loc-address-title");
        }
        
      });
      
      $j('.signpostWrap').getSameTopGroups({
        commonParent: '.row'
      }, function(gc) {
        for (i = 1; i <= gc; i++) {
          setEqualHeight_CommonClass(".gg-g-" + i + " .signpost-title");
          setEqualHeight_CommonClass(".gg-g-" + i + " .signpost-subtitle");
          setEqualHeight_CommonClass(".gg-g-" + i + " .signpost-wrapper");
        }
      });
      
      if($j('.latest-pr-section').length>0){
        var titleH=0;
        $j('.latest-pr-section .border-top').each(function(){
          $j(this).find('.pr-subtitle.top').css('height','auto');
          var subtitleH=$j(this).find('.pr-subtitle.top').outerHeight();
          titleH=Math.max(titleH, subtitleH);
        });
        $j('.latest-pr-section .border-top .pr-subtitle.top').height(titleH);
      }
      
      
      if($j('.animateSignpostWrap .animate-signpost-wrapper:not(.highlight-module, .highlight-module-mobile)').length>0){
        $j('.animate-signpost-wrapper').each(function(){
          var mod_id=$j(this).attr('id');
          setEqualHeight_CommonClass('#'+mod_id+'.animate-signpost-wrapper .platform-signpost');
        });
      }
      
      if($j('.portfolioHighlightWrap').length>0){
        $j('.portfolio-signpost.large-signpost').getSameTopGroups({
          commonParent: '.portfolio-highlight-signpost-row'
        }, function(gc) {
          for (i = 1; i <= gc; i++) {
            setEqualHeight_CommonClass(".gg-g-" + i + ".large-signpost");
          }
        });
        
        $j('.portfolio-signpost.small-signpost').getSameTopGroups({
          commonParent: '.portfolio-highlight-signpost-row'
        }, function(gc) {
          for (i = 1; i <= gc; i++) {
            setEqualHeight_CommonClass(".gg-g-" + i + ".small-signpost");
          }
        });
        /*$j('.portfolioHighlightWrap').each(function(){
                  var mod_id=$j(this).attr('id');
                  //setEqualHeight_CommonClass('#'+mod_id+'.portfolioHighlightWrap .portfolio-signpost');
                  
              });*/
          }
        
      }else{
        
        $j('.meet-team-content > p:first-child').height('auto');
        
        $j(".loc-address-title").height('auto');
        /*$j(".accordion-image-wrapper").height('auto');
        $j(".accordion-content").height('auto');*/
        
        $j(".signpost-title").height('auto');
   $j(" .banner-content").height('auto');
        $j(".signpost-subtitle, .pr-subtitle").height('auto');
        $j(".signpost-wrapper").height('auto');
        
        $j(".history-year .year-child").height('auto');
        
        $j(".animate-signpost-wrapper .platform-signpost").height('auto');
      }
  }
  var isMobile;
  
  $j(document).ready(function() {
      if (/Edge\/\d./i.test(navigator.userAgent)){
          // This is Microsoft Edge
          $j('body').addClass('ie-edge');
          
          if (/Windows Phone \d./i.test(navigator.userAgent)){
              // This is Microsoft Edge mobile
               $j('body').addClass('lumia-mob');
          }
      }
      
      $j(window).responsiveWeb({
          applyBodyClasses: true,
          applyResolution: true,
          applyPlatform: true,
          applyBrowser: true,
          applyBrowserVersion: false,
          manipulateDesign: true,
          rearrangeObjects: true
      });
  
  
      /*-------------- Mobi Detect Starts -------------------*/
      isMobile = {
          Android: function() {
              return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function() {
              return navigator.userAgent.match(/BlackBerry/i);
          },
          Opera: function() {
              return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function() {
              return navigator.userAgent.match(/IEMobile/i);
          },
          iOS: function() {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          any: function() {
              return (isMobile.Android() || isMobile.BlackBerry() || isMobile.Opera() || isMobile.Windows() || isMobile.iOS());
          }
      };
      /*----------------- Mobi Detect Ends ----------------*/
      /*----- mobile device tel link starts -------------*/
      if (!isMobile.any()) {
          $j('a[href^=tel]').click(function(e) {
              e.preventDefault();
          });
      } else {
          $j('a[href^=tel]').addClass("mobile-tel-link");
      }
      /*----- mobile device tel link ends -------------*/
  });
  /*!---- equal-height-plugin-----*/
  (function($j) {
      var defaults = {
          waitforimages: true,
          waitforfonts: false,
          areSiblings: true,
          commonParent: ''
      }; // default settings
      $j.fn.getSameTopGroups = function(options, callback) {
          //var settings = {};
          if ($j(this).length < 1) {
              return false;
          }
          var settings = $j.extend(true, {}, defaults, options);
          var $jelement = $j(this);
          //$jelement['settings'] = $j.extend(true, {}, defaults, options)
          var winEvents = false;
          var totElements = 0;
          var reload = function(isInit, $jelementObj, groupCounter) {
              var parentWidth;
              if ($j(settings.commonParent).length > 0) {
                  if (settings.commonParent === '') {
                      parentWidth = getStyle($jelement.first().parent()[0], 'width');
                  } else {
                      parentWidth = getStyle($jelement.first().closest(settings.commonParent)[0], 'width');
                  }
              } else {
                  return false;
              }
              
              if (isInit) {
                  totElements = $jelement.length;
                  $jelement.removeClass('gg-taken');
                  $jelement.removeClass(function(index, css) {
                      return (css.match(/\bgg-g-\S+/g) || []).join(' ');
                  });
                  $jelementObj = $jelement.first();
                  var groupCounter = 1;
                  var childWidth = getOuterWidthWithMargin($jelementObj, true);
                  $jelementObj.addClass('gg-taken gg-g-' + groupCounter);
                  --totElements;
                  if (totElements === 0) {
                      callback(groupCounter);
                  }
              } else {
                  --totElements;
                  childWidth = getOuterWidthWithMargin($jelementObj, true);
                  $jelementObj.addClass('gg-taken gg-g-' + groupCounter);
                  if (totElements === 0) {
                      callback(groupCounter);
                  }
              }
              $jelement.not('.gg-taken').each(function(index) {
                  childWidth = childWidth + getOuterWidthWithMargin($j(this), true);
                  if (Math.floor(childWidth) > Math.floor(parentWidth)) {
                      childWidth = childWidth - getOuterWidthWithMargin($j(this), true);
                      ++groupCounter;
                      reload(false, $j(this), groupCounter);
                      return false;
                  } else {
                      $j(this).addClass('gg-taken gg-g-' + groupCounter);
                      --totElements;
                  }
                  if (totElements === 0) {
                      callback(groupCounter);
                  }
              });
          };
          var timeOut;
          var resFun = function() {
              clearTimeout(timeOut);
              timeOut = setTimeout(function() {
                  reload(true);
              }, 300);
          };
          $jelement.reGroup = function() {
              $jelement = $j($jelement['selector']);
              reload(true);
          };
          $j(window).bind('load', function() {
              reload(true);
          });
          $j(document).bind('ajaxComplete', function() {
              $jelement = $j($jelement['selector']);
              $j('.hometwitter').height('auto');
              reload(true);
          });
          $j(window).bind('resize', resFun);
          return $jelement;
      };
      var getStyle = function(el, prop) {
          if (getComputedStyle !== 'undefined') {
              return parseFloat(getComputedStyle(el, null).getPropertyValue(prop));
          } else {
              return parseFloat(el.currentStyle[prop]);
          }
      };
      var getOuterWidthWithMargin = function(el, isBorderBox) {
        if (!isBorderBox){
          return getStyle(el[0], 'margin-left') + getStyle(el[0], 'margin-right') + getStyle(el[0], 'padding-left') + getStyle(el[0], 'padding-right') + getStyle(el[0], 'width');
        }else{
          /*ie issue*/
          if($j('body').hasClass('internetexplorer11') || $j('body').hasClass('ie10' || $j('body').hasClass('ie9'))){
            return getStyle(el[0], 'margin-left') + getStyle(el[0], 'margin-right') + getStyle(el[0], 'padding-left') + getStyle(el[0], 'padding-right') + getStyle(el[0], 'width');
          }else{
            return getStyle(el[0], 'margin-left') + getStyle(el[0], 'margin-right') + getStyle(el[0], 'width');
          }
        }
      };
  })($j);
  
  function setEqualHeight_CommonClass(arr) {
      var x = new Array([]);
      $j(arr).each(function(i) {
          $j(this).height('auto');
          x[i] = $j(this).outerHeight();
      });
      Max_Value = Array.max(x);
      $j(arr).each(function(i) {
          //if($j(arr[i]).height() != Max_Value)
          //	{x[i] = $j(arr[i]).height(Max_Value);}
          $j(this).outerHeight(Max_Value);
      });
  }
  
  function setEqualHeight(arr) {
      var x = new Array([]);
      for (i = 0; i < arr.length; i++) {
          x[i] = $j(arr[i]).height('auto');
          x[i] = $j(arr[i]).outerHeight();
      }
      Max_Value = Array.max(x);
      for (i = 0; i < arr.length; i++) {
          //if($j(arr[i]).height() != Max_Value)
          // {x[i] = $j(arr[i]).height(Max_Value);}
          x[i] = $j(arr[i]).outerHeight(Max_Value);
      }
  }
  Array.min = function(array) {
      return Math.min.apply(Math, array);
  };
  
  Array.max = function(array) {
      return Math.max.apply(Math, array);
  };
  /*!---- distributions-chart-----*/
  function generateDistributionsGraph(targetID){
    var maxH=250;
    
    var maxBarWidth=$j('#'+targetID+' > table.distribution-chart').attr('data-bar-width');
    
    var tableH=$j('#'+targetID+' > table.distribution-chart').attr('data-height');
    if(parseInt(tableH) > 0){
      maxH=tableH;
    }
    var lbl_arr=[];
    var val_arr=[];
    var barH_arr=[];
    var barPos_arr=[];
    
    var color_val='';
    var prefix_val='';
    var suffix_val='';
    
    $j('#'+targetID).append('<div class="distribution_chart_inner animateIt"></div>');
    
    $j('#'+targetID+' > table > tbody > tr').each(function(i){
      lbl_arr.push($j(this).find('td:eq(0)').html());
      val_arr.push($j(this).find('td:eq(1)').text());
    });
    
    $j('#'+targetID+' > table > tfoot > tr').each(function(i){
      if($j(this).find('th:eq(0)').text()=='Prefix'){
        prefix_val=$j(this).find('td:eq(0)').html();
      }else if($j(this).find('th:eq(0)').text()=='Suffix'){
        suffix_val=$j(this).find('td:eq(0)').html();
      }else if($j(this).find('th:eq(0)').text()=='Color'){
        color_val=$j(this).find('td:eq(0)').html();
      }
    });
    
    
    var totalEle=val_arr.length;
    var sum=0;
    var barWidth=0;
    
    if(totalEle > 0){
      barWidth=parseInt(100/totalEle);
      
      for(var i=0; i < totalEle; i++){
        barH_arr[i]=parseInt((maxH*val_arr[i])/val_arr[totalEle - 1]);
        
        if(i==totalEle-1){
          barPos_arr[i]=0;
        }else{
          barPos_arr[i]=sum;
        }
        sum=sum+barH_arr[i];
      }
      
      /*append html*/
      var graphHtml='';
      for(var i=0; i<totalEle; i++){
        var cssClass="";
        if(i==0){
          cssClass='first';
        }else if(i==totalEle-1){
          cssClass='last';
        }
        
        var additional_css='';
        if(typeof maxBarWidth!='undefined' && maxBarWidth>0){
          //cssClass='';
          additional_css='max-width:'+maxBarWidth+'px';
        }
        
        graphHtml='<div class="bar-item '+cssClass+'" style="height:'+maxH+'px;width:'+barWidth+'%;'+additional_css+'"><span class="bar_label" style="top:'+maxH+'px;">'+lbl_arr[i]+'</span><div class="bar" style="color:'+color_val+';background-color:'+color_val+';height:'+barH_arr[i]+'px; bottom:'+barPos_arr[i]+'px;"><div class="bar_value"><span class="prefix_text">'+prefix_val+'</span><span>'+val_arr[i]+''+suffix_val+'</span></div></div></div>';
        
        
        $j('#'+targetID+' .distribution_chart_inner').append(graphHtml);
      }
    }
    
  }
  
  $j(document).ready(function(){
    if($j('table.distribution-chart').length > 0){
    
      $j('table.distribution-chart').each(function(i){
        $j(this).wrap('<div class="distribution_chart_wrap" id="dcw_'+i+'"></div>');
        
        generateDistributionsGraph('dcw_'+i);
        
        /*$j('.bar_value span:nth-child(2)').each(function(){
            if($j(this).html() === ""){
              $j(this).parent().find('.prefix_text').html('');
            }
          });*/
      });
      
    }
    
    var distributionTableLoad=false;
    $j('.distributions-landing .sort-table').DataTable({
      paging: true,
      pagingType:'numbers',
      "ordering": false,
      searching:false,
      "language": {
        "info": "Showing _START_–_END_ of _TOTAL_",
        "emptyTable": "Data will be available soon."
      },
      "pageLength": 12,
      "lengthChange": false,
      "fnDrawCallback": function( oSettings ) {
        /*hide pagination if only one page*/
        if(oSettings._iDisplayLength >= oSettings.aoData.length){
          $j('#'+oSettings.sTableId+'_wrapper').addClass('no-pagination');
          $j('#'+oSettings.sTableId+'_wrapper > .dataTables_info').hide();
          $j('#'+oSettings.sTableId+'_wrapper > .dataTables_paginate').hide();
        }
        
        
        
        
        $j('#'+oSettings.sTableId+'_wrapper > .inv-responsive-table').remove();
        
        var tableHTML='<table id="'+oSettings.sTableId+'-mob" class="mob-distribution-table">'+oSettings.nTable.innerHTML+'</table>';
        
        $j(tableHTML).insertAfter('#'+oSettings.sTableId+'_wrapper > table');
        
        $j('#'+oSettings.sTableId+'-mob').find("tr").addClass("ignore-header");
        $j('#'+oSettings.sTableId+'-mob').InvResponsiveTable({
          prefix: 'inv',
          showTableHeader: false
        });
        
        
        
        if(distributionTableLoad){
          var tableID=oSettings.sTableId;
          var offsetTop=$j('#'+tableID+'_wrapper').offset().top;
          $j('html,body').animate({scrollTop:offsetTop-$j('#headerwrapper').outerHeight()},500);
        }
        
      }
    });
    distributionTableLoad=true;
  });
  
  
  
  /*!---- highchart-----*/
  var colors_arr=['#007D55', '#3b62ae', '#ffb33f', '#898989', '#a0c878', '#00acda', '#ff8957', '#667795','#57978f', '#8c6bcf', '#ff708f', '#95b2cc'];
  var allPieChart=[];
  var allPieChartCnt=0;
  var chartStatus=[];
  
  function convertHex(hex,opacity){
      hex = hex.replace('#','');
      r = parseInt(hex.substring(0,2), 16);
      g = parseInt(hex.substring(2,4), 16);
      b = parseInt(hex.substring(4,6), 16);
  
      result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
      return result;
  }
  
  $j(document).ready(function(){
      
      
      var totalTables = $j('.chart-table').length;
      var ssMode=$j('body').hasClass('ip3-edit');    
      //Check the type of chart and get the chart title
      if (totalTables > 0 && !ssMode) {
      //console.log("totalTables - "+totalTables+" ----- ssMode"+ssMode);
        Highcharts.setOptions({ colors: colors_arr });
          
          $j('.chart-table').each(function(counterTable) {
              pieChart('chartwrap' + ++counterTable,$j(this));
              
          });
      }
  });
  
  function pieChart(replaceClass, contentTable) {
      var noteTxt='', preFixTxt='', postFixTxt='';
      
      $j(contentTable).find('tfoot tr').each(function(ri){
          var rowHeading=$j(this).find('th').text();
          var rowHeadingVal=$j(this).find('td').text();
          
          if(rowHeading=='Note'){
              noteTxt=rowHeadingVal;
          }
          if(rowHeading=='Prefix'){
              preFixTxt=rowHeadingVal;
          }
          if(rowHeading=='Postfix'){
              postFixTxt=rowHeadingVal;
          }
      });
      
      var chartInnerCircleSize='65%';
      var donutData =[];
      
      total_cols = $j(contentTable).find('tbody tr:last td').length; //Get total columns of the table
  
      //Get Chart details like Bar color, font color and Legend title
      var chart_details = [];
  
      //Get Chart values like X-axis and values
      var col_name = [];
  
      var col_value = [];
  
      for (i = 0; i < total_cols; i++) {
          $j(contentTable).find('tbody tr').each(function() {
              if(i==0){
                  col_name.push($j(this).find('td:eq(' + i + ')').html());
              }else{
                  col_value.push($j(this).find('td:eq(' + i + ')').text());
              }
  
          });
      }
      
      for (j = 0; j < col_name.length; j++) {
          donutData.push({y:parseFloat(col_value[j]), original:col_value[j], 'noteTxt':noteTxt, 'preFixTxt': preFixTxt, 'postFixTxt':postFixTxt,  name:col_name[j]});
      }
      
      $j(contentTable).replaceWith('<div style="width:100%;" id="' + replaceClass + '" class="chartwrap ' + replaceClass + '"></div>');
  
      
      // Build the chart
      allPieChart[allPieChartCnt]=Highcharts.chart(replaceClass, {
        chart: {
          /*height:350,*/
          backgroundColor: 'transparent',
          type: 'pie',
          className:'chart-box',
          margin: [0, 0, 0, 0 ],
          spacing: [0, 0, 0, 0 ],
          events: {
              load: function () {
                  var maxVal=0;
                  var selectedIndex=0;
                  var dataSeries=this.userOptions.series[0].data;
                  
                  for(var di=0; di<dataSeries.length; di++){
                      if(dataSeries[di].y > maxVal){
                          maxVal=dataSeries[di].y;
                          selectedIndex=di;
                      }
                  }
                  
                  var defaultNoteTxt=this.userOptions.series[0].data[0].noteTxt;
                  
                  var selectedChartID=this.renderTo.id;
                  
                  if(!($j('#'+selectedChartID+' .chart-inner-html').length>0)){
                    $j('#'+selectedChartID).append('<div class="chart-inner-html"><span class="chart-inner-text">'+defaultNoteTxt+'</span></div>');
                  }
                  
                  $j('#'+selectedChartID+' div.highcharts-legend .highcharts-color-'+selectedIndex+' > span').trigger('click');
              }
          }
        },
        title: {
          text: null
        },
        tooltip: {
          enabled: false
        },
        legend: {
          itemStyle: {
            fontFamily: 'Graphik Web'
          },
          /*itemWidth: 190,
          width: 570,
          verticalAlign: 'middle',
          align: 'right',*/
          layout: 'horizontal',
          useHTML: true,
          symbolHeight: 26,
          symbolWidth:  26,
          symbolRadius: 0,
          /*navigation:{enabled:false},*/
          itemMarginTop: 13,
          itemMarginBottom: 13,
          floating: true,
          labelFormatter: function () {
            return '<span class="keyfigure-title">'+this.name+'</span><br/><span class="keyfigure">'+preFixTxt+''+this.y+''+postFixTxt+'</span>';
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            slicedOffset: 0,
            cursor: 'pointer',
            borderWidth:0,
            borderColor:null,
            /*size:320,
            center:[165, '50%'],*/
            dataLabels: {
              enabled: false
            },
            point: {
              events: {
                legendItemClick: function (currentSlice) {
                  
                  var selectedChartID=this.series.chart.renderTo.id;
                  var selectedChartPoints=this.series.points;
                  
                  if(!($j('#'+selectedChartID+' .chart-inner-html').length>0)){
                    $j('#'+selectedChartID).append('<div class="chart-inner-html"><span class="chart-inner-text"></span></div>');
                  }
                  
                  if(chartStatus[selectedChartID]===this.index){
                    for(var pointI=0; pointI < selectedChartPoints.length; pointI++){
                      selectedChartPoints[pointI].update({color: colors_arr[pointI] });
                      $j('#'+selectedChartID).find('.chart-inner-html .chart-inner-text').html('<span>'+selectedChartPoints[pointI].noteTxt+'</span>');
                    }
                    
                    chartStatus[selectedChartID]='';
                  }else{
                    for(var pointI=0; pointI < selectedChartPoints.length; pointI++){
                      
                      if(this.colorIndex!=pointI ){
                        selectedChartPoints[pointI].update({color: convertHex(colors_arr[pointI],20) });
                      }else{
                        selectedChartPoints[pointI].update({color: colors_arr[pointI] });	
                        
                        var legendDataHTML='<span class="keyfigure" style="color:'+colors_arr[pointI]+';">'+selectedChartPoints[pointI].preFixTxt+''+selectedChartPoints[pointI].original+'</span><span class="postfix" style="color:'+colors_arr[pointI]+';">'+selectedChartPoints[pointI].postFixTxt+'</span><br>'+selectedChartPoints[pointI].name;
                        
                        $j('#'+selectedChartID).find('.chart-inner-html .chart-inner-text').html(legendDataHTML);
                      }
                      
                    }
                    
                    chartStatus[selectedChartID]=this.index;
                  }
                  
                  return false; // <== returning false will cancel the default action
                }
              }
            },
            showInLegend: true
          },
          series: {
            innerSize:'65%',
            states: {
              hover: {
                enabled: false,
                halo: {
                  size: 0
                }
              }
            }
          }
        },
        series: [{
          colorByPoint: true,
          data: donutData,
          point: {
            events: {
              click: function () {
                var selectedChartID=this.series.chart.renderTo.id;
                var selectedChartPoints=this.series.points;
                
                if(!($j('#'+selectedChartID+' .chart-inner-html').length>0)){
                  $j('#'+selectedChartID).append('<div class="chart-inner-html"><span class="chart-inner-text"></span></div>');
                }
                
                if(chartStatus[selectedChartID]===this.index){
                  for(var pointI=0; pointI < selectedChartPoints.length; pointI++){
                    selectedChartPoints[pointI].update({color: colors_arr[pointI] });
                    $j('#'+selectedChartID).find('.chart-inner-html .chart-inner-text').html('<span>'+selectedChartPoints[pointI].noteTxt+'</span>');
                  }
                  
                  chartStatus[selectedChartID]='';
                }else{
                  for(var pointI=0; pointI < selectedChartPoints.length; pointI++){
                    
                    if(this.colorIndex!=pointI ){
                      selectedChartPoints[pointI].update({color: convertHex(colors_arr[pointI],20) });
                    }else{
                      selectedChartPoints[pointI].update({color: colors_arr[pointI] });	
                      
                      var legendDataHTML='<span class="keyfigure" style="color:'+colors_arr[pointI]+';">'+selectedChartPoints[pointI].preFixTxt+''+selectedChartPoints[pointI].original+'</span><span class="postfix" style="color:'+colors_arr[pointI]+';">'+selectedChartPoints[pointI].postFixTxt+'</span><br>'+selectedChartPoints[pointI].name;
                      
                      $j('#'+selectedChartID).find('.chart-inner-html .chart-inner-text').html(legendDataHTML);
                    }
                    
                  }
                  
                  chartStatus[selectedChartID]=this.index;
                }
              }
            }
          }
        }],
        
        
        responsive: {
          rules: [{
            condition: {
              maxWidth: 360
            },
            // Make the labels less space demanding on mobile
            chartOptions: {
              chart: {
                height:null
              },
              plotOptions: {
                pie: {
                  size:280,
                  center:['50%', 160]
                }
              },
              legend: {
              itemDistance:30,
                width:null,
                align: 'center',
                verticalAlign: 'top',
                y: 320
              }
            }    
          },{
            condition: {
                minWidth: 361,
              maxWidth: 717
            },
            // Make the labels less space demanding on mobile
            chartOptions: {
              chart: {
                height:null
              },
              plotOptions: {
                pie: {
                  size:300,
                  center:['50%', 160]
                }
              },
              legend: {
              itemDistance:30,
                width:null,
                align: 'center',
                verticalAlign: 'top',
                y: 320
              }
            }    
          },{
            
            condition: {
              minWidth: 718,
              maxWidth: 941
            },
            // Make the labels less space demanding on mobile
            chartOptions: {
              chart: {
                height:350
              },
              plotOptions: {
                pie: {
                  size:320,
                  center:[165, '50%']
                }
              },
              legend: {
                itemDistance:10,
                itemWidth: 190,
                width: 380,
                align: 'right',
                verticalAlign: 'middle'
              }
            }    
          },
          {
            condition: {
              minWidth: 941
            },
            // Make the labels less space demanding on mobile
            chartOptions: {
              chart: {
                height:350
              },
              plotOptions: {
                pie: {
                  size:320,
                  center:[165, '50%']
                }
              },
              legend: {
              itemDistance:10,
                itemWidth: 205,
                width: 615,
                align: 'right',
                verticalAlign: 'middle'
              }
            }    
          }
          ]
        }
      });
    
      
      allPieChartCnt++;
  }
  /*!---- highchart-2-----*/
  /* Credit - Doughnut Chart */
  var total = 0;
  
  $j(document).ready(function() {
    console.log("highchart-2");
    $j('table[id^=highchart]').each(function(counter) {
      var chartType = $j(this).attr("id").split("-")[1];    
      if (chartType == 'pie') {
        pie('chartwrap-' + counter, $j(this));
      }
    });
    
    colorsArr = ['#00394d', '#ff8551', '#007d55', '#a6c773', '#1cafdb', '#fdae2a', '#429bd6', '#667896'];
    
    $j(".chart-snap-wrapper > a").click(function(){
          if($j(this).next().hasClass("active")){
              $j(this).removeClass("active");
              $j(this).next().removeClass("active");
              $j(this).next().slideUp();
          }
          else{
              $j(".chart-snap-wrapper > a").removeClass("active");
              $j(".mobi-legend-popup").removeClass("active");
              $j(".mobi-legend-popup").slideUp();
              $j(this).addClass("active");
              $j(this).next().addClass("active");
               $j(this).next().slideDown();
          }
    });
  });
  function pie(replaceClass, contentTable) {
    $j(contentTable).replaceWith('<div class="chartwrap ' + $j(contentTable).attr("id").split("-")[1] + ' ' + replaceClass + '"></div>');
    
    Highcharts.setOptions({ colors: ['#00394d', '#ff8551', '#007d55', '#a6c773', '#1cafdb', '#fdae2a', '#429bd6', '#667896']});
    
    var pieArr = [];
    var cellCount = 1;
    
    
    for (var i = 0; i < pieArr.length; i++) {
      total += pieArr[i].dollar.substr(1) << 0;
    }
    
    var totalValue = 0;
    
    $j(contentTable).find('tbody tr').each(function(i) {  
      totalValue = totalValue + parseInt($j(this).find("td:eq(2)").text().replace("$",""));
  
      //dollarSign = "$";
      pieArr[i] = {
      'id': $j(this).attr("data-id"),
        'name': $j(this).find("td:eq(0)").text().toString(),
        'y': parseFloat($j(this).find('td:eq(1)').text().toString()),
        'dollar': $j(this).find("td:eq(2)").text().toString(),
        'counterCell': "cell-" + cellCount,
        'pieTotal': total
      };
      cellCount++;
    });
    
    $j('.chartwrap.'+ replaceClass).highcharts({
      chart: {
        type: 'pie',
        backgroundColor: '#f0f0f1',
        renderTo:'highchart-pie',
        height: 400,
        spacingTop: 80,
        spacingBottom: 20,
        spacingLeft: 100,
        spacingRight: 30,
        style: {
          'float': 'left'
        },
        events: {
          load: function () {
            $j(".hichartDataValue").html("<span class='chart-total'>Total</span><br/><span>$</span>"+totalValue+"B"+"<br/>"+"<span class='click-chart'>Click a chart segment<br/> to view details</span>");
            this.series[0].data[1].slice();
            this.series[0].data[0].select();
            setTimeout(function(){
            $j(".legend-popup-wrapper .legend-popup:nth-child(1)").show();
            $j(".legend-popup-wrapper .legend-popup:nth-child(1) a").css("color","#00394d !important");
            $j(".legend-popup-wrapper .legend-popup:nth-child(1)").find("p").css("color","#00394d");
            $j(".legend-popup-wrapper .legend-popup:nth-child(1)").find("ul li span").css("background-color","#00394d");
            }, 600);
          }
        }
      },
      
      credits: {
          enabled: false
      },
      tooltip: {
        enabled:false,
        pointFormat: '<strong>{point.dollar}</strong>'
      },
      plotOptions: {
        pie: {
          size: '100%',
          center: [120, 120],
          allowPointSelect: true,
          slicedOffset: 0,
          borderWidth: 0,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            format: '<strong>{point.name}<br/>{point.dollar}</strong>',
            connectorShape: 'crookedLine',
            connectorColor: '#231f20',
            connectorWidth: 0.5,
            crookDistance: '100%',
            alignTo: 'plotEdges',
            color: '#231f20',
            style: {
              fontSize: '16px',
              fontFamily: 'Graphik SemiBold Web'
            }
          }
        },
        series: {
          point: {
            events: {
              click: function (e) {
                colorsArr = ['#00394d', '#ff8551', '#007d55', '#a6c773', '#1cafdb', '#fdae2a', '#429bd6', '#667896'];
                //alert(this.id);
                var activePieSection = this;
                 $j('.chartwrap.'+ replaceClass +' .highcharts-container .hichartDataValue').empty();
             //   if(this.name == $j(".hichartDataValue").attr("data-pietype")) {
                 // $j(".legend-popup").hide();
                //  $j(".hichartDataValue.activePie").attr("data-pietype","");
              //  } else {
                  $j(".legend-popup").hide();
                  $j('.chart-tables .hichartDataValue').addClass("activePie").attr("data-pietype",this.name);
                  index = this.counterCell.split("-");
                  //console.log("Index :"+index);
                  $j(".legend-popup-wrapper .legend-popup:nth-child("+index[1]+")").show();
                  $j(".legend-popup-wrapper .legend-popup a").eq(index[1]-1).css("color",colorsArr[index[1]-1]);
                  $j(".legend-popup-wrapper .legend-popup").eq(index[1]-1).css("border-top","0 solid "+colorsArr[index[1]-1]);
                  $j(".legend-popup-wrapper .legend-popup").eq(index[1]-1).find("p").css("color",colorsArr[index[1]-1]);
                  $j(".legend-popup-wrapper .legend-popup").eq(index[1]-1).find("ul li span").css("background-color",colorsArr[index[1]-1]);
             //   }
                
                $j(".mobi-chart-content .chart-snap-wrapper > a#"+this.id).trigger("click");
                $j(".legend-popup-wrapper .legend-popup a").click(function(){
                  $j(".legend-popup-wrapper .legend-popup:nth-child("+index[1]+")").hide();
                  $j(activePieSection).trigger("click");
                  //console.log(activePieSection);
                  //$j(this.id).trigger("click");
                });
                //e.target.hcEvents.click[0]();
              }
            }
          },
          states: {
            inactive: {
              opacity: 0.5
            },
            hover: {
              enabled: true,
              halo: {
                size: 0
              }
            }
          },
          dataLabels: {
            inside: true,
            enabled: true,
            color: '#fefefe',
            align: 'center',
            verticalAlign:'top',
            style: {
              fontSize: '7px',
              fontFamily: 'Graphik Light Web',
              textOutline: false
            }
          }
        }
      },
      series: [{
        name:'',
        id:'test',
        colorByPoint: true,
        data: pieArr,
        innerSize:'68%'
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 768
              },
              chartOptions: {
                chart: {
                  height: 460,
                  spacingTop: 30,
                  spacingBottom: 0,
                  spacingLeft: 20,
                  spacingRight: 20,
                  events: {
                    load: function () {
                      $j(".hichartDataValue").html("<span class='chart-total'>Total</span><br/><span>$</span>"+totalValue+"B"+"<br/>"+"<span class='click-chart'>Click to view<br/> details</span>");
                    }
                  }
                },
                  plotOptions: {
                    pie: {
                    size: '50%',
                    slicedOffset: 0,
                    center: [120, 120],
                        dataLabels: {
                            enabled: false
                        }
                    }
                  }
              }
              
          }, {
              condition: {
              maxWidth: 420
              },
              chartOptions: {
              chart: {
                  height: 800,
                  spacingTop: 10,
                  spacingBottom: 0,
                  spacingLeft: 20,
                  spacingRight: 20
                },
                  plotOptions: {
                    pie: {
                    size: '100%',
                    center: ["50%", "21%"],
                        dataLabels: {
                            enabled: false
                        }
                    }
                  }
              }
           }]   
      }
      
    });
  }
  
  
  /* Real Asset - Doughnut Chart */
  var total = 0;
  
  $j(document).ready(function() {
  
  var $lPop = $j(".legend-popup");
  $j(document).mouseup(function(e){
      if (!$lPop.is(e.target) && $lPop.has(e.target).length === 0) 
      {
        //$lPop.hide();
      }
    });
    $j(document).on('keyup',function(evt) {
      if (evt.keyCode == 27) {
         $lPop.hide();
      }
  });
    
    $j('table[id^=highchart]').each(function(counter) {
      var chartType = $j(this).attr("id").split("-")[1];
      if (chartType == 'pie2') {
        pie2('chartwrap-' + counter, $j(this));
      }
    });
    
    //$j('.chartwrap .highcharts-container').append('<div class="hichartDataValue"></div>');
    
    colorsArr = ['#fdae2a', '#007d55', '#a6c773', '#1bafdc'];
    
    $j(".legend-popup-wrapper .legend-popup").each(function(index){
      $j(this).css("border-top","13px solid "+colorsArr[index]);
      $j(this).find("p").css("color",colorsArr[index]);
      $j(this).find("ul li span").css("background-color",colorsArr[index]);
    });
    
    
  });
  function pie2(replaceClass, contentTable) {
    $j(contentTable).replaceWith('<div class="chartwrap ' + $j(contentTable).attr("id").split("-")[1] + ' ' + replaceClass + '"></div>');
    
    Highcharts.setOptions({ colors: ['#fdae2a', '#007d55', '#a6c773', '#1bafdc', '#00394d' , '#ff8551']});
    
    var pieArr = [];
    var cellCount = 1;
    
    
    for (var i = 0; i < pieArr.length; i++) {
      total += pieArr[i].dollar.substr(1) << 0;
    }
    
    var billionValue = 0;
    
    $j(contentTable).find('tbody tr').each(function(i) {  
      billionValue = billionValue + parseFloat(($j(this).find("td:eq(2)").text().replace("$","")).replace("B",""));  
      pieArr[i] = {
        'name': $j(this).find("td:eq(0)").text().toString(),
        'y': parseFloat($j(this).find('td:eq(1)').text().toString()),
        'dollar': $j(this).find("td:eq(2)").text().toString(),
        'counterCell': "cell-" + cellCount,
        'pieTotal': total
      };
      cellCount++;
    });
    
    $j('.chartwrap.'+ replaceClass).highcharts({
      chart: {
        type: 'pie',
        backgroundColor: '#f0f0f1',
        renderTo:'highchart-pie',
        height: 450,
        spacingTop: 80,
        spacingBottom: 50,
        spacingLeft: 30,
        spacingRight: 30,
        events: {
          load: function () {
          if($j(".hideCenterContent").text().indexOf("1") < 0){
              $j(".hichartDataValue").html("<span>$</span>"+Math.round(billionValue)+"<span>B</span>"+"<span class='txt'>OF AUM</span>");	
          }
          }
        }
      },
      
      credits: {
          enabled: false
      },
      
      tooltip: {
        enabled:false
      },
      plotOptions: {
        pie: {
          size: '100%',
          allowPointSelect: false,
          slicedOffset: 0,
          borderWidth: 0,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<strong>{point.name}<br/>{point.dollar}</strong>',
            connectorShape: 'crookedLine',
            connectorColor: '#231f20',
            connectorWidth: 0.5,
            crookDistance: '100%',
            alignTo: 'plotEdges',
            color: '#231f20',
            style: {
              fontSize: '16px',
              fontFamily: 'Graphik SemiBold Web'
            }
          }
        },
        series: {
          states: {
          hover: false,
            inactive: {
              opacity: 1
            }
          }
        }
      },
      series: [{
        name:' ',
        colorByPoint: true,
        data: pieArr,
        innerSize:'68%'
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 768
              },
              chartOptions: {
                chart: {
                  height: 350,
                  spacingTop: 60,
                  spacingBottom: 0,
                  spacingLeft: 20,
                  spacingRight: 20
                },
                  plotOptions: {
                    pie: {
                    size: '87%',
                    center: ["50%", "35%"],
                        dataLabels: {
                            enabled: true,
                            crookDistance: '20%',
                            style: {
                              fontSize: '14px',
                              fontFamily: 'Graphik SemiBold Web'
                            }
                        }
                    }
                  }
              }
              
          }, {
              condition: {
              maxWidth: 420
              },
              chartOptions: {
              chart: {
                  height: 540,
                  spacingTop: 10,
                  spacingBottom: 0,
                  spacingLeft: 20,
                  spacingRight: 20
                },
                  plotOptions: {
                    pie: {
                    size: '100%',
                    center: ["50%", "34%"],
                        dataLabels: {
                            enabled: false
                        }
                    }
                  }
              }
           }]   
      }
    });
  }
  /*!---- main-----*/
  var employeesTable;
  
  function makeEmployeesDataTable(){
    if($j('.employee-list-table-wrapper .sort-table').length>0){
      
      var employeesTableLoad=false;
      employeesTable = $j('.employee-list-table-wrapper .sort-table').DataTable({
        paging: true,
        ordering: true,
        pagingType:'numbers',
        searching:false,
        "language": {
          "info": "Showing _START_–_END_ of _TOTAL_"
        },
        "order": [[ 1, "asc" ]],
        "columnDefs": [{ "targets": 'no-sort', "orderable": false }, {
          "targets": [ 3 ],
          "orderData": [ 3, 1 ]
        }, {
          "targets": [ 4 ],
          "orderData": [ 4, 1 ]
        } ],
        "pageLength": 10,
        "lengthChange": false,
        "initComplete": function(settings, json) {
          var tableID=settings.sTableId;
          if($j('#'+tableID).parents('div.scroll-table-container').length < 1){
            $j('#'+tableID).wrap('<div class="scroll-table-container"></div>');
          }
        },
        "fnDrawCallback": function( oSettings ) {
          if(employeesTableLoad){
            var tableID=oSettings.sTableId;
            var offsetTop=$j('#'+tableID).offset().top;
            $j('html,body').animate({scrollTop:offsetTop-$j('#headerwrapper').outerHeight()},500);
          }
          
          $j('.emp-profile-popup').magnificPopup({
            type:'inline',
            closeOnBgClick:false,
            midClick: true,
            
            callbacks: {
              open: function() {
                $j('.employee-list-wrapper').addClass('popup-html-active');
                $j('body').addClass('popup-employee');
                $j('html').addClass('employee-mag-pop');
                $j('.employee-pop').focus();
              },
              close: function() {
                $j('.employee-list-wrapper').removeClass('popup-html-active');
                $j('body').removeClass('popup-employee');
                $j('html').removeClass('employee-mag-pop');
              }
            }
          });
        }
      });
      
      employeesTableLoad=true;
    }
  }
  
  
  var resizeTimer;
  var bod_arranged=false;
  
  $j.fn.isInViewport = function() {
    var elementTop = $j(this).offset().top;
    var elementBottom = elementTop + $j(this).outerHeight();
    
    var viewportTop = $j(window).scrollTop();
    var viewportBottom = viewportTop + $j(window).height();
    
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  
  function siteTabs() {
    var TotalLiwidth = 0;
    var TabsWidth = $j('.tabs').width();
    
    $j('.tabs.float100 #tabs-section-Homepage-level2').show();
    $j('.tabs.float100 #tabs-section-Homepage-level2 .level2').each(function() {
      
      TotalLiwidth += $j(this).width();
    });
    
    if (TotalLiwidth >= TabsWidth) {
      $j('.tabs.float100 #tabs-section-Homepage-level2').hide();
      $j('.mobiDropdown').show();
    } else {
      $j('.tabs.float100 #tabs-section-Homepage-level2').show();
      $j('.mobiDropdown').hide();
    }
  }
  /* Menu items width start*/
  function MenuWidthSet() {
    /*reset*/
    $j('#topnavigation ul').css('width', 'auto');
    $j("#topnavigation ul li a").css('padding-left', '10px');
    $j("#topnavigation ul li a").css('padding-right', '10px');
    var winWid = $j(window).width();
    var navWid = $j('#topnavigation ul').width();
    var noOfElements = $j("#topnavigation > ul > li").length;
    var diff = winWid - navWid;
    if (diff >= 0) {
      var itemPad = (diff / noOfElements) / 2;
      $j("#topnavigation > ul").css('width', '100%');
      $j("#topnavigation > ul > li > a").each(function() {
        $j(this).css('padding-left', itemPad + 'px');
        $j(this).css('padding-right', itemPad + 'px');
      });
    } else {
      $j("#topnavigation > ul").css('width', '100%');
      $j("#topnavigation > ul > li > a").each(function() {
        $j(this).css('padding-left', '10px');
        $j(this).css('padding-right', '10px');
      });
    }
  }
  /* Menu items width start*/
  
  $j('#footer-mob-menu').on('click','a.showmore-footer', function(){
    if($j(this).hasClass('active')){
      $j(this).removeClass('active');
      $j(this).parent().removeClass('opened');
      $j(this).parent().children('ul').slideUp();
    }else{
      $j(this).addClass('active');
      $j(this).parent().addClass('opened');
      $j(this).parent().children('ul').slideDown();
    }
    return false;
  });
  
  $j(document).ready(function() {
    
    $j(".risk-return-spectrum-accordion-module.item-with-logo-text").each(function(){
      $j(this).find(".risk-return-spectrum-accordion-item").each(function(){
        var getColVal = $j(this).find(".color-value").text().trim();
        $j(this).parent().find(".risk-return-spectrum-accordion-item .accordion-item-logo-heading-wrapper").css("border-color",getColVal);
      });
    });
    
    $j(".risk-return-spectrum-accordion-module.no-item-bg-color").each(function(){
      $j(this).find(".risk-return-spectrum-accordion-item").each(function(){
        var getColVal = $j(this).find(".color-value").text().trim();
        $j(this).parent().find(".risk-return-spectrum-accordion-item").css("border-color",getColVal);
        $j(this).parent().find(".risk-return-spectrum-accordion-item").css("background-color","transparent");
        $j(this).parent().find(".risk-return-spectrum-accordion-item .accordion-item-heading").css("color",getColVal);
        $j(this).parent().find(".risk-return-spectrum-accordion-module.item-with-logo-text .risk-return-spectrum-accordion-item .accordion-item-logo-heading-wrapper").css("border-color",getColVal);
      });
    });
    
    $j(".risk-return-spectrum-accordion-module.is-colored-heading").each(function(){
      $j(this).find(".risk-return-spectrum-accordion-item").each(function(){
        var getColVal = $j(this).find(".color-value").text().trim();
        $j(this).parent().find(".risk-return-accordion-content-item").css("border-color",getColVal);
        $j(this).parent().find(".risk-return-accordion-content-item.isheading").css("color",getColVal);
      });
    });
    
    
    if (window.innerWidth < 768) {
      $j(".module-new-real-estate .risk-return-spectrum-accordion-module.is-colored-heading").each(function(){
        $j(this).find(".risk-return-spectrum-accordion-item").each(function(){
          var getColVal = $j(this).find(".color-value").text().trim();
          $j(this).parent().find(".risk-return-accordion-content-item").css("border-color",getColVal);
          $j(this).parent().find(".risk-return-accordion-content-item.isheading").css("color","#fff");
          $j(this).parent().find(".accordion-item-heading").css("background-color",getColVal);
        });
      });	
    }
    
    $j(window).on("load", function(){
      var getSlideBannerHeight = $j(".sliderInnerWrapper").height();
      console.log(getSlideBannerHeight);
      //$j(".banner-image-wrapper").css("min-height",getSlideBannerHeight);
    });
    
    $j(".twitter .twitter-feeds-title img").append('<span class="invisible">Twitter Image</span>');
    
    $j('.mobile-menu').on('click','.hamburger',function(){
      $j('.mobile-menu .mobile-navigation').slideToggle().toggleClass('open');
      $j('.hamburger').toggleClass('active');
    });
    
    $j('.mobile-navigation li').each(function(index){
      if($j(this).children('ul').length){
        $j(this).append('<a href="javascript:;" class="showmore-menu"></a>');
      }
    });
    
    $j('.mobile-navigation .showmore-menu').click(function(){
      if($j(this).hasClass('open-menu')){
        $j(this).removeClass('open-menu');
        $j(this).closest('li').children('ul').slideUp();
      }
      else{
        $j(".mobile-navigation li ul ul").slideUp();
        // $j('.showmore-menu').removeClass('open-menu');
        $j(this).addClass('open-menu');
        $j(this).closest('li').children('ul').slideDown();
      }
    });
    
    if ($j(window).width() < 991 ){
      $j(".click-chart").text("Click to view details");
    }
    /* Sticky Menu - Sub Navigation */
    if ($j(window).width() > 991){
      var nav = $j(".Sub-Navigation-Wrapper");
      if (nav.length){
        var banner_height = $j("#bannerwrapper").offset().top + $j("#bannerwrapper").height() - $j("#headerwrapper").height() + 40;
        $j(window).scroll(function () {
          if ($j(window).scrollTop() >= banner_height) {
            $j('.Sub-Navigation-Wrapper').addClass('sticky-menu');
            $j('#contentwrapper').addClass('sticky-wrapper');
          } else {
            $j('.Sub-Navigation-Wrapper').removeClass('sticky-menu');
            $j('#contentwrapper').removeClass('sticky-wrapper');
          }
        });
      }
    } else {
      $j('.Sub-Navigation-Wrapper').removeClass('sticky-menu');
      $j('#contentwrapper').removeClass('sticky-wrapper');
    }
    
    /* Research Analyst Dropdown */
    $j(function() {
      $j('#researchselector').change(function(){
        $j('.analystname').hide();
        $j('#' + $j(this).val()).show();
      });
    });
    
    /* Info Graph - Mobile Functionality PE page */
    $j(".part").click(function () {
      var e = "";
      if($j(this).hasClass("active")){
        $j(this).removeClass("active");
        $j(".default-txt").addClass('show');
        $j(".part-inner-content").removeClass("active");
        $j(this).closest(".graph-circle").removeClass('opacity');
        $j(".part-inner-content").fadeOut();
      }else{
        $j(".part").removeClass("active");
        $j(this).addClass("active");
        $j(this).closest(".graph-circle").addClass('opacity');
        $j(".default-txt").addClass('hide');
        $j(".default-txt").removeClass('show');
        (e = $j(this).attr("class").split(" "));
        $j(".part-inner-content").removeClass("active");
        $j("." + e[1] + "-content").addClass("active");
        $j(".part-inner-content").fadeOut();
        $j("." + e[1] + "-content").fadeIn();
      }
    });
    
    /* Read More - Content Module */
    $j('.content-module-wrapper.expand .readmore').on("click" , function(){
      $j(this).closest('.intro-content').addClass('show');
      $j(this).addClass('hide');
      $j(this).next('.readless').removeClass('hide');
    });
    
    $j('.content-module-wrapper.expand .readless').on("click" , function(){
      $j(this).closest('.intro-content').removeClass('show');
      $j(this).addClass('hide');
      $j(this).prev('.readmore').removeClass('hide');
    });
    
    /*-- Twitter feeds link dynamic js starts --*/
    
    $j('.twitter-feeds-title:not(.no-title)').each(function() {
      
      if($j(this).find("p").length > 0){
        var str = $j(this).find("p").html();
        //console.log(str);
        //var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig;
        var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig;
        var replaced_text = str.replace(regex, "<a href='$1' target='_blank' title='Opens in a new window'>$1</a>");
        $j(this).find("p").html(replaced_text);
        var str1 = $j(this).find("p").html();
        var replaced_text1 = str1.replace(/#(\S*)/g, '<a target="_blank" title="Opens in a new window" href="http://twitter.com/#!/search/$1">#$1</a>');
        $j(this).find("p").html(replaced_text1);
        var str2 = $j(this).find("p").html();
        var replaced_text2 = str2.replace(/ @(\S*)/g, '<a target="_blank" title="Opens in a new window" href="http://twitter.com/#!/search/$1"> @$1</a>');
        $j(this).find("p").html(replaced_text2);
        $j(this).addClass("processed");
      }else{
        var str = $j(this).find('h3').html();
        //var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig;
        var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig;
        var replaced_text = str.replace(regex, "<a href='$1' target='_blank' title='Opens in a new window'>$1</a>");
        $j(this).find('h3').html(replaced_text);
        var str1 = $j(this).find('h3').html();
        var replaced_text1 = str1.replace(/#(\S*)/g, '<a target="_blank" title="Opens in a new window" href="http://twitter.com/#!/search/$1">#$1</a>');
        $j(this).find('h3').html(replaced_text1);
        var str2 = $j(this).find('h3').html();
        var replaced_text2 = str2.replace(/ @(\S*)/g, '<a target="_blank" title="Opens in a new window" href="http://twitter.com/#!/search/$1"> @$1</a>');
        $j(this).find('h3').html(replaced_text2);
        $j(this).addClass("processed");
      }
    });
    /*-- Twitter feeds link dynamic js ends --*/
    
    /* Video Galley */
    $j(".video-quote").click(function(){
      $j(".video-popup-link").trigger("click");
    });
    
    $j(document).on('click' , ".topnavigation .hedermenuSignpostItem .signpostRight .video-player p a", function(e){
      $j(this).parent().parent().find(".video-popup-link").trigger("click");
    });
    
    /* Alert */
    $j("#alert-agree").click(function(){
      $j(this).closest("#alertWrapper").slideUp();
    });
    /* Alert */
    
    /* Career - Tab */
    /*--------------------Tabs Starts---------------------*/
    $j(".tabs-content").hide();
    $j(".withoutRefresh ul").each(function() {
      $j(this).find("li").first().addClass("current").show(); //Activate first tab
    });
    $j(".tabs-content").each(function() {
      $j(this).parent().find(".tabs-content").first().show(); //Show first tab content
    });
    
    $j(".withoutRefresh ul li").click(function() {
      $j(this).closest('.withoutRefresh').find("li").removeClass("current"); //Remove any "active" class
      //$j(".tabs-content").removeClass("tabactive");
      $j(this).addClass("current"); //Add "active" class to selected tab
      var showTab = $j(this).find("a").attr("data-id"); //Find the href attribute value to identify the active tab + content
      $j(this).closest('.tabs-module').find(".tabs-content").hide();
      $j(this).closest('.tabs-module').find('#' + showTab).fadeIn();
      //$j(this).closest('.tabs-module').find(".tabs-content").focus();
      //$j(this).closest('.tabs-module').find('#' + showTab).addClass("tabactive");
      return false;
    });
    /*--------------------Tabs Ends---------------------*/
    
    /*--------------------Snapdowns starts---------------------*/
    //$j(".snapdownWrapper .snapdownItem:first-child").addClass("active");
    //$j(".snapdownWrapper .snapdownItem:first-child .snapdown-content").show();
    $j('.c-snapdown-title').click(function(e){
      e.preventDefault();
      if ($j(this).parent().hasClass('active')) {
        $j(this).parent().removeClass('active');
        $j(this).next('.c-snapdown-content').slideUp();
        $j(this).parent().removeClass('active');
      } else {
        $j('.c-snapdownItem').removeClass('active');
        $j('.c-snapdown-content').slideUp();
        $j(this).parent().addClass('active');
        $j(this).closest('.c-snapdownItem').find('.c-snapdown-content').slideDown("slow", function(){});
      }
    });
    
    $j('.t-snapdown-title').click(function(e) {
      e.preventDefault();
      if ($j(this).closest(".t-snapdownItem").hasClass('active')) {
        $j(this).closest(".t-snapdownItem").removeClass('active');
        $j(this).closest(".t-snapdownItem").next('.t-snapdown-content').css("display","none");
        $j(this).closest(".t-snapdownItem").removeClass('active');
      } else {
        $j('.t-snapdownItem').removeClass('active');
        $j('.t-snapdown-content').css("display","none");
        $j(this).closest(".t-snapdownItem").addClass('active');
        $j(this).closest('.t-snapdownItem').next('.t-snapdown-content').css("display","table-row");
      }
    });
    
    /*--------------------Snapdowns ends---------------------*/
    /*if($j(".sub-navigation ul li.level2").hasClass("haschildren")){
      $j(this).hover(function(){
        $j(this).find('ul').slideDown();
      });
    }else{
      $j(this).find('ul').slideUp();
    }*/
    
    /* Tab Mobile */
    $j('.tabs-module .tabs-listing.float100').append('<div class="mobiDropdown"><p class="mobi-drp-menu-selected">Select</p></div>');
    var UlClone = $j('.tabs-listing ul').clone();
    $j('.mobiDropdown').append(UlClone);
    $j('.mobiDropdown p').text($j('.mobiDropdown ul li.current span').text());
    $j('.mobiDropdown ul').removeAttr('id');
    $j('.mobiDropdown ul').addClass('mobi-tabs');
    $j('.mobiDropdown ul li').removeAttr('id');
    
    var contenttabstext = $j('.tabs-listing.float100 .mobiDropdown ul.mobi-tabs li.current span').text();
    $j('p.mobi-drp-menu-selected').text(contenttabstext);
    //$j(document).on('click', 'p.mobi-drp-menu-selected', function(e) {
    $j('p.mobi-drp-menu-selected').click(function(e){
      $j(this).toggleClass('active');
      $j(this).next().slideToggle();
      $j('body').toggleClass('active');
      //e.stopPropagation();
      //e.preventDefault();
    });
    $j('.tabs-listing.float100 ul li').click(function(e) {
      e.stopPropagation();
    });
    
    $j(".mobi-tabs li").click(function(e) {
      var mobitabstext = $j(this).find('span').text();
      $j(this).closest('.withoutRefresh').find("li").removeClass("current"); //Remove any "active" class
      $j(this).addClass("current"); //Add "active" class to selected tab
      var showTab = $j(this).find("a").attr("data-id"); //Find the href attribute value to identify the active tab + content
      $j(this).closest('.tabs-module').find(".tabs-content").hide();
      $j(this).closest('.tabs-module').find('#' + showTab).fadeIn();
      $j(this).closest('.mobi-tabs').slideToggle();
      $j(this).closest('.tabs-module').find('p.mobi-drp-menu-selected').text(mobitabstext);
      //e.stopPropagation();
      //e.preventDefault();
      //console.log(mobitabstext);
    });
    
    /* Tab Mobile */
    /* Career - Tab */
    
    /* Portfolio Section - Counter Divs */
    if($j(".portfolio-highlights-item-wrapper .portfolio-highlights-item-in").length==4){
      $j(".portfolio-highlights-item-wrapper .portfolio-highlights-item-in").addClass("col-md-3 col-sm-3 col-xs-12");
    }else{
      $j(".portfolio-highlights-item-wrapper .portfolio-highlights-item-in").addClass("col-md-4 col-sm-4 col-xs-12");
    }
    
    /*nav point click disable*/
    $j('li#nav-public-vehicles-level2 > a[target="_blank"], li#mobi-nav-public-vehicles-level2 > a[target="_blank"], li#footer-nav-nav-public-vehicles-level2 > a[target="_blank"], li#footer-mob-nav-public-vehicles-level2 > a[target="_blank"]').attr('href','javascript:;');
    
    $j('li#nav-public-vehicles-level2 > a[target="_blank"], li#mobi-nav-public-vehicles-level2 > a[target="_blank"], li#footer-nav-nav-public-vehicles-level2 > a[target="_blank"], li#footer-mob-nav-public-vehicles-level2 > a[target="_blank"]').removeAttr('target');
    
    /*add title to menu "opens in a new window"*/
    $j('.topnavigation a[target=_blank], .footer-bottom a[target=_blank], #mmenu a[target=_blank]').each(function(){
      $j(this).attr('Title','Opens in a new window');
    });
    
    $j(document).click(function(event) {
      if(!$j(event.target).closest('.department-selected.active').length){
        $j(".department-selected.active").removeClass('active');
        $j(".department-selected + ul").slideUp();
      }
      if(!$j(event.target).closest('.location-selected.active').length){
        $j(".location-selected.active").removeClass('active');
        $j(".location-selected + ul").slideUp();
      }
      if(!$j(event.target).closest('.type-selected.active').length){
        $j(".type-selected.active").removeClass('active');
        $j(".type-selected + ul").slideUp();
      }
      if(!$j(event.target).closest('.filter-year-n.active').length){
        $j(".filter-year-n.active").removeClass('active');
        $j(".filter-year-n + ul").slideUp();
      }
      if(!$j(event.target).closest('.fund-selected.active').length){
        $j(".fund-selected.active").removeClass('active');
        $j(".fund-selected + ul").slideUp();
      }
      if(!$j(event.target).closest('.year-selected.active').length){
        $j(".year-selected.active").removeClass('active');
        $j(".year-selected + ul").slideUp();
      }
      if(!$j(event.target).closest('.status-selected.active').length){
        $j(".status-selected.active").removeClass('active');
        $j(".status-selected + ul").slideUp();
      }
      if(!$j(event.target).closest('.industry-selected.active').length){
        $j(".industry-selected.active").removeClass('active');
        $j(".industry-selected + ul").slideUp();
      }
      if(!$j(event.target).closest('.investment-type-selected.active').length){
        $j(".investment-type-selected.active").removeClass('active');
        $j(".investment-type-selected + ul").slideUp();
      }
    });
    
    /*remove white space for small page*/
    var cHeight=$j('#contentwrapper').outerHeight();
    var hHeight=$j('#headerwrapper').outerHeight();
    var fHeight=$j('.footer-links-container').outerHeight();
    var vHeight=viewport().height;
    
    if(vHeight > (cHeight+hHeight+fHeight)){
      $j('#contentwrapper').css('min-height',(6 + vHeight - (hHeight+fHeight)+'px'));
    }
    
    /*make visible modules one by one*/
    if(!$j('body').hasClass('ie9')){
      $j('.module-landing').each( function(i){
        if(!$j(this).hasClass('shown')){
          $j(this).addClass('shown');
          $j(this).animate({'opacity':'1'},800, function(){
          });
        }
      });
    }
    
    /*bod without image*/
    if($j('.bodwrap').length>0){
      $j('.popup-link-bio').magnificPopup({
        type:'inline',
        closeOnBgClick:false,
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        callbacks: {
          open: function() {
            $j('html').addClass('popup-html-active');
            $j('body').addClass('popup-active');
          },
          close: function() {
            $j('html').removeClass('popup-html-active');
            $j('body').removeClass('popup-active');
          }
        }
      });
    }
    
    /*image with scrollbar*/
    if($j('img.rad-caption').length > 0){
      $j('img.rad-caption').each(function(){
        
        if($j(this).attr('width') > 480){
          $j(this).wrap( '<div class="imgWrapperScroll mob-scroll"></div>');
        }
      });
    }
    
    $j(".topnavigation ul li.level1").on('mouseenter',function () {
      $j(this).children("ul").stop(true, true).slideDown(200);
      var that = $j(this);
      setTimeout(function(){that.children("ul").addClass('shownav');},300);
    });
    
    $j(".topnavigation ul li.level1").on('mouseleave',function () {
      $j(this).children("ul").removeClass('shownav');
      $j(this).children("ul").slideUp(80);
    });
    
    $j(".header-right .top-links ul.rad-loginBtn > li").on('hover',function () {
      $j(this).children("ul").removeClass('shownavremove');
      $j(this).children("ul").toggleClass('shownav');
      $j(this).children("ul").stop().slideToggle(80);
    });
    
    $j("#mmenu .top-links ul.rad-loginBtn > li").on('click',function () {
      $j(this).children("ul").toggleClass('shownav');
      $j(this).children("ul").stop().slideToggle(80);
    });
    
    
    if($j('#footer-mob-menu  ul').length > 0){
      $j('#footer-mob-menu ul li.haschildren').each(function(){
        $j(this).append('<a class="showmore-footer">show more</a>');
      });
    }
    
    $j(".topnavigation > ul > li.level1.haschildren").attr('aria-haspopup','true');
    $j(".topnavigation > ul ul > li.level2").attr('aria-haspopup','false');
    $j(".topnavigation > ul ul > li.level2.haschildren").attr('aria-haspopup','true');
    $j(".footer-bottom > ul ul > li.level2.haschildren").attr('aria-haspopup','true');
    
    /* Share Functionality */
    $j('.share > a').on('click',function(){
      if($j('.share').hasClass('open')){
        $j('.share').removeClass('open');
        $j('.share-details').removeClass("show");
      }
      else{
        $j(this).parents().addClass('open');
        $j(this).siblings('.share-details').addClass("show");
      }
    });
    /* Share Functionality */
    
    
    /* Copy to clip JS */
    function copyToClipboard(element) {
      var $temp = $j("<input>");
      $j("body").append($temp);
      $temp.val(element).select();
      document.execCommand("copy");
      $temp.remove();
    }
    $j('.share-details a.icon-link').click(function(e){
      var currurl = $j(this).attr('href');
      copyToClipboard(currurl);
      $j('.share-details ul li:last-child').prepend("<div class='link-copied'>Link copied successfully</div>");
      setTimeout(function() {
        $j(".link-copied").hide();
        $j('.share-details ul li .link-copied').remove();
      }, 800);
      return false;
    });
    /* Copy to clip JS */
    
    /* Insights Show More Start*/
    
    if($j(".insights-bottom-section .article-main").find(".insight-title").length < 6) {
      $j('.loadmore').hide();
    }
    $j(".insights-bottom-section .article-main").find(".insight-title").slice(0, 8).show();
    $j(".insights-bottom-section .article-main").find(".loadmore a").on('click', function(){    
      if($j(this).text() == "Show more") {
        $j(this).addClass("show-active");
        $j(this).text('Show less');
        $j(this).parents(".article-main").find(".insight-title:hidden").slideDown();
        if ($j(this).parents(".article-main").find(".insight-title:hidden").length === 0) {
          $j(this).text('Show less');
        }
      } else {
        $j(this).parents(".article-main").find(".insight-title").hide();
        $j(this).parents(".article-main").find(".insight-title").slice(0, 8).show();
        $j(this).text('Show more');
        $j(this).removeClass("show-active");
      }
    });
    
    /* Insights Show More End*/
    
    /*----------------------Media ---------------------*/
    /*$j( ".media-landing" ).each(function(){
      if($j(this).find(".mediaWrap").length <=3){
        $j(this).find(".media-loadmore").fadeOut('slow');
      }
      $j(this).find(".mediaWrap").addClass("showmore-content");
      $j(this).find(".mediaWrap").slice(0, 3).removeClass('showmore-content');
    });*/
    
    /*header navigation*/
    $j('.topnavigation > ul > li.level1').each(function(i){
      var totalLI=$j('.topnavigation > ul > li.level1').length;
      if(i>5){
        $j('#right-header-nav > ul').append($j(this));
        $j('.topnavigation').addClass('showNav');
        $j('#logo').addClass('showNav');
      }
      if(i+1==totalLI){
        $j('#right-header-nav').addClass('topnavigation');
      }
    });
    
    if($j('.topnavigation > ul > li.level1').hasClass('current') || $j('.topnavigation > ul > li.level1').hasClass('selected')){
      $j('.topnavigation > ul > li').not('.current,.selected').addClass("inactive");
      $j('.top-links').addClass("inactive");
    }
    /*-----Top Navigation------------*/
    $j(".topnavigation > ul > li").hover(
      function () {
        $j('.topnavigation > ul > li').not(this).addClass("opacity");
        $j('.top-links').addClass("opacity");
        $j(this).addClass("active");
        var Navheight = $j(this).children("ul").outerHeight();
      },
      function () {
        $j('.topnavigation > ul > li').removeClass("opacity");
        $j('.top-links').removeClass("opacity");
        $j(this).removeClass("active");
      }
    );
    
    $j(".top-links a").hover(
      function () {
        $j('.topnavigation > ul > li').addClass("opacity");
        $j(this).addClass("active");
      },
      function () {
        $j('.topnavigation > ul > li').removeClass("opacity");
        $j(this).removeClass("active");
      }
    );
    
    $j(".topnavigation ul li.level2.haschildren").hover(
      function () {
        $j('.topnavigation ul li.level2').not(this).addClass("opacity");
        $j(this).addClass("active");
      },
      function () {
        $j('.topnavigation ul li.level2').removeClass("opacity");
        $j(this).removeClass("active");
      }
    );
    
    $j(".topnavigation ul li.level3").hover(
      function () {
        $j('.topnavigation ul li.level3').not(this).addClass("opacity");
        $j(this).addClass("active");
      },
      function () {
        $j('.topnavigation ul li.level3').removeClass("opacity");
        $j(this).removeClass("active");
      }
    );
    
    $j('.module-landing').first().css('opacity','1');
    if($j('.footer-links-container').isInViewport()){
      $j('.module-landing').css('opacity','1');
    }
    
    $j(window).scrollTop(1);
    $j(window).scrollTop(0);
    
    
    /* Dropdown starts */
    $j('.filter-inner-wrapper span.drp-list').click(function(){
      if($j(this).hasClass('active')){
        $j(this).next('ul').slideUp();
        $j(this).removeClass('active');
      }
      else{
        $j(".filter-inner-wrapper span.drp-list").removeClass('active');
        $j(this).addClass('active');
        $j(this).parents('.filter-inner-wrapper').find('.dd-wrap ul').slideUp();
        $j(this).next('ul').slideDown();
      }
    });
    
    if($j("#portfolio-companies").length){
      $j('.filter-inner-wrapper ul.drp-list li a').click(function(){
        $j(this).parents('.filter-inner-wrapper').find('.dd-wrap ul').slideUp();
      });
    }
    
    /* Dropdown ends*/
    
    makeEmployeesDataTable();
    
    /*Employee Filter Starts*/
    if($j(".leadership-wrapper").length){
      $j('.employee-filter-section .filter-inner-wrapper ul.drp-list li > a').click(function(e){
        var section=$j('.employee-list-section-wrapper').attr('data-section');
        $j(this).parents('.dd-wrap').find('ul.drp-list').slideDown();
        var sText = $j(this).text();
        var link = '<a href="javascript:;">';
        $j(this).parents('.dd-wrap').find('span.drp-list').html(link + sText + '</a>');
        $j(this).parents('.dd-wrap').find('ul.drp-list').find('li').children('a').removeClass('current');
        $j(this).addClass('current');
        $j(this).parents('.dd-wrap').find('span.drp-list').attr("data-itemname",$j(this).attr('data-itemname'));
        
        category=$j(".employee-category-wrapper span.category-selected.drp-list").attr("data-itemname");
        department=$j(".employee-departments-wrapper span.department-selected.drp-list").attr("data-itemname");
        selectedlocation=$j(".employee-locations-wrapper span.location-selected.drp-list").attr("data-itemname");
        title=$j("#txtEmployeeTitle").val()==='' || $j("#txtEmployeeTitle").val()==='Name'?'*':$j("#txtEmployeeTitle").val();
        
        if (!window.location.origin) {
          window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
        }
        
        $j.ajax({
          url:window.location.origin+section+"?async=1&department="+department+"&category="+category+"&location="+selectedlocation+"&title="+title,
          type:"get",
          success:function(data){
            employeesTable.destroy();
            $j('.employee-list-table-wrapper').fadeOut(200, function() {
                $j(this).html(data).fadeIn(200,function(){
                  makeEmployeesDataTable();
                });
            });
          }
      });
      $j(this).removeClass('selected');
      $j(this).parents('.dd-wrap').find('ul.drp-list').slideUp();
      $j(this).parents('.dd-wrap').find('span.drp-list').removeClass('active');
    });
  }
  /*Employee Filter Ends*/
  
  /*--------------------Board of Directors Js starts--------------------------------*/
  //BODSnapdown();
  bod_arranged=true;
  
  $j('.accordion-image-wrapper').click(function(e){
    $j(this).parent().find('.accordion-btn').trigger('click');
  });
  
  $j(".accordion-btn").click(function(e){
    var clickedBTN=$j(this);
    var bodModuleID=$j(this).parents('.member-mod').attr('id');
    var contentRow=$j(this).parents('.accordion-row').next();
    
    if($j(this).hasClass('active')){
      $j(this).removeClass("active");
      
      $j("#"+$j(contentRow).attr('id')+".accordion-content-row").slideUp( "slow",function(){
        $j('#'+bodModuleID+' .accordionWrap').removeClass('selected');
        $j("#"+bodModuleID+" .accordion-content-row").html('');
      });
      
      $j(this).parents('.accordion-inner-wrapper').removeClass('opened');
    }else{
      if($j('#'+bodModuleID+' .accordion-btn.active').length>0){
        $j('#'+bodModuleID+' .accordion-inner-wrapper.opened').removeClass('opened');
        $j("#"+bodModuleID+" .accordion-content-row").hide();
        $j('#'+bodModuleID+' .accordionWrap.selected').removeClass('selected');
        $j("#"+bodModuleID+" .accordion-content-row").html('');
        $j('#'+bodModuleID+' .accordion-btn.active').removeClass('active');
      }
      
      $j(this).addClass("active");
      $j('#'+bodModuleID+' .accordionWrap').addClass('selected');
      var dt = $j(this).attr("data-content");
      $j('.details-wrapper.'+dt).clone().appendTo("#"+$j(contentRow).attr('id')+".accordion-content-row");
      $j("#"+$j(contentRow).attr('id')+".accordion-content-row .details-wrapper").show();
      $j("#"+$j(contentRow).attr('id')+".accordion-content-row").slideDown( "slow",function(){
        if(viewport().width >767){
          var offsetTop=clickedBTN.parents('.accordion-inner-wrapper').offset().top;
          $j('html,body').animate({scrollTop:offsetTop-$j('#headerwrapper').outerHeight()},500);
        }
      });
      clickedBTN.parents('.accordion-inner-wrapper').addClass('opened');
    }
  });
  
  /*close btn for BOD section*/
  $j(document).on('click','.close_btn', function(){
    var bodModuleID=$j(this).parents('.member-mod').attr('id');
    var contentRow=$j(this).parents('.accordion-content-row').attr('id');
    
    $j('#'+bodModuleID+' .accordion-inner-wrapper.opened').removeClass('opened');
    $j('#'+contentRow).slideUp( "slow",function(){
      $j('#'+bodModuleID+' .accordion-btn.active').removeClass('active');
      $j('#'+bodModuleID+' .accordionWrap.selected').removeClass('selected');
      $j('#'+contentRow).html('');
    });
  });
  
  /*close btn for shareholder section*/
  $j(document).on('click','.close_btn_shareholder', function(){
    var shareholderID=$j(this).parents('.section-inner-page.selected');
    var contentRow=shareholderID.find('.subpage-content-row:visible').attr('id');
    
    $j('#'+contentRow).slideUp( "slow",function(){
      shareholderID.find('.subpage-link.active').removeClass('active');
      shareholderID.find('.subpage-link-wrapper.active').removeClass('active');
      shareholderID.removeClass('selected');
    });
  });
  
  /*Click outside area*/
  $j('#MainWrapper').click(function(e){
    if($j(e.target).closest(".accordionWrap.selected").length === 0){
      $j('.accordionWrap.selected').each(function(){
        var bodModuleID=$j(this).parents('.member-mod').attr('id');
        var contentRow=$j('#'+bodModuleID+' .accordion-content-row:visible').attr('id');
        
        $j('#'+bodModuleID+' .accordion-inner-wrapper.opened').removeClass('opened');
        $j('#'+contentRow).slideUp( "slow",function(){
          $j('#'+bodModuleID+' .accordion-btn.active').removeClass('active');
          $j('#'+bodModuleID+' .accordionWrap.selected').removeClass('selected');
          $j('#'+contentRow).html('');
        });
      });
    }
    
    if($j(e.target).closest(".section-inner-page.selected").length === 0){
      var shareholderID=$j('.section-inner-page.selected');
      var contentRow=shareholderID.find('.subpage-content-row:visible').attr('id');
      
      $j('#'+contentRow).slideUp( "slow",function(){
        shareholderID.find('.subpage-link.active').removeClass('active');
        shareholderID.find('.subpage-link-wrapper.active').removeClass('active');
        shareholderID.removeClass('selected');
      });
    }
    
  });
  
  /*--------------------Board of Directors Js ends-------------------------------*/
  
  /*------Snapdown-*/
  $j('.snapdown-link').click(function(e) {
    e.preventDefault();
    $j(this).prevAll(".showmore-content").slideToggle(800);
    
    $j(this).toggleClass('active');
    if ($j(this).hasClass('active')) {
      $j(this).text("show less");
    }else{
      $j(this).text("show more");
    }});
  
  
  /* Slick Slider */
  
  /* background Image SLider - Homepage */
  if($j('#sliderBackgroundWrapper .bg-slide-item').length > 1){
    $j('#sliderBackgroundWrapper .sliderbgWrapper').slick({
      dots: false,
      arrows:false,
      infinite: true,
      fade:true,
      speed: 1200,
      autoplay: true,
      pauseOnHover:false,
      pauseOnFocus:false,
      autoplaySpeed: 8000,
      accessibility:false
    });
  }
  
  /* background Image SLider - Inner Page */
  if($j('#sliderInnerBackgroundWrapper .bg-slide-item').length > 1){
    $j('#sliderInnerBackgroundWrapper .sliderInnerbgWrapper').slick({
      dots: false,
      arrows:false,
      infinite: true,
      fade:true,
      autoplay: true,
      pauseOnHover:false,
      pauseOnFocus:false,
      autoplaySpeed: 6000,
      accessibility:false
    });
  }
  
  /* background Image SLider - Homepage over banner Slider*/
  if($j('#sliderBannerWrapper .banner-slide-item').length > 1){
    $j('#sliderBannerWrapper .sliderInnerWrapper').slick({
      dots: true,
      arrows:false,
      infinite: true,
      fade:false,
      autoplay: false,
      pauseOnHover:false,
      pauseOnFocus:false,
      autoplaySpeed: 6000
    });
    
    $j("#sliderBannerWrapper .sliderInnerWrapper .banner-slide-item").each(function(){
      if($j(this).hasClass("slick-current")){
        var getCrrHeight = $j(this).height();
        $j(this).find(".banner-image-wrapper").css("height",getCrrHeight);
        $j(".slick-dots").css("top",getCrrHeight - 40);
      }
    });
    
    
    $j('#sliderBannerWrapper .sliderInnerWrapper').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $j(".banner-slide-item").each(function(){
          if($j(this).hasClass("slick-current")){
              var getCrrHeight = $j(this).height();
              $j(this).find(".banner-image-wrapper").css("height",getCrrHeight);
              $j(".slick-dots").css("top",getCrrHeight - 40);
          }
      });
    });
    
    $j(window).on("load resize", function(){
      var $window = $j(window).width();
      if($window <= 991){
        $j(".banner-image-wrapper").each(function(){
          var getMobileSrc = $j(this).attr("data-mobi");
          $j(this).find("img").attr("src",getMobileSrc);
        });
      }
      else{
        $j(".banner-image-wrapper").each(function(){
          var getOrSrc = $j(this).attr("data-src");
          $j(this).find("img").attr("src",getOrSrc);
        });
      }
    });
  }
  
  if($j('#sliderMemberWrapper .member-slides').length >= 4){
    var hideMember = $j('#sliderMemberWrapper').data('current');
    $j('.'+hideMember).remove();
    $j('#sliderMemberWrapper .sliderMember').slick({
      dots: false,
      arrows:true,
      fade:false,
      infinite: true,
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      accessibility:false,
      //variableWidth: true,
      //rows: 0,
      //pauseOnHover:false,
      //pauseOnFocus:false,
      //autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
  
  /* Our People Module */
  if($j('.Our-People-Wrapper .people-slide').length > 2){
    $j('.Our-People-Wrapper .people-gallery').slick({
      infinite: true,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      fade: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
  
  /* Location Slider - Career Page */
  if($j('#LocationWrapper .location-slides').length > 1){
    $j('#LocationWrapper .sliderLocation').slick({
      dots: true,
      arrows:false,
      infinite: true,
      focusOnSelect: true,
      slidesToShow: 2,
      centerMode: true,
      centerPadding: '70px',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            variableWidth: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: '30px'
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        }
      ]
    });
  }
  
  /* Slick Slider */
  
  /*---------- Equal Height boxes start -----------------*/
  
  $j('.accordion-content').getSameTopGroups({
    commonParent: '#leadership'
  }, function(gc) {
    for (i = 1; i <= gc; i++) {
      setEqualHeight_CommonClass(".gg-g-" + i + " .accordion-title");
      setEqualHeight_CommonClass(".gg-g-" + i + " .accordion-subheading");
    }
  });
  $j('.insurance-diversified-solutions-item').getSameTopGroups({
    commonParent: '.insurance-diversified-solutions'
  }, function(gc) {
    for (i = 1; i <= gc; i++) {
      setEqualHeight_CommonClass(".gg-g-" + i + " .description");
      
    }
  });
  
  $j('.risk-return-spectrum-accordion-item').getSameTopGroups({
    commonParent: '.risk-return-spectrum-accordion-module'
  }, function(gc) {
    for (i = 1; i <= gc; i++) {
      setEqualHeight_CommonClass(".gg-g-" + i + "");
      
    }
  });
  
  
  
  
  $j('.key-highlights-container .hlbreak').nextUntil('.hlbreak').addClass('equalheight-item');
  $j('.equalheight-item').getSameTopGroups({
    commonParent: '.key-highlights-container'
  }, function(gc) {
    for (i = 1; i <= gc; i++) {
      setEqualHeight_CommonClass(".gg-g-" + i + "");
      
    }
  });
  
  /*---------- Equal Height boxes end -----------------*/
  
  /*---------- Equal Height For Logos -----------------*/
  
  /* $j(document).ready(function(){
        makeLocationEqualHeight();
      });
       $j(window).resize(function(){
        makeLocationEqualHeight();
      }); 
      function makeLocationEqualHeight(){
      var windowWidth = $j(document).width();
      console.log(windowWidth);
      if(windowWidth < 767){
          if($j('.locationModule').length>0){
          $j('.locationModule').each(function(){
            var modId=$j(this).attr('id');
            setEqualHeight_CommonClass("#"+modId+" .locationItem .location-item-inner-wrapper .loc-address");
          });
        }
      }
    } */
  
  /*---------- Equal Height For Logos() -----------------*/    
  
  /*--- error page redirection and counter starts --------*/
  if ($j('body').attr('id') == 'ip3-error-page' && !$j('body').hasClass('ip3-edit')) {
    var counter_value = parseInt($j('.counter').html());
    var cnt = setInterval(function() {
      counter_value--;
      if (counter_value < 10) {
        $j('.counter').html('0' + counter_value);
      } else {
        $j('.counter').html(counter_value);
      }
      if (counter_value <= 0) {
        window.location.href = window.location.protocol + '//' + window.location.hostname;
        clearInterval(cnt);
      }
    }, 1000);
    
  }
  
  /*--- error page redirection and counter ends --------*/
  
  /* ------------------ Banner start ------------------*/
  if (!$j('.sliderbanner').hasClass('slick-initialized')) {
    $j('.sliderbanner').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 300000
    });
  }
  /* ------------------ Banner  end ------------------*/
  
  /*------------------ Year Tab mobi snapdown starts ------------------*/
  $j('.mobi-pr-tabs .year-item').click(function() {
    $j(this).toggleClass('active');
    $j(this).next().slideToggle();
    $j('.mobi-pr-tabs .year-item').not(this).next().slideUp();
    $j('.mobi-pr-tabs .year-item').not(this).removeClass('active');
    
  });
  /*------------------ Year Tabmobi snapdown ends ------------------*/
  
  /* ------------------ Document open starts ------------------*/
  $j("pr-document-field a").click(function() {
    ga("send", "event", "PR PDF", "click", $j(this).attr("data-url"));
  });
  /* ------------------ Document open ends ------------------*/
  
  /* ------------------ add attribute into append li starts------------------*/
  
  /* ------------------ add attribute into append li ends ------------------*/
  
  /*-------Wrap tables except inv-responsive tables with horizontal scrollable wrapper Starts--*/
  $j('#contentwrapper table').each(function(){
    if(!$j(this).parent().hasClass('chart') && !$j(this).hasClass('sort-table') && !$j(this).hasClass('table-animate') && !$j(this).hasClass('distribution-chart') && !$j(this).hasClass('inv-responsive') && !$j(this).hasClass('prReports') && !$j(this).hasClass('rad-responsive') && !$j(this).hasClass('mob-distribution-table') && !$j(this).hasClass('inv-responsive-table')){
      if($j(this).parents('div.scroll-table-container').length < 1){
        $j(this).wrap('<div class="scroll-table-container"></div>');
      }
    }
  });
  /*-------Wrap tables except inv-responsive tables with horizontal scrollable wrapper Ends--*/
  
  /* ------------------ aappend navigation starts ------------------*/
  var mainNavClone = $j('.appended-main-navigation > ul').clone();
  $j('li.append-navigation').append(mainNavClone);
  $j('.appended-main-navigation').empty();
  /* ------------------ aappend navigation ends ------------------*/
  
  /* ------------------ Snapdown Starts ------------ */
  $j('.snapdown-item.first').addClass('active');
  $j('.snapdown-title').click(function() {
    $j(this).parent().toggleClass('active');
    $j(this).next().slideToggle();
    $j('.snapdown-title').not(this).next().slideUp();
    $j('.snapdown-title').not(this).parent().removeClass('active');
  });
  /* ------------------ Snapdown Ends ------------ */
  
  /* ------------------ Search - Following function is used for <enter> issue in IE ------------ */
  $j(".searchbox .search input").keypress(function(e) {
    if (e.keyCode == 13) {
      $j("#searchButtonContainer #searchButton").click();
    }
  });
  /* ------------------ <END> Following function is used for <enter> issue in IE ------------ */
  
  
  /* ------------------ File extension to UPPERCASE in title attribute ------------------ */
  $j("a.media-link").each(function() {
    var tmpTxt = $j(this).attr("title").split(",");
    if (tmpTxt.length > 1) {
      tmpTxt[0] = tmpTxt[0].toUpperCase();
    }
    $j(this).attr("title", tmpTxt.join());
  });
  
  $j("a.media-link>img").each(function() {
    var tmpTxt = $j(this).attr("alt").split(",");
    if (tmpTxt.length > 1) {
      tmpTxt[1] = tmpTxt[1].toUpperCase();
    }
    $j(this).attr("alt", tmpTxt.join());
  });
  
  
  $j("a.pdf-swap").each(function() {
    var tmpTxt = $j(this).attr("title").split(",");
    if (tmpTxt.length > 1) {
      tmpTxt[0] = tmpTxt[0].toUpperCase();
    }
    $j(this).attr("title", tmpTxt.join());
  });
  
  $j("a.pdf-swap>img").each(function() {
    var tmpTxt = $j(this).attr("alt").split(",");
    if (tmpTxt.length > 1) {
      tmpTxt[1] = tmpTxt[1].toUpperCase();
    }
    $j(this).attr("alt", tmpTxt.join());
  });
  
  /* ------------------ <END> File extension to UPPERCASE in title attribute ------------ */
  
  /* Search */
  $j('.search-txt').click(function(e) {
    e.stopPropagation();
  });
  $j('.search-btn').click(function(e) {
    $j(".searchbox").slideToggle();
    $j(".searchbox").toggleClass("open");
    $j(".close-icon").toggleClass("open");
    $j(this).toggleClass("open");
  });
  $j('body').on('click touchend',function(event) {
    if(!$j(event.target).closest('.ui-autocomplete.ui-menu').length && !$j(event.target).closest('.searchbox').length && !$j(event.target).closest('.search-btn').length) {
      if($j('.searchbox').hasClass('open')){
        $j('.search-btn').removeClass('open');
        $j(".searchbox").removeClass("open");
        $j(".searchbox").slideUp();
      }
    }
    
    if(!$j(event.target).closest('.share').length) {
      if($j('.share').hasClass('open')){
        $j('.share').removeClass("open");
        $j('.share-details').removeClass("show");
      }
    }
  });
  
  $j('.close-icon').click(function(e) {
    $j(this).closest(".searchbox").slideToggle();
    $j(this).closest(".searchbox").toggleClass("open");
  });
  /* Search */
  
  
  /* Navigation start */
  $j('#topnavigation > ul').clone().appendTo('#mobishownav');
  $j('#mobishownav *').each(function() {
    if ($j(this).attr('id')) {
      $j(this).attr('id', 'mobi-' + $j(this).attr('id'));
    }
  });
  /* Navigation end */
  
  /* Mobile search start */
  $j('.mobisearch span').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if($j('#mobishownav').hasClass('open')){
      $j('.mobishow .mobinav').trigger('click');
    }
    
    if ($j(this).hasClass('selected')) {
      $j('#mobishowsearch').slideUp();
      $j(this).removeClass('selected');
      $j(".menuArrow2").hide(200);
    } else {
      if ($j('.mobinav span').hasClass('selected')) {
        $j('.mobinav span').trigger('click');
      }
      $j('#mobishowsearch').slideDown();
      $j(this).addClass('selected');
    }
    
  });
  
  /* Mobile search end */
  
  
  $j(document).click(function(event) {
    if(!$j(event.target).closest('.mobishow').length && !$j(event.target).closest('.mobiMenus').length) {
      if($j('#mobishownav').hasClass('open')){
        $j('.mobishow .mobinav').trigger('click');
      }
      if($j('.mobisearch .searchbg').hasClass('selected')){
        $j('.mobisearch span').trigger('click');
      }
    }
  });
  
  
  $j('#headerwrapper').on('click','.mobishow .mobinav',function(){
    
    if($j('.mobisearch .searchbg').hasClass('selected')){
      $j('.mobisearch span').trigger('click');
    }
    
    $j('#mobishownav').slideToggle().toggleClass('open');
  });
  
  
  $j('#mobishownav li').each(function(index){
    if($j(this).find('ul').length){
      $j(this).find('> a').append($j('<span class="showmore"></span>'));
    }
  });
  
  $j('#headerwrapper').on('click','.showmore',function(e){
    e.preventDefault();
    
    $j(this).toggleClass('selected');
    $j(this).closest('li').find('>ul').slideToggle();
  });
  
  /* Events Data Snapdowns */
  
  $j(document).on("click", ".related-materials-collapsed", function() {
    $j(this).next().slideToggle();
    $j(this).toggleClass('active');
  });
  
  $j('.related-materials-expand').each(function() {
    if (!$j.trim($j(this).html()).length) {
      $j(this).prev().css('display', 'none');
    }
  });
  
  /* Events Data Snapdowns */
  
  /* Contact form start */
  $j('.ir-contact-form .form-right input[type="submit"]').click(function() {
    $j('.form-right input').removeClass('errorClass');
    $j('.form-right textarea').removeClass('errorClass');
    $j('.form-right span').each(function() {
      if ($j(this).css('visibility') == "visible") {
        $j(this).parent().find('input').addClass('errorClass');
        $j(this).parent().find('textarea').addClass('errorClass');
      }
    });
  });
  /* Contact form end */
  
  /* Mobile Year drop down start */
  var contenttabstext = $j('.tabs.float100 ul li.current span').text();
  $j('p.mobi-drp-menu-selected').text(contenttabstext);
  $j(document).on('click', 'p.mobi-drp-menu-selected', function(e) {
    $j(this).toggleClass('active');
    $j(this).next().slideToggle();
    $j('body').toggleClass('active');
    e.stopPropagation();
  });
  $j('.tabs.float100 ul li').click(function(e) {
    e.stopPropagation();
  });
  $j(document).click(function(e) {
    $j('p.mobi-drp-menu-selected.active').trigger('click');
  });
  /* Mobile Year drop down end */
  
  /*  Desktop left-side menu drop-down effect start */
  $j('#leftnavigation ul > li').each(function() {
    if ($j(this).hasClass('haschildren')) {
      if ($j(this).hasClass('selected')) {
        $j(this).append('<a href="javascript:;" class="showmore-menu opened"></a>');
        $j(this).children('ul').slideToggle();
      } else {
        $j(this).append('<a href="javascript:;" class="showmore-menu"></a>');
      }
    }
  });
  
  $j('#leftnavigation ul > li.haschildren a.showmore-menu').click(function() {
    if ($j(this).hasClass('opened')) {
      $j(this).siblings('ul').slideUp();
      $j(this).removeClass('opened');
    } else {
      $j('#leftnavigation ul > li.haschildren ul').each(function() {
        $j(this).slideUp();
      });
      $j('#leftnavigation ul > li.haschildren a.showmore-menu').each(function() {
        $j(this).removeClass('opened');
      });
      $j(this).toggleClass('opened');
      $j(this).siblings('ul').slideToggle();
    }
    
  });
  /*  Desktop left-side menu drop-down effect Ends */
  
  });
  $j(window).load(function() {
    
    setTimeout(function(){
      $j(document).on('click' , ".topnavigation .hedermenuSignpostItem .signpostRight .video-player .video-popup-link", function(e){
        $j(this).trigger("click");
      });
    }, 600);
    
    currWidth = viewport().width;
    
    if(currWidth>767){
      $j(".member-mod").each(function(){
        var bodModule=$j(this).attr('id');
      });
    }else{
      $j(".history-year .year-child").height('auto');
    }
    
    $j(".profiles-loadmore").fadeIn('slow');
    if($j(".profiles-item-wrapper").length <=2){
      $j(".profiles-loadmore").fadeOut('slow');
    }
    $j(".profiles-item-wrapper").addClass('hide');
    $j(".profiles-item-wrapper").slice(0, 2).addClass('show').removeClass('hide');
    $j(".profiles-loadmore").on('click','a', function (e) {
      e.preventDefault();
      $j(".profiles-item-wrapper.hide").slice(0, 2).addClass('show').removeClass('hide');
      if ($j(".profiles-item-wrapper:hidden").length == 0) {
        $j(".profiles-loadmore").fadeOut('slow');
      }
    });
    
  });
  
  $j(window).load(function(e) {
    
    if($j(window).width() > 991){
      $j('#apollo-portfolio-performance').find(".readmore").trigger('click');
    }
    
    $j(window).resize(function(){
      if($j(window).width() > 991){
        $j('#apollo-portfolio-performance').find(".readmore").trigger('click');
      }
    }).resize();
    
    /* Custom Scrollbar */
    if ($j('#ip3-our-people').length > 0) {
      $j(".filter-department").mCustomScrollbar();
      $j(".filter-locations").mCustomScrollbar();
    }
    if ($j('#portfolio-companies').length > 0) {
      $j(".filter-year").mCustomScrollbar();
      $j(".filter-industry").mCustomScrollbar();
    }
    /*if ($j('#ip3-press-releases').length > 0) {
      $j(".filter-year").mCustomScrollbar();
    }
    if ($j('#ip3-in-the-news').length > 0) {
      $j(".filter-year").mCustomScrollbar();
    }*/
    
    var curr_url = window.location.href;
    if (curr_url.indexOf('#') != -1) {
      var curr_item = curr_url.split('#')[1];
      var offsetTop=$j('#' + curr_item).offset().top;
      $j('html,body').animate({scrollTop:offsetTop-$j('#headerwrapper').outerHeight()},1000);
    }
    
  
    
  });
  
  
  var referrer =  document.referrer;
  if(referrer.indexOf("source=hangouts") > -1) {
    
    var referrerSELF = document.location.href;
    
    if (referrerSELF.indexOf("www.apollo.com") > 0){
      document.location.href = "https://www.apollo.com/site-services/possible-fraud-detected";
    }
    
    if(location.protocol == 'https:')
    {
      window.location.replace("https://www.apollo.com/site-services/possible-fraud-detected");
    }
    
  }
  
  $j('.risk-return-accordion-title').click(function() {
    if($j(this).hasClass('active')){
      $j(this).next().slideUp();
      $j(this).removeClass('active');
    } else {
      
      $j(this).next().slideDown();
      $j(this).addClass('active');
    }
  });
  
  
  $j('.graph-box-item .plus-icon').click(function() {
    if($j(this).hasClass('active')){
      $j(this).next().slideUp();
      $j(this).removeClass('active');
    } else {
      $j('.graph-box-item .plus-icon').removeClass('active');
      $j('.graph-box-description').slideUp();
      $j(this).next().slideDown();
      $j(this).addClass('active');
    }
  });
  
  /*
  Copy link URL change to current page url
  */
  $j(document).ready(function(){
    /*var current_page_url = window.location.href;
    $j(".share-details ul li a.icon-link").attr("href",current_page_url);
    
    $j(".inv_playerContainer").InvPlayer();
    $j(".buttonPopup").click(function(){
      var htmlOfPopup = $j(this).next().html();
      $j(".popupDataDisplay .appendHtml").html(htmlOfPopup);
      $j(".popupDataDisplay").fadeIn(500);
       setTimeout(function(){ 
          $j("#videoPlayer").InvPlayer();
       }, 1000);
    });
    $j(".popupDataDisplay .closePopup").click(function(){
      $j(".popupDataDisplay").fadeOut(500, function(){
        $j(".popupDataDisplay .appendHtml").html("");	
      });
    });*/
    
    $j(".buttonPopup").each(function(){
      $j(this).magnificPopup({
        items: {
          src: $j(this).next('.popupData'),
          type: 'inline'
        },
        showCloseBtn: false,
        callbacks: {
          open: function() {
            $j(".mfp-content .popupData .inv_playerContainer").InvPlayer().done(function(e){  
              console.log("yyy");
              e.playVideo();
            });
            $j('html').addClass('popup-html-active');
            $j('body').addClass('popup-active');
            $j('.mfp-content').addClass('videoPopupWithContent');
            
            var mfp = $j.magnificPopup.instance;
            var proto = $j.magnificPopup.proto;
            
            // extend function that moves to next item
            mfp.next = function() {
              
              // if index is not last, call parent method
              if(mfp.index < mfp.items.length - 1) {
                proto.next.call(mfp);
              } else {
                // otherwise do whatever you want, e.g. hide "next" arrow
                $j('.mfp-arrow-right').hide();
              }
            };
            
            // same with prev method
            mfp.prev = function() {
              if(mfp.index > 0) {
                proto.prev.call(mfp);
              }
            };
          },
          close: function() {
            console.log("popup closed");
            $j(".mfp-content .popupData .inv_playerContainer").InvPlayer().done(function(f){
              f.stopVideo();
            });
            
            
            $j('html').removeClass('popup-html-active');
            $j('body').removeClass('popup-active');
            $j('.mfp-content').removeClass('videoPopupWithContent');
          }
        },
        closeOnBgClick:false,
        gallery:{
          enabled:false
        },
        midClick: false
      });
    });
    
    
    /*--------------------Governance Leadership - starts--------------------------------*/
    
    if($j(".bodWrapper").length>0){
      var idcountt=0;
      $j(".member-row").each(function(){
        idcountt = idcountt + 1;
        $j(this).attr("id", "member-row-"+idcountt);
        var t1 = $j(this).attr("id");
        
        $j("<div class=' member-content-row' id='member-content-row-"+idcountt+"'></div>").insertAfter(this);
        var elems1 = $j("#"+t1+" .member-item-content-wrapper-2");
        var arr1 = $j.makeArray(elems1);
        
        $j(arr1).clone().appendTo("#member-content-row-"+idcountt+".member-content-row");
      });
    }
    
    /*$j(".accordionWrap.mod-common-pad").on("click", ".member-item", function(){
  if($j(this).hasClass('active')){
  $j(".member-item").removeClass("active");
  $j(".member-item-content-wrapper-2").slideUp( "slow", function() {
      // Animation complete.
    });
    $j(".bodWrapper").removeClass("active-wrapper");
  
  
  }else{
  $j(this).addClass("active");
  var dt = $j(this).attr("data-content");
  $j(".member-item-content-wrapper-2").hide();
  $j(".member-content-row ."+dt).slideDown( "slow", function() {
      // Animation complete.
    });
     
  $j(".member-item").removeClass("active");
  $j(this).addClass("active");
  $j(".bodWrapper").addClass("active-wrapper");
  }
  });
  */
    /*--------------------Governance Leadership Js ends-------------------------------*/  
    
    
    
  });
  
  //career slider popup body scroll
  jQuery('.video-popup-link').click(function(){
    jQuery("body,html").addClass("active-video-popup");
  });
  jQuery('.video-popup .mfp-close').click(function(){
    jQuery("body,html").removeClass("active-video-popup");
  });
  jQuery(".Our-People-Wrapper .people-side-by-side .video-player img.videoIconImagePopup").click(function(e){
    e.stopPropagation();
    jQuery(this).parent().next().next().next().click();
  });
  
  // ESG stats bold fonts variation mobile image display
  jQuery(document).ready(function(){
    jQuery(window).on('resize',function(){
      if (jQuery(window).width() < 768) {   
        var esgStatsMobileImage = jQuery(".portfolio-highlight-signpost-wrapper").attr('mobileimage');
        jQuery(".portfolio-highlight-signpost-wrapper").css('background-image','url(' + esgStatsMobileImage + ')'); 
      }
    }); 
  });
  
  /*********BOD Filter JS*******/
  $j(".governance-leadership-category span").click(function(){
    $j(".filter-department").slideToggle();
  });
  
  $j(".governance-leadership-category .filter-department a").click(function(){
    
    var sectionID  = $j(".bodFilterParent").attr("id");
    
    $j(".filter-department").slideUp();
    var selectedItem = $j(this).text();
    $j(".category-selected a").text(selectedItem);
    var dataItem = $j(this).attr("data-itemname");
    var pathName = window.location.pathname;
    
    var asyncURL = pathName+"/module-landing/"+sectionID+"?async=1&ip3Rendering=async-governance-leadership&category="+dataItem;
    console.log(asyncURL);
    $j( ".accordionWrap.mod-common-pad.with-filter" ).load(asyncURL, function(){
      if($j(".bodWrapper").length>0){
        var idcountt=0;
        $j(".member-row").each(function(){
          idcountt = idcountt + 1;
          $j(this).attr("id", "member-row-"+idcountt);
          var t1 = $j(this).attr("id");
          
          $j("<div class=' member-content-row' id='member-content-row-"+idcountt+"'></div>").insertAfter(this);
          var elems1 = $j("#"+t1+" .member-item-content-wrapper-2");
          var arr1 = $j.makeArray(elems1);
          
          $j(arr1).clone().appendTo("#member-content-row-"+idcountt+".member-content-row");
        });
      }
      });
  });
  
  
  
  
  $j(".accordionWrap.mod-common-pad").on("click",".member-item",function(){
    /*var dataContent = $j(this).attr("data-content");*/
    //$j("."+dataContent).slideToggle();
    /*$j(this).parent().next().slideToggle();*/
    
    
    if($j(this).hasClass('active')){
      $j(".member-item").removeClass("active");
      $j(".member-item-content-wrapper-2").slideUp( "slow", function() {
        // Animation complete.
      });
      $j(".bodWrapper").removeClass("active-wrapper");
      
      
    }else{
      $j(this).addClass("active");
      var dt = $j(this).attr("data-content");
      $j(".member-item-content-wrapper-2").hide();
      $j(this).parent().parent().next().find("."+dt).slideDown( "slow", function() {
        // Animation complete.
        console.log("dt", dt);
        var $container = $j("html,body");
        var $scrollTo = $j(this).parent();
        /*var heightOfDiv = $j(this).outerHeight();*/
        var heightOfDiv = 464;
        console.log("heightOfDiv",heightOfDiv);
        
        /*$container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop() - heightOfDiv, scrollLeft: 0},500); */
        
        /* $container.animate({scrollTo: 1464, scrollLeft: 0},500); */
        
      });
      
      $j(".member-item").removeClass("active");
      $j(this).addClass("active");
      $j(".bodWrapper").addClass("active-wrapper");
    }
    
    
    
  });
  
  $j(document).on("click",".governance-leadership .accordionWrap.mod-common-pad a.close-bod-item",function(){
    $j(".member-item").removeClass("active");
    $j(".bodWrapper.governance-leadership .accordion-inner-wrapper").addClass("opacity-active");
    $j(".member-item-content-wrapper-2").slideUp( "slow", function() {
      // Animation complete.
    });
    $j(".bodWrapper").removeClass("active-wrapper");
  });
  
  //Equal height for governance leadersip BOD  starts
  /*var maxHeight = 0;
  
  jQuery(".bodWrapper.governance-leadership .withImage .accordion-inner-wrapper").each(function(){
     if (jQuery(this).outerHeight() > maxHeight) { maxHeight = jQuery(this).outerHeight(); }
  });
  
  jQuery(".bodWrapper.governance-leadership .withImage .accordion-inner-wrapper").height(maxHeight);
  
  
  */
  
  //Equal height for governance leadersip BOD ends
  
  
  //Equal height for Our business sub links starts
  
  var maxHeight = 0;
  
  jQuery(".our-business-sub-link-wrapper .our-business-sub-link-item").each(function(){
    if (jQuery(this).outerHeight() > maxHeight) { maxHeight = jQuery(this).outerHeight(); }
  });
  
  jQuery(".our-business-sub-link-wrapper .our-business-sub-link-item").height(maxHeight);
  
  var maxHeight = 0;
  
  jQuery(".our-business-sub-link-item .title-top").each(function(){
    if (jQuery(this).outerHeight() > maxHeight) { maxHeight = jQuery(this).outerHeight(); }
  });
  
  jQuery(".our-business-sub-link-item .title-top").height(maxHeight);
  
  
  var maxHeight = 0;
  
  jQuery(".our-business-sub-link-item .description").each(function(){
    if (jQuery(this).outerHeight() > maxHeight) { maxHeight = jQuery(this).outerHeight(); }
  });
  
  jQuery(".our-business-sub-link-item .description").height(maxHeight);
  
  
  //Equal height for Our business sub links ends
  
  //Opacity for governance leadersip BOD starts
  jQuery('.bodWrapper.governance-leadership .accordion-inner-wrapper').live('click',function(){
    
    
    $j(this).parent().parent().parent().parent().parent().parent().find(".accordion-inner-wrapper").addClass('opacity-active');
    $j(this).removeClass("opacity-active");
    
    
    
    //jQuery('.bodWrapper.governance-leadership .accordion-inner-wrapper a').parent().addClass('opacity-active');
    //jQuery('.bodWrapper.governance-leadership .accordion-inner-wrapper a.member-item.active').parent().removeClass('opacity-active'); 
  });
  
  //Opacity for governance leadersip BOD starts
  
  //Hide filter dropdown for governance leadersip BOD on mouse click starts
  $j(document).mouseup(function (e) {
    if ($j(e.target).closest(".governance-leadership-category ul.drp-list, .member-mod .governance-leadership-category.dd-wrap .category-selected.drp-list").length === 0) {
      $j(".governance-leadership-category ul.drp-list").slideUp(300);
    }
  });
  //Hide filter dropdown for governance leadersip BOD on mouse click ends
  
  
  
  
  /********MS Equal Height***/
  
  $j(document).ready(function(){
    
    // Select and loop the container element of the elements you want to equalise
    $j('.hide-images').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $j('.accordion-inner-wrapper', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($j(this).height() > highestBox) {
          highestBox = $j(this).height(); 
        }
        
      });  
      
      // Set the height of all those children to whichever was highest 
      $j('.accordion-inner-wrapper',this).height(highestBox);
      
    }); 
    
  });
  
  
  $j(document).ready(function(){
    
    // Select and loop the container element of the elements you want to equalise
    $j('.withImage').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $j('.accordion-inner-wrapper', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($j(this).height() > highestBox) {
          highestBox = $j(this).height(); 
        }
        
      });  
      
      // Set the height of all those children to whichever was highest 
      $j('.accordion-inner-wrapper',this).height(highestBox);
      
    }); 
    
    $j(".career-slider-close-popup").on("click", function() {
      $j(".mfp-content .popupData .inv_playerContainer").InvPlayer().done(function(e){
        e.stopVideo();
      });
    });
  });
  
  // donought chart footnote
  jQuery('.chart-wrapper p span.rad-notes').parent('p').addClass('rad-notes-parent');
  
  jQuery('.risk-return-spectrum-accordion-module .risk-return-accordion-content-item .risk-return-accordion-content-item-in ul').prev('p').addClass('ul-title-no-space');
  
  // Module value snapdowns
  $j('.module-vlaues-title').click(function() {
    if($j(this).hasClass('active')){
      $j(this).next().slideUp();
      $j(this).removeClass('active');
    } else {
      
      $j(this).next().slideDown();
      $j(this).addClass('active');
    }
  });
  
  // Module - New Real Estate starts
  //$j('.risk-return-accordion-title-new').click(function() {
  //var custom = $j(this).attr('data-id');
  //if($j(this).hasClass('active')){
  //$j('.risk-return-accordion-title[data-id="' + custom + '"]').next().slideUp();
  //$j(this).removeClass('active');
  //$j('.risk-return-accordion-title').removeClass('active');
  //} else {
  
  //$j('.module-new-real-estate').find('.risk-return-accordion-title[data-id="' + custom + '"]').next().slideDown();
  //$j('.risk-return-accordion-title-new').addClass('active');
  //}
  //});
  $j('.risk-return-accordion-title-new').click(function() {
    var custom = $j(this).attr('data-id');
    $j('.module-new-real-estate').find('.risk-return-accordion-title[data-id="' + custom + '"]').toggleClass('active');
    $j('.module-new-real-estate').find('.risk-return-accordion-title[data-id="' + custom + '"]').next().slideToggle();
  });
  
  // Module - Private Equity Infographic
  
  
  $j(".module-private-equity-infographic .left-content-title").each(function(){
    var getColVal = $j(this).find(".color-value").text().trim();
    $j('.module-private-equity-infographic .left-content-wrapper.infographic-column-content-wrapper').find("p span.rad-highlight").css("color",getColVal);
    
  });
  
  $j(".module-private-equity-infographic .right-content-title").each(function(){
    var getColVal = $j(this).find(".color-value").text().trim();
    $j('.module-private-equity-infographic .right-content-wrapper.infographic-column-content-wrapper').find("p span.rad-highlight").css("color",getColVal);
    
  });
  
  /*---------- New Investemet Oppourtunities Menu starts ----------*/
  $j(".topnavigation .hedermenuSignpostItem ul li.level3.haschildren").on('mouseenter',function () {
    $j(this).children("ul").stop(true, true).slideDown(200);
    var that = $j(this);
    setTimeout(function(){that.children("ul").addClass('shownav');},300);
  });
  
  $j(".topnavigation .hedermenuSignpostItem ul li.level3.haschildren").on('mouseleave',function () {
    $j(this).children("ul").removeClass('shownav');
    $j(this).children("ul").slideUp(80);
  });  
  /*---------- New Investemet Oppourtunities Menu ends ----------*/
  
  /*---------- Hiding Sitecore logo on PROD starts ----------*/
  //$j('div img[alt="Powered by Sitecore"]').parent().remove();
  setTimeout(function(){ 
    $j('div img[alt="Powered by Sitecore"]').parent().remove();
  }, 500);
  /*---------- Hiding Sitecore logo on PROD ends ----------*/
  
  //Make titles clickable for in the news section
  
  jQuery(".award-content-wrap .award-content .award-desc a:last-child").each(function() {
  var linkText = jQuery(this).attr("href");
  var linkTarget = jQuery(this).attr("target");
  var linkTitle = jQuery(this).attr("title");
  jQuery(this).parents(".award-desc").siblings(".award-title").attr("href", linkText);
  jQuery(this).parents(".award-desc").siblings(".award-title").attr("target", linkTarget);
  jQuery(this).parents(".award-desc").siblings(".award-title").attr("title", linkTitle);
  });
  
  jQuery( document ).ajaxSuccess(function( event, request, settings ) {
    jQuery(".award-content-wrap .award-content .award-desc a:last-child").each(function() {
      var linkText = jQuery(this).attr("href");
      var linkTarget = jQuery(this).attr("target");
      var linkTitle = jQuery(this).attr("title");
      jQuery(this).parents(".award-desc").siblings(".award-title").attr("href", linkText);
      jQuery(this).parents(".award-desc").siblings(".award-title").attr("target", linkTarget);
      jQuery(this).parents(".award-desc").siblings(".award-title").attr("title", linkTitle);
    });
  });
  
  //Make titles clickable for awards on mmedia landing page
  jQuery(".featured-news-wrapper-item .award-desc a:last-child").each(function() {
  var linkText = jQuery(this).attr("href");
  var linkTarget = jQuery(this).attr("target");
  var linkTitle = jQuery(this).attr("title");
  jQuery(this).parents().siblings(".award-title").attr("href", linkText);
  jQuery(this).parents().siblings(".award-title").attr("target", linkTarget);
  jQuery(this).parents().siblings(".award-title").attr("title", linkTitle);
  });
  
  //Menu opening after the page is loaded
  //setTimeout(function(){ 
  //	jQuery(".topnavigation ul li.level1").css("pointer-events","auto");
  //}, 1000);
  
  jQuery(document).ready(function(){
    setTimeout(function(){ 
      jQuery(".topnavigation ul li.level1").css("pointer-events","auto");
    }, 1500);
    
      //Insights landing page enhancements
    $j('.insights-top-section .insights-top .article-title a, .insights-banner-content .banner-link a').each(function() {
        var bannerInsight = jQuery(this).attr("href");
      jQuery('.article-main .insight-title a[href="' + bannerInsight + '"]').parents(".insight-title").remove();    
      });   
  });
  
  /*---------- Insight Detail page enhancements starts ----------*/
  $j('.insights-bottom-section .article-main .insight-title h3').each(function() {
    var bannerInsight = jQuery('.insights-detail .insights-detail-wrap .insight-title h1').text().trim();
    var bannerInsighttt = jQuery(this).text().trim();
    if(bannerInsight === bannerInsighttt){
      jQuery(this).parents('.insights-detail-wrap').remove();
    }
  });
  /*---------- Insight Detail page enhancements ends ----------*/
  
  /*---------- Module - Show more less starts ----------*/
  
  /*$j( document ).ready(function() {
    $j(".module-show-more").nextAll().addClass("toggle-wrapper");
    $j(".mod-datatable-content").removeClass("toggle-wrapper");
    $j(".mod-datatable-content").nextAll().removeClass("toggle-wrapper");
    //$j(".module-show-more").nextAll(".toggle-wrapper").wrapAll("<div class='show-more-content-wrapper'></div>");
  });*/
  
  setTimeout(function(){
    /*$j(".module-show-more").nextAll().wrapAll("<div class='show-more-content-wrapper'></div>");*/
    $j(".module-show-more").nextAll().addClass("toggle-wrapper");
    $j(".mod-datatable-content").removeClass("toggle-wrapper");
    $j(".mod-datatable-content").nextAll().removeClass("toggle-wrapper");
    $j(".module-show-more").nextAll(".toggle-wrapper").wrapAll("<div class='show-more-content-wrapper'></div>");
    $j("<div class='module-show-less float100 hide'><div class='container-fluid'><div class='row'><div class='col-xs-12'><div class='show-less-button-wrapper'><a href='javascript:;'' class='btn show-more'>Show less</a></div></div></div></div></div>").insertAfter(".show-more-content-wrapper"); 
    
    $j('.module-show-more .show-more').on("click" , function(){
      $j(this).parents(".module-show-more").next().addClass("active");
      $j(this).parents(".module-show-more").addClass("hide");
      $j(".module-show-less").removeClass("hide");
      $j(this).parents(".module-show-more").next(".show-more-content-wrapper").show("drop", { direction: "down" }, 1000);
    });
    
    $j('.module-show-less .show-more').on("click" , function(){
      $j(".module-show-more").removeClass("hide");
      $j(".module-show-less").addClass("hide");
      $j(this).parents(".module-show-less").prev(".show-more-content-wrapper").hide("drop", { direction: "up" }, 300);
    });
    
    setEqualHeight_CommonClass(".module-chapter-stats .chptr-stats-head span.rad-border");
    
    if ($j('.module-show-more').hasClass('show-less-grey-bg')){
      $j('.module-show-less').addClass('grey-bg show-less-grey-bg');
    }
    
  },1500);
  /*---------- Module - Show more less ends ----------*/
  
  /*---------- Our Business Menu Enhancement starts ----------*/
  /*setTimeout(function(){
    $j('li#nav-our-business-level1 li:nth-child(4), li#nav-our-business-level1 li:nth-child(5)').wrapAll('<div class="menu-right-column-wrap"/>');
  },1500);*/
  /*---------- Our Business Menu Enhancement starts ----------*/
  
  /*Mega Menu Append*/
  setTimeout(function () {
    $j(".header-toppad .topnavigation ul li.level1.haschildren").each(function() {
      $j(this).find("ul").first().wrapAll("<div/>");
    });
    
    $j(".header-toppad .topnavigation ul li.level1.haschildren").each(function(){
      var getID = $j(this).attr("id");
      var getID = getID.replace('nav-','');
      var getID = getID.replace('-level1','');
      $j(this).find("div").addClass("Menu-Wrap");
      $j(this).find("div").append($j(".headerSignpostWrapper #"+getID).html());
      $j(this).find("div > ul").append($j(".megamenu-link #"+getID).html());
    });
    
    $j(".header-toppad .topnavigation ul li.level1.haschildren > div").each(function(){
      $j(this).find("ul:first").insertBefore($j(this).find(".signpostRight"));
    });
  }, 600);
  
  /*Mega Menu Append*/
  
  
  $j('.module-related-articles .right-panel-wrapper.related-articles-award-item, .leadership-detail .insights-right-section .right-panel-wrapper.related-articles-award-item').each(function() {
    var hashLoc = '/media/awards#' + $j(this).attr('id');
    $j(this).find('.article-link a').attr("href", hashLoc);
    //console.log(hashLoc);
  });
  
  setTimeout(function(){
    var hashLocId = window.location.hash;
    if (hashLocId.length) {
      $j('html,body').animate({scrollTop: $j(hashLocId).offset().top - 300}, "slow");
    }
  },1000);
  
  
  
  $j('.module-related-articles .right-panel-wrapper.related-articles-news-item, .leadership-detail .insights-right-section .right-panel-wrapper.related-articles-news-item').each(function() {
      var searchNews = $j(this).children('h3').text().trim();
     var hashLocNews = '/media/in-the-news?' + searchNews;
    $j(this).find('.article-link a').attr("href", hashLocNews);
  
  //console.log(hashLocation);
    
  });
  
  setTimeout(function() {
      
     if(window.location.href.split("?")[1] != undefined){
     
    
     var hashesss = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&').toString();
      console.log(hashesss,"hashesss");
      //var hashLocation = hashesss.replaceAll('%20',' ').replaceAll('%27', "'");
      var hashLocation = decodeURI(hashesss);
      
      $j('#txtNews').attr('value', hashLocation);
      $j('.news-filter-click').trigger('click');
       }
      
    }, 300);
    
    
    
    
  /*
  MS Scripts 28-12-2021
  */
  
  $j(document).ready(function(){
      if($j('.right-panel-wrapper').children().length > 0){
          $j(".insights-bottom-section h2").removeClass("hide");
      }
      else{
          $j(".insights-bottom-section h2").addClass("hide");
      }
    
  $j(".paginate_button").click(function(){
  $j("a.media-link").each(function(){
      var title = $j(this).attr("title");
      var slittedText = title.split("opens in a new window");
      var fulltext = slittedText[0];
      var slipeetedCapsPDF = fulltext.split(",")[0];
      var slipeetedCapsKB = fulltext.split(",")[1];
      var slipeetedCapsPDFUpper = slipeetedCapsPDF.toUpperCase();
      var slipeetedCapsKBUpper = slipeetedCapsKB.toUpperCase();
      $j(this).attr("title",slipeetedCapsPDFUpper+","+slipeetedCapsKBUpper+", opens in a new window");
    });
  });  
  
  
      
    $j(".video-details").magnificPopup({
      type:'iframe'
    });
    
    $j('.mfp-close').on( "click", function() {
      $j.magnificPopup.close();
    });
      
  });
  
  /*
  $j(document).ready(function(){
      var pathName = window.location.pathname;
      $j("#contentwrapper ul.drp-list li > a").attr("pathName",pathName);
  });
  */
  
  jQuery(".insights-bottom-section.insights-right-section .right-panel-wrapper .article-link a, .module-related-articles .right-panel-wrapper .article-link a").each(function() {
  var linkText = jQuery(this).attr("href");
  jQuery(this).parents().siblings("h3").children("a").attr("href", linkText);
  //console.log(linkText);
  });
  
  /*---------------------- Video Landing page and Video Detail page starts -------------------*/
  $j(".videos-landing-page-wrapper a.video-details").click(function(){
      $j('body').addClass('video-item-details-popup');
  });
  /*---------------------- Video Landing page and Video Detail page ends -------------------*/
  
  /*---------------------- Tagged Insights Module starts -------------------*/
  $j('.tagged-insights-item-col[id]').each(function (i) {
      $j('.tagged-insights-item-col[id="' + this.id + '"]').slice(1).remove();
  });
  $j('.tagged-insights-item-col').each(function(index) {
    if(index < 6){
      $j(this).addClass('show');
  }
      else{
          $j(this).addClass('hide');
      }
  });
  
  if($j(".tagged-insights-module-item-wrapper .item-col-wrapper").find(".tagged-insights-item-col").length <= 6) {
    $j('.loadmoree').hide();
  }
  $j(".tagged-insights-module-item-wrapper .item-col-wrapper").find(".tagged-insights-item-col").slice(0, 6).show();
  $j(".tagged-insights-module-item-wrapper .item-col-wrapper").find(".loadmoree a").on('click', function(){    
    if($j(this).text() == "Show more") {
      $j(this).addClass("show-active");
      $j(this).text('Show less');
      $j(this).parents(".item-col-wrapper").find(".tagged-insights-item-col.hide").slideDown();
      $j(".loadmoree a").blur();
      if ($j(this).parents(".item-col-wrapper").find(".tagged-insights-item-col.hide").length === 0) {
        $j(this).text('Show less');
      }
      $j('html, body').animate({
        scrollTop: $j(".tagged-insights-item-col.hide").offset().top - 150
      }, 500);
    } else {
      $j(this).parents(".item-col-wrapper").find(".tagged-insights-item-col.hide").slideUp();
      $j(this).parents(".item-col-wrapper").find(".tagged-insights-item-col.hide").hide();
      $j(this).parents(".item-col-wrapper").find(".tagged-insights-item-col.hide").slice(0, 6).show();
      $j(this).text('Show more');
      $j(this).removeClass("show-active");
      $j('html, body').animate({
        scrollTop: $j("#tagged-insights-module-title").offset().top - 150
      }, 500);
      $j(".loadmoree a").blur();
    }
  });
  /*---------------------- Tagged Insights Module ends -------------------*/
  
  //$j(".tagged-insights-item-col").each(function(){
      //var getId = $j(this).attr("id");
      //console.log(getId);
      //if(getId.length>1 && getId[0]==$j(this)){
          //console.log($j(this).id);
          //$j("#"+getId+".tagged-insights-item-col:not(.pinned-tagged-insights-item)").addClass("d-none");
      //}
  //});
  
  
  
  
  
  $j(document).ready(function(){
  $j('.no-light-box-button').click(function(e){ 
  //debugger;
    $j(this).parent().hide();
    //$j(this).hide();
    $j(".btn-playon-page")[0].src += "&autoplay=1";
    e.preventDefault();  
  });
  });
  
  $j('.no-light-box-button').click(function() {
  $j(this).parent().next().children().css({'opacity': '1'});
  });
  
  //$j('.no-light-box-button').click(function() {
  //$j(this).parent().next().children().css({'widht': '850px'});
  //});
  
  $j(".videos-no-light-box .no-light-videos-sub-title .video-thumbnail a.no-light-box-button").bind("click", (function () {	
      //alert("Button 2 is clicked!");
      $j(".videos-no-light-box .inv_playBtn").trigger("click");		
  }));
  
  /*---------------------- New Refresh Navigation Starts -------------------*/
  $j(".header.new-nav-header-style").closest("#MainWrapper").addClass("new-nav-header-main-wrapper");
  
  var winScroll,headerHeight, winFlag = 0,winPos = 0;
  jQuery(window).on('scroll', function() {
    headerHeight = jQuery('.header.new-nav-header-style div#headerwrapper, .header div#headerwrapper').outerHeight();
    winScroll = jQuery(this).scrollTop();
    
    if (winScroll > winPos && winScroll > 118) {
      jQuery('.header.new-nav-header-style div#headerwrapper, .header div#headerwrapper').addClass('menudown').css('top',-headerHeight + 'px');
      jQuery('.header.new-nav-header-style div#headerwrapper, .header div#headerwrapper').removeClass('menuup');
    }
    else {
      jQuery('.header.new-nav-header-style div#headerwrapper, .header div#headerwrapper').removeClass('menudown').css('top',0);	
      jQuery('.header.new-nav-header-style div#headerwrapper, .header div#headerwrapper').addClass('menuup');
    }
    winPos = winScroll;
    if(winScroll == 0){ 
      jQuery('.header.new-nav-header-style div#headerwrapper, .header div#headerwrapper').removeClass('menuup');
    }
  });
  /*---------------------- New Refresh Navigation ends -------------------*/
  /*---------------------- New Refresh Sub Navigation starts -------------------*/
  var subwinScroll,subheaderHeight, subwinFlag = 0,subwinPos = 0;
  jQuery(window).on('scroll', function() {
    subheaderHeight = jQuery('.header.new-nav-header-style div#headerwrapper').outerHeight();
    subwinScroll = jQuery(this).scrollTop();
     
    if (subwinScroll > subwinPos && subwinScroll > 111) {
        jQuery('.Sub-Navigation-Wrapper').removeClass('menudown').css('top',0);	
      jQuery('.Sub-Navigation-Wrapper').removeClass('menuup');
    }
    else {
    jQuery('.Sub-Navigation-Wrapper').addClass('menudown').css('top', headerHeight + 'px');
      
      jQuery('.Sub-Navigation-Wrapper').addClass('menuup'); 
    }
    subwinPos = subwinScroll;
    if(subwinScroll == 0){ 
      jQuery('.Sub-Navigation-Wrapper.sticky-menu').removeClass('menuup');
    }
  });
  /*---------------------- New Refresh Sub Navigation ends -------------------*/
  
  
  setTimeout(function (){
      $j(".homepage-refresh-banner-content-wrapper").addClass("homepage-refresh-with-video");
      
      if (window.matchMedia("(max-width: 1140px)").matches) {
       $j(document).ready(function(){
         var othe = jQuery(".homepage-refresh-banner-content-wrapper").outerHeight();
          jQuery(".homepage-refresh-banner").css('height', othe);
       });
        $j(window).on('resize', function(){
          var othe = jQuery(".homepage-refresh-banner-content-wrapper").outerHeight();
          jQuery(".homepage-refresh-banner").css('height', othe);
        });
      }
    /*$j("#headerwrapper").hover(function () {
      $j(this).toggleClass("refresh-header-fixed");
    });*/
    
    $j('.topnavigation ul li a').on('blur', function(){
      $j("#headerwrapper").removeClass('refresh-header-fixed');
      //$j(this).css("background-color", "red");
    }).on('focus', function(){
      $j("#headerwrapper").addClass('refresh-header-fixed');
      //$j(this).css("background-color", "pink");
    });  
    
    $j(".topnavigation ul li").hover(
      function () {
        $j("#headerwrapper").addClass("refresh-header-fixed");
      }
    );
    $j("#MainWrapper, .inner-banner-wrapper, .homepage-refresh-banner, div#contentwrapper").hover(
      function () {
        $j("#headerwrapper").removeClass("refresh-header-fixed");
      }
    );
  
  }, 1500);
  
  
  /*---------------------- Search Open Transparent Navigation Behaviour starts -------------------*/
  $j(".new-homepage-navigation .topnavigation a.search-btn").on('click', function (){
      if($j(".searchbox").hasClass("open")) {
      $j(".header.new-nav-header-style div#headerwrapper").addClass("refresh-header-fixed search-fixed-header");
  }
      else{
          $j(".header.new-nav-header-style div#headerwrapper").removeClass("refresh-header-fixed search-fixed-header");
      }
  });
  $j("html, body").on('click', function (){
      if($j(".searchbox").hasClass("open")) {
      $j(".header.new-nav-header-style div#headerwrapper").addClass("refresh-header-fixed search-fixed-header");
  }
      else{
          $j(".header.new-nav-header-style div#headerwrapper").removeClass("refresh-header-fixed search-fixed-header");
      }
  });
  
  $j(".topnavigation ul li.level1 a").hover(function(){
    $j(".searchbox").css("display", "none");
  });
  
  /*---------------------- Search Open Transparent Navigation Behaviour ends -------------------*/
  
  
  function menuScroll (){
    var winScroll,headerHeight, winFlag = 0,winPos = 0;
    jQuery(window).on('scroll', function() {
      headerHeight = jQuery('.header.new-nav-header-style div#headerwrapper').outerHeight();
      winScroll = jQuery(this).scrollTop();
      
      if (winScroll > winPos && winScroll > 118) {
        jQuery('.header.new-nav-header-style div#headerwrapper').addClass('menudown').css('top',-headerHeight + 'px');
        jQuery('.header.new-nav-header-style div#headerwrapper').removeClass('menuup');
      }
      else {
        jQuery('.header.new-nav-header-style div#headerwrapper').removeClass('menudown').css('top',0);	
        jQuery('.header.new-nav-header-style div#headerwrapper').addClass('menuup');
      }
      winPos = winScroll;
      if(winScroll == 0){ 
        jQuery('.header.new-nav-header-style div#headerwrapper').removeClass('menuup');
      }
    });
  }
  
  
  /*---------------------- Menu item focus behaviour on scrollng menu starts -------------------*/
  jQuery(".topnavigation ul li").each(function() {
    jQuery(this).focusin(function(){
      jQuery(this).parents('.header.new-nav-header-style div#headerwrapper').addClass('refresh-header-fixed-top menuup');
      jQuery(window).on('scroll', function() {
    headerHeight = jQuery('.header.new-nav-header-style div#headerwrapper').outerHeight();
    winScroll = jQuery(this).scrollTop();
    
    if (winScroll > winPos && winScroll > 118) {
      jQuery('.header.new-nav-header-style div#headerwrapper').addClass('refresh-header-fixed-top menuup');
    }
    else {
      jQuery('.header.new-nav-header-style div#headerwrapper').addClass('refresh-header-fixed-top menuup');
    }
    winPos = winScroll;
    if(winScroll == 0){ 
      jQuery('.header.new-nav-header-style div#headerwrapper').addClass('refresh-header-fixed-top menuup');
    }
  });
    });
    jQuery(this).focusout(function(){
      jQuery(this).parents('.header.new-nav-header-style div#headerwrapper').removeClass('refresh-header-fixed-top menuup');
       jQuery(window).on('scroll', function() {
    headerHeight = jQuery('.header.new-nav-header-style div#headerwrapper').outerHeight();
    winScroll = jQuery(this).scrollTop();
    
    if (winScroll > winPos && winScroll > 118) {
      jQuery('.header.new-nav-header-style div#headerwrapper').removeClass('refresh-header-fixed-top menuup');
    }
    else {
      jQuery('.header.new-nav-header-style div#headerwrapper').removeClass('refresh-header-fixed-top menuup');
    }
    winPos = winScroll;
    if(winScroll == 0){ 
      jQuery('.header.new-nav-header-style div#headerwrapper').removeClass('refresh-header-fixed-top menuup');
    }
  });
   menuScroll();
    });
  });
  /*---------------------- Menu item focus behaviour on scrollng menu ends -------------------*/
  
  
  /*---------------------- POC Form Start -------------------*/
  
  
  
  $j(document).ready(function() {
  
      $j(".submit").append('<input type="button" accesskey="s" value="Submit Form" class="mysubmitbtn">');
  
      var fields1 = {'first_name' : 'First Name is required', 'last_name' : 'Last Name is required', 'email' : 'Email is required'};
  
      var fields2 = {'first_name' : 'First Name is required', 'last_name' : 'Last Name is required', 'email' : 'Email is required', 'Investor_Financial_Advisor_Name' : 'Financial Advisor Name is required', 'Investor_Advisor_Firm_Name' : 'Advisor Firm is required'};
  
      var fields3 = {'first_name' : 'First Name is required', 'last_name' : 'Last Name is required', 'email' : 'Email is required', 'city' : 'City is required', 'company' : 'Firm is required'};
  
  
      
  
          $j(".Person_Type .select").change(function(e){
          $j(".first_name").next('div').text("").hide();
          $j(".last_name").next('div').text("").hide();
          $j(".email").next('div').text("").hide();
          $j(".Investor_Financial_Advisor_Name").next('div').text("").hide();
          $j(".Investor_Advisor_Firm_Name").next('div').text("").hide();
  
          $j(".city").next('div').text("").hide();
          $j(".state").next('div').text("").hide();
          $j(".company").next('div').text("").hide();
      });
  
      $j(".mysubmitbtn").click(function(e){
          var a = $j(".Person_Type").children("select").children("option").eq(0).attr("value");
          var b = $j(".Person_Type").children("select").children("option").eq(1).attr("value");
          var c = $j(".Person_Type").children("select").children("option").eq(2).attr("value");
          var d = $j(".Person_Type").children("select").val();
          //jQuery(".Investor_Financial_Advisor_Name ").next('div').addClass("error");
          var errorcount = 0;
          if(a == d){
              //console.log("a");
          
              Object.keys(fields1).map(function(f){
                  $j("." + f).next('div').addClass("error");
                   if($j("." + f).children('input').val().length > 0){
                      $j("." + f).next('div').text("").hide();
                  }
                  else{
                      $j("." + f).next('div').text(fields1[f]).show();
                      errorcount++;
                  }
              });
          }
          else if(b == d){
              //console.log("b");
              Object.keys(fields2).map(function(f){
                  $j("." + f).next('div').addClass("error");
                  if($j("." + f).children('input').val().length > 0){
                      $j("." + f).next('div').text("").hide();
                  }
                  else{
                      $j("." + f).next('div').text(fields2[f]).show();
                      errorcount++;
                  }
              });
          }
          else if(c == d){
              //console.log("c");
              //errorcount++;
              
              var ab = $j(".state option:selected").text();
              //console.log('dd',ab.length, ab);
               $j(".state").next('div').addClass("error");
              if(($j(ab.length > 0 ) && (ab))){
                  $j(".state").next('div').text("").hide();
              }
              else{
                  $j(".state").next('div').text("Please select State").show();
                  errorcount++;
              }
              
              Object.keys(fields3).map(function(f){
                  $j("." + f).next('div').addClass("error");
                  if($j("." + f).children('input').val().length > 0){
                      $j("." + f).next('div').text("").hide();
                  }
                  else{
                      $j("." + f).next('div').text(fields3[f]).show();
                      errorcount++;
                  }
              });
          }
          if(errorcount == 0){
              $j("#MainForm").submit();
          }
      });
  });
  
  
  /*---------------------- POC Form End -------------------*/
  /*---------------------- New Insight detail page related articles updates starts  -------------------*/
  $j(".tagged-insights-module-wrapper .tagged-insights-item-col.item-4").hide().removeClass("show");
  $j(".tagged-insights-module-wrapper .tagged-insights-item-col").each(function() {
      if($j(this).attr("id") == $j("body").attr("id")){
          $j(this).remove();
          $j(".tagged-insights-module-wrapper .tagged-insights-item-col.item-4").addClass("show");
          $j(".tagged-insights-module-wrapper .tagged-insights-item-col.item-4").show();
      }
      else {
         
      }
  });
  /*---------------------- New Insight detail page related articles updates ends  -------------------*/
  /*---------------------- Employee Module Footnote content before pagination starts  -------------------*/
  /*jQuery( document ).ajaxSuccess(function( event, request, settings ) {
  setTimeout(function () {
    $j( ".employee-list-wrapper .employee-list-table-wrapper .dataTables_info" ).prepend( $j( ".abbreviation-block" ) );
  }, 1000);
  });*/
  /*---------------------- Employee Module Footnote content before pagination ends  -------------------*/
  /*!---- responsive-table-----*/
  ;
  (function($j, window, document, undefined) {
    
    $j.InvResponsiveTable = function(element, options) {
      // Extend default settings
      this.options = {};
      element.data('InvResponsiveTable', this);
      var that = this;
      this.init = function(element, options) {
        this.options = $j.extend({}, $j.fn.InvResponsiveTable.defaultOptions, options);
        options = this.options;
        var $table = element;
        
        if (!$table.hasClass(options.prefix + "-responsive-table-processed")) {
          var tableID = $table.attr("id");
          newID = "";
          if (tableID != "" && tableID !== undefined) {
            newID = "id=" + options.prefix + "-" + tableID;
          }
          
          var tHeadData = new Array();
          $table.wrap('<div class="' + options.prefix + '-responsive-table"></div>');
          $table.parent().append('<div class="' + options.prefix + '-responsive-table-wrapper"></div>');
          $resWrapper = $table.parent().find('.' + options.prefix + '-responsive-table-wrapper');
          $table.css("display", "none");
          $table.find(options.headerRowData).each(function(index) {
            tHeadData[index] = $j(this).html();
          });
          var tbl = '';
          //alert($table.find("tbody tr").length);
          if (options.showTableHeader) {
            $resWrapper.append("<" + options.tableHeaderHTMLTag + ">" + tHeadData[0] + "</" + options.tableHeaderHTMLTag + ">");
          }
          $table.find("tbody tr").each(function(index) {
            id = 'id="' + options.prefix + '-responsive-table-' + index + '" ';
            tbl = "";
            
            tbl = '<table ' + id + ' class="' + options.prefix + '-responsive-table inv-responsive-table" border="0" cellspacing="0" cellpadding="0">';
            tbl += '<tbody>';
            if ($j(this).hasClass(options.ingoreHeaderClass)) {
              SI = -1
            } else {
              SI = options.skipIndex;
              tbl += '<tr class="' + options.prefix + '-responsive-header-tr inv-responsive-header-tr"><td class="' + options.prefix + '-responsive-header-td inv-responsive-header-td" colspan="2" >' + $j(this).find("th:eq(0)").html() + '</td></tr>';
            }
            
            tmpCnt = 1;
            tmpLength = ($j(this).children().length - options.skipIndex);
            $j(this).children().each(function(index) {
              //alert(options.skipIndex);								
              if (index > SI) {
                cls = new Array();
                clscnt = 0;
                if (tmpCnt == 1) {
                  cls[clscnt] = options.prefix + '-responsive-data-tr-first inv-responsive-data-tr-first';
                  clscnt++
                }
                if (tmpCnt == (tmpLength - 1)) {
                  cls[clscnt] = options.prefix + '-responsive-data-tr-last inv-responsive-data-tr-last';
                  clscnt++
                }
                if (tmpCnt % 2 == 0) {
                  cls[clscnt] = options.prefix + '-responsive-data-tr-even inv-responsive-data-tr-even';
                  clscnt++
                } else {
                  cls[clscnt] = options.prefix + '-responsive-data-tr-odd';
                  clscnt++
                }
                clsName = cls.join(" ");
                //alert(clsName);
                tbl += '<tr class="' + options.prefix + '-responsive-data-tr ' + clsName + '"><td class="' + options.prefix + '-responsive-data-td ' + options.prefix + '-responsive-data-header inv-responsive-data-header">' + tHeadData[index] + '</td><td class="' + options.prefix + '-responsive-data-td ' + options.prefix + '-responsive-data-content inv-responsive-data-content">' + $j(this).html() + '</td></tr>';
                tmpCnt++;
              }
            });
            tbl += '</tbody>';
            tbl += '</table>';
            tbl += '';
            // alert(tbl);
            $resWrapper.append(tbl);
            
            
          });
          $resWrapper.find(".inv-responsive-data-header br").remove();
          $table.addClass(options.prefix + "-responsive-table-processed");
          runPlugin($table);
          $j(window).resize(function() {
            runPlugin($table);
            
            
          });
        }
      };
      
      function runPlugin($table) {
        options = that.options;
        if ($j(window).width() <= options.switchWidth) {
          $j('.' + options.prefix + '-responsive-table-wrapper').css("display", "block");
          $table.css("display", "none");
        } else {
          $j('.' + options.prefix + '-responsive-table-wrapper').css("display", "none");
          $table.css("display", "table");
        }
      }
      
      
      this.init(element, options);
    }
    
    $j.fn.InvResponsiveTable = function(options) {
      return this.each(function() {
        (new $j.InvResponsiveTable($j(this), options));
      });
    };
    
    // set default option values
    $j.fn.InvResponsiveTable.defaultOptions = {
      prefix: 'inv',
      headerRowData: 'thead tr:eq(0) th',
      switchWidth: 640,
      ingoreHeaderClass: 'ignore-header',
      showTableHeader: false,
      tableHeaderHTMLTag: 'h3',
      skipIndex: 0
      
    };
    
  })($j, window, document);
  
  
  $j(document).ready(function() {
    
    $j('.rad-responsive').each(function(count) {
      
      $j(this).find("tr").addClass("ignore-header");
      $j(this).InvResponsiveTable({
        prefix: 'inv',
        showTableHeader: false
      });
    });
    
    $j('.bio-popup-link').magnificPopup({
      type:'ajax',
      callbacks: {
          open: function() {
          var mfp = $j.magnificPopup.instance;
          var proto = $j.magnificPopup.proto;
  
          // extend function that moves to next item
          mfp.next = function() {
  
              // if index is not last, call parent method
              if(mfp.index < mfp.items.length - 1) {
                  proto.next.call(mfp);
              } else {
                 // otherwise do whatever you want, e.g. hide "next" arrow
                 $j('.mfp-arrow-right').hide();
              }
          };
  
          // same with prev method
          mfp.prev = function() {
              if(mfp.index > 0) {
                  proto.prev.call(mfp);
              }
          };
  $j('html').addClass('popup-html-active');
  $j('body').addClass('popup-active');
      },
      close: function() {
      $j('html').removeClass('popup-html-active');
      $j('body').removeClass('popup-active');
  },
        parseAjax: function(mfpResponse) {
          // mfpResponse.data is a "data" object from ajax "success" callback
          // for simple HTML file, it will be just String
          // You may modify it to change contents of the popup
          // For example, to show just #some-element:
          // mfpResponse.data = $(mfpResponse.data).find('#some-element');
          
          // mfpResponse.data must be a String or a DOM (jQuery) element
          
          
        },
        ajaxContentAdded: function() {
          // Ajax content is loaded and appended to DOM
          
          $j("#videoPlayer").InvPlayer();
        }
        
      },
      closeOnBgClick:false,
      gallery:{
      enabled:false
    },
      midClick: false // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    
   $j(".inv-responsive-data-td:empty").siblings().not('td').parent().hide();
   $j(".inv-responsive-data-header:empty").hide();
    // For Hiding Headings in Devices which have no content
    $j('.inv-responsive-data-content').each(function(e) {
      
      if ($j(this).html().trim() == '') {
        $j(this).parent('tr').hide();
      }
      
    });  
    
    $j('.inv-responsive-data-header').each(function(e) {
      if ($j(this).html().trim() == "Title") {
        $j(this).next('td').css('font-weight','bold');
      }
    });
    $j('.inv-responsive-data-header').each(function(e) {
      if ($j(this).html().trim() == "Event") {
        $j(this).next('td').css('font-weight','bold');
      }
    });
    
  });
  /*!---- slick-slider-----*/
  /*
       _ _      _       _
   ___| (_) ___| | __  (_)___
  / __| | |/ __| |/ /  | / __|
  \__ \ | | (__|   < _ | \__ \
  |___/_|_|\___|_|\_(_)/ |___/
                     |__/
  
   Version: 1.5.9
    Author: Ken Wheeler
   Website: http://kenwheeler.github.io
      Docs: http://kenwheeler.github.io/slick
      Repo: http://github.com/kenwheeler/slick
    Issues: http://github.com/kenwheeler/slick/issues
  
   */
  !function(a){"use strict";"function"==typeof define&&define.amd?define(["$j"],a):"undefined"!=typeof exports?module.exports=a(require("$j")):a($j)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);
  }):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
  
  $j(document).ready(function(){
    
    $j('.history-slider-year-item')
  .on('afterChange init', function(event, slick, direction){
      // remove all prev/next
      slick.$slides.removeClass('prevdiv').removeClass('nextdiv');
  
      // find current slide
      for (var i = 0; i < slick.$slides.length; i++)
      {
          var $slide = $j(slick.$slides[i]);
          if ($slide.hasClass('slick-current')) {
              // update DOM siblings
              $slide.prev().addClass('prevdiv');
              $slide.next().addClass('nextdiv');
              break;
          }
      }
    }
  )
  .on('beforeChange', function(event, slick) {
      // optional, but cleaner maybe
      // remove all prev/next
      slick.$slides.removeClass('prevdiv').removeClass('nextdiv');
  })
  .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.history-slider-year-nav',
        arrows: false,
        swipe: false,
        swipeToSlide: false,
        //focusOnSelect: true
  });
    
    if (!$j('.history-slider-year-nav').hasClass('slick-initialized')) {
      $j('.history-slider-year-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.history-slider-year-item',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
      });
    }
    
    $j(".history-slider-year-nav .history-slider-year-nav-links, .history-slider-year-nav .slick-prev, .history-slider-year-nav .slick-next").on("click", function(){
    $j(".history-slider-year-subsection-nav .slick-track .history-slider-year-subsection-nav-links:nth-child(1)").trigger("click");
    });
    
    $j(".history-slider-year:not(.slick-current) .year-ttl").on("click", function(){
      $j(".history-slider-year-nav .slick-next").trigger("click");
    });
      
    if (!$j('.history-slider-year-subsection').hasClass('slick-initialized')) {
      $j('.history-slider-year-subsection').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        swipe: false,
        swipeToSlide: false,
        asNavFor: '.history-slider-year.slick-current > .history-slider-year-subsection-nav',
        arrows: false,
        fade: true,
        focusOnSelect: true,
        infinite: false,
        responsive: [{
            breakpoint: 768,
          settings: {
            dots: true,
            infinite: true,
            arrows: true,
            adaptiveHeight: true,
            dotsClass: 'custom_paging',
            customPaging: function (slider, i) {
              return  (i + 1) + '/' + slider.slideCount;
            },
          }
        }]
      });
    }
    
    if (!$j('.history-slider-year-subsection-nav').hasClass('slick-initialized')) {
      $j('.history-slider-year-subsection-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.history-slider-year.slick-current > .history-slider-year-subsection',
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        infinite: false,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            return  (i + 1) + '/' + slider.slideCount;
        },
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
            arrows: true,
            infinite: false,
            adaptiveHeight: true
          }
        }]
      });
       
      
      $j(".history-slider .history-slider-year-nav .slick-next").on("click", function(e){
        if($j(".history-slider-year-nav-links").last().hasClass("slick-current")){
          $j(this).css("pointer-events","none");
          $j(this).addClass("tint");
        }
        else{
          $j(this).css("pointer-events","all");
        }
      });
      
      $j(".history-slider .history-slider-year-nav-links:last-child").on("click", function(e){
        if($j(this).hasClass("slick-current")){
          $j(this).closest(".history-slider-year-nav").find(".slick-next").css("pointer-events","none").addClass("tint");
        }
        else{
          $j(this).css("pointer-events","all");
        }
      });
      
      $j(".history-slider .history-slider-year-nav .slick-prev").on("click", function(e){
        if($j(".history-slider-year-nav-links").first().hasClass("slick-current")){
          $j(this).css("pointer-events","none");
          $j(this).addClass("tint");
        }
        else{
          $j(this).css("pointer-events","all");
        }
      });
      
      $j(".history-slider .history-slider-year-nav-links:first-child").on("click", function(e){
        if($j(this).hasClass("slick-current")){
          $j(this).closest(".history-slider-year-nav").find(".slick-prev").css("pointer-events","none").addClass("tint");
        }
        else{
          $j(this).css("pointer-events","all");
        }
      });
      
      
      $j(".history-slider-year-subsection-nav-links.slick-active a").click(function(){
        $j(this).closest(".history-slider-year").find(".history-slider-year-subsection-content.slick-current").children(".history-slider-year-subsection-text").addClass("click-keyline");
        $j(this).closest(".history-slider-year-subsection-nav").addClass("current-keytitle");
      });
      
      $j(".mobi-year-ttl").click(function(){
        $j(".mobi_year_slider_pop_wrapper").removeClass("active");
        $j(".show_all_wrap.year_slider_pop_show_wrapper > a").removeClass("active");
        var currentSlideNo = $j(this).attr('data-slide');
        $j(".history-slider-year-nav").slick('slickGoTo', currentSlideNo - 1);
      });
      $j(".mobi-history-slider-year-subsection-nav-links[data-slide]").click(function(e){
        e.preventDefault();
        if($j(this).hasClass("active")){
          $j(this).removeClass("active");
        }
        else{
          $j(".mobi-history-slider-year-subsection-nav-links").removeClass("active");
          $j(".mobi-history-slider-year-subsection-nav-links").addClass("dLine");
          $j(this).removeClass("dLine");
          $j(this).addClass("active");
        }
        $j(".mobi_year_slider_pop_wrapper").removeClass("active");
        $j(".show_all_wrap.year_slider_pop_show_wrapper > a").removeClass("active");
        var gtparentSlideNo = $j(this).parent().parent().find(".mobi-year-ttl").attr('data-slide');
        var gtcurrentSlideNo = $j(this).attr('data-slide');
        $j(".history-slider-year-nav").slick('slickGoTo', gtparentSlideNo - 1);
        $j(".history-slider-year-subsection").slick('slickGoTo', gtcurrentSlideNo - 1)
      });
      
      $j(".show_all_wrap.year_slider_pop_show_wrapper > a").click(function(){
        if($j(this).hasClass("active") && $j(this).parent().next().hasClass("active")){
          $j(this).removeClass("active");
          $j(this).parent().next().removeClass("active");
        }
        else{
          $j(this).addClass("active");
          $j(this).parent().next().addClass("active");
        }
      });
      $j(".mobi_year_slider_pop_wrapper .close").click(function(){
        if($j(this).parent().hasClass("active")){
          $j(this).parent().removeClass("active");
          $j(".show_all_wrap.year_slider_pop_show_wrapper > a").removeClass("active");
        }
      });
    }
    
    
    /* Video Galeery - Careers */
    
    if (!$j('.video-gallery').hasClass('slick-initialized')) {
      $j('.video-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.video-gallery-thumb',
        arrows: false,
        swipe: false,
        fade: true,
        swipeToSlide: false
      });
    }
    
    if (!$j('.video-gallery-thumb').hasClass('slick-initialized')) {
      $j('.video-gallery-thumb').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.video-gallery',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        slideFocus:false,
        infinite: false,
        swipe: false,
        draggable: false,
        swipeToSlide: false,
        variableWidth: true,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false
            //slidesPerRow: 2,
            //rows: 2
          }
        }]
      });
    }
    
    $j(".video-gallery-thumb .video-player.slick-slide .last").attr('tabindex', 0);
    
  });
  /*!---- history-animated-----*/
  $j(document).ready(function(){
    $j('.history-animated-slider-year-item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      //fade: true,
      asNavFor: '.history-animated-slider-year-nav',
      infinite: false,
      swipe: false,
      swipeToSlide: false
    });
    
    $j('.history-animated-slider-year-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.history-animated-slider-year-item',
      dots: false,
      focusOnSelect: true,
      infinite: false,
      swipe: false,
      swipeToSlide: false,
      responsive: [{
          breakpoint: 641,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    
    
    $j(".history-animated-slider .history-animated-slider-year-content .year-ttl").on("click", function(){
      $j(".history-animated-slider .history-animated-slider-year-nav .slick-next").trigger("click");
    });
    
    
    var getPerFor = 0;
    var getPerBack = 0;
    var getPerSky = 0;
    var currentSlide = $j(".slick-current");
    var slickYearSlides = $j(".history-animated-slider .history-animated-slider-year-nav-links");
    
    
    if($j(".history-animated-slider-year-nav-links").first().hasClass("slick-current")){
      $j(".history-animated-slider .history-animated-slider-year-nav .slick-prev").css("pointer-events","none");
      $j(".history-animated-slider .history-animated-slider-year-nav .slick-prev").css("border","2px solid rgba(0, 125, 85, 0.35)");
    }
    else{
      $j(".history-animated-slider .history-animated-slider-year-nav .slick-prev").css("pointer-events","all");
      $j(".history-animated-slider .history-animated-slider-year-nav .slick-prev").css("border","2px solid rgba(0, 125, 85, 1)");
    }
    
    //SLICK NEXT BUTTON CLICK EVENTS
    
    $j(".history-animated-slider .history-animated-slider-year-nav .slick-next").on("click", function(e){
    
    $j(".history-animated-slider-year-nav-links.activeLast").removeClass("hoverLine");
      $j(".history-animated-year-wrap").removeClass("hoverLine");
    
      if(!$j(".history-animated-slider-year-nav-links").first().hasClass("slick-current")){
        $j(".history-animated-slider .history-animated-slider-year-nav .slick-prev").css("pointer-events","all");
        $j(".history-animated-slider .history-animated-slider-year-nav .slick-prev").css("border","2px solid rgba(0, 125, 85, 1)");
      }
      
      
      if($j(".history-animated-slider-year-nav-links").last().hasClass("slick-current")){
        $j(this).css("pointer-events","none");
        $j(this).css("border","2px solid rgba(0, 125, 85, 0.35)");
      }
      else{
        $j(this).css("pointer-events","all");
        $j(this).css("border","2px solid rgba(0, 125, 85, 1)");
      }
      
      
      getPerFor = getPerFor+5;
      getPerBack = getPerBack+10;
      getPerSky = getPerSky+10;
      $j(".history-forground-image").css("left", "-"+getPerFor+"%");
      $j(".history-background-image").css("left", "-"+getPerBack+"%");
      $j(".history-back-image").css("left", "-"+getPerSky+"%");
      
      var getActiFirstFromLast = totalLength-5;
      if($j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").hasClass("slick-current")){
          $j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").prev().addClass("disableIndex");
          //$j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").addClass("desolveActive");
          $j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").nextAll().addClass("desolveActive");
      }
      
      prevNextDiv();
    });
    
    $j(".history-animated-year-wrap .slick-next.slick-arrow:not(.slick-disabled)").hover(
      function () {
        $j(".history-animated-slider-year-nav-links.activeLast").addClass("hoverLine");
        $j(".history-animated-year-wrap").addClass("hoverLine");
      },
      function () {
        $j(".history-animated-slider-year-nav-links.activeLast").removeClass("hoverLine");
        $j(".history-animated-year-wrap").removeClass("hoverLine");
      }
    );
    
    //SLICK PREVIOUS BUTTON CLICK EVENTS
    
    $j(".history-animated-slider .history-animated-slider-year-nav .slick-prev").on("click", function(){
    $j(".history-animated-slider-year-nav-links.activeFirst").removeClass("hoverLineF");
      $j(".history-animated-year-wrap").removeClass("hoverLineF");
      if(!$j(".history-animated-slider-year-nav-links").last().hasClass("slick-current")){
        $j(".history-animated-slider .history-animated-slider-year-nav .slick-next").css("pointer-events","all");
        $j(".history-animated-slider .history-animated-slider-year-nav .slick-next").css("border","2px solid rgba(0, 125, 85, 1)");
      }
      
      if($j(".history-animated-slider-year-nav-links").first().hasClass("slick-current")){
        $j(this).css("pointer-events","none");
        $j(this).css("border","2px solid rgba(0, 125, 85, 0.35)");
      }
      else{
        $j(this).css("pointer-events","all");
        $j(this).css("border","2px solid rgba(0, 125, 85, 1)");
      }
      
      getPerFor = getPerFor-5;
      getPerBack = getPerBack-10;
      getPerSky = getPerSky-10;
      $j(".history-forground-image").css("left", "-"+getPerFor+"%");
      $j(".history-background-image").css("left", "-"+getPerBack+"%");
      $j(".history-back-image").css("left", "-"+getPerSky+"%");
      
      var getActiFirstFromLast = totalLength-5;
      if($j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").hasClass("slick-current") || $j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").prev().hasClass("slick-current")){
          $j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").prev().removeClass("disableIndex");
          $j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").removeClass("desolveActive");
          $j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").nextAll().removeClass("desolveActive");
      }
      
      prevNextDiv();
    });
    
    $j(".history-animated-year-wrap .slick-prev.slick-arrow").hover(
      function () {
        $j(".history-animated-slider-year-nav-links.activeFirst").addClass("hoverLineF");
        $j(".history-animated-year-wrap").addClass("hoverLineF");
        $j(".history-animated-slider-year-nav-links[data-slick-index='8']:not(slick-active)").addClass("hoverLineF");
      },
      function () {
        $j(".history-animated-slider-year-nav-links.activeFirst").removeClass("hoverLineF");
        $j(".history-animated-year-wrap").removeClass("hoverLineF");
        $j(".history-animated-slider-year-nav-links[data-slick-index='8']:not(slick-active)").removeClass("hoverLineF");
      }
    );
    
    
    //SLICK YEAR CLICK EVENTS
    
    var totalLength = $j(".history-animated-slider .history-animated-slider-year-nav-links").length;
    var slickNext = $j(".history-animated-slider .history-animated-slider-year-nav .slick-next");
    var slickPrev = $j(".history-animated-slider .history-animated-slider-year-nav .slick-prev");
    
    $j(".history-animated-slider .history-animated-slider-year-nav-links").click(function(){
      var slickIndex = $j(this).attr("data-slick-index");
      var currentIndex = $j(this).index();
      var perIndexFor = 0;
      
      if(currentIndex !== 0){
        $j(slickPrev).css("pointer-events","all");
        $j(slickPrev).css("border","2px solid rgba(0, 125, 85, 1)");
      }
      else if(currentIndex === 0){
        $j(slickPrev).css("pointer-events","none");
        $j(slickPrev).css("border","2px solid rgba(0, 125, 85, 0.35)");
      }
      
      
      if(currentIndex !== totalLength-1){
        $j(slickNext).css("pointer-events","all");
        $j(slickNext).css("border","2px solid rgba(0, 125, 85, 1)");
      }
      else if(currentIndex == totalLength-1){
        $j(slickNext).css("pointer-events","none");
        $j(slickNext).css("border","2px solid rgba(0, 125, 85, 0.35)");
      }
      
      
      if($j(this).hasClass("disableIndex")){
          $j(this).removeClass("disableIndex");
      }
      
      console.log(slickIndex);
      getPerFor = slickIndex*5;
      getPerBack = slickIndex*10;
      getPerSky = slickIndex*10;
      $j(".history-forground-image").css("left", "-"+getPerFor+"%");
      $j(".history-background-image").css("left", "-"+getPerBack+"%");
      $j(".history-back-image").css("left", "-"+getPerSky+"%");
      
      
      var getActiFirstFromLast = totalLength-5;
      if($j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").hasClass("slick-current")){
          $j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").prev().addClass("disableIndex");
          $j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").addClass("desolveActive");
          $j(".history-animated-slider-year-nav-links[data-slick-index="+getActiFirstFromLast+"]").nextAll().addClass("desolveActive");
      }
      
      prevNextDiv();
    });
    
    /*$j(".history-animated-slider .history-animated-slider-year-nav-links").first().click(function(){
      $j(".history-animated-slider .history-animated-slider-year-nav .slick-prev").css("pointer-events","none");
    });
    $j(".history-animated-slider .history-animated-slider-year-nav-links").last().click(function(){
      $j(".history-animated-slider .history-animated-slider-year-nav .slick-next").css("pointer-events","none");
    });*/
    
    $j(".history-animated-slider-year-nav-links.slick-active").last().next().addClass("nextActive");
    $j(".history-animated-slider-year-nav-links.slick-active").first().prev().addClass("prevActive");
    
    $j(".history-animated-slider-year-nav-links.slick-active").first().addClass("activeFirst");
    $j(".history-animated-slider-year-nav-links.slick-active").last().addClass("activeLast");
  });
  
  function prevNextDiv(){
    $j(".history-animated-slider-year-content").removeClass("prevDiv");
    $j(".history-animated-slider-year-content").removeClass("nextDiv");
    $j(".history-animated-slider-year-content.slick-current").prev().addClass("prevDiv");
    $j(".history-animated-slider-year-content.slick-current").next().addClass("nextDiv");
    
    $j(".history-animated-slider-year-nav-links").removeClass("prevDiv");
    $j(".history-animated-slider-year-nav-links").removeClass("nextDiv");
    $j(".history-animated-slider-year-nav-links.slick-current").prev().addClass("prevDiv");
    $j(".history-animated-slider-year-nav-links.slick-current").next().addClass("nextDiv");
    
    $j(".history-animated-slider-year-nav-links").removeClass("nextActive");
    $j(".history-animated-slider-year-nav-links").removeClass("prevActive");
    $j(".history-animated-slider-year-nav-links").removeClass("activeLast");
    $j(".history-animated-slider-year-nav-links").removeClass("activeFirst");
    
    $j(".history-animated-slider-year-nav-links.slick-active").first().prev().addClass("prevActive");
    $j(".history-animated-slider-year-nav-links.slick-active").last().next().addClass("nextActive");
    $j(".history-animated-slider-year-nav-links.slick-active").first().addClass("activeFirst");
    $j(".history-animated-slider-year-nav-links.slick-active").last().addClass("activeLast");
  }
  /*!---- history-----*/
    $j('.our-history-wrapper .history-year.no-border .year-border').hide("fast", function() {
  
      $j(this).parents('.history-year').prev('.history-year').find('.year-border').addClass('showafter');
  
    });
  
  
  
  $j(document).ready(function($j) {
  
      /*------History Snapdown-------*/
    var timelineBlocks = $j('.history-year'),
        offset = 0.8;
    currWidth = viewport().width;
    
    
      
      $j('.history-button').click(function(){
        
        if(!$j(this).hasClass('active')){
          
          $j(this).addClass("active");
          $j(this).next(".our-history-wrapper").slideDown(500, function(){
            $j('.our-history-wrapper .history-year').each(function(index) {
              var t = ".history-year .year-child" + (index + 1);
              setEqualHeight_CommonClass(t);
            });
          });
          $j(this).html("<p>Hide the timeline</p>");
        }
        else{
          
          $j(this).removeClass("active");
          $j(this).next(".our-history-wrapper").slideUp(500,
                                                        function(){
                                                          $j(".history-year .year-child").height("auto");
                                                        });
          $j(this).html("<p>See our timeline</p>");
        }
      });
      //hide timeline blocks which are outside the viewport
      // hideBlocks(timelineBlocks, offset);
      
      //on scolling, show/animate timeline blocks when enter the viewport
      $j(window).on('scroll', function() {
        (!window.requestAnimationFrame) ?
          setTimeout(function() {
            showBlocks(timelineBlocks, offset);
          }, 100): window.requestAnimationFrame(function() {
          showBlocks(timelineBlocks, offset);
        });
        
      });
  
    function hideBlocks(blocks, offset) {
      blocks.each(function() {
        ($j(this).offset().top > $j(window).scrollTop() + $j(window).height() * offset) && $j(this).find('.year-part').addClass('is-hidden');
      });
    }
    
    function showBlocks(blocks, offset) {
      blocks.each(function() {
        /*($j(this).offset().top <= $j(window).scrollTop() + $j(window).height() * offset & $j(this).find('.year-part.part-left').hasClass('is-hidden')) && */$j(this).find('.year-part.part-left').removeClass('is-hidden').addClass('bounce-in-left');
        
        /*($j(this).offset().top <= $j(window).scrollTop() + $j(window).height() * offset && $j(this).find('.year-part.part-right').hasClass('is-hidden')) && */$j(this).find('.year-part.part-right').removeClass('is-hidden').addClass('bounce-in-right');
        
      });
    }
  
  });
  
  /*!---- gatag-----*/
  var filetypes = /\.(zip.*|exe.*|dmg.*|pdf.*|doc.*|xls.*|ppt.*|ics.*|vcf.*|mp3.*|txt.*|rar.*|wma.*|mov.*|avi.*|wmv.*|flv.*|wav.*)$/i;
  
  var baseHref = '';
  if ($j('base').attr('href') != undefined) baseHref = $j('base').attr('href');
  var hrefRedirect = '';
  $j(document).ready(function(){
  $j('body').on('click', 'a', function(event) {
      
      var el = $j(this);
      var track = true;
      var href = (typeof(el.attr('href')) != 'undefined' ) ? el.attr('href') : '';
      var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
      if (!href.match(/^javascript:/i)) {
          var elEv = []; elEv.value=0, elEv.non_i=false;
          if (href.match(/^mailto\:/i)) {
              elEv.category = 'email';
              elEv.action = 'click';
              elEv.label = href.replace(/^mailto\:/i, '');
              elEv.loc = href;
          }
          else if (href.match(filetypes)) {
              var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
              elEv.category = 'download';
              elEv.action = 'click-' + extension[0];
              elEv.label = href.replace(/ /g,'-');
              elEv.loc = baseHref + href;
          }
          else if (href.match(/^https?\:/i) && !isThisDomain) {
              elEv.category = 'external';
              elEv.action = 'click';
              elEv.label = href.replace(/^https?\:\/\//i, '');
              elEv.non_i = true;
              elEv.loc = href;
          }
          else if (href.match(/^tel\:/i)) {
              elEv.category = 'telephone';
              elEv.action = 'click';
              elEv.label = href.replace(/^tel\:/i, '');
              elEv.loc = href;
          }
          else track = false;
          
      
          if (track) {
              var ret = true;
  
              if((elEv.category == 'external' || elEv.category == 'download') && (el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank') ) {
                  hrefRedirect = elEv.loc;
  
                  ga('send','event', elEv.category.toLowerCase(),elEv.action.toLowerCase(),elEv.label.toLowerCase(),elEv.value,{
                      'nonInteraction': elEv.non_i ,
                      'hitCallback':gaHitCallbackHandler
                  });
  
                  ret = false;
              }
              else {
                  ga('send','event', elEv.category.toLowerCase(),elEv.action.toLowerCase(),elEv.label.toLowerCase(),elEv.value,{
                      'nonInteraction': elEv.non_i
                  });
              }
  
              return ret;
          }
      }
  });
  });
  
  gaHitCallbackHandler = function() {
      window.location.href = hrefRedirect;
  }
  
  /*!---- autocomplete-----*/
  $j(document).ready(function () {
      //main search textbox
      if($j("#searchTextbox").length > 0)
      {
          $j("#searchTextbox").autocomplete({
          appendTo:"#searchbox",
              source: function (request, response) {
  
                  $j.ajax({
                      url: "/Investis/AdvancedSearch/PredictiveSearch.aspx",
                      data: {
                          ps_lang: 'en',
                          PS_HOSTNAME: autoCompleteDomain,
                          PS_SEARCHTERM: encodeURIComponent(request.term),
                          PS_MAXSUGGESTIONCOUNT: 7
                      },
                      async: true,
                      success: function (data) {
  
  
                          response(data);
                      },
                      error: function (result) {
                          //alert("Error loading the data" + result.responseText);
                      }
                  });
              },
              minLength: 1,
              select: function (event, ui) {
                  $j("#searchTextbox").val(ui.item.value);
                  $j("#searchButton").trigger("click");
              }
          }).data("ui-autocomplete")._renderItem = function (ul, item) {
              return $j("<li class='ui-corner-all'>")
                  .append("<a> <span style='float:left;'>" + item.label + "</span><span style='float:right;'>(" + item.count + ")</span></a>").appendTo(ul);
          };
          
          
      }
      
          //mobi search textbox
      if($j("#searchTextbox2").length > 0)
      {
          $j("#searchTextbox2").autocomplete({
          appendTo:"#searchbox",
              source: function (request, response) {
  
                  $j.ajax({
                      url: "/Investis/AdvancedSearch/PredictiveSearch.aspx",
                      data: {
                          ps_lang: 'en',
                          PS_HOSTNAME: autoCompleteDomain,
                          PS_SEARCHTERM: encodeURIComponent(request.term),
                          PS_MAXSUGGESTIONCOUNT: 7
                      },
                      async: true,
                      success: function (data) {
  
  
                          response(data);
                      },
                      error: function (result) {
                          //alert("Error loading the data" + result.responseText);
                      }
                  });
              },
              minLength: 1,
              select: function (event, ui) {
                  $j("#searchTextbox2").val(ui.item.value);
                  $j("#searchButton2").trigger("click");
              }
          }).data("ui-autocomplete")._renderItem = function (ul, item) {
              return $j("<li class='ui-corner-all'>")
                  .append("<a> <span style='float:left;'>" + item.label + "</span><span style='float:right;'>(" + item.count + ")</span></a>").appendTo(ul);
          };
          
          
      }
      
      
      
      // Search result page textbox
      if($j("#SearchTextboxRP").length > 0)
          {
               $j("#SearchTextboxRP").autocomplete({
                 appendTo: "#searchTextBoxContainerRP",
                  source: function (request, response) {
                      $j.ajax({
                          url: "/Investis/AdvancedSearch/PredictiveSearch.aspx",
                          data: {
                              ps_lang: 'en',
                              PS_HOSTNAME: autoCompleteDomain,
                              PS_SEARCHTERM: encodeURIComponent(request.term),
                              PS_MAXSUGGESTIONCOUNT: 7
                          },
                          async: true,
                          success: function (data) {
                              response(data);
                          },
                          error: function (result) {
                              //alert("Error loading the data" + result.responseText);
                          }
                      });
                  },
                  minLength: 1,
                  select: function (event, ui) {
                      $j("#SearchTextboxRP").val(ui.item.value);
                      $j("#SearchbuttonRP").trigger("click");
                  }
              }).data("ui-autocomplete")._renderItem = function (ul, item) {
                  return $j("<li class='ui-corner-all'>")
                      .append("<a> <span style='float:left;'>" + item.label + "</span><span style='float:right;'>(" + item.count + ")</span></a>").appendTo(ul);
              };
          }
  });
  /*!---- frame-manager-----*/
  /*! iFrame Resizer (iframeSizer.min.js ) - v2.6.2 - 2014-10-11
   *  Desc: Force cross domain iframes to size to content.
   *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
   *  Copyright: (c) 2014 David J. Bradshaw - dave@bradshaw.net
   *  License: MIT
   *	Requires: iframeResizer_child.js on I-framed page.
   */
  
  !function(){"use strict";function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!w;a+=1)w=window[b[a]+"RequestAnimationFrame"];w||c(" RequestAnimationFrame not supported")}function c(a){y.log&&"object"==typeof console&&console.log(s+"[Host page"+u+"]"+a)}function d(a){function b(){function a(){h(z),f(),y.resizedCallback(z)}i(a,z,"resetPage")}function d(a){var b=a.id;c(" Removing iFrame: "+b),a.parentNode.removeChild(a),y.closedCallback(b),c(" --")}function e(){var a=x.substr(t).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function j(a){var b=Number(y["max"+a]),d=Number(y["min"+a]),e=a.toLowerCase(),f=Number(z[e]);if(d>b)throw new Error("Value for min"+a+" can not be greater than max"+a);c(" Checking "+e+" is in range "+d+"-"+b),d>f&&(f=d,c(" Set "+e+" to min value")),f>b&&(f=b,c(" Set "+e+" to max value")),z[e]=""+f}function k(){var b=a.origin,d=z.iframe.src.split("/").slice(0,3).join("/");if(y.checkOrigin&&(c(" Checking connection is from: "+d),""+b!="null"&&b!==d))throw new Error("Unexpected message received from: "+b+" for "+z.iframe.id+". Message was: "+a.data+". This error can be disabled by adding the checkOrigin: false option.");return!0}function l(){return s===(""+x).substr(0,t)}function m(){var a=z.type in{"true":1,"false":1};return a&&c(" Ignoring init message from meta parent page"),a}function n(){var a=x.substr(x.indexOf(":")+r+6);c(" MessageCallback passed: {iframe: "+z.iframe.id+", message: "+a+"}"),y.messageCallback({iframe:z.iframe,message:a}),c(" --")}function o(){if(null===z.iframe)throw new Error("iFrame ("+z.id+") does not exist on "+u);return!0}function q(){c(" Reposition requested from iFrame"),v={x:z.width,y:z.height},f()}function w(){switch(z.type){case"close":d(z.iframe),y.resizedCallback(z);break;case"message":n();break;case"scrollTo":q();break;case"reset":g(z);break;case"init":b(),y.initCallback(z.iframe);break;default:b()}}var x=a.data,z={};l()&&(c(" Received: "+x),z=e(),j("Height"),j("Width"),!m()&&o()&&k()&&(w(),p=!1))}function e(){null===v&&(v={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},c(" Get position: "+v.x+","+v.y))}function f(){null!==v&&(window.scrollTo(v.x,v.y),c(" Set position: "+v.x+","+v.y),v=null)}function g(a){function b(){h(a),j("reset","reset",a.iframe)}c(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),e(),i(b,a,"init")}function h(a){function b(b){a.iframe.style[b]=a[b]+"px",c(" IFrame ("+a.iframe.id+") "+b+" set to "+a[b]+"px")}y.sizeHeight&&b("height"),y.sizeWidth&&b("width")}function i(a,b,d){d!==b.type&&w?(c(" Requesting animation frame"),w(a)):a()}function j(a,b,d){c("["+a+"] Sending msg to iframe ("+b+")"),d.contentWindow.postMessage(s+b,"*")}function k(){function b(){function a(a){1/0!==y[a]&&0!==y[a]&&(k.style[a]=y[a]+"px",c(" Set "+a+" = "+y[a]+"px"))}a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function d(a){return""===a&&(k.id=a="iFrameResizer"+o++,c(" Added missing iframe ID: "+a+" ("+k.src+")")),a}function e(){c(" IFrame scrolling "+(y.scrolling?"enabled":"disabled")+" for "+l),k.style.overflow=!1===y.scrolling?"hidden":"auto",k.scrolling=!1===y.scrolling?"no":"yes"}function f(){("number"==typeof y.bodyMargin||"0"===y.bodyMargin)&&(y.bodyMarginV1=y.bodyMargin,y.bodyMargin=""+y.bodyMargin+"px")}function h(){return l+":"+y.bodyMarginV1+":"+y.sizeWidth+":"+y.log+":"+y.interval+":"+y.enablePublicMethods+":"+y.autoResize+":"+y.bodyMargin+":"+y.heightCalculationMethod+":"+y.bodyBackground+":"+y.bodyPadding+":"+y.tolerance}function i(b){a(k,"load",function(){var a=p;j("iFrame.onload",b,k),!a&&y.heightCalculationMethod in x&&g({iframe:k,height:0,width:0,type:"init"})}),j("init",b,k)}var k=this,l=d(k.id);e(),b(),f(),i(h())}function l(a){if("object"!=typeof a)throw new TypeError("Options is not an object.")}function m(){function a(a){if("IFRAME"!==a.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");k.call(a)}function b(a){a=a||{},l(a);for(var b in z)z.hasOwnProperty(b)&&(y[b]=a.hasOwnProperty(b)?a[b]:z[b])}return function(c,d){b(c),Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a)}}function n(a){a.fn.iFrameResize=function(b){return b=b||{},l(b),y=a.extend({},z,b),this.filter("iframe").each(k).end()}}var o=0,p=!0,q="message",r=q.length,s="[iFrameSizer]",t=s.length,u="",v=null,w=window.requestAnimationFrame,x={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},y={},z={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){}};b(),a(window,"message",d),"jQuery"in window&&n(jQuery),"function"==typeof define&&define.amd?define(function(){return m()}):window.iFrameResize=m()}();
  
  if (!Array.prototype.forEach){
      Array.prototype.forEach = function(fun /*, thisArg */){
          "use strict";
          if (this === void 0 || this === null || typeof fun !== "function") throw new TypeError();
  
          var
              t = Object(this),
              len = t.length >>> 0,
              thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  
          for (var i = 0; i < len; i++)
              if (i in t)
                  fun.call(thisArg, t[i], i, t);
      };
  }
  
  /*$j(document).ready(function(){
      $j('iframe.responsive').iFrameResize({log:false});
  });
  $j(window).load(function(){
      $j('iframe.responsive').iFrameResize({log:false});
  });*/
  
  $j(document).ready(function(){
  if(!$j("body").hasClass("ip3-edit"))
      $j('iframe.responsive').iFrameResize({log:false});
  });
  $j(window).load(function(){
  if(!$j("body").hasClass("ip3-edit"))
      $j('iframe.responsive').iFrameResize({log:false});
  });
  $j(window).resize(function(){
      if ($j("iframe.responsive").length > 0) {
       $j("iframe.responsive").each(function(){
          $j(this).css("width", $j(this).parent('div').width() + "px");
          });
      }
  });
  
  /** Changes for keeping pop-up in the centre for fundamental tool **/
  
  var __iframe;
  $j(document).ready(function() {
      
      sendDimensions();
      if (__iframe !== undefined) {
          if (__iframe.addEventListener) {
              __iframe.addEventListener("load", sendDimensions, false);
          } else {
              __iframe.attachEvent("onload", sendDimensions);
          }
      }
      
  });
  $j(window).scroll(function() {
  
      sendDimensions();
  
  });
  
  $j(window).resize(function() {
  
      sendDimensions();
  
  });
  
  function sendDimensions() {
  
      
      fundamentalIndex = -1;
      $j("iframe").each(function(index){
          tmpSrc = $j(this).attr("src");
          if(tmpSrc.indexOf("fundamental=true") > 0)
          {
              fundamentalIndex = index;
          }
      });
      if(fundamentalIndex>=0)
      {
          __iframe = document.querySelectorAll("iframe.responsive")[fundamentalIndex];
           var iFrameWindow = __iframe.contentWindow;
          var iframeSrcHost = getToolHostName(__iframe.src);
          iFrameWindow.postMessage("[Fundamentals_PageViewport]:" + $j(window).height() + ":" + $j(window).scrollTop() + ":" + $j(__iframe).offset().top + ":" + $j(__iframe).height(), iframeSrcHost);
      }
      
      
     
  }
  
  function getToolHostName(url) {
      var urlParser = document.createElement("a");
      urlParser.href = url;
      return urlParser.protocol + "//" + urlParser.host;
  }
  /*!---- employees-filter-----*/
  $j(document).on("click",'#ui-id-1 li',function(e){
    var section=$j('.employee-list-section-wrapper').attr('data-section');
    $j(this).parents('.dd-wrap').find('ul.drp-list').slideDown();
    var sText = $j(this).text();
    var link = '<a href="javascript:;">';
    $j(this).parents('.dd-wrap').find('span.drp-list').html(link + sText + '</a>');
    $j(this).parents('.dd-wrap').find('ul.drp-list').children('li').find('a').removeClass('current');
    $j(this).removeClass('current');
    $j(this).addClass('current');
    $j(this).parents('.dd-wrap').find('span.drp-list').attr("data-itemname",$j(this).attr('data-itemname'));
    
    category=$j(".employee-category-wrapper span.category-selected.drp-list").attr("data-itemname");
    department=$j(".employee-departments-wrapper span.department-selected.drp-list").attr("data-itemname");
    selectedlocation=$j(".employee-locations-wrapper span.location-selected.drp-list").attr("data-itemname");
    title=$j("#txtEmployeeTitle").val()==='' || $j("#txtEmployeeTitle").val()==='Name'?'*':$j("#txtEmployeeTitle").val();
    
    if (!window.location.origin) {
      window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    }
    
    $j.ajax({
      url:window.location.origin+section+"?async=1&department="+department+"&category="+category+"&location="+selectedlocation+"&title="+title,
      type:"get",
      success:function(data){
      employeesTable.destroy();
      //$j('.employee-list-table-wrapper').html(data);
      $j('.employee-list-table-wrapper').fadeOut(200, function() {
      $j(this).html(data).fadeIn(200,function(){
      makeEmployeesDataTable({
      paging: false,
      searching: false
    });
  });
  });
  }
  });
  });
  
  $j("#txtEmployeeTitle").on("focus",function(){
    if($j(this).val() == "Name"){
      $j(this).val("");
    }
  });
  
  $j("#txtEmployeeTitle").on("blur",function(){
    if($j(this).val() == "" && $j(this).val() != "Name"){
      $j(this).val("Name");
      var section=$j('.employee-list-section-wrapper').attr('data-section');
      $j(this).parents('.dd-wrap').find('ul.drp-list').slideDown();
      var sText = $j(this).text();
      var link = '<a href="javascript:;">';
      $j(this).parents('.dd-wrap').find('span.drp-list').html(link + sText + '</a>');
      $j(this).parents('.dd-wrap').find('ul.drp-list').children('li').find('a').removeClass('current');
      $j(this).addClass('current');
      $j(this).parents('.dd-wrap').find('span.drp-list').attr("data-itemname",$j(this).attr('data-itemname'));
      
      category=$j(".employee-category-wrapper span.category-selected.drp-list").attr("data-itemname");
      
      department=$j(".employee-departments-wrapper span.department-selected.drp-list").attr("data-itemname");
      
      selectedlocation=$j(".employee-locations-wrapper span.location-selected.drp-list").attr("data-itemname");
      
      title=$j("#txtEmployeeTitle").val()==='' || $j("#txtEmployeeTitle").val()==='Name'?'*':$j("#txtEmployeeTitle").val();
      
      if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
      }
      
      $j.ajax({
        url:window.location.origin+section+"?async=1&department="+department+"&category="+category+"&location="+selectedlocation+"&title="+title,
        type:"get",
        success:function(data){
        employeesTable.destroy();
        //$j('.employee-list-table-wrapper').html(data);
        $j('.employee-list-table-wrapper').fadeOut(200, function() {
        $j(this).html(data).fadeIn(200,function(){
        makeEmployeesDataTable({
        paging: false,
        searching: false
      });
    });
  });
  }});
  
  }
  
  }); 
  var availableTags = [];
  
  $j($j(".employee-list-data p")).each(function(){
    availableTags.push($j(this).text());
  });
  
  $j("#txtEmployeeTitle").autocomplete({
    //source: availableTags,
    
    source: function( request, response ) {    
      var matcher = new RegExp("\\b" + $j.ui.autocomplete.escapeRegex( request.term ), "i" );
      response( $j.grep( availableTags, function( item ){
        return matcher.test( item );
      }) );
    },
    //autoFocus: true,
    appendTo: ".filter-section-wrapper", 
    select: function (e, ui) {
      
    },
    
    change: function (e, ui) {
      
    }
  }).keydown(function(e){
    if (e.keyCode === 13){
      var section=$j('.employee-list-section-wrapper').attr('data-section');
      $j(this).parents('.dd-wrap').find('ul.drp-list').slideDown();
      var sText = $j(this).text();
      var link = '<a href="javascript:;">';
      $j(this).parents('.dd-wrap').find('span.drp-list').html(link + sText + '</a>');
      $j(this).parents('.dd-wrap').find('ul.drp-list').children('li').find('a').removeClass('current');
      $j(this).addClass('current');
      $j(this).parents('.dd-wrap').find('span.drp-list').attr("data-itemname",$j(this).attr('data-itemname'));
      
      category=$j(".employee-category-wrapper span.category-selected.drp-list").attr("data-itemname");
      
      department=$j(".employee-departments-wrapper span.department-selected.drp-list").attr("data-itemname");
      
      selectedlocation=$j(".employee-locations-wrapper span.location-selected.drp-list").attr("data-itemname");
      
      title=$j("#txtEmployeeTitle").val()==='' || $j("#txtEmployeeTitle").val()==='Name'?'*':$j("#txtEmployeeTitle").val();
      
      if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
      }
      
      $j.ajax({
        url:window.location.origin+section+"?async=1&department="+department+"&category="+category+"&location="+selectedlocation+"&title="+title,
        type:"get",
        success:function(data){
        employeesTable.destroy();
        //$j('.employee-list-table-wrapper').html(data);
        $j('.employee-list-table-wrapper').fadeOut(200, function() {
        $j(this).html(data).fadeIn(200,function(){
        makeEmployeesDataTable({
        paging: false,
        searching: false
      });
    });
    $j('.filter-section-wrapper #ui-id-1.ui-autocomplete.ui-menu').hide();
  });
  }
  });
  return false;
  }
  });
  
  
  $j(document).on('click','.emp-filter-click',function(){
    
    var section=$j('.employee-list-section-wrapper').attr('data-section');
    //$j('.dd-wrap').find('ul.drp-list').slideDown();
    var sText = $j('#txtEmployeeTitle').val();
    //$j('.dd-wrap').find('span.drp-list').text(sText);
    //$j('.dd-wrap').find('ul.drp-list').children('li').find('a').removeClass('current');
    //$j('.dd-wrap').find('span.drp-list').attr("data-itemname",$j(this).attr('data-itemname'));
    
    category=$j(".employee-category-wrapper span.category-selected.drp-list").attr("data-itemname");
    department=$j(".employee-departments-wrapper span.department-selected.drp-list").attr("data-itemname");
    selectedlocation=$j(".employee-locations-wrapper span.location-selected.drp-list").attr("data-itemname");
    title=$j("#txtEmployeeTitle").val()==='' || $j("#txtEmployeeTitle").val()==='Name'?'*':$j("#txtEmployeeTitle").val();
    
    if (!window.location.origin) {
      window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    }
    
    $j.ajax({
      url:window.location.origin+section+"?async=1&department="+department+"&category="+category+"&location="+selectedlocation+"&title="+title,
      type:"get",
      success:function(data){
      employeesTable.destroy();
      //$j('.employee-list-table-wrapper').html(data);
      $j('.employee-list-table-wrapper').fadeOut(200, function() {
      $j(this).html(data).fadeIn(200,function(){
      makeEmployeesDataTable({
      paging: false,
      searching: false
    });
  });
  $j('.filter-section-wrapper #ui-id-1.ui-autocomplete.ui-menu').hide();
  });
  }
  });
  });
  
  /*!---- module-carousel-----*/
  /* Module Slider - Career Page */
  if($j('.module-carousel .carousel-wrapper .carousel-item').length > 1){
    $j('.module-carousel .carousel-wrapper').slick({
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 1,
      focusOnSelect: true,
      arrows:false,
      infinite: true,
      dots: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            centerPadding: '30px',
            variableWidth: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            variableWidth: false
          }
        }
      ]
    });
  }
  
  $j('.module-carousel .carousel-wrapper').on('afterChange init', function(event, slick, direction){
          //console.log('afterChange/init', event, slick, slick.$slides);
          // remove all prev/next
          slick.$slides.removeClass('prevdiv').removeClass('nextdiv');
           slick.$slides.removeClass('currdiv');
          for (var i = 0; i < slick.$slides.length; i++)
          {
              var $slide = $j(slick.$slides[i]);
              if ($slide.hasClass('slick-current')) {
                  $slide.prev().addClass('prevdiv');
                  $slide.addClass('currdiv');
                  $slide.next().addClass('nextdiv');
                  break;
              }
          }
        }
      ) .on('beforeChange', function(event, slick) {
          // optional, but cleaner maybe
          // remove all prev/next
          
          slick.$slides.removeClass('currdiv');
          slick.$slides.removeClass('prevdiv').removeClass('nextdiv');
      });
    /* Slick Slider */
    
    
    
    /* esg state counter animation */
  /* $j.fn.animateESGSignpost = function() {
      $j('.esg-states-rows').each(function(i) {
        (function(self) {
          setTimeout(function() {
            $j(self).removeClass('animateIt');
            $j(self).addClass('animated');
            
            
              animatedDotsCount=$j('#'+$j(self).attr('id')+' .counter').text();
              $j('#'+$j(self).attr('id')+' .counter').counterUp({ delay: 10, time: 350 });
           
            
            var parentChild=$j(self).parent().find('.esg-states-rows').length;
            var parentAnimatedChild=$j(self).parent().find('.esg-states-rows.animated').length;
            
            if(parentChild == parentAnimatedChild){
              $j(self).parent().addClass('borderBottom');
            }
            
          },(i*500)+500);
        })(this);
      });    
  };*/
    /* esg state counter animation */
  /*$j(document).ready(function(){
   $j('.esg-state-item').each(function(i){
      
      $j(this).addClass('animateIt');
    });
    animateSection=true;
    
  });
  $j(window).scroll(function(e){
   var wst=$j(window).scrollTop();
    //wst=wst+(($j(window).height())/2);
    wst=wst+$j(window).height();
    var closeDiv=$j('div.esg-states-rows').closestToOffset({left: 0, top: (wst)});
    if(closeDiv && animateSection){
          closeDiv.animateESGSignpost();
          animateSection=false;
    }
    
  });*/
  
  /*!---- counter-up-----*/
  /*!
   * jquery.counterup.js 1.0
   *
   * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
   * Released under the GPL v2 License
   *
   * Date: Nov 26, 2013
   */
  (function($) {
      "use strict";
  
      $.fn.counterUp = function(options) {
  
          // Defaults
          var settings = $.extend({
              'time': 400,
              'delay': 10
          }, options);
  
          return this.each(function() {
  
              // Store the object
              var $this = $(this);
              var $settings = settings;
  
              var counterUpper = function() {
                  var nums = [];
                  var divisions = $settings.time / $settings.delay;
                  var num = $this.text();
                  var isComma = /[0-9]+,[0-9]+/.test(num);
                  num = num.replace(/,/g, '');
                  var isInt = /^[0-9]+$/.test(num);
                  var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
                  var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
  
                  // Generate list of incremental numbers to display
                  for (var i = divisions; i >= 1; i--) {
  
                      // Preserve as int if input was int
                      var newNum = parseInt(num / divisions * i);
  
                      // Preserve float if input was float
                      if (isFloat) {
                          newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                      }
  
                      // Preserve commas if input had commas
                      if (isComma) {
                          while (/(\d+)(\d{3})/.test(newNum.toString())) {
                              newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                          }
                      }
  
                      nums.unshift(newNum);
                  }
  
                  $this.data('counterup-nums', nums);
                  $this.text('0');
  
                  // Updates the number until we're done
                  var f = function() {
                      $this.text($this.data('counterup-nums').shift());
                      if ($this.data('counterup-nums').length) {
                          setTimeout($this.data('counterup-func'), $settings.delay);
                      } else {
                          delete $this.data('counterup-nums');
                          $this.data('counterup-nums', null);
                          $this.data('counterup-func', null);
                      }
                  };
                  $this.data('counterup-func', f);
  
                  // Start the count up
                  setTimeout($this.data('counterup-func'), $settings.delay);
              };
  
              // Perform counts when the element gets into view
              counterUpper();
          });
  
      };
  })($j);
  
  //focus to div on scroll
  $j.fn.closestToOffset = function(offset) {
      var el = null,
          elOffset, x = offset.left,
          y = offset.top,
          distance, dx, dy, minDistance;
  
      var staticOffset = 0;
  
      this.each(function() {
          elOffset = $j(this).offset();
  
          var offsets = [
              [elOffset.left, elOffset.top],
              [elOffset.right, elOffset.top],
              [elOffset.left, elOffset.bottom],
              [elOffset.right, elOffset.bottom]
          ];
  
          for (off in offsets) {
              if ((y + staticOffset) >= offsets[off][1]) {
                  el = $j(this);
              }
          }
      });
      return el;
  };
  
  var animateSection = false;
  var animateKeyfactSection = false;
  var animatedDotsCount = 0;
  var animateStatsSection = true;
  var animateVStatsSection = true;
  var animatesmallStatsSection = true;
  var animatehighlightsStatsSection = true;
  
  $j.fn.generateAnimatedDots = function(dotsCount) {
      var actualID = $j(this).attr('id');
      var dotsColor = $j('#' + actualID + ' div.animated-dot-wrapper').attr('data-color');
      for (var d = 0; d < dotsCount; d++) {
          $j('#' + actualID + ' div.animated-dot-wrapper').append('<span class="signpost-dots" style="display:none; background-color:' + dotsColor + '">&nbsp;</span>');
          $j('#' + actualID + ' div.animated-dot-wrapper .signpost-dots').each(function(i) {
              $j(this).delay(i * 25).fadeIn(25);
          });
      }
  };
  
  $j.fn.animateSignpost = function() {
      $j('.portfolio-signpost').each(function(i) {
          (function(self) {
              setTimeout(function() {
                  $j(self).removeClass('animateIt');
                  $j(self).addClass('animated');
  
                  /*if($j(self).hasClass('small-signpost')){
              //small signpost
            }else{*/
                  animatedDotsCount = $j('#' + $j(self).attr('id') + ' .counter').text();
                  $j('#' + $j(self).attr('id') + ' .counter').counterUp({
                      delay: 10,
                      time: 350
                  });
                  //console.log($j('#'+$j(self).hasClass('esg-chart')));
                  if ($j('#' + $j(self).hasClass('esg-chart'))) {
                      if ($j('.esg-chart.animated').length < 1) {
                          Highcharts.chart('container', {
                              data: {
                                  table: 'datatable'
                              },
                              chart: {
                                  type: 'column',
                                  backgroundColor: 'rgba(0,0,0,0)',
                                  height: 230
                              },
                              colors: [
                                  '#07a879',
                                  '#00bede'
                              ],
                              xAxis: {
                                  "type": "category",
                                  labels: {
                                      style: {
                                          color: '#fefefe',
                                          fontSize: '7px',
                                          fontFamily: 'Graphik Light Web'
                                      }
                                  }
                              },
                              yAxis: {
                                  labels: {
                                      enabled: false
                                  },
                                  gridLineWidth: 0,
                                  minorGridLineWidth: 0,
                                  tickInterval: 5,
                                  title: {
                                      text: ''
                                  }
                              },
                              title: {
                                  text: '',
                                  align: 'center',
                                  x: 0,
                                  y: 10,
                                  useHTML: true,
                                  style: {
                                      fontFamily: 'Graphik Light Web',
                                      color: '#fefefe',
                                      fontSize: '10px'
                                  }
                              },
                              plotOptions: {
                                  series: {
                                      borderWidth: 0,
                                      dataLabels: {
                                          inside: true,
                                          color: '#fefefe',
                                          align: 'center',
                                          enabled: true,
  
                                          verticalAlign: 'top',
                                          style: {
                                              fontSize: '7px',
                                              fontFamily: 'Graphik Light Web',
                                              textOutline: false
                                          }
                                      },
                                      pointPadding: 0.1,
                                      groupPadding: 0
                                  }
                              },
                              tooltip: {
                                  formatter: function() {
                                      return '<b>' + this.series.name + '</b><br/>' +
                                          this.point.y;
                                  }
                              },
                              color: {
                                  radialGradient: {
                                      cx: 0.5,
                                      cy: 0.5,
                                      r: 0.5
                                  },
                                  stops: [
                                      [0, '#003399'],
                                      [1, '#3366AA']
                                  ]
                              },
                              series: [{
                                  dataLabels: {
                                      inside: true,
                                      enabled: true,
                                      color: '#fefefe',
                                      align: 'center',
                                      verticalAlign: 'top',
                                      style: {
                                          fontSize: '7px',
                                          fontFamily: 'Graphik Light Web'
                                      }
                                  }
                              }],
                              credits: {
                                  enabled: false
                              },
                              legend: {
                                  align: 'left',
                                  symbolWidth: 10,
                                  symbolRadius: 0,
                                  itemStyle: {
                                      color: '#fefefe',
                                      fontSize: '4px',
                                      fontFamily: 'Graphik Light Web'
  
                                  }
                              },
                              responsive: {
                                  rules: [{
                                      condition: {
                                          maxHeight: 240
                                      },
                                      chartOptions: {
                                          xAxis: {
                                              labels: {
                                                  style: {
                                                      fontSize: '10px'
                                                  }
                                              }
                                          },
                                          title: {
                                              style: {
                                                  fontSize: '10px'
                                              }
                                          },
                                          legend: {
                                              symbolWidth: 10,
                                              itemStyle: {
                                                  fontSize: '10px'
                                              }
                                          }
                                      },
                                      plotOptions: {
                                          series: {
                                              dataLabels: {
                                                  style: {
                                                      fontSize: '10px'
                                                  }
                                              }
                                          }
                                      }
                                  }]
                              }
  
                          });
                      }
                  }
  
  
                  var parentChild = $j(self).parent().find('.portfolio-signpost').length;
                  var parentAnimatedChild = $j(self).parent().find('.portfolio-signpost.animated').length;
  
                  if (parentChild == parentAnimatedChild) {
                      $j(self).parent().addClass('borderBottom');
                      if ($j(".esg-states-inner-wrapper").length) {
  
                          setTimeout(function() {
                              $j(self).parent().parent(".esg-states-rows").addClass('parentBorderBottom');
                          }, 650);
  
                      }
  
                  }
  
              }, (i * 500) + 500);
          })(this);
      });
  };
  
  
  
  
  $j.fn.animateKeyfactSignpost = function() {
      var targetAreaID = $j(this).attr('id');
  
      $j('#' + targetAreaID + ' .keyfact-item').each(function(i) {
          (function(self) {
              setTimeout(function() {
                  $j(self).removeClass('animateIt');
                  $j(self).addClass('animated');
  
                  $j('#' + $j(self).attr('id') + ' .counter').counterUp({
                      delay: 10,
                      time: 350
                  });
  
              }, (i * 500) + 500);
          })(this);
      });
  };
  
  $j.fn.animatePlatformSignpost = function() {
      var targetAreaID = $j(this).attr('id');
  
      $j('#' + targetAreaID + ' .platform-signpost').each(function(i) {
          (function(self) {
              setTimeout(function() {
                  $j(self).removeClass('animateIt');
                  $j(self).addClass('animated');
              }, (i * 500) + 500);
          })(this);
      });
  
      $j('#' + targetAreaID + '.animate-signpost-wrapper').removeClass('animateIt');
  };
  
  $j.fn.animateDistributionGraph = function() {
      var totalChart = $j(this).find('.distribution_chart_wrap').length;
      var targetDiv = $j(this);
      $j(this).find('.distribution_chart_wrap').each(function(i) {
          var targetAreaID = $j(this).attr('id');
  
          $j('#' + targetAreaID + ' .distribution_chart_inner .bar-item').each(function(i) {
              (function(self) {
                  setTimeout(function() {
                      $j(self).addClass('animated');
                  }, (i * 500) + 500);
              })(this);
          });
  
          $j('#' + targetAreaID + ' .distribution_chart_inner').removeClass('animateIt');
  
          if (i + 1 == totalChart) {
              targetDiv.addClass('animated');
          }
      });
  };
  
  $j.fn.animateGraph = function() {
      var targetAreaID = $j(this).parent().attr('id');
  
      $j('#' + targetAreaID + ' .animated_graph_inner .bar-item').each(function(i) {
          (function(self) {
              setTimeout(function() {
                  $j(self).addClass('animated');
              }, (i * 500) + 500);
          })(this);
      });
  
      $j('#' + targetAreaID + ' .animated_graph_inner').removeClass('animateIt');
  };
  
  $j.fn.mobAnimateGraph = function() {
      var targetAreaID = $j(this).parent().attr('id');
  
      $j('#' + targetAreaID + ' .mob-animated_graph_inner .bar-item').each(function(i) {
          (function(self) {
              setTimeout(function() {
                  $j(self).addClass('animated');
              }, (i * 500) + 500);
          })(this);
      });
  
      $j('#' + targetAreaID + ' .mob-animated_graph_inner').removeClass('animateIt');
  };
  
  
  /* stats module counter and animation */
  $j.fn.animateStats = function() {
  
      $j('.chptr-stats-item').each(function(i) {
          (function(self) {
              setTimeout(function() {
                  $j(self).removeClass('animateIt');
                  $j(self).addClass('animated');
  
                  $j(self).find('.counter').counterUp({
                      delay: 10,
                      time: 350
                  });
  
              }, (i * 500) + 500);
          })(this);
      });
  };
  
  /* Verticale stats module counter and animation */
  $j.fn.animateVStats = function() {
      $j('.chptr-vstats-item').each(function(i) {
          (function(self) {
              setTimeout(function() {
                  $j(self).removeClass('animateIt');
                  $j(self).addClass('animated');
  
                  $j(self).find('.counter').counterUp({
                      delay: 10,
                      time: 350
                  });
  
              }, (i * 500) + 500);
          })(this);
      });
  };
  
  /* small stats module counter and animation */
  $j.fn.animatesmallStats = function() {
      $j('.chptr-small-stats-item').each(function(i) {
          (function(self) {
              setTimeout(function() {
  
                  $j(self).removeClass('animateIt');
                  $j(self).addClass('animated');
  
                  $j(self).find('.counter').counterUp({
                      delay: 10,
                      time: 350
                  });
  
              }, (i * 500) + 500);
          })(this);
      });
  };
  
  /* Highlighted stats module counter and animation */
  $j.fn.animatehighlightsStats = function() {
      $j('.chptr-highlights-stats-item').each(function(i) {
          (function(self) {
              setTimeout(function() {
  
                  $j(self).removeClass('animateIt');
                  $j(self).addClass('animated');
  
                  $j(self).find('.counter').counterUp({
                      delay: 10,
                      time: 350
                  });
  
              }, (i * 500) + 500);
          })(this);
      });
  };
  
  
  
  
  function generateAnimatedGraph(targetID, targetTable) {
      var maxH = 250;
      var maxW = 40;
      var lbl_arr = [];
      var val_arr = [];
      var barH_arr = [];
      var barW_arr = [];
      var barPos_arr = [];
      var barWPos_arr = [];
      var color_arr = [];
      var prefix_val = '';
      var suffix_val = '';
      /*generate desktop wrapper*/
      $j('#' + targetID).append('<div class="animated_graph_inner animateIt"></div>');
  
      /*generate mobile wrapper*/
      $j('#' + targetID).append('<div class="mob-animated_graph_inner animateIt"></div>');
  
      $j('#' + targetID + ' > table > tbody > tr').each(function(i) {
          lbl_arr.push($j(this).find('td:eq(0)').html());
          val_arr.push($j(this).find('td:eq(1)').text());
          color_arr.push($j(this).find('td:eq(2)').text());
      });
  
      $j('#' + targetID + ' > table > tfoot > tr').each(function(i) {
          if ($j(this).find('th:eq(0)').text() == 'Prefix') {
              prefix_val = $j(this).find('td:eq(0)').html();
          } else if ($j(this).find('th:eq(0)').text() == 'Suffix') {
              suffix_val = $j(this).find('td:eq(0)').html();
          }
      });
  
  
      var totalEle = val_arr.length;
      var sum = 0,
          sumW = 32;
      var barWidth = 0;
  
      if (totalEle > 0) {
          barWidth = parseInt(100 / totalEle);
  
          for (var i = 0; i < totalEle; i++) {
              /*for desktop behaviour*/
              barH_arr[i] = ((maxH * val_arr[i]) / val_arr[totalEle - 1]);
  
              if (i == totalEle - 1) {
                  barPos_arr[i] = 0;
              } else {
                  barPos_arr[i] = sum;
              }
              sum = sum + barH_arr[i];
  
              /*for mobile behaviour*/
              barW_arr[i] = ((maxW * val_arr[i]) / val_arr[totalEle - 1]);
  
              if (i == totalEle - 1) {
                  barWPos_arr[i] = 32;
              } else {
                  barWPos_arr[i] = sumW;
              }
              sumW = sumW + barW_arr[i];
          }
  
          /*append html*/
          var graphHtml = '';
          var mobGraphHtml = '';
          for (var i = 0; i < totalEle; i++) {
              var cssClass = "";
              if (i == 0) {
                  cssClass = 'first';
              } else if (i == totalEle - 1) {
                  cssClass = 'last';
              }
              /*append html to desktop wrapper*/
              graphHtml = '<div class="bar-item ' + cssClass + '" style="height:' + maxH + 'px;width:' + barWidth + '%; color:' + color_arr[i] + '"><span class="bar_label" style="top:' + maxH + 'px;">' + lbl_arr[i] + '</span><div class="bar" data-height="' + barH_arr[i] + '" style="background-color:' + color_arr[i] + ';height:' + barH_arr[i] + 'px; bottom:' + barPos_arr[i] + 'px;"><div class="bar_value"><span class="prefix_text">' + prefix_val + '</span><span>' + val_arr[i] + '' + suffix_val + '</span></div></div></div>';
  
              $j('#' + targetID + ' .animated_graph_inner').append(graphHtml);
  
              /*append html to mobile wrapper*/
              mobGraphHtml = '<div class="bar-item ' + cssClass + '" style="color:' + color_arr[i] + '"><div class="bar_label_wrapper"><span class="bar_label">' + lbl_arr[i] + '</span></div><div class="bar" style="width:' + barW_arr[i] + '%;left:' + barWPos_arr[i] + '%;background-color:' + color_arr[i] + '";><div class="bar_value"><span class="prefix_text">' + prefix_val + '</span><span>' + val_arr[i] + '' + suffix_val + '</span></div></div></div>';
  
              $j('#' + targetID + ' .mob-animated_graph_inner').append(mobGraphHtml);
          }
      }
  
  }
  
  
  $j(document).ready(function() {
      /*check animate table*/
      if ($j('table.table-animate').length > 0) {
          $j('table.table-animate').each(function(i) {
              $j(this).wrap('<div class="animated_graph_wrap" id="agw_' + i + '"></div>');
              generateAnimatedGraph('agw_' + i, $j(this));
          });
      }
  
      /*$j('.portfolio-signpost').each(function(i) {
          $j(this).attr('id', 'ph_signpost' + i);
          $j(this).addClass('animateIt');
      });*/
      animateSection = true;
  
      $j('.keyfact-item').each(function(i) {
          $j(this).attr('id', 'kf_signpost' + i);
          $j(this).addClass('animateIt');
      });
      animateKeyfactSection = true;
  
      /*Animate Signpost*/
      /*$j('.platform-signpost').each(function(i) {
          $j(this).attr('id', 'p_signpost' + i);
          $j(this).addClass('animateIt');
      });*/
      
      $j(".counter").counterUp({
        delay: 10,
        time: 1000,
        offset: 70,
        beginAt: 100,
        formatter: function (n) {
          return n.replace(/,/g, '.');
        }
      });
  
      $j('.content-value.counter').removeClass('counter');
  
  });
  
  $j(window).scroll(function(e) {
      var wst = $j(window).scrollTop();
      //wst=wst+(($j(window).height())/2);
      wst = wst + $j(window).height();
  
      /* stats module counter and animation */
      var closeStatsDiv = $j('div.module-chapter-stats').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closeStatsDiv && animateStatsSection) {
          closeStatsDiv.animateStats();
          animateStatsSection = false;
      }
  
      /* Verticale stats module counter and animation */
      var closeStatsVDiv = $j('div.module-chapter-vertical-stats').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closeStatsVDiv && animateVStatsSection) {
          closeStatsVDiv.animateVStats();
          animateVStatsSection = false;
      }
  
      /* small stats module counter and animation */
      var closesmallStatsDiv = $j('div.module-chapter-small-stats').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closesmallStatsDiv && animatesmallStatsSection) {
          closesmallStatsDiv.animatesmallStats();
          animatesmallStatsSection = false;
      }
  
      /* small highlights module counter and animation */
      var closehighlightsStatsDiv = $j('div.module-chapter-highlights-stats').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closehighlightsStatsDiv && animatehighlightsStatsSection) {
          closesmallStatsDiv.animatehighlightsStats();
          animatehighlightsStatsSection = false;
      }
  
  
  
      var closeDiv = $j('div.portfolio-highlight-signpost-wrapper').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closeDiv && animateSection) {
          closeDiv.animateSignpost();
          animateSection = false;
      }
  
      /*keyfact signpost*/
      var closeDiv1 = $j('div.keyfact-wrapper').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closeDiv1 && animateKeyfactSection) {
          closeDiv1.animateKeyfactSignpost();
          animateKeyfactSection = false;
      }
  
      /*Animate Platform signpost*/
      var closeDiv2 = $j('div.animate-signpost-wrapper:not(.highlight-module-mobile)').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closeDiv2 && closeDiv2.hasClass('animateIt')) {
          closeDiv2.animatePlatformSignpost();
      }
  
      var closeDiv2 = $j('div.animate-signpost-wrapper.highlight-module-mobile').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closeDiv2 && closeDiv2.hasClass('animateIt')) {
          closeDiv2.animatePlatformSignpost();
      }
  
      /*Animate Garph*/
      var closeDiv3 = $j('div.animated_graph_inner').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closeDiv3 && closeDiv3.hasClass('animateIt')) {
          closeDiv3.animateGraph();
      }
  
      var closeDiv4 = $j('div.mob-animated_graph_inner').closestToOffset({
          left: 0,
          top: (wst)
      });
      if (closeDiv4 && closeDiv4.hasClass('animateIt')) {
          closeDiv4.mobAnimateGraph();
      }
  
      /*Animate distribution graph*/
      var closeDiv5 = $j('div.distributions-chart-wrapper').closestToOffset({
          left: 0,
          top: (wst)
      });
  
      if (closeDiv5 && !(closeDiv5.hasClass('animated'))) {
          closeDiv5.animateDistributionGraph();
      }
  
  
  });
  /*!---- datatables-min-----*/
  /*
   * This combined file was created by the DataTables downloader builder:
   *   https://datatables.net/download
   *
   * To rebuild or modify this file with the latest versions of the included
   * software please visit:
   *   https://datatables.net/download/#dt/dt-1.10.15
   *
   * Included libraries:
   *  DataTables 1.10.15
   */
  
  /*!
   DataTables 1.10.15
   ©2008-2017 SpryMedia Ltd - datatables.net/license
  */
  (function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
  d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
  a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&fb(a)}function gb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
  a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function hb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function ib(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",
  top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function jb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==
  e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=
  e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(hb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=R(g),i=b.mRender?R(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};
  b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return S(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=
  d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Z(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ma(a);s(a,null,"column-sizing",[a])}function $(a,b){var c=na(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function aa(a,b){var c=na(a,"bVisible"),c=h.inArray(b,
  c);return-1!==c?c:null}function ba(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function na(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,r;e=0;for(f=b.length;e<f;e++)if(l=b[e],r=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){r[i]===k&&(r[i]=B(a,i,e,"type"));
  q=d[g](r[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function kb(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&
  d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function oa(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,
  f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function lb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}
  function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function R(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=R(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);
  for(var i=0,n=j.length;i<n;i++){f=j[i].match(ca);g=j[i].match(V);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function S(a){if(h.isPlainObject(a))return S(a._);
  if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ca);j=e[i].match(V);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,
  ""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function pa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function qa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
  c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],r=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
  -1!==c&&(c=a.substring(c+1),S(a)(d,b.getAttribute(c)))}},m=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(S(j.mData._)(d,n),r(j.mData.sort,a),r(j.mData.type,a),r(j.mData.filter,a)):q?(j._setter||(j._setter=S(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)m(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)m(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&S(a.rowId)(d,b);return{data:d,cells:e}}
  function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:H.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i);
  n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}s(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?sa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function mb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===
  h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
  if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);
  for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function O(a){var b=s(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=
  -1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!nb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var r=d[c%e];q._sRowStripe!=r&&(h(l).removeClass(q._sRowStripe).addClass(r),q._sRowStripe=r)}s(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:
  f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ba(a),"class":a.oClasses.sRowEmpty}).html(c))[0];s(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,i]);s(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));s(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;
  c.bSort&&ob(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=!1}function pb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];
  n=f[k+1];if("'"==n||'"'==n){l="";for(q=2;f[k+q]!=n;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=qb(a);else if("f"==j&&d.bFilter)g=rb(a);else if("r"==j&&d.bProcessing)g=sb(a);else if("t"==j)g=tb(a);else if("i"==j&&d.bInfo)g=ub(a);else if("p"==
  j&&d.bPaginate)g=vb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");
  q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ta(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ua(a,b,c){s(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},
  e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){s(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=s(a,null,"xhr",
  [a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;s(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function nb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,
  !0),ua(a,wb(a),function(b){xb(a,b)}),!1):!0}function wb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,k=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var r=function(a,b){j.push({name:a,value:b})};r("sEcho",a.iDraw);r("iColumns",c);r("sColumns",D(b,"sName").join(","));r("iDisplayStart",g);r("iDisplayLength",i);var ra={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],
  l=f[g],i="function"==typeof n.mData?"function":n.mData,ra.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),r("mDataProp_"+g,i),d.bFilter&&(r("sSearch_"+g,l.sSearch),r("bRegex_"+g,l.bRegex),r("bSearchable_"+g,n.bSearchable)),d.bSort&&r("bSortable_"+g,n.bSortable);d.bFilter&&(r("sSearch",e.sSearch),r("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){ra.order.push({column:b.col,dir:b.dir});r("iSortCol_"+a,b.col);r("sSortDir_"+
  a,b.dir)}),r("iSortingCols",k.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:ra:b?j:ra}function xb(a,b){var c=va(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}pa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||
  wa(a,b);a.bAjaxDataGet=!0;C(a,!1)}function va(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?R(c)(b):b}function rb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?
  "":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Qa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});
  return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){yb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)zb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);Ab(a)}else f(b);a.bFiltered=!0;s(a,null,"search",[a])}function Ab(a){for(var b=
  m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function zb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Ra(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function yb(a,b,c,d,e,f){var d=Ra(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==m.ext.search.length&&(c=!0);j=Bb(a);if(0>=b.length)a.aiDisplay=
  g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Ra(a,b,c,d){a=b?a:Sa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Bb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;
  d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(xa.innerHTML=i,i=$b?xa.textContent:xa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Cb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,
  caseInsensitive:a.bCaseInsensitive}}function Db(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function ub(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Eb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Eb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+
  1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Fb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Fb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,
  f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){pb(a);mb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));s(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ua(a,[],function(c){var f=va(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=
  d;T(a);C(a,!1);wa(a,c)},a):(C(a,!1),wa(a))}else setTimeout(function(){ha(a)},200)}function wa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Z(a);s(a,null,"plugin-init",[a,b]);s(a,"aoInitComplete","init",[a,b])}function Ta(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ua(a);s(a,null,"length",[a,c])}function qb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=
  new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ta(a,h(this).val());O(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function vb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+
  b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Va(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&
  (d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(s(a,null,"page",[a]),c&&O(a));return b}function sb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");
  s(a,null,"processing",[a,b])}function tb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
  {"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
  0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],r=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(r.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=r;a.aoDrawCallback.push({fn:ma,sName:"scrolling"});return i[0]}function ma(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"),
  j=a.nScrollBody,l=h(j),q=j.style,r=h(a.nScrollFoot).children("div"),m=r.children("table"),p=h(a.nTHead),o=h(a.nTable),t=o[0],s=t.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,ac=D(a.aoColumns,"nTh"),P,L,Q,w,Wa=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,Z(a);else{a.scrollBarVis=L;o.children("thead, tfoot").remove();
  u&&(Q=u.clone().prependTo(o),P=u.find("tr"),Q=Q.find("tr"));w=p.clone().prependTo(o);p=p.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ta(a,w),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},Q);f=o.outerWidth();if(""===c){s.width="100%";if(U&&(o.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(o.outerWidth()-b);f=o.outerWidth()}else""!==d&&(s.width=
  v(d),f=o.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Wa.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,ac)!==-1)a.style.width=Wa[b]},p);h(L).height(0);u&&(I(C,Q),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},Q),I(function(a,b){a.style.width=y[b]},P),h(Q).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+z[b]+"</div>";a.style.width=Wa[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+
  A[b]+"</div>";a.style.width=y[b]},Q);if(o.outerWidth()<f){P=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(P-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else P="100%";q.width=v(P);g.width=v(P);u&&(a.nScrollFoot.style.width=v(P));!e&&U&&(q.height=v(t.offsetHeight+b));c=o.outerWidth();n[0].style.width=v(c);i.width=v(c);d=o.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+
  (x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(m[0].style.width=v(c),r[0].style.width=v(c),r[0].style[e]=d?b+"px":"0px");o.children("colgroup").insertBefore(o.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,
  e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=na(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,r=!1,m,p,o=a.oBrowser,d=o.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)p=c[i[m]],null!==p.sWidth&&(p.sWidth=Gb(p.sWidthOrig,k),r=!0);if(d||!r&&!f&&!e&&j==ba(a)&&j==n.length)for(m=0;m<j;m++)i=$(a,m),null!==i&&(c[i].sWidth=v(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var t=h("<tr/>").appendTo(j.find("tbody"));
  j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=ta(a,j.find("thead")[0]);for(m=0;m<i.length;m++)p=c[i[m]],n[m].style.width=null!==p.sWidthOrig&&""!==p.sWidthOrig?v(p.sWidthOrig):"",p.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:p.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)r=i[m],p=c[r],h(Hb(a,r)).clone(!1).append(p.sContentPadding).appendTo(t);h("[name]",
  j).removeAttr("name");p=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=o.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=v(k-g);b.style.width=v(e);p.remove()}l&&(b.style.width=
  v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Qa(function(){Z(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Gb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Hb(a,b){var c=Ib(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Ib(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(bc,
  ""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||
  "string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function ob(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Jb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=
  0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Kb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,
  "");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Xa(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,
  D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Ya(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Xa(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Xa(a,c,b.shiftKey,d))})}
  function ya(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Jb(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,aa(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],
  c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function za(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Cb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Cb(a.aoPreSearchCols[d])}})};s(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,
  b)}}function Lb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=s(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==
  k&&h.extend(a.oPreviousSearch,Db(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Db(g.search))}s(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function Aa(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+
  " - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&s(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Mb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],
  h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Ya(a,b,c){h(a).on("click.DT",b,function(b){a.blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function s(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+
  ".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ua(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Nb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,
  c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function fb(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Za)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Za)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Ob(a){return function(){var b=
  [Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(Aa(this[x.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=
  function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ma(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};
  this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();
  return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return Aa(this[x.iApiIndex])};
  this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in m.ext.internal)e&&(this[e]=Ob(e));this.each(function(){var e={},g=1<d?Mb(e,a,!0):
  a,j=0,i,e=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{gb(l);hb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var r=m.settings,j=0;for(i=r.length;j<i;j++){var p=r[j];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){var t=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||t)return p.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){p.oInstance.fnDestroy();
  break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){r.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+m.ext._unique++;var o=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});o.nTable=this;o.oApi=b.internal;o.oInit=g;r.push(o);o.oInstance=1===b.length?b:q.dataTable();gb(g);g.oLanguage&&Fa(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);
  g=Mb(h.extend(!0,{},l),g);F(o.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(o,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],
  ["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(o.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(o.oLanguage,g,"fnInfoCallback");z(o,"aoDrawCallback",g.fnDrawCallback,"user");z(o,"aoServerParams",g.fnServerParams,"user");z(o,"aoStateSaveParams",g.fnStateSaveParams,"user");z(o,"aoStateLoadParams",g.fnStateLoadParams,"user");z(o,"aoStateLoaded",g.fnStateLoaded,
  "user");z(o,"aoRowCallback",g.fnRowCallback,"user");z(o,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(o,"aoHeaderCallback",g.fnHeaderCallback,"user");z(o,"aoFooterCallback",g.fnFooterCallback,"user");z(o,"aoInitComplete",g.fnInitComplete,"user");z(o,"aoPreDrawCallback",g.fnPreDrawCallback,"user");o.rowIdFn=R(g.rowId);ib(o);var u=o.oClasses;g.bJQueryUI?(h.extend(u,m.ext.oJUIClasses,g.oClasses),g.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&
  !o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":h.extend(u,m.ext.classes,g.oClasses);q.addClass(u.sTable);o.iInitDisplayStart===k&&(o.iInitDisplayStart=g.iDisplayStart,o._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(o.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),o._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,o._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=o.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Fa(a);
  J(l.oLanguage,a);h.extend(true,v,a);ha(o)},error:function(){ha(o)}}),n=!0);null===g.asStripeClasses&&(o.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=o.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),o.asDestroyStripes=e.slice());e=[];r=this.getElementsByTagName("thead");0!==r.length&&(ea(o.aoHeader,r[0]),e=ta(o));if(null===g.aoColumns){r=[];j=0;for(i=e.length;j<i;j++)r.push(null)}else r=
  g.aoColumns;j=0;for(i=r.length;j<i;j++)Ga(o,e?e[j]:null);kb(o,g.aoColumnDefs,r,function(a,b){la(o,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=o.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(o,a)}}})}var U=o.oFeatures,
  e=function(){if(g.aaSorting===k){var a=o.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=o.aoColumns[j].asSorting[0]}ya(o);U.bSort&&z(o,"aoDrawCallback",function(){if(o.bSorted){var a=W(o),b={};h.each(a,function(a,c){b[c.src]=c.dir});s(o,null,"order",[o,a,b]);Kb(o)}});z(o,"aoDrawCallback",function(){(o.bSorted||y(o)==="ssp"||U.bDeferRender)&&ya(o)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
  o.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));o.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(o.oScroll.sX!==""||o.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){o.nTFoot=b[0];ea(o.aoFooter,o.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)N(o,g.aaData[j]);else(o.bDeferLoading||y(o)=="dom")&&oa(o,h(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();
  o.bInitialised=true;n===false&&ha(o)};g.bStateSave?(U.bStateSave=!0,z(o,"aoDrawCallback",za,"state_save"),Lb(o,g,e)):e()}});b=null;return this},x,t,p,u,$a={},Pb=/[\r\n]/g,Ca=/<.*?>/g,cc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,dc=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Za=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Qb=function(a){var b=parseInt(a,10);return!isNaN(b)&&
  isFinite(a)?b:null},Rb=function(a,b){$a[b]||($a[b]=RegExp(Sa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace($a[b],"."):a},ab=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Rb(a,b));c&&d&&(a=a.replace(Za,""));return!isNaN(parseFloat(a))&&isFinite(a)},Sb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:ab(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
  f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Tb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},sa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
  b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};m.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,h=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,h)},c)):(d=g,a.apply(b,h))}},escapeRegex:function(a){return a.replace(dc,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,V=/\(\)$/,Sa=m.util.escapeRegex,xa=h("<div>")[0],$b=xa.textContent!==k,bc=
  /<.*?>/g,Qa=m.util.throttle,Ub=[],w=Array.prototype,ec=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof
  t))return new t(a,b);var c=[],d=function(a){(a=ec(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=sa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};t.extend(this,this,Ub)};m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
  this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,n,l=this.context,
  m,p,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var s=new t(l[g]);if("table"===b)f=c.call(s,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(s,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],u.opts));i=0;for(n=p.length;i<n;i++)f=p[i],f="cell"===b?c.call(s,l[g],f.row,f.column,g,i):c.call(s,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?
  e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return jb(this,a,b,0,this.length,
  1)},reduceRight:w.reduceRight||function(a,b){return jb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new t(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new t(this.context,sa(this))},unshift:w.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
  b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Ub,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=
  f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=u=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
  d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
  "table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Va(b,a)})});p("page.info()",function(){if(0===
  this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ta(b,a)})});var Vb=function(a,b,c){if(c){var d=new t(a);
  d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ua(a,[],function(c){pa(a);for(var c=va(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});p("ajax.url()",function(a){var b=
  this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});var bb=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
  [b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return sa(f)},cb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},db=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,
  d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};
  p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=b,f;return bb("row",a,function(a){var b=Qb(a);if(b!==null&&!e)return[b];f||(f=Da(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Tb(ja(c.aoData,f,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];
  b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){var i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},
  1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<
  g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i<n;i++)l[i]._DT_CellIndex.row=g}qa(b.aiDisplayMaster,c);qa(b.aiDisplay,c);qa(a[d],c,!1);Ua(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});
  this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(oa(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return db(this.rows(a,b))});p("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:
  k;b[0].aoData[this[0]]._aData=a;da(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?oa(b,a)[0]:N(b,a)});return this.row(b[0])});var eb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=
  k,c._details=k},Wb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",
  function(a,b){if(e===b)for(var c,d=ba(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&eb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)eb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,
  b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ba(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Wb(this,!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Wb(this,!1);
  return this});p(["row().child.remove()","row().child().remove()"],function(){eb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var fc=/^([^:]+):(name|visIdx|visible)$/,Xb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,
  j=D(g,"sName"),i=D(g,"nTh");return bb("column",e,function(a){var b=Qb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Xb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(fc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(j,function(a,b){return a===
  k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",
  function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Xb,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()",
  "column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,i,n,l;if(a!==k&&g.bVisible!==a){if(a){var m=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(n=j.length;i<n;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[m]||null)}else h(D(b.aoData,"anCells",c)).detach();
  g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);za(b)}});a!==k&&(this.iterator("column",function(c,e){s(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?aa(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){Z(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===
  a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return aa(c,b)}});p("column()",function(a,b){return db(this.columns(a,b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=cb(c),f=b.aoData,g=Da(b,e),j=Tb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,m,p,u,t,s,v;return bb("cell",d,function(a){var c=typeof a==="function";
  if(a===null||a===k||c){m=[];p=0;for(u=g.length;p<u;p++){l=g[p];for(t=0;t<n;t++){s={row:l,column:t};if(c){v=f[l];a(s,B(b,l,t),v.anCells?v.anCells[t]:null)&&m.push(s)}else m.push(s)}}return m}if(h.isPlainObject(a))return[a];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b,c),e=this.rows(a,
  c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a=
  "search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:aa(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});p("cell()",
  function(a,b,c){return db(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;lb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});
  p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=
  this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?
  !0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){za(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),
  a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof m.Api)return!0;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,
  function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.camelToHungarian=J;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",
  function(a){pa(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),
  p;b.bDestroying=!0;s(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];ya(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+
  ", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column",
  "row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=R(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.15";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,
  _aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults=
  {aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
  this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+
  "_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
  sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
  Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,
  bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],
  aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,
  aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=
  this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=x={buttons:{},classes:{},builder:"dt/dt-1.10.15",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},
  header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",
  sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
  sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Yb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,
  m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",
  sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Yb+" ui-corner-tl ui-corner-tr",sJUIFooter:Yb+" ui-corner-bl ui-corner-br"});var Nb=m.ext.pager;h.extend(Nb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,
  b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,p=0,r=function(b,d){var k,t,u,s,v=function(b){Va(a,b.data.action,true)};k=0;for(t=d.length;k<t;k++){s=d[k];if(h.isArray(s)){u=
  h("<"+(s.DT_el||"div")+"/>").appendTo(b);r(u,s)}else{m=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=s+1;l=e===s?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+
  " "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":p,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(m).appendTo(b);Ya(u,{action:s},v);p++}}}},t;try{t=h(b).find(H.activeElement).data("dt-idx")}catch(u){}r(h(b).empty(),d);t!==k&&h(b).find("[data-dt-idx="+t+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!cc.test(a))return null;var b=Date.parse(a);
  return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Pb," ").replace(Ca,""):""},string:function(a){return M(a)?
  a:"string"===typeof a?a.replace(Pb," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Rb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||-Infinity},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<
  b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});fb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);
  h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Zb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
  "&quot;"):a};m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Zb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Zb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Ob,_fnBuildAjax:ua,_fnAjaxUpdate:nb,_fnAjaxParameters:wb,_fnAjaxUpdateDraw:xb,
  _fnAjaxDataSrc:va,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:Z,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:aa,_fnVisbleColumns:ba,_fnGetColumns:na,_fnColumnTypes:Ia,_fnApplyColumnDefs:kb,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,_fnBrowserDetect:ib,_fnAddData:N,_fnAddTr:oa,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:lb,
  _fnSplitObjNotation:La,_fnGetObjectDataFn:R,_fnSetObjectDataFn:S,_fnGetDataMaster:Ma,_fnClearTable:pa,_fnDeleteIndex:qa,_fnInvalidate:da,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:mb,_fnDrawHead:fa,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:pb,_fnDetectHeader:ea,_fnGetUniqueThs:ta,_fnFeatureHtmlFilter:rb,_fnFilterComplete:ga,_fnFilterCustom:Ab,_fnFilterColumn:zb,_fnFilter:yb,_fnFilterCreateSearch:Ra,_fnEscapeRegex:Sa,_fnFilterData:Bb,_fnFeatureHtmlInfo:ub,_fnUpdateInfo:Eb,_fnInfoMacros:Fb,_fnInitialise:ha,
  _fnInitComplete:wa,_fnLengthChange:Ta,_fnFeatureHtmlLength:qb,_fnFeatureHtmlPaginate:vb,_fnPageChange:Va,_fnFeatureHtmlProcessing:sb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:tb,_fnScrollDraw:ma,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:Qa,_fnConvertToWidth:Gb,_fnGetWidestNode:Hb,_fnGetMaxLenString:Ib,_fnStringToCss:v,_fnSortFlatten:W,_fnSort:ob,_fnSortAria:Kb,_fnSortListener:Xa,_fnSortAttachListener:Oa,_fnSortingClasses:ya,_fnSortData:Jb,_fnSaveState:za,_fnLoadState:Lb,_fnSettingsFromNode:Aa,
  _fnLog:K,_fnMap:F,_fnBindAction:Ya,_fnCallbackReg:z,_fnCallbackFire:s,_fnLengthOverflow:Ua,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});
  
  
  /*!---- datatables-loadmore-----*/
  /*! dataTables.pageLoadMore.js 1.0.2
   *  Copyright (c) Gyrocode LLC (www.gyrocode.com)
   *  License: MIT License
   */
  (function($){$.fn.dataTable.pageLoadMore=function(opts){var conf=$.extend({url:"",data:null,method:"GET"},opts);return function(request,drawCallback,settings){if(!settings.hasOwnProperty("pageLoadMore")){var api=new $.fn.dataTable.Api(settings);var info=api.page.info();settings.pageLoadMore={pageLength:info.length,cacheLastRequest:null,cacheLastJson:null};}var pageResetMore=false;if(settings.pageLoadMore.cacheLastRequest){if(JSON.stringify(request.order)!==JSON.stringify(settings.pageLoadMore.cacheLastRequest.order)||JSON.stringify(request.columns)!==JSON.stringify(settings.pageLoadMore.cacheLastRequest.columns)||JSON.stringify(request.search)!==JSON.stringify(settings.pageLoadMore.cacheLastRequest.search)){pageResetMore=true;}}settings.pageLoadMore.cacheLastRequest=$.extend(true,{},request);if(pageResetMore){settings.pageLoadMore.cacheLastJson=null;request.length=settings.pageLoadMore.pageLength;}request.start=request.length-settings.pageLoadMore.pageLength;request.length=settings.pageLoadMore.pageLength;if($.isFunction(conf.data)){var d=conf.data(request);if(d){$.extend(request,d);}}else{if($.isPlainObject(conf.data)){$.extend(request,conf.data);}}var xhr=settings.pageLoadMore.jqXHR;if(xhr&&xhr.readyState!==4){xhr.abort();}settings.pageLoadMore.jqXHR=$.ajax({"type":conf.method,"url":conf.url,"data":request,"dataType":"json","cache":false,"success":function(json){if(settings.pageLoadMore.cacheLastJson){json.data=settings.pageLoadMore.cacheLastJson.data.concat(json.data);}settings.pageLoadMore.cacheLastJson=$.extend(true,{},json);drawCallback(json);}});};};$.fn.dataTable.Api.register("page.resetMore()",function(){return this.iterator("table",function(settings){var api=this;if(settings.hasOwnProperty("pageLoadMore")){api.page.len(settings.pageLoadMore.pageLength);}});});$.fn.dataTable.Api.register("page.hasMore()",function(){var api=this;var info=api.page.info();return(info.pages>1)?true:false;});$.fn.dataTable.Api.register("page.loadMore()",function(){return this.iterator("table",function(settings){var api=this;var info=api.page.info();if(info.pages>1){if(!settings.hasOwnProperty("pageLoadMore")){settings.pageLoadMore={pageLength:info.length};}api.page.len(info.length+settings.pageLoadMore.pageLength).draw("page");}});});})($j);
  /*!---- other-main-----*/
  $j(document).ready(function() {
  
    var table1 = [];
    var dti = 0;
  
    $j('table.rad-tablestyle1').each(function() {
  
        var dthtml = '<div class="dt-more-container"><a href="javascript:;" data-attr=' + dti + ' class="table-show-more" style="display: none;">Show more</a></div>';
  
        $j(this).parent().append(dthtml);
  
        table1[dti] = $j(this).DataTable({
            dom: 'rt',
            "aaSorting": [],
            pageLength: 22,
            "autoWidth": false,
          drawCallback: function() {
              $j(this).parent().next().find('.table-show-more').toggle(this.api().page.hasMore());
          }
        });
  
        // Handle click on "Load more" button
        $j(this).parent().next().find('.table-show-more').on('click', function(event) {
            // Load more data
            table1[$j(this).data("attr")].page.loadMore();
            // return false;
            event.preventDefault();
        });
  
        dti = dti + 1;
  
    });
    
    /*---   Equal height for charts module title   ---*/
  
    
    $j('.module-image-charts .row').getSameTopGroups({
        commonParent: '.module-image-charts .row'
    }, function(gc) {
        for (i = 1; i <= gc; i++) {
            setEqualHeight_CommonClass(".gg-g-" + i + " .chart-title span.rad-border");
        }
    });
    setEqualHeight_CommonClass(".module-chapter-stats .chptr-stats-head span.rad-border");
    setEqualHeight_CommonClass(".portfolio-highlights-item .title");
    setEqualHeight_CommonClass(".items-with-text-and-image .risk-return-spectrum-accordion-item");
    setEqualHeight_CommonClass(".counter-boxes-module-wrapper .counter-boxes-module .item-col .module-counter-boxes-item");
    setEqualHeight_CommonClass(".featured-news-wrapper.side-bar .featured-news-wrapper-item");
    
  
      setEqualHeight_CommonClass(".module-values-wrapper .module-values .item-col .values-item-icon-image");
      setEqualHeight_CommonClass(".module-values-wrapper .module-values .item-col .values-item-heading");
      setEqualHeight_CommonClass(".module-private-equity-infographic .infographic-column-content-wrapper");
      setEqualHeight_CommonClass(".module-leadership-investor-day-wrapper .accordion-inner-wrapper");
      
  /*---   Animating stats and counter up for stats   ---*/
      
      setEqualHeight_CommonClass(".module-boxes-wrapper .accordion-item-logo-heading-wrapper"); 
      setEqualHeight_CommonClass(".module-new-hybrid-value .four-items-with-title-text .accordion-item-logo-heading-wrapper");
      
      /*setEqualHeight_CommonClass(".module-related-articles .right-panel-wrapper > h3");*/
      
      setEqualHeight_CommonClass(".module-related-articles .right-panel-wrapper h3 a");
      
    setEqualHeight_CommonClass(".videos-landing-wrapper .video-inner-wrapper");
    
    setEqualHeight_CommonClass(".tagged-insights-module-wrapper .tagged-insights-module-item-wrapper .tagged-insights-item-col");
    
    setEqualHeight_CommonClass(".module-new-home-our-business-sub-heading .new-module-item");
    setEqualHeight_CommonClass(".module-new-home-our-business-sub-heading .new-module-item .new-home-our-business-item-content .content-text");
    setEqualHeight_CommonClass(".tagged-insights-module-wrapper h3.insights-title");
    
    
    $j(window).bind("resize", function () {
      setEqualHeight_CommonClass(".videos-landing-wrapper .video-inner-wrapper");
      setEqualHeight_CommonClass(".tagged-insights-module-wrapper .tagged-insights-module-item-wrapper .tagged-insights-item-col");
      setEqualHeight_CommonClass(".module-values-wrapper .module-values .item-col .values-item-heading");
      setEqualHeight_CommonClass(".module-new-home-our-business-sub-heading .new-module-item");
      setEqualHeight_CommonClass(".module-new-home-our-business-sub-heading .new-module-item .new-home-our-business-item-content .content-text");
      setEqualHeight_CommonClass(".tagged-insights-module-wrapper h3.insights-title");
    }).trigger('resize');
  
  });
  
  /*---------------------- Sub Navigation Menu links active state starts -------------------*/
  jQuery(function($) {
    var path = window.location.href;
    $j('.sub-navigation ul a, .mm-listview li.level1.selected a').each(function() {
      if (this.href === path) {
        $j(this).parent().addClass('current');
      }
    });
  });
  /*---------------------- Sub Navigation Menu links active state ends -------------------*/
  /*!---- module-datatable-content-----*/
  /**********************************************************/
  /*** Module - Datatable Content Starts ***/
  /**********************************************************/
  $j(function() {
    if($j('.mod-datatable-content').length){
      $j('.mod-datatable-content').each(function(){
        var modID=$j(this).attr('id');
        var modThis = $j(this);
        var firstRowColor = modThis.find(".intro-content").attr("data-rowcolor");
        modThis.find("table.dataTable thead tr:not(:first-child)").css({"background-color":firstRowColor})
        modThis.find("table.dataTable thead tr:not(:first-child) th").css({"color":"#fff"});
  
        // modThis.find(".rad-tablestyle1").DataTable({
        //   "columnDefs": [
        //       {
        //           "targets": [0],
        //           "visible": false,
        //           "searchable": true
        //       },
        //       {
        //           "targets": [ 6 ],
        //           "visible": false,
        //           "searchable": true
        //       }
        //   ]
        // });
        
      });
    }
  });
  /**********************************************************/
  /*** Module - Datatable Content Ends ***/
  /**********************************************************/
  /*!---- arg-add-pages-----*/
  jQuery( document ).ready(function($) {
      $("#btnAddToBasket, #footer_btnAddToBasket").addtobasket(
        {
          addPageText: $('#btnAddToBasket, #footer_btnAddToBasket').attr('data-add-text'),
          removePageText:$('#btnAddToBasket, #footer_btnAddToBasket').attr('data-remove-text'),
          onPageAddedToBasket: function (){ 
            //Implement this method if you want to give custom message on page added to basket
            //Use this.url and this.title to get url and title of added/removed page
            //Use this.addToBasketButton to get button which initiated add/remove basket operation
            //alert("Page added to basket successfully.");
            $('.pdf-basket-remove-massage').hide();
            $('.pdf-basket-added-massage').css('display','block');
            setTimeout(function() {
              $(".pdf-basket-added-massage").hide('blind', {}, 500);
            }, 3000);
          },
          settings: {
            "TopMargin": 15,
            "BottomMargin": 15,
            "LeftMargin": 15,
            "RightMargin": 15,
            "ConversionDelay": 3
          },
          onPageRemovedFromBasket: function () {
            //Implement this method if you want to give custom message on page removed from basket
            //("Page removed from basket successfully.");
            $('.pdf-basket-added-massage').hide();
            $('.pdf-basket-remove-massage').css('display','block');
            setTimeout(function() {
              $(".pdf-basket-remove-massage").hide('blind', {}, 500);
            }, 3000);
          },
          getUrl: function () {
            return window.location.href.replace(window.location.protocol + "//" + window.location.hostname,"");
          },
          getPrintElementId: function () {
            //return "#twocolmain";
          },
          getSettings: function () {
            
          },
          getPagesFromBasket: function () {
            //alert("added or removed from basket");
            //return "";
          },
          getLanguage: function () {
              var langName = "en";            
              return langName;
          },
         /* getLanguage: function () {
            //alert(getParameterByName("sc_lang"));
            return getParameterByName("sc_lang");
          },*/
          getCookieValue: function () {
            //Implement this method if you want to pass custom additional parameters
            //return "V2=1";
          },
          getTitle: function(){
          var title=$("h1").text();
          //console.log( Uri.EncodeDataString(title))
              return title.replace("&",'%26');
          }
      });
  });
  
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "en" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  /*!---- arg-download-page-----*/
  jQuery( document ).ready(function($) {
      $("#btnDownload").htmltoPDF(
                  {         
                      apiUrl: window.location.protocol + "//" + window.location.host + "/site-services/pdf-basket/arg-request-maker-direct-download?async=1",
                      downloadPDF : true,
                      htmltoPDFButtonText: "Download",
                      pdfFileName: document.title ? document.title : "Investis Reload UAT",                       
                      createPDFProcess: function () {
                          $('.' + this.options.createPDFProcessClass).show();
                          $('.' + this.options.htmltoPDFButtonCss).prop('disabled', true);
                      },
                      endPDFProcess: function () {
                          $('.' + this.options.createPDFProcessClass).hide();
                          $('.' + this.options.htmltoPDFButtonCss).prop('disabled', false);
                      },
                      settings: {
                          "TopMargin": 20,
                          "BottomMargin": 20,
                          "LeftMargin": 20,
                          "RightMargin": 20
                      },
                      getLanguage: function () {
                        var langName = $j(location).attr('pathname');
                          langName.indexOf(1);
                          langName.toLowerCase();
                          langName = langName.split("/")[1];                
                          return langName;
                      },
                    /*  getLanguage: function () {
                          //Implement this method if you want to pass custom language
                          //return "custom language";                        
                          return getParameterByName("sc_lang");
                      },*/
                      getCookieValue: function () {
                          //Implement this method if you want to pass custom additional parameters
                          return "";
                      },
                      getPrintElementId: function () {
                          //Implement this method to print only specific element of the page and pass that element id
                          //Use this.options and this.adToBasketButton for configuration
                          return "";
                      },
                      getSettings: function () {
                          //Implement this method to specify custom AdditionalParameters (settings).
                          //Use this.options and this.adToBasketButton for configuration
                          return "";
                      }
                  });
  });
  
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "en" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  /*!---- arg-download-page1-----*/
  jQuery( document ).ready(function($) {
      $("#btnDownload").htmltoPDF(
                  {         
                      apiUrl: window.location.protocol + "//" + window.location.host + "/site-services/pdf-basket/arg-request-maker-direct-download?async=1",
                      downloadPDF : true,
                      htmltoPDFButtonText: "Download",
                      pdfFileName: document.title ? document.title : "Investis Reload UAT",                       
                      createPDFProcess: function () {
                          $('.' + this.options.createPDFProcessClass).show();
                          $('.' + this.options.htmltoPDFButtonCss).prop('disabled', true);
                      },
                      endPDFProcess: function () {
                          $('.' + this.options.createPDFProcessClass).hide();
                          $('.' + this.options.htmltoPDFButtonCss).prop('disabled', false);
                      },
                      settings: {
                          "TopMargin": 20,
                          "BottomMargin": 20,
                          "LeftMargin": 20,
                          "RightMargin": 20
                      },
                      getLanguage: function () {
                        var langName = $j(location).attr('pathname');
                          langName.indexOf(1);
                          langName.toLowerCase();
                          langName = langName.split("/")[1];                
                          return langName;
                      },
                    /*  getLanguage: function () {
                          //Implement this method if you want to pass custom language
                          //return "custom language";                        
                          return getParameterByName("sc_lang");
                      },*/
                      getCookieValue: function () {
                          //Implement this method if you want to pass custom additional parameters
                          return "";
                      },
                      getPrintElementId: function () {
                          //Implement this method to print only specific element of the page and pass that element id
                          //Use this.options and this.adToBasketButton for configuration
                          return "";
                      },
                      getSettings: function () {
                          //Implement this method to specify custom AdditionalParameters (settings).
                          //Use this.options and this.adToBasketButton for configuration
                          return "";
                      }
                  });
  });
  
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results === null ? "en" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }