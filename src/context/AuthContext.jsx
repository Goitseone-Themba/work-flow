import { createContext, useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "../services/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (email, password) => {
    console.log("signup attempt with ", email, password);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        console.log(res)
      })
      .catch((err) => {
        console.error(err);
      });

  };

  const login = async (email, password) => {
    console.log("login attempt with ", email, password);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => res)
      .catch((err) => {
        console.error(err);
      });

    return res;
  };

  const logout = async () => {
    console.log("logout attempt.");
    await signOut(auth)
      .then((res) => res)
      .catch((err) => {
        console.error(err);
      });

    return res;
  };

  const isAuthenticated = () => {
    console.log("isAuth from context");
    return true;
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
