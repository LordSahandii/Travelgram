(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{3516:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notbook",function(){return r(3164)}])},3164:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var n=r(5893),o=r(7294),i=r(8527),a=r(5193),s=r(9876),u=r(8609),l=r(4612);let c=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e};var d=function(t){var e=t.addTodo,r=(0,u.pm)(),s=(0,o.useState)(""),d=s[0],f=s[1];return(0,n.jsx)("form",{onSubmit:function(t){!function(t){if(t.preventDefault(),d){var n={id:c(),body:d};localStorage.setItem("notes",JSON.stringify(n)),e(n),f("")}else r({title:"No content",status:"error",duration:2e3,isClosable:!0})}(t)},children:(0,n.jsxs)(i.Ug,{mt:"8",children:[(0,n.jsx)(l.II,{variant:"filled",placeholder:"Type your needs",value:d,onChange:function(t){return f(t.target.value)}}),(0,n.jsx)(a.zx,{colorScheme:"teal",px:"8",type:"submit",children:"Add"})]})})},f=r(1163),p=r(9583);var g=function(t){var e=t.todos,r=t.deleteTodo;return e.length?(0,n.jsx)(i.gC,{divider:(0,n.jsx)(i.cX,{}),borderColor:"gray.100",borderWidth:"2px",p:"4",borderRadius:"lg",w:"100%",maxW:{base:"90vw",sm:"80vw",lg:"50vw",xl:"40vw"},alignItems:"stretch",children:e.map((function(t){return(0,n.jsxs)(i.Ug,{children:[(0,n.jsx)(i.xv,{children:t.body}),(0,n.jsx)(i.LZ,{}),(0,n.jsx)(a.hU,{icon:(0,n.jsx)(p.Xm5,{}),isRound:"true",onClick:function(){return r(t.id)}})]},t.id)}))}):(0,n.jsx)(i.Ct,{colorScheme:"green",p:"4",m:"4",borderRadius:"lg",children:"Your list is empty!"})};function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function x(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(){var t=(0,f.useRouter)(),e=(0,o.useState)(""),r=e[0],u=e[1];return(0,o.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(r))}),[r]),(0,n.jsx)(i.W2,{maxW:"container.xxl",p:0,children:(0,n.jsx)(i.kC,{py:10,children:(0,n.jsxs)(i.gC,{w:"full",h:"full",p:10,spacing:6,children:[(0,n.jsx)(i.gC,{spacing:3,alignItems:"flex-start",children:(0,n.jsx)(a.zx,{as:s.Rp,onClick:function(){t.push("/")},variant:"ghost"})}),(0,n.jsx)(i.gC,{spacing:3,alignItems:"center",justifyContent:"center",children:(0,n.jsx)(i.X6,{children:"Notebook"})}),(0,n.jsx)(g,{todos:r,deleteTodo:function(t){var e=r.filter((function(e){return e.id!==t}));u(e)}}),(0,n.jsx)(d,{addTodo:function(t){u(x(r).concat([t]))}})]})})})}}},function(t){t.O(0,[774,888,179],(function(){return e=3516,t(t.s=e);var e}));var e=t.O();_N_E=e}]);