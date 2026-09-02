const careerData = [
  {
    role: "Data Analyst",
    summary: "Data Analysts act as the critical link between raw information and strategic business decisions. Rather than just running calculations, they uncover the 'why' behind the numbers. Modern organizations generate massive amounts of data daily, ranging from customer interactions to supply chain metrics. A Data Analyst's core function is to extract this siloed data, clean it to ensure accuracy, and apply statistical analysis to identify historical trends. By transforming these complex datasets into intuitive visual dashboards and clear narratives, they empower non-technical executives to make evidence-based choices about product launches, budget allocations, and operational efficiencies. Ultimately, they turn raw information into a company's most valuable strategic asset.",
    dayToDay: "A typical day involves meeting with stakeholders to understand their core business questions, followed by writing SQL queries to extract the necessary information from relational databases. You will spend significant time cleaning messy data, running statistical analyses using Python or Excel, and building interactive dashboards in Tableau to present your findings to non-technical leadership.",
    skills: "SQL, Python, Tableau, Excel.",
    expectations: "Ability to write complex SQL queries (joins, subqueries), clean inconsistent data, and confidently present findings to business leaders.",
    salary: "$65,000 - $85,000",
    candidateTraits: "Detail-oriented, naturally curious, and strongly focused on business outcomes."
  },
  {
    role: "Business Analyst",
    summary: "Business Analysts act as the essential translators between business stakeholders and technical development teams. Where developers see code, and executives see revenue, the BA bridges the gap to ensure the right software is built for the right reasons. They dive deep into a company's operational workflows, identifying bottlenecks and inefficiencies that technology can solve. By gathering detailed requirements from end-users and transforming them into technical blueprints (like user stories and process models), they prevent costly engineering mistakes. Their ultimate goal is to align software development with strategic business objectives, ensuring that every IT investment directly contributes to organizational efficiency and profitability.",
    dayToDay: "A typical day involves facilitating meetings to gather requirements from business users and translating those needs into detailed technical specifications or user stories. You will spend time mapping out processes using tools like Visio, managing project backlogs in Jira, and collaborating closely with software developers to ensure the final product meets the original business objectives without exceeding scope.",
    skills: "Visio, Agile/Scrum, Jira, basic SQL.",
    expectations: "Ability to write clear user stories, map out business processes, and communicate technical constraints to non-technical audiences.",
    salary: "$65,000 - $75,000",
    candidateTraits: "Strong communicator, active listener, highly organized, and diplomatic."
  },
  {
    role: "Software Developer",
    summary: "Software Developers are the architects and builders of the digital infrastructure that powers modern organizations. They take the conceptual blueprints provided by product managers and business analysts and transform them into functional, scalable, and secure applications. This role goes far beyond simply typing lines of code; it requires designing robust system architectures, integrating complex databases, and ensuring the software can handle thousands of concurrent users without failing. Whether they are building a customer-facing mobile app or an internal enterprise platform, developers must constantly balance performance, security, and maintainability, ensuring the technology stack can adapt to future business needs.",
    dayToDay: "A typical day involves writing and testing code for new features, debugging issues within existing applications, and participating in daily agile stand-up meetings. You will frequently review code written by peers, collaborate with business analysts to understand technical requirements, and use version control systems like Git to safely merge your contributions into the main codebase.",
    skills: "Python, Java, Git, HTML/CSS/JS.",
    expectations: "Understanding of object-oriented programming principles, basic version control, and the ability to write clean, documented code.",
    salary: "$70,000 - $90,000",
    candidateTraits: "Persistent problem solver, highly receptive to constructive feedback, and a continuous learner."
  },
  {
    role: "Cybersecurity Analyst",
    summary: "Cybersecurity Analysts serve as the frontline defenders of an organization's digital assets, protecting sensitive data from an increasingly hostile threat landscape. In a world where a single data breach can cost a company millions and ruin its reputation, these analysts operate as both digital detectives and security guards. They proactively hunt for vulnerabilities within the company's network architecture, conduct penetration tests to find weak points before hackers do, and configure advanced monitoring systems to detect anomalies in real-time. When a security incident occurs, they lead the rapid response effort to isolate the threat, mitigate the damage, and implement hardened protocols to prevent future intrusions.",
    dayToDay: "A typical day involves actively monitoring network traffic using SIEM tools to identify unusual activity or potential breaches. You will spend time investigating automated security alerts, patching system vulnerabilities, assisting with penetration testing, and educating employees on security best practices to prevent phishing or social engineering attacks.",
    skills: "SIEM tools, Wireshark, TCP/IP, Python.",
    expectations: "Basic understanding of network architecture, common system vulnerabilities, and fundamental incident response procedures.",
    salary: "$70,000 - $85,000",
    candidateTraits: "High ethical standards, calm under pressure, highly analytical, and vigilant."
  },
  {
    role: "Product Manager",
    summary: "Product Managers function as the 'CEO of the product,' bearing ultimate responsibility for a software application's success in the market. They sit at the critical intersection of business strategy, technology feasibility, and user experience design. Rather than writing code themselves, they focus on answering *what* to build and *why*. By conducting deep market research, analyzing user behavior, and monitoring competitors, they define a strategic product roadmap. They must ruthlessly prioritize which features the engineering team should build next, constantly balancing user requests with technical debt and overarching company revenue goals, ensuring the final product delivers genuine value.",
    dayToDay: "A typical day involves analyzing user feedback and market trends to define the product vision, then translating that vision into a prioritized backlog of features. You will spend significant time leading cross-functional meetings, negotiating timelines with software developers, collaborating with UI/UX designers, and presenting product roadmaps to company stakeholders.",
    skills: "Roadmapping tools (Jira, Productboard), Agile methodology, basic data analysis, UI/UX principles.",
    expectations: "Ability to balance user needs with business goals and technical feasibility, while communicating effectively across different departments.",
    salary: "$80,000 - $100,000",
    candidateTraits: "Empathetic to users, highly decisive, strategic, and possessing strong leadership skills."
  },
  {
    role: "Technology Consultant",
    summary: "Technology Consultants are highly adaptable problem-solvers hired by organizations to navigate complex digital transformations. Unlike internal IT staff who maintain existing systems, consultants are brought in as external experts to drive massive organizational change, such as migrating legacy databases to the cloud or implementing enterprise-wide ERP systems. They must rapidly learn a client's industry, assess their specific operational pain points, and design bespoke technological solutions. This role requires a unique blend of deep technical expertise and high-level executive communication, as consultants must not only architect the technical solution but also successfully pitch it to C-suite leadership and manage the subsequent rollout.",
    dayToDay: "A typical day involves meeting with client stakeholders to assess their current workflows and pain points. You will spend time configuring enterprise software (like ERPs or CRMs), analyzing system requirements, building comprehensive presentation decks, and delivering strategic recommendations directly to a client's executive leadership team.",
    skills: "ERP systems, Cloud platforms, presentation software, project management.",
    expectations: "Willingness to travel, ability to rapidly learn new industries, and strong client-facing communication skills.",
    salary: "$75,000 - $95,000",
    candidateTraits: "Highly adaptable, maintains a professional demeanor, strategic thinker, and persuasive."
  }
];

const container = document.getElementById('career-container');

careerData.forEach(career => {
    const details = document.createElement('details');
    details.innerHTML = `
        <summary>${career.role}</summary>
        <p><strong>Overview:</strong> ${career.summary}</p>
        <p><strong>Day-to-day:</strong> ${career.dayToDay}</p>
        <ul>
            <li><strong>Technical skills:</strong> ${career.skills}</li>
            <li><strong>Entry-level expectations:</strong> ${career.expectations}</li>
            <li><strong>Salary & growth:</strong> ${career.salary}</li>
            <li><strong>Strong candidate traits:</strong> ${career.candidateTraits}</li>
        </ul>
    `;
    container.appendChild(details);
});