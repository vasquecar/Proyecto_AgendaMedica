import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import MedicationSchedule from './pages/MedicationSchedule/MedicationSchedule';
import ExpensesTable from './pages/Expenses/Expenses';


function App() {
  return (
    <div>
      <MedicationSchedule>

      </MedicationSchedule>
    </div>
  );
}

export default App;
