(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{264:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(3),s=(r(0),r(107)),o=r(105),i=r(265),a=r.n(i),c=r(1),u=function(e){var t,r=e.callBack,i=e.classNameTextArea,u=e.classNameButton,l=Object(s.a)({mode:"onChange"}),j=l.register,f=l.handleSubmit,p=l.setValue,b=l.formState.errors;return Object(c.jsxs)("form",{className:a.a.container,onSubmit:f((function(e){r(e.message),p("message","")})),children:[Object(c.jsx)("textarea",Object(n.a)(Object(n.a)({className:i},j("message",{required:!0,minLength:1,maxLength:{value:300,message:"max length 300"}})),{},{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0441\u0432\u043e\u0451 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})),Object(c.jsx)("span",{children:null===(t=b.message)||void 0===t?void 0:t.message}),Object(c.jsx)("div",{children:Object(c.jsx)(o.a,{className:u,children:"Send"})})]})}},265:function(e,t,r){e.exports={container:"AddPostForm_container__1w_8w"}},266:function(e,t,r){"use strict";t.a=r.p+"static/media/user.40a377fa.png"},267:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=n(e);if(t){var i=n(this).constructor;r=Reflect.construct(s,arguments,i)}else r=s.apply(this,arguments);return o(this,r)}}r.d(t,"a",(function(){return i}))},268:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return s}))},270:function(e,t,r){e.exports={container:"ProfileInfo_container__2bEaS",profileInfoWrapper:"ProfileInfo_profileInfoWrapper__TIfvz",profileWrapper:"ProfileInfo_profileWrapper__1UWQy",profileAvatarWrapper:"ProfileInfo_profileAvatarWrapper__3vqS9",image:"ProfileInfo_image__iqC1n",text:"ProfileInfo_text__3MgiE",editProfile:"ProfileInfo_editProfile__1i-u2",editProfileButtons:"ProfileInfo_editProfileButtons__1Zd7-",profileDataFormInputs:"ProfileInfo_profileDataFormInputs__1hf2n",errorMessage:"ProfileInfo_errorMessage__1yTlT"}},272:function(e,t,r){e.exports={container:"MyPosts_container__2mCmv",posts:"MyPosts_posts__16xq0",postsWrapper:"MyPosts_postsWrapper__3n5Vz",textarea:"MyPosts_textarea__3S7kx"}},273:function(e,t,r){e.exports={item:"Post_item__yqMLX",button:"Post_button__1WEtI",info:"Post_info__1mlBc",text:"Post_text__1OgWd"}},275:function(e,t,r){"use strict";r.r(t);var n=r(3),s=r(77),o=r(78),i=r(268),a=r(267),c=r(0),u=r.n(c),l=r(18),j=r(13),f=r(38),p=r(53),b=r(106),d=r(31),O=r(76),h=r(266),m=r(270),x=r.n(m),v=r(1),g=function(e){var t=Object(c.useState)(!1),r=Object(d.a)(t,2),n=r[0],s=r[1],o=Object(c.useState)(e.status),i=Object(d.a)(o,2),a=i[0],u=i[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return Object(v.jsxs)(v.Fragment,{children:[!n&&Object(v.jsx)("div",{children:Object(v.jsxs)("span",{onDoubleClick:function(){e.isOwner&&s(!0)},children:[Object(v.jsx)("b",{children:"Status"}),": ",e.status]})}),n&&Object(v.jsx)("div",{children:Object(v.jsx)("input",{onBlur:function(){return function(t){e.updateStatus(t),s(!1)}(a)},onChange:function(e){return u(e.currentTarget.value)},autoFocus:!0,value:a})})]})},_=function(e){var t=e.contact,r=e.contactValue;return Object(v.jsxs)("div",{style:{paddingLeft:"15px"},children:[Object(v.jsx)("b",{children:t}),": ",r]})},P=r(107),y=r(105),k=function(e){var t=e.updateStatus,r=e.status,s=e.profile,o=e.isOwner,i=s.contacts,a=Object(l.d)((function(e){return e.profilePage.profile.fullName})),c=Object(l.d)((function(e){return e.profilePage.profile.aboutMe})),u=Object(l.d)((function(e){return e.profilePage.profile.lookingForAJob})),j=Object(l.d)((function(e){return e.profilePage.profile.lookingForAJobDescription})),f=Object(l.d)((function(e){return e.profilePage.profile.contacts})),p=Object(l.d)((function(e){return e.profilePage.editProfileError})),O=Object(l.c)(),h=Object(P.a)({mode:"onSubmit",reValidateMode:"onChange",defaultValues:{fullName:a,aboutMe:c,lookingForAJob:u,lookingForAJobDescription:j,contacts:f}}),m=h.register,_=h.handleSubmit;return Object(v.jsxs)("form",{className:x.a.profileInfoWrapper,onSubmit:_((function(e){O(Object(b.h)(e))})),onChange:function(){return O(Object(b.c)(""))},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"FullName"}),": ",Object(v.jsx)("input",Object(n.a)({className:x.a.profileDataFormInputs},m("fullName")))]}),Object(v.jsx)(g,{isOwner:o,status:r,updateStatus:t}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"About me"}),": ",Object(v.jsx)("input",Object(n.a)({className:x.a.profileDataFormInputs},m("aboutMe")))]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Looking for a job"}),": ",Object(v.jsx)("input",Object(n.a)({type:"checkbox"},m("lookingForAJob")))]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"My professional skills"}),":",Object(v.jsx)("div",{children:Object(v.jsx)("textarea",Object(n.a)({style:{width:"264px",height:"100px",resize:"none",outline:"none",border:"none"}},m("lookingForAJobDescription")))})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Contacts"}),":",Object.entries(i).map((function(e,t){var r=Object(d.a)(e,2),s=r[0];r[1];return Object(v.jsxs)("div",{children:[s,":",Object(v.jsx)("input",Object(n.a)(Object(n.a)({className:x.a.profileDataFormInputs},m("contacts."+s)),{},{type:"text"}),t)]})})),p&&Object(v.jsx)("div",{className:x.a.errorMessage,children:p})]}),Object(v.jsx)(y.a,{type:"submit",children:"save"})]})};var S=function(e){var t=e.updateStatus,r=e.status,n=e.profile,s=e.isOwner,o=n.contacts;return Object(v.jsxs)("div",{className:x.a.profileInfoWrapper,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"FullName"}),": ",n.fullName]}),Object(v.jsx)(g,{isOwner:s,status:r,updateStatus:t}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"About me"}),": ",n.aboutMe]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Looking for a job"}),": ",n.lookingForAJob?"Yes":"No"]}),n.lookingForAJob&&Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"My professional skills"}),": ",n.lookingForAJobDescription]}),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("b",{children:"Contacts"}),":",Object.entries(o).map((function(e,t){var r=Object(d.a)(e,2),n=r[0],s=r[1];return Object(v.jsx)(_,{contact:n,contactValue:s},t)}))]})]})},N=function(e){var t=e.profile,r=e.status,n=e.updateStatus,s=e.isOwner,o=e.updatePhoto,i=Object(l.c)(),a=Object(l.d)((function(e){return e.profilePage.profileInfoEditMode}));return Object.keys(t).length?Object(v.jsx)("div",{className:x.a.container,children:Object(v.jsxs)("div",{className:x.a.profileWrapper,children:[Object(v.jsxs)("div",{className:x.a.profileAvatarWrapper,children:[Object(v.jsx)("img",{alt:"profileImage",className:x.a.image,src:t.photos.large||h.a}),s&&Object(v.jsxs)("div",{className:x.a.editProfileButtons,children:[Object(v.jsx)("input",{onChange:function(e){e.target.files&&o(e.target.files[0].name)},id:"img",type:"file"}),Object(v.jsx)("label",{htmlFor:"img",children:" updatePhoto"}),Object(v.jsx)("button",{className:x.a.editProfile,onClick:function(){return i(Object(b.b)(!0))},children:"changeProfile"})]})]}),Object(v.jsx)("div",{className:x.a.text,children:a?Object(v.jsx)(k,{updateStatus:n,profile:t,status:r,isOwner:s}):Object(v.jsx)(S,{updateStatus:n,status:r,profile:t,isOwner:s})})]})}):Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{})})},I=r(264),w=r(272),F=r.n(w),M=r(273),A=r.n(M);var D=function(e){var t=Object(c.useState)(e.likeCounts),r=Object(d.a)(t,2),n=r[0],s=r[1],o=new Date("December 17, 2021 03:24:00").toLocaleString();return Object(v.jsxs)("div",{className:A.a.item,children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("img",{alt:"postImage",src:e.avatar}),Object(v.jsxs)("div",{className:A.a.info,children:[Object(v.jsx)("div",{style:{marginBottom:"5px"},children:Object(v.jsx)("b",{children:"Test User"})}),Object(v.jsx)("div",{children:o})]})]}),Object(v.jsx)("div",{className:A.a.text,children:e.message}),Object(v.jsx)("div",{children:Object(v.jsxs)(y.a,{onClick:function(){return s(n+1)},children:[" ",n," like "]})})]})};var C=function(e){var t=e.profilePage.postData.map((function(e){return Object(v.jsx)(D,{message:e.post,likeCounts:e.likeCounts,avatar:e.avatar},e.id)}));return Object(v.jsxs)("div",{className:F.a.container,children:[Object(v.jsxs)("div",{className:F.a.postsWrapper,children:[Object(v.jsx)("h3",{children:" My Posts "}),Object(v.jsx)(I.a,{classNameTextArea:F.a.textarea,callBack:e.addPost})]}),Object(v.jsx)("div",{className:F.a.posts,children:t})]})},T=Object(l.b)((function(e){return{profilePage:e.profilePage}}),{addPost:b.a})(C);var W=function(e){var t=e.profile,r=e.status,n=e.updateUserStatusThunk,s=e.isOwner,o=e.updatePhotoThunk;return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(N,{updatePhoto:o,isOwner:s,profile:t,status:r,updateStatus:n}),Object(v.jsx)(T,{})]})},U=function(e){Object(i.a)(r,e);var t=Object(a.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"savePhoto",value:function(){}},{key:"refreshProfile",value:function(){var e,t,r=this.props.match.params.userId;r||this.props.autorizedUserId?(r=null!==(e=r)&&void 0!==e?e:null===(t=this.props.autorizedUserId)||void 0===t?void 0:t.toString(),this.props.getUserProfileThunk(r),this.props.getUsersStatusThunk(r)):this.props.history.push("/login")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,r){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(v.jsx)(W,Object(n.a)({isOwner:!this.props.match.params.userId},this.props))}}]),r}(u.a.Component);t.default=Object(f.c)(p.a,Object(l.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.data.id}}),{getUserProfileThunk:b.d,getUsersStatusThunk:b.e,updateUserStatusThunk:b.i,updatePhotoThunk:b.g}),j.h)(U)}}]);
//# sourceMappingURL=3.0d276ea9.chunk.js.map