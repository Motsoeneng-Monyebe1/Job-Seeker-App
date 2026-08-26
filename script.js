let jobs = [
{
title: "Administrative Clerk (Admin Clerk)",
company: "Department of Water and Sanitation",
location: "Bloemfontein",
salary: "R237 453 per year",
type: "Full-time | Admin",
ref: "Ref No: 270826/06 | Grade 12 + Admin | DWS Bloem",
link: "https://www.dws.gov.za/"
},
{
title: "Truck Driver Learnership Programme",
company: "Unitrans",
location: "KZN, Cape Town, Gauteng - Nationwide",
salary: "Learnership Stipend",
type: "Learnership | Logistics",
ref: "Grade 12 | No Experience | Unitrans 2026",
link: "https://www.unitransafrica.com/"
},
{
title: "Teller - Bethlehem",
company: "Fidelity Services Group",
location: "Bethlehem, Free State",
salary: "Permanent",
type: "Permanent | Operations",
ref: "Clear Criminal Record | Grade 12 | 2 Years Cashier | Fidelity",
link: "https://fidelityservicesgroup.simplify.hr/"
},
{
title: "Learner Programme / Learnership 2026",
company: "OVK",
location: "Fouriesburg, Free State",
salary: "Contract - Learnership",
type: "Learnership | Handel Noord",
ref: "Vrystaat | Fouriesburg | Kontrak | Grade 12 | OVK",
link: "https://www.ovk.co.za/"
},
{
title: "Systems Controller - Qpro Feeds",
company: "VKB Group / Qpro Feeds",
location: "Bethlehem, Free State",
salary: "Market Related",
type: "Permanent | IT",
ref: "VKB Bethlehem | IT Degree | Systems",
link: "https://www.vkb.co.za/"
},
{
title: "General Worker - VKB Retail",
company: "VKB Group",
location: "Villiers, Free State",
salary: "Entry Level",
type: "Permanent | Grade 12",
ref: "VKB Villiers | General Worker",
link: "https://www.vkb.co.za/"
},
{
title: "Cashier - VKB Retail",
company: "VKB Group",
location: "Frankfort, Free State",
salary: "Retail",
type: "Permanent | Retail",
ref: "VKB Frankfort | Cashier",
link: "https://www.vkb.co.za/"
},
{
title: "Admin Clerk",
company: "OVK Group",
location: "Reitz, Free State",
salary: "Admin - R9,500",
type: "Permanent | Admin",
ref: "OVK Reitz | Admin Clerk",
link: "https://www.ovk.co.za/"
},
{
title: "Shop Assistant",
company: "OVK Retail",
location: "Memel, Free State",
salary: "Retail",
type: "Permanent | Retail",
ref: "OVK Memel | Shop Assistant",
link: "https://www.ovk.co.za/"
},
{
title: "Forklift Operator",
company: "VKB Group",
location: "Bethlehem, Free State",
salary: "R12,000",
type: "Permanent | Operator",
ref: "VKB | Forklift License",
link: "https://www.vkb.co.za/"
},
{
title: "Cleaner",
company: "Fidelity Services",
location: "Harrismith, Free State",
salary: "Entry Level - R7,000",
type: "Permanent | Grade 10",
ref: "Fidelity | Cleaner | Harrismith",
link: "https://fidelityservicesgroup.simplify.hr/"
},
{
title: "Security Guard",
company: "Fidelity ADT",
location: "Bethlehem, Free State",
salary: "PSIRA Grade C",
type: "Contract | Security",
ref: "Fidelity ADT | PSIRA | Bethlehem",
link: "https://fidelityservicesgroup.simplify.hr/"
},
{
title: "Driver - Code 10 + PDP",
company: "VKB Group",
location: "Free State",
salary: "Driving - R15,000",
type: "Permanent | Driver",
ref: "VKB | Code 10 | PDP",
link: "https://www.vkb.co.za/"
}, 
    {
    title: "Old job...",
    company: "Old company..."
  },
  {
    title: "Leerder Program / Learnership Programme 2027",
    company: "OOS VRYSTAAT KAAP BEDRYF BPK",
    location: "Paul Roux, Free State",
    province: "Free State",
    town: "Paul Roux",
    type: "Learnership - Handel Noord",
    desc: "Uitstekende geleentheid vir Matrieks!",
    link: "https://www.ovk.co.za/careers",
    verified: "✅ Verified - OVK Official"
  }, 
  {
      title: "Apprenticeship Opportunity X40",
      company: "AFGRI Equipment - John Deere",
      location: "South Africa - Bethlehem, Harrismith, Frankfort & 37 more",
      province: "Free State",
      town: "Bethlehem",
      type: "Apprenticeship - 3 Years | Part-time",
      desc: "AFGRI Equipment has proudly held the John Deere Agency since 1962. 40x Tractor/Earthmoving Apprentices. Matric with English & Maths (NOT Maths Lit) + Driver's Licence required. 3-year training with AgriSETA/MerSETA.",
      link: "https://afgri.erecruit.co/candidateapp/Jobs/Browse",
      ref: "AO-2345 | Closing 30 Sept 2026",
      verified: "✅ Verified - No Scam"
    },
{
  "title": "Maintenance Operator Mechanical",
  "company": "Sasol",
  "location": "Sasolburg, FS",
  "posting_date": "2026-08-26",
  "employment_type": "On-site, Full-time",
  "requirements": "Grade 12/N3 with Maths, Science, English | NQF 2 Mechanical (advantage) | C1/Code 10 licence | 1-2 years mechanical maintenance",
  "description": "To support with maintenance of mechanical / electro-mechanical systems, assist artisans, inspections, housekeeping and safety.",
  "source": "Sasol Official Careers",
  "apply_url": "https://www.sasol.com/careers - search Maintenance Operator Mechanical Sasolburg"
] ;
 function showJobs(){
let container=document.getElementById("jobs") || document.getElementById("jobs-container");
if(!container){
container=document.createElement("div");
container.id="jobs";
container.style.padding="10px";
document.body.appendChild(container);
}
let html = `<h2 style="font-family:sans-serif;text-align:center;color:#1b5e20;">🔥 ${jobs.length} JOBS LIVE - Job Seeker SA 🔥</h2>`;
jobs.forEach(job=>{
html += `
<div style="border:2px solid #2e7d32;padding:16px;margin:12px 0;border-radius:14px;background:white;font-family:sans-serif;">
<h3 style="margin:0 0 8px 0;color:#1b5e20;">${job.title}</h3>
<p style="margin:4px 0;"><b>${job.company}</b> - ${job.location}</p>
<p style="margin:4px 0;color:#444;">💰 ${job.salary} | 📄 ${job.type}</p>
<p style="font-size:13px;color:#666;margin:6px 0;">${job.ref}</p>
<a href="${job.link}" target="_blank" rel="noopener" style="display:inline-block;background:#2e7d32;color:white;padding:12px 22px;border-radius:10px;text-decoration:none;font-weight:bold;margin-top:10px;cursor:pointer;position:relative;z-index:10;">✅ APPLY NOW</a>
</div>`;
});
container.innerHTML=html;
}
document.addEventListener("DOMContentLoaded", showJobs);
showJobs();
setTimeout(showJobs, 800);
