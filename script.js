const menu=document.querySelector(".menu-btn"),nav=document.querySelector(".nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const progress=document.querySelector(".progress");
addEventListener("scroll",()=>{const h=document.documentElement;progress.style.width=((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)+"%"},{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const links=[...document.querySelectorAll(".nav a")];
const sections=links.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);
const activeObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.remove("active"));const a=links.find(x=>x.getAttribute("href")==="#"+e.target.id);a?.classList.add("active")}}),{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>activeObs.observe(s));
