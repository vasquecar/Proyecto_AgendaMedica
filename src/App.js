import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import MedicationSchedule from './pages/MedicationSchedule/MedicationSchedule';
import ExpensesTable from './pages/Expenses/Expenses';
import ExamRegistration from './pages/ExamRegistration/ExamRegistration';
import GraphicResults from './pages/GraphicResults/GraphicResults'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/> }></Route>
        <Route path="/Login" element={ <Login/> }></Route>
        <Route path="/MedicationSchedule" element={ <MedicationSchedule/> }></Route>
        <Route path="/UserProfile" element={  <UserProfile /> }></Route>
        <Route path="/ExpensesTable" element={ <ExpensesTable/> }></Route>
        <Route path="/ExamRegistration" element={ <ExamRegistration/>}></Route>
        <Route path="/GraphicResults" element={ <GraphicResults/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
