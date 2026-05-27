
const items=document.querySelectorAll('.card,.program,.dashboard,.cta-box');

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('active');
}
});
},{threshold:.1});

items.forEach(item=>{
item.classList.add('reveal');
observer.observe(item);
});
