// TypeScript Interfaces for KIT COE Portal

export type UserRole = 'GUEST' | 'STUDENT' | 'FACULTY' | 'COE_ADMIN';

export interface AuthUser {
  id: string;
  name: string;
  role: UserRole;
  registerNo?: string;   // STUDENT only
  staffId?: string;      // FACULTY only
  email?: string;        // COE_ADMIN only
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  tag: string;
  category: string;
}

export interface UpcomingExam {
  title: string;
  date: string;
  daysLeft: number;
  type: string;
}

export interface ExamType {
  code: string;
  name: string;
  desc: string;
}

export interface Notification {
  id: string;
  refNo: string;
  date: string;
  title: string;
  category: string;
}

export interface TimetableEntry {
  id: string;
  degree: string;
  dept: string;
  sem: string;
  regulation: string;
  examType: string;
  courseCode: string;
  courseTitle: string;
  examDate: string;
  session: string;
  hall: string;
}

export interface ResultEntry {
  code: string;
  title: string;
  credits: number;
  grade: string;
  points: number;
  result: 'PASS' | 'FAIL';
}

export interface ExamScheduleEntry {
  code: string;
  title: string;
  date: string;
  session: string;
  hall: string;
}

export interface Student {
  registerNo: string;
  name: string;
  dob: string;
  degree: string;
  branch: string;
  batch: string;
  semester: string;
  regulation: string;
  cgpa: number;
  sgpa: number;
  hallNo: string;
  photoUrl: string;
  results: ResultEntry[];
  examSchedule: ExamScheduleEntry[];
}

export interface StaffMember {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface Regulation {
  code: string;
  title: string;
  applicableFor: string;
  highlights: string[];
  pdfLink: string;
}

export interface DownloadForm {
  code: string;
  title: string;
  category: string;
  format: string;
}

export interface FacultyMarksEntry {
  regNo: string;
  name: string;
  test1: number;
  test2: number;
  test3: number;
  assign: number;
  att: number;
  total: number;
}

export interface InvigilationDuty {
  date: string;
  session: string;
  hall: string;
  course: string;
  role: string;
}
