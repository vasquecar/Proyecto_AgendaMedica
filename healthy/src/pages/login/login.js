//import './App.css';
import React from "react";
import "./main.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function login() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg" id="navbar">
        <a class="nav-link" id="textNav">
          Aqui va El logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" id="textNav" href="#">
                Home 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="textNav" href="#">
                About
              </a>
            </li>   
            <li class="nav-item">
              <a class="nav-link" id="textNav" href="#">
                Services
              </a>
            </li>
          </ul>
        </div>
        <form class="form">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>
    </div>
  );
}

export default login;
