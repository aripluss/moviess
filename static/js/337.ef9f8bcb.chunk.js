"use strict";(self.webpackChunkmoviess=self.webpackChunkmoviess||[]).push([[337],{8603:function(e,t,r){r.d(t,{P:function(){return u}});var n,a=r(168),u=r(6444).ZP.ul(n||(n=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"])))},4003:function(e,t,r){r.r(t);var n=r(1413),a=r(5861),u=r(9439),s=r(4687),o=r.n(s),c=r(2791),i=r(7689),p=r(1087),l=r(5218),f=r(5929),d=(r(7691),r(9230)),v=r(2690),m=r(9421),h=r(1434),g=r(1149),x=r(8603),w=r(184);t.default=function(){var e,t=(0,d.$G)().t,r=(0,i.TH)(),s=(0,c.useState)([]),_=(0,u.Z)(s,2),y=_[0],Z=_[1],b=(0,c.useState)(1),k=(0,u.Z)(b,2),j=k[0],P=k[1],S=(0,c.useState)((null===(e=r.state)||void 0===e?void 0:e.currentPage)||1),q=(0,u.Z)(S,2),F=q[0],A=q[1],B=(0,c.useState)(!1),C=(0,u.Z)(B,2),D=C[0],E=C[1],N=(0,c.useState)(null),T=(0,u.Z)(N,2),G=T[0],H=T[1],U=(0,c.useState)(!1),z=(0,u.Z)(U,2),I=z[0],L=z[1],M=(0,p.lr)(),R=(0,u.Z)(M,2),V=R[0],Y=R[1],$=V.get("query");(0,c.useEffect)((function(){$&&""!==$&&(0,a.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),t={query:$,currentPage:F},e.next=5,(0,v.Dw)(t);case 5:if((r=e.sent).results.length){e.next=10;break}return H("No movies found, please try another query."),Z([]),e.abrupt("return");case 10:1===F&&I&&(l.Am.success("Found ".concat(r.total_results," movies!")),L(!1)),Z(r.results),P(r.total_pages),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),H(e.t0.message);case 18:return e.prev=18,E(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})))()}),[F,$,I]),(0,c.useEffect)((function(){G&&(l.Am.error(G),H(null))}),[G]);return(0,w.jsxs)(w.Fragment,{children:[D&&(0,w.jsx)(m.aN,{}),(0,w.jsx)(h.P,{style:{paddingBottom:"0"},children:(0,w.jsx)(g.P,{children:(0,w.jsx)(m.UI,{defaultValue:$,onSubmit:function(e){Y({query:e}),A(1),L(!0)}})})}),(0,w.jsx)(h.P,{style:{flexGrow:1},children:(0,w.jsxs)(g.P,{children:[!D&&!G&&!y.length&&(0,w.jsxs)("p",{style:{textAlign:"center"},children:[t("moviesPageNoMovies")," "]}),Boolean(y.length)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(x.P,{style:{marginBottom:40},children:y.map((function(e){return(0,c.createElement)(m.oA,(0,n.Z)((0,n.Z)({location:r},e),{},{key:e.id,currentPage:F}))}))}),(0,w.jsx)(f.ZP,{total:j,current:F,onPageChange:function(e){return function(e){A(e),window.scrollTo({top:0,behavior:"smooth"})}(e)}})]})]})}),(0,w.jsx)(l.x7,{})]})}},2690:function(e,t,r){r.d(t,{Dw:function(){return v},Hg:function(){return d},TP:function(){return m},tx:function(){return g},zv:function(){return h}});var n=r(5861),a=r(4687),u=r.n(a),s=r(1243),o=r(2679),c="dea82e5d25cc68048d98e1915bc0a2dc",i="https://api.themoviedb.org/3/",p="https://image.tmdb.org/t/p/original";console.log("1",c,"2",i,"3",p);var l=c,f=p;s.Z.defaults.baseURL=i;var d=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:l,page:t},e.next=3,s.Z.get("/trending/movie/day",{params:r});case 3:return n=e.sent,a=n.data,o=a.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return{id:t,title:r,poster_path:x(n)}})),a.results=o,a.total_pages>500&&(a.total_pages=500),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o,c,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.currentPage,a={api_key:l,query:r,page:n},e.next=4,s.Z.get("/search/movie",{params:a});case 4:return o=e.sent,c=o.data,i=c.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return{id:t,title:r,poster_path:x(n)}})),c.results=i,c.total_pages>500&&(c.total_pages=500),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o,c,i,p,f,d,v,m,h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:l},e.next=3,s.Z.get("/movie/".concat(t),{params:r});case 3:return n=e.sent,a=n.data,o=a.poster_path,c=a.title,i=a.tagline,p=a.adult,f=a.release_date,d=a.vote_average,v=a.overview,m=a.genres,h=a.production_countries,e.abrupt("return",{poster_path:x(o),title:c,tagline:i,adult:p,release_date:new Date(f).getFullYear(),vote_average:d.toFixed(1),overview:v,genres:m.map((function(e){return e.name})).join(", "),production_countries:h.map((function(e){return e.name})).join(", ")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:l},e.next=3,s.Z.get("/movie/".concat(t,"/credits"),{params:r});case 3:return n=e.sent,a=n.data,o=a.cast.map((function(e){var t=e.profile_path,r=e.character,n=e.name;return{profile_path:x(t),character:r,name:n}})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:l},e.next=3,s.Z.get("/movie/".concat(t,"/reviews"),{params:r});case 3:return n=e.sent,a=n.data,o=a.results.map((function(e){return{author:e.author,content:e.content}})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){return e?"".concat(f).concat(e):o}},2679:function(e,t,r){e.exports=r.p+"static/media/no-img.55a156dcb43efdebb1b6.jpg"}}]);
//# sourceMappingURL=337.ef9f8bcb.chunk.js.map