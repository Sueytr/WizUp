// Firebase Configuration for WizUP University Portal
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, query, where, orderBy, limit, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// Global Firebase exports
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDB = db;
window.firebaseStorage = storage;
window.firebaseAnalytics = analytics;

// Utility functions
window.firebaseUtils = {
    // Authentication
    signIn: async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return { success: true, user: result.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    
    signUp: async (email, password, userData) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            // Save user data to Firestore
            await setDoc(doc(db, "users", result.user.uid), {
                ...userData,
                email: email,
                createdAt: serverTimestamp(),
                role: userData.role || "student"
            });
            return { success: true, user: result.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    
    signOut: async () => {
        try {
            await signOut(auth);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    
    getCurrentUser: () => {
        return auth.currentUser;
    },
    
    onAuthStateChanged: (callback) => {
        return onAuthStateChanged(auth, callback);
    },
    
    // Firestore operations
    getDocument: async (collectionName, docId) => {
        try {
            const docRef = doc(db, collectionName, docId);
            const docSnap = await getDoc(docRef);
            return { success: true, data: docSnap.exists() ? docSnap.data() : null };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    
    setDocument: async (collectionName, docId, data) => {
        try {
            const docRef = doc(db, collectionName, docId);
            await setDoc(docRef, { ...data, updatedAt: serverTimestamp() });
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    
    updateDocument: async (collectionName, docId, data) => {
        try {
            const docRef = doc(db, collectionName, docId);
            await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    
    addDocument: async (collectionName, data) => {
        try {
            const docRef = await addDoc(collection(db, collectionName), {
                ...data,
                createdAt: serverTimestamp()
            });
            return { success: true, id: docRef.id };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    
    queryDocuments: async (collectionName, constraints = []) => {
        try {
            const q = query(collection(db, collectionName), ...constraints);
            const querySnapshot = await getDocs(q);
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ id: doc.id, ...doc.data() });
            });
            return { success: true, data: documents };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    
    // Storage operations
    uploadFile: async (file, path) => {
        try {
            const storageRef = ref(storage, path);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            return { success: true, url: downloadURL };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
};

console.log('Firebase initialized successfully');
