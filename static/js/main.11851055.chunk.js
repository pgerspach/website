(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(53)},29:function(e,t,a){},30:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(19),s=a.n(o),r=(a(29),a(2)),l=a(3),c=a(5),p=a(4),m=a(6),h=a(56),d=(a(30),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"circle-image",style:{width:this.props.size,height:this.props.size}},i.a.createElement("img",{style:this.props.circle?{border:"0px solid black",borderRadius:"100%",boxShadow:"".concat(this.props.shadow?1:0,"px ").concat(this.props.shadow?1:0,"px ").concat(this.props.shadow?this.props.shadow:0,"px 0px black")}:this.props.radius?{border:" 0px solid black",borderRadius:"".concat(this.props.radius,"%"),boxShadow:"".concat(this.props.shadow?1:0,"px ").concat(this.props.shadow?1:0,"px ").concat(this.props.shadow?this.props.shadow:0,"px 0px black")}:{},className:"".concat(this.props.imageId),src:this.props.imageSource,alt:"Me"}))}}]),t}(n.Component)),u=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={page:"Home",Home:"This background image was taken at Roy's Peak in Wanaka, New Zealand. Don't let the filter fool you, it was actually quite bright that day.",History:"Thanks for taking an interest in where I've been! I'm proud of my past and believe every experience of mine has only made me a stronger person and better coder",Skillset:"I'm learning new tech every day, so this page should be updated pretty often! My favorites that I've learned thus far are Express.js, MySQL/Sequelize, and React (which powers this site!)",Interests:"Couldn't help myself including this page. Having a personal website, I believe it's important to allow visitors to get a full picture of me, which includes my hobbies.",Projects:"I hope to have to update this page constantly, because it means I'm completing projects and starting a bunch of new ones!","Edu And Exp":"Go Irish!","Future Projects":"Really hope to see these moved into the Projects page soon!"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({page:this.props.selected})}},{key:"render",value:function(){return i.a.createElement("div",{style:this.props.style,className:"profile-snapshot flex-column ".concat(this.props.profileDisplay)},i.a.createElement(d,{imageId:"headshot",imageSource:"./images/me.jpg",size:"90px",circle:!0}),i.a.createElement("p",null,this.state[this.props.selected]?this.state[this.props.selected]:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ex commodi nulla voluptatum numquam eaque nam, rem repellat nemo libero nihil inventore assumenda tempora eius vitae ratione excepturi molestias ipsum?"))}}]),t}(n.Component),g=a(55),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={links:["Projects"],linksLeft:[],linksRight:["Home","Projects"],profileDisplay:!1},a.handleOnProfileSelect=function(e){a.setState({profileDisplay:!a.state.profileDisplay})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"flex-column",style:{display:this.props.visible?"flex":"none"}},i.a.createElement("div",{className:"flex-row header-nav"},this.state.linksLeft.map(function(t){return i.a.createElement(g.a,{style:e.props.selected===t?{width:"calc(100vw / ".concat(e.state.links.length+1,")"),color:"var(--color4)"}:{width:"calc(100vw / ".concat(e.state.links.length+1,")")},className:"nav-link ".concat(t.toLowerCase().replace(/\s/,"-")),to:t.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")},i.a.createElement("span",null,t))}),i.a.createElement("div",{style:{height:"100%",position:"relative"},onMouseEnter:this.handleOnProfileSelect,onMouseLeave:this.handleOnProfileSelect},i.a.createElement("a",{className:"pgerspach nav-link",href:"Home",style:{color:"Home"===this.props.selected?"var(--color4)":"var(--color1)"}},i.a.createElement("span",null,"P. Gerspach")),i.a.createElement(u,{selected:this.props.selected,profileDisplay:this.state.profileDisplay})),this.state.linksRight.map(function(t){return i.a.createElement(g.a,{style:e.props.selected===t?{width:"calc(100vw / ".concat(e.state.links.length+1,")"),color:"var(--color4)"}:{width:"calc(100vw / ".concat(e.state.links.length+1,")")},className:"nav-link ".concat(t.toLowerCase().replace(/\s/,"-")),to:t.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")},i.a.createElement("span",null,t))})))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={links:["Projects"],linksLeft:[],linksRight:["Home","Projects"],profileDisplay:!1},a.handleOnProfileSelect=function(e){a.setState({profileDisplay:!a.state.profileDisplay})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"flex-column",style:{display:this.props.visible?"flex":"none"}},i.a.createElement("div",{className:"flex-row header-nav"},this.state.linksLeft.map(function(t){return i.a.createElement(g.a,{style:e.props.selected===t?{width:"calc(100vw / ".concat(e.state.links.length+1,")"),color:"var(--color4)"}:{width:"calc(100vw / ".concat(e.state.links.length+1,")")},className:"nav-link ".concat(t.toLowerCase().replace(/\s/,"-")),to:t.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")},i.a.createElement("span",null,t))}),i.a.createElement("div",{style:{height:"100%",position:"relative"}},i.a.createElement("a",{className:"pgerspach nav-link",href:"Home",style:{color:"Home"===this.props.selected?"var(--color4)":"var(--color1)"}},i.a.createElement("span",null,"P. Gerspach")),i.a.createElement(u,{selected:this.props.selected,profileDisplay:this.state.profileDisplay})),this.state.linksRight.map(function(t){return i.a.createElement(g.a,{style:e.props.selected===t?{width:"calc(100vw / ".concat(e.state.links.length+1,")"),color:"var(--color4)"}:{width:"calc(100vw / ".concat(e.state.links.length+1,")")},className:"nav-link ".concat(t.toLowerCase().replace(/\s/,"-")),to:t.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")},i.a.createElement("span",null,t))})))}}]),t}(n.Component),b=a(20),w=a(21),y=a.n(w),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",email:"",message:""},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),y.a.post("/submit/contact",{name:a.state.name,email:a.state.email,message:a.state.message}).then(function(e){console.log(a.state),a.setState({name:"",email:"",message:""}),200===e?document.alert("Your message has been sent to Patrick!"):document.alert("There was a problem sending your message to Patrick"),a.setState({name:"",email:"",message:""})})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit,className:"contact-form flex-column",style:{color:this.props.color||"black"}},i.a.createElement("label",null,"Name",i.a.createElement("input",{name:"name",type:"text",className:"contact-input contact-input-name",value:this.state.name,onChange:this.handleChange,placeholder:"Name"})),i.a.createElement("label",null,"Email",i.a.createElement("input",{name:"email",type:"email",className:"contact-input contact-input-email",value:this.state.email,onChange:this.handleChange,placeholder:"Email"})),i.a.createElement("label",null,"Message",i.a.createElement("textarea",{name:"message",type:"text",className:"contact-input contact-input-message",value:this.state.message,onChange:this.handleChange,placeholder:"Why are you reaching out?"})),i.a.createElement("input",{className:"contact-input contact-input-submit",onClick:this.handleSubmit,type:"submit",value:"Submit"}))}}]),t}(n.Component),x=(n.Component,function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.props.numRows;)t.push(this.props.icons.slice(this.props.icons.length/this.props.numRows*a,this.props.icons.length/this.props.numRows*(a+1))),a++;return i.a.createElement("div",{className:"icons-row-wrapper flex-column"},t.map(function(t){return i.a.createElement("div",{className:"icons-row flex-row"},t.map(function(t){return i.a.createElement(d,{imageId:t,imageSource:"./images/".concat(t,".").concat(e.props.jpg?"jpg":"png"),size:"".concat(e.props.size,"px"),circle:e.props.circle,radius:e.props.radius,shadow:e.props.shadow})}))}))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).wrapperRef=i.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{background:"".concat(this.props.color)},className:"about-passion-wrap ".concat(this.props.mobile?"flex-column":"flex-row"),ref:this.wrapperRef},this.props.reverse?null:i.a.createElement("div",{className:"about-passion-side ".concat(this.props.mobile?"flex-row":"flex-column"),style:{color:"var(--color2)",padding:"".concat(this.props.mobile?"20px":"50px")}},i.a.createElement("p",{style:{position:"relative",right:"60px",animation:this.props.animate?"slideInRight 1s ease forwards":null}},this.props.text)),i.a.createElement("div",{className:"about-passion-side left ".concat(this.props.mobile?"flex-row":"flex-column")},i.a.createElement("div",{className:"about-passion-icon-wrap"},this.props.row?i.a.createElement(x,{jpg:!1,numRows:this.props.icons.length>2?2:1,size:"".concat(this.props.mobile?"130":"160"),radius:"5",circle:!1,icons:this.props.icons,shadow:5}):i.a.createElement(d,{imageId:"".concat(this.props.icons),imageSource:"./images/".concat(this.props.icons,".png"),size:"100%",circle:!1,radius:0,shadow:!1}))),this.props.reverse?i.a.createElement("div",{className:"about-passion-side ".concat(this.props.mobile?"flex-row":"flex-column"),style:{color:"var(--color2)",padding:"".concat(this.props.mobile?"20px":"50px")}},i.a.createElement("p",{style:{position:"relative",left:"60px",animation:this.props.animate?"slideInLeft 1s ease forwards":null}},this.props.text)):null)}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"flex-column",style:{width:"290px",justifyContent:"space-between",alignItems:"center",flexWrap:this.props.mobile?"wrap":"no-wrap",marginTop:this.props.mobile?"10px":"none",marginBottom:"10px",borderTop:this.props.mobile?"1px solid var(--color5)":"none",paddingTop:"10px"}},i.a.createElement("div",null,i.a.createElement(d,{imageId:"headshot",imageSource:"./images/me.jpg",size:this.props.mobile?"150px":"220px",circle:!0})),i.a.createElement("div",{className:"flex-row",style:{width:"100%",justifyContent:"space-between"}},i.a.createElement("a",{href:"https://linkedin.com/in/patrick-gerspach-51b770115/",target:"blank"},i.a.createElement(d,{imageId:"linkedIn",imageSource:"./images/inwhite.png",size:this.props.mobile?"60px":"80px",circle:!0})),i.a.createElement("a",{href:"https://github.com/pgerspach",target:"blank"},i.a.createElement(d,{imageId:"github",imageSource:"./images/ghubWhite.png",size:this.props.mobile?"60px":"80px",circle:!1}))),i.a.createElement("p",{style:{fontSize:"25px",color:"white"}},"pat.gerspach@gmail.com"),i.a.createElement("p",{style:{margin:"0",fontSize:"25px",color:"white"}},"(516) 238-7825"))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleScroll=function(e){for(var t in a.setState({vpscroll:window.pageYOffset}),a.home_content)if(a.isInViewport(a.home_content[t])){if(!a.state.contentVis[t]){var n=a.state.contentVis.slice(0),i=a.state.animate.slice(0);i[t]=!0,n[t]=!0,a.setState({contentVis:n,animate:i})}}else if(a.state.contentVis[t]){var o=a.state.contentVis.slice(0);o[t]=!1;var s=a.state.animate.slice(0);s[t]=!1,a.setState({contentVis:o,animate:s})}console.log(a.state.contentVis),a.state.vpscroll>a.state.vpheight/1.5?a.setState({headerVisible:!1}):a.setState({headerVisible:!0})},a.isInViewport=function(e){if(e.current){if(e.current.wrapperRef)return a.isInViewport(e.current.wrapperRef);var t=e.current,n=function e(t){return t.offsetParent?t.offsetTop+e(t.offsetParent):t.offsetTop}(t);return n<a.state.vpscroll+a.state.vpheight-220&&n>a.state.vpscroll-t.clientHeight+220}return null},a.home_content=[i.a.createRef(),i.a.createRef()],a.state={vpwidth:0,vpheight:0,vpratio:0,vpscroll:0,headerVisible:!0,contentVis:[!1,!1],animate:[!1,!1]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({vpwidth:window.innerWidth,vpheight:window.innerHeight,vpscroll:window.pageYOffset,vpratio:window.devicePixelRatio}),window.addEventListener("scroll",this.handleScroll.bind(this)),console.log(this.home_content)}},{key:"resetAnimation",value:function(e,t){var a=this.state.animate.slice(0);a[e]=!1,this.setState({animate:a})}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.mobile?i.a.createElement(v,{selected:"Home"}):i.a.createElement(f,{selected:"Home",visible:this.state.headerVisible}),i.a.createElement("div",{className:"page flex-column"},i.a.createElement("section",{className:"home-page flex-row",style:{width:"100%",padding:"0"}},i.a.createElement("div",{className:"flex-column welcome-wrap"},i.a.createElement("div",{className:"page-welcome"},"Welcome"),i.a.createElement("p",{className:"home-introduction"},"Hello, I'm Patrick Gerspach and welcome to my website! I'm a full stack developer with a love for programming. I'm at my happiest when I'm solving mind-bending coding problems, hacking away on a project, or helping others set up their personal websites for the world to see!")),i.a.createElement("div",{className:"flex-column desktop-headshot"},i.a.createElement(k,null))),i.a.createElement(j,{icons:["ndrecruit","encontro","quote","fborm"],mobile:!1,text:"With experience in multiple languages and frameworks spanning from front end to back end, I am capable of building complete web applications.",row:!0,reverse:!0,color:"linear-gradient(var(--color5), white)",ref:this.home_content[0],animate:this.state.animate[0]}),i.a.createElement(j,{icons:"running",mobile:!1,text:"From the moment I began web development, I made it my mission to get better every day. I am continuously learning new technologies, and putting them to use in projects.",row:!1,reverse:!1,color:"linear-gradient(-90deg, var(--color3),var(--color1))",ref:this.home_content[1],animate:this.state.animate[1]}),i.a.createElement("div",{style:{backgroundColor:"var(--color1)",width:"auto",height:"auto"},className:"contact-wrap flex-column"},i.a.createElement("div",{style:{alignSelf:"flex-start",fontSize:"35px"}},"Contact"),i.a.createElement("p",{style:{fontSize:"22px"}},"I would love to talk. Please fill out your information with a message and I will reach out to you. Or, you can contact me directly at the email and phone provided above."),i.a.createElement("div",{style:{width:"90%",alignSelf:"center",alignItems:"center",justifyContent:"center"},className:"flex-row"},i.a.createElement(E,{color:"var(--color1)"})))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={vpwidth:0,vpheight:0,vpratio:0,vpscroll:0,headerVisible:!0},a.handleResize=function(e){a.setState({vpscroll:window.pageYOffset}),a.state.vpscroll>200?a.setState({headerVisible:!1}):a.setState({headerVisible:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({vpwidth:window.innerWidth,vpheight:window.innerHeight,vpscroll:window.pageYOffset,vpratio:window.devicePixelRatio}),window.addEventListener("scroll",this.handleResize.bind(this))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(v,{selected:"Home",visible:this.state.headerVisible}),i.a.createElement("div",{style:{paddingTop:"var(--headerHeight)",minHeight:"calc(100vh)",height:"auto",position:"relative",overflow:"hidden"},class:"flex-column"},i.a.createElement("div",{class:"flex-row",style:{paddingTop:"40px",paddingBottom:"40px",borderBottom:"1px solid var(--color3)",backgroundImage:"url('/images/aboutBack.jpg')",backgroundSize:"cover",width:"100%",backgroundPosition:"center"}},i.a.createElement("div",{style:{borderRight:"1px solid var(--color5)",width:"50%"},class:"flex-column"},i.a.createElement(d,{imageId:"headshot",imageSource:"./images/me.jpg",size:"42vw",circle:!0})),i.a.createElement("div",{style:{height:"40vw",justifyContent:"space-between",width:"50vw"},class:"flex-column"},i.a.createElement("a",{href:"https://www.linkedin.com/in/patrick-gerspach-51b770115/",target:"blank"},i.a.createElement(d,{imageId:"linkedIn",imageSource:"./images/inwhite.png",size:"14.5vw",circle:!0})),i.a.createElement("a",{href:"https://www.github.com/pgerspach",target:"blank"},i.a.createElement(d,{imageId:"GitHub",imageSource:"./images/ghubWhite.png",size:"14.5vw",circle:!0})))),i.a.createElement("div",{class:"flex-column",style:{height:"auto",background:"var(--color1)"}},i.a.createElement("p",{style:{fontSize:"6vw",padding:"0 20px",textAlign:"justify",color:"var(--color2)"}},"Hello, I'm Patrick Gerspach and welcome to my website! I'm a full stack developer with a love for programming. I'm at my happiest when I'm solving mind-bending coding problems, hacking away on a project, or helping others set up their personal websites for the world to see!")),i.a.createElement("div",{class:"flex-column",style:{height:"auto",background:"linear-gradient(var(--color1), var(--color5))",padding:"30px 0 0 0"}},i.a.createElement("div",{class:"flex-column",style:{width:"100%",height:"auto",justifyContent:"center"}},i.a.createElement(d,{imageId:"Runner",imageSource:"./images/running.png",size:"150px"})),i.a.createElement("div",{class:"flex-column",style:{width:"100%",height:"auto",justifyContent:"center"}},i.a.createElement("p",{style:{boxSizing:"border-box",padding:"20px 30px",textAlign:"justify",fontSize:"23px",color:"var(--color2)",margin:"0"}},"From the moment I began web development, I made it my mission to get better every day. Without any shortcuts or excuses, the only way is forward."))),i.a.createElement("div",{style:{background:"var(--color5)"}},i.a.createElement("div",{class:"flex-column",style:{height:"400px",width:"100%",background:"var(--color5)"}},i.a.createElement("div",{class:"flex-row",style:{height:"50%",width:"100%"}},i.a.createElement("div",{class:"flex-column",style:{width:"50%"}},i.a.createElement(d,{imageId:"Runner",imageSource:"./images/quote.png",size:"100px",radius:5,shadow:5})),i.a.createElement("div",{class:"flex-column",style:{width:"50%"}},i.a.createElement(d,{imageId:"Runner",imageSource:"./images/recruit.png",size:"100px",radius:5,shadow:5}))),i.a.createElement("div",{class:"flex-row",style:{height:"50%",width:"100%"}},i.a.createElement("div",{class:"flex-column",style:{width:"50%"}},i.a.createElement(d,{imageId:"Runner",imageSource:"./images/fborm.png",size:"100px",radius:5,shadow:5})),i.a.createElement("div",{class:"flex-column",style:{width:"50%"}},i.a.createElement(d,{imageId:"Runner",imageSource:"./images/encontro.png",size:"100px",radius:5,shadow:5})))),i.a.createElement("div",{class:"flex-column",style:{width:"100%",height:"50%",justifyContent:"center"}},i.a.createElement("p",{style:{padding:"20px 30px",textAlign:"justify",fontSize:"23px",color:"var(--color2)",margin:"0"}},"With experience in multiple languages and frameworks spanning from front end to back end, I am capable of building complete web applications with all the bells and whistles one desires."))),i.a.createElement("div",{style:{padding:"20px",background:"var(--color1)"}},i.a.createElement("p",{style:{fontSize:"32px",margin:"0",paddingBottom:"20px",color:"var(--color2)"}},"Contact"),i.a.createElement("p",{style:{fontSize:"22px",margin:"0",paddingBottom:"20px",color:"var(--color2)"}},"I would love to talk. Please fill out your information with a message and I will reach out to you. Or, you can contact me directly at the email and phone provided above."),i.a.createElement(E,{color:"var(--color2)"}))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400)})}},{key:"render",value:function(){return this.state.mobile?i.a.createElement(S,null):i.a.createElement(O,{mobile:this.state.mobile})}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-title",style:{marginBottom:"20px"}},i.a.createElement("span",null,this.props.pageName))}}]),t}(n.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"project",style:{boxShadow:"0 0 3px 0px black",padding:"10px",marginBottom:"30px",width:"100%",background:"white"}},i.a.createElement("div",{className:"project-title",style:{fontSize:"32px",marginBottom:"10px",textAlign:"left"}},i.a.createElement("span",null,this.props.name?this.props.name:"Project Name")),i.a.createElement("div",{className:"project-body ".concat("column"===this.props.bodyDirection?"flex-column":"flex-row"),style:"column"===this.props.bodyDirection?null:{justifyContent:"space-around"}},i.a.createElement("a",{href:this.props.link?this.props.link:null,target:"blank",style:{alignSelf:"flex-start"}},this.props.image?i.a.createElement("img",{alt:"project",src:this.props.image,style:{width:"285px",height:"160px",borderBottom:this.props.border?"2px solid var(--color5)":"none",borderTop:this.props.border?"2px solid var(--color5)":"none",borderRadius:"10px",objectFit:this.props.contain?"contain":null}}):null),i.a.createElement("div",{className:"project-description",style:{alignSelf:"flex-start"}},this.props.description.split("|").map(function(e){return i.a.createElement("p",null,e.trim())}),this.props.githubLink?i.a.createElement("p",null,"Link to github: ",i.a.createElement("a",{href:this.props.githubLink},this.props.name)):null)))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).handleScroll=function(e){a.setState({vpscroll:window.pageYOffset}),a.state.vpscroll>a.state.vpheight/1.5?a.setState({headerVisible:!1}):a.setState({headerVisible:!0})},a.state={profileDisplay:!1,mobile:!1,vpwidth:0,vpheight:0,vpratio:0,vpscroll:0,headerVisible:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400),vpwidth:window.innerWidth,vpheight:window.innerHeight,vpscroll:window.pageYOffset,vpratio:window.devicePixelRatio}),window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Future Projects",visible:!0}):i.a.createElement(f,{selected:"Future Projects",visible:this.state.headerVisible}),i.a.createElement("section",{className:"page future-projects-page flex-row",style:{minWidth:"0"}},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(C,{pageName:"Future Projects"}),[{name:"Collab",image:null,description:"A collaborative music site which allows users to share riffs, melodies, and lyrics, and work together with other artists to make music.|I want to build the back-end of this project in python for two reasons: |1) Python is a language I've started learning and I really want to dive deep into it and do some cool things|2) Python has some awesome libraries for analyzing audio which will be great for this application"},{name:"encontro mobile",image:null,description:"If you have a look at my projects tab, you will find encontro, which is an agenda and notes focused meeting app. Although the web app is far from complete, I have started to think about developing a mobile application for encontro.|I want to either build encontro mobile with React Native, which is what is used for the website, or with swift to develop for ios. "}].map(function(e){return i.a.createElement(N,{image:e.image?e.image:null,description:e.description,name:e.name})}))))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400)})}},{key:"render",value:function(){var e=[{icon:"crossword",description:"I love NYT crosswords!",name:"Crosswords"},{icon:"notredame",description:"I love ND!",name:"Fighting Irish"},{icon:"guitar",description:"I love guitar!",name:"Guitar"},{icon:"songwriting",description:"I love songwriting!",name:"Songwriting"},{icon:"basketball",description:"I love basketball!",name:"Pick-up games"}];return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Interests"}):i.a.createElement(f,{selected:"Interests"}),i.a.createElement("section",{className:"page interests-page flex-row"},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(C,{pageName:"Interests"}),i.a.createElement(x,{numRows:1,size:"70",icons:e.map(function(e){return e.icon}),circle:!0}),e.map(function(e){return i.a.createElement(N,{description:e.description,name:e.name})}))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1,vpwidth:0,vpheight:0,vpratio:0,vpscroll:0,headerVisible:!0},a.handleScroll=function(e){a.setState({vpscroll:window.pageYOffset}),a.state.vpscroll>a.state.vpheight/1.5?a.setState({headerVisible:!1}):a.setState({headerVisible:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400),vpwidth:window.innerWidth,vpheight:window.innerHeight,vpscroll:window.pageYOffset,vpratio:window.devicePixelRatio}),window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Projects",visible:!0}):i.a.createElement(f,{selected:"Projects",visible:this.state.headerVisible}),i.a.createElement("section",{className:"page projects-page flex-row",style:{minWidth:"0"}},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(C,{pageName:"Projects"}),i.a.createElement("div",null,i.a.createElement("p",{style:{fontSize:"20px"}},"Over the past six months, I have worked tirelessly to not only learn, but to also create. I have put a great deal of effort into homework assignments, group projects, and, more recently, personal projects. This will be a relatively in-depth look at some of my favorite creations.")),[{name:"The Baseball API",description:"The Baseball API is a RESTful API for accessing basic baseball statistics over HTTP.|Before beginning this project, I had only built web apps using node.js. I desired to learn python and its frameworks, and so I chose to build The Baseball API using Django. The data was taken from Sean Lahman's Baseball Database, which bosts an impressive collection of stats from 1871 through 2018. I imported the data from csv format into a heroku PostgreSQL db; unfortunately I have to upgrade to a paid plan which allows up to 1,000,000 rows, so not a lot of data is available at the moment. However, I am working on adding new endpoints and increasing querying ability, and will upgrade or host on a different site when I feel the API is complete enough.",image:"./images/thebaseballapi.png",link:"https://thebaseballapi.herokuapp.com",githubLink:"https://github.com/pgerspach/the-baseball-api"},{name:"encontro",description:"encontro is an interactive, agenda-focused meeting app which allows an organization to host more effective meetings with increased efficiency and effectiveness.|We noticed that there was a problem with how meetings are typically run. Discussions get off-topic, items are left undiscussed, attendee participation is too varied, and, worst of all, the meeting may be totally forgotten. We attempted to solve this problem with an intuitive web application which schedules, hosts, and saves meeting data.|A user can join an organization, and then host/join meetings, chat, take notes, raise silent concerns on an item, etc. and then revisit everything from that meeting at a later date.|This project is a collaborative effort with 3 other team members, and is a work in progress. We continue to bug-fix and add features every day, so please feel free to revisit the site often!",image:"./images/encontro.png",link:"https://encontro.herokuapp.com",githubLink:"https://github.com/robsookim/encontro"},{name:"Quote",description:"Quote is a full stack project I've been working on and off for a few months or so. The idea is to be a dedicated and intimate platform for sharing moments through quotes. Friends can post things said by their friends either publicly or in groups, and have them witnessed or denied. Approved quotes land on the speaker's own quote page. | Node.js and Express.js are used to set up the server and routing, while Sequelize.js is used with MySQL to store user information. User authentication is done through Google Firebase, which provides the uuid for accessing database information. Finally, React is used to build the front-end. | This project is a work in progress and changes every day.",image:"./images/quote.png",link:"https://github.com/pgerspach/Quote-App"},{name:"College Football Recruiting",description:"As national signing day approached, I developed an interest in the relationship between a team's recruiting ranking and their performance by year. I wanted to see if there were any clear trends and if recruiting was any kind of indicator of a team's success, whether leading or lagging. |The first order of business for this project was gathering the data. I decided to scrape rivals.com for the recruiting data, and teamrankings.com for the win/loss records.| I wanted to test my regular expression skills on this project, and so I scraped all the data with standard regular expressions. This proved challenging, but incredibly rewarding when everything worked. For loading the html, I used npm's 'request' module for teamrankings.com, while I was forced to use phantom.js for rivals.com as their content populates after the page loads.| Once I gather the data, I write it all into a JSON file which is read by my server. The server sets up the routes, and provides all of the team names to the front end to create the dropdown menu. A user then selects a team for which it wants data, and the server responds with all the data which is graphed using plotly.js.",image:"./images/recruit.png",link:"https://github.com/pgerspach/Recruit"}].map(function(e){return i.a.createElement(N,{description:e.description,name:e.name,image:e.image,link:e.link,border:!0,bodyDirection:"column",githubLink:e.githubLink?e.githubLink:null})}))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1,vpwidth:0,vpheight:0,vpratio:0,vpscroll:0,headerVisible:!0},a.handleScroll=function(e){a.setState({vpscroll:window.pageYOffset}),a.state.vpscroll>a.state.vpheight/1.5?a.setState({headerVisible:!1}):a.setState({headerVisible:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400),vpwidth:window.innerWidth,vpheight:window.innerHeight,vpscroll:window.pageYOffset,vpratio:window.devicePixelRatio}),window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Skillset",visible:!0}):i.a.createElement(f,{selected:"Skillset",visible:this.state.headerVisible}),i.a.createElement("section",{className:"page skillset-page flex-row",style:{minWidth:"0"}},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(C,{pageName:"Skillset"}),i.a.createElement("div",{style:{width:"100%",height:"".concat(this.state.mobile?360:280,"px")}},i.a.createElement("br",null),i.a.createElement(x,{numRows:this.state.mobile?4:3,size:"70",icons:["html","css","js","nodejs","mongo","server","sql","python","api","react","git","scrum"],circle:!0})),i.a.createElement("div",null,i.a.createElement("p",{style:{fontSize:"20px"}},"The past five years have been quite the ride when it comes to learning. I attended the University of Notre Dame, where I studied mechanical engineering. I took electives in a multitude of areas including Systems Programming, which was my first deep dive into a programming language with C. In addition to my schooling, I held four internships across a broad spectrum of fields which taught me a variety of skills. Upon graduating, I enrolled in the Columbia University Engineering Coding Boot Camp which focuses on full stack web development. This has been both the craziest and most enjoyable time in my life, and my passion is driving me toward a total devotion to learning and creating.")))))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={profileDisplay:!1,mobile:!1,vpwidth:0,vpheight:0,vpratio:0,vpscroll:0,headerVisible:!0},a.handleScroll=function(e){a.setState({vpscroll:window.pageYOffset}),a.state.vpscroll>a.state.vpheight/1.5?a.setState({headerVisible:!1}):a.setState({headerVisible:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:!(window.innerWidth>400),vpwidth:window.innerWidth,vpheight:window.innerHeight,vpscroll:window.pageYOffset,vpratio:window.devicePixelRatio}),window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"render",value:function(){return i.a.createElement("div",null,this.state.mobile?i.a.createElement(v,{selected:"Edu And Exp",visible:!0}):i.a.createElement(f,{selected:"Edu And Exp",visible:this.state.headerVisible}),i.a.createElement("section",{className:"page interests-page flex-row",style:{minWidth:"0"}},i.a.createElement("div",{className:"flex-column page-main"},i.a.createElement(C,{pageName:"Education And Experience"}),i.a.createElement("div",null,i.a.createElement("p",{style:{fontSize:"20px"}},"This section is intended to be very similar to what you can find on my resume. I list my academic background, as well as my past job experiences with brief descriptions. When coupled with the content found in the skills section, it should form a more complete picture of my professionally diverse past. I have been on a journey to discover what I am passionate about, and this journey has brought me to the doorstep of the tech industry.")),i.a.createElement("h2",null,"Education"),[{name:"University of Notre Dame",image:"./images/ndlogo.png",description:"B.S Mechanical Engineering| 3.60 GPA"},{name:"Columbia University Engineering Coding Boot Camp",image:"./images/columbia.png",description:"Certificate of Completion|Full Stack Web Development"}].map(function(e){return i.a.createElement(N,{image:e.image?e.image:null,description:e.description,name:e.name})}),i.a.createElement("h2",null,"Experience"),[{name:"WestRock",image:"./images/westrock.png",description:"Engineering and Management Trainee|Project Lead on waste reduction initiative within a manufacturing plant|Executed successful completion of a boiler replacement and removal project as PM"},{name:"MG Engineering D.P.C",image:"./images/mge.png",description:"Mechanical Engineering Intern|Drafted HVAC designs using AutoCAD in New York high-rise office floors.|Carefully surveyed job sites, including both demoed and partially demoed spaces, and took comprehensive notes to use in HVAC design"},{name:"Technical Consultant",image:"./images/promazo.png",description:"Technical Consultant|Directed the technical analysis element of developing a consumer product for a Fortune 500 home appliances company.|Conducted experiments, compiled findings, and wrote a detailed memo making a professional recommendation regarding a technical component of the product"}].map(function(e){return i.a.createElement(N,{contain:!0,bodyDirection:"column",image:e.image?e.image:null,description:e.description,name:e.name})}))))}}]),t}(n.Component),V=function(e){function t(e){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("This is the .env","/website"),i.a.createElement("div",null,i.a.createElement(h.a,{exact:!0,path:"/Home",component:I}),i.a.createElement(h.a,{exact:!0,path:"/FutureProjects",component:P}),i.a.createElement(h.a,{exact:!0,path:"/Interests",component:z}),i.a.createElement(h.a,{exact:!0,path:"/Projects",component:R}),i.a.createElement(h.a,{exact:!0,path:"/Skillset",component:A}),i.a.createElement(h.a,{exact:!0,path:"/EduAndExp",component:W}),i.a.createElement(h.a,{exact:!0,path:"/",component:I}))}}]),t}(n.Component),D=a(10),T=a(57),H=Object(D.a)();s.a.render(i.a.createElement(T.a,{basename:"/website",history:H},i.a.createElement(V,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.11851055.chunk.js.map