(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".pagination-inactive{display:none}.pagination-number-wrapper,.pagination-site-number-wrapper{display:flex}.pagination-button-not-displayed{display:none}.pagination-placeholder{display:none;justify-content:center}.pagination-placeholder.active{display:flex}.pagination-placeholder{-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;user-select:none}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
(function(s,p){typeof exports=="object"&&typeof module<"u"?p(exports):typeof define=="function"&&define.amd?define(["exports"],p):(s=typeof globalThis<"u"?globalThis:s||self,p(s["pure-paginator"]={}))})(this,function(s){"use strict";const p="";class u{constructor(t,e,i=1,n=10){this.table=t,this.paginationWrapper=e,this.firstSiteIndex=Number(i)-1,this.rowsPerPage=n,this.pageArray=[],this.currentSiteNumberIndex,this.startPagination()}startPagination(){this.pageArray=this.getPageArray(),this.pageArray.length!==0&&(this.paginationWrapper.classList.add("pagination-number-wrapper"),this.buildPagination(),this.setSite(this.firstSiteIndex))}getPageArray(t=null){const e=this.table.children;let i=[],n=[],a=0;for(let r=0;r<e.length;r++)t?e[r].classList.contains(t)||({siteArray:n,pageArray:i,site:a}=this.setPageArray(n,i,e[r],a)):{siteArray:n,pageArray:i,site:a}=this.setPageArray(n,i,e[r],a);return i}setPageArray(t,e,i,n){return t.push(i),t.length<this.rowsPerPage&&(e[n]=t),t.length===this.rowsPerPage&&(e[n]=t,t=[],n+=1),{siteArray:t,pageArray:e,site:n}}buildPagination(){const t=document.createElement("button");t.innerHTML="|<",this.setOpenFirstPageEvent(t),this.paginationWrapper.append(t);const e=document.createElement("button");e.innerHTML="<",this.setOpenPreviousPageEvent(e),this.paginationWrapper.append(e);const i=document.createElement("div");i.classList.add("pagination-site-number-wrapper");for(let r of this.pageArray.keys()){const c=r+1,o=document.createElement("button");o.innerHTML=c,o.setAttribute("data-array-index",r),o.classList.add(`site-button-${r}`),this.firstSiteIndex===r&&o.classList.add("active"),this.setOpenSiteEvent(o),r===this.pageArray.length-1&&this.pageArray.length>=4&&this.buildPaginationPlaceholder(i,"second-pagination-placeholder"),i.append(o),r===0&&this.pageArray.length>=4&&this.buildPaginationPlaceholder(i,"first-pagination-placeholder")}this.paginationWrapper.append(i);const n=document.createElement("button");n.innerHTML=">",this.setOpenNextPageEvent(n),this.paginationWrapper.append(n);const a=document.createElement("button");a.innerHTML=">|",this.setOpenLastPageButton(a),this.paginationWrapper.append(a)}buildPaginationPlaceholder(t,e){const i=document.createElement("div");i.innerHTML="...",i.classList.add("pagination-placeholder",e),t.append(i)}setOpenSiteEvent(t){t.addEventListener("pointerdown",()=>{this.setSite(t.getAttribute("data-array-index")),this.setButtonStatus()})}setOpenFirstPageEvent(t){t.addEventListener("pointerdown",()=>{this.currentSiteNumberIndex!==0&&(this.setSite(0),this.setButtonStatus(0))})}setOpenPreviousPageEvent(t){t.addEventListener("pointerdown",()=>{if(this.currentSiteNumberIndex===0)return;const e=this.currentSiteNumberIndex-1;this.setSite(e),this.setButtonStatus()})}setOpenNextPageEvent(t){t.addEventListener("pointerdown",()=>{if(this.currentSiteNumberIndex===this.pageArray.length-1)return;const e=this.currentSiteNumberIndex+1;this.setSite(e),this.setButtonStatus()})}setOpenLastPageButton(t){t.addEventListener("pointerdown",()=>{const e=this.pageArray.length-1;this.currentSiteNumberIndex!==e&&(this.setSite(e),this.setButtonStatus())})}setSite(t){this.currentSiteNumberIndex=Number(t);for(let e of this.pageArray.keys())this.setSiteActivity(e);this.displayPaginations()}setSiteActivity(t){this.pageArray[t].forEach(e=>{if(t===this.currentSiteNumberIndex){e.classList.remove("pagination-inactive");return}e.classList.add("pagination-inactive")})}setButtonStatus(){const t=this.paginationWrapper.querySelector(".pagination-site-number-wrapper").getElementsByTagName("button");Array.from(t).forEach(e=>{if(Number(e.getAttribute("data-array-index"))===Number(this.currentSiteNumberIndex)){e.classList.add("active");return}e.classList.remove("active")})}displayPaginations(){const t=this.pageArray.length-1,e=this.paginationWrapper.querySelector(".pagination-site-number-wrapper").getElementsByTagName("button");for(var i=0;i<e.length;i++)e[i].classList.add("pagination-button-not-displayed"),(i===0||i===t)&&e[i].classList.remove("pagination-button-not-displayed");this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-1}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-1}`).classList.remove("pagination-button-not-displayed"),this.currentSiteNumberIndex===t&&(this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-2}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-2}`).classList.remove("pagination-button-not-displayed"),this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-3}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-3}`).classList.remove("pagination-button-not-displayed")),this.currentSiteNumberIndex===t-1&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-2}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex-2}`).classList.remove("pagination-button-not-displayed"),this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex}`).classList.remove("pagination-button-not-displayed"),this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+1}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+1}`).classList.remove("pagination-button-not-displayed"),this.currentSiteNumberIndex===0&&(this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+2}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+2}`).classList.remove("pagination-button-not-displayed"),this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+3}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+3}`).classList.remove("pagination-button-not-displayed")),this.currentSiteNumberIndex===1&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+2}`)&&this.paginationWrapper.querySelector(`.site-button-${this.currentSiteNumberIndex+2}`).classList.remove("pagination-button-not-displayed"),this.setPlaceholder()}setPlaceholder(){this.pageArray.length>=6&&this.currentSiteNumberIndex>=3&&this.paginationWrapper.querySelector(".first-pagination-placeholder")?this.paginationWrapper.querySelector(".first-pagination-placeholder").classList.add("active"):this.paginationWrapper.querySelector(".first-pagination-placeholder")&&this.paginationWrapper.querySelector(".first-pagination-placeholder").classList.remove("active");const t=this.currentSiteNumberIndex+1;let e;this.pageArray.length>=6&&(e=this.pageArray.length-t),e&&e>=3&&this.paginationWrapper.querySelector(".second-pagination-placeholder")?this.paginationWrapper.querySelector(".second-pagination-placeholder").classList.add("active"):this.paginationWrapper.querySelector(".second-pagination-placeholder")&&this.paginationWrapper.querySelector(".second-pagination-placeholder").classList.remove("active")}reindexPagination(t=null){this.pageArray=this.getPageArray(t),this.paginationWrapper.innerHTML="",this.pageArray.length!==0&&(this.buildPagination(),this.setSite(this.firstSiteIndex))}}s.Pagination=u,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
