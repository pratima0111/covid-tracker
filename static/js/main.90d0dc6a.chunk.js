(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{123:function(e,a,t){e.exports={container:"Chart_container__3cukk"}},128:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__1ucLb"}},137:function(e,a,t){e.exports=t(395)},14:function(e,a,t){e.exports={container:"Cards_container__2E3fa",card:"Cards_card__1p6oM",cardlist2:"Cards_cardlist2__3q9YE",infected:"Cards_infected__1wT_D",recovered:"Cards_recovered__1e1zV",deaths:"Cards_deaths__oQJcP",percent:"Cards_percent__3X9G8"}},21:function(e,a,t){e.exports={container:"Table_container__3mntg",stateHeading:"Table_stateHeading__Xb4Mk",dropDown:"Table_dropDown__16-bd",tableContainer:"Table_tableContainer__2Ijn9",tableHead:"Table_tableHead__9572J"}},257:function(e,a,t){},395:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(119),o=t.n(c),l=t(5),i=t.n(l),s=t(12),u=t(120),m=t(121),d=t(131),p=t(130),v=t(24),E=t(34),h=t.n(E),f="https://covid19.mathdro.id/api",b=function(){var e=Object(s.a)(i.a.mark((function e(a){var t,n,r,c,o,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f,a&&(t="".concat(f,"/countries/").concat(a)),e.prev=2,e.next=5,h.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:s});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(f,"/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat("https://covid19.mathdro.id/api/countries/India/confirmed"));case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(f,"/countries/india"));case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(f,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=t(71),x=t(123),D=t.n(x),k=function(e){var a=e.data,t=a.confirmed,c=a.recovered,o=a.deaths,l=e.country,u=Object(n.useState)([]),m=Object(v.a)(u,2),d=m[0],p=m[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=d.length?r.a.createElement(_.b,{data:{labels:d.map((function(e){return e.date})),datasets:[{data:d.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:d.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,h=t?r.a.createElement(_.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(l)}}}):null;return r.a.createElement("div",{className:D.a.container},l?h:E)},O=t(14),S=t.n(O),w=t(413),j=t(415),I=t(416),T=t(417),A=t(20),H=t.n(A),P=t(27),V=t.n(P),M=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return t?r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{container:!0,spacing:5,justify:"center"},r.a.createElement(w.a,{item:!0,component:j.a,xs:12,md:3,className:V()(S.a.card,S.a.infected)},r.a.createElement(I.a,null,r.a.createElement(T.a,{color:"textSecondary"},"Confirmed "),r.a.createElement(T.a,{variant:"h5"},r.a.createElement(H.a,{start:0,end:t.value,duration:1.7,separator:","})),r.a.createElement(T.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(T.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(w.a,{item:!0,component:j.a,xs:12,md:3,className:V()(S.a.card,S.a.recovered)},r.a.createElement(I.a,null,r.a.createElement(T.a,{color:"textSecondary"},"Recovered "),r.a.createElement(T.a,{variant:"h5"},r.a.createElement(H.a,{start:0,end:n.value,duration:1.7,separator:","})),r.a.createElement(T.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(T.a,{variant:"body2"},"Number of recovered cases of COVID-19"))),r.a.createElement(w.a,{item:!0,component:j.a,xs:12,md:3,className:V()(S.a.card,S.a.deaths)},r.a.createElement(I.a,null,r.a.createElement(T.a,{color:"textSecondary"},"Deaths "),r.a.createElement(T.a,{variant:"h5"},r.a.createElement(H.a,{start:0,end:c.value,duration:1.7,separator:","})),r.a.createElement(T.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(T.a,{variant:"body2"},"Number of deaths from COVID-19"))))):"Loading..."},G=t(421),R=t(419),L=t(128),F=t.n(L),J=function(e){var a=e.handleCountryChange,t=Object(n.useState)([]),c=Object(v.a)(t,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(G.a,{className:F.a.formControl},r.a.createElement(R.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},K=(t(257),t(129)),U=t.n(K),B=t(73),z=t.n(B),Y=function(){return r.a.createElement("div",{className:z.a.container},r.a.createElement("a",{className:z.a.footerlink,href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},"Click here to know more about COVID-19 pandemic "))},W=function(e){var a=e.data,t=a.confirmed,c=a.recovered,o=a.deaths,l=a.lastUpdate,u=Object(n.useState)({}),m=Object(v.a)(u,2),d=m[0],p=m[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=d.data;if(!t)return"Loading...";var h=(100*E.confirmed.value/t.value).toFixed(0),f=(100*E.recovered.value/c.value).toFixed(0),b=(100*E.deaths.value/o.value).toFixed(0);return r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{container:!0,spacing:4,justify:"center"},r.a.createElement(w.a,{item:!0,component:j.a,xs:12,md:3,className:V()(S.a.card,S.a.infected)},r.a.createElement(I.a,null,r.a.createElement(T.a,{color:"textSecondary"},"Confirmed"),r.a.createElement(T.a,{variant:"h5"},r.a.createElement(H.a,{start:0,end:E.confirmed.value,duration:2,separator:","})),r.a.createElement(T.a,{className:S.a.percent},r.a.createElement(H.a,{start:0,end:h,duration:2}),"% of Global Cases..."),r.a.createElement(T.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(T.a,{variant:"body2"},"Number of active cases of COVID-19 in INDIA"))),r.a.createElement(w.a,{item:!0,component:j.a,xs:12,md:3,className:V()(S.a.card,S.a.recovered)},r.a.createElement(I.a,null,r.a.createElement(T.a,{color:"textSecondary"},"Recovered "),r.a.createElement(T.a,{variant:"h5"},r.a.createElement(H.a,{start:0,end:E.recovered.value,duration:2,separator:","})),r.a.createElement(T.a,{className:S.a.percent},r.a.createElement(H.a,{start:0,end:f,duration:2}),"% of Global cases..."),r.a.createElement(T.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(T.a,{variant:"body2"},"Number of recovered cases of COVID-19 in INDIA"))),r.a.createElement(w.a,{item:!0,component:j.a,xs:12,md:3,className:V()(S.a.card,S.a.deaths)},r.a.createElement(I.a,null,r.a.createElement(T.a,{color:"textSecondary"},"Deaths  "),r.a.createElement(T.a,{variant:"h5"},r.a.createElement(H.a,{start:0,end:E.deaths.value,duration:2,separator:","})),r.a.createElement(T.a,{className:S.a.percent},r.a.createElement(H.a,{start:0,end:b,duration:2}),"% of Global Cases..."),r.a.createElement(T.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(T.a,{variant:"body2"},"Number of deaths from COVID-19 in INDIA")))),r.a.createElement("br",null))},X=t(418),Q=t(10),q=t(396),Z=t(420),$=t(21),ee=t.n($),ae=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,y();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=Object(Q.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(Z.a),l=Object(X.a)({table:{minWidth:100}}),u=t.data,m=l(),d=Object(n.useState)(""),p=Object(v.a)(d,2),E=p[0],h=p[1];console.log(E);return r.a.createElement("div",{className:ee.a.container},r.a.createElement("div",{component:q.a},r.a.createElement("div",{className:m.table,"aria-label":"sticky table"},r.a.createElement("div",null,r.a.createElement("div",{className:ee.a.dropDown},r.a.createElement(R.a,{defaultValue:"",onChange:function(e){return a=e.target.value,h(a),void console.log(E);var a}},r.a.createElement("option",{value:""},"SELECT ANY STATE"),r.a.createElement("option",{value:"Andaman and Nicobar Islands"},"Andaman and Nicobar Islands"),r.a.createElement("option",{value:"Andhra Pradesh"},"Andhra Pradesh"),r.a.createElement("option",{value:"Arunachal Pradesh"},"Arunachal Pradesh"),r.a.createElement("option",{value:"Assam"},"Assam"),r.a.createElement("option",{value:"Bihar"},"Bihar"),r.a.createElement("option",{value:"Chandigarh"},"Chandigarh"),r.a.createElement("option",{value:"Chhattisgarh"},"Chhattisgarh"),r.a.createElement("option",{value:"Dadra and Nagar Haveli"},"Dadra and Nagar Haveli and Daman and Diu"),r.a.createElement("option",{value:"Delhi"},"Delhi"),r.a.createElement("option",{value:"Goa"},"Goa"),r.a.createElement("option",{value:"Gujarat"},"Gujarat"),r.a.createElement("option",{value:"Haryana"},"Haryana"),r.a.createElement("option",{value:"Himachal Pradesh"},"Himachal Pradesh"),r.a.createElement("option",{value:"Jammu and Kashmir"},"Jammu and Kashmir"),r.a.createElement("option",{value:"Jharkhand"},"Jharkhand"),r.a.createElement("option",{value:"Karnataka"},"Karnataka"),r.a.createElement("option",{value:"Kerala"},"Kerala"),r.a.createElement("option",{value:"Ladakh"},"Ladakh"),r.a.createElement("option",{value:"Madhya Pradesh"},"Madhya Pradesh"),r.a.createElement("option",{value:"Maharashtra"},"Maharashtra"),r.a.createElement("option",{value:"Manipur"},"Manipur"),r.a.createElement("option",{value:"Meghalaya"},"Meghalaya"),r.a.createElement("option",{value:"Mizoram"},"Mizoram"),r.a.createElement("option",{value:"Nagaland"},"Nagaland"),r.a.createElement("option",{value:"Odisha"},"Odisha"),r.a.createElement("option",{value:"Puducherry"},"Puducherry"),r.a.createElement("option",{value:"Punjab"},"Punjab"),r.a.createElement("option",{value:"Rajasthan"},"Rajasthan"),r.a.createElement("option",{value:"Sikkim"},"Sikkim"),r.a.createElement("option",{value:"Tamil Nadu"},"Tamil Nadu"),r.a.createElement("option",{value:"Telangana"},"Telangana"),r.a.createElement("option",{value:"Tripura"},"Tripura"),r.a.createElement("option",{value:"Uttaranchal"},"Uttaranchal"),r.a.createElement("option",{value:"Uttar Pradesh"},"Uttar Pradesh"),r.a.createElement("option",{value:"West Bengal"},"West Bengal"))),r.a.createElement("br",null),r.a.createElement("div",{className:ee.a.tableContainer},u&&u.map((function(e){return r.a.createElement("div",{key:e.provinceState},e.provinceState===E?r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{className:"StateHeading",component:"th",scope:"row"},r.a.createElement("span",{className:ee.a.tableHead},"STATE :  ",e.provinceState," ")),r.a.createElement("br",null),r.a.createElement(o,{align:"center"},r.a.createElement("div",{className:ee.a.tableHead},"CONFIRMED  :  ",e.confirmed)),r.a.createElement("br",null),r.a.createElement(o,{align:"center"},r.a.createElement("span",{className:ee.a.tableHead},"ACTIVE  :  ",e.active," ")),r.a.createElement("br",null),r.a.createElement(o,{align:"center"},r.a.createElement("span",{className:ee.a.tableHead},"RECOVERED  :  ",e.recovered)),r.a.createElement("br",null),r.a.createElement(o,{align:"center"},r.a.createElement("span",{className:ee.a.tableHead},"DEATHS  :  ",e.deaths)),r.a.createElement("br",null)):r.a.createElement(r.a.Fragment,null))})),r.a.createElement("br",null))))))},te={particles:{number:{value:160,density:{enable:!1}},size:{value:10,random:!0},move:{direction:"bottom",out_mode:"out"},line_linked:{enable:!1}},interactivity:{events:{onclick:{enable:!0,mode:"remove"}},modes:{remove:{particles_nb:10}}}},ne=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:"",indiaData:null},e.handleCountryChange=function(){var a=Object(s.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return a=e.sent,e.next=5,C();case 5:t=e.sent,this.setState({data:a}),this.setState({indiaData:t.data.confirmed.value});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country;return r.a.createElement("div",{className:"container"},r.a.createElement(U.a,{className:"particles",params:te}),r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",null,r.a.createElement("a",{href:"#global"},"Global Stats")),r.a.createElement("li",null,r.a.createElement("a",{href:"#indian"},"Indian Stats")),r.a.createElement("br",null),r.a.createElement("li",{id:"right"},"COVID-19 TRACKER")),r.a.createElement("br",null),r.a.createElement("img",{src:"https://i.ibb.co/7QpKsCX/image.png",alt:"covid-19",className:"image"}),r.a.createElement("h2",{id:"indian",className:"heading"},"COVID STATS IN INDIA"),r.a.createElement(W,{data:a,indiaconfirmed:this.state.indiadata}),r.a.createElement("br",null),r.a.createElement("p",{className:"heading",id:"select"},"Select any state to see that state's data"),r.a.createElement(ae,null),r.a.createElement("h2",{id:"global",className:"heading"},"COVID STATS GLOBALLY"),r.a.createElement(J,{handleCountryChange:this.handleCountryChange}),r.a.createElement(M,{data:a}),r.a.createElement(k,{data:a,country:t}),r.a.createElement("br",null),r.a.createElement(Y,null))}}]),t}(r.a.Component);o.a.render(r.a.createElement(ne,null),document.getElementById("root"))},73:function(e,a,t){e.exports={container:"Footer_container__2gpwN",footerlink:"Footer_footerlink__gkZfY"}}},[[137,1,2]]]);
//# sourceMappingURL=main.90d0dc6a.chunk.js.map