let jobs = [
{
title: "Administrative Clerk (WARMS)",
company: "Department of Water & Sanitation",
location: "Bloemfontein",
salary: "R237 453 per year",
type: "Admin",
ref: "Ref No: 270826/06 | Closing: 28 Aug 2026 | Grade 12 + Computer Literacy",
link: "https://www.dws.gov.za/vacancies/"
},
{
title: "Truck Driver Learnership 2026",
company: "Unitrans",
location: "KZN, Cape Town, Gauteng",
salary: "Learnership",
type: "Logistics",
ref: "Closing: 28 Aug 2026 | Grade 12 | No Experience Needed",
link: "https://www.unitransafrica.com/careers/"
},
{
title: "Teller - Bethlehem",
company: "Fidelity Services Group",
location: "Bethlehem, Free State",
salary: "Permanent",
type: "Operations",
ref: "Open Until Filled | Clear Criminal Record | Grade 12 + 2 Years Cashier",
link: "https://fidelityservicesgroup.simplify.hr/"
},
{
title: "Leerdaar Program / Learnership Programme 2027 - Ficksburg",
company: "OVK (OOS Vrystaat Kaap Bedryf)",
location: "Ficksburg, Free State",
salary: "Learnership",
type: "OVK Handel | Contract",
ref: "Closing: 30 Sep 2026 | Uitstekende Loopbaan vir Matrieks! | Ficksburg",
link: "https://www.ovk.co.za/"
},
{
title: "Leerdaar Program / Learnership Programme 2027 - Steynsrus",
company: "OVK (OOS Vrystaat Kaap Bedryf)",
location: "Steynsrus, Free State",
salary: "Learnership",
type: "OVK Handel | Contract",
ref: "Closing: 30 Sep 2026 | Uitstekende Loopbaan vir Matrieks! | Steynsrus",
link: "https://www.ovk.co.za/"
},
{
title: "Junior Branch Marketer - VKB Retail, Bethlehem",
company: "VKB Group",
location: "Bethlehem, Free State",
salary: "Permanent",
type: "Retail Marketing - URGENT Closing 27 Aug 2026",
ref: "Posted 21 Aug 2026 | Closing TOMORROW!",
link: "https://vkb.simplify.hr/"
}
];

function showJobs(){
let container=document.getElementById("jobs");
if(!container){
container=document.createElement("div");
container.id="jobs";
document.body.appendChild(container);
}
container.innerHTML="";
jobs.forEach(job=>{
container.innerHTML+=`<div style="border:1px solid #ddd; border-radius:12px; padding:15px; margin:15px; background:white;">
<h3 style="margin:0;">${job.title}</h3>
<p><b>${job.company}</b> - ${job.location}</p>
<p>${job.salary} | ${job.type}</p>
<p style="font-size:13px; color:#555;">${job.ref}</p>
<a href="${job.link}" target="_blank" style="display:inline-block; background:#0b5fff; color:white; padding:10px 18px; border-radius:8px; text-decoration:none; font-weight:bold;">Apply Now</a>
</div>`;
});
}
showJobs();
