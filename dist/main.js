(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var c=e.g.document;if(!t&&c&&(c.currentScript&&(t=c.currentScript.src),!t)){var d=c.getElementsByTagName("script");if(d.length)for(var i=d.length-1;i>-1&&!t;)t=d[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();((e,t)=>{let c=0,d=e;const i=()=>{c>=d.length?c=0:c<0&&(c=d.length-1);const e=(()=>{s(),(()=>{const e=document.querySelector("#scafolding");e&&e.remove()})();const e=document.createElement("div");e.classList.add("main-frame"),e.id="scafolding";const t=document.createElement("div");t.classList.add("carousel-side"),t.classList.add("left"),t.id="side-div-l";const i=document.createElement("div");i.classList.add("carousel-side"),i.classList.add("right"),i.id="side-div-r";const n=(()=>{const e=document.createElement("div");e.classList.add("img-frame");const t=document.createElement("img");return t.src=d[c],e.appendChild(t),e})(),r=(()=>{const e=document.createElement("div");e.id="display-div";const t=document.createElement("div");t.id="pick-l",t.classList.add("picker-img");const i=document.createElement("div");i.id="pick-c",i.classList.add("picker-img");const n=document.createElement("div");n.id="pick-r",n.classList.add("picker-img");let r=c-1;r<0&&(r=d.length-1);let s=c+1;s>=d.length&&(s=0);const l=document.createElement("img");l.src=d[r];const o=document.createElement("img");o.src=d[c];const a=document.createElement("img");return a.src=d[s],t.appendChild(l),i.appendChild(o),n.appendChild(a),e.appendChild(t),e.appendChild(i),e.appendChild(n),e})();return e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),e})();t.appendChild(e),r()},n=(e=1)=>()=>{c+=e,i()},r=()=>{const e=document.querySelector("#side-div-l"),t=document.querySelector("#side-div-r"),c=document.querySelector("#pick-l"),d=document.querySelector("#pick-r");e.addEventListener("click",n(-1)),t.addEventListener("click",n(1)),c.addEventListener("click",n(-1)),d.addEventListener("click",n(1))},s=()=>{const e=document.querySelector("#side-div-l"),t=document.querySelector("#side-div-r"),c=document.querySelector("#pick-l"),d=document.querySelector("#pick-r");e&&e.removeEventListener("click",n),t&&t.removeEventListener("click",n),c&&c.removeEventListener("click",n),d&&d.removeEventListener("click",n)};return{update:i}})([e.p+"a2a867e0981512208a3be8213979b4c3.jpg",e.p+"e560a319b549c57fb545d1426d7ad5e7.jpg",e.p+"4e62b1f0c3b0f829e9295ad5f291838c.jpg",e.p+"05e22056718c654b48994a12e278f9e4.jpg",e.p+"8353d7865d153eff3e16eb000444c45b.jpg"],document.querySelector("#content")).update()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQ3JDLEVBR0YsTUFBTyxDQUFFL0IsU0FBUSxFQzFJRixDQUZKLENDUEUsSUFBMEIsdUNDQTFCLElBQTBCLHVDQ0ExQixJQUEwQix1Q0NBMUIsSUFBMEIsdUNDQTFCLElBQTBCLHdDTFF6QmQsU0FBU2tCLGNBQWMsYUFHOUJKLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL3NyYy9JbWdDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vYXNzZXRzL2FsZXhhbmRlci5qcGciLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vYXNzZXRzL2FsaS5qcGciLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vYXNzZXRzL3BhdmVsLmpwZyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9hc3NldHMvdHUuanBnIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL2Fzc2V0cy95aS5qcGciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiY29uc3QgQ2Fyb3VzZWwgPSAoaW1hZ2VzLCBjb250ZW50KSA9PiB7XG4gIGxldCBpbWdJbmRleCA9IDA7XG4gIGxldCBpbWdzID0gaW1hZ2VzO1xuXG4gIGNvbnN0IHNjYWZvbGRpbmcgPSAoKSA9PiB7XG4gICAgcmVtb3ZlRXZlbnRzKCk7XG4gICAgcmVtb3ZlU2NhZm9sZGluZygpO1xuXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1mcmFtZVwiKTtcbiAgICBtYWluRGl2LmlkID0gXCJzY2Fmb2xkaW5nXCI7XG5cbiAgICBjb25zdCBzaWRlRGl2TCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZURpdkwuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLXNpZGVcIik7XG4gICAgc2lkZURpdkwuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG4gICAgc2lkZURpdkwuaWQgPSBcInNpZGUtZGl2LWxcIjtcblxuICAgIGNvbnN0IHNpZGVEaXZSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlRGl2Ui5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtc2lkZVwiKTtcbiAgICBzaWRlRGl2Ui5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG4gICAgc2lkZURpdlIuaWQgPSBcInNpZGUtZGl2LXJcIjtcblxuICAgIGNvbnN0IGltZ0ZyYW1lID0gZGlzcGxheUltZygpO1xuXG4gICAgY29uc3QgcGlja2VyID0gZGlzcGxheVBpY2tlcigpO1xuXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChzaWRlRGl2TCk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChpbWdGcmFtZSk7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChzaWRlRGl2Uik7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChwaWNrZXIpO1xuXG4gICAgcmV0dXJuIG1haW5EaXY7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2NhZm9sZGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY2Fmb2xkaW5nXCIpO1xuXG4gICAgaWYgKG1haW5EaXYpIHtcbiAgICAgIG1haW5EaXYucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlQaWNrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlzcGxheURpdi5pZCA9IFwiZGlzcGxheS1kaXZcIjtcblxuICAgIGNvbnN0IHBpY2tMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaWNrTC5pZCA9IFwicGljay1sXCI7XG4gICAgcGlja0wuY2xhc3NMaXN0LmFkZChcInBpY2tlci1pbWdcIik7XG5cbiAgICBjb25zdCBwaWNrQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGlja0MuaWQgPSBcInBpY2stY1wiO1xuICAgIHBpY2tDLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItaW1nXCIpO1xuXG4gICAgY29uc3QgcGlja1IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpY2tSLmlkID0gXCJwaWNrLXJcIjtcbiAgICBwaWNrUi5jbGFzc0xpc3QuYWRkKFwicGlja2VyLWltZ1wiKTtcblxuICAgIGxldCBpbmRleEwgPSBpbWdJbmRleCAtIDE7XG4gICAgaWYgKGluZGV4TCA8IDApIGluZGV4TCA9IGltZ3MubGVuZ3RoIC0gMTtcblxuICAgIGxldCBpbmRleFIgPSBpbWdJbmRleCArIDE7XG4gICAgaWYgKGluZGV4UiA+PSBpbWdzLmxlbmd0aCkgaW5kZXhSID0gMDtcblxuICAgIGNvbnN0IGltZ0wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZ0wuc3JjID0gaW1nc1tpbmRleExdO1xuXG4gICAgY29uc3QgaW1nQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nQy5zcmMgPSBpbWdzW2ltZ0luZGV4XTtcblxuICAgIGNvbnN0IGltZ1IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZ1Iuc3JjID0gaW1nc1tpbmRleFJdO1xuXG4gICAgcGlja0wuYXBwZW5kQ2hpbGQoaW1nTCk7XG4gICAgcGlja0MuYXBwZW5kQ2hpbGQoaW1nQyk7XG4gICAgcGlja1IuYXBwZW5kQ2hpbGQoaW1nUik7XG5cbiAgICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKHBpY2tMKTtcbiAgICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKHBpY2tDKTtcbiAgICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKHBpY2tSKTtcblxuICAgIHJldHVybiBkaXNwbGF5RGl2O1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlJbWcgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImltZy1mcmFtZVwiKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBpbWdzW2ltZ0luZGV4XTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoaW1nSW5kZXggPj0gaW1ncy5sZW5ndGgpIHtcbiAgICAgIGltZ0luZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKGltZ0luZGV4IDwgMCkge1xuICAgICAgaW1nSW5kZXggPSBpbWdzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgY29uc3QgY2Fyb3VzZWwgPSBzY2Fmb2xkaW5nKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjYXJvdXNlbCk7XG4gICAgYWRkRXZlbnRzKCk7XG4gIH07XG5cbiAgY29uc3Qgc2lkZUNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24gPSAxKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGltZ0luZGV4ICs9IGRpcmVjdGlvbjtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgYWRkRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGVMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlLWRpdi1sXCIpO1xuICAgIGNvbnN0IHNpZGVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlLWRpdi1yXCIpO1xuICAgIGNvbnN0IHBpY2tMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaWNrLWxcIik7XG4gICAgY29uc3QgcGlja1IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BpY2stclwiKTtcblxuICAgIHNpZGVMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaWRlQ2xpY2tIYW5kbGVyKC0xKSk7XG4gICAgc2lkZVIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNpZGVDbGlja0hhbmRsZXIoMSkpO1xuICAgIHBpY2tMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaWRlQ2xpY2tIYW5kbGVyKC0xKSk7XG4gICAgcGlja1IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNpZGVDbGlja0hhbmRsZXIoMSkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZS1kaXYtbFwiKTtcbiAgICBjb25zdCBzaWRlUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZS1kaXYtclwiKTtcbiAgICBjb25zdCBwaWNrTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGljay1sXCIpO1xuICAgIGNvbnN0IHBpY2tSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaWNrLXJcIik7XG5cbiAgICBpZiAoc2lkZUwpIHtcbiAgICAgIHNpZGVMLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaWRlQ2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKHNpZGVSKSB7XG4gICAgICBzaWRlUi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2lkZUNsaWNrSGFuZGxlcik7XG4gICAgfVxuICAgIGlmIChwaWNrTCkge1xuICAgICAgcGlja0wucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNpZGVDbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAocGlja1IpIHtcbiAgICAgIHBpY2tSLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaWRlQ2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiIsImltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9JbWdDYXJvdXNlbFwiO1xuaW1wb3J0IGFsZXhJbWcgZnJvbSBcIi4uL2Fzc2V0cy9hbGV4YW5kZXIuanBnXCI7XG5pbXBvcnQgYWxpSW1nIGZyb20gXCIuLi9hc3NldHMvYWxpLmpwZ1wiO1xuaW1wb3J0IHBhdmVsSW1nIGZyb20gXCIuLi9hc3NldHMvcGF2ZWwuanBnXCI7XG5pbXBvcnQgdHVJbWcgZnJvbSBcIi4uL2Fzc2V0cy90dS5qcGdcIjtcbmltcG9ydCB5aUltZyBmcm9tIFwiLi4vYXNzZXRzL3lpLmpwZ1wiO1xuXG5jb25zdCBpbWdzID0gW2FsZXhJbWcsIGFsaUltZywgcGF2ZWxJbWcsIHR1SW1nLCB5aUltZ107XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgY2Fyb3VzZWwgPSBDYXJvdXNlbChpbWdzLCBjb250ZW50KTtcblxuY2Fyb3VzZWwudXBkYXRlKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTJhODY3ZTA5ODE1MTIyMDhhM2JlODIxMzk3OWI0YzMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU1NjBhMzE5YjU0OWM1N2ZiNTQ1ZDE0MjZkN2FkNWU3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZTYyYjFmMGMzYjBmODI5ZTkyOTVhZDVmMjkxODM4Yy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDVlMjIwNTY3MThjNjU0YjQ4OTk0YTEyZTI3OGY5ZTQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgzNTNkNzg2NWQxNTNlZmYzZTE2ZWIwMDA0NDRjNDViLmpwZ1wiOyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiaSIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJpbWFnZXMiLCJjb250ZW50IiwiaW1nSW5kZXgiLCJpbWdzIiwidXBkYXRlIiwiY2Fyb3VzZWwiLCJyZW1vdmVFdmVudHMiLCJtYWluRGl2IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsInJlbW92ZVNjYWZvbGRpbmciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJzaWRlRGl2TCIsInNpZGVEaXZSIiwiaW1nRnJhbWUiLCJkaXYiLCJpbWFnZSIsImFwcGVuZENoaWxkIiwiZGlzcGxheUltZyIsInBpY2tlciIsImRpc3BsYXlEaXYiLCJwaWNrTCIsInBpY2tDIiwicGlja1IiLCJpbmRleEwiLCJpbmRleFIiLCJpbWdMIiwiaW1nQyIsImltZ1IiLCJkaXNwbGF5UGlja2VyIiwic2NhZm9sZGluZyIsImFkZEV2ZW50cyIsInNpZGVDbGlja0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJzaWRlTCIsInNpZGVSIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9