(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),s=a.n(l),c=a(2),i=a.n(c),u=a(3),o=a(14),m=a(15),d=a(17),p=a(18);a(25);function f(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Employee Directory"))}a(26);function v(e){return r.a.createElement("div",{id:"search-div"},r.a.createElement("input",{type:"text",placeholder:"Search",id:"search-box",value:e.textValue,onChange:e.filterNames}))}a(27);function h(e){return r.a.createElement("div",{className:"user-div"},r.a.createElement("div",null,r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("div",null,r.a.createElement("p",null,e.name)),r.a.createElement("div",null,r.a.createElement("p",null,e.phone)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:"+e.email},e.email))),r.a.createElement("div",null,r.a.createElement("p",null,e.dob)))}a(28);function E(e){return r.a.createElement("div",{id:"fields-div"},r.a.createElement("div",null,r.a.createElement("p",null,"Image")),r.a.createElement("div",{onClick:e.sortName},r.a.createElement("p",null,"Name\u25b2\u25bc")),r.a.createElement("div",null,r.a.createElement("p",null,"Phone")),r.a.createElement("div",null,r.a.createElement("p",null,"E-mail")),r.a.createElement("div",null,r.a.createElement("p",null,"DOB")))}var g=a(16),b=a.n(g),y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={users:[],displayUsers:[],sortOrder:"asc",textValue:""},e.convertDate=function(e){var t="";return console.log(e),"0"===e.charAt(5)?(t+=e.substring(6,8),"0"===e.charAt(8)?t+=e.substring(9,10):t+=e.substring(8,10)):(t+=e.substring(5,8),"0"===e.charAt(8)?t+=e.substring(9,10):t+=e.substring(8,10)),t+="-".concat(e.substring(0,4))},e.sortName=function(){"dec"===e.state.sortOrder?e.setState({sortOrder:"asc"}):e.setState({sortOrder:"dec"});var t=e.state.displayUsers.map((function(e){return e.name}));if("asc"===e.state.sortOrder){var a=t.sort();e.setState({displayUsers:e.sort(a)})}else if("dec"===e.state.sortOrder){var n=t.reverse();e.setState({displayUsers:e.sort(n)})}},e.sort=function(t){for(var a=[],n=0;n<t.length;)for(var r=0;r<t.length;r++)e.state.displayUsers[r].name===t[n]&&(a.push(r),n++);for(var l=[],s=0,c=a;s<c.length;s++){var i=c[s];l.push(e.state.displayUsers[i])}return l},e.filterNames=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.target.value.toLowerCase();case 2:n=t.sent,console.log(n),""!==n?e.setState({textValue:n}):e.setState({textValue:e.state.textValue.substring(0,n.length)}),e.setState({displayUsers:e.state.users.filter((function(t){return t.name.substring(0,e.state.textValue.length).toLowerCase()===e.state.textValue.toLowerCase()}))});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("main",null,r.a.createElement(v,{textValue:e.state.textValue,filterNames:e.filterNames}),r.a.createElement(E,{sortName:e.sortName}),e.state.displayUsers.map((function(e){return r.a.createElement(h,{key:e.id,name:e.name,image:e.image,phone:e.phone,email:e.email,dob:e.dob})}))))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://randomuser.me/api/?results=50&nat=US");case 2:t=e.sent,a=t.data,n=a.results.map((function(e){return{id:e.login.uuid,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,dob:r.convertDate(e.dob.date),image:e.picture.large,email:e.email}})),this.setState({users:n}),this.setState({displayUsers:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a7644a12.chunk.js.map