(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(31)},25:function(e,a,t){},27:function(e,a,t){},29:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(15),r=t.n(o),c=(t(25),t(3)),s=(t(27),t(9));function i(e){var a="dark"===e.mode?"white":"black",t="dark"===e.mode?"Disable":"Enable",n={color:a,backgroundColor:"dark"===e.mode?"gray":"rgb(249, 249, 249)"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg",style:n},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(s.b,{className:"navbar-brand",to:"/",style:n},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/",style:n},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/about",style:n},e.aboutText))),l.a.createElement("div",{className:"form-check form-switch"},l.a.createElement("input",{className:"form-check-input",type:"checkbox","aria-checked":"true",id:"flexSwitchCheckChecked",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label text-".concat(a),htmlFor:"flexSwitchCheckChecked"},t," DarkMode"))))))}i.defaultProps={title:"Company Name",aboutText:"About Company"};var d=t(13);function m(e){var a=Object(n.useState)({brand:"Ford",model:"Mustang",color:"Red"}),t=Object(c.a)(a,2),o=t[0],r=t[1],s=Object(n.useState)(""),i=Object(c.a)(s,2),m=i[0],u=i[1],b="dark"===e.mode?"black":"white",h={color:"dark"===e.mode?"white":"black",backgroundColor:b};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-3 container",style:h},l.a.createElement("h2",null,e.heading),l.a.createElement("textarea",{className:"form-control",style:h,value:m,id:"myBox",rows:"8",onChange:function(e){u(e.target.value)}}),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){var a=m.toUpperCase();u(a),e.showAlert("converted to UpperCase","success")}},"Click to Uppercase"),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){var a=m.toLowerCase();u(a),e.showAlert("converted to LowerCase","info")}},"Click to Lowercase"),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){var a=m.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ");u(a),e.showAlert("converted to Captilize","warning")}},"Click to Capitalize"),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){u(""),e.showAlert("text cleared","danger")}},"Clear"),l.a.createElement("div",{className:"container border border-2",style:h},l.a.createElement("h2",null,"Your Text Summary"),l.a.createElement("p",null,"Words : ",m.split(" ").length," Latters: ",m.length,";"),l.a.createElement("p",null,"Read Time:",.008*m.split(" ").length,"min.")),l.a.createElement("div",{className:"container border border-2 border-warning my-3",style:h},l.a.createElement("h2",null,"I have ",o.color," ",o.model," of ",o.brand),l.a.createElement("button",{className:"btn btn-warning",onClick:function(){"Ford"===o.brand?r(function(e){return Object(d.a)({},e,{brand:"Hundai"})}):r(function(e){return Object(d.a)({},e,{brand:"Ford"})})}},"Click to Change"))))}t(29);var u={WhiteTheme:{color:"black",backgroundColor:"white"},DarkTheme:{color:"white",backgroundColor:"black",border:"1px solid rgba(255,255,255,.25)"},DBtnTheme:{color:"white",backgroundColor:"black"},WBtnTheme:{color:"black",backgroundColor:"white"}},b=function(){var e=u.WhiteTheme,a=u.DarkTheme,t=u.DBtnTheme,o=u.WBtnTheme,r=Object(n.useState)(e),s=Object(c.a)(r,2),i=s[0],d=s[1],m=Object(n.useState)(t),b=Object(c.a)(m,2),h=b[0],p=b[1],g=Object(n.useState)("Dark"),E=Object(c.a)(g,2),y=E[0],v=E[1];return l.a.createElement("div",{className:"container my-4 pb-2 border border-dark",style:i},l.a.createElement("h2",{className:"my-2"},"About Us"),l.a.createElement("div",{className:"accordion py-3",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item my-2",style:i},l.a.createElement("h2",{className:"accordion-header",id:"headingOne"},l.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:i},"Accordion Item #1")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item my-2",style:i},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:i},"Accordion Item #2")),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item my-2",style:i},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:i},"Accordion Item #3")),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),l.a.createElement("button",{className:"styleBtn",style:h,onClick:function(){i===e?(d(a),v("Light"),p(o)):(d(e),v("Dark"),p(t))}},y," Mode"))},h=function(e){return e.alertmsg&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"alert alert-".concat(e.alertmsg.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alertmsg.type)," :"),e.alertmsg.msg))},p=t(0);var g=function(){var e=Object(n.useState)("light"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(null),d=Object(c.a)(r,2),u=d[0],g=d[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(i,{title:"TextUtiles",aboutText:"About_Using_Props",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="black",E("Dark mode Enabled","success")):(o("light"),document.body.style.backgroundColor="white",E("Dark mode Disabled","warning"))}}),l.a.createElement(h,{alertmsg:u}),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",element:l.a.createElement(m,{exact:!0,showAlert:E,heading:"Tell me about your self :",mode:t})}),l.a.createElement(p.a,{path:"/about",element:l.a.createElement(b,null)}))))},E=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,32)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null))),E()}},[[16,3,2]]]);
//# sourceMappingURL=main.70938e12.chunk.js.map