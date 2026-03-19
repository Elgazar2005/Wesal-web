import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";\
import { internships, featuredInternships } from "./internshipsData";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Signal,
  Briefcase,
  DollarSign,
  CheckCircle2,
  ChevronRight,
  Building2,
  Calendar,
  Users,
  Layers,
} from "lucide-react";


export const allInternships = [
  {
    id: "1",
    title: "Junior Frontend Developer",
    company: "TechCorp",
    field: "Engineering",
    location: "Remote",
    type: "Full-time",
    duration: "3 Months",
    salary: "$800 / month",
    deadline: "April 30, 2025",
    teamSize: "12 people",
    description:
      "TechCorp is looking for a passionate Junior Frontend Developer intern to join our product team. You'll work alongside senior engineers building and improving our customer-facing web applications. This is a hands-on role where you'll write real code that ships to production from day one.",
    whatYouWillDo: [
      "Build and maintain React components for our main web platform",
      "Collaborate with designers to implement pixel-perfect UI from Figma specs",
      "Write unit and integration tests using Jest and React Testing Library",
      "Participate in code reviews and daily stand-ups",
      "Optimize application performance and accessibility",
      "Help document components in our internal design system",
    ],
    requirements: [
      "Solid understanding of HTML, CSS, and JavaScript (ES6+)",
      "Hands-on experience with React or a similar framework",
      "Familiarity with Git and version control workflows",
      "Eye for detail and a genuine interest in great UX",
      "Ability to communicate clearly in English",
      "Currently enrolled in or recently graduated from a CS or related program",
    ],
    howToApply: [
      "Click 'Apply Now' and fill in the application form",
      "Attach your CV and a short cover letter explaining your interest",
      "Include links to any projects, GitHub, or portfolio",
      "Our team reviews applications within 5 business days",
      "Shortlisted candidates will be invited for a 30-min video interview",
    ],
  },
  {
    id: "2",
    title: "Product Design Intern",
    company: "DesignHub",
    field: "Design",
    location: "On-site · Cairo",
    type: "Part-time",
    duration: "6 Months",
    salary: "$600 / month",
    deadline: "May 15, 2025",
    teamSize: "8 people",
    description:
      "DesignHub is a design consultancy shaping digital products for startups and enterprises across the MENA region. As a Product Design Intern you'll be embedded in our core design team, contributing to live client projects from research through to final delivery.",
    whatYouWillDo: [
      "Conduct user interviews and synthesize insights into actionable findings",
      "Create wireframes, user flows, and interactive prototypes in Figma",
      "Present design concepts to clients and incorporate feedback",
      "Collaborate closely with developers to ensure faithful implementation",
      "Maintain and evolve component libraries and design tokens",
      "Contribute to internal design-thinking workshops",
    ],
    requirements: [
      "Strong portfolio demonstrating UX thinking and visual craft",
      "Proficiency in Figma (prototyping, components, auto-layout)",
      "Understanding of user-centered design principles",
      "Excellent communication and presentation skills",
      "Ability to work on-site in Cairo at least 3 days per week",
      "Passion for solving real problems for real users",
    ],
    howToApply: [
      "Submit your application via the form below",
      "Include a link to your Figma or portfolio (PDF also accepted)",
      "Write a 3–5 sentence note about a design problem you've solved",
      "Applications reviewed on a rolling basis",
      "Selected applicants will complete a short design challenge before the interview",
    ],
  },
  {
    id: "3",
    title: "Data Analyst Intern",
    company: "Insightful",
    field: "Data",
    location: "Hybrid",
    type: "Full-time",
    duration: "4 Months",
    salary: "$700 / month",
    deadline: "April 20, 2025",
    teamSize: "6 people",
    description:
      "Insightful is a data analytics firm helping mid-market companies make better decisions with their data. As a Data Analyst Intern you'll work directly with our analytics team, turning raw datasets into clear, actionable dashboards and reports for clients.",
    whatYouWillDo: [
      "Clean, transform, and validate large datasets using Python and SQL",
      "Build interactive dashboards in Tableau or Power BI",
      "Write queries to extract insights from relational databases",
      "Prepare weekly data reports and present findings to the team",
      "Identify trends, anomalies, and opportunities in client data",
      "Assist in automating repetitive reporting workflows",
    ],
    requirements: [
      "Proficiency in SQL (joins, aggregations, window functions)",
      "Working knowledge of Python (pandas, numpy)",
      "Familiarity with data visualization tools (Tableau, Power BI, or similar)",
      "Strong analytical mindset and attention to detail",
      "Ability to explain data findings to non-technical stakeholders",
      "Statistics fundamentals are a plus",
    ],
    howToApply: [
      "Apply through the form and attach your CV",
      "Include any relevant projects, notebooks, or dashboards you've built",
      "A short SQL or Python take-home task will be sent after initial screening",
      "Final round is a 45-min technical + culture-fit interview",
      "Successful candidates receive an offer within 2 weeks",
    ],
  },
  {
    id: "4",
    title: "Backend Engineer Intern",
    company: "CloudBase",
    field: "Engineering",
    location: "Remote",
    type: "Full-time",
    duration: "5 Months",
    salary: "$900 / month",
    deadline: "May 1, 2025",
    teamSize: "15 people",
    description:
      "CloudBase builds developer infrastructure used by thousands of teams worldwide. You'll join our backend engineering team to work on scalable APIs, internal tooling, and cloud integrations — shipping code that developers depend on every day.",
    whatYouWillDo: [
      "Design and implement RESTful and GraphQL APIs in Node.js or Python",
      "Work with PostgreSQL and Redis for data persistence and caching",
      "Write automated tests and participate in CI/CD pipeline improvements",
      "Debug production issues and contribute to incident post-mortems",
      "Review pull requests from peers and give constructive feedback",
      "Contribute to architecture discussions and technical documentation",
    ],
    requirements: [
      "Strong grasp of backend development fundamentals",
      "Experience with Node.js, Python, or Go",
      "Familiarity with REST APIs and database design",
      "Comfortable working asynchronously in a remote-first environment",
      "Basic knowledge of Docker or cloud platforms is a plus",
      "Passion for writing clean, well-tested code",
    ],
    howToApply: [
      "Fill in the application form with your CV",
      "Share GitHub profile or any backend project you're proud of",
      "Expect a short async coding challenge (2–3 hours)",
      "Technical interview followed by a team-fit call",
      "Offer extended within 10 business days of the final interview",
    ],
  },
  {
    id: "5",
    title: "Marketing & Growth Intern",
    company: "GrowthLab",
    field: "Marketing",
    location: "On-site",
    type: "Part-time",
    duration: "3 Months",
    salary: "$500 / month",
    deadline: "April 25, 2025",
    teamSize: "5 people",
    description:
      "GrowthLab is a growth marketing agency working with early-stage startups to accelerate user acquisition. As a Marketing & Growth Intern you'll get exposure to the full growth stack — from content and SEO to paid ads and conversion rate optimization.",
    whatYouWillDo: [
      "Assist in planning and executing social media and email campaigns",
      "Research keywords and help produce SEO-optimized content",
      "Analyze campaign performance using Google Analytics and Meta Ads Manager",
      "Support A/B testing initiatives and document learnings",
      "Help manage the content calendar and coordinate with freelance creators",
      "Assist in preparing client reports and strategy decks",
    ],
    requirements: [
      "Genuine curiosity about digital marketing and growth",
      "Familiarity with social media platforms and content creation",
      "Basic understanding of SEO and paid advertising concepts",
      "Strong written communication skills in Arabic and/or English",
      "Data-driven mindset — comfortable working with spreadsheets",
      "Prior internship or project experience in marketing is a plus",
    ],
    howToApply: [
      "Submit your CV and a brief cover letter",
      "Tell us about a marketing campaign you admire and why",
      "Shortlisted candidates will have a 20-min introductory call",
      "Final candidates complete a short marketing brief task",
      "On-site work required 3 days per week",
    ],
  },
  {
    id: "6",
    title: "Content Strategy Intern",
    company: "Narrativo",
    field: "Marketing",
    location: "Remote",
    type: "Part-time",
    duration: "2 Months",
    salary: "$400 / month",
    deadline: "April 18, 2025",
    teamSize: "4 people",
    description:
      "Narrativo is a content studio crafting brand stories for tech companies. As a Content Strategy Intern, you'll help develop editorial calendars, write long-form content, and ensure every piece of content aligns with our clients' brand voice and strategic goals.",
    whatYouWillDo: [
      "Research topics and develop content briefs for blog posts and whitepapers",
      "Write and edit long-form articles, case studies, and newsletter copy",
      "Work with the strategy team to build and maintain editorial calendars",
      "Optimize existing content for SEO and readability",
      "Monitor content performance and suggest improvements",
      "Coordinate with designers for content visuals and infographics",
    ],
    requirements: [
      "Excellent writing and editing skills in English",
      "Ability to adapt tone and style to different brand voices",
      "Familiarity with SEO writing principles",
      "Strong research skills and intellectual curiosity",
      "Experience with content management systems (WordPress, Notion, etc.)",
      "A portfolio of written work is required",
    ],
    howToApply: [
      "Apply with CV and 2–3 writing samples",
      "A short editing task will be sent to shortlisted candidates",
      "Remote-friendly — async-first communication via Slack and Notion",
      "One 30-min intro call with the editorial lead",
      "Contract starts within 1 week of offer acceptance",
    ],
  },
  {
    id: "7",
    title: "Mobile Developer Intern",
    company: "AppWorks",
    field: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    duration: "6 Months",
    salary: "$850 / month",
    deadline: "May 10, 2025",
    teamSize: "10 people",
    description:
      "AppWorks builds consumer mobile apps with millions of active users. As a Mobile Developer Intern you'll join one of our product squads, contributing features to our iOS and Android apps using React Native or Flutter alongside a senior engineering mentor.",
    whatYouWillDo: [
      "Develop new features for our cross-platform mobile application",
      "Fix bugs and improve app performance and stability",
      "Write clean, readable, well-documented code",
      "Collaborate with product managers and designers in sprint cycles",
      "Participate in app store release processes",
      "Write unit tests and contribute to code coverage goals",
    ],
    requirements: [
      "Experience with React Native or Flutter",
      "Understanding of mobile UI patterns and platform guidelines",
      "Familiarity with REST APIs and async programming",
      "Knowledge of Git and collaborative development workflows",
      "Published app or significant side project is a strong plus",
      "Self-motivated and comfortable in a fast-paced environment",
    ],
    howToApply: [
      "Submit CV and link to a mobile project (GitHub or App Store)",
      "Technical screening call with a senior mobile engineer",
      "Take-home task: build a small feature in React Native or Flutter",
      "Final team-fit interview with the product squad",
      "Hybrid schedule: 2 days in-office, 3 days remote",
    ],
  },
  {
    id: "8",
    title: "UX Research Intern",
    company: "UserFirst",
    field: "Design",
    location: "Remote",
    type: "Full-time",
    duration: "3 Months",
    salary: "$650 / month",
    deadline: "April 28, 2025",
    teamSize: "7 people",
    description:
      "UserFirst is a UX research consultancy helping product teams deeply understand their users. As a UX Research Intern you'll plan and run qualitative and quantitative research studies, synthesize findings, and deliver actionable insights to our clients.",
    whatYouWillDo: [
      "Plan and moderate usability tests and user interviews",
      "Design surveys and analyze quantitative data",
      "Synthesize research findings into clear reports and presentations",
      "Build empathy maps, journey maps, and affinity diagrams",
      "Collaborate with client product and design teams",
      "Contribute to our growing research operations and documentation",
    ],
    requirements: [
      "Understanding of qualitative and quantitative research methods",
      "Experience with tools like Maze, Lookback, UserTesting, or similar",
      "Ability to synthesize ambiguous data into clear insights",
      "Excellent verbal and written communication",
      "Comfort facilitating conversations with strangers (users)",
      "Background in psychology, HCI, design, or related field is a plus",
    ],
    howToApply: [
      "Submit CV with a short research portfolio or case study",
      "Answer two screening questions in the application form",
      "Shortlisted applicants will conduct a mock research debrief",
      "Final interview with research lead and a client team member",
      "Fully remote — global time zones considered",
    ],
  },
  {
    id: "9",
    title: "Business Development Intern",
    company: "NexaVentures",
    field: "Business",
    location: "On-site",
    type: "Full-time",
    duration: "4 Months",
    salary: "$550 / month",
    deadline: "May 5, 2025",
    teamSize: "9 people",
    description:
      "NexaVentures is a venture studio that builds and scales startups in the MENA region. As a Business Development Intern, you'll support our BD team in identifying new partnerships, preparing pitch materials, and driving revenue initiatives across our portfolio companies.",
    whatYouWillDo: [
      "Research and qualify new partnership and business opportunities",
      "Prepare pitch decks, proposals, and one-pagers for clients and investors",
      "Maintain and update CRM records and sales pipeline",
      "Join client meetings and calls to support senior BD managers",
      "Analyze market trends and competitive landscape",
      "Help organize and represent the company at industry events",
    ],
    requirements: [
      "Strong analytical and research skills",
      "Excellent presentation and communication skills",
      "Proficiency in PowerPoint / Google Slides",
      "Entrepreneurial mindset and genuine interest in startups",
      "Fluency in Arabic and English",
      "Prior internship in sales, consulting, or startups is a plus",
    ],
    howToApply: [
      "Submit your CV and a 1-page cover letter",
      "Describe a business opportunity you identified in any context",
      "First round: 30-min culture fit and motivation interview",
      "Second round: case study presentation to the BD team",
      "On-site position — Cairo office, Sunday through Thursday",
    ],
  },
  {
    id: "10",
    title: "AI/ML Research Intern",
    company: "DeepMind Labs",
    field: "Data",
    location: "Hybrid",
    type: "Full-time",
    duration: "6 Months",
    salary: "$1,100 / month",
    deadline: "May 20, 2025",
    teamSize: "11 people",
    description:
      "DeepMind Labs is an applied AI research group working on production ML systems for enterprise clients. As an AI/ML Research Intern you'll work alongside research scientists on cutting-edge NLP and computer vision projects — from experiment design all the way to deployment.",
    whatYouWillDo: [
      "Design and run machine learning experiments using PyTorch or TensorFlow",
      "Collect, clean, and curate training datasets",
      "Implement and benchmark state-of-the-art model architectures",
      "Write clear experiment logs and research notes",
      "Collaborate on model deployment with the MLOps team",
      "Present weekly research updates to the broader team",
    ],
    requirements: [
      "Strong foundation in machine learning and deep learning",
      "Proficiency in Python, PyTorch, or TensorFlow",
      "Familiarity with NLP or computer vision domains",
      "Experience running experiments and interpreting results",
      "Currently pursuing or recently completed a degree in CS, Math, or related",
      "Published research or Kaggle experience is a strong plus",
    ],
    howToApply: [
      "Submit CV, transcript, and any relevant research work",
      "Complete a short ML take-home assignment (3–4 hours)",
      "Technical interview with two research scientists",
      "Final discussion on research interests and long-term goals",
      "Hybrid: 3 days in lab, 2 days remote",
    ],
  },
  {
    id: "11",
    title: "Graphic Design Intern",
    company: "Pixel & Co.",
    field: "Design",
    location: "Remote",
    type: "Part-time",
    duration: "3 Months",
    salary: "$450 / month",
    deadline: "April 22, 2025",
    teamSize: "5 people",
    description:
      "Pixel & Co. is a boutique creative studio producing brand identities, marketing assets, and digital campaigns for clients worldwide. As a Graphic Design Intern you'll contribute to real client projects under the mentorship of our senior designers.",
    whatYouWillDo: [
      "Design social media assets, banners, and email templates",
      "Assist in developing brand identity guidelines for new clients",
      "Create motion graphics for Instagram Reels and short-form video",
      "Prepare print-ready files for campaigns and merchandise",
      "Participate in creative brainstorms and concept presentations",
      "Maintain an organized asset library in Notion and Google Drive",
    ],
    requirements: [
      "Strong portfolio showing graphic design skills across digital formats",
      "Proficiency in Adobe Illustrator, Photoshop, and/or Figma",
      "Eye for typography, color, and layout",
      "Ability to work independently and meet deadlines",
      "Motion graphics experience (After Effects) is a big plus",
      "Passion for aesthetics and visual storytelling",
    ],
    howToApply: [
      "Apply with CV and a portfolio link (Behance, Dribbble, or PDF)",
      "Short design brief task sent to shortlisted candidates",
      "30-min portfolio review call with the creative director",
      "Fully remote, flexible hours around a part-time schedule",
      "Rolling applications — apply early",
    ],
  },
  {
    id: "12",
    title: "Finance Analyst Intern",
    company: "CapitalEdge",
    field: "Business",
    location: "On-site",
    type: "Full-time",
    duration: "5 Months",
    salary: "$750 / month",
    deadline: "May 8, 2025",
    teamSize: "14 people",
    description:
      "CapitalEdge is a financial advisory firm serving high-growth companies and investors across the MENA region. As a Finance Analyst Intern you'll work on financial models, investment memos, and client reports that directly inform multi-million dollar decisions.",
    whatYouWillDo: [
      "Build and maintain financial models in Excel for clients and internal use",
      "Prepare investment memos, market research, and valuation analyses",
      "Support senior analysts in due diligence processes",
      "Compile and visualize financial data for client presentations",
      "Monitor market and industry trends relevant to client portfolios",
      "Assist in preparing quarterly and annual financial reports",
    ],
    requirements: [
      "Strong Excel and financial modeling skills",
      "Understanding of valuation methods (DCF, comparables, etc.)",
      "Knowledge of accounting principles and financial statements",
      "Attention to detail and ability to work under pressure",
      "Currently enrolled in Finance, Accounting, Economics, or related program",
      "CFA Level 1 progress is a plus",
    ],
    howToApply: [
      "Submit CV along with your academic transcript",
      "Complete a short financial modeling test (sent after initial screening)",
      "First interview: technical finance questions with an analyst",
      "Second interview: case study + culture fit with a senior manager",
      "On-site position in Cairo — full-time, Sunday through Thursday",
    ],
  },
];

// ─── Helper ────────────────────────────────────────────────────────────────────

const fieldColor = (field) => {
  const map = {
    Engineering: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Design: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Data: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Marketing: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Business: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };
  return map[field] || "bg-light-accent/10 text-light-accent border-light-accent/20";
};

// ─── Section Block ─────────────────────────────────────────────────────────────

function Section({ icon: Icon, title, children }) {
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-light-border dark:border-dark-border">
        <div className="w-8 h-8 rounded-lg bg-light-accent/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-light-accent" />
        </div>
        <h2 className="text-base font-semibold text-light-foreground dark:text-dark-foreground">
          {title}
        </h2>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

function InternshipDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const internship = allInternships.find((i) => i.id === id);

  if (!internship) {
    return (
      <div className="min-h-screen bg-light-background dark:bg-dark-background flex flex-col items-center justify-center gap-4">
        <Briefcase className="w-14 h-14 text-light-accent opacity-40" />
        <p className="text-xl text-light-foreground dark:text-dark-foreground font-semibold">
          Internship not found
        </p>
        <Link
          to="/internship"
          className="flex items-center gap-2 text-light-accent hover:gap-3 transition-all text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Internships
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-light-background dark:bg-dark-background min-h-screen">
      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-b from-light-hero to-light-hero-end dark:from-dark-hero dark:to-dark-hero-end pt-8 pb-28 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/internship" className="hover:text-white transition-colors">Internships</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white truncate max-w-[180px]">{internship.title}</span>
          </div>

          {/* Title block */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium border mb-4 ${fieldColor(internship.field)}`}>
                {internship.field}
              </span>
              <h1 className="text-4xl sm:text-5xl text-white font-bold leading-tight mb-2">
                {internship.title}
              </h1>
              <p className="text-light-cream text-lg flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {internship.company}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
              {[
                { icon: MapPin, label: internship.location },
                { icon: Clock, label: internship.duration },
                { icon: Signal, label: internship.type },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="container mx-auto max-w-5xl px-4 -mt-16 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Left Column ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            <Section icon={Briefcase} title="About This Internship">
              <p className="text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed text-sm">
                {internship.description}
              </p>
            </Section>

            <Section icon={Layers} title="What You'll Do">
              <ul className="flex flex-col gap-3">
                {internship.whatYouWillDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-light-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={CheckCircle2} title="Requirements">
              <ul className="flex flex-col gap-3">
                {internship.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-light-accent/15 text-light-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={ChevronRight} title="How to Apply">
              <ol className="flex flex-col gap-4">
                {internship.howToApply.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-6 h-6 rounded-full bg-light-accent text-light-accent-foreground text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      {i < internship.howToApply.length - 1 && (
                        <div className="w-px h-5 bg-light-accent/20 mt-1" />
                      )}
                    </div>
                    <span className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed pt-0.5">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </Section>
          </div>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-5">
            <div className="bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border overflow-hidden sticky top-6">
              <div className="h-1 w-full bg-gradient-to-r from-light-accent via-yellow-300 to-light-accent" />
              <div className="p-6 flex flex-col gap-5">
                <div>
                  <p className="text-xs text-light-muted-foreground dark:text-dark-muted-foreground uppercase tracking-wider mb-1">
                    Monthly Compensation
                  </p>
                  <p className="text-2xl font-bold text-light-foreground dark:text-dark-foreground">
                    {internship.salary}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { icon: Clock, label: "Duration", value: internship.duration },
                    { icon: Signal, label: "Type", value: internship.type },
                    { icon: MapPin, label: "Location", value: internship.location },
                    { icon: Calendar, label: "Deadline", value: internship.deadline },
                    { icon: Users, label: "Team Size", value: internship.teamSize },
                    { icon: DollarSign, label: "Field", value: internship.field },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="bg-light-secondary dark:bg-dark-secondary rounded-xl p-3">
                      <div className="flex items-center gap-1.5 text-light-muted-foreground dark:text-dark-muted-foreground mb-1">
                        <Icon className="w-3.5 h-3.5" />
                        <span className="text-xs">{label}</span>
                      </div>
                      <p className="text-xs font-semibold text-light-foreground dark:text-dark-foreground truncate">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 rounded-xl bg-light-accent text-light-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                  Apply Now
                </button>

                <button
                  onClick={() => navigate(-1)}
                  className="w-full py-2.5 rounded-xl border border-light-border dark:border-dark-border text-light-muted-foreground dark:text-dark-muted-foreground text-sm hover:border-light-accent/40 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InternshipDetail;
