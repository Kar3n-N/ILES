import React, { createContext,useState,useEffect,useCallback } from "react";


export const AuthCntext = createContext(null)



export const USER_ROLES = {
    STUDENT: "student",
    WORKPLACE_SUPERVISOR:"workplace_supervisor",
    ACADEMIC_SUPERVISOR:"academic_supervisor",
    ADMIN:"internship_admin",
};