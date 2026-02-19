// Shared data for WizUP pages

// Default Student Accounts
window.WIZUP_STUDENTS = [
    {
        uid: "STU001",
        name: "Alice Johnson",
        email: "alice.johnson@university.edu",
        password: "student123",
        rollNo: "CS301001",
        semester: "3",
        department: "Computer Science",
        batch: "2022-2026",
        phone: "+1-234-567-8901"
    },
    {
        uid: "STU002", 
        name: "Bob Smith",
        email: "bob.smith@university.edu",
        password: "student123",
        rollNo: "CS301002",
        semester: "3",
        department: "Computer Science",
        batch: "2022-2026",
        phone: "+1-234-567-8902"
    },
    {
        uid: "STU003",
        name: "Charlie Brown", 
        email: "charlie.brown@university.edu",
        password: "student123",
        rollNo: "CS301003",
        semester: "3",
        department: "Computer Science",
        batch: "2022-2026",
        phone: "+1-234-567-8903"
    },
    {
        uid: "STU004",
        name: "Diana Prince",
        email: "diana.prince@university.edu", 
        password: "student123",
        rollNo: "CS301004",
        semester: "3",
        department: "Computer Science",
        batch: "2022-2026",
        phone: "+1-234-567-8904"
    },
    {
        uid: "STU005",
        name: "Edward Norton",
        email: "edward.norton@university.edu",
        password: "student123", 
        rollNo: "CS301005",
        semester: "3",
        department: "Computer Science",
        batch: "2022-2026",
        phone: "+1-234-567-8905"
    },
    {
        uid: "STU006",
        name: "Fiona Green",
        email: "fiona.green@university.edu",
        password: "student123",
        rollNo: "CS301006", 
        semester: "3",
        department: "Computer Science",
        batch: "2022-2026",
        phone: "+1-234-567-8906"
    },
    {
        uid: "STU007",
        name: "George Wilson",
        email: "george.wilson@university.edu",
        password: "student123",
        rollNo: "CS301007",
        semester: "3", 
        department: "Computer Science",
        batch: "2022-2026",
        phone: "+1-234-567-8907"
    },
    {
        uid: "STU008",
        name: "Hannah Montana",
        email: "hannah.montana@university.edu",
        password: "student123",
        rollNo: "CS301008",
        semester: "3",
        department: "Computer Science", 
        batch: "2022-2026",
        phone: "+1-234-567-8908"
    }
];

// Subject Data
window.WIZUP_SUBJECTS = [
  { id: "java-programming", name: "Java Programming", total: 60, attended: 54, minRequired: 75, code: "CS301", credits: 4, faculty: "Dr. John Smith" },
  { id: "minor-project", name: "Minor Project", total: 60, attended: 30, minRequired: 75, code: "CS302", credits: 3, faculty: "Dr. Sarah Johnson" },
  { id: "applied-system-design", name: "Applied System Design", total: 60, attended: 45, minRequired: 75, code: "CS303", credits: 3, faculty: "Dr. Sarah Johnson" },
  { id: "software-engineering", name: "Software Engineering", total: 60, attended: 55, minRequired: 75, code: "CS304", credits: 4, faculty: "Dr. Sarah Johnson" },
  { id: "deep-learning", name: "Deep Learning", total: 60, attended: 53, minRequired: 75, code: "CS305", credits: 4, faculty: "Dr. Sarah Johnson" },
  { id: "advanced-machine-learning", name: "Advanced Machine Learning", total: 60, attended: 60, minRequired: 75, code: "CS306", credits: 4, faculty: "Prof. Michael Chen" },
  { id: "communication-skills", name: "Communication Skills", total: 60, attended: 49, minRequired: 75, code: "CS307", credits: 2, faculty: "Dr. John Smith" },
  { id: "competitive-coding-2", name: "Competitive Coding - II", total: 60, attended: 55, minRequired: 75, code: "CS308", credits: 2, faculty: "Prof. Michael Chen" }
];

// Timetable Data
window.WIZUP_TIMETABLE = {
    monday: [
        { time: "09:00-10:00", subject: "Java Programming", faculty: "Dr. John Smith", room: "CS-101", type: "Lecture" },
        { time: "10:00-11:00", subject: "Software Engineering", faculty: "Dr. Sarah Johnson", room: "CS-102", type: "Lecture" },
        { time: "11:00-12:00", subject: "Applied System Design", faculty: "Dr. Sarah Johnson", room: "CS-103", type: "Lecture" },
        { time: "12:00-01:00", subject: "Lunch Break", faculty: "-", room: "-", type: "Break" },
        { time: "01:00-02:00", subject: "Java Programming", faculty: "Dr. John Smith", room: "CS-Lab1", type: "Lab" },
        { time: "02:00-03:00", subject: "Deep Learning", faculty: "Dr. Sarah Johnson", room: "CS-104", type: "Lecture" }
    ],
    tuesday: [
        { time: "09:00-10:00", subject: "Deep Learning", faculty: "Dr. Sarah Johnson", room: "CS-105", type: "Lecture" },
        { time: "10:00-11:00", subject: "Advanced Machine Learning", faculty: "Prof. Michael Chen", room: "CS-106", type: "Lecture" },
        { time: "11:00-12:00", subject: "Software Engineering", faculty: "Dr. Sarah Johnson", room: "CS-Lab2", type: "Lab" },
        { time: "12:00-01:00", subject: "Lunch Break", faculty: "-", room: "-", type: "Break" },
        { time: "01:00-02:00", subject: "Competitive Coding - II", faculty: "Prof. Michael Chen", room: "CS-Lab3", type: "Lab" },
        { time: "02:00-03:00", subject: "Java Programming", faculty: "Dr. John Smith", room: "CS-107", type: "Tutorial" }
    ],
    wednesday: [
        { time: "09:00-10:00", subject: "Applied System Design", faculty: "Dr. Sarah Johnson", room: "CS-108", type: "Lecture" },
        { time: "10:00-11:00", subject: "Java Programming", faculty: "Dr. John Smith", room: "CS-109", type: "Lecture" },
        { time: "11:00-12:00", subject: "Advanced Machine Learning", faculty: "Prof. Michael Chen", room: "CS-110", type: "Lecture" },
        { time: "12:00-01:00", subject: "Lunch Break", faculty: "-", room: "-", type: "Break" },
        { time: "01:00-02:00", subject: "Deep Learning", faculty: "Dr. Sarah Johnson", room: "CS-Lab4", type: "Lab" },
        { time: "02:00-03:00", subject: "Software Engineering", faculty: "Dr. Sarah Johnson", room: "CS-111", type: "Tutorial" }
    ],
    thursday: [
        { time: "09:00-10:00", subject: "Advanced Machine Learning", faculty: "Prof. Michael Chen", room: "CS-112", type: "Lecture" },
        { time: "10:00-11:00", subject: "Competitive Coding - II", faculty: "Prof. Michael Chen", room: "CS-113", type: "Lecture" },
        { time: "11:00-12:00", subject: "Deep Learning", faculty: "Dr. Sarah Johnson", room: "CS-114", type: "Lecture" },
        { time: "12:00-01:00", subject: "Lunch Break", faculty: "-", room: "-", type: "Break" },
        { time: "01:00-02:00", subject: "Applied System Design", faculty: "Dr. Sarah Johnson", room: "CS-Lab5", type: "Lab" },
        { time: "02:00-03:00", subject: "Java Programming", faculty: "Dr. John Smith", room: "CS-115", type: "Tutorial" }
    ],
    friday: [
        { time: "09:00-10:00", subject: "Software Engineering", faculty: "Dr. Sarah Johnson", room: "CS-116", type: "Lecture" },
        { time: "10:00-11:00", subject: "Competitive Coding - II", faculty: "Prof. Michael Chen", room: "CS-Lab6", type: "Lab" },
        { time: "11:00-12:00", subject: "Advanced Machine Learning", faculty: "Prof. Michael Chen", room: "CS-117", type: "Tutorial" },
        { time: "12:00-01:00", subject: "Lunch Break", faculty: "-", room: "-", type: "Break" },
        { time: "01:00-02:00", subject: "Applied System Design", faculty: "Dr. Sarah Johnson", room: "CS-118", type: "Tutorial" },
        { time: "02:00-03:00", subject: "Project Work", faculty: "All Faculty", room: "CS-Project Lab", type: "Project" }
    ]
};

// Fee Structure
window.WIZUP_FEES = {
    tuition: 50000,
    library: 5000,
    laboratory: 8000,
    examination: 3000,
    hostel: 25000,
    mess: 15000,
    transportation: 6000,
    other: 2000
};

// Small helper to compute percentage
window.wizupCalcPercent = function(attended, total, opts) {
  const t = Number(total) || 1;
  const a = Number(attended) || 0;
  return ((a / t) * 100);
};

// Initialize student data if not exists
function initializeStudentData() {
    try {
        // Initialize students if not exists
        if (!localStorage.getItem('wizup.users')) {
            localStorage.setItem('wizup.users', JSON.stringify(window.WIZUP_STUDENTS));
        }
        
        // Initialize subjects if not exists
        if (!localStorage.getItem('wizup.subjects')) {
            localStorage.setItem('wizup.subjects', JSON.stringify(window.WIZUP_SUBJECTS));
        }
        
        // Initialize timetable if not exists
        if (!localStorage.getItem('wizup.timetable')) {
            localStorage.setItem('wizup.timetable', JSON.stringify(window.WIZUP_TIMETABLE));
        }
        
        // Initialize fee structure if not exists
        if (!localStorage.getItem('wizup.fees')) {
            localStorage.setItem('wizup.fees', JSON.stringify(window.WIZUP_FEES));
        }
        
        console.log('Student data initialized successfully');
    } catch (error) {
        console.error('Error initializing student data:', error);
    }
}

// Auto-initialize when script loads
initializeStudentData();
