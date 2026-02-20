// Timetable data based on tt.jpg image
const timetableData = {
    "monday": [
        { time: "9:00-10:00", subject: "23TDT274 - Aptitude_TPP", faculty: "Mr. Rahul Singh", room: "CS-101" },
        { time: "10:00-11:00", subject: "23CAH256 - Multimedia and Animation", faculty: "Ms. Jasleen Kaur", room: "CS-102" },
        { time: "11:00-12:00", subject: "23CAP252 - Database Management System Lab", faculty: "Mr. Anup Kumar Singh", room: "CS-LAB1" },
        { time: "12:00-1:00", subject: "LUNCH BREAK", faculty: "", room: "" },
        { time: "1:00-2:00", subject: "23CAT251 - Database Management System", faculty: "Mr. Anup Kumar Singh", room: "CS-103" },
        { time: "2:00-3:00", subject: "23CAT253 - Artificial Intelligence", faculty: "Dr. Kiran Shashwat", room: "CS-104" },
        { time: "3:00-4:00", subject: "23TDP273 - Soft Skill_TPP", faculty: "Ms. Jasmeet Kaur", room: "CS-105" }
    ],
    "tuesday": [
        { time: "9:00-10:00", subject: "23CAT251 - Database Management System", faculty: "Mr. Anup Kumar Singh", room: "CS-103" },
        { time: "10:00-11:00", subject: "23CAT253 - Artificial Intelligence", faculty: "Dr. Kiran Shashwat", room: "CS-104" },
        { time: "11:00-12:00", subject: "MEO361 - Automobile Engineering", faculty: "Er. Tarsem Singh", room: "CS-106" },
        { time: "12:00-1:00", subject: "LUNCH BREAK", faculty: "", room: "" },
        { time: "1:00-2:00", subject: "23TDT274 - Aptitude_TPP", faculty: "Mr. Rahul Singh", room: "CS-101" },
        { time: "2:00-3:00", subject: "LFO441 - French", faculty: "Ms. Shivani Chadha", room: "CS-107" },
        { time: "3:00-4:00", subject: "23UCT297 - Gender Equality and Empowerment", faculty: "Ms. Gurjit Kaur Parmar", room: "CS-108" }
    ],
    "wednesday": [
        { time: "9:00-10:00", subject: "23CAH256 - Multimedia and Animation", faculty: "Ms. Jasleen Kaur", room: "CS-102" },
        { time: "10:00-11:00", subject: "23CAP252 - Database Management System Lab", faculty: "Mr. Anup Kumar Singh", room: "CS-LAB1" },
        { time: "11:00-12:00", subject: "23TDP273 - Soft Skill_TPP", faculty: "Ms. Jasmeet Kaur", room: "CS-105" },
        { time: "12:00-1:00", subject: "LUNCH BREAK", faculty: "", room: "" },
        { time: "1:00-2:00", subject: "23CAT253 - Artificial Intelligence", faculty: "Dr. Kiran Shashwat", room: "CS-104" },
        { time: "2:00-3:00", subject: "23UCT297 - Gender Equality and Empowerment", faculty: "Ms. Gurjit Kaur Parmar", room: "CS-108" },
        { time: "3:00-4:00", subject: "TTO202 - Professional Tour and Planning", faculty: "Ms. Bhawan Preet Kaur", room: "CS-109" }
    ],
    "thursday": [
        { time: "9:00-10:00", subject: "23TDT274 - Aptitude_TPP", faculty: "Mr. Rahul Singh", room: "CS-101" },
        { time: "10:00-11:00", subject: "23CAT251 - Database Management System", faculty: "Mr. Anup Kumar Singh", room: "CS-103" },
        { time: "11:00-12:00", subject: "MEO361 - Automobile Engineering", faculty: "Er. Tarsem Singh", room: "CS-106" },
        { time: "12:00-1:00", subject: "LUNCH BREAK", faculty: "", room: "" },
        { time: "1:00-2:00", subject: "23CAH256 - Multimedia and Animation", faculty: "Ms. Jasleen Kaur", room: "CS-102" },
        { time: "2:00-3:00", subject: "LFO441 - French", faculty: "Ms. Shivani Chadha", room: "CS-107" },
        { time: "3:00-4:00", subject: "23CAP252 - Database Management System Lab", faculty: "Mr. Anup Kumar Singh", room: "CS-LAB1" }
    ],
    "friday": [
        { time: "9:00-10:00", subject: "23CAT253 - Artificial Intelligence", faculty: "Dr. Kiran Shashwat", room: "CS-104" },
        { time: "10:00-11:00", subject: "23TDP273 - Soft Skill_TPP", faculty: "Ms. Jasmeet Kaur", room: "CS-105" },
        { time: "11:00-12:00", subject: "23UCT297 - Gender Equality and Empowerment", faculty: "Ms. Gurjit Kaur Parmar", room: "CS-108" },
        { time: "12:00-1:00", subject: "LUNCH BREAK", faculty: "", room: "" },
        { time: "1:00-2:00", subject: "23TDT274 - Aptitude_TPP", faculty: "Mr. Rahul Singh", room: "CS-101" },
        { time: "2:00-3:00", subject: "MEO361 - Automobile Engineering", faculty: "Er. Tarsem Singh", room: "CS-106" },
        { time: "3:00-4:00", subject: "TTO202 - Professional Tour and Planning", faculty: "Ms. Bhawan Preet Kaur", room: "CS-109" }
    ],
    "saturday": [
        { time: "9:00-10:00", subject: "LFO441 - French", faculty: "Ms. Shivani Chadha", room: "CS-107" },
        { time: "10:00-11:00", subject: "23CAH256 - Multimedia and Animation", faculty: "Ms. Jasleen Kaur", room: "CS-102" },
        { time: "11:00-12:00", subject: "23CAP252 - Database Management System Lab", faculty: "Mr. Anup Kumar Singh", room: "CS-LAB1" },
        { time: "12:00-1:00", subject: "LUNCH BREAK", faculty: "", room: "" },
        { time: "1:00-2:00", subject: "FREE PERIOD", faculty: "", room: "" },
        { time: "2:00-3:00", subject: "FREE PERIOD", faculty: "", room: "" },
        { time: "3:00-4:00", subject: "FREE PERIOD", faculty: "", room: "" }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = timetableData;
} else {
    window.timetableData = timetableData;
}
