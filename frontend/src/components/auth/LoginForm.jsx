import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { loginUser } from "../../services/api";
import { USER_ROLES } from "../../context/AuthContext";
import "./LoginForm.css";


const PASSWORD_RULES = {
    minLength: 8,
    maxLength: 16,
    hasUppercase: /[A-Z]/,
    hasLowercase: /[a-z]/,
    hasDigit: /[0-9]/,
    hasSpecialChar: /[!@#$%^&*()\-_=+[\]{}|;:'",.<>?/`~]/,
};


function validatePassword(password) {
    return {
        minLength: password.Length >=PASSWORD_RULES.minLength,
        maxLength: password.Length <=PASSWORD_RULES.maxLength,
        hasUppercase: PASSWORD_RULES.hasUppercase.test(password),
        hasLowercase: PASSWORD_RULES.hasLowercase.test(password),
        hasDigit: PASSWORD_RULES.hasLowercase.test(password),
        hasSpecialChar: PASSWORD_RULES.hasSpecialChar.test(password),
    };
}


function isPasswordValid(validationResult) {
    return Object.values(validationResult).every(Boolean);
}


function getDashboardRoute(role) {
    const routeMap = {
        [USER_ROLES.STUDENT]: "/student/dashboard",
        [USER_ROLES.WORKPLACE_SUPERVISOR]: "/supervisor/dashboard",
        [USER_ROLES.ACADEMIC_SUPERVISOR]: "/supervisor/dashboard",
        [USER_ROLES.ADMIN]: "/admin",
    };
    return routeMap[role] ??"/"
}


function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [apiError, setApiError] = useState("");
    const [showPasswordHints, setShowPasswordHints] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const passwordValidation = validatePassword(password);
    const passwordIsValid = isPasswordValid(passwordValidation);
    const formIsValid = username.trim().length > 0 && passwordIsValid;

    
}
