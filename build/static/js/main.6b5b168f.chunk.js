(this["webpackJsonpicestark-waiter-react-ts"]=this["webpackJsonpicestark-waiter-react-ts"]||[]).push([[0],{103:function(e,t,a){e.exports={title:"PageTitle_title__1s3Gq",subTitle:"PageTitle_subTitle__3kQCc"}},122:function(e,t,a){e.exports={customTable:"Home_customTable__xcJmQ",stateText:"Home_stateText__2ULnY",link:"Home_link__4ajM2",separator:"Home_separator__1QgqW",pagination:"Home_pagination__F1ghK"}},146:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(41),c=a(6),s=a(0),i=a.n(s),r=a(21),l=a.n(r),o=(a(146),a(52)),u=a(23),j=a(71),b=a(103),m=a.n(b);function x(e){var t=e.title,a=e.subTitle;return Object(c.jsxs)("h5",{className:m.a.title,children:[Object(c.jsx)("span",{children:t}),Object(c.jsx)("span",{className:m.a.subTitle,children:a})]})}var d=a(232),f=a(59),p=a(122),O=a.n(p),h=d.a.Content;function _(){return Object(c.jsx)(d.a,{children:Object(c.jsxs)(h,{children:[Object(c.jsx)(x,{title:"\u5546\u5bb6\u9996\u9875"}),Object(c.jsx)(o.b,{className:O.a.link,to:"/list",children:"Link\u5b50\u5e94\u7528\u5185\u8df3\u8f6c"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(f.a,{type:"primary",onClick:function(){console.log("/angular")},children:"appHistory\u5b50\u5e94\u7528\u95f4\u8df3\u8f6c "})]})})}var y=a(48),v=a.n(y),k=a(74),C=a(234),I=a(233),g=a(134),N=a(51),T=a.n(N),w=d.a.Content;function L(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],r=Object(s.useState)([]),l=Object(n.a)(r,2),u=l[0],j=l[1],b=Object(s.useState)(1),m=Object(n.a)(b,2),d=m[0],f=m[1];function p(){return(p=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return new Promise((function(e){setTimeout((function(){e({status:"SUCCESS",message:"\u8bf7\u6c42\u6210\u529f",data:Array.from({length:10}).map((function(e,t){return{id:"00000".concat(t),name:"\u8058\u7528\u5408\u540c",ourCompany:"xxx\u5546\u94fa",amount:"999,999",currency:"CNY",state:"\u7b7e\u7ea6\u4e2d"}}))})}),600)}))}Object(s.useEffect)((function(){function e(){return(e=Object(k.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(!0);case 2:return e.next=4,O();case 4:return t=e.sent,a=t.data,e.next=8,j(Array.isArray(a)?a:[]);case 8:return e.next=10,i(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d]);var h=function(){C.b.success("\u6682\u4e0d\u652f\u6301\u4fee\u6539\u5408\u540c",10)};return Object(c.jsxs)(w,{children:[Object(c.jsx)(x,{title:"\u5546\u5bb6\u5217\u8868"}),Object(c.jsxs)(I.a,{loading:a,dataSource:u,rowKey:function(e){return e.id},className:T.a.customTable,children:[Object(c.jsx)(I.a.Column,{title:"\u5408\u540c\u7f16\u53f7",dataIndex:"id",width:100},"id"),Object(c.jsx)(I.a.Column,{title:"\u5408\u540c\u540d\u79f0",dataIndex:"name",width:100},"name"),Object(c.jsx)(I.a.Column,{title:"\u5546\u5bb6\u540d\u79f0",dataIndex:"ourCompany",width:160},"ourCompany"),Object(c.jsx)(I.a.Column,{title:"\u5408\u540c\u91d1\u989d",dataIndex:"amount",width:100},"amount"),Object(c.jsx)(I.a.Column,{title:"\u5e01\u79cd",dataIndex:"currency",width:100},"currency"),Object(c.jsx)(I.a.Column,{title:"\u5408\u540c\u72b6\u6001",dataIndex:"state",width:100,render:function(e){return Object(c.jsx)("div",{className:T.a.state,children:Object(c.jsx)("span",{className:T.a.stateText,children:e})})}},"state"),Object(c.jsx)(I.a.Column,{title:"\u64cd\u4f5c",dataIndex:"detail",width:200,render:function(e,t,a){return Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:T.a.link,onClick:h,children:"\u4fee\u6539"}),Object(c.jsx)("span",{className:T.a.separator}),Object(c.jsx)(o.b,{className:T.a.link,to:"/list/detail/".concat(u[a].id),children:"\u67e5\u770b"})]})}},"detail")]}),Object(c.jsx)(g.a,{className:T.a.pagination,current:d,total:u.length,pageSize:10,onChange:function(e){return p.apply(this,arguments)}})]})}var S=a(31),D=a.n(S),P=a(132),H=a(235),F=a(236),J=d.a.Content;function E(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],r=Object(s.useState)({}),l=Object(n.a)(r,2),o=l[0],j=l[1],b=Object(u.f)(),m=Object(u.g)({path:"/list/detail/:contractId",strict:!1,sensitive:!1});function d(e){return new Promise((function(t){setTimeout((function(){t(function(e){return{status:"SUCCESS",message:"\u8bf7\u6c42\u6210\u529f",data:{basic:[{key:"id",label:"\u4efb\u52a1ID",value:e},{key:"task",label:"\u4efb\u52a1\u6807\u9898",value:"\u96c6\u76d2\u5bb6\u5c45\u65d7\u8230\u5e97\u53cc\u5341\u4e00\u6d3b\u52a8"},{key:"shop",label:"\u5e97\u94fa\u540d\u79f0",value:"\u96c6\u76d2\u5bb6\u5c45\u65d7\u8230\u5e97"},{key:"currency",label:"\u5e01\u79cd",value:"CNY"},{key:"amount",label:"\u4efb\u52a1\u91d1\u989d",value:"1000.00"},{key:"reward",label:"\u4efb\u52a1\u8d4f\u91d1",value:"200.00"},{key:"ordertime",label:"\u63a5\u5355\u65f6\u95f4",value:"2017-10-18 12:20:07"},{key:"deliverytime",label:"\u4ea4\u4ed8\u65f6\u95f4",value:"2017-10-18 12:20:07"}],more:[{key:"phone",label:"\u8054\u7cfb\u65b9\u5f0f",value:"138xxxx9876"},{key:"address",label:"\u6536\u8d27\u5730\u5740",value:"\u676d\u5dde\u5e02\u6587\u4e00\u897f\u8def"},{key:"status",label:"\u4efb\u52a1\u72b6\u6001",value:"\u8fdb\u884c\u4e2d"},{key:"remark",label:"\u5907\u6ce8",value:"\u6682\u65e0"}]}}}(e))}),600)}))}Object(s.useEffect)((function(){function e(){return(e=Object(k.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(!0);case 2:if("empty"===m.params.contractId){e.next=11;break}return e.next=5,d(m.params.contractId);case 5:return t=e.sent,a=t.data,e.next=9,j(a);case 9:return e.next=11,i(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m.params.contractId]);var p=o&&o.basic||[],O=o&&o.more||[];return Object(c.jsxs)(J,{children:[Object(c.jsx)(x,{title:"\u5546\u5bb6\u8be6\u60c5",subTitle:Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f.a,{type:"primary",onClick:function(){b.push("/list")},children:"useHistory\u8fd4\u56de"})})}),Object(c.jsxs)(P.a,{spinning:a,children:[Object(c.jsxs)("div",{className:D.a.infoColumn,children:[Object(c.jsx)("h5",{className:D.a.infoColumnTitle,children:"\u57fa\u672c\u4fe1\u606f"}),Object(c.jsx)(H.a,{wrap:!0,className:D.a.infoItems,children:p.map((function(e){var t=e.key,a=e.label,n=e.value;return Object(c.jsxs)(F.a,{xs:"24",lg:"12",className:D.a.infoItem,children:[Object(c.jsxs)("span",{className:D.a.infoItemLabel,children:[a,"\uff1a"]}),Object(c.jsx)("span",{className:D.a.infoItemValue,children:n})]},t)}))})]}),Object(c.jsxs)("div",{className:D.a.infoColumn,children:[Object(c.jsx)("h5",{className:D.a.infoColumnTitle,children:"\u66f4\u591a\u4fe1\u606f"}),Object(c.jsx)(H.a,{wrap:!0,className:D.a.infoItems,children:O.map((function(e){var t=e.key,a=e.label,n=e.value;return Object(c.jsxs)(F.a,{xs:"24",lg:"12",className:D.a.infoItem,children:[Object(c.jsxs)("span",{className:D.a.infoItemLabel,children:[a,"\uff1a"]}),Object(c.jsx)("span",{className:D.a.infoItemValue,children:n})]},t)}))})]})]})]})}a(229);function K(e){return Object(c.jsx)(o.a,{basename:Object(j.getBasename)(),children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:_}),Object(c.jsx)(u.a,{exact:!0,path:"/list",component:L}),Object(c.jsx)(u.a,{exact:!0,path:"/list/detail/:contractId",component:E}),Object(c.jsx)(u.a,{component:function(){return Object(j.renderNotFound)()}})]})})}var U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,237)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};function A(e){var t=Object(s.useState)(!0),a=Object(n.a)(t,2),r=a[0],l=a[1];return Object(s.useEffect)((function(){l}),[]),r?Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(K,{})}):null}l.a.render(Object(c.jsx)(A,{}),Object(j.getMountNode)("root")),U()},31:function(e,t,a){e.exports={basicDetailTitle:"Detail_basicDetailTitle__3UNNJ",infoColumn:"Detail_infoColumn__aPLJ3",infoColumnTitle:"Detail_infoColumnTitle__2RKM_",infoItems:"Detail_infoItems__5K8HO",infoItem:"Detail_infoItem__3PUIq",infoItemLabel:"Detail_infoItemLabel__1BZGL",infoItemValue:"Detail_infoItemValue__2X_wW",attachLabel:"Detail_attachLabel__WuN1l",attachPics:"Detail_attachPics__2tHXA"}},51:function(e,t,a){e.exports={customTable:"List_customTable__uDJkK",stateText:"List_stateText__3ca7y",link:"List_link__2pO16",separator:"List_separator__1Q8t7",pagination:"List_pagination__2ee47"}}},[[230,1,2]]]);
//# sourceMappingURL=main.6b5b168f.chunk.js.map