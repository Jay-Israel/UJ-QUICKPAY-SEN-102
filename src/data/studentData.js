export const studentProfile = {
  name: "Joshua Favour Ajagbe",
  matricNumber: "UJ2025CP0454",
  programme: "Software Engineering",
  level: "100 Level",
  faculty: "Computing",
  email: "uj2025cp0454@student.unijos.edu.ng",
};

export const feeItems = [
  {
    id: "tuition",
    title: "Tuition Fee",
    category: "Academics",
    amount: 175000,
    dueDate: "2026-08-16",
    status: "Due",
  },
  {
    id: "acceptance",
    title: "Acceptance Fee",
    category: "Admissions",
    amount: 30000,
    dueDate: "2026-08-02",
    status: "Priority",
  },
  {
    id: "hostel",
    title: "Hostel Allocation",
    category: "Accommodation",
    amount: 32000,
    dueDate: "2026-09-01",
    status: "Open",
  },
  {
    id: "medical",
    title: "Medical Screening",
    category: "Health Services",
    amount: 7500,
    dueDate: "2026-08-21",
    status: "Open",
  },
];

export const supportChannels = [
  {
    title: "Bursary Desk",
    detail: "Payment confirmation, reversals, and fee clearance",
    contact: "bursary@unijos.edu.ng",
  },
  {
    title: "ICT Helpdesk",
    detail: "Portal access, wallet issues, and receipt downloads",
    contact: "ictsupport@unijos.edu.ng",
  },
  {
    title: "Student Affairs",
    detail: "Hostel payments, accommodation status, and student records",
    contact: "studentaffairs@unijos.edu.ng",
  },
];

export const loanPlans = [
  {
    id: "fee-installment",
    title: "School Fee Installment Plan",
    amount: 75000,
    tenor: "3 months",
    rate: "0%",
    status: "Available",
    detail: "Split approved tuition and registration charges into monthly campus payments.",
  },
  {
    id: "emergency-support",
    title: "Emergency Fee Support",
    amount: 40000,
    tenor: "8 weeks",
    rate: "1.5%",
    status: "Review",
    detail: "Short-term support for time-sensitive academic clearance and exam registration.",
  },
  {
    id: "device-support",
    title: "Learning Device Support",
    amount: 120000,
    tenor: "6 months",
    rate: "2%",
    status: "Coming Soon",
    detail: "Structured support for approved learning devices and departmental tools.",
  },
];
