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
];

function showJobs(){
let container=document.getElementById("jobs")||document.getElementById("jobList")||document.getElementById("job-list")||document.querySelector(".jobs");
if(!container){
container=document.createElement("div");
container.id="jobs";
document.body.appendChild(container);
}
container.innerHTML="";
jobs.forEach(job=>{
container.innerHTML+=`<div style="border:1px solid #ddd;padding:15px;margin:12px;border-radius:10px;background:white;box-shadow:0 2px 5px rgba(0,0,0,0.1)"><h3 style="margin:0 0 8px">${job.title}</h3><p><b>${job.company}</b> | ${job.location}</p><p>${job.salary} | ${job.type}</p><p>Ref: ${job.ref} | Closing: ${job.closing}</p><a href="${job.link}" target="_blank" style="background:#2d7ff9;color:white;padding:8px 15px;border-radius:5px;text-decoration:none;display:inline-block;margin-top:5px">Apply Here</a></div>`;
});
}
showJobs();
