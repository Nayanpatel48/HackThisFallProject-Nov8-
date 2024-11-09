import React, { useState, useEffect } from 'react';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAJ8sdQv4xkSKWicA2te_AB5A5CAUIrc-c",

    authDomain: "calculatedfarming.firebaseapp.com",

    projectId: "calculatedfarming",

    storageBucket: "calculatedfarming.firebasestorage.app",

    messagingSenderId: "788868871090",

    appId: "1:788868871090:web:666e2a66c24a01a88c6aab"

  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function Calculate({ email="sfmff@gmail.com" }) {
  const [landMeasurement, setLandMeasurement] = useState('');
  const [bottleSize, setBottleSize] = useState('');
  const [loading, setLoading] = useState(false);
  const [bottlesNeeded, setBottlesNeeded] = useState(null);
  const [history, setHistory] = useState([]);
  const [landUnit, setLandUnit] = useState('m2'); // Default to square meters

  useEffect(() => {
    // Check user authentication status
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchHistory(user.email);
      }
    });
  }, []);

  const convertLandMeasurement = (landSize, unit) => {
    switch(unit) {
      case 'ha':
        return landSize * 10000; // Convert hectares to square meters
      case 'ac':
        return landSize * 4046.86; // Convert acres to square meters
      case 'm2':
      default:
        return landSize; // Default is square meters
    }
  };

  const calculateBottles = () => {
    setLoading(true);
    setBottlesNeeded(null); // Reset the bottles needed when new calculation starts

    // Simulate processing time
    setTimeout(() => {
      // Convert land measurement to square meters
      const landSize = parseFloat(landMeasurement); // Assuming landMeasurement is in the selected unit
      const bottleVolume = parseFloat(bottleSize); // In milliliters

      if (landSize && bottleVolume) {
        const landInSquareMeters = convertLandMeasurement(landSize, landUnit);
        const requiredBottles = (landInSquareMeters * 1000) / bottleVolume; // Sample calculation
        setBottlesNeeded(Math.ceil(requiredBottles));
        saveToHistory(email, landMeasurement, bottleSize, Math.ceil(requiredBottles), landUnit);
      }
      setLoading(false);
    }, 2000);
  };

  const saveToHistory = async (userEmail, land, bottle, bottles, unit) => {
    try {
      const docRef = await addDoc(collection(db, "history"), {
        email: userEmail,
        landMeasurement: land,
        bottleSize: bottle,
        bottlesNeeded: bottles,
        landUnit: unit,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchHistory = async (userEmail) => {
    const querySnapshot = await getDocs(collection(db, "history"));
    const historyData = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().email === userEmail) {
        historyData.push(doc.data());
      }
    });
    setHistory(historyData);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Calculate Bottle Requirement</h1>
      
      {/* Input Fields */}
      <div className="bg-white text-gray-900 rounded-xl shadow-lg p-6 mb-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Enter Your Land and Bottle Details</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Land measurement"
              value={landMeasurement}
              onChange={(e) => setLandMeasurement(e.target.value)}
              className="p-4 w-3/4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              value={landUnit}
              onChange={(e) => setLandUnit(e.target.value)}
              className="p-4 border-2 border-gray-300 rounded-lg w-1/4 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="m2">Square Meters</option>
              <option value="ha">Hectares</option>
              <option value="ac">Acres</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Bottle size (mL)"
            value={bottleSize}
            onChange={(e) => setBottleSize(e.target.value)}
            className="p-4 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          onClick={calculateBottles}
          className="mt-6 bg-green-600 text-white py-3 px-6 rounded-full w-full hover:bg-green-700 transition duration-200"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Calculate'}
        </button>
      </div>

      {/* Processing Bar */}
      {loading && (
        <div className="mb-4">
          <div className="w-full bg-gray-300 h-2 rounded">
            <div className="bg-green-600 h-2 rounded" style={{ width: '100%' }}></div>
          </div>
        </div>
      )}

      {/* Calculation Result */}
      {bottlesNeeded !== null && (
        <div className="bg-green-300 p-6 rounded-lg shadow-lg text-center max-w-lg mx-auto">
          <p className="text-xl font-semibold">
            You will need {bottlesNeeded} bottles of {bottleSize} mL each to cover the land area of {landMeasurement} {landUnit}.
          </p>
        </div>
      )}
    </div>
  );
}

export default Calculate;
