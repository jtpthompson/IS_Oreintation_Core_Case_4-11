const careerData = [
  {
    role: "Data Analyst",
    summary: "Data Analysts act as the critical link between raw information and strategic business decisions. They take vast amounts of complex data and translate it into clear, actionable insights that help organizations optimize operations, target new markets, and solve complex problems.",
    dayToDay: "A typical day involves meeting with stakeholders to understand their core business questions, followed by writing SQL queries to extract the necessary information from relational databases. You will spend significant time cleaning messy data, running statistical analyses using Python or Excel, and building interactive dashboards in Tableau to present your findings to non-technical leadership.",
    skills: "SQL, Python, Tableau, Excel.",
    expectations: "Ability to write complex SQL queries (joins, subqueries), clean inconsistent data, and confidently present findings to business leaders.",
    salary: "$65,000 - $85,000",
    candidateTraits: "Detail-oriented, naturally curious, and strongly focused on business outcomes."
  },
{
    role: "Business Analyst",
    summary: "Business Analysts act as the essential translators between business stakeholders and technical development teams. They identify organizational needs, analyze current workflows, and design technological solutions that improve efficiency and solve specific operational problems.",
    dayToDay: "A typical day involves facilitating meetings to gather requirements from business users and translating those needs into detailed technical specifications or user stories. You will spend time mapping out processes using tools like Visio, managing project backlogs in Jira, and collaborating closely with software developers to ensure the final product meets the original business objectives without exceeding scope.",
    skills: "Visio, Agile/Scrum, Jira, basic SQL.",
    expectations: "Ability to write clear user stories, map out business processes, and communicate technical constraints to non-technical audiences.",
    salary: "$65,000 - $75,000",
    candidateTraits: "Strong communicator, active listener, highly organized, and diplomatic."
  },
{
    role: "Software Developer",
    summary: "Software Developers are the builders of the digital world, designing and creating the applications, platforms, and systems that power modern organizations. They transform requirements into functional, scalable code and ensure that software architecture remains secure, efficient, and maintainable.",
    dayToDay: "A typical day involves writing and testing code for new features, debugging issues within existing applications, and participating in daily agile stand-up meetings. You will frequently review code written by peers, collaborate with business analysts to understand technical requirements, and use version control systems like Git to safely merge your contributions into the main codebase.",
    skills: "Python, Java, Git, HTML/CSS/JS.",
    expectations: "Understanding of object-oriented programming principles, basic version control, and the ability to write clean, documented code.",
    salary: "$70,000 - $90,000",
    candidateTraits: "Persistent problem solver, highly receptive to constructive feedback, and a continuous learner."
  },
{
    role: "Cybersecurity Analyst",
    summary: "Cybersecurity Analysts are the frontline defenders of an organization's digital infrastructure. They protect sensitive data and systems from cyber threats by continuously monitoring networks, anticipating vulnerabilities, and implementing robust security measures to thwart potential attacks.",
    dayToDay: "A typical day involves actively monitoring network traffic using SIEM tools to identify unusual activity or potential breaches. You will spend time investigating automated security alerts, patching system vulnerabilities, assisting with penetration testing, and educating employees on security best practices to prevent phishing or social engineering attacks.",
    skills: "SIEM tools, Wireshark, TCP/IP, Python.",
    expectations: "Basic understanding of network architecture, common system vulnerabilities, and fundamental incident response procedures.",
    salary: "$70,000 - $85,000",
    candidateTraits: "High ethical standards, calm under pressure, highly analytical, and vigilant."
  },
{
    role: "Product Manager",
    summary: "Product Managers are the visionary leaders behind a specific software application or digital service. They sit at the intersection of business strategy, technology, and user experience, guiding a product from its initial concept all the way through development and market launch.",
    dayToDay: "A typical day involves analyzing user feedback and market trends to define the product vision, then translating that vision into a prioritized backlog of features. You will spend significant time leading cross-functional meetings, negotiating timelines with software developers, collaborating with UI/UX designers, and presenting product roadmaps to company stakeholders.",
    skills: "Roadmapping tools (Jira, Productboard), Agile methodology, basic data analysis, UI/UX principles.",
    expectations: "Ability to balance user needs with business goals and technical feasibility, while communicating effectively across different departments.",
    salary: "$80,000 - $100,000",
    candidateTraits: "Empathetic to users, highly decisive, strategic, and possessing strong leadership skills."
  },
{
    role: "Technology Consultant",
    summary: "Technology Consultants are external experts hired by organizations to solve complex business challenges through the strategic implementation of new systems. They evaluate a company's current technological landscape and recommend, design, or implement modern platforms to drive efficiency and growth.",
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