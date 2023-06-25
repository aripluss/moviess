"use strict";(self.webpackChunkmoviess=self.webpackChunkmoviess||[]).push([[729],{5729:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a,i=t(5861),s=t(9439),o=t(7757),c=t.n(o),u=t(2791),d=t(7689),p=t(2690),l=t(1308),f=t(168),x=t(6444),v=x.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n\n  .movie__poster {\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n\n    @media screen and (min-width: 768px) {\n      width: 250px;\n    }\n\n    @media screen and (min-width: 1280px) {\n      width: 300px;\n    }\n  }\n\n  .movie__content {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  & .movie__title-wrapper {\n    display: flex;\n    align-items: start;\n    justify-content: space-between;\n    gap: 20px;\n  }\n\n  & .movie__rating {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #ffde59;\n    color: #000;\n    border: 1px solid #ffde59;\n    border-radius: 10px;\n    padding: 6px 12px;\n    font-weight: 500;\n    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);\n  }\n\n  & .movie__adult {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid red;\n    color: red;\n    border-radius: 10px;\n    padding: 6px 10px;\n    font-weight: 500;\n    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);\n  }\n"]))),h=t(1434),m=t(1149),g=t(1087),_=(0,x.ZP)(g.OL)(a||(a=(0,f.Z)(["\n  padding: 10px;\n  color: #8250df;\n  border: 1px solid #ffde59;\n  border-radius: 10px;\n  transition: background-color 0.3s ease;\n\n  &:hover,\n  &:focus-visible {\n    background-color: #ffde59;\n  }\n"]))),w=t(184),j=function(){var e,n,t,r,a,o,f=(0,d.UO)().movieId,x=(0,d.TH)(),g=(0,u.useState)([]),j=(0,s.Z)(g,2),b=j[0],y=j[1],k=(0,u.useState)(!1),Z=(0,s.Z)(k,2),P=Z[0],C=Z[1],N=(0,u.useState)(null),S=(0,s.Z)(N,2),H=S[0],F=S[1];(0,u.useEffect)((function(){f&&(0,i.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,(0,p.TP)(f);case 4:n=e.sent,y(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),F(e.t0.message);case 11:return e.prev=11,C(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[f]),(0,u.useEffect)((function(){H&&alert(H)}),[H]);var O=x.pathname.includes("cast"),R=x.pathname.includes("reviews"),T=b.poster_path,z=b.title,D=b.tagline,E=b.adult,G=b.release_date,L=b.vote_average,U=b.overview,Y=b.genres,q=b.production_countries;return(0,w.jsxs)(w.Fragment,{children:[P&&(0,w.jsx)(l.aN,{}),(0,w.jsx)(h.P,{style:{paddingBottom:"0"},children:(0,w.jsxs)(m.P,{children:[(0,w.jsx)(_,{to:null!==(e=null===(n=x.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:"Go back"}),(0,w.jsxs)(v,{children:[(0,w.jsx)("img",{className:"movie__poster",alt:"".concat(z," poster"),src:T,loading:"lazy"}),(0,w.jsxs)("div",{className:"movie__content",children:[(0,w.jsxs)("div",{className:"movie__title-wrapper",children:[(0,w.jsx)("h1",{children:z}),L&&(0,w.jsx)("div",{className:"movie__rating",children:L}),E&&(0,w.jsx)("div",{className:"movie__adult",children:"18+"})]}),D&&(0,w.jsx)("i",{children:D}),G&&(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Year:"})," ",(0,w.jsx)("span",{children:G})]}),Y&&(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Genres:"})," ",(0,w.jsx)("span",{children:Y})]}),q&&(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Countries:"})," ",(0,w.jsx)("span",{children:q})]}),U&&(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Overview:"})," ",(0,w.jsx)("span",{children:U})]})]})]}),(0,w.jsxs)("nav",{style:{display:"flex",justifyContent:"center",gap:"20px"},children:[(0,w.jsx)(_,{state:{from:null!==(t=null===(r=x.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},to:O?"":"cast",children:O?"Hide Cast":"Show Cast"}),(0,w.jsx)(_,{state:{from:null!==(a=null===(o=x.state)||void 0===o?void 0:o.from)&&void 0!==a?a:"/"},to:R?"":"reviews",children:R?"Hide Reviews":"Show Reviews"})]})]})}),(0,w.jsx)(h.P,{children:(0,w.jsx)(m.P,{children:(0,w.jsx)(d.j3,{})})})]})}},2690:function(e,n,t){t.d(n,{Dw:function(){return d},Hg:function(){return u},TP:function(){return p},tx:function(){return f},zv:function(){return l}});var r=t(5861),a=t(7757),i=t.n(a),s=t(1912),o=t(2679),c="dea82e5d25cc68048d98e1915bc0a2dc";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,r.Z)(i().mark((function e(){var n,t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:c},e.next=3,s.Z.get("/trending/movie/day",{params:n});case 3:return t=e.sent,r=t.data,a=r.results.map((function(e){var n=e.id,t=e.title,r=e.poster_path;return{id:n,title:t,poster_path:x(r)}})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c,query:n},e.next=3,s.Z.get("/search/movie",{params:t});case 3:return r=e.sent,a=r.data,o=a.results.map((function(e){var n=e.id,t=e.title,r=e.poster_path;return{id:n,title:t,poster_path:x(r)}})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,o,u,d,p,l,f,v,h,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c},e.next=3,s.Z.get("/movie/".concat(n),{params:t});case 3:return r=e.sent,a=r.data,o=a.poster_path,u=a.title,d=a.tagline,p=a.adult,l=a.release_date,f=a.vote_average,v=a.overview,h=a.genres,m=a.production_countries,e.abrupt("return",{poster_path:x(o),title:u,tagline:d,adult:p,release_date:new Date(l).getFullYear(),vote_average:f.toFixed(1),overview:v,genres:h.map((function(e){return e.name})).join(", "),production_countries:m.map((function(e){return e.name})).join(", ")});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c},e.next=3,s.Z.get("/movie/".concat(n,"/credits"),{params:t});case 3:return r=e.sent,a=r.data,o=a.cast.map((function(e){var n=e.profile_path,t=e.character,r=e.name;return{profile_path:x(n),character:t,name:r}})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c},e.next=3,s.Z.get("/movie/".concat(n,"/reviews"),{params:t});case 3:return r=e.sent,a=r.data,o=a.results.map((function(e){return{author:e.author,content:e.content}})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(e){return e?"".concat("https://image.tmdb.org/t/p/original").concat(e):o}},2679:function(e,n,t){e.exports=t.p+"static/media/no-img.55a156dcb43efdebb1b6.jpg"}}]);
//# sourceMappingURL=729.249a301d.chunk.js.map