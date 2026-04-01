"use client";

import { User } from "../types";

// Fake user data
let user: User | null = null;

// Fake authentication functions
export const loginUser = (email?: string, password?: string): User => {
  console.log(`Attempting to log in with email: ${email}`);
  user = {
    name: "John Doe",
    email: email || "john@mail.com",
  };
  return user;
};

export const signupUser = (
  name?: string,
  email?: string,
  password?: string
): User => {
  console.log(`Attempting to sign up with name: ${name} and email: ${email}`);
  user = {
    name: name || "John Doe",
    email: email || "john@mail.com",
  };
  return user;
};

export const logoutUser = (): void => {
  user = null;
};

export const getUser = (): User | null => {
  return user;
};