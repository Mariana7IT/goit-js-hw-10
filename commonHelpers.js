import"./assets/index-3cfb730f.js";import{f as l,i as m}from"./assets/vendor-77e16229.js";let s;function o(t){return String(t).padStart(2,"0")}function f(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:i,seconds:u}}l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<new Date?(m.warning({title:"Warning",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):(s=e,document.querySelector("[data-start]").disabled=!1)}});document.querySelector("[data-start]").addEventListener("click",()=>{const t=document.querySelectorAll(".value"),e=setInterval(()=>{const a=s-new Date;if(a<=0){clearInterval(e),t.forEach(r=>r.textContent="00");return}const n=f(a);t[0].textContent=o(n.days),t[1].textContent=o(n.hours),t[2].textContent=o(n.minutes),t[3].textContent=o(n.seconds)},1e3)});
//# sourceMappingURL=commonHelpers.js.map
