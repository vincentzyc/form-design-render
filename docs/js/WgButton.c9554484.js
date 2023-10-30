"use strict";(self["webpackChunkform_design_render"]=self["webpackChunkform_design_render"]||[]).push([[290],{7881:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(311),i=a(3066),o=a(9012),s=a(2438),l=a(1068);const r={phone:e=>e?!!/^1[0-9]{10}$/.test(e)||"手机号码不正确":"请输入手机号",verifyCode:e=>e?6===e.length||"验证码错误":"请输入验证码",name:e=>e?!!/^[\u4e00-\u9fa5]{2,20}$/.test(e)||(e.length<2||e.length>20?"姓名长度不能小于2或超过20":"姓名必须为汉字"):"请输入姓名",mail:e=>{if(!e)return"请输入邮箱";const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!t.test(e)||"邮箱格式不正确"},shootPlace:e=>0!==e.length||"请选择旅拍城市",sex:e=>!!e||"请选择性别",loanTimeList:e=>!!e||"请选择贷款时间",educationLevel:e=>!!e||"请选择教育程度",profession:e=>!!e||"请选择职业身份",socialSecurity:e=>!!e||"请选择是否有社保",age:e=>!!e||"请选择年龄",amount:e=>!!e||"请选择金额",birthday:e=>!!e||"请选择生日",idCardValidity:e=>!!e||"请选择身份证有效期",idCard:e=>e?!!/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(e)||"请输入正确的身份证号码":"请输入身份证号",city:e=>!!e||"请选择城市",agreement:e=>!!e||"请勾选同意相关协议",randomCode:(e,t)=>e?t.value.toUpperCase()===t.codeValue.toUpperCase()||(t.getCode(),"验证码错误"):"请输入验证码"};function c(e){return"boolean"!==typeof e.isRequired&&(e.isRequired=!0),e.isRequired&&""===e.value?e.placeholder||"请完善信息":!r[e.apiKey]||("phone"===e.apiKey&&!0===r[e.apiKey](e.value)?!e.showCode||r[e.codeKey](e.codeValue):!1===e.isRequired&&(""===e.value||!1===e.value)||r[e.apiKey](e.value,e))}function d(e,t){const a=u(e,t);if(!0!==a&&!1!==a)return(0,s.CF)(a);m(e)}function u(e,t,a=!0){for(const n of t){Object.prototype.hasOwnProperty.call(e,n.apiKey)&&(n.value=e[n.apiKey]),Object.prototype.hasOwnProperty.call(e,n.codeKey)&&(n.codeValue=e[n.codeKey]);const t=c(n);if(!0!==t){if(a){const e=document.getElementById(n.key);e&&(0,i.zT)(e)}return t}}return!0}function m(e){console.log("提交数据",e),(0,o.W)("正在提交..."),setTimeout((()=>{(0,o.$)(),(0,l.vC)({message:"提交成功"})}),2500)}var p=a(667),y=a(8027),f=(0,n.defineComponent)({props:{item:{type:Object,required:!0}},setup(e){const t=(0,y.oR)(),a=(0,n.computed)((()=>t.state.formData)),i=(0,n.computed)((()=>t.state.wgForms)),o=()=>e.item.animation?(0,p.R)({...e.item.style,...e.item.animation}):(0,p.R)(e.item.style),s=()=>e.item.animation?.className?{...e.item.animation,animationName:e.item.animation.className}:{display:"none"},l=()=>e.item.animation?`flex flex-center ${e.item.animation.className}`:"flex flex-center",r=()=>{switch(e.item.btnType){case"submit":d(a.value,i.value);break;default:break}},c=()=>e.item.style.isImgBtn?(0,n.createVNode)("img",{src:e.item.style.value,alt:"图片按钮",width:"100%",onClick:r},null):(0,n.createVNode)("button",{class:"wg-button",style:(0,p.R)(e.item.style.btnStyle),onClick:r},[e.item.btnText]);return()=>(0,n.createVNode)("div",{class:l(),style:o()},[(0,n.createVNode)("span",{style:s(),class:"animte-el"},null),c()])}})}}]);