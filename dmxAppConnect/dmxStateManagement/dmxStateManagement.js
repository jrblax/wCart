/*!
 DMXzone State Management
 Version: 1.0.3
 (c) 2019 DMXzone.com
 @build 2019-02-14 16:28:15
 */
dmx.Component("query-manager",{initialData:{data:{}},attributes:{},methods:{set:function(e,t){this.setQueryParam(e,t)},remove:function(e){this.setQueryParam(e)}},render:function(e){this.update()},update:function(){var e="";window.location.search?e=window.location.search.substr(1):window.location.hash.indexOf("?")&&(e=window.location.hash.substr(window.location.hash.indexOf("?")+1)).indexOf("#")&&(e=e.substr(0,e.indexOf("#"))),this.set("data",e.split("&").reduce(function(e,t){var n=t.split("=");return n[0]&&(e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]||"")),e},{}))},setQueryParam:function(e,t){var n=dmx.clone(this.data.data);null==t?delete n[e]:n[e]=t,dmx.useHistory?window.history.pushState(null,null,window.location.pathname+"?"+this.buildQuery(n)):window.location.hash=window.location.hash.substr(1).replace(/(\?.*)?$/,"?"+this.buildQuery(n)),this.set("data",n)},buildQuery:function(n){return Object.keys(n).reduce(function(e,t){return e&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t])},"")}}),dmx.Component("cookie-manager",{initialData:{data:{}},attributes:{},methods:{set:function(e,t,n){this.setCookie(e,t,n)},remove:function(e,t){(t=t||{}).expires="1970-01-01T00:00:00Z",this.setCookie(e,"",t)}},render:function(e){this.update()},update:function(){this.set("data",document.cookie.split(/;\s*/).reduce(function(e,t){var n=t.indexOf("=");return e[decodeURIComponent(t.substr(0,n))]=decodeURIComponent(t.substr(n+1)),e},{}))},setCookie:function(e,t,n){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;(n=n||{}).path=n.path||"/";var o=(e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape))+"="+(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent));n.expires&&("number"==typeof n.expires&&(n.expires=Date.now()+864e5*n.expires),o+="; expires="+new Date(n.expires).toUTCString()),n.domain&&(o+="; domain="+n.domain),n.path&&(o+="; path="+n.path),n.secure&&(o+="; secure"),document.cookie=o,dmx.requestUpdate()}}),dmx.Component("local-manager",{initialData:{data:{}},attributes:{},methods:{set:function(e,t){window.localStorage.setItem("dmxState-"+e,JSON.stringify(t)),this.getData()},remove:function(e){window.localStorage.removeItem("dmxState-"+e),this.getData()}},render:function(e){this.getData()},getData:function(){this.set("data",Object.keys(window.localStorage).reduce(function(e,t){return/^dmxState-/.test(t)&&(e[t.substr(9)]=JSON.parse(window.localStorage.getItem(t))),e},{}))}}),dmx.Component("session-manager",{initialData:{data:{}},attributes:{},methods:{set:function(e,t){window.sessionStorage.setItem("dmxState-"+e,JSON.stringify(t)),this.getData()},remove:function(e){window.sessionStorage.removeItem("dmxState-"+e),this.getData()}},render:function(e){this.getData()},getData:function(){this.set("data",Object.keys(window.sessionStorage).reduce(function(e,t){return/^dmxState-/.test(t)&&(e[t.substr(9)]=JSON.parse(window.sessionStorage.getItem(t))),e},{}))}});
//# sourceMappingURL=../maps/dmxStateManagement.js.map
