(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(14),s=a.n(o),r=(a(23),a(1)),l=a(2),c=a(4),m=a(3),p=a(5),h=a(32),u=a(34),d=a(33),g=(a(24),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"circle-image",style:{width:this.props.size,height:this.props.size}},i.a.createElement("img",{style:this.props.circle?{border:"0px solid black",borderRadius:"100%",boxShadow:"".concat(this.props.shadow?1:0,"px ").concat(this.props.shadow?1:0,"px ").concat(this.props.shadow?this.props.shadow:0,"px 0px black")}:this.props.radius?{border:" 0px solid black",borderRadius:"".concat(this.props.radius,"%"),boxShadow:"".concat(this.props.shadow?1:0,"px ").concat(this.props.shadow?1:0,"px ").concat(this.props.shadow?this.props.shadow:0,"px 0px black")}:{},className:"".concat(this.props.imageId),src:this.props.imageSource,alt:"Me"}))}}]),t}(n.Component)),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={page:"Home",Home:"This background image was taken at Roy's Peak in Wanaka, New Zealand. Don't let the filter fool you, it was actually quite bright that day.",History:"Thanks for taking an interest in where I've been! I'm proud of my past and believe every experience of mine has only made me a stronger person and better coder",Skillset:"I'm learning new tech every day, so this page should be updated pretty often! My favorites that I've learned thus far are Express.js, MySQL/Sequelize, and React (which powers this site!)",Interests:"Couldn't help myself including this page. Having a personal website, I believe it's important to allow visitors to get a full picture of me, which includes my hobbies.",Projects:"I hope to have to update this page constantly, because it means I'm completing projects and starting a bunch of new ones!","Edu And Exp":"Go Irish!","Future Projects":"Really hope to see these moved into the Projects page soon!"},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({page:this.props.selected})}},{key:"render",value:function(){return i.a.createElement("div",{style:this.props.style,className:"profile-snapshot flex-column ".concat(this.props.profileDisplay)},i.a.createElement(g,{imageId:"headshot",imageSource:"./images/me.jpg",size:"90px",circle:!0}),i.a.createElement("p",null,this.state[this.props.selected]?this.state[this.props.selected]:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ex commodi nulla voluptatum numquam eaque nam, rem repellat nemo libero nihil inventore assumenda tempora eius vitae ratione excepturi molestias ipsum?"))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={links:["Skillset","Edu And Exp","Projects","Future Projects"],linksLeft:["Skillset","Edu And Exp"],linksRight:["Projects","Future Projects"],profileDisplay:!1},a.handleOnProfileSelect=function(e){a.setState({profileDisplay:!a.state.profileDisplay})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"flex-column"},i.a.createElement("div",{className:"flex-row header-nav"},this.state.linksLeft.map(function(t){return i.a.createElement("a",{style:e.props.selected===t?{width:"calc(100vw / ".concat(e.state.links.length+1,")"),color:"var(--color4)"}:{width:"calc(100vw / ".concat(e.state.links.length+1,")")},className:"nav-link ".concat(t.toLowerCase().replace(/\s/,"-")),href:t.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")},i.a.createElement("span",null,t))}),i.a.createElement("div",{style:{height:"100%",position:"relative"},onMouseEnter:this.handleOnProfileSelect,onMouseLeave:this.handleOnProfileSelect},i.a.createElement("a",{className:"pgerspach nav-link",href:"Home"},i.a.createElement("span",null,"P. Gerspach")),i.a.createElement(f,{selected:this.props.selected,profileDisplay:this.state.profileDisplay})),this.state.linksRight.map(function(t){return i.a.createElement("a",{style:e.props.selected===t?{width:"calc(100vw / ".concat(e.state.links.length+1,")"),color:"var(--color4)"}:{width:"calc(100vw / ".concat(e.state.links.length+1,")")},className:"nav-link ".concat(t.toLowerCase().replace(/\s/,"-")),href:t.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")},i.a.createElement("span",null,t))})))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={links:["Skillset","Projects"],linksLeft:["Skillset"],linksRight:["Projects"],profileDisplay:!1},a.handleOnProfileSelect=function(e){a.setState({profileDisplay:!a.state.profileDisplay})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"flex-column"},i.a.createElement("div",{className:"flex-row header-nav"},this.state.linksLeft.map(function(t){return i.a.createElement("a",{style:e.props.selected===t?{width:"calc(100vw / ".concat(e.state.links.length+1,")"),color:"var(--color4)"}:{width:"calc(100vw / ".concat(e.state.links.length+1,")")},className:"nav-link ".concat(t.toLowerCase().replace(/\s/,"-")),href:t.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")},i.a.createElement("span",null,t))}),i.a.createElement("div",{style:{height:"100%",position:"relative"},onMouseEnter:this.handleOnProfileSelect,onMouseLeave:this.handleOnProfileSelect},i.a.createElement("a",{className:"pgerspach nav-link",href:"Home"},i.a.createElement("span",null,"P. Gerspach")),i.a.createElement(f,{selected:this.props.selected,profileDisplay:this.state.profileDisplay})),this.state.linksRight.map(function(t){return i.a.createElement("a",{style:e.props.selected===t?{width:"calc(100vw / ".concat(e.state.links.length+1,")"),color:"var(--color4)"}:{width:"calc(100vw / ".concat(e.state.links.length+1,")")},className:"nav-link ".concat(t.toLowerCase().replace(/\s/,"-")),href:t.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")},i.a.createElement("span",null,t))})))}}]),t}(n.Component),w=a(15),y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",email:"",message:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.setState({name:"",email:"",message:""}),document.alert("Your message has been sent to Patrick!")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact-wrap flex-column"},i.a.createElement("div",{style:{alignSelf:"flex-start",fontSize:"35px"}},"Contact"),i.a.createElement("p",{style:{fontSize:"22px"}},"I would love to talk. Please fill out your information with a message and I will reach out to you. Or, you can contact me directly at the email and phone provided above."),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"contact-form flex-column"},i.a.createElement("label",null,"Name",i.a.createElement("input",{name:"name",type:"text",className:"contact-input contact-input-name",value:this.state.name,onChange:this.handleChange,placeholder:"Name"})),i.a.createElement("label",null,"Email",i.a.createElement("input",{name:"email",type:"email",className:"contact-input contact-input-email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})),i.a.createElement("label",null,"Message",i.a.createElement("textarea",{name:"message",type:"text",className:"contact-input contact-input-message",value:this.state.message,onChange:this.handleChange,placeholder:"Why are you reaching out?"})),i.a.createElement("input",{className:"contact-input contact-input-submit",onClick:this.handleSubmit,type:"submit",value:"Submit"})))}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.props.numRows;)t.push(this.props.icons.slice(this.props.icons.length/this.props.numRows*a,this.props.icons.length/this.props.numRows*(a+1))),a++;return i.a.createElement("div",{className:"icons-row-wrapper flex-column"},t.map(function(t){return i.a.createElement("div",{className:"icons-row flex-row"},t.map(function(t){return i.a.createElement(g,{imageId:t,imageSource:"./images/".concat(t,".").concat(e.props.jpg?"jpg":"png"),size:"".concat(e.props.size,"px"),circle:e.props.circle,radius:e.props.radius,shadow:e.props.shadow})}))}))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400)})}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Home"}):i.a.createElement(b,{selected:"Home"}),i.a.createElement("div",{className:"page"},i.a.createElement("section",{className:"home-page flex-column"},i.a.createElement("div",{style:{alignItems:"center",justifyContent:"flex-end"},className:"about flex-column"},i.a.createElement("div",{className:"flex-row",style:{width:"100%",justifyContent:"space-between",alignItems:"center",flexWrap:this.state.mobile?"wrap":"no-wrap"}},i.a.createElement("div",null,i.a.createElement(g,{imageId:"headshot",imageSource:"./images/me.jpg",size:this.state.mobile?"180px":"220px",circle:!0})),i.a.createElement("a",{href:"https://linkedin.com/in/patrick-gerspach-51b770115/",target:"blank"},i.a.createElement(g,{imageId:"linkedIn",imageSource:"./images/li.png",size:this.state.mobile?"60px":"80px",circle:!1})),i.a.createElement("a",{href:"https://github.com/pgerspach",target:"blank"},i.a.createElement(g,{imageId:"github",imageSource:"./images/ghubwhite.png",size:this.state.mobile?"60px":"80px",circle:!1}))),i.a.createElement("p",{className:"home-introduction"},"Hello, my name is Patrick Gerspach and welcome to my website! I'm a full stack developer with a deep love for programming. I'm at my happiest when I'm solving mind-bending coding problems, hacking away on a project, or helping others set up their personal websites for the world to see!"))),i.a.createElement("div",{className:"about-passion-wrap ".concat(this.state.mobile?"flex-column":"flex-row")},i.a.createElement("div",{className:"about-passion-side left ".concat(this.state.mobile?"flex-row":"flex-column")},i.a.createElement("div",{className:"about-passion-icon-wrap"},i.a.createElement(E,{jpg:!1,numRows:2,size:"".concat(this.state.mobile?"130":"160"),radius:"5",circle:!1,icons:["ndrecruit","quote","fborm"],shadow:5}))),i.a.createElement("div",{className:"about-passion-side ".concat(this.state.mobile?"flex-row":"flex-column"),style:{padding:"".concat(this.state.mobile?"20px":"50px")}},i.a.createElement("p",null,"With experience in multiple languages and frameworks spanning from front end to back end, I am capable of building complete web applications with all the bells and whistles to your heart's desire."))),i.a.createElement("div",{className:"home-divider flex-column"},i.a.createElement("div",{style:{fontSize:"".concat(this.state.mobile?"36px":"40px")},className:"home-divider-headline"},"Code with integrity and the resolve to improve.")),i.a.createElement("div",{style:{background:"var(--color5)"},className:"about-passion-wrap ".concat(this.state.mobile?"flex-column":"flex-row")},i.a.createElement("div",{className:"about-passion-side ".concat(this.state.mobile?"flex-row":"flex-column"),style:{padding:"".concat(this.state.mobile?"20px":"50px"),fontSize:"".concat(this.state.mobile?"30px":"34px"),background:"var(--color5)"}},i.a.createElement("p",null,"With a background in engineering, wrestling a problem is a comfort zone at this point.")),i.a.createElement("div",{className:"about-passion-side right ".concat(this.state.mobile?"flex-row":"flex-column")},i.a.createElement("div",{className:"about-passion-icon-wrap"},i.a.createElement(g,{imageId:"servers",imageSource:"./images/gears.png",size:"100%",circle:!1,radius:0,shadow:!1})))),i.a.createElement(y,null)))}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-title",style:{marginBottom:"20px"}},i.a.createElement("span",null,this.props.pageName))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400)})}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Future Projects"}):i.a.createElement(b,{selected:"Future Projects"}),i.a.createElement("section",{className:"page future-projects-page flex-row"},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(k,{pageName:"Future Projects"}))))}}]),t}(n.Component),O=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"project",style:{boxShadow:"0 0 3px 0px black",padding:"10px",marginBottom:"30px",width:"100%"}},i.a.createElement("div",{className:"project-title",style:{fontSize:"32px",marginBottom:"10px"}},i.a.createElement("span",null,this.props.name?this.props.name:"Project Name")),i.a.createElement("div",{className:"project-body"},i.a.createElement("a",{href:this.props.link?this.props.link:"#",target:"blank"},this.props.image?i.a.createElement("img",{alt:"project",src:this.props.image,style:{width:"285px",height:"160px",borderBottom:this.props.border?"2px solid var(--color5)":"none",borderTop:this.props.border?"2px solid var(--color5)":"none",borderRadius:"10px"}}):null),i.a.createElement("div",{className:"project-description"},this.props.description.split("|").map(function(e){return i.a.createElement("p",null,e.trim())}))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400)})}},{key:"render",value:function(){var e=[{icon:"crossword",description:"I love NYT crosswords!",name:"Crosswords"},{icon:"notredame",description:"I love ND!",name:"Fighting Irish"},{icon:"guitar",description:"I love guitar!",name:"Guitar"},{icon:"songwriting",description:"I love songwriting!",name:"Songwriting"},{icon:"basketball",description:"I love basketball!",name:"Pick-up games"}];return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Interests"}):i.a.createElement(b,{selected:"Interests"}),i.a.createElement("section",{className:"page interests-page flex-row"},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(k,{pageName:"Interests"}),i.a.createElement(E,{numRows:1,size:"70",icons:e.map(function(e){return e.icon}),circle:!0}),e.map(function(e){return i.a.createElement(O,{description:e.description,name:e.name})}))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400)})}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Projects"}):i.a.createElement(b,{selected:"Projects"}),i.a.createElement("section",{className:"page projects-page flex-row"},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(k,{pageName:"Projects"}),i.a.createElement("div",null,i.a.createElement("p",{style:{fontSize:"20px"}},"Over the past six months, I have worked tirelessly to not only learn, but to also create. I have put a great deal of effort into homework assignments, group projects, and, more recently, personal projects. This will be a relatively in-depth look at some of my favorite creations.")),[{name:"Quote",description:"Quote is a full stack project I've been working on and off for a few months or so. The idea is to be a dedicated and intimate platform for sharing moments through quotes. Friends can post things said by their friends either publicly or in groups, and have them approved or denied. Approved quotes land on the speaker's own quote page. | Node.js and Express.js are used to set up the server and routing, while Sequelize.js is used with MySQL to store user information. User authentication is done through Google Firebase, which also provides the uuid for accessing database information. Finally, Handlebars is used to render the HTML. | This project is a work in progress and changes every day. I will attempt to keep this page as updated as I can and will post the link when I first push it to heroku!",image:"./images/quote.png",link:"https://github.com/pgerspach/Quote"},{name:"College Football Recruiting",description:"The first order of business for this project was gathering the data. I decided to scrape rivals.com for the recruiting data, and teamrankings.com for the win/loss records data.| I wanted to test my regular expression skills on this project, and so I scraped all the data with vanilla regex. This proved challenging, but incredibly rewarding when everything worked. For loading the html, I used npm's 'request' module for teamrankings.com, while I was forced to use phantom.js for rivals.com as their content populates after the page loads.| Once I gather the data, I write it all into a JSON file which is read by my server. The server sets up the routes, and provides all of the team names to the front end to create the dropdown menu. The front end then posts for which team it wants data, and the back end responds with all the data which is graphed using plotly.js.",image:"./images/recruit.png",link:"https://github.com/pgerspach/Recruit"}].map(function(e){return i.a.createElement(O,{description:e.description,name:e.name,image:e.image,link:e.link,border:!0})}))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400)})}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Skillset"}):i.a.createElement(b,{selected:"Skillset"}),i.a.createElement("section",{className:"page skillset-page flex-row"},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(k,{pageName:"Skillset"}),i.a.createElement("div",{style:{width:"100%",height:"".concat(this.state.mobile?250:180,"px")}},i.a.createElement(E,{numRows:this.state.mobile?3:2,size:"70",icons:["html","css","js","nodejs","mongo","server","sql","python","api","react"],circle:!0})),i.a.createElement("div",null,i.a.createElement("p",null,"The past five years have been a beautiful mess when it comes to learning. I attended the University of Notre Dame, where I studied mechanical engineering. Outside the standard mechanical engineering curriculum, which is itself a hodge-podge of various challenging courses, I took electives in a multitude of areas including Systems Programming, which was my first deep dive into a programming language with C. In addition to my schooling, I held four internships across a broad spectrum of fields which taught me a variety of skills. In the past year and since the beginning of my boot camp, my learning has been strictly focused on aquiring new tech skills. This has been the most enjoyable time in my life, as my passion is driving me effortlessly toward a total devotion to learning. However, I cannot forget the invaluable teachings of my experiences, as they no doubt contributed to my some of my proudest strengths. The icons below display an array of technologies which I have had the pleasure of learning within the past year. However, I would rather allow my github and projects demostrate my capabilities. In this section, I will go over some of the other skills I have learned throughout my schooling and my young career.")))))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400)})}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Edu And Exp"}):i.a.createElement(b,{selected:"Edu And Exp"}),i.a.createElement("section",{className:"page interests-page flex-row"},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(k,{pageName:"Education And Experience"}),i.a.createElement("div",null,i.a.createElement("p",null,"This section is intended to be very similar to what you can find on my resume. I list my academic background, as well as my past job experiences with brief descriptions. When coupled with the content found in the skills section, it should form a more complete picture of my professionally diverse past. I have been on a journey to discover what I am passionate about, and this journey has brought me to the doorstep of the tech industry.")),[{name:"University of Notre Dame",image:"./images/ndlogo.png"},{name:"Columbia University Engineering Coding Boot Camp",image:"./images/columbia.png"}].map(function(e){return i.a.createElement(O,{image:e.image?e.image:null,description:"",name:e.name})}))))}}]),t}(n.Component),P=a(12),D=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Object(P.a)();return i.a.createElement(h.a,{basename:"",history:e},i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{exact:!0,path:"/",component:j}),i.a.createElement(d.a,{path:"/Home",component:j}),i.a.createElement(d.a,{path:"/FutureProjects",component:x}),i.a.createElement(d.a,{path:"/Interests",component:N}),i.a.createElement(d.a,{path:"/Projects",component:I}),i.a.createElement(d.a,{path:"/Skillset",component:S}),i.a.createElement(d.a,{path:"/EduAndExp",component:C}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.c3ecc747.chunk.js.map