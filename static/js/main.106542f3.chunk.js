(this.webpackJsonpweather_forcaster=this.webpackJsonpweather_forcaster||[]).push([[0],{39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),c=a.n(r),s=a(16),i=a.n(s),d=a(5),o=a(4),l=a.n(o),h=(a(39),a.p+"static/media/logo_300x289.c6813ae5.png");function j(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:h,alt:"logo"})}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h1",{children:"Weather Forcaster"})})]})}function p(e){var t=e.setWeather,a=e.apiKey,r=e.setSearch,s=c.a.useState(""),i=Object(d.a)(s,2),o=i[0],h=i[1];return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(o,"&units=metric&appid=").concat(a,"\n")).then((function(e){t({city:e.data.name,temp:Math.round(e.data.main.temp),clouds:e.data.clouds.all,humidity:e.data.main.humidity,feels_like:Math.round(e.data.main.feels_like),wind:e.data.wind.speed,condition:e.data.weather[0].main}),r(!0)}))},children:[Object(n.jsx)("input",{type:"text",onChange:function(e){h(e.target.value)}}),Object(n.jsx)("button",{children:"Search"})]})}var u=a(3),m=a.n(u);function x(e){var t=e.weather;return Object(n.jsxs)("div",{className:"weather",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:t.city}),Object(n.jsx)("h2",{children:m()().format("dddd h:mm a")}),Object(n.jsx)("h2",{children:t.condition})]}),Object(n.jsxs)("div",{className:"tempareture",children:[Object(n.jsx)("img",{src:"http://openweathermap.org/img/wn/50n@2x.png",alt:"icon"}),Object(n.jsx)("h1",{children:t.temp}),Object(n.jsxs)("div",{className:"unit",children:[Object(n.jsx)("span",{children:"o"}),Object(n.jsx)("span",{children:"C"})]})]}),Object(n.jsxs)("div",{className:"additionalInfo",children:[Object(n.jsxs)("h3",{children:["Feels like ",t.feels_like," ",Object(n.jsx)("sup",{children:"o"}),"C"," "]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:["Cloudiness: ",t.clouds,"%"]}),Object(n.jsxs)("h3",{children:["Humudity : ",t.humidity,"%"]}),Object(n.jsxs)("h3",{children:["Wind : ",t.wind," m/s"]})]})]})]})}for(var b,f=a(7),O=a.n(f),g=[],y=[],v=0;v<5;v++)y[v]=m()().add(v,"day").format("dddd");function w(e){var t=e.city,a=e.apiKey;return c.a.useEffect((function(){l.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&appid=").concat(a)).then((function(e){var t;g=e.data.list.map((function(e,a){var n=m.a.utc(1e3*e.dt);return 0==a&&(t=n.format("h")),n.format("h a")})).slice(0,-t/3),b=e.data.list.map((function(e){return Math.round(e.main.temp)})).slice(0,g.length);var a=document.getElementById("myFixedChart").getContext("2d");new O.a(a,{type:"line",data:{labels:g,datasets:[{backgroundColor:"transparent",borderColor:"transparent",data:b,pointBackgroundColor:"transparent"}]},options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1},ticks:{stepSize:3}}],xAxes:[{gridLines:{display:!1},ticks:{fontColor:"transparent"}}]}}});document.querySelector(".fixed").style.top=document.querySelector(".weather-grapher").offsetTop+"px";var n=document.getElementById("myChart").getContext("2d");new O.a(n,{type:"line",data:{labels:g,datasets:[{backgroundColor:"#e2dfdf",borderColor:"gray",data:b,pointBackgroundColor:"black"}]},options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{gridLines:{display:!1},ticks:{stepSize:3,fontColor:"transparent"}}],xAxes:[{ticks:{backgroundColor:"red"},gridLines:{display:!1}}]}}})}))})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"weather-grapher",children:Object(n.jsx)("div",{className:"chartjs-wrapper",children:Object(n.jsx)("canvas",{id:"myChart"})})}),Object(n.jsx)("div",{className:"weather-grapher fixed",style:{position:"absolute",left:"5px"},children:Object(n.jsx)("div",{className:"chartjs-wrapper ",children:Object(n.jsx)("canvas",{id:"myFixedChart",className:"fixed-chart"})})}),Object(n.jsx)("div",{className:"day",children:y.map((function(e,t){return Object(n.jsx)("button",{onClick:function(){return function(e){e=e.i;var t=2e3/g.length,a=(g.length-32)*t,n=8*t;document.querySelector(".chartjs-wrapper").style.right=0==e?0:a+n*(e-1)+"px"}({i:t})},children:e},t)}))})]})}var C="88e70fa14920eb4a1daf835df275c463";var k=function(){var e=c.a.useState({}),t=Object(d.a)(e,2),a=t[0],r=t[1],s=c.a.useState(!1),i=Object(d.a)(s,2),o=i[0],l=i[1];return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(j,{}),Object(n.jsx)(p,{setWeather:r,apiKey:C,setSearch:l}),o?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{weather:a}),Object(n.jsx)(w,{city:a.city,apiKey:C})]}):Object(n.jsx)("h2",{children:"search for your location..."})]})};i.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.106542f3.chunk.js.map