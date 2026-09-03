const careerData = [
  {
    role: "Data Analyst",
    summary: "Data Analysts turn business questions into trustworthy, useful insights. They collect, clean, and analyze data, then explain what the results mean so teams can make better decisions. The role may support areas such as marketing, finance, operations, product, or supply chain.",
    dayToDay: "A typical day can include clarifying a stakeholder's question, querying a database, checking data quality, calculating metrics, and building or maintaining a dashboard. Analysts also document assumptions, share findings with non-technical teammates, and recommend next steps.",
    skills: "SQL, Excel, a visualization tool such as Tableau or Power BI, basic statistics, and often Python or R.",
    expectations: "Be able to write joins and aggregations in SQL, validate results, explain a chart clearly, and recognize that correlation does not automatically prove causation.",
    salary: "Estimated U.S. entry-level base: $55,000-$80,000; growth commonly leads to senior analyst, analytics engineer, or analytics manager roles.",
    candidateTraits: "Detail-oriented, curious, comfortable asking clarifying questions, and focused on connecting analysis to a business decision.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics dashboard on a computer screen",
    sources: [
      { label: "O*NET: Business Intelligence Analysts (tasks and skills)", url: "https://www.onetonline.org/link/summary/15-2051.01" },
      { label: "BLS: Data Scientists (wages and outlook reference)", url: "https://www.bls.gov/ooh/math/data-scientists.htm" }
    ]
  },
  {
    role: "Business Analyst",
    summary: "Business Analysts help an organization define problems, improve processes, and select or build useful technology. They connect stakeholders with delivery teams by documenting needs, clarifying trade-offs, and checking that a solution addresses the original business problem.",
    dayToDay: "A typical day can include interviewing users, observing a workflow, mapping the current and future process, writing requirements or user stories, and helping prioritize a backlog. Analysts may support testing, clarify questions for developers, and track whether the delivered change meets acceptance criteria.",
    skills: "Requirements elicitation, process mapping, user stories and acceptance criteria, Excel or basic SQL, Jira or a similar work-management tool, and presentation skills.",
    expectations: "Be able to ask effective follow-up questions, separate needs from proposed solutions, write testable requirements, and communicate scope and constraints clearly.",
    salary: "Estimated U.S. entry-level base: $55,000-$80,000; growth commonly leads to senior business analyst, product owner, or project manager roles.",
    candidateTraits: "Strong listener and communicator, organized, analytical, collaborative, and comfortable resolving ambiguity.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team collaborating around a table",
    sources: [
      { label: "O*NET: Management Analysts (tasks and skills)", url: "https://www.onetonline.org/link/summary/13-1111.00" },
      { label: "BLS: Management Analysts (wages and outlook)", url: "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm" }
    ]
  },
  {
    role: "Software Developer",
    summary: "Software Developers design, build, test, and maintain applications and services. They work with product, design, and analyst teammates to turn user needs into reliable software, while considering security, performance, accessibility, and maintainability.",
    dayToDay: "A typical day can include implementing a small feature, debugging a defect, writing automated tests, reviewing a pull request, and discussing work in a team planning or stand-up meeting. Developers use Git and a shared development workflow to collaborate safely.",
    skills: "One programming language, data structures and basic algorithms, Git, SQL or APIs, automated testing, and familiarity with HTML/CSS/JavaScript when working on the web.",
    expectations: "Be able to explain your code, use a debugger, break a problem into smaller steps, write readable tests, and describe a project you built or contributed to.",
    salary: "Estimated U.S. entry-level base: $65,000-$95,000; growth commonly leads to mid-level and senior developer, technical lead, or engineering manager roles.",
    candidateTraits: "Persistent problem solver, clear communicator, careful tester, receptive to code review, and committed to continuous learning.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Code editor displayed on a laptop",
    sources: [
      { label: "O*NET: Software Developers (tasks and skills)", url: "https://www.onetonline.org/link/summary/15-1252.00" },
      { label: "BLS: Software Developers (wages and outlook)", url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm" }
    ]
  },
  {
    role: "Cybersecurity Analyst",
    summary: "Cybersecurity Analysts help protect systems, accounts, and data by monitoring for threats, investigating suspicious activity, reducing vulnerabilities, and improving security processes. The exact focus varies: some teams emphasize security operations, while others focus on governance, risk, compliance, or vulnerability management.",
    dayToDay: "A typical day can include triaging SIEM alerts, reviewing logs, investigating phishing reports, documenting incidents, checking vulnerability scans, and helping apply security controls. Entry-level analysts usually work within an incident-response process and escalate serious events rather than independently leading a breach response.",
    skills: "Networking fundamentals (TCP/IP, DNS, and HTTP), operating-system basics, log analysis, a SIEM platform, vulnerability concepts, Wireshark, and basic scripting such as Python or PowerShell.",
    expectations: "Be able to explain common attack patterns, preserve evidence, document an investigation, distinguish an alert from a confirmed incident, and follow authorization and data-handling rules.",
    salary: "Estimated U.S. entry-level base: $60,000-$90,000; growth commonly leads to senior analyst, incident responder, security engineer, or security manager roles.",
    candidateTraits: "Ethical, methodical, curious, calm under pressure, attentive to detail, and willing to keep learning as threats change.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cybersecurity lock icon on a laptop",
    sources: [
      { label: "O*NET: Information Security Analysts (tasks and skills)", url: "https://www.onetonline.org/link/summary/15-1212.00" },
      { label: "BLS: Information Security Analysts (wages and outlook)", url: "https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm" }
    ]
  },
  {
    role: "Product Manager",
    summary: "Product Managers help teams decide which problems to solve, for whom, and why. They combine customer research, business goals, data, and technical constraints to set priorities and guide a product from discovery through delivery. They are accountable for decisions and outcomes, but do not manage every function involved.",
    dayToDay: "A typical day can include interviewing users, reviewing product metrics, writing problem statements, refining a backlog, aligning designers and engineers, and communicating priorities to stakeholders. Product managers also define success measures and learn from what happens after a feature ships.",
    skills: "Customer discovery, prioritization, roadmap communication, experimentation and basic data analysis, Agile practices, writing, and enough technical fluency to discuss APIs, systems, and trade-offs.",
    expectations: "Be able to frame a user problem, compare options using evidence, define a measurable outcome, and explain a prioritization decision to both technical and non-technical audiences.",
    salary: "Estimated U.S. entry-level base: $65,000-$95,000; growth commonly leads to product manager, senior product manager, group product manager, or product leadership roles.",
    candidateTraits: "Empathetic, decisive without being rigid, evidence-driven, organized, persuasive, and comfortable owning outcomes amid uncertainty.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team planning product work with sticky notes",
    sources: [
      { label: "O*NET: Product Managers (tasks and skills)", url: "https://www.onetonline.org/link/summary/13-1082.00" },
      { label: "BLS: Project Management Specialists (wages and outlook reference)", url: "https://www.bls.gov/ooh/business-and-financial/project-management-specialists.htm" }
    ]
  },
  {
    role: "Technology Consultant",
    summary: "Technology Consultants help clients improve processes, implement systems, manage technology change, or solve a defined technical problem. Depending on the firm, the work may focus on ERP or CRM implementation, data and cloud projects, cybersecurity, or IT strategy.",
    dayToDay: "A typical day can include interviewing client stakeholders, documenting current processes, configuring or testing a system, analyzing requirements, preparing a recommendation, and tracking implementation risks. Consultants often work across several clients or projects and must keep clear documentation.",
    skills: "Requirements and process analysis, Excel or basic data work, an ERP/CRM or cloud platform, presentation and documentation, project methods, and the ability to learn a client's industry quickly.",
    expectations: "Be ready to explain a recommendation, learn unfamiliar tools, collaborate with a client, manage competing priorities, and distinguish a confirmed requirement from an assumption.",
    salary: "Estimated U.S. entry-level base: $60,000-$90,000; growth commonly leads to consultant, senior consultant, manager, or a client-side systems/product role. Travel varies by employer and project.",
    candidateTraits: "Adaptable, dependable, client-focused, analytical, professional, and comfortable presenting and receiving feedback.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Consultants discussing a project in an office",
    sources: [
      { label: "O*NET: Management Analysts (tasks and skills)", url: "https://www.onetonline.org/link/summary/13-1111.00" },
      { label: "BLS: Management Analysts (wages and outlook)", url: "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm" }
    ]
  }
];

const container = document.getElementById('career-container');

careerData.forEach(career => {
    const details = document.createElement('details');
    details.innerHTML = `
        <summary>${career.role}</summary>
        <img class="career-image" src="${career.image}" alt="${career.imageAlt}" loading="lazy">
        <p><strong>Overview:</strong> ${career.summary} <a class="claim-source" href="${career.sources[0].url}" target="_blank" rel="noopener noreferrer">[source]</a></p>
        <p><strong>Day-to-day:</strong> ${career.dayToDay} <a class="claim-source" href="${career.sources[0].url}" target="_blank" rel="noopener noreferrer">[source]</a></p>
        <ul>
            <li><strong>Technical skills:</strong> ${career.skills} <a class="claim-source" href="${career.sources[0].url}" target="_blank" rel="noopener noreferrer">[source]</a></li>
            <li><strong>Entry-level expectations:</strong> ${career.expectations} <a class="claim-source" href="${career.sources[0].url}" target="_blank" rel="noopener noreferrer">[source]</a></li>
            <li><strong>Salary & growth:</strong> ${career.salary} <a class="claim-source" href="${career.sources[1].url}" target="_blank" rel="noopener noreferrer">[source]</a></li>
            <li><strong>Strong candidate traits:</strong> ${career.candidateTraits} <a class="claim-source" href="${career.sources[0].url}" target="_blank" rel="noopener noreferrer">[source]</a></li>
        </ul>
        <div class="career-sources">
            <strong>Sources:</strong>
            ${career.sources.map(source => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`).join(' · ')}
        </div>
    `;
    container.appendChild(details);
});