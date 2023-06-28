"use strict";(self.webpackChunkmoviess=self.webpackChunkmoviess||[]).push([[337],{8603:function(e,t,r){r.d(t,{P:function(){return u}});var n,a=r(168),u=r(6444).ZP.ul(n||(n=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"])))},4003:function(e,t,r){r.r(t);var n=r(1413),a=r(5861),u=r(9439),s=r(4687),o=r.n(s),c=r(2791),i=r(7689),p=r(1087),l=r(5218),f=r(5929),v=(r(7691),r(9230)),d=r(2690),m=r(9421),h=r(1434),_=r(1149),g=r(8603),x=r(184);t.default=function(){var e,t=(0,v.$G)().t,r=(0,i.TH)(),s=(0,c.useState)([]),w=(0,u.Z)(s,2),P=w[0],y=w[1],Z=(0,c.useState)(1),k=(0,u.Z)(Z,2),S=k[0],b=k[1],E=(0,c.useState)((null===(e=r.state)||void 0===e?void 0:e.currentPage)||1),A=(0,u.Z)(E,2),j=A[0],T=A[1],C=(0,c.useState)(!1),R=(0,u.Z)(C,2),D=R[0],F=R[1],q=(0,c.useState)(null),B=(0,u.Z)(q,2),O=B[0],U=B[1],H=(0,c.useState)(!1),L=(0,u.Z)(H,2),N=L[0],I=L[1],K=(0,p.lr)(),G=(0,u.Z)(K,2),W=G[0],M=G[1],V=W.get("query");(0,c.useEffect)((function(){V&&""!==V&&(0,a.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),t={query:V,currentPage:j},e.next=5,(0,d.Dw)(t);case 5:if((r=e.sent).results.length){e.next=10;break}return U("No movies found, please try another query."),y([]),e.abrupt("return");case 10:1===j&&N&&(l.Am.success("Found ".concat(r.total_results," movies!")),I(!1)),y(r.results),b(r.total_pages),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),U(e.t0.message);case 18:return e.prev=18,F(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})))()}),[j,V,N]),(0,c.useEffect)((function(){O&&(l.Am.error(O),U(null))}),[O]);return(0,x.jsxs)(x.Fragment,{children:[D&&(0,x.jsx)(m.aN,{}),(0,x.jsx)(h.P,{style:{paddingBottom:"0"},children:(0,x.jsx)(_.P,{children:(0,x.jsx)(m.UI,{defaultValue:V,onSubmit:function(e){M({query:e}),T(1),I(!0)}})})}),(0,x.jsx)(h.P,{style:{flexGrow:1},children:(0,x.jsxs)(_.P,{children:[!D&&!O&&!P.length&&(0,x.jsxs)("p",{style:{textAlign:"center"},children:[t("moviesPageNoMovies")," "]}),Boolean(P.length)&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g.P,{style:{marginBottom:40},children:P.map((function(e){return(0,c.createElement)(m.oA,(0,n.Z)((0,n.Z)({location:r},e),{},{key:e.id,currentPage:j}))}))}),(0,x.jsx)(f.ZP,{total:S,current:j,onPageChange:function(e){return function(e){T(e),window.scrollTo({top:0,behavior:"smooth"})}(e)}})]})]})}),(0,x.jsx)(l.x7,{})]})}},2690:function(e,t,r){r.d(t,{Dw:function(){return v},Hg:function(){return f},TP:function(){return d},tx:function(){return h},zv:function(){return m}});var n=r(5861),a=r(4687),u=r.n(a),s=r(1912),o=r(2679),c={NODE_ENV:"production",PUBLIC_URL:"/moviess",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0},i=c.REACT_APP_API_KEY,p=c.REACT_APP_BASE_URL,l=c.REACT_APP_BASE_URL_IMAGE;s.Z.defaults.baseURL=p;var f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:i,page:t},e.next=3,s.Z.get("/trending/movie/day",{params:r});case 3:return n=e.sent,a=n.data,o=a.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return{id:t,title:r,poster_path:_(n)}})),a.results=o,a.total_pages>500&&(a.total_pages=500),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o,c,p;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.currentPage,a={api_key:i,query:r,page:n},e.next=4,s.Z.get("/search/movie",{params:a});case 4:return o=e.sent,c=o.data,p=c.results.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return{id:t,title:r,poster_path:_(n)}})),c.results=p,c.total_pages>500&&(c.total_pages=500),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o,c,p,l,f,v,d,m,h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:i},e.next=3,s.Z.get("/movie/".concat(t),{params:r});case 3:return n=e.sent,a=n.data,o=a.poster_path,c=a.title,p=a.tagline,l=a.adult,f=a.release_date,v=a.vote_average,d=a.overview,m=a.genres,h=a.production_countries,e.abrupt("return",{poster_path:_(o),title:c,tagline:p,adult:l,release_date:new Date(f).getFullYear(),vote_average:v.toFixed(1),overview:d,genres:m.map((function(e){return e.name})).join(", "),production_countries:h.map((function(e){return e.name})).join(", ")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:i},e.next=3,s.Z.get("/movie/".concat(t,"/credits"),{params:r});case 3:return n=e.sent,a=n.data,o=a.cast.map((function(e){var t=e.profile_path,r=e.character,n=e.name;return{profile_path:_(t),character:r,name:n}})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:i},e.next=3,s.Z.get("/movie/".concat(t,"/reviews"),{params:r});case 3:return n=e.sent,a=n.data,o=a.results.map((function(e){return{author:e.author,content:e.content}})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){return e?"".concat(l).concat(e):o}},2679:function(e,t,r){e.exports=r.p+"static/media/no-img.55a156dcb43efdebb1b6.jpg"}}]);
//# sourceMappingURL=337.76ff9535.chunk.js.map