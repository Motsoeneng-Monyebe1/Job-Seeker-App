const jobs = [
  {
    id: 10,
    title: "Fire Fighter (50 Posts) - URGENT!",
    company: "NCC Group Wildfires",
    location: "Various Bases - Western Cape",
    type: "Fixed Term",
    salary: "R13,000 per month",
    closing: "26 August 2026 - TODAY!",
    ref: "Ref: BCS/Fire/02/2026 | Oct 2026-Sep 2027",
    badge: "🔥 50 JOBS - CLOSING TODAY",
    description: "NCC Group is hiring 50 Fire Fighters for wildland fire-fighting. Must pass 4.8km pack test with 20kg in 45min. Shift + standby.",
    link: "mailto:recruitment@ncc-group.co.za?subject=BCS/Fire/02/2026",
    urgent: true
  },
  {id:9,title:"Systems Controller - Qpro Feeds",company:"VKB Group / Qpro Feeds",location:"Bethlehem, Free State",type:"Permanent",salary:"Market Related",closing:"28 August 2026",ref:"VKB Bethlehem",badge:"IT / SYSTEMS",description:"Systems Controller for Qpro Feeds in Bethlehem.",link:"#"},
  {id:8,title:"General Worker - VKB Retail",company:"VKB Group",location:"Villiers, Free State",type:"Permanent",salary:"Entry Level",closing:"29 August 2026",ref:"VKB Villiers",badge:"GRADE 12",description:"General Worker at VKB Retail Villiers.",link:"#"},
  {id:7,title:"Cashier - VKB Retail",company:"VKB Group",location:"Frankfort, Free State",type:"Permanent",salary:"Retail",closing:"30 August 2026",ref:"VKB",badge:"RETAIL",description:"Cashier position at VKB Retail.",link:"#"},
  {id:6,title:"Admin Clerk",company:"VKB Group",location:"Reitz, Free State",type:"Permanent",salary:"Admin",closing:"30 August 2026",ref:"VKB",badge:"ADMIN",description:"Admin Clerk support.",link:"#"},
  {id:5,title:"Shop Assistant",company:"VKB Group",location:"Memel, Free State",type:"Permanent",salary:"Retail",closing:"31 August 2026",ref:"VKB",badge:"RETAIL",description:"Shop Assistant role.",link:"#"},
  {id:4,title:"Forklift Operator",company:"VKB Group",location:"Bethlehem",type:"Permanent",salary:"Skilled",closing:"31 August 2026",ref:"VKB",badge:"OPERATOR",description:"Forklift Operator needed.",link:"#"},
  {id:3,title:"Cleaner",company:"VKB Group",location:"Harrismith",type:"Permanent",salary:"Entry Level",closing:"31 August 2026",ref:"VKB",badge:"GRADE 10",description:"Cleaner vacancy.",link:"#"},
  {id:2,title:"Security Guard",company:"VKB Group",location:"Bethlehem",type:"Contract",salary:"PSIRA",closing:"01 September 2026",ref:"VKB",badge:"SECURITY",description:"Security Guard PSIRA registered.",link:"#"},
  {id:1,title:"Driver - Code 10",company:"VKB Group",location:"Free State",type:"Permanent",salary:"Driving",closing:"02 September 2026",ref:"VKB",badge:"DRIVER",description:"Code 10 Driver.",link:"#"}
];

function renderJobs(){
  // Try EVERY possible container ID - this fixes white screen!
  let c = document.getElementById("jobs-container") || document.getElementById("jobs") || document.getElementById("job-list") || document.querySelector(".jobs") || document.querySelector("main") || document.body;
  if(!c){ console.log("No container"); return; }
  // If we grabbed body or main, create a wrapper inside
  let target = c;
  if(c.tagName === "BODY" || c.tagName === "MAIN"){
    target = document.createElement("div");
    target.id = "jobs-container";
    target.style.padding = "10px";
    c.appendChild(target);
  } else {
    target.innerHTML = "";
  }
  
  jobs.forEach(job=>{
    const div=document.createElement("div");
    div.style.cssText="border:2px solid #ddd;padding:15px;margin:10px 0;border-radius:12px;background:"+(job.urgent?"#fff3e0":"white")+";border-color:"+(job.urgent?"#ff6f00":"#ddd")+";font-family:sans-serif;";
    div.innerHTML=`<span style="background:${job.urgent?"#ff6f00":"#2e7d32"};color:white;padding:4px 10px;border-radius:20px;font-size:12px;font-weight:bold;">${job.badge}</span><h3 style="margin:10px 0;color:#1b5e20;">${job.title}</h3><p><strong>${job.company}</strong> - ${job.location}</p><p>💰 ${job.salary} | 📄 ${job.type}</p><p>📅 Closing: <strong style="color:${job.urgent?"red":"black"}">${job.closing}</strong></p><p style="color:#555;">${job.description}</p><p><small>${job.ref}</small></p><a href="${job.link}" style="display:inline-block;background:#2e7d32;color:white;padding:10px 18px;border-radius:8px;text-decoration:none;margin-top:8px;font-weight:bold;">Apply Now</a>`;
    target.appendChild(div);
  });
  const count=document.getElementById("job-count");
  if(count) count.innerText=`${jobs.length} JOBS LIVE!`;
}

document.addEventListener("DOMContentLoaded", renderJobs);
setTimeout(renderJobs, 500);
setTimeout(renderJobs, 1500);
setTimeout(renderJobs, 3000);
