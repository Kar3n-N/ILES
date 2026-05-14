import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap, Eye, EyeOff, Lock, User, Mail, Phone,
  Building2, BookOpen, AlertCircle, CheckCircle2, ArrowLeft,
  ChevronRight, ClipboardCheck, LayoutDashboard, Moon, Sun,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import "./RegisterPage.css";

const ROLES = [
  { value: "student",              label: "Student Intern",           icon: GraduationCap,   desc: "Submit weekly logs, track your internship",       color: "#1a365d" },
  { value: "workplace_supervisor", label: "Workplace Supervisor",     icon: ClipboardCheck,  desc: "Review logs from your assigned interns",          color: "#276749" },
  { value: "academic_supervisor",  label: "Academic Supervisor",      icon: BookOpen,        desc: "Evaluate and grade students academically",        color: "#c05621" },
  { value: "internship_admin",     label: "Internship Administrator", icon: LayoutDashboard, desc: "Manage placements, users & system data",          color: "#6b46c1" },
];
