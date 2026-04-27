import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Navbar.css";

// TODO: ILES-21: Add ROLE_NAV_LINK and ROLE_CONFIG constanst here
// TODO: ILES-22: Add brand/ clock JSX
// TODO: ILES-23: Add nav links JSX
// TODO: ILES-24: Add user controls and dropdown JSX

function Navbar() {
  // Placeholder -- next tickets will fill this in
  return (
    <header className="iles-navbar" role="banner">
      <p style={{ padding: "16px" }}>Navbar coming soon</p>
    </header>
  );
}

export default Navbar;
