(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2028d06f"],{"1bdf":function(e,a,n){},"3cda":function(e,a,n){"use strict";n.r(a);var l=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("div",{staticClass:"custom-tree-container"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"block"},[n("p",[e._v("使用 render-content")]),n("el-tree",{attrs:{data:e.data4,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":e.renderContent}})],1)]),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"block",attrs:{span:12}},[n("p",[e._v("使用 scoped slot")]),n("el-tree",{attrs:{data:e.data5,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(a){var l=a.node,t=a.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[e._v(e._s(l.label))]),n("span",[n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.append(t)}}},[e._v("Append")]),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.remove(l,t)}}},[e._v("Delete")])],1)])}}])})],1)])],1),n("el-row",[n("h4",{staticStyle:{padding:"10px"}},[e._v("可拖拽节点")]),n("el-tree",{attrs:{data:e.data6,"node-key":"id","default-expand-all":"",draggable:"","allow-drop":e.allowDrop,"allow-drag":e.allowDrag},on:{"node-drag-start":e.handleDragStart,"node-drag-enter":e.handleDragEnter,"node-drag-leave":e.handleDragLeave,"node-drag-over":e.handleDragOver,"node-drag-end":e.handleDragEnd,"node-drop":e.handleDrop}})],1)],1)])},t=[],d=(n("5cb4"),n("e204"),1e3),r={data:function(){var e=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}];return{data4:JSON.parse(JSON.stringify(e)),data5:JSON.parse(JSON.stringify(e)),data6:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2",children:[{id:11,label:"三级 3-2-1"},{id:12,label:"三级 3-2-2"},{id:13,label:"三级 3-2-3"}]}]}]}},methods:{append:function(e){var a={id:d++,label:"testtest",children:[]};e.children||this.$set(e,"children",[]),e.children.push(a)},remove:function(e,a){var n=e.parent,l=n.data.children||n.data,t=l.findIndex((function(e){return e.id===a.id}));l.splice(t,1)},renderContent:function(e,a){var n=this,l=a.node,t=a.data;a.store;return e("span",{class:"custom-tree-node"},[e("span",[l.label]),e("span",[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return n.append(t)}}},["Append"]),e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return n.remove(l,t)}}},["Delete"])])])},handleDragStart:function(e,a){console.log("drag start",e)},handleDragEnter:function(e,a,n){console.log("tree drag enter: ",a.label)},handleDragLeave:function(e,a,n){console.log("tree drag leave: ",a.label)},handleDragOver:function(e,a,n){console.log("tree drag over: ",a.label)},handleDragEnd:function(e,a,n,l){console.log("tree drag end: ",a&&a.label,n)},handleDrop:function(e,a,n,l){console.log("tree drop: ",a.label,n)},allowDrop:function(e,a,n){return"二级 3-1"!==a.data.label||"inner"!==n},allowDrag:function(e){return-1===e.data.label.indexOf("三级 3-2-2")}}},o=r,i=(n("5896"),n("e90a")),c=Object(i["a"])(o,l,t,!1,null,null,null);a["default"]=c.exports},5896:function(e,a,n){"use strict";var l=n("1bdf"),t=n.n(l);t.a}}]);