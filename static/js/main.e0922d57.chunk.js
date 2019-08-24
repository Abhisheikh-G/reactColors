(window["webpackJsonpcolor-project"]=window["webpackJsonpcolor-project"]||[]).push([[0],{225:function(e,a,t){e.exports=t.p+"static/media/bg.f3540bb2.svg"},247:function(e,a,t){e.exports=t(488)},252:function(e,a,t){},487:function(e,a,t){},488:function(e,a,t){"use strict";t.r(a);var n,o=t(0),r=t.n(o),l=t(7),c=t.n(l),i=t(40),s=(t(252),t(32)),m=t(27),u=t(21),d=t(38),p=t(39),h=t(42),f=t(61),g=t(554),b=t(537),v=t(22),E=t(6),y=t(220),C=t(495),x=t(4),j=t(33),w=t.n(j),O=function(e){return"@media (max-width: ".concat({xs:"575px",sm:"767px",md:"991px",lg:"1199px",xl:"1600px"}[e],")")},k={ColorBox:(n={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:"1",transition:"0.5s"}},Object(E.a)(n,O("lg"),{height:function(e){return e.showingFullPalette?"20%":"30.333%"},width:function(e){return e.showingFullPalette?"25%":"33.3333%"}}),Object(E.a)(n,O("md"),{height:function(e){return e.showingFullPalette?"10%":"20%"},width:function(e){return e.showingFullPalette,"50%"}}),Object(E.a)(n,O("xs"),{width:function(e){return e.showingFullPalette,"100%"},height:function(e){return e.showingFullPalette?"5%":"10%"}}),n),copyText:{color:function(e){return w()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return w()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return w()(e.background).luminance()>=.6?"rgba(0,0,0,0.6)":"white"},position:"absolute",background:"rgba(255, 255, 255, 0.3)",right:"0px",bottom:"0px",border:"none",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return w()(e.background).luminance()>=.6?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:"0"},boxContent:{position:"absolute",padding:"10px",width:"100%",left:"0px",bottom:"0px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(E.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},O("xs"),{fontSize:"5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},S=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(v.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},function(){setTimeout(function(){return e.setState({copied:!1})},1500)})}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,n=e.moreUrl,o=e.showingFullPalette,l=e.classes,c=this.state.copied;return r.a.createElement(y.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{className:l.ColorBox,style:{background:t}},r.a.createElement("div",{className:Object(x.a)(l.copyOverlay,Object(E.a)({},l.showOverlay,c)),style:{background:t}}),r.a.createElement("div",{className:Object(x.a)(l.copyMessage,Object(E.a)({},l.showMessage,c))},r.a.createElement("h1",null,"Copied"),r.a.createElement("p",{className:l.copyText},t)),r.a.createElement("div",null,r.a.createElement("div",{className:l.boxContent},r.a.createElement("span",{className:l.colorName},a)),r.a.createElement("button",{className:l.copyButton},"Copy")),o&&r.a.createElement(i.b,{to:n,onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:l.seeMore},"More"))))}}]),a}(o.Component),N=Object(C.a)(k)(S),P=t(233),F=t(551),B=t(535),D=t(552),I=t(117),A=t.n(I),L=t(536),T={Navbar:{display:"flex",alignItems:"center",justifyContent:"start",height:"6vh",fontFamily:"Roboto",textTransform:"uppercase"},logo:Object(E.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",height:"100%",display:"flex",alignItems:"center",letterSpacing:"2px ","& a":{textDecoration:"none",color:"black"}},O("xs"),{display:"none"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"},slider:Object(E.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-rail":{height:"8px"},"& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-handle, .rc-slider-handle:active,.rc-slider-handle:hover, .rc-slider-handle:focus":{background:"rgb(17, 112, 150)",outline:"none",border:"2px solid rgb(6, 86, 117)",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},O("sm"),{width:"150px"})},G=(t(313),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={format:"hex",open:!0},t.handleFormatChange=t.handleFormatChange.bind(Object(v.a)(t)),t.closeSnackbar=t.closeSnackbar.bind(Object(v.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,n=e.showingAllColors,o=e.classes,l=this.state,c=l.format,s=l.open;return r.a.createElement("nav",{className:o.Navbar},r.a.createElement("div",{className:o.logo},r.a.createElement(i.b,{to:"/"},"colors")),n&&r.a.createElement("div",null,r.a.createElement("span",null,"Level: ",a),r.a.createElement("div",{className:o.slider},r.a.createElement(P.a,{defaultValue:a,min:100,step:100,max:900,onAfterChange:t}))),r.a.createElement("div",{className:o.selectContainer},r.a.createElement(F.a,{value:c,onChange:this.handleFormatChange},r.a.createElement(B.a,{value:"hex"},"HEX - #ffffff "),r.a.createElement(B.a,{value:"rgb"},"RGB - rgb(255,255,255) "),r.a.createElement(B.a,{value:"rgba"},"RGBA - rgba(255,255,255, 1.0) "))),r.a.createElement(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:s,autoHideDuration:3e3,onClose:this.closeSnackbar,message:r.a.createElement("span",{id:"message-id"},"Format set to ",c),ContentProps:{"aria-describedby":"message-id"},action:[r.a.createElement(L.a,{key:1,onClick:this.closeSnackbar},r.a.createElement(A.a,{color:"inherit",key:"close","aria-label":"close"}))]}))}}]),a}(o.Component)),R=Object(C.a)(T)(G);var z,M=Object(C.a)({PaletteFooter:{textTransform:"uppercase",backgroundColor:"white",height:"5vh",display:"flex",alignItems:"center",justifyContent:"flex-end",letterSpacing:"1px",fontWeight:"600"},emoji:{margin:"0 1rem"}})(function(e){var a=e.paletteName,t=e.emoji,n=e.classes;return r.a.createElement("footer",{className:n.PaletteFooter},a,r.a.createElement("span",{className:n.emoji},t))}),H={Palette:{height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden"},colors:{height:"90%"},goBack:(z={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(E.a)(z,O("lg"),{height:"9%",width:"100%"}),Object(E.a)(z,O("md"),{height:"20%",width:"50%"}),Object(E.a)(z,O("xs"),{width:"100%",height:"10%"}),z)},U=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(v.a)(t)),t.changeFormat=t.changeFormat.bind(Object(v.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,n=e.emoji,o=e.id,l=this.props.classes,c=this.state,i=c.level,s=c.format,m=a[i].map(function(e){return r.a.createElement(N,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(o,"/").concat(e.id),showingFullPalette:!0})});return r.a.createElement("div",{className:l.Palette},r.a.createElement(R,{level:i,handleChange:this.changeFormat,changeLevel:this.changeLevel,showingAllColors:!0}),r.a.createElement("div",{className:l.colors},m),r.a.createElement(M,{paletteName:t,emoji:n}))}}]),a}(o.Component),V=Object(C.a)(H)(U),W=t(118),q=t.n(W);var J,Y,K,_,Q=Object(C.a)({root:{backgroundColor:"white",borderRadius:"3px",border:"1px solid black",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{transition:"all 0.3s ease-in-out",opacity:"1"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%;",borderRadius:"5px",overflow:"hidden"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",top:"0px",right:"0px",zIndex:"10",padding:"10px",opacity:"0"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColors:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"}})(function(e){var a=e.classes,t=e.paletteName,n=e.emoji,o=e.id,l=e.colors,c=e.handleClick,i=e.openDialog,s=l.map(function(e){return r.a.createElement("div",{className:a.miniColors,style:{backgroundColor:e.color},key:e.name})});return r.a.createElement("div",{className:a.root,onClick:c},r.a.createElement(q.a,{className:a.deleteIcon,onClick:function(e){e.stopPropagation(),i(o)}}),r.a.createElement("div",{className:a.colors},s),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},n)," "))}),X=t(225),$={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",fontFamily:"Roboto",backgroundColor:"#6ee0ff",backgroundImage:"url(".concat(t.n(X).a,")"),overflow:"scroll",backgroundSize:"cover"},container:(J={width:"60%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(E.a)(J,O("xl"),{width:"80%"}),Object(E.a)(J,O("xs"),{width:"75%"}),J),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"black","& h1":(Y={fontWeight:"300",fontSize:"2rem"},Object(E.a)(Y,O("md"),{fontSize:"1.8rem"}),Object(E.a)(Y,O("xs"),{fontSize:"1.5rem"}),Y),"& a":(K={textDecoration:"none",color:"black",margin:"1rem",fontSize:"1rem"},Object(E.a)(K,O("sm"),{fontSize:".8rem",margin:".8rem"}),Object(E.a)(K,O("xs"),{display:"block"}),K)},palettes:(_={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"1.5rem"},Object(E.a)(_,O("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(E.a)(_,O("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1rem"}),_)},Z=t(541),ee=t(538),ae=t(539),te=t(534),ne=t(489),oe=t(540),re=t(542),le=t(228),ce=t.n(le),ie=t(158),se=t.n(ie),me=t(159),ue=t.n(me),de=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).openDialog=function(e){t.setState({openDeleteDialog:!0,deletingId:e})},t.closeDialog=function(){t.setState({openDeleteDialog:!1,deletingId:""})},t.handleDelete=function(){t.props.deletePalette(t.state.deletingId),t.closeDialog()},t.resetDefaults=function(){window.localStorage.clear(),window.location.reload(!0)},t.state={openDeleteDialog:!1,deletingId:""},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,n=a.classes,o=this.state.openDeleteDialog;return r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.container},r.a.createElement("nav",{className:n.nav},r.a.createElement("h1",null,"Color Picker"),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/reactColors",onClick:this.resetDefaults},"Reset Default Palettes"),r.a.createElement(i.b,{to:"/palette/new"},"Create New Palette"))),r.a.createElement(g.a,{className:n.palettes},t.map(function(a){return r.a.createElement(b.a,{key:a.id,classNames:"fade",timeout:500},r.a.createElement(Q,Object.assign({openDialog:e.openDialog,handleClick:function(){return e.goToPalette(a.id)}},a,{id:a.id,key:a.id})))}))),r.a.createElement(ee.a,{onClose:this.closeDialog,open:o,"aria-labelledby":"delete-dialog"},r.a.createElement(ae.a,{id:"delete-dialog-title"},"Delete Palette?"),r.a.createElement(te.a,null,r.a.createElement(ne.a,{button:!0,onClick:this.handleDelete},r.a.createElement(oe.a,null,r.a.createElement(Z.a,{style:{backgroundColor:se.a[100],color:se.a[600]}},r.a.createElement(ce.a,null))),r.a.createElement(re.a,null,"Delete")),r.a.createElement(ne.a,{button:!0,onClick:this.closeDialog},r.a.createElement(oe.a,null,r.a.createElement(Z.a,{style:{backgroundColor:ue.a[100],color:ue.a[600]}},r.a.createElement(A.a,null))),r.a.createElement(re.a,null,"Cancel")))))}}]),a}(o.Component),pe=Object(C.a)($)(de),he=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(v.a)(t)),t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"gatherShades",value:function(e,a){var t=[],n=e.colors;for(var o in n)t=t.concat(n[o].filter(function(e){return e.id===a}));return t.slice(1)}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,n=a.emoji,o=a.id,l=this.props.classes,c=this._shades.map(function(a){return r.a.createElement(N,{key:a.name,showingFullPalette:!1,name:a.name,background:a[e]})});return r.a.createElement("div",{className:l.Palette},r.a.createElement(R,{showingAllColors:!1,handleChange:this.changeFormat}),r.a.createElement("div",{className:l.colors},c,r.a.createElement("div",{className:l.goBack},r.a.createElement(i.b,{to:"/palette/".concat(o)},"Go Back"))),r.a.createElement(M,{paletteName:t,emoji:n}))}}]),a}(o.Component),fe=Object(C.a)(H)(he),ge=t(11),be=t(491);function ve(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function Ee(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ve(t,!0).forEach(function(a){Object(E.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ve(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var ye,Ce=Object(be.a)(function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Ee({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:"0",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},btns:{width:"100%"},btn:{width:"50%"}}}),xe=t(553),je=t(81),we=t(550),Oe=t(543),ke=t(232),Se=t.n(ke),Ne=t(77),Pe={root:(ye={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:function(e){return w()(e.color).luminance()>=.7?"black":"white"},transform:"scale(1.5)"}},Object(E.a)(ye,O("lg"),{width:"25%",height:"20%"}),Object(E.a)(ye,O("md"),{width:"50%",height:"9.7%"}),Object(E.a)(ye,O("sm"),{width:"100%",height:"5%"}),ye),boxContent:{position:"absolute",padding:"10px",width:"100%",left:"0px",bottom:"0px",color:function(e){return w()(e.color).luminance()<=.08?"white":"black"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.2s ease-in-out"}},Fe=Object(Ne.SortableElement)(function(e){var a=e.classes,t=e.color,n=e.name,o=e.handleClick;return r.a.createElement("div",{className:a.root,style:{backgroundColor:t}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,n),r.a.createElement("span",null,r.a.createElement(q.a,{onClick:o,className:a.deleteIcon}))))}),Be=Object(C.a)(Pe)(Fe),De=Object(Ne.SortableContainer)(function(e){var a=e.colors,t=e.deleteColor;return r.a.createElement("div",{style:{height:"100%"}},a.map(function(e,a){return r.a.createElement(Be,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})}))}),Ie=t(53),Ae=t(230),Le=Object(be.a)(function(e){return{addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"},picker:{width:"100% !important",marginTop:"2rem !important"}}});function Te(e){var a=e.isPaletteFull,t=e.currColor,n=e.setColor,l=e.colorHandler,c=e.newName,i=e.addName,s=e.colors,m=Le();return Object(o.useEffect)(function(){Ie.ValidatorForm.addValidationRule("isColorNameUnique",function(e){return s.every(function(a){return a.name.toLowerCase()!==e.toLowerCase()})}),Ie.ValidatorForm.addValidationRule("isColorUnique",function(e){return s.every(function(e){return e.color!==t})})}),r.a.createElement("div",null,r.a.createElement(Ae.ChromePicker,{color:t,onChangeComplete:function(e){return n(e.hex)},className:m.picker}),r.a.createElement(Ie.ValidatorForm,{onSubmit:l,instantValidate:!1},r.a.createElement(Ie.TextValidator,{placeholder:"color name",className:m.colorNameInput,value:c,margin:"normal",variant:"filled",onChange:function(e){return i(e.target.value)},validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["this field is required","that color name is already taken, try again","that color is already taken, try another"]}),r.a.createElement(Oe.a,{variant:"contained",color:"primary",style:{backgroundColor:a?"grey":t},type:"submit",disabled:a,className:m.addColor},a?"Palette Full":"Add Color")))}var Ge=t(547),Re=t(548),ze=t(549),Me=t(231),He=t.n(Me),Ue=t(546),Ve=t(544),We=t(545),qe=t(234);t(486);function Je(e){var a=Object(o.useState)(""),t=Object(ge.a)(a,2),n=t[0],l=t[1],c=Object(o.useState)("form"),i=Object(ge.a)(c,2),s=i[0],m=i[1],u=e.handleSubmit,d=e.palettes,p=e.closeForm;Object(o.useEffect)(function(){Ie.ValidatorForm.addValidationRule("isPaletteNameUnique",function(e){return d.every(function(a){return a.paletteName.toLowerCase()!==e.toLowerCase()})})});return r.a.createElement("div",null,r.a.createElement(ee.a,{open:"emoji"===s,onClose:p},r.a.createElement(ae.a,{id:"form-dialog-title"},"Pick A Palette Emoji"),r.a.createElement(qe.a,{title:"Select Emoji",onSelect:function(e){u({paletteName:n,emoji:e.native}),m("")}})),r.a.createElement(ee.a,{open:"form"===s,onClose:p,"aria-labelledby":"form-dialog-title"},r.a.createElement(ae.a,{id:"form-dialog-title"},"New Palette Name"),r.a.createElement(Ie.ValidatorForm,{onSubmit:function(){m("emoji")},instantValidate:!1},r.a.createElement(Ve.a,null,r.a.createElement(We.a,null,"Please enter a name for the new palette. (All names must be unique)"),r.a.createElement(Ie.TextValidator,{label:"Palette Name",fullWidth:!0,margin:"normal",onChange:function(e){return l(e.target.value)},value:n,validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","That name is already taken"]})),r.a.createElement(Ue.a,null,r.a.createElement(Oe.a,{onClick:p,color:"primary"},"Cancel"),r.a.createElement(Oe.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}var Ye=Object(be.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},navBtns:Object(E.a)({marginRight:"1rem"},O("xs"),{marginRight:"0.5rem"}),btn:Object(E.a)({margin:"0 0.5rem"},O("xs"),{margin:0,padding:"0.3rem"})}});function Ke(e){var a=e.open,t=e.palettes,n=e.handleSubmit,l=e.setOpen,c=Object(o.useState)(!1),i=Object(ge.a)(c,2),s=i[0],m=i[1],u=Ye();return r.a.createElement("div",{className:u.root},r.a.createElement(Ge.a,null),r.a.createElement(Re.a,{position:"fixed",className:Object(x.a)(u.appBar,Object(E.a)({},u.appBarShift,a)),color:"default"},r.a.createElement(ze.a,null,r.a.createElement(L.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(x.a)(u.menuButton,a&&u.hide)},r.a.createElement(He.a,null)),r.a.createElement(je.a,{variant:"h6",noWrap:!0},"Add New Palette")),r.a.createElement("div",{className:u.navBtns},r.a.createElement(Oe.a,{className:u.btn,variant:"contained",color:"secondary",onClick:function(){return e.history.push("/reactColors")}},"Go Back"),r.a.createElement(Oe.a,{className:u.btn,variant:"contained",color:"primary",onClick:function(){return m(!0)}},"Save"))),s&&r.a.createElement(Je,{palettes:t,handleSubmit:n,closeForm:function(){return m(!1)}}))}var _e=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}];function Qe(e){var a=e.palettes,t=Ce(),n=Object(o.useState)(!1),l=Object(ge.a)(n,2),c=l[0],i=l[1],m=Object(o.useState)("teal"),u=Object(ge.a)(m,2),d=u[0],p=u[1],h=Object(o.useState)(_e[0].colors),f=Object(ge.a)(h,2),g=f[0],b=f[1],v=Object(o.useState)(""),y=Object(ge.a)(v,2),C=y[0],j=y[1];var w=g.length>=20;return r.a.createElement("div",{className:t.root},r.a.createElement(Ke,{palettes:a,open:c,setOpen:i,classes:t,handleSubmit:function(a){a.id=a.paletteName.toLowerCase().replace(/ /g,"-"),a.colors=g,e.savePalette(a),e.history.push("/")},history:e.history}),r.a.createElement(xe.a,{className:t.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(L.a,{onClick:function(){i(!1)}},r.a.createElement(Se.a,null))),r.a.createElement(we.a,null),r.a.createElement("div",{className:t.container},r.a.createElement(je.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),r.a.createElement("div",{className:t.btns},r.a.createElement(Oe.a,{variant:"contained",color:"secondary",onClick:function(){b([])},className:t.btn},"Clear Palette"),r.a.createElement(Oe.a,{className:t.btn,variant:"contained",color:"primary",onClick:function(){for(var a,t,n=e.palettes.map(function(e){return e.colors}).flat(),o=!0;o;)a=Math.floor(Math.random()*n.length),t=n[a],o=g.some(function(e){return e.name===t.name});b([].concat(Object(s.a)(g),[t]))},disabled:w},"Random Color")),r.a.createElement(Te,{isPaletteFull:w,currColor:d,setColor:p,colorHandler:function(){var e={name:C,color:d};b([].concat(Object(s.a)(g),[e])),j("")},newName:C,addName:j,colors:g}))),r.a.createElement("main",{className:Object(x.a)(t.content,Object(E.a)({},t.contentShift,c))},r.a.createElement("div",{className:t.drawerHeader}),r.a.createElement(De,{axis:"xy",onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;b(Object(Ne.arrayMove)(g,a,t))},colors:g,deleteColor:function(e){b(g.filter(function(a){return a.name!==e}))}})))}t(487);var Xe=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)},$e=[50,100,200,300,400,500,600,700,800,900];function Ze(e){for(var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=0,n=$e;t<n.length;t++){var o=n[t];a.colors[o]=[]}var r,l,c=!0,i=!1,s=void 0;try{for(var m,u=e.colors[Symbol.iterator]();!(c=(m=u.next()).done);c=!0){var d=m.value,p=(r=d.color,l=10,w.a.scale(function(e){return[w()(e).darken(1.4).hex(),e,"#fff"]}(r)).mode("lab").colors(l)).reverse();for(var h in p)a.colors[$e[h]].push({name:"".concat(d.name," ").concat($e[h]),id:d.name.toLowerCase().replace(/ /g,"-"),hex:p[h],rgb:w()(p[h]).css(),rgba:w()(p[h]).css().replace("rgb","rgba").replace(")",", 1.0)")})}}catch(f){i=!0,s=f}finally{try{c||null==u.return||u.return()}finally{if(i)throw s}}return a}var ea=function(e){function a(e){var t;Object(m.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).savePalette=function(e){t.setState({palettes:[].concat(Object(s.a)(t.state.palettes),[e])},t.syncLocalStorage)},t.deletePalette=function(e){t.setState(function(a){return{palettes:a.palettes.filter(function(a){return a.id!==e})}},t.syncLocalStorage)},t.findPalette=function(e){return t.state.palettes.find(function(a){return a.id===e})};var n=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:n||_e},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{render:function(a){var t=a.location;return r.a.createElement(g.a,null,r.a.createElement(b.a,{key:t.key,classNames:"page",timeout:500},r.a.createElement(f.c,{location:t},r.a.createElement(f.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(Xe,null,r.a.createElement(Qe,Object.assign({savePalette:e.savePalette},a,{palettes:e.state.palettes})))}}),r.a.createElement(f.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(Xe,null,r.a.createElement(pe,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),r.a.createElement(f.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(Xe,null,r.a.createElement(V,{palette:Ze(e.findPalette(a.match.params.id))}))}}),r.a.createElement(f.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(Xe,null,r.a.createElement(fe,{colorId:a.match.params.colorId,palette:Ze(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(f.a,{exact:!0,render:function(a){return r.a.createElement(Xe,null,r.a.createElement(pe,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(ea,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[247,1,2]]]);
//# sourceMappingURL=main.e0922d57.chunk.js.map