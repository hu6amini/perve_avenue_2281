(function(){function e(i){if(!i||i.nodeType!==1||i.closest("#pa_slideshow")||i.hasAttribute("data-src")||(i.getAttribute("lz-src")&&i.getAttribute("decoding")==="async"))return;if(!i.getAttribute("lz-src")){i.setAttribute("lz-src",i.src);i.removeAttribute("src")}if(i.tagName==="IMG"&&!i.getAttribute("decoding"))i.setAttribute("decoding","async");if(i.tagName===" "&&!i.hasAttribute("loading"))i.setAttribute("loading","lazy");i.classList.add("lz")}function t(o){requestAnimationFrame(()=>{o.forEach(n=>{n.addedNodes.forEach(i=>{if(i.nodeType===1&&(i.tagName==="IMG"||i.tagName===" "))e(i)})})})}var r=new MutationObserver(t);r.observe(document.documentElement,{childList:!0,subtree:!0});document.addEventListener("DOMContentLoaded",function(){requestIdleCallback(()=>{document.querySelectorAll("img:not(.lazyload), ").forEach(e)})})})();
