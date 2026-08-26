const jobs = [
  {
    id: 10,
    title "Fire Fighter (50 Posts) - URGENT!",
    company: "NCC Group Wildfires",
    location: "Various Bases - Western Cape",
    type: "Fixed Term",
    salary: "R13,000 per month",
    closing: "26 August 2026 - TOMORROW!",
    ref: "Ref: BCS/Fire/02/2026 | Oct 2026-Sep 2027",
    badge: "🔥 50 JOBS - CLOSING TOMORROW",
    description: "NCC Group is hiring 50 Fire Fighters for wildland fire-fighting across Western Cape. Must pass 4.8km pack test carrying 20kg in 45min. Shift work, standby duties, tough physical work.",
    link: "mailto:recruitment@ncc-group.co.za?subject=BCS/Fire/02/2026",
    urgent: true
  },
  {
    id: 9,
    title: "Systems Controller - Qpro Feeds",
    company: "VKB Group / Qpro Feeds",
    location: "Bethlehem, Free State",
    type: "Permanent",
    salary: "Market Related",
    closing: "28 August 2026",
    ref: "VKB Bethlehem",
    badge: "IT / SYSTEMS",
    description: "Systems Controller for Qpro Feeds in Bethlehem. Degree/Diploma in IT/Systems + Agriculture Systems experience.",
    link: "#"
  },
  {
    id: 8,
    title: "General Worker - VKB Retail",
    company: "VKB Group",
    location: "Villiers, Free State",
    type: "Permanent",
    salary: "Entry Level",
    closing: "29 August 2026",
    ref: "VKB Villiers",
    badge: "GRADE 12",
    description: "General Worker at VKB Retail Villiers. Grade 12 + physically fit. Retail support duties.",
    link: "#"
  },
  {
    id: 7,
    title: "Cashier - VKB Retail",
    company: "VKB Group",
    location: "Frankfort, Free State",
    type: "Permanent",
    salary: "Retail",
    closing: "30 August 2026",
    ref: "VKB",
    badge: "RETAIL",
    description: "Cashier position at VKB Retail.",
    link: "#"
  },
  {
    id: 6,
    title: "Admin Clerk",
    company: "VKB Group",
    location: "Reitz, Free State",
    type: "Permanent",
    salary: "Admin",
    closing: "30 August 2026",
    ref: "VKB",
    badge: "ADMIN",
    description: "Admin Clerk support.",
    link: "#"
  },
  {
    id: 5,
    title: "Shop Assistant",
    company: "VKB Group",
    location: "Memel, Free State",
    type: "Permanent",
    salary: "Retail",
    closing: "31 August 2026",
    ref: "VKB",
    badge: "RETAIL",
    description: "Shop Assistant role.",
    link: "#"
  },
  {
    id: 4,
    title: "Forklift Operator",
    company: "VKB Group",
    location: "Bethlehem",
    type: "Permanent",
    salary: "Skilled",
    closing: "31 August 2026",
    ref: "VKB",
    badge: "OPERATOR",
    description: "Forklift Operator needed.",
    link: "#"
  },
  {
    id: 3,
    title: "Cleaner",
    company: "VKB Group",
    location: "Harrismith",
    type: "Permanent",
    salary: "Entry Level",
    closing: "31 August 2026",
    ref: "VKB",
    badge: "GRADE 10",
    description: "Cleaner vacancy.",
    link: "#"
  },
  {
    id: 2,
    title: "Security Guard",
    company: "VKB Group",
    location: "Bethlehem",
    type: "Contract",
    salary: "PSIRA",
    closing: "01 September 2026",
    ref: "VKB",
    badge: "SECURITY",
    description: "Security Guard PSIRA registered.",
    link: "#"
  },
  {
    id: 1,
    title: "Driver - Code 10",
    company: "VKB Group",
    location: "Free State",
    type: "Permanent",
    salary: "Driving",
    closing: "02 September 2026",
    ref: "VKB",
    badge: "DRIVER",
    description: "Code 10 Driver.",
    link: "#"
  }
];

// Render function - keeps your existing design
function renderJobs(filter = "all") {
  const container = document.getElementById("jobs-container");
  if (!container) return;
  container.innerHTML = "";
  jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = `job-card ${job.urgent ? 'urgent-card' : ''}`;
    card.innerHTML = `
      <span class="badge">${job.badge}</span>
      <h3>${job.title}</h3>
      <p><strong>${job.company}</strong> - ${job.location}</p>
      <p>💰 ${job.salary} | 📄 ${job.type}</p>
      <p>📅 Closing: ${job.closing}</p>
      <p>${job.description}</p>
      <p><small>${job.ref}</small></p>
      <a href="${job.link}" class="apply-btn" target="_blank">Apply Now</a>
    `;
    container.appendChild(card);
  });
  const countEl = document.getElementById("job-count");
  if (countEl) countEl.innerText = `${jobs.length} JOBS LIVE!`;
}
document.addEventListener("DOMContentLoaded", () => renderJobs());
