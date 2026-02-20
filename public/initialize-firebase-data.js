// Updated Firebase Data Initialization Script
// Run this script to populate Firebase with new data from Data.txt

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBoNB2F92N7HHFBi4czFZsElGc9q0qa1o",
  authDomain: "wizup-c5435.firebaseapp.com",
  projectId: "wizup-c5435",
  storageBucket: "wizup-c5435.firebasestorage.app",
  messagingSenderId: "14007985235",
  appId: "1:14007985235:web:e3ebbc4efc7d24445192a6",
  measurementId: "G-MQPHL7QK8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Student data from Data.txt
const students = [
    { uid: "STU001", name: "Aarav Sharma", email: "aarav.sharma@wizup.edu", password: "student123", rollNo: "CS301001", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8901", role: "student" },
    { uid: "STU002", name: "Riya Verma", email: "riya.verma@wizup.edu", password: "student123", rollNo: "CS301002", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8902", role: "student" },
    { uid: "STU003", name: "Aditya Singh", email: "aditya.singh@wizup.edu", password: "student123", rollNo: "CS301003", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8903", role: "student" },
    { uid: "STU004", name: "Sneha Kapoor", email: "sneha.kapoor@wizup.edu", password: "student123", rollNo: "CS301004", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8904", role: "student" },
    { uid: "STU005", name: "Kunal Mehta", email: "kunal.mehta@wizup.edu", password: "student123", rollNo: "CS301005", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8905", role: "student" },
    { uid: "STU006", name: "Priya Nair", email: "priya.nair@wizup.edu", password: "student123", rollNo: "CS301006", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8906", role: "student" },
    { uid: "STU007", name: "Arjun Gupta", email: "arjun.gupta@wizup.edu", password: "student123", rollNo: "CS301007", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8907", role: "student" },
    { uid: "STU008", name: "Neha Yadav", email: "neha.yadav@wizup.edu", password: "student123", rollNo: "CS301008", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8908", role: "student" },
    { uid: "STU009", name: "Rohit Malhotra", email: "rohit.malhotra@wizup.edu", password: "student123", rollNo: "CS301009", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8909", role: "student" },
    { uid: "STU010", name: "Ananya Iyer", email: "ananya.iyer@wizup.edu", password: "student123", rollNo: "CS301010", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8910", role: "student" },
    { uid: "STU011", name: "Sarthak Jain", email: "sarthak.jain@wizup.edu", password: "student123", rollNo: "CS301011", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8911", role: "student" },
    { uid: "STU012", name: "Mehak Arora", email: "mehak.arora@wizup.edu", password: "student123", rollNo: "CS301012", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8912", role: "student" },
    { uid: "STU013", name: "Harsh Vardhan", email: "harsh.vardhan@wizup.edu", password: "student123", rollNo: "CS301013", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8913", role: "student" },
    { uid: "STU014", name: "Kavya Reddy", email: "kavya.reddy@wizup.edu", password: "student123", rollNo: "CS301014", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8914", role: "student" },
    { uid: "STU015", name: "Devansh Chauhan", email: "devansh.chauhan@wizup.edu", password: "student123", rollNo: "CS301015", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8915", role: "student" },
    { uid: "STU016", name: "Simran Kaur", email: "simran.kaur@wizup.edu", password: "student123", rollNo: "CS301016", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8916", role: "student" },
    { uid: "STU017", name: "Yash Thakur", email: "yash.thakur@wizup.edu", password: "student123", rollNo: "CS301017", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8917", role: "student" },
    { uid: "STU018", name: "Ishita Bansal", email: "ishita.bansal@wizup.edu", password: "student123", rollNo: "CS301018", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8918", role: "student" },
    { uid: "STU019", name: "Manav Joshi", email: "manav.joshi@wizup.edu", password: "student123", rollNo: "CS301019", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8919", role: "student" },
    { uid: "STU020", name: "Pooja Choudhary", email: "pooja.choudhary@wizup.edu", password: "student123", rollNo: "CS301020", semester: "3", department: "Computer Science", batch: "2022-2026", phone: "+1-234-567-8920", role: "student" }
];

// Faculty data from Data.txt
const faculty = [
    { uid: "FAC001", name: "Mr. Rahul Singh", email: "rahul.singh@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Assistant Professor", role: "faculty" },
    { uid: "FAC002", name: "Ms. Jasleen Kaur", email: "jasleen.kaur@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Assistant Professor", role: "faculty" },
    { uid: "FAC003", name: "Mr. Anup Kumar Singh", email: "anup.singh@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Associate Professor", role: "faculty" },
    { uid: "FAC004", name: "Ms. Jasmeet Kaur", email: "jasmeet.kaur@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Assistant Professor", role: "faculty" },
    { uid: "FAC005", name: "Ms. Shivani Chadha", email: "shivani.chadha@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Lecturer", role: "faculty" },
    { uid: "FAC006", name: "Er. Tarsem Singh", email: "tarsem.singh@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Assistant Professor", role: "faculty" },
    { uid: "FAC007", name: "Ms. Gurjit Kaur Parmar", email: "gurjit.parmar@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Lecturer", role: "faculty" },
    { uid: "FAC008", name: "Ms. Bhawan Preet Kaur", email: "bhawanpreet.kaur@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Assistant Professor", role: "faculty" },
    { uid: "FAC009", name: "Ms. Ambika", email: "ambika@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Lecturer", role: "faculty" },
    { uid: "FAC010", name: "Dr. Kiran Shashwat", email: "kiran.shashwat@wizup.edu", password: "faculty123", department: "Computer Science", designation: "Professor", role: "faculty" }
];

// HOD/Admin data
const admins = [
    { uid: "ADM001", name: "Ms. Priti Sharma", email: "priti.sharma@wizup.edu", password: "admin123", department: "Computer Science", designation: "Head of Department", role: "hod" }
];

// Subjects data from Data.txt
const subjects = [
    { code: "23TDT274", name: "Aptitude_TPP", credits: 3, faculty: "Mr. Rahul Singh", semester: "3", department: "Computer Science", totalClasses: 45, description: "Technical aptitude and problem solving" },
    { code: "23CAH256", name: "Multimedia and Animation", credits: 4, faculty: "Ms. Jasleen Kaur", semester: "3", department: "Computer Science", totalClasses: 60, description: "Multimedia technologies and animation techniques" },
    { code: "23CAP252", name: "Database Management System Lab", credits: 2, faculty: "Mr. Anup Kumar Singh", semester: "3", department: "Computer Science", totalClasses: 30, description: "Practical database management systems" },
    { code: "23CAT251", name: "Database Management System", credits: 4, faculty: "Mr. Anup Kumar Singh", semester: "3", department: "Computer Science", totalClasses: 60, description: "Database theory and concepts" },
    { code: "23CAT253", name: "Artificial Intelligence", credits: 4, faculty: "Dr. Kiran Shashwat", semester: "3", department: "Computer Science", totalClasses: 60, description: "AI fundamentals and applications" },
    { code: "MEO361", name: "Automobile Engineering", credits: 3, faculty: "Er. Tarsem Singh", semester: "3", department: "Computer Science", totalClasses: 45, description: "Automotive systems and engineering" },
    { code: "23TDP273", name: "Soft Skill_TPP", credits: 2, faculty: "Ms. Jasmeet Kaur", semester: "3", department: "Computer Science", totalClasses: 30, description: "Professional soft skills development" },
    { code: "LFO441", name: "French", credits: 2, faculty: "Ms. Shivani Chadha", semester: "3", department: "Computer Science", totalClasses: 30, description: "French language fundamentals" },
    { code: "23UCT297", name: "Gender Equality and Empowerment", credits: 2, faculty: "Ms. Gurjit Kaur Parmar", semester: "3", department: "Computer Science", totalClasses: 30, description: "Gender studies and empowerment" },
    { code: "TTO202", name: "Professional Tour and Planning", credits: 1, faculty: "Ms. Bhawan Preet Kaur", semester: "3", department: "Computer Science", totalClasses: 15, description: "Professional tours and planning" }
];

// Initialize data function
async function initializeFirebaseData() {
    console.log("Starting Firebase data initialization with new data...");
    
    try {
        // Initialize students
        console.log("Initializing 40 students...");
        for (const student of students) {
            await setDoc(doc(db, "users", student.uid), {
                ...student,
                createdAt: new Date().toISOString()
            });
            console.log(`Created student: ${student.name} (${student.uid})`);
        }
        
        // Initialize faculty
        console.log("Initializing faculty...");
        for (const fac of faculty) {
            await setDoc(doc(db, "users", fac.uid), {
                ...fac,
                createdAt: new Date().toISOString()
            });
            console.log(`Created faculty: ${fac.name} (${fac.uid})`);
        }
        
        // Initialize admins
        console.log("Initializing admins...");
        for (const admin of admins) {
            await setDoc(doc(db, "users", admin.uid), {
                ...admin,
                createdAt: new Date().toISOString()
            });
            console.log(`Created admin: ${admin.name} (${admin.uid})`);
        }
        
        // Initialize subjects
        console.log("Initializing subjects...");
        for (const subject of subjects) {
            await setDoc(doc(db, "subjects", subject.code), subject);
            console.log(`Created subject: ${subject.name}`);
        }
        
        console.log("Firebase data initialization completed successfully!");
        console.log("\nLogin Credentials:");
        console.log("Students: STU001-STU040 @ wizup.edu (password: student123)");
        console.log("Faculty: rahul.singh, jasleen.kaur, anup.singh, etc. @ wizup.edu (password: faculty123)");
        console.log("Admin: priti.sharma @ wizup.edu (password: admin123)");
        
    } catch (error) {
        console.error("Error initializing Firebase data:", error);
    }
}

// Run initialization
initializeFirebaseData();
