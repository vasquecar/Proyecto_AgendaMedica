import React from "react";
import { useState } from "react";
import "./userprofile.css";
import Header from "../Header/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function UserProfile() {
  const [cards] = useState([
    {
      title: "ID User",
      text: `00136319`,
    },
    {
      title: "Times In Hospital",
      text: `991`,
    },
    {
      title: "Doctor",
      text: `Carlos Vasquez`,
    },
    {
      title: "Name",
      text: `William`,
    },
    {
      title: "Assisted Medical Appointments",
      text: `7777`,
    },
    {
      title: "Clinic or Hospital",
      text: `Bloom`,
    },
    {
        title: "Last Names",
        text: `Pineda`,
    },
    {
        title: "Unattended medical appointments",
        text: `007`,
    },
    {
        title: "Expenses",
        text: `$45098`,
    },

  ]);
  return (
    <>
    <Header/>
      <section>
        <div className="container">
          <h1>User Profile</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className="btn">Edit</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 

export default UserProfile;