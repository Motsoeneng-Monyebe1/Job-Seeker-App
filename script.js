const jobs=[
{title:"Cashier",company:"Shoprite",location:"Bloemfontein",type:"Full-time"},
{title:"Retail Assistant",company:"Pick n Pay",location:"Bethlehem",type:"Part-time"},
{title:"Driver",company:"Boxer",location:"Harrismith",type:"Full-time"},
{title:"Cleaner",company:"Clicks",location:"QwaQwa",type:"Contract"},
{title:"Waiter",company:"Nando's",location:"Bloemfontein",type:"Part-time"}
];
const list=document.getElementById("jobs");
const search=document.getElementById("search");
function show(data){
list.innerHTML="";
data.forEach(j=>{
list.innerHTML+=`<div class="job"><h3>${j.title}</h3><p>🏢 ${j.company}</p><p>📍 ${j.location}</p><p>⏰ ${j.type}</p><button>Apply</button></div>`;
});
}
show(jobs);
search.addEventListener("input",()=>{
let v=search.value.toLowerCase();
show(jobs.filter(j=>j.title.toLowerCase().includes(v)||j.company.toLowerCase().includes(v)));
});
