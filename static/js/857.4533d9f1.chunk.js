"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[857],{4857:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,c,a,u,o=e(885),i=e(2791),s=e(6871),f=e(409),p=e(9457),h=e(168),d=e(7691),l=d.ZP.li(r||(r=(0,h.Z)(["\n  border: 1px solid #000000d1;\n  padding: 1rem;\n  margin-bottom: 1rem;\n"]))),v=d.ZP.p(c||(c=(0,h.Z)(["\n  font-size: 1rem;\n  font-weight: ",";\n  color: ",";\n  margin-right: 1rem;\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.color.dark})),m=d.ZP.span(a||(a=(0,h.Z)(["\n  color: ",";\n  font-size: 1rem;\n"])),(function(n){return n.theme.color.dark})),g=d.ZP.p(u||(u=(0,h.Z)(["\n  font-weight: ",";\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n"])),(function(n){return n.theme.fontWeights.normal})),w=e(184);function x(n){var t=n.reviews;return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(p.x,{as:"ul",mx:4,children:t.map((function(n){var t=n.author,e=n.review,r=n.id;return(0,w.jsx)(l,{children:(0,w.jsxs)(v,{children:[t,": ",(0,w.jsxs)(m,{children:['"',e,'"']})]})},r)}))})})}function y(){var n=(0,i.useState)(null),t=(0,o.Z)(n,2),e=t[0],r=t[1],c=(0,s.UO)().movieId;return(0,i.useEffect)((function(){(0,f.sv)(c).then((function(n){var t=[];n.results.map((function(n){var e=n.author,r=n.content,c={id:n.id,author:e,review:r};return t.push(c)})),r(t)}))}),[c]),e&&e.length>0?(0,w.jsx)(x,{reviews:e}):(0,w.jsx)(g,{children:"We have no reviews here yet."})}},409:function(n,t,e){e.d(t,{FE:function(){return f},Y5:function(){return l},sv:function(){return w},uV:function(){return m},wr:function(){return h}});var r=e(5861),c=e(4687),a=e.n(c),u=e(4569),o=e.n(u),i="https://api.themoviedb.org/3",s="a9c60f9b21a095b96ccbe9e4f4d7a273";function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&page=1"),n.next=3,o().get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"/trending/movie/day?api_key=").concat(s,"&page=",1),n.next=3,o().get("".concat(t)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"),n.next=3,o().get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(s),n.next=3,o().get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),n.next=3,o().get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=857.4533d9f1.chunk.js.map