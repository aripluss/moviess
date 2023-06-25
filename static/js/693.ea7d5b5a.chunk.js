"use strict";(self.webpackChunkmoviess=self.webpackChunkmoviess||[]).push([[693],{7693:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n,a=r(5861),u=r(9439),s=r(4687),c=r.n(s),i=r(2791),o=r(7689),p=r(5218),f=r(9230),l=r(2690),d=r(9421),v=r(168),h=r(6444).ZP.ul(n||(n=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  & .review__card {\n    padding: 20px;\n    border: ","\n      ",";\n    border-radius: 10px;\n  }\n"])),(function(e){return e.theme.borders.normal}),(function(e){return e.theme.colors.accentSecondary})),m=r(184),g=function(){var e=(0,f.$G)().t,t=(0,i.useState)([]),r=(0,u.Z)(t,2),n=r[0],s=r[1],v=(0,i.useState)(!1),g=(0,u.Z)(v,2),x=g[0],_=g[1],w=(0,i.useState)(null),b=(0,u.Z)(w,2),Z=b[0],k=b[1],y=(0,o.UO)().movieId;return(0,i.useEffect)((function(){(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,l.tx)(y);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(e.t0.message);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[y]),(0,i.useEffect)((function(){Z&&(p.Am.error(Z),k(null))}),[Z]),(0,m.jsxs)(m.Fragment,{children:[x&&(0,m.jsx)(d.aN,{}),!x&&!Z&&!n.length&&(0,m.jsx)("p",{style:{textAlign:"center"},children:e("reviewsNoReviews")}),Boolean(n.length)&&(0,m.jsx)(h,{children:n.map((function(t){var r=t.author,n=t.content;return(0,m.jsxs)("li",{className:"review__card",children:[(0,m.jsxs)("p",{children:[(0,m.jsxs)("b",{children:[e("reviewsAuthor"),":"]})," ",r]}),(0,m.jsxs)("p",{children:[(0,m.jsxs)("b",{children:[e("reviewsContent"),":"]})," ",n]})]},r)}))}),(0,m.jsx)(p.x7,{})]})}},2690:function(e,t,r){r.d(t,{Dw:function(){return p},Hg:function(){return o},TP:function(){return f},tx:function(){return d},zv:function(){return l}});var n=r(5861),a=r(4687),u=r.n(a),s=r(1912),c=r(2679),i="dea82e5d25cc68048d98e1915bc0a2dc";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:i,page:t},e.next=3,s.Z.get("/trending/movie/day",{params:r});case 3:return n=e.sent,a=n.data,c=a.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return{id:t,title:r,poster_path:v(n)}})),a.results=c,a.total_pages>500&&(a.total_pages=500),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,c,o,p;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.currentPage,a={api_key:i,query:r,page:n},e.next=4,s.Z.get("/search/movie",{params:a});case 4:return c=e.sent,o=c.data,p=o.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return{id:t,title:r,poster_path:v(n)}})),o.results=p,o.total_pages>500&&(o.total_pages=500),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,c,o,p,f,l,d,h,m,g;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:i},e.next=3,s.Z.get("/movie/".concat(t),{params:r});case 3:return n=e.sent,a=n.data,c=a.poster_path,o=a.title,p=a.tagline,f=a.adult,l=a.release_date,d=a.vote_average,h=a.overview,m=a.genres,g=a.production_countries,e.abrupt("return",{poster_path:v(c),title:o,tagline:p,adult:f,release_date:new Date(l).getFullYear(),vote_average:d.toFixed(1),overview:h,genres:m.map((function(e){return e.name})).join(", "),production_countries:g.map((function(e){return e.name})).join(", ")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:i},e.next=3,s.Z.get("/movie/".concat(t,"/credits"),{params:r});case 3:return n=e.sent,a=n.data,c=a.cast.map((function(e){var t=e.profile_path,r=e.character,n=e.name;return{profile_path:v(t),character:r,name:n}})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:i},e.next=3,s.Z.get("/movie/".concat(t,"/reviews"),{params:r});case 3:return n=e.sent,a=n.data,c=a.results.map((function(e){return{author:e.author,content:e.content}})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return e?"".concat("https://image.tmdb.org/t/p/original").concat(e):c}},2679:function(e,t,r){e.exports=r.p+"static/media/no-img.55a156dcb43efdebb1b6.jpg"}}]);
//# sourceMappingURL=693.ea7d5b5a.chunk.js.map