"use strict";(self.webpackChunkmoviess=self.webpackChunkmoviess||[]).push([[693],{7693:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r,a=n(4942),u=n(1413),o=n(5861),i=n(9439),s=n(4687),c=n.n(s),p=n(2791),l=n(7689),f=n(5218),d=n(9230),g=n(2690),h=n(9421),m=n(168),v=n(6444).ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  & .review__card {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 20px;\n    border: ","\n      ",";\n    border-radius: 10px;\n\n    & .highlight {\n      font-weight: bold;\n      color: ",";\n    }\n\n    & .readMore {\n      padding: 1px 6px;\n      margin-left: 6px;\n      border: "," gray;\n      border-radius: ",";\n    }\n  }\n"])),(function(e){return e.theme.borders.normal}),(function(e){return e.theme.colors.accentSecondary}),(function(e){return e.theme.colors.accentPrimary}),(function(e){return e.theme.borders.normal}),(function(e){return e.theme.radii.normal})),x=n(184),_=function(){var e=(0,d.$G)().t,t=(0,p.useState)([]),n=(0,i.Z)(t,2),r=n[0],s=n[1],m=(0,p.useState)({}),_=(0,i.Z)(m,2),w=_[0],b=_[1],k=(0,p.useState)(!1),Z=(0,i.Z)(k,2),y=Z[0],j=Z[1],S=(0,p.useState)(null),A=(0,i.Z)(S,2),I=A[0],C=A[1],N=(0,l.UO)().movieId;(0,p.useEffect)((function(){(0,o.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,g.tx)(N);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),C(e.t0.message);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[N]),(0,p.useEffect)((function(){I&&(f.Am.error(I),C(null))}),[I]);var U=function(e){return{__html:e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/_(.*?)_/g,"<em>$1</em>").replace(/<a href="(.*?)">(.*?)<\/a>/g,'<a href="$1" target="_blank" rel="noopener noreferrer">$2</a>')}};return(0,x.jsxs)(x.Fragment,{children:[y&&(0,x.jsx)(h.aN,{}),!y&&!I&&!r.length&&(0,x.jsx)("p",{style:{textAlign:"center"},children:e("reviewsNoReviews")}),Boolean(r.length)&&(0,x.jsx)(v,{children:r.map((function(t){var n=t.id,r=t.author,o=t.content,i=w[n]||!1;return(0,x.jsxs)("li",{className:"review__card",children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{className:"highlight",children:[e("reviewsAuthor"),": "]}),r]}),(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{className:"highlight",children:[e("reviewsContent"),": "]}),(0,x.jsx)("span",{dangerouslySetInnerHTML:U(i?o:o.slice(0,500)+"...")}),o.length>500&&(0,x.jsx)("button",{className:"readMore",onClick:function(){return e=n,void b((function(t){return(0,u.Z)((0,u.Z)({},t),{},(0,a.Z)({},e,!t[e]))}));var e},children:e(i?"reviewsCollapseContent":"reviewsReadMore")})]})]},r)}))}),(0,x.jsx)(f.x7,{})]})}},2690:function(e,t,n){n.d(t,{Dw:function(){return f},Hg:function(){return l},TP:function(){return d},tx:function(){return h},zv:function(){return g}});var r=n(5861),a=n(4687),u=n.n(a),o=n(1243),i=n(2679),s="https://api.themoviedb.org/3/",c="dea82e5d25cc68048d98e1915bc0a2dc",p="https://image.tmdb.org/t/p/original";o.Z.defaults.baseURL=s;var l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:c,page:t},"ua"===localStorage.getItem("language")&&(n.language="uk-UA"),e.next=4,o.Z.get("/trending/movie/day",{params:n});case 4:return r=e.sent,a=r.data,i=a.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster_path:m(r)}})),a.results=i,a.total_pages>500&&(a.total_pages=500),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,i,s,p;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.currentPage,a={api_key:c,query:n,page:r},"ua"===localStorage.getItem("language")&&(a.language="uk-UA"),e.next=5,o.Z.get("/search/movie",{params:a});case 5:return i=e.sent,s=i.data,p=s.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster_path:m(r)}})),s.results=p,s.total_pages>500&&(s.total_pages=500),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,i,s,p,l,f,d,g,h,v,x,_,w;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:c,append_to_response:"videos"},"ua"===localStorage.getItem("language")&&(n.language="uk-UA"),e.next=4,o.Z.get("/movie/".concat(t),{params:n});case 4:return r=e.sent,a=r.data,i=a.poster_path,s=a.title,p=a.tagline,l=a.adult,f=a.release_date,d=a.vote_average,g=a.overview,h=a.genres,v=a.production_countries,x=a.videos,_=x.results.filter((function(e){return!0===e.official})),w={poster_path:m(i),title:s,tagline:p,adult:l,release_date:new Date(f).getFullYear(),vote_average:d.toFixed(1),overview:g,genres:h.map((function(e){return e.name})).join(", "),production_countries:v.map((function(e){return e.name})).join(", "),videos:_},e.abrupt("return",w);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:c},"ua"===localStorage.getItem("language")&&(n.language="uk-UA"),e.next=4,o.Z.get("/movie/".concat(t,"/credits"),{params:n});case 4:return r=e.sent,a=r.data,i=a.cast.map((function(e){var t=e.profile_path,n=e.character,r=e.name;return{profile_path:m(t),character:n,name:r}})),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,i,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:c},e.next=3,o.Z.get("/movie/".concat(t,"/reviews"),{params:n});case 3:return r=e.sent,a=r.data,i=a.results.filter((function(e,t,n){return t===n.findIndex((function(t){return t.content===e.content}))})),s=i.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return e?"".concat(p).concat(e):i}},2679:function(e,t,n){e.exports=n.p+"static/media/no-img.55a156dcb43efdebb1b6.jpg"}}]);
//# sourceMappingURL=693.2e660216.chunk.js.map