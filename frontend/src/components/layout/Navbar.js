import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Navbar.css";

// TODO: ILES-21: Add ROLE_NAV_LINK and ROLE_CONFIG constanst here
const ROLE_NAV_LINKS = {
  student: [
    { path: "/student/dashboard", label: "Overview", icon: "⌂" },
    { path: "/student/logbook", label: "My Logbook", icon: "✎" },
    { path: "/student/progress", label: "Progress", icon: "↗" },
  ],
  workplace_supervisor: [
    { path: "/supervisor/dashboard", label: "Dashboard", icon: "⌂" },
    { path: "/supervisor/evaluation", label: "Evaluations", icon: "★" },
  ],
  academic_supervisor: [
    { path: "/supervisor/dashboard", label: "Dashboard", icon: "⌂" },
    { path: "/supervisor/evaluation", label: "Evaluations", icon: "★" },
  ],
  internship_admin: [{ path: "/admin", label: "Admin Dashboard", icon: "⌂" }],
};

const ROLE_CONFIG = {
  student: {
    label: "Student",
    color: "#1a365d",
    accent: "#2b6cb0",
    badge: "STU",
  },
  workplace_supervisor: {
    label: "Supervisor",
    color: "#276749",
    accent: "#38a169",
    badge: "SUP",
  },
  academic_supervisor: {
    label: "Academic Sup.",
    color: "#c05621",
    accent: "#dd6b20",
    badge: "ACS",
  },
  internship_admin: {
    label: "Admin",
    color: "#6b46c1",
    accent: "#805ad5",
    badge: "ADM",
  },
};
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
