// KIT COE Data Store — TypeScript version (mirrors data.js for SSR/static use)

export const INSTITUTION = {
  name: "Kangeyam Institute of Technology",
  shortName: "KIT",
  tneaCode: "2656",
  naacGrade: "A+",
  status: "Autonomous Institution",
  affiliatedTo: "Anna University, Chennai",
  approvedBy: "AICTE, New Delhi",
  ugcStatus: "2(f) & 12(B)",
  address: "EBET Knowledge Park, Nathakadaiyur, Kangeyam – 638 108, Tirupur District, Tamil Nadu, India",
  phones: ["+91 94878 11008", "+91 94878 11044"],
  womenHelpline: "+91 94878 11004",
  email: "coe@kitech.edu.in",
  infoEmail: "info@kitech.edu.in",
  website: "https://www.kitech.edu.in",
  logoUrl: "https://www.kitech.edu.in/assets/bec/images/logo/KIT_Logo_PNG.png",
};

export const ANNOUNCEMENTS = [
  { id: "ANN001", date: "10 Aug 2026", title: "Nov / Dec 2025 End Semester Examination Results Published", tag: "NEW", category: "Results" },
  { id: "ANN002", date: "05 Aug 2026", title: "Notification for Revaluation & Photocopy — Nov/Dec 2025 ESE", tag: "URGENT", category: "Notifications" },
  { id: "ANN003", date: "28 Jul 2026", title: "Time Table for Apr / May 2026 End Semester Theory Examinations", tag: "CIRCULAR", category: "Time Table" },
  { id: "ANN004", date: "15 Jul 2026", title: "Hall Ticket Download for April / May 2026 ESE Now Available", tag: "IMPORTANT", category: "Notifications" },
  { id: "ANN005", date: "01 Jul 2026", title: "Autonomous Curriculum & Regulation 2023 (CBCS) Amendments", tag: "INFO", category: "Regulations" },
];

export const UPCOMING_EXAMS = [
  { title: "End Semester Theory Examinations (Apr/May 2026)", date: "20 Aug 2026", daysLeft: 9, type: "ESE Theory" },
  { title: "End Semester Practical Examinations", date: "16 Aug 2026", daysLeft: 5, type: "Practical" },
  { title: "Continuous Internal Assessment III (CIA-III)", date: "25 Aug 2026", daysLeft: 14, type: "CIA Test" },
  { title: "Special Arrear Examinations (Regulation 2021)", date: "01 Sep 2026", daysLeft: 21, type: "Arrear" },
];

export const EXAM_TYPES = [
  { code: "ESE", name: "End Semester Examinations (Theory)", desc: "Terminal semester evaluation carrying 60% weightage. Conducted under central invigilation with dummy numbering evaluation." },
  { code: "CIA", name: "Continuous Internal Assessment", desc: "Formative assessment carrying 40% weightage. Comprises three internal tests, seminars, technical assignments, and attendance records." },
  { code: "PRAC", name: "Practical & Laboratory Examinations", desc: "Performance-based assessment evaluated jointly by internal faculty and external subject experts appointed by COE." },
  { code: "ARR", name: "Arrear Examinations", desc: "Examinations held alongside regular ESE allowing candidates to clear backlogs in earlier semester courses." },
  { code: "SUPP", name: "Supplementary Examinations", desc: "Fast-track examination exclusively for final-year students with a maximum of two arrear courses to facilitate timely graduation." },
];

export const NOTIFICATIONS = [
  { id: "N01", refNo: "KIT/COE/2026/RES-04", date: "10 Aug 2026", title: "Publication of Nov/Dec 2025 ESE Results", category: "Results" },
  { id: "N02", refNo: "KIT/COE/2026/REV-02", date: "05 Aug 2026", title: "Instructions for Revaluation and Photocopy of Answer Books", category: "Revaluation" },
  { id: "N03", refNo: "KIT/COE/2026/TT-01",  date: "28 Jul 2026", title: "ESE Apr/May 2026 Theory Timetable Released", category: "Time Table" },
  { id: "N04", refNo: "KIT/COE/2026/CIA-03", date: "20 Jul 2026", title: "Conduct of CIA Test III Schedule", category: "Examinations" },
  { id: "N05", refNo: "KIT/COE/2026/HT-01",  date: "15 Jul 2026", title: "Online Hall Ticket Download Guidelines", category: "Hall Ticket" },
  { id: "N06", refNo: "KIT/COE/2026/GEN-08", date: "05 Jul 2026", title: "Scribe Permission & Medical Special Accommodation Rules", category: "Forms" },
  { id: "N07", refNo: "KIT/COE/2026/REG-01", date: "01 Jul 2026", title: "Autonomous Academic Council Regulations 2023 Guidelines", category: "Regulations" },
  { id: "N08", refNo: "KIT/COE/2026/TT-02",  date: "25 Jun 2026", title: "Practical Examination Schedule — Semester VI", category: "Time Table" },
  { id: "N09", refNo: "KIT/COE/2026/SUPP-01",date: "18 Jun 2026", title: "Registration for Supplementary Examinations — Final Year", category: "Examinations" },
  { id: "N10", refNo: "KIT/COE/2026/VAL-01", date: "10 Jun 2026", title: "External Valuation Board Members & Dummy System Manual", category: "Regulations" },
];

export const TIMETABLES = [
  { id: "TT01", degree: "B.E.", dept: "CSE", sem: "VI", regulation: "R2023", examType: "Regular", courseCode: "CS3601", courseTitle: "Distributed Systems & Cloud Computing", examDate: "2026-08-20", session: "FN (09:30–12:30)", hall: "Kalam Hall 101" },
  { id: "TT02", degree: "B.E.", dept: "CSE", sem: "VI", regulation: "R2023", examType: "Regular", courseCode: "CS3602", courseTitle: "Compiler Design", examDate: "2026-08-22", session: "FN (09:30–12:30)", hall: "Kalam Hall 101" },
  { id: "TT03", degree: "B.E.", dept: "CSE", sem: "VI", regulation: "R2023", examType: "Regular", courseCode: "CS3603", courseTitle: "Artificial Intelligence & Machine Learning", examDate: "2026-08-25", session: "FN (09:30–12:30)", hall: "Kalam Hall 102" },
  { id: "TT04", degree: "B.E.", dept: "ECE", sem: "VI", regulation: "R2023", examType: "Regular", courseCode: "EC3601", courseTitle: "VLSI Design & Embedded Systems", examDate: "2026-08-20", session: "AN (13:30–16:30)", hall: "Ramanujan Block 204" },
  { id: "TT05", degree: "B.Tech", dept: "AIDS", sem: "IV", regulation: "R2023", examType: "Regular", courseCode: "AD3401", courseTitle: "Deep Learning Architectures", examDate: "2026-08-21", session: "FN (09:30–12:30)", hall: "Kalam Hall 203" },
  { id: "TT06", degree: "B.E.", dept: "MECH", sem: "VI", regulation: "R2021", examType: "Regular", courseCode: "ME3601", courseTitle: "Design of Machine Elements", examDate: "2026-08-24", session: "FN (09:30–12:30)", hall: "Visvesvaraya Hall 105" },
  { id: "TT07", degree: "B.E.", dept: "EEE", sem: "IV", regulation: "R2023", examType: "Regular", courseCode: "EE3402", courseTitle: "Power Electronics & Drives", examDate: "2026-08-26", session: "AN (13:30–16:30)", hall: "Tesla Block 301" },
  { id: "TT08", degree: "MBA", dept: "MBA", sem: "II", regulation: "R2023", examType: "Regular", courseCode: "BA3201", courseTitle: "Strategic Management & Corporate Governance", examDate: "2026-08-27", session: "FN (09:30–12:30)", hall: "MBA Seminar Hall" },
];

export const REGULATIONS = [
  {
    code: "R2023", title: "Regulation 2023 — Autonomous CBCS",
    applicableFor: "Batch 2023–2027 onwards (B.E. / B.Tech / M.E. / MBA)",
    highlights: [
      "Relative / Absolute Grading on a 10-point scale.",
      "CIA: 40% | ESE: 60%. Minimum pass: 45% in ESE, 50% overall.",
      "Fast-track graduation & industry internship credit waivers.",
    ],
    pdfLink: "https://docs.kitech.edu.in/Downloads/regulations/R2023_Autonomous_Regulations.pdf",
  },
  {
    code: "R2021", title: "Regulation 2021 — Anna University Affiliated",
    applicableFor: "Batch 2021–2025 & 2022–2026",
    highlights: [
      "Choice Based Credit System with Honors & Minor Specializations.",
      "Internal: 40 Marks (3 Tests + Assignments) | ESE: 60 Marks.",
      "Grade Scale: O(10), A+(9), A(8), B+(7), B(6), C(5), RA(0).",
    ],
    pdfLink: "https://docs.kitech.edu.in/Downloads/regulations/R2021_Academic_Regulations.pdf",
  },
];

export const STAFF = [
  { name: "Dr. K. S. Saravanan", role: "Controller of Examinations", email: "coe@kitech.edu.in", phone: "+91 94878 11008 (Ext 101)" },
  { name: "Prof. P. Ramesh", role: "Deputy COE (UG)", email: "dcoe.ug@kitech.edu.in", phone: "Ext 102" },
  { name: "Dr. S. Meenakshi", role: "Deputy COE (PG & Research)", email: "dcoe.pg@kitech.edu.in", phone: "Ext 103" },
  { name: "Mr. M. Senthil Kumar", role: "Asst. COE (IT & Automation)", email: "acoe.it@kitech.edu.in", phone: "Ext 104" },
  { name: "Mrs. R. Kavitha", role: "Section Officer (Confidential)", email: "so.exam@kitech.edu.in", phone: "Ext 105" },
];

export const FORMS = [
  { code: "COE-F01", title: "Application for Revaluation of Answer Scripts", category: "Revaluation", format: "PDF (180 KB)" },
  { code: "COE-F02", title: "Application for Issue of Transcripts", category: "Transcripts", format: "PDF (220 KB)" },
  { code: "COE-F03", title: "Duplicate Grade Sheet / Degree Certificate Request", category: "Certificates", format: "PDF (200 KB)" },
  { code: "COE-F04", title: "Name Correction in Grade Sheet", category: "Corrections", format: "PDF (150 KB)" },
  { code: "COE-F05", title: "Scribe Permission & Medical Certificate Request", category: "Special Request", format: "PDF (210 KB)" },
];

export const DEMO_STUDENTS: Record<string, Student> = {
  "731821104001": {
    registerNo: "731821104001", name: "DHARANI S", dob: "2003-05-14",
    degree: "B.E.", branch: "Computer Science & Engineering",
    batch: "2021–2025", semester: "VI", regulation: "R2021",
    cgpa: 8.74, sgpa: 8.85, hallNo: "Kalam Hall 101",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&fit=crop&auto=format",
    results: [
      { code: "CS8601", title: "Mobile Computing", credits: 3, grade: "O",  points: 10, result: "PASS" },
      { code: "CS8602", title: "Compiler Design", credits: 4, grade: "A+", points: 9,  result: "PASS" },
      { code: "CS8603", title: "Distributed Systems", credits: 3, grade: "A+", points: 9, result: "PASS" },
      { code: "CS8651", title: "Internet of Things", credits: 3, grade: "A", points: 8, result: "PASS" },
      { code: "CS8691", title: "Artificial Intelligence", credits: 3, grade: "O", points: 10, result: "PASS" },
    ],
    examSchedule: [
      { code: "CS8601", title: "Mobile Computing", date: "2026-08-20", session: "FN", hall: "Kalam Hall 101" },
      { code: "CS8602", title: "Compiler Design", date: "2026-08-22", session: "FN", hall: "Kalam Hall 101" },
    ],
  },
  "731822104025": {
    registerNo: "731822104025", name: "KARTHIK K", dob: "2004-11-20",
    degree: "B.E.", branch: "Computer Science & Engineering",
    batch: "2022–2026", semester: "IV", regulation: "R2023",
    cgpa: 8.12, sgpa: 8.20, hallNo: "Kalam Hall 202",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&fit=crop&auto=format",
    results: [
      { code: "CS3401", title: "Database Management Systems", credits: 3, grade: "A+", points: 9, result: "PASS" },
      { code: "CS3402", title: "Operating Systems", credits: 3, grade: "A", points: 8, result: "PASS" },
      { code: "CS3403", title: "Design & Analysis of Algorithms", credits: 4, grade: "B+", points: 7, result: "PASS" },
    ],
    examSchedule: [
      { code: "CS3401", title: "Database Management Systems", date: "2026-08-21", session: "FN", hall: "Kalam Hall 202" },
      { code: "CS3402", title: "Operating Systems", date: "2026-08-23", session: "FN", hall: "Kalam Hall 202" },
    ],
  },
};

export interface Student {
  registerNo: string; name: string; dob: string;
  degree: string; branch: string; batch: string; semester: string; regulation: string;
  cgpa: number; sgpa: number; hallNo: string; photoUrl: string;
  results: { code: string; title: string; credits: number; grade: string; points: number; result: string }[];
  examSchedule: { code: string; title: string; date: string; session: string; hall: string }[];
}

export const FACULTY_MARKS_ROSTER = [
  { regNo: "731821104001", name: "DHARANI S",  test1: 88, test2: 92, test3: 90, assign: 5, att: 5, total: 38 },
  { regNo: "731821104002", name: "GOKUL K",    test1: 75, test2: 80, test3: 78, assign: 4, att: 5, total: 32 },
  { regNo: "731821104003", name: "HARINI R",   test1: 95, test2: 96, test3: 94, assign: 5, att: 5, total: 39 },
  { regNo: "731821104004", name: "JAGAN M",    test1: 65, test2: 70, test3: 68, assign: 4, att: 4, total: 29 },
];

export const INVIGILATION_DUTIES = [
  { date: "2026-08-20", session: "FN (09:30–12:30)", hall: "Kalam Hall 101", course: "CS3601 — Distributed Systems", role: "Hall Invigilator" },
  { date: "2026-08-22", session: "FN (09:30–12:30)", hall: "Kalam Hall 101", course: "CS3602 — Compiler Design", role: "Hall Invigilator" },
  { date: "2026-08-25", session: "FN (09:30–12:30)", hall: "Ramanujan Block 204", course: "EC3601 — VLSI Design", role: "Squad Member" },
];
