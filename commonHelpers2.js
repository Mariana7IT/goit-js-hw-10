import"./assets/index-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";function c(e,o){return new Promise((r,s)=>{setTimeout(()=>{o==="fulfilled"?r(`✅ Fulfilled promise in ${e}ms`):s(`❌ Rejected promise in ${e}ms`)},e)})}document.querySelector(".form").addEventListener("submit",e=>{e.preventDefault();const o=new FormData(e.target),r=Number(o.get("delay")),s=o.get("state");c(r,s).then(t=>{i.success({title:"Success",message:t}),console.log(t)}).catch(t=>{i.error({title:"Error",message:t}),console.log(t)})});
//# sourceMappingURL=commonHelpers2.js.map
