# WizUP Portal - Complete Login Guide

## 🔐 Student Login Credentials

### Default Student Accounts
All default student accounts use the same password: **`student123`**

| Student UID | Name | Email | Roll Number | Department |
|-------------|-------|-------|-------------|------------|
| **STU001** | Alice Johnson | alice.johnson@university.edu | CS301001 | Computer Science |
| **STU002** | Bob Smith | bob.smith@university.edu | CS301002 | Computer Science |
| **STU003** | Charlie Brown | charlie.brown@university.edu | CS301003 | Computer Science |
| **STU004** | Diana Prince | diana.prince@university.edu | CS301004 | Computer Science |
| **STU005** | Edward Norton | edward.norton@university.edu | CS301005 | Computer Science |
| **STU006** | Fiona Green | fiona.green@university.edu | CS301006 | Computer Science |
| **STU007** | George Wilson | george.wilson@university.edu | CS301007 | Computer Science |
| **STU008** | Hannah Montana | hannah.montana@university.edu | CS301008 | Computer Science |

### How to Login as Student:
1. Go to `student-signin.html`
2. Enter any Student UID (e.g., `STU001`)
3. Enter password: `student123`
4. Click "Sign In"
5. You'll be redirected to the student dashboard

---

## 👨‍🏫 Faculty Login Credentials

### Default Faculty Accounts
All default faculty accounts use the same password: **`faculty123`**

| Faculty Email | Name | Department | Subjects |
|--------------|-------|-------------|-----------|
| **john.smith@university.edu** | Dr. John Smith | Computer Science | Java Programming, Communication Skills |
| **sarah.johnson@university.edu** | Dr. Sarah Johnson | Computer Science | Software Engineering, Applied System Design, Deep Learning |
| **michael.chen@university.edu** | Prof. Michael Chen | Computer Science | Advanced Machine Learning, Competitive Coding |

### How to Login as Faculty:
1. Go to `Faculty Login/faculty-signin.html`
2. Enter any Faculty Email (e.g., `john.smith@university.edu`)
3. Enter password: `faculty123`
4. Click "Sign In"
5. You'll be redirected to the faculty dashboard

---

## 🎯 Portal Features

### Student Portal Features:
- **Dashboard**: Overview of academics, accounts, and quick actions
- **My Courses**: View subjects, attendance, and performance
- **Timetable**: Weekly and monthly class schedules
- **LMS**: Learning Management System with resources
- **Attendance Predictor**: Predict future attendance trends
- **Fee Payment**: Pay tuition and other fees
- **Accounts Receipt**: View payment receipts
- **General Leave**: Apply for leave requests
- **Anti-Ragging**: Anti-ragging resources and reporting

### Faculty Portal Features:
- **Dashboard**: Overview of classes and pending tasks
- **Mark Attendance**: Record student attendance with medical leave restrictions
- **Upload Internal Marks**: Submit assessment marks with grade calculation
- **Student Analytics**: View comprehensive student performance analytics
- **Duty Leave Approvals**: Approve/reject student duty leave requests
- **Marks Disputes**: Review and comment on student marks disputes

---

## 🔒 Security Features

### Student Restrictions:
- Can only view their own data
- Cannot access other student information
- Session-based authentication
- Automatic logout on session expiry

### Faculty Restrictions:
- Can only mark attendance for their assigned subjects
- Cannot edit other faculty's subjects
- Medical leave system locks attendance editing
- Subject-based access control

---

## 💾 Data Management

### LocalStorage Keys:
- `wizup.users`: All student accounts
- `wizup.currentFaculty`: Current faculty session
- `wizup.currentUser`: Current student session
- `wizup.subjects`: Subject information
- `wizup.timetable`: Class schedules
- `wizup.fees`: Fee structure

### Data Persistence:
- All data is stored in browser localStorage
- Data persists across browser sessions
- Can be cleared by clearing browser data
- Initial data auto-populates on first load

---

## 🚀 Getting Started

1. **For Testing**: Use any of the default accounts above
2. **For Students**: Login with `STU001` to `STU008` and password `student123`
3. **For Faculty**: Login with any faculty email and password `faculty123`
4. **New Registration**: Students can create new accounts via signup page

---

## 📱 Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile: Responsive design supported

---

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Custom CSS with glassmorphism design
- **Icons**: Font Awesome 6.5.0
- **Charts**: Chart.js (for analytics)
- **Storage**: Browser localStorage
- **Authentication**: Client-side session management

---

*Last Updated: January 2024*
*Version: 2.0*
