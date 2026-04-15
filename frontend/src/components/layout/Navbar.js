import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Navbar.css";

const ROLE_NAV_LINKS = {
    student: [
        { path: "/student/dashboard", label: "Dashboard" },
        { path: "/student/logbook", label: "My Logbook" },
    ],
    workplace_supervisor: [
        { path: "/supervisor/dashboard", label: "Dashboard" },
        { path: "supervisor/evaluation", label: "Evaluations" },
    ],
    academic_supervisor: [
        { path: "/supervisor/dashboard", label: "Dashboard" },
        { path: "/supervisor/evaluation", label: "Evaluations" },
    ],
    internship_admin: [
        { path: "/admin", label: "Admin Dashboard" },
    ],
};

function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const navlinks = ROLE_NAV_LINKS[user?.role]?? [];

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return 
}