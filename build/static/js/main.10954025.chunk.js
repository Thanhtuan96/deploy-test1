(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(3),r=n.n(a),o=(n(12),n(4)),i=n(5),l=n(7),p=n(6),h=n.p+"static/media/logo.6ce24c58.svg",u=(n(13),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={apiResponse:""},c}return Object(i.a)(n,[{key:"callAPI",value:function(){var e=this;fetch("http://localhost:9000/testAPI").then((function(e){return e.text()})).then((function(t){return e.setState({apiResponse:t})}))}},{key:"componentDidMount",value:function(){this.callAPI()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),Object(u.jsxs)("p",{children:["Edit ",Object(u.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(u.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"learn more"})]}),Object(u.jsx)("p",{children:this.state.apiResponse})]})}}]),n}(s.a.Component),d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.10954025.chunk.js.map