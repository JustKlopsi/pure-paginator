(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();class d{constructor(e,t,i=1,n=10){this.table=e,this.paginationWrapper=t,this.firstSiteIndex=Number(i)-1,this.rowsPerPage=n,this.pageArray=[],this.currentSiteNumberIndex,this.startPagination()}startPagination(){this.pageArray=this.getPageArray(),this.pageArray.length!==0&&(this.paginationWrapper.classList.add("pagination-number-wrapper"),this.buildPagination(),this.setSite(this.firstSiteIndex))}getPageArray(e=null){const t=this.table.children;let i=[],n=[],r=0;for(let a=0;a<t.length;a++)e?t[a].classList.contains(e)||({siteArray:n,pageArray:i,site:r}=this.setPageArray(n,i,t[a],r)):{siteArray:n,pageArray:i,site:r}=this.setPageArray(n,i,t[a],r);return i}setPageArray(e,t,i,n){return e.push(i),e.length<this.rowsPerPage&&(t[n]=e),e.length===this.rowsPerPage&&(t[n]=e,e=[],n+=1),{siteArray:e,pageArray:t,site:n}}buildPagination(){const e=document.createElement("button");e.innerHTML="|<",this.setOpenFirstPageEvent(e),this.paginationWrapper.append(e);const t=document.createElement("button");t.innerHTML="<",this.setOpenPreviousPageEvent(t),this.paginationWrapper.append(t);const i=document.createElement("div");i.classList.add("pagination-site-number-wrapper");for(let a of this.pageArray.keys()){const s=a+1,u=document.createElement("button");u.innerHTML=s,u.setAttribute("data-array-index",a),u.classList.add(`site-button-${a}`),this.firstSiteIndex===a&&u.classList.add("active"),this.setOpenSiteEvent(u),a===this.pageArray.length-1&&this.pageArray.length>=4&&this.buildPaginationPlaceholder(i,"second-pagination-placeholder"),i.append(u),a===0&&this.pageArray.length>=4&&this.buildPaginationPlaceholder(i,"first-pagination-placeholder")}this.paginationWrapper.append(i);const n=document.createElement("button");n.innerHTML=">",this.setOpenNextPageEvent(n),this.paginationWrapper.append(n);const r=document.createElement("button");r.innerHTML=">|",this.setOpenLastPageButton(r),this.paginationWrapper.append(r)}buildPaginationPlaceholder(e,t){const i=document.createElement("div");i.innerHTML="...",i.classList.add("pagination-placeholder",t),e.append(i)}setOpenSiteEvent(e){e.addEventListener("pointerdown",()=>{this.setSite(e.getAttribute("data-array-index")),this.setButtonStatus()})}setOpenFirstPageEvent(e){e.addEventListener("pointerdown",()=>{this.currentSiteNumberIndex!==0&&(this.setSite(0),this.setButtonStatus(0))})}setOpenPreviousPageEvent(e){e.addEventListener("pointerdown",()=>{if(this.currentSiteNumberIndex===0)return;const t=this.currentSiteNumberIndex-1;this.setSite(t),this.setButtonStatus()})}setOpenNextPageEvent(e){e.addEventListener("pointerdown",()=>{if(this.currentSiteNumberIndex===this.pageArray.length-1)return;const t=this.currentSiteNumberIndex+1;this.setSite(t),this.setButtonStatus()})}setOpenLastPageButton(e){e.addEventListener("pointerdown",()=>{const t=this.pageArray.length-1;this.currentSiteNumberIndex!==t&&(this.setSite(t),this.setButtonStatus())})}setSite(e){this.currentSiteNumberIndex=Number(e);for(let t of this.pageArray.keys())this.setSiteActivity(t);this.displayPaginations()}setSiteActivity(e){this.pageArray[e].forEach(t=>{if(e===this.currentSiteNumberIndex){t.classList.remove("pagination-inactive");return}t.classList.add("pagination-inactive")})}setButtonStatus(){const e=this.paginationWrapper.querySelector(".pagination-site-number-wrapper").getElementsByTagName("button");Array.from(e).forEach(t=>{if(Number(t.getAttribute("data-array-index"))===Number(this.currentSiteNumberIndex)){t.classList.add("active");return}t.classList.remove("active")})}displayPaginations(){const e=this.pageArray.length-1,t=this.paginationWrapper.querySelector(".pagination-site-number-wrapper").getElementsByTagName("button");for(var i=0;i<t.length;i++)t[i].classList.add("pagination-button-not-displayed"),(i===0||i===e)&&t[i].classList.remove("pagination-button-not-displayed");this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-1}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-1}`).classList.remove("pagination-button-not-displayed"),this.currentSiteNumberIndex===e&&(this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-2}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-2}`).classList.remove("pagination-button-not-displayed"),this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-3}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-3}`).classList.remove("pagination-button-not-displayed")),this.currentSiteNumberIndex===e-1&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-2}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-2}`).classList.remove("pagination-button-not-displayed"),this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex}`).classList.remove("pagination-button-not-displayed"),this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+1}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+1}`).classList.remove("pagination-button-not-displayed"),this.currentSiteNumberIndex===0&&(this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+2}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+2}`).classList.remove("pagination-button-not-displayed"),this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+3}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+3}`).classList.remove("pagination-button-not-displayed")),this.currentSiteNumberIndex===1&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+2}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+2}`).classList.remove("pagination-button-not-displayed"),this.setPlaceholder()}setPlaceholder(){this.pageArray.length>=6&&this.currentSiteNumberIndex>=3&&this.paginationWrapper.querySelector(".first-pagination-placeholder")?(console.log(this.pageArray.length),this.paginationWrapper.querySelector(".first-pagination-placeholder").classList.add("active")):this.paginationWrapper.querySelector(".first-pagination-placeholder")&&this.paginationWrapper.querySelector(".first-pagination-placeholder").classList.remove("active");const e=this.currentSiteNumberIndex+1;let t;this.pageArray.length>=6&&(t=this.pageArray.length-e),t&&t>=3&&this.paginationWrapper.querySelector(".second-pagination-placeholder")?this.paginationWrapper.querySelector(".second-pagination-placeholder").classList.add("active"):this.paginationWrapper.querySelector(".second-pagination-placeholder")&&this.paginationWrapper.querySelector(".second-pagination-placeholder").classList.remove("active")}reindexPagination(e=null){this.pageArray=this.getPageArray(e),this.paginationWrapper.innerHTML="",this.pageArray.length!==0&&(this.buildPagination(),this.setSite(this.firstSiteIndex))}}function c(o){const e=Number(document.querySelector(".table-body").getAttribute("data-table-index")),t=Number(o)+Number(e);for(let i=e;i<t;i++){const n=document.createElement("td");n.innerHTML=Number(i)+1;const r=document.createElement("td");r.innerHTML=`Data ${i}`;const a=document.createElement("td");a.innerHTML=i*33;const s=document.createElement("tr");s.append(n,r,a),document.querySelector(".table-body").append(s)}document.querySelector(".table-body").setAttribute("data-table-index",t)}function p(o){const e=Number(document.querySelector(".div-body").getAttribute("data-div-index")),t=Number(o)+Number(e);for(let i=e;i<t;i++){const n=document.createElement("div");n.innerHTML=Number(i)+1;const r=document.createElement("div");r.innerHTML=`Data ${i}`;const a=document.createElement("div");a.innerHTML=i*33;const s=document.createElement("div");s.classList.add("div-row"),s.append(n,r,a),document.querySelector(".div-body").append(s)}document.querySelector(".div-body").setAttribute("data-div-index",t)}document.addEventListener("DOMContentLoaded",()=>{c(40);let o=new d(document.querySelector(".table-body"),document.querySelector(".table-pagination-wrapper"),1,10);document.querySelector(".add-ten-table-rows-button").addEventListener("click",()=>{c(10),o.reindexPagination()}),p(40);let e=new d(document.querySelector(".div-body"),document.querySelector(".div-pagination-wrapper"),1,10);document.querySelector(".add-ten-div-rows-button").addEventListener("click",()=>{p(10),e.reindexPagination()})});
