(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{87:function(e,a,s){"use strict";s.d(a,"a",(function(){return o}));var t=s(2),n=(s(0),s(41)),c=s(39),i=s(88),r=s.n(i),d=s(1),o=function(e){var a,s=e.callBack,i=e.classNameTextArea,o=e.classNameButton,l=Object(n.a)({mode:"onChange"}),m=l.register,g=l.handleSubmit,j=l.setValue,u=l.formState.errors;return Object(d.jsxs)("form",{className:r.a.container,onSubmit:g((function(e){s(e.message),j("message","")})),children:[Object(d.jsx)("textarea",Object(t.a)(Object(t.a)({className:i},m("message",{required:!0,minLength:1,maxLength:{value:300,message:"max length 300"}})),{},{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0441\u0432\u043e\u0451 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})),Object(d.jsx)("span",{children:null===(a=u.message)||void 0===a?void 0:a.message}),Object(d.jsx)("div",{children:Object(d.jsx)(c.a,{className:o,children:"Send"})})]})}},88:function(e,a,s){e.exports={container:"AddPostForm_container__1w_8w"}},90:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__3VJ1Y",messages:"Dialogs_messages__3vd5I",dialogsItems:"Dialogs_dialogsItems__OnmqP",active:"Dialogs_active__3DmUx",textArea:"Dialogs_textArea__gbxIE",addPost:"Dialogs_addPost__1IZqV"}},99:function(e,a,s){"use strict";s.r(a);var t=s(12),n=s(13),c=s(21),i=s(51),r=(s(0),s(87)),d=s(90),o=s.n(d),l=s(8),m=s(1);var g=function(e){return Object(m.jsx)("div",{className:o.a.dialog+" "+o.a.active,children:Object(m.jsxs)(l.b,{to:"/dialogs/"+e.id,children:[" ",e.name," "]})})};var j=function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:e.message})})};var u=function(e){var a=e.dialogsPage,s=a.dialogsData.map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name},e.id)})),t=a.messagesData.map((function(e){return Object(m.jsx)(j,{message:e.message},e.id)}));return Object(m.jsxs)("div",{className:"".concat(o.a.dialogs," container"),children:[Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:o.a.dialogsItems,children:s})}),Object(m.jsx)("div",{className:o.a.messages,children:Object(m.jsx)("div",{children:t})}),Object(m.jsx)("div",{className:o.a.addPost,children:Object(m.jsx)(r.a,{classNameTextArea:o.a.textArea,callBack:e.sendNewDialogMessage})})]})};a.default=Object(n.c)(c.a,Object(t.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendNewDialogMessage:function(a){e(Object(i.a)(a))}}})))(u)}}]);
//# sourceMappingURL=4.419ca9b4.chunk.js.map