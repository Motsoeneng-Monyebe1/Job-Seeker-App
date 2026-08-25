const jobs=[
{
title: "Administrative Clerk (WARMS)",
company: "Dept of Water & Sanitation",
location: "Bloemfontein",
salary: "R237 453 per year",
type: "Full-time",
closing: "28 Aug 2026",
link: "https://www.dws.gov.za/vacancies/",
ref: "VOCMA 44"
}
,
{
title: "Truck Driver Learnership 2026",
company: "Unitrans",
location: "KZN, Cape Town, Gauteng",
salary: "Learnership Stipend",
type: "Learnership",
closing: "28 Aug 2026",
link:  "https://www.unitransafrica.com/careers/" 
ref: "Grade 12 Required"
}
] ;
function showJobs(){
let container=document.getElementById("jobs");
if(!container){
container=document.createElement("div");
container.id="jobs";
document.body.appendChild(container);
}
container.innerHTML="";
jobs.forEach(job=>{
container.innerHTML+=`<div style="border:1px solid #ddd;padding:15px;margin:10px;border-radius:10px;background:white"><h3>${job.title}</h3><p>${job.company} | ${job.location}</p><p>${job.salary} | ${job.type} | Closing: ${job.closing}</p><p>Ref: ${job.ref}</p><a href="${job.link}" target="_blank" style="background:#1877F2;color:white;padding:8px 15px;border-radius:20px;text-decoration:none;display:inline-block">Apply Here</a></div>`;
});
}
showJobs();
