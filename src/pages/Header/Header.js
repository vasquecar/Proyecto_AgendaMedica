import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-md " id="nav">
          <Link className="navbar-brand Item" to="/" target="_self">
            <img
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            Healthy Pocket
          </Link>
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <Link className="navbar-brand Item" to="/" target="_self">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="navbar-brand Item" to="/" target="_self">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="navbar-brand Item" to="/" target="_self">
                  Services
                </Link>
              </li>
            </ul>
            <div class="container">
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-6">
                  <ul class="navbar-nav">
                    <li>
                      <div class="Item">
                        <input
                          class="form-control mr-sm-2 pl-5"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </li>
                    <li>
                      <div>
                        <button
                          class="btn btn-light btn-background my-2 my-sm-0"
                          type="submit"
                        >
                          Search
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
