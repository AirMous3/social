(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{87:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(2),n=(s(0),s(41)),i=s(39),c=s(1),r=function(e){var t,s=e.callBack,r=e.classNameTextArea,o=e.classNameButton,u=Object(n.a)({mode:"onChange"}),j=u.register,l=u.handleSubmit,d=u.setValue,b=u.formState.errors;return Object(c.jsxs)("form",{onSubmit:l((function(e){s(e.message),d("message","")})),children:[Object(c.jsx)("textarea",Object(a.a)(Object(a.a)({className:r},j("message",{required:!0,minLength:1,maxLength:{value:300,message:"max length 300"}})),{},{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0441\u0432\u043e\u0451 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})),Object(c.jsx)("span",{children:null===(t=b.message)||void 0===t?void 0:t.message}),Object(c.jsx)("div",{children:Object(c.jsx)(i.a,{className:o,children:"Send"})})]})}},88:function(e,t,s){"use strict";t.a=s.p+"static/media/user.40a377fa.png"},90:function(e,t,s){e.exports={container:"ProfileInfo_container__2bEaS",wrapper:"ProfileInfo_wrapper__2_Vkz",image:"ProfileInfo_image__iqC1n",text:"ProfileInfo_text__3MgiE",changeProfile:"ProfileInfo_changeProfile__2tej3"}},91:function(e,t,s){e.exports={container:"MyPosts_container__2mCmv",posts:"MyPosts_posts__16xq0",textarea:"MyPosts_textarea__3S7kx"}},92:function(e,t,s){e.exports={item:"Post_item__yqMLX",button:"Post_button__1WEtI",text:"Post_text__1OgWd"}},96:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(18),i=s(19),c=s(27),r=s(26),o=s(0),u=s.n(o),j=s(12),l=s(5),d=s(13),b=s(21),p=s(40),h=s(20),O=s(28),x=s(88),f=s(90),m=s.n(f),v=s(1),g=function(e){var t=Object(o.useState)(!1),s=Object(h.a)(t,2),a=s[0],n=s[1],i=Object(o.useState)(e.status),c=Object(h.a)(i,2),r=c[0],u=c[1];Object(o.useEffect)((function(){u(e.status)}),[e.status]);return Object(v.jsxs)("div",{children:[!a&&Object(v.jsx)("div",{children:Object(v.jsxs)("span",{onDoubleClick:function(){e.isOwner&&n(!0)},children:[Object(v.jsx)("b",{children:"Status"}),": ",e.status]})}),a&&Object(v.jsx)("div",{children:Object(v.jsx)("input",{onBlur:function(){return function(t){e.updateStatus(t),n(!1)}(r)},onChange:function(e){return u(e.currentTarget.value)},autoFocus:!0,value:r})})]})},k=function(e){var t=e.contact,s=e.contactValue;return Object(v.jsxs)("div",{style:{paddingLeft:"15px"},children:[Object(v.jsx)("b",{children:t}),": ",s]})},P=s(41),_=function(e){var t=e.updateStatus,s=e.status,n=e.profile,i=e.isOwner,c=e.editMode,r=(n.contacts,Object(j.c)()),o=Object(P.a)(),u=o.register,l=o.handleSubmit;return Object(v.jsxs)("form",{onSubmit:l((function(e){console.log(e),c(!1),r(Object(p.f)(e))})),children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"FullName"}),": ",Object(v.jsx)("input",Object(a.a)({},u("fullName")))]}),Object(v.jsx)(g,{isOwner:i,status:s,updateStatus:t}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"About me"}),": ",Object(v.jsx)("input",Object(a.a)({},u("aboutMe")))]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Looking for a job"}),": ",Object(v.jsx)("input",Object(a.a)({type:"checkbox"},u("lookingForAJob")))]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"My professional skills"}),":",Object(v.jsx)("div",{children:Object(v.jsx)("textarea",Object(a.a)({style:{width:"264px",height:"100px",resize:"none"}},u("lookingForAJobDescription")))})]}),Object(v.jsx)("button",{type:"submit",children:"save"})]})};var S=function(e){var t=e.updateStatus,s=e.status,a=e.profile,n=e.isOwner,i=a.contacts;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"FullName"}),": ",a.fullName]}),Object(v.jsx)(g,{isOwner:n,status:s,updateStatus:t}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"About me"}),": ",a.aboutMe]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Looking for a job"}),": ",a.lookingForAJob?"Yes":"No"]}),a.lookingForAJob&&Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"My professional skills"}),": ",a.lookingForAJobDescription]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Contacts"}),":",Object.entries(i).map((function(e,t){var s=Object(h.a)(e,2),a=s[0],n=s[1];return Object(v.jsx)(k,{contact:a,contactValue:n},t)}))]})]})},y=function(e){var t=e.profile,s=e.status,a=e.updateStatus,n=e.isOwner,i=e.updatePhoto,c=Object(o.useState)(!1),r=Object(h.a)(c,2),u=r[0],j=r[1];return Object.keys(t).length?Object(v.jsx)("div",{className:m.a.container,children:Object(v.jsxs)("div",{className:m.a.wrapper,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{alt:"profileImage",className:m.a.image,src:t.photos.large||x.a}),n&&Object(v.jsxs)("div",{style:{padding:"10px",display:"flex",flexDirection:"column",marginLeft:"20px"},children:[Object(v.jsx)("input",{onChange:function(e){e.target.files&&i(e.target.files[0].name)},id:"img",style:{marginLeft:"50px",display:"none"},type:"file"}),Object(v.jsx)("label",{htmlFor:"img",children:" updatePhoto"}),Object(v.jsx)("button",{className:m.a.changeProfile,onClick:function(){return j(!0)},children:"changeProfile"})]})]}),Object(v.jsx)("div",{className:m.a.text,children:u?Object(v.jsx)(_,{updateStatus:a,profile:t,status:s,isOwner:n,editMode:j}):Object(v.jsx)(S,{updateStatus:a,status:s,profile:t,isOwner:n})})]})}):Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{})})},N=s(87),w=s(91),I=s.n(w),C=s(92),M=s.n(C);var T=function(e){var t=Object(o.useState)(e.likeCounts),s=Object(h.a)(t,2),a=s[0],n=s[1];return Object(v.jsxs)("div",{className:M.a.item,children:[Object(v.jsx)("img",{alt:"postImage",src:e.avatar}),Object(v.jsx)("div",{className:M.a.text,children:e.message}),Object(v.jsx)("div",{children:Object(v.jsxs)("button",{className:M.a.button,onClick:function(){return n(a+1)},children:[" ",a," like "]})})]})};var U=function(e){var t=e.profilePage.postData.map((function(e){return Object(v.jsx)(T,{message:e.post,likeCounts:e.likeCounts,avatar:e.avatar},e.id)}));return Object(v.jsxs)("div",{className:I.a.container,children:[Object(v.jsx)("h3",{children:" My Posts "}),Object(v.jsx)("div",{children:Object(v.jsx)(N.a,{classNameTextArea:I.a.textarea,callBack:e.addPost})}),Object(v.jsx)("div",{className:I.a.posts,children:t})]})},A=Object(j.b)((function(e){return{profilePage:e.profilePage}}),{addPost:p.a})(U);var F=function(e){var t=e.profile,s=e.status,a=e.updateUserStatusThunk,n=e.isOwner,i=e.updatePhotoThunk;return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{updatePhoto:i,isOwner:n,profile:t,status:s,updateStatus:a}),Object(v.jsx)(A,{})]})},L=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"savePhoto",value:function(){}},{key:"refreshProfile",value:function(){var e,t,s=this.props.match.params.userId;s||this.props.autorizedUserId?(s=null!==(e=s)&&void 0!==e?e:null===(t=this.props.autorizedUserId)||void 0===t?void 0:t.toString(),this.props.getUserProfileThunk(s),this.props.getUsersStatusThunk(s)):this.props.history.push("/login")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(v.jsx)(F,Object(a.a)({isOwner:!this.props.match.params.userId},this.props))}}]),s}(u.a.Component);t.default=Object(d.c)(b.a,Object(j.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.data.id}}),{getUserProfileThunk:p.b,getUsersStatusThunk:p.c,updateUserStatusThunk:p.g,updatePhotoThunk:p.e}),l.h)(L)}}]);
//# sourceMappingURL=3.c8007017.chunk.js.map